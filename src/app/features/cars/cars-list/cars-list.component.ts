import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarDto } from '@hau/autogenapi/models';
import { CARS_ROUTES } from '@hau/features/cars/cars.routes.const';
import { CarsListItemComponent } from '@hau/features/cars/component/card-list-item/car-list-item.component';
import { CarRowItemComponent } from '@hau/features/cars/component/car-row-item/car-row-item.component';
import { CarListFacade } from '@hau/features/cars/state/car-list/car-list.facade';
import { PageHeaderComponent } from '@hau/shared/component/page-header/page-header.component';
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
import { TranslocoPipe } from '@ngneat/transloco';
import { combineLatest, map } from 'rxjs';

const ATTENTION_VISIBLE_LIMIT = 5;

@Component({
  selector: 'app-cars-list',
  templateUrl: 'cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
  imports: [
    IonIcon, IonLabel, IonList,
    CarsListItemComponent, CarRowItemComponent, PageHeaderComponent,
    AsyncPipe, TitleCasePipe, TranslocoPipe,
    IonContent, IonRefresher, IonRefresherContent,
  ],
})
export class CarsListComponent implements OnInit {
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

  attentionExpanded = false;

  isXL = window.innerWidth >= 1200;

  get viewMode(): ViewMode {
    return this._viewModeService.viewMode;
  }

  @HostListener('window:resize')
  onResize(): void {
    this.isXL = window.innerWidth >= 1200;
  }

  get effectiveViewMode(): ViewMode {
    return this.isXL ? 'cards' : this.viewMode;
  }

  constructor(
    private readonly _carListFacade: CarListFacade,
    private readonly _bootstrapFacade: BootstrapFacade,
    private readonly _pullToRefresh: PullToRefreshService,
    private readonly _navCtrl: NavController,
    private readonly _router: Router,
    private readonly _viewModeService: ViewModeService,
  ) {
    addIcons({
      addCircleOutline, helpCircleOutline, checkmarkCircle, informationCircle,
      documentTextOutline, constructOutline, calendarOutline, shareOutline, archiveOutline,
      gridOutline, listOutline, warningOutline,
    });
  }

  ngOnInit(): void {
    this._carListFacade.loadCarList();
  }

  setViewMode(mode: ViewMode): void {
    this._viewModeService.setViewMode(mode);
  }

  visibleAttentionItems(items: AttentionItem[]): AttentionItem[] {
    if (this.attentionExpanded || items.length <= ATTENTION_VISIBLE_LIMIT) return items;
    // Leave room for the trailing "view all" row within the 5-row limit.
    return items.slice(0, ATTENTION_VISIBLE_LIMIT - 1);
  }

  hasMoreAttentionItems(items: AttentionItem[]): boolean {
    return !this.attentionExpanded && items.length > ATTENTION_VISIBLE_LIMIT;
  }

  toggleAttentionExpanded(): void {
    this.attentionExpanded = !this.attentionExpanded;
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
