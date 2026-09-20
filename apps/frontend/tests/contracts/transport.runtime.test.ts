import test from 'node:test';
import assert from 'node:assert/strict';
import { createPolicyClient } from '../../lib/api/transport.ts';

const readPolicy = {
  'GET /api/workspace/current': {
    key: 'GET /api/workspace/current', method: 'GET', routePath: '/api/workspace/current',
    responseContract: 'standard_api_envelope', idempotency: 'not_required', sideEffectRisk: 'read',
    allowedHeaders: [],
  },
} as const;

const mutationPolicy = {
  'POST /api/account/access-check': {
    key: 'POST /api/account/access-check', method: 'POST', routePath: '/api/account/access-check',
    responseContract: 'standard_api_envelope', idempotency: 'required', sideEffectRisk: 'mutation',
    allowedHeaders: ['Idempotency-Key'],
  },
} as const;

test('controlled read transport preserves the canonical success envelope', async () => {
  const client = createPolicyClient(readPolicy, {
    baseOrigin: 'https://backend.example.invalid',
    fetchImplementation: async (input) => {
      assert.equal(String(input), 'https://backend.example.invalid/api/workspace/current');
      return new Response(JSON.stringify({ ok: true, data: { snapshot: null } }), {
        status: 200, headers: { 'content-type': 'application/json' },
      });
    },
  });
  const result = await client.read('GET /api/workspace/current', {});
  assert.equal(result.kind, 'success');
  assert.equal(result.responseContract, 'standard_api_envelope');
});

test('network retry reuses one caller-supplied idempotency key', async () => {
  const keys: string[] = [];
  let attempt = 0;
  const client = createPolicyClient(mutationPolicy, {
    baseOrigin: 'https://backend.example.invalid',
    fetchImplementation: async (_input, init) => {
      keys.push(new Headers(init?.headers).get('Idempotency-Key') ?? '');
      attempt += 1;
      if (attempt === 1) throw new TypeError('controlled network disconnect');
      return new Response(JSON.stringify({ ok: true, data: { allowed: true } }), {
        status: 200, headers: { 'content-type': 'application/json' },
      });
    },
  });
  const result = await client.mutate('POST /api/account/access-check', {
    idempotency: { key: 'one-logical-action', maxAttempts: 2 },
  });
  assert.equal(result.kind, 'success');
  assert.deepEqual(keys, ['one-logical-action', 'one-logical-action']);
});

test('unknown errors remain safe unknown outcomes', async () => {
  const client = createPolicyClient(mutationPolicy, {
    baseOrigin: 'https://backend.example.invalid',
    fetchImplementation: async () => new Response('<html>opaque failure</html>', { status: 418 }),
  });
  const result = await client.mutate('POST /api/account/access-check', {
    idempotency: { key: 'ambiguous-action' },
  });
  assert.equal(result.kind, 'unknown_error');
  assert.equal(result.status, 418);
  assert.equal(result.error.code, undefined);
});

test('checkout processing remains a dedicated commercial-pending outcome', async () => {
  const checkoutPolicy = {
    'POST /api/billing/checkout': {
      key: 'POST /api/billing/checkout', method: 'POST', routePath: '/api/billing/checkout',
      responseContract: 'handler_specific_json', idempotency: 'required', sideEffectRisk: 'live_activation_blocked',
      allowedHeaders: ['Idempotency-Key'],
    },
  } as const;
  const client = createPolicyClient(checkoutPolicy, {
    baseOrigin: 'https://backend.example.invalid',
    fetchImplementation: async () => new Response(JSON.stringify({ ok: true, operation: { state: 'processing' } }), { status: 202 }),
  });
  const result = await client.mutate('POST /api/billing/checkout', { idempotency: { key: 'checkout-intent' } });
  assert.equal(result.kind, 'commercial_pending');
  if (result.kind === 'commercial_pending') assert.equal(result.commercialState, 'processing');
});
