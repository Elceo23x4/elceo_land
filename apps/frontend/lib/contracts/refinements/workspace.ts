/** Frozen evidence: Elceo-Mi@771487b46874afc28a21f260a2c12f92bfe8f736
 * packages/types/src/app-api.ts:WorkspaceRefreshRequest
 * packages/types/src/refresh-runtime.ts:SNAPSHOT_REFRESH_TRIGGER_KINDS
 * packages/schemas/src/app-api.schema.ts:validateWorkspaceRefreshRequest
 * OpenAPI omits requestBody for this operation. Generated files stay untouched.
 */
export type WorkspaceRefreshBody = Readonly<{triggerKind:
  'manual' | 'scheduled' | 'journal_case_changed' | 'journal_case_reviewed'
  | 'portfolio_changed' | 'reasoning_completed' | 'notification_feedback'
}>;
export type EvidencedRequestBodies = {
  'POST /api/workspace/refresh': WorkspaceRefreshBody;
  'POST /api/refresh/run': WorkspaceRefreshBody;
};
