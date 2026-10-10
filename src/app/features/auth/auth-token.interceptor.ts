import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { AuthService } from '@hau/features/auth/auth.service';
import packageJson from '../../../../package.json';

// Identifies the client to the backend's activity tracking (admin page:
// platform split, app-version adoption). Read once — neither changes at runtime.
const CLIENT_HEADERS = {
  'X-Client-Platform': Capacitor.getPlatform(),
  'X-Client-Version': packageJson.version,
};

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  // Temporary diagnostic: lets us tell on the server whether two requests
  // came from the same running app instance or from a fresh app restart.
  const headers: Record<string, string> = { ...CLIENT_HEADERS, 'X-Client-Instance': authService.instanceId };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return next(req.clone({ setHeaders: headers }));
};
