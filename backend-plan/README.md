# Zyhuka backend VPS — preparation only

Frontend: Vercel. Intended API domain: `https://zyhukav2.akaa.dev`. The VPS runs Ubuntu 24 and already hosts **Pterodactyl and gate-ptero**. Both are protected workloads: preserve their services, configurations, networks, volumes, domains and data.

No backend or database has been installed, no VPS files have been changed, and the frontend still uses the original public API. SSH credentials/transport have not been configured in the current execution environment. An HTTP check to the intended API domain was rejected by the environment proxy (CONNECT 403); this does not establish a fault on the VPS.

## Contract inventory

`endpoint-inventory.csv` enumerates the local OpenAPI snapshot: 197 paths and 394 GET/POST operations. Every operation is marked `not_implemented` for the new backend. It documents request contracts to investigate, not a set of working handlers. The snapshot may differ from today's upstream service.

Implementation needs independent handlers, data sources, validation and tests. AI and third-party services may require separately configured provider credentials. Replacing the API base URL alone does not recreate the endpoints. An upstream-forwarding gateway also would not make these independently implemented APIs.

## Addition alongside existing workloads

1. Establish an authorized SSH connection with host identity verification. Run the read-only audit at `ops/vps-readonly-audit.py`; inspect the existing reverse proxy configuration only after access is available. Do not restart or modify the existing workloads during this audit.
2. Choose the runtime and database after checking available CPU/RAM/disk. A modular Node.js/TypeScript API with a separate PostgreSQL instance is a candidate, not an installed or committed requirement.
3. Isolate the application in its own directory, service/container names, network and database volume. Select a free loopback API port after the inventory. Keep the database internal; do not take over Pterodactyl/Wings/gate-ptero ports or volumes. Do not prune shared Docker resources.
4. Add a separate virtual host for `zyhukav2.akaa.dev` to the existing proxy if compatible. Do not replace its global configuration or install a competing listener on 80/443. Validate the proposed configuration before a reload; preserve the previous configuration for rollback.
5. Implement health/readiness, a truthful `/api/openapi.json` for implemented operations, and `/ws` for the Monitor contract. Add request validation, bounded upstream timeouts and consistent error responses. Keep provider/database credentials exclusively on the VPS.
6. Implement endpoints in batches with fixture and live-provider tests. Start with low-dependency tools/info operations, then search/download/media, then provider-dependent AI. Database responsibilities and caching should follow actual workload needs rather than persisting every response.
7. After TLS, CORS, API handlers and Monitor tests pass, point the frontend at the new backend:

```js
specUrl: 'https://zyhukav2.akaa.dev/api/openapi.json',
websocketUrl: 'wss://zyhukav2.akaa.dev/ws',
apiBaseUrl: 'https://zyhukav2.akaa.dev',
```

Until that point, retain the existing frontend service addresses. Domain DNS, certificates, runtime dependencies and installed database state have not been verified from inside the VPS.
