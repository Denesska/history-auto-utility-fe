import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private API_URL = environment.apiUrl;
    private tokenKey = 'jwt';
    private refreshKey = 'refreshJwt';
    public isLoggedIn$ = new BehaviorSubject<boolean>(this.hasToken());
    private accessTokenSubject = new BehaviorSubject<string | null>(null);

    constructor(private http: HttpClient) {
    }

    loginWithGoogle() {
        window.location.href = `${this.API_URL}/auth/google`;
    }


    saveToken(token: string, refresh: string) {
        localStorage.setItem(this.tokenKey, token);
        localStorage.setItem(this.refreshKey, refresh);
        this.isLoggedIn$.next(true);
    }

    getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
    }

    getRefreshToken(): string | null {
        return localStorage.getItem(this.refreshKey);
    }

    hasToken(): boolean {
        return !!this.getToken();
    }

    logout() {
        localStorage.removeItem(this.tokenKey);
        this.isLoggedIn$.next(false);
    }

    refreshAccessToken() {
        if (!this.getRefreshToken()) throw new Error('no refresh token set')
        return this.http
            .post<RefreshTokenResponse>('/api/auth/refresh', { refreshToken: this.getRefreshToken() })
            .pipe(
                tap(({accessToken, refreshToken}) => {
                    this.isLoggedIn$.next(true);
                    this.saveToken(accessToken, refreshToken)
                })
            );
    }
}

export interface RefreshTokenResponse {
    accessToken: string;
    refreshToken: string;
}