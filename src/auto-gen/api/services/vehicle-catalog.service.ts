/* eslint-disable */
/* Wrapper services for ng-openapi-gen v2 API functions */

import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import {
  vehicleCatalogControllerGetMakes,
  vehicleCatalogControllerGetModels,
  vehicleCatalogControllerGetYears,
  VehicleCatalogControllerGetMakes$Params,
  VehicleCatalogControllerGetModels$Params,
  VehicleCatalogControllerGetYears$Params,
} from '../functions';
import { MakeResponseDto, ModelResponseDto, YearResponseDto } from '../models';

@Injectable({ providedIn: 'root' })
export class VehicleCatalogService {
  constructor(
    private config: ApiConfiguration,
    private http: HttpClient,
  ) {}

  getMakes(params?: VehicleCatalogControllerGetMakes$Params, context?: HttpContext): Observable<Array<MakeResponseDto>> {
    return vehicleCatalogControllerGetMakes(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<Array<MakeResponseDto>>) => r.body as Array<MakeResponseDto>),
    );
  }

  getModels(params: VehicleCatalogControllerGetModels$Params, context?: HttpContext): Observable<Array<ModelResponseDto>> {
    return vehicleCatalogControllerGetModels(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<Array<ModelResponseDto>>) => r.body as Array<ModelResponseDto>),
    );
  }

  getYears(params: VehicleCatalogControllerGetYears$Params, context?: HttpContext): Observable<Array<YearResponseDto>> {
    return vehicleCatalogControllerGetYears(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<Array<YearResponseDto>>) => r.body as Array<YearResponseDto>),
    );
  }
}
