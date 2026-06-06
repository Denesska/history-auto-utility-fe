/* eslint-disable */
/* Wrapper services for ng-openapi-gen v2 API functions */

import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import {
  documentControllerCreateDocument,
  documentControllerGetDocument,
  documentControllerUpdateDocument,
  documentControllerDeleteDocument,
  documentControllerGetDocumentsByCarId,
  DocumentControllerCreateDocument$Params,
  DocumentControllerGetDocument$Params,
  DocumentControllerUpdateDocument$Params,
  DocumentControllerDeleteDocument$Params,
  DocumentControllerGetDocumentsByCarId$Params,
} from '../functions';
import { DocumentDto, CreateDocumentDto, UpdateDocumentDto, ExtractionResultDto } from '../models';

@Injectable({ providedIn: 'root' })
export class DocumentService {
  constructor(
    private config: ApiConfiguration,
    private http: HttpClient
  ) {
  }

  documentControllerCreateDocument(params: DocumentControllerCreateDocument$Params, context?: HttpContext): Observable<DocumentDto> {
    return documentControllerCreateDocument(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<DocumentDto>) => r.body as DocumentDto)
    );
  }

  documentControllerGetDocument(params: DocumentControllerGetDocument$Params, context?: HttpContext): Observable<DocumentDto> {
    return documentControllerGetDocument(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<DocumentDto>) => r.body as DocumentDto)
    );
  }

  documentControllerUpdateDocument(params: DocumentControllerUpdateDocument$Params, context?: HttpContext): Observable<DocumentDto> {
    return documentControllerUpdateDocument(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<DocumentDto>) => r.body as DocumentDto)
    );
  }

  documentControllerDeleteDocument(params: DocumentControllerDeleteDocument$Params, context?: HttpContext): Observable<DocumentDto> {
    return documentControllerDeleteDocument(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<DocumentDto>) => r.body as DocumentDto)
    );
  }

  documentControllerGetDocumentsByCarId(params: DocumentControllerGetDocumentsByCarId$Params, context?: HttpContext): Observable<Array<DocumentDto>> {
    return documentControllerGetDocumentsByCarId(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<Array<DocumentDto>>) => r.body as Array<DocumentDto>)
    );
  }

  documentControllerUploadFile(id: number, file: File): Observable<DocumentDto> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<DocumentDto>(`${this.config.rootUrl}/api/document/${id}/upload`, formData);
  }

  documentControllerExtractDocument(file: File): Observable<ExtractionResultDto> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<ExtractionResultDto>(`${this.config.rootUrl}/api/document/extract`, formData);
  }
}
