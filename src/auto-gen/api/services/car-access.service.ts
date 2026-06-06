import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { CarAccessDto, CarAccessRole, SharedCarDto } from '../models/car-access-dto';
import {
  carAccessControllerGetAccessList, CarAccessControllerGetAccessList$Params,
  carAccessControllerInviteUser, CarAccessControllerInviteUser$Params,
  carAccessControllerRemoveAccess, CarAccessControllerRemoveAccess$Params,
  carAccessControllerChangeRole, CarAccessControllerChangeRole$Params,
} from '../functions';
import { carAccessControllerGetSharedCars } from '../fn/car-access/car-access-controller-get-shared-cars';
import { carAccessControllerAcceptInvitation, CarAccessControllerAcceptInvitation$Params } from '../fn/car-access/car-access-controller-accept-invitation';

@Injectable({ providedIn: 'root' })
export class CarAccessService {
  constructor(
    private config: ApiConfiguration,
    private http: HttpClient,
  ) {}

  getAccessList(params: CarAccessControllerGetAccessList$Params, context?: HttpContext): Observable<CarAccessDto[]> {
    return carAccessControllerGetAccessList(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<CarAccessDto[]>) => r.body as CarAccessDto[]),
    );
  }

  inviteUser(params: CarAccessControllerInviteUser$Params, context?: HttpContext): Observable<CarAccessDto> {
    return carAccessControllerInviteUser(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<CarAccessDto>) => r.body as CarAccessDto),
    );
  }

  removeAccess(params: CarAccessControllerRemoveAccess$Params, context?: HttpContext): Observable<void> {
    return carAccessControllerRemoveAccess(this.http, this.config.rootUrl, params, context).pipe(
      map(() => undefined),
    );
  }

  changeRole(params: CarAccessControllerChangeRole$Params, context?: HttpContext): Observable<CarAccessDto> {
    return carAccessControllerChangeRole(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<CarAccessDto>) => r.body as CarAccessDto),
    );
  }

  getSharedCars(context?: HttpContext): Observable<SharedCarDto[]> {
    return carAccessControllerGetSharedCars(this.http, this.config.rootUrl, context).pipe(
      map((r: StrictHttpResponse<SharedCarDto[]>) => r.body as SharedCarDto[]),
    );
  }

  acceptInvitation(params: CarAccessControllerAcceptInvitation$Params, context?: HttpContext): Observable<CarAccessDto> {
    return carAccessControllerAcceptInvitation(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<CarAccessDto>) => r.body as CarAccessDto),
    );
  }
}
