import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfiguration } from '../api-configuration';
import { MaintenanceRecordDto } from '../models/maintenance-record-dto';

@Injectable({ providedIn: 'root' })
export class MaintenanceRecordAllApiService {
  constructor(
    private readonly config: ApiConfiguration,
    private readonly http: HttpClient,
  ) {}

  getAllMaintenanceRecords(): Observable<MaintenanceRecordDto[]> {
    return this.http.get<MaintenanceRecordDto[]>(`${this.config.rootUrl}/api/maintenance-record/all`);
  }
}
