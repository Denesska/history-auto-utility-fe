import { Component, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { IonIcon } from '@ionic/angular';
import { TranslocoPipe } from '@jsverse/transloco';
import { addIcons } from 'ionicons';
import { businessOutline, swapHorizontalOutline } from 'ionicons/icons';
import { AUTH_ROUTES } from '@hau/features/auth/auth.routes.const';
import { SessionContextService } from '@hau/core/session/session-context.service';

/**
 * Permanent "you are in a business account" marker: building icon, the active
 * organization's name and a small "Business" label. Renders nothing in a
 * personal session. Tapping it opens the organization picker, which doubles as
 * the organization switcher. Lives in the always-dark desktop
 * sidebar; on mobile the account details live on the Account screen
 * (`AccountDetailsComponent`).
 */
@Component({
  selector: 'app-context-badge',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [IonIcon, TranslocoPipe],
  templateUrl: './context-badge.component.html',
  styleUrl: './context-badge.component.scss',
})
export class ContextBadgeComponent {
  private readonly _router = inject(Router);
  private readonly _session = inject(SessionContextService);

  readonly visible = computed(() => this._session.isBusiness());
  readonly orgName = this._session.activeOrgName;

  constructor() { addIcons({ businessOutline, swapHorizontalOutline }); }

  openPicker(): void {
    void this._router.navigate([AUTH_ROUTES.selectOrganization.fullPath]);
  }
}
