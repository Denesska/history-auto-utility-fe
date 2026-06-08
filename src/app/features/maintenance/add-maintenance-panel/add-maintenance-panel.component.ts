import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarDto, CreateMaintenanceRecordDto } from '@hau/autogenapi/models';
import { CATEGORY_CONFIG } from '@hau/features/maintenance/maintenance.component';
import { MaintenanceFacade } from '@hau/features/maintenance/state/maintenance.facade';
import { IonIcon, IonSpinner } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeOutline, saveOutline, addOutline } from 'ionicons/icons';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslocoPipe } from '@ngneat/transloco';

@UntilDestroy()
@Component({
  selector: 'app-add-maintenance-panel',
  templateUrl: 'add-maintenance-panel.component.html',
  styleUrls: ['./add-maintenance-panel.component.scss'],
  imports: [ReactiveFormsModule, IonIcon, IonSpinner, TranslocoPipe],
})
export class AddMaintenancePanelComponent implements OnInit {
  @Input() selectedCarId: number | null = null;
  @Input() cars: CarDto[] = [];
  @Input() submitting = false;

  @Output() closed    = new EventEmitter<void>();
  @Output() submitted = new EventEmitter<void>();

  form!: FormGroup;

  readonly categories = CATEGORY_CONFIG;
  readonly serviceTypes = [
    { value: 'MAINTENANCE', label: 'maintenance.form.serviceTypes.maintenance' },
    { value: 'REPAIR',      label: 'maintenance.form.serviceTypes.repair' },
    { value: 'IMPROVEMENT', label: 'maintenance.form.serviceTypes.improvement' },
  ];

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _facade: MaintenanceFacade,
  ) {
    addIcons({ closeOutline, saveOutline, addOutline });
  }

  ngOnInit(): void {
    this.form = this._fb.group({
      car_id:           [this.selectedCarId ?? (this.cars[0]?.id ?? null), Validators.required],
      service_date:     [new Date().toISOString().split('T')[0], Validators.required],
      mileage:          [null, [Validators.required, Validators.min(0)]],
      service_category: ['OIL_CHANGE', Validators.required],
      service_type:     ['MAINTENANCE', Validators.required],
      description:      ['', Validators.required],
      cost:             [null, [Validators.required, Validators.min(0)]],
      expiry_date:      [this._oneYearFromNow()],
    });

    this._facade.submitting$.pipe(untilDestroyed(this)).subscribe(s => {
      if (!s && this.submitting) {
        this.submitted.emit();
      }
      this.submitting = s;
    });
  }

  close(): void {
    this.closed.emit();
  }

  private _oneYearFromNow(): string {
    const d = new Date();
    d.setFullYear(d.getFullYear() + 1);
    return d.toISOString().split('T')[0];
  }

  save(): void {
    if (this.form.invalid || this.submitting) return;

    const raw = this.form.value;
    const dto: CreateMaintenanceRecordDto = {
      car_id:           Number(raw.car_id),
      service_date:     raw.service_date,
      mileage:          Number(raw.mileage),
      service_category: raw.service_category,
      service_type:     raw.service_type,
      description:      raw.description,
      cost:             Number(raw.cost),
      expiry_date:      raw.expiry_date || undefined,
    };
    this._facade.createRecord(dto);
  }
}
