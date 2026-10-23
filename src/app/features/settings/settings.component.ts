import { LocalDatePipe } from '@hau/shared/pipes/local-date.pipe';
import {
  Component,
  computed,
  effect,
  inject,
  OnInit,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import {
  AlertController,
  IonContent,
  IonIcon,
  IonSpinner,
  ToastController,
  ViewWillEnter,
  ViewWillLeave,
} from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
import { Browser } from '@capacitor/browser';
import { addIcons } from 'ionicons';
import {
  gridOutline,
  listOutline,
  sunnyOutline,
  moonOutline,
  contrastOutline,
  speedometerOutline,
  notificationsOutline,
  documentTextOutline,
  receiptOutline,
  logOutOutline,
  businessOutline,
  briefcaseOutline,
  keyOutline,
  chevronForwardOutline,
  shieldCheckmarkOutline,
  downloadOutline,
  trashOutline,
  navigateOutline,
} from 'ionicons/icons';
import { ThemeMode, ThemeService } from '@hau/core/theme.service';
import { ViewMode, ViewModeService } from '@hau/core/view-mode.service';
import { LANGUAGE_STORAGE_KEY } from '@hau/core/transloco/transloco-http-loader.service';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { AdminApiService } from '@hau/features/admin';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { AuthService, AUTH_ROUTES, UserProfile } from '@hau/features/auth';
import { LEGAL_ROUTES } from '@hau/features/legal';
import { FeatureService } from '@hau/core/features/feature.service';
import { SessionContextService } from '@hau/core/session/session-context.service';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { CarListFacade } from '@hau/features/cars';
import { NotificationsSocketService } from '@hau/core/notifications-socket.service';
import { NotificationsPanelComponent } from '@hau/features/notifications';
import { AccountDetailsComponent } from '@hau/features/main';
import { NavigationPreferencesService } from '@hau/core/navigation/navigation-preferences.service';
import { SingleCarService } from '@hau/core/navigation/single-car.service';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';
import { BottomBarEditorPanelComponent } from './bottom-bar-editor-panel/bottom-bar-editor-panel.component';
import { DefaultCurrencyService } from '@hau/core/currency/default-currency.service';
import { COMMON_CURRENCIES } from '@hau/shared/config/currency.config';
import { SettingsService, UpdateUserSettings } from './settings.service';
import { AccountApiService } from './account-api.service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    IonContent,
    IonIcon,
    IonSpinner,
    TranslocoPipe,
    AsyncPipe,
    LocalDatePipe,
    NotificationsPanelComponent,
    AccountDetailsComponent,
    DropdownComponent,
    BottomBarEditorPanelComponent,
  ],
})
export class SettingsComponent implements OnInit, ViewWillEnter, ViewWillLeave {
  private readonly transloco = inject(TranslocoService);
  private readonly themeService = inject(ThemeService);
  private readonly viewModeService = inject(ViewModeService);
  private readonly settingsService = inject(SettingsService);
  private readonly _headerActions = inject(HeaderActionsService);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);
  private readonly carListFacade = inject(CarListFacade);
  private readonly notificationsSocketService = inject(
    NotificationsSocketService,
  );
  private readonly adminApi = inject(AdminApiService);
  private readonly bootstrapFacade = inject(BootstrapFacade);
  readonly sessionContext = inject(SessionContextService);
  private readonly featureService = inject(FeatureService);
  private readonly toastCtrl = inject(ToastController);
  private readonly alertCtrl = inject(AlertController);
  private readonly accountApi = inject(AccountApiService);
  readonly navPrefs = inject(NavigationPreferencesService);
  private readonly singleCar = inject(SingleCarService);
  private readonly defaultCurrency = inject(DefaultCurrencyService);

  private readonly _isAdminFlag = signal(false);

  /** Admin page entry — personal context only (app-owner tool) and still needs is_admin. Mobile has no sidebar, so this card is its only way in. */
  readonly isAdmin = computed(
    () => this._isAdminFlag() && this.sessionContext.isPersonal(),
  );

  /** Organization entry — business context only (see ACCOUNT-CONTEXT.md). */
  readonly showOrganization = computed(() => this.sessionContext.isBusiness());

  /** Suppliers entry — business context and the 'supplier' feature switched on. */
  readonly showSuppliers = computed(() => this.sessionContext.isBusiness() && this.featureService.isEnabled('supplier'));

  /** Sale contracts — hidden for DRIVER/FINANCE in business, mirrors the route's `orgRoles`. */
  readonly showSaleContracts = computed(() => {
    if (!this.featureService.isEnabled('sale_contract')) return false;
    if (!this.sessionContext.isBusiness()) return true;
    const role = this.sessionContext.activeOrgRole();
    return role === 'OWNER' || role === 'SUPER_ADMIN' || role === 'FLEET_ADMIN';
  });

  /**
   * Self-service "change password" entry — only shown for a company-managed
   * (local-login) account. A Google-identity account manages its password
   * through Google, not here, and is_company_managed is always false for it.
   */
  readonly isCompanyManaged = signal(false);

  // ── GDPR rights (Account section): terms/privacy links, data export, account deletion ──
  readonly profile = toSignal(this.authService.profile$, { initialValue: null as UserProfile | null });
  readonly legalAcceptedAt = computed(() => this.profile()?.legal?.acceptedAt ?? null);
  readonly exporting = signal(false);
  readonly deletingAccount = signal(false);

  readonly themeMode$ = this.themeService.mode$;
  readonly viewMode$ = this.viewModeService.viewMode$;

  readonly languages: { code: string; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'ro', label: 'RO' },
    { code: 'ru', label: 'РУ' },
  ];

  readonly reminderDayOptions = [0, 1, 3, 7, 14, 30];
  remindersEnabled = true;
  maintenanceRemindersEnabled = true;
  reminderDays: number[] = [7, 3, 1, 0];

  /** Sentinel `<app-dropdown>` value for "no favourite car" — distinct from any real car id. */
  private static readonly NO_FAVORITE_CAR = 'none';

  /** Sentinel `<app-dropdown>` value for "Automatic" currency (saved as `currency: null`). */
  private static readonly AUTO_CURRENCY = 'auto';

  /** Active (non-SOLD) cars of the current context — favourite picker is hidden below 2. */
  readonly activeCars = this.singleCar.activeCars;

  /** Favourite-car control: hidden with 0 or 1 car, where it would be implicit or meaningless. */
  readonly showFavoriteCar = computed(() => this.activeCars().length > 1);

  readonly favoriteCarValue = computed<string | number>(
    () => this.navPrefs.favoriteCarId() ?? SettingsComponent.NO_FAVORITE_CAR,
  );

  // ── Bottom-bar editor (opened from the "Customize bottom bar" row) ──
  // The editor itself is a separate component (`bottom-bar-editor-panel/`) — see its own doc
  // comment for why (it has to reparent itself to <body> to escape the routed page's Ionic
  // `.ion-page` CSS containment, same fix as `add-maintenance-panel`). This page only owns
  // whether it exists at all.
  bottomBarEditorOpen = false;

  constructor() {
    addIcons({
      gridOutline,
      listOutline,
      sunnyOutline,
      moonOutline,
      contrastOutline,
      speedometerOutline,
      notificationsOutline,
      documentTextOutline,
      receiptOutline,
      logOutOutline,
      businessOutline,
      briefcaseOutline,
      keyOutline,
      chevronForwardOutline,
      shieldCheckmarkOutline,
      downloadOutline,
      trashOutline,
      navigateOutline,
    });
    // NavigationPreferencesService swallows a failed PUT for its other callers (the car hub's
    // favourite star); this screen is the one place the user is actively editing these prefs,
    // so it's the one that surfaces the failure, via the same error-toast pattern the rest of
    // the app uses.
    effect(() => {
      if (this.navPrefs.saveError()) {
        this.navPrefs.clearSaveError();
        void this._showSaveErrorToast();
      }
    });
  }

  ngOnInit(): void {
    this.adminApi
      .isAdmin()
      .subscribe(isAdmin => this._isAdminFlag.set(isAdmin));
    this.authService
      .getProfile()
      .subscribe(profile =>
        this.isCompanyManaged.set(!!profile?.is_company_managed),
      );
    this.settingsService.getSettings().subscribe({
      next: settings => {
        this.remindersEnabled = settings.expiry_reminders_enabled;
        this.reminderDays = settings.expiry_reminder_days;
        this.maintenanceRemindersEnabled = settings.maintenance_reminders_enabled ?? true;
        this.defaultCurrency.setPreferred(settings.currency ?? null);
      },
      error: () => {},
    });
  }

  // IonicRouteStrategy caches routed pages, so ngOnDestroy doesn't reliably
  // fire on back-navigation — these Ionic lifecycle hooks do.
  ionViewWillEnter(): void {
    this._headerActions.setTitle(this.transloco.translate('settings.title'));
  }

  ionViewWillLeave(): void {
    // Defensive: this page projects no action buttons, but clearing both
    // slots on leave keeps the invariant that no page ever inherits
    // another's — a lingering *start* template would hide the back button.
    this._headerActions.clear();
    this._headerActions.clearTitle();
  }

  get activeLang(): string {
    return this.transloco.getActiveLang();
  }

  /** Favourite-car dropdown: "None" plus every active car of the current context. */
  get favoriteCarOptions(): DropdownOption[] {
    return [
      { value: SettingsComponent.NO_FAVORITE_CAR, label: this.transloco.translate('settings.favoriteCar.none') },
      ...this.activeCars().map(car => ({ value: car.id, label: this._carLabel(car) })),
    ];
  }

  /** Default-currency dropdown: "Automatic (<detected>)", then the common currencies plus the detected / saved one if missing. */
  get currencyOptions(): DropdownOption[] {
    const detected = this.defaultCurrency.detectedCurrency;
    const codes = [...COMMON_CURRENCIES];
    for (const code of [detected, this.defaultCurrency.preferredCurrency]) {
      if (code && !codes.includes(code)) codes.push(code);
    }
    return [
      {
        value: SettingsComponent.AUTO_CURRENCY,
        label: this.transloco.translate('settings.currency.auto', { currency: detected }),
      },
      ...codes.map(code => ({ value: code, label: code })),
    ];
  }

  get currencyValue(): string {
    return this.defaultCurrency.preferredCurrency ?? SettingsComponent.AUTO_CURRENCY;
  }

  setCurrency(value: string | number): void {
    const currency = value === SettingsComponent.AUTO_CURRENCY ? null : String(value);
    if (currency === this.defaultCurrency.preferredCurrency) return;
    this.defaultCurrency.setPreferred(currency);
    this.persist({ currency });
  }

  setFavoriteCar(value: string | number): void {
    this.navPrefs.setFavoriteCar(value === SettingsComponent.NO_FAVORITE_CAR ? null : Number(value));
  }

  private _carLabel(car: { nickname?: string | null; make: string; model: string; license_plate?: string | null }): string {
    const name = car.nickname || `${car.make} ${car.model}`;
    return car.license_plate ? `${name} · ${car.license_plate}` : name;
  }

  private async _showSettingsSaveErrorToast(): Promise<void> {
    const toast = await this.toastCtrl.create({
      message: this.transloco.translate('settings.saveError'),
      duration: 4000,
      color: 'danger',
      position: 'top',
    });
    await toast.present();
  }

  private async _showSaveErrorToast(): Promise<void> {
    const toast = await this.toastCtrl.create({
      message: this.transloco.translate('settings.bottomBar.saveError'),
      duration: 4000,
      color: 'danger',
      position: 'top',
    });
    await toast.present();
  }

  goToDocuments(): void {
    void this.router.navigate([HAU_ROUTES.documents.fullPath]);
  }

  goToAdmin(): void {
    void this.router.navigate([HAU_ROUTES.admin.fullPath]);
  }

  goToOrganization(): void {
    void this.router.navigate([HAU_ROUTES.organization.fullPath]);
  }

  goToSuppliers(): void {
    void this.router.navigate([HAU_ROUTES.supplier.fullPath]);
  }

  goToSaleContracts(): void {
    void this.router.navigate([HAU_ROUTES.saleContract.fullPath]);
  }

  goToChangePassword(): void {
    // No `forced` query param here — this is the voluntary path, so the
    // change-password screen shows the plain "change your password"
    // framing instead of the "your company set a temporary password" one.
    void this.router.navigate([AUTH_ROUTES.changePassword.fullPath]);
  }

  goToSentDestinations(): void {
    void this.router.navigate([HAU_ROUTES.sentDestinations.fullPath]);
  }

  goToTerms(): void {
    void this.router.navigate([LEGAL_ROUTES.terms.fullPath]);
  }

  goToPrivacy(): void {
    void this.router.navigate([LEGAL_ROUTES.privacy.fullPath]);
  }

  /** GDPR "download my data" (Art. 15/20) — see FEATURE.md for how each platform saves the file. */
  downloadMyData(): void {
    if (this.exporting()) return;
    this.exporting.set(true);
    this.accountApi.exportMyData().subscribe({
      next: blob => {
        this.exporting.set(false);
        this._saveExportFile(blob);
        void this._showToast(this.transloco.translate('settings.account.export.success'));
      },
      error: () => {
        this.exporting.set(false);
        void this._showToast(this.transloco.translate('settings.account.export.error'), 'danger');
      },
    });
  }

  /**
   * Web: a plain object-URL download, same trick as every signed-URL download
   * elsewhere in the app, minus the signed URL (this one *is* the file).
   * Native: no Filesystem/Share plugin is wired up in this app yet (checked
   * `DocumentFileService`/`SaleContractApiService` — both just follow a signed
   * URL in the in-app browser, which doesn't apply to a direct blob response).
   * Fallback: open the JSON as a data: URL in the in-app browser so the user
   * can at least read/copy/share it from there.
   */
  private _saveExportFile(blob: Blob): void {
    const fileName = `hau-export-${new Date().toISOString().slice(0, 10)}.json`;
    if (Capacitor.isNativePlatform()) {
      const reader = new FileReader();
      reader.onload = () => void Browser.open({ url: reader.result as string });
      reader.readAsDataURL(blob);
      return;
    }
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  }

  /** GDPR "delete my account" (Art. 17) — hidden for company-managed accounts in the template. */
  async confirmDeleteAccount(): Promise<void> {
    const profile = this.profile();
    if (!profile || this.deletingAccount()) return;

    const alert = await this.alertCtrl.create({
      header: this.transloco.translate('settings.account.delete.title'),
      message: this.transloco.translate('settings.account.delete.body', { email: profile.email }),
      inputs: [{ name: 'confirmation', type: 'text', placeholder: profile.email }],
      buttons: [
        { text: this.transloco.translate('common.cancel'), role: 'cancel' },
        {
          text: this.transloco.translate('settings.account.delete.confirm'),
          role: 'destructive',
          handler: (data: { confirmation?: string }) => this._deleteAccount(data?.confirmation ?? ''),
        },
      ],
    });
    await alert.present();
  }

  private _deleteAccount(confirmation: string): void {
    this.deletingAccount.set(true);
    this.accountApi.deleteMyAccount(confirmation).subscribe({
      next: () => {
        this.deletingAccount.set(false);
        // Same local-state reset as logout() — but skip the backend /auth/logout
        // call, since DELETE /account already cleared the access-token cookie.
        this.carListFacade.reset();
        this.bootstrapFacade.reset();
        this.notificationsSocketService.disconnect();
        void this.authService.clearLocalAuth().then(() => {
          void this.router.navigate([AUTH_ROUTES.login.fullPath]);
          void this._showToast(this.transloco.translate('settings.account.delete.success'));
        });
      },
      error: (err: unknown) => {
        this.deletingAccount.set(false);
        void this._showToast(this._deleteErrorMessage(err), 'danger');
      },
    });
  }

  private _deleteErrorMessage(err: unknown): string {
    const httpErr = err as {
      status?: number;
      error?: { code?: string; organizations?: { id: number; name: string }[] };
    };
    const code = httpErr?.error?.code;
    if (httpErr?.status === 400 && code === 'ACCOUNT_DELETE_CONFIRMATION_MISMATCH') {
      return this.transloco.translate('settings.account.delete.errors.mismatch');
    }
    if (httpErr?.status === 403 && code === 'ACCOUNT_COMPANY_MANAGED') {
      return this.transloco.translate('settings.account.delete.errors.companyManaged');
    }
    if (httpErr?.status === 409 && code === 'ACCOUNT_OWNS_ORGANIZATION') {
      const names = (httpErr.error?.organizations ?? []).map(org => org.name).join(', ');
      return this.transloco.translate('settings.account.delete.errors.ownsOrganization', { names });
    }
    return this.transloco.translate('settings.account.delete.errors.generic');
  }

  private async _showToast(message: string, color?: string): Promise<void> {
    const toast = await this.toastCtrl.create({ message, duration: 3500, color, position: 'top' });
    await toast.present();
  }

  /** Personal -> business is a re-login for now (ACCOUNT-CONTEXT.md): remember the Business tab, log out, land on login. */
  switchToBusinessAccount(): void {
    this.authService.setLoginTab('business');
    this.carListFacade.reset();
    this.bootstrapFacade.reset();
    this.notificationsSocketService.disconnect();
    this.authService.logout().subscribe(() => {
      void this.router.navigate([AUTH_ROUTES.login.fullPath]);
    });
  }

  logout(): void {
    this.carListFacade.reset();
    this.bootstrapFacade.reset();
    this.notificationsSocketService.disconnect();
    this.authService.logout().subscribe(() => {
      void this.router.navigate([HAU_ROUTES.auth.fullPath]);
    });
  }

  setLanguage(lang: string): void {
    if (lang === this.activeLang) return;
    this.applyLanguage(lang, true);
  }

  setThemeMode(mode: ThemeMode): void {
    if (mode === this.themeService.mode) return;
    this.themeService.setMode(mode);
    this.persist({ theme: mode });
  }

  setViewMode(mode: ViewMode): void {
    if (mode === this.viewModeService.viewMode) return;
    this.viewModeService.setViewMode(mode);
    this.persist({ view_mode: mode });
  }

  toggleReminders(): void {
    this.remindersEnabled = !this.remindersEnabled;
    this.persist({ expiry_reminders_enabled: this.remindersEnabled });
  }

  toggleMaintenanceReminders(): void {
    this.maintenanceRemindersEnabled = !this.maintenanceRemindersEnabled;
    this.persist({ maintenance_reminders_enabled: this.maintenanceRemindersEnabled });
  }

  /** The "days before" row applies to document expiry and to maintenance record dates — dim it only when both are off. */
  get reminderDaysDisabled(): boolean {
    return !this.remindersEnabled && !this.maintenanceRemindersEnabled;
  }

  toggleReminderDay(day: number): void {
    this.reminderDays = this.reminderDays.includes(day)
      ? this.reminderDays.filter(d => d !== day)
      : [...this.reminderDays, day];
    this.persist({ expiry_reminder_days: this.reminderDays });
  }

  private applyLanguage(lang: string, persist: boolean): void {
    this.transloco.setActiveLang(lang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    if (persist) {
      this.persist({ language: lang });
    }
  }

  private persist(change: UpdateUserSettings): void {
    this.settingsService.updateSettings(change).subscribe({
      error: () => void this._showSettingsSaveErrorToast(),
    });
  }
}
