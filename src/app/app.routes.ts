import {Routes} from '@angular/router';
import {HAU_ROUTES} from '@hau/app.routes.const';
import {AUTH_ROUTES, authGuard, organizationSelectedGuard} from '@hau/features/auth';

export const routes: Routes = [
  {
    path: HAU_ROUTES.auth.path,
    loadChildren: () => import('./features/auth/auth.routes').then(mod => mod.authRoutes)
  },
  // GDPR consent gate (features/legal/FEATURE.md): the component lives in the `legal`
  // feature, but the URL is `/auth/legal-consent` (AUTH_ROUTES.legalConsent) and it's
  // guarded by authGuard the same way as /auth/select-organization — both are mounted
  // here at the composition root rather than inside auth.routes.ts/legal.routes.ts, the
  // one sanctioned way for either feature to stay clear of a cross-feature deep import.
  {
    path: `${HAU_ROUTES.auth.path}/${AUTH_ROUTES.legalConsent.path}`,
    canActivate: [authGuard],
    loadComponent: () => import('./features/legal/legal-consent/legal-consent.component').then(mod => mod.LegalConsentComponent)
  },
  // Public Terms/Privacy pages — no guard, must work logged in or out.
  {
    path: 'legal',
    loadChildren: () => import('./features/legal/legal.routes').then(mod => mod.legalRoutes)
  },
  {
    path: HAU_ROUTES.main.path,
      canActivate: [authGuard, organizationSelectedGuard],
    loadChildren: () => import('./features/main/main.routes').then(mod => mod.mainRoutes)
  },
  {
    path: '**',
    redirectTo: AUTH_ROUTES.login.fullPath
  }
];
