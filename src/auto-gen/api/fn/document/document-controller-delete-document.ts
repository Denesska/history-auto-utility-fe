/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DocumentDto } from '../../models/document-dto';

export interface DocumentControllerDeleteDocument$Params {
  id: string;
}

export function documentControllerDeleteDocument(http: HttpClient, rootUrl: string, params: DocumentControllerDeleteDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<DocumentDto>> {
  const rb = new RequestBuilder(rootUrl, documentControllerDeleteDocument.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
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

documentControllerDeleteDocument.PATH = '/document/{id}';
