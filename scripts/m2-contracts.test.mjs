import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const json = async (file) => JSON.parse(await readFile(path.join(root, file), 'utf8'));
const [inventory, openapi, summary, source, partitions, unresolved] = await Promise.all([
  json('contracts/backend/route-inventory.json'),
  json('contracts/backend/openapi.json'),
  json('contracts/backend/handoff-summary.json'),
  json('docs/backend-contract/SOURCE.json'),
  json('apps/frontend/lib/contracts/generated/operation-partitions.generated.json'),
  json('apps/frontend/lib/contracts/generated/unresolved-contracts.generated.json'),
]);

const operations = inventory.routes.flatMap((route) => route.methods.map((method) => ({
  ...route,
  method,
  key: `${method} ${route.routePath}`,
})));
const operationMap = new Map(operations.map((operation) => [operation.key, operation]));

test('frozen route and OpenAPI inventories cover the same unique 168 operations', () => {
  assert.equal(inventory.routeFileCount, inventory.routes.length);
  assert.equal(inventory.routeFileCount, summary.routeFileCount);
  assert.equal(inventory.operationCount, operations.length);
  assert.equal(inventory.operationCount, summary.operationCount);
  assert.equal(operationMap.size, operations.length);
  const openapiKeys = [];
  const operationIds = new Set();
  for (const [routePath, item] of Object.entries(openapi.paths)) {
    for (const method of ['get', 'post', 'put', 'patch', 'delete', 'head', 'options']) {
      if (!item[method]) continue;
      openapiKeys.push(`${method.toUpperCase()} ${routePath}`);
      assert.equal(typeof item[method].operationId, 'string');
      assert.ok(!operationIds.has(item[method].operationId), `duplicate operationId ${item[method].operationId}`);
      operationIds.add(item[method].operationId);
    }
  }
  assert.deepEqual(new Set(openapiKeys), new Set(operationMap.keys()));
});

test('browser, trusted-server and excluded operations form one exact authority partition', () => {
  const all = [
    ...partitions.browserUserOperationKeys,
    ...partitions.trustedServerOperationKeys,
    ...partitions.excludedFrontendOperationKeys,
  ];
  assert.equal(all.length, operations.length);
  assert.equal(new Set(all).size, operations.length);
  assert.deepEqual(new Set(all), new Set(operationMap.keys()));
  assert.equal(partitions.browserUserOperationKeys.length, 95);
  assert.equal(partitions.trustedServerOperationKeys.length, 55);
  for (const key of partitions.browserUserOperationKeys) {
    const operation = operationMap.get(key);
    assert.equal(operation.browserSafe, true);
    assert.equal(operation.uiAudience, 'user_ui');
    assert.equal(operation.internalToken, 'not_required');
  }
  for (const key of partitions.trustedServerOperationKeys) {
    const operation = operationMap.get(key);
    assert.equal(operation.browserSafe, false);
    assert.ok(['admin_server_bridge', 'super_admin_server_bridge'].includes(operation.uiAudience));
    assert.equal(operation.internalToken, 'required');
  }
  for (const key of partitions.excludedFrontendOperationKeys) {
    const operation = operationMap.get(key);
    assert.ok(['auth_framework', 'provider_webhook', 'server_internal'].includes(operation.uiAudience)
      || key === 'POST /api/notifications/delivery/dispatch');
  }
});

test('browser registry cannot carry internal authority into a client bundle', async () => {
  const browserRegistry = await readFile(path.join(root,
    'apps/frontend/lib/contracts/generated/browser-operation-registry.generated.ts'), 'utf8');
  assert.doesNotMatch(browserRegistry, /x-elceo-internal-token|"internalToken": "required"|admin_server_bridge|super_admin_server_bridge/iu);
  const serverRegistry = await readFile(path.join(root,
    'apps/frontend/lib/contracts/generated/trusted-operation-registry.generated.ts'), 'utf8');
  assert.match(serverRegistry, /^import 'server-only';/mu);
});

test('unresolved constraints are the exact frozen unspecified set', () => {
  const expected = [];
  for (const [routePath, item] of Object.entries(openapi.paths)) {
    for (const method of ['get', 'post', 'put', 'patch', 'delete', 'head', 'options']) {
      if (item[method]?.['x-elceo-field-constraints'] === 'Unspecified beyond frozen handler/type contract.') {
        expected.push(`${method.toUpperCase()} ${routePath}`);
      }
    }
  }
  assert.equal(unresolved.sourceCommit, source.sourceCommit);
  assert.equal(unresolved.operationCount, summary.unresolvedFieldConstraintOperations);
  assert.deepEqual(new Set(unresolved.operations.map((item) => item.key)), new Set(expected));
});

test('all 13 canonical mocks map once to their frozen operation and response family', async () => {
  const names = (await readdir(path.join(root, 'contracts/backend/mocks')))
    .filter((name) => name.endsWith('.json')).sort();
  assert.equal(names.length, 13);
  for (const name of names) {
    const mock = await json(`contracts/backend/mocks/${name}`);
    const key = `${mock._meta.method} ${mock._meta.route}`;
    const operation = operationMap.get(key);
    assert.ok(operation, `${name}: operation missing`);
    assert.equal(mock._meta.frozenMainCommit, inventory.frozenMainCommit);
    assert.equal(typeof mock._meta.sourceContract, 'string');
    assert.ok(mock._meta.sourceContract.length > 0);
    if (operation.responseContract === 'standard_api_envelope') {
      assert.equal(mock.ok, true, `${name}: standard success envelope`);
      assert.equal(typeof mock.data, 'object');
    } else if (operation.responseContract === 'authjs_framework_owned') {
      assert.equal(typeof mock.user, 'object');
      assert.equal(typeof mock.expires, 'string');
      assert.equal('ok' in mock, false);
    } else if (operation.responseContract === 'handler_specific_json') {
      assert.equal(mock.ok, true);
      assert.ok(['processing', 'unknown', 'reconciliation_required', 'succeeded', 'failed'].includes(mock.operation.state));
    } else if (operation.responseContract === 'DashboardChartWorkspaceViewModel_or_KickOffDashboardViewModelV1') {
      assert.equal(typeof mock.dashboard, 'object');
      assert.equal(typeof mock.chart, 'object');
      assert.equal(mock.dashboard.contract_version, 'dashboard-display-v2');
    } else {
      assert.fail(`${name}: untested response contract ${operation.responseContract}`);
    }
  }
});

test('passive latest/current/history/dashboard reads remain read-only operations', () => {
  const passive = operations.filter((operation) => operation.method === 'GET'
    && (operation.routePath.includes('/latest') || operation.routePath.includes('/current')
      || operation.routePath.includes('/history') || operation.routePath.startsWith('/api/dashboard/')));
  assert.ok(passive.length > 0);
  for (const operation of passive) {
    assert.equal(operation.sideEffectRisk, 'read', operation.key);
    assert.equal(operation.idempotency, 'not_required', operation.key);
  }
});

test('M2 helpers contain no client-side authority or intelligence calculators', async () => {
  const files = [
    'apps/frontend/lib/api/browser.ts',
    'apps/frontend/lib/api/server.ts',
    'apps/frontend/lib/api/transport.ts',
    'apps/frontend/lib/contracts/result.ts',
  ];
  const text = (await Promise.all(files.map((file) => readFile(path.join(root, file), 'utf8')))).join('\n');
  assert.doesNotMatch(text, /compute(?:DirectionalBias|Confidence|Entitlement|Billing)|calculate(?:DirectionalBias|Confidence)|deduplicateEvidence|mintSession|from\s+['"]next-auth|\bNextAuth\s*\(/iu);
});
