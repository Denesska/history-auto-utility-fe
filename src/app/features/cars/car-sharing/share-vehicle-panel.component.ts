import {
  Component,
  Input,
  OnChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarAccessDto, CarAccessRole } from '@hau/autogenapi/models';
import { CarAccessFacade } from '@hau/features/cars/state/car-access/car-access.facade';
import {
  DropdownComponent,
  DropdownOption,
} from '@hau/shared/component/dropdown/dropdown.component';
import { IonContent, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { personAddOutline, shareOutline, trashOutline } from 'ionicons/icons';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Subject, catchError, debounceTime, distinctUntilChanged, of, switchMap, take } from 'rxjs';
import { AutocompleteComponent } from '@hau/shared/component/autocomplete/autocomplete.component';
import { ShareUserSearchResult, ShareUserSearchService } from './share-user-search.service';
import { NotificationsSocketService } from '@hau/core/notifications-socket.service';

@UntilDestroy()
@Component({
  selector: 'app-share-vehicle-panel',
  templateUrl: './share-vehicle-panel.component.html',
  styleUrls: ['./share-vehicle-panel.component.scss'],
  // Sizes this host as a flex child of the routed page's `.ion-page`, so the
  // <ion-content> inside it gets a height — see `.hau-page-panel` in global.scss.
  host: { class: 'hau-page-panel' },
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule, IonContent, IonIcon, TranslocoPipe, DropdownComponent, AutocompleteComponent],
})
export class ShareVehiclePanelComponent implements OnChanges {
  @Input() carId!: number;
  @Input() carName!: string;

  entries: CarAccessDto[] = [];
  loading = false;
  /** Email of the picked search result (or of an address typed in full and confirmed). Empty = nothing chosen. */
  inviteEmail = '';
  /** Server-side matches for the text typed in the recipient field. */
  candidates: ShareUserSearchResult[] = [];
  /** Typed text still looks like a full email address — then "invite this address" is offered even without a match. */
  typedLooksLikeEmail = false;
  private _typedExtra: DropdownOption | null = null;
  private readonly _search$ = new Subject<string>();
  inviteRole: CarAccessRole = 'VIEWER';
  inviting = false;
  error: string | null = null;

  readonly roles: CarAccessRole[] = ['FULL', 'USER', 'MAINTENANCE', 'VIEWER'];

  constructor(
    private readonly _facade: CarAccessFacade,
    private readonly _transloco: TranslocoService,
    private readonly notificationsSocketService: NotificationsSocketService,
    private readonly _userSearch: ShareUserSearchService,
  ) {
    addIcons({ personAddOutline, shareOutline, trashOutline });

    // Search-as-you-type for the recipient: debounced, min 3 chars, latest query wins.
    this._search$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(q =>
          q.length < 3
            ? of([] as ShareUserSearchResult[])
            : this._userSearch.search(q).pipe(catchError(() => of([] as ShareUserSearchResult[]))),
        ),
        untilDestroyed(this),
      )
      .subscribe(list => (this.candidates = list));

    // Live-refresh the pending/accepted status as soon as the invitee accepts,
    // instead of leaving "pending" on screen until the owner manually reloads.
    this.notificationsSocketService.notification$
      .pipe(untilDestroyed(this))
      .subscribe(notif => {
        if (
          notif.type === 'CAR_ACCESS_ACCEPTED' &&
          notif.data['carId'] === this.carId
        ) {
          this.loadAccess();
        }
      });
  }

  roleLabel(role: CarAccessRole): string {
    return this._transloco.translate(
      `cars.shareVehicle.roles.${role.toLowerCase()}`,
    );
  }

  get roleOptions(): DropdownOption[] {
    return this.roles.map(r => ({ value: r, label: this.roleLabel(r) }));
  }

  onInviteRoleChange(value: string | number): void {
    this.inviteRole = value as CarAccessRole;
  }

  onEntryRoleChange(entry: CarAccessDto, value: string | number): void {
    this.changeRole(entry, value as CarAccessRole);
  }

  ngOnChanges(): void {
    if (this.carId) this.loadAccess();
  }

  loadAccess(): void {
    this.loading = true;
    this._facade
      .entriesFor(this.carId)
      .pipe(untilDestroyed(this))
      .subscribe(entries => {
        this.entries = entries;
        this.loading = false;
      });
    this._facade.loadAccess(this.carId);
  }

  /** Display name of a user: "First Last", falling back to the email when both are empty. */
  displayName(u: { first_name?: string; last_name?: string; email: string }): string {
    return `${u.first_name ?? ''} ${u.last_name ?? ''}`.trim() || u.email;
  }

  /** Options for `<app-autocomplete>`: name (when known) with the email under it, plus the typed-address row when picked. */
  get candidateOptions(): DropdownOption[] {
    const opts: DropdownOption[] = this.candidates.map(u => ({
      value: u.email.toLowerCase(),
      label: this.displayName(u) === u.email ? u.email : `${this.displayName(u)} · ${u.email}`,
    }));
    if (this._typedExtra && !opts.some(o => o.value === this._typedExtra!.value)) opts.push(this._typedExtra);
    return opts;
  }

  onRecipientSearch(text: string): void {
    // Typing again discards a previous pick.
    this.inviteEmail = '';
    this._typedExtra = null;
    this.typedLooksLikeEmail = /^\S+@\S+\.\S+$/.test(text);
    this._search$.next(text);
  }

  onRecipientPicked(value: string | number | null): void {
    this.inviteEmail = value == null ? '' : String(value).toLowerCase();
  }

  /** The "invite <typed address>" row: accept a full email that the search didn't return. */
  onRecipientTyped(email: string): void {
    const e = email.trim().toLowerCase();
    this._typedExtra = { value: e, label: e };
    this.inviteEmail = e;
  }

  sendInvite(): void {
    const email = this.inviteEmail.trim().toLowerCase();
    if (!email) return;
    this.inviting = true;
    this.error = null;
    this._facade
      .inviteUser(this.carId, email, this.inviteRole)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.inviteEmail = '';
          this.inviting = false;
        },
        error: err => {
          this.error =
            err?.error?.message ??
            this._transloco.translate('cars.shareVehicle.inviteError');
          this.inviting = false;
        },
      });
  }

  changeRole(entry: CarAccessDto, role: CarAccessRole): void {
    this._facade
      .changeRole(this.carId, entry.user.id, role)
      .pipe(take(1))
      .subscribe();
  }

  removeAccess(entry: CarAccessDto): void {
    this._facade
      .removeAccess(this.carId, entry.id, entry.user.id)
      .pipe(take(1))
      .subscribe();
  }

  getInitials(entry: CarAccessDto): string {
    return `${entry.user.first_name[0] ?? ''}${entry.user.last_name[0] ?? ''}`.toUpperCase();
  }

  isPending(entry: CarAccessDto): boolean {
    return !entry.accepted_at;
  }

  get acceptedEntries(): CarAccessDto[] {
    return this.entries.filter(e => !this.isPending(e));
  }

  get pendingEntries(): CarAccessDto[] {
    return this.entries.filter(e => this.isPending(e));
  }

  isOwner(entry: CarAccessDto): boolean {
    return entry.role === 'OWNER';
  }
}
