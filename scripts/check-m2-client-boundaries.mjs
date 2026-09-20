import { mkdtemp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

const root = process.cwd();
const frontend = path.join(root, 'apps/frontend');

const walk = async (dir) => {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name === '.next' || entry.name === 'node_modules') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await walk(full));
    else if (/\.(?:ts|tsx)$/u.test(entry.name) && !entry.name.endsWith('.d.ts')) out.push(full);
  }
  return out;
};

const resolveImport = async (from, specifier) => {
  if (!specifier.startsWith('.')) return null;
  const base = path.resolve(path.dirname(from), specifier);
  for (const candidate of [
    base,
    `${base}.ts`,
    `${base}.tsx`,
    path.join(base, 'index.ts'),
    path.join(base, 'index.tsx'),
  ]) {
    try {
      await readFile(candidate);
      return candidate;
    } catch {
      // Continue through the deterministic local resolution candidates.
    }
  }
  return null;
};

const runtimeSpecifiers = (source) => {
  const found = new Set();

  // Static imports/exports that survive TypeScript erasure. `import type` and
  // `export type` are intentionally excluded from the runtime graph.
  const fromPattern = /(?:^|\n)\s*(?:import|export)\s+(?!type\b)[^;]+?\s+from\s+['"]([^'"]+)['"]\s*;?/gu;
  const bareImportPattern = /(?:^|\n)\s*import\s+['"]([^'"]+)['"]\s*;?/gu;
  const dynamicImportPattern = /\bimport\s*\(\s*['"]([^'"]+)['"]\s*\)/gu;

  for (const pattern of [fromPattern, bareImportPattern, dynamicImportPattern]) {
    for (const match of source.matchAll(pattern)) found.add(match[1]);
  }
  return [...found];
};

const assertNoServerOnlyReachable = async (entry) => {
  const queue = [entry];
  const visited = new Set();
  while (queue.length) {
    const file = queue.pop();
    if (!file || visited.has(file)) continue;
    visited.add(file);
    const source = await readFile(file, 'utf8');
    if (/^\s*import\s+['"]server-only['"]/mu.test(source)) {
      throw new Error(`Client runtime graph reaches server-only module: ${path.relative(root, file)}`);
    }
    for (const specifier of runtimeSpecifiers(source)) {
      const resolved = await resolveImport(file, specifier);
      if (resolved) queue.push(resolved);
    }
  }
};

const temporary = await mkdtemp(path.join(tmpdir(), 'elceo-m2-boundary-'));
try {
  const server = path.join(temporary, 'server.ts');
  const runtime = path.join(temporary, 'runtime.ts');
  const runtimeClient = path.join(temporary, 'runtime-client.tsx');
  const typeOnly = path.join(temporary, 'type-only.ts');
  const typeClient = path.join(temporary, 'type-client.tsx');

  await writeFile(server, "import 'server-only';\nexport const secret = 1;\n");
  await writeFile(runtime, "export { secret } from './server';\n");
  await writeFile(runtimeClient, "'use client';\nimport { secret } from './runtime';\nvoid secret;\n");
  await writeFile(typeOnly, "import type { secret } from './server';\nexport type Proof = typeof secret;\n");
  await writeFile(typeClient, "'use client';\nimport type { Proof } from './type-only';\nconst proof: Proof | null = null;\nvoid proof;\n");

  await assertNoServerOnlyReachable(typeClient);

  let caught = false;
  try {
    await assertNoServerOnlyReachable(runtimeClient);
  } catch (error) {
    caught = /server-only/u.test(String(error));
  }
  if (!caught) throw new Error('Synthetic runtime client/server violation was not detected.');

  const files = await walk(frontend);
  const clientEntries = [];
  for (const file of files) {
    const source = await readFile(file, 'utf8');
    if (/^\s*['"]use client['"];?/u.test(source)) clientEntries.push(file);
  }
  for (const entry of clientEntries) await assertNoServerOnlyReachable(entry);

  console.log(`M2 client runtime boundaries verified across ${clientEntries.length} client entries; type-only imports are erased from the graph.`);
} finally {
  await rm(temporary, { recursive: true, force: true });
}
