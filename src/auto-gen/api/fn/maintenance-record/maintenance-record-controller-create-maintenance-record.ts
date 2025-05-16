/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateMaintenanceRecordDto } from '../../models/create-maintenance-record-dto';
import { MaintenanceRecordDto } from '../../models/maintenance-record-dto';

export interface MaintenanceRecordControllerCreateMaintenanceRecord$Params {
      body: CreateMaintenanceRecordDto
}

export function maintenanceRecordControllerCreateMaintenanceRecord(http: HttpClient, rootUrl: string, params: MaintenanceRecordControllerCreateMaintenanceRecord$Params, context?: HttpContext): Observable<StrictHttpResponse<MaintenanceRecordDto>> {
  const rb = new RequestBuilder(rootUrl, maintenanceRecordControllerCreateMaintenanceRecord.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<MaintenanceRecordDto>;
    })
  );
}

maintenanceRecordControllerCreateMaintenanceRecord.PATH = '/maintenance-record';
