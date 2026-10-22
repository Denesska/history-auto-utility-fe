import { HttpClient } from '@angular/common/http';
import { Component, OnInit, computed, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonIcon, IonSpinner } from '@ionic/angular';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { addIcons } from 'ionicons';
import { arrowBackOutline, documentTextOutline } from 'ionicons/icons';
import { catchError, throwError } from 'rxjs';
import { AuthService, AUTH_ROUTES } from '@hau/features/auth';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';
import { LANGUAGE_STORAGE_KEY } from '@hau/core/transloco/transloco-http-loader.service';
import { LegalDocType } from '../legal.routes.const';
import { internalLegalLinkHref } from '../legal-link.util';

/** Only used for a language with no file (every supported UI language - ro/en/ru - has one). `ro` stays the authoritative text. */
const FALLBACK_LANG = 'en';

/**
 * Public Terms/Privacy page (`/legal/terms`, `/legal/privacy`) — works logged
 * in or out, no `authGuard`. Fetches the raw HTML fragment for the active
 * Transloco language from `assets/legal/<doc>.<lang>.html` and renders it
 * via `[innerHTML]`. See `features/legal/FEATURE.md`.
 */
@UntilDestroy()
@Component({
    selector: 'hau-legal-document',
    templateUrl: './legal-document.component.html',
    styleUrls: ['./legal-document.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonIcon, IonSpinner, TranslocoPipe, DropdownComponent],
})
export class LegalDocumentComponent implements OnInit {
    private readonly http = inject(HttpClient);
    private readonly route = inject(ActivatedRoute);
    private readonly router = inject(Router);
    private readonly transloco = inject(TranslocoService);
    private readonly authService = inject(AuthService);

    private doc: LegalDocType = 'terms';

    readonly loading = signal(true);
    readonly error = signal(false);
    readonly content = signal<string>('');

    readonly languageOptions: DropdownOption[] = [
        { value: 'ro', label: 'Română' },
        { value: 'en', label: 'English' },
        { value: 'ru', label: 'Русский' },
    ];
    readonly activeLang = signal(this.transloco.getActiveLang());

    readonly titleKey = computed(() => this.doc === 'terms' ? 'legal.document.termsTitle' : 'legal.document.privacyTitle');

    constructor() {
        addIcons({ arrowBackOutline, documentTextOutline });
    }

    ngOnInit(): void {
        this.doc = (this.route.snapshot.data['doc'] as LegalDocType) ?? 'terms';
        this.load(this.activeLang());

        // Re-fetch if the language changes while this page is open (e.g. switched
        // from the picker below, or from another tab sharing the same Transloco state).
        this.transloco.langChanges$.pipe(untilDestroyed(this)).subscribe(lang => {
            if (lang !== this.activeLang()) {
                this.activeLang.set(lang);
                this.load(lang);
            }
        });
    }

    /** Switches the app-wide active language (same storage key as Settings' language switch). */
    onLanguageChange(lang: string | number): void {
        const code = String(lang);
        if (code === this.transloco.getActiveLang()) return;
        this.transloco.setActiveLang(code);
        try {
            window.localStorage.setItem(LANGUAGE_STORAGE_KEY, code);
        } catch {
            // Best-effort convenience only — the page still works without persisting it.
        }
    }

    retry(): void {
        this.load(this.activeLang());
    }

    /** Internal `/legal/...` links inside the fetched content go through the router instead of a real navigation. */
    onContentClick(event: Event): void {
        const href = internalLegalLinkHref(event);
        if (!href) return;
        event.preventDefault();
        void this.router.navigateByUrl(href);
    }

    goBack(): void {
        if (window.history.length > 1) {
            window.history.back();
            return;
        }
        const fallback = this.authService.hasToken() ? HAU_ROUTES.main.fullPath : AUTH_ROUTES.login.fullPath;
        void this.router.navigateByUrl(fallback, { replaceUrl: true });
    }

    private load(lang: string): void {
        this.loading.set(true);
        this.error.set(false);
        this.fetchDoc(lang).subscribe({
            next: html => {
                this.content.set(html);
                this.loading.set(false);
            },
            error: () => {
                this.loading.set(false);
                this.error.set(true);
            },
        });
    }

    /** `lang`, falling back to `en` if that language has no file for this document. */
    private fetchDoc(lang: string) {
        return this.http.get(`assets/legal/${this.doc}.${lang}.html`, { responseType: 'text' }).pipe(
            catchError(() => lang === FALLBACK_LANG
                ? throwError(() => new Error('legal document missing'))
                : this.http.get(`assets/legal/${this.doc}.${FALLBACK_LANG}.html`, { responseType: 'text' })),
        );
    }
}
