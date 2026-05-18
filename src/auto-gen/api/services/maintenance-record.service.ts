/* eslint-disable */
/* Wrapper services for ng-openapi-gen v2 API functions */

import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import {
  maintenanceRecordControllerCreateMaintenanceRecord,
  maintenanceRecordControllerGetMaintenanceRecord,
  maintenanceRecordControllerUpdateMaintenanceRecord,
  maintenanceRecordControllerDeleteMaintenanceRecord,
  maintenanceRecordControllerGetMaintenanceRecordsByCarId,
  MaintenanceRecordControllerCreateMaintenanceRecord$Params,
  MaintenanceRecordControllerGetMaintenanceRecord$Params,
  MaintenanceRecordControllerUpdateMaintenanceRecord$Params,
  MaintenanceRecordControllerDeleteMaintenanceRecord$Params,
  MaintenanceRecordControllerGetMaintenanceRecordsByCarId$Params,
} from '../functions';
import { MaintenanceRecordDto, CreateMaintenanceRecordDto, UpdateMaintenanceRecordDto } from '../models';

@Injectable({ providedIn: 'root' })
export class MaintenanceRecordService {
  constructor(
    private config: ApiConfiguration,
    private http: HttpClient
  ) {
  }

  maintenanceRecordControllerCreateMaintenanceRecord(params: MaintenanceRecordControllerCreateMaintenanceRecord$Params, context?: HttpContext): Observable<MaintenanceRecordDto> {
    return maintenanceRecordControllerCreateMaintenanceRecord(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<MaintenanceRecordDto>) => r.body as MaintenanceRecordDto)
    );
  }

  maintenanceRecordControllerGetMaintenanceRecord(params: MaintenanceRecordControllerGetMaintenanceRecord$Params, context?: HttpContext): Observable<MaintenanceRecordDto> {
    return maintenanceRecordControllerGetMaintenanceRecord(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<MaintenanceRecordDto>) => r.body as MaintenanceRecordDto)
    );
  }

  maintenanceRecordControllerUpdateMaintenanceRecord(params: MaintenanceRecordControllerUpdateMaintenanceRecord$Params, context?: HttpContext): Observable<MaintenanceRecordDto> {
    return maintenanceRecordControllerUpdateMaintenanceRecord(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<MaintenanceRecordDto>) => r.body as MaintenanceRecordDto)
    );
  }

  maintenanceRecordControllerDeleteMaintenanceRecord(params: MaintenanceRecordControllerDeleteMaintenanceRecord$Params, context?: HttpContext): Observable<MaintenanceRecordDto> {
    return maintenanceRecordControllerDeleteMaintenanceRecord(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<MaintenanceRecordDto>) => r.body as MaintenanceRecordDto)
    );
  }

  maintenanceRecordControllerGetMaintenanceRecordsByCarId(params: MaintenanceRecordControllerGetMaintenanceRecordsByCarId$Params, context?: HttpContext): Observable<Array<MaintenanceRecordDto>> {
    return maintenanceRecordControllerGetMaintenanceRecordsByCarId(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<Array<MaintenanceRecordDto>>) => r.body as Array<MaintenanceRecordDto>)
    );
  }
}
