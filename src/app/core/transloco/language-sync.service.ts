import { Injectable, inject } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { catchError, distinctUntilChanged, EMPTY, filter, switchMap } from 'rxjs';
import { AuthService } from '@hau/features/auth/auth.service';
import { SettingsService } from '@hau/features/settings/settings.service';
import { hasExplicitLang } from './transloco-http-loader.service';

/**
 * Emails and push notifications use `UserSettings.language` on the backend, so it must match what
 * the user sees. When the user never picked a language themselves, the device-detected one is the
 * source of truth: on login / authenticated start it is PUT only if it differs from the backend.
 * An explicit choice is already persisted by Settings, so nothing is synced here.
 */
@Injectable({ providedIn: 'root' })
export class LanguageSyncService {
  private readonly auth = inject(AuthService);
  private readonly settings = inject(SettingsService);
  private readonly transloco = inject(TranslocoService);

  start(): void {
    this.auth.isLoggedIn$
      .pipe(
        distinctUntilChanged(),
        filter(loggedIn => loggedIn && !hasExplicitLang()),
        switchMap(() => this.settings.getSettings().pipe(catchError(() => EMPTY))),
      )
      .subscribe(settings => {
        const active = this.transloco.getActiveLang();
        if (settings.language !== active) {
          this.settings.updateSettings({ language: active }).subscribe({ error: () => {} });
        }
      });
  }
}
