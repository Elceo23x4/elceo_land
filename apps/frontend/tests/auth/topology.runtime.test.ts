import test from 'node:test';
import assert from 'node:assert/strict';
import { browserOperationRegistry } from '../../lib/contracts/generated/browser-operation-registry.generated.ts';
import {
  isAllowedAuthFrameworkPath,
  isCanonicalAdminRole,
  parseCanonicalSessionPayload,
  relayBrowserApiRequest,
  relayCanonicalAuthRequest,
  resolveBrowserOperation,
  resolveCanonicalSession,
  sanitizeCallbackPath,
  verifySameOriginBrowserMutation,
} from '../../lib/auth/core.ts';
import { evaluateFrontendRouteAccess, isProtectedFrontendPath } from '../../lib/auth/route-guard.ts';

const topology = {
  backendOrigin: 'https://backend.example.test',
  publicOrigin: 'https://app.example.test',
} as const;

const canonicalSession = {
  user: {
    id: 'user-1',
    email: 'user@example.test',
    name: 'User',
    role: 'user',
    planTier: 'free',
    onboardingCompletedAt: null,
  },
  expires: '2026-09-27T00:00:00.000Z',
};

const authenticated = (role = 'user') => ({
  kind: 'authenticated' as const,
  session: { ...canonicalSession, user: { ...canonicalSession.user, role } },
  setCookies: [] as string[],
});

test('canonical session parsing is fail-closed and never treats a truthy error object as authenticated', () => {
  assert.deepEqual(parseCanonicalSessionPayload(canonicalSession), canonicalSession);
  assert.equal(parseCanonicalSessionPayload({ message: 'server configuration failed' }), null);
  assert.equal(parseCanonicalSessionPayload({ user: { id: 'user-1' }, expires: canonicalSession.expires }), null);
  assert.equal(parseCanonicalSessionPayload(null), null);
});

test('callback paths stay local and auth-entry/open-redirect loops are rejected', () => {
  assert.equal(sanitizeCallbackPath('/portfolio?tab=open'), '/portfolio?tab=open');
  assert.equal(sanitizeCallbackPath('https://evil.example/'), '/dashboard');
  assert.equal(sanitizeCallbackPath('//evil.example/path'), '/dashboard');
  assert.equal(sanitizeCallbackPath('/api/auth/session'), '/dashboard');
  assert.equal(sanitizeCallbackPath('/login'), '/dashboard');
});

test('protected route topology covers the canonical app families and preserves exact return paths', () => {
  for (const path of ['/dashboard', '/workspace/agenda', '/journal/abc', '/portfolio', '/analytics', '/coaching', '/notifications', '/settings/security', '/onboarding', '/admin/providers']) {
    assert.equal(isProtectedFrontendPath(path), true, path);
  }
  for (const path of ['/', '/pricing', '/login', '/signup', '/help', '/api/auth/session']) {
    assert.equal(isProtectedFrontendPath(path), false, path);
  }

  assert.deepEqual(evaluateFrontendRouteAccess('/portfolio/positions', '?filter=open', {
    kind: 'signed_out', setCookies: [],
  }), {
    kind: 'redirect',
    location: '/login?callbackUrl=%2Fportfolio%2Fpositions%3Ffilter%3Dopen',
  });
  assert.deepEqual(evaluateFrontendRouteAccess('/dashboard', '', {
    kind: 'unavailable', reason: 'network', status: null, setCookies: [],
  }), { kind: 'unavailable' });
  assert.deepEqual(evaluateFrontendRouteAccess('/dashboard', '', authenticated()), { kind: 'allow' });
});

test('admin presentation roles mirror the frozen backend route guard without becoming operation authority', () => {
  assert.equal(isCanonicalAdminRole('super_admin'), true);
  assert.equal(isCanonicalAdminRole('analyst_admin'), true);
  assert.equal(isCanonicalAdminRole('support_admin'), true);
  assert.equal(isCanonicalAdminRole('user'), false);
  assert.deepEqual(evaluateFrontendRouteAccess('/admin', '', authenticated('user')), {
    kind: 'redirect', location: '/dashboard',
  });
  assert.deepEqual(evaluateFrontendRouteAccess('/admin', '', authenticated('support_admin')), { kind: 'allow' });
});

test('frontend Auth.js relay exposes the Google flow but not credentials or password reset through the catch-all', () => {
  for (const path of [
    '/api/auth/session',
    '/api/auth/csrf',
    '/api/auth/providers',
    '/api/auth/signout',
    '/api/auth/error',
    '/api/auth/signin/google',
    '/api/auth/callback/google',
  ]) assert.equal(isAllowedAuthFrameworkPath(path), true, path);

  for (const path of [
    '/api/auth/signin/credentials',
    '/api/auth/callback/credentials',
    '/api/auth/password-reset/request',
    '/api/auth/password-reset/confirm',
    '/api/auth/signin/google/extra',
  ]) assert.equal(isAllowedAuthFrameworkPath(path), false, path);
});

test('Auth.js relay preserves opaque cookies and public forwarded host without knowing cookie names', async () => {
  let calls = 0;
  const response = await relayCanonicalAuthRequest(new Request(
    'https://app.example.test/api/auth/signin/google?callbackUrl=%2Fdashboard',
    {
      method: 'POST',
      headers: {
        cookie: 'opaque-cookie-name=opaque-value',
        origin: 'https://app.example.test',
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: 'csrfToken=opaque',
    },
  ), topology, async (input, init) => {
    calls += 1;
    assert.equal(String(input), 'https://backend.example.test/api/auth/signin/google?callbackUrl=%2Fdashboard');
    const headers = new Headers(init?.headers);
    assert.equal(headers.get('cookie'), 'opaque-cookie-name=opaque-value');
    assert.equal(headers.get('x-forwarded-host'), 'app.example.test');
    assert.equal(headers.get('x-forwarded-proto'), 'https');
    return new Response(null, {
      status: 302,
      headers: {
        location: 'https://accounts.google.com/o/oauth2/v2/auth',
        'set-cookie': '__Secure-arbitrary-auth-cookie=opaque; Path=/; HttpOnly; Secure; SameSite=Lax',
      },
    });
  });

  assert.equal(calls, 1);
  assert.equal(response.status, 302);
  assert.equal(response.headers.get('location'), 'https://accounts.google.com/o/oauth2/v2/auth');
  assert.match(response.headers.get('set-cookie') ?? '', /__Secure-arbitrary-auth-cookie=opaque/u);

  let forbiddenCalls = 0;
  const forbidden = await relayCanonicalAuthRequest(new Request(
    'https://app.example.test/api/auth/signin/credentials', { method: 'POST' },
  ), topology, async () => {
    forbiddenCalls += 1;
    return new Response(null);
  });
  assert.equal(forbidden.status, 404);
  assert.equal(forbiddenCalls, 0);
});

test('browser operation resolver accepts only the frozen browser-safe route family including dynamic paths', () => {
  assert.equal(resolveBrowserOperation('GET', '/api/account/entitlements', browserOperationRegistry)?.key,
    'GET /api/account/entitlements');
  assert.equal(resolveBrowserOperation('GET', '/api/dashboard/xau_usd', browserOperationRegistry)?.key,
    'GET /api/dashboard/{asset}');
  assert.equal(resolveBrowserOperation('GET', '/api/admin/system-summary', browserOperationRegistry), null);
  assert.equal(resolveBrowserOperation('POST', '/api/billing/webhook', browserOperationRegistry), null);
});

test('same-origin mutation guard mirrors frozen exact-origin behavior', () => {
  assert.deepEqual(verifySameOriginBrowserMutation(new Request('https://app.example.test/api/x', {
    method: 'POST', headers: { origin: 'https://app.example.test', 'sec-fetch-site': 'same-origin' },
  }), topology.publicOrigin), { allowed: true });
  assert.deepEqual(verifySameOriginBrowserMutation(new Request('https://app.example.test/api/x', {
    method: 'POST', headers: { origin: 'https://evil.example.test', 'sec-fetch-site': 'cross-site' },
  }), topology.publicOrigin), { allowed: false, reason: 'cross_site' });
});

test('same-origin BFF forwards session cookie/idempotency but never browser authority headers', async () => {
  let calls = 0;
  const request = new Request('https://app.example.test/api/account/access-check', {
    method: 'POST',
    headers: {
      cookie: 'opaque-session=1',
      origin: 'https://app.example.test',
      'sec-fetch-site': 'same-origin',
      'content-type': 'application/json',
      'idempotency-key': 'logical-action-1',
    },
    body: JSON.stringify({ feature: 'workspace.read' }),
  });
  const response = await relayBrowserApiRequest(request, topology, browserOperationRegistry, async (input, init) => {
    calls += 1;
    assert.equal(String(input), 'https://backend.example.test/api/account/access-check');
    const headers = new Headers(init?.headers);
    assert.equal(headers.get('cookie'), 'opaque-session=1');
    assert.equal(headers.get('idempotency-key'), 'logical-action-1');
    assert.equal(headers.get('origin'), 'https://app.example.test');
    assert.equal(headers.get('sec-fetch-site'), 'same-origin');
    assert.equal(headers.has('authorization'), false);
    assert.equal(headers.has('x-elceo-internal-token'), false);
    return Response.json({ ok: true, data: { decision: { accessLevel: 'allowed' } } });
  });
  assert.equal(response.status, 200);
  assert.equal(calls, 1);

  const privileged = await relayBrowserApiRequest(new Request('https://app.example.test/api/account/entitlements', {
    headers: { authorization: 'Bearer browser-token' },
  }), topology, browserOperationRegistry, async () => {
    throw new Error('must not call backend');
  });
  assert.equal(privileged.status, 400);

  let adminCalls = 0;
  const admin = await relayBrowserApiRequest(new Request('https://app.example.test/api/admin/system-summary'),
    topology, browserOperationRegistry, async () => { adminCalls += 1; return new Response(null); });
  assert.equal(admin.status, 404);
  assert.equal(adminCalls, 0);

  let crossSiteCalls = 0;
  const crossSite = await relayBrowserApiRequest(new Request('https://app.example.test/api/account/access-check', {
    method: 'POST',
    headers: { origin: 'https://evil.example.test', 'sec-fetch-site': 'cross-site' },
    body: '{}',
  }), topology, browserOperationRegistry, async () => { crossSiteCalls += 1; return new Response(null); });
  assert.equal(crossSite.status, 403);
  assert.equal(crossSiteCalls, 0);
});

test('canonical session resolution distinguishes signed-out, authenticated, invalid and unavailable states', async () => {
  const authenticatedResolution = await resolveCanonicalSession('opaque=1', topology, async () =>
    Response.json(canonicalSession, { headers: { 'set-cookie': 'rotated=opaque; Path=/; HttpOnly' } }));
  assert.equal(authenticatedResolution.kind, 'authenticated');
  if (authenticatedResolution.kind === 'authenticated') {
    assert.equal(authenticatedResolution.session.user.id, 'user-1');
    assert.equal(authenticatedResolution.setCookies.length, 1);
  }

  const signedOut = await resolveCanonicalSession('', topology, async () => Response.json(null));
  assert.equal(signedOut.kind, 'signed_out');

  const truthyError = await resolveCanonicalSession('', topology, async () =>
    Response.json({ message: 'There was a problem with the server configuration.' }));
  assert.deepEqual(truthyError, {
    kind: 'unavailable', reason: 'invalid_payload', status: 200, setCookies: [],
  });

  const serverFailure = await resolveCanonicalSession('', topology, async () =>
    Response.json({ error: 'internal_error' }, { status: 500 }));
  assert.equal(serverFailure.kind, 'unavailable');
  if (serverFailure.kind === 'unavailable') {
    assert.equal(serverFailure.reason, 'upstream_status');
    assert.equal(serverFailure.status, 500);
  }

  const networkFailure = await resolveCanonicalSession('', topology, async () => {
    throw new Error('network unavailable');
  });
  assert.deepEqual(networkFailure, {
    kind: 'unavailable', reason: 'network', status: null, setCookies: [],
  });
});
