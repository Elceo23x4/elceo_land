/**
 * AUTO-GENERATED. DO NOT EDIT.
 * Source: Elceo23x4/Elceo-Mi@771487b46874afc28a21f260a2c12f92bfe8f736
 * Frozen functional tree: 6f81f55269031e0ec6467cd60283593dd5b7c2d3
 * Input: contracts/backend/openapi.json (sha256:c6d2fdedbf0535258f695ed19e6e2028c38b39eae4fe14c513d8273fccfa24ae)
 * Generator: @hey-api/openapi-ts@0.99.0 (type-only output)
 * Regenerate: npm run generate:m2-contracts
 */
import 'server-only';

export const trustedOperationRegistry = {
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
  }
} as const;
