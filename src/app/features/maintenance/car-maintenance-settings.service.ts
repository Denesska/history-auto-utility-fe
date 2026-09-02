import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MaintenanceSettingDto, ServiceCategory } from '@hau/autogenapi/models';
import { environment } from '../../../environments/environment';

export interface UpdateMaintenanceSettingPayload {
  tracked?: boolean;
  custom_interval_km?: number | null;
  custom_interval_months?: number | null;
}

/**
 * Per-user maintenance tracking settings for one car: whether a category shows a
 * progress bar, and any custom interval that overrides the global default. Unlike
 * DeadlineOrderService this has no localStorage fallback — these values affect
 * what counts as "overdue", so a stale local copy would be actively misleading
 * rather than a harmless display preference.
 */
@Injectable({ providedIn: 'root' })
export class CarMaintenanceSettingsService {
  private readonly baseUrl = `${environment.apiUrl}/car`;

  constructor(private readonly http: HttpClient) {}

  getSettings(carId: number): Observable<MaintenanceSettingDto[]> {
    return this.http.get<MaintenanceSettingDto[]>(`${this.baseUrl}/${carId}/maintenance-settings`);
  }

  updateSetting(carId: number, category: ServiceCategory, patch: UpdateMaintenanceSettingPayload): Observable<MaintenanceSettingDto> {
    return this.http.put<MaintenanceSettingDto>(`${this.baseUrl}/${carId}/maintenance-settings/${category}`, patch);
  }
}
