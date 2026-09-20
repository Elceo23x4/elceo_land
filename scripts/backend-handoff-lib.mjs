import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

export const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
export const gitBlobSha = bytes => createHash('sha1').update(`blob ${bytes.length}\0`).update(bytes).digest('hex');
const git = (directory, args) => execFileSync('git', ['-C', directory, ...args], {
  maxBuffer: 32 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'],
});

export async function loadManifest(root) {
  const source = JSON.parse(await readFile(path.join(root, 'docs/backend-contract/SOURCE.json'), 'utf8'));
  const manifest = JSON.parse(await readFile(path.join(root, 'docs/backend-contract/MIRROR_MANIFEST.json'), 'utf8'));
  if (source.sourceRepository !== 'Elceo23x4/Elceo-Mi' || !/^[0-9a-f]{40}$/.test(source.sourceCommit)
      || source.authority !== 'read-only snapshot' || manifest.sourceRepository !== source.sourceRepository
      || manifest.sourceCommit !== source.sourceCommit || manifest.authority !== source.authority) {
    throw new Error('Invalid or inconsistent frozen backend provenance.');
  }
  const entries = [...manifest.documents, ...manifest.artifacts, ...manifest.mocks]
    .sort((a, b) => a.destination.localeCompare(b.destination));
  const sources = new Set(), destinations = new Set();
  for (const entry of entries) {
    const expectedDestination = entry.source?.startsWith('docs/ui-handoff/')
      ? entry.source.replace('docs/ui-handoff/', 'docs/backend-contract/').replace(/\/README\.md$/, '/CANONICAL_README.md')
      : entry.source?.startsWith('artifacts/ui-handoff/')
        ? entry.source.replace('artifacts/ui-handoff/', 'contracts/backend/') : null;
    if (!expectedDestination || entry.destination !== expectedDestination || entry.source.split('/').includes('..')
        || !/^[0-9a-f]{40}$/.test(entry.gitBlobSha) || sources.has(entry.source) || destinations.has(entry.destination)) {
      throw new Error(`Invalid/duplicate mirror entry: ${entry.source}`);
    }
    sources.add(entry.source); destinations.add(entry.destination);
  }
  return { source, entries };
}

// Read the immutable Git tree, not a branch checkout or raw URL with unverified path metadata.
// An existing clone can be supplied for offline/local verification; only the pinned commit is read.
export async function openPinnedSource(source, entries) {
  let temporary;
  const directory = process.env.BACKEND_HANDOFF_SOURCE_DIR || (temporary = await mkdtemp(path.join(tmpdir(), 'elceo-handoff-')));
  try {
    if (temporary) {
      git(directory, ['init', '--quiet']);
      git(directory, ['fetch', '--quiet', '--depth=1', `https://github.com/${source.sourceRepository}.git`, source.sourceCommit]);
    }
    const commit = git(directory, ['rev-parse', '--verify', `${source.sourceCommit}^{commit}`]).toString().trim();
    if (commit !== source.sourceCommit) throw new Error('Pinned source commit mismatch.');
    const tree = new Map(git(directory, ['ls-tree', '-rlz', commit, '--', 'docs/ui-handoff', 'artifacts/ui-handoff'])
      .toString().split('\0').filter(Boolean).map(line => {
        const [metadata, sourcePath] = line.split('\t');
        const [mode, type, blob, size] = metadata.trim().split(/\s+/);
        if (mode !== '100644' || type !== 'blob') throw new Error(`Unsupported source object: ${sourcePath}`);
        return [sourcePath, { gitBlobSha: blob, bytes: Number(size) }];
      }));
    if (tree.size !== entries.length || entries.some(entry => !tree.has(entry.source))) {
      throw new Error('Manifest does not cover the exact pinned handoff tree.');
    }
    const read = entry => {
      const metadata = tree.get(entry.source);
      if (!metadata || metadata.gitBlobSha !== entry.gitBlobSha) throw new Error(`Pinned source path/blob mismatch: ${entry.source}`);
      const bytes = git(directory, ['show', `${commit}:${entry.source}`]);
      assertContent(entry, metadata, bytes);
      return { bytes, metadata };
    };
    return { read, close: async () => { if (temporary) await rm(temporary, { recursive: true, force: true }); } };
  } catch (error) {
    if (temporary) await rm(temporary, { recursive: true, force: true });
    throw error;
  }
}

export function assertContent(entry, sourceMetadata, bytes, record) {
  if (sourceMetadata.gitBlobSha !== entry.gitBlobSha || bytes.length !== sourceMetadata.bytes
      || gitBlobSha(bytes) !== entry.gitBlobSha) throw new Error(`Source/local content integrity mismatch: ${entry.destination}`);
  if (record && (record.source !== entry.source || record.destination !== entry.destination
      || record.gitBlobSha !== entry.gitBlobSha || record.bytes !== sourceMetadata.bytes || record.sha256 !== sha256(bytes))) {
    throw new Error(`Snapshot provenance/byte count/SHA-256 mismatch: ${entry.destination}`);
  }
}
