/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CarDto } from '../../models/car-dto';

export interface CarControllerGetAllCars$Params {
}

export function carControllerGetAllCars(http: HttpClient, rootUrl: string, params?: CarControllerGetAllCars$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CarDto>>> {
  const rb = new RequestBuilder(rootUrl, carControllerGetAllCars.PATH, 'get');
  if (params) {
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

carControllerGetAllCars.PATH = '/car';
