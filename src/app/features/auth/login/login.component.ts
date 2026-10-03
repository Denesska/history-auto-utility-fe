import { Component, DestroyRef, ElementRef, OnInit, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, LoginTab } from '@hau/features/auth/auth.service';
import { AUTH_ROUTES } from '@hau/features/auth/auth.routes.const';
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
  businessOutline, personOutline, chevronDownOutline,
} from 'ionicons/icons';

@Component({
    selector: 'hau-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [IonIcon, TranslocoPipe],
})
export class LoginComponent implements OnInit {
    private readonly usernameKey = 'hau_business_username';
    // Retired: the Business login used to remember a company code; removed on load.
    private readonly legacyCompanyCodeKey = 'hau_business_company_code';

    // Personal | Business tab; last used one is remembered in localStorage.
    readonly tab = signal<LoginTab>('personal');
    // Translation key of an informational message shown above the form (e.g. redirected from personal login).
    readonly noticeKey = signal<string | null>(null);
    private readonly moreContent = viewChild<ElementRef<HTMLElement>>('moreContent');

    // Company-issued username+password login (Business tab) for employee/driver
    // accounts the company created directly (no Google identity).
    readonly rememberUsername = signal(false);
    readonly localEmail = signal('');
    readonly localPassword = signal('');
    readonly localBusy = signal(false);
    readonly localError = signal<string | null>(null);

    constructor(
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute,
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
            businessOutline, personOutline, chevronDownOutline,
        });
    }

    ngOnInit(): void {
        this.tab.set(this.authService.getLoginTab());
        try {
            const saved = window.localStorage.getItem(this.usernameKey);
            if (saved) {
                this.localEmail.set(saved);
                this.rememberUsername.set(true);
            }
            window.localStorage.removeItem(this.legacyCompanyCodeKey);
        } catch {
            // localStorage unavailable — nothing to prefill.
        }

        // A company-managed account tried the Personal tab: explain and switch to Business.
        if (this.route.snapshot.queryParamMap.get('error') === 'company_account_personal_login') {
            this.selectTab('business');
            this.noticeKey.set('auth.login.companyAccountPersonalLogin');
        }

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
        this.authService.loginWithGoogle(this.tab());
    }

    /** Mobile hint under the card: smooth-scroll to the marketing content. */
    scrollToMore(): void {
        this.moreContent()?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    selectTab(tab: LoginTab): void {
        this.tab.set(tab);
        this.authService.setLoginTab(tab);
        this.noticeKey.set(null);
    }

    toggleRememberUsername(checked: boolean): void {
        this.rememberUsername.set(checked);
        if (!checked) {
            this.persistUsername(null);
        }
    }

    // Only the username is ever stored — never the password.
    private persistUsername(username: string | null): void {
        try {
            if (username) {
                window.localStorage.setItem(this.usernameKey, username);
            } else {
                window.localStorage.removeItem(this.usernameKey);
            }
        } catch {
            // Best-effort convenience only.
        }
    }

    // Bound to the native `(submit)` event, not `(ngSubmit)` — this component
    // never imports FormsModule (every field here is wired manually via
    // signals, no ngModel/ngForm), so `(ngSubmit)` silently never binds and
    // the browser falls back to a real HTML form submission: a GET to the
    // current URL with every named input serialized into the query string.
    // That's exactly what happened before this fix — the login/password ended
    // up in the address bar, browser history, and nginx's access log instead
    // of ever reaching `/auth/local-login`. preventDefault() here is what a
    // working `ngSubmit` binding would have done for free.
    submitLocalLogin(event?: Event): void {
        event?.preventDefault();
        const username = this.localEmail().trim();
        const password = this.localPassword();
        if (!username || !password || this.localBusy()) {
            return;
        }

        this.localBusy.set(true);
        this.localError.set(null);
        this.noticeKey.set(null);
        this.persistUsername(this.rememberUsername() ? username : null);

        this.authService.loginLocal({ username }, password).subscribe({
            next: ({ mustChangePassword }) => {
                this.localBusy.set(false);
                if (mustChangePassword) {
                    // The existing isLoggedIn$ subscription above would otherwise
                    // redirect straight into /main (it has no concept of a forced
                    // password change) — navigate explicitly here instead of
                    // relying on it for this branch. For a normal local login
                    // (mustChangePassword false) we deliberately do nothing: the
                    // subscription already reacts to saveToken() setting
                    // isLoggedIn$ true and calls redirectToMainIfAuthenticated,
                    // so a second navigation call here would just duplicate it.
                    void this.router.navigate([AUTH_ROUTES.changePassword.fullPath], { queryParams: { forced: true } });
                }
            },
            error: () => {
                this.localBusy.set(false);
                this.localError.set('auth.localLogin.invalidCredentials');
            },
        });
    }
}
