# M2 Review Report — Frozen Backend Contract and Typed Client Layer

**Status:** stopped at the M2 architectural review gate

**Baseline:** merged `main` at `886aeff49700093cfe5df1b4f1d7257490c609ad`

**Branch:** `m2/frozen-contract-typed-client`

**Frozen mirror source:** `Elceo23x4/Elceo-Mi@771487b46874afc28a21f260a2c12f92bfe8f736`

**Frozen functional commit/tree:** `20266494efd3a8d3a97c3ea9335c672e20fe7fa5` / `6f81f55269031e0ec6467cd60283593dd5b7c2d3`

M2 adds a generated, policy-constrained TypeScript contract layer. It does not add authentication/session behavior, pages, dashboard migration, backend runtime behavior, or a production Next.js cutover.

## Generator decision and provenance

The generator is pinned exactly to `@hey-api/openapi-ts@0.99.0`. Its published engine is Node `>=22.18.0`, its TypeScript peer range includes the repository's TypeScript 6 line, and the selected `@hey-api/typescript` plugin emits types only. The result adds no browser runtime. The upstream project recommends exact pinning while its release line is below 1.0.

Evidence:

- [Hey API OpenAPI TypeScript setup](https://heyapi.dev/docs/openapi/typescript/get-started)
- [Hey API TypeScript plugin](https://heyapi.dev/docs/openapi/typescript/plugins/typescript)
- the exact package engine, peer dependency, tarball and integrity are locked in `package-lock.json`

`openapi-typescript@7.13.0` was evaluated but not selected because its published TypeScript peer range is `^5.x`, which does not match the accepted TypeScript 6 toolchain.

`scripts/generate-m2-contracts.mjs` always reads the committed `contracts/backend/openapi.json`, route inventory, handoff summary, source provenance and canonical mocks. It rejects source-pin changes, provenance mismatches, missing or duplicate operations, inventory/OpenAPI set drift, stale mock provenance and unexpected generated files. Every generated TypeScript file identifies the source repository/commit, frozen functional tree, input SHA-256, exact generator version and regeneration command. Generated output is never hand-corrected.

## Frozen inventory and authority partition

The counts below are derived and checked from the frozen artifacts; they are not used to replace those artifacts with a parallel inventory.

| Evidence | Verified count |
|---|---:|
| Route files | 153 |
| Unique method/path operations | 168 |
| OpenAPI method/path operations | 168 |
| Inventory/OpenAPI missing or duplicate operations | 0 |
| Inventory operations marked `browserSafe` | 99 |
| Browser-safe `user_ui` operations exposed by the browser client | 95 |
| Admin/super-admin trusted bridge operations exposed server-side | 55 |
| Framework/webhook/internal operations excluded from general clients | 18 |
| Operations requiring idempotency | 98 |
| Browser operations whose mutation type requires idempotency | 60 |

The 18 excluded operations are four Auth.js framework operations, four provider webhooks, nine backend-internal operations, and `POST /api/notifications/delivery/dispatch`, which the frozen inventory marks non-browser-safe and internal-token protected despite its `user_ui` audience value.

The generated full and trusted registries are `server-only`. The browser module imports only its 95-entry allowlist. It cannot name admin, super-admin, webhook or backend-internal keys. There is no exported `request(path: string)` escape hatch.

## Typed transport

The transport requires an injected HTTP(S) base origin and `fetch` implementation. It accepts only the generated operation key, generated OpenAPI input fields, operation-allowed headers and an explicit request context. It contains no backend hostname, session minting, credential forwarding, cookie/CSRF decision, Auth.js setup, internal-token source or unrestricted proxy.

Reads and mutations are distinct at the type level. An operation marked `idempotency: required` cannot use the typed mutation interface without a caller-supplied logical-action key. Controlled retry tests prove that all network attempts reuse that same key. No helper generates a replacement key.

The result union keeps the inventory's `responseContract` discriminator and the generated operation response type. It distinguishes success, validation failure, unauthenticated, forbidden, not found, conflict, rate limited, unavailable/degraded, known commercial-pending and unknown errors. It does not flatten Auth.js, dashboard and handler-specific responses into an invented standard envelope. Opaque or unrecognized failures remain `unknown_error`.

### Recorded frozen-contract refinement

No generated DTO was manually refined. One result classification is evidence-backed outside the conservative OpenAPI schema: `POST /api/billing/checkout` recognizes `processing`, `unknown` and `reconciliation_required` as pending/ambiguous commercial outcomes. Evidence is `docs/backend-contract/billing-payment-state-machine.md`, `docs/backend-contract/ui-page-inventory.md`, the inventory entry and `contracts/backend/mocks/billing-checkout-processing.json`. This classification never grants entitlement or claims payment success.

## Response contracts and mocks

The registry preserves all frozen response-contract families rather than normalizing them:

| Response contract | Operations |
|---|---:|
| `standard_api_envelope` | 152 |
| `handler_specific_json` | 11 |
| `authjs_framework_owned` | 4 |
| `DashboardChartWorkspaceViewModel_or_KickOffDashboardViewModelV1` | 1 |

All 13 canonical mocks remain byte unchanged. Each is mechanically mapped exactly once by its `_meta.method` and `_meta.route`, checked against frozen provenance, connected at compile time to its generated OpenAPI operation response, and runtime-checked according to its response-contract family. These fixtures prove frozen contract shape only; they are not evidence of live backend readiness or production behavior.

Kick Off and Focus Plan dashboard contracts remain separate. Passive `latest`, `current`, `history` and dashboard GET operations are asserted as read-only and non-idempotency mutations are not inferred. The client contains no directional-bias, confidence, evidence weighting/deduplication, freshness, entitlement, billing, subscription, role or permission calculation.

## Validation and unresolved contract constraints

`apps/frontend/lib/contracts/generated/unresolved-contracts.generated.json` lists the exact 50 operations whose OpenAPI extension says `Unspecified beyond frozen handler/type contract.` It includes the operation key, route file, referenced validators and source provenance, and states that the frontend may not create a rule without new canonical evidence.

The remaining operations' frozen entries point to referenced validators, but M2 does not transcribe those validators into a second hand-maintained schema. The conservative OpenAPI leaves a number of request bodies/results unknown or `never`; M2 preserves that limitation rather than inventing DTO fields, validation limits or permissions. Resolving those gaps requires a future corrected backend handoff or an explicitly reviewed evidence-backed refinement.

## Boundary and negative evidence

- Type-negative tests reject a required-idempotency mutation without idempotency context.
- Type-negative tests reject admin and provider-webhook keys through the browser client.
- The compile-only type proof uses a `.typecheck.ts` suffix so the M1 Playwright runner cannot misclassify JSON fixture imports as browser tests.
- The client graph checker first proves it detects a synthetic client-to-`server-only` import, then checks every real client entry graph.
- The full and trusted registries are `server-only`; the browser registry contains no internal-token header or admin bridge entry.
- The production browser-bundle scanner rejects the internal header name, internal credential marker and trusted-client implementation symbols.
- M1's broad source scan now excludes only generated contract evidence, where the internal header *name* must be represented. Its runtime/browser-bundle protections remain active and pass.

## Exact-head acceptance evidence

Local verification used canonical Node `v22.23.2` and npm `11.9.0` from a clean `npm ci` (364 packages installed). The final PR check results are recorded against the exact review head after publication.

| Gate | Command | Result |
|---|---|---|
| Clean locked install | `npm ci` | PASS |
| Dependency tree | `npm ls --all` | PASS (platform optional dependencies reported as optional) |
| Vite rollback/parity build | `npm run build:vite` | PASS; 549 modules transformed |
| Next candidate build | `npm run build:next` | PASS; `/m1-proof` remains the only product-facing candidate fixture |
| Next typecheck | `npm run typecheck:next` | PASS |
| Deterministic generation | `npm run check:m2-contracts` | PASS; 168 operations, 13 mocks, 50 unresolved constraints |
| Contract/runtime/boundary tests | `npm run test:m2` | PASS; 11 tests plus negative graph guard |
| Browser bundle authority scan | `npm run check:m2-browser-bundles` | PASS; 10 bundles scanned |
| M1 regression evidence | `npm run test:m1` | PASS; 4 tests |
| UI Foundation Integrity | `npm run check:ui-foundation` | PASS; approved 941x1672 PNG, 2,888,188 bytes, SHA/CRC/decode verified |
| Frozen Backend Handoff Snapshot | `npm run verify:backend-handoff` | PASS; 28 pinned path/blob/byte/SHA identities |
| Foundation negative tests | `npm run test:foundation` | PASS; 3 tests |

CI adds the same Node-22 contract-generation, typecheck, Next build, M2 tests, browser-bundle scan, backend snapshot and UI authority checks. The existing frontend production workflow continues to own the independent Vite build.

## Scope preservation

The exact changed-file list is `docs/design/M2_CHANGED_FILES.txt`. There are no changes under `src/**`, `public/**`, `apps/frontend/app/**`, `contracts/backend/**`, `docs/backend-contract/**`, `docs/design/reference/**`, `vite.config.ts`, `index.html`, or `vercel.json`. Therefore:

- legacy landing/dashboard source, SVGs, geometry and Vite rollback evidence remain unchanged;
- the frozen backend pin, all 28 mirrored files and snapshot remain unchanged;
- the approved landing PNG remains unchanged;
- `/m1-proof` remains noindex and unchanged;
- no authentication/session implementation, product page, dashboard migration, backend runtime behavior or production framework cutover was added.

## Remaining architectural decisions (M3 or later)

1. Authentication/session ownership, credential forwarding, cookie attributes, CSRF and logout remain undecided for M3.
2. The source of the internal server credential is intentionally absent; trusted operations cannot execute without an injected transport and future reviewed header authority.
3. The frozen OpenAPI's conservative request/response schemas and the 50 explicitly unresolved field-constraint operations need corrected backend evidence before stricter client validation can exist.
4. Trusted BFF route design and operation-specific mediation remain unimplemented; there is no general proxy.
5. UI behavior for ambiguous checkout state, reconciliation and entitlement refresh remains future work; M2 only preserves the server-owned states.

M2 stops here. M3 authentication/session work, M4 dashboard migration, landing/public/product work and production Next.js cutover have not started.
