# ELCEO Production Frontend — Next.js Migration Plan

## Decision

The production frontend will move from the current Vite/React Router architecture to Next.js. This foundation PR does **not** perform that migration; it locks the constraints and migration sequence so GPT Work can execute it without damaging the accepted dashboard or inventing backend semantics.

## Why Next.js

The complete frontend now needs:

- public SEO/static content and metadata;
- Auth.js/session integration across public and protected routes;
- a trusted server/BFF layer for browser-facing admin flows that must never expose internal backend credentials;
- route-level loading/error boundaries and code splitting;
- image/font optimization and server/client component boundaries;
- production routing for the complete canonical UI inventory.

## Migration constraints

1. Preserve the existing dashboard as accepted design/interaction heritage.
2. Do not redesign dashboard composition during framework migration.
3. Inventory existing routes/components/assets before moving files.
4. Keep backend/source-contract authority in `Elceo-Mi` and consume it through the mirrored snapshot/API client layer.
5. Do not combine the migration with broad visual implementation. First establish a stable shell and prove dashboard parity.
6. No internal admin token or provider secret may be emitted to client bundles.

## Recommended target topology

```text
app/
  (public)/
  (auth)/
  (app)/
  admin/
  api/                 # frontend BFF/server mediation only where required
components/
  brand/
  public/
  app/
  admin/
  primitives/
features/
  dashboard/
  workspace/
  journal/
  portfolio/
  analytics/
  coaching/
  notifications/
  settings/
lib/
  api/
  auth/
  contracts/
  motion/
  telemetry/
  accessibility/
styles/
public/
```

Final topology may be refined after Work audits the current repository, but keep domain boundaries simple and explicit.

## Migration phases

### M0 — Audit

- inventory current Vite routes, dashboard modules, assets, CSS scopes, runtime assumptions, and build/deployment config;
- map each current route to canonical UI inventory;
- identify dashboard-specific client-only/browser APIs;
- identify assets that can be moved unchanged.

Deliverable: migration report before functional changes.

### M1 — Next.js shell

- establish App Router, TypeScript, lint/typecheck/build scripts;
- global metadata, fonts, tokens, base styling, providers;
- public/protected route groups;
- preserve existing Vite app temporarily until parity path is proven if needed.

### M2 — Backend contract/client layer

- consume mirrored OpenAPI/route inventory/mocks;
- establish typed API adapter boundaries;
- separate browser-safe calls from BFF/server-only calls;
- centralize canonical error envelope/state mapping.

### M3 — Auth/session

- implement Google-only signup/login v1 against frozen auth semantics;
- protected layouts and role/entitlement gates;
- no email/password self-registration UI;
- no fake age-attestation persistence.

### M4 — Dashboard parity migration

- port dashboard without redesign;
- preserve chart behavior, scoped visual tokens, progressive disclosure, and accepted interactions;
- run visual/regression/performance comparison before deleting legacy path.

### M5 — New page families

Proceed from public/auth through authenticated app/settings/admin according to canonical page inventory and project phase plan.

## Acceptance gates

Before legacy Vite removal:

- production build green;
- dashboard feature/visual parity accepted;
- auth/session behavior correct;
- backend contract usage proven;
- no secrets in client bundles;
- route-level loading/error states established;
- representative mobile/desktop routes stable;
- memory/performance baseline no worse than accepted current dashboard and materially improved for new public UI.
