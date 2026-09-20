# ELCEO Legal / Trust UX Matrix

This is a UI design/implementation matrix, not legal advice. Final production wording should be reviewed against applicable legal requirements.

| Surface | Required UX | Backend status | UI rule |
|---|---|---|---|
| Signup / account creation | Google account creation only for v1 | Supported through frozen auth flow | Do not expose email/password self-registration controls. |
| Terms acceptance | Explicit acknowledgement before onboarding completion | Persisted by backend | Link to readable Terms; do not hide acceptance in dense fine print. |
| Risk/disclaimer acceptance | Explicit acknowledgement before onboarding completion | Persisted by backend | Link to readable Risk Disclosure; clearly frame ELCEO as decision support. |
| Age eligibility | Explicit 18+ attestation | **UI-required / backend-contract pending** | Design the control and wording, but do not fake persistence or claim it is recorded until backend support is added. |
| Privacy | Readable Privacy Policy + contextual explanation near account creation/data controls | Static/legal + backend data behavior | Avoid dark patterns; explain material data use concisely. |
| Cookies | Consent/preferences surface appropriate to actual cookies/technologies used | Frontend implementation required | Necessary/optional categories must reflect actual implementation; no fictitious categories. |
| Billing | Canonical plan/subscription/payment state | Backend authoritative | Browser redirect/success screen cannot independently unlock entitlements. Re-read server state. |
| Market intelligence disclaimer | Clear decision-support / no-broker / no-custody / no-financial-advice framing | Product/editorial requirement | Present at relevant public/footer/signup/billing contexts without overwhelming every screen. |
| Notifications | Permission/delivery/verification distinctions | Backend contract exists | Do not imply channel verification or delivery success when backend state says otherwise. |
| Admin | Internal security boundaries | Backend authoritative | Internal tokens stay server-side/BFF only. |

## Signup UX

V1 signup should use Google account creation only. The screen should communicate:

- user is entering a market-intelligence/decision-support product;
- ELCEO does not execute trades or hold customer funds;
- Terms and Privacy are accessible before account creation;
- risk/disclaimer acknowledgement occurs in the canonical onboarding/compliance flow according to backend contract;
- 18+ eligibility must be visibly attested where the final flow places it, but persistence remains pending backend work.

Do not add disabled email/password fields that imply the feature is coming unless product explicitly requests that messaging.

## Consent design principles

- No pre-checked optional consent.
- No materially unequal visual treatment that coerces optional consent.
- Make policy links readable and keyboard accessible.
- Preserve a recordable semantic distinction between Terms, risk/disclaimer, age attestation, and cookie preferences; do not collapse them into one ambiguous checkbox merely for visual simplicity.

## Pending age-attestation contract

Before backend implementation, finalize:

- exact statement shown to user;
- whether the attestation is `18+` or jurisdiction-specific minimum-age wording;
- timestamp requirements;
- policy/version identifier requirements;
- whether re-attestation is required after material policy changes;
- audit/provenance requirements;
- admin/support visibility requirements, if any.

Only after those decisions should `Elceo-Mi` receive a narrowly scoped backend contract change.
