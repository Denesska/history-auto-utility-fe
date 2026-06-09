import { CarDto, DocumentDto, MaintenanceRecordDto, SharedCarDto } from '@hau/autogenapi/models';
import { BootstrapSharedCarEntry } from '@hau/autogenapi/models/bootstrap-response-dto';

export namespace BootstrapActions {

  export class Bootstrap {
    static readonly type = '[Bootstrap] Bootstrap';
  }

  export class BootstrapForce {
    static readonly type = '[Bootstrap] Bootstrap force';
  }

  export class BootstrapSuccess {
    static readonly type = '[Bootstrap] Bootstrap success';
    constructor(
      readonly ownedCars: CarDto[],
      readonly sharedCars: BootstrapSharedCarEntry[],
      readonly pendingInvites: SharedCarDto[],
      readonly documents: Record<number, DocumentDto[]>,
      readonly maintenance: Record<number, MaintenanceRecordDto[]>,
    ) {}
  }

  export class BootstrapFailure {
    static readonly type = '[Bootstrap] Bootstrap failure';
    constructor(readonly err: unknown) {}
  }

  export class PatchCar {
    static readonly type = '[Bootstrap] Patch car';
    constructor(readonly car: CarDto) {}
  }

  export class InjectCar {
    static readonly type = '[Bootstrap] Inject car';
    constructor(readonly car: CarDto) {}
  }

  export class RemoveCar {
    static readonly type = '[Bootstrap] Remove car';
    constructor(readonly carId: number) {}
  }

  export class PatchCarDocuments {
    static readonly type = '[Bootstrap] Patch car documents';
    constructor(readonly carId: number, readonly documents: DocumentDto[]) {}
  }

  export class PatchCarMaintenance {
    static readonly type = '[Bootstrap] Patch car maintenance';
    constructor(readonly carId: number, readonly records: MaintenanceRecordDto[]) {}
  }

}
