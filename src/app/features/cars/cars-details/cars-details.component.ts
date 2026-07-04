import { AsyncPipe, DecimalPipe, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto, DocumentDto, MaintenanceRecordDto } from '@hau/autogenapi/models';
import { CarAccessRole } from '@hau/autogenapi/models/car-access-dto';
import { CARS_ROUTES } from '@hau/features/cars/cars.routes.const';
import { daysUntil, formatDate, formatMileage, getDocExpiry } from '@hau/features/cars/cars.utils';
import { CarDetailsFacade } from '@hau/features/cars/state/car-details/car-details.facade';
import { ShareVehiclePanelComponent } from '@hau/features/cars/car-sharing/share-vehicle-panel.component';
import { CarNotesPanelComponent } from '@hau/features/cars/car-notes/car-notes-panel.component';
import { RemoveCarPanelComponent } from '@hau/features/cars/remove-car-panel/remove-car-panel.component';
import { CarListState } from '@hau/features/cars/state/car-list/car-list.state';
import { DOCUMENTS_ROUTES } from '@hau/features/documents/documents.routes.const';
import { docTypeConfig } from '@hau/features/documents/document-type.config';
import { MAINTENANCE_ROUTES } from '@hau/features/maintenance/maintenance.routes.const';
import { CATEGORY_CONFIG } from '@hau/features/maintenance/maintenance.component';
import { PhotoCarouselComponent, PhotoItem } from '@hau/shared/component/photo-carousel/photo-carousel.component';
import { HistoryCardComponent, HistoryCardItem } from '@hau/shared/component/history-card/history-card.component';
import { ActionSheetController, AlertController, IonContent, IonIcon, IonicSafeString, NavController } from '@ionic/angular/standalone';
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
  chevronDownOutline,
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
  documentTextOutline,
  eyeOutline,
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
  imports: [AsyncPipe, DecimalPipe, NgClass, IonContent, IonIcon, ShareVehiclePanelComponent, CarNotesPanelComponent, RemoveCarPanelComponent, PhotoCarouselComponent, HistoryCardComponent, TranslocoPipe],
})
export class CarsDetailsComponent implements OnInit {
  readonly currentCar$ = this._carDetailFacade.currentCar$;
  readonly maintenanceRecords$ = this._carDetailFacade.maintenanceRecords$;
  readonly carDocuments$ = this._carDetailFacade.carDocuments$;

  sharePanelOpen = false;
  notesPanelOpen = false;
  removePanelOpen = false;
  moreMenuOpen = false;

  soldDetailsExpanded = false;
  overviewExpanded = false;
  documentsExpanded = false;
  documentHistoryExpanded = false;
  maintenanceExpanded = false;

  activeRecord: MaintenanceRecordDto | null = null;
  readonly currentYear = new Date().getFullYear();

  private readonly _categoryIconColors: Record<string, { bg: string; fg: string }> = {
    OIL_CHANGE: { bg: 'rgba(59,130,246,.12)', fg: '#3b82f6' },
    BRAKE_SERVICE: { bg: 'rgba(239,68,68,.12)', fg: '#ef4444' },
    TIRE_SERVICE: { bg: 'rgba(168,85,247,.12)', fg: '#9333ea' },
    FLUID_SERVICE: { bg: 'rgba(14,165,233,.12)', fg: '#0ea5e9' },
    ENGINE_SERVICE: { bg: 'rgba(249,115,22,.12)', fg: '#ea580c' },
    INSPECTION: { bg: 'rgba(34,197,94,.12)', fg: '#16a34a' },
    BATTERY_SERVICE: { bg: 'rgba(234,179,8,.12)', fg: '#ca8a04' },
    FILTER_SERVICE: { bg: 'rgba(100,116,139,.12)', fg: '#64748b' },
    LIGHT_SERVICE: { bg: 'rgba(251,191,36,.12)', fg: '#d97706' },
    TRANSMISSION_SERVICE: { bg: 'rgba(236,72,153,.12)', fg: '#db2777' },
    OTHER: { bg: 'rgba(107,114,128,.12)', fg: '#6b7280' },
  };

  private readonly _chipColors: Record<string, { bg: string; fg: string }> = {
    oil: { bg: 'var(--hau-primary-soft)', fg: 'var(--hau-primary)' },
    repair: { bg: 'rgba(245,158,11,0.13)', fg: '#d97706' },
    maint: { bg: 'var(--hau-success-soft)', fg: 'var(--hau-success-fg)' },
    service: { bg: 'rgba(99,102,241,0.10)', fg: '#6366f1' },
  };

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
    private readonly _actionSheetCtrl: ActionSheetController,
    private readonly _transloco: TranslocoService,
  ) {
    addIcons({
      pencilOutline, addCircleOutline, cloudUploadOutline,
      shieldCheckmarkOutline, buildOutline, carOutline, waterOutline,
      calendarOutline, speedometerOutline, chevronForward, chevronDownOutline,
      settingsOutline, constructOutline, colorFilterOutline,
      flameOutline, keyOutline, documentsOutline, shareOutline, exitOutline,
      trashOutline, logOutOutline, checkmarkCircleOutline, refreshOutline,
      ellipsisHorizontal, closeOutline,
      discOutline, batteryChargingOutline, listOutline, flashOutline,
      cashOutline, documentTextOutline, eyeOutline,
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
    void this._navCtrl.navigateForward(MAINTENANCE_ROUTES.add.fullPath, {
      queryParams: { carId: car.id },
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

  openRecordDetail(rec: MaintenanceRecordDto): void {
    this.activeRecord = rec;
  }

  closeRecordDetail(): void {
    this.activeRecord = null;
  }

  async openRecordActions(rec: MaintenanceRecordDto, car: CarDto): Promise<void> {
    const sheet = await this._actionSheetCtrl.create({
      buttons: [
        { text: this._transloco.translate('common.view'), icon: 'eye-outline', handler: () => this.openRecordDetail(rec) },
        { text: this._transloco.translate('common.edit'), icon: 'pencil-outline', handler: () => this.navigateToEditMaintenance(rec, car) },
        { text: this._transloco.translate('common.delete'), icon: 'trash-outline', role: 'destructive', handler: () => this.confirmDeleteMaintenanceRecord(rec) },
        { text: this._transloco.translate('common.cancel'), role: 'cancel' },
      ],
    });
    await sheet.present();
  }

  navigateToEditMaintenance(rec: MaintenanceRecordDto, car: CarDto): void {
    void this._navCtrl.navigateForward(MAINTENANCE_ROUTES.root.fullPath, {
      queryParams: { carId: car.id, recordId: rec.id },
    });
  }

  async confirmDeleteMaintenanceRecord(rec: MaintenanceRecordDto): Promise<void> {
    const alert = await this._alertCtrl.create({
      header: this._transloco.translate('cars.details.maintenanceHistory.recordActions.deleteHeader'),
      message: this._transloco.translate('cars.details.maintenanceHistory.recordActions.deleteMessage'),
      buttons: [
        { text: this._transloco.translate('common.cancel'), role: 'cancel' },
        {
          text: this._transloco.translate('common.delete'),
          role: 'destructive',
          handler: () => this._carDetailFacade.deleteMaintenanceRecord(rec.id),
        },
      ],
    });
    await alert.present();
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

  getRecordsThisYear(records: MaintenanceRecordDto[]): MaintenanceRecordDto[] {
    const currentYear = new Date().getFullYear();
    return records.filter(r => new Date(r.service_date).getFullYear() === currentYear);
  }

  getLast5Records(records: MaintenanceRecordDto[]): MaintenanceRecordDto[] {
    return [...records]
      .sort((a, b) => new Date(b.service_date).getTime() - new Date(a.service_date).getTime())
      .slice(0, 5);
  }

  navigateToMaintenanceHistory(car: CarDto): void {
    void this._navCtrl.navigateForward(MAINTENANCE_ROUTES.root.fullPath, {
      queryParams: { carId: car.id },
    });
  }

  formatCostRON(amount: number): string {
    return `${amount.toLocaleString()} RON`;
  }

  getMaintenanceHistoryItems(records: MaintenanceRecordDto[]): HistoryCardItem<MaintenanceRecordDto>[] {
    return this.getLast5Records(records).map(rec => {
      const chip = this.getCategoryChip(rec);
      const chipKind = chip.css.replace('chip--', '');
      const chipColor = this._chipColors[chipKind] ?? this._chipColors['service'];
      const iconColor = this._categoryIconColors[rec.service_category] ?? this._categoryIconColors['OTHER'];
      return {
        id: rec.id,
        icon: this.getCategoryIcon(rec),
        iconBg: iconColor.bg,
        iconFg: iconColor.fg,
        chipLabel: chip.label,
        chipBg: chipColor.bg,
        chipFg: chipColor.fg,
        date: formatDate(rec.service_date),
        primaryDetail: formatMileage(rec.mileage),
        cost: rec.cost ?? null,
        notes: '—',
        raw: rec,
      };
    });
  }

  onMaintenanceItemView(item: HistoryCardItem): void {
    this.openRecordDetail(item.raw as MaintenanceRecordDto);
  }

  onMaintenanceItemMenu(item: HistoryCardItem, car: CarDto): void {
    void this.openRecordActions(item.raw as MaintenanceRecordDto, car);
  }

  getNextOilServiceMileage(car: CarDto): number | null {
    if (car.last_oil_service_mileage == null) return null;
    return car.last_oil_service_mileage + 10000;
  }

  getDocsThisYear(docs: DocumentDto[]): DocumentDto[] {
    return docs.filter(d => d.issue_date && new Date(d.issue_date).getFullYear() === this.currentYear);
  }

  getLast5Documents(docs: DocumentDto[]): DocumentDto[] {
    return [...docs]
      .sort((a, b) => new Date(b.issue_date ?? 0).getTime() - new Date(a.issue_date ?? 0).getTime())
      .slice(0, 5);
  }

  getDocumentHistoryItems(docs: DocumentDto[]): HistoryCardItem<DocumentDto>[] {
    return this.getLast5Documents(docs).map(doc => {
      const cfg = docTypeConfig(doc.document_type);
      const hasToken = cfg.color !== 'slate';
      const bg = hasToken ? `var(--hau-doc-${cfg.color}-soft)` : 'rgba(100,116,139,0.14)';
      const fg = hasToken ? `var(--hau-doc-${cfg.color}-fg)` : '#475569';
      return {
        id: doc.id,
        icon: cfg.icon,
        iconBg: bg,
        iconFg: fg,
        chipLabel: this._transloco.translate(cfg.label),
        chipBg: bg,
        chipFg: fg,
        date: formatDate(doc.issue_date),
        primaryDetail: doc.provider || doc.policy_number || '—',
        cost: doc.premium ?? null,
        notes: doc.expiry_date ? formatDate(doc.expiry_date) : '—',
        raw: doc,
      };
    });
  }

  navigateToDocumentsHistory(car: CarDto): void {
    void this._navCtrl.navigateForward(DOCUMENTS_ROUTES.list.fullPath, {
      queryParams: { carId: car.id },
    });
  }

  onDocumentItemView(item: HistoryCardItem): void {
    void this._navCtrl.navigateForward(`${DOCUMENTS_ROUTES.view.fullPath}/${item.id}`);
  }

  navigateToEditDocument(doc: DocumentDto): void {
    void this._navCtrl.navigateForward(`${DOCUMENTS_ROUTES.edit.fullPath}/${doc.id}/edit`);
  }

  async onDocumentItemMenu(item: HistoryCardItem): Promise<void> {
    const doc = item.raw as DocumentDto;
    const sheet = await this._actionSheetCtrl.create({
      buttons: [
        { text: this._transloco.translate('common.view'), icon: 'eye-outline', handler: () => this.onDocumentItemView(item) },
        { text: this._transloco.translate('common.edit'), icon: 'pencil-outline', handler: () => this.navigateToEditDocument(doc) },
        { text: this._transloco.translate('common.delete'), icon: 'trash-outline', role: 'destructive', handler: () => this.confirmDeleteDocument(doc) },
        { text: this._transloco.translate('common.cancel'), role: 'cancel' },
      ],
    });
    await sheet.present();
  }

  async confirmDeleteDocument(doc: DocumentDto): Promise<void> {
    const alert = await this._alertCtrl.create({
      header: this._transloco.translate('cars.details.documentHistory.recordActions.deleteHeader'),
      message: this._transloco.translate('cars.details.documentHistory.recordActions.deleteMessage'),
      buttons: [
        { text: this._transloco.translate('common.cancel'), role: 'cancel' },
        {
          text: this._transloco.translate('common.delete'),
          role: 'destructive',
          handler: () => this._carDetailFacade.deleteDocument(doc.id),
        },
      ],
    });
    await alert.present();
  }
}
