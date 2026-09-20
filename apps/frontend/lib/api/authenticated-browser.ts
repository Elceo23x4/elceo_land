'use client';

import { createBrowserApiClient } from './browser';

export const M3_SESSION_BOUND_CLIENT_PROOF = 'elceo-m3-session-bound-browser-client-v1';
export type SessionBoundBrowserApiClient = ReturnType<typeof createBrowserApiClient>;

const sameOriginFetch: typeof fetch = (input, init) => fetch(input, {
  ...init,
  credentials: 'same-origin',
});

/**
 * Browser application calls stay on the frontend origin. The same-origin BFF
 * receives the Auth.js-managed HttpOnly cookie and forwards it server-side to
 * the frozen backend. No backend origin, JWT, or internal credential is exposed.
 */
export function createSessionBoundBrowserApiClient(): SessionBoundBrowserApiClient {
  if (typeof window === 'undefined') {
    throw new Error('The session-bound browser API client can only be created in a browser context.');
  }
  return createBrowserApiClient({
    baseOrigin: window.location.origin,
    fetchImplementation: sameOriginFetch,
  });
}
