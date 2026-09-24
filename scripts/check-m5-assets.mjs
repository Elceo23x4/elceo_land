import { createHash } from 'node:crypto';
import { readdir, readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import sharp from 'sharp';
import { readFileSync, readdirSync } from 'node:fs';
import { assetReachability } from './m5-asset-reachability.mjs';
const directory = 'apps/frontend/public/m5-assets';
const expected = JSON.parse(await readFile('docs/design/M5_ASSET_INTEGRITY.json', 'utf8'));
assert.deepEqual((await readdir(directory)).sort(), expected.map(asset => asset.file).sort(), 'Unregistered or missing M5 asset');
for (const asset of expected) {
  const bytes = await readFile(`${directory}/${asset.file}`);
  assert.equal(createHash('sha256').update(bytes).digest('hex'), asset.sha256, asset.file);
  assert.equal(bytes.length, asset.bytes, asset.file);
  const decoded = await sharp(bytes).raw().toBuffer({ resolveWithObject: true });
  assert.equal(decoded.info.width, asset.width, asset.file);
  assert.equal(decoded.info.height, asset.height, asset.file);
  assert(bytes.length <= (asset.file.includes('mobile') ? 150_000 : 300_000), `Still-image budget exceeded: ${asset.file}`);
}
console.log(`Verified and fully decoded ${expected.length} M5 still assets. Approved authority PNG is independently protected by check:reference.`);

const sources = new Map();
function walk(directory) {
  for (const item of readdirSync(directory, { withFileTypes: true })) {
    if (['node_modules','.next','tests','test-results'].includes(item.name)) continue;
    const file = `${directory}/${item.name}`;
    if (item.isDirectory()) walk(file);
    else if (/\.(tsx?|jsx?|css|json)$/.test(file)) sources.set(file, readFileSync(file,'utf8'));
  }
}
walk('apps/frontend');
console.log(JSON.stringify(assetReachability(sources, expected, ['apps/frontend/app/(public)/page.tsx']), null, 2));
