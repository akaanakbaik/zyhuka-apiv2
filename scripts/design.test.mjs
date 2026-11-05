import { readFile, readdir } from "node:fs/promises";
import { createHash } from "node:crypto";
import test from "node:test";
import assert from "node:assert/strict";
import path from "node:path";

test("production package has no sponsor content and supports reduced motion", async () => {
  const root = new URL("../dist/", import.meta.url);
  async function scan(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      assert.doesNotMatch(entry.name, /atlantic|bihost/i);
      if (entry.isDirectory()) await scan(full);
      else if (/\.(html|js|css|json|svg)$/.test(entry.name))
        assert.doesNotMatch(
          await readFile(full, "utf8"),
          /atlantic-server|atlantic server|bihost/i,
          full,
        );
    }
  }
  await scan((await import("node:url")).fileURLToPath(root));
  const css = await readFile(new URL("assets/clay.css", root), "utf8");
  const utilities = await readFile(new URL('assets/styles.css', root), 'utf8');
  assert.doesNotMatch(utilities, /\*\s*\{\s*border-radius:\s*0\s*!important/, 'no inherited square-corner reset');
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /focus-visible/);
  assert.match(css, /html\.light/);
  const baseline = JSON.parse(
    await readFile(
      new URL("../reference/parity-baseline.json", import.meta.url),
    ),
  );
  const vendor = await readFile(new URL("assets/vendor-DHMKXF-P.js", root));
  assert.equal(
    createHash("sha256").update(vendor).digest("hex"),
    baseline.vendorSha256,
  );
});
