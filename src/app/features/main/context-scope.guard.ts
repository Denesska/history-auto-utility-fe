import { inject } from '@angular/core';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { map, Observable } from 'rxjs';
import { CanActivateChildFn, CanActivateFn, Router, UrlTree } from '@angular/router';
import { FeatureService } from '@hau/core/features/feature.service';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { SessionContextService } from '@hau/core/session/session-context.service';
// The scope/feature matching logic (ContextScopeData, fitsContext, scopeDataOf) lives in
// core/context/context-scope.ts so core/car-page can reuse it without core importing a
// feature (see "Feature boundaries" in CLAUDE.md) — re-exported here for every existing
// `@hau/features/main/context-scope.guard` / `@hau/features/main` import.
import { ContextScope, ContextScopeData, fitsContext, scopeDataOf } from '@hau/core/context/context-scope';

export type { ContextScope, ContextScopeData };
export { fitsContext, scopeDataOf };

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
