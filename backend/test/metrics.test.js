import test from "node:test";
import assert from "node:assert/strict";
import { Metrics } from "../src/metrics.js";
import { routes } from "../src/routes.js";

test("metric counters survive checkpoints, latency is EWMA, unknown paths stay bounded", () => {
  const metrics = new Metrics(routes);
  metrics.record("/api/tools/hash", "GET", 200, 10);
  metrics.record("/api/tools/hash", "POST", 400, 30);
  for (let i = 0; i < 100; i++) metrics.record("/unknown-" + i, "GET", 404, 1);
  const frame = metrics.snapshot();
  assert.equal(frame.data.metrics.total_requests, 102);
  assert.equal(frame.data.errors.total, 101);
  assert.equal(
    frame.endpoint_catalog.find((v) => v.endpoint === "/api/tools/hash")
      .nodes[0].ewma_latency_ms,
    17,
  );
  assert.equal(Object.keys(metrics.counts).length, 6);
  assert.equal(metrics.recent.length, 5);
  assert.ok(!JSON.stringify(metrics.checkpoint()).includes("/unknown-"));
  const restored = new Metrics(routes, metrics.checkpoint());
  assert.equal(restored.snapshot().data.metrics.total_requests, 102);
  restored.record("/api/tools/hash", "GET", 200, 50);
  assert.equal(
    restored
      .snapshot()
      .endpoint_catalog.find((v) => v.endpoint === "/api/tools/hash").nodes[0]
      .ewma_latency_ms,
    28.55,
  );
});
