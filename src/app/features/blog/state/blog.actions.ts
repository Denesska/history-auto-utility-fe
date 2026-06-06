import { HttpErrorResponse } from '@angular/common/http';
import { BlogEntryDto, VehicleCategoryDto, BlogCategoryApi, VehicleEntryCategoryApi } from '@hau/autogenapi/models';
import { CreateBlogEntryDto } from '@hau/autogenapi/models';
import { UpdateBlogEntryDto } from '@hau/autogenapi/models';

export namespace BlogActions {

  export class LoadEntries {
    static readonly type = '[Blog] Load entries';
    constructor(readonly filters?: {
      category?: BlogCategoryApi;
      car_id?: number;
      vehicle_category?: VehicleEntryCategoryApi;
      search?: string;
    }) {}
  }

  export class LoadEntriesSuccess {
    static readonly type = '[Blog] Load entries success';
    constructor(readonly entries: BlogEntryDto[]) {}
  }

  export class LoadEntriesError {
    static readonly type = '[Blog] Load entries error';
    constructor(readonly err: HttpErrorResponse) {}
  }

  export class LoadEntry {
    static readonly type = '[Blog] Load entry';
    constructor(readonly id: number) {}
  }

  export class LoadEntrySuccess {
    static readonly type = '[Blog] Load entry success';
    constructor(readonly entry: BlogEntryDto) {}
  }

  export class LoadEntryError {
    static readonly type = '[Blog] Load entry error';
    constructor(readonly err: HttpErrorResponse) {}
  }

  export class CreateEntry {
    static readonly type = '[Blog] Create entry';
    constructor(readonly dto: CreateBlogEntryDto) {}
  }

  export class CreateEntrySuccess {
    static readonly type = '[Blog] Create entry success';
    constructor(readonly entry: BlogEntryDto) {}
  }

  export class CreateEntryError {
    static readonly type = '[Blog] Create entry error';
    constructor(readonly err: HttpErrorResponse) {}
  }

  export class UpdateEntry {
    static readonly type = '[Blog] Update entry';
    constructor(readonly id: number, readonly dto: UpdateBlogEntryDto) {}
  }

  export class UpdateEntrySuccess {
    static readonly type = '[Blog] Update entry success';
    constructor(readonly entry: BlogEntryDto) {}
  }

  export class UpdateEntryError {
    static readonly type = '[Blog] Update entry error';
    constructor(readonly err: HttpErrorResponse) {}
  }

  export class DeleteEntry {
    static readonly type = '[Blog] Delete entry';
    constructor(readonly id: number) {}
  }

  export class DeleteEntrySuccess {
    static readonly type = '[Blog] Delete entry success';
    constructor(readonly id: number) {}
  }

  export class DeleteEntryError {
    static readonly type = '[Blog] Delete entry error';
    constructor(readonly err: HttpErrorResponse) {}
  }

  export class TogglePin {
    static readonly type = '[Blog] Toggle pin';
    constructor(readonly id: number) {}
  }

  export class TogglePinSuccess {
    static readonly type = '[Blog] Toggle pin success';
    constructor(readonly entry: BlogEntryDto) {}
  }

  export class TogglePinError {
    static readonly type = '[Blog] Toggle pin error';
    constructor(readonly err: HttpErrorResponse) {}
  }

  export class LoadVehicleCategories {
    static readonly type = '[Blog] Load vehicle categories';
  }

  export class LoadVehicleCategoriesSuccess {
    static readonly type = '[Blog] Load vehicle categories success';
    constructor(readonly categories: VehicleCategoryDto[]) {}
  }

  export class LoadVehicleCategoriesError {
    static readonly type = '[Blog] Load vehicle categories error';
    constructor(readonly err: HttpErrorResponse) {}
  }

}
