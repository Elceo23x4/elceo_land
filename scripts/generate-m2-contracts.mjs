import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { mkdtemp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const check = process.argv.includes('--check');
const generatedDir = path.join(root, 'apps/frontend/lib/contracts/generated');
const openapiPath = path.join(root, 'contracts/backend/openapi.json');
const inventoryPath = path.join(root, 'contracts/backend/route-inventory.json');
const sourcePath = path.join(root, 'docs/backend-contract/SOURCE.json');
const summaryPath = path.join(root, 'contracts/backend/handoff-summary.json');
const mocksDir = path.join(root, 'contracts/backend/mocks');

const parse = async (file) => JSON.parse(await readFile(file, 'utf8'));
const [openapi, inventory, source, summary] = await Promise.all([
  parse(openapiPath), parse(inventoryPath), parse(sourcePath), parse(summaryPath),
]);

if (source.sourceCommit !== '771487b46874afc28a21f260a2c12f92bfe8f736') {
  throw new Error(`Unexpected backend source pin: ${source.sourceCommit}`);
}
if (inventory.frozenMainCommit !== summary.frozenMainCommit
    || inventory.frozenFunctionalTree !== summary.frozenFunctionalTree) {
  throw new Error('Route inventory does not match frozen handoff provenance.');
}
if (inventory.routeFileCount !== inventory.routes.length) {
  throw new Error(`Route file count mismatch: ${inventory.routeFileCount} != ${inventory.routes.length}`);
}

const operations = [];
const seen = new Set();
for (const route of inventory.routes) {
  for (const method of route.methods) {
    const key = `${method} ${route.routePath}`;
    if (seen.has(key)) throw new Error(`Duplicate inventory operation: ${key}`);
    seen.add(key);
    operations.push({ key, method, ...route, methods: undefined });
  }
}
if (inventory.operationCount !== operations.length) {
  throw new Error(`Operation count mismatch: ${inventory.operationCount} != ${operations.length}`);
}

const openapiOperations = new Map();
for (const [routePath, pathItem] of Object.entries(openapi.paths ?? {})) {
  for (const method of ['get', 'post', 'put', 'patch', 'delete', 'head', 'options']) {
    if (!pathItem[method]) continue;
    const key = `${method.toUpperCase()} ${routePath}`;
    if (openapiOperations.has(key)) throw new Error(`Duplicate OpenAPI operation: ${key}`);
    openapiOperations.set(key, pathItem[method]);
  }
}
if (openapiOperations.size !== operations.length) {
  throw new Error(`OpenAPI operation count mismatch: ${openapiOperations.size} != ${operations.length}`);
}
for (const { key } of operations) {
  if (!openapiOperations.has(key)) throw new Error(`Operation missing from OpenAPI: ${key}`);
}
for (const key of openapiOperations.keys()) {
  if (!seen.has(key)) throw new Error(`Operation missing from route inventory: ${key}`);
}

const sha256 = (value) => createHash('sha256').update(value).digest('hex');
const openapiBytes = await readFile(openapiPath);
const provenance = [
  '/**',
  ' * AUTO-GENERATED. DO NOT EDIT.',
  ` * Source: ${source.sourceRepository}@${source.sourceCommit}`,
  ` * Frozen functional tree: ${inventory.frozenFunctionalTree}`,
  ` * Input: contracts/backend/openapi.json (sha256:${sha256(openapiBytes)})`,
  ' * Generator: @hey-api/openapi-ts@0.99.0 (type-only output)',
  ' * Regenerate: npm run generate:m2-contracts',
  ' */',
  '',
].join('\n');

const temporary = await mkdtemp(path.join(tmpdir(), 'elceo-m2-contracts-'));
try {
  const rawTypesDir = path.join(temporary, 'openapi');
  execFileSync(path.join(root, 'node_modules/.bin/openapi-ts'), [
    '-i', openapiPath,
    '-o', rawTypesDir,
    '-p', '@hey-api/typescript',
    '--no-log-file',
    '--silent',
  ], { cwd: root, stdio: 'pipe' });
  const rawTypes = await readFile(path.join(rawTypesDir, 'types.gen.ts'), 'utf8');
  const toTypeStem = (operationId) => operationId
    .split(/[^A-Za-z0-9]+/u)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join('');

  const registry = {};
  const browserUserKeys = [];
  const trustedServerKeys = [];
  const excludedFrontendKeys = [];
  const unresolved = [];

  for (const operation of operations.sort((a, b) => a.key.localeCompare(b.key))) {
    const spec = openapiOperations.get(operation.key);
    const allowedHeaders = [...new Set([
      ...operation.headerReferences,
      ...(operation.idempotency === 'required' ? ['Idempotency-Key'] : []),
    ])].sort();
    registry[operation.key] = {
      key: operation.key,
      method: operation.method,
      routePath: operation.routePath,
      routeFile: operation.routeFile,
      operationId: spec.operationId,
      family: operation.family,
      classification: operation.classification,
      runtimeExpectation: operation.runtimeExpectation,
      uiAudience: operation.uiAudience,
      browserSafe: operation.browserSafe,
      ownerBoundary: operation.ownerBoundary,
      targetUserBoundary: operation.targetUserBoundary,
      productEntitlement: operation.productEntitlement,
      internalToken: operation.internalToken,
      adminPermission: operation.adminPermission,
      stepUp: operation.stepUp,
      idempotency: operation.idempotency,
      audit: operation.audit,
      commercialRestrictionFirst: operation.commercialRestrictionFirst,
      sideEffectRisk: operation.sideEffectRisk,
      declaredPolicyExpectation: operation.declaredPolicyExpectation,
      handlerGuardEvidence: operation.handlerGuardEvidence,
      runtimeTestEvidence: operation.runtimeTestEvidence,
      testCoverageStatus: operation.testCoverageStatus,
      browserMutationBoundary: operation.browserMutationBoundary,
      responseContract: operation.responseContract,
      pathParameters: operation.pathParameters,
      queryParameters: operation.queryParameters,
      headerReferences: operation.headerReferences,
      allowedHeaders,
      validators: operation.validators,
      importedTypes: operation.importedTypes,
      explicitStatuses: operation.explicitStatuses,
      hasJsonBody: operation.hasJsonBody,
      errorTokens: operation.errorTokens,
      sourceProvenance: operation.sourceProvenance,
    };

    if (operation.browserSafe && operation.uiAudience === 'user_ui'
        && operation.internalToken === 'not_required') {
      browserUserKeys.push(operation.key);
    } else if (!operation.browserSafe
        && ['admin_server_bridge', 'super_admin_server_bridge'].includes(operation.uiAudience)
        && operation.internalToken === 'required') {
      trustedServerKeys.push(operation.key);
    } else {
      excludedFrontendKeys.push(operation.key);
    }

    const constraintEvidence = spec['x-elceo-field-constraints'];
    if (constraintEvidence === 'Unspecified beyond frozen handler/type contract.') {
      unresolved.push({
        key: operation.key,
        routeFile: operation.routeFile,
        validators: operation.validators,
        sourceProvenance: operation.sourceProvenance,
        reason: constraintEvidence,
      });
    }
  }

  if (browserUserKeys.length + trustedServerKeys.length + excludedFrontendKeys.length !== operations.length) {
    throw new Error('Frontend operation partitions do not cover the inventory exactly once.');
  }
  if (unresolved.length !== summary.unresolvedFieldConstraintOperations) {
    throw new Error(`Unresolved constraint count mismatch: ${unresolved.length}`);
  }

  const browserUnexpectedHeaders = browserUserKeys.flatMap((key) => (
    registry[key].allowedHeaders
      .filter((name) => name.toLowerCase() !== 'idempotency-key')
      .map((name) => `${key}: ${name}`)
  ));
  if (browserUnexpectedHeaders.length) {
    throw new Error(`Browser runtime requires unsupported caller-authored headers: ${browserUnexpectedHeaders.join(', ')}`);
  }

  const browserNonGetWithoutIdempotency = browserUserKeys.filter((key) => (
    registry[key].method !== 'GET' && registry[key].idempotency !== 'required'
  ));
  if (browserNonGetWithoutIdempotency.length) {
    throw new Error(`Compact browser policy cannot infer idempotency for: ${browserNonGetWithoutIdempotency.join(', ')}`);
  }

  const idempotencyRequiredReadKeys = browserUserKeys.filter((key) => (
    registry[key].method === 'GET' && registry[key].idempotency === 'required'
  ));
  const responseContractOverrides = Object.fromEntries(
    browserUserKeys
      .filter((key) => registry[key].responseContract !== 'standard_api_envelope')
      .map((key) => [key, registry[key].responseContract]),
  );

  const mockRecords = [];
  for (const name of (await readdir(mocksDir)).filter((file) => file.endsWith('.json')).sort()) {
    const mock = await parse(path.join(mocksDir, name));
    const key = `${mock._meta?.method} ${mock._meta?.route}`;
    if (!registry[key]) throw new Error(`Canonical mock ${name} has no inventory operation: ${key}`);
    if (mock._meta.frozenMainCommit !== inventory.frozenMainCommit) {
      throw new Error(`Canonical mock ${name} has stale frozen provenance.`);
    }
    mockRecords.push({
      file: `contracts/backend/mocks/${name}`,
      key,
      family: registry[key].family,
      responseContract: registry[key].responseContract,
      browserSafe: registry[key].browserSafe,
      sourceContract: mock._meta.sourceContract,
      scenario: mock._meta.scenario,
    });
  }

  const registryText = `${provenance}import 'server-only';\n\nexport const operationRegistry = ${JSON.stringify(registry, null, 2)} as const;\n\n`
    + 'export type OperationKey = keyof typeof operationRegistry;\n'
    + 'export type OperationPolicy<K extends OperationKey = OperationKey> = (typeof operationRegistry)[K];\n\n'
    + `export const browserUserOperationKeys = ${JSON.stringify(browserUserKeys, null, 2)} as const;\n`
    + `export const trustedServerOperationKeys = ${JSON.stringify(trustedServerKeys, null, 2)} as const;\n`
    + `export const excludedFrontendOperationKeys = ${JSON.stringify(excludedFrontendKeys, null, 2)} as const;\n`;

  const trustedRegistry = Object.fromEntries(trustedServerKeys.map((key) => [key, registry[key]]));

  const browserRegistryText = `${provenance}const browserOperationKeys = ${JSON.stringify(browserUserKeys, null, 2)} as const;\n\n`
    + `const idempotencyRequiredReadKeys = new Set<string>(${JSON.stringify(idempotencyRequiredReadKeys, null, 2)});\n\n`
    + `const responseContractOverrides: Partial<Record<(typeof browserOperationKeys)[number], string>> = ${JSON.stringify(responseContractOverrides, null, 2)};\n\n`
    + 'type BrowserOperationKey = (typeof browserOperationKeys)[number];\n\n'
    + 'type BrowserRuntimePolicy = Readonly<{\n'
    + '  key: BrowserOperationKey;\n'
    + '  method: string;\n'
    + '  routePath: string;\n'
    + '  responseContract: string;\n'
    + "  idempotency: 'required' | 'not_required';\n"
    + '  allowedHeaders: readonly string[];\n'
    + '}>;\n\n'
    + 'const createRuntimePolicy = (key: BrowserOperationKey): BrowserRuntimePolicy => {\n'
    + "  const separator = key.indexOf(' ');\n"
    + '  const method = key.slice(0, separator);\n'
    + '  const routePath = key.slice(separator + 1);\n'
    + "  const idempotency = method === 'GET' && !idempotencyRequiredReadKeys.has(key)\n"
    + "    ? 'not_required'\n"
    + "    : 'required';\n"
    + '  return {\n'
    + '    key,\n'
    + '    method,\n'
    + '    routePath,\n'
    + "    responseContract: responseContractOverrides[key] ?? 'standard_api_envelope',\n"
    + '    idempotency,\n'
    + "    allowedHeaders: idempotency === 'required' ? ['Idempotency-Key'] : [],\n"
    + '  };\n'
    + '};\n\n'
    + 'export const browserOperationRegistry = Object.fromEntries(\n'
    + '  browserOperationKeys.map((key) => [key, createRuntimePolicy(key)]),\n'
    + ') as Readonly<Record<BrowserOperationKey, BrowserRuntimePolicy>>;\n';

  const trustedRegistryText = `${provenance}import 'server-only';\n\nexport const trustedOperationRegistry = ${JSON.stringify(trustedRegistry, null, 2)} as const;\n`;
  const partitionsText = `${JSON.stringify({
    schemaVersion: 1,
    sourceRepository: source.sourceRepository,
    sourceCommit: source.sourceCommit,
    operationCount: operations.length,
    browserUserOperationKeys: browserUserKeys,
    trustedServerOperationKeys: trustedServerKeys,
    excludedFrontendOperationKeys: excludedFrontendKeys,
  }, null, 2)}\n`;
  const mocksText = `${provenance}export const canonicalMockRegistry = ${JSON.stringify(mockRecords, null, 2)} as const;\n`;
  const operationTypeImports = [];
  const operationTypeMembers = [];
  for (const operation of operations) {
    const stem = toTypeStem(openapiOperations.get(operation.key).operationId);
    const request = `${stem}Data`;
    const response = `${stem}Response`;
    const error = `${stem}Error`;
    for (const typeName of [request, response]) {
      if (!rawTypes.includes(`export type ${typeName} =`)) {
        throw new Error(`Generated OpenAPI type missing for ${operation.key}: ${typeName}`);
      }
    }
    operationTypeImports.push(request, response);
    const hasError = rawTypes.includes(`export type ${error} =`);
    if (hasError) operationTypeImports.push(error);
    operationTypeMembers.push(`  ${JSON.stringify(operation.key)}: {\n`
      + `    request: ${request};\n`
      + `    response: ${response};\n`
      + `    error: ${hasError ? error : 'never'};\n`
      + '  };');
  }
  const operationMapText = `${provenance}import type {\n  ${[...new Set(operationTypeImports)].sort().join(',\n  ')},\n} from './openapi.generated';\n\n`
    + `export interface OpenApiOperationTypes {\n${operationTypeMembers.join('\n')}\n}\n`;
  const unresolvedText = `${JSON.stringify({
    schemaVersion: 1,
    sourceRepository: source.sourceRepository,
    sourceCommit: source.sourceCommit,
    frozenFunctionalTree: inventory.frozenFunctionalTree,
    rule: 'No frontend constraint may be created for these operations without new canonical evidence.',
    operationCount: unresolved.length,
    operations: unresolved,
  }, null, 2)}\n`;

  const expected = new Map([
    ['openapi.generated.ts', provenance + rawTypes],
    ['openapi-operation-map.generated.ts', operationMapText],
    ['operation-registry.generated.ts', registryText],
    ['browser-operation-registry.generated.ts', browserRegistryText],
    ['trusted-operation-registry.generated.ts', trustedRegistryText],
    ['operation-partitions.generated.json', partitionsText],
    ['mock-registry.generated.ts', mocksText],
    ['unresolved-contracts.generated.json', unresolvedText],
  ]);

  if (check) {
    const existing = new Set(await readdir(generatedDir));
    for (const [name, content] of expected) {
      existing.delete(name);
      const current = await readFile(path.join(generatedDir, name), 'utf8').catch(() => null);
      if (current !== content) throw new Error(`Generated contract drift: ${name}`);
    }
    if (existing.size) throw new Error(`Unexpected generated files: ${[...existing].join(', ')}`);
    console.log(`M2 generated contracts are deterministic: ${operations.length} operations, ${mockRecords.length} mocks, ${unresolved.length} unresolved constraints.`);
  } else {
    await rm(generatedDir, { recursive: true, force: true });
    await mkdir(generatedDir, { recursive: true });
    await Promise.all([...expected].map(([name, content]) => writeFile(path.join(generatedDir, name), content)));
    console.log(`Generated ${operations.length} operation policies and OpenAPI types from ${source.sourceRepository}@${source.sourceCommit}.`);
  }
} finally {
  await rm(temporary, { recursive: true, force: true });
}
