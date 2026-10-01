// Exact request refinement from frozen packages/types/src/app-api.ts and
// packages/schemas/src/app-api.schema.ts at 771487b46874afc28a21f260a2c12f92bfe8f736.
// Generated OpenAPI omits this body. No generated file is hand-corrected.
export type JournalDraftInput={
 asset:string;timeframe:'M5'|'M15'|'H1'|'H4'|'D1';title:string;
 direction?:'long'|'short';setupType?:string;conviction?:'exploratory'|'standard'|'high_conviction';thesis?:string;
 linkedReasoningRunId?:string|null;linkedSnapshotId?:string|null;linkedDriftId?:string|null;
};
type Quality='disciplined'|'acceptable'|'weak'|'impulsive';
type Outcome='win'|'loss'|'breakeven'|'mixed';
export type JournalPlanInput={title?:string;direction?:'long'|'short';thesis?:string;setupType?:string;conviction?:'exploratory'|'standard'|'high_conviction';entryPricePlanned?:number|null;stopLossPlanned?:number|null;takeProfitPlanned?:number[];riskAmountPlanned?:number|null;riskPercentPlanned?:number|null;invalidationNote?:string|null;executionChecklist?:string[]};
export type JournalExecuteInput={openedAt:string;entryPriceExecuted?:number|null;positionSize?:number|null;notes?:string[];executionQuality?:Quality|null};
export type JournalAdjustInput={entryPriceExecuted?:number|null;positionSize?:number|null;stopLossPlanned?:number|null;takeProfitPlanned?:number[];notes?:string[];executionQuality?:Quality|null;lastAdjustedAt?:string};
export type JournalPartialCloseInput={exitPrice?:number|null;pnlAmount?:number|null;pnlPercent?:number|null;rMultiple?:number|null;closureReason?:string|null;outcome?:Outcome|'open'};
// validateJournalCloseRequest explicitly excludes the open label.
export type JournalCloseInput=Omit<JournalPartialCloseInput,'outcome'>&{closedAt:string;outcome:Outcome};
export type JournalCancelInput={closureReason?:string|null};
export type JournalReviewInput={reviewedAt:string;whatWentWell?:string[];whatWentWrong?:string[];lessons?:string[];behaviorTags?:string[];followUpActions?:string[]};
export type JournalActionBodies={plan:JournalPlanInput;execute:JournalExecuteInput;adjust:JournalAdjustInput;'partial-close':JournalPartialCloseInput;close:JournalCloseInput;cancel:JournalCancelInput;review:JournalReviewInput};
export type EvidencedJournalBodies={'POST /api/journal/cases':JournalDraftInput}&{[K in keyof JournalActionBodies as `POST /api/journal/cases/{caseId}/${K}`]:JournalActionBodies[K]};
