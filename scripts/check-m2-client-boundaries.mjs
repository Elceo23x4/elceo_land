import assert from 'node:assert/strict';
import { mkdtemp, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

const importPattern = /(?:import|export)\s+(?:type\s+)?(?:[^'";]+?\s+from\s+)?['"]([^'"]+)['"]/gu;

const resolveRelative = async (from, specifier) => {
  const candidate = path.resolve(path.dirname(from), specifier);
  for (const suffix of ['', '.ts', '.tsx', '.js', '.mjs', '/index.ts', '/index.tsx']) {
    const file = candidate + suffix;
    if (await stat(file).then((item) => item.isFile()).catch(() => false)) return file;
  }
  return null;
};

export const assertClientGraphSafe = async (entries) => {
  const visited = new Set();
  const visit = async (file, chain) => {
    if (visited.has(file)) return;
    visited.add(file);
    const source = await readFile(file, 'utf8');
    for (const match of source.matchAll(importPattern)) {
      const specifier = match[1];
      if (specifier === 'server-only') {
        throw new Error(`Client graph reached server-only through ${[...chain, file].join(' -> ')}`);
      }
      if (!specifier.startsWith('.')) continue;
      const resolved = await resolveRelative(file, specifier);
      if (resolved) await visit(resolved, [...chain, file]);
    }
  };
  for (const entry of entries) await visit(path.resolve(entry), []);
};

const root = process.cwd();
const collect = async (directory) => {
  const files = [];
  for (const item of await readdir(directory, { withFileTypes: true })) {
    if (item.name === '.next' || item.name === 'node_modules') continue;
    const file = path.join(directory, item.name);
    if (item.isDirectory()) files.push(...await collect(file));
    else if (/\.(?:ts|tsx)$/u.test(item.name) && (await readFile(file, 'utf8')).match(/^['"]use client['"]/u)) files.push(file);
  }
  return files;
};

const temporary = await mkdtemp(path.join(tmpdir(), 'elceo-client-boundary-'));
try {
  const client = path.join(temporary, 'client.ts');
  const forbidden = path.join(temporary, 'forbidden.ts');
  await writeFile(client, "'use client';\nimport './forbidden.ts';\n");
  await writeFile(forbidden, "import 'server-only';\n");
  await assert.rejects(() => assertClientGraphSafe([client]), /reached server-only/u);
} finally {
  await rm(temporary, { recursive: true, force: true });
}

const entries = await collect(path.join(root, 'apps/frontend'));
await assertClientGraphSafe(entries);
console.log(`Client boundary guard rejected its forbidden fixture and verified ${entries.length} real client entry graph(s).`);
