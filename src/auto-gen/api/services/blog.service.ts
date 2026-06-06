/* eslint-disable */
/* Wrapper service for blog API functions */

import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { BlogEntryDto, VehicleCategoryDto } from '../models/blog-entry-dto';
import { CreateBlogEntryDto } from '../models/create-blog-entry-dto';
import { UpdateBlogEntryDto } from '../models/update-blog-entry-dto';
import {
  blogControllerGetVehicleCategories, BlogControllerGetVehicleCategories$Params,
  blogControllerGetEntries, BlogControllerGetEntries$Params,
  blogControllerGetEntry, BlogControllerGetEntry$Params,
  blogControllerCreateEntry, BlogControllerCreateEntry$Params,
  blogControllerUpdateEntry, BlogControllerUpdateEntry$Params,
  blogControllerDeleteEntry, BlogControllerDeleteEntry$Params,
  blogControllerTogglePin, BlogControllerTogglePin$Params,
} from '../functions';

@Injectable({ providedIn: 'root' })
export class BlogService {
  constructor(
    private config: ApiConfiguration,
    private http: HttpClient,
  ) {}

  getVehicleCategories(params?: BlogControllerGetVehicleCategories$Params, context?: HttpContext): Observable<VehicleCategoryDto[]> {
    return blogControllerGetVehicleCategories(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<VehicleCategoryDto[]>) => r.body as VehicleCategoryDto[]),
    );
  }

  getEntries(params?: BlogControllerGetEntries$Params, context?: HttpContext): Observable<BlogEntryDto[]> {
    return blogControllerGetEntries(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<BlogEntryDto[]>) => r.body as BlogEntryDto[]),
    );
  }

  getEntry(params: BlogControllerGetEntry$Params, context?: HttpContext): Observable<BlogEntryDto> {
    return blogControllerGetEntry(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<BlogEntryDto>) => r.body as BlogEntryDto),
    );
  }

  createEntry(params: BlogControllerCreateEntry$Params, context?: HttpContext): Observable<BlogEntryDto> {
    return blogControllerCreateEntry(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<BlogEntryDto>) => r.body as BlogEntryDto),
    );
  }

  updateEntry(params: BlogControllerUpdateEntry$Params, context?: HttpContext): Observable<BlogEntryDto> {
    return blogControllerUpdateEntry(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<BlogEntryDto>) => r.body as BlogEntryDto),
    );
  }

  deleteEntry(params: BlogControllerDeleteEntry$Params, context?: HttpContext): Observable<BlogEntryDto> {
    return blogControllerDeleteEntry(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<BlogEntryDto>) => r.body as BlogEntryDto),
    );
  }

  togglePin(params: BlogControllerTogglePin$Params, context?: HttpContext): Observable<BlogEntryDto> {
    return blogControllerTogglePin(this.http, this.config.rootUrl, params, context).pipe(
      map((r: StrictHttpResponse<BlogEntryDto>) => r.body as BlogEntryDto),
    );
  }

  uploadImage(file: File): Observable<{ url: string }> {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post<{ url: string }>(`${this.config.rootUrl}/api/blog/images`, fd);
  }
}
