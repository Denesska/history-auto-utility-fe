import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { IonContent, IonIcon, ViewWillEnter, ViewWillLeave } from '@ionic/angular/standalone';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { addIcons } from 'ionicons';
import { addOutline, exitOutline, personAddOutline, trashOutline } from 'ionicons/icons';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { OrganizationApiService } from '@hau/core/organization-api.service';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';
import { LoaderComponent } from '@hau/shared/component/loader/loader.component';
import { MyOrganizationDto, OrganizationMembershipDto, OrganizationRole } from './organization.model';

const ROLE_OPTIONS: OrganizationRole[] = [
    OrganizationRole.SUPER_ADMIN,
    OrganizationRole.FLEET_ADMIN,
    OrganizationRole.MANAGER,
    OrganizationRole.DRIVER,
    OrganizationRole.FINANCE,
];

@Component({
    selector: 'app-organization',
    templateUrl: './organization.component.html',
    styleUrls: ['./organization.component.scss'],
    imports: [IonContent, IonIcon, TranslocoPipe, DropdownComponent, LoaderComponent],
})
export class OrganizationComponent implements ViewWillEnter, ViewWillLeave {
    private readonly _api = inject(OrganizationApiService);
    private readonly _bootstrapFacade = inject(BootstrapFacade);
    private readonly _transloco = inject(TranslocoService);
    private readonly _headerActions = inject(HeaderActionsService);

    private readonly _me = toSignal(this._bootstrapFacade.me$, { initialValue: null });
    readonly currentUserId = computed(() => this._me()?.id ?? null);

    readonly organizations = signal<MyOrganizationDto[]>([]);
    readonly selectedOrgId = signal<number | null>(null);
    readonly members = signal<OrganizationMembershipDto[]>([]);
    readonly loading = signal(false);
    readonly error = signal(false);

    readonly newOrgName = signal('');
    readonly inviteEmail = signal('');
    readonly inviteRole = signal<OrganizationRole>(OrganizationRole.DRIVER);
    readonly busy = signal(false);
    readonly actionError = signal<string | null>(null);

    readonly selectedOrg = computed(() => this.organizations().find(o => o.id === this.selectedOrgId()) ?? null);
    readonly isSuperAdmin = computed(() => this.selectedOrg()?.role === OrganizationRole.SUPER_ADMIN);
    readonly superAdminCount = computed(
        () => this.members().filter(m => m.role === OrganizationRole.SUPER_ADMIN && m.accepted_at).length,
    );
    readonly myMembership = computed(() => this.members().find(m => m.user.id === this.currentUserId()) ?? null);
    readonly canLeave = computed(() => {
        const mine = this.myMembership();
        if (!mine) return false;
        return this.canChangeOrRemove(mine);
    });

    constructor() {
        addIcons({ addOutline, exitOutline, personAddOutline, trashOutline });
    }

    ionViewWillEnter(): void {
        this._headerActions.setTitle(this._transloco.translate('organization.title'));
        this.load();
    }

    ionViewWillLeave(): void {
        this._headerActions.clear();
        this._headerActions.clearTitle();
    }

    get roleOptions(): DropdownOption[] {
        return ROLE_OPTIONS.map(role => ({ value: role, label: this._transloco.translate(`organization.role.${role}`) }));
    }

    load(): void {
        this.loading.set(true);
        this._api.myOrganizations().subscribe({
            next: orgs => {
                this.organizations.set(orgs);
                this.loading.set(false);
                const current = this.selectedOrgId();
                const stillThere = current != null && orgs.some(o => o.id === current);
                const firstAccepted = orgs.find(o => o.accepted_at)?.id ?? orgs[0]?.id ?? null;
                this.selectOrg(stillThere ? current : firstAccepted);
            },
            error: () => { this.loading.set(false); this.error.set(true); },
        });
    }

    selectOrg(organizationId: number | null): void {
        this.selectedOrgId.set(organizationId);
        this.members.set([]);
        const org = this.organizations().find(o => o.id === organizationId);
        if (organizationId == null || !org?.accepted_at) return;
        this._api.members(organizationId).subscribe({
            next: members => this.members.set(members),
            error: () => this.actionError.set(this._transloco.translate('organization.errors.loadMembers')),
        });
    }

    createOrganization(): void {
        const name = this.newOrgName().trim();
        if (!name) return;
        this.busy.set(true);
        this.actionError.set(null);
        this._api.createOrganization(name).subscribe({
            next: () => { this.newOrgName.set(''); this.busy.set(false); this.load(); },
            error: () => { this.busy.set(false); this.actionError.set(this._transloco.translate('organization.errors.create')); },
        });
    }

    acceptInvitation(organizationId: number): void {
        this.busy.set(true);
        this._api.acceptInvitation(organizationId).subscribe({
            next: () => { this.busy.set(false); this.load(); },
            error: () => { this.busy.set(false); this.actionError.set(this._transloco.translate('organization.errors.accept')); },
        });
    }

    inviteMember(): void {
        const organizationId = this.selectedOrgId();
        const email = this.inviteEmail().trim();
        if (!organizationId || !email) return;
        this.busy.set(true);
        this.actionError.set(null);
        this._api.inviteMember(organizationId, email, this.inviteRole()).subscribe({
            next: () => { this.inviteEmail.set(''); this.busy.set(false); this.selectOrg(organizationId); },
            error: () => { this.busy.set(false); this.actionError.set(this._transloco.translate('organization.errors.invite')); },
        });
    }

    onInviteRoleChange(role: string | number): void {
        this.inviteRole.set(role as OrganizationRole);
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

    leaveOrganization(): void {
        const organizationId = this.selectedOrgId();
        if (!organizationId) return;
        this._api.leaveOrganization(organizationId).subscribe({
            next: () => this.load(),
            error: () => this.actionError.set(this._transloco.translate('organization.errors.leave')),
        });
    }

    /** Blocks the "leave"/demote UI for the org's one remaining accepted SUPER_ADMIN — mirrors the backend's own guard. */
    canChangeOrRemove(member: OrganizationMembershipDto): boolean {
        if (member.role !== OrganizationRole.SUPER_ADMIN) return true;
        return this.superAdminCount() > 1;
    }
}
