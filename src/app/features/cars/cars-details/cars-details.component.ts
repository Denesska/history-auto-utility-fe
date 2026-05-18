import { AsyncPipe, DecimalPipe, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto, MaintenanceRecordDto } from '@hau/autogenapi/models';
import { CARS_ROUTES } from '@hau/features/cars/cars.routes.const';
import { daysUntil, formatDate, formatMileage } from '@hau/features/cars/cars.utils';
import { CarDetailsFacade } from '@hau/features/cars/state/car-details/car-details.facade';
import { ImageUrlPipe } from '@hau/shared/pipes/image-url.pipe';
import { IonContent, IonIcon, NavController } from '@ionic/angular/standalone';
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
} from 'ionicons/icons';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { HAU_ROUTES } from '@hau/app.routes.const';

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
  imports: [AsyncPipe, DecimalPipe, NgClass, IonContent, IonIcon, ImageUrlPipe],
})
export class CarsDetailsComponent implements OnInit {
  readonly currentCar$ = this._carDetailFacade.currentCar$;
  readonly maintenanceRecords$ = this._carDetailFacade.maintenanceRecords$;

  protected readonly formatDate = formatDate;
  protected readonly formatMileage = formatMileage;
  protected readonly daysUntil = daysUntil;

  constructor(
    private readonly _carDetailFacade: CarDetailsFacade,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _navCtrl: NavController,
  ) {
    addIcons({
      pencilOutline, addCircleOutline, cloudUploadOutline,
      shieldCheckmarkOutline, buildOutline, carOutline, waterOutline,
      calendarOutline, speedometerOutline, chevronForward,
      settingsOutline, constructOutline, colorFilterOutline,
      flameOutline, keyOutline, documentsOutline,
    });
  }

  ngOnInit(): void {
    this._activatedRoute.params.pipe(untilDestroyed(this)).subscribe(params => {
      this._carDetailFacade.loadCurrentCar(params['id']);
      this._carDetailFacade.loadMaintenanceRecords(params['id']);
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

  getDefaultPhoto(car: CarDto): string {
    const def = car.photos?.find(p => p.is_default) ?? car.photos?.[0];
    return def?.url ?? '';
  }

  getNextExpiry(car: CarDto): ExpiryInfo | null {
    const candidates = [
      { label: 'RCA', date: car.rca_expiry_date },
      { label: 'ITP', date: car.itp_expiry_date },
      { label: 'ROV', date: car.rov_expiry_date },
    ]
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
    if (rec.service_category === 'OIL_CHANGE') return { label: 'Oil service', css: 'chip--oil' };
    if (rec.service_type === 'REPAIR')       return { label: 'Repair',      css: 'chip--repair' };
    if (rec.service_type === 'MAINTENANCE')  return { label: 'Maintenance', css: 'chip--maint' };
    return { label: 'Service', css: 'chip--service' };
  }

  getTotalSpent(records: MaintenanceRecordDto[]): number {
    return records.reduce((sum, r) => sum + (r.cost ?? 0), 0);
  }

  getLastService(records: MaintenanceRecordDto[]): string {
    if (!records.length) return '—';
    const sorted = [...records].sort(
      (a, b) => new Date(b.service_date).getTime() - new Date(a.service_date).getTime()
    );
    return formatDate(sorted[0].service_date);
  }
}
