import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { Router } from '@angular/router';
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
          void authService.clearLocalAuth();
          return throwError(() => error);
        }

        // Web sends the expired token via cookie, native via the Authorization
        // header (auth-token.interceptor) — /auth/refresh accepts both.
        return authService.refreshSession().pipe(
          catchError((refreshError) => {
            // The refresh itself failed — the session is genuinely dead.
            authService.logout().subscribe();
            void router.navigate([AUTH_ROUTES.login.fullPath]);
            return throwError(() => refreshError);
          }),
          switchMap(() => next(req)),
          catchError((retryError) => {
            // Refresh succeeded but the retried request still failed. Only
            // treat this as a dead session if the brand-new token was
            // rejected too — any other failure (network blip, 404, 500...)
            // must not wipe a session that was just successfully refreshed.
            if (retryError?.status === 401) {
              authService.logout().subscribe();
              void router.navigate([AUTH_ROUTES.login.fullPath]);
            }
            return throwError(() => retryError);
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
