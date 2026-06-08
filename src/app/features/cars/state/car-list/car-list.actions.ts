import { HttpErrorResponse } from "@angular/common/http";
import { CarDto, DocumentDto } from "@hau/autogenapi/models";
import { SharedCarEntry } from '@hau/features/cars/state/car-list/car-list.state';

export namespace CarListActions {

  export class LoadCarList {
    static readonly type = '[CarList] Load car list';
  }

  export class LoadCarListSuccess {
    static readonly type = '[CarList] Load car list success';
    constructor(readonly response: CarDto[]) { }
  }

  export class LoadCarListError {
    static readonly type = '[CarList] Load car list error';
    constructor(readonly err: HttpErrorResponse) { }
  }

  export class LoadCarDocuments {
    static readonly type = '[CarList] Load car documents';
    constructor(readonly carId: number) { }
  }

  export class LoadCarDocumentsSuccess {
    static readonly type = '[CarList] Load car documents success';
    constructor(readonly carId: number, readonly documents: DocumentDto[]) { }
  }

  export class LoadCarDocumentsError {
    static readonly type = '[CarList] Load car documents error';
    constructor(readonly err: HttpErrorResponse) { }
  }

  export class LoadSharedCars {
    static readonly type = '[CarList] Load shared cars';
  }

  export class LoadSharedCarsSuccess {
    static readonly type = '[CarList] Load shared cars success';
    constructor(readonly items: SharedCarEntry[]) { }
  }

  export class LoadSharedCarsError {
    static readonly type = '[CarList] Load shared cars error';
    constructor(readonly err: HttpErrorResponse) { }
  }

  export class InjectCar {
    static readonly type = '[CarList] Inject car';
    constructor(readonly car: CarDto) { }
  }

  export class RemoveCar {
    static readonly type = '[CarList] Remove car';
    constructor(readonly carId: number) { }
  }

  export class UpdateCarInList {
    static readonly type = '[CarList] Update car in list';
    constructor(readonly car: CarDto) { }
  }

  export class Reset {
    static readonly type = '[CarList] Reset';
  }

}