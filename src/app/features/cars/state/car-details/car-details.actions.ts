import { HttpErrorResponse } from "@angular/common/http";
import { AddCarDto, CarDto, DocumentDto, MaintenanceRecordDto } from "@hau/autogenapi/models";

export namespace CarDetailsActions {

  export class LoadCurrentCar {
    static readonly type = '[CarDetails] Load current car';
    constructor(readonly id: string) { }
  }

  export class LoadCurrentCarSuccess {
    static readonly type = '[CarDetails] Load current car success';
    constructor(readonly response: CarDto) { }
  }

  export class LoadCurrentCarError {
    static readonly type = '[CarDetails] Load current ca errorr';
    constructor(readonly err: HttpErrorResponse) { }
  }

  export class CreateCar {
    static readonly type = '[CarDetails] Create car';
    constructor(readonly car: AddCarDto & { files?: File[] }) { }
  }

  export class CreateCarSuccess {
    static readonly type = '[CarDetails] Create car success';
  }

  export class CreateCarError {
    static readonly type = '[CarDetails] Create car error';
    constructor(readonly err: HttpErrorResponse) { }
  }

  export class UpdateCar {
    static readonly type = '[CarDetails] Update car';
    constructor(readonly car: CarDto) { }
  }

  export class UpdateCarSuccess {
    static readonly type = '[CarDetails] Update car success';
  }

  export class UpdateCarError {
    static readonly type = '[CarDetails] Update car error';
    constructor(readonly err: HttpErrorResponse) { }
  }

  export class LoadCarDocuments {
    static readonly type = '[CarDetails] Load documents';
    constructor(readonly carId: string) { }
  }

  export class LoadCarDocumentsSuccess {
    static readonly type = '[CarDetails] Load car documents success';
    constructor(readonly response: DocumentDto[]) { }
  }

  export class LoadCarDocumentsError {
    static readonly type = '[CarDetails] Load car documents errorr';
    constructor(readonly err: HttpErrorResponse) { }
  }

  export class LoadMaintenanceRecords {
    static readonly type = '[CarDetails] Load maintenance records';
    constructor(readonly carId: string) { }
  }

  export class LoadMaintenanceRecordsSuccess {
    static readonly type = '[CarDetails] Load maintenance records success';
    constructor(readonly response: MaintenanceRecordDto[]) { }
  }

  export class LoadMaintenanceRecordsError {
    static readonly type = '[CarDetails] Load maintenance records error';
    constructor(readonly err: HttpErrorResponse) { }
  }
}