# M5 contract gaps — working register

No entry authorizes a frontend substitute for missing backend truth.

- Age attestation: visible 18+ UI is required later; durable persistence remains unsupported. No persistence has been added.
- Support: no frozen ticket-submission API or approved public support address. Help supplies practical guidance and states ticket submission is unavailable; no invented inbox or send form.
- Cookie choices: this frontend enables no optional analytics/advertising cookies. The current surface describes necessary session/security usage and does not create fictitious preference categories or stored consent.
- Dashboard cognition: retain exact M4 fixtures; live binding is expressly excluded from M5.
- Admin inventory: summary count must be compared with explicitly enumerated routes; do not invent a missing route.
- Legal publication: complete canonical policy content and operator-specific facts must be verified before representing new Terms/Privacy as legally approved. Neither an inferred jurisdiction nor unsupported retention/contact commitments may be invented.
- Legal routes now expose the publication limitation alongside supported product explanations. Full approved Terms/Privacy and a formal risk-acknowledgement version remain absent; these pages cannot establish production-ready legal acceptance by themselves.
- Public pricing: frozen dashboard capability projections support Kick Off / Focus Plan comparison. No verified public price source or current offer is established. The pricing page publishes no amount, quota, discount or checkout promise; historical backend pricing-page copy is not promoted into entitlement authority.
- OpenAPI field schemas: M2 deliberately preserves unknown fields. Read the exact pinned runtime DTOs/validators for each new UI mutation and document refinements separately rather than infer fields from fixture examples.

This is an incomplete working register, not final M5 acceptance.

## Landing media / fidelity dependencies

- Hero film: no approved source video is present. The available video generator returned `REQUIRES_PREMIUM` (no video model available on the connected plan). No purchase was made. No fake play control or substituted generic player is shipped. The compact origin-preserving film aperture remains outstanding until a suitable film can be produced/supplied.
- Geographic 3D: the generated still is a recognizable Earth and a valid adaptive fallback, but it is not independently transformable continent geometry. Desktop continent separation/reassembly remains an explicit asset/implementation gap. Current scroll recession does not claim to satisfy that choreography.
- Scene 5 uses independently transformed editorial information planes, with illustrative headings and code-native linework. Final media richness still needs visual review against the approved cinematic reference.
- Scene 6 now uses an actual candidate-dashboard capture from the unchanged controlled M4 fixtures, explicitly labelled demonstration data. It is not live cognition or a fabricated product screenshot.

## Recovery evidence reviewed before UI implementation

All source inspection used commit `771487b46874afc28a21f260a2c12f92bfe8f736`; no newer backend state was substituted.

| Frozen source | Blob | Proven behavior |
|---|---|---|
| `apps/web/lib/auth/reset-request-handler.ts` | `2a5e53d6169d9169f78eb4110d92d12f34a7c350` | Parses at most 8 KiB, trims a string email, schedules recovery only when configured, and always returns HTTP 202 `{accepted:true}`. This cannot prove account existence, successful delivery, or whether recovery is enabled. |
| `apps/web/app/api/auth/password-reset/confirm/route.ts` | `7dfcbf0ffa66bea1a3950d295fd226017094d2d4` | String token/password, 8 KiB JSON limit; `{reset:true}` only after backend confirmation. HTTP 400 carries `invalid_or_expired_token` or `password_policy_rejected`; unavailable credential service also maps to invalid/expired. |
| `services/application-state/src/authentication/password-crypto.ts` | `491948b4a8982f6233d4559b05aa49ad4b64728e` | NFC normalization and 15–256 Unicode code points; no invented composition rule. Server remains password-verification authority. |

Both inventory entries declare `auth_framework`, `browserSafe:true`, `authenticated_basic`, required idempotency/audit and `explicit_exception` mutation boundary. Their handler evidence records no authenticated-subject resolver, idempotency-key reference or audit reference, and runtime test evidence is helper-family only. The inspected handlers do not demonstrate idempotency replay. This is an evidence gap, not permission to claim enforcement or change the backend. The frontend must retain one logical mutation key according to the frozen validation guidance and cannot promise automatic retry safety from the inventory label alone.

M3's existing Auth.js catchall intentionally rejects these recovery paths, and M2 excludes auth-framework operations from its general browser client. No recovery mediation or UI is added by this evidence checkpoint. Any subsequent implementation needs explicit route-specific mediation, negative origin/path/credential tests and documented reconciliation of declared policy with handler evidence; the catchall must not be broadened into a proxy. The inventory's disabled-recovery UI state is not distinguishable from the canonical neutral request response and must not be inferred.

## Workspace request refinement (M5)

The generated `PostApiWorkspaceRefreshData` has no body because the mirrored OpenAPI omits `requestBody`, while the exact pinned handler calls `validateWorkspaceRefreshRequest` and requires `triggerKind`. This is an explicit handoff limitation. The generated files remain unchanged. `lib/contracts/refinements/workspace.ts` supplies only this operation's required body from `packages/types/src/app-api.ts:WorkspaceRefreshRequest`, `packages/types/src/refresh-runtime.ts:SNAPSHOT_REFRESH_TRIGGER_KINDS` and `packages/schemas/src/app-api.schema.ts:validateWorkspaceRefreshRequest`, all at source commit `771487b46874afc28a21f260a2c12f92bfe8f736`. The typed transport composes that one evidenced body with the generated request; method/path/policy/idempotency still come from the generated registry. The UI only submits the proven `manual` trigger. No generic body escape hatch is exported.
# Evidence refinement: notification inbox window

## New-checkout selection and legacy return destination

The frozen checkout handler (`apps/web/app/api/billing/checkout/route.ts`, blob `0186d4a6a45033e632378c04f3e771fb3cb32e85`) requires a currency and a provider in production mode, resolves prices server-side, and enforces provider capabilities. The frozen browser-safe inventory has no active-price/provider-capability catalogue. No authoritative published selection has been supplied to this UI. New checkout therefore stays unavailable; do not invent USD/NGN prices, provider readiness, or a capability catalogue. Existing payment intention and billing management remain usable through their separate canonical routes.

Frozen provider returns use `/settings?billing=return|sandbox_success|sandbox_cancel`; portal returns use `/settings`. The first three legacy query destinations redirect locally to `/settings/billing`, which re-reads authoritative state. No return string grants access or implies payment success. `/settings` remains the account hub with a visible billing link. Backend handlers are unchanged.

Specialized intention JSON is proved by `apps/web/lib/billing-intention-handler.ts` blob `bc925b461248424c82d538e123527d53c5cc6a1b`; portal JSON `{portalUrl}` by handler `04ae3a5f36c555f0fca7d5e54950ba2fc097fbfc` and adapter `bc48963add1142e178f56004c29c19fb95631f13`; entitlement/usage/decision display fields by `packages/types/src/entitlements.ts` blob `47f04280cafa972a280037eb5fa5405f149b9bce`. All use the unchanged source pin.

## Account settings bodies and concurrency limitation

The frozen OpenAPI omits bodies for `PATCH /api/account/preferences` and `/api/account/watchlist`. Exact refinements follow `apps/web/lib/server/account/state-contract.ts` blob `05e8f0a7767bc9204a143b3c9c9f372ee7fc24d1` and `services/application-state/src/types.ts` blob `3f186e5f6d383eefb9f37200090dedd41e7018bb`; handlers are `d0783c68f9eb4009abdd8d4db66e8b08290fbc9a` and `2f245dc1684501283c2f931cdfd20c433ed539b5`. The pin remains `771487b46874afc28a21f260a2c12f92bfe8f736`.

The watchlist parser proves at most 50 identifiers, each 1–32 characters. Launch selections come from the pinned event-type constants; existing other identifiers are preserved for review rather than silently dropped. Preferences require motion plus all three channel and six notification-class booleans. A motion save re-reads account state immediately before submission and preserves those booleans exactly; missing fields prevent submission. No version/ETag/conditional-write contract is present, so this reduces stale writes but cannot promise atomic protection from another concurrent save. Do not invent an unsupported precondition header. Both operations retain the declared idempotency key, without claiming replay enforcement absent from their handlers. No automatic retries.

## Journal draft body refinement

Generated OpenAPI declares no body for `POST /api/journal/cases`, while the frozen handler parses `JournalCreateDraftRequest`. The explicit refinement is copied from `packages/types/src/app-api.ts` blob `7b2ac62ef2168d581734e1903cfac7328fc2448e` and validator `packages/schemas/src/app-api.schema.ts` blob `c6d870bfb56eb1f3ddafb8b9012c89e101eb5d33`. Route blob `242bc54f0e253218b847ec9108bd7a46f8f1bfe5` proves the operation and mutation security; timeframe source is `packages/types/src/events.ts` blob `f0fa37320cb8a31eb0adac8390ab105bbc86c159`. All are from `771487b46874afc28a21f260a2c12f92bfe8f736`. Required nonempty asset/title and the five timeframe values are proven; no string length, market enum or numeric outcome constraints are invented. Optional fields remain omitted when blank. The case-list GET retains its inventory-declared idempotency context even though the pinned handler itself is a passive read. No operation policy or generated file changes.

The frozen OpenAPI omits the inbox `limit` query. The pinned route `apps/web/app/api/notifications/inbox/route.ts`, blob `7f7ce9d730421a6af5b4002ceb6420516218fccb` at `771487b46874afc28a21f260a2c12f92bfe8f736`, and mirrored `notifications-ui-contract.md` prove a positive integer limit, default 50 and maximum 200. The separately maintained `EvidencedNotificationQueries` narrows this one operation to a numeric `limit`. UI choices are 50/100/200, not a new backend constraint. No cursor or offset is invented. Negative type tests reject cursor, string limits and expansion of unrelated operations. Generated files, operation policy and backend snapshot remain unchanged.

## Upstream response-size review — 2026-10-01

The general typed transport currently buffers `Response.text()` before parsing. Neither mirrored OpenAPI/route metadata nor the handoff's request-body limits establish a response-byte maximum for every operation. The 13 fixtures range from 532 to 3567 bytes; they prove example shapes, not maximum cardinality or string length. In particular, nested workspace/dashboard/analytics data and list histories cannot safely inherit a tiny limit inferred from those fixtures. No generic response limit is invented. Remaining risk: an unexpectedly large trusted upstream response can consume significant browser/server memory before parsing. Operation-aware ceilings require evidenced maximum response sizes or backend-approved budgets and representative production-sized payloads. Request-size limits must not be mislabeled as response limits. This is resilience debt, not evidence of an observed exploit.

Recovery is a proven narrow exception: pinned `apps/web/lib/auth/reset-request-handler.ts` blob `2a5e53d6169d9169f78eb4110d92d12f34a7c350` returns only `{accepted:true}` (17 UTF-8 bytes); confirm handler blob `7dfcbf0ffa66bea1a3950d295fd226017094d2d4` returns `{reset:true}` (14 bytes) or one of two literal errors (36 bytes each). The relay uses a local 4096-byte streaming resilience ceiling with generous serialization headroom, not a new DTO constraint or global transport limit. It counts actual bytes even if Content-Length is absent/false, cancels oversized bodies, and preserves its existing safe 502 recovery-unavailable outcome without exposing raw upstream content or retrying. Tests cover exact-bound padding, excess bytes, multibyte content, dishonest/oversized headers and cancellation.
