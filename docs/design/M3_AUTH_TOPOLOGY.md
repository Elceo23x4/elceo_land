# M3 — Canonical Session / Authentication Topology

## Decision

ELCEO keeps **one authentication authority**: the frozen Auth.js / NextAuth runtime in `Elceo23x4/Elceo-Mi`.

The separate production frontend does **not** instantiate a second `NextAuth()` server, hold `AUTH_SECRET`, decode the Auth.js JWT, mint a parallel access token, or copy role/plan claims into browser-owned authority.

M3 establishes a same-origin frontend mediation topology around that frozen authority. It does not implement the visual `/login`, `/signup`, onboarding, password-reset or application pages; those remain M5 page work. It does not migrate the dashboard; that remains M4.

## Frozen authority

The pinned backend handoff proves:

- Auth.js / NextAuth owns authentication and session lifecycle;
- session strategy is JWT;
- session max age is seven days and update age is six hours;
- Google is enabled only when its backend credentials are configured;
- credential authentication is conditional on backend activation/runtime prerequisites;
- `/login` is the custom sign-in page;
- the server-derived session user exposes `id`, `role`, `planTier` and `onboardingCompletedAt` in addition to ordinary identity fields;
- ordinary owner-scoped APIs derive ownership from the authenticated session, not a browser-supplied subject ID;
- browser code must not parse the JWT as authorization truth;
- `x-elceo-internal-token` is never a browser credential.

For the production frontend migration, signup/login v1 is intentionally **Google-only**. There is no public credential-registration contract. M3 therefore exposes the Google Auth.js protocol path but does not expose credential sign-in through its frontend Auth.js catch-all and does not invent password registration.

## Why same-origin mediation is required

The frozen monolith was built around same-origin browser semantics:

1. Auth.js owns an HttpOnly session cookie.
2. Browser-safe application APIs expect that authenticated session.
3. Unsafe canonical API methods are guarded by exact public-origin / Fetch Metadata evidence.
4. The frozen backend has no contract granting a separate frontend origin arbitrary credentialed CORS access.

The production frontend is now a separate Next.js application. Direct browser calls to a different backend origin would either lose the host-only Auth.js cookie or require an unreviewed cross-origin credential model.

M3 therefore keeps the browser on the frontend origin and uses trusted frontend server mediation.

## Topology

```text
Browser
  |
  | same origin
  v
Next frontend
  |-- /api/auth/[...nextauth]  ---- opaque Auth.js relay ----> frozen backend /api/auth/**
  |
  |-- allowlisted /api/** BFF  ---- session-cookie relay ----> 95 M2 browser-safe operations
  |
  `-- protected document Proxy ---- session lookup ----------> frozen backend /api/auth/session

Frozen backend remains:
  - identity/session authority
  - owner/role/entitlement authority
  - internal-token authority
  - application/business-state authority
```

### Auth.js relay

`apps/frontend/app/api/auth/[...nextauth]/route.ts` forwards only reviewed Auth.js framework actions.

The relay:

- forwards Auth.js cookies opaquely;
- never depends on a hard-coded Auth.js cookie name, because secure deployment prefixes are framework-owned;
- sets `x-forwarded-host` and `x-forwarded-proto` to the configured frontend public origin so the backend Auth.js `trustHost` behavior operates on the public application host;
- preserves `Set-Cookie`, redirect `Location`, response content type and relevant retry metadata;
- uses manual redirect handling so OAuth responses remain under server mediation;
- fails closed if the backend auth authority is unavailable.

The catch-all permits the session/CSRF/sign-out/error framework surfaces plus Google sign-in/callback. Credential sign-in and password-reset paths are deliberately not exposed by this generic relay.

### Same-origin browser API BFF

`apps/frontend/app/api/[...elceo]/route.ts` is **not** a general proxy.

It resolves the incoming method/path against the generated M2 browser runtime registry. Only the exact 95 browser-safe user operations can pass. Admin, super-admin, webhooks, Auth.js framework routes and backend-internal operations remain excluded.

The BFF:

- rejects browser `Authorization` and `x-elceo-internal-token` headers;
- forwards the opaque Auth.js cookie server-side;
- forwards only ordinary safe transport headers plus operation-allowed headers from M2, including controlled idempotency where required;
- re-applies the frozen exact-origin mutation rule before forwarding an unsafe browser method;
- canonicalizes proven-safe mutation origin evidence to the configured frontend public origin so the frozen backend receives its expected same-origin evidence;
- preserves upstream response status/body and relevant response headers without reinterpreting backend business state.

The M2 browser client remains the request/response policy authority. M3 merely binds it to `window.location.origin` with `credentials: 'same-origin'` so product code never needs a backend hostname or bearer token.

## Protected navigation

Next.js 16 `proxy.ts` is the coarse document-route gate for:

- `/dashboard`
- `/workspace`
- `/journal`
- `/portfolio`
- `/analytics`
- `/coaching`
- `/notifications`
- `/settings`
- `/onboarding`
- `/admin`

For each protected document navigation it resolves the canonical backend Auth.js session before page rendering.

Behavior is fail closed:

- valid server-derived session → continue;
- signed out → redirect to `/login` with a sanitized local callback path preserving the requested product route/query;
- session authority/network/invalid-payload failure → `503`, not signed-in and not a fabricated session;
- `/admin` with a non-admin session role → presentation redirect to `/dashboard`.

The proxy propagates any Auth.js `Set-Cookie` response from the session lookup back to the browser, preserving framework-owned cookie rotation/cleanup without learning the cookie name.

The admin role gate is presentation/navigation only. Actual admin operations still require the frozen backend's internal token, admin permission and—where applicable—server-defined step-up lifecycle.

## Session claims and entitlement discipline

The canonical session parser requires the frozen server-derived fields and rejects malformed/truthy error payloads. It never treats a generic object as authenticated merely because it is truthy.

`role` and `planTier` may support presentation, but neither can authorize a protected API action. M3 does not implement a generic plan-tier entitlement gate because the frozen contract requires route/feature-specific server authority. Future pages must use server entitlement/access DTOs and actual protected API decisions, not `planTier === ...` logic.

No browser code receives or decodes the Auth.js JWT.

## Callback safety

Callback destinations are restricted to local application paths. Absolute URLs, protocol-relative URLs, `/api/**` destinations and authentication-entry loops are rejected and fall back to `/dashboard`.

OAuth provider redirect registration for production must point to the **frontend public host** callback path:

`https://<public-frontend-origin>/api/auth/callback/google`

## Required deployment configuration

Frontend server runtime:

- `ELCEO_BACKEND_ORIGIN` — server-reachable frozen backend origin; never `NEXT_PUBLIC`.
- `ELCEO_PUBLIC_APP_ORIGIN` — canonical public frontend origin; never used as browser authorization truth.

Frozen backend deployment must continue to own:

- `AUTH_SECRET`;
- Google provider client ID/secret;
- backend persistence/runtime dependencies;
- `ELCEO_INTERNAL_API_TOKEN`;
- canonical Auth.js callbacks and session semantics.

The backend's `APP_BASE_URL` / public application origin configuration must correspond to the production frontend origin because frozen browser mutation protection compares exact origins. Any explicit Auth.js deployment URL override must also be checked so it does not force OAuth callbacks back to a private/backend-only host.

Secrets are not copied into the frontend browser or committed configuration.

## Explicit non-goals / deferred work

M3 does not:

- build the visual login/signup/auth pages;
- add email/password self-registration;
- implement fake age-attestation persistence;
- invent MFA, device/session management, account deletion/export or profile editing contracts;
- expose password-reset endpoints through the generic Auth.js catch-all;
- build trusted admin-operation mediation or inject the internal API token;
- implement route-specific feature/paywall UX;
- migrate the dashboard;
- cut production routing from Vite to Next.js.

The persisted 18+ attestation remains **UI-required / backend-contract pending**. M5 may render the approved UI requirement, but durable persistence still requires a deliberately reviewed backend contract change.

## M4/M5 consumption rule

M4 dashboard migration should consume `createSessionBoundBrowserApiClient()` for browser-safe backend requests and rely on the protected-route topology; it must not recreate session handling inside dashboard code.

M5 auth/page implementation should use the same-origin Auth.js protocol and this route topology. Visual implementation must not create a new authentication state model merely for component convenience.
