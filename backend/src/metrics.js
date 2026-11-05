import { cpus, totalmem } from "node:os";
import { statfsSync } from "node:fs";

export class Metrics {
  constructor(routes, checkpoint = null) {
    this.paths = new Set(routes.map((route) => route.path));
    this.counts = {};
    for (const path of [...this.paths, "__unmatched__"]) {
      const old = checkpoint?.counts?.[path];
      this.counts[path] = {
        requests: Number(old?.requests) || 0,
        errors: Number(old?.errors) || 0,
        totalMs: Number(old?.totalMs) || 0,
        ewmaMs: Number(old?.ewmaMs) || 0,
      };
    }
    this.history = checkpoint?.history ?? {};
    this.errorHistory = checkpoint?.errorHistory ?? {};
    this.hourly = checkpoint?.hourly ?? {};
    this.buckets = checkpoint?.buckets ?? {};
    this.recent = [];
    this.latencies = [];
    this.prune();
  }
  prune() {
    const dayCutoff = new Date(Date.now() - 30 * 86400000)
      .toISOString()
      .slice(0, 10);
    for (const map of [this.history, this.errorHistory])
      for (const day of Object.keys(map)) if (day < dayCutoff) delete map[day];
    const hourCutoff = new Date(Date.now() - 24 * 3600000)
      .toISOString()
      .slice(0, 13);
    for (const path of Object.keys(this.hourly)) {
      if (!this.paths.has(path)) {
        delete this.hourly[path];
        continue;
      }
      for (const hour of Object.keys(this.hourly[path]))
        if (hour < hourCutoff) delete this.hourly[path][hour];
    }
  }
  record(path, method, status, duration) {
    const key = this.paths.has(path) ? path : "__unmatched__";
    const value = this.counts[key];
    value.requests++;
    if (status >= 400) value.errors++;
    value.totalMs += duration;
    value.ewmaMs =
      value.requests === 1 ? duration : value.ewmaMs * 0.65 + duration * 0.35;
    const now = new Date().toISOString(),
      day = now.slice(0, 10),
      hour = now.slice(0, 13);
    this.history[day] = (this.history[day] || 0) + 1;
    if (status >= 400)
      this.errorHistory[day] = (this.errorHistory[day] || 0) + 1;
    if (this.paths.has(path)) {
      this.hourly[path] ??= {};
      this.hourly[path][hour] = (this.hourly[path][hour] || 0) + 1;
    }
    const bucket = `${Math.floor(status / 100)}xx`;
    this.buckets[bucket] = (this.buckets[bucket] || 0) + 1;
    // Do not collect query strings, request bodies, raw IP addresses or user agents.
    this.recent.unshift({
      ts: now,
      method: ["GET", "POST"].includes(method) ? method : "OTHER",
      endpoint: key,
      ip: "not collected",
      user_agent: "not collected",
      status,
      latency_ms: Math.round(duration),
    });
    this.recent.length = Math.min(this.recent.length, 5);
    this.latencies.push(duration);
    if (this.latencies.length > 20) this.latencies.shift();
    this.prune();
  }
  checkpoint() {
    return structuredClone({
      counts: this.counts,
      history: this.history,
      errorHistory: this.errorHistory,
      hourly: this.hourly,
      buckets: this.buckets,
    });
  }
  snapshot(connections = 0) {
    const total = Object.values(this.counts).reduce(
      (n, v) => n + v.requests,
      0,
    );
    const errors = Object.values(this.counts).reduce((n, v) => n + v.errors, 0);
    const memoryTotal = process.constrainedMemory?.() || totalmem();
    const rss = process.memoryUsage().rss;
    let disk = {};
    try {
      const fs = statfsSync(process.cwd());
      disk = {
        disk_total_gb: +((fs.blocks * fs.bsize) / 1e9).toFixed(2),
        disk_used_gb: +(((fs.blocks - fs.bfree) * fs.bsize) / 1e9).toFixed(2),
        disk_usage_percent: +(
          ((fs.blocks - fs.bfree) / fs.blocks) *
          100
        ).toFixed(1),
      };
    } catch {}
    const node = {
      name: "ZYHUKA-API",
      status: "healthy",
      latency_ms: Math.round(
        this.latencies.reduce((a, b) => a + b, 0) /
          (this.latencies.length || 1),
      ),
      conns: connections,
      system: {
        cpu_model: cpus()[0]?.model ?? "unknown",
        cpu_cores: cpus().length,
        memory_used_mb: Math.round(rss / 1e6),
        memory_total_mb: Math.round(memoryTotal / 1e6),
        memory_usage_percent: +((rss / memoryTotal) * 100).toFixed(1),
        runtime_engine: "Node.js",
        runtime_version: process.version,
        ...disk,
      },
    };
    const endpoint_catalog = [...this.paths]
      .map((endpoint) => {
        const c = this.counts[endpoint],
          rate = c.requests ? (c.errors / c.requests) * 100 : 0;
        return {
          endpoint,
          requests: c.requests,
          success_rate: +(100 - rate).toFixed(2),
          error_rate: +rate.toFixed(2),
          aether: {
            bayesian_confidence: "N/A",
            kalman_uncertainty: "N/A",
            lyapunov_exponent: "N/A",
            stability_class: "not measured",
          },
          nodes: [
            {
              node: node.name,
              success: c.requests - c.errors,
              fail: c.errors,
              ewma_latency_ms: +c.ewmaMs.toFixed(2),
            },
          ],
        };
      })
      .sort((a, b) => b.requests - a.requests);
    return {
      type: "stats",
      healthy_nodes: 1,
      total_nodes: 1,
      nodes: [node],
      endpoint_catalog,
      monitoring: {
        uptime_sec: Math.floor(process.uptime()),
        active_connections: connections,
        avg_latency_ms_recent: +(
          this.latencies.reduce((a, b) => a + b, 0) /
          (this.latencies.length || 1)
        ).toFixed(2),
        failover_rate_recent: 0,
        avg_node_fail_rate: total ? +((errors / total) * 100).toFixed(2) : 0,
        status_buckets: this.buckets,
        attack_detection: "not implemented",
      },
      data: {
        metrics: {
          total_hits: total,
          total_requests: total,
          request_history: this.history,
        },
        errors: {
          total: errors,
          by_endpoint: Object.fromEntries(
            Object.entries(this.counts).map(([path, c]) => [path, c.errors]),
          ),
          error_history: this.errorHistory,
        },
        attacks: { total: 0, attack_history: {}, supported: false },
        traffic: {
          recent_requests: this.recent,
          status_buckets: this.buckets,
          endpoint_hits: Object.fromEntries(
            endpoint_catalog.map((v) => [v.endpoint, v.requests]),
          ),
          endpoint_hourly_24h: this.hourly,
        },
        updatedAt: new Date().toISOString(),
      },
    };
  }
}
