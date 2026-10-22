import { ApplicationRef, ComponentRef, EnvironmentInjector, Injectable, createComponent, inject } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslocoService } from '@jsverse/transloco';
import { formatDate } from '@hau/shared/utils/formatting.util';
import { ReminderMuteService } from './reminder-mute.service';
import type { ReminderMuteSheetComponent } from '@hau/shared/component/reminder-mute-sheet/reminder-mute-sheet.component';

export type MuteDuration = 1 | 3 | 6 | null;

/** The mute durations offered everywhere (car hub picker, garage bell): Transloco key + months (null = until turned back on). */
export const MUTE_DURATIONS: { key: string; months: MuteDuration }[] = [
  { key: 'reminderMute.duration1', months: 1 },
  { key: 'reminderMute.duration3', months: 3 },
  { key: 'reminderMute.duration6', months: 6 },
  { key: 'reminderMute.durationForever', months: null },
];

/**
 * UI-side wrapper around `ReminderMuteService`: mute/unmute plus the confirmation toast and the
 * "muted until ..." label. Shared by the car hub and the garage list so both say the same thing.
 */
@Injectable({ providedIn: 'root' })
export class ReminderMuteActionsService {
  private readonly mutes = inject(ReminderMuteService);
  private readonly toastCtrl = inject(ToastController);
  private readonly appRef = inject(ApplicationRef);
  private readonly envInjector = inject(EnvironmentInjector);
  private sheetRef?: ComponentRef<ReminderMuteSheetComponent>;
  private readonly transloco = inject(TranslocoService);

  /** "Reminders muted until 15 Mar 2027" / "Reminders muted" (indefinite); '' when not muted. Signal-reading. */
  statusLabel(carId: number): string {
    const until = this.mutes.mutedUntil(carId);
    if (until === undefined) return '';
    return until === null
      ? this.transloco.translate('reminderMute.mutedIndefinite')
      : this.transloco.translate('reminderMute.mutedUntil', { date: formatDate(until) });
  }

  /**
   * Opens the shared duration sheet (`ReminderMuteSheetComponent`) and mutes the car for the chosen one
   * (no-op on cancel). The sheet is attached to `document.body`, like the photo lightbox, so a card's
   * overflow/transform can't clip it and clicks inside never reach the card.
   */
  async chooseAndMute(carId: number): Promise<void> {
    this.closeSheet();
    const { ReminderMuteSheetComponent } = await import('@hau/shared/component/reminder-mute-sheet/reminder-mute-sheet.component');
    const ref = createComponent(ReminderMuteSheetComponent, { environmentInjector: this.envInjector });
    ref.instance.closed.subscribe(() => this.closeSheet());
    ref.instance.chosen.subscribe(months => {
      this.closeSheet();
      void this.mute(carId, months);
    });
    document.body.appendChild(ref.location.nativeElement);
    this.appRef.attachView(ref.hostView);
    ref.changeDetectorRef.detectChanges();
    this.sheetRef = ref;
  }

  private closeSheet(): void {
    const ref = this.sheetRef;
    if (!ref) return;
    this.sheetRef = undefined;
    this.appRef.detachView(ref.hostView);
    ref.destroy();
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
