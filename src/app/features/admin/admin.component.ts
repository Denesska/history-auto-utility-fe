import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, computed, inject, signal, viewChild, ChangeDetectionStrategy } from '@angular/core';
import { AlertController, IonContent, IonIcon, IonToggle, ToastController, ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { addIcons } from 'ionicons';
import { alertCircleOutline, calendarOutline, checkmarkOutline, closeOutline, informationCircleOutline, searchOutline } from 'ionicons/icons';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { FEATURE_KEYS } from '@hau/core/features/feature-keys';
import { AdminApiService } from '@hau/features/admin/admin-api.service';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';
import { LoaderComponent } from '@hau/shared/component/loader/loader.component';
import { AdminBarPoint, BarChartComponent } from '@hau/shared/component/charts/bar-chart.component';
import { AdminHBarItem, HBarListComponent } from '@hau/shared/component/charts/hbar-list.component';
import { AdminAiUsageComponent } from './ai-usage/ai-usage.component';
import {
    AdminBucket, AdminBusinessAccessRequestDto, AdminLabelCount, AdminOrganization, AdminRange,
    AdminStats, AdminUserRow, BusinessAccessRequestStatus,
} from './admin.model';

const RANGES: AdminRange[] = [7, 30, 90, 365, 0];
const PLATFORM_LABELS: Record<string, string> = { ios: 'iOS', android: 'Android', web: 'Web' };

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        DatePipe, DecimalPipe, IonContent, IonIcon, IonToggle, TranslocoPipe,
        DropdownComponent, LoaderComponent, BarChartComponent, HBarListComponent, AdminAiUsageComponent,
    ],
})
export class AdminComponent implements ViewWillEnter, ViewWillLeave {
    private readonly _api = inject(AdminApiService);
    private readonly _transloco = inject(TranslocoService);
    private readonly _headerActions = inject(HeaderActionsService);
    private readonly _toastCtrl = inject(ToastController);
    private readonly _alertCtrl = inject(AlertController);

    private readonly _aiUsage = viewChild(AdminAiUsageComponent);

    readonly range = signal<AdminRange>(30);
    readonly stats = signal<AdminStats | null>(null);
    readonly users = signal<AdminUserRow[]>([]);
    readonly loading = signal(false);
    readonly error = signal(false);
    readonly userQuery = signal('');

    readonly organizations = signal<AdminOrganization[]>([]);
    readonly orgsLoading = signal(false);
    readonly orgsError = signal(false);

    /** "Business account requests" section (`ACCOUNT-CONTEXT.md`'s approval gate) — list filtered by status, `baPendingCount` is independent of the filter so the badge stays correct while viewing Approved/Rejected. */
    readonly baStatus = signal<BusinessAccessRequestStatus>('PENDING');
    readonly baRequests = signal<AdminBusinessAccessRequestDto[]>([]);
    readonly baLoading = signal(false);
    readonly baError = signal(false);
    readonly baBusyId = signal<number | null>(null);
    readonly baPendingCount = signal(0);

    constructor() {
        addIcons({ alertCircleOutline, calendarOutline, checkmarkOutline, closeOutline, informationCircleOutline, searchOutline });
    }

    ionViewWillEnter(): void {
        this._headerActions.setTitle(this._transloco.translate('admin.title'));
        this.load();
    }

    ionViewWillLeave(): void {
        this._headerActions.clear();
        this._headerActions.clearTitle();
    }

    get rangeOptions(): DropdownOption[] {
        return RANGES.map(r => ({
            value: r,
            label: r === 0 ? this._transloco.translate('admin.range.all') : this._transloco.translate('admin.range.days', { n: r }),
        }));
    }

    onRangeChange(value: string | number): void {
        this.range.set(Number(value) as AdminRange);
        this.loadStats();
    }

    load(): void {
        this.loadStats();
        this._api.users().subscribe({ next: u => this.users.set(u), error: () => this.error.set(true) });
        this.loadOrganizations();
        this.loadBusinessAccessRequests();
        this.loadBusinessAccessPendingCount();
        // First enter: the child loads itself in ngOnInit; later enters refresh it here.
        this._aiUsage()?.load();
    }

    loadOrganizations(): void {
        this.orgsLoading.set(true);
        this.orgsError.set(false);
        this._api.organizations().subscribe({
            next: orgs => { this.organizations.set(orgs); this.orgsLoading.set(false); },
            error: () => { this.orgsError.set(true); this.orgsLoading.set(false); },
        });
    }

    loadStats(): void {
        this.loading.set(true);
        this.error.set(false);
        this._api.stats(this.range()).subscribe({
            next: s => { this.stats.set(s); this.loading.set(false); },
            error: () => { this.error.set(true); this.loading.set(false); },
        });
    }

    // ── Derived view data ──────────────────────────────────────────────

    /** New-user delta vs. the previous same-length period, in %; null when not comparable. */
    readonly newUsersDelta = computed(() => {
        const k = this.stats()?.kpis;
        if (!k || k.newUsersPrev === null || k.newUsersPrev === 0) return null;
        return Math.round(((k.newUsers - k.newUsersPrev) / k.newUsersPrev) * 100);
    });

    /** DAU/MAU — how many of the month's active users show up on a given day. */
    readonly stickiness = computed(() => {
        const k = this.stats()?.kpis;
        return k && k.mau > 0 ? Math.round((k.dau / k.mau) * 100) : null;
    });

    readonly signupPoints = computed<AdminBarPoint[]>(() => this._points(s => s.signups, 'admin.charts.signupsTip'));
    readonly activePoints = computed<AdminBarPoint[]>(() => this._points(s => s.activeUsers, 'admin.charts.activeTip'));
    readonly recordPoints = computed<AdminBarPoint[]>(() =>
        this._points(s => s.cars + s.documents + s.maintenance, 'admin.charts.contentTip'),
    );

    readonly funnelItems = computed<AdminHBarItem[]>(() => {
        const steps = this.stats()?.funnel ?? [];
        const base = steps[0]?.users ?? 0;
        return steps.map(s => ({
            label: this._transloco.translate(`admin.funnel.${s.key}`),
            value: s.users,
            display: base > 0 ? `${s.users} · ${Math.round((s.users / base) * 100)}%` : `${s.users}`,
        }));
    });

    readonly featureRows = computed(() => {
        const s = this.stats();
        if (!s) return [];
        const total = s.kpis.totalUsers;
        return s.features.map(f => ({
            ...f,
            label: this._transloco.translate(`admin.features.${f.key}`),
            usersPct: f.users !== null && total > 0 ? Math.round((f.users / total) * 100) : null,
        }));
    });

    readonly platformItems = computed(() => this._labelItems(this.stats()?.platforms, l => this._platformLabel(l)));
    readonly versionItems = computed(() => this._labelItems(this.stats()?.appVersions, l => l === 'unknown' ? this._unknown() : l));
    readonly pushItems = computed(() => this._labelItems(this.stats()?.pushUsers, l => this._platformLabel(l.toLowerCase())));
    readonly makeItems = computed(() => this._labelItems(this.stats()?.fleet.topMakes, l => l));
    readonly fuelItems = computed(() =>
        this._labelItems(this.stats()?.fleet.fuelTypes, l => this._transloco.translate(`admin.fuel.${l}`)),
    );

    readonly storageTotal = computed(() => (this.stats()?.storage ?? []).reduce(
        (acc, r) => ({ files: acc.files + r.files, bytes: acc.bytes + r.bytes }),
        { files: 0, bytes: 0 },
    ));

    readonly filteredUsers = computed(() => {
        const q = this.userQuery().trim().toLowerCase();
        if (!q) return this.users();
        return this.users().filter(u => `${u.firstName} ${u.lastName} ${u.email}`.toLowerCase().includes(q));
    });

    readonly retentionOffsets = computed(() => (this.stats()?.retention[0]?.weeks ?? []).map((_, i) => i));

    formatBytes(bytes: number): string {
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
        if (bytes < 1024 ** 3) return `${(bytes / 1024 ** 2).toFixed(1)} MB`;
        return `${(bytes / 1024 ** 3).toFixed(2)} GB`;
    }

    platformLabel(p: string | null): string {
        return p ? this._platformLabel(p) : '—';
    }

    storageLabel(context: string): string {
        return this._transloco.translate(`admin.storage.contexts.${context}`);
    }

    // ── Organizations & features ─────────────────────────────────────

    featureKeys(org: AdminOrganization): string[] {
        return Object.keys(org.feature_flags);
    }

    /** Translated label for a known key; the raw backend key for one this frontend doesn't recognize yet. */
    featureLabel(key: string): string {
        return (FEATURE_KEYS as readonly string[]).includes(key)
            ? this._transloco.translate(`admin.organizations.features.${key}`)
            : key;
    }

    /** Optimistic toggle: flips immediately, saves, and reverts with a toast if the save fails. */
    toggleFeature(org: AdminOrganization, key: string): void {
        const next = !org.feature_flags[key];
        const previous = org.feature_flags[key];
        this._patchOrgFlag(org.id, key, next);

        this._api.updateOrganizationFeatures(org.id, { [key]: next }).subscribe({
            next: saved => this.organizations.update(list => list.map(o => (o.id === saved.id ? saved : o))),
            error: () => {
                this._patchOrgFlag(org.id, key, previous);
                void this._showToast('admin.organizations.saveError', 'danger');
            },
        });
    }

    private _patchOrgFlag(orgId: number, key: string, value: boolean): void {
        this.organizations.update(list =>
            list.map(o => (o.id === orgId ? { ...o, feature_flags: { ...o.feature_flags, [key]: value } } : o)),
        );
    }

    // ── Business account requests (approval gate) ────────────────────

    get baStatusOptions(): DropdownOption[] {
        return (['PENDING', 'APPROVED', 'REJECTED'] as BusinessAccessRequestStatus[]).map(s => ({
            value: s,
            label: this._transloco.translate(`admin.businessAccess.status.${s}`),
        }));
    }

    onBaStatusChange(value: string | number): void {
        this.baStatus.set(value as BusinessAccessRequestStatus);
        this.loadBusinessAccessRequests();
    }

    loadBusinessAccessRequests(): void {
        this.baLoading.set(true);
        this.baError.set(false);
        this._api.businessAccessRequests(this.baStatus()).subscribe({
            next: rows => { this.baRequests.set(rows); this.baLoading.set(false); },
            error: () => { this.baError.set(true); this.baLoading.set(false); },
        });
    }

    /** Independent of the status filter above, so the badge is still right while viewing Approved/Rejected. */
    private loadBusinessAccessPendingCount(): void {
        this._api.businessAccessRequests('PENDING').subscribe({
            next: rows => this.baPendingCount.set(rows.length),
            error: () => {},
        });
    }

    approveBusinessAccessRequest(row: AdminBusinessAccessRequestDto): void {
        this.baBusyId.set(row.id);
        this._api.approveBusinessAccessRequest(row.id).subscribe({
            next: () => {
                this.baBusyId.set(null);
                this.baRequests.update(list => list.filter(r => r.id !== row.id));
                this.loadBusinessAccessPendingCount();
                void this._showToast('admin.businessAccess.approveSuccess', 'success');
            },
            error: () => {
                this.baBusyId.set(null);
                void this._showToast('admin.businessAccess.actionError', 'danger');
            },
        });
    }

    /** Reject needs an optional reason (shown to the requester) — same `AlertController` confirm pattern as the rest of the app, with a textarea input instead of a plain confirm. */
    async confirmRejectBusinessAccessRequest(row: AdminBusinessAccessRequestDto): Promise<void> {
        const alert = await this._alertCtrl.create({
            header: this._transloco.translate('admin.businessAccess.rejectAlert.header'),
            message: this._transloco.translate('admin.businessAccess.rejectAlert.message'),
            inputs: [
                {
                    name: 'reason',
                    type: 'textarea',
                    placeholder: this._transloco.translate('admin.businessAccess.rejectAlert.placeholder'),
                },
            ],
            buttons: [
                { text: this._transloco.translate('common.cancel'), role: 'cancel' },
                {
                    text: this._transloco.translate('admin.businessAccess.rejectAlert.confirm'),
                    role: 'destructive',
                    handler: (data: { reason?: string }) => this.rejectBusinessAccessRequest(row, data?.reason?.trim() || undefined),
                },
            ],
        });
        await alert.present();
    }

    private rejectBusinessAccessRequest(row: AdminBusinessAccessRequestDto, reason?: string): void {
        this.baBusyId.set(row.id);
        this._api.rejectBusinessAccessRequest(row.id, reason).subscribe({
            next: () => {
                this.baBusyId.set(null);
                this.baRequests.update(list => list.filter(r => r.id !== row.id));
                this.loadBusinessAccessPendingCount();
                void this._showToast('admin.businessAccess.rejectSuccess', 'success');
            },
            error: () => {
                this.baBusyId.set(null);
                void this._showToast('admin.businessAccess.actionError', 'danger');
            },
        });
    }

    /** Retention heatmap cell tint: one hue, opacity scaled by the value. */
    retentionBg(v: number | null): string | null {
        if (v === null) return null;
        return `color-mix(in srgb, var(--hau-primary) ${Math.round(8 + (v / 100) * 72)}%, transparent)`;
    }

    shortDate(day: string): string {
        return this._formatBucket(day, 'day');
    }

    // ── helpers ────────────────────────────────────────────────────────

    private _points(value: (p: AdminStats['series'][number]) => number, tipKey: string): AdminBarPoint[] {
        const s = this.stats();
        if (!s) return [];
        return s.series.map(p => {
            const label = this._formatBucket(p.date, s.bucket);
            const v = value(p);
            return { label, value: v, tooltip: this._transloco.translate(tipKey, { date: label, n: v }) };
        });
    }

    private _formatBucket(day: string, bucket: AdminBucket): string {
        const d = new Date(`${day}T12:00:00`);
        const lang = this._transloco.getActiveLang();
        if (bucket === 'month') return d.toLocaleDateString(lang, { month: 'short', year: '2-digit' });
        return d.toLocaleDateString(lang, { day: 'numeric', month: 'short' });
    }

    private _labelItems(rows: AdminLabelCount[] | undefined, label: (l: string) => string): AdminHBarItem[] {
        return (rows ?? []).map(r => ({ label: label(r.label), value: r.count }));
    }

    private _platformLabel(p: string): string {
        return PLATFORM_LABELS[p] ?? this._unknown();
    }

    private _unknown(): string {
        return this._transloco.translate('admin.unknown');
    }

    private async _showToast(key: string, color?: string): Promise<void> {
        const toast = await this._toastCtrl.create({
            message: this._transloco.translate(key),
            duration: 3000,
            color,
            position: 'top',
        });
        await toast.present();
    }
}
