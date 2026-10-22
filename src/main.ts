import {
  APP_INITIALIZER,
  enableProdMode,
  importProvidersFrom,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEnGB from '@angular/common/locales/en-GB';
import localeRo from '@angular/common/locales/ro';
import localeRu from '@angular/common/locales/ru';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular';
import { provideTransloco, TranslocoService } from '@jsverse/transloco';
import { routes } from '@hau/app.routes';
import { AppComponent } from '@hau/app.component';
import { environment } from './environments/environment';
import {
  preloadTranslation,
  TranslocoHttpLoader,
} from '@hau/core/transloco/transloco-http-loader.service';
import {
  provideHttpClient,
  withInterceptors,
  withXhr,
} from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { AppState } from '@hau/shared/state/app/app.state';
import { BootstrapState } from '@hau/shared/state/bootstrap/bootstrap.state';
import { NotificationsState } from '@hau/shared/state/notifications/notifications.state';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { authErrorInterceptor } from '@hau/features/auth/authErrorInterceptor';
import { authTokenInterceptor } from '@hau/features/auth/auth-token.interceptor';
import { errorInterceptor } from '@hau/features/auth/errorHandler.interceptor';
import { withCredentialsInterceptor } from '@hau/features/auth/with-credentials.interceptor';
import { AuthService } from '@hau/features/auth/auth.service';
import { AUTH_TOKEN_PROVIDER } from '@hau/core/auth-token-provider';
import { setActiveLang } from '@hau/shared/utils/locale.util';
import { provideApiConfiguration } from './auto-gen/api/api-configuration';

// Locale data for localized month/day names (see shared/pipes/local-date.pipe.ts, shared/utils/locale.util.ts).
registerLocaleData(localeEnGB, 'en-GB');
registerLocaleData(localeRo, 'ro');
registerLocaleData(localeRu, 'ru');

const apiRoot = environment.apiUrl.replace(/\/api\/?$/, '');

if (environment.production) {
  enableProdMode();
}

void bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(),
    provideAnimationsAsync(),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({ innerHTMLTemplatesEnabled: true }),
    provideRouter(routes),
    provideHttpClient(
      withXhr(),
      withInterceptors([
        authTokenInterceptor,
        withCredentialsInterceptor,
        authErrorInterceptor,
        errorInterceptor,
      ]),
    ),
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: preloadTranslation,
      deps: [TranslocoService],
    },
    {
      // Keeps the plain-function date formatters (formatting.util.ts) in sync with the UI language.
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (transloco: TranslocoService) => () => {
        setActiveLang(transloco.getActiveLang());
        transloco.langChanges$.subscribe(setActiveLang);
      },
      deps: [TranslocoService],
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (authService: AuthService) => () => authService.init(),
      deps: [AuthService],
    },
    { provide: AUTH_TOKEN_PROVIDER, useExisting: AuthService },
    provideTransloco({
      config: {
        availableLangs: ['en', 'ro', 'ru'],
        defaultLang: 'en',
        fallbackLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),

    importProvidersFrom(
      NgxsModule.forRoot([AppState, BootstrapState, NotificationsState], {
        developmentMode: !environment.production,
      }),
    ),
    importProvidersFrom(
      NgxsLoggerPluginModule.forRoot({ disabled: environment.production }),
    ),
    provideApiConfiguration(apiRoot),
  ],
});
