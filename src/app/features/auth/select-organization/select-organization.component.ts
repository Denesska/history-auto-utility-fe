import { DatePipe } from '@angular/common';
import { Component, computed, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonIcon, IonSpinner } from '@ionic/angular';
import { TranslocoPipe } from '@jsverse/transloco';
import { addIcons } from 'ionicons';
import { addOutline, businessOutline, chevronForwardOutline, closeCircleOutline, logOutOutline, mailOutline, timeOutline } from 'ionicons/icons';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { BusinessAccessApiService, BusinessAccessStatusDto, OrganizationApiService, MyOrganizationDto } from '@hau/features/organization';
import { AuthService } from '../auth.service';
import { AUTH_ROUTES } from '../auth.routes.const';
import { SessionContextService } from '@hau/core/session/session-context.service';

/**
 * Shown after a business login (or on NO_ORGANIZATION_SELECTED) while the
 * session has no active organization: pick one, accept a pending invite, or
 * create a company. Picking calls POST /auth/context via AuthService.
 */
@Component({
    selector: 'hau-select-organization',
    templateUrl: './select-organization.component.html',
    styleUrls: ['./select-organization.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonIcon, IonSpinner, TranslocoPipe, DatePipe],
})
export class SelectOrganizationComponent implements OnInit {
    readonly loading = signal(true);
    readonly busy = signal(false);
    readonly errorKey = signal<string | null>(null);
    readonly organizations = signal<MyOrganizationDto[]>([]);
    readonly showCreate = signal(false);
    readonly newName = signal('');

    /** The business account approval gate (`ACCOUNT-CONTEXT.md`) — whether this user is allowed to create an organization at all, and the status of their latest request if not. */
    readonly businessAccessLoading = signal(true);
    readonly businessAccessStatus = signal<BusinessAccessStatusDto | null>(null);
    readonly requestCompanyName = signal('');
    readonly requestNote = signal('');

    readonly accepted = computed(() => this.organizations().filter(o => !!o.accepted_at));
    readonly pending = computed(() => this.organizations().filter(o => !o.accepted_at));
    readonly isEmpty = computed(() => this.organizations().length === 0);
    readonly canCreateOrganization = computed(() => this.businessAccessStatus()?.canCreateOrganization ?? false);

    constructor(
        private authService: AuthService,
        private sessionContext: SessionContextService,
        private organizationApi: OrganizationApiService,
        private businessAccessApi: BusinessAccessApiService,
        private bootstrapFacade: BootstrapFacade,
        private router: Router,
        private route: ActivatedRoute,
    ) {
        addIcons({ addOutline, businessOutline, chevronForwardOutline, closeCircleOutline, logOutOutline, mailOutline, timeOutline });
    }

    ngOnInit(): void {
        // authGuard already loaded /auth/me. A personal session has no business here.
        if (this.sessionContext.isPersonal()) {
            void this.router.navigate([HAU_ROUTES.main.fullPath], { replaceUrl: true });
            return;
        }
        // `?create=1` (from the Organization screen's "add company", or a BUSINESS_ACCESS_APPROVED/
        // REJECTED notification) opens the create/request form right away.
        if (this.route.snapshot.queryParamMap.get('create')) {
            this.showCreate.set(true);
        }
        this.load();
        this.loadBusinessAccess();
    }

    /** True when the session already has an active organization — the picker is then a *switcher* and can be dismissed. */
    readonly hasActiveOrg = computed(() => this.sessionContext.activeOrgId() != null);

    /** Leaves the switcher without changing organization. */
    cancel(): void {
        void this.router.navigate([HAU_ROUTES.main.fullPath], { replaceUrl: true });
    }

    private load(): void {
        this.loading.set(true);
        this.organizationApi.myOrganizations().subscribe({
            next: (orgs) => {
                this.organizations.set(orgs);
                // Nothing to pick yet: go straight to the one useful action, creating a company.
                if (orgs.length === 0) {
                    this.showCreate.set(true);
                }
                this.loading.set(false);
            },
            error: () => {
                this.loading.set(false);
                this.errorKey.set('auth.selectOrganization.loadError');
            },
        });
    }

    /** Loads whether this user is allowed to create an organization (and their latest request, if any) — the "business account approval gate". */
    private loadBusinessAccess(): void {
        this.businessAccessLoading.set(true);
        this.businessAccessApi.getMyStatus().subscribe({
            next: (status) => {
                this.businessAccessStatus.set(status);
                this.businessAccessLoading.set(false);
                // Re-applying after a rejection: prefill the company name so the user doesn't retype it.
                if (status.status === 'REJECTED' && status.request && !this.requestCompanyName()) {
                    this.requestCompanyName.set(status.request.company_name);
                }
            },
            error: () => { this.businessAccessLoading.set(false); },
        });
    }

    select(organizationId: number): void {
        if (this.busy()) {
            return;
        }
        this.busy.set(true);
        this.errorKey.set(null);
        this.authService.selectOrganization(organizationId).subscribe({
            next: () => {
                this.busy.set(false);
                // Everything cached so far belongs to the previous organization.
                this.bootstrapFacade.reset();
                this.bootstrapFacade.forceRefresh();
                void this.router.navigate([HAU_ROUTES.cars.fullPath], { replaceUrl: true });
            },
            error: () => {
                this.busy.set(false);
                this.errorKey.set('auth.selectOrganization.selectError');
            },
        });
    }

    accept(organizationId: number): void {
        if (this.busy()) {
            return;
        }
        this.busy.set(true);
        this.errorKey.set(null);
        this.organizationApi.acceptInvitation(organizationId).subscribe({
            next: () => {
                this.busy.set(false);
                this.load();
            },
            error: () => {
                this.busy.set(false);
                this.errorKey.set('auth.selectOrganization.acceptError');
            },
        });
    }

    create(event?: Event): void {
        event?.preventDefault();
        const name = this.newName().trim();
        if (!name || this.busy()) {
            return;
        }
        this.busy.set(true);
        this.errorKey.set(null);
        this.organizationApi.createOrganization(name).subscribe({
            next: (org) => {
                this.busy.set(false);
                this.select(org.id);
            },
            error: (err) => {
                this.busy.set(false);
                // The gate closed between loading this screen and submitting (e.g. the approval
                // was revoked, or this is a stale page) — refresh the status instead of a generic
                // error, so the UI falls back to the request-gate states on its own.
                if (err?.status === 403 && err?.error?.code === 'BUSINESS_ACCESS_REQUIRED') {
                    this.loadBusinessAccess();
                    return;
                }
                this.errorKey.set('auth.selectOrganization.createError');
            },
        });
    }

    /** Submits (or re-submits, after a rejection) a request to be allowed to create an organization. */
    submitBusinessAccessRequest(event?: Event): void {
        event?.preventDefault();
        const companyName = this.requestCompanyName().trim();
        if (!companyName || this.busy()) {
            return;
        }
        this.busy.set(true);
        this.errorKey.set(null);
        this.businessAccessApi.submitRequest(companyName, this.requestNote().trim() || undefined).subscribe({
            next: (status) => {
                this.busy.set(false);
                this.businessAccessStatus.set(status);
                this.requestNote.set('');
                this.showCreate.set(false);
            },
            error: (err) => {
                this.busy.set(false);
                if (err?.error?.code === 'BUSINESS_ACCESS_REQUEST_PENDING' || err?.error?.code === 'BUSINESS_ACCESS_ALREADY_ALLOWED') {
                    // Someone else (another tab, an admin) already moved this forward — resync instead of erroring.
                    this.loadBusinessAccess();
                    return;
                }
                this.errorKey.set('auth.selectOrganization.businessAccess.requestError');
            },
        });
    }

    logout(): void {
        this.authService.logout().subscribe(() => {
            void this.router.navigate([AUTH_ROUTES.login.fullPath], { replaceUrl: true });
        });
    }
}
