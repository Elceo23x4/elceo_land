import { createHash } from 'node:crypto';
import { readdir, readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import sharp from 'sharp';
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
