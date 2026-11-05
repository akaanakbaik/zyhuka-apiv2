import test from 'node:test';
import assert from 'node:assert/strict';

test('catalog fallback and custom API server work without pretending API execution is offline', async () => {
  globalThis.window = { ZYHUKA_CONFIG: { specUrl: 'https://test.invalid/spec', catalogFallback: true, apiBaseUrl: 'https://example.test/api' } };
  const calls = [];
  globalThis.fetch = async url => {
    calls.push(url);
    if (url === window.ZYHUKA_CONFIG.specUrl) throw new Error('simulated catalog failure');
    return new Response(JSON.stringify({ paths: { '/test': {} }, servers: [{ url: 'https://old.test' }] }));
  };
  const { loadCatalog } = await import('../src/services.js');
  const [res, duplicate] = await Promise.all([loadCatalog(), loadCatalog()]);
  assert.deepEqual(calls, ['https://test.invalid/spec', '/openapi.snapshot.json']);
  assert.equal((await res.json()).servers[0].url, 'https://example.test/api');
  assert.equal((await duplicate.json()).servers[0].url, 'https://example.test/api');
  await loadCatalog();
  assert.equal(calls.length, 2, 'revisiting Playground reuses the in-memory catalog');
  window.ZYHUKA_CONFIG.catalogFallback = false;
  await assert.rejects(loadCatalog, /simulated catalog failure/);
});
