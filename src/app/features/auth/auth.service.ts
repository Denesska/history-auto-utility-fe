import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, filter, Observable, of, switchMap, take, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Capacitor } from '@capacitor/core';
import { Browser } from '@capacitor/browser';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private API_URL = environment.apiUrl;
    private tokenKey = 'jwt';
    private refreshKey = 'refreshJwt';
    public isLoggedIn$ = new BehaviorSubject<boolean>(this.hasToken());

    private isRefreshing = false;
    private refreshResult$ = new BehaviorSubject<boolean | null>(null);

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
        if (this.isRefreshing) {
            return this.refreshResult$.pipe(
                filter(result => result !== null),
                take(1),
                switchMap(result => result ? of(true) : throwError(() => new Error('Refresh failed')))
            );
        }

        this.isRefreshing = true;
        this.refreshResult$.next(null);

        return this.http.post(`${this.API_URL}/auth/refresh`, {}).pipe(
            map(() => {
                this.isRefreshing = false;
                this.refreshResult$.next(true);
                return true;
            }),
            catchError((error) => {
                this.isRefreshing = false;
                this.refreshResult$.next(false);
                console.error("Refresh token failed:", error);
                return throwError(() => error);
            })
        );
    }


    loginWithGoogle() {
        const origin = encodeURIComponent(window.location.origin);
        const loginUrl = `${this.API_URL}/auth/google?origin=${origin}`;

        if (Capacitor.isNativePlatform()) {
            void Browser.open({ url: loginUrl });
            return;
        }

        window.location.href = loginUrl;
    }

    handleOAuthCallback(url: string): boolean {
        try {
            const parsed = new URL(url);
            const isTokenPath =
                parsed.pathname === '/auth/token' ||
                parsed.pathname.endsWith('/auth/token');

            if (!isTokenPath) {
                return false;
            }

            const token = parsed.searchParams.get('token');
            if (token) {
                this.saveToken(token);
                return true;
            }
        } catch {
            return false;
        }

        return false;
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