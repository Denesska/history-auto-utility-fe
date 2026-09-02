import { InjectionToken } from '@angular/core';

export interface AuthTokenProvider {
  getToken(): string | null;
}

// core/ can't import AuthService directly (it lives in features/auth) without
// creating a features -> core dependency in the wrong direction. The concrete
// implementation is wired in the composition root (main.ts) instead.
export const AUTH_TOKEN_PROVIDER = new InjectionToken<AuthTokenProvider>('AUTH_TOKEN_PROVIDER');
