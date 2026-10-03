import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, catchError, filter, from, Observable, of, switchMap, take, tap, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { Browser } from '@capacitor/browser';
import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { SessionContext, SessionContextService } from './session-context.service';
import { Store } from '@ngxs/store';
import { BootstrapActions } from '@hau/shared/state/bootstrap/bootstrap.actions';
import { CarListActions } from '@hau/features/cars/state/car-list/car-list.actions';
import { CarDetailsActions } from '@hau/features/cars/state/car-details/car-details.actions';

export type LoginTab = 'personal' | 'business';
export type LoginContext = LoginTab;

export interface UserProfile {
    id: number;
    email: string;
    google_id?: string | null;
    must_change_password: boolean;
    is_company_managed: boolean;
    ctx?: SessionContext;
}

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

    // Cached /auth/me response. Populated by checkSession() (called by
    // authGuard on every navigation and by redirectToMainIfAuthenticated), and
    // by getProfile() on first access if nothing has populated it yet. Cleared
    // on logout so a different account never inherits a stale cached profile.
    public profile$ = new BehaviorSubject<UserProfile | null>(null);

    private isRefreshing = false;
    private refreshResult$ = new BehaviorSubject<boolean | null>(null);

    // Temporary diagnostic: unique per app process/instance, sent on every
    // request so backend logs can tell apart "same session" vs "app restarted".
    readonly instanceId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    private readonly sessionContext = inject(SessionContextService);
    private readonly store = inject(Store);
    private readonly loginTabKey = 'hau_login_tab';

    constructor(private http: HttpClient) {
    }

    async init(): Promise<void> {
        try {
            const { value } = await SecureStoragePlugin.get({ key: this.tokenKey });
            this.cachedToken = value || null;
        } catch {
            this.cachedToken = null;
        }
        await this.seedDevTokenIfPresent();
        this.isLoggedIn$.next(this.hasToken());
    }

    /**
     * Dev-only convenience for the `proxy` setup (localhost:4200 → dev backend).
     * Web login can't set a first-party cookie for localhost, so instead we feed
     * a JWT copied from a real dev session and send it as a Bearer token.
     * Source order: `?devToken=<jwt>` in the URL (copied into localStorage, then
     * stripped from the URL), else a previously-stored `localStorage.dev_jwt`.
     * No-op in production builds.
     */
    private async seedDevTokenIfPresent(): Promise<void> {
        if (environment.production || typeof window === 'undefined') {
            return;
        }

        try {
            const url = new URL(window.location.href);
            const urlToken = url.searchParams.get('devToken');
            if (urlToken) {
                window.localStorage.setItem('dev_jwt', urlToken);
                url.searchParams.delete('devToken');
                window.history.replaceState({}, document.title, url.pathname + url.search + url.hash);
            }

            const devToken = window.localStorage.getItem('dev_jwt');
            if (devToken) {
                await this.saveToken(devToken);
            }
        } catch {
            // Best-effort dev helper — never block bootstrap on it.
        }
    }

    checkSession(): Observable<boolean> {
        return this.http.get<UserProfile>(`${this.API_URL}/auth/me`).pipe(
            tap((profile) => this.applyProfile(profile)),
            map(() => true),
            catchError((error) => {
                console.error("Session check failed:", error);
                return of(false);
            })
        );
    }

    /**
     * Returns the cached profile if one is already known (populated by a
     * prior checkSession() call), otherwise fetches it from /auth/me. Used by
     * authGuard (to read must_change_password without re-fetching on every
     * navigation) and by the Settings screen (is_company_managed, to decide
     * whether to show the self-service "change password" entry).
     */
    getProfile(): Observable<UserProfile | null> {
        const cached = this.profile$.value;
        if (cached) {
            return of(cached);
        }

        return this.http.get<UserProfile>(`${this.API_URL}/auth/me`).pipe(
            tap((profile) => this.applyProfile(profile)),
            catchError((error) => {
                console.error("Profile fetch failed:", error);
                return of(null);
            })
        );
    }

    /**
     * Drops every user-scoped client cache (bootstrap data + its 5-minute TTL, car list,
     * open car). Called whenever a session starts or changes, so a new user/context never
     * inherits the previous one's data. Not called on token refresh or normal navigation.
     */
    private resetUserState(): void {
        this.store.dispatch([
            new BootstrapActions.Reset(),
            new CarListActions.Reset(),
            new CarDetailsActions.ClearCurrentCar(),
        ]);
    }

    private applyProfile(profile: UserProfile): void {
        const previous = this.profile$.value;
        if (previous && previous.id !== profile.id) {
            this.resetUserState();
        }
        this.profile$.next(profile);
        this.sessionContext.set(profile.ctx);
    }

    /** Last used login tab (Personal/Business); defaults to personal. Never throws. */
    getLoginTab(): LoginTab {
        try {
            return window.localStorage.getItem(this.loginTabKey) === 'business' ? 'business' : 'personal';
        } catch {
            return 'personal';
        }
    }

    setLoginTab(tab: LoginTab): void {
        try {
            window.localStorage.setItem(this.loginTabKey, tab);
        } catch {
            // Best-effort convenience only.
        }
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


    loginWithGoogle(context: LoginContext = 'personal') {
        const origin = encodeURIComponent(window.location.origin);
        const loginUrl = `${this.API_URL}/auth/google?context=${context}&origin=${origin}`;

        if (Capacitor.isNativePlatform()) {
            void Browser.open({ url: loginUrl });
            return;
        }

        window.location.href = loginUrl;
    }

    /**
     * Company-issued username+password login (no Google identity) — e.g.
     * the short, globally-unique username plus a company-set password.
     * Mirrors the OAuth flows' token-persistence convention: always call
     * saveToken with the returned accessToken, regardless of platform — web
     * also gets the access_token httpOnly cookie set server-side, but we still
     * persist the token client-side the same way everywhere else does.
     */
    loginLocal(
        identity: { username: string },
        password: string,
    ): Observable<{ mustChangePassword: boolean }> {
        return this.http.post<{ accessToken: string; mustChangePassword: boolean; ctx?: SessionContext }>(`${this.API_URL}/auth/local-login`, { ...identity, password, context: 'business' }).pipe(
            // Set ctx before saveToken: saveToken flips isLoggedIn$, which makes the
            // login screen navigate into /main right away.
            tap((response) => {
                this.resetUserState();
                this.sessionContext.set(response.ctx);
            }),
            switchMap((response) => from(this.saveToken(response.accessToken)).pipe(map(() => ({ mustChangePassword: response.mustChangePassword })))),
        );
    }

    /**
     * Picks the active organization for a business session (`POST /auth/context`),
     * stores the new token exactly like login does, then re-reads /auth/me so the
     * profile and SessionContextService carry the organization name too.
     * Errors carry `error.error.code` = PERSONAL_SESSION | NOT_ORG_MEMBER.
     */
    selectOrganization(organizationId: number): Observable<void> {
        return this.http.post<{ accessToken: string; ctx: SessionContext }>(`${this.API_URL}/auth/context`, { organizationId }).pipe(
            tap((response) => {
                this.resetUserState();
                this.sessionContext.set(response.ctx);
            }),
            switchMap((response) => from(this.saveToken(response.accessToken))),
            switchMap(() => this.http.get<UserProfile>(`${this.API_URL}/auth/me`)),
            tap((profile) => this.applyProfile(profile)),
            map(() => undefined as void),
        );
    }

    /**
     * Changes the password for a company-managed (local-login) account.
     * Covers both the forced first-change flow (currentPassword is whatever
     * the user just logged in with — the shared default) and a later
     * voluntary change — same endpoint, same body shape either way.
     */
    changePassword(currentPassword: string, newPassword: string): Observable<void> {
        return this.http.post<void>(`${this.API_URL}/auth/change-password`, { currentPassword, newPassword }).pipe(
            // Clear the forced flag on the cached profile immediately so the
            // guard stops redirecting to /auth/change-password without
            // waiting for the next /auth/me round trip.
            tap(() => {
                const current = this.profile$.value;
                if (current) {
                    this.profile$.next({ ...current, must_change_password: false });
                }
            }),
        );
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
                await this.startSession(token);
                return true;
            }
        } catch {
            return false;
        }

        return false;
    }

    /** Google login landing: a brand-new session, so user-scoped client state is dropped before the token is stored. */
    async startSession(token: string): Promise<void> {
        this.resetUserState();
        await this.saveToken(token);
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
        this.profile$.next(null);
        this.sessionContext.clear();
        this.resetUserState();
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