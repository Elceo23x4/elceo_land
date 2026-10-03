// Exact consumed request fields from pinned packages/types/src/app-api.ts and handlers.
// 771487b46874afc28a21f260a2c12f92bfe8f736; see M5_ADMIN_SOURCE_EVIDENCE.md.
export const evidenceAssets=['xau_usd','eur_usd','gbp_usd','usd_jpy','usd_chf','aud_usd','nzd_usd','usd_cad','btc_usd','nasdaq_100','sp500','de30','dxy','vix'] as const;
export type EvidenceAsset=typeof evidenceAssets[number];
export const evidenceHorizons=['intraday','short_term','swing','medium_term'] as const;
export type EvidenceHorizon=typeof evidenceHorizons[number];
type Subject={subjectId:string};
type Market={asset:EvidenceAsset;horizon:EvidenceHorizon};
/** Consumed query subset only. No unsupported query or filter is exposed. */
export type EvidencedAdminQueries={
 'GET /api/admin/billing/operations/subject':Subject;
 'GET /api/admin/billing/orchestration/latest':Subject;
 'GET /api/admin/billing/orchestration/runs':Subject&{limit?:number};
 'GET /api/admin/billing/orchestration/subject':Subject;
 'GET /api/admin/billing/policy':Subject;
 'GET /api/admin/billing/policy/transitions':Subject&{limit?:number};
 'GET /api/admin/billing/provider-events':{subjectId?:string;limit?:number};
 'GET /api/admin/market-evidence/payloads':{asset:EvidenceAsset};
 'GET /api/admin/market-evidence/provider-request':{requestId:string};
 'GET /api/admin/market-evidence/provider-response':{requestId:string};
 'GET /api/admin/market-evidence/quality':{asset:EvidenceAsset};
 'GET /api/admin/market-evidence/weighted':Market;
 'GET /api/admin/market-evidence/cognition':Market;
 'GET /api/admin/market-evidence/reasoning-input':{asset:EvidenceAsset};
 'GET /api/admin/market-evidence/scheduled-ingestion/runs':{runId:string}|{status:'pending'|'running'|'succeeded'|'failed'|'skipped'|'blocked'};
};
// Browser-safe UI DTO types are mechanically field-validated before server dispatch.
import type {CommandBody} from '../../../features/admin/commands';
export type EvidencedAdminBodies={
 'POST /api/admin/billing/trial':CommandBody<'trial'>;
 'POST /api/admin/billing/activate':CommandBody<'activate'>;
 'POST /api/admin/billing/renew':CommandBody<'renew'>;
 'POST /api/admin/billing/change-plan':CommandBody<'changePlan'>;
 'POST /api/admin/billing/past-due':CommandBody<'pastDue'>;
 'POST /api/admin/billing/cancel-at-period-end':CommandBody<'cancelPeriod'>;
 'POST /api/admin/billing/expire':CommandBody<'expire'>;
 'POST /api/admin/billing/pause':CommandBody<'pause'>;
 'POST /api/admin/billing/resume':CommandBody<'resume'>;
 'POST /api/admin/entitlements/plan':CommandBody<'entitlementPlan'>;
 'POST /api/admin/entitlements/state':CommandBody<'entitlementState'>;
 'POST /api/admin/entitlements/override':CommandBody<'entitlementOverride'>;
 'POST /api/admin/billing/provider-plan-mapping':CommandBody<'mapping'>;
 'POST /api/admin/market-evidence/scheduled-ingestion/dry-run':CommandBody<'dryRun'>;
 'POST /api/admin/market-evidence/scheduled-ingestion/replay':CommandBody<'replay'>&{replayMode:'dry_run_fixture'};
 'POST /api/admin/commercial/users/{userId}/gift-focus-plan':Omit<CommandBody<'gift'>,'userId'>;
 'POST /api/admin/commercial/users/{userId}/retract-focus-gift':Omit<CommandBody<'retract'>,'userId'>;
 'POST /api/admin/commercial/users/{userId}/restrict':Omit<CommandBody<'restrict'>,'userId'>;
 'POST /api/admin/security/step-up/challenge':CommandBody<'challenge'>;
 'POST /api/admin/security/step-up/verify':CommandBody<'verify'>;
};
