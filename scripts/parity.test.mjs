import { parse } from 'acorn';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

export function behaviorHash(code) {
  const ast = parse(code, { ecmaVersion: 'latest', sourceType: 'module' });
  return createHash('sha256').update(JSON.stringify(ast, (key, value) => {
    if (['start', 'end', 'raw'].includes(key)) return undefined;
    if (value?.type === 'LogicalExpression') {
      const terms = [];
      const flatten = node => { if (node.type === 'LogicalExpression' && node.operator === value.operator) { flatten(node.left); flatten(node.right); } else terms.push(node); };
      flatten(value); return { type: 'LogicalChain', operator: value.operator, terms };
    }
    return value;
  })).digest('hex');
}
export function originalBrand(code) {
  return code
    .replace('import { loadCatalog } from "./services.js";\n', '')
    .replaceAll('ZYHUKA', 'SIPUTZX')
    .replaceAll('zyhuka-theme', 'siputz-theme')
    .replaceAll('zyhuka-monitor-cache', 'siputzx-monitor-cache')
    .replaceAll('zyhuka-', 'siputz-')
    .replaceAll('https://github.com/akaanakbaik/zyhuka-frontend', 'https://github.com/siputzx')
    .replaceAll('https://github.com/akaanakbaik/siputz-frontend', 'https://github.com/siputzx')
    .replace('await loadCatalog()', 'await fetch("https://api.siputzx.my.id/api/openapi.json")')
    .replace('new WebSocket(window.SIPUTZX_CONFIG.websocketUrl)', 'new WebSocket("wss://api.siputzx.my.id/ws")');
}
export function cssHash(css) { return createHash('sha256').update(css.replace(/\s+/g, '')).digest('hex'); }

test('UI logic, animation CSS and runtime match captured reference apart from documented changes', async () => {
  const baseline = JSON.parse(await readFile(new URL('../reference/parity-baseline.json', import.meta.url)));
  const app = await readFile(new URL('../src/app.js', import.meta.url), 'utf8');
  const css = await readFile(new URL('../src/styles.css', import.meta.url), 'utf8');
  assert.equal(behaviorHash(originalBrand(app)), baseline.applicationAstSha256, 'same UI event handlers and rendering logic');
  assert.equal(cssHash(css.replaceAll('zyhuka-', 'siputz-')), baseline.stylesheetSha256, 'same animation and transition CSS');
  const html = await readFile(new URL('../src/index.html', import.meta.url), 'utf8');
  assert.equal(cssHash(html.match(/<style>([\s\S]*?)<\/style>/)[1]), baseline.inlineStyleSha256, 'same spinner and fade keyframes');
  const vendor = await readFile(new URL('../public/assets/vendor-DHMKXF-P.js', import.meta.url));
  assert.equal(createHash('sha256').update(vendor).digest('hex'), baseline.vendorSha256);
});
