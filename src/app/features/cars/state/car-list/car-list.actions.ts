import { HttpErrorResponse } from "@angular/common/http";
import { CarDto, DocumentDto } from "@hau/autogenapi/models";

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

}