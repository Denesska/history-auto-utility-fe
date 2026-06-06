import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';
import { CarAccessDto } from '../../models/car-access-dto';

export interface CarAccessControllerAcceptInvitation$Params {
  carId: number;
}

export function carAccessControllerAcceptInvitation(http: HttpClient, rootUrl: string, params: CarAccessControllerAcceptInvitation$Params, context?: HttpContext): Observable<StrictHttpResponse<CarAccessDto>> {
  const rb = new RequestBuilder(rootUrl, carAccessControllerAcceptInvitation.PATH, 'post');
  rb.path('carId', params.carId, {});
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<CarAccessDto>),
  );
}

carAccessControllerAcceptInvitation.PATH = '/api/car/{carId}/access/accept';
