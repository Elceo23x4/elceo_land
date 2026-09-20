import { NextResponse, type NextRequest } from 'next/server';
import { getAuthTopologyConfig } from './lib/auth/config';
import { resolveCanonicalSession } from './lib/auth/core';
import { evaluateFrontendRouteAccess } from './lib/auth/route-guard';

const appendSetCookies = (response: NextResponse, cookies: readonly string[]): NextResponse => {
  for (const cookie of cookies) response.headers.append('set-cookie', cookie);
  return response;
};

const authUnavailable = (code = 'auth_session_unavailable') => NextResponse.json(
  { error: code },
  { status: 503, headers: { 'cache-control': 'private, no-store' } },
);

export async function proxy(request: NextRequest) {
  let resolution;
  try {
    resolution = await resolveCanonicalSession(
      request.headers.get('cookie') ?? '',
      getAuthTopologyConfig(),
      fetch,
    );
  } catch {
    return authUnavailable('auth_topology_not_configured');
  }

  const decision = evaluateFrontendRouteAccess(
    request.nextUrl.pathname,
    request.nextUrl.search,
    resolution,
  );

  if (decision.kind === 'unavailable') {
    return appendSetCookies(authUnavailable(), resolution.setCookies);
  }

  if (decision.kind === 'redirect') {
    return appendSetCookies(NextResponse.redirect(new URL(decision.location, request.url)), resolution.setCookies);
  }

  return appendSetCookies(NextResponse.next(), resolution.setCookies);
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/workspace/:path*',
    '/journal/:path*',
    '/portfolio/:path*',
    '/analytics/:path*',
    '/coaching/:path*',
    '/notifications/:path*',
    '/settings/:path*',
    '/onboarding/:path*',
    '/admin/:path*',
  ],
};
