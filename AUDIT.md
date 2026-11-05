# Audit Zyhuka claymorphism

Updated 5 November 2026. The UI intentionally differs from the reference snapshot. Original pixel/AST parity is no longer the goal; those assertions were replaced with checks for the requested design and sponsor removal.

| Area | Verified behaviour |
| --- | --- |
| Home | Request/response example tabs, clipboard and accessible copy status |
| Themes | Light default, dark/light switch, persisted preference |
| Menus | Community dropdown, outside dismissal, mobile menu and scroll lock |
| FAQ | Expand/collapse and aria-expanded |
| Sponsor removal | No sponsor popup, names, URLs or logo files in production package |
| Playground | Catalog loading, filter, empty results, expansion, executing/disabled state, JSON response, Headers/cURL, copy and Clear |
| Monitor | Initial loading, first stats, LIVE status, cache, pagination, detail dialog and Escape |
| Services | Catalog fallback and configurable API base URL |
| Hosting | Five route URLs, module imports, local fonts/assets, 404/405 |
| Accessibility | Focus styles, reduced-motion stylesheet, polite example-copy feedback |

Run npm ci, npm run build, then npm test. Tests use happy-dom and isolated HTTP requests. Fetch, clipboard, WebSocket and canvas are simulated: this does not validate all external endpoints, actual CORS policy, pixel placement, canvas rendering or GPU animation smoothness.

Monitor retains its previous hook-order, chart initialization and WebSocket cleanup repairs. External API/Status/community links still target the original services; rebranding does not provision a new backend.

GitHub Actions runs the same suite. Deployment and live HTTP results are reported separately at publication time.
