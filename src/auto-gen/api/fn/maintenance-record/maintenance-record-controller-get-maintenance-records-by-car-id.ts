/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MaintenanceRecordDto } from '../../models/maintenance-record-dto';

export interface MaintenanceRecordControllerGetMaintenanceRecordsByCarId$Params {
  carId: string;
}

export function maintenanceRecordControllerGetMaintenanceRecordsByCarId(http: HttpClient, rootUrl: string, params: MaintenanceRecordControllerGetMaintenanceRecordsByCarId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MaintenanceRecordDto>>> {
  const rb = new RequestBuilder(rootUrl, maintenanceRecordControllerGetMaintenanceRecordsByCarId.PATH, 'get');
  if (params) {
    rb.path('carId', params.carId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<MaintenanceRecordDto>>;
    })
  );
}

maintenanceRecordControllerGetMaintenanceRecordsByCarId.PATH = '/maintenance-record/car/{carId}';
