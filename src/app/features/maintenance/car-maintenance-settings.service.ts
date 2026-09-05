import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { MaintenanceSettingDto, ServiceCategory } from '@hau/autogenapi/models';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
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
 *
 * Reads go through BootstrapFacade.carMaintenanceSettings$ (already loaded for every
 * car at bootstrap) — this service only handles the write, and folds the result back
 * into that same cache so callers never have to merge it back in by hand.
 */
@Injectable({ providedIn: 'root' })
export class CarMaintenanceSettingsService {
  private readonly baseUrl = `${environment.apiUrl}/car`;
  private readonly _bootstrapFacade = inject(BootstrapFacade);

  constructor(private readonly http: HttpClient) {}

  updateSetting(carId: number, profileId: number, category: ServiceCategory, patch: UpdateMaintenanceSettingPayload): Observable<MaintenanceSettingDto> {
    return this.http.put<MaintenanceSettingDto>(`${this.baseUrl}/${carId}/maintenance-settings/${category}?profileId=${profileId}`, patch).pipe(
      tap(updated => {
        const current = this._bootstrapFacade.currentCarMaintenanceSettings(carId);
        const next = current.some(r => r.category === updated.category && r.profile_id === updated.profile_id)
          ? current.map(r => (r.category === updated.category && r.profile_id === updated.profile_id ? updated : r))
          : [...current, updated];
        this._bootstrapFacade.patchCarMaintenanceSettings(carId, next);
      }),
    );
  }
}
