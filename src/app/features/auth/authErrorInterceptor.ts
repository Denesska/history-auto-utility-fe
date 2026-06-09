import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { AuthService } from '@hau/features/auth/auth.service';
import { AUTH_ROUTES } from '@hau/features/auth/auth.routes.const';
import { catchError, switchMap, throwError } from 'rxjs';

export const authErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401) {
        // Must be checked first on all platforms — these endpoints must never trigger a refresh
        // or a logout HTTP call, as either would create an infinite 401 loop.
        if (req.url.includes('/auth/refresh') || req.url.includes('/auth/logout')) {
          authService.clearLocalAuth();
          return throwError(() => error);
        }

        if (Capacitor.isNativePlatform()) {
          // On native there is no HTTP-only cookie to clear server-side; just wipe local state.
          authService.clearLocalAuth();
          void router.navigate([AUTH_ROUTES.login.fullPath]);
          return throwError(() => error);
        }

        return authService.refreshSession().pipe(
          switchMap(() => next(req)),
          catchError(() => {
            authService.logout().subscribe();
            return throwError(() => error);
          }),
        );
      }

      if (error.status === 403) {
        console.warn('Access denied. You do not have permission to view this resource.');
      }

      return throwError(() => error);
    }),
  );
};
