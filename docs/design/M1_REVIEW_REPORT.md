# M1 — Next.js production shell review

Status: implementation candidate; architectural acceptance and deployment cutover are not granted. Stop at M1. No M2 contracts, authentication, landing or dashboard migration.

## Baseline and architecture

Branch: `m1/nextjs-production-shell`, from merged main `55485325ea086c02fc45f0e37b4128e8bf3937af` (M0 PR #57). The isolated npm workspace `apps/frontend` owns the candidate. Root `src/app` remains React Router; root `dev`, `build` and `preview` remain Vite. Vercel configuration is unchanged. No Next framework detection or production cutover is requested.

Candidate topology contains `app/(public)`, `(auth)`, `(app)`, `(app)/settings`, `admin`, and reserved `api`; feature, component and library directories follow the approved migration plan. Route-group layouts are structural Server Components, not authorization gates. Only `/m1-proof` is implemented: an explicitly labelled engineering fixture, with noindex metadata. `/`, `/login`, `/dashboard`, `/settings`, `/admin` and `/api/session` are intentionally absent. There are no fabricated sessions, backend calls, API handlers or product interfaces.

`lib/api/server.ts` is poisoned with `server-only`. Future trusted adapters belong here; contract mapping remains M2 and session/role enforcement M3. Auth and contract directories reserve ownership without defining invented DTOs or persistence. No browser credential or intelligence authority is introduced.

## Stable dependencies and reproducibility

Canonical runtime: Node `22.23.2` (`.nvmrc`, root/workspace engines and CI). This satisfies the existing `camera-controls@3.1.2` Node >=22 requirement. Node 20 is removed from the legacy build matrix in this phase.

Exact candidate dependencies: Next `16.3.5`, React/ReactDOM `19.2.8`, `server-only@0.0.1`. Next registry metadata declares Node >=20.9 and React/ReactDOM `^19.0.0` support. The official stable installation documentation identifies 16.3.5. No experimental/canary package or framework option is selected. Next's internally managed App Router React implementation is framework-owned, not an independently installed canary React dependency.

Evidence: [official installation](https://nextjs.org/docs/app/getting-started/installation), [Next package metadata](https://registry.npmjs.org/next/16.3.5), [server/client boundaries](https://nextjs.org/docs/app/getting-started/server-and-client-components), [Turbopack SVG loader rules](https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack). Verified 2026-09-20 before dependency edits.

The single root lockfile covers both workspaces. Comparison of all pre-existing lockfile package paths/versions with the merged baseline found zero version changes. R3F stays `9.7.0`. Added SVGR `8.1.0` is a Next Turbopack loader, not a second Webpack build system. Playwright `1.63.0` is candidate verification tooling. Explicit `@types/node@22.20.4` closes a CI-proven missing type dependency that the local environment had supplied indirectly; first candidate run 35518300569 failed at that check, not at compilation.

Commands: `npm ci`; `npm run build:vite` (also unchanged `npm run build`); `npm run dev:vite`; `npm run dev:next`; `npm run build:next`; `npm run start:next`; `npm run typecheck:next`; `npm run test:m1`. Browser tests: `cd apps/frontend && npx playwright install chromium && npx playwright test`.

## Browser/SSR audit and migration obligations

| Existing evidence | M1 handling and future boundary |
| --- | --- |
| `src/main.tsx` calls `document.getElementById` and createRoot | Remains Vite-only; Next owns its own document/root. |
| `src/hooks/usePrefersReducedMotion.ts` uses window/matchMedia | Not imported. Future client hook needs deterministic initial SSR value, effect subscription and cleanup. |
| `src/dashboard/hooks/useCockpitScale.ts`, panel ScrollFrame/PanelSectionNav use ResizeObserver | Remain unchanged; future narrow client components retain geometry, disconnect observers and feature fallbacks. |
| `src/dashboard/chart/ChartEngine.tsx` initializes Lightweight Charts inside effect | Remains excluded. Future client-only chart island must remove charts/observers on cleanup; chartTheme's static import currently defeats splitting. |
| `src/dashboard/responsive/panelContent/HoverPreviewCard.tsx` portals to document.body and measures viewport | Unchanged. Future body portals must explicitly preserve scoped typography and positioning; M1's contained portal proof is not a replacement adapter. |
| DetailDrawer and responsive interactions use document/window listeners | Remain excluded; client effects must symmetrically clean listeners. |
| `src/landing/LandingExperience.tsx` registers ScrollTrigger at module scope | Not evaluated in Next. Future cinematic client island imports/registers browser-only plugins safely and reverts GSAP contexts. |
| PagePreloader, ScrollCue, DashboardGsapStarfield and useGsapStarTwinkle | No port; preserve reduced-motion behavior and cancellation in future adapters. |
| Three/R3F dependencies | Not imported into candidate; spatial features require a narrow dynamically loaded client wrapper, capability fallback, demand rendering and explicit GPU disposal later. |

The sole candidate client component is `ScopedPortal`, which mounts its portal after hydration into its own host. It does not force a root/client application tree. No legacy CSS, motion, chart or WebGL module enters the candidate graph.

## SVG, CSS, fonts and provider ownership

Legacy Vite `?react` and `?url` imports remain untouched. Candidate component SVGs use plain `.svg` imports through explicit Turbopack SVGR rules with SVGO disabled. URL assets use explicit public URLs, not implicit Vite query semantics. A small real dashboard arrow is compiled as a component and copied byte-for-byte into the candidate's proof assets; tests compare the copy against its canonical source. No large SVG conversion, original source edit or geometry transformation occurs. Large-asset migration and duplicate-ID review remain M4 work.

Root global CSS declares only a namespaced reading-font token; it does not assign body typography or import public/dashboard styles. No third-party font download or global client provider is introduced. Approved font assets/provider needs must be selected per domain before product implementation. CSS Modules own proof styles. The technical dashboard fixture retains `.elceo-dashboard-scope` and `.dashboard-precision-viewport`, with a portal inheriting its local font/color despite a differently styled public fixture. This proves isolation mechanics, not dashboard visual parity. The existing dashboard's source, styles, assets and geometry are byte unchanged.

## Acceptance evidence

Local canonical Node 22.23.2:

- Clean `npm ci`: exit 0, 320 packages installed; no peer bypass.
- `npm ls next react react-dom @react-three/fiber`: exit 0.
- Legacy TypeScript/Vite production build: exit 0; existing SVG/bundle size and ineffective Lightweight Charts dynamic-import warnings remain.
- Candidate Next 16.3.5 Turbopack production build: exit 0; only not-found and `/m1-proof` routes.
- `npm run typecheck:next`: exit 0. A temporary negative client-import fixture caused the expected server-only build rejection; fixture removed and normal candidate build restored successfully.
- `npm run test:m1`: 4/4 pass: immutable legacy/frozen paths, byte-identical SVG, narrow client/no backend implementation, production browser-bundle authority scan.
- `check:ui-foundation`: exit 0, exact approved PNG CRC/hash/full decode passes.
- `verify:backend-handoff`: exit 0, all 28 paths/blobs/bytes/local SHA-256 checks against `771487b46874afc28a21f260a2c12f92bfe8f736` pass. Snapshot and functional-freeze provenance unchanged.
- Direct production HTTP proof: GET/HEAD `/m1-proof` return 200 with server-rendered boundary/SVG content; six absent product/auth/API paths return 404.
- Browser proof: local Chromium download returned HTTP 502; GitHub-hosted Chromium verification passed both desktop and mobile/reduced-motion projects. Assertions prove production HTTP semantics, hydration without page errors, component/URL SVG rendering and portal font/color inheritance alongside isolated public styles.

The static bundle scan covers the actual candidate JS output and known internal authority markers. No credentials are read by candidate source. This is not a general secret scanner or authorization integration test.

## Migration risks and architectural decisions

1. Accept or refine the isolated `apps/frontend` workspace before further migration. Production remains root Vite until explicit cutover authorization.
2. No protected page is exposed; route groups do not enforce access. Backend/session boundaries await M2/M3 contracts.
3. Technical `/m1-proof` must be removed or isolated before production cutover; it is deliberately not an ELCEO design authority.
4. Scoped CSS/portal fixtures are representative. Full dashboard viewport/interaction/screenshot parity and body-portal inheritance remain M4 gates.
5. SVG URL copies need explicit ownership/hash checks; migration of large complex SVGs remains deferred.
6. Public tokens/fonts, providers, error/loading UX and performance budgets require actual approved page context; no generic designs were substituted in M1.
7. Vite bundle warnings are pre-existing evidence, not an M1 optimization mandate. No React Router or dashboard code was rewritten.
8. The secondary Vercel failure remains outside this shell's authority. No application configuration changes are used to repair it.

Exact changed files are recorded in `M1_CHANGED_FILES.txt`. CI evidence and final PR head must be reviewed with this report before accepting M1. This report does not grant merge readiness or M2 authorization.

## CI review evidence

Implementation revision `cf72e99c287c6390e4e5eca2caa41e7fff9db677` passed all four workflows:

| Check | Evidence |
| --- | --- |
| Node 22 locked install, Next production build, TypeScript, four boundary/integrity checks, both Chromium projects | [M1 Next Candidate run 35518427802](https://github.com/Elceo23x4/elceo_land/actions/runs/35518427802) |
| Existing Vite/TypeScript production build | [Frontend Production Build run 35518427790](https://github.com/Elceo23x4/elceo_land/actions/runs/35518427790) |
| Approved PNG, UI foundation, pinned backend verification and rejection tests | [UI Foundation Integrity run 35518427831](https://github.com/Elceo23x4/elceo_land/actions/runs/35518427831) |
| Frozen snapshot synchronization/verification | [Backend Handoff Snapshot run 35518427798](https://github.com/Elceo23x4/elceo_land/actions/runs/35518427798) |
| Primary Vercel preview, existing Vite production path | [Successful primary preview](https://vercel.com/elceo23x4s-projects/elceo-land/Y4w3pQgrrTYRBs3VqUgrrwBk7tGY) |

This final evidence-only report update changes no implementation. Its exact-head rerun is visible on [draft PR #58](https://github.com/Elceo23x4/elceo_land/pull/58/checks). The initial missing Node type declaration was corrected; no unrelated dependency version changed. All 49 changed paths are enumerated in `M1_CHANGED_FILES.txt`. M1 remains subject to architectural review; M2 and production cutover remain closed.
