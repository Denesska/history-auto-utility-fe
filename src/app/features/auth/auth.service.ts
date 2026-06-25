import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, filter, from, Observable, of, switchMap, take, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { Browser } from '@capacitor/browser';
import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin';
import { HAU_ROUTES } from '@hau/app.routes.const';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private API_URL = environment.apiUrl;
    private tokenKey = 'jwt';
    // Secure storage (Keychain/Keystore) is async; this cache backs the
    // synchronous reads needed by the HTTP interceptor on every request.
    // Populated by init() before the app finishes bootstrapping.
    private cachedToken: string | null = null;
    public isLoggedIn$ = new BehaviorSubject<boolean>(false);

    private isRefreshing = false;
    private refreshResult$ = new BehaviorSubject<boolean | null>(null);

    constructor(private http: HttpClient) {
    }

    async init(): Promise<void> {
        try {
            const { value } = await SecureStoragePlugin.get({ key: this.tokenKey });
            this.cachedToken = value || null;
        } catch {
            this.cachedToken = null;
        }
        this.isLoggedIn$.next(this.hasToken());
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

    redirectToMainIfAuthenticated(router: Router): void {
        this.checkSession().subscribe((isAuthenticated) => {
            if (isAuthenticated) {
                void router.navigate([HAU_ROUTES.main.fullPath], { replaceUrl: true });
            }
        });
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

        return this.http.post<{ accessToken?: string }>(`${this.API_URL}/auth/refresh`, {}).pipe(
            // Web relies on the httpOnly cookie set by this call; native has no
            // cookie jar, so it must persist the returned access token itself.
            // The write must complete (await it) before this resolves — if the app
            // gets backgrounded/killed right after, an un-awaited write can be lost,
            // leaving the next launch with a stale token.
            switchMap((response) => response?.accessToken
                ? from(this.saveToken(response.accessToken))
                : of(undefined)),
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

    async handleOAuthCallback(url: string): Promise<boolean> {
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
                await this.saveToken(token);
                return true;
            }
        } catch {
            return false;
        }

        return false;
    }

    // Awaited on purpose: the app can be backgrounded/killed a moment after
    // login or refresh, and an un-awaited secure-storage write can be lost,
    // leaving the next launch with a stale or missing token.
    async saveToken(token: string): Promise<void> {
        this.cachedToken = token;
        this.isLoggedIn$.next(true);
        try {
            await SecureStoragePlugin.set({ key: this.tokenKey, value: token });
        } catch {
            // Best-effort persistence — in-memory cache still reflects the new token.
        }
    }

    getToken(): string | null {
        return this.cachedToken;
    }

    hasToken(): boolean {
        return !!this.cachedToken;
    }

    async clearLocalAuth(): Promise<void> {
        this.cachedToken = null;
        this.isLoggedIn$.next(false);
        try {
            await SecureStoragePlugin.remove({ key: this.tokenKey });
        } catch {
            // Already absent — nothing to clean up.
        }
    }

    logout(): Observable<void> {
        return this.http.post<void>(`${this.API_URL}/auth/logout`, {}).pipe(
            catchError(() => of(undefined as void)),
            switchMap(() => from(this.clearLocalAuth())),
        );
    }
}