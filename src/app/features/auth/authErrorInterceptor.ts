import { inject, Injector } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '@hau/features/auth/auth.service';
import { AUTH_ROUTES } from '@hau/features/auth/auth.routes.const';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { ToastController } from '@ionic/angular';
import { TranslocoService } from '@jsverse/transloco';
import { scopeDataOf } from '@hau/features/main';
import { ActivatedRouteSnapshot } from '@angular/router';
import { catchError, EMPTY, switchMap, throwError } from 'rxjs';

let featureDisabledToastOpen = false;

function currentRouteBelongsToFeature(router: Router): boolean {
  let leaf: ActivatedRouteSnapshot | null = router.routerState.snapshot.root;
  while (leaf?.firstChild) leaf = leaf.firstChild;
  const data = leaf ? scopeDataOf(leaf) : undefined;
  return !data || !!data.feature;
}

/** The organization's feature switch was turned off mid-session: tell the user once, refresh the switches and go back to the garage. */
function handleFeatureDisabled(injector: Injector, router: Router): void {
  injector.get(BootstrapFacade).forceRefresh();
  // Only leave when the page itself belongs to a feature (or the route is unknown); a background fetch from another page must not navigate away.
  if (currentRouteBelongsToFeature(router)) void router.navigate([HAU_ROUTES.cars.fullPath]);
  if (featureDisabledToastOpen) return;
  featureDisabledToastOpen = true;
  const message = injector.get(TranslocoService).translate('common.errors.featureDisabled');
  void injector
    .get(ToastController)
    .create({ message, duration: 3500, position: 'bottom' })
    .then(toast => {
      void toast.onDidDismiss().then(() => (featureDisabledToastOpen = false));
      return toast.present();
    });
}

export const authErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const injector = inject(Injector);

  return next(req).pipe(
    catchError((error) => {
      const code = error?.error?.code;

      // Business membership was revoked while the session was alive — end the
      // session and send the user to the Business tab of the login screen.
      if ((error.status === 401 || error.status === 403) && code === 'MEMBERSHIP_REVOKED') {
        authService.setLoginTab('business');
        authService.logout().subscribe();
        void router.navigate([AUTH_ROUTES.login.fullPath]);
        return throwError(() => error);
      }

      // Business session with no organization chosen yet — go pick one.
      if (error.status === 403 && code === 'NO_ORGANIZATION_SELECTED') {
        if (!router.url.startsWith(AUTH_ROUTES.selectOrganization.fullPath)) {
          void router.navigate([AUTH_ROUTES.selectOrganization.fullPath]);
        }
        return throwError(() => error);
      }

      // GDPR gate (features/legal/FEATURE.md): acceptance is pending and some other
      // call reached the backend before authGuard caught it (e.g. a background
      // request, or a request fired from a cached/already-open page). `startsWith`
      // guards against looping if several requests fail at once while already here.
      if (error.status === 403 && code === 'LEGAL_ACCEPTANCE_REQUIRED') {
        if (!router.url.startsWith(AUTH_ROUTES.legalConsent.fullPath)) {
          void router.navigate([AUTH_ROUTES.legalConsent.fullPath], { queryParams: { returnUrl: router.url } });
        }
        return throwError(() => error);
      }

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
          switchMap(() => {
            // `req` still carries the stale Authorization header that
            // authTokenInterceptor attached BEFORE the refresh — interceptors
            // don't re-run on retry, `next()` just forwards the same request
            // object down the chain. On native (Bearer-token auth) this meant
            // every retry kept using the expired token and failing 401 again,
            // no matter how fresh the new token was. Re-stamp it explicitly.
            const freshToken = authService.getToken();
            const retried = freshToken
              ? req.clone({ setHeaders: { Authorization: `Bearer ${freshToken}` } })
              : req;
            return next(retried);
          }),
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

      if (error.status === 403 && code === 'FEATURE_DISABLED') {
        handleFeatureDisabled(injector, router);
        // Handled centrally: complete silently so callers' own error handlers don't add a generic "something went wrong" toast.
        return EMPTY;
      }

      if (error.status === 403) {
        console.warn('Access denied. You do not have permission to view this resource.');
      }

      return throwError(() => error);
    }),
  );
};
