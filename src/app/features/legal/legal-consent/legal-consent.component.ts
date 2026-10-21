import { Component, OnInit, computed, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { IonIcon, IonSpinner } from '@ionic/angular';
import { TranslocoPipe } from '@jsverse/transloco';
import { addIcons } from 'ionicons';
import { logOutOutline, shieldCheckmarkOutline } from 'ionicons/icons';
import { AuthService, AUTH_ROUTES, LegalStatus } from '@hau/features/auth';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { LegalApiService } from '../legal-api.service';
import { internalLegalLinkHref } from '../legal-link.util';

/**
 * Mandatory GDPR consent gate (`/auth/legal-consent`) — blocks the app until the
 * signed-in user accepts the current Terms/Privacy versions. Reached via
 * `authGuard`'s redirect (see `features/auth/auth.guard.ts`) whenever the cached
 * profile's `legal.needsAcceptance` is true; `returnUrl` carries where the user
 * was originally headed. See `features/legal/FEATURE.md`.
 */
@Component({
    selector: 'hau-legal-consent',
    templateUrl: './legal-consent.component.html',
    styleUrls: ['./legal-consent.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonIcon, IonSpinner, TranslocoPipe],
})
export class LegalConsentComponent implements OnInit {
    private readonly authService = inject(AuthService);
    private readonly legalApi = inject(LegalApiService);
    private readonly router = inject(Router);
    private readonly route = inject(ActivatedRoute);

    readonly loading = signal(true);
    readonly busy = signal(false);
    readonly errorKey = signal<string | null>(null);
    readonly legal = signal<LegalStatus | null>(null);
    readonly checked = signal(false);

    private returnUrl = HAU_ROUTES.main.fullPath;

    /** Already accepted an older version — different heading/copy than a first-ever acceptance. */
    readonly isUpdate = computed(() => {
        const legal = this.legal();
        return !!legal && (legal.acceptedTermsVersion !== null || legal.acceptedPrivacyVersion !== null);
    });

    readonly canAccept = computed(() => this.checked() && !this.busy() && !!this.legal());

    constructor() {
        addIcons({ logOutOutline, shieldCheckmarkOutline });
    }

    ngOnInit(): void {
        const requested = this.route.snapshot.queryParamMap.get('returnUrl');
        // Only ever navigate back into the app itself — never follow an arbitrary external value.
        this.returnUrl = requested && requested.startsWith('/') ? requested : HAU_ROUTES.main.fullPath;
        this.loadStatus();
    }

    /** Terms/Privacy links embedded in the checkbox label (`legal.consent.checkboxLabel`, rendered via `[innerHTML]`). */
    onLabelClick(event: Event): void {
        const href = internalLegalLinkHref(event);
        if (!href) return;
        event.preventDefault();
        if (Capacitor.isNativePlatform()) {
            void this.router.navigateByUrl(href);
            return;
        }
        window.open(href, '_blank');
    }

    accept(): void {
        const legal = this.legal();
        if (!this.canAccept() || !legal) return;

        this.busy.set(true);
        this.errorKey.set(null);
        this.legalApi.accept(legal.termsVersion, legal.privacyVersion).subscribe({
            next: () => {
                // Re-read /auth/me so the cached profile's `legal` (needsAcceptance) is current
                // before authGuard re-evaluates the navigation to returnUrl.
                this.authService.checkSession().subscribe(() => {
                    this.busy.set(false);
                    void this.router.navigateByUrl(this.returnUrl, { replaceUrl: true });
                });
            },
            error: (err: unknown) => {
                this.busy.set(false);
                const body = (err as { status?: number; error?: { code?: string } })?.error;
                if ((err as { status?: number })?.status === 409 && body?.code === 'LEGAL_VERSION_OUTDATED') {
                    // A newer version landed while this screen was open — reload and show it again.
                    this.checked.set(false);
                    this.errorKey.set('legal.consent.versionOutdated');
                    this.loadStatus();
                    return;
                }
                this.errorKey.set('legal.consent.genericError');
            },
        });
    }

    declineAndLogOut(): void {
        if (this.busy()) return;
        this.busy.set(true);
        this.authService.logout().subscribe(() => {
            this.busy.set(false);
            void this.router.navigate([AUTH_ROUTES.login.fullPath], { replaceUrl: true });
        });
    }

    private loadStatus(): void {
        this.loading.set(true);
        this.authService.checkSession().subscribe({
            next: () => {
                this.legal.set(this.authService.profile$.value?.legal ?? null);
                this.loading.set(false);
            },
            error: () => {
                this.loading.set(false);
                this.errorKey.set('legal.consent.genericError');
            },
        });
    }
}
