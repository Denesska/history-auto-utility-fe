import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BusinessAccessStatusDto } from './business-access.model';

/**
 * The "business account approval gate" user-facing API (`/api/business-access`) —
 * same scope as organization creation/the org picker (`business`, `allowNoOrg: true`),
 * since that's the only reason this exists. Used from the org picker
 * (`features/auth/select-organization`), same as `OrganizationApiService`.
 */
@Injectable({ providedIn: 'root' })
export class BusinessAccessApiService {
    private readonly _http = inject(HttpClient);
    private readonly _base = `${environment.apiUrl}/business-access`;

    /** Current user's business access status and whether they can create an organization. */
    getMyStatus(): Observable<BusinessAccessStatusDto> {
        return this._http.get<BusinessAccessStatusDto>(`${this._base}/me`);
    }

    /** Submits (or re-submits, after a rejection) a request to be allowed to create an organization. */
    submitRequest(companyName: string, note?: string): Observable<BusinessAccessStatusDto> {
        return this._http.post<BusinessAccessStatusDto>(`${this._base}/request`, {
            company_name: companyName,
            ...(note ? { note } : {}),
        });
    }
}
