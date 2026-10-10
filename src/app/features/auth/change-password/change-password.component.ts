import { Component, OnInit, computed, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { IonIcon, IonSpinner, ToastController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { keyOutline } from 'ionicons/icons';
import { AuthService } from '@hau/features/auth/auth.service';
import { HAU_ROUTES } from '@hau/app.routes.const';

/**
 * Forced first-login password change for company-managed (local-login)
 * accounts, and the voluntary "change my password" flow reached from
 * Settings — same form, same backend call, the only difference is framing
 * (heading/copy) and where it navigates on success. Distinguished by the
 * `forced` query param: authGuard sets `?forced=true` when it redirects here
 * because the logged-in user's profile still has must_change_password=true;
 * the Settings entry links here with no query param at all.
 */
@Component({
    selector: 'hau-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonIcon, IonSpinner, TranslocoPipe],
})
export class ChangePasswordComponent implements OnInit {
    private readonly authService = inject(AuthService);
    private readonly router = inject(Router);
    private readonly route = inject(ActivatedRoute);
    private readonly transloco = inject(TranslocoService);
    private readonly toastCtrl = inject(ToastController);

    readonly forced = signal(false);

    readonly currentPassword = signal('');
    readonly newPassword = signal('');
    readonly confirmPassword = signal('');

    readonly busy = signal(false);
    readonly errorKey = signal<string | null>(null);

    readonly tooShort = computed(() => this.newPassword().length > 0 && this.newPassword().length < 8);
    readonly missingLetterOrDigit = computed(() => {
        const value = this.newPassword();
        return value.length > 0 && !(/[a-zA-Z]/.test(value) && /\d/.test(value));
    });
    readonly mismatch = computed(() => this.confirmPassword().length > 0 && this.newPassword() !== this.confirmPassword());

    readonly newPasswordValid = computed(() =>
        this.newPassword().length >= 8 && /[a-zA-Z]/.test(this.newPassword()) && /\d/.test(this.newPassword()),
    );

    readonly isValid = computed(() =>
        this.currentPassword().trim().length > 0 &&
        this.newPasswordValid() &&
        this.newPassword() === this.confirmPassword() &&
        this.confirmPassword().length > 0,
    );

    constructor() {
        addIcons({ keyOutline });
    }

    ngOnInit(): void {
        this.forced.set(this.route.snapshot.queryParamMap.get('forced') === 'true');
    }

    // Bound to native `(submit)`, not `(ngSubmit)` — this component doesn't
    // import FormsModule (fields are wired manually via signals), so
    // `(ngSubmit)` never actually binds and the browser would otherwise fall
    // back to a real form submission (new/current password serialized into
    // the URL's query string). See the identical fix in LoginComponent.
    submit(event?: Event): void {
        event?.preventDefault();
        this.errorKey.set(null);

        if (!this.isValid() || this.busy()) {
            return;
        }

        this.busy.set(true);
        this.authService.changePassword(this.currentPassword(), this.newPassword()).subscribe({
            next: () => this.onSuccess(),
            error: (err) => this.onError(err),
        });
    }

    private onSuccess(): void {
        this.busy.set(false);
        if (this.forced()) {
            void this.router.navigate([HAU_ROUTES.main.fullPath], { replaceUrl: true });
            return;
        }

        void this.presentSuccessToast();
        void this.router.navigate([HAU_ROUTES.settings.fullPath]);
    }

    private async presentSuccessToast(): Promise<void> {
        const toast = await this.toastCtrl.create({
            message: this.transloco.translate('auth.changePassword.success'),
            duration: 3000,
            color: 'success',
            position: 'top',
        });
        await toast.present();
    }

    private onError(err: unknown): void {
        this.busy.set(false);
        const status = (err as { status?: number })?.status;
        this.errorKey.set(status === 401
            ? 'auth.changePassword.wrongCurrentPassword'
            : 'auth.changePassword.genericError');
    }

    cancel(): void {
        void this.router.navigate([HAU_ROUTES.settings.fullPath]);
    }
}
