/**
 * AUTO-GENERATED. DO NOT EDIT.
 * Source: Elceo23x4/Elceo-Mi@771487b46874afc28a21f260a2c12f92bfe8f736
 * Frozen functional tree: 6f81f55269031e0ec6467cd60283593dd5b7c2d3
 * Input: contracts/backend/openapi.json (sha256:c6d2fdedbf0535258f695ed19e6e2028c38b39eae4fe14c513d8273fccfa24ae)
 * Generator: @hey-api/openapi-ts@0.99.0 (type-only output)
 * Regenerate: npm run generate:m2-contracts
 */
import 'server-only';

export const operationRegistry = {
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
  "GET /api/admin/audit": {
    "key": "GET /api/admin/audit",
    "method": "GET",
    "routePath": "/api/admin/audit",
    "routeFile": "apps/web/app/api/admin/audit/route.ts",
    "operationId": "get_api_admin_audit",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": true,
      "ownerSubjectReference": false,
      "targetUserReference": false,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/audit",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [
      "limit"
    ],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/audit/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/admin/billing/operations/failures": {
    "key": "GET /api/admin/billing/operations/failures",
    "method": "GET",
    "routePath": "/api/admin/billing/operations/failures",
    "routeFile": "apps/web/app/api/admin/billing/operations/failures/route.ts",
    "operationId": "get_api_admin_billing_operations_failures",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
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
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/billing/operations/failures",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [
      "limit"
    ],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [
      "parseInt"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/billing/operations/failures/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/admin/billing/operations/retry-candidates": {
    "key": "GET /api/admin/billing/operations/retry-candidates",
    "method": "GET",
    "routePath": "/api/admin/billing/operations/retry-candidates",
    "routeFile": "apps/web/app/api/admin/billing/operations/retry-candidates/route.ts",
    "operationId": "get_api_admin_billing_operations_retry_candidates",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
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
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/billing/operations/retry-candidates",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [
      "limit"
    ],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [
      "parseInt"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/billing/operations/retry-candidates/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/admin/billing/operations/subject": {
    "key": "GET /api/admin/billing/operations/subject",
    "method": "GET",
    "routePath": "/api/admin/billing/operations/subject",
    "routeFile": "apps/web/app/api/admin/billing/operations/subject/route.ts",
    "operationId": "get_api_admin_billing_operations_subject",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "required",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "required",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": false,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/billing/operations/subject",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required",
        "target_user_boundary_enforced"
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
      "parseAdminBillingPolicySubjectQuery"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/billing/operations/subject/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/admin/billing/operations/summary": {
    "key": "GET /api/admin/billing/operations/summary",
    "method": "GET",
    "routePath": "/api/admin/billing/operations/summary",
    "routeFile": "apps/web/app/api/admin/billing/operations/summary/route.ts",
    "operationId": "get_api_admin_billing_operations_summary",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
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
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/billing/operations/summary",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
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
      "routeFile": "apps/web/app/api/admin/billing/operations/summary/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/admin/billing/orchestration/latest": {
    "key": "GET /api/admin/billing/orchestration/latest",
    "method": "GET",
    "routePath": "/api/admin/billing/orchestration/latest",
    "routeFile": "apps/web/app/api/admin/billing/orchestration/latest/route.ts",
    "operationId": "get_api_admin_billing_orchestration_latest",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": false,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/billing/orchestration/latest",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
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
      "parseAdminBillingOrchestrationSubjectQuery"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/billing/orchestration/latest/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/admin/billing/orchestration/runs": {
    "key": "GET /api/admin/billing/orchestration/runs",
    "method": "GET",
    "routePath": "/api/admin/billing/orchestration/runs",
    "routeFile": "apps/web/app/api/admin/billing/orchestration/runs/route.ts",
    "operationId": "get_api_admin_billing_orchestration_runs",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": false,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/billing/orchestration/runs",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
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
      "parseAdminBillingOrchestrationRunsQuery"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/billing/orchestration/runs/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/admin/billing/orchestration/subject": {
    "key": "GET /api/admin/billing/orchestration/subject",
    "method": "GET",
    "routePath": "/api/admin/billing/orchestration/subject",
    "routeFile": "apps/web/app/api/admin/billing/orchestration/subject/route.ts",
    "operationId": "get_api_admin_billing_orchestration_subject",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "required",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "required",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": false,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/billing/orchestration/subject",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required",
        "target_user_boundary_enforced"
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
      "parseAdminBillingOrchestrationSubjectQuery"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/billing/orchestration/subject/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/admin/billing/policy": {
    "key": "GET /api/admin/billing/policy",
    "method": "GET",
    "routePath": "/api/admin/billing/policy",
    "routeFile": "apps/web/app/api/admin/billing/policy/route.ts",
    "operationId": "get_api_admin_billing_policy",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": false,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": false,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/billing/policy",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
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
      "parseAdminBillingPolicySubjectQuery"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/billing/policy/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/admin/billing/policy/transitions": {
    "key": "GET /api/admin/billing/policy/transitions",
    "method": "GET",
    "routePath": "/api/admin/billing/policy/transitions",
    "routeFile": "apps/web/app/api/admin/billing/policy/transitions/route.ts",
    "operationId": "get_api_admin_billing_policy_transitions",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": false,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": false,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/billing/policy/transitions",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
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
      "parseAdminBillingPolicyTransitionsQuery"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/billing/policy/transitions/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/admin/billing/provider-events": {
    "key": "GET /api/admin/billing/provider-events",
    "method": "GET",
    "routePath": "/api/admin/billing/provider-events",
    "routeFile": "apps/web/app/api/admin/billing/provider-events/route.ts",
    "operationId": "get_api_admin_billing_provider_events",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "environment_verification_required",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "live_activation_blocked",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "environment_verification_required",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "live_activation_blocked"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": false,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/billing/provider-events",
      "methodsTested": [],
      "evidenceLevel": "environment",
      "testedAssertions": [
        "internal_token_required"
      ],
      "helperName": "environment verification: provider event provenance"
    },
    "testCoverageStatus": "environment_verification_required",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [
      "parseAdminBillingProviderEventsQuery"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/billing/provider-events/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/admin/billing/provider-plan-mappings": {
    "key": "GET /api/admin/billing/provider-plan-mappings",
    "method": "GET",
    "routePath": "/api/admin/billing/provider-plan-mappings",
    "routeFile": "apps/web/app/api/admin/billing/provider-plan-mappings/route.ts",
    "operationId": "get_api_admin_billing_provider_plan_mappings",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
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
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/billing/provider-plan-mappings",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [
      "providerKind"
    ],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/billing/provider-plan-mappings/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/admin/commercial/metrics": {
    "key": "GET /api/admin/commercial/metrics",
    "method": "GET",
    "routePath": "/api/admin/commercial/metrics",
    "routeFile": "apps/web/app/api/admin/commercial/metrics/route.ts",
    "operationId": "get_api_admin_commercial_metrics",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
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
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/commercial/metrics",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [
      "asOf",
      "period"
    ],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [
      "validateSuperAdminMetricsQuery"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "USD",
      "validation_error"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/commercial/metrics/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/admin/commercial/users/{userId}/control-snapshot": {
    "key": "GET /api/admin/commercial/users/{userId}/control-snapshot",
    "method": "GET",
    "routePath": "/api/admin/commercial/users/{userId}/control-snapshot",
    "routeFile": "apps/web/app/api/admin/commercial/users/[userId]/control-snapshot/route.ts",
    "operationId": "get_api_admin_commercial_users_userId_control_snapshot",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "admin_target",
    "targetUserBoundary": "required",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "admin_target",
      "targetUserBoundary": "required",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
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
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/commercial/users/{userId}/control-snapshot",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required",
        "target_user_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "userId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [
      503
    ],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/commercial/users/[userId]/control-snapshot/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/admin/freshness": {
    "key": "GET /api/admin/freshness",
    "method": "GET",
    "routePath": "/api/admin/freshness",
    "routeFile": "apps/web/app/api/admin/freshness/route.ts",
    "operationId": "get_api_admin_freshness",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
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
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/freshness",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
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
      "routeFile": "apps/web/app/api/admin/freshness/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/admin/market-evidence/cognition": {
    "key": "GET /api/admin/market-evidence/cognition",
    "method": "GET",
    "routePath": "/api/admin/market-evidence/cognition",
    "routeFile": "apps/web/app/api/admin/market-evidence/cognition/route.ts",
    "operationId": "get_api_admin_market_evidence_cognition",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
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
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/market-evidence/cognition",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
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
      "parseMarketCognitionQuery"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/market-evidence/cognition/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/admin/market-evidence/inspection": {
    "key": "GET /api/admin/market-evidence/inspection",
    "method": "GET",
    "routePath": "/api/admin/market-evidence/inspection",
    "routeFile": "apps/web/app/api/admin/market-evidence/inspection/route.ts",
    "operationId": "get_api_admin_market_evidence_inspection",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
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
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/market-evidence/inspection",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
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
      "routeFile": "apps/web/app/api/admin/market-evidence/inspection/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/admin/market-evidence/payload-replay": {
    "key": "GET /api/admin/market-evidence/payload-replay",
    "method": "GET",
    "routePath": "/api/admin/market-evidence/payload-replay",
    "routeFile": "apps/web/app/api/admin/market-evidence/payload-replay/route.ts",
    "operationId": "get_api_admin_market_evidence_payload_replay",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
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
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/market-evidence/payload-replay",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [
      "payloadId"
    ],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/market-evidence/payload-replay/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/admin/market-evidence/payloads": {
    "key": "GET /api/admin/market-evidence/payloads",
    "method": "GET",
    "routePath": "/api/admin/market-evidence/payloads",
    "routeFile": "apps/web/app/api/admin/market-evidence/payloads/route.ts",
    "operationId": "get_api_admin_market_evidence_payloads",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
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
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/market-evidence/payloads",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
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
      "parseMarketEvidencePayloadQuery"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/market-evidence/payloads/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/admin/market-evidence/provider-request": {
    "key": "GET /api/admin/market-evidence/provider-request",
    "method": "GET",
    "routePath": "/api/admin/market-evidence/provider-request",
    "routeFile": "apps/web/app/api/admin/market-evidence/provider-request/route.ts",
    "operationId": "get_api_admin_market_evidence_provider_request",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
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
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/market-evidence/provider-request",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
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
      "parseProviderReplayQuery"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/market-evidence/provider-request/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/admin/market-evidence/provider-response": {
    "key": "GET /api/admin/market-evidence/provider-response",
    "method": "GET",
    "routePath": "/api/admin/market-evidence/provider-response",
    "routeFile": "apps/web/app/api/admin/market-evidence/provider-response/route.ts",
    "operationId": "get_api_admin_market_evidence_provider_response",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
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
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/market-evidence/provider-response",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
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
      "parseProviderReplayQuery"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/market-evidence/provider-response/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/admin/market-evidence/quality": {
    "key": "GET /api/admin/market-evidence/quality",
    "method": "GET",
    "routePath": "/api/admin/market-evidence/quality",
    "routeFile": "apps/web/app/api/admin/market-evidence/quality/route.ts",
    "operationId": "get_api_admin_market_evidence_quality",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
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
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/market-evidence/quality",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
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
      "parseEvidenceQualityQuery"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/market-evidence/quality/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/admin/market-evidence/reasoning-input": {
    "key": "GET /api/admin/market-evidence/reasoning-input",
    "method": "GET",
    "routePath": "/api/admin/market-evidence/reasoning-input",
    "routeFile": "apps/web/app/api/admin/market-evidence/reasoning-input/route.ts",
    "operationId": "get_api_admin_market_evidence_reasoning_input",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
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
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/market-evidence/reasoning-input",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
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
      "parseReasoningInputQuery"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/market-evidence/reasoning-input/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/admin/market-evidence/scheduled-ingestion/inspection": {
    "key": "GET /api/admin/market-evidence/scheduled-ingestion/inspection",
    "method": "GET",
    "routePath": "/api/admin/market-evidence/scheduled-ingestion/inspection",
    "routeFile": "apps/web/app/api/admin/market-evidence/scheduled-ingestion/inspection/route.ts",
    "operationId": "get_api_admin_market_evidence_scheduled_ingestion_inspection",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
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
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/market-evidence/scheduled-ingestion/inspection",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
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
      "routeFile": "apps/web/app/api/admin/market-evidence/scheduled-ingestion/inspection/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/admin/market-evidence/scheduled-ingestion/policies": {
    "key": "GET /api/admin/market-evidence/scheduled-ingestion/policies",
    "method": "GET",
    "routePath": "/api/admin/market-evidence/scheduled-ingestion/policies",
    "routeFile": "apps/web/app/api/admin/market-evidence/scheduled-ingestion/policies/route.ts",
    "operationId": "get_api_admin_market_evidence_scheduled_ingestion_policies",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
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
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/market-evidence/scheduled-ingestion/policies",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
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
      "parseScheduledIngestionPolicyQuery"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/market-evidence/scheduled-ingestion/policies/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/admin/market-evidence/scheduled-ingestion/replay": {
    "key": "GET /api/admin/market-evidence/scheduled-ingestion/replay",
    "method": "GET",
    "routePath": "/api/admin/market-evidence/scheduled-ingestion/replay",
    "routeFile": "apps/web/app/api/admin/market-evidence/scheduled-ingestion/replay/route.ts",
    "operationId": "get_api_admin_market_evidence_scheduled_ingestion_replay",
    "family": "admin",
    "classification": "admin_ops_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "admin_ops_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
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
      "routePath": "/api/admin/market-evidence/scheduled-ingestion/replay",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "parseScheduledIngestionReplayQuery",
      "validateInternalScheduledIngestionReplayRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/market-evidence/scheduled-ingestion/replay/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/admin/market-evidence/scheduled-ingestion/runs": {
    "key": "GET /api/admin/market-evidence/scheduled-ingestion/runs",
    "method": "GET",
    "routePath": "/api/admin/market-evidence/scheduled-ingestion/runs",
    "routeFile": "apps/web/app/api/admin/market-evidence/scheduled-ingestion/runs/route.ts",
    "operationId": "get_api_admin_market_evidence_scheduled_ingestion_runs",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
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
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/market-evidence/scheduled-ingestion/runs",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
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
      "parseScheduledIngestionRunQuery"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/market-evidence/scheduled-ingestion/runs/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/admin/market-evidence/weighted": {
    "key": "GET /api/admin/market-evidence/weighted",
    "method": "GET",
    "routePath": "/api/admin/market-evidence/weighted",
    "routeFile": "apps/web/app/api/admin/market-evidence/weighted/route.ts",
    "operationId": "get_api_admin_market_evidence_weighted",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
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
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/market-evidence/weighted",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
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
      "parseWeightedEvidenceQuery"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/market-evidence/weighted/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/admin/ops": {
    "key": "GET /api/admin/ops",
    "method": "GET",
    "routePath": "/api/admin/ops",
    "routeFile": "apps/web/app/api/admin/ops/route.ts",
    "operationId": "get_api_admin_ops",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
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
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/ops",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
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
      "routeFile": "apps/web/app/api/admin/ops/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/admin/providers": {
    "key": "GET /api/admin/providers",
    "method": "GET",
    "routePath": "/api/admin/providers",
    "routeFile": "apps/web/app/api/admin/providers/route.ts",
    "operationId": "get_api_admin_providers",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
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
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/providers",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
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
      "routeFile": "apps/web/app/api/admin/providers/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/admin/security/step-up/readiness": {
    "key": "GET /api/admin/security/step-up/readiness",
    "method": "GET",
    "routePath": "/api/admin/security/step-up/readiness",
    "routeFile": "apps/web/app/api/admin/security/step-up/readiness/route.ts",
    "operationId": "get_api_admin_security_step_up_readiness",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
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
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/security/step-up/readiness",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
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
      "routeFile": "apps/web/app/api/admin/security/step-up/readiness/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/admin/seo/feed": {
    "key": "GET /api/admin/seo/feed",
    "method": "GET",
    "routePath": "/api/admin/seo/feed",
    "routeFile": "apps/web/app/api/admin/seo/feed/route.ts",
    "operationId": "get_api_admin_seo_feed",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
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
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/seo/feed",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
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
      "parseSeoFeedQuery"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/seo/feed/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "GET /api/admin/seo/sitemap": {
    "key": "GET /api/admin/seo/sitemap",
    "method": "GET",
    "routePath": "/api/admin/seo/sitemap",
    "routeFile": "apps/web/app/api/admin/seo/sitemap/route.ts",
    "operationId": "get_api_admin_seo_sitemap",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
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
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/seo/sitemap",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "safe_method_only",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [
      "generatedAt"
    ],
    "headerReferences": [],
    "allowedHeaders": [],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/seo/sitemap/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "GET /api/admin/system-summary": {
    "key": "GET /api/admin/system-summary",
    "method": "GET",
    "routePath": "/api/admin/system-summary",
    "routeFile": "apps/web/app/api/admin/system-summary/route.ts",
    "operationId": "get_api_admin_system_summary",
    "family": "admin",
    "classification": "admin_read_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.read",
    "stepUp": "not_required",
    "idempotency": "not_required",
    "audit": "not_required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "read",
    "declaredPolicyExpectation": {
      "classification": "admin_read_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.read",
      "stepUp": "not_required",
      "idempotency": "not_required",
      "audit": "not_required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "read"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
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
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/system-summary",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
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
      "routeFile": "apps/web/app/api/admin/system-summary/route.ts",
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
  "GET /api/auth/{...nextauth}": {
    "key": "GET /api/auth/{...nextauth}",
    "method": "GET",
    "routePath": "/api/auth/{...nextauth}",
    "routeFile": "apps/web/app/api/auth/[...nextauth]/route.ts",
    "operationId": "get_api_auth_nextauth",
    "family": "auth",
    "classification": "no_product_entitlement_required",
    "runtimeExpectation": "explicitly_not_applicable",
    "uiAudience": "auth_framework",
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
      "authenticatedSubjectResolverCall": false,
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
      "routePath": "/api/auth/{...nextauth}",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "framework/non-product route family",
      "testedAssertions": []
    },
    "testCoverageStatus": "explicitly_not_applicable",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "authjs_framework_owned",
    "pathParameters": [
      "...nextauth"
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
      "routeFile": "apps/web/app/api/auth/[...nextauth]/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
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
  "POST /api/admin/billing/activate": {
    "key": "POST /api/admin/billing/activate",
    "method": "POST",
    "routePath": "/api/admin/billing/activate",
    "routeFile": "apps/web/app/api/admin/billing/activate/route.ts",
    "operationId": "post_api_admin_billing_activate",
    "family": "admin",
    "classification": "admin_ops_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "required",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "admin_ops_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "required",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": false,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": false,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/billing/activate",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required",
        "target_user_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateAdminBillingActivateRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/billing/activate/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/admin/billing/cancel-at-period-end": {
    "key": "POST /api/admin/billing/cancel-at-period-end",
    "method": "POST",
    "routePath": "/api/admin/billing/cancel-at-period-end",
    "routeFile": "apps/web/app/api/admin/billing/cancel-at-period-end/route.ts",
    "operationId": "post_api_admin_billing_cancel_at_period_end",
    "family": "admin",
    "classification": "admin_ops_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "required",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "admin_ops_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "required",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": false,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": false,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/billing/cancel-at-period-end",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required",
        "target_user_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateAdminBillingOccurredAtRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/billing/cancel-at-period-end/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/admin/billing/change-plan": {
    "key": "POST /api/admin/billing/change-plan",
    "method": "POST",
    "routePath": "/api/admin/billing/change-plan",
    "routeFile": "apps/web/app/api/admin/billing/change-plan/route.ts",
    "operationId": "post_api_admin_billing_change_plan",
    "family": "admin",
    "classification": "admin_ops_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "required",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "admin_ops_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "required",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": false,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": false,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/billing/change-plan",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required",
        "target_user_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateAdminBillingChangePlanRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/billing/change-plan/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/admin/billing/expire": {
    "key": "POST /api/admin/billing/expire",
    "method": "POST",
    "routePath": "/api/admin/billing/expire",
    "routeFile": "apps/web/app/api/admin/billing/expire/route.ts",
    "operationId": "post_api_admin_billing_expire",
    "family": "admin",
    "classification": "admin_ops_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "required",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "admin_ops_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "required",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": false,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": false,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/billing/expire",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required",
        "target_user_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateAdminBillingOccurredAtRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/billing/expire/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/admin/billing/past-due": {
    "key": "POST /api/admin/billing/past-due",
    "method": "POST",
    "routePath": "/api/admin/billing/past-due",
    "routeFile": "apps/web/app/api/admin/billing/past-due/route.ts",
    "operationId": "post_api_admin_billing_past_due",
    "family": "admin",
    "classification": "admin_ops_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "required",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "admin_ops_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "required",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": false,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": false,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/billing/past-due",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required",
        "target_user_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateAdminBillingOccurredAtRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/billing/past-due/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/admin/billing/pause": {
    "key": "POST /api/admin/billing/pause",
    "method": "POST",
    "routePath": "/api/admin/billing/pause",
    "routeFile": "apps/web/app/api/admin/billing/pause/route.ts",
    "operationId": "post_api_admin_billing_pause",
    "family": "admin",
    "classification": "admin_ops_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "required",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "admin_ops_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "required",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": false,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": false,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/billing/pause",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required",
        "target_user_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateAdminBillingOccurredAtRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/billing/pause/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/admin/billing/provider-plan-mapping": {
    "key": "POST /api/admin/billing/provider-plan-mapping",
    "method": "POST",
    "routePath": "/api/admin/billing/provider-plan-mapping",
    "routeFile": "apps/web/app/api/admin/billing/provider-plan-mapping/route.ts",
    "operationId": "post_api_admin_billing_provider_plan_mapping",
    "family": "admin",
    "classification": "admin_ops_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "admin_ops_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": false,
      "targetUserReference": false,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/billing/provider-plan-mapping",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateBillingProviderPlanMappingRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/billing/provider-plan-mapping/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/admin/billing/renew": {
    "key": "POST /api/admin/billing/renew",
    "method": "POST",
    "routePath": "/api/admin/billing/renew",
    "routeFile": "apps/web/app/api/admin/billing/renew/route.ts",
    "operationId": "post_api_admin_billing_renew",
    "family": "admin",
    "classification": "admin_ops_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "required",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "admin_ops_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "required",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": false,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": false,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/billing/renew",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required",
        "target_user_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateAdminBillingRenewRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/billing/renew/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/admin/billing/resume": {
    "key": "POST /api/admin/billing/resume",
    "method": "POST",
    "routePath": "/api/admin/billing/resume",
    "routeFile": "apps/web/app/api/admin/billing/resume/route.ts",
    "operationId": "post_api_admin_billing_resume",
    "family": "admin",
    "classification": "admin_ops_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "required",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "admin_ops_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "required",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": false,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": false,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/billing/resume",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required",
        "target_user_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateAdminBillingOccurredAtRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/billing/resume/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/admin/billing/trial": {
    "key": "POST /api/admin/billing/trial",
    "method": "POST",
    "routePath": "/api/admin/billing/trial",
    "routeFile": "apps/web/app/api/admin/billing/trial/route.ts",
    "operationId": "post_api_admin_billing_trial",
    "family": "admin",
    "classification": "admin_ops_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "required",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "admin_ops_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "required",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": false,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": false,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/billing/trial",
      "methodsTested": [
        "POST"
      ],
      "evidenceLevel": "direct_route",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required",
        "target_user_boundary_enforced",
        "idempotency_replay_or_conflict"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateAdminBillingTrialRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/billing/trial/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/admin/commercial/prices": {
    "key": "POST /api/admin/commercial/prices",
    "method": "POST",
    "routePath": "/api/admin/commercial/prices",
    "routeFile": "apps/web/app/api/admin/commercial/prices/route.ts",
    "operationId": "post_api_admin_commercial_prices",
    "family": "admin",
    "classification": "admin_ops_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "admin_ops_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": true,
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
      "routePath": "/api/admin/commercial/prices",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST",
      "forbidden",
      "validation_error"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/commercial/prices/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/admin/commercial/users/{userId}/gift-focus-plan": {
    "key": "POST /api/admin/commercial/users/{userId}/gift-focus-plan",
    "method": "POST",
    "routePath": "/api/admin/commercial/users/{userId}/gift-focus-plan",
    "routeFile": "apps/web/app/api/admin/commercial/users/[userId]/gift-focus-plan/route.ts",
    "operationId": "post_api_admin_commercial_users_userId_gift_focus_plan",
    "family": "admin",
    "classification": "super_admin_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "super_admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "admin_target",
    "targetUserBoundary": "required",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "super_admin",
    "stepUp": "required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "super_admin_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "admin_target",
      "targetUserBoundary": "required",
      "internalToken": "required",
      "adminPermission": "super_admin",
      "stepUp": "required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": true,
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
      "routePath": "/api/admin/commercial/users/{userId}/gift-focus-plan",
      "methodsTested": [
        "POST"
      ],
      "evidenceLevel": "direct_route",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required",
        "target_user_boundary_enforced",
        "step_up_required",
        "idempotency_replay_or_conflict",
        "audit_or_security_decision_recorded"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "userId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody"
    ],
    "importedTypes": [],
    "explicitStatuses": [
      503
    ],
    "hasJsonBody": false,
    "errorTokens": [
      "POST",
      "conflict",
      "forbidden",
      "validation_error"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/commercial/users/[userId]/gift-focus-plan/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/admin/commercial/users/{userId}/restrict": {
    "key": "POST /api/admin/commercial/users/{userId}/restrict",
    "method": "POST",
    "routePath": "/api/admin/commercial/users/{userId}/restrict",
    "routeFile": "apps/web/app/api/admin/commercial/users/[userId]/restrict/route.ts",
    "operationId": "post_api_admin_commercial_users_userId_restrict",
    "family": "admin",
    "classification": "super_admin_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "super_admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "admin_target",
    "targetUserBoundary": "required",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "super_admin",
    "stepUp": "required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "super_admin_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "admin_target",
      "targetUserBoundary": "required",
      "internalToken": "required",
      "adminPermission": "super_admin",
      "stepUp": "required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": true,
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
      "routePath": "/api/admin/commercial/users/{userId}/restrict",
      "methodsTested": [
        "POST"
      ],
      "evidenceLevel": "direct_route",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required",
        "target_user_boundary_enforced",
        "step_up_required",
        "idempotency_replay_or_conflict",
        "audit_or_security_decision_recorded"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "userId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody"
    ],
    "importedTypes": [],
    "explicitStatuses": [
      503
    ],
    "hasJsonBody": false,
    "errorTokens": [
      "POST",
      "conflict",
      "forbidden",
      "validation_error"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/commercial/users/[userId]/restrict/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/admin/commercial/users/{userId}/retract-focus-gift": {
    "key": "POST /api/admin/commercial/users/{userId}/retract-focus-gift",
    "method": "POST",
    "routePath": "/api/admin/commercial/users/{userId}/retract-focus-gift",
    "routeFile": "apps/web/app/api/admin/commercial/users/[userId]/retract-focus-gift/route.ts",
    "operationId": "post_api_admin_commercial_users_userId_retract_focus_gift",
    "family": "admin",
    "classification": "super_admin_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "super_admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "admin_target",
    "targetUserBoundary": "required",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "super_admin",
    "stepUp": "required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "super_admin_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "admin_target",
      "targetUserBoundary": "required",
      "internalToken": "required",
      "adminPermission": "super_admin",
      "stepUp": "required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": true,
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
      "routePath": "/api/admin/commercial/users/{userId}/retract-focus-gift",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required",
        "target_user_boundary_enforced",
        "step_up_required"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [
      "userId"
    ],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody"
    ],
    "importedTypes": [],
    "explicitStatuses": [
      503
    ],
    "hasJsonBody": false,
    "errorTokens": [
      "POST",
      "conflict",
      "forbidden",
      "not_found",
      "validation_error"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/commercial/users/[userId]/retract-focus-gift/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/admin/entitlements/override": {
    "key": "POST /api/admin/entitlements/override",
    "method": "POST",
    "routePath": "/api/admin/entitlements/override",
    "routeFile": "apps/web/app/api/admin/entitlements/override/route.ts",
    "operationId": "post_api_admin_entitlements_override",
    "family": "admin",
    "classification": "admin_ops_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "required",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "admin_ops_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "required",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": false,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": false,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/entitlements/override",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required",
        "target_user_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateAdminEntitlementOverrideRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/entitlements/override/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/admin/entitlements/plan": {
    "key": "POST /api/admin/entitlements/plan",
    "method": "POST",
    "routePath": "/api/admin/entitlements/plan",
    "routeFile": "apps/web/app/api/admin/entitlements/plan/route.ts",
    "operationId": "post_api_admin_entitlements_plan",
    "family": "admin",
    "classification": "admin_ops_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "required",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "admin_ops_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "required",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": false,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": false,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/entitlements/plan",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required",
        "target_user_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateAdminEntitlementPlanRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/entitlements/plan/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/admin/entitlements/state": {
    "key": "POST /api/admin/entitlements/state",
    "method": "POST",
    "routePath": "/api/admin/entitlements/state",
    "routeFile": "apps/web/app/api/admin/entitlements/state/route.ts",
    "operationId": "post_api_admin_entitlements_state",
    "family": "admin",
    "classification": "admin_ops_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "required",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "admin_ops_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "required",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": false,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": false,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/entitlements/state",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required",
        "target_user_boundary_enforced"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateAdminEntitlementStateRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/entitlements/state/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/admin/market-evidence/scheduled-ingestion/dry-run": {
    "key": "POST /api/admin/market-evidence/scheduled-ingestion/dry-run",
    "method": "POST",
    "routePath": "/api/admin/market-evidence/scheduled-ingestion/dry-run",
    "routeFile": "apps/web/app/api/admin/market-evidence/scheduled-ingestion/dry-run/route.ts",
    "operationId": "post_api_admin_market_evidence_scheduled_ingestion_dry_run",
    "family": "admin",
    "classification": "admin_ops_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "admin_ops_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": true,
      "targetUserReference": true,
      "blockedLiveActivationReference": true,
      "helperWrapperEvidence": [
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/market-evidence/scheduled-ingestion/dry-run",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateInternalScheduledIngestionDryRunRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/market-evidence/scheduled-ingestion/dry-run/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/admin/market-evidence/scheduled-ingestion/replay": {
    "key": "POST /api/admin/market-evidence/scheduled-ingestion/replay",
    "method": "POST",
    "routePath": "/api/admin/market-evidence/scheduled-ingestion/replay",
    "routeFile": "apps/web/app/api/admin/market-evidence/scheduled-ingestion/replay/route.ts",
    "operationId": "post_api_admin_market_evidence_scheduled_ingestion_replay",
    "family": "admin",
    "classification": "admin_ops_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "admin_ops_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
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
      "routePath": "/api/admin/market-evidence/scheduled-ingestion/replay",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "parseScheduledIngestionReplayQuery",
      "validateInternalScheduledIngestionReplayRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/market-evidence/scheduled-ingestion/replay/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/admin/security/step-up/challenge": {
    "key": "POST /api/admin/security/step-up/challenge",
    "method": "POST",
    "routePath": "/api/admin/security/step-up/challenge",
    "routeFile": "apps/web/app/api/admin/security/step-up/challenge/route.ts",
    "operationId": "post_api_admin_security_step_up_challenge",
    "family": "admin",
    "classification": "admin_ops_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "admin_ops_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": true,
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
      "routePath": "/api/admin/security/step-up/challenge",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateSuperAdminStepUpChallengeRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [
      503
    ],
    "hasJsonBody": false,
    "errorTokens": [
      "bad_request",
      "forbidden",
      "validation_error"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/security/step-up/challenge/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/admin/security/step-up/verify": {
    "key": "POST /api/admin/security/step-up/verify",
    "method": "POST",
    "routePath": "/api/admin/security/step-up/verify",
    "routeFile": "apps/web/app/api/admin/security/step-up/verify/route.ts",
    "operationId": "post_api_admin_security_step_up_verify",
    "family": "admin",
    "classification": "admin_ops_required",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "admin_server_bridge",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "admin_ops_required",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": true,
      "idempotencyKeyReference": false,
      "securityDecisionReference": false,
      "auditReference": false,
      "ownerSubjectReference": true,
      "targetUserReference": false,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/admin/security/step-up/verify",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "admin route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateSuperAdminStepUpVerificationRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [
      503
    ],
    "hasJsonBody": false,
    "errorTokens": [
      "validation_error"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/admin/security/step-up/verify/route.ts",
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
  "POST /api/auth/{...nextauth}": {
    "key": "POST /api/auth/{...nextauth}",
    "method": "POST",
    "routePath": "/api/auth/{...nextauth}",
    "routeFile": "apps/web/app/api/auth/[...nextauth]/route.ts",
    "operationId": "post_api_auth_nextauth",
    "family": "auth",
    "classification": "no_product_entitlement_required",
    "runtimeExpectation": "explicitly_not_applicable",
    "uiAudience": "auth_framework",
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
      "authenticatedSubjectResolverCall": false,
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
      "routePath": "/api/auth/{...nextauth}",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "framework/non-product route family",
      "testedAssertions": []
    },
    "testCoverageStatus": "explicitly_not_applicable",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "authjs_framework_owned",
    "pathParameters": [
      "...nextauth"
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
      "routeFile": "apps/web/app/api/auth/[...nextauth]/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "POST /api/auth/password-reset/confirm": {
    "key": "POST /api/auth/password-reset/confirm",
    "method": "POST",
    "routePath": "/api/auth/password-reset/confirm",
    "routeFile": "apps/web/app/api/auth/password-reset/confirm/route.ts",
    "operationId": "post_api_auth_password_reset_confirm",
    "family": "auth",
    "classification": "authenticated_basic",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "auth_framework",
    "browserSafe": true,
    "ownerBoundary": "not_applicable",
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
      "ownerBoundary": "not_applicable",
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
      "authenticatedSubjectResolverCall": false,
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
      "routePath": "/api/auth/password-reset/confirm",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "framework/non-product route family",
      "testedAssertions": []
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "authjs_framework_owned",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody"
    ],
    "importedTypes": [],
    "explicitStatuses": [
      400
    ],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/auth/password-reset/confirm/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/auth/password-reset/request": {
    "key": "POST /api/auth/password-reset/request",
    "method": "POST",
    "routePath": "/api/auth/password-reset/request",
    "routeFile": "apps/web/app/api/auth/password-reset/request/route.ts",
    "operationId": "post_api_auth_password_reset_request",
    "family": "auth",
    "classification": "authenticated_basic",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "auth_framework",
    "browserSafe": true,
    "ownerBoundary": "not_applicable",
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
      "ownerBoundary": "not_applicable",
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
      "authenticatedSubjectResolverCall": false,
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
      "routePath": "/api/auth/password-reset/request",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "framework/non-product route family",
      "testedAssertions": []
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "authjs_framework_owned",
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
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/auth/password-reset/request/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
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
  "POST /api/billing/webhook": {
    "key": "POST /api/billing/webhook",
    "method": "POST",
    "routePath": "/api/billing/webhook",
    "routeFile": "apps/web/app/api/billing/webhook/route.ts",
    "operationId": "post_api_billing_webhook",
    "family": "billing",
    "classification": "payment_readiness_required",
    "runtimeExpectation": "environment_verification_required",
    "uiAudience": "provider_webhook",
    "browserSafe": false,
    "ownerBoundary": "not_applicable",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "provider_webhook_signature",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "payment_readiness_required",
      "runtimeExpectation": "environment_verification_required",
      "productEntitlement": "provider_webhook_signature",
      "ownerBoundary": "not_applicable",
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
      "authenticatedSubjectResolverCall": false,
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
      "routePath": "/api/billing/webhook",
      "methodsTested": [],
      "evidenceLevel": "environment",
      "testedAssertions": [
        "internal_token_required"
      ],
      "helperName": "environment verification: provider event provenance"
    },
    "testCoverageStatus": "environment_verification_required",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "handler_specific_json",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [
      "stripe-signature"
    ],
    "allowedHeaders": [
      "Idempotency-Key",
      "stripe-signature"
    ],
    "validators": [
      "parseWebhookEvent",
      "validateStripeCommercialIdentity"
    ],
    "importedTypes": [],
    "explicitStatuses": [
      202,
      503
    ],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/billing/webhook/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/billing/webhook/korapay": {
    "key": "POST /api/billing/webhook/korapay",
    "method": "POST",
    "routePath": "/api/billing/webhook/korapay",
    "routeFile": "apps/web/app/api/billing/webhook/korapay/route.ts",
    "operationId": "post_api_billing_webhook_korapay",
    "family": "billing",
    "classification": "payment_readiness_required",
    "runtimeExpectation": "environment_verification_required",
    "uiAudience": "provider_webhook",
    "browserSafe": false,
    "ownerBoundary": "not_applicable",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "provider_webhook_signature",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "payment_readiness_required",
      "runtimeExpectation": "environment_verification_required",
      "productEntitlement": "provider_webhook_signature",
      "ownerBoundary": "not_applicable",
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
      "authenticatedSubjectResolverCall": false,
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
      "routePath": "/api/billing/webhook/korapay",
      "methodsTested": [],
      "evidenceLevel": "environment",
      "testedAssertions": [
        "internal_token_required"
      ],
      "helperName": "environment verification: provider event provenance"
    },
    "testCoverageStatus": "environment_verification_required",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "handler_specific_json",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [
      "x-korapay-signature"
    ],
    "allowedHeaders": [
      "Idempotency-Key",
      "x-korapay-signature"
    ],
    "validators": [
      "validateKoraTruth"
    ],
    "importedTypes": [],
    "explicitStatuses": [
      202,
      400,
      503
    ],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/billing/webhook/korapay/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
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
  "POST /api/internal/billing/orchestration/retry": {
    "key": "POST /api/internal/billing/orchestration/retry",
    "method": "POST",
    "routePath": "/api/internal/billing/orchestration/retry",
    "routeFile": "apps/web/app/api/internal/billing/orchestration/retry/route.ts",
    "operationId": "post_api_internal_billing_orchestration_retry",
    "family": "internal",
    "classification": "internal_only",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "server_internal",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "internal_only",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": false,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/internal/billing/orchestration/retry",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "internal/ops route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateInternalBillingOrchestrationRetryRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/internal/billing/orchestration/retry/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/internal/billing/policy/evaluate": {
    "key": "POST /api/internal/billing/policy/evaluate",
    "method": "POST",
    "routePath": "/api/internal/billing/policy/evaluate",
    "routeFile": "apps/web/app/api/internal/billing/policy/evaluate/route.ts",
    "operationId": "post_api_internal_billing_policy_evaluate",
    "family": "internal",
    "classification": "internal_only",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "server_internal",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "internal_only",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": false,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/internal/billing/policy/evaluate",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "internal/ops route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateInternalBillingPolicyEvaluateRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/internal/billing/policy/evaluate/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/internal/billing/provider-events": {
    "key": "POST /api/internal/billing/provider-events",
    "method": "POST",
    "routePath": "/api/internal/billing/provider-events",
    "routeFile": "apps/web/app/api/internal/billing/provider-events/route.ts",
    "operationId": "post_api_internal_billing_provider_events",
    "family": "internal",
    "classification": "internal_only",
    "runtimeExpectation": "environment_verification_required",
    "uiAudience": "server_internal",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "live_activation_blocked",
    "declaredPolicyExpectation": {
      "classification": "internal_only",
      "runtimeExpectation": "environment_verification_required",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "live_activation_blocked"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": false,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": false,
      "targetUserReference": false,
      "blockedLiveActivationReference": true,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/internal/billing/provider-events",
      "methodsTested": [],
      "evidenceLevel": "environment",
      "testedAssertions": [
        "internal_token_required"
      ],
      "helperName": "environment verification: provider event provenance"
    },
    "testCoverageStatus": "environment_verification_required",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateBillingProviderEventIngestRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/internal/billing/provider-events/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/internal/billing/provider-events/replay": {
    "key": "POST /api/internal/billing/provider-events/replay",
    "method": "POST",
    "routePath": "/api/internal/billing/provider-events/replay",
    "routeFile": "apps/web/app/api/internal/billing/provider-events/replay/route.ts",
    "operationId": "post_api_internal_billing_provider_events_replay",
    "family": "internal",
    "classification": "internal_only",
    "runtimeExpectation": "environment_verification_required",
    "uiAudience": "server_internal",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "live_activation_blocked",
    "declaredPolicyExpectation": {
      "classification": "internal_only",
      "runtimeExpectation": "environment_verification_required",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "live_activation_blocked"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
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
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/internal/billing/provider-events/replay",
      "methodsTested": [],
      "evidenceLevel": "environment",
      "testedAssertions": [
        "internal_token_required"
      ],
      "helperName": "environment verification: provider event provenance"
    },
    "testCoverageStatus": "environment_verification_required",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateBillingProviderEventReplayRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/internal/billing/provider-events/replay/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/internal/billing/reconcile": {
    "key": "POST /api/internal/billing/reconcile",
    "method": "POST",
    "routePath": "/api/internal/billing/reconcile",
    "routeFile": "apps/web/app/api/internal/billing/reconcile/route.ts",
    "operationId": "post_api_internal_billing_reconcile",
    "family": "internal",
    "classification": "internal_only",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "server_internal",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "internal_only",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": false,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/internal/billing/reconcile",
      "methodsTested": [
        "POST"
      ],
      "evidenceLevel": "direct_route",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required",
        "idempotency_replay_or_conflict"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateInternalBillingReconcileRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST",
      "not_found"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/internal/billing/reconcile/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/internal/billing/reconcile/retry": {
    "key": "POST /api/internal/billing/reconcile/retry",
    "method": "POST",
    "routePath": "/api/internal/billing/reconcile/retry",
    "routeFile": "apps/web/app/api/internal/billing/reconcile/retry/route.ts",
    "operationId": "post_api_internal_billing_reconcile_retry",
    "family": "internal",
    "classification": "internal_only",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "server_internal",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "internal_only",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": false,
      "targetUserReference": true,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/internal/billing/reconcile/retry",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "internal/ops route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateInternalBillingReconcileRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST",
      "unprocessable_entity"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/internal/billing/reconcile/retry/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "@elceo/schemas references in handler"
    }
  },
  "POST /api/internal/market-evidence/tiingo/fixture-ingest": {
    "key": "POST /api/internal/market-evidence/tiingo/fixture-ingest",
    "method": "POST",
    "routePath": "/api/internal/market-evidence/tiingo/fixture-ingest",
    "routeFile": "apps/web/app/api/internal/market-evidence/tiingo/fixture-ingest/route.ts",
    "operationId": "post_api_internal_market_evidence_tiingo_fixture_ingest",
    "family": "internal",
    "classification": "internal_only",
    "runtimeExpectation": "blocked_or_disabled",
    "uiAudience": "server_internal",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "live_activation_blocked",
    "declaredPolicyExpectation": {
      "classification": "internal_only",
      "runtimeExpectation": "blocked_or_disabled",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "live_activation_blocked"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
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
      "routePath": "/api/internal/market-evidence/tiingo/fixture-ingest",
      "methodsTested": [],
      "evidenceLevel": "blocked",
      "testedAssertions": [
        "blocked_live_activation"
      ],
      "helperName": "blocked-live/readiness route behavior"
    },
    "testCoverageStatus": "blocked_or_disabled",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody",
      "validateInternalTiingoFixtureIngestionRequest"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/internal/market-evidence/tiingo/fixture-ingest/route.ts",
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
  "POST /api/notifications/delivery/dispatch": {
    "key": "POST /api/notifications/delivery/dispatch",
    "method": "POST",
    "routePath": "/api/notifications/delivery/dispatch",
    "routeFile": "apps/web/app/api/notifications/delivery/dispatch/route.ts",
    "operationId": "post_api_notifications_delivery_dispatch",
    "family": "notifications",
    "classification": "blocked_live_activation",
    "runtimeExpectation": "blocked_or_disabled",
    "uiAudience": "user_ui",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "live_activation_blocked",
    "declaredPolicyExpectation": {
      "classification": "blocked_live_activation",
      "runtimeExpectation": "blocked_or_disabled",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "not_required",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "live_activation_blocked"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": false,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": false,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": false,
      "targetUserReference": false,
      "blockedLiveActivationReference": true,
      "helperWrapperEvidence": [
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/notifications/delivery/dispatch",
      "methodsTested": [
        "POST"
      ],
      "evidenceLevel": "blocked",
      "testedAssertions": [
        "internal_token_required",
        "blocked_live_activation",
        "idempotency_replay_or_conflict"
      ]
    },
    "testCoverageStatus": "blocked_or_disabled",
    "browserMutationBoundary": "explicit_exception",
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
      "routeFile": "apps/web/app/api/notifications/delivery/dispatch/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "POST /api/notifications/providers/postmark/webhook": {
    "key": "POST /api/notifications/providers/postmark/webhook",
    "method": "POST",
    "routePath": "/api/notifications/providers/postmark/webhook",
    "routeFile": "apps/web/app/api/notifications/providers/postmark/webhook/route.ts",
    "operationId": "post_api_notifications_providers_postmark_webhook",
    "family": "notifications",
    "classification": "no_product_entitlement_required",
    "runtimeExpectation": "environment_verification_required",
    "uiAudience": "provider_webhook",
    "browserSafe": false,
    "ownerBoundary": "not_applicable",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "provider_webhook_signature",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "no_product_entitlement_required",
      "runtimeExpectation": "environment_verification_required",
      "productEntitlement": "provider_webhook_signature",
      "ownerBoundary": "not_applicable",
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
      "authenticatedSubjectResolverCall": false,
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
      "routePath": "/api/notifications/providers/postmark/webhook",
      "methodsTested": [],
      "evidenceLevel": "environment",
      "testedAssertions": [
        "internal_token_required"
      ],
      "helperName": "environment verification: provider event provenance"
    },
    "testCoverageStatus": "environment_verification_required",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "handler_specific_json",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [
      "authorization"
    ],
    "allowedHeaders": [
      "Idempotency-Key",
      "authorization"
    ],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [
      400,
      401
    ],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/notifications/providers/postmark/webhook/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "POST /api/notifications/providers/resend/webhook": {
    "key": "POST /api/notifications/providers/resend/webhook",
    "method": "POST",
    "routePath": "/api/notifications/providers/resend/webhook",
    "routeFile": "apps/web/app/api/notifications/providers/resend/webhook/route.ts",
    "operationId": "post_api_notifications_providers_resend_webhook",
    "family": "notifications",
    "classification": "no_product_entitlement_required",
    "runtimeExpectation": "environment_verification_required",
    "uiAudience": "provider_webhook",
    "browserSafe": false,
    "ownerBoundary": "not_applicable",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "provider_webhook_signature",
    "internalToken": "not_required",
    "adminPermission": "not_required",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "no_product_entitlement_required",
      "runtimeExpectation": "environment_verification_required",
      "productEntitlement": "provider_webhook_signature",
      "ownerBoundary": "not_applicable",
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
      "authenticatedSubjectResolverCall": false,
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
      "routePath": "/api/notifications/providers/resend/webhook",
      "methodsTested": [],
      "evidenceLevel": "environment",
      "testedAssertions": [
        "internal_token_required"
      ],
      "helperName": "environment verification: provider event provenance"
    },
    "testCoverageStatus": "environment_verification_required",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "handler_specific_json",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [
      "svix-id",
      "svix-signature",
      "svix-timestamp"
    ],
    "allowedHeaders": [
      "Idempotency-Key",
      "svix-id",
      "svix-signature",
      "svix-timestamp"
    ],
    "validators": [],
    "importedTypes": [],
    "explicitStatuses": [
      400,
      401
    ],
    "hasJsonBody": false,
    "errorTokens": [],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/notifications/providers/resend/webhook/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
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
  "POST /api/ops/notifications/expire-verifications": {
    "key": "POST /api/ops/notifications/expire-verifications",
    "method": "POST",
    "routePath": "/api/ops/notifications/expire-verifications",
    "routeFile": "apps/web/app/api/ops/notifications/expire-verifications/route.ts",
    "operationId": "post_api_ops_notifications_expire_verifications",
    "family": "ops",
    "classification": "internal_only",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "server_internal",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "internal_only",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": false,
      "targetUserReference": false,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/ops/notifications/expire-verifications",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "internal/ops route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
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
      "routeFile": "apps/web/app/api/ops/notifications/expire-verifications/route.ts",
      "policyInventory": "apps/web/lib/server/access/route-policy-inventory.ts",
      "schemaAuthority": "handler/helper contract; field constraints unspecified where not statically provable"
    }
  },
  "POST /api/ops/notifications/process-feedback": {
    "key": "POST /api/ops/notifications/process-feedback",
    "method": "POST",
    "routePath": "/api/ops/notifications/process-feedback",
    "routeFile": "apps/web/app/api/ops/notifications/process-feedback/route.ts",
    "operationId": "post_api_ops_notifications_process_feedback",
    "family": "ops",
    "classification": "internal_only",
    "runtimeExpectation": "runtime_enforced",
    "uiAudience": "server_internal",
    "browserSafe": false,
    "ownerBoundary": "internal_operator",
    "targetUserBoundary": "not_applicable",
    "productEntitlement": "none",
    "internalToken": "required",
    "adminPermission": "admin.ops",
    "stepUp": "not_required",
    "idempotency": "required",
    "audit": "required",
    "commercialRestrictionFirst": "not_required",
    "sideEffectRisk": "mutation",
    "declaredPolicyExpectation": {
      "classification": "internal_only",
      "runtimeExpectation": "runtime_enforced",
      "productEntitlement": "none",
      "ownerBoundary": "internal_operator",
      "targetUserBoundary": "not_applicable",
      "internalToken": "required",
      "adminPermission": "admin.ops",
      "stepUp": "not_required",
      "idempotency": "required",
      "audit": "required",
      "commercialRestrictionFirst": "not_required",
      "sideEffectRisk": "mutation"
    },
    "handlerGuardEvidence": {
      "requiresInternalRequestCall": true,
      "requireFeatureAccessCall": true,
      "guardRouteCommercialEntitlementCall": false,
      "authenticatedSubjectResolverCall": true,
      "stepUpChallengeReference": false,
      "idempotencyKeyReference": true,
      "securityDecisionReference": true,
      "auditReference": true,
      "ownerSubjectReference": false,
      "targetUserReference": false,
      "blockedLiveActivationReference": false,
      "helperWrapperEvidence": [
        "requireFeatureAccess->requireAuthenticatedSubject+feature-decision",
        "requireSecurityDecision->idempotency+rate-limit+security-decision",
        "withApiErrorBoundary->safe-error-envelope"
      ]
    },
    "runtimeTestEvidence": {
      "routePath": "/api/ops/notifications/process-feedback",
      "methodsTested": [],
      "evidenceLevel": "helper_family",
      "helperName": "internal/ops route helper family",
      "testedAssertions": [
        "internal_token_required",
        "admin_permission_required"
      ]
    },
    "testCoverageStatus": "runtime_enforced",
    "browserMutationBoundary": "explicit_exception",
    "responseContract": "standard_api_envelope",
    "pathParameters": [],
    "queryParameters": [],
    "headerReferences": [],
    "allowedHeaders": [
      "Idempotency-Key"
    ],
    "validators": [
      "parseJsonBody"
    ],
    "importedTypes": [],
    "explicitStatuses": [],
    "hasJsonBody": false,
    "errorTokens": [
      "POST"
    ],
    "sourceProvenance": {
      "routeFile": "apps/web/app/api/ops/notifications/process-feedback/route.ts",
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

export type OperationKey = keyof typeof operationRegistry;
export type OperationPolicy<K extends OperationKey = OperationKey> = (typeof operationRegistry)[K];

export const browserUserOperationKeys = [
  "DELETE /api/notifications/push/subscription",
  "GET /api/account/access-decisions",
  "GET /api/account/billing",
  "GET /api/account/billing/events",
  "GET /api/account/billing/policy",
  "GET /api/account/billing/policy/transitions",
  "GET /api/account/billing/reconciliation-runs",
  "GET /api/account/entitlements",
  "GET /api/account/profile/social-identifiers",
  "GET /api/account/state",
  "GET /api/account/usage",
  "GET /api/analytics/latest",
  "GET /api/analytics/top-behaviors",
  "GET /api/analytics/top-setups",
  "GET /api/billing/intention",
  "GET /api/billing/subscription",
  "GET /api/coaching/action-plan",
  "GET /api/coaching/focus",
  "GET /api/coaching/latest",
  "GET /api/dashboard/{asset}",
  "GET /api/journal/analytics",
  "GET /api/journal/cases",
  "GET /api/journal/cases/{caseId}",
  "GET /api/journal/cases/{caseId}/replay",
  "GET /api/journal/entries",
  "GET /api/journal/influence/latest",
  "GET /api/notifications/alerts",
  "GET /api/notifications/health",
  "GET /api/notifications/inbox",
  "GET /api/notifications/subscriptions",
  "GET /api/notifications/summary",
  "GET /api/notifications/targets",
  "GET /api/portfolio/actions",
  "GET /api/portfolio/actions/{actionId}",
  "GET /api/portfolio/attention",
  "GET /api/portfolio/positions",
  "GET /api/portfolio/positions/{positionId}",
  "GET /api/portfolio/replay",
  "GET /api/portfolio/snapshot/current",
  "GET /api/portfolio/watchlist",
  "GET /api/portfolio/watchlist/{entryId}",
  "GET /api/refresh/freshness",
  "GET /api/refresh/history",
  "GET /api/refresh/latest",
  "GET /api/workspace/agenda",
  "GET /api/workspace/current",
  "GET /api/workspace/freshness",
  "GET /api/workspace/history",
  "PATCH /api/account/preferences",
  "PATCH /api/account/profile/social-identifiers",
  "PATCH /api/account/watchlist",
  "PATCH /api/notifications/alerts",
  "PATCH /api/notifications/subscriptions/{subscriptionId}",
  "PATCH /api/portfolio/actions/{actionId}",
  "PATCH /api/portfolio/positions/{positionId}",
  "PATCH /api/portfolio/watchlist/{entryId}",
  "POST /api/account/access-check",
  "POST /api/account/onboarding",
  "POST /api/analytics/generate",
  "POST /api/billing/checkout",
  "POST /api/billing/portal",
  "POST /api/coaching/generate",
  "POST /api/journal/cases",
  "POST /api/journal/cases/{caseId}/adjust",
  "POST /api/journal/cases/{caseId}/cancel",
  "POST /api/journal/cases/{caseId}/close",
  "POST /api/journal/cases/{caseId}/execute",
  "POST /api/journal/cases/{caseId}/partial-close",
  "POST /api/journal/cases/{caseId}/plan",
  "POST /api/journal/cases/{caseId}/review",
  "POST /api/journal/entries",
  "POST /api/journal/influence/generate",
  "POST /api/notifications/subscriptions",
  "POST /api/notifications/targets",
  "POST /api/notifications/targets/{targetId}/disable",
  "POST /api/notifications/targets/{targetId}/enable",
  "POST /api/notifications/verification/consume",
  "POST /api/notifications/verification/issue",
  "POST /api/portfolio/actions",
  "POST /api/portfolio/actions/{actionId}/complete",
  "POST /api/portfolio/actions/{actionId}/dismiss",
  "POST /api/portfolio/positions",
  "POST /api/portfolio/positions/{positionId}/cancel",
  "POST /api/portfolio/positions/{positionId}/close",
  "POST /api/portfolio/positions/{positionId}/open",
  "POST /api/portfolio/positions/{positionId}/reduce",
  "POST /api/portfolio/positions/{positionId}/thesis-health",
  "POST /api/portfolio/snapshot/generate",
  "POST /api/portfolio/watchlist",
  "POST /api/portfolio/watchlist/{entryId}/archive",
  "POST /api/portfolio/watchlist/{entryId}/status",
  "POST /api/portfolio/watchlist/{entryId}/thesis-health",
  "POST /api/refresh/run",
  "POST /api/workspace/refresh",
  "PUT /api/notifications/push/subscription"
] as const;
export const trustedServerOperationKeys = [
  "GET /api/admin/audit",
  "GET /api/admin/billing/operations/failures",
  "GET /api/admin/billing/operations/retry-candidates",
  "GET /api/admin/billing/operations/subject",
  "GET /api/admin/billing/operations/summary",
  "GET /api/admin/billing/orchestration/latest",
  "GET /api/admin/billing/orchestration/runs",
  "GET /api/admin/billing/orchestration/subject",
  "GET /api/admin/billing/policy",
  "GET /api/admin/billing/policy/transitions",
  "GET /api/admin/billing/provider-events",
  "GET /api/admin/billing/provider-plan-mappings",
  "GET /api/admin/commercial/metrics",
  "GET /api/admin/commercial/users/{userId}/control-snapshot",
  "GET /api/admin/freshness",
  "GET /api/admin/market-evidence/cognition",
  "GET /api/admin/market-evidence/inspection",
  "GET /api/admin/market-evidence/payload-replay",
  "GET /api/admin/market-evidence/payloads",
  "GET /api/admin/market-evidence/provider-request",
  "GET /api/admin/market-evidence/provider-response",
  "GET /api/admin/market-evidence/quality",
  "GET /api/admin/market-evidence/reasoning-input",
  "GET /api/admin/market-evidence/scheduled-ingestion/inspection",
  "GET /api/admin/market-evidence/scheduled-ingestion/policies",
  "GET /api/admin/market-evidence/scheduled-ingestion/replay",
  "GET /api/admin/market-evidence/scheduled-ingestion/runs",
  "GET /api/admin/market-evidence/weighted",
  "GET /api/admin/ops",
  "GET /api/admin/providers",
  "GET /api/admin/security/step-up/readiness",
  "GET /api/admin/seo/feed",
  "GET /api/admin/seo/sitemap",
  "GET /api/admin/system-summary",
  "POST /api/admin/billing/activate",
  "POST /api/admin/billing/cancel-at-period-end",
  "POST /api/admin/billing/change-plan",
  "POST /api/admin/billing/expire",
  "POST /api/admin/billing/past-due",
  "POST /api/admin/billing/pause",
  "POST /api/admin/billing/provider-plan-mapping",
  "POST /api/admin/billing/renew",
  "POST /api/admin/billing/resume",
  "POST /api/admin/billing/trial",
  "POST /api/admin/commercial/prices",
  "POST /api/admin/commercial/users/{userId}/gift-focus-plan",
  "POST /api/admin/commercial/users/{userId}/restrict",
  "POST /api/admin/commercial/users/{userId}/retract-focus-gift",
  "POST /api/admin/entitlements/override",
  "POST /api/admin/entitlements/plan",
  "POST /api/admin/entitlements/state",
  "POST /api/admin/market-evidence/scheduled-ingestion/dry-run",
  "POST /api/admin/market-evidence/scheduled-ingestion/replay",
  "POST /api/admin/security/step-up/challenge",
  "POST /api/admin/security/step-up/verify"
] as const;
export const excludedFrontendOperationKeys = [
  "GET /api/auth/{...nextauth}",
  "POST /api/auth/{...nextauth}",
  "POST /api/auth/password-reset/confirm",
  "POST /api/auth/password-reset/request",
  "POST /api/billing/webhook",
  "POST /api/billing/webhook/korapay",
  "POST /api/internal/billing/orchestration/retry",
  "POST /api/internal/billing/policy/evaluate",
  "POST /api/internal/billing/provider-events",
  "POST /api/internal/billing/provider-events/replay",
  "POST /api/internal/billing/reconcile",
  "POST /api/internal/billing/reconcile/retry",
  "POST /api/internal/market-evidence/tiingo/fixture-ingest",
  "POST /api/notifications/delivery/dispatch",
  "POST /api/notifications/providers/postmark/webhook",
  "POST /api/notifications/providers/resend/webhook",
  "POST /api/ops/notifications/expire-verifications",
  "POST /api/ops/notifications/process-feedback"
] as const;
