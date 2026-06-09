import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfiguration } from '../api-configuration';
import { BootstrapResponseDto } from '../models/bootstrap-response-dto';

@Injectable({ providedIn: 'root' })
export class BootstrapApiService {
  constructor(
    private readonly config: ApiConfiguration,
    private readonly http: HttpClient,
  ) {}

  getInitialData(): Observable<BootstrapResponseDto> {
    return this.http.get<BootstrapResponseDto>(
      `${this.config.rootUrl}/api/app-data/initial`,
      { withCredentials: true },
    );
  }
}
