// Source-evidenced supplement, not a parallel API specification. Frozen pin: 771487b46874afc28a21f260a2c12f92bfe8f736.
// Exact packages/types/src/portfolio.ts and app-api.ts types; see M5_PORTFOLIO_SOURCE_EVIDENCE.md.
type CanonicalAssetSymbol=string;
type Timeframe='M5'|'M15'|'H1'|'H4'|'D1';
type TradeDirection='long'|'short';

export type PortfolioRecordStatus = 'active' | 'archived';

export type WatchlistPriority = 'critical' | 'high' | 'medium' | 'low';

export type WatchlistEntryStatus = 'watching' | 'thesis_active' | 'readiness_pending' | 'archived';

export type ThesisHealth = 'strong' | 'stable' | 'weakening' | 'invalidated';

export type PositionStatus = 'proposed' | 'open' | 'reducing' | 'closed' | 'canceled';

export type PortfolioActionKind =
  | 'review_thesis'
  | 'review_risk'
  | 'tighten_execution'
  | 'prepare_entry'
  | 'reduce_exposure'
  | 'close_position'
  | 'review_invalidated_thesis'
  | 'update_journal'
  | 'review_notification_signal';

export type PortfolioActionStatus = 'open' | 'completed' | 'dismissed';

export type PortfolioSubjectKind = 'user' | 'workspace' | 'ops';

export type PortfolioActorKind = 'system' | 'user' | 'workspace' | 'ops';

export type PortfolioEntityKind = 'watchlist_entry' | 'position' | 'action_item';

export type PortfolioRevisionType =
  | 'created'
  | 'updated'
  | 'archived'
  | 'status_changed'
  | 'completed'
  | 'dismissed'
  | 'thesis_health_changed'
  | 'linked'
  | 'closed'
  | 'canceled';

export type WatchlistEntry = {
  entryId: string;
  subjectKind: PortfolioSubjectKind;
  subjectId: string;
  asset: CanonicalAssetSymbol;
  timeframe: Timeframe;
  priority: WatchlistPriority;
  status: WatchlistEntryStatus;
  thesisHealth: ThesisHealth;
  note: string | null;
  linkedReasoningRunId: string | null;
  linkedSnapshotId: string | null;
  linkedDriftId: string | null;
  linkedJournalCaseId: string | null;
  createdAt: string;
  updatedAt: string;
};

export type PositionRecord = {
  positionId: string;
  subjectKind: PortfolioSubjectKind;
  subjectId: string;
  asset: CanonicalAssetSymbol;
  timeframe: Timeframe;
  status: PositionStatus;
  direction: TradeDirection;
  entryPrice: number | null;
  stopLoss: number | null;
  takeProfitLevels: number[];
  size: number | null;
  openedAt: string | null;
  updatedAt: string;
  closedAt: string | null;
  thesisHealth: ThesisHealth;
  linkedJournalCaseId: string | null;
  linkedReasoningRunId: string | null;
  linkedSnapshotId: string | null;
  linkedDriftId: string | null;
  note: string | null;
};

export type PortfolioActionItem = {
  actionId: string;
  subjectKind: PortfolioSubjectKind;
  subjectId: string;
  kind: PortfolioActionKind;
  status: PortfolioActionStatus;
  priority: WatchlistPriority;
  asset: CanonicalAssetSymbol | null;
  timeframe: Timeframe | null;
  headline: string;
  rationale: string;
  linkedEntryId: string | null;
  linkedPositionId: string | null;
  linkedJournalCaseId: string | null;
  linkedReasoningRunId: string | null;
  linkedNotificationDecisionId: string | null;
  createdAt: string;
  updatedAt: string;
  completedAt: string | null;
  dismissedAt: string | null;
};

export type PortfolioRevisionRecord = {
  revisionId: string;
  entityKind: PortfolioEntityKind;
  entityId: string;
  revisionType: PortfolioRevisionType;
  changedAt: string;
  changedByKind: PortfolioActorKind;
  changedById: string;
  summary: string;
  snapshotJson: string;
};

export type CanonicalPortfolioSnapshot = {
  snapshotId: string;
  subjectKind: PortfolioSubjectKind;
  subjectId: string;
  generatedAt: string;
  activeWatchlistCount: number;
  activePositionCount: number;
  weakeningThesisCount: number;
  invalidatedThesisCount: number;
  openActionCount: number;
  criticalActionCount: number;
  watchlistEntries: WatchlistEntry[];
  positions: PositionRecord[];
  actionQueue: PortfolioActionItem[];
  createdAt: string;
};
export type WatchlistCreateRequest = {
  asset: CanonicalAssetSymbol;
  timeframe: Timeframe;
  priority: WatchlistPriority;
  status?: WatchlistEntryStatus;
  thesisHealth?: ThesisHealth;
  note?: string | null;
  linkedReasoningRunId?: string | null;
  linkedSnapshotId?: string | null;
  linkedDriftId?: string | null;
  linkedJournalCaseId?: string | null;
};
export type WatchlistUpdateRequest = { priority?: WatchlistPriority; note?: string | null };
export type WatchlistStatusRequest = { status: WatchlistEntryStatus };
export type WatchlistThesisHealthRequest = { thesisHealth: ThesisHealth };

export type PositionCreateRequest = {
  asset: CanonicalAssetSymbol;
  timeframe: Timeframe;
  direction: TradeDirection;
  entryPrice?: number | null;
  stopLoss?: number | null;
  takeProfitLevels?: number[];
  size?: number | null;
  thesisHealth?: ThesisHealth;
  linkedJournalCaseId?: string | null;
  linkedReasoningRunId?: string | null;
  linkedSnapshotId?: string | null;
  linkedDriftId?: string | null;
  note?: string | null;
};
export type PositionOpenRequest = {
  openedAt: string;
  entryPrice?: number | null;
  stopLoss?: number | null;
  takeProfitLevels?: number[];
  size?: number | null;
  note?: string | null;
};
export type PositionReduceRequest = { size?: number | null; note?: string | null; updatedAt?: string };
export type PositionCloseRequest = { closedAt: string; note?: string | null };
export type PositionCancelRequest = { note?: string | null };
export type PositionUpdateRequest = {
  entryPrice?: number | null;
  stopLoss?: number | null;
  takeProfitLevels?: number[];
  size?: number | null;
  note?: string | null;
};
export type PositionThesisHealthRequest = { thesisHealth: ThesisHealth };

export type ActionCreateRequest = {
  kind: PortfolioActionKind;
  priority: WatchlistPriority;
  asset?: CanonicalAssetSymbol | null;
  timeframe?: Timeframe | null;
  headline: string;
  rationale: string;
  linkedEntryId?: string | null;
  linkedPositionId?: string | null;
  linkedJournalCaseId?: string | null;
  linkedReasoningRunId?: string | null;
  linkedNotificationDecisionId?: string | null;
};
export type ActionUpdateRequest = { priority?: WatchlistPriority; headline?: string; rationale?: string };

export type EvidencedPortfolioBodies={
 'POST /api/portfolio/watchlist':WatchlistCreateRequest;
 'PATCH /api/portfolio/watchlist/{entryId}':WatchlistUpdateRequest;
 'POST /api/portfolio/watchlist/{entryId}/status':WatchlistStatusRequest;
 'POST /api/portfolio/watchlist/{entryId}/thesis-health':WatchlistThesisHealthRequest;
 'POST /api/portfolio/positions':PositionCreateRequest;
 'PATCH /api/portfolio/positions/{positionId}':PositionUpdateRequest;
 'POST /api/portfolio/positions/{positionId}/open':PositionOpenRequest;
 'POST /api/portfolio/positions/{positionId}/reduce':PositionReduceRequest;
 'POST /api/portfolio/positions/{positionId}/close':PositionCloseRequest;
 'POST /api/portfolio/positions/{positionId}/cancel':PositionCancelRequest;
 'POST /api/portfolio/positions/{positionId}/thesis-health':PositionThesisHealthRequest;
 'POST /api/portfolio/actions':ActionCreateRequest;
 'PATCH /api/portfolio/actions/{actionId}':ActionUpdateRequest;
};
