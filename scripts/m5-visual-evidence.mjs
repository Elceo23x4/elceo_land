// Portable copies of controlled, public/signed-out test captures. No live account
// data or credentials are rendered by this harness. Originals stay in artifacts.
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(entry => entry.isDirectory()
    ? walk(path.join(directory, entry.name)) : [path.join(directory, entry.name)]));
  return nested.flat();
}
const allowed = /^(landing|about|faq|help|pricing|demo|legal-(terms|privacy|risk-disclosure)|login|signup|dashboard-preview)-(390|1440|1920)\.png$/u;
for (const file of (await walk('apps/frontend/test-results')).sort()) {
  if (!allowed.test(path.basename(file))) continue;
  const output = await sharp(file).resize({ width: 960, withoutEnlargement: true }).jpeg({ quality: 72 }).toBuffer();
  console.log(`M5_VISUAL:${path.basename(file, '.png')}:${output.toString('base64')}`);
}

const files=(await walk('apps/frontend/test-results')).filter(file=>!file.endsWith('evidence-manifest.json')).sort();
const manifest={head:execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim(),run:process.env.GITHUB_RUN_ID??null,files:[]};
for(const file of files) manifest.files.push({file,sha256:createHash('sha256').update(await readFile(file)).digest('hex')});
await writeFile('apps/frontend/test-results/evidence-manifest.json',JSON.stringify(manifest,null,2)+'\n');
console.log(`M5_EVIDENCE_HEAD:${manifest.head}`);
