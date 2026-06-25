/* eslint-disable */
/* Wrapper services for ng-openapi-gen v2 API functions */

import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import {
  carNoteControllerCreateCarNote,
  carNoteControllerGetCarNote,
  carNoteControllerUpdateCarNote,
  carNoteControllerDeleteCarNote,
  carNoteControllerGetCarNotesByCarId,
  CarNoteControllerCreateCarNote$Params,
  CarNoteControllerGetCarNote$Params,
  CarNoteControllerUpdateCarNote$Params,
  CarNoteControllerDeleteCarNote$Params,
  CarNoteControllerGetCarNotesByCarId$Params,
} from '../functions';
import { CarNoteDto } from '../models';

@Injectable({ providedIn: 'root' })
export class CarNoteService {
  constructor(
    private config: ApiConfiguration,
    private http: HttpClient
  ) {
  }

  carNoteControllerCreateCarNote(params: CarNoteControllerCreateCarNote$Params, context?: HttpContext): Observable<CarNoteDto> {
    return carNoteControllerCreateCarNote(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<CarNoteDto>) => r.body as CarNoteDto)
    );
  }

  carNoteControllerGetCarNote(params: CarNoteControllerGetCarNote$Params, context?: HttpContext): Observable<CarNoteDto> {
    return carNoteControllerGetCarNote(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<CarNoteDto>) => r.body as CarNoteDto)
    );
  }

  carNoteControllerUpdateCarNote(params: CarNoteControllerUpdateCarNote$Params, context?: HttpContext): Observable<CarNoteDto> {
    return carNoteControllerUpdateCarNote(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<CarNoteDto>) => r.body as CarNoteDto)
    );
  }

  carNoteControllerDeleteCarNote(params: CarNoteControllerDeleteCarNote$Params, context?: HttpContext): Observable<CarNoteDto> {
    return carNoteControllerDeleteCarNote(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<CarNoteDto>) => r.body as CarNoteDto)
    );
  }

  carNoteControllerGetCarNotesByCarId(params: CarNoteControllerGetCarNotesByCarId$Params, context?: HttpContext): Observable<Array<CarNoteDto>> {
    return carNoteControllerGetCarNotesByCarId(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<Array<CarNoteDto>>) => r.body as Array<CarNoteDto>)
    );
  }
}
