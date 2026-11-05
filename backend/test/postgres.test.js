import test from "node:test";
import assert from "node:assert/strict";
import { PostgresStore } from "../src/store.js";
import { routes } from "../src/routes.js";

test(
  "PostgreSQL migrations, registry and checkpoints survive reconnect",
  { skip: !process.env.TEST_DATABASE_URL },
  async () => {
    const store = new PostgresStore(process.env.TEST_DATABASE_URL);
    try {
      // Only the dedicated integration-test database; production schema is created by init-app.sh.
      if (process.env.TEST_CREATE_SCHEMA === "1")
        await store.pool.query("CREATE SCHEMA IF NOT EXISTS zyhuka");
      await store.migrate(routes);
      await store.migrate(routes);
      await store.ping();
      const enabled = await store.pool.query(
        "SELECT path FROM zyhuka.endpoint_registry WHERE enabled",
      );
      assert.equal(enabled.rowCount, 5);
      await store.save({
        counts: { "/api/tools/hash": { requests: 7, errors: 0, totalMs: 9 } },
      });
    } finally {
      await store.close();
    }
    const reconnected = new PostgresStore(process.env.TEST_DATABASE_URL);
    try {
      assert.equal(
        (await reconnected.load()).counts["/api/tools/hash"].requests,
        7,
      );
    } finally {
      await reconnected.close();
    }
  },
);
