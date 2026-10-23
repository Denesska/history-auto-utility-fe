import { Component, computed, ElementRef, inject, signal, TemplateRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { catchError, debounceTime, distinctUntilChanged, of, Subject, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AlertController, IonContent, IonIcon, IonicSafeString, ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { addIcons } from 'ionicons';
import { addOutline, barChartOutline, carOutline, cloudUploadOutline, exitOutline, copyOutline, keyOutline, personAddOutline, trashOutline } from 'ionicons/icons';
import { CARS_ROUTES } from '@hau/features/cars';
import { AUTH_ROUTES } from '@hau/features/auth';
import { SessionContextService } from '@hau/core/session/session-context.service';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { OrganizationApiService } from '@hau/features/organization/organization-api.service';
import { FeatureService } from '@hau/core/features/feature.service';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';
import { FormFieldComponent } from '@hau/shared/component/form-field/form-field.component';
import { revealInvalidFields } from '@hau/shared/utils/form-validation';
import { LoaderComponent } from '@hau/shared/component/loader/loader.component';
import { ActionListRowComponent, ListRowAction } from '@hau/shared/component/action-list-row/action-list-row.component';
import { MyOrganizationDto, OrganizationCarDto, OrganizationMemberUserDto, OrganizationMembershipDto, OrganizationRole } from './organization.model';
import { canManageMember, INVITABLE_ROLES } from './organization-roles.util';

@Component({
    selector: 'app-organization',
    templateUrl: './organization.component.html',
    styleUrls: ['./organization.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonContent, IonIcon, TranslocoPipe, DropdownComponent, FormFieldComponent, LoaderComponent, ActionListRowComponent],
})
export class OrganizationComponent implements ViewWillEnter, ViewWillLeave {
    @ViewChild('headerListTpl') private _headerListTpl!: TemplateRef<unknown>;

    private readonly _api = inject(OrganizationApiService);
    private readonly _router = inject(Router);
    private readonly _session = inject(SessionContextService);
    private readonly _bootstrapFacade = inject(BootstrapFacade);
    private readonly _featureService = inject(FeatureService);
    private readonly _transloco = inject(TranslocoService);
    private readonly _headerActions = inject(HeaderActionsService);
    private readonly _alertCtrl = inject(AlertController);

    private readonly _me = toSignal(this._bootstrapFacade.me$, { initialValue: null });
    readonly currentUserId = computed(() => this._me()?.id ?? null);

    /** The user's memberships — only the one matching the session's active organization is ever shown. Switching organization goes through the header badge / org picker. */
    readonly organizations = signal<MyOrganizationDto[]>([]);
    readonly selectedOrgId = signal<number | null>(null);
    readonly members = signal<OrganizationMembershipDto[]>([]);
    readonly organizationCars = signal<OrganizationCarDto[]>([]);
    readonly loading = signal(false);
    readonly error = signal(false);

    private readonly _elRef = inject(ElementRef);
    /** Set when an invite / create button was pressed — switches on the required/invalid field states. */
    readonly inviteAttempted = signal(false);
    readonly createAttempted = signal(false);

    readonly inviteEmail = signal('');
    readonly inviteRole = signal<OrganizationRole>(OrganizationRole.DRIVER);
    readonly busy = signal(false);
    readonly actionError = signal<string | null>(null);

    /** Which half of the invite card is showing — invite an existing registered user by email, or create a brand-new company-owned account. Both share the same role dropdown/options. */
    readonly inviteMode = signal<'email' | 'create'>('email');
    readonly newMemberFirstName = signal('');
    readonly newMemberLastName = signal('');
    readonly newMemberUsername = signal('');
    /** Live state of the username field: suggested/typed value checked against the backend (global uniqueness). */
    readonly usernameStatus = signal<'idle' | 'checking' | 'available' | 'taken' | 'invalid'>('idle');
    /** Once the admin edits the username by hand, typing the names no longer overwrites it with a new suggestion. */
    private _usernameEdited = false;
    private readonly _nameChanges = new Subject<void>();
    private readonly _usernameChanges = new Subject<string>();
    /** One-time reveal of a company-managed account's username + temporary password (after create or reset), with copy buttons. */
    readonly credentialsReveal = signal<{ username: string; password: string; context: 'create' | 'reset' } | null>(null);
    readonly copiedField = signal<'username' | 'password' | null>(null);

    readonly selectedOrg = computed(() => this.organizations().find(o => o.id === this.selectedOrgId()) ?? null);
    readonly myRole = computed(() => this.selectedOrg()?.role ?? null);
    readonly isOwner = computed(() => this.myRole() === OrganizationRole.OWNER);
    readonly isSuperAdmin = computed(() => this.myRole() === OrganizationRole.SUPER_ADMIN);
    /** OWNER or SUPER_ADMIN (Director) — both get the full roster and org-management actions; OWNER additionally outranks Director (can manage Directors too, see `canManage`). */
    readonly isDirectorTier = computed(() => this.isOwner() || this.isSuperAdmin());
    readonly superAdminCount = computed(
        () => this.members().filter(m => m.role === OrganizationRole.SUPER_ADMIN && m.accepted_at).length,
    );
    readonly myMembership = computed(() => this.members().find(m => m.user.id === this.currentUserId()) ?? null);
    /** DRIVERs are scoped to their assigned car(s) elsewhere — fleet-wide costs across cars they can't open would be a wider window than the rest of their role gives them (backend rejects it either way; this just keeps the button from being a dead end). */
    readonly canViewCosts = computed(() => !!this.selectedOrg()?.accepted_at && this.selectedOrg()?.role !== OrganizationRole.DRIVER && this._featureService.isEnabled('fleet_cost'));
    /** Whether the fleet list's current-driver / "assign" trailing button is shown — backend already forces `currentDriver: null` when the switch is off, but the "unassigned → assign" affordance still needs hiding since it has no data of its own to fall back on. */
    readonly showDriverAssignment = computed(() => this._featureService.isEnabled('driver_assignment'));
    readonly canDelete = computed(() => !!this.selectedOrg()?.accepted_at && this.isDirectorTier());
    readonly canInviteAnyone = computed(() => {
        const role = this.myRole();
        return role != null && INVITABLE_ROLES[role].length > 0;
    });
    /** Who sees the "company cars" section at all — Director-tier (OWNER/SUPER_ADMIN) plus the operational FLEET_ADMIN; not FINANCE, not DRIVER. */
    readonly canViewCompanyCars = computed(() => this.isDirectorTier() || this.myRole() === OrganizationRole.FLEET_ADMIN);
    /**
     * Who can actually add a car to the fleet — Director-tier only. A car
     * enters the fleet by being created directly inside the organization
     * (its own screen, not an "attach my personal car" picker) — a company
     * asset shouldn't depend on, or ever have been, someone's personal
     * property, so only the Director/Super Admin who's accountable for the
     * fleet's composition can bring a new one in.
     */
    readonly canAddCompanyCar = computed(() => this.isDirectorTier());
    readonly canLeave = computed(() => {
        const mine = this.myMembership();
        if (!mine) return false;
        return this.canChangeOrRemove(mine);
    });

    constructor() {
        addIcons({ addOutline, barChartOutline, carOutline, cloudUploadOutline, copyOutline, exitOutline, keyOutline, personAddOutline, trashOutline });
        this.setupUsernameStreams();
    }

    goToCostDashboard(): void {
        const organizationId = this.selectedOrgId();
        if (organizationId == null) return;
        void this._router.navigate(['/main/organization/costs', organizationId]);
    }

    /** Creating another company happens in the org picker's create flow (it then becomes the active organization). */
    goToCreateOrganization(): void {
        void this._router.navigate([AUTH_ROUTES.selectOrganization.fullPath], { queryParams: { create: 1 } });
    }

    /** Opens the normal car-creation screen with this org pre-selected — the only way a car enters the fleet (see `canAddCompanyCar`). */
    goToAddCompanyCar(): void {
        const organizationId = this.selectedOrgId();
        if (organizationId == null) return;
        void this._router.navigate([CARS_ROUTES.create.fullPath], { queryParams: { organizationId } });
    }

    /** Bulk version of `goToAddCompanyCar()` — a .csv/.xlsx/.xls upload, one row per car, same rules. */
    goToImportCompanyCars(): void {
        const organizationId = this.selectedOrgId();
        if (organizationId == null) return;
        void this._router.navigate(['/main/organization/import-cars', organizationId]);
    }

    ionViewWillEnter(): void {
        this._headerActions.setTitle(this._transloco.translate('organization.title'));
        this._headerActions.setStart(null);
        this._headerActions.set(this._headerListTpl);
        this.load();
    }

    ionViewWillLeave(): void {
        this._headerActions.clear();
        this._headerActions.clearTitle();
    }

    /** Only the roles my own role is allowed to assign — e.g. a FLEET_ADMIN only ever sees DRIVER here. */
    get roleOptions(): DropdownOption[] {
        const role = this.myRole();
        const assignable = role ? INVITABLE_ROLES[role] : [];
        return assignable.map(r => ({ value: r, label: this._transloco.translate(`organization.role.${r}`) }));
    }

    /** Per-row gate for the role dropdown + remove button — mirrors the backend's `canManageMember` (OWNER untouchable, Directors can't manage each other, a FLEET_ADMIN only manages the DRIVERs they personally invited). */
    canManage(member: OrganizationMembershipDto): boolean {
        const role = this.myRole();
        const myId = this.currentUserId();
        if (role == null || myId == null) return false;
        return canManageMember(role, myId, member);
    }

    /** Wires the debounced username suggestion + availability streams (called from the constructor: `takeUntilDestroyed` needs the injection context). */
    private setupUsernameStreams(): void {
        // Suggest a username from the typed names (debounced) until the admin edits the field by hand.
        this._nameChanges
            .pipe(
                debounceTime(350),
                switchMap(() => {
                    const organizationId = this.selectedOrgId();
                    const firstName = this.newMemberFirstName().trim();
                    const lastName = this.newMemberLastName().trim();
                    if (!organizationId || !firstName || !lastName || this._usernameEdited) return of(null);
                    this.usernameStatus.set('checking');
                    return this._api.suggestUsername(organizationId, firstName, lastName).pipe(catchError(() => of(null)));
                }),
                takeUntilDestroyed(),
            )
            .subscribe(suggestion => {
                if (this._usernameEdited) return;
                if (!suggestion) {
                    if (this.usernameStatus() === 'checking') this.usernameStatus.set('idle');
                    return;
                }
                this.newMemberUsername.set(suggestion.username);
                this.usernameStatus.set('available');
            });

        // Live availability check of whatever is in the username field.
        this._usernameChanges
            .pipe(
                debounceTime(350),
                switchMap(username => {
                    const organizationId = this.selectedOrgId();
                    if (!organizationId || !username) {
                        this.usernameStatus.set('idle');
                        return of(null);
                    }
                    if (!OrganizationComponent.USERNAME_REGEX.test(username)) {
                        this.usernameStatus.set('invalid');
                        return of(null);
                    }
                    this.usernameStatus.set('checking');
                    return this._api.usernameAvailable(organizationId, username).pipe(
                        tap(({ available }) => this.usernameStatus.set(available ? 'available' : 'taken')),
                        catchError(() => { this.usernameStatus.set('idle'); return of(null); }),
                    );
                }),
                takeUntilDestroyed(),
            )
            .subscribe();
    }

    private static readonly EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    private static readonly USERNAME_REGEX = /^[a-z0-9]{3,20}$/;

    onNewMemberNameInput(field: 'first' | 'last', value: string): void {
        (field === 'first' ? this.newMemberFirstName : this.newMemberLastName).set(value);
        this._nameChanges.next();
    }

    onNewMemberUsernameInput(value: string): void {
        const username = value.trim().toLowerCase();
        this._usernameEdited = username !== '';
        this.newMemberUsername.set(username);
        if (!username) {
            this.usernameStatus.set('idle');
            this._nameChanges.next();
            return;
        }
        this.usernameStatus.set(OrganizationComponent.USERNAME_REGEX.test(username) ? 'checking' : 'invalid');
        this._usernameChanges.next(username);
    }

    /** Copies one credential value to the clipboard; the icon turns into a short "copied" hint. */
    async copyCredential(field: 'username' | 'password'): Promise<void> {
        const reveal = this.credentialsReveal();
        if (!reveal) return;
        try {
            await navigator.clipboard.writeText(reveal[field]);
            this.copiedField.set(field);
            setTimeout(() => this.copiedField.set(null), 1500);
        } catch {
            // Clipboard unavailable (insecure context / denied) — the value stays visible to copy by hand.
        }
    }

    dismissCredentials(): void {
        this.credentialsReveal.set(null);
    }

    /** Loads the memberships and shows the session's active organization (never another one). */
    load(): void {
        this.loading.set(true);
        this.error.set(false);
        this._api.myOrganizations().subscribe({
            next: orgs => {
                this.organizations.set(orgs);
                this.loading.set(false);
                this.selectOrg(this._session.activeOrgId());
            },
            error: () => { this.loading.set(false); this.error.set(true); },
        });
    }

    selectOrg(organizationId: number | null): void {
        this.selectedOrgId.set(organizationId);
        this.members.set([]);
        this.organizationCars.set([]);
        const org = this.organizations().find(o => o.id === organizationId);
        if (organizationId == null || !org?.accepted_at) return;
        this._api.members(organizationId).subscribe({
            next: members => this.members.set(members),
            error: () => this.actionError.set(this._transloco.translate('organization.errors.loadMembers')),
        });
        if (this.canViewCompanyCars()) {
            this.reloadCars(organizationId);
        }
    }

    private reloadCars(organizationId: number): void {
        this._api.cars(organizationId).subscribe(cars => this.organizationCars.set(cars));
    }

    removeOrgCar(car: OrganizationCarDto): void {
        const organizationId = this.selectedOrgId();
        if (!organizationId) return;
        this._api.removeCar(organizationId, car.id).subscribe({
            next: () => this.reloadCars(organizationId),
            error: () => this.actionError.set(this._transloco.translate('organization.errors.removeCar')),
        });
    }

    /** Opens the car's own hub — the only way to reach edit (its "..." menu already grants a Director/Super-Admin/Fleet-Admin the FULL role needed to edit an org car, see CarAccessService). */
    goToCar(car: OrganizationCarDto): void {
        void this._router.navigate([`${CARS_ROUTES.details.fullPath}/${car.id}`]);
    }

    /** Shortcut from the row's own pencil button straight into the edit form, instead of going through the hub's "..." menu first. */
    private goToEditCar(car: OrganizationCarDto): void {
        void this._router.navigate([`${CARS_ROUTES.details.fullPath}/${car.id}/${CARS_ROUTES.edit.path}`]);
    }

    /** `<app-action-list-row>`'s single action output — view/edit navigate into the car, delete removes it from the fleet (same as the old dedicated trash button). */
    onCarRowAction(action: ListRowAction, car: OrganizationCarDto): void {
        switch (action) {
            case 'view': this.goToCar(car); break;
            case 'edit': this.goToEditCar(car); break;
            case 'delete': this.removeOrgCar(car); break;
        }
    }

    inviteMember(): void {
        const organizationId = this.selectedOrgId();
        if (!organizationId) return;
        this.inviteAttempted.set(true);
        if (!this._revealManual(this.inviteEmailError() !== null)) return;
        const email = this.inviteEmail().trim();
        this.busy.set(true);
        this.actionError.set(null);
        this._api.inviteMember(organizationId, email, this.inviteRole()).subscribe({
            next: () => { this.inviteEmail.set(''); this.inviteAttempted.set(false); this.busy.set(false); this.selectOrg(organizationId); },
            error: () => { this.busy.set(false); this.actionError.set(this._transloco.translate('organization.errors.invite')); },
        });
    }

    /** `shared.formField.errors.required` key when `attempted` and the value is blank, else null. */
    requiredError(value: string, attempted: boolean): string | null {
        return attempted && !value.trim() ? 'shared.formField.errors.required' : null;
    }

    inviteEmailError(): string | null {
        if (!this.inviteAttempted()) return null;
        const email = this.inviteEmail().trim();
        if (!email) return 'shared.formField.errors.required';
        return OrganizationComponent.EMAIL_REGEX.test(email) ? null : 'shared.formField.errors.email';
    }

    /** Username is optional (blank = auto-suggested), but a typed one must be well-formed and free. */
    usernameError(): string | null {
        switch (this.usernameStatus()) {
            case 'taken': return 'organization.createLocal.usernameUnavailable';
            case 'invalid': return 'organization.createLocal.usernameInvalid';
            default: return null;
        }
    }

    usernameHint(): string | undefined {
        switch (this.usernameStatus()) {
            case 'available': return this._transloco.translate('organization.createLocal.usernameAvailable');
            case 'checking': return this._transloco.translate('organization.createLocal.usernameChecking');
            default: return undefined;
        }
    }

    /** Scrolls to / focuses the first red field once the error states have rendered (fields here aren't backed by controls). */
    private _revealManual(invalid: boolean): boolean {
        return revealInvalidFields(null, this._elRef, { extraInvalid: () => invalid });
    }

    onInviteRoleChange(role: string | number): void {
        this.inviteRole.set(role as OrganizationRole);
    }

    /**
     * Creates a brand-new company-owned account (no Google identity, no
     * email invite) — for a driver/employee who doesn't have their own
     * Google account. On success, shows the generated username + password exactly
     * once (see `credentialsReveal`) since the backend never returns
     * the plaintext again afterward.
     */
    createNewLocalAccount(): void {
        const organizationId = this.selectedOrgId();
        if (!organizationId) return;
        const firstName = this.newMemberFirstName().trim();
        const lastName = this.newMemberLastName().trim();
        const username = this.newMemberUsername().trim();
        this.createAttempted.set(true);
        if (!this._revealManual(!firstName || !lastName || this.usernameError() !== null)) return;
        this.busy.set(true);
        this.actionError.set(null);
        this._api.createLocalMember(organizationId, firstName, lastName, username || null, this.inviteRole()).subscribe({
            next: (result) => {
                this.busy.set(false);
                this.newMemberFirstName.set('');
                this.newMemberLastName.set('');
                this.newMemberUsername.set('');
                this.createAttempted.set(false);
                this._usernameEdited = false;
                this.usernameStatus.set('idle');
                this.selectOrg(organizationId);
                this.credentialsReveal.set({ username: result.credentials.username, password: result.credentials.password, context: 'create' });
            },
            error: (err) => {
                this.busy.set(false);
                this.actionError.set(
                    err?.status === 409
                        ? this._transloco.translate('organization.createLocal.usernameTaken')
                        : this._transloco.translate('organization.errors.createLocal'),
                );
            },
        });
    }

    /** Confirm-first gate for the reset-password row action — the admin must be warned (current password stops working immediately) before the reset actually happens. Only ever called for `member.user.is_company_managed`. */
    async confirmResetPassword(member: OrganizationMembershipDto): Promise<void> {
        const alert = await this._alertCtrl.create({
            header: this._transloco.translate('organization.resetPasswordAlert.header'),
            message: new IonicSafeString(
                this._transloco.translate('organization.resetPasswordAlert.message', {
                    name: `${member.user.first_name} ${member.user.last_name}`.trim(),
                }),
            ),
            buttons: [
                { text: this._transloco.translate('common.cancel'), role: 'cancel' },
                {
                    text: this._transloco.translate('organization.resetPasswordAlert.confirm'),
                    role: 'destructive',
                    handler: () => this.resetMemberPassword(member),
                },
            ],
        });
        await alert.present();
    }

    private resetMemberPassword(member: OrganizationMembershipDto): void {
        const organizationId = this.selectedOrgId();
        if (!organizationId) return;
        this.busy.set(true);
        this.actionError.set(null);
        this._api.resetLocalPassword(organizationId, member.user.id).subscribe({
            next: ({ password }) => {
                this.busy.set(false);
                this.credentialsReveal.set({ username: member.user.username ?? '', password, context: 'reset' });
            },
            error: () => {
                this.busy.set(false);
                this.actionError.set(this._transloco.translate('organization.errors.resetPassword'));
            },
        });
    }

    changeMemberRole(member: OrganizationMembershipDto, role: string | number): void {
        const organizationId = this.selectedOrgId();
        if (!organizationId) return;
        this._api.changeRole(organizationId, member.user.id, role as OrganizationRole).subscribe({
            next: () => this.selectOrg(organizationId),
            error: () => this.actionError.set(this._transloco.translate('organization.errors.changeRole')),
        });
    }

    removeMember(member: OrganizationMembershipDto): void {
        const organizationId = this.selectedOrgId();
        if (!organizationId) return;
        this._api.removeMember(organizationId, member.user.id).subscribe({
            next: () => this.selectOrg(organizationId),
            error: () => this.actionError.set(this._transloco.translate('organization.errors.remove')),
        });
    }

    async confirmLeaveOrganization(): Promise<void> {
        const org = this.selectedOrg();
        if (!org) return;
        const alert = await this._alertCtrl.create({
            header: this._transloco.translate('organization.leaveAlert.header'),
            message: new IonicSafeString(this._transloco.translate('organization.leaveAlert.message', { name: org.name })),
            buttons: [
                { text: this._transloco.translate('common.cancel'), role: 'cancel' },
                {
                    text: this._transloco.translate('organization.leave'),
                    role: 'destructive',
                    handler: () => this.leaveOrganization(org.id),
                },
            ],
        });
        await alert.present();
    }

    private leaveOrganization(organizationId: number): void {
        this.busy.set(true);
        this.actionError.set(null);
        this._api.leaveOrganization(organizationId).subscribe({
            next: () => { this.busy.set(false); this.leftActiveOrganization(); },
            error: () => { this.busy.set(false); this.actionError.set(this._transloco.translate('organization.errors.leave')); },
        });
    }

    async confirmDeleteOrganization(): Promise<void> {
        const org = this.selectedOrg();
        if (!org) return;
        const alert = await this._alertCtrl.create({
            header: this._transloco.translate('organization.deleteAlert.header'),
            message: new IonicSafeString(this._transloco.translate('organization.deleteAlert.message', { name: org.name })),
            buttons: [
                { text: this._transloco.translate('common.cancel'), role: 'cancel' },
                {
                    text: this._transloco.translate('common.delete'),
                    role: 'destructive',
                    handler: () => this.deleteOrganization(org.id),
                },
            ],
        });
        await alert.present();
    }

    private deleteOrganization(organizationId: number): void {
        this.busy.set(true);
        this.actionError.set(null);
        this._api.deleteOrganization(organizationId).subscribe({
            next: () => { this.busy.set(false); this.leftActiveOrganization(); },
            error: () => { this.busy.set(false); this.actionError.set(this._transloco.translate('organization.errors.delete')); },
        });
    }

    /** The active organization is gone for this user (left / deleted) — the session has nothing to work in, so pick another or create one. */
    private leftActiveOrganization(): void {
        void this._router.navigate([AUTH_ROUTES.selectOrganization.fullPath], { replaceUrl: true });
    }

    /** Blocks the "leave"/demote UI for the org's one remaining accepted SUPER_ADMIN — mirrors the backend's own guard. */
    canChangeOrRemove(member: OrganizationMembershipDto): boolean {
        if (member.role !== OrganizationRole.SUPER_ADMIN) return true;
        return this.superAdminCount() > 1;
    }

    /**
     * Always make+model — never a nickname. A car's nickname is private to
     * whoever set it (see the cars feature's per-user nickname model) and an
     * admin viewing the whole fleet has no business seeing anyone's private
     * label (OrganizationCarDto doesn't even carry one anymore).
     */
    carLabel(car: OrganizationCarDto): string {
        return `${car.make} ${car.model}`.trim();
    }

    /**
     * Two-letter fallback shown in an avatar when there's no Google profile
     * picture — same algorithm as `MainComponent.userInitials`. Typed
     * structurally (not `OrganizationMemberUserDto`) so it also covers a
     * company car's `currentDriver` (`OrganizationCarDriverDto`), which has
     * the same two name fields but no `email`.
     */
    avatarInitials(user: { first_name?: string | null; last_name?: string | null }): string {
        return `${user.first_name?.[0] ?? ''}${user.last_name?.[0] ?? ''}`.toUpperCase();
    }

    /** Opens the existing driver-assignment screen for this car — same navigation `cars-details.component.ts`'s `navigateToDriverAssignment` uses, whether the car is currently assigned (to manage/reassign) or not (to assign one). No inline assign flow here, per the UI consistency rule — this list only links into the one existing screen. */
    goToDriverAssignment(car: OrganizationCarDto): void {
        void this._router.navigate([`${CARS_ROUTES.details.fullPath}/${car.id}/${CARS_ROUTES.sofer.path}`]);
    }
}
