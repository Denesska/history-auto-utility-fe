/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AddCarDto } from '../../models/add-car-dto';
import { CarDto } from '../../models/car-dto';

export interface CarControllerCreateCar$Params {
      body: AddCarDto
}

export function carControllerCreateCar(http: HttpClient, rootUrl: string, params: CarControllerCreateCar$Params, context?: HttpContext): Observable<StrictHttpResponse<CarDto>> {
  const rb = new RequestBuilder(rootUrl, carControllerCreateCar.PATH, 'post');
  if (params) {
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

carControllerCreateCar.PATH = '/car';
