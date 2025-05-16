/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CarDto } from '../../models/car-dto';

export interface CarControllerDeleteCar$Params {
  id: string;
}

export function carControllerDeleteCar(http: HttpClient, rootUrl: string, params: CarControllerDeleteCar$Params, context?: HttpContext): Observable<StrictHttpResponse<CarDto>> {
  const rb = new RequestBuilder(rootUrl, carControllerDeleteCar.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CarDto>;
    })
  );
}

carControllerDeleteCar.PATH = '/car/{id}';
