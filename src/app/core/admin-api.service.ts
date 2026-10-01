import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { AdminRange, AdminStats, AdminUserRow } from '@hau/features/admin/admin.model';

/**
 * The admin stats API (`/api/admin`). Lives in `core/` because the shell
 * (sidebar, Account screen) needs `isAdmin()` to decide whether to show the
 * entry at all, outside the admin feature itself.
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
}
