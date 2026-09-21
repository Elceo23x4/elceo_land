import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const read = (path) => readFileSync(path, 'utf8');
const m4Base = '2a6d34cda00c5979581b3d3eb4eb192830945803';

const requiredReadKeys = [
  'GET /api/account/profile/social-identifiers',
  'GET /api/journal/cases',
  'GET /api/journal/entries',
  'GET /api/notifications/alerts',
  'GET /api/notifications/subscriptions',
  'GET /api/notifications/targets',
  'GET /api/portfolio/actions',
  'GET /api/portfolio/actions/{actionId}',
  'GET /api/portfolio/positions',
  'GET /api/portfolio/positions/{positionId}',
  'GET /api/portfolio/watchlist',
  'GET /api/portfolio/watchlist/{entryId}',
];

test('accepted dashboard source, geometry and dashboard assets remain byte unchanged from M4 base', () => {
  const diff = execFileSync('git', [
    'diff', m4Base, '--',
    'src/dashboard',
    'src/assets/source/dashboard',
  ], { encoding: 'utf8' });
  assert.equal(diff, '');
});

test('Next dashboard bridge imports the accepted responsive cockpit without legacy mock access', () => {
  const source = read('apps/frontend/features/dashboard/DashboardParityClient.tsx');
  assert.match(source, /src\/dashboard\/responsive\/DashboardResponsiveCockpit/u);
  assert.doesNotMatch(source, /DashboardApp|RouteGate|mockAccessState|kickoffAccess/u);
  assert.match(source, /M4_DASHBOARD_PARITY_SENTINEL/u);
});

test('canonical dashboard route is present and remains an App Router migration surface', () => {
  const page = read('apps/frontend/app/(app)/dashboard/page.tsx');
  assert.match(page, /DashboardParityClient/u);
  assert.doesNotMatch(page, /planTier|premium|kick_off|entitlement/u);
});

test('all frozen idempotency-required browser GET operations are represented by the typed-read correction', () => {
  const registry = read('apps/frontend/lib/contracts/generated/browser-operation-registry.generated.ts');
  const match = registry.match(/const idempotencyRequiredReadKeys = new Set<string>\(\[([\s\S]*?)\]\);/u);
  assert.ok(match, 'generated browser idempotency-required read set must remain present');
  const keys = JSON.parse(`[${match[1]}]`);
  assert.deepEqual(keys, requiredReadKeys);

  const transport = read('apps/frontend/lib/api/transport.ts');
  assert.match(transport, /export type ReadInput<K extends OperationKey> = OperationInput<K> & IdempotencyInput<K>;/u);
  assert.match(transport, /input: ReadInput<P>/u);
});

test('M4 does not introduce client-side dashboard truth synthesis into the Next bridge', () => {
  const bridge = read('apps/frontend/features/dashboard/DashboardParityClient.tsx');
  assert.doesNotMatch(bridge, /confidence_total|directional_bias|contradiction|evidence_score|macro_headlines/u);
});
