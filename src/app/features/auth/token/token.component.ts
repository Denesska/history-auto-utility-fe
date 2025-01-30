import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '@hau/features/auth/auth.service';
import {HAU_ROUTES} from '@hau/app.routes.const';

@Component({
    selector: 'app-token',
    templateUrl: './token.component.html',
    styleUrls: ['./token.component.scss'],
    standalone: true
})
export class TokenComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private authService: AuthService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            const token = params['token'];
            const refresh = params['refresh'];
            if (token) {
                void this.authService.saveToken(token, refresh);

                void this.router.navigate([HAU_ROUTES.main.fullPath]);
            } else {
                void this.router.navigate([HAU_ROUTES.auth.fullPath]);
            }
        });
    }

}
