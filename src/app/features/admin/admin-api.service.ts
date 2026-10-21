import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AiSettings, AiUsage, AiUserLimit, AdminBusinessAccessRequestDto, AdminOrganization, AdminRange, AdminStats, AdminUserRow, BusinessAccessRequestStatus } from './admin.model';

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

    /** The "business account approval gate" review list — newest first, defaults to PENDING on the backend. */
    businessAccessRequests(status: BusinessAccessRequestStatus): Observable<AdminBusinessAccessRequestDto[]> {
        return this._http.get<AdminBusinessAccessRequestDto[]>(`${this._base}/business-access-requests`, { params: { status } });
    }

    approveBusinessAccessRequest(id: number): Observable<AdminBusinessAccessRequestDto> {
        return this._http.post<AdminBusinessAccessRequestDto>(`${this._base}/business-access-requests/${id}/approve`, {});
    }

    rejectBusinessAccessRequest(id: number, reason?: string): Observable<AdminBusinessAccessRequestDto> {
        return this._http.post<AdminBusinessAccessRequestDto>(`${this._base}/business-access-requests/${id}/reject`, reason ? { reason } : {});
    }

    // ── AI usage ──────────────────────────────────────────────────────

    aiUsage(days: number): Observable<AiUsage> {
        return this._http.get<AiUsage>(`${this._base}/ai-usage`, { params: new HttpParams().set('days', days) });
    }

    aiSettings(): Observable<AiSettings> {
        return this._http.get<AiSettings>(`${this._base}/ai-settings`);
    }

    updateAiSettings(patch: Partial<AiSettings>): Observable<AiSettings> {
        return this._http.put<AiSettings>(`${this._base}/ai-settings`, patch);
    }

    /** `null` when the user has no override. */
    aiUserLimit(userId: number): Observable<AiUserLimit | null> {
        return this._http.get<AiUserLimit | null>(`${this._base}/ai-users/${userId}/limit`);
    }

    setAiUserLimit(userId: number, limit: AiUserLimit): Observable<AiUserLimit> {
        return this._http.put<AiUserLimit>(`${this._base}/ai-users/${userId}/limit`, limit);
    }

    resetAiUserLimit(userId: number): Observable<unknown> {
        return this._http.delete(`${this._base}/ai-users/${userId}/limit`);
    }
}
