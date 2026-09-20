import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const source = JSON.parse(await readFile(path.join(root, 'docs/backend-contract/SOURCE.json'), 'utf8'));
const manifest = JSON.parse(await readFile(path.join(root, 'docs/backend-contract/MIRROR_MANIFEST.json'), 'utf8'));
const snapshot = JSON.parse(await readFile(path.join(root, 'docs/backend-contract/SNAPSHOT.json'), 'utf8'));

if (snapshot.sourceRepository !== source.sourceRepository || manifest.sourceRepository !== source.sourceRepository) {
  throw new Error('Backend snapshot repository does not match SOURCE.json.');
}
if (snapshot.sourceCommit !== source.sourceCommit || manifest.sourceCommit !== source.sourceCommit) {
  throw new Error('Backend snapshot commit does not match SOURCE.json.');
}
if (snapshot.authority !== 'read-only snapshot' || manifest.authority !== snapshot.authority) {
  throw new Error(`Unexpected snapshot authority: ${snapshot.authority}`);
}

const expected = [...manifest.documents, ...manifest.artifacts, ...manifest.mocks]
  .sort((a, b) => a.destination.localeCompare(b.destination));
const byDestination = new Map(snapshot.files.map((entry) => [entry.destination, entry]));

if (snapshot.fileCount !== expected.length || snapshot.files.length !== expected.length) {
  throw new Error(`Snapshot file count mismatch: expected ${expected.length}, got ${snapshot.files.length}`);
}

for (const wanted of expected) {
  const entry = byDestination.get(wanted.destination);
  if (!entry) throw new Error(`Required handoff file missing from snapshot: ${wanted.destination}`);
  if (entry.source !== wanted.source || entry.gitBlobSha !== wanted.gitBlobSha) {
    throw new Error(`Snapshot provenance mismatch for ${wanted.destination}`);
  }

  const content = await readFile(path.join(root, entry.destination));
  const actualSha256 = createHash('sha256').update(content).digest('hex');
  if (actualSha256 !== entry.sha256) {
    throw new Error(`Read-only handoff drift detected in ${entry.destination}: expected ${entry.sha256}, got ${actualSha256}`);
  }
}

for (const entry of snapshot.files) {
  if (!expected.some((wanted) => wanted.destination === entry.destination)) {
    throw new Error(`Unexpected generated handoff file recorded in snapshot: ${entry.destination}`);
  }
}

console.log(`Verified ${snapshot.files.length} exact read-only backend handoff files at ${snapshot.sourceRepository}@${snapshot.sourceCommit}.`);
