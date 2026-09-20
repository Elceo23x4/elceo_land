import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const source = JSON.parse(await readFile(path.join(root, 'docs/backend-contract/SOURCE.json'), 'utf8'));
const manifest = JSON.parse(await readFile(path.join(root, 'docs/backend-contract/MIRROR_MANIFEST.json'), 'utf8'));
const [owner, repo] = source.sourceRepository.split('/');
const ref = source.sourceCommit;

if (!owner || !repo || !/^[0-9a-f]{40}$/.test(ref)) {
  throw new Error('Invalid docs/backend-contract/SOURCE.json');
}
if (manifest.sourceRepository !== source.sourceRepository || manifest.sourceCommit !== ref) {
  throw new Error('MIRROR_MANIFEST.json does not match SOURCE.json.');
}
if (source.authority !== 'read-only snapshot' || manifest.authority !== source.authority) {
  throw new Error('Unexpected backend handoff authority.');
}

const headers = {
  'User-Agent': 'elceo-frontend-handoff-sync',
};
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

function rawUrl(repoPath) {
  const encodedPath = repoPath.split('/').map(encodeURIComponent).join('/');
  return `https://raw.githubusercontent.com/${owner}/${repo}/${encodeURIComponent(ref)}/${encodedPath}`;
}

async function fetchBytes(repoPath) {
  const response = await fetch(rawUrl(repoPath), { headers });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${repoPath}`);
  return Buffer.from(await response.arrayBuffer());
}

function gitBlobSha(bytes) {
  const header = Buffer.from(`blob ${bytes.length}\0`, 'utf8');
  return createHash('sha1').update(header).update(bytes).digest('hex');
}

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

const expectedEntries = [
  ...manifest.documents,
  ...manifest.artifacts,
  ...manifest.mocks,
].sort((a, b) => a.destination.localeCompare(b.destination));

const written = [];
for (const entry of expectedEntries) {
  const bytes = await fetchBytes(entry.source);
  const actualGitBlobSha = gitBlobSha(bytes);
  if (actualGitBlobSha !== entry.gitBlobSha) {
    throw new Error(
      `Canonical source blob mismatch for ${entry.source}: expected ${entry.gitBlobSha}, got ${actualGitBlobSha}`,
    );
  }

  const destination = path.join(root, entry.destination);
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, bytes);
  written.push({
    source: entry.source,
    destination: entry.destination,
    gitBlobSha: entry.gitBlobSha,
    sha256: sha256(bytes),
    bytes: bytes.length,
  });
}

const snapshot = {
  schemaVersion: 1,
  sourceRepository: source.sourceRepository,
  sourceCommit: ref,
  authority: source.authority,
  fileCount: written.length,
  files: written,
};

await writeFile(
  path.join(root, 'docs/backend-contract/SNAPSHOT.json'),
  `${JSON.stringify(snapshot, null, 2)}\n`,
  'utf8',
);

console.log(`Synced ${written.length} exact frozen backend handoff files from ${source.sourceRepository}@${ref}.`);
