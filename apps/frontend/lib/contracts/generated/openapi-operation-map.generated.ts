/**
 * AUTO-GENERATED. DO NOT EDIT.
 * Source: Elceo23x4/Elceo-Mi@771487b46874afc28a21f260a2c12f92bfe8f736
 * Frozen functional tree: 6f81f55269031e0ec6467cd60283593dd5b7c2d3
 * Input: contracts/backend/openapi.json (sha256:c6d2fdedbf0535258f695ed19e6e2028c38b39eae4fe14c513d8273fccfa24ae)
 * Generator: @hey-api/openapi-ts@0.99.0 (type-only output)
 * Regenerate: npm run generate:m2-contracts
 */
import type {
  DeleteApiNotificationsPushSubscriptionData,
  DeleteApiNotificationsPushSubscriptionError,
  DeleteApiNotificationsPushSubscriptionResponse,
  GetApiAccountAccessDecisionsData,
  GetApiAccountAccessDecisionsError,
  GetApiAccountAccessDecisionsResponse,
  GetApiAccountBillingData,
  GetApiAccountBillingError,
  GetApiAccountBillingEventsData,
  GetApiAccountBillingEventsError,
  GetApiAccountBillingEventsResponse,
  GetApiAccountBillingPolicyData,
  GetApiAccountBillingPolicyError,
  GetApiAccountBillingPolicyResponse,
  GetApiAccountBillingPolicyTransitionsData,
  GetApiAccountBillingPolicyTransitionsError,
  GetApiAccountBillingPolicyTransitionsResponse,
  GetApiAccountBillingReconciliationRunsData,
  GetApiAccountBillingReconciliationRunsError,
  GetApiAccountBillingReconciliationRunsResponse,
  GetApiAccountBillingResponse,
  GetApiAccountEntitlementsData,
  GetApiAccountEntitlementsError,
  GetApiAccountEntitlementsResponse,
  GetApiAccountProfileSocialIdentifiersData,
  GetApiAccountProfileSocialIdentifiersError,
  GetApiAccountProfileSocialIdentifiersResponse,
  GetApiAccountStateData,
  GetApiAccountStateError,
  GetApiAccountStateResponse,
  GetApiAccountUsageData,
  GetApiAccountUsageError,
  GetApiAccountUsageResponse,
  GetApiAdminAuditData,
  GetApiAdminAuditError,
  GetApiAdminAuditResponse,
  GetApiAdminBillingOperationsFailuresData,
  GetApiAdminBillingOperationsFailuresError,
  GetApiAdminBillingOperationsFailuresResponse,
  GetApiAdminBillingOperationsRetryCandidatesData,
  GetApiAdminBillingOperationsRetryCandidatesError,
  GetApiAdminBillingOperationsRetryCandidatesResponse,
  GetApiAdminBillingOperationsSubjectData,
  GetApiAdminBillingOperationsSubjectError,
  GetApiAdminBillingOperationsSubjectResponse,
  GetApiAdminBillingOperationsSummaryData,
  GetApiAdminBillingOperationsSummaryError,
  GetApiAdminBillingOperationsSummaryResponse,
  GetApiAdminBillingOrchestrationLatestData,
  GetApiAdminBillingOrchestrationLatestError,
  GetApiAdminBillingOrchestrationLatestResponse,
  GetApiAdminBillingOrchestrationRunsData,
  GetApiAdminBillingOrchestrationRunsError,
  GetApiAdminBillingOrchestrationRunsResponse,
  GetApiAdminBillingOrchestrationSubjectData,
  GetApiAdminBillingOrchestrationSubjectError,
  GetApiAdminBillingOrchestrationSubjectResponse,
  GetApiAdminBillingPolicyData,
  GetApiAdminBillingPolicyError,
  GetApiAdminBillingPolicyResponse,
  GetApiAdminBillingPolicyTransitionsData,
  GetApiAdminBillingPolicyTransitionsError,
  GetApiAdminBillingPolicyTransitionsResponse,
  GetApiAdminBillingProviderEventsData,
  GetApiAdminBillingProviderEventsError,
  GetApiAdminBillingProviderEventsResponse,
  GetApiAdminBillingProviderPlanMappingsData,
  GetApiAdminBillingProviderPlanMappingsError,
  GetApiAdminBillingProviderPlanMappingsResponse,
  GetApiAdminCommercialMetricsData,
  GetApiAdminCommercialMetricsError,
  GetApiAdminCommercialMetricsResponse,
  GetApiAdminCommercialUsersUserIdControlSnapshotData,
  GetApiAdminCommercialUsersUserIdControlSnapshotError,
  GetApiAdminCommercialUsersUserIdControlSnapshotResponse,
  GetApiAdminFreshnessData,
  GetApiAdminFreshnessError,
  GetApiAdminFreshnessResponse,
  GetApiAdminMarketEvidenceCognitionData,
  GetApiAdminMarketEvidenceCognitionError,
  GetApiAdminMarketEvidenceCognitionResponse,
  GetApiAdminMarketEvidenceInspectionData,
  GetApiAdminMarketEvidenceInspectionError,
  GetApiAdminMarketEvidenceInspectionResponse,
  GetApiAdminMarketEvidencePayloadReplayData,
  GetApiAdminMarketEvidencePayloadReplayError,
  GetApiAdminMarketEvidencePayloadReplayResponse,
  GetApiAdminMarketEvidencePayloadsData,
  GetApiAdminMarketEvidencePayloadsError,
  GetApiAdminMarketEvidencePayloadsResponse,
  GetApiAdminMarketEvidenceProviderRequestData,
  GetApiAdminMarketEvidenceProviderRequestError,
  GetApiAdminMarketEvidenceProviderRequestResponse,
  GetApiAdminMarketEvidenceProviderResponseData,
  GetApiAdminMarketEvidenceProviderResponseError,
  GetApiAdminMarketEvidenceProviderResponseResponse,
  GetApiAdminMarketEvidenceQualityData,
  GetApiAdminMarketEvidenceQualityError,
  GetApiAdminMarketEvidenceQualityResponse,
  GetApiAdminMarketEvidenceReasoningInputData,
  GetApiAdminMarketEvidenceReasoningInputError,
  GetApiAdminMarketEvidenceReasoningInputResponse,
  GetApiAdminMarketEvidenceScheduledIngestionInspectionData,
  GetApiAdminMarketEvidenceScheduledIngestionInspectionError,
  GetApiAdminMarketEvidenceScheduledIngestionInspectionResponse,
  GetApiAdminMarketEvidenceScheduledIngestionPoliciesData,
  GetApiAdminMarketEvidenceScheduledIngestionPoliciesError,
  GetApiAdminMarketEvidenceScheduledIngestionPoliciesResponse,
  GetApiAdminMarketEvidenceScheduledIngestionReplayData,
  GetApiAdminMarketEvidenceScheduledIngestionReplayError,
  GetApiAdminMarketEvidenceScheduledIngestionReplayResponse,
  GetApiAdminMarketEvidenceScheduledIngestionRunsData,
  GetApiAdminMarketEvidenceScheduledIngestionRunsError,
  GetApiAdminMarketEvidenceScheduledIngestionRunsResponse,
  GetApiAdminMarketEvidenceWeightedData,
  GetApiAdminMarketEvidenceWeightedError,
  GetApiAdminMarketEvidenceWeightedResponse,
  GetApiAdminOpsData,
  GetApiAdminOpsError,
  GetApiAdminOpsResponse,
  GetApiAdminProvidersData,
  GetApiAdminProvidersError,
  GetApiAdminProvidersResponse,
  GetApiAdminSecurityStepUpReadinessData,
  GetApiAdminSecurityStepUpReadinessError,
  GetApiAdminSecurityStepUpReadinessResponse,
  GetApiAdminSeoFeedData,
  GetApiAdminSeoFeedError,
  GetApiAdminSeoFeedResponse,
  GetApiAdminSeoSitemapData,
  GetApiAdminSeoSitemapError,
  GetApiAdminSeoSitemapResponse,
  GetApiAdminSystemSummaryData,
  GetApiAdminSystemSummaryError,
  GetApiAdminSystemSummaryResponse,
  GetApiAnalyticsLatestData,
  GetApiAnalyticsLatestError,
  GetApiAnalyticsLatestResponse,
  GetApiAnalyticsTopBehaviorsData,
  GetApiAnalyticsTopBehaviorsError,
  GetApiAnalyticsTopBehaviorsResponse,
  GetApiAnalyticsTopSetupsData,
  GetApiAnalyticsTopSetupsError,
  GetApiAnalyticsTopSetupsResponse,
  GetApiAuthNextauthData,
  GetApiAuthNextauthError,
  GetApiAuthNextauthResponse,
  GetApiBillingIntentionData,
  GetApiBillingIntentionError,
  GetApiBillingIntentionResponse,
  GetApiBillingSubscriptionData,
  GetApiBillingSubscriptionError,
  GetApiBillingSubscriptionResponse,
  GetApiCoachingActionPlanData,
  GetApiCoachingActionPlanError,
  GetApiCoachingActionPlanResponse,
  GetApiCoachingFocusData,
  GetApiCoachingFocusError,
  GetApiCoachingFocusResponse,
  GetApiCoachingLatestData,
  GetApiCoachingLatestError,
  GetApiCoachingLatestResponse,
  GetApiDashboardAssetData,
  GetApiDashboardAssetError,
  GetApiDashboardAssetResponse,
  GetApiJournalAnalyticsData,
  GetApiJournalAnalyticsError,
  GetApiJournalAnalyticsResponse,
  GetApiJournalCasesCaseIdData,
  GetApiJournalCasesCaseIdError,
  GetApiJournalCasesCaseIdReplayData,
  GetApiJournalCasesCaseIdReplayError,
  GetApiJournalCasesCaseIdReplayResponse,
  GetApiJournalCasesCaseIdResponse,
  GetApiJournalCasesData,
  GetApiJournalCasesError,
  GetApiJournalCasesResponse,
  GetApiJournalEntriesData,
  GetApiJournalEntriesError,
  GetApiJournalEntriesResponse,
  GetApiJournalInfluenceLatestData,
  GetApiJournalInfluenceLatestError,
  GetApiJournalInfluenceLatestResponse,
  GetApiNotificationsAlertsData,
  GetApiNotificationsAlertsError,
  GetApiNotificationsAlertsResponse,
  GetApiNotificationsHealthData,
  GetApiNotificationsHealthError,
  GetApiNotificationsHealthResponse,
  GetApiNotificationsInboxData,
  GetApiNotificationsInboxError,
  GetApiNotificationsInboxResponse,
  GetApiNotificationsSubscriptionsData,
  GetApiNotificationsSubscriptionsError,
  GetApiNotificationsSubscriptionsResponse,
  GetApiNotificationsSummaryData,
  GetApiNotificationsSummaryError,
  GetApiNotificationsSummaryResponse,
  GetApiNotificationsTargetsData,
  GetApiNotificationsTargetsError,
  GetApiNotificationsTargetsResponse,
  GetApiPortfolioActionsActionIdData,
  GetApiPortfolioActionsActionIdError,
  GetApiPortfolioActionsActionIdResponse,
  GetApiPortfolioActionsData,
  GetApiPortfolioActionsError,
  GetApiPortfolioActionsResponse,
  GetApiPortfolioAttentionData,
  GetApiPortfolioAttentionError,
  GetApiPortfolioAttentionResponse,
  GetApiPortfolioPositionsData,
  GetApiPortfolioPositionsError,
  GetApiPortfolioPositionsPositionIdData,
  GetApiPortfolioPositionsPositionIdError,
  GetApiPortfolioPositionsPositionIdResponse,
  GetApiPortfolioPositionsResponse,
  GetApiPortfolioReplayData,
  GetApiPortfolioReplayError,
  GetApiPortfolioReplayResponse,
  GetApiPortfolioSnapshotCurrentData,
  GetApiPortfolioSnapshotCurrentError,
  GetApiPortfolioSnapshotCurrentResponse,
  GetApiPortfolioWatchlistData,
  GetApiPortfolioWatchlistEntryIdData,
  GetApiPortfolioWatchlistEntryIdError,
  GetApiPortfolioWatchlistEntryIdResponse,
  GetApiPortfolioWatchlistError,
  GetApiPortfolioWatchlistResponse,
  GetApiRefreshFreshnessData,
  GetApiRefreshFreshnessError,
  GetApiRefreshFreshnessResponse,
  GetApiRefreshHistoryData,
  GetApiRefreshHistoryError,
  GetApiRefreshHistoryResponse,
  GetApiRefreshLatestData,
  GetApiRefreshLatestError,
  GetApiRefreshLatestResponse,
  GetApiWorkspaceAgendaData,
  GetApiWorkspaceAgendaError,
  GetApiWorkspaceAgendaResponse,
  GetApiWorkspaceCurrentData,
  GetApiWorkspaceCurrentError,
  GetApiWorkspaceCurrentResponse,
  GetApiWorkspaceFreshnessData,
  GetApiWorkspaceFreshnessError,
  GetApiWorkspaceFreshnessResponse,
  GetApiWorkspaceHistoryData,
  GetApiWorkspaceHistoryError,
  GetApiWorkspaceHistoryResponse,
  PatchApiAccountPreferencesData,
  PatchApiAccountPreferencesError,
  PatchApiAccountPreferencesResponse,
  PatchApiAccountProfileSocialIdentifiersData,
  PatchApiAccountProfileSocialIdentifiersError,
  PatchApiAccountProfileSocialIdentifiersResponse,
  PatchApiAccountWatchlistData,
  PatchApiAccountWatchlistError,
  PatchApiAccountWatchlistResponse,
  PatchApiNotificationsAlertsData,
  PatchApiNotificationsAlertsError,
  PatchApiNotificationsAlertsResponse,
  PatchApiNotificationsSubscriptionsSubscriptionIdData,
  PatchApiNotificationsSubscriptionsSubscriptionIdError,
  PatchApiNotificationsSubscriptionsSubscriptionIdResponse,
  PatchApiPortfolioActionsActionIdData,
  PatchApiPortfolioActionsActionIdError,
  PatchApiPortfolioActionsActionIdResponse,
  PatchApiPortfolioPositionsPositionIdData,
  PatchApiPortfolioPositionsPositionIdError,
  PatchApiPortfolioPositionsPositionIdResponse,
  PatchApiPortfolioWatchlistEntryIdData,
  PatchApiPortfolioWatchlistEntryIdError,
  PatchApiPortfolioWatchlistEntryIdResponse,
  PostApiAccountAccessCheckData,
  PostApiAccountAccessCheckError,
  PostApiAccountAccessCheckResponse,
  PostApiAccountOnboardingData,
  PostApiAccountOnboardingError,
  PostApiAccountOnboardingResponse,
  PostApiAdminBillingActivateData,
  PostApiAdminBillingActivateError,
  PostApiAdminBillingActivateResponse,
  PostApiAdminBillingCancelAtPeriodEndData,
  PostApiAdminBillingCancelAtPeriodEndError,
  PostApiAdminBillingCancelAtPeriodEndResponse,
  PostApiAdminBillingChangePlanData,
  PostApiAdminBillingChangePlanError,
  PostApiAdminBillingChangePlanResponse,
  PostApiAdminBillingExpireData,
  PostApiAdminBillingExpireError,
  PostApiAdminBillingExpireResponse,
  PostApiAdminBillingPastDueData,
  PostApiAdminBillingPastDueError,
  PostApiAdminBillingPastDueResponse,
  PostApiAdminBillingPauseData,
  PostApiAdminBillingPauseError,
  PostApiAdminBillingPauseResponse,
  PostApiAdminBillingProviderPlanMappingData,
  PostApiAdminBillingProviderPlanMappingError,
  PostApiAdminBillingProviderPlanMappingResponse,
  PostApiAdminBillingRenewData,
  PostApiAdminBillingRenewError,
  PostApiAdminBillingRenewResponse,
  PostApiAdminBillingResumeData,
  PostApiAdminBillingResumeError,
  PostApiAdminBillingResumeResponse,
  PostApiAdminBillingTrialData,
  PostApiAdminBillingTrialError,
  PostApiAdminBillingTrialResponse,
  PostApiAdminCommercialPricesData,
  PostApiAdminCommercialPricesError,
  PostApiAdminCommercialPricesResponse,
  PostApiAdminCommercialUsersUserIdGiftFocusPlanData,
  PostApiAdminCommercialUsersUserIdGiftFocusPlanError,
  PostApiAdminCommercialUsersUserIdGiftFocusPlanResponse,
  PostApiAdminCommercialUsersUserIdRestrictData,
  PostApiAdminCommercialUsersUserIdRestrictError,
  PostApiAdminCommercialUsersUserIdRestrictResponse,
  PostApiAdminCommercialUsersUserIdRetractFocusGiftData,
  PostApiAdminCommercialUsersUserIdRetractFocusGiftError,
  PostApiAdminCommercialUsersUserIdRetractFocusGiftResponse,
  PostApiAdminEntitlementsOverrideData,
  PostApiAdminEntitlementsOverrideError,
  PostApiAdminEntitlementsOverrideResponse,
  PostApiAdminEntitlementsPlanData,
  PostApiAdminEntitlementsPlanError,
  PostApiAdminEntitlementsPlanResponse,
  PostApiAdminEntitlementsStateData,
  PostApiAdminEntitlementsStateError,
  PostApiAdminEntitlementsStateResponse,
  PostApiAdminMarketEvidenceScheduledIngestionDryRunData,
  PostApiAdminMarketEvidenceScheduledIngestionDryRunError,
  PostApiAdminMarketEvidenceScheduledIngestionDryRunResponse,
  PostApiAdminMarketEvidenceScheduledIngestionReplayData,
  PostApiAdminMarketEvidenceScheduledIngestionReplayError,
  PostApiAdminMarketEvidenceScheduledIngestionReplayResponse,
  PostApiAdminSecurityStepUpChallengeData,
  PostApiAdminSecurityStepUpChallengeError,
  PostApiAdminSecurityStepUpChallengeResponse,
  PostApiAdminSecurityStepUpVerifyData,
  PostApiAdminSecurityStepUpVerifyError,
  PostApiAdminSecurityStepUpVerifyResponse,
  PostApiAnalyticsGenerateData,
  PostApiAnalyticsGenerateError,
  PostApiAnalyticsGenerateResponse,
  PostApiAuthNextauthData,
  PostApiAuthNextauthError,
  PostApiAuthNextauthResponse,
  PostApiAuthPasswordResetConfirmData,
  PostApiAuthPasswordResetConfirmError,
  PostApiAuthPasswordResetConfirmResponse,
  PostApiAuthPasswordResetRequestData,
  PostApiAuthPasswordResetRequestError,
  PostApiAuthPasswordResetRequestResponse,
  PostApiBillingCheckoutData,
  PostApiBillingCheckoutError,
  PostApiBillingCheckoutResponse,
  PostApiBillingPortalData,
  PostApiBillingPortalError,
  PostApiBillingPortalResponse,
  PostApiBillingWebhookData,
  PostApiBillingWebhookError,
  PostApiBillingWebhookKorapayData,
  PostApiBillingWebhookKorapayError,
  PostApiBillingWebhookKorapayResponse,
  PostApiBillingWebhookResponse,
  PostApiCoachingGenerateData,
  PostApiCoachingGenerateError,
  PostApiCoachingGenerateResponse,
  PostApiInternalBillingOrchestrationRetryData,
  PostApiInternalBillingOrchestrationRetryError,
  PostApiInternalBillingOrchestrationRetryResponse,
  PostApiInternalBillingPolicyEvaluateData,
  PostApiInternalBillingPolicyEvaluateError,
  PostApiInternalBillingPolicyEvaluateResponse,
  PostApiInternalBillingProviderEventsData,
  PostApiInternalBillingProviderEventsError,
  PostApiInternalBillingProviderEventsReplayData,
  PostApiInternalBillingProviderEventsReplayError,
  PostApiInternalBillingProviderEventsReplayResponse,
  PostApiInternalBillingProviderEventsResponse,
  PostApiInternalBillingReconcileData,
  PostApiInternalBillingReconcileError,
  PostApiInternalBillingReconcileResponse,
  PostApiInternalBillingReconcileRetryData,
  PostApiInternalBillingReconcileRetryError,
  PostApiInternalBillingReconcileRetryResponse,
  PostApiInternalMarketEvidenceTiingoFixtureIngestData,
  PostApiInternalMarketEvidenceTiingoFixtureIngestError,
  PostApiInternalMarketEvidenceTiingoFixtureIngestResponse,
  PostApiJournalCasesCaseIdAdjustData,
  PostApiJournalCasesCaseIdAdjustError,
  PostApiJournalCasesCaseIdAdjustResponse,
  PostApiJournalCasesCaseIdCancelData,
  PostApiJournalCasesCaseIdCancelError,
  PostApiJournalCasesCaseIdCancelResponse,
  PostApiJournalCasesCaseIdCloseData,
  PostApiJournalCasesCaseIdCloseError,
  PostApiJournalCasesCaseIdCloseResponse,
  PostApiJournalCasesCaseIdExecuteData,
  PostApiJournalCasesCaseIdExecuteError,
  PostApiJournalCasesCaseIdExecuteResponse,
  PostApiJournalCasesCaseIdPartialCloseData,
  PostApiJournalCasesCaseIdPartialCloseError,
  PostApiJournalCasesCaseIdPartialCloseResponse,
  PostApiJournalCasesCaseIdPlanData,
  PostApiJournalCasesCaseIdPlanError,
  PostApiJournalCasesCaseIdPlanResponse,
  PostApiJournalCasesCaseIdReviewData,
  PostApiJournalCasesCaseIdReviewError,
  PostApiJournalCasesCaseIdReviewResponse,
  PostApiJournalCasesData,
  PostApiJournalCasesError,
  PostApiJournalCasesResponse,
  PostApiJournalEntriesData,
  PostApiJournalEntriesError,
  PostApiJournalEntriesResponse,
  PostApiJournalInfluenceGenerateData,
  PostApiJournalInfluenceGenerateError,
  PostApiJournalInfluenceGenerateResponse,
  PostApiNotificationsDeliveryDispatchData,
  PostApiNotificationsDeliveryDispatchError,
  PostApiNotificationsDeliveryDispatchResponse,
  PostApiNotificationsProvidersPostmarkWebhookData,
  PostApiNotificationsProvidersPostmarkWebhookError,
  PostApiNotificationsProvidersPostmarkWebhookResponse,
  PostApiNotificationsProvidersResendWebhookData,
  PostApiNotificationsProvidersResendWebhookError,
  PostApiNotificationsProvidersResendWebhookResponse,
  PostApiNotificationsSubscriptionsData,
  PostApiNotificationsSubscriptionsError,
  PostApiNotificationsSubscriptionsResponse,
  PostApiNotificationsTargetsData,
  PostApiNotificationsTargetsError,
  PostApiNotificationsTargetsResponse,
  PostApiNotificationsTargetsTargetIdDisableData,
  PostApiNotificationsTargetsTargetIdDisableError,
  PostApiNotificationsTargetsTargetIdDisableResponse,
  PostApiNotificationsTargetsTargetIdEnableData,
  PostApiNotificationsTargetsTargetIdEnableError,
  PostApiNotificationsTargetsTargetIdEnableResponse,
  PostApiNotificationsVerificationConsumeData,
  PostApiNotificationsVerificationConsumeError,
  PostApiNotificationsVerificationConsumeResponse,
  PostApiNotificationsVerificationIssueData,
  PostApiNotificationsVerificationIssueError,
  PostApiNotificationsVerificationIssueResponse,
  PostApiOpsNotificationsExpireVerificationsData,
  PostApiOpsNotificationsExpireVerificationsError,
  PostApiOpsNotificationsExpireVerificationsResponse,
  PostApiOpsNotificationsProcessFeedbackData,
  PostApiOpsNotificationsProcessFeedbackError,
  PostApiOpsNotificationsProcessFeedbackResponse,
  PostApiPortfolioActionsActionIdCompleteData,
  PostApiPortfolioActionsActionIdCompleteError,
  PostApiPortfolioActionsActionIdCompleteResponse,
  PostApiPortfolioActionsActionIdDismissData,
  PostApiPortfolioActionsActionIdDismissError,
  PostApiPortfolioActionsActionIdDismissResponse,
  PostApiPortfolioActionsData,
  PostApiPortfolioActionsError,
  PostApiPortfolioActionsResponse,
  PostApiPortfolioPositionsData,
  PostApiPortfolioPositionsError,
  PostApiPortfolioPositionsPositionIdCancelData,
  PostApiPortfolioPositionsPositionIdCancelError,
  PostApiPortfolioPositionsPositionIdCancelResponse,
  PostApiPortfolioPositionsPositionIdCloseData,
  PostApiPortfolioPositionsPositionIdCloseError,
  PostApiPortfolioPositionsPositionIdCloseResponse,
  PostApiPortfolioPositionsPositionIdOpenData,
  PostApiPortfolioPositionsPositionIdOpenError,
  PostApiPortfolioPositionsPositionIdOpenResponse,
  PostApiPortfolioPositionsPositionIdReduceData,
  PostApiPortfolioPositionsPositionIdReduceError,
  PostApiPortfolioPositionsPositionIdReduceResponse,
  PostApiPortfolioPositionsPositionIdThesisHealthData,
  PostApiPortfolioPositionsPositionIdThesisHealthError,
  PostApiPortfolioPositionsPositionIdThesisHealthResponse,
  PostApiPortfolioPositionsResponse,
  PostApiPortfolioSnapshotGenerateData,
  PostApiPortfolioSnapshotGenerateError,
  PostApiPortfolioSnapshotGenerateResponse,
  PostApiPortfolioWatchlistData,
  PostApiPortfolioWatchlistEntryIdArchiveData,
  PostApiPortfolioWatchlistEntryIdArchiveError,
  PostApiPortfolioWatchlistEntryIdArchiveResponse,
  PostApiPortfolioWatchlistEntryIdStatusData,
  PostApiPortfolioWatchlistEntryIdStatusError,
  PostApiPortfolioWatchlistEntryIdStatusResponse,
  PostApiPortfolioWatchlistEntryIdThesisHealthData,
  PostApiPortfolioWatchlistEntryIdThesisHealthError,
  PostApiPortfolioWatchlistEntryIdThesisHealthResponse,
  PostApiPortfolioWatchlistError,
  PostApiPortfolioWatchlistResponse,
  PostApiRefreshRunData,
  PostApiRefreshRunError,
  PostApiRefreshRunResponse,
  PostApiWorkspaceRefreshData,
  PostApiWorkspaceRefreshError,
  PostApiWorkspaceRefreshResponse,
  PutApiNotificationsPushSubscriptionData,
  PutApiNotificationsPushSubscriptionError,
  PutApiNotificationsPushSubscriptionResponse,
} from './openapi.generated';

export interface OpenApiOperationTypes {
  "DELETE /api/notifications/push/subscription": {
    request: DeleteApiNotificationsPushSubscriptionData;
    response: DeleteApiNotificationsPushSubscriptionResponse;
    error: DeleteApiNotificationsPushSubscriptionError;
  };
  "GET /api/account/access-decisions": {
    request: GetApiAccountAccessDecisionsData;
    response: GetApiAccountAccessDecisionsResponse;
    error: GetApiAccountAccessDecisionsError;
  };
  "GET /api/account/billing": {
    request: GetApiAccountBillingData;
    response: GetApiAccountBillingResponse;
    error: GetApiAccountBillingError;
  };
  "GET /api/account/billing/events": {
    request: GetApiAccountBillingEventsData;
    response: GetApiAccountBillingEventsResponse;
    error: GetApiAccountBillingEventsError;
  };
  "GET /api/account/billing/policy": {
    request: GetApiAccountBillingPolicyData;
    response: GetApiAccountBillingPolicyResponse;
    error: GetApiAccountBillingPolicyError;
  };
  "GET /api/account/billing/policy/transitions": {
    request: GetApiAccountBillingPolicyTransitionsData;
    response: GetApiAccountBillingPolicyTransitionsResponse;
    error: GetApiAccountBillingPolicyTransitionsError;
  };
  "GET /api/account/billing/reconciliation-runs": {
    request: GetApiAccountBillingReconciliationRunsData;
    response: GetApiAccountBillingReconciliationRunsResponse;
    error: GetApiAccountBillingReconciliationRunsError;
  };
  "GET /api/account/entitlements": {
    request: GetApiAccountEntitlementsData;
    response: GetApiAccountEntitlementsResponse;
    error: GetApiAccountEntitlementsError;
  };
  "GET /api/account/profile/social-identifiers": {
    request: GetApiAccountProfileSocialIdentifiersData;
    response: GetApiAccountProfileSocialIdentifiersResponse;
    error: GetApiAccountProfileSocialIdentifiersError;
  };
  "GET /api/account/state": {
    request: GetApiAccountStateData;
    response: GetApiAccountStateResponse;
    error: GetApiAccountStateError;
  };
  "GET /api/account/usage": {
    request: GetApiAccountUsageData;
    response: GetApiAccountUsageResponse;
    error: GetApiAccountUsageError;
  };
  "GET /api/admin/audit": {
    request: GetApiAdminAuditData;
    response: GetApiAdminAuditResponse;
    error: GetApiAdminAuditError;
  };
  "GET /api/admin/billing/operations/failures": {
    request: GetApiAdminBillingOperationsFailuresData;
    response: GetApiAdminBillingOperationsFailuresResponse;
    error: GetApiAdminBillingOperationsFailuresError;
  };
  "GET /api/admin/billing/operations/retry-candidates": {
    request: GetApiAdminBillingOperationsRetryCandidatesData;
    response: GetApiAdminBillingOperationsRetryCandidatesResponse;
    error: GetApiAdminBillingOperationsRetryCandidatesError;
  };
  "GET /api/admin/billing/operations/subject": {
    request: GetApiAdminBillingOperationsSubjectData;
    response: GetApiAdminBillingOperationsSubjectResponse;
    error: GetApiAdminBillingOperationsSubjectError;
  };
  "GET /api/admin/billing/operations/summary": {
    request: GetApiAdminBillingOperationsSummaryData;
    response: GetApiAdminBillingOperationsSummaryResponse;
    error: GetApiAdminBillingOperationsSummaryError;
  };
  "GET /api/admin/billing/orchestration/latest": {
    request: GetApiAdminBillingOrchestrationLatestData;
    response: GetApiAdminBillingOrchestrationLatestResponse;
    error: GetApiAdminBillingOrchestrationLatestError;
  };
  "GET /api/admin/billing/orchestration/runs": {
    request: GetApiAdminBillingOrchestrationRunsData;
    response: GetApiAdminBillingOrchestrationRunsResponse;
    error: GetApiAdminBillingOrchestrationRunsError;
  };
  "GET /api/admin/billing/orchestration/subject": {
    request: GetApiAdminBillingOrchestrationSubjectData;
    response: GetApiAdminBillingOrchestrationSubjectResponse;
    error: GetApiAdminBillingOrchestrationSubjectError;
  };
  "GET /api/admin/billing/policy": {
    request: GetApiAdminBillingPolicyData;
    response: GetApiAdminBillingPolicyResponse;
    error: GetApiAdminBillingPolicyError;
  };
  "GET /api/admin/billing/policy/transitions": {
    request: GetApiAdminBillingPolicyTransitionsData;
    response: GetApiAdminBillingPolicyTransitionsResponse;
    error: GetApiAdminBillingPolicyTransitionsError;
  };
  "GET /api/admin/billing/provider-events": {
    request: GetApiAdminBillingProviderEventsData;
    response: GetApiAdminBillingProviderEventsResponse;
    error: GetApiAdminBillingProviderEventsError;
  };
  "GET /api/admin/billing/provider-plan-mappings": {
    request: GetApiAdminBillingProviderPlanMappingsData;
    response: GetApiAdminBillingProviderPlanMappingsResponse;
    error: GetApiAdminBillingProviderPlanMappingsError;
  };
  "GET /api/admin/commercial/metrics": {
    request: GetApiAdminCommercialMetricsData;
    response: GetApiAdminCommercialMetricsResponse;
    error: GetApiAdminCommercialMetricsError;
  };
  "GET /api/admin/commercial/users/{userId}/control-snapshot": {
    request: GetApiAdminCommercialUsersUserIdControlSnapshotData;
    response: GetApiAdminCommercialUsersUserIdControlSnapshotResponse;
    error: GetApiAdminCommercialUsersUserIdControlSnapshotError;
  };
  "GET /api/admin/freshness": {
    request: GetApiAdminFreshnessData;
    response: GetApiAdminFreshnessResponse;
    error: GetApiAdminFreshnessError;
  };
  "GET /api/admin/market-evidence/cognition": {
    request: GetApiAdminMarketEvidenceCognitionData;
    response: GetApiAdminMarketEvidenceCognitionResponse;
    error: GetApiAdminMarketEvidenceCognitionError;
  };
  "GET /api/admin/market-evidence/inspection": {
    request: GetApiAdminMarketEvidenceInspectionData;
    response: GetApiAdminMarketEvidenceInspectionResponse;
    error: GetApiAdminMarketEvidenceInspectionError;
  };
  "GET /api/admin/market-evidence/payload-replay": {
    request: GetApiAdminMarketEvidencePayloadReplayData;
    response: GetApiAdminMarketEvidencePayloadReplayResponse;
    error: GetApiAdminMarketEvidencePayloadReplayError;
  };
  "GET /api/admin/market-evidence/payloads": {
    request: GetApiAdminMarketEvidencePayloadsData;
    response: GetApiAdminMarketEvidencePayloadsResponse;
    error: GetApiAdminMarketEvidencePayloadsError;
  };
  "GET /api/admin/market-evidence/provider-request": {
    request: GetApiAdminMarketEvidenceProviderRequestData;
    response: GetApiAdminMarketEvidenceProviderRequestResponse;
    error: GetApiAdminMarketEvidenceProviderRequestError;
  };
  "GET /api/admin/market-evidence/provider-response": {
    request: GetApiAdminMarketEvidenceProviderResponseData;
    response: GetApiAdminMarketEvidenceProviderResponseResponse;
    error: GetApiAdminMarketEvidenceProviderResponseError;
  };
  "GET /api/admin/market-evidence/quality": {
    request: GetApiAdminMarketEvidenceQualityData;
    response: GetApiAdminMarketEvidenceQualityResponse;
    error: GetApiAdminMarketEvidenceQualityError;
  };
  "GET /api/admin/market-evidence/reasoning-input": {
    request: GetApiAdminMarketEvidenceReasoningInputData;
    response: GetApiAdminMarketEvidenceReasoningInputResponse;
    error: GetApiAdminMarketEvidenceReasoningInputError;
  };
  "GET /api/admin/market-evidence/scheduled-ingestion/inspection": {
    request: GetApiAdminMarketEvidenceScheduledIngestionInspectionData;
    response: GetApiAdminMarketEvidenceScheduledIngestionInspectionResponse;
    error: GetApiAdminMarketEvidenceScheduledIngestionInspectionError;
  };
  "GET /api/admin/market-evidence/scheduled-ingestion/policies": {
    request: GetApiAdminMarketEvidenceScheduledIngestionPoliciesData;
    response: GetApiAdminMarketEvidenceScheduledIngestionPoliciesResponse;
    error: GetApiAdminMarketEvidenceScheduledIngestionPoliciesError;
  };
  "GET /api/admin/market-evidence/scheduled-ingestion/replay": {
    request: GetApiAdminMarketEvidenceScheduledIngestionReplayData;
    response: GetApiAdminMarketEvidenceScheduledIngestionReplayResponse;
    error: GetApiAdminMarketEvidenceScheduledIngestionReplayError;
  };
  "GET /api/admin/market-evidence/scheduled-ingestion/runs": {
    request: GetApiAdminMarketEvidenceScheduledIngestionRunsData;
    response: GetApiAdminMarketEvidenceScheduledIngestionRunsResponse;
    error: GetApiAdminMarketEvidenceScheduledIngestionRunsError;
  };
  "GET /api/admin/market-evidence/weighted": {
    request: GetApiAdminMarketEvidenceWeightedData;
    response: GetApiAdminMarketEvidenceWeightedResponse;
    error: GetApiAdminMarketEvidenceWeightedError;
  };
  "GET /api/admin/ops": {
    request: GetApiAdminOpsData;
    response: GetApiAdminOpsResponse;
    error: GetApiAdminOpsError;
  };
  "GET /api/admin/providers": {
    request: GetApiAdminProvidersData;
    response: GetApiAdminProvidersResponse;
    error: GetApiAdminProvidersError;
  };
  "GET /api/admin/security/step-up/readiness": {
    request: GetApiAdminSecurityStepUpReadinessData;
    response: GetApiAdminSecurityStepUpReadinessResponse;
    error: GetApiAdminSecurityStepUpReadinessError;
  };
  "GET /api/admin/seo/feed": {
    request: GetApiAdminSeoFeedData;
    response: GetApiAdminSeoFeedResponse;
    error: GetApiAdminSeoFeedError;
  };
  "GET /api/admin/seo/sitemap": {
    request: GetApiAdminSeoSitemapData;
    response: GetApiAdminSeoSitemapResponse;
    error: GetApiAdminSeoSitemapError;
  };
  "GET /api/admin/system-summary": {
    request: GetApiAdminSystemSummaryData;
    response: GetApiAdminSystemSummaryResponse;
    error: GetApiAdminSystemSummaryError;
  };
  "GET /api/analytics/latest": {
    request: GetApiAnalyticsLatestData;
    response: GetApiAnalyticsLatestResponse;
    error: GetApiAnalyticsLatestError;
  };
  "GET /api/analytics/top-behaviors": {
    request: GetApiAnalyticsTopBehaviorsData;
    response: GetApiAnalyticsTopBehaviorsResponse;
    error: GetApiAnalyticsTopBehaviorsError;
  };
  "GET /api/analytics/top-setups": {
    request: GetApiAnalyticsTopSetupsData;
    response: GetApiAnalyticsTopSetupsResponse;
    error: GetApiAnalyticsTopSetupsError;
  };
  "GET /api/auth/{...nextauth}": {
    request: GetApiAuthNextauthData;
    response: GetApiAuthNextauthResponse;
    error: GetApiAuthNextauthError;
  };
  "GET /api/billing/intention": {
    request: GetApiBillingIntentionData;
    response: GetApiBillingIntentionResponse;
    error: GetApiBillingIntentionError;
  };
  "GET /api/billing/subscription": {
    request: GetApiBillingSubscriptionData;
    response: GetApiBillingSubscriptionResponse;
    error: GetApiBillingSubscriptionError;
  };
  "GET /api/coaching/action-plan": {
    request: GetApiCoachingActionPlanData;
    response: GetApiCoachingActionPlanResponse;
    error: GetApiCoachingActionPlanError;
  };
  "GET /api/coaching/focus": {
    request: GetApiCoachingFocusData;
    response: GetApiCoachingFocusResponse;
    error: GetApiCoachingFocusError;
  };
  "GET /api/coaching/latest": {
    request: GetApiCoachingLatestData;
    response: GetApiCoachingLatestResponse;
    error: GetApiCoachingLatestError;
  };
  "GET /api/dashboard/{asset}": {
    request: GetApiDashboardAssetData;
    response: GetApiDashboardAssetResponse;
    error: GetApiDashboardAssetError;
  };
  "GET /api/journal/analytics": {
    request: GetApiJournalAnalyticsData;
    response: GetApiJournalAnalyticsResponse;
    error: GetApiJournalAnalyticsError;
  };
  "GET /api/journal/cases": {
    request: GetApiJournalCasesData;
    response: GetApiJournalCasesResponse;
    error: GetApiJournalCasesError;
  };
  "GET /api/journal/cases/{caseId}": {
    request: GetApiJournalCasesCaseIdData;
    response: GetApiJournalCasesCaseIdResponse;
    error: GetApiJournalCasesCaseIdError;
  };
  "GET /api/journal/cases/{caseId}/replay": {
    request: GetApiJournalCasesCaseIdReplayData;
    response: GetApiJournalCasesCaseIdReplayResponse;
    error: GetApiJournalCasesCaseIdReplayError;
  };
  "GET /api/journal/entries": {
    request: GetApiJournalEntriesData;
    response: GetApiJournalEntriesResponse;
    error: GetApiJournalEntriesError;
  };
  "GET /api/journal/influence/latest": {
    request: GetApiJournalInfluenceLatestData;
    response: GetApiJournalInfluenceLatestResponse;
    error: GetApiJournalInfluenceLatestError;
  };
  "GET /api/notifications/alerts": {
    request: GetApiNotificationsAlertsData;
    response: GetApiNotificationsAlertsResponse;
    error: GetApiNotificationsAlertsError;
  };
  "GET /api/notifications/health": {
    request: GetApiNotificationsHealthData;
    response: GetApiNotificationsHealthResponse;
    error: GetApiNotificationsHealthError;
  };
  "GET /api/notifications/inbox": {
    request: GetApiNotificationsInboxData;
    response: GetApiNotificationsInboxResponse;
    error: GetApiNotificationsInboxError;
  };
  "GET /api/notifications/subscriptions": {
    request: GetApiNotificationsSubscriptionsData;
    response: GetApiNotificationsSubscriptionsResponse;
    error: GetApiNotificationsSubscriptionsError;
  };
  "GET /api/notifications/summary": {
    request: GetApiNotificationsSummaryData;
    response: GetApiNotificationsSummaryResponse;
    error: GetApiNotificationsSummaryError;
  };
  "GET /api/notifications/targets": {
    request: GetApiNotificationsTargetsData;
    response: GetApiNotificationsTargetsResponse;
    error: GetApiNotificationsTargetsError;
  };
  "GET /api/portfolio/actions": {
    request: GetApiPortfolioActionsData;
    response: GetApiPortfolioActionsResponse;
    error: GetApiPortfolioActionsError;
  };
  "GET /api/portfolio/actions/{actionId}": {
    request: GetApiPortfolioActionsActionIdData;
    response: GetApiPortfolioActionsActionIdResponse;
    error: GetApiPortfolioActionsActionIdError;
  };
  "GET /api/portfolio/attention": {
    request: GetApiPortfolioAttentionData;
    response: GetApiPortfolioAttentionResponse;
    error: GetApiPortfolioAttentionError;
  };
  "GET /api/portfolio/positions": {
    request: GetApiPortfolioPositionsData;
    response: GetApiPortfolioPositionsResponse;
    error: GetApiPortfolioPositionsError;
  };
  "GET /api/portfolio/positions/{positionId}": {
    request: GetApiPortfolioPositionsPositionIdData;
    response: GetApiPortfolioPositionsPositionIdResponse;
    error: GetApiPortfolioPositionsPositionIdError;
  };
  "GET /api/portfolio/replay": {
    request: GetApiPortfolioReplayData;
    response: GetApiPortfolioReplayResponse;
    error: GetApiPortfolioReplayError;
  };
  "GET /api/portfolio/snapshot/current": {
    request: GetApiPortfolioSnapshotCurrentData;
    response: GetApiPortfolioSnapshotCurrentResponse;
    error: GetApiPortfolioSnapshotCurrentError;
  };
  "GET /api/portfolio/watchlist": {
    request: GetApiPortfolioWatchlistData;
    response: GetApiPortfolioWatchlistResponse;
    error: GetApiPortfolioWatchlistError;
  };
  "GET /api/portfolio/watchlist/{entryId}": {
    request: GetApiPortfolioWatchlistEntryIdData;
    response: GetApiPortfolioWatchlistEntryIdResponse;
    error: GetApiPortfolioWatchlistEntryIdError;
  };
  "GET /api/refresh/freshness": {
    request: GetApiRefreshFreshnessData;
    response: GetApiRefreshFreshnessResponse;
    error: GetApiRefreshFreshnessError;
  };
  "GET /api/refresh/history": {
    request: GetApiRefreshHistoryData;
    response: GetApiRefreshHistoryResponse;
    error: GetApiRefreshHistoryError;
  };
  "GET /api/refresh/latest": {
    request: GetApiRefreshLatestData;
    response: GetApiRefreshLatestResponse;
    error: GetApiRefreshLatestError;
  };
  "GET /api/workspace/agenda": {
    request: GetApiWorkspaceAgendaData;
    response: GetApiWorkspaceAgendaResponse;
    error: GetApiWorkspaceAgendaError;
  };
  "GET /api/workspace/current": {
    request: GetApiWorkspaceCurrentData;
    response: GetApiWorkspaceCurrentResponse;
    error: GetApiWorkspaceCurrentError;
  };
  "GET /api/workspace/freshness": {
    request: GetApiWorkspaceFreshnessData;
    response: GetApiWorkspaceFreshnessResponse;
    error: GetApiWorkspaceFreshnessError;
  };
  "GET /api/workspace/history": {
    request: GetApiWorkspaceHistoryData;
    response: GetApiWorkspaceHistoryResponse;
    error: GetApiWorkspaceHistoryError;
  };
  "PATCH /api/account/preferences": {
    request: PatchApiAccountPreferencesData;
    response: PatchApiAccountPreferencesResponse;
    error: PatchApiAccountPreferencesError;
  };
  "PATCH /api/account/profile/social-identifiers": {
    request: PatchApiAccountProfileSocialIdentifiersData;
    response: PatchApiAccountProfileSocialIdentifiersResponse;
    error: PatchApiAccountProfileSocialIdentifiersError;
  };
  "PATCH /api/account/watchlist": {
    request: PatchApiAccountWatchlistData;
    response: PatchApiAccountWatchlistResponse;
    error: PatchApiAccountWatchlistError;
  };
  "PATCH /api/notifications/alerts": {
    request: PatchApiNotificationsAlertsData;
    response: PatchApiNotificationsAlertsResponse;
    error: PatchApiNotificationsAlertsError;
  };
  "PATCH /api/notifications/subscriptions/{subscriptionId}": {
    request: PatchApiNotificationsSubscriptionsSubscriptionIdData;
    response: PatchApiNotificationsSubscriptionsSubscriptionIdResponse;
    error: PatchApiNotificationsSubscriptionsSubscriptionIdError;
  };
  "PATCH /api/portfolio/actions/{actionId}": {
    request: PatchApiPortfolioActionsActionIdData;
    response: PatchApiPortfolioActionsActionIdResponse;
    error: PatchApiPortfolioActionsActionIdError;
  };
  "PATCH /api/portfolio/positions/{positionId}": {
    request: PatchApiPortfolioPositionsPositionIdData;
    response: PatchApiPortfolioPositionsPositionIdResponse;
    error: PatchApiPortfolioPositionsPositionIdError;
  };
  "PATCH /api/portfolio/watchlist/{entryId}": {
    request: PatchApiPortfolioWatchlistEntryIdData;
    response: PatchApiPortfolioWatchlistEntryIdResponse;
    error: PatchApiPortfolioWatchlistEntryIdError;
  };
  "POST /api/account/access-check": {
    request: PostApiAccountAccessCheckData;
    response: PostApiAccountAccessCheckResponse;
    error: PostApiAccountAccessCheckError;
  };
  "POST /api/account/onboarding": {
    request: PostApiAccountOnboardingData;
    response: PostApiAccountOnboardingResponse;
    error: PostApiAccountOnboardingError;
  };
  "POST /api/admin/billing/activate": {
    request: PostApiAdminBillingActivateData;
    response: PostApiAdminBillingActivateResponse;
    error: PostApiAdminBillingActivateError;
  };
  "POST /api/admin/billing/cancel-at-period-end": {
    request: PostApiAdminBillingCancelAtPeriodEndData;
    response: PostApiAdminBillingCancelAtPeriodEndResponse;
    error: PostApiAdminBillingCancelAtPeriodEndError;
  };
  "POST /api/admin/billing/change-plan": {
    request: PostApiAdminBillingChangePlanData;
    response: PostApiAdminBillingChangePlanResponse;
    error: PostApiAdminBillingChangePlanError;
  };
  "POST /api/admin/billing/expire": {
    request: PostApiAdminBillingExpireData;
    response: PostApiAdminBillingExpireResponse;
    error: PostApiAdminBillingExpireError;
  };
  "POST /api/admin/billing/past-due": {
    request: PostApiAdminBillingPastDueData;
    response: PostApiAdminBillingPastDueResponse;
    error: PostApiAdminBillingPastDueError;
  };
  "POST /api/admin/billing/pause": {
    request: PostApiAdminBillingPauseData;
    response: PostApiAdminBillingPauseResponse;
    error: PostApiAdminBillingPauseError;
  };
  "POST /api/admin/billing/provider-plan-mapping": {
    request: PostApiAdminBillingProviderPlanMappingData;
    response: PostApiAdminBillingProviderPlanMappingResponse;
    error: PostApiAdminBillingProviderPlanMappingError;
  };
  "POST /api/admin/billing/renew": {
    request: PostApiAdminBillingRenewData;
    response: PostApiAdminBillingRenewResponse;
    error: PostApiAdminBillingRenewError;
  };
  "POST /api/admin/billing/resume": {
    request: PostApiAdminBillingResumeData;
    response: PostApiAdminBillingResumeResponse;
    error: PostApiAdminBillingResumeError;
  };
  "POST /api/admin/billing/trial": {
    request: PostApiAdminBillingTrialData;
    response: PostApiAdminBillingTrialResponse;
    error: PostApiAdminBillingTrialError;
  };
  "POST /api/admin/commercial/prices": {
    request: PostApiAdminCommercialPricesData;
    response: PostApiAdminCommercialPricesResponse;
    error: PostApiAdminCommercialPricesError;
  };
  "POST /api/admin/commercial/users/{userId}/gift-focus-plan": {
    request: PostApiAdminCommercialUsersUserIdGiftFocusPlanData;
    response: PostApiAdminCommercialUsersUserIdGiftFocusPlanResponse;
    error: PostApiAdminCommercialUsersUserIdGiftFocusPlanError;
  };
  "POST /api/admin/commercial/users/{userId}/restrict": {
    request: PostApiAdminCommercialUsersUserIdRestrictData;
    response: PostApiAdminCommercialUsersUserIdRestrictResponse;
    error: PostApiAdminCommercialUsersUserIdRestrictError;
  };
  "POST /api/admin/commercial/users/{userId}/retract-focus-gift": {
    request: PostApiAdminCommercialUsersUserIdRetractFocusGiftData;
    response: PostApiAdminCommercialUsersUserIdRetractFocusGiftResponse;
    error: PostApiAdminCommercialUsersUserIdRetractFocusGiftError;
  };
  "POST /api/admin/entitlements/override": {
    request: PostApiAdminEntitlementsOverrideData;
    response: PostApiAdminEntitlementsOverrideResponse;
    error: PostApiAdminEntitlementsOverrideError;
  };
  "POST /api/admin/entitlements/plan": {
    request: PostApiAdminEntitlementsPlanData;
    response: PostApiAdminEntitlementsPlanResponse;
    error: PostApiAdminEntitlementsPlanError;
  };
  "POST /api/admin/entitlements/state": {
    request: PostApiAdminEntitlementsStateData;
    response: PostApiAdminEntitlementsStateResponse;
    error: PostApiAdminEntitlementsStateError;
  };
  "POST /api/admin/market-evidence/scheduled-ingestion/dry-run": {
    request: PostApiAdminMarketEvidenceScheduledIngestionDryRunData;
    response: PostApiAdminMarketEvidenceScheduledIngestionDryRunResponse;
    error: PostApiAdminMarketEvidenceScheduledIngestionDryRunError;
  };
  "POST /api/admin/market-evidence/scheduled-ingestion/replay": {
    request: PostApiAdminMarketEvidenceScheduledIngestionReplayData;
    response: PostApiAdminMarketEvidenceScheduledIngestionReplayResponse;
    error: PostApiAdminMarketEvidenceScheduledIngestionReplayError;
  };
  "POST /api/admin/security/step-up/challenge": {
    request: PostApiAdminSecurityStepUpChallengeData;
    response: PostApiAdminSecurityStepUpChallengeResponse;
    error: PostApiAdminSecurityStepUpChallengeError;
  };
  "POST /api/admin/security/step-up/verify": {
    request: PostApiAdminSecurityStepUpVerifyData;
    response: PostApiAdminSecurityStepUpVerifyResponse;
    error: PostApiAdminSecurityStepUpVerifyError;
  };
  "POST /api/analytics/generate": {
    request: PostApiAnalyticsGenerateData;
    response: PostApiAnalyticsGenerateResponse;
    error: PostApiAnalyticsGenerateError;
  };
  "POST /api/auth/{...nextauth}": {
    request: PostApiAuthNextauthData;
    response: PostApiAuthNextauthResponse;
    error: PostApiAuthNextauthError;
  };
  "POST /api/auth/password-reset/confirm": {
    request: PostApiAuthPasswordResetConfirmData;
    response: PostApiAuthPasswordResetConfirmResponse;
    error: PostApiAuthPasswordResetConfirmError;
  };
  "POST /api/auth/password-reset/request": {
    request: PostApiAuthPasswordResetRequestData;
    response: PostApiAuthPasswordResetRequestResponse;
    error: PostApiAuthPasswordResetRequestError;
  };
  "POST /api/billing/checkout": {
    request: PostApiBillingCheckoutData;
    response: PostApiBillingCheckoutResponse;
    error: PostApiBillingCheckoutError;
  };
  "POST /api/billing/portal": {
    request: PostApiBillingPortalData;
    response: PostApiBillingPortalResponse;
    error: PostApiBillingPortalError;
  };
  "POST /api/billing/webhook": {
    request: PostApiBillingWebhookData;
    response: PostApiBillingWebhookResponse;
    error: PostApiBillingWebhookError;
  };
  "POST /api/billing/webhook/korapay": {
    request: PostApiBillingWebhookKorapayData;
    response: PostApiBillingWebhookKorapayResponse;
    error: PostApiBillingWebhookKorapayError;
  };
  "POST /api/coaching/generate": {
    request: PostApiCoachingGenerateData;
    response: PostApiCoachingGenerateResponse;
    error: PostApiCoachingGenerateError;
  };
  "POST /api/internal/billing/orchestration/retry": {
    request: PostApiInternalBillingOrchestrationRetryData;
    response: PostApiInternalBillingOrchestrationRetryResponse;
    error: PostApiInternalBillingOrchestrationRetryError;
  };
  "POST /api/internal/billing/policy/evaluate": {
    request: PostApiInternalBillingPolicyEvaluateData;
    response: PostApiInternalBillingPolicyEvaluateResponse;
    error: PostApiInternalBillingPolicyEvaluateError;
  };
  "POST /api/internal/billing/provider-events": {
    request: PostApiInternalBillingProviderEventsData;
    response: PostApiInternalBillingProviderEventsResponse;
    error: PostApiInternalBillingProviderEventsError;
  };
  "POST /api/internal/billing/provider-events/replay": {
    request: PostApiInternalBillingProviderEventsReplayData;
    response: PostApiInternalBillingProviderEventsReplayResponse;
    error: PostApiInternalBillingProviderEventsReplayError;
  };
  "POST /api/internal/billing/reconcile": {
    request: PostApiInternalBillingReconcileData;
    response: PostApiInternalBillingReconcileResponse;
    error: PostApiInternalBillingReconcileError;
  };
  "POST /api/internal/billing/reconcile/retry": {
    request: PostApiInternalBillingReconcileRetryData;
    response: PostApiInternalBillingReconcileRetryResponse;
    error: PostApiInternalBillingReconcileRetryError;
  };
  "POST /api/internal/market-evidence/tiingo/fixture-ingest": {
    request: PostApiInternalMarketEvidenceTiingoFixtureIngestData;
    response: PostApiInternalMarketEvidenceTiingoFixtureIngestResponse;
    error: PostApiInternalMarketEvidenceTiingoFixtureIngestError;
  };
  "POST /api/journal/cases": {
    request: PostApiJournalCasesData;
    response: PostApiJournalCasesResponse;
    error: PostApiJournalCasesError;
  };
  "POST /api/journal/cases/{caseId}/adjust": {
    request: PostApiJournalCasesCaseIdAdjustData;
    response: PostApiJournalCasesCaseIdAdjustResponse;
    error: PostApiJournalCasesCaseIdAdjustError;
  };
  "POST /api/journal/cases/{caseId}/cancel": {
    request: PostApiJournalCasesCaseIdCancelData;
    response: PostApiJournalCasesCaseIdCancelResponse;
    error: PostApiJournalCasesCaseIdCancelError;
  };
  "POST /api/journal/cases/{caseId}/close": {
    request: PostApiJournalCasesCaseIdCloseData;
    response: PostApiJournalCasesCaseIdCloseResponse;
    error: PostApiJournalCasesCaseIdCloseError;
  };
  "POST /api/journal/cases/{caseId}/execute": {
    request: PostApiJournalCasesCaseIdExecuteData;
    response: PostApiJournalCasesCaseIdExecuteResponse;
    error: PostApiJournalCasesCaseIdExecuteError;
  };
  "POST /api/journal/cases/{caseId}/partial-close": {
    request: PostApiJournalCasesCaseIdPartialCloseData;
    response: PostApiJournalCasesCaseIdPartialCloseResponse;
    error: PostApiJournalCasesCaseIdPartialCloseError;
  };
  "POST /api/journal/cases/{caseId}/plan": {
    request: PostApiJournalCasesCaseIdPlanData;
    response: PostApiJournalCasesCaseIdPlanResponse;
    error: PostApiJournalCasesCaseIdPlanError;
  };
  "POST /api/journal/cases/{caseId}/review": {
    request: PostApiJournalCasesCaseIdReviewData;
    response: PostApiJournalCasesCaseIdReviewResponse;
    error: PostApiJournalCasesCaseIdReviewError;
  };
  "POST /api/journal/entries": {
    request: PostApiJournalEntriesData;
    response: PostApiJournalEntriesResponse;
    error: PostApiJournalEntriesError;
  };
  "POST /api/journal/influence/generate": {
    request: PostApiJournalInfluenceGenerateData;
    response: PostApiJournalInfluenceGenerateResponse;
    error: PostApiJournalInfluenceGenerateError;
  };
  "POST /api/notifications/delivery/dispatch": {
    request: PostApiNotificationsDeliveryDispatchData;
    response: PostApiNotificationsDeliveryDispatchResponse;
    error: PostApiNotificationsDeliveryDispatchError;
  };
  "POST /api/notifications/providers/postmark/webhook": {
    request: PostApiNotificationsProvidersPostmarkWebhookData;
    response: PostApiNotificationsProvidersPostmarkWebhookResponse;
    error: PostApiNotificationsProvidersPostmarkWebhookError;
  };
  "POST /api/notifications/providers/resend/webhook": {
    request: PostApiNotificationsProvidersResendWebhookData;
    response: PostApiNotificationsProvidersResendWebhookResponse;
    error: PostApiNotificationsProvidersResendWebhookError;
  };
  "POST /api/notifications/subscriptions": {
    request: PostApiNotificationsSubscriptionsData;
    response: PostApiNotificationsSubscriptionsResponse;
    error: PostApiNotificationsSubscriptionsError;
  };
  "POST /api/notifications/targets": {
    request: PostApiNotificationsTargetsData;
    response: PostApiNotificationsTargetsResponse;
    error: PostApiNotificationsTargetsError;
  };
  "POST /api/notifications/targets/{targetId}/disable": {
    request: PostApiNotificationsTargetsTargetIdDisableData;
    response: PostApiNotificationsTargetsTargetIdDisableResponse;
    error: PostApiNotificationsTargetsTargetIdDisableError;
  };
  "POST /api/notifications/targets/{targetId}/enable": {
    request: PostApiNotificationsTargetsTargetIdEnableData;
    response: PostApiNotificationsTargetsTargetIdEnableResponse;
    error: PostApiNotificationsTargetsTargetIdEnableError;
  };
  "POST /api/notifications/verification/consume": {
    request: PostApiNotificationsVerificationConsumeData;
    response: PostApiNotificationsVerificationConsumeResponse;
    error: PostApiNotificationsVerificationConsumeError;
  };
  "POST /api/notifications/verification/issue": {
    request: PostApiNotificationsVerificationIssueData;
    response: PostApiNotificationsVerificationIssueResponse;
    error: PostApiNotificationsVerificationIssueError;
  };
  "POST /api/ops/notifications/expire-verifications": {
    request: PostApiOpsNotificationsExpireVerificationsData;
    response: PostApiOpsNotificationsExpireVerificationsResponse;
    error: PostApiOpsNotificationsExpireVerificationsError;
  };
  "POST /api/ops/notifications/process-feedback": {
    request: PostApiOpsNotificationsProcessFeedbackData;
    response: PostApiOpsNotificationsProcessFeedbackResponse;
    error: PostApiOpsNotificationsProcessFeedbackError;
  };
  "POST /api/portfolio/actions": {
    request: PostApiPortfolioActionsData;
    response: PostApiPortfolioActionsResponse;
    error: PostApiPortfolioActionsError;
  };
  "POST /api/portfolio/actions/{actionId}/complete": {
    request: PostApiPortfolioActionsActionIdCompleteData;
    response: PostApiPortfolioActionsActionIdCompleteResponse;
    error: PostApiPortfolioActionsActionIdCompleteError;
  };
  "POST /api/portfolio/actions/{actionId}/dismiss": {
    request: PostApiPortfolioActionsActionIdDismissData;
    response: PostApiPortfolioActionsActionIdDismissResponse;
    error: PostApiPortfolioActionsActionIdDismissError;
  };
  "POST /api/portfolio/positions": {
    request: PostApiPortfolioPositionsData;
    response: PostApiPortfolioPositionsResponse;
    error: PostApiPortfolioPositionsError;
  };
  "POST /api/portfolio/positions/{positionId}/cancel": {
    request: PostApiPortfolioPositionsPositionIdCancelData;
    response: PostApiPortfolioPositionsPositionIdCancelResponse;
    error: PostApiPortfolioPositionsPositionIdCancelError;
  };
  "POST /api/portfolio/positions/{positionId}/close": {
    request: PostApiPortfolioPositionsPositionIdCloseData;
    response: PostApiPortfolioPositionsPositionIdCloseResponse;
    error: PostApiPortfolioPositionsPositionIdCloseError;
  };
  "POST /api/portfolio/positions/{positionId}/open": {
    request: PostApiPortfolioPositionsPositionIdOpenData;
    response: PostApiPortfolioPositionsPositionIdOpenResponse;
    error: PostApiPortfolioPositionsPositionIdOpenError;
  };
  "POST /api/portfolio/positions/{positionId}/reduce": {
    request: PostApiPortfolioPositionsPositionIdReduceData;
    response: PostApiPortfolioPositionsPositionIdReduceResponse;
    error: PostApiPortfolioPositionsPositionIdReduceError;
  };
  "POST /api/portfolio/positions/{positionId}/thesis-health": {
    request: PostApiPortfolioPositionsPositionIdThesisHealthData;
    response: PostApiPortfolioPositionsPositionIdThesisHealthResponse;
    error: PostApiPortfolioPositionsPositionIdThesisHealthError;
  };
  "POST /api/portfolio/snapshot/generate": {
    request: PostApiPortfolioSnapshotGenerateData;
    response: PostApiPortfolioSnapshotGenerateResponse;
    error: PostApiPortfolioSnapshotGenerateError;
  };
  "POST /api/portfolio/watchlist": {
    request: PostApiPortfolioWatchlistData;
    response: PostApiPortfolioWatchlistResponse;
    error: PostApiPortfolioWatchlistError;
  };
  "POST /api/portfolio/watchlist/{entryId}/archive": {
    request: PostApiPortfolioWatchlistEntryIdArchiveData;
    response: PostApiPortfolioWatchlistEntryIdArchiveResponse;
    error: PostApiPortfolioWatchlistEntryIdArchiveError;
  };
  "POST /api/portfolio/watchlist/{entryId}/status": {
    request: PostApiPortfolioWatchlistEntryIdStatusData;
    response: PostApiPortfolioWatchlistEntryIdStatusResponse;
    error: PostApiPortfolioWatchlistEntryIdStatusError;
  };
  "POST /api/portfolio/watchlist/{entryId}/thesis-health": {
    request: PostApiPortfolioWatchlistEntryIdThesisHealthData;
    response: PostApiPortfolioWatchlistEntryIdThesisHealthResponse;
    error: PostApiPortfolioWatchlistEntryIdThesisHealthError;
  };
  "POST /api/refresh/run": {
    request: PostApiRefreshRunData;
    response: PostApiRefreshRunResponse;
    error: PostApiRefreshRunError;
  };
  "POST /api/workspace/refresh": {
    request: PostApiWorkspaceRefreshData;
    response: PostApiWorkspaceRefreshResponse;
    error: PostApiWorkspaceRefreshError;
  };
  "PUT /api/notifications/push/subscription": {
    request: PutApiNotificationsPushSubscriptionData;
    response: PutApiNotificationsPushSubscriptionResponse;
    error: PutApiNotificationsPushSubscriptionError;
  };
}
