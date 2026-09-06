import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceCategory } from '@hau/autogenapi/models';
import { ApiConfiguration } from '@hau/autogenapi/api-configuration';

export interface SuggestedCategory {
    category: ServiceCategory | null;
    confidence: 'high' | 'medium' | 'low';
}

// Thin wrapper around POST /maintenance-record/suggest-category, the AI fallback
// used when the local keyword heuristic (service-category-suggestion.util.ts)
// can't confidently classify a record. Calls HttpClient directly rather than
// through the generated API client: regenerating that client from a fresh copy
// of the backend's swagger.yaml is currently destructive (it drops DTOs still
// imported elsewhere — see api-backend.yaml staleness notes), so this one small,
// stable endpoint is hand-maintained instead of triggering a full regen.
@Injectable({ providedIn: 'root' })
export class MaintenanceCategorySuggestionService {
    private readonly _http = inject(HttpClient);
    private readonly _config = inject(ApiConfiguration);

    suggest(description: string, partNames: string[]): Observable<SuggestedCategory> {
        return this._http.post<SuggestedCategory>(`${this._config.rootUrl}/maintenance-record/suggest-category`, {
            description,
            part_names: partNames,
        });
    }
}
