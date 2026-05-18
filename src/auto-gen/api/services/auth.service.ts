/* eslint-disable */
/* Wrapper services for ng-openapi-gen v2 API functions */

import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import {
  authControllerLogin,
  authControllerGoogleAuthRedirect,
  authControllerRefreshAccessToken,
  authControllerGetProfile,
  authControllerLogout,
  AuthControllerLogin$Params,
  AuthControllerGoogleAuthRedirect$Params,
  AuthControllerRefreshAccessToken$Params,
  AuthControllerGetProfile$Params,
  AuthControllerLogout$Params,
} from '../functions';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private config: ApiConfiguration,
    private http: HttpClient
  ) {
  }

  authControllerLogin(params: AuthControllerLogin$Params, context?: HttpContext): Observable<any> {
    return authControllerLogin(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  authControllerGoogleAuthRedirect(params?: AuthControllerGoogleAuthRedirect$Params, context?: HttpContext): Observable<any> {
    return authControllerGoogleAuthRedirect(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  authControllerRefreshAccessToken(params?: AuthControllerRefreshAccessToken$Params, context?: HttpContext): Observable<any> {
    return authControllerRefreshAccessToken(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  authControllerGetProfile(params?: AuthControllerGetProfile$Params, context?: HttpContext): Observable<any> {
    return authControllerGetProfile(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  authControllerLogout(params?: AuthControllerLogout$Params, context?: HttpContext): Observable<any> {
    return authControllerLogout(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }
}
