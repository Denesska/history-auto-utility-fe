import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@hau/features/auth/auth.service';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  // Temporary diagnostic: lets us tell on the server whether two requests
  // came from the same running app instance or from a fresh app restart.
  const headers: Record<string, string> = { 'X-Client-Instance': authService.instanceId };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return next(req.clone({ setHeaders: headers }));
};
