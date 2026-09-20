# M2 Review Report — Frozen Backend Contract and Typed Client Layer

**Status:** stopped at the M2 architectural review gate

**Baseline:** merged `main` at `886aeff49700093cfe5df1b4f1d7257490c609ad`

**Branch:** `m2/frozen-contract-typed-client`

**Frozen mirror source:** `Elceo23x4/Elceo-Mi@771487b46874afc28a21f260a2c12f92bfe8f736`

**Frozen functional commit/tree:** `20266494efd3a8d3a97c3ea9335c672e20fe7fa5` / `6f81f55269031e0ec6467cd60283593dd5b7c2d3`

M2 adds a generated, policy-constrained TypeScript contract layer. It does not add authentication/session behavior, product pages, landing implementation, dashboard migration, backend runtime behavior, or a production Next.js cutover. The only `apps/frontend/app/**` change is an engineering-only hidden browser-client proof inside the existing noindex `/m1-proof` fixture.

## Generator decision and provenance

The generator is pinned exactly to `@hey-api/openapi-ts@0.99.0`. The selected `@hey-api/typescript` plugin emits type-only OpenAPI output; it does not add an OpenAPI runtime client to the browser.

`scripts/generate-m2-contracts.mjs` always reads the committed `contracts/backend/openapi.json`, route inventory, handoff summary, source provenance and canonical mocks. It rejects source-pin changes, provenance mismatches, missing or duplicate operations, inventory/OpenAPI set drift, stale mock provenance, incompatible compact-browser assumptions and unexpected generated files. Every generated TypeScript file identifies the source repository/commit, frozen functional tree, input SHA-256, exact generator version and regeneration command.

The rich full operation registry remains the mechanically generated audit authority and is `server-only`. Browser execution receives a separate generated projection rather than importing the audit registry.

## Frozen inventory and authority partition

The counts below remain derived from the frozen artifacts and were not changed by the runtime-closure work.

| Evidence | Verified count |
|---|---:|
| Route files | 153 |
| Unique method/path operations | 168 |
| OpenAPI method/path operations | 168 |
| Browser-safe `user_ui` operations exposed by the browser client | 95 |
| Admin/super-admin trusted bridge operations exposed server-side | 55 |
| Framework/webhook/internal operations excluded from general clients | 18 |
| Browser operations requiring logical idempotency context | 60 |
| Canonical mocks | 13 |
| Explicitly unresolved field-constraint operations | 50 |

The 18 excluded operations remain outside both general clients. Trusted/admin authority remains behind `server-only`, and the browser key union cannot name trusted, webhook or backend-internal operations.

## Compact browser runtime registry

The first M2 review found that the browser registry carried the same large audit/provenance payload used for server/build-time verification. That was unnecessary browser authority and payload.

The closure therefore splits the concerns mechanically:

- the full generated registry keeps route files, declared policy expectations, handler-guard evidence, runtime-test evidence, validators, source provenance and related audit material behind `server-only`;
- the generated browser runtime registry contains only execution data needed by the browser transport: operation key, method, route path, response contract, idempotency requirement, allowed caller headers and evidence-backed unavailable statuses;
- no second hand-maintained API inventory is introduced; the compact projection is emitted from the frozen rich registry by the same deterministic generator.

Measured checked-in source size:

| Browser registry | Bytes |
|---|---:|
| Pre-closure reviewed registry | 290,891 |
| Closure compact registry | 6,713 |
| Reduction | 284,178 bytes (97.69%) |

The compact generator also fails if a future frozen browser route unexpectedly requires a caller-authored header other than the controlled idempotency header, or if a non-GET browser operation violates the current frozen idempotency evidence. This prevents the compact representation from silently guessing new semantics.

## Typed transport and idempotency ownership

The transport still requires an injected HTTP(S) origin and `fetch` implementation. It contains no fixed backend hostname, Auth.js/session assumptions, internal-token source, unrestricted proxy, entitlement calculation or intelligence calculation.

Logical mutation identity and transport retry policy are now deliberately separate:

- `idempotency` contains only the caller-supplied logical-action key;
- the previously invented `maxAttempts?: 1 | 2 | 3` policy is removed;
- automatic retry is disabled by default;
- an optional injected `shouldRetry(context)` policy owns retry cadence/limits when a future caller intentionally supplies one;
- any configured retry reuses the same `Idempotency-Key` and serialized request body for the same logical action;
- caller cancellation (`AbortError`) is never retried;
- deterministic local contract/programming failures such as an invalid base origin, missing path parameter, forbidden header or missing required idempotency context remain explicit errors instead of being converted into ambiguous network outcomes;
- a genuine ambiguous transport failure that is not explicitly retried remains `unknown_error`, preserving the frozen guidance to reconcile/read back authoritative state before creating a new logical mutation.

Both compile-time and runtime negative proofs prevent callers from authoring `Idempotency-Key` directly through the ordinary headers object, including casing variations.

## Canonical result-state preservation

The closure corrected two semantic collapses in the original M2 result adapter.

The client now preserves these frozen distinctions:

| Backend evidence | Client result |
|---|---|
| HTTP 400 / validation-family evidence | `validation_failure` |
| HTTP 413 / `payload_too_large` | `payload_too_large` |
| HTTP 424 / `dependency_failed` | `unavailable_degraded` |
| Documented HTTP 503 unavailable state | `unavailable_degraded` |
| HTTP 500 / `internal_error` | `internal_failure` |
| Unrecognized status/envelope | `unknown_error` |

A generic 503 is **not** treated as degraded merely because of its number. The compact browser policy carries 503 only where frozen evidence supports it. The route inventory supplies explicit 503 evidence, while the frozen UI state matrix separately documents `GET /api/dashboard/{asset}` returning 503 when canonical dashboard materialization is unavailable. The generator verifies that the dashboard operation still has the expected frozen dashboard response contract before emitting that refinement. An undocumented 503 remains `unknown_error`.

`502` and `504` are no longer generalized into degraded state without operation-specific canonical evidence.

The pre-existing evidence-backed checkout refinement remains: `POST /api/billing/checkout` recognizes `processing`, `unknown` and `reconciliation_required` as commercial-pending outcomes and never claims payment success or entitlement.

## Response contracts, mocks and unresolved constraints

The frozen response-contract families remain separate; Auth.js, dashboard and handler-specific payloads are not forced into an invented standard envelope.

All 13 canonical mocks remain byte unchanged and mapped to their frozen operation contracts. The exact 50 operations marked `Unspecified beyond frozen handler/type contract.` remain listed in `apps/frontend/lib/contracts/generated/unresolved-contracts.generated.json`; M2 does not create client-side minimums, maximums, enums, permissions or DTO fields that the frozen handoff does not prove.

Kick Off and Focus Plan dashboard contracts remain separate. The browser/client layer contains no directional-bias, confidence, evidence-weighting, freshness, billing truth, entitlement, role or permission computation.

## Browser/server boundary proof

The closure strengthens the boundary proof in two ways.

First, `scripts/check-m2-client-boundaries.mjs` now models JavaScript runtime reachability rather than treating erased TypeScript-only edges as runtime imports. A synthetic type-only client path to a `server-only` type module is allowed; a synthetic real runtime client import of `server-only` must fail. Every actual `"use client"` entry is then traversed under the same rule.

Second, the existing noindex `/m1-proof` engineering fixture now imports a hidden `M2BrowserClientProof` client component. That component genuinely instantiates `createBrowserApiClient` with an inert `.invalid` origin and a fetch implementation that throws if ever called. It performs no network request and adds no product behavior. Its purpose is to force the real browser client and compact runtime registry into a production Next browser graph.

The production bundle scan therefore has both positive and negative evidence:

- it must find the browser-client proof sentinel, so the test cannot pass because the client was tree-shaken away;
- it rejects internal-token names/credential markers;
- it rejects the trusted registry/client;
- it rejects backend handler-guard/runtime-test/source-provenance/policy-inventory metadata and backend API source paths.

The original M1 `/m1-proof` geometry, SVG proof attributes and existing engineering content are otherwise preserved.

## Acceptance status

The original M2 reviewed head `8eb2a0db7bc2e8c9d17de6ae189b2d17136b4052` had green exact-head acceptance, including the Vite production build, M1 Next candidate build/typecheck/routing proof, M2 contract workflow, UI Foundation Integrity, Vercel, frozen backend snapshot verification, deterministic generation and M2 tests.

The runtime-closure commits were written through the connected GitHub API. GitHub does not start `pull_request` Actions workflows from these connector-authored branch writes, and closing/reopening the draft PR did not create an exact-head Actions run. Therefore the old green run is **not** being represented as evidence for the closure head.

Final closure acceptance remains pending one genuine exact-head CI run. That run must prove at minimum:

- clean Node 22 `npm ci`;
- Vite production build;
- Next production build and typecheck;
- deterministic `npm run check:m2-contracts` with 168 operations, 13 mocks and 50 unresolved constraints;
- M2 runtime/contract tests including same-key retry, no default retry, AbortError behavior, local-error preservation, direct-header rejection and distinct 413/424/500/documented-503/unknown mapping;
- corrected runtime client/server graph proof;
- real browser-client production bundle proof and authority scan;
- M1 regression suite;
- UI Foundation Integrity;
- frozen 28-file backend handoff snapshot verification;
- foundation negative tests.

No merge recommendation should rely on the prior head once the closure changed executable code. M2 remains at the architectural review gate until that exact-head run is green.

## Scope preservation

The exact changed-file list is `docs/design/M2_CHANGED_FILES.txt`.

There are no changes under `src/**`, `public/**`, `contracts/backend/**`, `docs/backend-contract/**`, `docs/design/reference/**`, `vite.config.ts`, `index.html` or `vercel.json`.

The only `apps/frontend/app/**` delta is the existing noindex `/m1-proof` engineering fixture described above. No product route/page, landing implementation, dashboard implementation, authentication/session behavior, backend runtime behavior or production framework cutover was added.

The frozen source pin, mirrored backend handoff, canonical mocks and approved UI authority assets remain unchanged.

## Remaining architectural decisions (M3 or later)

1. Authentication/session ownership, credential forwarding, cookie attributes, CSRF and logout remain M3 work and have not started.
2. The source of the internal server credential remains intentionally absent; trusted operations cannot execute without future reviewed authority injection.
3. The 50 explicitly unresolved field-constraint operations require corrected canonical backend evidence before stricter frontend validation can be introduced.
4. Trusted BFF route design and operation-specific mediation remain unimplemented; there is no general proxy.
5. UI behavior for ambiguous checkout state, reconciliation and entitlement refresh remains future work; M2 only preserves server-owned states.

M2 stops here. M3 authentication/session work, M4 dashboard migration, landing/public/product work and production Next.js cutover have not started.
