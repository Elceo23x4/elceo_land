import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const frontend = 'apps/frontend/';
const code = /\.[cm]?[jt]sx?$/u;
const forbiddenAuthority = /NEXT_PUBLIC_|x-elceo-internal-token|ELCEO_(?:BACKEND|PUBLIC|INTERNAL)|AUTH_SECRET|localStorage|sessionStorage|document\s*(?:\.\s*cookie|\[\s*['"]cookie['"]\s*\])|cookieStore|\bNextAuth\s*\(|next-auth\/providers|next-auth\/jwt|decodeJwt|jwtDecode|authjs\.(?:session-token|csrf-token)|next-auth\.session-token|__Secure-authjs|__Host-authjs/u;
const authorityPackages = /^(?:server-only|next\/headers|next-auth|@auth\/|jose(?:\/|$))/u;
const slash = value => value.split(path.sep).join('/');

export function collectSources(root = process.cwd()) {
  const sources = new Map();
  function walk(relative) {
    for (const entry of readdirSync(path.join(root, relative), { withFileTypes: true })) {
      if (['node_modules', '.next', 'test-results', 'playwright-report', 'tests'].includes(entry.name)) continue;
      const file = `${relative}/${entry.name}`;
      if (entry.isDirectory()) walk(file);
      else if (code.test(file) && !file.endsWith('.d.ts') && !/\.(?:config|test|spec)\./u.test(file)) {
        sources.set(file, readFileSync(path.join(root, file), 'utf8'));
      }
    }
  }
  walk('apps/frontend');
  // Include the immutable legacy dashboard's complete local runtime graph.
  walk('src');
  return sources;
}

export function inspectModule(file, source) {
  const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true);
  let client = false;
  for (const statement of ast.statements) {
    if (!ts.isExpressionStatement(statement) || !ts.isStringLiteral(statement.expression)) break;
    if (statement.expression.text === 'use client') client = true;
  }
  const imports = [];
  let opaqueImport = false;
  function visit(node) {
    if (ts.isImportDeclaration(node)) {
      const clause = node.importClause;
      const named = clause?.namedBindings;
      const erased = clause?.isTypeOnly || (!clause?.name && named && ts.isNamedImports(named) && named.elements.length > 0 && named.elements.every(e => e.isTypeOnly));
      if (!erased) imports.push(node.moduleSpecifier.text);
    } else if (ts.isExportDeclaration(node) && node.moduleSpecifier && !node.isTypeOnly) {
      const named = node.exportClause;
      if (!(named && ts.isNamedExports(named) && named.elements.length > 0 && named.elements.every(e => e.isTypeOnly))) imports.push(node.moduleSpecifier.text);
    } else if (ts.isImportEqualsDeclaration(node) && !node.isTypeOnly && ts.isExternalModuleReference(node.moduleReference)) {
      imports.push(node.moduleReference.expression.text);
    } else if (ts.isCallExpression(node) && (node.expression.kind === ts.SyntaxKind.ImportKeyword || (ts.isIdentifier(node.expression) && node.expression.text === 'require'))) {
      if (node.arguments.length === 1 && ts.isStringLiteralLike(node.arguments[0])) imports.push(node.arguments[0].text);
      else opaqueImport = true;
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
  // gsap/all re-exports ScrollTrigger; deep source/dist imports count too.
  const scroll = imports.some(specifier => /^gsap\/(?:.*\/)?(?:ScrollTrigger|all)(?:\.js)?$/u.test(specifier)) || /\bScrollTrigger\b/u.test(source.replace(/\/\*[\s\S]*?\*\/|\/\/[^\n]*/gu, ''));
  return { client, imports, opaqueImport, scroll };
}

export function checkBoundaries(sources, registry, root = process.cwd()) {
  const errors = [];
  const modules = new Map([...sources].map(([file, source]) => [file, inspectModule(file, source)]));
  const clients = [...modules].filter(([file, info]) => file.startsWith(frontend) && info.client).map(([file]) => file);
  const registered = new Map();
  for (const entry of registry.clients) {
    if (registered.has(entry.path)) errors.push(`Duplicate client registration: ${entry.path}`);
    registered.set(entry.path, entry);
    if (!entry.purpose?.trim() || !entry.authority?.trim()) errors.push(`Client needs purpose and authority: ${entry.path}`);
    if (!clients.includes(entry.path)) errors.push(`Stale client registration: ${entry.path}`);
  }
  const options = ts.readConfigFile(path.join(root, 'apps/frontend/tsconfig.json'), ts.sys.readFile).config;
  const compilerOptions = ts.convertCompilerOptionsFromJson(options?.compilerOptions ?? {}, path.join(root, 'apps/frontend')).options;
  function resolve(from, specifier) {
    if (specifier.startsWith('.')) {
      const base = path.posix.normalize(path.posix.join(path.posix.dirname(from), specifier));
      for (const candidate of [base, ...['.ts','.tsx','.js','.jsx','.mts','.mjs','/index.ts','/index.tsx','/index.js'].map(ext => base + ext)]) {
        if (modules.has(candidate)) return candidate;
      }
    }
    const resolved = ts.resolveModuleName(specifier, path.join(root, from), compilerOptions, ts.sys).resolvedModule;
    return resolved && slash(path.relative(root, resolved.resolvedFileName));
  }
  function graph(entry) {
    const found = new Set();
    const queue = [entry];
    while (queue.length) {
      const file = queue.pop();
      if (found.has(file) || !modules.has(file)) continue;
      found.add(file);
      for (const specifier of modules.get(file).imports) {
        const target = resolve(file, specifier);
        if (target) {
          if (!target.includes('node_modules/') && code.test(target) && !target.endsWith('.d.ts') && !modules.has(target)) errors.push(`Runtime graph leaves reviewed source set: ${file} -> ${target}`);
          queue.push(target);
        }
        else if (specifier.startsWith('.') && !/\.(?:css|svg|png|jpg|webp|woff2?)(?:\?|$)/u.test(specifier)) errors.push(`Unresolved local runtime import: ${file} -> ${specifier}`);
      }
    }
    return found;
  }
  for (const client of clients) {
    if (!registered.has(client)) errors.push(`Unreviewed client boundary: ${client}`);
    if (/\/app\/(?:.*\/)?(?:layout|page|template)\.[cm]?[jt]sx?$/u.test(client)) errors.push(`Route trees must remain server-owned: ${client}`);
    for (const file of graph(client)) {
      const info = modules.get(file);
      if (forbiddenAuthority.test(sources.get(file))) errors.push(`Forbidden client authority: ${client} -> ${file}`);
      if (info.imports.some(specifier => authorityPackages.test(specifier))) errors.push(`Server authority in client graph: ${client} -> ${file}`);
      if (file.startsWith(`${frontend}lib/auth/`)) errors.push(`Canonical auth implementation in client graph: ${client} -> ${file}`);
      if (info.opaqueImport) errors.push(`Unreviewable dynamic import in client graph: ${file}`);
    }
  }
  const owners = new Set();
  for (const owner of registry.landingMotionOwners) {
    if (owners.has(owner.path)) errors.push(`Duplicate motion owner: ${owner.path}`);
    owners.add(owner.path);
    if (!/^apps\/frontend\/features\/landing\/motion\/[^/]+\.[cm]?[jt]sx?$/u.test(owner.path) || !owner.purpose?.trim()) errors.push(`Motion owner must be a dedicated reviewed landing module: ${owner.path}`);
    if (!modules.get(owner.path)?.scroll) errors.push(`Stale motion owner: ${owner.path}`);
  }
  for (const [file, info] of modules) {
    if (!file.startsWith(frontend) && !file.startsWith('src/dashboard/')) continue;
    if (info.opaqueImport) errors.push(`Unreviewable runtime import: ${file}`);
    if (info.scroll && !owners.has(file)) errors.push(`ScrollTrigger outside reviewed landing owner: ${file}`);
    // Only public routes and landing feature modules may reach cinematic motion.
    if (!file.startsWith(`${frontend}app/(public)/`) && !file.startsWith(`${frontend}features/landing/`)) {
      for (const reached of graph(file)) {
        if (modules.get(reached).scroll) errors.push(`Non-public graph reaches ScrollTrigger: ${file} -> ${reached}`);
      }
    }
  }
  return [...new Set(errors)];
}

export function assertRepositoryBoundaries() {
  const registry = JSON.parse(readFileSync('docs/design/M5_BOUNDARIES.json', 'utf8'));
  const errors = checkBoundaries(collectSources(), registry);
  if (errors.length) throw new Error(errors.join('\n'));
}
