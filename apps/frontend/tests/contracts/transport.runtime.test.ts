import test from 'node:test';
import assert from 'node:assert/strict';
import { createPolicyClient } from '../../lib/api/transport.ts';

const readPolicy = {
  'GET /api/workspace/current': {
    key: 'GET /api/workspace/current',
    method: 'GET',
    routePath: '/api/workspace/current',
    responseContract: 'standard_api_envelope',
    idempotency: 'not_required',
    allowedHeaders: [],
  },
} as const;

const mutationPolicy = {
  'POST /api/account/access-check': {
    key: 'POST /api/account/access-check',
    method: 'POST',
    routePath: '/api/account/access-check',
    responseContract: 'standard_api_envelope',
    idempotency: 'required',
    allowedHeaders: ['Idempotency-Key'],
  },
} as const;

const jsonResponse = (status: number, body: unknown) => new Response(JSON.stringify(body), {
  status,
  headers: { 'content-type': 'application/json' },
});

test('controlled read transport preserves the canonical success envelope', async () => {
  const client = createPolicyClient(readPolicy, {
    baseOrigin: 'https://backend.example.invalid',
    fetchImplementation: async (input) => {
      assert.equal(String(input), 'https://backend.example.invalid/api/workspace/current');
      return jsonResponse(200, { ok: true, data: { snapshot: null } });
    },
  });
  const result = await client.read('GET /api/workspace/current', {});
  assert.equal(result.kind, 'success');
  assert.equal(result.responseContract, 'standard_api_envelope');
});

test('default transport performs no automatic retry after an ambiguous network failure', async () => {
  let attempts = 0;
  const client = createPolicyClient(mutationPolicy, {
    baseOrigin: 'https://backend.example.invalid',
    fetchImplementation: async () => {
      attempts += 1;
      throw new TypeError('controlled network disconnect');
    },
  });
  const result = await client.mutate('POST /api/account/access-check', {
    idempotency: { key: 'one-logical-action' },
  });
  assert.equal(result.kind, 'unknown_error');
  assert.equal(result.status, null);
  assert.equal(attempts, 1);
});

test('injected retry policy reuses one caller-supplied idempotency key', async () => {
  const keys: string[] = [];
  const retryContexts: Array<{ attempt: number; idempotencyKey?: string }> = [];
  let attempt = 0;
  const client = createPolicyClient(mutationPolicy, {
    baseOrigin: 'https://backend.example.invalid',
    fetchImplementation: async (_input, init) => {
      keys.push(new Headers(init?.headers).get('Idempotency-Key') ?? '');
      attempt += 1;
      if (attempt === 1) throw new TypeError('controlled network disconnect');
      return jsonResponse(200, { ok: true, data: { allowed: true } });
    },
    shouldRetry: (context) => {
      retryContexts.push({ attempt: context.attempt, idempotencyKey: context.idempotencyKey });
      return context.attempt === 1;
    },
  });
  const result = await client.mutate('POST /api/account/access-check', {
    idempotency: { key: 'one-logical-action' },
  });
  assert.equal(result.kind, 'success');
  assert.deepEqual(keys, ['one-logical-action', 'one-logical-action']);
  assert.deepEqual(retryContexts, [{ attempt: 1, idempotencyKey: 'one-logical-action' }]);
});

test('AbortError preserves caller cancellation and is never passed to retry policy', async () => {
  let attempts = 0;
  let retryCalls = 0;
  const abort = new Error('controlled abort');
  abort.name = 'AbortError';

  const client = createPolicyClient(mutationPolicy, {
    baseOrigin: 'https://backend.example.invalid',
    fetchImplementation: async () => {
      attempts += 1;
      throw abort;
    },
    shouldRetry: () => {
      retryCalls += 1;
      return true;
    },
  });

  await assert.rejects(
    client.mutate('POST /api/account/access-check', {
      idempotency: { key: 'cancelled-action' },
    }),
    (error: unknown) => error instanceof Error && error.name === 'AbortError',
  );
  assert.equal(attempts, 1);
  assert.equal(retryCalls, 0);
});

test('deterministic local contract errors are not converted into transport ambiguity', async () => {
  let fetchCalls = 0;
  const dashboardPolicy = {
    'GET /api/dashboard/{asset}': {
      key: 'GET /api/dashboard/{asset}',
      method: 'GET',
      routePath: '/api/dashboard/{asset}',
      responseContract: 'DashboardChartWorkspaceViewModel_or_KickOffDashboardViewModelV1',
      idempotency: 'not_required',
      allowedHeaders: [],
      unavailableStatuses: [503],
    },
  } as const;
  const client = createPolicyClient(dashboardPolicy, {
    baseOrigin: 'https://backend.example.invalid',
    fetchImplementation: async () => {
      fetchCalls += 1;
      return jsonResponse(200, {});
    },
  });
  const unsafeClient = client as unknown as {
    read(operation: 'GET /api/dashboard/{asset}', input: unknown): Promise<unknown>;
  };

  await assert.rejects(
    unsafeClient.read('GET /api/dashboard/{asset}', {}),
    /Missing path parameter asset/u,
  );
  assert.equal(fetchCalls, 0);
});

test('caller cannot author Idempotency-Key directly even with casing variation', async () => {
  let fetchCalls = 0;
  const client = createPolicyClient(mutationPolicy, {
    baseOrigin: 'https://backend.example.invalid',
    fetchImplementation: async () => {
      fetchCalls += 1;
      return jsonResponse(200, { ok: true });
    },
  });
  const unsafeClient = client as unknown as {
    mutate(operation: 'POST /api/account/access-check', input: unknown): Promise<unknown>;
  };

  await assert.rejects(
    unsafeClient.mutate('POST /api/account/access-check', {
      headers: { 'idempotency-key': 'bypass' },
      idempotency: { key: 'canonical-key' },
    }),
    /must be supplied through idempotency context/u,
  );
  assert.equal(fetchCalls, 0);
});

test('canonical 413, 424 and 500 states remain distinct', async (t) => {
  const cases = [
    [413, { ok: false, error: { code: 'payload_too_large', message: 'too large' } }, 'payload_too_large'],
    [424, { ok: false, error: { code: 'dependency_failed', message: 'dependency unavailable' } }, 'unavailable_degraded'],
    [500, { ok: false, error: { code: 'internal_error', message: 'internal failure' } }, 'internal_failure'],
  ] as const;

  for (const [status, body, expectedKind] of cases) {
    await t.test(String(status), async () => {
      const client = createPolicyClient(readPolicy, {
        baseOrigin: 'https://backend.example.invalid',
        fetchImplementation: async () => jsonResponse(status, body),
      });
      const result = await client.read('GET /api/workspace/current', {});
      assert.equal(result.kind, expectedKind);
      assert.equal(result.status, status);
    });
  }
});

test('documented dashboard 503 is unavailable/degraded', async () => {
  const dashboardPolicy = {
    'GET /api/dashboard/{asset}': {
      key: 'GET /api/dashboard/{asset}',
      method: 'GET',
      routePath: '/api/dashboard/{asset}',
      responseContract: 'DashboardChartWorkspaceViewModel_or_KickOffDashboardViewModelV1',
      idempotency: 'not_required',
      allowedHeaders: [],
      unavailableStatuses: [503],
    },
  } as const;
  const client = createPolicyClient(dashboardPolicy, {
    baseOrigin: 'https://backend.example.invalid',
    fetchImplementation: async () => jsonResponse(503, { error: 'Dashboard unavailable' }),
  });
  const result = await client.read('GET /api/dashboard/{asset}', { path: { asset: 'xau_usd' } });
  assert.equal(result.kind, 'unavailable_degraded');
  assert.equal(result.status, 503);
});

test('an undocumented 503 remains unknown rather than being generalized as degraded', async () => {
  const client = createPolicyClient(readPolicy, {
    baseOrigin: 'https://backend.example.invalid',
    fetchImplementation: async () => jsonResponse(503, { error: 'opaque unavailable response' }),
  });
  const result = await client.read('GET /api/workspace/current', {});
  assert.equal(result.kind, 'unknown_error');
  assert.equal(result.status, 503);
});

test('unrecognized errors remain safe unknown outcomes', async () => {
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
      key: 'POST /api/billing/checkout',
      method: 'POST',
      routePath: '/api/billing/checkout',
      responseContract: 'handler_specific_json',
      idempotency: 'required',
      allowedHeaders: ['Idempotency-Key'],
      unavailableStatuses: [503],
    },
  } as const;
  const client = createPolicyClient(checkoutPolicy, {
    baseOrigin: 'https://backend.example.invalid',
    fetchImplementation: async () => jsonResponse(202, {
      ok: true,
      operation: { state: 'processing' },
    }),
  });
  const result = await client.mutate('POST /api/billing/checkout', {
    idempotency: { key: 'checkout-intent' },
  });
  assert.equal(result.kind, 'commercial_pending');
  if (result.kind === 'commercial_pending') assert.equal(result.commercialState, 'processing');
});
