import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';
import { CarAccessDto, CarAccessRole } from '../../models/car-access-dto';

export interface CarAccessControllerChangeRole$Params {
  carId: number;
  targetUserId: number;
  body: { role: CarAccessRole };
}

export function carAccessControllerChangeRole(http: HttpClient, rootUrl: string, params: CarAccessControllerChangeRole$Params, context?: HttpContext): Observable<StrictHttpResponse<CarAccessDto>> {
  const rb = new RequestBuilder(rootUrl, carAccessControllerChangeRole.PATH, 'patch');
  rb.path('carId', params.carId, {});
  rb.path('targetUserId', params.targetUserId, {});
  rb.body(params.body, 'application/json');
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<CarAccessDto>),
  );
}

carAccessControllerChangeRole.PATH = '/api/car/{carId}/access/{targetUserId}/role';
