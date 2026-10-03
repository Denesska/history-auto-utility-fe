import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { SessionContextService } from '@hau/features/auth/session-context.service';

export type ContextScope = 'personal' | 'business';

/**
 * Route metadata checked by `contextScopeGuard` (see ACCOUNT-CONTEXT.md, "Visibility matrix").
 * `orgRoles` applies only in a business session: when set, the active organization
 * role must be one of them. The same shape is used by the sidebar/Account menu items.
 */
export interface ContextScopeData {
    scope: ContextScope[];
    orgRoles?: string[];
}

/** Whether something tagged with `data` is visible in the current session context. Unknown context (not loaded yet) = allowed. */
export function fitsContext(data: ContextScopeData | undefined, ctx: SessionContextService): boolean {
    if (!data?.scope) return true;
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
function scopeDataOf(route: ActivatedRouteSnapshot): ContextScopeData | undefined {
    for (let i = route.pathFromRoot.length - 1; i >= 0; i--) {
        const data = route.pathFromRoot[i].routeConfig?.data as Partial<ContextScopeData> | undefined;
        if (data?.scope) return data as ContextScopeData;
    }
    return undefined;
}

const check: CanActivateFn = (route) => {
    const ctx = inject(SessionContextService);
    return fitsContext(scopeDataOf(route), ctx) || inject(Router).createUrlTree([HAU_ROUTES.cars.fullPath]);
};

/**
 * UX only — the backend's scope guard is authoritative. A route that doesn't fit the
 * current personal/business context (or the org role) redirects to the garage
 * (the landing page; there is no separate overview route).
 */
export const contextScopeGuard: CanActivateFn = check;
export const contextScopeChildGuard: CanActivateChildFn = check;
