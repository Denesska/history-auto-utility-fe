import { TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarAccessDto, CarAccessRole } from '@hau/autogenapi/models';
import { CarAccessService } from '@hau/autogenapi/services';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeOutline, personAddOutline, shareOutline, trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-share-vehicle-panel',
  templateUrl: './share-vehicle-panel.component.html',
  styleUrls: ['./share-vehicle-panel.component.scss'],
  imports: [TitleCasePipe, FormsModule, IonIcon],
})
export class ShareVehiclePanelComponent implements OnChanges {
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

  constructor(private readonly carAccessService: CarAccessService) {
    addIcons({ closeOutline, personAddOutline, shareOutline, trashOutline });
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

  sendInvite(): void {
    if (!this.inviteEmail.trim()) return;
    this.inviting = true;
    this.error = null;
    this.carAccessService.inviteUser({
      carId: this.carId,
      body: { email: this.inviteEmail.trim(), role: this.inviteRole },
    }).subscribe({
      next: entry => {
        this.entries = [...this.entries, entry];
        this.inviteEmail = '';
        this.inviting = false;
      },
      error: (err) => {
        this.error = err?.error?.message ?? 'Could not send invitation.';
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
