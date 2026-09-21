import { createServer } from 'node:http';

const host = '127.0.0.1';
const port = Number(process.env.ELCEO_M4_MOCK_AUTH_PORT ?? 4010);

const session = {
  user: {
    id: 'm4-parity-user',
    email: 'm4-parity@example.test',
    name: 'M4 Parity User',
    role: 'user',
    planTier: 'free',
    onboardingCompletedAt: null,
  },
  expires: '2026-09-27T00:00:00.000Z',
};

const server = createServer((request, response) => {
  if (request.url === '/health') {
    response.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
    response.end('ok');
    return;
  }
  if (request.url?.startsWith('/api/auth/session')) {
    response.writeHead(200, {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    });
    response.end(JSON.stringify(session));
    return;
  }
  response.writeHead(404, { 'content-type': 'application/json; charset=utf-8' });
  response.end(JSON.stringify({ error: 'm4_mock_route_not_found' }));
});

server.listen(port, host, () => {
  console.log(`M4 auth fixture listening on http://${host}:${port}`);
});

const shutdown = () => server.close(() => process.exit(0));
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
