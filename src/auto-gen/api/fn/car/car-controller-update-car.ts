/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CarDto } from '../../models/car-dto';
import { UpdateCarDto } from '../../models/update-car-dto';

export interface CarControllerUpdateCar$Params {
  id: string;
      body: UpdateCarDto
}

export function carControllerUpdateCar(http: HttpClient, rootUrl: string, params: CarControllerUpdateCar$Params, context?: HttpContext): Observable<StrictHttpResponse<CarDto>> {
  const rb = new RequestBuilder(rootUrl, carControllerUpdateCar.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

carControllerUpdateCar.PATH = '/car/{id}';
