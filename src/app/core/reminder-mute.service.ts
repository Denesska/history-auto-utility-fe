import { Injectable, computed, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CarReminderMute, NotificationsApiService } from './notifications-api.service';

/**
 * The current user's car-level reminder mutes (all reminders of one car silenced, for this user only).
 * Loaded once on first use and updated after every change; consumers just read the signals.
 *
 *   muteSvc.isMuted(carId)      // signal-reading, safe in templates/computed
 *   muteSvc.mutedUntil(carId)   // undefined = not muted, null = until turned back on, ISO string = ends then
 *   await muteSvc.mute(carId, 3)      // months 1 | 3 | 6, or null = until turned back on
 *   await muteSvc.unmute(carId)
 */
@Injectable({ providedIn: 'root' })
export class ReminderMuteService {
  private readonly api = inject(NotificationsApiService);
  private readonly _mutes = signal<ReadonlyMap<number, string | null>>(new Map());

  /** carId -> end date (null = until turned back on) of every currently active mute. */
  readonly mutes = this._mutes.asReadonly();
  readonly mutedCarIds = computed(() => [...this._mutes().keys()]);

  constructor() {
    void this.reload();
  }

  /** Re-fetch from the server (e.g. after switching session context). Failures leave the current state. */
  async reload(): Promise<void> {
    try {
      this.setAll(await firstValueFrom(this.api.carMutes()));
    } catch {
      /* not logged in yet / offline: keep current state */
    }
  }

  mutedUntil(carId: number): string | null | undefined {
    const until = this._mutes().get(carId);
    if (until === undefined) return undefined;
    return until !== null && new Date(until).getTime() <= Date.now() ? undefined : until;
  }

  isMuted(carId: number): boolean {
    return this.mutedUntil(carId) !== undefined;
  }

  async mute(carId: number, months: 1 | 3 | 6 | null): Promise<void> {
    const res = await firstValueFrom(this.api.muteCar(carId, months));
    this._mutes.update(m => new Map(m).set(res.carId, res.until));
  }

  async unmute(carId: number): Promise<void> {
    await firstValueFrom(this.api.unmuteCar(carId));
    this._mutes.update(m => {
      const next = new Map(m);
      next.delete(carId);
      return next;
    });
  }

  private setAll(rows: CarReminderMute[]): void {
    this._mutes.set(new Map(rows.map(r => [r.carId, r.until])));
  }
}
