import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslocoPipe} from '@ngneat/transloco';
import { Browser } from '@capacitor/browser';
import { Capacitor } from '@capacitor/core';
import {AuthService} from '@hau/features/auth/auth.service';
import {AUTH_ROUTES} from '@hau/features/auth/auth.routes.const';
import {HAU_ROUTES} from '@hau/app.routes.const';

@Component({
    selector: 'app-token',
    templateUrl: './token.component.html',
    styleUrls: ['./token.component.scss'],
    standalone: true,
    imports: [TranslocoPipe]
})
export class TokenComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private authService: AuthService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe(async (params) => {
            const token = params['token'];
            if (token) {
                if (Capacitor.isNativePlatform()) {
                    await Browser.close();
                }

                this.authService.saveToken(token);
                await this.router.navigateByUrl(HAU_ROUTES.main.fullPath, { replaceUrl: true });
                return;
            }

            await this.router.navigateByUrl(AUTH_ROUTES.login.fullPath, { replaceUrl: true });
        });
    }

}
