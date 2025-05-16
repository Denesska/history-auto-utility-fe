/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MaintenanceRecordDto } from '../../models/maintenance-record-dto';
import { UpdateMaintenanceRecordDto } from '../../models/update-maintenance-record-dto';

export interface MaintenanceRecordControllerUpdateMaintenanceRecord$Params {
  id: string;
      body: UpdateMaintenanceRecordDto
}

export function maintenanceRecordControllerUpdateMaintenanceRecord(http: HttpClient, rootUrl: string, params: MaintenanceRecordControllerUpdateMaintenanceRecord$Params, context?: HttpContext): Observable<StrictHttpResponse<MaintenanceRecordDto>> {
  const rb = new RequestBuilder(rootUrl, maintenanceRecordControllerUpdateMaintenanceRecord.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
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

maintenanceRecordControllerUpdateMaintenanceRecord.PATH = '/maintenance-record/{id}';
