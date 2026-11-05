import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "acorn";

test("initial JavaScript stays within budget and Monitor is loaded on demand", async () => {
  const root = fileURLToPath(new URL("../dist/assets/", import.meta.url));
  const seen = new Set();
  let total = 0;
  async function visit(file) {
    if (seen.has(file)) return;
    seen.add(file);
    const bytes = await readFile(path.join(root, file));
    total += bytes.length;
    const ast = parse(bytes.toString(), {
      ecmaVersion: "latest",
      sourceType: "module",
    });
    for (const node of ast.body)
      if (
        node.type === "ImportDeclaration" &&
        node.source.value.startsWith("./")
      )
        await visit(node.source.value.slice(2));
  }
  await visit("app.js");
  assert.ok(total < 320 * 1024, `Initial JS: ${total} bytes`);
  assert.ok(
    !seen.has("monitor.js"),
    "Monitor must not be in the initial static import graph",
  );
  const app = await readFile(path.join(root, "app.js"), "utf8");
  assert.match(app, /import\(["']\.\/monitor\.js["']\)/);
  assert.doesNotMatch(app, /sweetalert2|Chart\.js/);
  const fonts = await readFile(
    new URL("../dist/fonts/fonts.css", import.meta.url),
    "utf8",
  );
  assert.doesNotMatch(fonts, /\.ttf|\.woff['"\)]/);
});
