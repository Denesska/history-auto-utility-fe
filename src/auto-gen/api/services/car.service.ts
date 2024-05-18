/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { carControllerCreateCar } from '../fn/car/car-controller-create-car';
import { CarControllerCreateCar$Params } from '../fn/car/car-controller-create-car';
import { carControllerDeleteCar } from '../fn/car/car-controller-delete-car';
import { CarControllerDeleteCar$Params } from '../fn/car/car-controller-delete-car';
import { carControllerGetAllCars } from '../fn/car/car-controller-get-all-cars';
import { CarControllerGetAllCars$Params } from '../fn/car/car-controller-get-all-cars';
import { carControllerGetCar } from '../fn/car/car-controller-get-car';
import { CarControllerGetCar$Params } from '../fn/car/car-controller-get-car';
import { carControllerGetCarsByUser } from '../fn/car/car-controller-get-cars-by-user';
import { CarControllerGetCarsByUser$Params } from '../fn/car/car-controller-get-cars-by-user';
import { carControllerUpdateCar } from '../fn/car/car-controller-update-car';
import { CarControllerUpdateCar$Params } from '../fn/car/car-controller-update-car';
import { CarDto } from '../models/car-dto';

@Injectable({ providedIn: 'root' })
export class CarService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `carControllerGetAllCars()` */
  static readonly CarControllerGetAllCarsPath = '/car';

  /**
   * Get all cars.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `carControllerGetAllCars()` instead.
   *
   * This method doesn't expect any request body.
   */
  carControllerGetAllCars$Response(params?: CarControllerGetAllCars$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CarDto>>> {
    return carControllerGetAllCars(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all cars.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `carControllerGetAllCars$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  carControllerGetAllCars(params?: CarControllerGetAllCars$Params, context?: HttpContext): Observable<Array<CarDto>> {
    return this.carControllerGetAllCars$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CarDto>>): Array<CarDto> => r.body)
    );
  }

  /** Path part for operation `carControllerCreateCar()` */
  static readonly CarControllerCreateCarPath = '/car';

  /**
   * Create a new car.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `carControllerCreateCar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  carControllerCreateCar$Response(params: CarControllerCreateCar$Params, context?: HttpContext): Observable<StrictHttpResponse<CarDto>> {
    return carControllerCreateCar(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a new car.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `carControllerCreateCar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  carControllerCreateCar(params: CarControllerCreateCar$Params, context?: HttpContext): Observable<CarDto> {
    return this.carControllerCreateCar$Response(params, context).pipe(
      map((r: StrictHttpResponse<CarDto>): CarDto => r.body)
    );
  }

  /** Path part for operation `carControllerGetCar()` */
  static readonly CarControllerGetCarPath = '/car/{id}';

  /**
   * Get car by ID.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `carControllerGetCar()` instead.
   *
   * This method doesn't expect any request body.
   */
  carControllerGetCar$Response(params: CarControllerGetCar$Params, context?: HttpContext): Observable<StrictHttpResponse<CarDto>> {
    return carControllerGetCar(this.http, this.rootUrl, params, context);
  }

  /**
   * Get car by ID.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `carControllerGetCar$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  carControllerGetCar(params: CarControllerGetCar$Params, context?: HttpContext): Observable<CarDto> {
    return this.carControllerGetCar$Response(params, context).pipe(
      map((r: StrictHttpResponse<CarDto>): CarDto => r.body)
    );
  }

  /** Path part for operation `carControllerUpdateCar()` */
  static readonly CarControllerUpdateCarPath = '/car/{id}';

  /**
   * Update a car.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `carControllerUpdateCar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  carControllerUpdateCar$Response(params: CarControllerUpdateCar$Params, context?: HttpContext): Observable<StrictHttpResponse<CarDto>> {
    return carControllerUpdateCar(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a car.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `carControllerUpdateCar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  carControllerUpdateCar(params: CarControllerUpdateCar$Params, context?: HttpContext): Observable<CarDto> {
    return this.carControllerUpdateCar$Response(params, context).pipe(
      map((r: StrictHttpResponse<CarDto>): CarDto => r.body)
    );
  }

  /** Path part for operation `carControllerDeleteCar()` */
  static readonly CarControllerDeleteCarPath = '/car/{id}';

  /**
   * Delete a car.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `carControllerDeleteCar()` instead.
   *
   * This method doesn't expect any request body.
   */
  carControllerDeleteCar$Response(params: CarControllerDeleteCar$Params, context?: HttpContext): Observable<StrictHttpResponse<CarDto>> {
    return carControllerDeleteCar(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a car.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `carControllerDeleteCar$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  carControllerDeleteCar(params: CarControllerDeleteCar$Params, context?: HttpContext): Observable<CarDto> {
    return this.carControllerDeleteCar$Response(params, context).pipe(
      map((r: StrictHttpResponse<CarDto>): CarDto => r.body)
    );
  }

  /** Path part for operation `carControllerGetCarsByUser()` */
  static readonly CarControllerGetCarsByUserPath = '/car/user/{user}-id';

  /**
   * Get all cars for a specific user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `carControllerGetCarsByUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  carControllerGetCarsByUser$Response(params: CarControllerGetCarsByUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CarDto>>> {
    return carControllerGetCarsByUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all cars for a specific user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `carControllerGetCarsByUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  carControllerGetCarsByUser(params: CarControllerGetCarsByUser$Params, context?: HttpContext): Observable<Array<CarDto>> {
    return this.carControllerGetCarsByUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CarDto>>): Array<CarDto> => r.body)
    );
  }

}
