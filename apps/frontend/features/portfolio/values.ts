// Frozen packages/schemas/src/portfolio.schema.ts and portfolio/lifecycle.ts.
export const priorities=['critical','high','medium','low'] as const;
export const healthValues=['strong','stable','weakening','invalidated'] as const;
export const timeframes=['M5','M15','H1','H4','D1'] as const;
export const actionKinds=['review_thesis','review_risk','tighten_execution','prepare_entry','reduce_exposure','close_position','review_invalidated_thesis','update_journal','review_notification_signal'] as const;
export const watchTransitions:Readonly<Record<string,readonly string[]>>={watching:['thesis_active','readiness_pending','archived'],readiness_pending:['thesis_active','archived'],thesis_active:['archived','readiness_pending'],archived:[]};
export const healthTransitions:Readonly<Record<string,readonly string[]>>={strong:['stable','weakening','invalidated'],stable:['strong','weakening','invalidated'],weakening:['stable','invalidated'],invalidated:[]};
export const positionTransitions:Readonly<Record<string,readonly string[]>>={proposed:['open','canceled'],open:['reducing','closed'],reducing:['closed'],closed:[],canceled:[]};
