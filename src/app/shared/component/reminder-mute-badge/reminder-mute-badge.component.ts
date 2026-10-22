import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { IonIcon } from '@ionic/angular';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { addIcons } from 'ionicons';
import { notificationsOffOutline, notificationsOutline } from 'ionicons/icons';
import { ReminderMuteService } from '@hau/core/reminder-mute.service';
import { ReminderMuteActionsService } from '@hau/core/reminder-mute-actions.service';

/**
 * Per-car reminder bell, always visible: an on/off toggle for this user's reminders of the car.
 * ON (subtle outline bell): tap opens the duration picker, then mutes. MUTED (accent bell-off): tooltip
 * carries the "muted until ..." text; tap turns reminders back on.
 */
@Component({
  selector: 'app-reminder-mute-badge',
  imports: [IonIcon, TranslocoPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (mutes.isMuted(carId())) {
      <button
        type="button"
        class="mute-badge mute-badge--muted"
        [attr.title]="mutedLabel()"
        [attr.aria-label]="mutedLabel()"
        (click)="onClick($event)"
        (keydown.enter)="$event.stopPropagation()">
        <span class="mute-badge-dot"><ion-icon name="notifications-off-outline"></ion-icon></span>
      </button>
    } @else {
      <button
        type="button"
        class="mute-badge mute-badge--on"
        [attr.title]="'reminderMute.tapToMute' | transloco"
        [attr.aria-label]="'reminderMute.tapToMute' | transloco"
        (click)="onClick($event)"
        (keydown.enter)="$event.stopPropagation()">
        <span class="mute-badge-dot"><ion-icon name="notifications-outline"></ion-icon></span>
      </button>
    }
  `,
  styles: `
    :host { display: inline-flex; flex-shrink: 0; }
    /* 32px touch target around a 22px visual badge */
    .mute-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      margin: -5px;
      padding: 0;
      border: 0;
      background: transparent;
      cursor: pointer;
    }
    .mute-badge-dot {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      border-radius: var(--hau-radius-pill);
    }
    .mute-badge ion-icon { font-size: 0.8rem; }
    // Colour-only status: on = soft green bell, muted = solid red bell-off.
    .mute-badge--on .mute-badge-dot {
      background: color-mix(in srgb, var(--hau-success-fg) 16%, transparent);
      color: var(--hau-success-fg);
    }
    .mute-badge--muted .mute-badge-dot {
      background: var(--hau-danger-fg);
      color: #fff;
    }
    .mute-badge:hover .mute-badge-dot { filter: brightness(1.15); }
  `,
})
export class ReminderMuteBadgeComponent {
  readonly carId = input.required<number>();
  protected readonly mutes = inject(ReminderMuteService);
  protected readonly actions = inject(ReminderMuteActionsService);
  private readonly transloco = inject(TranslocoService);

  constructor() {
    addIcons({ notificationsOffOutline, notificationsOutline });
  }

  protected mutedLabel(): string {
    return `${this.actions.statusLabel(this.carId())} — ${this.transloco.translate('reminderMute.tapToUnmute')}`;
  }

  onClick(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    if (this.mutes.isMuted(this.carId())) void this.actions.unmute(this.carId());
    else void this.actions.chooseAndMute(this.carId());
  }
}
