import {inject} from '@angular/core';
import {HttpInterceptorFn} from '@angular/common/http';
import {catchError, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {AUTH_ROUTES} from '@hau/features/auth/auth.routes.const';
import {AuthService} from '@hau/features/auth/auth.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return next(req).pipe(
      catchError((error) => {
        if (error.status === 401) {
          console.error('Unauthorized - Redirecting to login');
          authService.logout();
          void router.navigate([AUTH_ROUTES.login.fullPath]);
        }
        return throwError(() => error);
      })
  );
};
