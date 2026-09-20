import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const read = (file) => readFile(path.join(root, file), 'utf8');

const files = {
  core: 'apps/frontend/lib/auth/core.ts',
  config: 'apps/frontend/lib/auth/config.ts',
  server: 'apps/frontend/lib/auth/server.ts',
  routeGuard: 'apps/frontend/lib/auth/route-guard.ts',
  browser: 'apps/frontend/lib/api/authenticated-browser.ts',
  proxy: 'apps/frontend/proxy.ts',
  authRoute: 'apps/frontend/app/api/auth/[...nextauth]/route.ts',
  bffRoute: 'apps/frontend/app/api/[...elceo]/route.ts',
};

test('frontend does not instantiate a second Auth.js/NextAuth server or parse JWT authority', async () => {
  const text = (await Promise.all(Object.values(files).map(read))).join('\n');
  assert.doesNotMatch(text, /\bNextAuth\s*\(|next-auth\/providers|next-auth\/jwt|decodeJwt|jwtDecode|from\s+['"]jose['"]/u);
  assert.doesNotMatch(text, /authjs\.(?:session-token|csrf-token)|next-auth\.session-token|__Secure-authjs|__Host-authjs/u);
});

test('backend topology configuration and authority remain server-only', async () => {
  const [config, server, browser, proxy, authRoute, bffRoute] = await Promise.all([
    read(files.config), read(files.server), read(files.browser), read(files.proxy), read(files.authRoute), read(files.bffRoute),
  ]);
  assert.match(config, /^import 'server-only';/u);
  assert.match(server, /^import 'server-only';/u);
  assert.match(config, /ELCEO_BACKEND_ORIGIN/u);
  assert.match(config, /ELCEO_PUBLIC_APP_ORIGIN/u);
  assert.doesNotMatch(browser, /ELCEO_BACKEND_ORIGIN|ELCEO_PUBLIC_APP_ORIGIN|AUTH_SECRET|ELCEO_INTERNAL_API_TOKEN|x-elceo-internal-token/u);
  assert.match(proxy, /resolveCanonicalSession/u);
  assert.match(proxy, /evaluateFrontendRouteAccess/u);
  assert.match(authRoute, /proxyCanonicalAuthRequest/u);
  assert.match(bffRoute, /proxyCanonicalBrowserApiRequest/u);
});

test('protected route families are guarded by the canonical server-side proxy rather than client state', async () => {
  const [proxy, guard] = await Promise.all([read(files.proxy), read(files.routeGuard)]);
  for (const prefix of ['dashboard','workspace','journal','portfolio','analytics','coaching','notifications','settings','onboarding','admin']) {
    assert.match(proxy, new RegExp(`/${prefix}/:path\\*`), prefix);
  }
  assert.match(guard, /isCanonicalAdminRole/u);
  assert.doesNotMatch(proxy + guard, /planTier\s*===|localStorage|sessionStorage|document\.cookie/u);
});

test('M3 runtime contains no fake age-attestation or credential-registration persistence', async () => {
  const text = (await Promise.all(Object.values(files).map(read))).join('\n');
  assert.doesNotMatch(text, /ageConfirmed|ageAttestation|credentialRegistration|registerPassword|createCredentialUser/u);
});
