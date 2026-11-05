import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { once } from 'node:events';
import { createServer } from './serve.mjs';
import { projectRoot } from './build.mjs';

test('deep links, static assets, fonts, catalog and HTTP behavior', async () => {
  const server = createServer();
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  try {
    const base = `http://127.0.0.1:${server.address().port}`;
    for (const route of ['/', '/playground', '/monitor', '/privacy', '/terms', '/playground/']) {
      const res = await fetch(base + route);
      assert.equal(res.status, 200, route);
      assert.match(await res.text(), /id="root"/);
    }
    const html = await readFile(path.join(projectRoot, 'dist/index.html'), 'utf8');
    assert.doesNotMatch(html, /cloudflareinsights|cdn-cgi|fonts\.googleapis/);
    for (const [, asset] of html.matchAll(/(?:src|href)="(\/[^"#]+)"/g)) {
      const res = await fetch(base + asset);
      assert.equal(res.status, 200, asset);
    }
    const js = await fetch(base + '/assets/app.js');
    assert.match(js.headers.get('content-type'), /javascript/);
    for (const [, file] of (await js.text()).matchAll(/from\s*["']\.\/([^"']+)["']/g)) {
      await access(path.join(projectRoot, 'dist/assets', file));
    }
    const css = await readFile(path.join(projectRoot, 'dist/fonts/fonts.css'), 'utf8');
    assert.doesNotMatch(css, /https?:|\/\/cdn\./);
    for (const [, file] of css.matchAll(/url\(['"]?(\/[^)'"\s]+)/g)) await access(path.join(projectRoot, 'dist', file));
    const spec = await (await fetch(base + '/openapi.snapshot.json')).json();
    assert.ok(Object.keys(spec.paths).length > 100, 'full endpoint catalog');
    assert.equal((await fetch(base + '/missing.js')).status, 404);
    assert.equal((await fetch(base, { method: 'POST' })).status, 405);
    assert.equal((await fetch(base, { method: 'HEAD' })).status, 200);
  } finally { await new Promise(resolve => server.close(resolve)); }
});
