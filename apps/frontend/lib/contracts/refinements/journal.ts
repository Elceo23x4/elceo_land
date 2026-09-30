// Exact request refinement from frozen packages/types/src/app-api.ts and
// packages/schemas/src/app-api.schema.ts at 771487b46874afc28a21f260a2c12f92bfe8f736.
// Generated OpenAPI omits this body. No generated file is hand-corrected.
export type JournalDraftInput={
 asset:string;timeframe:'M5'|'M15'|'H1'|'H4'|'D1';title:string;
 direction?:'long'|'short';setupType?:string;conviction?:'exploratory'|'standard'|'high_conviction';thesis?:string;
 linkedReasoningRunId?:string|null;linkedSnapshotId?:string|null;linkedDriftId?:string|null;
};
export type EvidencedJournalBodies={'POST /api/journal/cases':JournalDraftInput};
