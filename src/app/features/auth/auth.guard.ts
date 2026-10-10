import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {SessionContextService} from '@hau/core/session/session-context.service';
import {AUTH_ROUTES} from '@hau/features/auth/auth.routes.const';
import {map} from 'rxjs/operators';
import {catchError, of} from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const returnUrl = state.url;
    return authService.checkSession().pipe(
        map((isAuthenticated) => {
            if (!isAuthenticated) {
                void router.navigate([AUTH_ROUTES.login.fullPath], { queryParams: { returnUrl } });
                return false;
            }

            // checkSession() just populated profile$ via tap() in the same
            // pipeline, so this read is always fresh for this navigation.
            // must_change_password is false for every normal Google account,
            // so this branch is a no-op for them.
            const profile = authService.profile$.value;
            const isChangePasswordRoute = state.url === AUTH_ROUTES.changePassword.fullPath;
            if (profile?.must_change_password && !isChangePasswordRoute) {
                void router.navigate([AUTH_ROUTES.changePassword.fullPath], { queryParams: { forced: true } });
                return false;
            }

            return true;
        }),
        catchError((error) => {
            console.error("Auth check failed:", error);
            void router.navigate([AUTH_ROUTES.login.fullPath], { queryParams: { returnUrl } });
            return of(false);
        })
    );
};
    // void this.router.navigate([AUTH_ROUTES.login.fullPath]);

// export const canActivate: CanActivateFn = (
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
// ) => {
//   const authService = inject(AuthenticationService);
//   const router = inject(Router);
//
//   return authService.checkLogin().pipe(
//       map(() => true),
//       catchError(() => {
//         return router.createUrlTree(['route-to-fallback-page']);
//       })
//   );
// };


/**
 * Runs after authGuard on /main (which just refreshed the session context from
 * /auth/me): a business session with no organization picked yet can't use any
 * business route, so send it to the organization picker. UX only — the backend
 * answers 403 NO_ORGANIZATION_SELECTED otherwise (handled in authErrorInterceptor).
 */
export const organizationSelectedGuard: CanActivateFn = () => {
    const sessionContext = inject(SessionContextService);
    const authService = inject(AuthService);
    const router = inject(Router);
    const decide = () => sessionContext.needsOrgSelection()
        ? router.createUrlTree([AUTH_ROUTES.selectOrganization.fullPath])
        : true;

    // Normally authGuard already filled the context. If it's still unknown, load
    // /auth/me once instead of deciding blind; never wait forever (errors -> let through,
    // the backend's 403 NO_ORGANIZATION_SELECTED handling in authErrorInterceptor takes over).
    if (sessionContext.context() !== null) {
        return decide();
    }
    return authService.checkSession().pipe(
        map(() => decide()),
        catchError(() => of(true)),
    );
};
