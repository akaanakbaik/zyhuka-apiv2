import test from "node:test";
import assert from "node:assert/strict";
import { once } from "node:events";
import { buildApp } from "../src/app.js";

class MemoryStore {
  async migrate(routes) {
    this.routes = routes;
  }
  async ping() {
    if (this.unavailable) throw new Error("offline");
  }
  async load() {
    return this.saved ?? null;
  }
  async save(value) {
    this.saved = structuredClone(value);
  }
  async close() {
    this.closed = true;
  }
}

test("standalone endpoints validate input, expose a truthful catalog and persist aggregates", async (t) => {
  const store = new MemoryStore(),
    app = await buildApp({ store });
  t.after(() => app.close());
  const spec = (await app.inject("/api/openapi.json")).json();
  assert.equal(Object.keys(spec.paths).length, 5);
  assert.ok(!spec.paths["/api/ai/duckai"]);
  assert.equal(
    (await app.inject("/api/ai/duckai?prompt=hello")).statusCode,
    404,
  );
  const encoded = (
    await app.inject("/api/tools/base64?text=Halo%20Zyhuka")
  ).json();
  assert.equal(encoded.data.result, "SGFsbyBaeWh1a2E=");
  const decoded = await app.inject({
    method: "POST",
    url: "/api/tools/base64",
    payload: { text: encoded.data.result, action: "decode" },
  });
  assert.equal(decoded.json().data.result, "Halo Zyhuka");
  assert.equal(
    (await app.inject("/api/tools/base64?text=!!!&action=decode")).statusCode,
    400,
  );
  assert.equal((await app.inject("/api/tools/hash")).statusCode, 400);
  assert.equal(
    (await app.inject("/api/tools/hash?text=abc&algorithm=md5")).statusCode,
    400,
  );
  assert.equal(
    (await app.inject("/api/tools/hash?text=abc&unknown=1")).statusCode,
    400,
  );
  assert.equal(
    (await app.inject("/api/tools/hash?text=abc")).json().data.result,
    "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad",
  );
  assert.equal((await app.inject("/api/tools/uuid?count=11")).statusCode, 400);
  const uuids = (await app.inject("/api/tools/uuid?count=3")).json().data
    .result;
  assert.equal(new Set(uuids).size, 3);
  assert.match(
    uuids[0],
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
  );
  for (const level of [
    "noob",
    "easy",
    "medium",
    "hard",
    "extreme",
    "impossible5",
  ]) {
    const res = (await app.inject(`/api/games/maths?level=${level}`)).json();
    assert.equal(res.success, true);
    assert.ok(Number.isSafeInteger(res.data.answer));
    const [a, op, b] = res.data.question.split(" ");
    const expected =
      op === "+"
        ? +a + +b
        : op === "-"
          ? +a - +b
          : op === "×"
            ? +a * +b
            : +a / +b;
    assert.equal(res.data.answer, expected);
  }
  for (const [path, item] of Object.entries(spec.paths)) {
    for (const method of Object.keys(item)) {
      const payload =
        path.includes("hash") || path.includes("base64")
          ? { text: "test" }
          : {};
      const url = method === "get" && payload.text ? `${path}?text=test` : path;
      assert.equal(
        (
          await app.inject({
            method: method.toUpperCase(),
            url,
            ...(method === "post" ? { payload } : {}),
          })
        ).statusCode,
        200,
        `${method} ${path}`,
      );
    }
  }
  assert.equal((await app.inject("/readyz")).statusCode, 200);
  store.unavailable = true;
  assert.equal((await app.inject("/readyz")).statusCode, 503);
  assert.equal((await app.inject("/healthz")).statusCode, 200);
  store.unavailable = false;
  await app.flushMetrics();
  assert.ok(store.saved.counts["/api/tools/hash"].requests > 0);
  const checkpoint = JSON.stringify(store.saved);
  assert.ok(!checkpoint.includes("SGFsbyBaeWh1a2E="));
  assert.ok(!checkpoint.includes("user_agent"));
});

test("rate limits, body limits and CORS policies are applied", async (t) => {
  const app = await buildApp({ store: new MemoryStore(), rateMax: 2 });
  t.after(() => app.close());
  for (let i = 0; i < 2; i++)
    assert.equal((await app.inject("/api/tools/uuid")).statusCode, 200);
  assert.equal((await app.inject("/api/tools/uuid")).statusCode, 429);
  assert.equal((await app.inject("/healthz")).statusCode, 200);
  const allowed = await app.inject({
    url: "/healthz",
    headers: { origin: "https://zyhuka-apiv2.vercel.app" },
  });
  assert.equal(
    allowed.headers["access-control-allow-origin"],
    "https://zyhuka-apiv2.vercel.app",
  );
  const blocked = await app.inject({
    url: "/healthz",
    headers: { origin: "https://unrelated.example" },
  });
  assert.equal(blocked.headers["access-control-allow-origin"], undefined);
  const oversized = await app.inject({
    method: "POST",
    url: "/api/tools/hash",
    headers: { "content-type": "application/json" },
    payload: JSON.stringify({ text: "x".repeat(70000) }),
    remoteAddress: "192.0.2.4",
  });
  assert.equal(oversized.statusCode, 413);
});

test("Monitor WebSocket sends the frontend contract with real counters and cleans up", async (t) => {
  const app = await buildApp({ store: new MemoryStore(), socketMs: 100 });
  t.after(() => app.close());
  await app.inject("/api/tools/uuid");
  await app.ready();
  const ws = await app.injectWS("/ws", {
    headers: { origin: "https://zyhuka-apiv2.vercel.app" },
  });
  t.after(() => ws.terminate());
  const [data] = await once(ws, "message");
  const frame = JSON.parse(data.toString());
  assert.equal(frame.type, "stats");
  assert.equal(frame.endpoint_catalog.length, 5);
  assert.equal(frame.data.metrics.total_requests, 1);
  assert.equal(
    frame.data.traffic.recent_requests[0].endpoint,
    "/api/tools/uuid",
  );
  assert.ok(
    !Number.isNaN(Date.parse(frame.data.traffic.recent_requests[0].ts)),
  );
  assert.equal(frame.data.traffic.recent_requests[0].ip, "not collected");
  assert.equal(frame.data.attacks.supported, false);
  assert.equal(frame.endpoint_catalog[0].aether.bayesian_confidence, "N/A");
});
