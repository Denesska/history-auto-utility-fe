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
        if (Capacitor.isNativePlatform()) {
          authService.logout().subscribe(() => {
            void router.navigate([AUTH_ROUTES.login.fullPath]);
          });
          return throwError(() => error);
        }

        // /auth/refresh and /auth/logout must never trigger a refresh attempt — doing so causes infinite loops.
        // All other 401s (including /auth/me) go through the normal refresh-then-retry path.
        if (req.url.includes('/auth/refresh') || req.url.includes('/auth/logout')) {
          authService.clearLocalAuth();
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
