import { inject } from '@angular/core';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { map, Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, UrlTree } from '@angular/router';
import { FeatureKey } from '@hau/core/features/feature-keys';
import { FeatureService } from '@hau/core/features/feature.service';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { SessionContextService } from '@hau/core/session/session-context.service';

export type ContextScope = 'personal' | 'business';

/**
 * Route metadata checked by `contextScopeGuard` (see ACCOUNT-CONTEXT.md, "Visibility matrix").
 * `orgRoles` applies only in a business session: when set, the active organization
 * role must be one of them. The same shape is used by the sidebar/Account menu items.
 */
export interface ContextScopeData {
    scope: ContextScope[];
    orgRoles?: string[];
    /** Per-organization feature switch: when this feature is disabled the item/route is hidden (see core/features/FEATURE.md). */
    feature?: FeatureKey;
}

/** Whether something tagged with `data` is visible in the current session context. Unknown context (not loaded yet) = allowed. */
export function fitsContext(data: ContextScopeData | undefined, ctx: SessionContextService, features?: FeatureService): boolean {
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

const check: CanActivateFn = (route): boolean | UrlTree | Observable<boolean | UrlTree> => {
    const ctx = inject(SessionContextService);
    const features = inject(FeatureService);
    const router = inject(Router);
    const data = scopeDataOf(route);
    const decide = () => fitsContext(data, ctx, features) || router.createUrlTree([HAU_ROUTES.cars.fullPath]);
    if (!data?.feature || features.loaded()) return decide();
    // Hard load: the switches are not here yet. Start the bootstrap ourselves (MainComponent only does so after it renders,
    // i.e. after this guard) and wait for it; success or failure both settle, so this never hangs.
    inject(BootstrapFacade).bootstrap();
    return features.whenLoaded$().pipe(map(decide));
};

/**
 * A route whose `feature` is switched off for the organization redirects the same way.
 * UX only — the backend's scope guard is authoritative. A route that doesn't fit the
 * current personal/business context (or the org role) redirects to the garage
 * (the landing page; there is no separate overview route).
 */
export const contextScopeGuard: CanActivateFn = check;
export const contextScopeChildGuard: CanActivateChildFn = check;
