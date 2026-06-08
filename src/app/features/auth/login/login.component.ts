import { Component } from '@angular/core';
import { AuthService } from '@hau/features/auth/auth.service';
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
export class LoginComponent {
    constructor(private authService: AuthService) {
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

    loginWithGoogle() {
        this.authService.loginWithGoogle();
    }
}
