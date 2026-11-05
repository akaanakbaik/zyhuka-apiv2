import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { transform } from "esbuild";

export const projectRoot = fileURLToPath(new URL("../", import.meta.url));
export async function build() {
  const out = path.join(projectRoot, "dist");
  await rm(out, { recursive: true, force: true });
  await mkdir(out, { recursive: true });
  await cp(path.join(projectRoot, "public"), out, { recursive: true });
  for (const file of [
    "app.js",
    "services.js",
    "clay.js",
    "monitor.js",
    "view-runtime.js",
    "styles.css",
    "clay.css",
  ]) {
    const source = await readFile(path.join(projectRoot, "src", file), "utf8");
    const { code } = await transform(source, {
      loader: file.endsWith(".css") ? "css" : "js",
      minify: true,
      target: "es2022",
      format: "esm",
      legalComments: "inline",
    });
    await writeFile(path.join(out, "assets", file), code);
  }
  const html = await readFile(path.join(projectRoot, "src/index.html"), "utf8");
  await writeFile(path.join(out, "index.html"), html);
  // Directory indexes support direct links on ordinary static hosts too.
  for (const route of ["playground", "monitor", "privacy", "terms"]) {
    await mkdir(path.join(out, route), { recursive: true });
    await writeFile(path.join(out, route, "index.html"), html);
  }
  await writeFile(path.join(out, "_redirects"), "/* /index.html 200\n");
  console.log("Frontend siap di dist/ — 5 route, aset dan font lokal.");
}
if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
)
  await build();
