/* eslint-disable */
/* Wrapper services for ng-openapi-gen v2 API functions */

import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import {
  carControllerGetAllCars,
  carControllerGetCar,
  carControllerCreateCar,
  carControllerUpdateCar,
  carControllerDeleteCar,
  carControllerDeletePhoto,
  carControllerGetCarsByUser,
  CarControllerGetAllCars$Params,
  CarControllerGetCar$Params,
  CarControllerCreateCar$Params,
  CarControllerUpdateCar$Params,
  CarControllerDeleteCar$Params,
  CarControllerDeletePhoto$Params,
  CarControllerGetCarsByUser$Params,
} from '../functions';
import { CarDto, AddCarDto, UpdateCarDto } from '../models';

@Injectable({ providedIn: 'root' })
export class CarService {
  constructor(
    private config: ApiConfiguration,
    private http: HttpClient
  ) {
  }

  carControllerGetAllCars(params?: CarControllerGetAllCars$Params, context?: HttpContext): Observable<Array<CarDto>> {
    return carControllerGetAllCars(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<Array<CarDto>>) => r.body as Array<CarDto>)
    );
  }

  carControllerGetCar(params: CarControllerGetCar$Params, context?: HttpContext): Observable<CarDto> {
    return carControllerGetCar(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<CarDto>) => r.body as CarDto)
    );
  }

  carControllerCreateCar(params: CarControllerCreateCar$Params, context?: HttpContext): Observable<CarDto> {
    return carControllerCreateCar(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<CarDto>) => r.body as CarDto)
    );
  }

  carControllerUpdateCar(params: CarControllerUpdateCar$Params, context?: HttpContext): Observable<CarDto> {
    return carControllerUpdateCar(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<CarDto>) => r.body as CarDto)
    );
  }

  carControllerDeleteCar(params: CarControllerDeleteCar$Params, context?: HttpContext): Observable<CarDto> {
    return carControllerDeleteCar(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<CarDto>) => r.body as CarDto)
    );
  }

  carControllerDeletePhoto(params: CarControllerDeletePhoto$Params, context?: HttpContext): Observable<void> {
    return carControllerDeletePhoto(this.http, this.config.rootUrl, params, context).pipe(
      map(() => void 0)
    );
  }

  carControllerGetCarsByUser(params: CarControllerGetCarsByUser$Params, context?: HttpContext): Observable<Array<CarDto>> {
    return carControllerGetCarsByUser(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<Array<CarDto>>) => r.body as Array<CarDto>)
    );
  }
}
