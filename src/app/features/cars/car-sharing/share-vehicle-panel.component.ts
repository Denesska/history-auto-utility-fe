import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarAccessDto, CarAccessRole } from '@hau/autogenapi/models';
import { CarAccessFacade } from '@hau/features/cars/state/car-access/car-access.facade';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personAddOutline, shareOutline, trashOutline } from 'ionicons/icons';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { Subject, take, takeUntil } from 'rxjs';
import { NotificationsSocketService } from '@hau/core/notifications-socket.service';

@Component({
  selector: 'app-share-vehicle-panel',
  templateUrl: './share-vehicle-panel.component.html',
  styleUrls: ['./share-vehicle-panel.component.scss'],
  imports: [FormsModule, IonIcon, TranslocoPipe, DropdownComponent],
})
export class ShareVehiclePanelComponent implements OnChanges, OnDestroy {
  @Input() carId!: number;
  @Input() carName!: string;

  entries: CarAccessDto[] = [];
  loading = false;
  inviteEmail = '';
  inviteRole: CarAccessRole = 'VIEWER';
  inviting = false;
  error: string | null = null;

  readonly roles: CarAccessRole[] = ['FULL', 'USER', 'MAINTENANCE', 'VIEWER'];

  private readonly _destroy$ = new Subject<void>();

  constructor(
    private readonly _facade: CarAccessFacade,
    private readonly _transloco: TranslocoService,
    private readonly notificationsSocketService: NotificationsSocketService,
  ) {
    addIcons({ personAddOutline, shareOutline, trashOutline });

    // Live-refresh the pending/accepted status as soon as the invitee accepts,
    // instead of leaving "pending" on screen until the owner manually reloads.
    this.notificationsSocketService.notification$
      .pipe(takeUntil(this._destroy$))
      .subscribe(notif => {
        if (notif.type === 'CAR_ACCESS_ACCEPTED' && notif.data['carId'] === this.carId) {
          this.loadAccess();
        }
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  roleLabel(role: CarAccessRole): string {
    return this._transloco.translate(`cars.shareVehicle.roles.${role.toLowerCase()}`);
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
    this._facade.entriesFor(this.carId).pipe(takeUntil(this._destroy$)).subscribe(entries => {
      this.entries = entries;
      this.loading = false;
    });
    this._facade.loadAccess(this.carId);
  }

  onEmailInput(value: string): void {
    this.inviteEmail = value.toLowerCase();
  }

  sendInvite(): void {
    const email = this.inviteEmail.trim().toLowerCase();
    if (!email) return;
    this.inviting = true;
    this.error = null;
    this._facade.inviteUser(this.carId, email, this.inviteRole).pipe(take(1)).subscribe({
      next: () => {
        this.inviteEmail = '';
        this.inviting = false;
      },
      error: (err) => {
        this.error = err?.error?.message ?? this._transloco.translate('cars.shareVehicle.inviteError');
        this.inviting = false;
      },
    });
  }

  changeRole(entry: CarAccessDto, role: CarAccessRole): void {
    this._facade.changeRole(this.carId, entry.user.id, role).pipe(take(1)).subscribe();
  }

  removeAccess(entry: CarAccessDto): void {
    this._facade.removeAccess(this.carId, entry.id, entry.user.id).pipe(take(1)).subscribe();
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
