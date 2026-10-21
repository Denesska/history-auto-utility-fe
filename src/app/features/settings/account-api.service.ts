import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

/** Shape of the 409 `ACCOUNT_OWNS_ORGANIZATION` error body (`DELETE /account`). */
export interface AccountOwnedOrganization {
  id: number;
  name: string;
}

/**
 * GDPR data-subject rights for the calling user's own account
 * (`history-auto-utility-be/src/modules/account/`): "download my data"
 * (Art. 15/20) and "delete my account" (Art. 17). See `FEATURE.md` for the
 * full behaviour (what's exported/deleted, which errors each endpoint can
 * return).
 */
@Injectable({ providedIn: 'root' })
export class AccountApiService {
  private readonly API_URL = `${environment.apiUrl}/account`;

  constructor(private readonly http: HttpClient) {}

  /** The raw JSON export file, as a Blob — the caller decides how to save/share it. */
  exportMyData(): Observable<Blob> {
    return this.http.get(`${this.API_URL}/export`, { responseType: 'blob' });
  }

  /** `confirmation` must equal the account's own email (case-insensitive). */
  deleteMyAccount(confirmation: string): Observable<{ deleted: true }> {
    return this.http.delete<{ deleted: true }>(this.API_URL, { body: { confirmation } });
  }
}
