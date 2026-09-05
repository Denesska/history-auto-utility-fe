import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, OnInit, TemplateRef, ViewChild, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { CarDto } from '@hau/autogenapi/models';
import { CARS_ROUTES } from '@hau/features/cars/cars.routes.const';
import { CarsListItemComponent } from '@hau/features/cars/component/card-list-item/car-list-item.component';
import { CarRowItemComponent } from '@hau/features/cars/component/car-row-item/car-row-item.component';
import { CarListFacade } from '@hau/features/cars/state/car-list/car-list.facade';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { FabActionService } from '@hau/core/fab-action.service';
import { ViewMode, ViewModeService } from '@hau/core/view-mode.service';
import { PullToRefreshService } from '@hau/core/pull-to-refresh.service';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { AttentionItem, buildAttentionItems } from '@hau/shared/utils/attention-items.util';
import {
  IonContent,
  IonIcon,
  IonLabel,
  IonList,
  IonRefresher,
  IonRefresherContent,
  NavController,
  ViewWillEnter,
  ViewWillLeave,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  addCircleOutline,
  archiveOutline,
  calendarOutline,
  checkmarkCircle,
  constructOutline,
  documentTextOutline,
  gridOutline,
  helpCircleOutline,
  informationCircle,
  listOutline,
  shareOutline,
  warningOutline,
} from 'ionicons/icons';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { combineLatest, map } from 'rxjs';

const ATTENTION_VISIBLE_LIMIT = 5;

@Component({
  selector: 'app-cars-list',
  templateUrl: 'cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
  imports: [
    IonIcon, IonLabel, IonList,
    CarsListItemComponent, CarRowItemComponent,
    AsyncPipe, TitleCasePipe, TranslocoPipe,
    IonContent, IonRefresher, IonRefresherContent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsListComponent implements OnInit, ViewWillEnter, ViewWillLeave {
  @ViewChild('headerActionsTpl') private _headerActionsTpl!: TemplateRef<unknown>;

  readonly carList$ = this._carListFacade.activeCarList$;
  readonly soldCarList$ = this._carListFacade.soldCarList$;
  readonly loading$ = this._carListFacade.loading$;
  readonly sharedCarList$ = this._carListFacade.sharedCarList$;
  readonly carDocumentsMap$ = this._carListFacade.carDocumentsMap$;

  readonly totalCarsCount$ = combineLatest([this.carList$, this.sharedCarList$]).pipe(
    map(([owned, shared]) => (owned?.length ?? 0) + (shared?.length ?? 0)),
  );

  readonly attentionItems$ = combineLatest([
    this._bootstrapFacade.ownedCars$,
    this._bootstrapFacade.documents$,
  ]).pipe(map(([cars, docsByCarId]) => buildAttentionItems(cars, docsByCarId)));

  readonly attentionExpanded = signal(false);
  readonly isXL = signal(window.innerWidth >= 1200);

  // Bridged as a signal (not a plain getter) so a view-mode change made
  // elsewhere (e.g. settings.component.ts) is picked up here even while this
  // page stays alive off-screen under Ionic's route-reuse strategy — a plain
  // getter would only re-read on this component's own next change detection.
  // Built in the constructor (not a field initializer) since it needs
  // _viewModeService, which is only assigned once the constructor body runs.
  private _viewMode!: () => ViewMode;

  @HostListener('window:resize')
  onResize(): void {
    this.isXL.set(window.innerWidth >= 1200);
  }

  get effectiveViewMode(): ViewMode {
    return this.isXL() ? 'cards' : this._viewMode();
  }

  constructor(
    private readonly _carListFacade: CarListFacade,
    private readonly _bootstrapFacade: BootstrapFacade,
    private readonly _pullToRefresh: PullToRefreshService,
    private readonly _navCtrl: NavController,
    private readonly _router: Router,
    private readonly _viewModeService: ViewModeService,
    private readonly _headerActions: HeaderActionsService,
    private readonly _fabAction: FabActionService,
    private readonly _transloco: TranslocoService,
  ) {
    addIcons({
      addCircleOutline, helpCircleOutline, checkmarkCircle, informationCircle,
      documentTextOutline, constructOutline, calendarOutline, shareOutline, archiveOutline,
      gridOutline, listOutline, warningOutline,
    });
    this._viewMode = toSignal(this._viewModeService.viewMode$, {
      initialValue: this._viewModeService.viewMode,
    });
  }

  // IonicRouteStrategy caches routed pages, so ngOnDestroy doesn't reliably
  // fire on back-navigation — these Ionic lifecycle hooks do.
  ionViewWillEnter(): void {
    this._headerActions.setTitle(this._transloco.translate('cars.list.title'));
    this._headerActions.set(this._headerActionsTpl);
    this._fabAction.set({ run: () => this.navigateToAddCar(), ariaLabelKey: 'nav.fab.addVehicle' });
  }

  ionViewWillLeave(): void {
    this._headerActions.clearTitle();
    this._headerActions.clear();
    this._fabAction.clear();
  }

  ngOnInit(): void {
    this._carListFacade.loadCarList();
  }

  setViewMode(mode: ViewMode): void {
    this._viewModeService.setViewMode(mode);
  }

  visibleAttentionItems(items: AttentionItem[]): AttentionItem[] {
    if (this.attentionExpanded() || items.length <= ATTENTION_VISIBLE_LIMIT) return items;
    // Leave room for the trailing "view all" row within the 5-row limit.
    return items.slice(0, ATTENTION_VISIBLE_LIMIT - 1);
  }

  hasMoreAttentionItems(items: AttentionItem[]): boolean {
    return !this.attentionExpanded() && items.length > ATTENTION_VISIBLE_LIMIT;
  }

  toggleAttentionExpanded(): void {
    this.attentionExpanded.update(v => !v);
  }

  viewAttentionItem(item: AttentionItem): void {
    void this._router.navigate([`${CARS_ROUTES.details.fullPath}/${item.carId}/${CARS_ROUTES.documents.path}`]);
  }

  navigateToAddCar(): void {
    this._navCtrl.navigateForward(CARS_ROUTES.create.fullPath, { animated: false });
  }

  navigateToCarDetails(car: CarDto): void {
    this._navCtrl.navigateForward(`${CARS_ROUTES.details.fullPath}/${car.id}`, { animated: false });
  }

  navigateToCarEdit(car: CarDto): void {
    this._navCtrl.navigateForward(
      `${CARS_ROUTES.details.fullPath}/${car.id}/${CARS_ROUTES.edit.path}`,
      { animated: false },
    );
  }

  onRefresh(event: Event): void {
    this._pullToRefresh.refresh(event);
  }
}
