/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DocumentDto } from '../../models/document-dto';
import { UpdateDocumentDto } from '../../models/update-document-dto';

export interface DocumentControllerUpdateDocument$Params {
  id: string;
      body: UpdateDocumentDto
}

export function documentControllerUpdateDocument(http: HttpClient, rootUrl: string, params: DocumentControllerUpdateDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<DocumentDto>> {
  const rb = new RequestBuilder(rootUrl, documentControllerUpdateDocument.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DocumentDto>;
    })
  );
}

documentControllerUpdateDocument.PATH = '/document/{id}';
