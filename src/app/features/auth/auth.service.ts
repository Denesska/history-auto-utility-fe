import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, Observable, of, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private API_URL = environment.apiUrl;
    private tokenKey = 'jwt';
    private refreshKey = 'refreshJwt';
    public isLoggedIn$ = new BehaviorSubject<boolean>(this.hasToken());

    constructor(private http: HttpClient) {
    }

    checkSession(): Observable<boolean> {
        return this.http.get(`${this.API_URL}/auth/me`).pipe(
            map(() => true),
            catchError((error) => {
                console.error("Session check failed:", error);
                return of(false);
            })
        );
    }

    refreshSession(): Observable<boolean> {
        return this.http.post(`${this.API_URL}/auth/refresh`, {}).pipe(
            map(() => true),
            catchError((error) => {
                console.error("Refresh token failed:", error);
                return of(false);
            })
        );
    }


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

    getRefreshToken(): string | null {
        return localStorage.getItem(this.refreshKey);
    }

    hasToken(): boolean {
        return !!this.getToken();
    }

    logout(returnUrl: string) {
        localStorage.removeItem(this.tokenKey);
        this.isLoggedIn$.next(false);
    }

    refreshAccessToken(): Observable<string> {
        return this.http.post<{ accessToken: string }>(`${this.API_URL}/auth/refresh-token`, {}).pipe(
            map((res) => res.accessToken),
            catchError((error) => {
                console.error('Error refreshing access token:', error.message);
                return throwError(() => error);
            })
        );
    }
}

export interface RefreshTokenResponse {
    accessToken: string;
    refreshToken: string;
}