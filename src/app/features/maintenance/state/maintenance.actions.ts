import { CarDto, CreateMaintenanceRecordDto, MaintenanceRecordDto, UpdateMaintenanceRecordDto } from '@hau/autogenapi/models';
import { BootstrapSharedCarEntry } from '@hau/autogenapi/models/bootstrap-response-dto';

export namespace MaintenanceActions {
  export class LoadAll {
    static readonly type = '[Maintenance] Load All';
  }

  export class HydrateFromBootstrap {
    static readonly type = '[Maintenance] Hydrate from bootstrap';
    constructor(
      public readonly cars: CarDto[],
      public readonly sharedCars: BootstrapSharedCarEntry[],
      public readonly maintenance: Record<number, MaintenanceRecordDto[]>,
    ) {}
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

  export class UpdateRecord {
    static readonly type = '[Maintenance] Update Record';
    constructor(public id: number, public dto: UpdateMaintenanceRecordDto) {}
  }

  export class UpdateRecordSuccess {
    static readonly type = '[Maintenance] Update Record Success';
    constructor(public record: MaintenanceRecordDto) {}
  }

  export class UpdateRecordError {
    static readonly type = '[Maintenance] Update Record Error';
  }

  export class DeleteRecord {
    static readonly type = '[Maintenance] Delete Record';
    constructor(public id: number) {}
  }

  export class DeleteRecordSuccess {
    static readonly type = '[Maintenance] Delete Record Success';
    constructor(public id: number) {}
  }

  // Re-fetches one car's records from the attachment-meta-enriched list endpoint
  // (GET /maintenance-record/car/:carId) after a save's attachment uploads/removals
  // have settled — the plain create/update response never carries attachmentsCount/
  // thumbnailUrl (those are computed only by the list endpoints), so without this the
  // Istoric list row's thumbnail/📎 badge stays stale until the next full reload. See
  // add-maintenance-panel.component.ts's _afterSave().
  export class RefreshCarRecords {
    static readonly type = '[Maintenance] Refresh Car Records';
    constructor(public carId: number) {}
  }

  export class RefreshCarRecordsSuccess {
    static readonly type = '[Maintenance] Refresh Car Records Success';
    constructor(public carId: number, public records: MaintenanceRecordDto[]) {}
  }
}
