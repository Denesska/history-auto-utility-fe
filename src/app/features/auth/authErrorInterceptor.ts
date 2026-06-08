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
          authService.logout(window.location.pathname + window.location.search);
          void router.navigate([AUTH_ROUTES.login.fullPath]);
          return throwError(() => error);
        }

        if (req.url.includes('/auth/refresh')) {
          const returnUrl = window.location.pathname + window.location.search;
          authService.logout(returnUrl);
          return throwError(() => error);
        }

        return authService.refreshSession().pipe(
          switchMap(() => next(req)),
          catchError(() => {
            const returnUrl = window.location.pathname + window.location.search;
            authService.logout(returnUrl);
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
