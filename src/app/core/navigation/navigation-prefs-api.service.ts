import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

/** Mirrors the backend's `NavigationPrefsDto` (`modules/user-settings/dto/navigation-prefs.dto.ts`). */
export interface NavigationPrefsDto {
  /** 1-3 unique bottom-bar item ids, in order. Null = not set; use the frontend defaults. */
  bottom_bar: string[] | null;
  /** Null = not set, or the previously stored car is no longer accessible. */
  favorite_car_id: number | null;
}

export type UpdateNavigationPrefsDto = Partial<NavigationPrefsDto>;

/**
 * `GET`/`PUT /api/user-settings/navigation` — prefs are stored separately per session context
 * (personal vs. each organization) on the backend; this service just reads/writes "the current
 * context's" prefs, same convention as `SettingsService` (`features/settings/settings.service.ts`).
 */
@Injectable({ providedIn: 'root' })
export class NavigationPrefsApiService {
  private readonly API_URL = `${environment.apiUrl}/user-settings/navigation`;

  constructor(private readonly http: HttpClient) {}

  getPrefs(): Observable<NavigationPrefsDto> {
    return this.http.get<NavigationPrefsDto>(this.API_URL);
  }

  updatePrefs(dto: UpdateNavigationPrefsDto): Observable<NavigationPrefsDto> {
    return this.http.put<NavigationPrefsDto>(this.API_URL, dto);
  }
}
