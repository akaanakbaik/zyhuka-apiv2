# Frontend performance update

Measured from built artifacts on 5 November 2026. Initial JS includes the entry, hero, service loader and shared vendor runtime. It excludes Monitor, which is now loaded on demand.

| Metric | Before | After | Reduction |
| --- | ---: | ---: | ---: |
| Initial JavaScript, uncompressed | 950.7 KB | 283.7 KB | 70.2% |
| Sum of per-file gzip estimates | 225.8 KB | 89.3 KB | 60.5% |

These are file-size measurements, not browser FPS, Lighthouse, LCP, CLS or real-user latency results. Actual wire sizes depend on HTTP compression and cache state. Opening Monitor downloads its separate module.

Changes: removed the unused popup library and injected CSS; deferred chart initialization/module loading to Monitor navigation; minified production JS/CSS with esbuild; converted Mono fonts to WOFF2, removed unused legacy font files and preloaded key Satoshi weights; cached/deduplicated catalog requests in memory (five minutes online, one minute fallback); deferred search results while keeping input updates urgent; memoized endpoint rows with stable path keys; skipped offscreen category/section paint; paused decorative motion outside the viewport or on hidden pages; replaced procedural SVG grain with a static CSS texture; reduced backdrop blur and mobile shadow layers; added active navigation and an accessible back-to-top control.

The performance test enforces an initial JS budget of 320 KiB and rejects eager Monitor imports. Interaction tests cover lazy loading, search, themes, request/response flows, Monitor, copy feedback and back-to-top. Existing backend service URLs remain unchanged until the new VPS backend is implemented and verified.
