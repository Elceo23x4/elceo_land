import { mkdir, writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import { loadManifest, openPinnedSource, assertContent, sha256 } from './backend-handoff-lib.mjs';

const root = process.cwd();
const { source, entries } = await loadManifest(root);
const pinned = await openPinnedSource(source, entries);
try {
  // Validate every pinned source before writing anything; a bad manifest cannot produce a partial sync.
  const resolved = entries.map(entry => ({ entry, ...pinned.read(entry) }));
  const files = [];
  for (const { entry, bytes, metadata } of resolved) {
    const destination = path.join(root, entry.destination);
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, bytes);
    const record = { ...entry, sha256: sha256(bytes), bytes: metadata.bytes };
    assertContent(entry, metadata, await readFile(destination), record);
    files.push(record);
  }
  const snapshot = { schemaVersion: 1, sourceRepository: source.sourceRepository,
    sourceCommit: source.sourceCommit, authority: source.authority, fileCount: files.length, files };
  await writeFile(path.join(root, 'docs/backend-contract/SNAPSHOT.json'), `${JSON.stringify(snapshot, null, 2)}\n`);
  console.log(`Synced ${files.length} exact frozen backend handoff files from ${source.sourceRepository}@${source.sourceCommit}.`);
} finally { await pinned.close(); }
