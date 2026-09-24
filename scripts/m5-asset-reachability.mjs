import assert from 'node:assert/strict';
import path from 'node:path';
import ts from 'typescript';
import postcss from 'postcss';

const mediaFile = 'apps/frontend/features/landing/scene-media.json';
const adapter = 'apps/frontend/features/landing/SceneMedia.tsx';
export function assetReachability(sources, manifest, roots) {
  const references = new Set(), usedPairs = new Set(), visited = new Set();
  const resolve = (file, spec) => {
    const base = path.posix.normalize(path.posix.join(path.posix.dirname(file), spec));
    return [base, ...['.tsx','.ts','.js','/index.tsx','/index.ts'].map(ext=>base+ext)].find(p=>sources.has(p));
  };
  const add = value => { if (value.startsWith('/m5-assets/')) references.add(value.slice('/m5-assets/'.length)); };
  function visit(file) {
    if (visited.has(file)) return;
    visited.add(file);
    const source = sources.get(file);
    assert.notEqual(source, undefined, `Missing runtime module: ${file}`);
    if (file.endsWith('.css')) {
      postcss.parse(source).walkDecls(decl => {
        for (const match of decl.value.matchAll(/url\(\s*(['"]?)([^)'"\s]+)\1\s*\)/g)) add(match[2]);
      });
      return;
    }
    if (file.endsWith('.json')) return;
    const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true);
    const mediaBindings = new Set();
    for (const statement of ast.statements) {
      if (!ts.isImportDeclaration(statement) || statement.importClause?.isTypeOnly) continue;
      const spec = statement.moduleSpecifier.text;
      if (!spec.startsWith('.')) continue;
      const target = resolve(file, spec);
      assert(target, `Unresolved runtime import ${file}: ${spec}`);
      if (target === adapter) {
        const bindings = statement.importClause?.namedBindings;
        if (bindings && ts.isNamedImports(bindings)) for (const binding of bindings.elements) {
          if ((binding.propertyName?.text ?? binding.name.text) === 'SceneMedia') mediaBindings.add(binding.name.text);
        }
      }
      visit(target);
    }
    function follow(spec) {
      if (!spec.startsWith('.')) return;
      const target = resolve(file, spec);
      assert(target, `Unresolved runtime import ${file}: ${spec}`);
      visit(target);
    }
    function walk(node) {
      if (ts.isExportDeclaration(node) && !node.isTypeOnly && node.moduleSpecifier) follow(node.moduleSpecifier.text);
      if (ts.isCallExpression(node) && (node.expression.kind === ts.SyntaxKind.ImportKeyword || node.expression.getText(ast)==='require')) {
        assert(node.arguments.length===1 && ts.isStringLiteral(node.arguments[0]), `Unreviewable dynamic asset graph: ${file}`);
        follow(node.arguments[0].text);
      }
      if (ts.isStringLiteral(node) && node.text.startsWith('/m5-assets/')) {
        assert(ts.isJsxAttribute(node.parent) && ['src','poster'].includes(node.parent.name.getText(ast)), `Asset provenance/runtime disagreement: unsupported asset expression in ${file}`);
      }
      if (ts.isJsxSelfClosingElement(node) || ts.isJsxOpeningElement(node)) {
        const tag = node.tagName.getText(ast);
        for (const attr of node.attributes.properties) {
          if (!ts.isJsxAttribute(attr)) continue;
          if (['src','poster'].includes(attr.name.getText(ast)) && attr.initializer && ts.isStringLiteral(attr.initializer)) add(attr.initializer.text);
          if (mediaBindings.has(tag) && attr.name.getText(ast) === 'asset') {
            assert(attr.initializer && ts.isStringLiteral(attr.initializer), 'SceneMedia asset must be a reviewable literal key');
            usedPairs.add(attr.initializer.text);
          }
        }
      }
      ts.forEachChild(node, walk);
    }
    walk(ast);
  }
  roots.forEach(visit);
  if (visited.has(adapter)) {
    assert(visited.has(mediaFile), 'Scene media adapter no longer consumes declared map');
    const map = JSON.parse(sources.get(mediaFile));
    assert.deepEqual([...usedPairs].sort(), Object.keys(map).sort(), 'Unused or undeclared scene media pair');
    for (const key of usedPairs) for (const variant of ['desktop','mobile']) {
      const item = map[key]?.[variant];
      assert(item && item.src.endsWith(`-${variant}.webp`), `Derivative mismatch: ${key}/${variant}`);
      add(item.src);
      const entry = manifest.find(asset=>`/m5-assets/${asset.file}`===item.src);
      assert(entry && entry.width===item.width && entry.height===item.height, `Media-map/provenance mismatch: ${key}/${variant}`);
    }
  }
  for (const item of manifest) {
    assert(['production-consumed','reference-only','generated-deferred','unused-candidate'].includes(item.classification), `Missing asset classification: ${item.file}`);
    assert.equal(references.has(item.file), item.classification==='production-consumed', `Asset provenance/runtime disagreement: ${item.file}`);
  }
  for (const file of references) assert(manifest.some(item=>item.file===file), `Runtime asset absent from provenance: ${file}`);
  return { reachable: [...references].sort(), runtimeModules: [...visited].sort(), mediaPairs: [...usedPairs].sort() };
}
