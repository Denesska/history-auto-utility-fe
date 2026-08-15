import { DecimalPipe, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaintenanceRecordDto } from '@hau/autogenapi/models';
import { MaintenanceRecordService } from '@hau/autogenapi/services';
import { CARS_ROUTES } from '@hau/features/cars/cars.routes.const';
import { formatDate, formatMileage } from '@hau/features/cars/cars.utils';
import { CATEGORY_CONFIG } from '@hau/features/maintenance/maintenance.component';
import { serviceTypeConfig } from '@hau/features/maintenance/service-type.config';
import { ContextFile, UploadService } from '@hau/core/upload/upload.service';
import { AlertController, IonContent, IonIcon, IonSpinner, NavController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  pencilOutline, trashOutline, calendarOutline, speedometerOutline,
  cashOutline, buildOutline, personOutline, documentTextOutline,
  waterOutline, discOutline, colorFilterOutline, constructOutline,
  shieldCheckmarkOutline, batteryChargingOutline, listOutline, flashOutline,
  carOutline, checkmarkCircleOutline,
} from 'ionicons/icons';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';

@UntilDestroy()
@Component({
  selector: 'app-maintenance-record-detail',
  templateUrl: 'maintenance-record-detail.component.html',
  styleUrls: ['./maintenance-record-detail.component.scss'],
  imports: [IonContent, IonIcon, IonSpinner, DecimalPipe, NgClass, TranslocoPipe],
})
export class MaintenanceRecordDetailComponent implements OnInit {
  record: MaintenanceRecordDto | null = null;
  loading = true;
  deleting = false;

  attachments: ContextFile[] = [];
  attachmentUrls: Record<number, string> = {};

  protected readonly formatDate = formatDate;
  protected readonly formatMileage = formatMileage;
  protected readonly serviceTypeConfig = serviceTypeConfig;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _navCtrl: NavController,
    private readonly _maintenanceRecordService: MaintenanceRecordService,
    private readonly _alertCtrl: AlertController,
    private readonly _transloco: TranslocoService,
    private readonly _upload: UploadService,
  ) {
    addIcons({
      pencilOutline, trashOutline, calendarOutline, speedometerOutline,
      cashOutline, buildOutline, personOutline, documentTextOutline,
      waterOutline, discOutline, colorFilterOutline, constructOutline,
      shieldCheckmarkOutline, batteryChargingOutline, listOutline, flashOutline,
      carOutline, checkmarkCircleOutline,
    });
  }

  ngOnInit(): void {
    const recordId = this._route.snapshot.paramMap.get('recordId');
    if (!recordId) return;
    this._maintenanceRecordService.maintenanceRecordControllerGetMaintenanceRecord({ id: recordId })
      .pipe(untilDestroyed(this))
      .subscribe({
        next: rec => {
          this.record = rec;
          this.loading = false;
          this._loadAttachments(rec.id);
        },
        error: () => { this.loading = false; },
      });
  }

  private _loadAttachments(recordId: number): void {
    this._upload.getFilesForContext('maintenance', recordId)
      .pipe(untilDestroyed(this))
      .subscribe(files => {
        this.attachments = files;
        for (const file of files) {
          this._upload.getReadUrl(file.fileId)
            .pipe(untilDestroyed(this))
            .subscribe(res => { this.attachmentUrls[file.fileId] = res.readUrl; });
        }
      });
  }

  getCategoryConfig(rec: MaintenanceRecordDto) {
    return CATEGORY_CONFIG.find(c => c.value === rec.service_category) ?? CATEGORY_CONFIG[CATEGORY_CONFIG.length - 1];
  }

  navigateToEdit(): void {
    if (!this.record) return;
    void this._navCtrl.navigateForward(
      `${CARS_ROUTES.details.fullPath}/${this.record.car_id}/${CARS_ROUTES.istoric.path}`,
      { queryParams: { recordId: this.record.id } },
    );
  }

  async confirmDelete(): Promise<void> {
    if (!this.record) return;
    const alert = await this._alertCtrl.create({
      header: this._transloco.translate('maintenance.detail.deleteAlert.header'),
      message: this._transloco.translate('maintenance.detail.deleteAlert.message'),
      buttons: [
        { text: this._transloco.translate('common.cancel'), role: 'cancel' },
        {
          text: this._transloco.translate('common.delete'),
          role: 'destructive',
          handler: () => this._deleteRecord(),
        },
      ],
    });
    await alert.present();
  }

  private _deleteRecord(): void {
    if (!this.record) return;
    this.deleting = true;
    const carId = this.record.car_id;
    this._maintenanceRecordService.maintenanceRecordControllerDeleteMaintenanceRecord({ id: String(this.record.id) })
      .pipe(untilDestroyed(this))
      .subscribe({
        next: () => {
          void this._navCtrl.navigateBack(
            `${CARS_ROUTES.details.fullPath}/${carId}/${CARS_ROUTES.istoric.path}`,
          );
        },
        error: () => { this.deleting = false; },
      });
  }
}
