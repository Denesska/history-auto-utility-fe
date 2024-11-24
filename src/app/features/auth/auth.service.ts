import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private API_URL = environment.apiUrl;
    private tokenKey = 'jwt';
    public isLoggedIn$ = new BehaviorSubject<boolean>(this.hasToken());

    loginWithGoogle() {
        window.location.href = `${this.API_URL}/auth/google`;
    }


    saveToken(token: string) {
        localStorage.setItem(this.tokenKey, token);
        this.isLoggedIn$.next(true);
    }

    getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
    }

    hasToken(): boolean {
        return !!this.getToken();
    }

    logout() {
        localStorage.removeItem(this.tokenKey);
        this.isLoggedIn$.next(false);
    }
}
