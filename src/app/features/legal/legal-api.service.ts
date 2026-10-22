import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LegalStatus } from '@hau/features/auth';

/**
 * `POST /legal/accept` — records acceptance of the current Terms/Privacy
 * versions for the signed-in user. Called from `LegalConsentComponent`; the
 * returned `LegalStatus` is the same shape as `UserProfile.legal`, but the
 * caller still re-reads `/auth/me` afterwards (`AuthService.checkSession()`)
 * so the cached profile (and `needsAcceptance`) is authoritative everywhere.
 */
@Injectable({ providedIn: 'root' })
export class LegalApiService {
    private readonly _http = inject(HttpClient);
    private readonly _base = `${environment.apiUrl}/legal`;

    accept(termsVersion: string, privacyVersion: string): Observable<LegalStatus> {
        return this._http.post<LegalStatus>(`${this._base}/accept`, { termsVersion, privacyVersion });
    }
}
