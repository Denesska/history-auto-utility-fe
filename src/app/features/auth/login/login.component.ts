import { Component } from "@angular/core";
import {AuthService} from "@hau/features/auth/auth.service";

@Component({
    selector: 'hau-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true
})
export class LoginComponent {
    constructor(private authService: AuthService) {}

    loginWithGoogle() {
        this.authService.loginWithGoogle();
    }
}