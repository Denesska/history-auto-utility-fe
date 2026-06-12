import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface UserSettings {
    language: string;
    theme: string | null;
    view_mode: string;
}

export type UpdateUserSettings = Partial<UserSettings>;

@Injectable({ providedIn: 'root' })
export class SettingsService {
    private readonly API_URL = `${environment.apiUrl}/user-settings`;

    constructor(private readonly http: HttpClient) {}

    getSettings(): Observable<UserSettings> {
        return this.http.get<UserSettings>(this.API_URL);
    }

    updateSettings(settings: UpdateUserSettings): Observable<UserSettings> {
        return this.http.put<UserSettings>(this.API_URL, settings);
    }
}
