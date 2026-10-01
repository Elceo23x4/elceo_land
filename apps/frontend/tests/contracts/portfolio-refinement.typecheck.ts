import type {MutationInput} from '../../lib/api/transport';
const valid:MutationInput<'POST /api/portfolio/positions'>={body:{asset:'XAU/USD',timeframe:'H4',direction:'long'},idempotency:{key:'logical'}};void valid;
// @ts-expect-error key is required for portfolio mutations
const noKey:MutationInput<'POST /api/portfolio/watchlist'>={body:{asset:'EUR/USD',timeframe:'H4',priority:'high'}};
// @ts-expect-error explicit close timestamp is mandatory
const noTime:MutationInput<'POST /api/portfolio/positions/{positionId}/close'>={path:{positionId:'returned'},body:{},idempotency:{key:'logical'}};
// @ts-expect-error caller cannot supply an owner identity
const injected:MutationInput<'POST /api/portfolio/positions'>={body:{asset:'XAU/USD',timeframe:'H4',direction:'long',subjectId:'attacker'},idempotency:{key:'logical'}};
void noKey;void noTime;void injected;
