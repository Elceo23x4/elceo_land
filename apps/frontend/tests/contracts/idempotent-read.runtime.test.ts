import test from 'node:test';
import assert from 'node:assert/strict';
import { createPolicyClient } from '../../lib/api/transport.ts';

const requiredReadPolicy = {
  'GET /api/journal/cases': {
    key: 'GET /api/journal/cases',
    method: 'GET',
    routePath: '/api/journal/cases',
    responseContract: 'standard_api_envelope',
    idempotency: 'required',
    allowedHeaders: ['Idempotency-Key'],
  },
} as const;

const jsonResponse = (status: number, body: unknown) => new Response(JSON.stringify(body), {
  status,
  headers: { 'content-type': 'application/json' },
});

test('required-idempotency GET emits the caller logical-operation key', async () => {
  let observedKey: string | null = null;
  const client = createPolicyClient(requiredReadPolicy, {
    baseOrigin: 'https://backend.example.invalid',
    fetchImplementation: async (_input, init) => {
      observedKey = new Headers(init?.headers).get('Idempotency-Key');
      return jsonResponse(200, { ok: true, data: { items: [] } });
    },
  });

  const result = await client.read('GET /api/journal/cases', {
    idempotency: { key: 'journal-list-read' },
  });
  assert.equal(result.kind, 'success');
  assert.equal(observedKey, 'journal-list-read');
});

test('required-idempotency GET fails before transport when context is missing', async () => {
  let fetchCalls = 0;
  const client = createPolicyClient(requiredReadPolicy, {
    baseOrigin: 'https://backend.example.invalid',
    fetchImplementation: async () => {
      fetchCalls += 1;
      return jsonResponse(200, { ok: true });
    },
  });
  const unsafeClient = client as unknown as {
    read(operation: 'GET /api/journal/cases', input: unknown): Promise<unknown>;
  };

  await assert.rejects(
    unsafeClient.read('GET /api/journal/cases', {}),
    /Idempotency context is required/u,
  );
  assert.equal(fetchCalls, 0);
});

test('required-idempotency GET still performs no automatic retry by default', async () => {
  let attempts = 0;
  const client = createPolicyClient(requiredReadPolicy, {
    baseOrigin: 'https://backend.example.invalid',
    fetchImplementation: async () => {
      attempts += 1;
      throw new TypeError('controlled network disconnect');
    },
  });

  const result = await client.read('GET /api/journal/cases', {
    idempotency: { key: 'single-read-attempt' },
  });
  assert.equal(result.kind, 'unknown_error');
  assert.equal(attempts, 1);
});
