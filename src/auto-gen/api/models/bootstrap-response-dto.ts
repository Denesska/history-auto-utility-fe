import { CarAccessRole } from './car-access-dto';
import { CarAccessUserDto } from './car-access-dto';
import { CarDto } from './car-dto';
import { DocumentDto } from './document-dto';
import { MaintenanceRecordDto } from './maintenance-record-dto';
import { MaintenanceSettingDto } from './maintenance-setting-dto';
import { MaintenanceProfileDto } from './maintenance-profile-dto';
import { SharedCarDto } from './car-access-dto';

export interface BootstrapSharedCarEntry {
  car: CarDto;
  role: CarAccessRole;
  /** Hand-added (api-backend.yaml is stale): the car's owner, so a sharee sees whose car it is. */
  owner?: CarAccessUserDto | null;
}

export interface BootstrapResponseDto {
  me: CarAccessUserDto;
  ownedCars: CarDto[];
  sharedCars: BootstrapSharedCarEntry[];
  pendingInvites: SharedCarDto[];
  documents: Record<number, DocumentDto[]>;
  maintenance: Record<number, MaintenanceRecordDto[]>;
  carMaintenanceSettings: Record<number, MaintenanceSettingDto[]>;
  maintenanceProfiles: Record<number, MaintenanceProfileDto[]>;
  /** Hand-added (api-backend.yaml is stale, do not regenerate over it): per-organization feature switches that are ON. Missing = all enabled. */
  enabled_features?: string[];
  /**
   * Hand-added (api-backend.yaml is stale, do not regenerate over it): this session context's
   * (personal, or the active organization's) saved navigation preferences — see
   * core/navigation/FEATURE.md. Missing/null fields = use the frontend defaults.
   */
  navigation?: {
    bottom_bar: string[] | null;
    favorite_car_id: number | null;
  };
}
