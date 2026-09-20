/**
 * AUTO-GENERATED. DO NOT EDIT.
 * Source: Elceo23x4/Elceo-Mi@771487b46874afc28a21f260a2c12f92bfe8f736
 * Frozen functional tree: 6f81f55269031e0ec6467cd60283593dd5b7c2d3
 * Input: contracts/backend/openapi.json (sha256:c6d2fdedbf0535258f695ed19e6e2028c38b39eae4fe14c513d8273fccfa24ae)
 * Generator: @hey-api/openapi-ts@0.99.0 (type-only output)
 * Regenerate: npm run generate:m2-contracts
 */
export const browserOperationRegistry = {
  "DELETE /api/notifications/push/subscription": {
    "key": "DELETE /api/notifications/push/subscription",
    "method": "DELETE",
    "routePath": "/api/notifications/push/subscription",
    "routeFile": "apps/web/app/api/notifications/push/subscription/route.ts",
    "operationId": "delete_api_notifications_push_subscription",
    "family": "notifications",
    "classification": "notification_preference_owner_only",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "notification_preferences",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "notification_preference_owner_only",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "notification_preferences",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/notifications/push/subscription",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseBody",
      "parseJsonBody"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "DELETE",
      "PUT"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/notifications/push/subscription/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/account/access-decisions": {
    "key": "GET /api/account/access-decisions",
    "method": "GET",
    "routePath": "/api/account/access-decisions",
    "routeFile": "apps/web/app/api/account/access-decisions/route.ts",
    "operationId": "get_api_account_access_decisions",
    "family": "account",
    "classification": "authenticated_basic",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "authenticated_basic",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/account/access-decisions",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [
      "parsePositiveInt",
      "parseSearchParams"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/account/access-decisions/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/account/billing": {
    "key": "GET /api/account/billing",
    "method": "GET",
    "routePath": "/api/account/billing",
    "routeFile": "apps/web/app/api/account/billing/route.ts",
    "operationId": "get_api_account_billing",
    "family": "account",
    "classification": "payment_readiness_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "payment_readiness",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "payment_readiness_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "payment_readiness",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/account/billing",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/account/billing/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/account/billing/events": {
    "key": "GET /api/account/billing/events",
    "method": "GET",
    "routePath": "/api/account/billing/events",
    "routeFile": "apps/web/app/api/account/billing/events/route.ts",
    "operationId": "get_api_account_billing_events",
    "family": "account",
    "classification": "payment_readiness_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "payment_readiness",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "payment_readiness_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "payment_readiness",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/account/billing/events",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/account/billing/events/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/account/billing/policy": {
    "key": "GET /api/account/billing/policy",
    "method": "GET",
    "routePath": "/api/account/billing/policy",
    "routeFile": "apps/web/app/api/account/billing/policy/route.ts",
    "operationId": "get_api_account_billing_policy",
    "family": "account",
    "classification": "payment_readiness_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "payment_readiness",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "payment_readiness_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "payment_readiness",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/account/billing/policy",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/account/billing/policy/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/account/billing/policy/transitions": {
    "key": "GET /api/account/billing/policy/transitions",
    "method": "GET",
    "routePath": "/api/account/billing/policy/transitions",
    "routeFile": "apps/web/app/api/account/billing/policy/transitions/route.ts",
    "operationId": "get_api_account_billing_policy_transitions",
    "family": "account",
    "classification": "payment_readiness_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "payment_readiness",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "payment_readiness_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "payment_readiness",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/account/billing/policy/transitions",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/account/billing/policy/transitions/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/account/billing/reconciliation-runs": {
    "key": "GET /api/account/billing/reconciliation-runs",
    "method": "GET",
    "routePath": "/api/account/billing/reconciliation-runs",
    "routeFile": "apps/web/app/api/account/billing/reconciliation-runs/route.ts",
    "operationId": "get_api_account_billing_reconciliation_runs",
    "family": "account",
    "classification": "payment_readiness_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "payment_readiness",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "payment_readiness_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "payment_readiness",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/account/billing/reconciliation-runs",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/account/billing/reconciliation-runs/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/account/entitlements": {
    "key": "GET /api/account/entitlements",
    "method": "GET",
    "routePath": "/api/account/entitlements",
    "routeFile": "apps/web/app/api/account/entitlements/route.ts",
    "operationId": "get_api_account_entitlements",
    "family": "account",
    "classification": "authenticated_basic",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "authenticated_basic",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/account/entitlements",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/account/entitlements/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/account/profile/social-identifiers": {
    "key": "GET /api/account/profile/social-identifiers",
    "method": "GET",
    "routePath": "/api/account/profile/social-identifiers",
    "routeFile": "apps/web/app/api/account/profile/social-identifiers/route.ts",
    "operationId": "get_api_account_profile_social_identifiers",
    "family": "account",
    "classification": "authenticated_basic",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "authenticated_basic",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/account/profile/social-identifiers",
      "methodsTested": [
        "GET",
        "PATCH"
      ],
      "evidenceLevel": "direct_route",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "validation_before_side_effect"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateUpdateUserSocialIdentifiersRequest"
    ],
    "importedTypes": [
      "CommercialProfileSocialIdentifier"
    ],
    "explicitStatuses": [
      503
    ],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/account/profile/social-identifiers/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/account/state": {
    "key": "GET /api/account/state",
    "method": "GET",
    "routePath": "/api/account/state",
    "routeFile": "apps/web/app/api/account/state/route.ts",
    "operationId": "get_api_account_state",
    "family": "account",
    "classification": "authenticated_basic",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "authenticated_basic",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": false,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/account/state",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/account/state/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/account/usage": {
    "key": "GET /api/account/usage",
    "method": "GET",
    "routePath": "/api/account/usage",
    "routeFile": "apps/web/app/api/account/usage/route.ts",
    "operationId": "get_api_account_usage",
    "family": "account",
    "classification": "authenticated_basic",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "authenticated_basic",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/account/usage",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/account/usage/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/analytics/latest": {
    "key": "GET /api/analytics/latest",
    "method": "GET",
    "routePath": "/api/analytics/latest",
    "routeFile": "apps/web/app/api/analytics/latest/route.ts",
    "operationId": "get_api_analytics_latest",
    "family": "analytics",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": true,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/analytics/latest",
      "methodsTested": [
        "GET"
      ],
      "evidenceLevel": "direct_route",
      "testedAssertions": [
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [
      "parseInt",
      "parseSearchParams"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "GET",
      "M15"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/analytics/latest/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/analytics/top-behaviors": {
    "key": "GET /api/analytics/top-behaviors",
    "method": "GET",
    "routePath": "/api/analytics/top-behaviors",
    "routeFile": "apps/web/app/api/analytics/top-behaviors/route.ts",
    "operationId": "get_api_analytics_top_behaviors",
    "family": "analytics",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/analytics/top-behaviors",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [
      "parseSearchParams"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "M15"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/analytics/top-behaviors/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/analytics/top-setups": {
    "key": "GET /api/analytics/top-setups",
    "method": "GET",
    "routePath": "/api/analytics/top-setups",
    "routeFile": "apps/web/app/api/analytics/top-setups/route.ts",
    "operationId": "get_api_analytics_top_setups",
    "family": "analytics",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/analytics/top-setups",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [
      "parseSearchParams"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "M15"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/analytics/top-setups/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/billing/intention": {
    "key": "GET /api/billing/intention",
    "method": "GET",
    "routePath": "/api/billing/intention",
    "routeFile": "apps/web/app/api/billing/intention/route.ts",
    "operationId": "get_api_billing_intention",
    "family": "billing",
    "classification": "payment_readiness_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "payment_readiness",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "payment_readiness_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "payment_readiness",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": false,
      "targetUserReference": false,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": []
    },
    "runtimeTestEvidence": {
      "routePath": "/api/billing/intention",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "handler_specific_json",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/billing/intention/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/billing/subscription": {
    "key": "GET /api/billing/subscription",
    "method": "GET",
    "routePath": "/api/billing/subscription",
    "routeFile": "apps/web/app/api/billing/subscription/route.ts",
    "operationId": "get_api_billing_subscription",
    "family": "billing",
    "classification": "payment_readiness_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "payment_readiness",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "payment_readiness_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "payment_readiness",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": false,
      "targetUserReference": false,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": []
    },
    "runtimeTestEvidence": {
      "routePath": "/api/billing/subscription",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "handler_specific_json",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "UNAUTHORIZED",
      "unauthorized"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/billing/subscription/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/coaching/action-plan": {
    "key": "GET /api/coaching/action-plan",
    "method": "GET",
    "routePath": "/api/coaching/action-plan",
    "routeFile": "apps/web/app/api/coaching/action-plan/route.ts",
    "operationId": "get_api_coaching_action_plan",
    "family": "coaching",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/coaching/action-plan",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [
      "parseSearchParams"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "M15"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/coaching/action-plan/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/coaching/focus": {
    "key": "GET /api/coaching/focus",
    "method": "GET",
    "routePath": "/api/coaching/focus",
    "routeFile": "apps/web/app/api/coaching/focus/route.ts",
    "operationId": "get_api_coaching_focus",
    "family": "coaching",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/coaching/focus",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [
      "parseSearchParams"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "M15"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/coaching/focus/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/coaching/latest": {
    "key": "GET /api/coaching/latest",
    "method": "GET",
    "routePath": "/api/coaching/latest",
    "routeFile": "apps/web/app/api/coaching/latest/route.ts",
    "operationId": "get_api_coaching_latest",
    "family": "coaching",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": true,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/coaching/latest",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [
      "parseSearchParams"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "GET",
      "M15"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/coaching/latest/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/dashboard/{asset}": {
    "key": "GET /api/dashboard/{asset}",
    "method": "GET",
    "routePath": "/api/dashboard/{asset}",
    "routeFile": "apps/web/app/api/dashboard/[asset]/route.ts",
    "operationId": "get_api_dashboard_asset",
    "family": "dashboard",
    "classification": "kick_off_allowed",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "dashboard.basic_or_focus_slice",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "kick_off_allowed",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "dashboard.basic_or_focus_slice",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": false,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": []
    },
    "runtimeTestEvidence": {
      "routePath": "/api/dashboard/{asset}",
      "methodsTested": [
        "GET"
      ],
      "evidenceLevel": "direct_route",
      "testedAssertions": [
        "commercial_restriction_first",
        "entitlement_denied_before_payload"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "DashboardChartWorkspaceViewModel_or_KickOffDashboardViewModelV1",
    "pathParameters": [
      "asset"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/dashboard/[asset]/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/journal/analytics": {
    "key": "GET /api/journal/analytics",
    "method": "GET",
    "routePath": "/api/journal/analytics",
    "routeFile": "apps/web/app/api/journal/analytics/route.ts",
    "operationId": "get_api_journal_analytics",
    "family": "journal",
    "classification": "kick_off_allowed",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "journal.page",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "kick_off_allowed",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "journal.page",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": false,
      "targetUserReference": false,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": []
    },
    "runtimeTestEvidence": {
      "routePath": "/api/journal/analytics",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "handler_specific_json",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [
      401
    ],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/journal/analytics/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/journal/cases": {
    "key": "GET /api/journal/cases",
    "method": "GET",
    "routePath": "/api/journal/cases",
    "routeFile": "apps/web/app/api/journal/cases/route.ts",
    "operationId": "get_api_journal_cases",
    "family": "journal",
    "classification": "kick_off_allowed",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "journal.page",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "kick_off_allowed",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "journal.page",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/journal/cases",
      "methodsTested": [
        "GET",
        "POST"
      ],
      "evidenceLevel": "direct_route",
      "testedAssertions": [
        "idempotency_replay_or_conflict",
        "audit_or_security_decision_recorded",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "parsePositiveInt",
      "parseSearchParams",
      "validateJournalCreateDraftRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/journal/cases/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/journal/cases/{caseId}": {
    "key": "GET /api/journal/cases/{caseId}",
    "method": "GET",
    "routePath": "/api/journal/cases/{caseId}",
    "routeFile": "apps/web/app/api/journal/cases/[caseId]/route.ts",
    "operationId": "get_api_journal_cases_caseId",
    "family": "journal",
    "classification": "kick_off_allowed",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "journal.page",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "kick_off_allowed",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "journal.page",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/journal/cases/{caseId}",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "caseId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "not_found"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/journal/cases/[caseId]/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/journal/cases/{caseId}/replay": {
    "key": "GET /api/journal/cases/{caseId}/replay",
    "method": "GET",
    "routePath": "/api/journal/cases/{caseId}/replay",
    "routeFile": "apps/web/app/api/journal/cases/[caseId]/replay/route.ts",
    "operationId": "get_api_journal_cases_caseId_replay",
    "family": "journal",
    "classification": "kick_off_allowed",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "journal.page",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "kick_off_allowed",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "journal.page",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/journal/cases/{caseId}/replay",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "caseId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "not_found"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/journal/cases/[caseId]/replay/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/journal/entries": {
    "key": "GET /api/journal/entries",
    "method": "GET",
    "routePath": "/api/journal/entries",
    "routeFile": "apps/web/app/api/journal/entries/route.ts",
    "operationId": "get_api_journal_entries",
    "family": "journal",
    "classification": "kick_off_allowed",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "journal.page",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "kick_off_allowed",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "journal.page",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": false,
      "targetUserReference": false,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": []
    },
    "runtimeTestEvidence": {
      "routePath": "/api/journal/entries",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "handler_specific_json",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody"
    ],
    "importedTypes": [
      "TradeJournalCreateInput"
    ],
    "explicitStatuses": [
      201,
      400,
      401
    ],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/journal/entries/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/journal/influence/latest": {
    "key": "GET /api/journal/influence/latest",
    "method": "GET",
    "routePath": "/api/journal/influence/latest",
    "routeFile": "apps/web/app/api/journal/influence/latest/route.ts",
    "operationId": "get_api_journal_influence_latest",
    "family": "journal",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/journal/influence/latest",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [
      "parseSearchParams"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "M15"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/journal/influence/latest/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/notifications/alerts": {
    "key": "GET /api/notifications/alerts",
    "method": "GET",
    "routePath": "/api/notifications/alerts",
    "routeFile": "apps/web/app/api/notifications/alerts/route.ts",
    "operationId": "get_api_notifications_alerts",
    "family": "notifications",
    "classification": "notification_preference_owner_only",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "notification_preferences",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "notification_preference_owner_only",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "notification_preferences",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": false,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/notifications/alerts",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseAlert",
      "parseJsonBody"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/notifications/alerts/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/notifications/health": {
    "key": "GET /api/notifications/health",
    "method": "GET",
    "routePath": "/api/notifications/health",
    "routeFile": "apps/web/app/api/notifications/health/route.ts",
    "operationId": "get_api_notifications_health",
    "family": "notifications",
    "classification": "no_product_entitlement_required",
    "runtimeExpectation": "explicitly_not_applicable",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "not_applicable",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "none",
    "declaredPolicyExpectation": {
      "classification": "no_product_entitlement_required",
      "runtimeExpectation": "explicitly_not_applicable",
      "productEntitlement": "none",
      "ownerBoundary": "not_applicable",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "none"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/notifications/health",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "framework/non-product route family",
      "testedAssertions": []
    },
    "testCoverageStatus": "explicitly_not_applicable",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/notifications/health/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/notifications/inbox": {
    "key": "GET /api/notifications/inbox",
    "method": "GET",
    "routePath": "/api/notifications/inbox",
    "routeFile": "apps/web/app/api/notifications/inbox/route.ts",
    "operationId": "get_api_notifications_inbox",
    "family": "notifications",
    "classification": "notification_preference_owner_only",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "notification_preferences",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "notification_preference_owner_only",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "notification_preferences",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/notifications/inbox",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [
      "parsePositiveInt",
      "parseSearchParams"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/notifications/inbox/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/notifications/subscriptions": {
    "key": "GET /api/notifications/subscriptions",
    "method": "GET",
    "routePath": "/api/notifications/subscriptions",
    "routeFile": "apps/web/app/api/notifications/subscriptions/route.ts",
    "operationId": "get_api_notifications_subscriptions",
    "family": "notifications",
    "classification": "notification_preference_owner_only",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "notification_preferences",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "notification_preference_owner_only",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "notification_preferences",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/notifications/subscriptions",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateSubscriptionCreateRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/notifications/subscriptions/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/notifications/summary": {
    "key": "GET /api/notifications/summary",
    "method": "GET",
    "routePath": "/api/notifications/summary",
    "routeFile": "apps/web/app/api/notifications/summary/route.ts",
    "operationId": "get_api_notifications_summary",
    "family": "notifications",
    "classification": "notification_preference_owner_only",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "notification_preferences",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "notification_preference_owner_only",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "notification_preferences",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": true,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/notifications/summary",
      "methodsTested": [
        "GET"
      ],
      "evidenceLevel": "direct_route",
      "testedAssertions": [
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "GET"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/notifications/summary/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/notifications/targets": {
    "key": "GET /api/notifications/targets",
    "method": "GET",
    "routePath": "/api/notifications/targets",
    "routeFile": "apps/web/app/api/notifications/targets/route.ts",
    "operationId": "get_api_notifications_targets",
    "family": "notifications",
    "classification": "notification_preference_owner_only",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "notification_preferences",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "notification_preference_owner_only",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "notification_preferences",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/notifications/targets",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateTargetCreateRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/notifications/targets/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/portfolio/actions": {
    "key": "GET /api/portfolio/actions",
    "method": "GET",
    "routePath": "/api/portfolio/actions",
    "routeFile": "apps/web/app/api/portfolio/actions/route.ts",
    "operationId": "get_api_portfolio_actions",
    "family": "portfolio",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/portfolio/actions",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "parsePositiveInt",
      "parseSearchParams",
      "validateActionCreateRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/portfolio/actions/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/portfolio/actions/{actionId}": {
    "key": "GET /api/portfolio/actions/{actionId}",
    "method": "GET",
    "routePath": "/api/portfolio/actions/{actionId}",
    "routeFile": "apps/web/app/api/portfolio/actions/[actionId]/route.ts",
    "operationId": "get_api_portfolio_actions_actionId",
    "family": "portfolio",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/portfolio/actions/{actionId}",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "actionId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateActionUpdateRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "PATCH",
      "not_found"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/portfolio/actions/[actionId]/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/portfolio/attention": {
    "key": "GET /api/portfolio/attention",
    "method": "GET",
    "routePath": "/api/portfolio/attention",
    "routeFile": "apps/web/app/api/portfolio/attention/route.ts",
    "operationId": "get_api_portfolio_attention",
    "family": "portfolio",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/portfolio/attention",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/portfolio/attention/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/portfolio/positions": {
    "key": "GET /api/portfolio/positions",
    "method": "GET",
    "routePath": "/api/portfolio/positions",
    "routeFile": "apps/web/app/api/portfolio/positions/route.ts",
    "operationId": "get_api_portfolio_positions",
    "family": "portfolio",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/portfolio/positions",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "parsePositiveInt",
      "parseSearchParams",
      "validatePositionCreateRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/portfolio/positions/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/portfolio/positions/{positionId}": {
    "key": "GET /api/portfolio/positions/{positionId}",
    "method": "GET",
    "routePath": "/api/portfolio/positions/{positionId}",
    "routeFile": "apps/web/app/api/portfolio/positions/[positionId]/route.ts",
    "operationId": "get_api_portfolio_positions_positionId",
    "family": "portfolio",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/portfolio/positions/{positionId}",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "positionId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validatePositionUpdateRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "PATCH",
      "not_found"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/portfolio/positions/[positionId]/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/portfolio/replay": {
    "key": "GET /api/portfolio/replay",
    "method": "GET",
    "routePath": "/api/portfolio/replay",
    "routeFile": "apps/web/app/api/portfolio/replay/route.ts",
    "operationId": "get_api_portfolio_replay",
    "family": "portfolio",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/portfolio/replay",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [
      "parseSearchParams"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "not_found"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/portfolio/replay/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/portfolio/snapshot/current": {
    "key": "GET /api/portfolio/snapshot/current",
    "method": "GET",
    "routePath": "/api/portfolio/snapshot/current",
    "routeFile": "apps/web/app/api/portfolio/snapshot/current/route.ts",
    "operationId": "get_api_portfolio_snapshot_current",
    "family": "portfolio",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/portfolio/snapshot/current",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/portfolio/snapshot/current/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/portfolio/watchlist": {
    "key": "GET /api/portfolio/watchlist",
    "method": "GET",
    "routePath": "/api/portfolio/watchlist",
    "routeFile": "apps/web/app/api/portfolio/watchlist/route.ts",
    "operationId": "get_api_portfolio_watchlist",
    "family": "portfolio",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": true,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/portfolio/watchlist",
      "methodsTested": [
        "GET",
        "POST"
      ],
      "evidenceLevel": "direct_route",
      "testedAssertions": [
        "owner_boundary_enforced",
        "commercial_restriction_first",
        "idempotency_replay_or_conflict",
        "audit_or_security_decision_recorded"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "parsePositiveInt",
      "parseSearchParams",
      "validateWatchlistCreateRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "GET",
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/portfolio/watchlist/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/portfolio/watchlist/{entryId}": {
    "key": "GET /api/portfolio/watchlist/{entryId}",
    "method": "GET",
    "routePath": "/api/portfolio/watchlist/{entryId}",
    "routeFile": "apps/web/app/api/portfolio/watchlist/[entryId]/route.ts",
    "operationId": "get_api_portfolio_watchlist_entryId",
    "family": "portfolio",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/portfolio/watchlist/{entryId}",
      "methodsTested": [
        "PATCH"
      ],
      "evidenceLevel": "direct_route",
      "testedAssertions": [
        "owner_boundary_enforced",
        "idempotency_replay_or_conflict"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "entryId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateWatchlistUpdateRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "PATCH",
      "not_found"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/portfolio/watchlist/[entryId]/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/refresh/freshness": {
    "key": "GET /api/refresh/freshness",
    "method": "GET",
    "routePath": "/api/refresh/freshness",
    "routeFile": "apps/web/app/api/refresh/freshness/route.ts",
    "operationId": "get_api_refresh_freshness",
    "family": "refresh",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/refresh/freshness",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/refresh/freshness/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/refresh/history": {
    "key": "GET /api/refresh/history",
    "method": "GET",
    "routePath": "/api/refresh/history",
    "routeFile": "apps/web/app/api/refresh/history/route.ts",
    "operationId": "get_api_refresh_history",
    "family": "refresh",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/refresh/history",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [
      "parsePositiveInt",
      "parseSearchParams"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/refresh/history/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/refresh/latest": {
    "key": "GET /api/refresh/latest",
    "method": "GET",
    "routePath": "/api/refresh/latest",
    "routeFile": "apps/web/app/api/refresh/latest/route.ts",
    "operationId": "get_api_refresh_latest",
    "family": "refresh",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/refresh/latest",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/refresh/latest/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/workspace/agenda": {
    "key": "GET /api/workspace/agenda",
    "method": "GET",
    "routePath": "/api/workspace/agenda",
    "routeFile": "apps/web/app/api/workspace/agenda/route.ts",
    "operationId": "get_api_workspace_agenda",
    "family": "workspace",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/workspace/agenda",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/workspace/agenda/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/workspace/current": {
    "key": "GET /api/workspace/current",
    "method": "GET",
    "routePath": "/api/workspace/current",
    "routeFile": "apps/web/app/api/workspace/current/route.ts",
    "operationId": "get_api_workspace_current",
    "family": "workspace",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/workspace/current",
      "methodsTested": [
        "GET"
      ],
      "evidenceLevel": "direct_route",
      "testedAssertions": [
        "unauthenticated_denied",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/workspace/current/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/workspace/freshness": {
    "key": "GET /api/workspace/freshness",
    "method": "GET",
    "routePath": "/api/workspace/freshness",
    "routeFile": "apps/web/app/api/workspace/freshness/route.ts",
    "operationId": "get_api_workspace_freshness",
    "family": "workspace",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/workspace/freshness",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/workspace/freshness/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/workspace/history": {
    "key": "GET /api/workspace/history",
    "method": "GET",
    "routePath": "/api/workspace/history",
    "routeFile": "apps/web/app/api/workspace/history/route.ts",
    "operationId": "get_api_workspace_history",
    "family": "workspace",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/workspace/history",
      "methodsTested": [
        "GET"
      ],
      "evidenceLevel": "direct_route",
      "testedAssertions": [
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [
      "parsePositiveInt",
      "parseSearchParams"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/workspace/history/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "PATCH /api/account/preferences": {
    "key": "PATCH /api/account/preferences",
    "method": "PATCH",
    "routePath": "/api/account/preferences",
    "routeFile": "apps/web/app/api/account/preferences/route.ts",
    "operationId": "patch_api_account_preferences",
    "family": "account",
    "classification": "authenticated_basic",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "authenticated_basic",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": false,
      "targetUserReference": false,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/account/preferences",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "parseSettings"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/account/preferences/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "PATCH /api/account/profile/social-identifiers": {
    "key": "PATCH /api/account/profile/social-identifiers",
    "method": "PATCH",
    "routePath": "/api/account/profile/social-identifiers",
    "routeFile": "apps/web/app/api/account/profile/social-identifiers/route.ts",
    "operationId": "patch_api_account_profile_social_identifiers",
    "family": "account",
    "classification": "authenticated_basic",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "authenticated_basic",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/account/profile/social-identifiers",
      "methodsTested": [
        "GET",
        "PATCH"
      ],
      "evidenceLevel": "direct_route",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "validation_before_side_effect"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateUpdateUserSocialIdentifiersRequest"
    ],
    "importedTypes": [
      "CommercialProfileSocialIdentifier"
    ],
    "explicitStatuses": [
      503
    ],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/account/profile/social-identifiers/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "PATCH /api/account/watchlist": {
    "key": "PATCH /api/account/watchlist",
    "method": "PATCH",
    "routePath": "/api/account/watchlist",
    "routeFile": "apps/web/app/api/account/watchlist/route.ts",
    "operationId": "patch_api_account_watchlist",
    "family": "account",
    "classification": "authenticated_basic",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "authenticated_basic",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": false,
      "targetUserReference": false,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/account/watchlist",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "parseWatchlist"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/account/watchlist/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "PATCH /api/notifications/alerts": {
    "key": "PATCH /api/notifications/alerts",
    "method": "PATCH",
    "routePath": "/api/notifications/alerts",
    "routeFile": "apps/web/app/api/notifications/alerts/route.ts",
    "operationId": "patch_api_notifications_alerts",
    "family": "notifications",
    "classification": "notification_preference_owner_only",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "notification_preferences",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "notification_preference_owner_only",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "notification_preferences",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": false,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/notifications/alerts",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseAlert",
      "parseJsonBody"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/notifications/alerts/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "PATCH /api/notifications/subscriptions/{subscriptionId}": {
    "key": "PATCH /api/notifications/subscriptions/{subscriptionId}",
    "method": "PATCH",
    "routePath": "/api/notifications/subscriptions/{subscriptionId}",
    "routeFile": "apps/web/app/api/notifications/subscriptions/[subscriptionId]/route.ts",
    "operationId": "patch_api_notifications_subscriptions_subscriptionId",
    "family": "notifications",
    "classification": "notification_preference_owner_only",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "notification_preferences",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "notification_preference_owner_only",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "notification_preferences",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/notifications/subscriptions/{subscriptionId}",
      "methodsTested": [
        "PATCH"
      ],
      "evidenceLevel": "direct_route",
      "testedAssertions": [
        "owner_boundary_enforced",
        "idempotency_replay_or_conflict"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "subscriptionId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateSubscriptionUpdateRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "PATCH"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/notifications/subscriptions/[subscriptionId]/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "PATCH /api/portfolio/actions/{actionId}": {
    "key": "PATCH /api/portfolio/actions/{actionId}",
    "method": "PATCH",
    "routePath": "/api/portfolio/actions/{actionId}",
    "routeFile": "apps/web/app/api/portfolio/actions/[actionId]/route.ts",
    "operationId": "patch_api_portfolio_actions_actionId",
    "family": "portfolio",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/portfolio/actions/{actionId}",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "actionId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateActionUpdateRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "PATCH",
      "not_found"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/portfolio/actions/[actionId]/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "PATCH /api/portfolio/positions/{positionId}": {
    "key": "PATCH /api/portfolio/positions/{positionId}",
    "method": "PATCH",
    "routePath": "/api/portfolio/positions/{positionId}",
    "routeFile": "apps/web/app/api/portfolio/positions/[positionId]/route.ts",
    "operationId": "patch_api_portfolio_positions_positionId",
    "family": "portfolio",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/portfolio/positions/{positionId}",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "positionId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validatePositionUpdateRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "PATCH",
      "not_found"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/portfolio/positions/[positionId]/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "PATCH /api/portfolio/watchlist/{entryId}": {
    "key": "PATCH /api/portfolio/watchlist/{entryId}",
    "method": "PATCH",
    "routePath": "/api/portfolio/watchlist/{entryId}",
    "routeFile": "apps/web/app/api/portfolio/watchlist/[entryId]/route.ts",
    "operationId": "patch_api_portfolio_watchlist_entryId",
    "family": "portfolio",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/portfolio/watchlist/{entryId}",
      "methodsTested": [
        "PATCH"
      ],
      "evidenceLevel": "direct_route",
      "testedAssertions": [
        "owner_boundary_enforced",
        "idempotency_replay_or_conflict"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "entryId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateWatchlistUpdateRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "PATCH",
      "not_found"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/portfolio/watchlist/[entryId]/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/account/access-check": {
    "key": "POST /api/account/access-check",
    "method": "POST",
    "routePath": "/api/account/access-check",
    "routeFile": "apps/web/app/api/account/access-check/route.ts",
    "operationId": "post_api_account_access_check",
    "family": "account",
    "classification": "authenticated_basic",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "authenticated_basic",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/account/access-check",
      "methodsTested": [
        "POST"
      ],
      "evidenceLevel": "direct_route",
      "testedAssertions": [
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateAccountAccessCheckRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/account/access-check/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/account/onboarding": {
    "key": "POST /api/account/onboarding",
    "method": "POST",
    "routePath": "/api/account/onboarding",
    "routeFile": "apps/web/app/api/account/onboarding/route.ts",
    "operationId": "post_api_account_onboarding",
    "family": "account",
    "classification": "authenticated_basic",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "authenticated_basic",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": false,
      "targetUserReference": false,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/account/onboarding",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "parseOnboarding"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/account/onboarding/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/analytics/generate": {
    "key": "POST /api/analytics/generate",
    "method": "POST",
    "routePath": "/api/analytics/generate",
    "routeFile": "apps/web/app/api/analytics/generate/route.ts",
    "operationId": "post_api_analytics_generate",
    "family": "analytics",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/analytics/generate",
      "methodsTested": [
        "POST"
      ],
      "evidenceLevel": "direct_route",
      "testedAssertions": [
        "idempotency_replay_or_conflict",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseInt",
      "parseSearchParams"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "M15",
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/analytics/generate/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/billing/checkout": {
    "key": "POST /api/billing/checkout",
    "method": "POST",
    "routePath": "/api/billing/checkout",
    "routeFile": "apps/web/app/api/billing/checkout/route.ts",
    "operationId": "post_api_billing_checkout",
    "family": "billing",
    "classification": "blocked_live_activation",
    "runtimeExpectation": "blocked_or_disabled",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "payment_readiness",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "live_activation_blocked",
    "declaredPolicyExpectation": {
      "classification": "blocked_live_activation",
      "runtimeExpectation": "blocked_or_disabled",
      "productEntitlement": "payment_readiness",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "live_activation_blocked"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": false,
      "targetUserReference": false,
      "blockedLiveActivationReference": true,
      "helperWrapperEvidence": []
    },
    "runtimeTestEvidence": {
      "routePath": "/api/billing/checkout",
      "methodsTested": [],
      "evidenceLevel": "blocked",
      "testedAssertions": [
        "blocked_live_activation"
      ],
      "helperName": "blocked-live/readiness route behavior"
    },
    "testCoverageStatus": "blocked_or_disabled",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "handler_specific_json",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [
      "idempotency-key"
    ],
    "allowedHeaders": [
      "Idempotency-Key",
      "idempotency-key"
    ],
    "validators": [
      "parseJsonBody"
    ],
    "importedTypes": [],
    "explicitStatuses": [
      202,
      400,
      403,
      503
    ],
    "hasJsonBody": false,
    "errorTokens": [
      "UNAUTHORIZED",
      "unauthorized"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/billing/checkout/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/billing/portal": {
    "key": "POST /api/billing/portal",
    "method": "POST",
    "routePath": "/api/billing/portal",
    "routeFile": "apps/web/app/api/billing/portal/route.ts",
    "operationId": "post_api_billing_portal",
    "family": "billing",
    "classification": "payment_readiness_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "payment_readiness",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "payment_readiness_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "payment_readiness",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": false,
      "targetUserReference": false,
      "blockedLiveActivationReference": true,
      "helperWrapperEvidence": []
    },
    "runtimeTestEvidence": {
      "routePath": "/api/billing/portal",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "handler_specific_json",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "UNAUTHORIZED",
      "unauthorized"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/billing/portal/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "POST /api/coaching/generate": {
    "key": "POST /api/coaching/generate",
    "method": "POST",
    "routePath": "/api/coaching/generate",
    "routeFile": "apps/web/app/api/coaching/generate/route.ts",
    "operationId": "post_api_coaching_generate",
    "family": "coaching",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/coaching/generate",
      "methodsTested": [
        "POST"
      ],
      "evidenceLevel": "direct_route",
      "testedAssertions": [
        "idempotency_replay_or_conflict",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseSearchParams"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "M15",
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/coaching/generate/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/journal/cases": {
    "key": "POST /api/journal/cases",
    "method": "POST",
    "routePath": "/api/journal/cases",
    "routeFile": "apps/web/app/api/journal/cases/route.ts",
    "operationId": "post_api_journal_cases",
    "family": "journal",
    "classification": "kick_off_allowed",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "journal.page",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "kick_off_allowed",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "journal.page",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/journal/cases",
      "methodsTested": [
        "GET",
        "POST"
      ],
      "evidenceLevel": "direct_route",
      "testedAssertions": [
        "idempotency_replay_or_conflict",
        "audit_or_security_decision_recorded",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "parsePositiveInt",
      "parseSearchParams",
      "validateJournalCreateDraftRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/journal/cases/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/journal/cases/{caseId}/adjust": {
    "key": "POST /api/journal/cases/{caseId}/adjust",
    "method": "POST",
    "routePath": "/api/journal/cases/{caseId}/adjust",
    "routeFile": "apps/web/app/api/journal/cases/[caseId]/adjust/route.ts",
    "operationId": "post_api_journal_cases_caseId_adjust",
    "family": "journal",
    "classification": "kick_off_allowed",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "journal.page",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "kick_off_allowed",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "journal.page",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/journal/cases/{caseId}/adjust",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "caseId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateJournalAdjustExecutionRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/journal/cases/[caseId]/adjust/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/journal/cases/{caseId}/cancel": {
    "key": "POST /api/journal/cases/{caseId}/cancel",
    "method": "POST",
    "routePath": "/api/journal/cases/{caseId}/cancel",
    "routeFile": "apps/web/app/api/journal/cases/[caseId]/cancel/route.ts",
    "operationId": "post_api_journal_cases_caseId_cancel",
    "family": "journal",
    "classification": "kick_off_allowed",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "journal.page",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "kick_off_allowed",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "journal.page",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/journal/cases/{caseId}/cancel",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "caseId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateJournalCancelRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/journal/cases/[caseId]/cancel/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/journal/cases/{caseId}/close": {
    "key": "POST /api/journal/cases/{caseId}/close",
    "method": "POST",
    "routePath": "/api/journal/cases/{caseId}/close",
    "routeFile": "apps/web/app/api/journal/cases/[caseId]/close/route.ts",
    "operationId": "post_api_journal_cases_caseId_close",
    "family": "journal",
    "classification": "kick_off_allowed",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "journal.page",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "kick_off_allowed",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "journal.page",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/journal/cases/{caseId}/close",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "caseId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateJournalCloseRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/journal/cases/[caseId]/close/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/journal/cases/{caseId}/execute": {
    "key": "POST /api/journal/cases/{caseId}/execute",
    "method": "POST",
    "routePath": "/api/journal/cases/{caseId}/execute",
    "routeFile": "apps/web/app/api/journal/cases/[caseId]/execute/route.ts",
    "operationId": "post_api_journal_cases_caseId_execute",
    "family": "journal",
    "classification": "kick_off_allowed",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "journal.page",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "kick_off_allowed",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "journal.page",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/journal/cases/{caseId}/execute",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "caseId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateJournalExecuteRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/journal/cases/[caseId]/execute/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/journal/cases/{caseId}/partial-close": {
    "key": "POST /api/journal/cases/{caseId}/partial-close",
    "method": "POST",
    "routePath": "/api/journal/cases/{caseId}/partial-close",
    "routeFile": "apps/web/app/api/journal/cases/[caseId]/partial-close/route.ts",
    "operationId": "post_api_journal_cases_caseId_partial_close",
    "family": "journal",
    "classification": "kick_off_allowed",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "journal.page",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "kick_off_allowed",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "journal.page",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/journal/cases/{caseId}/partial-close",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "caseId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateJournalPartialCloseRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/journal/cases/[caseId]/partial-close/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/journal/cases/{caseId}/plan": {
    "key": "POST /api/journal/cases/{caseId}/plan",
    "method": "POST",
    "routePath": "/api/journal/cases/{caseId}/plan",
    "routeFile": "apps/web/app/api/journal/cases/[caseId]/plan/route.ts",
    "operationId": "post_api_journal_cases_caseId_plan",
    "family": "journal",
    "classification": "kick_off_allowed",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "journal.page",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "kick_off_allowed",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "journal.page",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/journal/cases/{caseId}/plan",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "caseId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateJournalPlanRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/journal/cases/[caseId]/plan/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/journal/cases/{caseId}/review": {
    "key": "POST /api/journal/cases/{caseId}/review",
    "method": "POST",
    "routePath": "/api/journal/cases/{caseId}/review",
    "routeFile": "apps/web/app/api/journal/cases/[caseId]/review/route.ts",
    "operationId": "post_api_journal_cases_caseId_review",
    "family": "journal",
    "classification": "kick_off_allowed",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "journal.page",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "kick_off_allowed",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "journal.page",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/journal/cases/{caseId}/review",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "caseId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateJournalReviewRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/journal/cases/[caseId]/review/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/journal/entries": {
    "key": "POST /api/journal/entries",
    "method": "POST",
    "routePath": "/api/journal/entries",
    "routeFile": "apps/web/app/api/journal/entries/route.ts",
    "operationId": "post_api_journal_entries",
    "family": "journal",
    "classification": "kick_off_allowed",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "journal.page",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "kick_off_allowed",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "journal.page",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": false,
      "targetUserReference": false,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": []
    },
    "runtimeTestEvidence": {
      "routePath": "/api/journal/entries",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "handler_specific_json",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody"
    ],
    "importedTypes": [
      "TradeJournalCreateInput"
    ],
    "explicitStatuses": [
      201,
      400,
      401
    ],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/journal/entries/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/journal/influence/generate": {
    "key": "POST /api/journal/influence/generate",
    "method": "POST",
    "routePath": "/api/journal/influence/generate",
    "routeFile": "apps/web/app/api/journal/influence/generate/route.ts",
    "operationId": "post_api_journal_influence_generate",
    "family": "journal",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/journal/influence/generate",
      "methodsTested": [
        "POST"
      ],
      "evidenceLevel": "direct_route",
      "testedAssertions": [
        "commercial_restriction_first",
        "entitlement_denied_before_payload",
        "side_effect_not_called_on_denial",
        "idempotency_replay_or_conflict"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseSearchParams"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "M15",
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/journal/influence/generate/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/notifications/subscriptions": {
    "key": "POST /api/notifications/subscriptions",
    "method": "POST",
    "routePath": "/api/notifications/subscriptions",
    "routeFile": "apps/web/app/api/notifications/subscriptions/route.ts",
    "operationId": "post_api_notifications_subscriptions",
    "family": "notifications",
    "classification": "notification_preference_owner_only",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "notification_preferences",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "notification_preference_owner_only",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "notification_preferences",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/notifications/subscriptions",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateSubscriptionCreateRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/notifications/subscriptions/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/notifications/targets": {
    "key": "POST /api/notifications/targets",
    "method": "POST",
    "routePath": "/api/notifications/targets",
    "routeFile": "apps/web/app/api/notifications/targets/route.ts",
    "operationId": "post_api_notifications_targets",
    "family": "notifications",
    "classification": "notification_preference_owner_only",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "notification_preferences",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "notification_preference_owner_only",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "notification_preferences",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/notifications/targets",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateTargetCreateRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/notifications/targets/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/notifications/targets/{targetId}/disable": {
    "key": "POST /api/notifications/targets/{targetId}/disable",
    "method": "POST",
    "routePath": "/api/notifications/targets/{targetId}/disable",
    "routeFile": "apps/web/app/api/notifications/targets/[targetId]/disable/route.ts",
    "operationId": "post_api_notifications_targets_targetId_disable",
    "family": "notifications",
    "classification": "notification_preference_owner_only",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "notification_preferences",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "notification_preference_owner_only",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "notification_preferences",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/notifications/targets/{targetId}/disable",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "targetId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/notifications/targets/[targetId]/disable/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "POST /api/notifications/targets/{targetId}/enable": {
    "key": "POST /api/notifications/targets/{targetId}/enable",
    "method": "POST",
    "routePath": "/api/notifications/targets/{targetId}/enable",
    "routeFile": "apps/web/app/api/notifications/targets/[targetId]/enable/route.ts",
    "operationId": "post_api_notifications_targets_targetId_enable",
    "family": "notifications",
    "classification": "notification_preference_owner_only",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "notification_preferences",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "notification_preference_owner_only",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "notification_preferences",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/notifications/targets/{targetId}/enable",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "targetId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/notifications/targets/[targetId]/enable/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "POST /api/notifications/verification/consume": {
    "key": "POST /api/notifications/verification/consume",
    "method": "POST",
    "routePath": "/api/notifications/verification/consume",
    "routeFile": "apps/web/app/api/notifications/verification/consume/route.ts",
    "operationId": "post_api_notifications_verification_consume",
    "family": "notifications",
    "classification": "notification_preference_owner_only",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "notification_preferences",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "notification_preference_owner_only",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "notification_preferences",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/notifications/verification/consume",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateVerificationConsumeRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/notifications/verification/consume/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/notifications/verification/issue": {
    "key": "POST /api/notifications/verification/issue",
    "method": "POST",
    "routePath": "/api/notifications/verification/issue",
    "routeFile": "apps/web/app/api/notifications/verification/issue/route.ts",
    "operationId": "post_api_notifications_verification_issue",
    "family": "notifications",
    "classification": "notification_preference_owner_only",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "notification_preferences",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "notification_preference_owner_only",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "notification_preferences",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/notifications/verification/issue",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateVerificationIssueRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/notifications/verification/issue/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/portfolio/actions": {
    "key": "POST /api/portfolio/actions",
    "method": "POST",
    "routePath": "/api/portfolio/actions",
    "routeFile": "apps/web/app/api/portfolio/actions/route.ts",
    "operationId": "post_api_portfolio_actions",
    "family": "portfolio",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/portfolio/actions",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "parsePositiveInt",
      "parseSearchParams",
      "validateActionCreateRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/portfolio/actions/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/portfolio/actions/{actionId}/complete": {
    "key": "POST /api/portfolio/actions/{actionId}/complete",
    "method": "POST",
    "routePath": "/api/portfolio/actions/{actionId}/complete",
    "routeFile": "apps/web/app/api/portfolio/actions/[actionId]/complete/route.ts",
    "operationId": "post_api_portfolio_actions_actionId_complete",
    "family": "portfolio",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/portfolio/actions/{actionId}/complete",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "actionId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/portfolio/actions/[actionId]/complete/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "POST /api/portfolio/actions/{actionId}/dismiss": {
    "key": "POST /api/portfolio/actions/{actionId}/dismiss",
    "method": "POST",
    "routePath": "/api/portfolio/actions/{actionId}/dismiss",
    "routeFile": "apps/web/app/api/portfolio/actions/[actionId]/dismiss/route.ts",
    "operationId": "post_api_portfolio_actions_actionId_dismiss",
    "family": "portfolio",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/portfolio/actions/{actionId}/dismiss",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "actionId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/portfolio/actions/[actionId]/dismiss/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "POST /api/portfolio/positions": {
    "key": "POST /api/portfolio/positions",
    "method": "POST",
    "routePath": "/api/portfolio/positions",
    "routeFile": "apps/web/app/api/portfolio/positions/route.ts",
    "operationId": "post_api_portfolio_positions",
    "family": "portfolio",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/portfolio/positions",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "parsePositiveInt",
      "parseSearchParams",
      "validatePositionCreateRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/portfolio/positions/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/portfolio/positions/{positionId}/cancel": {
    "key": "POST /api/portfolio/positions/{positionId}/cancel",
    "method": "POST",
    "routePath": "/api/portfolio/positions/{positionId}/cancel",
    "routeFile": "apps/web/app/api/portfolio/positions/[positionId]/cancel/route.ts",
    "operationId": "post_api_portfolio_positions_positionId_cancel",
    "family": "portfolio",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/portfolio/positions/{positionId}/cancel",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "positionId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validatePositionCancelRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/portfolio/positions/[positionId]/cancel/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/portfolio/positions/{positionId}/close": {
    "key": "POST /api/portfolio/positions/{positionId}/close",
    "method": "POST",
    "routePath": "/api/portfolio/positions/{positionId}/close",
    "routeFile": "apps/web/app/api/portfolio/positions/[positionId]/close/route.ts",
    "operationId": "post_api_portfolio_positions_positionId_close",
    "family": "portfolio",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/portfolio/positions/{positionId}/close",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "positionId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validatePositionCloseRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/portfolio/positions/[positionId]/close/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/portfolio/positions/{positionId}/open": {
    "key": "POST /api/portfolio/positions/{positionId}/open",
    "method": "POST",
    "routePath": "/api/portfolio/positions/{positionId}/open",
    "routeFile": "apps/web/app/api/portfolio/positions/[positionId]/open/route.ts",
    "operationId": "post_api_portfolio_positions_positionId_open",
    "family": "portfolio",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/portfolio/positions/{positionId}/open",
      "methodsTested": [
        "POST"
      ],
      "evidenceLevel": "direct_route",
      "testedAssertions": [
        "owner_boundary_enforced",
        "idempotency_replay_or_conflict",
        "audit_or_security_decision_recorded"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "positionId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validatePositionOpenRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/portfolio/positions/[positionId]/open/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/portfolio/positions/{positionId}/reduce": {
    "key": "POST /api/portfolio/positions/{positionId}/reduce",
    "method": "POST",
    "routePath": "/api/portfolio/positions/{positionId}/reduce",
    "routeFile": "apps/web/app/api/portfolio/positions/[positionId]/reduce/route.ts",
    "operationId": "post_api_portfolio_positions_positionId_reduce",
    "family": "portfolio",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/portfolio/positions/{positionId}/reduce",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "positionId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validatePositionReduceRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/portfolio/positions/[positionId]/reduce/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/portfolio/positions/{positionId}/thesis-health": {
    "key": "POST /api/portfolio/positions/{positionId}/thesis-health",
    "method": "POST",
    "routePath": "/api/portfolio/positions/{positionId}/thesis-health",
    "routeFile": "apps/web/app/api/portfolio/positions/[positionId]/thesis-health/route.ts",
    "operationId": "post_api_portfolio_positions_positionId_thesis_health",
    "family": "portfolio",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/portfolio/positions/{positionId}/thesis-health",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "positionId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validatePositionThesisHealthRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/portfolio/positions/[positionId]/thesis-health/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/portfolio/snapshot/generate": {
    "key": "POST /api/portfolio/snapshot/generate",
    "method": "POST",
    "routePath": "/api/portfolio/snapshot/generate",
    "routeFile": "apps/web/app/api/portfolio/snapshot/generate/route.ts",
    "operationId": "post_api_portfolio_snapshot_generate",
    "family": "portfolio",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/portfolio/snapshot/generate",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/portfolio/snapshot/generate/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "POST /api/portfolio/watchlist": {
    "key": "POST /api/portfolio/watchlist",
    "method": "POST",
    "routePath": "/api/portfolio/watchlist",
    "routeFile": "apps/web/app/api/portfolio/watchlist/route.ts",
    "operationId": "post_api_portfolio_watchlist",
    "family": "portfolio",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": true,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/portfolio/watchlist",
      "methodsTested": [
        "GET",
        "POST"
      ],
      "evidenceLevel": "direct_route",
      "testedAssertions": [
        "owner_boundary_enforced",
        "commercial_restriction_first",
        "idempotency_replay_or_conflict",
        "audit_or_security_decision_recorded"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "parsePositiveInt",
      "parseSearchParams",
      "validateWatchlistCreateRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "GET",
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/portfolio/watchlist/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/portfolio/watchlist/{entryId}/archive": {
    "key": "POST /api/portfolio/watchlist/{entryId}/archive",
    "method": "POST",
    "routePath": "/api/portfolio/watchlist/{entryId}/archive",
    "routeFile": "apps/web/app/api/portfolio/watchlist/[entryId]/archive/route.ts",
    "operationId": "post_api_portfolio_watchlist_entryId_archive",
    "family": "portfolio",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/portfolio/watchlist/{entryId}/archive",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "entryId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/portfolio/watchlist/[entryId]/archive/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "POST /api/portfolio/watchlist/{entryId}/status": {
    "key": "POST /api/portfolio/watchlist/{entryId}/status",
    "method": "POST",
    "routePath": "/api/portfolio/watchlist/{entryId}/status",
    "routeFile": "apps/web/app/api/portfolio/watchlist/[entryId]/status/route.ts",
    "operationId": "post_api_portfolio_watchlist_entryId_status",
    "family": "portfolio",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/portfolio/watchlist/{entryId}/status",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "entryId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateWatchlistStatusRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/portfolio/watchlist/[entryId]/status/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/portfolio/watchlist/{entryId}/thesis-health": {
    "key": "POST /api/portfolio/watchlist/{entryId}/thesis-health",
    "method": "POST",
    "routePath": "/api/portfolio/watchlist/{entryId}/thesis-health",
    "routeFile": "apps/web/app/api/portfolio/watchlist/[entryId]/thesis-health/route.ts",
    "operationId": "post_api_portfolio_watchlist_entryId_thesis_health",
    "family": "portfolio",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/portfolio/watchlist/{entryId}/thesis-health",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "entryId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateWatchlistThesisHealthRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/portfolio/watchlist/[entryId]/thesis-health/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/refresh/run": {
    "key": "POST /api/refresh/run",
    "method": "POST",
    "routePath": "/api/refresh/run",
    "routeFile": "apps/web/app/api/refresh/run/route.ts",
    "operationId": "post_api_refresh_run",
    "family": "refresh",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/refresh/run",
      "methodsTested": [
        "POST"
      ],
      "evidenceLevel": "direct_route",
      "testedAssertions": [
        "idempotency_replay_or_conflict",
        "audit_or_security_decision_recorded",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateWorkspaceRefreshRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/refresh/run/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/workspace/refresh": {
    "key": "POST /api/workspace/refresh",
    "method": "POST",
    "routePath": "/api/workspace/refresh",
    "routeFile": "apps/web/app/api/workspace/refresh/route.ts",
    "operationId": "post_api_workspace_refresh",
    "family": "workspace",
    "classification": "focus_plan_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "focus_plan",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "focus_plan_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "focus_plan",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/workspace/refresh",
      "methodsTested": [
        "POST"
      ],
      "evidenceLevel": "direct_route",
      "testedAssertions": [
        "validation_before_side_effect",
        "idempotency_replay_or_conflict",
        "audit_or_security_decision_recorded",
        "commercial_restriction_first"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateWorkspaceRefreshRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/workspace/refresh/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "PUT /api/notifications/push/subscription": {
    "key": "PUT /api/notifications/push/subscription",
    "method": "PUT",
    "routePath": "/api/notifications/push/subscription",
    "routeFile": "apps/web/app/api/notifications/push/subscription/route.ts",
    "operationId": "put_api_notifications_push_subscription",
    "family": "notifications",
    "classification": "notification_preference_owner_only",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "user_ui",
    "browserSafe": true,
    "ownerBoundary": "required",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "notification_preferences",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "notification_preference_owner_only",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "notification_preferences",
      "ownerBoundary": "required",
      "targetUserBoundary": "not_applicable",
      "internalToken": "not_required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": false,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/notifications/push/subscription",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "authenticated owner subject route family",
      "testedAssertions": [
        "unauthenticated_denied",
        "owner_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "middleware_guarded",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseBody",
      "parseJsonBody"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "DELETE",
      "PUT"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/notifications/push/subscription/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  }
} as const;
