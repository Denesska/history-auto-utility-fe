import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarAccessDto, CarAccessRole } from '@hau/autogenapi/models';
import { CarAccessService } from '@hau/autogenapi/services';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeOutline, personAddOutline, shareOutline, trashOutline } from 'ionicons/icons';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { Subject, takeUntil } from 'rxjs';
import { NotificationsSocketService } from '@hau/core/notifications-socket.service';

@Component({
  selector: 'app-share-vehicle-panel',
  templateUrl: './share-vehicle-panel.component.html',
  styleUrls: ['./share-vehicle-panel.component.scss'],
  imports: [FormsModule, IonIcon, TranslocoPipe],
})
export class ShareVehiclePanelComponent implements OnChanges, OnDestroy {
  @Input() carId!: number;
  @Input() carName!: string;
  @Output() closed = new EventEmitter<void>();

  entries: CarAccessDto[] = [];
  loading = false;
  inviteEmail = '';
  inviteRole: CarAccessRole = 'VIEWER';
  inviting = false;
  error: string | null = null;

  readonly roles: CarAccessRole[] = ['FULL', 'USER', 'MAINTENANCE', 'VIEWER'];

  private readonly _destroy$ = new Subject<void>();

  constructor(
    private readonly carAccessService: CarAccessService,
    private readonly _transloco: TranslocoService,
    private readonly notificationsSocketService: NotificationsSocketService,
  ) {
    addIcons({ closeOutline, personAddOutline, shareOutline, trashOutline });

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

  ngOnChanges(): void {
    if (this.carId) this.loadAccess();
  }

  loadAccess(): void {
    this.loading = true;
    this.carAccessService.getAccessList({ carId: this.carId }).subscribe({
      next: entries => { this.entries = entries; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  onEmailInput(value: string): void {
    this.inviteEmail = value.toLowerCase();
  }

  sendInvite(): void {
    const email = this.inviteEmail.trim().toLowerCase();
    if (!email) return;
    this.inviting = true;
    this.error = null;
    this.carAccessService.inviteUser({
      carId: this.carId,
      body: { email, role: this.inviteRole },
    }).subscribe({
      next: entry => {
        this.entries = [...this.entries, entry];
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
    this.carAccessService.changeRole({
      carId: this.carId,
      targetUserId: entry.user.id,
      body: { role },
    }).subscribe({
      next: updated => {
        this.entries = this.entries.map(e => e.id === updated.id ? updated : e);
      },
    });
  }

  removeAccess(entry: CarAccessDto): void {
    this.carAccessService.removeAccess({
      carId: this.carId,
      targetUserId: entry.user.id,
    }).subscribe({
      next: () => {
        this.entries = this.entries.filter(e => e.id !== entry.id);
      },
    });
  }

  getInitials(entry: CarAccessDto): string {
    return `${entry.user.first_name[0] ?? ''}${entry.user.last_name[0] ?? ''}`.toUpperCase();
  }

  isPending(entry: CarAccessDto): boolean {
    return !entry.accepted_at;
  }

  isOwner(entry: CarAccessDto): boolean {
    return entry.role === 'OWNER';
  }

  close(): void {
    this.closed.emit();
  }
}
