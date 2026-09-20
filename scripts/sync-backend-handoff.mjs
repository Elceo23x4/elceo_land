import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const sourcePath = path.join(root, 'docs/backend-contract/SOURCE.json');
const source = JSON.parse(await readFile(sourcePath, 'utf8'));
const [owner, repo] = source.sourceRepository.split('/');
const ref = source.sourceCommit;

if (!owner || !repo || !ref) {
  throw new Error('Invalid docs/backend-contract/SOURCE.json');
}

const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'elceo-frontend-handoff-sync',
  'X-GitHub-Api-Version': '2022-11-28',
};
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

const api = (repoPath) =>
  `https://api.github.com/repos/${owner}/${repo}/contents/${encodeURI(repoPath)}?ref=${encodeURIComponent(ref)}`;
const raw = (repoPath) =>
  `https://raw.githubusercontent.com/${owner}/${repo}/${encodeURIComponent(ref)}/${repoPath
    .split('/')
    .map(encodeURIComponent)
    .join('/')}`;

async function fetchJson(url) {
  const response = await fetch(url, { headers });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
  return response.json();
}

async function fetchText(repoPath) {
  const response = await fetch(raw(repoPath), { headers: { 'User-Agent': headers['User-Agent'] } });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${repoPath}`);
  return response.text();
}

async function listFiles(repoPath) {
  const node = await fetchJson(api(repoPath));
  if (!Array.isArray(node)) return [repoPath];
  const result = [];
  for (const item of node) {
    if (item.type === 'file') result.push(item.path);
    else if (item.type === 'dir') result.push(...(await listFiles(item.path)));
  }
  return result;
}

function sha256(text) {
  return createHash('sha256').update(text).digest('hex');
}

const docsSourceRoot = 'docs/ui-handoff';
const artifactsSourceRoot = 'artifacts/ui-handoff';
const docFiles = await listFiles(docsSourceRoot);
const artifactFiles = await listFiles(artifactsSourceRoot);

const entries = [];

for (const repoPath of docFiles.sort()) {
  const rel = repoPath.slice(`${docsSourceRoot}/`.length);
  const destinationRel = rel === 'README.md' ? 'CANONICAL_README.md' : rel;
  const dest = path.join(root, 'docs/backend-contract', destinationRel);
  const content = await fetchText(repoPath);
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, content, 'utf8');
  entries.push({ source: repoPath, destination: path.relative(root, dest).replaceAll('\\', '/'), sha256: sha256(content) });
}

for (const repoPath of artifactFiles.sort()) {
  const rel = repoPath.slice(`${artifactsSourceRoot}/`.length);
  const dest = path.join(root, 'contracts/backend', rel);
  const content = await fetchText(repoPath);
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, content, 'utf8');
  entries.push({ source: repoPath, destination: path.relative(root, dest).replaceAll('\\', '/'), sha256: sha256(content) });
}

const snapshot = {
  schemaVersion: 1,
  sourceRepository: source.sourceRepository,
  sourceCommit: ref,
  authority: source.authority,
  fileCount: entries.length,
  files: entries.sort((a, b) => a.destination.localeCompare(b.destination)),
};

await writeFile(
  path.join(root, 'docs/backend-contract/SNAPSHOT.json'),
  `${JSON.stringify(snapshot, null, 2)}\n`,
  'utf8',
);

console.log(`Synced ${entries.length} frozen backend handoff files from ${source.sourceRepository}@${ref}.`);
