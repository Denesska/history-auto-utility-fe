import { HttpErrorResponse } from '@angular/common/http';
import { CarDto } from '@hau/autogenapi/models';

export namespace CarListActions {
  export class LoadCarList {
    static readonly type = '[CarList] Load car list';
  }

  export class LoadCarListSuccess {
    static readonly type = '[CarList] Load car list success';
    constructor(readonly response: CarDto[]) {}
  }

  export class LoadCarListError {
    static readonly type = '[CarList] Load car list error';
    constructor(readonly err: HttpErrorResponse) {}
  }
}
