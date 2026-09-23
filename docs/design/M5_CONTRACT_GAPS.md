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
