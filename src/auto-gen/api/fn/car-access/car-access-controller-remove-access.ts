import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

export interface CarAccessControllerRemoveAccess$Params {
  carId: number;
  targetUserId: number;
}

export function carAccessControllerRemoveAccess(http: HttpClient, rootUrl: string, params: CarAccessControllerRemoveAccess$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, carAccessControllerRemoveAccess.PATH, 'delete');
  rb.path('carId', params.carId, {});
  rb.path('targetUserId', params.targetUserId, {});
  return http.request(rb.build({ responseType: 'text', accept: '*/*', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<void>),
  );
}

carAccessControllerRemoveAccess.PATH = '/api/car/{carId}/access/{targetUserId}';
