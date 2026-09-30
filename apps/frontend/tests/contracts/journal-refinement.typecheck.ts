import type {MutationInput} from '../../lib/api/transport';
const draft:MutationInput<'POST /api/journal/cases'>={body:{asset:'XAU/USD',timeframe:'H4',title:'Context'},idempotency:{key:'logical-draft'}};
// @ts-expect-error The pinned draft validator requires title.
const missing:MutationInput<'POST /api/journal/cases'>={body:{asset:'XAU/USD',timeframe:'H4'},idempotency:{key:'logical-draft'}};
// @ts-expect-error A required idempotency context cannot be omitted.
const noKey:MutationInput<'POST /api/journal/cases'>={body:{asset:'XAU/USD',timeframe:'H4',title:'Context'}};
// @ts-expect-error No invented timeframe.
const invalidTimeframe:MutationInput<'POST /api/journal/cases'>={body:{asset:'XAU/USD',timeframe:'H2',title:'Context'},idempotency:{key:'logical-draft'}};
void [draft,missing,noKey,invalidTimeframe];
