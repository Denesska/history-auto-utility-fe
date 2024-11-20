import {Injectable} from '@angular/core';
import {CanActivate, CanActivateFn, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {AUTH_ROUTES} from '@hau/features/auth/auth.routes.const';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(): boolean {
        if (!this.authService.hasToken()) {
            void this.router.navigate([AUTH_ROUTES.login.fullPath]);
            return false;
        }
        return true;
    }
}

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