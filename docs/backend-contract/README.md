# ELCEO Frozen Backend Contract Snapshot

This directory is a **read-only frontend-consumption snapshot** of the canonical handoff in `Elceo23x4/Elceo-Mi`.

Canonical source commit: `771487b46874afc28a21f260a2c12f92bfe8f736`.

## Authority

- `Elceo-Mi` remains the canonical backend/source-contract repository.
- Files mirrored here exist so GPT Work, frontend developers, CI, and local tooling can implement against an exact pinned contract without relying on cross-repository context for every operation.
- Do **not** manually edit mirrored contract files in `elceo_land`.
- If the backend contract changes through an approved backend PR, update `SOURCE.json`, regenerate the snapshot with `npm run sync:backend-handoff`, verify it, and review the frontend impact explicitly.

## Mirrored documentation

The sync script mirrors the canonical UI handoff documentation, including:

- `README.md`
- `auth-session-and-authorization.md`
- `billing-payment-state-machine.md`
- `contract-gaps.md`
- `frontend-integration-map.md`
- `notifications-ui-contract.md`
- `state-ownership.md`
- `ui-page-inventory.md`
- `ui-state-matrix.md`
- `validation-and-field-rules.md`
- `api-explorer.html`

## Mirrored machine-readable contract

Stored under `contracts/backend/`:

- `backend-freeze-manifest.json`
- `handoff-summary.json`
- `openapi.json`
- `route-inventory.json`
- `mocks/**`

## Frontend implementation order

When implementing a page/surface:

1. use `ui-page-inventory.md` for page/surface scope;
2. use `frontend-integration-map.md` for backend mapping;
3. use `state-ownership.md` to determine server/client ownership;
4. use auth/billing/notification documents where relevant;
5. use `validation-and-field-rules.md` for proven limits;
6. use `ui-state-matrix.md` for loading/empty/error/degraded/access states;
7. use `openapi.json`, `route-inventory.json`, and mocks for exact API integration;
8. consult `contract-gaps.md` instead of inventing unsupported behavior.

## Known pending frontend-driven backend requirement

Explicit age eligibility attestation is required in the UI, but backend persistence is intentionally pending until the final UI semantics are approved. Work may design the interaction but must not fabricate persistence.

## Cross-repository reading

GPT Work may also read `Elceo-Mi` directly because both repositories are authorized. Use direct backend-repo inspection when a mirrored document is insufficient, but never silently supersede the pinned snapshot with an unreviewed newer backend state.

## Integrity verification

Sync and verification read the exact `SOURCE.json` commit's Git tree. Every manifest source path must exist with the declared Git blob identity; the manifest must cover the complete pinned handoff tree. Source bytes are checked against Git tree byte counts and blob hashes before copying. Verification independently compares local bytes, Git blob identity, source byte count and snapshot SHA-256, and rejects duplicate/unexpected/missing mirror files.

By default the tools fetch that exact commit into a temporary Git repository and remove it afterward. For an existing authorized clone, `BACKEND_HANDOFF_SOURCE_DIR=/absolute/path/to/clone` avoids another fetch; its working tree and current branch are never used. The exact commit and tree are still checked. Network/Git source access is therefore required unless the pinned commit is available locally.

The materialized snapshot contains 28 canonical files (11 documents, four machine artifacts and 13 canonically named mocks), plus `SNAPSHOT.json`. The backend source pin and the underlying functional-freeze provenance are unchanged.
