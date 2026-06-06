import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { CarDto } from '@hau/autogenapi/models';
import { CARS_ROUTES } from '@hau/features/cars/cars.routes.const';
import { CarsListItemComponent } from '@hau/features/cars/component/card-list-item/car-list-item.component';
import { CarRowItemComponent } from '@hau/features/cars/component/car-row-item/car-row-item.component';
import { CarListFacade } from '@hau/features/cars/state/car-list/car-list.facade';
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonLabel,
  IonList,
  IonRefresher,
  IonRefresherContent,
  NavController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  add,
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
} from 'ionicons/icons';

type ViewMode = 'cards' | 'list';
const VIEW_MODE_KEY = 'hau_garage_view_mode';

@Component({
  selector: 'app-cars-list',
  templateUrl: 'cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
  imports: [
    IonFabButton, IonIcon, IonFab, IonLabel, IonList,
    CarsListItemComponent, CarRowItemComponent,
    AsyncPipe, TitleCasePipe,
    IonContent, IonRefresher, IonRefresherContent,
  ],
})
export class CarsListComponent implements OnInit {
  readonly carList$ = this._carListFacade.activeCarList$;
  readonly soldCarList$ = this._carListFacade.soldCarList$;
  readonly loading$ = this._carListFacade.loading$;
  readonly sharedCarList$ = this._carListFacade.sharedCarList$;
  readonly carDocumentsMap$ = this._carListFacade.carDocumentsMap$;

  viewMode: ViewMode = (localStorage.getItem(VIEW_MODE_KEY) as ViewMode) ?? 'cards';
  isXL = window.innerWidth >= 1200;

  @HostListener('window:resize')
  onResize(): void {
    this.isXL = window.innerWidth >= 1200;
  }

  get effectiveViewMode(): ViewMode {
    return this.isXL ? 'cards' : this.viewMode;
  }

  constructor(private readonly _carListFacade: CarListFacade, private readonly _navCtrl: NavController) {
    addIcons({
      add, addCircleOutline, helpCircleOutline, checkmarkCircle, informationCircle,
      documentTextOutline, constructOutline, calendarOutline, shareOutline, archiveOutline,
      gridOutline, listOutline,
    });
  }

  ngOnInit(): void {
    this._carListFacade.loadCarList();
  }

  setViewMode(mode: ViewMode): void {
    this.viewMode = mode;
    localStorage.setItem(VIEW_MODE_KEY, mode);
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

  async handleRefresh(event: any) {
    try {
      await this._carListFacade.loadCarList();
    } catch (error) {
      console.error('Error refreshing car list:', error);
    } finally {
      event.target.complete();
    }
  }
}
