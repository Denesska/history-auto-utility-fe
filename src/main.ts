import {APP_INITIALIZER, enableProdMode, importProvidersFrom, isDevMode} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter, RouteReuseStrategy} from '@angular/router';
import {IonicRouteStrategy, provideIonicAngular} from '@ionic/angular/standalone';
import {provideTransloco, TranslocoService} from '@ngneat/transloco';
import {routes} from '@hau/app.routes';
import {AppComponent} from '@hau/app.component';
import {environment} from './environments/environment';
import {preloadTranslation, TranslocoHttpLoader} from '@hau/core/transloco/transloco-http-loader.service';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import {NgxsModule} from '@ngxs/store';
import {AppState} from '@hau/shared/state/app/app.state';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {JwtInterceptor} from '@auth0/angular-jwt';
import {authErrorInterceptor} from '@hau/features/auth/authErrorInterceptor';
import {errorInterceptor} from '@hau/features/auth/errorHandler.interceptor';
import {withCredentialsInterceptor} from '@hau/features/auth/with-credentials.interceptor';

if (environment.production) {
  enableProdMode();
}

void bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
    provideHttpClient(
        withInterceptors([ withCredentialsInterceptor, authErrorInterceptor, errorInterceptor])
    ),
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: preloadTranslation,
      deps: [TranslocoService]
    },
    provideTransloco({
      config: {
        availableLangs: ['en'],
        defaultLang: 'en',
        prodMode: !isDevMode()
      },
      loader: TranslocoHttpLoader
    }),

    importProvidersFrom(NgxsModule.forRoot([AppState], { developmentMode: !environment.production })),
    importProvidersFrom(NgxsLoggerPluginModule.forRoot({ disabled: environment.production }))
  ],
});
