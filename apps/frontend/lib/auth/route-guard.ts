import { isCanonicalAdminRole, sanitizeCallbackPath, type SessionResolution } from './core.ts';

const protectedPrefixes = [
  '/dashboard',
  '/workspace',
  '/journal',
  '/portfolio',
  '/analytics',
  '/coaching',
  '/notifications',
  '/settings',
  '/onboarding',
  '/admin',
] as const;

export type FrontendRouteDecision =
  | Readonly<{ kind: 'allow' }>
  | Readonly<{ kind: 'redirect'; location: string }>
  | Readonly<{ kind: 'unavailable' }>;

export function isProtectedFrontendPath(pathname: string): boolean {
  return protectedPrefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

export function evaluateFrontendRouteAccess(
  pathname: string,
  search: string,
  resolution: SessionResolution,
): FrontendRouteDecision {
  if (!isProtectedFrontendPath(pathname)) return { kind: 'allow' };
  if (resolution.kind === 'unavailable') return { kind: 'unavailable' };
  if (resolution.kind === 'signed_out') {
    const callbackUrl = sanitizeCallbackPath(`${pathname}${search}`);
    return { kind: 'redirect', location: `/login?callbackUrl=${encodeURIComponent(callbackUrl)}` };
  }
  if (pathname.startsWith('/admin') && !isCanonicalAdminRole(resolution.session.user.role)) {
    return { kind: 'redirect', location: '/dashboard' };
  }
  return { kind: 'allow' };
}
