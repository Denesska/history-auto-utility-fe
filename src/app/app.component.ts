import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { App, URLOpenListenerEvent } from '@capacitor/app';
import { Browser } from '@capacitor/browser';
import { Capacitor } from '@capacitor/core';
import { ThemeService } from '@hau/core/theme.service';
import { AuthService } from '@hau/features/auth/auth.service';
import { AUTH_ROUTES } from '@hau/features/auth/auth.routes.const';
import { HAU_ROUTES } from '@hau/app.routes.const';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    imports: [IonRouterOutlet, IonApp]
})
export class AppComponent implements OnInit {
    constructor(
        private _theme: ThemeService,
        private router: Router,
        private zone: NgZone,
        private authService: AuthService,
    ) {}

    ngOnInit(): void {
        if (Capacitor.isNativePlatform()) {
            this.initializeDeepLinks();
        }
    }

    private initializeDeepLinks(): void {
        void App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
            void this.zone.run(() => this.handleDeepLink(event.url));
        });

        void App.getLaunchUrl().then((result) => {
            if (result?.url) {
                void this.zone.run(() => this.handleDeepLink(result.url));
            }
        });
    }

    private async handleDeepLink(url: string): Promise<void> {
        try {
            const parsed = new URL(url);
            const isTokenPath =
                parsed.pathname === '/auth/token' ||
                parsed.pathname.endsWith('/auth/token');

            if (!isTokenPath) {
                return;
            }

            await Browser.close();

            if (this.authService.handleOAuthCallback(url)) {
                await this.router.navigate([HAU_ROUTES.main.fullPath]);
                return;
            }

            await this.router.navigate([AUTH_ROUTES.login.fullPath]);
        } catch {
            // Ignore malformed deep link URLs.
        }
    }
}
