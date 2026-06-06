import { Injectable } from '@angular/core';
import { BlogEntryDto, VehicleCategoryDto, BlogCategoryApi, VehicleEntryCategoryApi } from '@hau/autogenapi/models';
import { CreateBlogEntryDto } from '@hau/autogenapi/models';
import { UpdateBlogEntryDto } from '@hau/autogenapi/models';
import { BlogActions } from '@hau/features/blog/state/blog.actions';
import { BlogState } from '@hau/features/blog/state/blog.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Injectable()
export class BlogFacade {
  @Select(BlogState.entries)         entries$!:          Observable<BlogEntryDto[]>;
  @Select(BlogState.listLoading)     listLoading$!:      Observable<boolean>;
  @Select(BlogState.entry)           entry$!:            Observable<BlogEntryDto | null>;
  @Select(BlogState.entryLoading)    entryLoading$!:     Observable<boolean>;
  @Select(BlogState.vehicleCategories) vehicleCategories$!: Observable<VehicleCategoryDto[]>;
  @Select(BlogState.saving)          saving$!:           Observable<boolean>;

  constructor(private readonly _store: Store) {}

  loadEntries(filters?: { category?: BlogCategoryApi; car_id?: number; vehicle_category?: VehicleEntryCategoryApi; search?: string }): void {
    this._store.dispatch(new BlogActions.LoadEntries(filters));
  }

  loadEntry(id: number): void {
    this._store.dispatch(new BlogActions.LoadEntry(id));
  }

  loadVehicleCategories(): void {
    this._store.dispatch(new BlogActions.LoadVehicleCategories());
  }

  createEntry(dto: CreateBlogEntryDto): Observable<void> {
    return this._store.dispatch(new BlogActions.CreateEntry(dto));
  }

  updateEntry(id: number, dto: UpdateBlogEntryDto): Observable<void> {
    return this._store.dispatch(new BlogActions.UpdateEntry(id, dto));
  }

  deleteEntry(id: number): Observable<void> {
    return this._store.dispatch(new BlogActions.DeleteEntry(id));
  }

  togglePin(id: number): void {
    this._store.dispatch(new BlogActions.TogglePin(id));
  }
}
