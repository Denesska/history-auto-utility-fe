import { Component, computed, inject, output, ChangeDetectionStrategy } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { IonIcon } from '@ionic/angular';
import { TranslocoPipe } from '@jsverse/transloco';
import { addIcons } from 'ionicons';
import { businessOutline, logOutOutline, personOutline, swapHorizontalOutline } from 'ionicons/icons';
import { AUTH_ROUTES } from '@hau/features/auth/auth.routes.const';
import { SessionContextService } from '@hau/core/session/session-context.service';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';

/**
 * "Which account am I in" block for the Account screen (the mobile account
 * section): personal -> name/email + "Personal account"; business -> company
 * name, "Business" label, role and the user's email, tappable to switch company.
 * Carries the icon-only logout button; the host owns the actual logout flow.
 */
@Component({
  selector: 'app-account-details',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [IonIcon, TranslocoPipe],
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.scss',
})
export class AccountDetailsComponent {
  readonly logoutClick = output<void>();

  private readonly _router = inject(Router);
  private readonly _bootstrap = inject(BootstrapFacade);
  private readonly _session = inject(SessionContextService);

  readonly me = toSignal(this._bootstrap.me$, { initialValue: null });
  readonly isBusiness = this._session.isBusiness;
  readonly orgName = this._session.activeOrgName;
  readonly role = this._session.activeOrgRole;
  readonly fullName = computed(() => {
    const me = this.me();
    return [me?.first_name, me?.last_name].filter(Boolean).join(' ');
  });

  constructor() { addIcons({ businessOutline, logOutOutline, personOutline, swapHorizontalOutline }); }

  openPicker(): void {
    void this._router.navigate([AUTH_ROUTES.selectOrganization.fullPath]);
  }
}
