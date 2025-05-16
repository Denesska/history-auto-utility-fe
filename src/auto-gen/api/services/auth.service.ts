/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { authControllerGetProfile } from '../fn/auth/auth-controller-get-profile';
import { AuthControllerGetProfile$Params } from '../fn/auth/auth-controller-get-profile';
import { authControllerGoogleAuthRedirect } from '../fn/auth/auth-controller-google-auth-redirect';
import { AuthControllerGoogleAuthRedirect$Params } from '../fn/auth/auth-controller-google-auth-redirect';
import { authControllerLogin } from '../fn/auth/auth-controller-login';
import { AuthControllerLogin$Params } from '../fn/auth/auth-controller-login';
import { authControllerLogout } from '../fn/auth/auth-controller-logout';
import { AuthControllerLogout$Params } from '../fn/auth/auth-controller-logout';
import { authControllerRefreshAccessToken } from '../fn/auth/auth-controller-refresh-access-token';
import { AuthControllerRefreshAccessToken$Params } from '../fn/auth/auth-controller-refresh-access-token';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `authControllerLogin()` */
  static readonly AuthControllerLoginPath = '/auth/google';

  /**
   * Login user and set access token in HTTP-only cookie.
   *
   * Authenticates a user via Google and stores the access token in a secure HTTP-only cookie.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerLogin()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerLogin$Response(params?: AuthControllerLogin$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return authControllerLogin(this.http, this.rootUrl, params, context);
  }

  /**
   * Login user and set access token in HTTP-only cookie.
   *
   * Authenticates a user via Google and stores the access token in a secure HTTP-only cookie.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerLogin$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerLogin(params?: AuthControllerLogin$Params, context?: HttpContext): Observable<void> {
    return this.authControllerLogin$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `authControllerGoogleAuthRedirect()` */
  static readonly AuthControllerGoogleAuthRedirectPath = '/auth/google/redirect';

  /**
   * Handle Google OAuth redirection.
   *
   * Processes the Google authentication response and sets access token in HTTP-only cookie.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerGoogleAuthRedirect()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerGoogleAuthRedirect$Response(params?: AuthControllerGoogleAuthRedirect$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return authControllerGoogleAuthRedirect(this.http, this.rootUrl, params, context);
  }

  /**
   * Handle Google OAuth redirection.
   *
   * Processes the Google authentication response and sets access token in HTTP-only cookie.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerGoogleAuthRedirect$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerGoogleAuthRedirect(params?: AuthControllerGoogleAuthRedirect$Params, context?: HttpContext): Observable<void> {
    return this.authControllerGoogleAuthRedirect$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `authControllerRefreshAccessToken()` */
  static readonly AuthControllerRefreshAccessTokenPath = '/auth/refresh';

  /**
   * Refresh access token using refresh token.
   *
   * Generates a new access token if the refresh token is valid.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerRefreshAccessToken()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerRefreshAccessToken$Response(params?: AuthControllerRefreshAccessToken$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return authControllerRefreshAccessToken(this.http, this.rootUrl, params, context);
  }

  /**
   * Refresh access token using refresh token.
   *
   * Generates a new access token if the refresh token is valid.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerRefreshAccessToken$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerRefreshAccessToken(params?: AuthControllerRefreshAccessToken$Params, context?: HttpContext): Observable<void> {
    return this.authControllerRefreshAccessToken$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `authControllerGetProfile()` */
  static readonly AuthControllerGetProfilePath = '/auth/me';

  /**
   * Get user details from access token.
   *
   * Validates the access token stored in HTTP-only cookie and returns user information.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerGetProfile()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerGetProfile$Response(params?: AuthControllerGetProfile$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return authControllerGetProfile(this.http, this.rootUrl, params, context);
  }

  /**
   * Get user details from access token.
   *
   * Validates the access token stored in HTTP-only cookie and returns user information.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerGetProfile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerGetProfile(params?: AuthControllerGetProfile$Params, context?: HttpContext): Observable<void> {
    return this.authControllerGetProfile$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `authControllerLogout()` */
  static readonly AuthControllerLogoutPath = '/auth/logout';

  /**
   * Logout user and clear authentication tokens.
   *
   * Removes access token from cookies and invalidates refresh token in the database.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerLogout()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerLogout$Response(params?: AuthControllerLogout$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return authControllerLogout(this.http, this.rootUrl, params, context);
  }

  /**
   * Logout user and clear authentication tokens.
   *
   * Removes access token from cookies and invalidates refresh token in the database.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerLogout$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerLogout(params?: AuthControllerLogout$Params, context?: HttpContext): Observable<void> {
    return this.authControllerLogout$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
