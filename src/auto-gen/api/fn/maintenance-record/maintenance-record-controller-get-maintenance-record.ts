/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MaintenanceRecordDto } from '../../models/maintenance-record-dto';

export interface MaintenanceRecordControllerGetMaintenanceRecord$Params {
  id: string;
}

export function maintenanceRecordControllerGetMaintenanceRecord(http: HttpClient, rootUrl: string, params: MaintenanceRecordControllerGetMaintenanceRecord$Params, context?: HttpContext): Observable<StrictHttpResponse<MaintenanceRecordDto>> {
  const rb = new RequestBuilder(rootUrl, maintenanceRecordControllerGetMaintenanceRecord.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

maintenanceRecordControllerGetMaintenanceRecord.PATH = '/maintenance-record/{id}';
