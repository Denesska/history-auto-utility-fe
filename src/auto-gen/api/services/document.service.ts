/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { documentControllerCreateDocument } from '../fn/document/document-controller-create-document';
import { DocumentControllerCreateDocument$Params } from '../fn/document/document-controller-create-document';
import { documentControllerDeleteDocument } from '../fn/document/document-controller-delete-document';
import { DocumentControllerDeleteDocument$Params } from '../fn/document/document-controller-delete-document';
import { documentControllerGetDocument } from '../fn/document/document-controller-get-document';
import { DocumentControllerGetDocument$Params } from '../fn/document/document-controller-get-document';
import { documentControllerGetDocumentsByCarId } from '../fn/document/document-controller-get-documents-by-car-id';
import { DocumentControllerGetDocumentsByCarId$Params } from '../fn/document/document-controller-get-documents-by-car-id';
import { documentControllerUpdateDocument } from '../fn/document/document-controller-update-document';
import { DocumentControllerUpdateDocument$Params } from '../fn/document/document-controller-update-document';
import { DocumentDto } from '../models/document-dto';

@Injectable({ providedIn: 'root' })
export class DocumentService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `documentControllerCreateDocument()` */
  static readonly DocumentControllerCreateDocumentPath = '/document';

  /**
   * Create a new document.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `documentControllerCreateDocument()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  documentControllerCreateDocument$Response(params: DocumentControllerCreateDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<DocumentDto>> {
    return documentControllerCreateDocument(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a new document.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `documentControllerCreateDocument$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  documentControllerCreateDocument(params: DocumentControllerCreateDocument$Params, context?: HttpContext): Observable<DocumentDto> {
    return this.documentControllerCreateDocument$Response(params, context).pipe(
      map((r: StrictHttpResponse<DocumentDto>): DocumentDto => r.body)
    );
  }

  /** Path part for operation `documentControllerGetDocument()` */
  static readonly DocumentControllerGetDocumentPath = '/document/{id}';

  /**
   * Get document by ID.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `documentControllerGetDocument()` instead.
   *
   * This method doesn't expect any request body.
   */
  documentControllerGetDocument$Response(params: DocumentControllerGetDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<DocumentDto>> {
    return documentControllerGetDocument(this.http, this.rootUrl, params, context);
  }

  /**
   * Get document by ID.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `documentControllerGetDocument$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  documentControllerGetDocument(params: DocumentControllerGetDocument$Params, context?: HttpContext): Observable<DocumentDto> {
    return this.documentControllerGetDocument$Response(params, context).pipe(
      map((r: StrictHttpResponse<DocumentDto>): DocumentDto => r.body)
    );
  }

  /** Path part for operation `documentControllerUpdateDocument()` */
  static readonly DocumentControllerUpdateDocumentPath = '/document/{id}';

  /**
   * Update a document.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `documentControllerUpdateDocument()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  documentControllerUpdateDocument$Response(params: DocumentControllerUpdateDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<DocumentDto>> {
    return documentControllerUpdateDocument(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a document.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `documentControllerUpdateDocument$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  documentControllerUpdateDocument(params: DocumentControllerUpdateDocument$Params, context?: HttpContext): Observable<DocumentDto> {
    return this.documentControllerUpdateDocument$Response(params, context).pipe(
      map((r: StrictHttpResponse<DocumentDto>): DocumentDto => r.body)
    );
  }

  /** Path part for operation `documentControllerDeleteDocument()` */
  static readonly DocumentControllerDeleteDocumentPath = '/document/{id}';

  /**
   * Delete a document.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `documentControllerDeleteDocument()` instead.
   *
   * This method doesn't expect any request body.
   */
  documentControllerDeleteDocument$Response(params: DocumentControllerDeleteDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<DocumentDto>> {
    return documentControllerDeleteDocument(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a document.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `documentControllerDeleteDocument$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  documentControllerDeleteDocument(params: DocumentControllerDeleteDocument$Params, context?: HttpContext): Observable<DocumentDto> {
    return this.documentControllerDeleteDocument$Response(params, context).pipe(
      map((r: StrictHttpResponse<DocumentDto>): DocumentDto => r.body)
    );
  }

  /** Path part for operation `documentControllerGetDocumentsByCarId()` */
  static readonly DocumentControllerGetDocumentsByCarIdPath = '/document/car/{carId}';

  /**
   * Get all documents for a specific car.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `documentControllerGetDocumentsByCarId()` instead.
   *
   * This method doesn't expect any request body.
   */
  documentControllerGetDocumentsByCarId$Response(params: DocumentControllerGetDocumentsByCarId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DocumentDto>>> {
    return documentControllerGetDocumentsByCarId(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all documents for a specific car.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `documentControllerGetDocumentsByCarId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  documentControllerGetDocumentsByCarId(params: DocumentControllerGetDocumentsByCarId$Params, context?: HttpContext): Observable<Array<DocumentDto>> {
    return this.documentControllerGetDocumentsByCarId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<DocumentDto>>): Array<DocumentDto> => r.body)
    );
  }

}
