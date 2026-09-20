import { createBrowserApiClient } from '../../lib/api/browser';

const browser = createBrowserApiClient({
  baseOrigin: 'https://api.example.invalid',
  fetchImplementation: fetch,
});

browser.read('GET /api/workspace/current', {});

// @ts-expect-error Non-idempotent reads reject logical-operation idempotency context.
browser.read('GET /api/workspace/current', { idempotency: { key: 'not-accepted' } });

browser.read('GET /api/journal/cases', {
  idempotency: { key: 'journal-list-read' },
});

// @ts-expect-error The frozen route policy requires idempotency for this GET operation.
browser.read('GET /api/journal/cases', {});

// @ts-expect-error Idempotency-Key is controlled by idempotency context, not caller headers.
browser.read('GET /api/journal/cases', {
  headers: { 'Idempotency-Key': 'bypass' },
  idempotency: { key: 'journal-list-read' },
});
