import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertController, IonIcon, IonToggle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  pencilOutline, refreshOutline,
  waterOutline, buildOutline, discOutline, colorFilterOutline, constructOutline,
  shieldCheckmarkOutline, batteryChargingOutline, listOutline, flashOutline,
  carOutline, checkmarkCircleOutline,
} from 'ionicons/icons';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { take } from 'rxjs';
import { MaintenanceSettingDto, ServiceCategory } from '@hau/autogenapi/models';
import { CarMaintenanceSettingsService, UpdateMaintenanceSettingPayload } from '@hau/core/car-maintenance-settings.service';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { FullscreenPanelComponent } from '@hau/shared/component/fullscreen-panel/fullscreen-panel.component';
import { CATEGORY_CONFIG, ServiceCategoryConfig } from '@hau/shared/config/maintenance-category.config';

/**
 * Per-car, per-user maintenance tracking settings: turn a category's progress bar
 * on/off, and optionally override its interval. Opened from the Plan page, next
 * to the profile picker — that's where the resulting progress bars are shown.
 */
@Component({
  selector: 'app-car-maintenance-settings-panel',
  templateUrl: 'car-maintenance-settings-panel.component.html',
  styleUrls: ['./car-maintenance-settings-panel.component.scss'],
  imports: [CommonModule, FormsModule, IonIcon, IonToggle, TranslocoPipe, FullscreenPanelComponent],
})
export class CarMaintenanceSettingsPanelComponent implements OnInit {
  @Input({ required: true }) carId!: number;
  @Output() closed = new EventEmitter<void>();

  readonly categories: ServiceCategoryConfig[] = CATEGORY_CONFIG;
  rows: MaintenanceSettingDto[] = [];
  loading = true;

  editingCategory: ServiceCategory | null = null;
  editKm: number | null = null;
  editMonths: number | null = null;

  constructor(
    private readonly _settingsService: CarMaintenanceSettingsService,
    private readonly _bootstrapFacade: BootstrapFacade,
    private readonly _alertCtrl: AlertController,
    private readonly _transloco: TranslocoService,
  ) {
    addIcons({
      pencilOutline, refreshOutline,
      waterOutline, buildOutline, discOutline, colorFilterOutline, constructOutline,
      shieldCheckmarkOutline, batteryChargingOutline, listOutline, flashOutline,
      carOutline, checkmarkCircleOutline,
    });
  }

  ngOnInit(): void {
    this._settingsService.getSettings(this.carId).pipe(take(1)).subscribe(rows => {
      this.rows = rows;
      this.loading = false;
    });
  }

  settingFor(category: ServiceCategory): MaintenanceSettingDto | undefined {
    return this.rows.find(r => r.category === category);
  }

  close(): void {
    this.closed.emit();
  }

  toggleTracked(row: MaintenanceSettingDto): void {
    this._update(row.category, { tracked: !row.tracked });
  }

  startEdit(row: MaintenanceSettingDto): void {
    this.editingCategory = row.category;
    this.editKm = row.interval_km;
    this.editMonths = row.interval_months;
  }

  cancelEdit(): void {
    this.editingCategory = null;
  }

  async saveEdit(row: MaintenanceSettingDto): Promise<void> {
    const km = this.editKm;
    const months = this.editMonths;
    const category = row.category;

    if (km === row.interval_km && months === row.interval_months) {
      this.editingCategory = null;
      return;
    }

    const alert = await this._alertCtrl.create({
      header: this._transloco.translate('plan.settings.confirmTitle'),
      message: this._transloco.translate('plan.settings.confirmMessage'),
      buttons: [
        { text: this._transloco.translate('common.cancel'), role: 'cancel' },
        {
          text: this._transloco.translate('common.confirm'),
          handler: () => this._update(category, { custom_interval_km: km, custom_interval_months: months }),
        },
      ],
    });
    await alert.present();
    this.editingCategory = null;
  }

  resetInterval(row: MaintenanceSettingDto): void {
    this._update(row.category, { custom_interval_km: null, custom_interval_months: null });
  }

  private _update(category: ServiceCategory, patch: UpdateMaintenanceSettingPayload): void {
    this._settingsService.updateSetting(this.carId, category, patch).pipe(take(1)).subscribe(updated => {
      this.rows = this.rows.map(r => r.category === category ? updated : r);
      this._bootstrapFacade.patchCarMaintenanceSettings(this.carId, this.rows);
    });
  }
}
