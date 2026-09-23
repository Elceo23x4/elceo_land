// Portable copies of controlled, public/signed-out test captures. No live account
// data or credentials are rendered by this harness. Originals stay in artifacts.
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(entry => entry.isDirectory()
    ? walk(path.join(directory, entry.name)) : [path.join(directory, entry.name)]));
  return nested.flat();
}
const allowed = /^(landing|about|faq|help|pricing|demo|legal-(terms|privacy|risk-disclosure)|login|signup|dashboard-preview)-(390|1440)\.png$/u;
for (const file of (await walk('apps/frontend/test-results')).sort()) {
  if (!allowed.test(path.basename(file))) continue;
  const output = await sharp(file).resize({ width: 960, withoutEnlargement: true }).jpeg({ quality: 72 }).toBuffer();
  console.log(`M5_VISUAL:${path.basename(file, '.png')}:${output.toString('base64')}`);
}
