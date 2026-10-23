import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiConfiguration } from '@hau/autogenapi/api-configuration';
import { Observable } from 'rxjs';

/** Minimal public profile returned by the share-candidate search (not in the generated client yet). */
export interface ShareUserSearchResult {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  picture?: string;
}

@Injectable({ providedIn: 'root' })
export class ShareUserSearchService {
  private readonly _http = inject(HttpClient);
  private readonly _config = inject(ApiConfiguration);

  /** `GET /car/access/user-search?q=` — name or email, min 3 chars (enforced server-side too). */
  search(q: string): Observable<ShareUserSearchResult[]> {
    return this._http.get<ShareUserSearchResult[]>(`${this._config.rootUrl}/car/access/user-search`, {
      params: new HttpParams().set('q', q),
    });
  }
}
