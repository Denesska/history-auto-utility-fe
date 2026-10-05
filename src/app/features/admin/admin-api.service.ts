import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AdminOrganization, AdminRange, AdminStats, AdminUserRow } from './admin.model';

/**
 * The admin stats API (`/api/admin`). `isAdmin()` is also used from
 * `features/main` (sidebar) and `features/settings` (Account screen) to
 * decide whether to show the admin entry at all, outside this feature.
 */
@Injectable({ providedIn: 'root' })
export class AdminApiService {
    private readonly _http = inject(HttpClient);
    private readonly _base = `${environment.apiUrl}/admin`;

    /** Never errors — any failure (offline, older backend) just hides the admin entry. */
    isAdmin(): Observable<boolean> {
        return this._http.get<{ isAdmin: boolean }>(`${this._base}/me`).pipe(
            map(r => r.isAdmin),
            catchError(() => of(false)),
        );
    }

    stats(range: AdminRange): Observable<AdminStats> {
        return this._http.get<AdminStats>(`${this._base}/stats`, { params: new HttpParams().set('range', range) });
    }

    users(): Observable<AdminUserRow[]> {
        return this._http.get<AdminUserRow[]>(`${this._base}/users`);
    }

    organizations(): Observable<AdminOrganization[]> {
        return this._http.get<AdminOrganization[]>(`${this._base}/organizations`);
    }

    /** `patch` carries only the keys being changed — `false` disables, `true` clears the override. */
    updateOrganizationFeatures(organizationId: number, patch: Record<string, boolean>): Observable<AdminOrganization> {
        return this._http.patch<AdminOrganization>(`${this._base}/organizations/${organizationId}/features`, patch);
    }
}
