import assert from 'node:assert/strict';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { collectRouteFiles } from './m5-route-identity.mjs';

const inventoryPath = 'docs/backend-contract/ui-page-inventory.md';
const outputPath = 'docs/design/M5_SURFACE_INVENTORY.generated.json';
const root = 'apps/frontend/app';
const walk = directory => readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
  const file = `${directory}/${entry.name}`;
  return entry.isDirectory() ? walk(file) : [file];
});
const canonicalRoutes = new Set([...readFileSync(inventoryPath,'utf8').matchAll(/^\| [A-Z]+-\d+ \| `(\/[^`]+|\/)` \|/gm)].map(match=>match[1]));
const routeFiles = collectRouteFiles(walk(root).filter(file => /\/page\.[jt]sx?$/u.test(file)), canonicalRoutes, root);
const ids = new Set();
const routes = new Set();
const surfaces = [];
for (const line of readFileSync(inventoryPath, 'utf8').split('\n')) {
  if (!/^\| [A-Z]+-\d+ \|/u.test(line)) continue;
  const cells = line.slice(1, -1).split('|').map(cell => cell.trim());
  const id = cells[0];
  assert(!ids.has(id), `Duplicate canonical surface ID: ${id}`);
  ids.add(id);
  const route = /^`(\/[^`]*)`$/u.exec(cells[1])?.[1] ?? null;
  if (route) { assert(!routes.has(route), `Duplicate canonical route: ${route}`); routes.add(route); }
  const routeFile = route ? routeFiles.get(route) ?? null : null;
  surfaces.push({ id, inventoryCells: cells.slice(1), route, routeFile, evidence: routeFile ? 'route-file-present; not acceptance' : 'implementation evidence pending' });
}
assert(surfaces.length > 0, 'Canonical inventory parser found no surfaces');
for (const [route] of routeFiles) assert(routes.has(route) || route === '/m1-proof', `Route outside canonical product inventory: ${route}`);
const result = {
  generated: 'Run node scripts/check-m5-coverage.mjs --write. Never hand-edit.',
  authority: inventoryPath,
  limitation: 'File presence is not proof of authored design, backend integration, state coverage or M5 acceptance. Overlay/system evidence remains separately required.',
  counts: { canonicalSurfaces: surfaces.length, durableRoutes: routes.size, adminRoutes: [...routes].filter(route => route === '/admin' || route.startsWith('/admin/')).length, routeFilesPresent: surfaces.filter(surface => surface.routeFile).length },
  surfaces,
};
const generated = `${JSON.stringify(result, null, 2)}\n`;
if (process.argv.includes('--write')) writeFileSync(outputPath, generated);
else assert.equal(readFileSync(outputPath, 'utf8'), generated, 'M5 coverage inventory drift: regenerate and review the exact changes');
console.log(JSON.stringify(result.counts));
console.log('Coverage inventory is synchronized. This is not an M5 completion gate.');
