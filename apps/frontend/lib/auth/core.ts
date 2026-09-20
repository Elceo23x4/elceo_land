export type CanonicalSessionUser = Readonly<{
  id: string;
  email: string | null;
  name: string | null;
  role: string;
  planTier: string;
  onboardingCompletedAt: string | null;
}>;

export type CanonicalSession = Readonly<{
  user: CanonicalSessionUser;
  expires: string;
}>;

export type SessionResolution =
  | Readonly<{ kind: 'authenticated'; session: CanonicalSession; setCookies: readonly string[] }>
  | Readonly<{ kind: 'signed_out'; setCookies: readonly string[] }>
  | Readonly<{
      kind: 'unavailable';
      reason: 'network' | 'upstream_status' | 'invalid_payload';
      status: number | null;
      setCookies: readonly string[];
    }>;

export type AuthTopologyConfig = Readonly<{
  backendOrigin: string;
  publicOrigin: string;
}>;

export type BrowserRuntimePolicy = Readonly<{
  key: string;
  method: string;
  routePath: string;
  responseContract: string;
  idempotency: 'required' | 'not_required';
  allowedHeaders: readonly string[];
  unavailableStatuses?: readonly number[];
}>;

export type BrowserRuntimeRegistry = Readonly<Record<string, BrowserRuntimePolicy>>;

const unsafeMethods = new Set(['POST', 'PUT', 'PATCH', 'DELETE']);
const adminRoles = new Set(['super_admin', 'analyst_admin', 'support_admin']);
const authEntryPaths = new Set(['/login', '/signup', '/forgot-password', '/reset-password']);

const isRecord = (value: unknown): value is Record<string, unknown> =>
  Boolean(value) && typeof value === 'object' && !Array.isArray(value);

const nullableString = (value: unknown): value is string | null => value === null || typeof value === 'string';

export function normalizeHttpOrigin(value: string, label: string): string {
  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    throw new TypeError(`${label} must be an absolute HTTP(S) origin.`);
  }
  if (!['http:', 'https:'].includes(parsed.protocol)
      || parsed.username || parsed.password
      || parsed.pathname !== '/' || parsed.search || parsed.hash) {
    throw new TypeError(`${label} must be an HTTP(S) origin without credentials, path, query, or fragment.`);
  }
  return parsed.origin;
}

export function parseCanonicalSessionPayload(payload: unknown): CanonicalSession | null {
  if (!isRecord(payload) || !isRecord(payload.user)) return null;
  const user = payload.user;
  if (typeof user.id !== 'string' || user.id.trim().length === 0) return null;
  if (typeof user.role !== 'string' || user.role.trim().length === 0) return null;
  if (typeof user.planTier !== 'string' || user.planTier.trim().length === 0) return null;
  if (!nullableString(user.onboardingCompletedAt)) return null;
  if (!(user.email === undefined || nullableString(user.email))) return null;
  if (!(user.name === undefined || nullableString(user.name))) return null;
  if (typeof payload.expires !== 'string' || payload.expires.trim().length === 0) return null;

  return {
    user: {
      id: user.id,
      email: user.email ?? null,
      name: user.name ?? null,
      role: user.role,
      planTier: user.planTier,
      onboardingCompletedAt: user.onboardingCompletedAt,
    },
    expires: payload.expires,
  };
}

const isExplicitSignedOutPayload = (payload: unknown): boolean =>
  payload === null || (isRecord(payload) && Object.keys(payload).length === 0);

export function isCanonicalAdminRole(role: string): boolean {
  return adminRoles.has(role);
}

export function sanitizeCallbackPath(value: string | null | undefined, fallback = '/dashboard'): string {
  if (!value || !value.startsWith('/') || value.startsWith('//')) return fallback;
  try {
    const base = new URL('https://callback.elceo.invalid');
    const parsed = new URL(value, base);
    if (parsed.origin !== base.origin) return fallback;
    if (parsed.pathname.startsWith('/api/') || authEntryPaths.has(parsed.pathname)) return fallback;
    return `${parsed.pathname}${parsed.search}${parsed.hash}`;
  } catch {
    return fallback;
  }
}

const safeDecodeSegment = (segment: string): string | null => {
  try {
    const decoded = decodeURIComponent(segment);
    return decoded.includes('/') || decoded.includes('\\') ? null : decoded;
  } catch {
    return null;
  }
};

/**
 * Frontend v1 intentionally mediates only the Google Auth.js flow plus the
 * framework session/CSRF/sign-out surfaces. Credential registration is not a
 * frozen backend contract and credential sign-in is not exposed by this v1 UI.
 */
export function isAllowedAuthFrameworkPath(pathname: string): boolean {
  const prefix = '/api/auth/';
  if (!pathname.startsWith(prefix)) return false;
  const raw = pathname.slice(prefix.length).split('/').filter(Boolean);
  const segments = raw.map(safeDecodeSegment);
  if (segments.some((segment) => segment === null)) return false;
  const [action, provider, extra] = segments as Array<string | undefined>;
  if (extra !== undefined || !action) return false;

  if (provider === undefined) {
    return action === 'session'
      || action === 'csrf'
      || action === 'providers'
      || action === 'signout'
      || action === 'error';
  }

  return (action === 'signin' || action === 'callback') && provider === 'google';
}

const parsedOrigin = (value: string | null): string | null => {
  if (!value) return null;
  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
};

export type BrowserMutationDecision =
  | Readonly<{ allowed: true }>
  | Readonly<{ allowed: false; reason: string }>;

/** Mirrors the frozen backend's exact-origin browser mutation rule. */
export function verifySameOriginBrowserMutation(
  request: Pick<Request, 'method' | 'headers'>,
  publicOrigin: string,
): BrowserMutationDecision {
  if (!unsafeMethods.has(request.method.toUpperCase())) return { allowed: true };
  const trusted = parsedOrigin(publicOrigin);
  if (!trusted) return { allowed: false, reason: 'trusted_origin_not_configured' };
  const fetchSite = request.headers.get('sec-fetch-site')?.toLowerCase();
  if (fetchSite === 'cross-site') return { allowed: false, reason: 'cross_site' };
  const origin = parsedOrigin(request.headers.get('origin'));
  if (origin) return origin === trusted ? { allowed: true } : { allowed: false, reason: 'origin_mismatch' };
  if (fetchSite === 'same-origin') return { allowed: true };
  const referer = parsedOrigin(request.headers.get('referer'));
  if (referer) return referer === trusted ? { allowed: true } : { allowed: false, reason: 'referer_mismatch' };
  return { allowed: false, reason: 'origin_evidence_missing' };
}

const escapeRegex = (value: string): string => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const routePattern = (routePath: string): RegExp => {
  const parts = routePath.split('/').map((segment) => {
    if (/^\{[^}]+\}$/u.test(segment)) return '[^/]+';
    return escapeRegex(segment);
  });
  return new RegExp(`^${parts.join('/')}$`, 'u');
};

export function resolveBrowserOperation(
  method: string,
  pathname: string,
  registry: BrowserRuntimeRegistry,
): BrowserRuntimePolicy | null {
  const upperMethod = method.toUpperCase();
  const matches = Object.values(registry).filter((policy) =>
    policy.method === upperMethod && routePattern(policy.routePath).test(pathname));
  if (matches.length > 1) {
    throw new Error(`Ambiguous frozen browser operation for ${upperMethod} ${pathname}`);
  }
  return matches[0] ?? null;
}

const responseSetCookies = (headers: Headers): string[] => {
  const enhanced = headers as Headers & { getSetCookie?: () => string[] };
  if (typeof enhanced.getSetCookie === 'function') return enhanced.getSetCookie();
  const single = headers.get('set-cookie');
  return single ? [single] : [];
};

const copyUpstreamResponse = (upstream: Response): Response => {
  const headers = new Headers();
  for (const name of ['content-type', 'location', 'retry-after']) {
    const value = upstream.headers.get(name);
    if (value) headers.set(name, value);
  }
  for (const cookie of responseSetCookies(upstream.headers)) headers.append('set-cookie', cookie);
  headers.set('cache-control', 'private, no-store');
  return new Response(upstream.body, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers,
  });
};

const requestBody = async (request: Request): Promise<ArrayBuffer | undefined> =>
  request.method === 'GET' || request.method === 'HEAD' ? undefined : request.arrayBuffer();

const targetFor = (request: Request, backendOrigin: string): URL => {
  const source = new URL(request.url);
  return new URL(`${source.pathname}${source.search}`, `${backendOrigin}/`);
};

const forwardedPublicHeaders = (request: Request, publicOrigin: string): Headers => {
  const headers = new Headers();
  for (const name of ['accept', 'content-type', 'cookie', 'user-agent', 'origin', 'referer', 'x-request-id']) {
    const value = request.headers.get(name);
    if (value) headers.set(name, value);
  }
  const publicUrl = new URL(publicOrigin);
  headers.set('x-forwarded-host', publicUrl.host);
  headers.set('x-forwarded-proto', publicUrl.protocol.slice(0, -1));
  return headers;
};

const localProblem = (status: number, code: string): Response =>
  Response.json({ ok: false, error: { code, message: 'Request could not be mediated safely.' } }, {
    status,
    headers: { 'cache-control': 'private, no-store' },
  });

export async function relayCanonicalAuthRequest(
  request: Request,
  configuration: AuthTopologyConfig,
  fetchImplementation: typeof fetch,
): Promise<Response> {
  const backendOrigin = normalizeHttpOrigin(configuration.backendOrigin, 'backendOrigin');
  const publicOrigin = normalizeHttpOrigin(configuration.publicOrigin, 'publicOrigin');
  const pathname = new URL(request.url).pathname;
  if (!['GET', 'POST'].includes(request.method.toUpperCase()) || !isAllowedAuthFrameworkPath(pathname)) {
    return localProblem(404, 'auth_framework_route_not_exposed');
  }

  const headers = forwardedPublicHeaders(request, publicOrigin);
  try {
    const upstream = await fetchImplementation(targetFor(request, backendOrigin), {
      method: request.method,
      headers,
      body: await requestBody(request),
      redirect: 'manual',
      signal: request.signal,
    });
    return copyUpstreamResponse(upstream);
  } catch {
    return localProblem(503, 'auth_upstream_unavailable');
  }
}

export async function relayBrowserApiRequest(
  request: Request,
  configuration: AuthTopologyConfig,
  registry: BrowserRuntimeRegistry,
  fetchImplementation: typeof fetch,
): Promise<Response> {
  const backendOrigin = normalizeHttpOrigin(configuration.backendOrigin, 'backendOrigin');
  const publicOrigin = normalizeHttpOrigin(configuration.publicOrigin, 'publicOrigin');
  const source = new URL(request.url);
  const policy = resolveBrowserOperation(request.method, source.pathname, registry);
  if (!policy) return localProblem(404, 'browser_operation_not_exposed');

  if (request.headers.has('authorization') || request.headers.has('x-elceo-internal-token')) {
    return localProblem(400, 'browser_authority_header_forbidden');
  }

  const originDecision = verifySameOriginBrowserMutation(request, publicOrigin);
  if (!originDecision.allowed) return localProblem(403, `browser_mutation_${originDecision.reason}`);

  const headers = new Headers();
  for (const name of ['accept', 'content-type', 'cookie', 'x-request-id']) {
    const value = request.headers.get(name);
    if (value) headers.set(name, value);
  }
  for (const name of policy.allowedHeaders) {
    const value = request.headers.get(name);
    if (value) headers.set(name, value);
  }

  if (unsafeMethods.has(request.method.toUpperCase())) {
    headers.set('origin', publicOrigin);
    headers.set('referer', `${publicOrigin}/`);
    headers.set('sec-fetch-site', 'same-origin');
  }

  try {
    const upstream = await fetchImplementation(targetFor(request, backendOrigin), {
      method: request.method,
      headers,
      body: await requestBody(request),
      redirect: 'manual',
      signal: request.signal,
    });
    return copyUpstreamResponse(upstream);
  } catch {
    return localProblem(502, 'backend_transport_unavailable');
  }
}

const parseResponseJson = async (response: Response): Promise<unknown> => {
  const text = await response.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return Symbol.for('elceo.invalid-json');
  }
};

export async function resolveCanonicalSession(
  cookieHeader: string,
  configuration: AuthTopologyConfig,
  fetchImplementation: typeof fetch,
): Promise<SessionResolution> {
  const backendOrigin = normalizeHttpOrigin(configuration.backendOrigin, 'backendOrigin');
  const publicOrigin = normalizeHttpOrigin(configuration.publicOrigin, 'publicOrigin');
  const publicUrl = new URL(publicOrigin);
  const headers = new Headers({ accept: 'application/json' });
  if (cookieHeader) headers.set('cookie', cookieHeader);
  headers.set('x-forwarded-host', publicUrl.host);
  headers.set('x-forwarded-proto', publicUrl.protocol.slice(0, -1));

  let upstream: Response;
  try {
    upstream = await fetchImplementation(new URL('/api/auth/session', `${backendOrigin}/`), {
      method: 'GET', headers, redirect: 'manual', cache: 'no-store',
    });
  } catch {
    return { kind: 'unavailable', reason: 'network', status: null, setCookies: [] };
  }

  const setCookies = responseSetCookies(upstream.headers);
  if (upstream.status === 401) return { kind: 'signed_out', setCookies };
  if (!upstream.ok) {
    return { kind: 'unavailable', reason: 'upstream_status', status: upstream.status, setCookies };
  }

  const payload = await parseResponseJson(upstream);
  if (isExplicitSignedOutPayload(payload)) return { kind: 'signed_out', setCookies };
  const session = parseCanonicalSessionPayload(payload);
  if (!session) {
    return { kind: 'unavailable', reason: 'invalid_payload', status: upstream.status, setCookies };
  }
  return { kind: 'authenticated', session, setCookies };
}
