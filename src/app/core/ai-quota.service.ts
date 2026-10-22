import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslocoService } from '@jsverse/transloco';
import { environment } from '../../environments/environment';

export type AiQuotaReason = 'burst' | 'daily' | 'monthly' | 'blocked' | 'global';

interface AiUsagePeriod {
  usedUsd: number;
  budgetUsd: number;
  percent: number;
}

interface AiUsageMe {
  daily: AiUsagePeriod;
  monthly: AiUsagePeriod;
  warn: boolean;
  limitedReason: string | null;
}

// Frontend side of the backend's AI usage guard: recognises the 429
// AI_QUOTA_EXCEEDED error, turns it into a polite translated message, and
// shows a gentle "you're close to the limit" toast (once per session/period).
@Injectable({ providedIn: 'root' })
export class AiQuotaService {
  private readonly _http = inject(HttpClient);
  private readonly _toastCtrl = inject(ToastController);
  private readonly _transloco = inject(TranslocoService);
  private readonly _warned = new Set<'daily' | 'monthly'>();

  isQuotaError(err: unknown): boolean {
    const e = err as HttpErrorResponse | null;
    return e?.status === 429 && e?.error?.code === 'AI_QUOTA_EXCEEDED';
  }

  /** Translated, polite explanation for a quota error (retry time interpolated when relevant). */
  messageFor(err: unknown): string {
    const body = (err as HttpErrorResponse | null)?.error ?? {};
    const reason: AiQuotaReason = ['burst', 'daily', 'monthly', 'blocked', 'global'].includes(body.reason)
      ? body.reason
      : 'burst';
    const lang = this._transloco.getActiveLang();
    const retry = body.retryAt ? new Date(body.retryAt) : null;
    const valid = retry && !isNaN(retry.getTime());
    const time = valid ? retry.toLocaleTimeString(lang, { hour: '2-digit', minute: '2-digit' }) : '';
    const date = valid ? retry.toLocaleDateString(lang, { day: 'numeric', month: 'long' }) : '';
    // Without a usable retry time fall back to the wording that doesn't need one.
    const key = !valid && (reason === 'daily' || reason === 'monthly') ? `${reason}NoTime` : reason;
    return this._transloco.translate(`aiQuota.${key}`, { time, date });
  }

  /** For flows with no inline slot (e.g. odometer scan): toast the quota message. Returns true if it was a quota error. */
  async toastIfQuotaError(err: unknown): Promise<boolean> {
    if (!this.isQuotaError(err)) return false;
    const toast = await this._toastCtrl.create({
      message: this.messageFor(err),
      duration: 6000,
      color: 'warning',
      position: 'top',
    });
    await toast.present();
    return true;
  }

  /** After a successful scan: if the user is close to a limit, say so once per session per period. Fails silently. */
  checkWarning(): void {
    this._http.get<AiUsageMe>(`${environment.apiUrl}/ai-usage/me`).subscribe({
      next: async usage => {
        if (!usage?.warn) return;
        const period: 'daily' | 'monthly' = (usage.monthly?.percent ?? 0) > (usage.daily?.percent ?? 0) ? 'monthly' : 'daily';
        if (this._warned.has(period)) return;
        this._warned.add(period);
        try {
          const toast = await this._toastCtrl.create({
            message: this._transloco.translate(`aiQuota.warning.${period}`),
            duration: 6000,
            color: 'warning',
            position: 'top',
          });
          await toast.present();
        } catch {
          /* ignore */
        }
      },
      error: () => {},
    });
  }
}
