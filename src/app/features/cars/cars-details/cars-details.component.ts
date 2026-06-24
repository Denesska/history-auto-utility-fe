import { AsyncPipe, DecimalPipe, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto, DocumentDto, MaintenanceRecordDto } from '@hau/autogenapi/models';
import { CarAccessRole } from '@hau/autogenapi/models/car-access-dto';
import { CARS_ROUTES } from '@hau/features/cars/cars.routes.const';
import { daysUntil, formatDate, formatMileage, getDocExpiry } from '@hau/features/cars/cars.utils';
import { CarDetailsFacade } from '@hau/features/cars/state/car-details/car-details.facade';
import { ShareVehiclePanelComponent } from '@hau/features/cars/car-sharing/share-vehicle-panel.component';
import { RemoveCarPanelComponent } from '@hau/features/cars/remove-car-panel/remove-car-panel.component';
import { CarListState } from '@hau/features/cars/state/car-list/car-list.state';
import { DOCUMENTS_ROUTES } from '@hau/features/documents/documents.routes.const';
import { MAINTENANCE_ROUTES } from '@hau/features/maintenance/maintenance.routes.const';
import { CATEGORY_CONFIG } from '@hau/features/maintenance/maintenance.component';
import { PhotoCarouselComponent, PhotoItem } from '@hau/shared/component/photo-carousel/photo-carousel.component';
import { AlertController, IonContent, IonIcon, IonicSafeString, NavController } from '@ionic/angular/standalone';
import { Store } from '@ngxs/store';
import { combineLatest, map } from 'rxjs';
import { addIcons } from 'ionicons';
import {
  addCircleOutline,
  cloudUploadOutline,
  pencilOutline,
  shieldCheckmarkOutline,
  buildOutline,
  carOutline,
  waterOutline,
  calendarOutline,
  speedometerOutline,
  chevronForward,
  settingsOutline,
  constructOutline,
  colorFilterOutline,
  flameOutline,
  keyOutline,
  documentsOutline,
  shareOutline,
  exitOutline,
  trashOutline,
  logOutOutline,
  checkmarkCircleOutline,
  refreshOutline,
  ellipsisHorizontal,
  closeOutline,
  discOutline,
  batteryChargingOutline,
  listOutline,
  flashOutline,
  cashOutline,
} from 'ionicons/icons';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { HAU_ROUTES } from '@hau/app.routes.const';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';

export interface ExpiryInfo {
  label: string;
  days: number;
  warning: boolean;
}

@UntilDestroy()
@Component({
  selector: 'app-cars-details',
  templateUrl: 'cars-details.component.html',
  styleUrls: ['./cars-details.component.scss'],
  imports: [AsyncPipe, DecimalPipe, NgClass, IonContent, IonIcon, ShareVehiclePanelComponent, RemoveCarPanelComponent, PhotoCarouselComponent, TranslocoPipe],
})
export class CarsDetailsComponent implements OnInit {
  readonly currentCar$ = this._carDetailFacade.currentCar$;
  readonly maintenanceRecords$ = this._carDetailFacade.maintenanceRecords$;
  readonly carDocuments$ = this._carDetailFacade.carDocuments$;

  sharePanelOpen = false;
  removePanelOpen = false;
  moreMenuOpen = false;

  activeRecord: MaintenanceRecordDto | null = null;
  pressingRecordId: number | null = null;

  private _pressStartX = 0;
  private _pressStartY = 0;

  readonly effectiveRole$ = combineLatest([
    this.currentCar$,
    this._store.select(CarListState.sharedCarList),
  ]).pipe(
    map(([car, sharedList]) => {
      if (!car) return 'OWNER' as CarAccessRole;
      const entry = sharedList.find(e => e.car.id === car.id);
      return entry ? entry.role : ('OWNER' as CarAccessRole);
    }),
  );

  protected readonly formatDate = formatDate;
  protected readonly formatMileage = formatMileage;
  protected readonly daysUntil = daysUntil;
  protected readonly getDocExpiry = getDocExpiry;

  constructor(
    private readonly _carDetailFacade: CarDetailsFacade,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _navCtrl: NavController,
    private readonly _store: Store,
    private readonly _alertCtrl: AlertController,
    private readonly _transloco: TranslocoService,
  ) {
    addIcons({
      pencilOutline, addCircleOutline, cloudUploadOutline,
      shieldCheckmarkOutline, buildOutline, carOutline, waterOutline,
      calendarOutline, speedometerOutline, chevronForward,
      settingsOutline, constructOutline, colorFilterOutline,
      flameOutline, keyOutline, documentsOutline, shareOutline, exitOutline,
      trashOutline, logOutOutline, checkmarkCircleOutline, refreshOutline,
      ellipsisHorizontal, closeOutline,
      discOutline, batteryChargingOutline, listOutline, flashOutline,
      cashOutline,
    });
  }

  ngOnInit(): void {
    this._activatedRoute.params.pipe(untilDestroyed(this)).subscribe(params => {
      this._carDetailFacade.loadCurrentCar(params['id']);
      this._carDetailFacade.loadMaintenanceRecords(params['id']);
      this._carDetailFacade.loadCarDocuments(params['id']);
    });
  }

  navigateToGarage(): void {
    this._navCtrl.navigateBack(HAU_ROUTES.cars.fullPath, { animated: false });
  }

  navigateToEdit(car: CarDto): void {
    this._navCtrl.navigateForward(
      `${CARS_ROUTES.details.fullPath}/${car.id}/${CARS_ROUTES.edit.path}`,
      { animated: false },
    );
  }

  navigateToAddMaintenance(car: CarDto): void {
    this.moreMenuOpen = false;
    void this._navCtrl.navigateForward(MAINTENANCE_ROUTES.root.fullPath, {
      queryParams: { carId: car.id, openPanel: true },
    });
  }

  navigateToUploadDocument(car: CarDto): void {
    this.moreMenuOpen = false;
    void this._navCtrl.navigateForward(DOCUMENTS_ROUTES.add.fullPath, {
      queryParams: { carId: car.id },
    });
  }

  onMarkAsSold(car: CarDto): void {
    this.removePanelOpen = false;
    this._carDetailFacade.markAsSold(String(car.id));
  }

  onRestoreCar(car: CarDto): void {
    this.removePanelOpen = false;
    this._carDetailFacade.restoreCar(String(car.id));
  }

  async onDeletePermanently(car: CarDto): Promise<void> {
    this.removePanelOpen = false;
    const alert = await this._alertCtrl.create({
      header: this._transloco.translate('cars.details.deleteAlert.header'),
      message: new IonicSafeString(this._transloco.translate('cars.details.deleteAlert.message', { name: `${car.make} ${car.model}` })),
      buttons: [
        { text: this._transloco.translate('common.cancel'), role: 'cancel' },
        {
          text: this._transloco.translate('common.delete'),
          role: 'destructive',
          handler: () => this._carDetailFacade.deleteCar(String(car.id)),
        },
      ],
    });
    await alert.present();
  }

  getSortedPhotos(car: CarDto): PhotoItem[] {
    if (!car.photos?.length) return [];
    return [...car.photos].sort((a, b) => (b.is_default ? 1 : 0) - (a.is_default ? 1 : 0))
      .map(p => ({ url: p.url, isDefault: p.is_default }));
  }

  getNextExpiry(docs: DocumentDto[] | null | undefined): ExpiryInfo | null {
    const candidates = (['RCA', 'ITP', 'ROV'] as const)
      .map(type => ({ label: type, date: getDocExpiry(docs, type) }))
      .filter(c => c.date != null)
      .map(c => ({ label: c.label, days: daysUntil(c.date) ?? 9999 }))
      .filter(c => c.days > 0)
      .sort((a, b) => a.days - b.days);

    if (!candidates.length) return null;
    const soonest = candidates[0];
    return { label: soonest.label, days: soonest.days, warning: soonest.days < 60 };
  }

  getNextOilService(car: CarDto): number | null {
    if (car.last_oil_service_mileage == null) return null;
    return car.last_oil_service_mileage + 10000;
  }

  getFuelLabel(fuel: CarDto['fuel_type']): string {
    const map: Record<string, string> = {
      PETROL: 'Petrol', DIESEL: 'Diesel', HYBRID: 'Hybrid',
      PLUGIN_HYBRID: 'Plug-in Hybrid', ELECTRIC: 'Electric', LPG: 'LPG',
    };
    return fuel ? (map[fuel] ?? fuel) : '—';
  }

  getTransmissionLabel(t: CarDto['transmission']): string {
    const map: Record<string, string> = {
      MANUAL: 'Manual', AUTOMATIC: 'Automatic', SEMI_AUTOMATIC: 'Semi-automatic',
    };
    return t ? (map[t] ?? t) : '—';
  }

  getCategoryChip(rec: MaintenanceRecordDto): { label: string; css: string } {
    const css = rec.service_category === 'OIL_CHANGE' ? 'chip--oil'
      : rec.service_type === 'REPAIR'      ? 'chip--repair'
      : rec.service_type === 'MAINTENANCE' ? 'chip--maint'
      : 'chip--service';
    const config = CATEGORY_CONFIG.find(c => c.value === rec.service_category) ?? CATEGORY_CONFIG[CATEGORY_CONFIG.length - 1];
    return { label: this._transloco.translate(config.label), css };
  }

  onRecordPressStart(rec: MaintenanceRecordDto, event: PointerEvent): void {
    this._pressStartX = event.clientX;
    this._pressStartY = event.clientY;
    this.pressingRecordId = rec.id;
  }

  onRecordPressMove(event: PointerEvent): void {
    if (Math.abs(event.clientX - this._pressStartX) > 8 ||
        Math.abs(event.clientY - this._pressStartY) > 8) {
      this.pressingRecordId = null;
    }
  }

  onRecordPressEnd(rec: MaintenanceRecordDto): void {
    if (this.pressingRecordId === rec.id) {
      this.openRecordDetail(rec);
    }
    this.pressingRecordId = null;
  }

  openRecordDetail(rec: MaintenanceRecordDto): void {
    this.activeRecord = rec;
  }

  closeRecordDetail(): void {
    this.activeRecord = null;
  }

  getCategoryIcon(rec: MaintenanceRecordDto): string {
    const config = CATEGORY_CONFIG.find(c => c.value === rec.service_category) ?? CATEGORY_CONFIG[CATEGORY_CONFIG.length - 1];
    return config.icon;
  }

  getCategoryIconCss(rec: MaintenanceRecordDto): string {
    return 'ri-cat--' + rec.service_category.toLowerCase();
  }

  getTotalSpent(records: MaintenanceRecordDto[]): number {
    return records.reduce((sum, r) => sum + (r.cost ?? 0), 0);
  }

  getTotalDocumentsCost(docs: DocumentDto[]): number {
    return docs.reduce((sum, d) => sum + (d.premium ?? 0), 0);
  }

  getLastService(records: MaintenanceRecordDto[]): string {
    if (!records.length) return '—';
    const sorted = [...records].sort(
      (a, b) => new Date(b.service_date).getTime() - new Date(a.service_date).getTime()
    );
    return formatDate(sorted[0].service_date);
  }
}
