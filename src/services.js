const config = window.ZYHUKA_CONFIG;

export async function loadCatalog() {
  let response;
  try {
    response = await fetch(config.specUrl, { signal: AbortSignal.timeout(15000) });
    if (!response.ok) throw new Error(`OpenAPI: HTTP ${response.status}`);
    const spec = await response.json();
    if (!spec.paths) throw new Error('Invalid OpenAPI catalog');
    if (config.apiBaseUrl) spec.servers = [{ url: config.apiBaseUrl }];
    return new Response(JSON.stringify(spec), { headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    if (!config.catalogFallback) throw error;
    response = await fetch('/openapi.snapshot.json');
    if (!response.ok) throw error;
    const spec = await response.json();
    if (config.apiBaseUrl) spec.servers = [{ url: config.apiBaseUrl }];
    console.info('Katalog menggunakan snapshot lokal; eksekusi endpoint tetap memakai API online.');
    return new Response(JSON.stringify(spec), { headers: { 'Content-Type': 'application/json' } });
  }
}
