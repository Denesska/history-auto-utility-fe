import {
  APP_INITIALIZER,
  enableProdMode,
  importProvidersFrom,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, RouteReuseStrategy } from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';
import { provideTransloco, TranslocoService } from '@ngneat/transloco';
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
} from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { AppState } from '@hau/shared/state/app/app.state';
import { BootstrapState } from '@hau/shared/state/bootstrap/bootstrap.state';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { authErrorInterceptor } from '@hau/features/auth/authErrorInterceptor';
import { authTokenInterceptor } from '@hau/features/auth/auth-token.interceptor';
import { errorInterceptor } from '@hau/features/auth/errorHandler.interceptor';
import { withCredentialsInterceptor } from '@hau/features/auth/with-credentials.interceptor';
import { provideApiConfiguration } from './auto-gen/api/api-configuration';

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
    provideTransloco({
      config: {
        availableLangs: ['en', 'ro'],
        defaultLang: 'en',
        fallbackLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),

    importProvidersFrom(
      NgxsModule.forRoot([AppState, BootstrapState], {
        developmentMode: !environment.production,
      }),
    ),
    importProvidersFrom(
      NgxsLoggerPluginModule.forRoot({ disabled: environment.production }),
    ),
    provideApiConfiguration(apiRoot),
  ],
});
