# M3 Review Report — Canonical Session / Auth Topology

**Status:** implementation complete; stopped at M3 architectural review gate pending exact-head CI evidence

**Baseline:** current merged `main` at `91aca7af01d81e66d167194ca9b4773757332ed4`

**Branch:** `m3/canonical-session-auth-topology`

**Frozen backend authority:** `Elceo23x4/Elceo-Mi@771487b46874afc28a21f260a2c12f92bfe8f736`

**Frozen functional commit/tree:** `20266494efd3a8d3a97c3ea9335c672e20fe7fa5` / `6f81f55269031e0ec6467cd60283593dd5b7c2d3`

M3 establishes the authentication/session topology required by the separate Next.js frontend. It does not build the visual authentication pages, migrate the dashboard, change backend runtime semantics, expose admin secrets, or cut production from the accepted Vite deployment.

The branch intentionally starts from the actual current `main` after the M2 merge and preserves the user's subsequent deletions of root `reference1.jpg` and `elceo_fig.svg`.

## Architectural decision

The frozen backend Auth.js instance remains ELCEO's only authentication/session authority.

The Next frontend does not initialize `NextAuth()`, copy `AUTH_SECRET`, decode the Auth.js JWT, create a second session cookie, or mint a frontend bearer token. Instead it establishes:

1. a same-origin Auth.js protocol relay at `/api/auth/[...nextauth]`;
2. a registry-allowlisted same-origin application BFF at `/api/[...elceo]`;
3. a Next.js 16 document `proxy.ts` gate for canonical protected route families;
4. a fail-closed canonical session parser for server-derived session claims;
5. a browser M2 client binding that targets only `window.location.origin` with same-origin credentials.

This resolves the central repository-separation problem without changing the frozen backend: the browser retains one first-party frontend origin while the frontend server mediates to the backend that still owns Auth.js and application authority.

## Frozen evidence used

M3 is grounded in the mirrored handoff and exact frozen backend source:

- `docs/backend-contract/auth-session-and-authorization.md`;
- `docs/backend-contract/state-ownership.md`;
- `docs/backend-contract/frontend-integration-map.md`;
- `docs/backend-contract/ui-state-matrix.md`;
- `docs/backend-contract/contract-gaps.md`;
- `docs/backend-contract/ui-page-inventory.md`;
- frozen `apps/web/lib/auth/config.ts`;
- frozen `apps/web/app/api/auth/[...nextauth]/route.ts`;
- frozen `apps/web/middleware.ts`;
- frozen `apps/web/lib/server/security/browser-mutation.ts`;
- frozen `apps/web/lib/auth/route-protection.ts`;
- frozen Auth.js type augmentation.

The backend proves JWT-session ownership, Google provider semantics, seven-day max age, server-derived `id`/`role`/`planTier`/`onboardingCompletedAt`, exact-origin unsafe-browser mutation protection, the three admin-role names, and the prohibition on exposing `x-elceo-internal-token` to browsers.

## Google-only v1 boundary

The frontend migration's v1 login/signup topology is Google-only.

The Auth.js relay permits the reviewed framework session/CSRF/sign-out/error paths and Google sign-in/callback. It explicitly rejects credential sign-in/callback through the catch-all. No email/password registration behavior or persistence is invented.

Password-reset routes are dedicated frozen API contracts rather than Auth.js catch-all behavior. M3 does not silently expose them through this relay; their page-specific mediation remains M5 implementation work.

## Cookie and host handling

Auth.js cookie names are treated as opaque. The frontend never constructs `authjs.session-token`, `next-auth.session-token` or a secure-prefixed variant.

The relay forwards incoming `Cookie` and returns upstream `Set-Cookie` values. It supplies the configured public frontend host/protocol via forwarding headers so the frozen backend's `trustHost` Auth.js configuration operates on the public application origin.

Protected document navigation resolves `/api/auth/session` through the frozen backend. Any returned cookie rotation/cleanup is attached to the frontend response by `proxy.ts`, avoiding a Server Component-only refresh path that could not reliably persist a rotated HttpOnly cookie.

Malformed truthy session payloads are not authentication. The canonical parser requires the frozen session fields and reports invalid/upstream/network states as unavailable.

## Protected route gate

`apps/frontend/proxy.ts` protects the canonical route families:

- dashboard;
- workspace;
- journal;
- portfolio;
- analytics;
- coaching;
- notifications;
- settings;
- onboarding;
- admin.

Signed-out users are redirected to `/login` with a sanitized local callback preserving the requested pathname/query. Open redirects, protocol-relative destinations, API callbacks and auth-entry loops are rejected.

Auth/session authority failures return `503` and never fall through as anonymous access.

The admin route gate uses the exact frozen role set only for presentation/navigation. It does not replace backend internal-token, permission, commercial or step-up checks.

## Browser-safe API mediation

The general application BFF resolves every incoming request against the generated compact M2 browser registry. Therefore the BFF cannot become a path-string proxy to arbitrary backend APIs.

Admin/super-admin, webhooks, Auth.js framework and backend-internal operations remain outside this browser BFF. Browser attempts to send `Authorization` or `x-elceo-internal-token` are rejected before backend transport.

For unsafe methods, the BFF repeats the frozen exact-origin rule and only then forwards canonical same-origin origin evidence. Session cookies remain opaque and server-forwarded. Operation-specific allowed headers, including idempotency, come from M2 policy.

## Role and entitlement discipline

`role` and `planTier` are server-derived session claims, but they are not treated as final operation authority.

M3 intentionally does not implement `planTier === 'premium'` routing. Frozen entitlement/access endpoints and protected operation responses remain authoritative. Concrete route-specific feature/paywall behavior belongs with the product route that consumes that contract; fabricating a generic plan gate here would weaken the backend contract.

Admin presentation filtering is similarly not authorization for admin operations.

## Deployment contract introduced by M3

Frontend server runtime requires:

- `ELCEO_BACKEND_ORIGIN`;
- `ELCEO_PUBLIC_APP_ORIGIN`.

Neither is a browser environment value. Browser bundles must contain neither environment key nor the backend origin itself.

Production backend configuration must continue to own `AUTH_SECRET`, Google client credentials and internal API token. The backend's public application origin configuration must match the frontend origin used by its frozen mutation guard. Production Google OAuth callback registration must use the frontend `/api/auth/callback/google` URL.

No production deployment configuration is changed by this PR.

## Verification implemented

M3 adds deterministic tests for:

- fail-closed canonical session parsing;
- signed-out vs authenticated vs unavailable resolution;
- callback/open-redirect sanitization;
- exact frozen admin roles;
- complete protected route-family coverage;
- Google Auth.js allowlist and explicit credentials/password-reset exclusion;
- opaque cookie and public forwarded-host relay behavior;
- M2 dynamic operation resolution and admin/webhook exclusion;
- exact-origin mutation behavior;
- cookie/idempotency forwarding through the allowlisted BFF;
- browser authority-header rejection;
- M3 browser-bundle absence of backend origin/env, Auth.js secret, internal token, JWT parsers and hard-coded Auth.js cookie names;
- static proof that no second `NextAuth()` server, credential registration or fake age-attestation persistence was introduced.

The existing M1 engineering fixture contains only a hidden M3 client sentinel so production bundling proves that the same-origin session-bound API client genuinely enters the browser graph. It does not make a network request and is not a product/design page.

## Scope preservation

M3 does not change:

- `src/**` legacy landing/dashboard implementation;
- existing dashboard assets or geometry;
- the approved landing visual authority;
- `contracts/backend/**` or `docs/backend-contract/**`;
- M2 generated contract semantics or frozen source pin;
- backend runtime code;
- Vercel configuration or production framework routing.

No login, signup, onboarding, dashboard or other product page is visually implemented in this PR.

The persisted 18+ attestation remains `UI-required / backend-contract pending`; there is no invented client persistence.

## Acceptance gate

Before M3 is accepted, the exact final head must prove:

- clean Node 22 locked install;
- Vite production build remains green;
- Next production build and typecheck remain green;
- M1 browser/SSR regression proof remains green with the intentional fail-closed protected-route behavior;
- deterministic M2 contracts remain unchanged;
- M2 contract/runtime/client-boundary tests remain green;
- M3 auth topology runtime/static tests are green;
- the real M3 browser graph contains the session-bound client but no server auth authority/secrets;
- UI Foundation Integrity remains green;
- frozen backend snapshot remains green;
- primary Vercel preview remains green;
- no production cutover, dashboard migration, or page design has occurred.

Exact-head CI evidence will be recorded after publication. M3 stops at this review gate; M4 is not authorized by this report.
