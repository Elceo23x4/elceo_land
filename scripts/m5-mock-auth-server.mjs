// Controlled browser-test service only. Never imported by application code.
import { createServer } from 'node:http';
const session = {
  user: { id: 'm4-parity-user', email: 'm4-parity@example.test', name: 'M4 Parity User', role: 'user', planTier: 'free', onboardingCompletedAt: null },
  expires: '2026-09-27T00:00:00.000Z',
};
let lastSignIn = null;
const server = createServer(async (request, response) => {
  const json = (status, value, headers = {}) => { response.writeHead(status, { 'content-type': 'application/json', 'cache-control': 'no-store', ...headers }); response.end(JSON.stringify(value)); };
  if (request.url === '/health') return json(200, { ok: true });
  if (request.url === '/__m5/last-signin') return json(200, lastSignIn);
  if (request.url?.startsWith('/api/auth/session')) return json(200, request.headers.cookie?.includes('m5-test-state=signed-out') ? null : session);
  if (request.url === '/api/auth/providers') return json(200, { google: { id: 'google', name: 'Google', type: 'oidc' } });
  if (request.url === '/api/auth/csrf') return json(200, { csrfToken: 'm5-controlled-csrf' }, { 'set-cookie': 'm5-controlled-challenge=present; HttpOnly; Path=/; SameSite=Lax' });
  if (request.url === '/api/auth/signin/google' && request.method === 'POST') {
    let body = ''; for await (const chunk of request) body += chunk;
    const fields = new URLSearchParams(body);
    const challenge = request.headers.cookie?.includes('m5-controlled-challenge=present');
    if (!challenge || fields.get('csrfToken') !== 'm5-controlled-csrf') return json(403, { error: 'fixture_csrf_failed' });
    lastSignIn = { callbackUrl: fields.get('callbackUrl'), csrfVerified: true, origin: request.headers.origin };
    // Proves relay navigation only; no Google interaction or session is minted.
    response.writeHead(303, { location: '/m1-proof?m5=controlled-signin', 'cache-control': 'no-store' }); response.end(); return;
  }
  return json(404, { error: 'm5_mock_route_not_found' });
});
server.listen(4010, '127.0.0.1');
const shutdown = () => server.close(() => process.exit(0));
process.on('SIGTERM', shutdown); process.on('SIGINT', shutdown);
