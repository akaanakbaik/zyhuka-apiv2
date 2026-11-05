const config = window.ZYHUKA_CONFIG;
let cached;

async function fetchCatalog(settings) {
  let response;
  try {
    response = await fetch(settings.specUrl, {
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) throw new Error(`OpenAPI: HTTP ${response.status}`);
    const spec = await response.json();
    if (!spec.paths) throw new Error("Invalid OpenAPI catalog");
    if (settings.apiBaseUrl) spec.servers = [{ url: settings.apiBaseUrl }];
    return { json: JSON.stringify(spec), ttl: 300000 };
  } catch (error) {
    if (!settings.catalogFallback) throw error;
    response = await fetch("/openapi.snapshot.json");
    if (!response.ok) throw error;
    const spec = await response.json();
    if (!spec.paths) throw new Error("Invalid fallback catalog");
    if (settings.apiBaseUrl) spec.servers = [{ url: settings.apiBaseUrl }];
    console.info(
      "Katalog menggunakan snapshot lokal; eksekusi endpoint tetap memakai API online.",
    );
    return { json: JSON.stringify(spec), ttl: 60000 };
  }
}

export async function loadCatalog() {
  const settings = {
    specUrl: config.specUrl,
    apiBaseUrl: config.apiBaseUrl,
    catalogFallback: config.catalogFallback,
  };
  const key = JSON.stringify(settings);
  if (!cached || cached.key !== key || cached.expires <= Date.now()) {
    const entry = { key, expires: Infinity };
    entry.promise = fetchCatalog(settings)
      .then((result) => {
        entry.expires = Date.now() + result.ttl;
        return result.json;
      })
      .catch((error) => {
        if (cached === entry) cached = undefined;
        throw error;
      });
    cached = entry;
  }
  const json = await cached.promise;
  return new Response(json, {
    headers: { "Content-Type": "application/json" },
  });
}
