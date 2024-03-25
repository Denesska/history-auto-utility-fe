import { APP_INITIALIZER, enableProdMode, importProvidersFrom, isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { TranslocoService, provideTransloco } from '@ngneat/transloco';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { TranslocoHttpLoader, preloadTranslation } from '@hau/core/transloco/transloco-http-loader.service';
import { provideHttpClient } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { AppState } from '@hau/shared/state/app/app.state';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
    provideHttpClient(),

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
