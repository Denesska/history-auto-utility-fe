/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { maintenanceRecordControllerCreateMaintenanceRecord } from '../fn/maintenance-record/maintenance-record-controller-create-maintenance-record';
import { MaintenanceRecordControllerCreateMaintenanceRecord$Params } from '../fn/maintenance-record/maintenance-record-controller-create-maintenance-record';
import { maintenanceRecordControllerDeleteMaintenanceRecord } from '../fn/maintenance-record/maintenance-record-controller-delete-maintenance-record';
import { MaintenanceRecordControllerDeleteMaintenanceRecord$Params } from '../fn/maintenance-record/maintenance-record-controller-delete-maintenance-record';
import { maintenanceRecordControllerGetMaintenanceRecord } from '../fn/maintenance-record/maintenance-record-controller-get-maintenance-record';
import { MaintenanceRecordControllerGetMaintenanceRecord$Params } from '../fn/maintenance-record/maintenance-record-controller-get-maintenance-record';
import { maintenanceRecordControllerGetMaintenanceRecordsByCarId } from '../fn/maintenance-record/maintenance-record-controller-get-maintenance-records-by-car-id';
import { MaintenanceRecordControllerGetMaintenanceRecordsByCarId$Params } from '../fn/maintenance-record/maintenance-record-controller-get-maintenance-records-by-car-id';
import { maintenanceRecordControllerUpdateMaintenanceRecord } from '../fn/maintenance-record/maintenance-record-controller-update-maintenance-record';
import { MaintenanceRecordControllerUpdateMaintenanceRecord$Params } from '../fn/maintenance-record/maintenance-record-controller-update-maintenance-record';
import { MaintenanceRecordDto } from '../models/maintenance-record-dto';

@Injectable({ providedIn: 'root' })
export class MaintenanceRecordService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `maintenanceRecordControllerCreateMaintenanceRecord()` */
  static readonly MaintenanceRecordControllerCreateMaintenanceRecordPath = '/maintenance-record';

  /**
   * Create a new maintenance record.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `maintenanceRecordControllerCreateMaintenanceRecord()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  maintenanceRecordControllerCreateMaintenanceRecord$Response(params: MaintenanceRecordControllerCreateMaintenanceRecord$Params, context?: HttpContext): Observable<StrictHttpResponse<MaintenanceRecordDto>> {
    return maintenanceRecordControllerCreateMaintenanceRecord(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a new maintenance record.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `maintenanceRecordControllerCreateMaintenanceRecord$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  maintenanceRecordControllerCreateMaintenanceRecord(params: MaintenanceRecordControllerCreateMaintenanceRecord$Params, context?: HttpContext): Observable<MaintenanceRecordDto> {
    return this.maintenanceRecordControllerCreateMaintenanceRecord$Response(params, context).pipe(
      map((r: StrictHttpResponse<MaintenanceRecordDto>): MaintenanceRecordDto => r.body)
    );
  }

  /** Path part for operation `maintenanceRecordControllerGetMaintenanceRecord()` */
  static readonly MaintenanceRecordControllerGetMaintenanceRecordPath = '/maintenance-record/{id}';

  /**
   * Get maintenance record by ID.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `maintenanceRecordControllerGetMaintenanceRecord()` instead.
   *
   * This method doesn't expect any request body.
   */
  maintenanceRecordControllerGetMaintenanceRecord$Response(params: MaintenanceRecordControllerGetMaintenanceRecord$Params, context?: HttpContext): Observable<StrictHttpResponse<MaintenanceRecordDto>> {
    return maintenanceRecordControllerGetMaintenanceRecord(this.http, this.rootUrl, params, context);
  }

  /**
   * Get maintenance record by ID.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `maintenanceRecordControllerGetMaintenanceRecord$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  maintenanceRecordControllerGetMaintenanceRecord(params: MaintenanceRecordControllerGetMaintenanceRecord$Params, context?: HttpContext): Observable<MaintenanceRecordDto> {
    return this.maintenanceRecordControllerGetMaintenanceRecord$Response(params, context).pipe(
      map((r: StrictHttpResponse<MaintenanceRecordDto>): MaintenanceRecordDto => r.body)
    );
  }

  /** Path part for operation `maintenanceRecordControllerUpdateMaintenanceRecord()` */
  static readonly MaintenanceRecordControllerUpdateMaintenanceRecordPath = '/maintenance-record/{id}';

  /**
   * Update a maintenance record.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `maintenanceRecordControllerUpdateMaintenanceRecord()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  maintenanceRecordControllerUpdateMaintenanceRecord$Response(params: MaintenanceRecordControllerUpdateMaintenanceRecord$Params, context?: HttpContext): Observable<StrictHttpResponse<MaintenanceRecordDto>> {
    return maintenanceRecordControllerUpdateMaintenanceRecord(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a maintenance record.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `maintenanceRecordControllerUpdateMaintenanceRecord$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  maintenanceRecordControllerUpdateMaintenanceRecord(params: MaintenanceRecordControllerUpdateMaintenanceRecord$Params, context?: HttpContext): Observable<MaintenanceRecordDto> {
    return this.maintenanceRecordControllerUpdateMaintenanceRecord$Response(params, context).pipe(
      map((r: StrictHttpResponse<MaintenanceRecordDto>): MaintenanceRecordDto => r.body)
    );
  }

  /** Path part for operation `maintenanceRecordControllerDeleteMaintenanceRecord()` */
  static readonly MaintenanceRecordControllerDeleteMaintenanceRecordPath = '/maintenance-record/{id}';

  /**
   * Delete a maintenance record.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `maintenanceRecordControllerDeleteMaintenanceRecord()` instead.
   *
   * This method doesn't expect any request body.
   */
  maintenanceRecordControllerDeleteMaintenanceRecord$Response(params: MaintenanceRecordControllerDeleteMaintenanceRecord$Params, context?: HttpContext): Observable<StrictHttpResponse<MaintenanceRecordDto>> {
    return maintenanceRecordControllerDeleteMaintenanceRecord(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a maintenance record.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `maintenanceRecordControllerDeleteMaintenanceRecord$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  maintenanceRecordControllerDeleteMaintenanceRecord(params: MaintenanceRecordControllerDeleteMaintenanceRecord$Params, context?: HttpContext): Observable<MaintenanceRecordDto> {
    return this.maintenanceRecordControllerDeleteMaintenanceRecord$Response(params, context).pipe(
      map((r: StrictHttpResponse<MaintenanceRecordDto>): MaintenanceRecordDto => r.body)
    );
  }

  /** Path part for operation `maintenanceRecordControllerGetMaintenanceRecordsByCarId()` */
  static readonly MaintenanceRecordControllerGetMaintenanceRecordsByCarIdPath = '/maintenance-record/car/{carId}';

  /**
   * Get all maintenance records for a specific car.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `maintenanceRecordControllerGetMaintenanceRecordsByCarId()` instead.
   *
   * This method doesn't expect any request body.
   */
  maintenanceRecordControllerGetMaintenanceRecordsByCarId$Response(params: MaintenanceRecordControllerGetMaintenanceRecordsByCarId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MaintenanceRecordDto>>> {
    return maintenanceRecordControllerGetMaintenanceRecordsByCarId(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all maintenance records for a specific car.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `maintenanceRecordControllerGetMaintenanceRecordsByCarId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  maintenanceRecordControllerGetMaintenanceRecordsByCarId(params: MaintenanceRecordControllerGetMaintenanceRecordsByCarId$Params, context?: HttpContext): Observable<Array<MaintenanceRecordDto>> {
    return this.maintenanceRecordControllerGetMaintenanceRecordsByCarId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MaintenanceRecordDto>>): Array<MaintenanceRecordDto> => r.body)
    );
  }

}
