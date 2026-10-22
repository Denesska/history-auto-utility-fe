import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { IonIcon } from '@ionic/angular';
import { TranslocoPipe } from '@jsverse/transloco';
import { addIcons } from 'ionicons';
import { notificationsOffOutline } from 'ionicons/icons';
import { OverlayBackDirective } from '@hau/core/navigation/overlay-back.directive';
import { MUTE_DURATIONS, MuteDuration } from '@hau/core/reminder-mute-actions.service';

/**
 * Bottom sheet that asks for how long a car's reminders should be muted (1 / 3 / 6 months / until turned
 * back on). The one duration chooser of the app: opened through `ReminderMuteActionsService.chooseAndMute()`
 * (car hub "..." menu and the garage bell). That service attaches this component straight to `document.body`
 * so the fixed overlay is never clipped or trapped by a card's overflow/transform.
 */
@Component({
  selector: 'app-reminder-mute-sheet',
  imports: [IonIcon, TranslocoPipe, OverlayBackDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="rms-backdrop" (click)="closed.emit()"></div>
    <div class="rms-sheet" appOverlayBack (overlayBackClose)="closed.emit()">
      <div class="rms-handle"></div>
      <p class="rms-title">{{ 'reminderMute.chooseTitle' | transloco }}</p>
      @for (opt of durations; track opt.key) {
        <button type="button" class="rms-item" (click)="chosen.emit(opt.months)">
          <div class="rms-icon"><ion-icon name="notifications-off-outline"></ion-icon></div>
          <div class="rms-label">{{ opt.key | transloco }}</div>
        </button>
      }
      <button type="button" class="rms-cancel" (click)="closed.emit()">{{ 'common.cancel' | transloco }}</button>
    </div>
  `,
  styleUrl: './reminder-mute-sheet.component.scss',
})
export class ReminderMuteSheetComponent {
  readonly durations = MUTE_DURATIONS;
  readonly chosen = output<MuteDuration>();
  readonly closed = output<void>();

  constructor() {
    addIcons({ notificationsOffOutline });
  }
}
