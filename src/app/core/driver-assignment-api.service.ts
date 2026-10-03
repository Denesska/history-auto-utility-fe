import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AssignableUserDto, DriverAssignmentDto } from '@hau/features/cars/driver-assignment/driver-assignment.model';

/**
 * The driver-assignment API (`/api/car/:carId/driver-assignment`). Hand-written
 * rather than generated — see `driver-assignment.model.ts`'s note.
 */
@Injectable({ providedIn: 'root' })
export class DriverAssignmentApiService {
    private readonly _http = inject(HttpClient);
    private _base(carId: number): string {
        return `${environment.apiUrl}/car/${carId}/driver-assignment`;
    }

    getCurrent(carId: number): Observable<DriverAssignmentDto | null> {
        return this._http.get<DriverAssignmentDto | null>(this._base(carId));
    }

    getHistory(carId: number): Observable<DriverAssignmentDto[]> {
        return this._http.get<DriverAssignmentDto[]>(`${this._base(carId)}/history`);
    }

    /** Every accepted member of the car's organization, any role. */
    getCandidates(carId: number): Observable<AssignableUserDto[]> {
        return this._http.get<AssignableUserDto[]>(`${this._base(carId)}/candidates`);
    }

    assign(carId: number, driverUserId: number, notes?: string): Observable<DriverAssignmentDto> {
        return this._http.post<DriverAssignmentDto>(this._base(carId), { driver_user_id: driverUserId, notes });
    }

    unassign(carId: number): Observable<void> {
        return this._http.delete<void>(this._base(carId));
    }
}
