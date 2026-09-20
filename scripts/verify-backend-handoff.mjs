import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { loadManifest, openPinnedSource, assertContent } from './backend-handoff-lib.mjs';

const root = process.cwd();
const { source, entries } = await loadManifest(root);
const snapshot = JSON.parse(await readFile(path.join(root, 'docs/backend-contract/SNAPSHOT.json'), 'utf8'));
if (snapshot.schemaVersion !== 1 || snapshot.sourceRepository !== source.sourceRepository
    || snapshot.sourceCommit !== source.sourceCommit || snapshot.authority !== source.authority
    || snapshot.fileCount !== entries.length || snapshot.files.length !== entries.length) {
  throw new Error('Snapshot provenance/count does not match the frozen manifest.');
}
const records = new Map(snapshot.files.map(entry => [entry.destination, entry]));
if (records.size !== entries.length || entries.some(entry => !records.has(entry.destination))) {
  throw new Error('Missing, duplicate or unexpected snapshot entries.');
}
const allowed = new Set([...entries.map(entry => entry.destination),
  'docs/backend-contract/README.md', 'docs/backend-contract/SOURCE.json',
  'docs/backend-contract/MIRROR_MANIFEST.json', 'docs/backend-contract/SNAPSHOT.json']);
async function checkFiles(directory) {
  for (const item of await readdir(path.join(root, directory), { withFileTypes: true })) {
    const name = `${directory}/${item.name}`;
    if (item.isDirectory()) await checkFiles(name);
    else if (!item.isFile() || !allowed.has(name)) throw new Error(`Unexpected mirror file: ${name}`);
  }
}
await checkFiles('docs/backend-contract');
await checkFiles('contracts/backend');
const pinned = await openPinnedSource(source, entries);
try {
  for (const entry of entries) {
    const { metadata } = pinned.read(entry);
    assertContent(entry, metadata, await readFile(path.join(root, entry.destination)), records.get(entry.destination));
  }
  console.log(`Verified ${entries.length} exact read-only backend handoff files (pinned paths, Git blobs, source bytes and local SHA-256) at ${source.sourceRepository}@${source.sourceCommit}.`);
} finally { await pinned.close(); }
