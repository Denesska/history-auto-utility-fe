/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CarDto } from '../../models/car-dto';

export interface CarControllerGetCarsByUser$Params {
  'user-id': string;
}

export function carControllerGetCarsByUser(http: HttpClient, rootUrl: string, params: CarControllerGetCarsByUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CarDto>>> {
  const rb = new RequestBuilder(rootUrl, carControllerGetCarsByUser.PATH, 'get');
  if (params) {
    rb.path('user-id', params['user-id'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<CarDto>>;
    })
  );
}

carControllerGetCarsByUser.PATH = '/car/user/{user}-id';
