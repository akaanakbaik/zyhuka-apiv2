import Fastify, { LogController } from "fastify";
import cors from "@fastify/cors";
import rateLimit from "@fastify/rate-limit";
import websocket from "@fastify/websocket";
import { routes, openapi } from "./routes.js";
import { Metrics } from "./metrics.js";

export async function buildApp({
  store,
  origin = "http://127.0.0.1:3100",
  allowedOrigins = ["https://zyhuka-apiv2.vercel.app"],
  logger = false,
  trustProxy = false,
  rateMax = 120,
  flushMs = 10000,
  socketMs = 2000,
} = {}) {
  if (!store) throw new Error("A database store is required");
  await store.migrate(routes);
  const metrics = new Metrics(routes, await store.load());
  const app = Fastify({
    logger,
    logController: new LogController({ disableRequestLogging: () => true }),
    bodyLimit: 65536,
    requestTimeout: 15000,
    connectionTimeout: 10000,
    trustProxy,
    ajv: { customOptions: { removeAdditional: false } },
  });
  let databaseHealthy = true,
    lastSaveError = null,
    flushing = null;
  app.decorate("metrics", metrics);
  async function flush() {
    if (flushing) return flushing;
    flushing = store
      .save(metrics.checkpoint())
      .then(() => {
        databaseHealthy = true;
        lastSaveError = null;
      })
      .catch((error) => {
        databaseHealthy = false;
        lastSaveError = error;
        app.log.error(
          { code: error.code || "DB_CHECKPOINT_FAILED" },
          "Zyhuka metrics checkpoint failed",
        );
      })
      .finally(() => {
        flushing = null;
      });
    return flushing;
  }
  app.decorate("flushMetrics", flush);
  await app.register(cors, {
    origin: (value, callback) =>
      callback(null, !value || allowedOrigins.includes(value)),
    credentials: false,
    methods: ["GET", "POST", "OPTIONS"],
    maxAge: 600,
  });
  await app.register(rateLimit, {
    max: rateMax,
    timeWindow: "1 minute",
    allowList: (request) =>
      ["/healthz", "/readyz"].includes(request.routeOptions.url),
  });
  await app.register(websocket, {
    options: { maxPayload: 1024, perMessageDeflate: false },
  });

  app.addHook("onResponse", async (request, reply) => {
    const path = request.routeOptions.url;
    if (
      ["/healthz", "/readyz", "/api/openapi.json", "/ws"].includes(path) ||
      request.method === "OPTIONS"
    )
      return;
    metrics.record(path, request.method, reply.statusCode, reply.elapsedTime);
  });
  app.addHook("onSend", async (request, reply, payload) => {
    if (request.routeOptions.url !== "/api/openapi.json")
      reply.header("Cache-Control", "no-store");
    return payload;
  });
  app.setErrorHandler((error, request, reply) => {
    const status =
      error.statusCode >= 400 && error.statusCode < 600
        ? error.statusCode
        : 500;
    if (status >= 500)
      app.log.error(
        { code: error.code || "INTERNAL_ERROR", requestId: request.id },
        "Zyhuka API request failed",
      );
    reply.code(status).send({
      success: false,
      error: {
        code:
          status === 429
            ? "RATE_LIMITED"
            : status >= 500
              ? "INTERNAL_ERROR"
              : "INVALID_REQUEST",
        message:
          status === 429
            ? "Terlalu banyak request. Coba lagi sebentar."
            : status >= 500
              ? "Terjadi kesalahan server."
              : "Parameter atau format request tidak valid.",
      },
      request_id: request.id,
    });
  });
  app.setNotFoundHandler((request, reply) =>
    reply.code(404).send({
      success: false,
      error: {
        code: "NOT_FOUND",
        message: "Endpoint belum tersedia di backend Zyhuka.",
      },
    }),
  );
  app.get("/healthz", () => ({
    success: true,
    service: "zyhuka-api",
    version: "0.1.0",
  }));
  app.get("/readyz", async (request, reply) => {
    try {
      await store.ping();
      databaseHealthy = true;
      return { success: true, database: "ready" };
    } catch {
      databaseHealthy = false;
      return reply.code(503).send({ success: false, database: "unavailable" });
    }
  });
  app.get("/api/openapi.json", (request, reply) =>
    reply.header("Cache-Control", "public, max-age=60").send(openapi(origin)),
  );
  for (const route of routes) {
    const input = {
      type: "object",
      additionalProperties: false,
      properties: route.properties,
      required: route.required,
    };
    for (const method of ["GET", "POST"])
      app.route({
        method,
        url: route.path,
        schema: { [method === "GET" ? "querystring" : "body"]: input },
        handler: async (request) => ({
          success: true,
          data: await route.run(
            method === "GET" ? request.query : request.body,
          ),
          request_id: request.id,
        }),
      });
  }
  function snapshot() {
    const result = metrics.snapshot(app.websocketServer.clients.size);
    if (!databaseHealthy) {
      result.healthy_nodes = 0;
      result.nodes[0].status = "degraded";
    }
    result.monitoring.database = databaseHealthy ? "ready" : "unavailable";
    return JSON.stringify(result);
  }
  app.get(
    "/ws",
    {
      websocket: true,
      preValidation: async (request, reply) => {
        if (
          request.headers.origin &&
          !allowedOrigins.includes(request.headers.origin)
        )
          return reply.code(403).send({ success: false });
        if (app.websocketServer.clients.size >= 25)
          return reply.code(503).send({ success: false });
      },
    },
    (socket) => {
      socket.on("error", () => {});
      socket.on("message", () => socket.close(1008, "Server-push stream only"));
      // Give injection/real clients a chance to attach their message listeners.
      setImmediate(() => {
        if (socket.readyState === 1) socket.send(snapshot());
      });
    },
  );
  const flushTimer = setInterval(flush, flushMs);
  flushTimer.unref();
  const socketTimer = setInterval(() => {
    if (!app.websocketServer.clients.size) return;
    const payload = snapshot();
    for (const socket of app.websocketServer.clients) {
      if (socket.bufferedAmount > 65536) {
        socket.close(1013, "Client too slow");
        continue;
      }
      if (socket.readyState === 1) socket.send(payload);
    }
  }, socketMs);
  socketTimer.unref();
  app.addHook("preClose", async () => {
    clearInterval(flushTimer);
    clearInterval(socketTimer);
    for (const socket of app.websocketServer.clients) socket.terminate();
  });
  app.addHook("onClose", async () => {
    if (flushing) await flushing;
    await flush();
    await store.close();
    if (lastSaveError)
      app.log.error(
        { code: "DB_FINAL_CHECKPOINT_FAILED" },
        "Metrics since the last successful checkpoint may be lost",
      );
  });
  return app;
}
