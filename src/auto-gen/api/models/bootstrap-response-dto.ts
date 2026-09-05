import { CarAccessRole } from './car-access-dto';
import { CarAccessUserDto } from './car-access-dto';
import { CarDto } from './car-dto';
import { DocumentDto } from './document-dto';
import { MaintenanceRecordDto } from './maintenance-record-dto';
import { MaintenanceIntervalDto } from './maintenance-interval-dto';
import { MaintenanceSettingDto } from './maintenance-setting-dto';
import { MaintenanceProfileDto } from './maintenance-profile-dto';
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
  maintenanceIntervals: MaintenanceIntervalDto[];
  carMaintenanceSettings: Record<number, MaintenanceSettingDto[]>;
  maintenanceProfiles: Record<number, MaintenanceProfileDto[]>;
}
