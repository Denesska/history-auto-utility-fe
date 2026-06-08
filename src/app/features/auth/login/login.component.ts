import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { AuthService } from '@hau/features/auth/auth.service';
import { filter } from 'rxjs';
import { IonIcon } from '@ionic/angular/standalone';
import { TranslocoPipe } from '@ngneat/transloco';
import { addIcons } from 'ionicons';
import {
  car, carOutline,
  shieldCheckmarkOutline, shieldOutline,
  lockClosedOutline,
  constructOutline,
  homeOutline, chevronForwardOutline,
  speedometerOutline, documentTextOutline, documentOutline,
  barChartOutline, warningOutline,
} from 'ionicons/icons';

@Component({
    selector: 'hau-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [IonIcon, TranslocoPipe],
})
export class LoginComponent implements OnInit {
    constructor(
        private authService: AuthService,
        private router: Router,
        private destroyRef: DestroyRef,
    ) {
        addIcons({
            car, carOutline,
            shieldCheckmarkOutline, shieldOutline,
            lockClosedOutline,
            constructOutline,
            homeOutline, chevronForwardOutline,
            speedometerOutline, documentTextOutline, documentOutline,
            barChartOutline, warningOutline,
        });
    }

    ngOnInit(): void {
        this.authService.redirectToMainIfAuthenticated(this.router);

        this.authService.isLoggedIn$
            .pipe(
                filter((loggedIn) => loggedIn),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe(() => {
                this.authService.redirectToMainIfAuthenticated(this.router);
            });
    }

    loginWithGoogle() {
        this.authService.loginWithGoogle();
    }
}
