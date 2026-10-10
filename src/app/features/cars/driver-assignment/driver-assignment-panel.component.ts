import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FeatureService } from '@hau/core/features/feature.service';
import { DriverAssignmentApiService } from '@hau/features/cars/driver-assignment/driver-assignment-api.service';
import { AssignableUserDto, DriverAssignmentDto } from '@hau/features/cars/driver-assignment/driver-assignment.model';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';
import { IonContent, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { checkmarkOutline, personRemoveOutline } from 'ionicons/icons';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { catchError, forkJoin, of, switchMap, take } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-driver-assignment-panel',
  templateUrl: './driver-assignment-panel.component.html',
  styleUrls: ['./driver-assignment-panel.component.scss'],
  // Sizes this host as a flex child of the routed page's `.ion-page`, so the
  // <ion-content> inside it gets a height — same as `share-vehicle-panel`.
  host: { class: 'hau-page-panel' },
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule, DatePipe, IonContent, IonIcon, TranslocoPipe, DropdownComponent],
})
export class DriverAssignmentPanelComponent implements OnChanges {
  @Input() carId!: number;
  @Input() carName!: string;
  @Input() organizationId: number | null = null;

  current: DriverAssignmentDto | null = null;
  history: DriverAssignmentDto[] = [];
  members: AssignableUserDto[] = [];
  loading = false;
  selectedDriverId: number | null = null;
  assigning = false;
  unassigning = false;
  error: string | null = null;

  constructor(
    private readonly _driverApi: DriverAssignmentApiService,
    private readonly _transloco: TranslocoService,
    private readonly _features: FeatureService,
  ) {
    addIcons({ checkmarkOutline, personRemoveOutline });
  }

  ngOnChanges(): void {
    if (this.carId && this.organizationId != null) this.load();
  }

  load(): void {
    if (this.organizationId == null) return;
    this.loading = true;
    // Route/tab are already behind the `driver_assignment` switch (see features/cars/FEATURE.md),
    // but this waits on it too so nothing is fetched while switches are still loading or if the
    // panel is ever reached another way while the feature is off for this organization.
    this._features
      .isEnabled$('driver_assignment')
      .pipe(
        switchMap(on =>
          on
            ? forkJoin({
                current: this._driverApi.getCurrent(this.carId),
                history: this._driverApi.getHistory(this.carId),
                members: this._driverApi.getCandidates(this.carId).pipe(catchError(() => of([] as AssignableUserDto[]))),
              })
            : of({ current: null, history: [] as DriverAssignmentDto[], members: [] as AssignableUserDto[] }),
        ),
        take(1),
        untilDestroyed(this),
      )
      .subscribe({
        next: ({ current, history, members }) => {
          this.current = current;
          this.history = history;
          this.members = members;
          this.selectedDriverId = current?.driver.id ?? null;
          this.loading = false;
        },
        error: () => { this.loading = false; },
      });
  }

  get memberOptions(): DropdownOption[] {
    return this.members.map(m => ({
      value: m.user.id,
      label: `${this.driverLabel(m.user)} (${this._transloco.translate('organization.role.' + m.role)})`,
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
