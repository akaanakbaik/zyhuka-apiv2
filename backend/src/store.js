import pg from "pg";

export class PostgresStore {
  constructor(connectionString) {
    this.pool = new pg.Pool({
      connectionString,
      max: 5,
      connectionTimeoutMillis: 5000,
      idleTimeoutMillis: 30000,
      statement_timeout: 5000,
    });
    // Pool errors otherwise become unhandled events; readiness will expose failure.
    this.pool.on("error", () => {
      this.lastPoolError = true;
    });
  }
  async migrate(routes) {
    const client = await this.pool.connect();
    try {
      await client.query("BEGIN");
      await client.query("SELECT pg_advisory_xact_lock(1986021701)");
      await client.query(`CREATE TABLE IF NOT EXISTS zyhuka.schema_versions (version integer PRIMARY KEY, applied_at timestamptz NOT NULL DEFAULT now());
        CREATE TABLE IF NOT EXISTS zyhuka.endpoint_registry (path text PRIMARY KEY, category text NOT NULL, summary text NOT NULL, enabled boolean NOT NULL DEFAULT true, updated_at timestamptz NOT NULL DEFAULT now());
        CREATE TABLE IF NOT EXISTS zyhuka.runtime_checkpoint (id text PRIMARY KEY, payload jsonb NOT NULL CHECK (jsonb_typeof(payload) = 'object'), updated_at timestamptz NOT NULL DEFAULT now());
        INSERT INTO zyhuka.schema_versions (version) VALUES (1) ON CONFLICT DO NOTHING;`);
      for (const route of routes)
        await client.query(
          "INSERT INTO zyhuka.endpoint_registry (path, category, summary, enabled) VALUES ($1,$2,$3,true) ON CONFLICT (path) DO UPDATE SET category=EXCLUDED.category, summary=EXCLUDED.summary, enabled=true, updated_at=now()",
          [route.path, route.tag, route.summary],
        );
      await client.query(
        "UPDATE zyhuka.endpoint_registry SET enabled=false WHERE NOT (path = ANY($1::text[]))",
        [routes.map((route) => route.path)],
      );
      await client.query("COMMIT");
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
  }
  async ping() {
    await this.pool.query("SELECT 1");
    this.lastPoolError = false;
  }
  async load() {
    return (
      (
        await this.pool.query(
          "SELECT payload FROM zyhuka.runtime_checkpoint WHERE id='metrics-v1'",
        )
      ).rows[0]?.payload ?? null
    );
  }
  async save(payload) {
    await this.pool.query(
      "INSERT INTO zyhuka.runtime_checkpoint (id,payload) VALUES ('metrics-v1',$1::jsonb) ON CONFLICT (id) DO UPDATE SET payload=EXCLUDED.payload,updated_at=now()",
      [JSON.stringify(payload)],
    );
  }
  async close() {
    await this.pool.end();
  }
}
