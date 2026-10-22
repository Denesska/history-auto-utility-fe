import { Injectable, inject } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslocoService } from '@jsverse/transloco';
import { formatDate } from '@hau/shared/utils/formatting.util';
import { ReminderMuteService } from './reminder-mute.service';

export type MuteDuration = 1 | 3 | 6 | null;

/**
 * UI-side wrapper around `ReminderMuteService`: mute/unmute plus the confirmation toast and the
 * "muted until ..." label. Shared by the car hub and the garage list so both say the same thing.
 */
@Injectable({ providedIn: 'root' })
export class ReminderMuteActionsService {
  private readonly mutes = inject(ReminderMuteService);
  private readonly toastCtrl = inject(ToastController);
  private readonly transloco = inject(TranslocoService);

  /** "Reminders muted until 15 Mar 2027" / "Reminders muted" (indefinite); '' when not muted. Signal-reading. */
  statusLabel(carId: number): string {
    const until = this.mutes.mutedUntil(carId);
    if (until === undefined) return '';
    return until === null
      ? this.transloco.translate('reminderMute.mutedIndefinite')
      : this.transloco.translate('reminderMute.mutedUntil', { date: formatDate(until) });
  }

  async mute(carId: number, months: MuteDuration): Promise<void> {
    try {
      await this.mutes.mute(carId, months);
      const key = months === null ? 'reminderMute.toastMutedForever' : 'reminderMute.toastMuted';
      await this.toast(this.transloco.translate(key, { months }));
    } catch {
      await this.toast(this.transloco.translate('reminderMute.error'), 'danger');
    }
  }

  async unmute(carId: number): Promise<void> {
    try {
      await this.mutes.unmute(carId);
      await this.toast(this.transloco.translate('reminderMute.toastUnmuted'));
    } catch {
      await this.toast(this.transloco.translate('reminderMute.error'), 'danger');
    }
  }

  private async toast(message: string, color?: string): Promise<void> {
    const toast = await this.toastCtrl.create({ message, duration: 3000, color, position: 'top' });
    await toast.present();
  }
}
