import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

export interface CarAccessControllerLeaveAccess$Params {
  carId: number;
}

export function carAccessControllerLeaveAccess(http: HttpClient, rootUrl: string, params: CarAccessControllerLeaveAccess$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, carAccessControllerLeaveAccess.PATH, 'delete');
  rb.path('carId', params.carId, {});
  return http.request(rb.build({ responseType: 'text', accept: '*/*', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<void>),
  );
}

carAccessControllerLeaveAccess.PATH = '/api/car/{carId}/access/leave';
