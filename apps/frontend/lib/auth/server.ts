import 'server-only';

import { headers as requestHeaders } from 'next/headers';
import { redirect } from 'next/navigation';
import { browserOperationRegistry } from '../contracts/generated/browser-operation-registry.generated';
import { getAuthTopologyConfig } from './config';
import {
  isCanonicalAdminRole,
  relayBrowserApiRequest,
  relayCanonicalAuthRequest,
  resolveBrowserOperation,
  resolveCanonicalSession,
  sanitizeCallbackPath,
  type CanonicalSession,
  type SessionResolution,
} from './core';

export class CanonicalSessionUnavailableError extends Error {
  constructor(readonly resolution: Extract<SessionResolution, { kind: 'unavailable' }>) {
    super(`Canonical Auth.js session authority is unavailable (${resolution.reason}).`);
    this.name = 'CanonicalSessionUnavailableError';
  }
}

export const proxyCanonicalAuthRequest = async (request: Request): Promise<Response> =>
  relayCanonicalAuthRequest(request, getAuthTopologyConfig(), fetch);

export const proxyCanonicalBrowserApiRequest = async (request: Request): Promise<Response> => {
  const source = new URL(request.url);
  if (!resolveBrowserOperation(request.method, source.pathname, browserOperationRegistry)) {
    return Response.json({ ok: false, error: { code: 'browser_operation_not_exposed', message: 'Request could not be mediated safely.' } }, {
      status: 404,
      headers: { 'cache-control': 'private, no-store' },
    });
  }
  return relayBrowserApiRequest(request, getAuthTopologyConfig(), browserOperationRegistry, fetch);
};

/**
 * Server-component/session read helper. Protected document navigation is first
 * guarded by `proxy.ts`, which is also the path that can propagate Auth.js
 * Set-Cookie rotation back to the browser.
 */
export async function getCanonicalSessionResolution(): Promise<SessionResolution> {
  const incoming = await requestHeaders();
  return resolveCanonicalSession(incoming.get('cookie') ?? '', getAuthTopologyConfig(), fetch);
}

export async function getCanonicalSession(): Promise<CanonicalSession | null> {
  const resolution = await getCanonicalSessionResolution();
  if (resolution.kind === 'authenticated') return resolution.session;
  if (resolution.kind === 'signed_out') return null;
  throw new CanonicalSessionUnavailableError(resolution);
}

export async function requireAuthenticatedSession(callbackPath = '/dashboard'): Promise<CanonicalSession> {
  const resolution = await getCanonicalSessionResolution();
  if (resolution.kind === 'authenticated') return resolution.session;
  if (resolution.kind === 'signed_out') {
    const callbackUrl = sanitizeCallbackPath(callbackPath);
    redirect(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`);
  }
  throw new CanonicalSessionUnavailableError(resolution);
}

/**
 * Presentation/navigation gate only. Every admin operation remains protected by
 * the frozen backend's internal-token + permission/step-up authority.
 */
export async function requireAdminPresentationSession(callbackPath = '/admin'): Promise<CanonicalSession> {
  const session = await requireAuthenticatedSession(callbackPath);
  if (!isCanonicalAdminRole(session.user.role)) redirect('/dashboard');
  return session;
}
