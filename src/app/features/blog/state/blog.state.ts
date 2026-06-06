import { Injectable, inject } from '@angular/core';
import { BlogEntryDto, VehicleCategoryDto } from '@hau/autogenapi/models';
import { BlogService } from '@hau/autogenapi/services';
import { BlogActions } from '@hau/features/blog/state/blog.actions';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap, take } from 'rxjs';

export interface BlogStateModel {
  list:       { loading: boolean; items: BlogEntryDto[] };
  entry:      { loading: boolean; item: BlogEntryDto | null };
  categories: VehicleCategoryDto[];
  saving:     boolean;
}

const defaults: BlogStateModel = {
  list:       { loading: false, items: [] },
  entry:      { loading: false, item: null },
  categories: [],
  saving:     false,
};

@State<BlogStateModel>({ name: 'blog', defaults })
@Injectable()
export class BlogState {
  private readonly _blogService = inject(BlogService);

  @Selector()
  static entries(s: BlogStateModel): BlogEntryDto[] { return s.list.items; }

  @Selector()
  static listLoading(s: BlogStateModel): boolean { return s.list.loading; }

  @Selector()
  static entry(s: BlogStateModel): BlogEntryDto | null { return s.entry.item; }

  @Selector()
  static entryLoading(s: BlogStateModel): boolean { return s.entry.loading; }

  @Selector()
  static vehicleCategories(s: BlogStateModel): VehicleCategoryDto[] { return s.categories; }

  @Selector()
  static saving(s: BlogStateModel): boolean { return s.saving; }

  @Action(BlogActions.LoadEntries)
  loadEntries({ patchState, dispatch }: StateContext<BlogStateModel>, { filters }: BlogActions.LoadEntries) {
    patchState({ list: { loading: true, items: [] } });
    return this._blogService.getEntries(filters).pipe(
      take(1),
      tap({
        next: entries => dispatch(new BlogActions.LoadEntriesSuccess(entries)),
        error: err   => dispatch(new BlogActions.LoadEntriesError(err)),
      }),
    );
  }

  @Action(BlogActions.LoadEntriesSuccess)
  loadEntriesSuccess({ patchState }: StateContext<BlogStateModel>, { entries }: BlogActions.LoadEntriesSuccess) {
    patchState({ list: { loading: false, items: entries } });
  }

  @Action(BlogActions.LoadEntriesError)
  loadEntriesError({ patchState }: StateContext<BlogStateModel>) {
    patchState({ list: { loading: false, items: [] } });
  }

  @Action(BlogActions.LoadEntry)
  loadEntry({ patchState, dispatch }: StateContext<BlogStateModel>, { id }: BlogActions.LoadEntry) {
    patchState({ entry: { loading: true, item: null } });
    return this._blogService.getEntry({ id: String(id) }).pipe(
      take(1),
      tap({
        next: entry => dispatch(new BlogActions.LoadEntrySuccess(entry)),
        error: err  => dispatch(new BlogActions.LoadEntryError(err)),
      }),
    );
  }

  @Action(BlogActions.LoadEntrySuccess)
  loadEntrySuccess({ patchState }: StateContext<BlogStateModel>, { entry }: BlogActions.LoadEntrySuccess) {
    patchState({ entry: { loading: false, item: entry } });
  }

  @Action(BlogActions.LoadEntryError)
  loadEntryError({ patchState }: StateContext<BlogStateModel>) {
    patchState({ entry: { loading: false, item: null } });
  }

  @Action(BlogActions.CreateEntry)
  createEntry({ patchState, dispatch }: StateContext<BlogStateModel>, { dto }: BlogActions.CreateEntry) {
    patchState({ saving: true });
    return this._blogService.createEntry({ body: dto }).pipe(
      take(1),
      tap({
        next: entry => dispatch(new BlogActions.CreateEntrySuccess(entry)),
        error: err  => dispatch(new BlogActions.CreateEntryError(err)),
      }),
    );
  }

  @Action(BlogActions.CreateEntrySuccess)
  createEntrySuccess({ getState, patchState }: StateContext<BlogStateModel>, { entry }: BlogActions.CreateEntrySuccess) {
    const items = [entry, ...getState().list.items];
    patchState({ saving: false, list: { loading: false, items } });
  }

  @Action(BlogActions.CreateEntryError)
  createEntryError({ patchState }: StateContext<BlogStateModel>) {
    patchState({ saving: false });
  }

  @Action(BlogActions.UpdateEntry)
  updateEntry({ patchState, dispatch }: StateContext<BlogStateModel>, { id, dto }: BlogActions.UpdateEntry) {
    patchState({ saving: true });
    return this._blogService.updateEntry({ id: String(id), body: dto }).pipe(
      take(1),
      tap({
        next: entry => dispatch(new BlogActions.UpdateEntrySuccess(entry)),
        error: err  => dispatch(new BlogActions.UpdateEntryError(err)),
      }),
    );
  }

  @Action(BlogActions.UpdateEntrySuccess)
  updateEntrySuccess({ getState, patchState }: StateContext<BlogStateModel>, { entry }: BlogActions.UpdateEntrySuccess) {
    const items = getState().list.items.map(e => e.id === entry.id ? entry : e);
    patchState({ saving: false, list: { loading: false, items }, entry: { loading: false, item: entry } });
  }

  @Action(BlogActions.UpdateEntryError)
  updateEntryError({ patchState }: StateContext<BlogStateModel>) {
    patchState({ saving: false });
  }

  @Action(BlogActions.DeleteEntry)
  deleteEntry({ patchState, dispatch }: StateContext<BlogStateModel>, { id }: BlogActions.DeleteEntry) {
    return this._blogService.deleteEntry({ id: String(id) }).pipe(
      take(1),
      tap({
        next: () => dispatch(new BlogActions.DeleteEntrySuccess(id)),
        error: err => dispatch(new BlogActions.DeleteEntryError(err)),
      }),
    );
  }

  @Action(BlogActions.DeleteEntrySuccess)
  deleteEntrySuccess({ getState, patchState }: StateContext<BlogStateModel>, { id }: BlogActions.DeleteEntrySuccess) {
    const items = getState().list.items.filter(e => e.id !== id);
    patchState({ list: { loading: false, items } });
  }

  @Action(BlogActions.DeleteEntryError)
  deleteEntryError(_: StateContext<BlogStateModel>, { err }: BlogActions.DeleteEntryError) {
    console.error('Error deleting blog entry:', err);
  }

  @Action(BlogActions.TogglePin)
  togglePin({ dispatch }: StateContext<BlogStateModel>, { id }: BlogActions.TogglePin) {
    return this._blogService.togglePin({ id: String(id) }).pipe(
      take(1),
      tap({
        next: entry => dispatch(new BlogActions.TogglePinSuccess(entry)),
        error: err  => dispatch(new BlogActions.TogglePinError(err)),
      }),
    );
  }

  @Action(BlogActions.TogglePinSuccess)
  togglePinSuccess({ getState, patchState }: StateContext<BlogStateModel>, { entry }: BlogActions.TogglePinSuccess) {
    const items = getState().list.items.map(e => e.id === entry.id ? entry : e);
    patchState({ list: { loading: false, items } });
  }

  @Action(BlogActions.TogglePinError)
  togglePinError(_: StateContext<BlogStateModel>, { err }: BlogActions.TogglePinError) {
    console.error('Error toggling blog pin:', err);
  }

  @Action(BlogActions.LoadVehicleCategories)
  loadVehicleCategories({ patchState, dispatch }: StateContext<BlogStateModel>) {
    return this._blogService.getVehicleCategories().pipe(
      take(1),
      tap({
        next: cats => dispatch(new BlogActions.LoadVehicleCategoriesSuccess(cats)),
        error: err => dispatch(new BlogActions.LoadVehicleCategoriesError(err)),
      }),
    );
  }

  @Action(BlogActions.LoadVehicleCategoriesSuccess)
  loadVehicleCategoriesSuccess({ patchState }: StateContext<BlogStateModel>, { categories }: BlogActions.LoadVehicleCategoriesSuccess) {
    patchState({ categories });
  }

  @Action(BlogActions.LoadVehicleCategoriesError)
  loadVehicleCategoriesError(_: StateContext<BlogStateModel>, { err }: BlogActions.LoadVehicleCategoriesError) {
    console.error('Error loading vehicle categories:', err);
  }
}
