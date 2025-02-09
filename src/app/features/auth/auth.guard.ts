import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {AUTH_ROUTES} from '@hau/features/auth/auth.routes.const';
import {map} from 'rxjs/operators';
import {catchError, of} from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const returnUrl = state.url;
    return authService.checkSession().pipe(
        map((isAuthenticated) => {
            if (isAuthenticated) {
                return true;
            }
            void router.navigate([AUTH_ROUTES.login.fullPath], { queryParams: { returnUrl } });
            return false;
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