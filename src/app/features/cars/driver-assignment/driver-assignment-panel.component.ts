import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DriverAssignmentApiService } from '@hau/core/driver-assignment-api.service';
import { OrganizationApiService } from '@hau/core/organization-api.service';
import { OrganizationMembershipDto } from '@hau/features/organization/organization.model';
import { DriverAssignmentDto } from '@hau/features/cars/driver-assignment/driver-assignment.model';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkOutline, personRemoveOutline } from 'ionicons/icons';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { forkJoin, take } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-driver-assignment-panel',
  templateUrl: './driver-assignment-panel.component.html',
  styleUrls: ['./driver-assignment-panel.component.scss'],
  // Sizes this host as a flex child of the routed page's `.ion-page`, so the
  // <ion-content> inside it gets a height — same as `share-vehicle-panel`.
  host: { class: 'hau-page-panel' },
  imports: [FormsModule, DatePipe, IonContent, IonIcon, TranslocoPipe, DropdownComponent],
})
export class DriverAssignmentPanelComponent implements OnChanges {
  @Input() carId!: number;
  @Input() carName!: string;
  @Input() organizationId: number | null = null;

  current: DriverAssignmentDto | null = null;
  history: DriverAssignmentDto[] = [];
  members: OrganizationMembershipDto[] = [];
  loading = false;
  selectedDriverId: number | null = null;
  assigning = false;
  unassigning = false;
  error: string | null = null;

  constructor(
    private readonly _driverApi: DriverAssignmentApiService,
    private readonly _orgApi: OrganizationApiService,
    private readonly _transloco: TranslocoService,
  ) {
    addIcons({ checkmarkOutline, personRemoveOutline });
  }

  ngOnChanges(): void {
    if (this.carId && this.organizationId != null) this.load();
  }

  load(): void {
    if (this.organizationId == null) return;
    this.loading = true;
    forkJoin({
      current: this._driverApi.getCurrent(this.carId),
      history: this._driverApi.getHistory(this.carId),
      members: this._orgApi.members(this.organizationId),
    }).pipe(take(1), untilDestroyed(this)).subscribe({
      next: ({ current, history, members }) => {
        this.current = current;
        this.history = history;
        this.members = members.filter(m => m.accepted_at);
        this.selectedDriverId = current?.driver.id ?? null;
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
  }

  get memberOptions(): DropdownOption[] {
    return this.members.map(m => ({
      value: m.user.id,
      label: `${m.user.first_name} ${m.user.last_name}`.trim() || m.user.email,
    }));
  }

  onDriverChange(value: string | number): void {
    this.selectedDriverId = Number(value);
  }

  assign(): void {
    if (this.selectedDriverId == null) return;
    this.assigning = true;
    this.error = null;
    this._driverApi.assign(this.carId, this.selectedDriverId).pipe(take(1)).subscribe({
      next: () => { this.assigning = false; this.load(); },
      error: (err) => {
        this.error = err?.error?.message ?? this._transloco.translate('cars.driverAssignment.assignError');
        this.assigning = false;
      },
    });
  }

  unassign(): void {
    this.unassigning = true;
    this.error = null;
    this._driverApi.unassign(this.carId).pipe(take(1)).subscribe({
      next: () => { this.unassigning = false; this.load(); },
      error: (err) => {
        this.error = err?.error?.message ?? this._transloco.translate('cars.driverAssignment.unassignError');
        this.unassigning = false;
      },
    });
  }

  driverLabel(user: { first_name: string; last_name: string; email: string }): string {
    return `${user.first_name} ${user.last_name}`.trim() || user.email;
  }

  getInitials(user: { first_name: string; last_name: string }): string {
    return `${user.first_name[0] ?? ''}${user.last_name[0] ?? ''}`.toUpperCase();
  }
}
