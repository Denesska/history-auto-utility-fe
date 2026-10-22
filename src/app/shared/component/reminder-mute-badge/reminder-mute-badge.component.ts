import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { notificationsOffOutline } from 'ionicons/icons';
import { ReminderMuteService } from '@hau/core/reminder-mute.service';
import { ReminderMuteActionsService } from '@hau/core/reminder-mute-actions.service';

/**
 * Small bell-off badge for a car whose reminders are muted (renders nothing otherwise).
 * Tooltip/aria-label carry the "muted until ..." text; clicking turns reminders back on.
 */
@Component({
  selector: 'app-reminder-mute-badge',
  imports: [IonIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (mutes.isMuted(carId())) {
      <button
        type="button"
        class="mute-badge"
        [attr.title]="actions.statusLabel(carId())"
        [attr.aria-label]="actions.statusLabel(carId())"
        (click)="onClick($event)"
        (keydown.enter)="$event.stopPropagation()">
        <ion-icon name="notifications-off-outline"></ion-icon>
      </button>
    }
  `,
  styles: `
    :host { display: inline-flex; flex-shrink: 0; }
    .mute-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      padding: 0;
      border: 0;
      border-radius: var(--hau-radius-pill);
      background: color-mix(in srgb, var(--hau-primary) 14%, transparent);
      color: var(--hau-primary);
      cursor: pointer;
    }
    .mute-badge ion-icon { font-size: 0.8rem; }
  `,
})
export class ReminderMuteBadgeComponent {
  readonly carId = input.required<number>();
  protected readonly mutes = inject(ReminderMuteService);
  protected readonly actions = inject(ReminderMuteActionsService);

  constructor() {
    addIcons({ notificationsOffOutline });
  }

  onClick(event: Event): void {
    event.stopPropagation();
    void this.actions.unmute(this.carId());
  }
}
