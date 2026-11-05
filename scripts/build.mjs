import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

export const projectRoot = fileURLToPath(new URL('../', import.meta.url));
export async function build() {
  const out = path.join(projectRoot, 'dist');
  await rm(out, { recursive: true, force: true });
  await mkdir(out, { recursive: true });
  await cp(path.join(projectRoot, 'public'), out, { recursive: true });
  await cp(path.join(projectRoot, 'src/app.js'), path.join(out, 'assets/app.js'));
  await cp(path.join(projectRoot, 'src/services.js'), path.join(out, 'assets/services.js'));
  await cp(path.join(projectRoot, 'src/styles.css'), path.join(out, 'assets/styles.css'));
  const html = await readFile(path.join(projectRoot, 'src/index.html'), 'utf8');
  await writeFile(path.join(out, 'index.html'), html);
  // Directory indexes support direct links on ordinary static hosts too.
  for (const route of ['playground', 'monitor', 'privacy', 'terms']) {
    await mkdir(path.join(out, route), { recursive: true });
    await writeFile(path.join(out, route, 'index.html'), html);
  }
  await writeFile(path.join(out, '_redirects'), '/* /index.html 200\n');
  console.log('Frontend siap di dist/ — 5 route, aset dan font lokal.');
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await build();
