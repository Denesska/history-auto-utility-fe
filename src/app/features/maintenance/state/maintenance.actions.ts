import { CarDto, CreateMaintenanceRecordDto, MaintenanceRecordDto } from '@hau/autogenapi/models';

export namespace MaintenanceActions {
  export class LoadAll {
    static readonly type = '[Maintenance] Load All';
  }

  export class HydrateFromBootstrap {
    static readonly type = '[Maintenance] Hydrate from bootstrap';
    constructor(public readonly cars: CarDto[], public readonly maintenance: Record<number, MaintenanceRecordDto[]>) {}
  }

  export class LoadAllSuccess {
    static readonly type = '[Maintenance] Load All Success';
    constructor(public cars: import('@hau/autogenapi/models').CarDto[], public records: MaintenanceRecordDto[]) {}
  }

  export class LoadAllError {
    static readonly type = '[Maintenance] Load All Error';
  }

  export class SelectCar {
    static readonly type = '[Maintenance] Select Car';
    constructor(public carId: number) {}
  }

  export class CreateRecord {
    static readonly type = '[Maintenance] Create Record';
    constructor(public dto: CreateMaintenanceRecordDto) {}
  }

  export class CreateRecordSuccess {
    static readonly type = '[Maintenance] Create Record Success';
    constructor(public record: MaintenanceRecordDto) {}
  }

  export class CreateRecordError {
    static readonly type = '[Maintenance] Create Record Error';
  }

  export class DeleteRecord {
    static readonly type = '[Maintenance] Delete Record';
    constructor(public id: number) {}
  }

  export class DeleteRecordSuccess {
    static readonly type = '[Maintenance] Delete Record Success';
    constructor(public id: number) {}
  }
}
