import { ActivatedRouteSnapshot } from '@angular/router';
import { FeatureKey } from '@hau/core/features/feature-keys';
import { FeatureService } from '@hau/core/features/feature.service';
import { SessionContextService } from '@hau/core/session/session-context.service';

export type ContextScope = 'personal' | 'business';

/**
 * Route metadata checked by `contextScopeGuard` (see ACCOUNT-CONTEXT.md, "Visibility matrix").
 * `orgRoles` applies only in a business session: when set, the active organization
 * role must be one of them. The same shape is used by the sidebar/Account menu items
 * and by the car-page tab/action contributions (`core/car-page/car-page.contributions.ts`).
 *
 * Lives in `core/` (not `features/main/`) so `core/car-page/car-page-contributions.service.ts`
 * can reuse it without core importing a feature — see "Feature boundaries" in CLAUDE.md.
 */
export interface ContextScopeData {
  scope: ContextScope[];
  orgRoles?: string[];
  /** Per-organization feature switch: when this feature is disabled the item/route is hidden (see core/features/FEATURE.md). */
  feature?: FeatureKey;
}

/** Whether something tagged with `data` is visible in the current session context. Unknown context (not loaded yet) = allowed. */
export function fitsContext(
  data: ContextScopeData | undefined,
  ctx: SessionContextService,
  features?: FeatureService,
): boolean {
  if (!data?.scope) return true;
  if (data.feature && features && !features.isEnabled(data.feature)) return false;
  const context = ctx.context();
  if (!context) return true;
  if (!data.scope.includes(context.type)) return false;
  if (context.type === 'business' && data.orgRoles?.length) {
    const role = ctx.activeOrgRole();
    return role != null && data.orgRoles.includes(role);
  }
  return true;
}

/** The deepest route on the way down that declares `data.scope` wins (a child can narrow its parent). */
export function scopeDataOf(route: ActivatedRouteSnapshot): ContextScopeData | undefined {
  for (let i = route.pathFromRoot.length - 1; i >= 0; i--) {
    const data = route.pathFromRoot[i].routeConfig?.data as Partial<ContextScopeData> | undefined;
    if (data?.scope) return data as ContextScopeData;
  }
  return undefined;
}
