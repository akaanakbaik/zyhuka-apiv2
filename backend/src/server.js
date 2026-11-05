import { buildApp } from "./app.js";
import { PostgresStore } from "./store.js";

if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required");
const publicOrigin = new URL(
  process.env.PUBLIC_ORIGIN || "http://127.0.0.1:3100",
).origin;
const allowedOrigins = (
  process.env.CORS_ORIGINS || "https://zyhuka-apiv2.vercel.app"
)
  .split(",")
  .map((value) => new URL(value.trim()).origin);
// This mode assumes the container port is only reachable through the loopback
// binding / its own isolated Docker network. The host proxy must replace XFF.
const trustProxy =
  process.env.TRUST_PROXY === "private"
    ? [
        "127.0.0.0/8",
        "::1/128",
        "10.0.0.0/8",
        "172.16.0.0/12",
        "192.168.0.0/16",
      ]
    : false;
const store = new PostgresStore(process.env.DATABASE_URL);
let app;
try {
  app = await buildApp({
    store,
    origin: publicOrigin,
    allowedOrigins,
    trustProxy,
    logger: { level: "info" },
  });
  await app.listen({
    host: process.env.HOST || "127.0.0.1",
    port: Number(process.env.PORT || 3100),
  });
} catch (error) {
  console.error(
    JSON.stringify({
      event: "zyhuka_startup_failed",
      code: error.code || "STARTUP_ERROR",
    }),
  );
  await store.close();
  process.exit(1);
}
let stopping = false;
async function stop() {
  if (stopping) return;
  stopping = true;
  const deadline = setTimeout(() => process.exit(1), 15000);
  deadline.unref();
  try {
    await app.close();
    clearTimeout(deadline);
  } catch {
    process.exitCode = 1;
  }
}
process.on("SIGTERM", stop);
process.on("SIGINT", stop);
