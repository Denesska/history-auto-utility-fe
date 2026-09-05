import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { MaintenanceProfileDto } from '@hau/autogenapi/models';
import { BootstrapFacade } from '@hau/shared/state/bootstrap/bootstrap.facade';
import { environment } from '../../../environments/environment';

/**
 * Named, per-user, per-car maintenance profiles — an alternative to the three
 * built-in usage profiles (normal/intensive/occasional), which stay client-side
 * and never hit this service. Mirrors CarMaintenanceSettingsService: reads go
 * through BootstrapFacade.maintenanceProfiles$ (already loaded for every car at
 * bootstrap), this service only handles writes and folds the result back into
 * that same cache.
 */
@Injectable({ providedIn: 'root' })
export class CarMaintenanceProfilesService {
  private readonly baseUrl = `${environment.apiUrl}/car`;
  private readonly _bootstrapFacade = inject(BootstrapFacade);

  constructor(private readonly http: HttpClient) {}

  createProfile(carId: number, name: string): Observable<MaintenanceProfileDto> {
    return this.http.post<MaintenanceProfileDto>(`${this.baseUrl}/${carId}/maintenance-profiles`, { name }).pipe(
      tap(created => {
        const current = this._bootstrapFacade.currentCarMaintenanceProfiles(carId);
        this._bootstrapFacade.patchCarMaintenanceProfiles(carId, [...current, created]);
      }),
    );
  }

  renameProfile(carId: number, profileId: number, name: string): Observable<MaintenanceProfileDto> {
    return this.http.patch<MaintenanceProfileDto>(`${this.baseUrl}/${carId}/maintenance-profiles/${profileId}`, { name }).pipe(
      tap(updated => {
        const current = this._bootstrapFacade.currentCarMaintenanceProfiles(carId);
        this._bootstrapFacade.patchCarMaintenanceProfiles(carId, current.map(p => (p.id === updated.id ? updated : p)));
      }),
    );
  }

  deleteProfile(carId: number, profileId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${carId}/maintenance-profiles/${profileId}`).pipe(
      tap(() => {
        const current = this._bootstrapFacade.currentCarMaintenanceProfiles(carId);
        this._bootstrapFacade.patchCarMaintenanceProfiles(carId, current.filter(p => p.id !== profileId));
      }),
    );
  }
}
