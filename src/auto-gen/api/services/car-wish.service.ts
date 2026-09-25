/* eslint-disable */
/* Wrapper services for ng-openapi-gen v2 API functions */

import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import {
  carWishControllerGetWishlist,
  carWishControllerCreateWish,
  carWishControllerUpdateWish,
  carWishControllerDeleteWish,
  carWishControllerReorderWishes,
  carWishControllerSetBudget,
  CarWishControllerGetWishlist$Params,
  CarWishControllerCreateWish$Params,
  CarWishControllerUpdateWish$Params,
  CarWishControllerDeleteWish$Params,
  CarWishControllerReorderWishes$Params,
  CarWishControllerSetBudget$Params,
} from '../functions';
import { CarWishDto, CarWishlistDto } from '../models';

@Injectable({ providedIn: 'root' })
export class CarWishService {
  constructor(
    private config: ApiConfiguration,
    private http: HttpClient
  ) {
  }

  carWishControllerGetWishlist(params: CarWishControllerGetWishlist$Params, context?: HttpContext): Observable<CarWishlistDto> {
    return carWishControllerGetWishlist(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<CarWishlistDto>) => r.body as CarWishlistDto)
    );
  }

  carWishControllerCreateWish(params: CarWishControllerCreateWish$Params, context?: HttpContext): Observable<CarWishDto> {
    return carWishControllerCreateWish(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<CarWishDto>) => r.body as CarWishDto)
    );
  }

  carWishControllerUpdateWish(params: CarWishControllerUpdateWish$Params, context?: HttpContext): Observable<CarWishDto> {
    return carWishControllerUpdateWish(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<CarWishDto>) => r.body as CarWishDto)
    );
  }

  carWishControllerDeleteWish(params: CarWishControllerDeleteWish$Params, context?: HttpContext): Observable<CarWishDto> {
    return carWishControllerDeleteWish(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<CarWishDto>) => r.body as CarWishDto)
    );
  }

  carWishControllerReorderWishes(params: CarWishControllerReorderWishes$Params, context?: HttpContext): Observable<Array<CarWishDto>> {
    return carWishControllerReorderWishes(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<Array<CarWishDto>>) => r.body as Array<CarWishDto>)
    );
  }

  carWishControllerSetBudget(params: CarWishControllerSetBudget$Params, context?: HttpContext): Observable<CarWishlistDto> {
    return carWishControllerSetBudget(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<CarWishlistDto>) => r.body as CarWishlistDto)
    );
  }
}
