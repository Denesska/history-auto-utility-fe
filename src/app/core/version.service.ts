import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import packageJson from '../../../package.json';

export type VersionStatus = 'loading' | 'up-to-date' | 'outdated' | 'unknown';

@Injectable({ providedIn: 'root' })
export class VersionService {
  readonly clientVersion = packageJson.version;

  readonly status = signal<VersionStatus>('loading');

  constructor(private http: HttpClient) {}

  check(): void {
    this.http.get<{ version: string }>(`${environment.apiUrl}/version`).subscribe({
      next: ({ version: serverVersion }) => {
        this.status.set(serverVersion === this.clientVersion ? 'up-to-date' : 'outdated');
      },
      error: () => this.status.set('unknown'),
    });
  }
}
