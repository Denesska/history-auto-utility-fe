import { LocalDatePipe } from '@hau/shared/pipes/local-date.pipe';
import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { IonIcon, IonToggle, ToastController } from '@ionic/angular';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { addIcons } from 'ionicons';
import { alertCircleOutline, closeOutline, createOutline, sparklesOutline } from 'ionicons/icons';
import { OverlayBackDirective } from '@hau/core/navigation/overlay-back.directive';
import { AdminApiService } from '@hau/features/admin/admin-api.service';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';
import { LoaderComponent } from '@hau/shared/component/loader/loader.component';
import { AdminBarPoint, BarChartComponent } from '@hau/shared/component/charts/bar-chart.component';
import { AdminHBarItem, HBarListComponent } from '@hau/shared/component/charts/hbar-list.component';
import { AiSettings, AiUsage } from '../admin.model';

const DAY_RANGES = [7, 30, 90];
const KNOWN_FEATURES = ['document_extract', 'identity_extract', 'maintenance_category', 'vehicle_silhouette', 'maintenance_invoice_extract'];
const KNOWN_REASONS = ['burst', 'daily', 'monthly', 'blocked', 'global'];

type TopUser = AiUsage['topUsers'][number];

/** Settings form kept as strings so empty / half-typed numbers don't fight the inputs. */
interface SettingsForm {
    limitsEnabled: boolean;
    burstPerMinute: string;
    userDailyBudgetUsd: string;
    userMonthlyBudgetUsd: string;
    globalDailyBudgetUsd: string;
    warnPercent: string;
}

/** "AI usage" section of the admin page — stats, per-user limit overrides and global limit settings. */
@Component({
    selector: 'app-admin-ai-usage',
    templateUrl: './ai-usage.component.html',
    styleUrls: ['./ai-usage.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [LocalDatePipe, DecimalPipe, IonIcon, IonToggle, TranslocoPipe, DropdownComponent, LoaderComponent, BarChartComponent, HBarListComponent, OverlayBackDirective],
})
export class AdminAiUsageComponent implements OnInit {
    private readonly _api = inject(AdminApiService);
    private readonly _transloco = inject(TranslocoService);
    private readonly _toastCtrl = inject(ToastController);

    readonly days = signal(30);
    readonly usage = signal<AiUsage | null>(null);
    readonly loading = signal(false);
    readonly error = signal(false);

    readonly form = signal<SettingsForm | null>(null);
    readonly settingsError = signal(false);
    readonly savingSettings = signal(false);

    /** User whose limit is being edited (dialog open when set). */
    readonly editUser = signal<TopUser | null>(null);
    readonly editDaily = signal('');
    readonly editMonthly = signal('');
    readonly editBlocked = signal(false);
    readonly editNote = signal('');
    readonly editBusy = signal(false);

    constructor() {
        addIcons({ alertCircleOutline, closeOutline, createOutline, sparklesOutline });
    }

    ngOnInit(): void {
        this.load();
    }

    load(): void {
        this.loadUsage();
        this.loadSettings();
    }

    get rangeOptions(): DropdownOption[] {
        return DAY_RANGES.map(n => ({ value: n, label: this._transloco.translate('admin.range.days', { n }) }));
    }

    onRangeChange(value: string | number): void {
        this.days.set(Number(value));
        this.loadUsage();
    }

    loadUsage(): void {
        this.loading.set(true);
        this.error.set(false);
        this._api.aiUsage(this.days()).subscribe({
            next: u => { this.usage.set(u); this.loading.set(false); },
            error: () => { this.error.set(true); this.loading.set(false); },
        });
    }

    loadSettings(): void {
        this.settingsError.set(false);
        this._api.aiSettings().subscribe({
            next: s => this.form.set(this._toForm(s)),
            error: () => this.settingsError.set(true),
        });
    }

    // ── Derived view data ──────────────────────────────────────────────

    readonly hasData = computed(() => {
        const u = this.usage();
        return !!u && (u.totals.calls > 0 || u.totals.blockedCount > 0 || u.totals.cachedCount > 0);
    });

    readonly dayPoints = computed<AdminBarPoint[]>(() =>
        (this.usage()?.perDay ?? []).map(d => {
            const label = new Date(`${d.date}T12:00:00`).toLocaleDateString(this._transloco.getActiveLang(), { day: 'numeric', month: 'short' });
            return {
                label,
                value: d.costUsd,
                tooltip: this._transloco.translate('admin.ai.dayTip', { date: label, cost: this.usd(d.costUsd), n: d.calls }),
            };
        }),
    );

    readonly featureItems = computed<AdminHBarItem[]>(() => {
        const rows = [...(this.usage()?.perFeature ?? [])].sort((a, b) => b.costUsd - a.costUsd);
        const total = rows.reduce((s, r) => s + r.costUsd, 0);
        return rows.map(r => ({
            label: this.featureLabel(r.feature),
            value: r.costUsd,
            display: `${this.usd(r.costUsd)} · ${total > 0 ? Math.round((r.costUsd / total) * 100) : 0}%`,
        }));
    });

    readonly modelItems = computed<AdminHBarItem[]>(() =>
        [...(this.usage()?.perModel ?? [])].sort((a, b) => b.costUsd - a.costUsd).map(m => ({
            label: `${m.model}`,
            value: m.costUsd,
            display: `${this.usd(m.costUsd)} · ${m.calls}`,
        })),
    );

    readonly topUsers = computed(() => (this.usage()?.topUsers ?? []).slice(0, 20));

    /** Bar colour state of the "today vs global cap" meter. */
    readonly todayLevel = computed(() => {
        const p = this.usage()?.today.percent ?? 0;
        const warn = Number(this.form()?.warnPercent) || 80;
        return p >= 100 ? 'danger' : p >= warn ? 'warn' : 'ok';
    });

    // ── Formatting ─────────────────────────────────────────────────────

    usd(v: number): string {
        const abs = Math.abs(v);
        const digits = abs === 0 ? 2 : abs < 0.01 ? 4 : abs < 1 ? 3 : 2;
        return `$${v.toFixed(digits)}`;
    }

    readonly formatMax = (v: number): string => this.usd(v);

    tokens(n: number): string {
        if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
        if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
        return String(n);
    }

    featureLabel(f: string): string {
        return KNOWN_FEATURES.includes(f) ? this._transloco.translate(`admin.ai.features.${f}`) : f;
    }

    reasonLabel(r: string): string {
        return KNOWN_REASONS.includes(r) ? this._transloco.translate(`admin.ai.reasons.${r}`) : r;
    }

    // ── Settings ───────────────────────────────────────────────────────

    patchForm(patch: Partial<SettingsForm>): void {
        this.form.update(f => (f ? { ...f, ...patch } : f));
    }

    saveSettings(): void {
        const f = this.form();
        if (!f) return;
        const raw = [f.burstPerMinute, f.userDailyBudgetUsd, f.userMonthlyBudgetUsd, f.globalDailyBudgetUsd, f.warnPercent];
        const nums = raw.map(r => Number(r));
        if (nums.some((n, i) => raw[i].trim() === '' || !Number.isFinite(n) || n < 0)) {
            void this._toast('admin.ai.settings.invalid', 'danger');
            return;
        }
        this.savingSettings.set(true);
        this._api.updateAiSettings({
            limitsEnabled: f.limitsEnabled,
            burstPerMinute: Math.round(nums[0]),
            userDailyBudgetUsd: nums[1],
            userMonthlyBudgetUsd: nums[2],
            globalDailyBudgetUsd: nums[3],
            warnPercent: nums[4],
        }).subscribe({
            next: s => {
                this.form.set(this._toForm(s));
                this.savingSettings.set(false);
                void this._toast('admin.ai.settings.saved', 'success');
                this.loadUsage();
            },
            error: () => {
                this.savingSettings.set(false);
                void this._toast('admin.ai.settings.saveError', 'danger');
            },
        });
    }

    // ── Per-user limit ─────────────────────────────────────────────────

    openEdit(u: TopUser): void {
        this.editUser.set(u);
        this.editDaily.set(u.limit?.dailyBudgetUsd != null ? String(u.limit.dailyBudgetUsd) : '');
        this.editMonthly.set(u.limit?.monthlyBudgetUsd != null ? String(u.limit.monthlyBudgetUsd) : '');
        this.editBlocked.set(u.limit?.blocked ?? false);
        this.editNote.set(u.limit?.note ?? '');
    }

    closeEdit(): void {
        if (!this.editBusy()) this.editUser.set(null);
    }

    saveEdit(): void {
        const u = this.editUser();
        if (!u) return;
        const daily = this._optionalNumber(this.editDaily());
        const monthly = this._optionalNumber(this.editMonthly());
        if (Number.isNaN(daily) || Number.isNaN(monthly)) {
            void this._toast('admin.ai.limit.invalid', 'danger');
            return;
        }
        this.editBusy.set(true);
        this._api.setAiUserLimit(u.userId, {
            dailyBudgetUsd: daily,
            monthlyBudgetUsd: monthly,
            blocked: this.editBlocked(),
            note: this.editNote().trim() || null,
        }).subscribe({
            next: () => this._editDone('admin.ai.limit.saved'),
            error: () => this._editFailed(),
        });
    }

    resetEdit(): void {
        const u = this.editUser();
        if (!u) return;
        this.editBusy.set(true);
        this._api.resetAiUserLimit(u.userId).subscribe({
            next: () => this._editDone('admin.ai.limit.resetDone'),
            error: () => this._editFailed(),
        });
    }

    private _editDone(toastKey: string): void {
        this.editBusy.set(false);
        this.editUser.set(null);
        void this._toast(toastKey, 'success');
        this.loadUsage();
    }

    private _editFailed(): void {
        this.editBusy.set(false);
        void this._toast('admin.ai.limit.saveError', 'danger');
    }

    /** Empty -> null (use default); invalid or negative -> NaN. */
    private _optionalNumber(raw: string): number | null {
        const t = raw.trim();
        if (t === '') return null;
        const n = Number(t);
        return Number.isFinite(n) && n >= 0 ? n : NaN;
    }

    private _toForm(s: AiSettings): SettingsForm {
        return {
            limitsEnabled: s.limitsEnabled,
            burstPerMinute: String(s.burstPerMinute),
            userDailyBudgetUsd: String(s.userDailyBudgetUsd),
            userMonthlyBudgetUsd: String(s.userMonthlyBudgetUsd),
            globalDailyBudgetUsd: String(s.globalDailyBudgetUsd),
            warnPercent: String(s.warnPercent),
        };
    }

    private async _toast(key: string, color?: string): Promise<void> {
        const toast = await this._toastCtrl.create({ message: this._transloco.translate(key), duration: 3000, color, position: 'top' });
        await toast.present();
    }
}
