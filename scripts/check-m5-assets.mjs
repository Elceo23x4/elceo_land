import { createHash } from 'node:crypto';
import { readdir, readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import sharp from 'sharp';
import { readFileSync, readdirSync } from 'node:fs';
import { assetReachability } from './m5-asset-reachability.mjs';
const directory = 'apps/frontend/public/m5-assets';
const expected = JSON.parse(await readFile('docs/design/M5_ASSET_INTEGRITY.json', 'utf8'));
const files = async (dir, prefix = '') => (await Promise.all((await readdir(dir, {withFileTypes:true})).map(entry => {
  assert(!entry.isSymbolicLink(), 'Asset symlinks are forbidden');
  return entry.isDirectory() ? files(`${dir}/${entry.name}`, `${prefix}${entry.name}/`) : [`${prefix}${entry.name}`];
}))).flat();
assert.deepEqual((await files(directory)).sort(), expected.map(asset => asset.file).sort(), 'Unregistered or missing M5 asset');
for (const asset of expected) {
  const bytes = await readFile(`${directory}/${asset.file}`);
  assert.equal(createHash('sha256').update(bytes).digest('hex'), asset.sha256, asset.file);
  assert.equal(bytes.length, asset.bytes, asset.file);
  const decoded = await sharp(bytes).raw().toBuffer({ resolveWithObject: true });
  assert.equal(decoded.info.width, asset.width, asset.file);
  assert.equal(decoded.info.height, asset.height, asset.file);
  const metadata = await sharp(bytes).metadata();
  const stats = await sharp(bytes).stats();
  assert.equal(metadata.hasAlpha, asset.hasAlpha, `Alpha-channel drift: ${asset.file}`);
  assert.deepEqual(metadata.hasAlpha ? [stats.channels.at(-1).min, stats.channels.at(-1).max] : null, asset.alphaRange, `Alpha-range drift: ${asset.file}`);
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

// Supplied design authorities and original layers are separate from runtime derivatives.
const originals = JSON.parse(await readFile('docs/design/M5_LANDING_ASSET_PREFLIGHT.json','utf8')).assets;
for (const entry of originals) {
  assert(entry.repository_path.startsWith('docs/design/references/m5-landing/') && !entry.repository_path.includes('..'));
  const bytes = await readFile(entry.repository_path);
  assert.equal(bytes.length, entry.bytes);
  assert.equal(createHash('sha256').update(bytes).digest('hex'), entry.sha256);
  const decoded = await sharp(bytes).raw().toBuffer({resolveWithObject:true});
  assert.equal(decoded.info.width, entry.width); assert.equal(decoded.info.height, entry.height);
  const stats = await sharp(bytes).stats();
  assert.deepEqual([stats.channels.at(-1).min,stats.channels.at(-1).max], entry.alpha_range);
}
console.log(`Verified ${originals.length} unchanged supplied PNG sources, including genuine alpha.`);
