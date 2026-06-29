import { CarAccessRole } from './car-access-dto';
import { CarAccessUserDto } from './car-access-dto';
import { CarDto } from './car-dto';
import { DocumentDto } from './document-dto';
import { MaintenanceRecordDto } from './maintenance-record-dto';
import { SharedCarDto } from './car-access-dto';

export interface BootstrapSharedCarEntry {
  car: CarDto;
  role: CarAccessRole;
}

export interface BootstrapResponseDto {
  me: CarAccessUserDto;
  ownedCars: CarDto[];
  sharedCars: BootstrapSharedCarEntry[];
  pendingInvites: SharedCarDto[];
  documents: Record<number, DocumentDto[]>;
  maintenance: Record<number, MaintenanceRecordDto[]>;
}
