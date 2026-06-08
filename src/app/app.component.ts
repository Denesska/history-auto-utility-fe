import { DOCUMENT } from '@angular/common';
import { Component, Inject, NgZone, OnInit } from '@angular/core';
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
        @Inject(DOCUMENT) private document: Document,
    ) {}

    ngOnInit(): void {
        if (Capacitor.isNativePlatform()) {
            this.document.body.classList.add('hau-native');
            this.initializeNativeAuth();
        }
    }

    private initializeNativeAuth(): void {
        void App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
            void this.zone.run(() => this.handleDeepLink(event.url));
        });

        void App.getLaunchUrl().then((result) => {
            if (result?.url) {
                void this.zone.run(() => this.handleDeepLink(result.url));
            }
        });

        void App.addListener('appStateChange', ({ isActive }) => {
            if (isActive) {
                void this.zone.run(() => this.redirectFromLoginIfAuthenticated());
            }
        });

        void Browser.addListener('browserFinished', () => {
            void this.zone.run(() => this.redirectFromLoginIfAuthenticated());
        });
    }

    private redirectFromLoginIfAuthenticated(): void {
        if (!this.router.url.includes(AUTH_ROUTES.login.path)) {
            return;
        }

        this.authService.redirectToMainIfAuthenticated(this.router);
    }

    private async handleDeepLink(url: string): Promise<void> {
        let parsed: URL;
        try {
            parsed = new URL(url);
        } catch {
            return;
        }

        const isTokenPath =
            parsed.pathname === '/auth/token' ||
            parsed.pathname.endsWith('/auth/token');

        if (!isTokenPath) {
            return;
        }

        const isAuthenticated = this.authService.handleOAuthCallback(url);

        void Browser.close().catch(() => {
            // Closing the in-app browser is best-effort and must never block login.
        });

        if (isAuthenticated) {
            await this.router.navigateByUrl(HAU_ROUTES.main.fullPath, { replaceUrl: true });
            return;
        }

        await this.router.navigateByUrl(AUTH_ROUTES.login.fullPath, { replaceUrl: true });
    }
}
