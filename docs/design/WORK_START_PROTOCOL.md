# GPT Work Start Protocol — ELCEO Production Frontend

## Purpose

This protocol is the mandatory first workflow for GPT Work/Codex in `Elceo23x4/elceo_land`. It prevents framework migration, visual implementation, and backend integration from starting from incomplete context.

## Mandatory context read

Before modifying production UI code, read:

1. `/AGENTS.md`
2. `/.agents/skills/elceo-ui/SKILL.md`
3. `/docs/design/ELCEO_UI_CONSTITUTION.md`
4. `/docs/design/ELCEO_VISUAL_LANGUAGE.md`
5. `/docs/design/ELCEO_MOTION_GRAMMAR.md`
6. `/docs/design/ELCEO_RESPONSIVE_RULES.md`
7. `/docs/design/ELCEO_PERFORMANCE_BUDGET.md`
8. `/docs/design/ELCEO_EDITORIAL_STANDARD.md`
9. `/docs/design/ELCEO_LEGAL_UX_MATRIX.md`
10. `/docs/design/ELCEO_ASSET_REGISTER.md`
11. `/docs/design/NEXTJS_MIGRATION_PLAN.md`
12. `/docs/backend-contract/README.md`
13. `/docs/backend-contract/ui-page-inventory.md`
14. the backend mapping/state documents applicable to the task.

For landing work also inspect:

- `/docs/design/references/approved-landing-reference.webp`
- `/docs/design/ELCEO_LANDING_SCENE_CONTRACT.md`

For dashboard work also inspect the existing dashboard design/code/docs before proposing any migration changes.

## Contract synchronization gate

Run:

```bash
npm run sync:backend-handoff
npm run verify:backend-handoff
```

The sync must remain pinned to the commit declared by `docs/backend-contract/SOURCE.json` unless a separately reviewed task explicitly updates the backend contract baseline.

Never edit generated files under the mirrored handoff manually.

Commit the generated snapshot back to the active foundation/implementation branch so the frontend repository permanently records the exact contract it was built against.

## First Work task: M0 audit only

The first substantive Work task is an architecture/migration audit. Do **not** start by rebuilding the landing page.

Inspect and report:

- current Vite/React Router topology;
- all current routes;
- dashboard code, CSS scopes, assets, interactions, data dependencies, and browser-only assumptions;
- existing GSAP/Motion/Three/R3F/Lightweight Charts usage;
- current build/deployment/Vercel configuration;
- existing public assets and which are still useful;
- route mapping against the canonical UI page inventory;
- server/BFF needs under Next.js;
- auth/session requirements;
- browser-safe vs server-only backend calls;
- risks to dashboard parity;
- migration sequencing and rollback/parity strategy;
- current performance/memory baseline where measurable.

### Deployment baseline gate

Before attributing deployment failures to new UI work, compare the active branch with the existing `main` deployment state and inspect actual Vercel/build logs. Do not suppress or ignore a new primary deployment failure merely because another historical Vercel project/context was already red.

For the current foundation PR, the primary Vercel preview is red while the last accepted `main` commit had the primary `Vercel – elceo-land` context green and the secondary `Vercel – elceo-land-l353` context red. Diagnose the primary preview failure during M0/snapshot closure and distinguish pre-existing secondary-project failure from any regression introduced by the branch.

Deliver a written M0 report before undertaking the framework migration.

## Review gate

Do not proceed from M0 audit to M1 migration automatically if the audit exposes a material architectural conflict, unsupported backend requirement, loss of dashboard behavior, secret-exposure risk, deployment regression, or large design/performance tradeoff. Surface it for review.

## M1+ implementation order

After M0 is accepted:

1. establish Next.js App Router shell and project conventions;
2. establish tokens/fonts/base styling and route groups;
3. establish backend contract/client/BFF boundaries;
4. implement Google-only auth/session shell;
5. migrate dashboard to parity without redesign;
6. verify dashboard visual/function/performance parity;
7. build public shell and legal/cookie foundations;
8. implement the approved landing experience;
9. continue page families in canonical inventory order;
10. finish integrated accessibility/responsive/performance acceptance.

## Stop conditions

Stop and report rather than improvise when:

- a required backend mutation/read is absent from the frozen contract;
- a page would require invented server state;
- an approved composition cannot be implemented realistically with the available asset/technology plan;
- performance requires a material visual compromise not already covered by responsive/reduced-motion rules;
- legal/eligibility semantics are ambiguous;
- dashboard parity would be lost;
- any server-only secret would need to reach browser JavaScript;
- a new deployment/build failure is not understood.

## Definition of a good Work report

Every substantial Work completion report should state:

- scope implemented;
- files/components/routes changed;
- backend contracts consumed;
- visual authority followed;
- desktop/mobile/reduced-motion handling;
- accessibility checks;
- performance/memory observations;
- tests/build/typecheck/deployment results;
- unresolved gaps or deliberate deferrals.
