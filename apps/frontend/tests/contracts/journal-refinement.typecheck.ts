
const draft:MutationInput<'POST /api/journal/cases'>={body:{asset:'XAU/USD',timeframe:'H4',title:'Context'},idempotency:{key:'logical-draft'}};
// @ts-expect-error The pinned draft validator requires title.
const missing:MutationInput<'POST /api/journal/cases'>={body:{asset:'XAU/USD',timeframe:'H4'},idempotency:{key:'logical-draft'}};
// @ts-expect-error A required idempotency context cannot be omitted.
const noKey:MutationInput<'POST /api/journal/cases'>={body:{asset:'XAU/USD',timeframe:'H4',title:'Context'}};
// @ts-expect-error No invented timeframe.
const invalidTimeframe:MutationInput<'POST /api/journal/cases'>={body:{asset:'XAU/USD',timeframe:'H2',title:'Context'},idempotency:{key:'logical-draft'}};
void [draft,missing,noKey,invalidTimeframe];

import type {MutationInput} from '../../lib/api/transport';
const executed:MutationInput<'POST /api/journal/cases/{caseId}/execute'>={path:{caseId:'returned-id'},body:{openedAt:'2026-09-30T10:00:00Z'},idempotency:{key:'one-logical-key'}};
void executed;
// @ts-expect-error openedAt is mandatory in the frozen execute validator
const missingTime:MutationInput<'POST /api/journal/cases/{caseId}/execute'>={path:{caseId:'returned-id'},body:{},idempotency:{key:'key'}};
// @ts-expect-error required idempotency cannot be omitted
const missingKey:MutationInput<'POST /api/journal/cases/{caseId}/cancel'>={path:{caseId:'returned-id'},body:{}};
// @ts-expect-error close validator explicitly excludes open outcome
const openClose:MutationInput<'POST /api/journal/cases/{caseId}/close'>={path:{caseId:'returned-id'},body:{closedAt:'2026-09-30T10:00:00Z',outcome:'open'},idempotency:{key:'key'}};
void missingTime;void missingKey;void openClose;
