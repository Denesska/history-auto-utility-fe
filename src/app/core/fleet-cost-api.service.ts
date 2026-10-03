import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { FleetCostDashboardDto, FleetCostRange } from '@hau/features/fleet-cost/fleet-cost.model';

/**
 * The fleet cost dashboard API (`/api/organization/:organizationId/cost-dashboard`).
 * Hand-written rather than generated — see `fleet-cost.model.ts`'s note.
 */
@Injectable({ providedIn: 'root' })
export class FleetCostApiService {
    private readonly _http = inject(HttpClient);

    getDashboard(organizationId: number, range: FleetCostRange): Observable<FleetCostDashboardDto> {
        return this._http.get<FleetCostDashboardDto>(
            `${environment.apiUrl}/organization/${organizationId}/cost-dashboard`,
            { params: { range } },
        );
    }
}
