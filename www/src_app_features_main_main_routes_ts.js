(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_features_main_main_routes_ts"],{

/***/ 78882
/*!*****************************************************!*\
  !*** ./src/app/features/blog/state/blog.actions.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogActions: () => (/* binding */ BlogActions)
/* harmony export */ });
var BlogActions;
(function (BlogActions) {
  class LoadEntries {
    static {
      this.type = '[Blog] Load entries';
    }
    constructor(filters) {
      this.filters = filters;
    }
  }
  BlogActions.LoadEntries = LoadEntries;
  class LoadEntriesSuccess {
    static {
      this.type = '[Blog] Load entries success';
    }
    constructor(entries) {
      this.entries = entries;
    }
  }
  BlogActions.LoadEntriesSuccess = LoadEntriesSuccess;
  class LoadEntriesError {
    static {
      this.type = '[Blog] Load entries error';
    }
    constructor(err) {
      this.err = err;
    }
  }
  BlogActions.LoadEntriesError = LoadEntriesError;
  class LoadEntry {
    static {
      this.type = '[Blog] Load entry';
    }
    constructor(id) {
      this.id = id;
    }
  }
  BlogActions.LoadEntry = LoadEntry;
  class LoadEntrySuccess {
    static {
      this.type = '[Blog] Load entry success';
    }
    constructor(entry) {
      this.entry = entry;
    }
  }
  BlogActions.LoadEntrySuccess = LoadEntrySuccess;
  class LoadEntryError {
    static {
      this.type = '[Blog] Load entry error';
    }
    constructor(err) {
      this.err = err;
    }
  }
  BlogActions.LoadEntryError = LoadEntryError;
  class CreateEntry {
    static {
      this.type = '[Blog] Create entry';
    }
    constructor(dto) {
      this.dto = dto;
    }
  }
  BlogActions.CreateEntry = CreateEntry;
  class CreateEntrySuccess {
    static {
      this.type = '[Blog] Create entry success';
    }
    constructor(entry) {
      this.entry = entry;
    }
  }
  BlogActions.CreateEntrySuccess = CreateEntrySuccess;
  class CreateEntryError {
    static {
      this.type = '[Blog] Create entry error';
    }
    constructor(err) {
      this.err = err;
    }
  }
  BlogActions.CreateEntryError = CreateEntryError;
  class UpdateEntry {
    static {
      this.type = '[Blog] Update entry';
    }
    constructor(id, dto) {
      this.id = id;
      this.dto = dto;
    }
  }
  BlogActions.UpdateEntry = UpdateEntry;
  class UpdateEntrySuccess {
    static {
      this.type = '[Blog] Update entry success';
    }
    constructor(entry) {
      this.entry = entry;
    }
  }
  BlogActions.UpdateEntrySuccess = UpdateEntrySuccess;
  class UpdateEntryError {
    static {
      this.type = '[Blog] Update entry error';
    }
    constructor(err) {
      this.err = err;
    }
  }
  BlogActions.UpdateEntryError = UpdateEntryError;
  class DeleteEntry {
    static {
      this.type = '[Blog] Delete entry';
    }
    constructor(id) {
      this.id = id;
    }
  }
  BlogActions.DeleteEntry = DeleteEntry;
  class DeleteEntrySuccess {
    static {
      this.type = '[Blog] Delete entry success';
    }
    constructor(id) {
      this.id = id;
    }
  }
  BlogActions.DeleteEntrySuccess = DeleteEntrySuccess;
  class DeleteEntryError {
    static {
      this.type = '[Blog] Delete entry error';
    }
    constructor(err) {
      this.err = err;
    }
  }
  BlogActions.DeleteEntryError = DeleteEntryError;
  class TogglePin {
    static {
      this.type = '[Blog] Toggle pin';
    }
    constructor(id) {
      this.id = id;
    }
  }
  BlogActions.TogglePin = TogglePin;
  class TogglePinSuccess {
    static {
      this.type = '[Blog] Toggle pin success';
    }
    constructor(entry) {
      this.entry = entry;
    }
  }
  BlogActions.TogglePinSuccess = TogglePinSuccess;
  class TogglePinError {
    static {
      this.type = '[Blog] Toggle pin error';
    }
    constructor(err) {
      this.err = err;
    }
  }
  BlogActions.TogglePinError = TogglePinError;
  class LoadVehicleCategories {
    static {
      this.type = '[Blog] Load vehicle categories';
    }
  }
  BlogActions.LoadVehicleCategories = LoadVehicleCategories;
  class LoadVehicleCategoriesSuccess {
    static {
      this.type = '[Blog] Load vehicle categories success';
    }
    constructor(categories) {
      this.categories = categories;
    }
  }
  BlogActions.LoadVehicleCategoriesSuccess = LoadVehicleCategoriesSuccess;
  class LoadVehicleCategoriesError {
    static {
      this.type = '[Blog] Load vehicle categories error';
    }
    constructor(err) {
      this.err = err;
    }
  }
  BlogActions.LoadVehicleCategoriesError = LoadVehicleCategoriesError;
})(BlogActions || (BlogActions = {}));

/***/ },

/***/ 74371
/*!****************************************************!*\
  !*** ./src/app/features/blog/state/blog.facade.ts ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogFacade: () => (/* binding */ BlogFacade)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hau/features/blog/state/blog.actions */ 78882);
/* harmony import */ var _hau_features_blog_state_blog_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/features/blog/state/blog.state */ 42764);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 68267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94363);






class BlogFacade {
  constructor(_store) {
    this._store = _store;
  }
  loadEntries(filters) {
    this._store.dispatch(new _hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_1__.BlogActions.LoadEntries(filters));
  }
  loadEntry(id) {
    this._store.dispatch(new _hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_1__.BlogActions.LoadEntry(id));
  }
  loadVehicleCategories() {
    this._store.dispatch(new _hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_1__.BlogActions.LoadVehicleCategories());
  }
  createEntry(dto) {
    return this._store.dispatch(new _hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_1__.BlogActions.CreateEntry(dto));
  }
  updateEntry(id, dto) {
    return this._store.dispatch(new _hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_1__.BlogActions.UpdateEntry(id, dto));
  }
  deleteEntry(id) {
    return this._store.dispatch(new _hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_1__.BlogActions.DeleteEntry(id));
  }
  togglePin(id) {
    this._store.dispatch(new _hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_1__.BlogActions.TogglePin(id));
  }
  static {
    this.ɵfac = function BlogFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BlogFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Store));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: BlogFacade,
      factory: BlogFacade.ɵfac
    });
  }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_blog_state_blog_state__WEBPACK_IMPORTED_MODULE_2__.BlogState.entries)], BlogFacade.prototype, "entries$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_blog_state_blog_state__WEBPACK_IMPORTED_MODULE_2__.BlogState.listLoading)], BlogFacade.prototype, "listLoading$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_blog_state_blog_state__WEBPACK_IMPORTED_MODULE_2__.BlogState.entry)], BlogFacade.prototype, "entry$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_blog_state_blog_state__WEBPACK_IMPORTED_MODULE_2__.BlogState.entryLoading)], BlogFacade.prototype, "entryLoading$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_blog_state_blog_state__WEBPACK_IMPORTED_MODULE_2__.BlogState.vehicleCategories)], BlogFacade.prototype, "vehicleCategories$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_blog_state_blog_state__WEBPACK_IMPORTED_MODULE_2__.BlogState.saving)], BlogFacade.prototype, "saving$", void 0);

/***/ },

/***/ 42764
/*!***************************************************!*\
  !*** ./src/app/features/blog/state/blog.state.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogState: () => (/* binding */ BlogState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/autogenapi/services */ 3977);
/* harmony import */ var _hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hau/features/blog/state/blog.actions */ 78882);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ 68267);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 98764);







const defaults = {
  list: {
    loading: false,
    items: []
  },
  entry: {
    loading: false,
    item: null
  },
  categories: [],
  saving: false
};
let BlogState = class BlogState {
  constructor() {
    this._blogService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_2__.BlogService);
  }
  static entries(s) {
    return s.list.items;
  }
  static listLoading(s) {
    return s.list.loading;
  }
  static entry(s) {
    return s.entry.item;
  }
  static entryLoading(s) {
    return s.entry.loading;
  }
  static vehicleCategories(s) {
    return s.categories;
  }
  static saving(s) {
    return s.saving;
  }
  loadEntries({
    patchState,
    dispatch
  }, {
    filters
  }) {
    patchState({
      list: {
        loading: true,
        items: []
      }
    });
    return this._blogService.getEntries(filters).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)({
      next: entries => dispatch(new _hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.LoadEntriesSuccess(entries)),
      error: err => dispatch(new _hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.LoadEntriesError(err))
    }));
  }
  loadEntriesSuccess({
    patchState
  }, {
    entries
  }) {
    patchState({
      list: {
        loading: false,
        items: entries
      }
    });
  }
  loadEntriesError({
    patchState
  }) {
    patchState({
      list: {
        loading: false,
        items: []
      }
    });
  }
  loadEntry({
    patchState,
    dispatch
  }, {
    id
  }) {
    patchState({
      entry: {
        loading: true,
        item: null
      }
    });
    return this._blogService.getEntry({
      id: String(id)
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)({
      next: entry => dispatch(new _hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.LoadEntrySuccess(entry)),
      error: err => dispatch(new _hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.LoadEntryError(err))
    }));
  }
  loadEntrySuccess({
    patchState
  }, {
    entry
  }) {
    patchState({
      entry: {
        loading: false,
        item: entry
      }
    });
  }
  loadEntryError({
    patchState
  }) {
    patchState({
      entry: {
        loading: false,
        item: null
      }
    });
  }
  createEntry({
    patchState,
    dispatch
  }, {
    dto
  }) {
    patchState({
      saving: true
    });
    return this._blogService.createEntry({
      body: dto
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)({
      next: entry => dispatch(new _hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.CreateEntrySuccess(entry)),
      error: err => dispatch(new _hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.CreateEntryError(err))
    }));
  }
  createEntrySuccess({
    getState,
    patchState
  }, {
    entry
  }) {
    const items = [entry, ...getState().list.items];
    patchState({
      saving: false,
      list: {
        loading: false,
        items
      }
    });
  }
  createEntryError({
    patchState
  }) {
    patchState({
      saving: false
    });
  }
  updateEntry({
    patchState,
    dispatch
  }, {
    id,
    dto
  }) {
    patchState({
      saving: true
    });
    return this._blogService.updateEntry({
      id: String(id),
      body: dto
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)({
      next: entry => dispatch(new _hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.UpdateEntrySuccess(entry)),
      error: err => dispatch(new _hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.UpdateEntryError(err))
    }));
  }
  updateEntrySuccess({
    getState,
    patchState
  }, {
    entry
  }) {
    const items = getState().list.items.map(e => e.id === entry.id ? entry : e);
    patchState({
      saving: false,
      list: {
        loading: false,
        items
      },
      entry: {
        loading: false,
        item: entry
      }
    });
  }
  updateEntryError({
    patchState
  }) {
    patchState({
      saving: false
    });
  }
  deleteEntry({
    patchState,
    dispatch
  }, {
    id
  }) {
    return this._blogService.deleteEntry({
      id: String(id)
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)({
      next: () => dispatch(new _hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.DeleteEntrySuccess(id)),
      error: err => dispatch(new _hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.DeleteEntryError(err))
    }));
  }
  deleteEntrySuccess({
    getState,
    patchState
  }, {
    id
  }) {
    const items = getState().list.items.filter(e => e.id !== id);
    patchState({
      list: {
        loading: false,
        items
      }
    });
  }
  deleteEntryError(_, {
    err
  }) {
    console.error('Error deleting blog entry:', err);
  }
  togglePin({
    dispatch
  }, {
    id
  }) {
    return this._blogService.togglePin({
      id: String(id)
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)({
      next: entry => dispatch(new _hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.TogglePinSuccess(entry)),
      error: err => dispatch(new _hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.TogglePinError(err))
    }));
  }
  togglePinSuccess({
    getState,
    patchState
  }, {
    entry
  }) {
    const items = getState().list.items.map(e => e.id === entry.id ? entry : e);
    patchState({
      list: {
        loading: false,
        items
      }
    });
  }
  togglePinError(_, {
    err
  }) {
    console.error('Error toggling blog pin:', err);
  }
  loadVehicleCategories({
    patchState,
    dispatch
  }) {
    return this._blogService.getVehicleCategories().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)({
      next: cats => dispatch(new _hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.LoadVehicleCategoriesSuccess(cats)),
      error: err => dispatch(new _hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.LoadVehicleCategoriesError(err))
    }));
  }
  loadVehicleCategoriesSuccess({
    patchState
  }, {
    categories
  }) {
    patchState({
      categories
    });
  }
  loadVehicleCategoriesError(_, {
    err
  }) {
    console.error('Error loading vehicle categories:', err);
  }
  static {
    this.ɵfac = function BlogState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BlogState)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: BlogState,
      factory: BlogState.ɵfac
    });
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.LoadEntries)], BlogState.prototype, "loadEntries", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.LoadEntriesSuccess)], BlogState.prototype, "loadEntriesSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.LoadEntriesError)], BlogState.prototype, "loadEntriesError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.LoadEntry)], BlogState.prototype, "loadEntry", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.LoadEntrySuccess)], BlogState.prototype, "loadEntrySuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.LoadEntryError)], BlogState.prototype, "loadEntryError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.CreateEntry)], BlogState.prototype, "createEntry", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.CreateEntrySuccess)], BlogState.prototype, "createEntrySuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.CreateEntryError)], BlogState.prototype, "createEntryError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.UpdateEntry)], BlogState.prototype, "updateEntry", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.UpdateEntrySuccess)], BlogState.prototype, "updateEntrySuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.UpdateEntryError)], BlogState.prototype, "updateEntryError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.DeleteEntry)], BlogState.prototype, "deleteEntry", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.DeleteEntrySuccess)], BlogState.prototype, "deleteEntrySuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.DeleteEntryError)], BlogState.prototype, "deleteEntryError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.TogglePin)], BlogState.prototype, "togglePin", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.TogglePinSuccess)], BlogState.prototype, "togglePinSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.TogglePinError)], BlogState.prototype, "togglePinError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.LoadVehicleCategories)], BlogState.prototype, "loadVehicleCategories", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.LoadVehicleCategoriesSuccess)], BlogState.prototype, "loadVehicleCategoriesSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_blog_state_blog_actions__WEBPACK_IMPORTED_MODULE_3__.BlogActions.LoadVehicleCategoriesError)], BlogState.prototype, "loadVehicleCategoriesError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Selector)()], BlogState, "entries", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Selector)()], BlogState, "listLoading", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Selector)()], BlogState, "entry", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Selector)()], BlogState, "entryLoading", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Selector)()], BlogState, "vehicleCategories", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Selector)()], BlogState, "saving", null);
BlogState = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.State)({
  name: 'blog',
  defaults
})], BlogState);


/***/ },

/***/ 5618
/*!****************************************************!*\
  !*** ./src/app/features/cars/cars.routes.const.ts ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CARS_ROUTES: () => (/* binding */ CARS_ROUTES)
/* harmony export */ });
const CARS_ROUTES = {
  create: {
    path: 'create',
    fullPath: '/main/cars/create'
  },
  details: {
    path: 'details',
    fullPath: '/main/cars/details'
  },
  edit: {
    path: 'edit',
    fullPath: '/main/cars/details'
  },
  documents: {
    path: 'documents',
    fullPath: '/main/cars/:id/documents'
  }
};

/***/ },

/***/ 18722
/*!************************************************************************!*\
  !*** ./src/app/features/cars/state/car-details/car-details.actions.ts ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarDetailsActions: () => (/* binding */ CarDetailsActions)
/* harmony export */ });
var CarDetailsActions;
(function (CarDetailsActions) {
  class LoadCurrentCar {
    static {
      this.type = '[CarDetails] Load current car';
    }
    constructor(id) {
      this.id = id;
    }
  }
  CarDetailsActions.LoadCurrentCar = LoadCurrentCar;
  class LoadCurrentCarSuccess {
    static {
      this.type = '[CarDetails] Load current car success';
    }
    constructor(response) {
      this.response = response;
    }
  }
  CarDetailsActions.LoadCurrentCarSuccess = LoadCurrentCarSuccess;
  class LoadCurrentCarError {
    static {
      this.type = '[CarDetails] Load current ca errorr';
    }
    constructor(err) {
      this.err = err;
    }
  }
  CarDetailsActions.LoadCurrentCarError = LoadCurrentCarError;
  class CreateCar {
    static {
      this.type = '[CarDetails] Create car';
    }
    constructor(car) {
      this.car = car;
    }
  }
  CarDetailsActions.CreateCar = CreateCar;
  class CreateCarSuccess {
    static {
      this.type = '[CarDetails] Create car success';
    }
    constructor(car) {
      this.car = car;
    }
  }
  CarDetailsActions.CreateCarSuccess = CreateCarSuccess;
  class CreateCarError {
    static {
      this.type = '[CarDetails] Create car error';
    }
    constructor(err) {
      this.err = err;
    }
  }
  CarDetailsActions.CreateCarError = CreateCarError;
  class UpdateCar {
    static {
      this.type = '[CarDetails] Update car';
    }
    constructor(car) {
      this.car = car;
    }
  }
  CarDetailsActions.UpdateCar = UpdateCar;
  class UpdateCarSuccess {
    static {
      this.type = '[CarDetails] Update car success';
    }
  }
  CarDetailsActions.UpdateCarSuccess = UpdateCarSuccess;
  class UpdateCarError {
    static {
      this.type = '[CarDetails] Update car error';
    }
    constructor(err) {
      this.err = err;
    }
  }
  CarDetailsActions.UpdateCarError = UpdateCarError;
  class LoadCarDocuments {
    static {
      this.type = '[CarDetails] Load documents';
    }
    constructor(carId) {
      this.carId = carId;
    }
  }
  CarDetailsActions.LoadCarDocuments = LoadCarDocuments;
  class LoadCarDocumentsSuccess {
    static {
      this.type = '[CarDetails] Load car documents success';
    }
    constructor(response) {
      this.response = response;
    }
  }
  CarDetailsActions.LoadCarDocumentsSuccess = LoadCarDocumentsSuccess;
  class LoadCarDocumentsError {
    static {
      this.type = '[CarDetails] Load car documents errorr';
    }
    constructor(err) {
      this.err = err;
    }
  }
  CarDetailsActions.LoadCarDocumentsError = LoadCarDocumentsError;
  class LoadMaintenanceRecords {
    static {
      this.type = '[CarDetails] Load maintenance records';
    }
    constructor(carId) {
      this.carId = carId;
    }
  }
  CarDetailsActions.LoadMaintenanceRecords = LoadMaintenanceRecords;
  class LoadMaintenanceRecordsSuccess {
    static {
      this.type = '[CarDetails] Load maintenance records success';
    }
    constructor(response) {
      this.response = response;
    }
  }
  CarDetailsActions.LoadMaintenanceRecordsSuccess = LoadMaintenanceRecordsSuccess;
  class LoadMaintenanceRecordsError {
    static {
      this.type = '[CarDetails] Load maintenance records error';
    }
    constructor(err) {
      this.err = err;
    }
  }
  CarDetailsActions.LoadMaintenanceRecordsError = LoadMaintenanceRecordsError;
  class DeleteCar {
    static {
      this.type = '[CarDetails] Delete car';
    }
    constructor(carId) {
      this.carId = carId;
    }
  }
  CarDetailsActions.DeleteCar = DeleteCar;
  class DeleteCarSuccess {
    static {
      this.type = '[CarDetails] Delete car success';
    }
    constructor(carId) {
      this.carId = carId;
    }
  }
  CarDetailsActions.DeleteCarSuccess = DeleteCarSuccess;
  class DeleteCarError {
    static {
      this.type = '[CarDetails] Delete car error';
    }
    constructor(err) {
      this.err = err;
    }
  }
  CarDetailsActions.DeleteCarError = DeleteCarError;
  class MarkAsSold {
    static {
      this.type = '[CarDetails] Mark as sold';
    }
    constructor(carId) {
      this.carId = carId;
    }
  }
  CarDetailsActions.MarkAsSold = MarkAsSold;
  class MarkAsSoldSuccess {
    static {
      this.type = '[CarDetails] Mark as sold success';
    }
    constructor(car) {
      this.car = car;
    }
  }
  CarDetailsActions.MarkAsSoldSuccess = MarkAsSoldSuccess;
  class MarkAsSoldError {
    static {
      this.type = '[CarDetails] Mark as sold error';
    }
    constructor(err) {
      this.err = err;
    }
  }
  CarDetailsActions.MarkAsSoldError = MarkAsSoldError;
  class RestoreCar {
    static {
      this.type = '[CarDetails] Restore car';
    }
    constructor(carId) {
      this.carId = carId;
    }
  }
  CarDetailsActions.RestoreCar = RestoreCar;
  class RestoreCarSuccess {
    static {
      this.type = '[CarDetails] Restore car success';
    }
    constructor(car) {
      this.car = car;
    }
  }
  CarDetailsActions.RestoreCarSuccess = RestoreCarSuccess;
  class RestoreCarError {
    static {
      this.type = '[CarDetails] Restore car error';
    }
    constructor(err) {
      this.err = err;
    }
  }
  CarDetailsActions.RestoreCarError = RestoreCarError;
})(CarDetailsActions || (CarDetailsActions = {}));

/***/ },

/***/ 48899
/*!***********************************************************************!*\
  !*** ./src/app/features/cars/state/car-details/car-details.facade.ts ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarDetailsFacade: () => (/* binding */ CarDetailsFacade)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hau/features/cars/state/car-details/car-details.actions */ 18722);
/* harmony import */ var _hau_features_cars_state_car_details_car_details_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/features/cars/state/car-details/car-details.state */ 88076);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 68267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94363);






class CarDetailsFacade {
  constructor(_store) {
    this._store = _store;
  }
  loadCurrentCar(id) {
    this._store.dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_1__.CarDetailsActions.LoadCurrentCar(id));
  }
  createCar(car) {
    this._store.dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_1__.CarDetailsActions.CreateCar(car));
  }
  udpateCar(car) {
    this._store.dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_1__.CarDetailsActions.UpdateCar(car));
  }
  loadCarDocuments(id) {
    this._store.dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_1__.CarDetailsActions.LoadCarDocuments(id));
  }
  loadMaintenanceRecords(carId) {
    this._store.dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_1__.CarDetailsActions.LoadMaintenanceRecords(carId));
  }
  deleteCar(carId) {
    this._store.dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_1__.CarDetailsActions.DeleteCar(carId));
  }
  markAsSold(carId) {
    this._store.dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_1__.CarDetailsActions.MarkAsSold(carId));
  }
  restoreCar(carId) {
    this._store.dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_1__.CarDetailsActions.RestoreCar(carId));
  }
  static {
    this.ɵfac = function CarDetailsFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CarDetailsFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Store));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: CarDetailsFacade,
      factory: CarDetailsFacade.ɵfac
    });
  }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_cars_state_car_details_car_details_state__WEBPACK_IMPORTED_MODULE_2__.CarDetailsState.currentCar)], CarDetailsFacade.prototype, "currentCar$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_cars_state_car_details_car_details_state__WEBPACK_IMPORTED_MODULE_2__.CarDetailsState.loading)], CarDetailsFacade.prototype, "loading$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_cars_state_car_details_car_details_state__WEBPACK_IMPORTED_MODULE_2__.CarDetailsState.submitting)], CarDetailsFacade.prototype, "submitting$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_cars_state_car_details_car_details_state__WEBPACK_IMPORTED_MODULE_2__.CarDetailsState.carDocuments)], CarDetailsFacade.prototype, "carDocuments$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_cars_state_car_details_car_details_state__WEBPACK_IMPORTED_MODULE_2__.CarDetailsState.maintenanceRecords)], CarDetailsFacade.prototype, "maintenanceRecords$", void 0);

/***/ },

/***/ 88076
/*!**********************************************************************!*\
  !*** ./src/app/features/cars/state/car-details/car-details.state.ts ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarDetailsState: () => (/* binding */ CarDetailsState)
/* harmony export */ });
/* harmony import */ var _var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _hau_app_routes_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/app.routes.const */ 85276);
/* harmony import */ var _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hau/features/cars/state/car-details/car-details.actions */ 18722);
/* harmony import */ var _hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hau/features/cars/state/car-list/car-list.actions */ 44510);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ 68267);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @hau/autogenapi/services */ 3977);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 4059);










const initialCarDetailsState = {
  currentCar: {
    item: null,
    loading: false
  },
  carDocuments: {
    items: null,
    loading: false
  },
  maintenanceRecords: {
    items: null,
    loading: false
  },
  submitting: false
};
let CarDetailsState = class CarDetailsState {
  constructor(_carService, _documentService, _maintenanceService, _navCtrl, _toastCtrl) {
    this._carService = _carService;
    this._documentService = _documentService;
    this._maintenanceService = _maintenanceService;
    this._navCtrl = _navCtrl;
    this._toastCtrl = _toastCtrl;
  }
  static currentCar(state) {
    return state.currentCar.item;
  }
  static loading(state) {
    return state.currentCar.loading;
  }
  static carDocuments(state) {
    return state.carDocuments.items;
  }
  static maintenanceRecords(state) {
    return state.maintenanceRecords.items;
  }
  static submitting(state) {
    return state.submitting;
  }
  loadCurrentCar({
    dispatch
  }, {
    id
  }) {
    this._carService.carControllerGetCar({
      id
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe({
      next: response => dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.LoadCurrentCarSuccess(response)),
      error: err => dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.LoadCurrentCarError(err))
    });
  }
  loadCurrentCarSuccess({
    patchState
  }, {
    response
  }) {
    patchState({
      currentCar: {
        item: response,
        loading: false
      }
    });
  }
  loadCurrentCarError({
    patchState
  }, {
    err
  }) {
    console.error('Error loading car:', err);
    patchState({
      currentCar: {
        item: null,
        loading: false
      }
    });
  }
  createCar({
    dispatch,
    patchState
  }, {
    car
  }) {
    patchState({
      submitting: true
    });
    this._carService.carControllerCreateCar({
      body: car
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe({
      next: createdCar => dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.CreateCarSuccess(createdCar)),
      error: err => dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.CreateCarError(err))
    });
  }
  createCarSuccess(_x, _x2) {
    var _this = this;
    return (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
      patchState,
      dispatch
    }, {
      car
    }) {
      patchState({
        submitting: false
      });
      dispatch(new _hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_4__.CarListActions.InjectCar(car));
      const toast = yield _this._toastCtrl.create({
        message: 'Mașina a fost adăugată cu succes!',
        duration: 2500,
        color: 'success',
        position: 'top'
      });
      yield toast.present();
      _this._navCtrl.navigateRoot([_hau_app_routes_const__WEBPACK_IMPORTED_MODULE_2__.HAU_ROUTES.cars.fullPath]);
    }).apply(this, arguments);
  }
  createCarError(_x3, _x4) {
    var _this2 = this;
    return (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
      patchState
    }, {
      err
    }) {
      patchState({
        submitting: false
      });
      console.error('Error creating car:', err);
      const message = err?.error?.message ? Array.isArray(err.error.message) ? err.error.message.join(', ') : err.error.message : 'A apărut o eroare. Încearcă din nou.';
      const toast = yield _this2._toastCtrl.create({
        message,
        duration: 4000,
        color: 'danger',
        position: 'top'
      });
      yield toast.present();
    }).apply(this, arguments);
  }
  updateCar({
    dispatch,
    patchState
  }, {
    car
  }) {
    patchState({
      submitting: true
    });
    this._carService.carControllerUpdateCar({
      body: car
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe({
      next: () => dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.UpdateCarSuccess()),
      error: err => dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.UpdateCarError(err))
    });
  }
  updateCarSuccess(_x5) {
    var _this3 = this;
    return (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
      patchState
    }) {
      patchState({
        submitting: false
      });
      const toast = yield _this3._toastCtrl.create({
        message: 'Mașina a fost actualizată cu succes!',
        duration: 2500,
        color: 'success',
        position: 'top'
      });
      yield toast.present();
      _this3._navCtrl.navigateRoot([_hau_app_routes_const__WEBPACK_IMPORTED_MODULE_2__.HAU_ROUTES.cars.fullPath]);
    }).apply(this, arguments);
  }
  updateCarError(_x6, _x7) {
    var _this4 = this;
    return (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
      patchState
    }, {
      err
    }) {
      patchState({
        submitting: false
      });
      console.error('Error updating car:', err);
      const message = err?.error?.message ? Array.isArray(err.error.message) ? err.error.message.join(', ') : err.error.message : 'A apărut o eroare. Încearcă din nou.';
      const toast = yield _this4._toastCtrl.create({
        message,
        duration: 4000,
        color: 'danger',
        position: 'top'
      });
      yield toast.present();
    }).apply(this, arguments);
  }
  loadCarDocuments({
    dispatch
  }, {
    carId
  }) {
    this._documentService.documentControllerGetDocumentsByCarId({
      carId
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe({
      next: response => dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.LoadCarDocumentsSuccess(response)),
      error: err => dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.LoadCarDocumentsError(err))
    });
  }
  loadCarDocumentsSuccess({
    patchState
  }, {
    response
  }) {
    patchState({
      carDocuments: {
        items: response,
        loading: false
      }
    });
  }
  loadCarDocumentsError({
    patchState
  }, {
    err
  }) {
    console.error('Error loading car documents:', err);
    patchState({
      carDocuments: {
        items: null,
        loading: false
      }
    });
  }
  loadMaintenanceRecords({
    dispatch
  }, {
    carId
  }) {
    this._maintenanceService.maintenanceRecordControllerGetMaintenanceRecordsByCarId({
      carId
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe({
      next: response => dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.LoadMaintenanceRecordsSuccess(response)),
      error: err => dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.LoadMaintenanceRecordsError(err))
    });
  }
  loadMaintenanceRecordsSuccess({
    patchState
  }, {
    response
  }) {
    patchState({
      maintenanceRecords: {
        items: response,
        loading: false
      }
    });
  }
  loadMaintenanceRecordsError({
    patchState
  }, {
    err
  }) {
    console.error('Error loading maintenance records:', err);
    patchState({
      maintenanceRecords: {
        items: null,
        loading: false
      }
    });
  }
  deleteCar({
    dispatch,
    patchState
  }, {
    carId
  }) {
    patchState({
      submitting: true
    });
    this._carService.carControllerDeleteCar({
      id: carId
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe({
      next: car => dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.DeleteCarSuccess(car.id)),
      error: err => dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.DeleteCarError(err))
    });
  }
  deleteCarSuccess(_x8, _x9) {
    var _this5 = this;
    return (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
      patchState,
      dispatch
    }, {
      carId
    }) {
      patchState({
        submitting: false
      });
      dispatch(new _hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_4__.CarListActions.RemoveCar(carId));
      const toast = yield _this5._toastCtrl.create({
        message: 'Mașina a fost ștearsă cu succes!',
        duration: 2500,
        color: 'success',
        position: 'top'
      });
      yield toast.present();
      _this5._navCtrl.navigateRoot([_hau_app_routes_const__WEBPACK_IMPORTED_MODULE_2__.HAU_ROUTES.cars.fullPath]);
    }).apply(this, arguments);
  }
  deleteCarError(_x0, _x1) {
    var _this6 = this;
    return (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
      patchState
    }, {
      err
    }) {
      patchState({
        submitting: false
      });
      const message = err?.error?.message ? Array.isArray(err.error.message) ? err.error.message.join(', ') : err.error.message : 'A apărut o eroare. Încearcă din nou.';
      const toast = yield _this6._toastCtrl.create({
        message,
        duration: 4000,
        color: 'danger',
        position: 'top'
      });
      yield toast.present();
    }).apply(this, arguments);
  }
  markAsSold({
    dispatch,
    patchState
  }, {
    carId
  }) {
    patchState({
      submitting: true
    });
    this._carService.carControllerMarkAsSold({
      id: carId
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe({
      next: car => dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.MarkAsSoldSuccess(car)),
      error: err => dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.MarkAsSoldError(err))
    });
  }
  markAsSoldSuccess(_x10, _x11) {
    var _this7 = this;
    return (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
      patchState,
      dispatch
    }, {
      car
    }) {
      patchState({
        submitting: false
      });
      dispatch(new _hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_4__.CarListActions.UpdateCarInList(car));
      const toast = yield _this7._toastCtrl.create({
        message: 'Mașina a fost marcată ca vândută.',
        duration: 2500,
        color: 'success',
        position: 'top'
      });
      yield toast.present();
      _this7._navCtrl.navigateRoot([_hau_app_routes_const__WEBPACK_IMPORTED_MODULE_2__.HAU_ROUTES.cars.fullPath]);
    }).apply(this, arguments);
  }
  markAsSoldError(_x12, _x13) {
    var _this8 = this;
    return (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
      patchState
    }, {
      err
    }) {
      patchState({
        submitting: false
      });
      const message = err?.error?.message ? Array.isArray(err.error.message) ? err.error.message.join(', ') : err.error.message : 'A apărut o eroare. Încearcă din nou.';
      const toast = yield _this8._toastCtrl.create({
        message,
        duration: 4000,
        color: 'danger',
        position: 'top'
      });
      yield toast.present();
    }).apply(this, arguments);
  }
  restoreCar({
    dispatch,
    patchState
  }, {
    carId
  }) {
    patchState({
      submitting: true
    });
    this._carService.carControllerRestore({
      id: carId
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe({
      next: car => dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.RestoreCarSuccess(car)),
      error: err => dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.RestoreCarError(err))
    });
  }
  restoreCarSuccess(_x14, _x15) {
    var _this9 = this;
    return (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
      patchState,
      dispatch
    }, {
      car
    }) {
      patchState({
        submitting: false
      });
      dispatch(new _hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_4__.CarListActions.UpdateCarInList(car));
      const toast = yield _this9._toastCtrl.create({
        message: 'Mașina a fost restaurată în garaj.',
        duration: 2500,
        color: 'success',
        position: 'top'
      });
      yield toast.present();
      _this9._navCtrl.navigateRoot([_hau_app_routes_const__WEBPACK_IMPORTED_MODULE_2__.HAU_ROUTES.cars.fullPath]);
    }).apply(this, arguments);
  }
  restoreCarError(_x16, _x17) {
    var _this0 = this;
    return (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
      patchState
    }, {
      err
    }) {
      patchState({
        submitting: false
      });
      const message = err?.error?.message ? Array.isArray(err.error.message) ? err.error.message.join(', ') : err.error.message : 'A apărut o eroare. Încearcă din nou.';
      const toast = yield _this0._toastCtrl.create({
        message,
        duration: 4000,
        color: 'danger',
        position: 'top'
      });
      yield toast.present();
    }).apply(this, arguments);
  }
  static {
    this.ɵfac = function CarDetailsState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CarDetailsState)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_8__.CarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_8__.DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_8__.MaintenanceRecordService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: CarDetailsState,
      factory: CarDetailsState.ɵfac
    });
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.LoadCurrentCar)], CarDetailsState.prototype, "loadCurrentCar", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.LoadCurrentCarSuccess)], CarDetailsState.prototype, "loadCurrentCarSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.LoadCurrentCarError)], CarDetailsState.prototype, "loadCurrentCarError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.CreateCar)], CarDetailsState.prototype, "createCar", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.CreateCarSuccess)], CarDetailsState.prototype, "createCarSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.CreateCarError)], CarDetailsState.prototype, "createCarError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.UpdateCar)], CarDetailsState.prototype, "updateCar", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.UpdateCarSuccess)], CarDetailsState.prototype, "updateCarSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.UpdateCarError)], CarDetailsState.prototype, "updateCarError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.LoadCarDocuments)], CarDetailsState.prototype, "loadCarDocuments", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.LoadCarDocumentsSuccess)], CarDetailsState.prototype, "loadCarDocumentsSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.LoadCarDocumentsError)], CarDetailsState.prototype, "loadCarDocumentsError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.LoadMaintenanceRecords)], CarDetailsState.prototype, "loadMaintenanceRecords", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.LoadMaintenanceRecordsSuccess)], CarDetailsState.prototype, "loadMaintenanceRecordsSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.LoadMaintenanceRecordsError)], CarDetailsState.prototype, "loadMaintenanceRecordsError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.DeleteCar)], CarDetailsState.prototype, "deleteCar", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.DeleteCarSuccess)], CarDetailsState.prototype, "deleteCarSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.DeleteCarError)], CarDetailsState.prototype, "deleteCarError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.MarkAsSold)], CarDetailsState.prototype, "markAsSold", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.MarkAsSoldSuccess)], CarDetailsState.prototype, "markAsSoldSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.MarkAsSoldError)], CarDetailsState.prototype, "markAsSoldError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.RestoreCar)], CarDetailsState.prototype, "restoreCar", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.RestoreCarSuccess)], CarDetailsState.prototype, "restoreCarSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_3__.CarDetailsActions.RestoreCarError)], CarDetailsState.prototype, "restoreCarError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Selector)()], CarDetailsState, "currentCar", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Selector)()], CarDetailsState, "loading", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Selector)()], CarDetailsState, "carDocuments", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Selector)()], CarDetailsState, "maintenanceRecords", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Selector)()], CarDetailsState, "submitting", null);
CarDetailsState = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.State)({
  name: 'carDetails',
  defaults: initialCarDetailsState
})], CarDetailsState);


/***/ },

/***/ 44510
/*!******************************************************************!*\
  !*** ./src/app/features/cars/state/car-list/car-list.actions.ts ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarListActions: () => (/* binding */ CarListActions)
/* harmony export */ });
var CarListActions;
(function (CarListActions) {
  class LoadCarList {
    static {
      this.type = '[CarList] Load car list';
    }
  }
  CarListActions.LoadCarList = LoadCarList;
  class LoadCarListSuccess {
    static {
      this.type = '[CarList] Load car list success';
    }
    constructor(response) {
      this.response = response;
    }
  }
  CarListActions.LoadCarListSuccess = LoadCarListSuccess;
  class LoadCarListError {
    static {
      this.type = '[CarList] Load car list error';
    }
    constructor(err) {
      this.err = err;
    }
  }
  CarListActions.LoadCarListError = LoadCarListError;
  class LoadCarDocuments {
    static {
      this.type = '[CarList] Load car documents';
    }
    constructor(carId) {
      this.carId = carId;
    }
  }
  CarListActions.LoadCarDocuments = LoadCarDocuments;
  class LoadCarDocumentsSuccess {
    static {
      this.type = '[CarList] Load car documents success';
    }
    constructor(carId, documents) {
      this.carId = carId;
      this.documents = documents;
    }
  }
  CarListActions.LoadCarDocumentsSuccess = LoadCarDocumentsSuccess;
  class LoadCarDocumentsError {
    static {
      this.type = '[CarList] Load car documents error';
    }
    constructor(err) {
      this.err = err;
    }
  }
  CarListActions.LoadCarDocumentsError = LoadCarDocumentsError;
  class LoadSharedCars {
    static {
      this.type = '[CarList] Load shared cars';
    }
  }
  CarListActions.LoadSharedCars = LoadSharedCars;
  class LoadSharedCarsSuccess {
    static {
      this.type = '[CarList] Load shared cars success';
    }
    constructor(items) {
      this.items = items;
    }
  }
  CarListActions.LoadSharedCarsSuccess = LoadSharedCarsSuccess;
  class LoadSharedCarsError {
    static {
      this.type = '[CarList] Load shared cars error';
    }
    constructor(err) {
      this.err = err;
    }
  }
  CarListActions.LoadSharedCarsError = LoadSharedCarsError;
  class InjectCar {
    static {
      this.type = '[CarList] Inject car';
    }
    constructor(car) {
      this.car = car;
    }
  }
  CarListActions.InjectCar = InjectCar;
  class RemoveCar {
    static {
      this.type = '[CarList] Remove car';
    }
    constructor(carId) {
      this.carId = carId;
    }
  }
  CarListActions.RemoveCar = RemoveCar;
  class UpdateCarInList {
    static {
      this.type = '[CarList] Update car in list';
    }
    constructor(car) {
      this.car = car;
    }
  }
  CarListActions.UpdateCarInList = UpdateCarInList;
})(CarListActions || (CarListActions = {}));

/***/ },

/***/ 6295
/*!*****************************************************************!*\
  !*** ./src/app/features/cars/state/car-list/car-list.facade.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarListFacade: () => (/* binding */ CarListFacade)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hau/features/cars/state/car-list/car-list.actions */ 44510);
/* harmony import */ var _hau_features_cars_state_car_list_car_list_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/features/cars/state/car-list/car-list.state */ 58056);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 68267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94363);






class CarListFacade {
  constructor(_store) {
    this._store = _store;
  }
  loadCarList() {
    this._store.dispatch(new _hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_1__.CarListActions.LoadCarList());
  }
  static {
    this.ɵfac = function CarListFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CarListFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Store));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: CarListFacade,
      factory: CarListFacade.ɵfac
    });
  }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_cars_state_car_list_car_list_state__WEBPACK_IMPORTED_MODULE_2__.CarListState.carList)], CarListFacade.prototype, "carList$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_cars_state_car_list_car_list_state__WEBPACK_IMPORTED_MODULE_2__.CarListState.activeCarList)], CarListFacade.prototype, "activeCarList$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_cars_state_car_list_car_list_state__WEBPACK_IMPORTED_MODULE_2__.CarListState.soldCarList)], CarListFacade.prototype, "soldCarList$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_cars_state_car_list_car_list_state__WEBPACK_IMPORTED_MODULE_2__.CarListState.loading)], CarListFacade.prototype, "loading$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_cars_state_car_list_car_list_state__WEBPACK_IMPORTED_MODULE_2__.CarListState.carDocumentsMap)], CarListFacade.prototype, "carDocumentsMap$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_cars_state_car_list_car_list_state__WEBPACK_IMPORTED_MODULE_2__.CarListState.sharedCarList)], CarListFacade.prototype, "sharedCarList$", void 0);

/***/ },

/***/ 58056
/*!****************************************************************!*\
  !*** ./src/app/features/cars/state/car-list/car-list.state.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarListState: () => (/* binding */ CarListState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _hau_features_cars_state_car_details_car_details_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hau/features/cars/state/car-details/car-details.state */ 88076);
/* harmony import */ var _hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/features/cars/state/car-list/car-list.actions */ 44510);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 68267);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @hau/autogenapi/services */ 3977);








const initialCarListState = {
  list: {
    loading: true,
    items: []
  },
  sharedList: {
    loading: false,
    items: []
  },
  carDocumentsMap: {}
};
let CarListState = class CarListState {
  constructor(_carService, _documentService, _carAccessService) {
    this._carService = _carService;
    this._documentService = _documentService;
    this._carAccessService = _carAccessService;
  }
  static carList(state) {
    return state.list.items;
  }
  static activeCarList(state) {
    return state.list.items.filter(c => !c.status || c.status === 'ACTIVE');
  }
  static soldCarList(state) {
    return state.list.items.filter(c => c.status === 'SOLD');
  }
  static loading(state) {
    return state.list.loading;
  }
  static carDocumentsMap(state) {
    return state.carDocumentsMap;
  }
  static sharedCarList(state) {
    return state.sharedList.items;
  }
  loadCarList({
    patchState,
    dispatch
  }) {
    patchState({
      list: {
        loading: true,
        items: []
      }
    });
    dispatch(new _hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadSharedCars());
    return this._carService.carControllerGetAllCars().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)({
      next: response => dispatch(new _hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadCarListSuccess(response)),
      error: err => dispatch(new _hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadCarListError(err))
    }));
  }
  loadSharedCars({
    patchState,
    dispatch
  }) {
    patchState({
      sharedList: {
        loading: true,
        items: []
      }
    });
    return this._carAccessService.getSharedCars().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(sharedCars => {
      const accepted = sharedCars.filter(c => c.accepted_at !== null);
      if (!accepted.length) return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)(accepted.map(s => this._carService.carControllerGetCar({
        id: String(s.id)
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(car => ({
        car,
        role: s.shared_role
      })))));
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)({
      next: items => dispatch(new _hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadSharedCarsSuccess(items)),
      error: err => dispatch(new _hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadSharedCarsError(err))
    }));
  }
  loadSharedCarsSuccess({
    patchState,
    dispatch
  }, {
    items
  }) {
    patchState({
      sharedList: {
        loading: false,
        items
      }
    });
    items.forEach(entry => dispatch(new _hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadCarDocuments(entry.car.id)));
  }
  loadSharedCarsError({
    patchState
  }) {
    patchState({
      sharedList: {
        loading: false,
        items: []
      }
    });
  }
  loadCarListSuccess({
    patchState,
    dispatch
  }, {
    response
  }) {
    patchState({
      list: {
        items: response,
        loading: false
      },
      carDocumentsMap: {}
    });
    response.forEach(car => dispatch(new _hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadCarDocuments(car.id)));
  }
  loadCarListError({
    patchState
  }, {
    err
  }) {
    console.error('Error loading car list:', err);
    patchState({
      list: {
        loading: false,
        items: []
      }
    });
  }
  loadCarDocuments({
    dispatch
  }, {
    carId
  }) {
    return this._documentService.documentControllerGetDocumentsByCarId({
      carId: String(carId)
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)({
      next: docs => dispatch(new _hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadCarDocumentsSuccess(carId, docs)),
      error: err => dispatch(new _hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadCarDocumentsError(err))
    }));
  }
  loadCarDocumentsSuccess({
    getState,
    patchState
  }, {
    carId,
    documents
  }) {
    patchState({
      carDocumentsMap: {
        ...getState().carDocumentsMap,
        [carId]: documents
      }
    });
  }
  loadCarDocumentsError(_, {
    err
  }) {
    console.error('Error loading car documents:', err);
  }
  injectCar({
    getState,
    patchState,
    dispatch
  }, {
    car
  }) {
    const current = getState().list.items;
    patchState({
      list: {
        loading: false,
        items: [...current, car]
      }
    });
    dispatch(new _hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadCarDocuments(car.id));
  }
  removeCar({
    getState,
    patchState
  }, {
    carId
  }) {
    const current = getState().list.items;
    patchState({
      list: {
        loading: false,
        items: current.filter(c => c.id !== carId)
      }
    });
  }
  updateCarInList({
    getState,
    patchState
  }, {
    car
  }) {
    const current = getState().list.items;
    patchState({
      list: {
        loading: false,
        items: current.map(c => c.id === car.id ? car : c)
      }
    });
  }
  static {
    this.ɵfac = function CarListState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CarListState)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_11__.CarService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_11__.DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_11__.CarAccessService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
      token: CarListState,
      factory: CarListState.ɵfac
    });
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadCarList)], CarListState.prototype, "loadCarList", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadSharedCars)], CarListState.prototype, "loadSharedCars", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadSharedCarsSuccess)], CarListState.prototype, "loadSharedCarsSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadSharedCarsError)], CarListState.prototype, "loadSharedCarsError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadCarListSuccess)], CarListState.prototype, "loadCarListSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadCarListError)], CarListState.prototype, "loadCarListError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadCarDocuments)], CarListState.prototype, "loadCarDocuments", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadCarDocumentsSuccess)], CarListState.prototype, "loadCarDocumentsSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadCarDocumentsError)], CarListState.prototype, "loadCarDocumentsError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.InjectCar)], CarListState.prototype, "injectCar", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.RemoveCar)], CarListState.prototype, "removeCar", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.UpdateCarInList)], CarListState.prototype, "updateCarInList", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Selector)()], CarListState, "carList", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Selector)()], CarListState, "activeCarList", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Selector)()], CarListState, "soldCarList", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Selector)()], CarListState, "loading", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Selector)()], CarListState, "carDocumentsMap", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Selector)()], CarListState, "sharedCarList", null);
CarListState = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.State)({
  name: 'cars',
  defaults: initialCarListState,
  children: [_hau_features_cars_state_car_details_car_details_state__WEBPACK_IMPORTED_MODULE_1__.CarDetailsState]
})], CarListState);


/***/ },

/***/ 66020
/*!***************************************************************!*\
  !*** ./src/app/features/documents/state/documents.actions.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentsActions: () => (/* binding */ DocumentsActions)
/* harmony export */ });
var DocumentsActions;
(function (DocumentsActions) {
  class LoadAll {
    static {
      this.type = '[Documents] Load All';
    }
  }
  DocumentsActions.LoadAll = LoadAll;
  class LoadAllSuccess {
    static {
      this.type = '[Documents] Load All Success';
    }
    constructor(cars, documents) {
      this.cars = cars;
      this.documents = documents;
    }
  }
  DocumentsActions.LoadAllSuccess = LoadAllSuccess;
  class LoadAllError {
    static {
      this.type = '[Documents] Load All Error';
    }
  }
  DocumentsActions.LoadAllError = LoadAllError;
  class DeleteDocument {
    static {
      this.type = '[Documents] Delete';
    }
    constructor(id) {
      this.id = id;
    }
  }
  DocumentsActions.DeleteDocument = DeleteDocument;
  class DeleteDocumentSuccess {
    static {
      this.type = '[Documents] Delete Success';
    }
    constructor(id) {
      this.id = id;
    }
  }
  DocumentsActions.DeleteDocumentSuccess = DeleteDocumentSuccess;
  class DeleteDocumentError {
    static {
      this.type = '[Documents] Delete Error';
    }
  }
  DocumentsActions.DeleteDocumentError = DeleteDocumentError;
  class CreateDocument {
    static {
      this.type = '[Documents] Create';
    }
    constructor(dto) {
      this.dto = dto;
    }
  }
  DocumentsActions.CreateDocument = CreateDocument;
  class CreateDocumentSuccess {
    static {
      this.type = '[Documents] Create Success';
    }
    constructor(doc) {
      this.doc = doc;
    }
  }
  DocumentsActions.CreateDocumentSuccess = CreateDocumentSuccess;
  class CreateDocumentError {
    static {
      this.type = '[Documents] Create Error';
    }
  }
  DocumentsActions.CreateDocumentError = CreateDocumentError;
  class UpdateDocument {
    static {
      this.type = '[Documents] Update';
    }
    constructor(id, dto) {
      this.id = id;
      this.dto = dto;
    }
  }
  DocumentsActions.UpdateDocument = UpdateDocument;
  class UpdateDocumentSuccess {
    static {
      this.type = '[Documents] Update Success';
    }
    constructor(doc) {
      this.doc = doc;
    }
  }
  DocumentsActions.UpdateDocumentSuccess = UpdateDocumentSuccess;
  class UpdateDocumentError {
    static {
      this.type = '[Documents] Update Error';
    }
  }
  DocumentsActions.UpdateDocumentError = UpdateDocumentError;
  class UpdateDocumentFileSuccess {
    static {
      this.type = '[Documents] Update File Success';
    }
    constructor(doc) {
      this.doc = doc;
    }
  }
  DocumentsActions.UpdateDocumentFileSuccess = UpdateDocumentFileSuccess;
})(DocumentsActions || (DocumentsActions = {}));

/***/ },

/***/ 40977
/*!**************************************************************!*\
  !*** ./src/app/features/documents/state/documents.facade.ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentsFacade: () => (/* binding */ DocumentsFacade)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hau/autogenapi/services */ 3977);
/* harmony import */ var _hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/features/documents/state/documents.actions */ 66020);
/* harmony import */ var _hau_features_documents_state_documents_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hau/features/documents/state/documents.state */ 32770);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ 68267);







class DocumentsFacade {
  constructor(_store) {
    this._store = _store;
    this.cars$ = this._store.select(_hau_features_documents_state_documents_state__WEBPACK_IMPORTED_MODULE_3__.DocumentsState.cars);
    this.documents$ = this._store.select(_hau_features_documents_state_documents_state__WEBPACK_IMPORTED_MODULE_3__.DocumentsState.documents);
    this.loading$ = this._store.select(_hau_features_documents_state_documents_state__WEBPACK_IMPORTED_MODULE_3__.DocumentsState.loading);
    this.submitting$ = this._store.select(_hau_features_documents_state_documents_state__WEBPACK_IMPORTED_MODULE_3__.DocumentsState.submitting);
    this.lastSavedId$ = this._store.select(_hau_features_documents_state_documents_state__WEBPACK_IMPORTED_MODULE_3__.DocumentsState.lastSavedId);
    this._docService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_1__.DocumentService);
  }
  loadAll() {
    this._store.dispatch(new _hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_2__.DocumentsActions.LoadAll());
  }
  deleteDocument(id) {
    this._store.dispatch(new _hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_2__.DocumentsActions.DeleteDocument(id));
  }
  createDocument(dto) {
    return this._store.dispatch(new _hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_2__.DocumentsActions.CreateDocument(dto));
  }
  updateDocument(id, dto) {
    return this._store.dispatch(new _hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_2__.DocumentsActions.UpdateDocument(id, dto));
  }
  uploadFile(id, file) {
    return this._docService.documentControllerUploadFile(id, file).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(doc => this._store.dispatch(new _hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_2__.DocumentsActions.UpdateDocumentFileSuccess(doc))));
  }
  getLastSavedId() {
    return this._store.selectSnapshot(_hau_features_documents_state_documents_state__WEBPACK_IMPORTED_MODULE_3__.DocumentsState.lastSavedId);
  }
  static {
    this.ɵfac = function DocumentsFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DocumentsFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__.Store));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DocumentsFacade,
      factory: DocumentsFacade.ɵfac
    });
  }
}

/***/ },

/***/ 32770
/*!*************************************************************!*\
  !*** ./src/app/features/documents/state/documents.state.ts ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentsState: () => (/* binding */ DocumentsState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/autogenapi/services */ 3977);
/* harmony import */ var _hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hau/features/documents/state/documents.actions */ 66020);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ 68267);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 98764);







const defaults = {
  cars: [],
  documents: [],
  loading: false,
  submitting: false,
  lastSavedId: null
};
let DocumentsState = class DocumentsState {
  constructor() {
    this._carService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_2__.CarService);
    this._docService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_2__.DocumentService);
  }
  static cars(s) {
    return s.cars;
  }
  static documents(s) {
    return s.documents;
  }
  static loading(s) {
    return s.loading;
  }
  static submitting(s) {
    return s.submitting;
  }
  static lastSavedId(s) {
    return s.lastSavedId;
  }
  loadAll({
    patchState,
    dispatch
  }) {
    patchState({
      loading: true
    });
    return this._carService.carControllerGetAllCars().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(cars => {
      if (cars.length === 0) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
          cars,
          documents: []
        });
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)(cars.map(car => this._docService.documentControllerGetDocumentsByCarId({
        carId: String(car.id)
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]))))).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(docArrays => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
        cars,
        documents: docArrays.flat()
      })));
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)({
      next: ({
        cars,
        documents
      }) => dispatch(new _hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_3__.DocumentsActions.LoadAllSuccess(cars, documents)),
      error: () => dispatch(new _hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_3__.DocumentsActions.LoadAllError())
    }));
  }
  loadAllSuccess({
    patchState
  }, {
    cars,
    documents
  }) {
    patchState({
      cars,
      documents,
      loading: false
    });
  }
  loadAllError({
    patchState
  }) {
    patchState({
      loading: false
    });
  }
  deleteDocument({
    dispatch
  }, {
    id
  }) {
    return this._docService.documentControllerDeleteDocument({
      id: String(id)
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)({
      next: () => dispatch(new _hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_3__.DocumentsActions.DeleteDocumentSuccess(id)),
      error: () => dispatch(new _hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_3__.DocumentsActions.DeleteDocumentError())
    }));
  }
  deleteSuccess({
    getState,
    patchState
  }, {
    id
  }) {
    patchState({
      documents: getState().documents.filter(d => d.id !== id)
    });
  }
  createDocument({
    patchState,
    dispatch
  }, {
    dto
  }) {
    patchState({
      submitting: true
    });
    return this._docService.documentControllerCreateDocument({
      body: dto
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)({
      next: doc => dispatch(new _hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_3__.DocumentsActions.CreateDocumentSuccess(doc)),
      error: () => dispatch(new _hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_3__.DocumentsActions.CreateDocumentError())
    }));
  }
  createSuccess({
    getState,
    patchState
  }, {
    doc
  }) {
    patchState({
      documents: [...getState().documents, doc],
      submitting: false,
      lastSavedId: doc.id
    });
  }
  createError({
    patchState
  }) {
    patchState({
      submitting: false
    });
  }
  updateDocument({
    patchState,
    dispatch
  }, {
    id,
    dto
  }) {
    patchState({
      submitting: true
    });
    return this._docService.documentControllerUpdateDocument({
      id: String(id),
      body: dto
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)({
      next: doc => dispatch(new _hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_3__.DocumentsActions.UpdateDocumentSuccess(doc)),
      error: () => dispatch(new _hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_3__.DocumentsActions.UpdateDocumentError())
    }));
  }
  updateSuccess({
    getState,
    patchState
  }, {
    doc
  }) {
    patchState({
      documents: getState().documents.map(d => d.id === doc.id ? doc : d),
      submitting: false,
      lastSavedId: doc.id
    });
  }
  updateError({
    patchState
  }) {
    patchState({
      submitting: false
    });
  }
  updateFileSuccess({
    getState,
    patchState
  }, {
    doc
  }) {
    patchState({
      documents: getState().documents.map(d => d.id === doc.id ? doc : d)
    });
  }
  static {
    this.ɵfac = function DocumentsState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DocumentsState)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DocumentsState,
      factory: DocumentsState.ɵfac
    });
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_3__.DocumentsActions.LoadAll)], DocumentsState.prototype, "loadAll", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_3__.DocumentsActions.LoadAllSuccess)], DocumentsState.prototype, "loadAllSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_3__.DocumentsActions.LoadAllError)], DocumentsState.prototype, "loadAllError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_3__.DocumentsActions.DeleteDocument)], DocumentsState.prototype, "deleteDocument", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_3__.DocumentsActions.DeleteDocumentSuccess)], DocumentsState.prototype, "deleteSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_3__.DocumentsActions.CreateDocument)], DocumentsState.prototype, "createDocument", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_3__.DocumentsActions.CreateDocumentSuccess)], DocumentsState.prototype, "createSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_3__.DocumentsActions.CreateDocumentError)], DocumentsState.prototype, "createError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_3__.DocumentsActions.UpdateDocument)], DocumentsState.prototype, "updateDocument", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_3__.DocumentsActions.UpdateDocumentSuccess)], DocumentsState.prototype, "updateSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_3__.DocumentsActions.UpdateDocumentError)], DocumentsState.prototype, "updateError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Action)(_hau_features_documents_state_documents_actions__WEBPACK_IMPORTED_MODULE_3__.DocumentsActions.UpdateDocumentFileSuccess)], DocumentsState.prototype, "updateFileSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Selector)()], DocumentsState, "cars", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Selector)()], DocumentsState, "documents", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Selector)()], DocumentsState, "loading", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Selector)()], DocumentsState, "submitting", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Selector)()], DocumentsState, "lastSavedId", null);
DocumentsState = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.State)({
  name: 'documents',
  defaults
})], DocumentsState);


/***/ },

/***/ 20442
/*!*************************************************!*\
  !*** ./src/app/features/main/main.component.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainComponent: () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionicons */ 45846);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionicons/icons */ 77958);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/transloco */ 76075);
/* harmony import */ var _hau_features_cars_cars_routes_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @hau/features/cars/cars.routes.const */ 5618);
/* harmony import */ var _hau_app_routes_const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @hau/app.routes.const */ 85276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 66223);
/* harmony import */ var _hau_features_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hau/features/auth/auth.service */ 36256);
/* harmony import */ var _hau_core_theme_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @hau/core/theme.service */ 29879);
/* harmony import */ var _hau_autogenapi_services_car_access_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @hau/autogenapi/services/car-access.service */ 915);
/* harmony import */ var _hau_autogenapi_services_car_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @hau/autogenapi/services/car.service */ 92142);

















const _c0 = a0 => ({
  count: a0
});
const _c1 = a0 => ({
  days: a0
});
const _forTrack0 = ($index, $item) => $item.key;
const _forTrack1 = ($index, $item) => $item.id;
const _forTrack2 = ($index, $item) => $item.carName + $item.docLabel;
function MainComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, "sidebar.sharedVehicles", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](4, _c0, ctx_r0.sharedVehicleCount)));
  }
}
function MainComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MainComponent_For_34_Template_ion_item_click_0_listener() {
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r0.navigateTo(item_r3.route, item_r3.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r0.isActive(item_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", item_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 4, item_r3.labelKey));
  }
}
function MainComponent_Conditional_35_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 43)(1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "ion-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MainComponent_Conditional_35_For_9_Template_button_click_8_listener() {
      const invite_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r0.acceptInvite(invite_r5.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const invite_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", invite_r5.make, " ", invite_r5.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 5, invite_r5.shared_role));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r0.acceptingInviteId === invite_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.acceptingInviteId === invite_r5.id ? "..." : _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 7, "sidebar.invites.accept"), " ");
  }
}
function MainComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section", 23)(1, "div", 39)(2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterCreate"](8, MainComponent_Conditional_35_For_9_Template, 11, 9, "div", 43, _forTrack1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](6, 1, "sidebar.invites.title", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](4, _c0, ctx_r0.pendingInvites.length)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeater"](ctx_r0.pendingInvites);
  }
}
function MainComponent_Conditional_36_For_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"]("", item_r6.carName, " \u2014 ", item_r6.docLabel, " ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](4, 3, "sidebar.attention.expiresIn", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c1, item_r6.daysLeft)));
  }
}
function MainComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section", 24)(1, "div", 49)(2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "ion-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterCreate"](9, MainComponent_Conditional_36_For_10_Template, 5, 8, "div", 53, _forTrack2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r0.icons.warning);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 3, "sidebar.attention.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r0.icons.chevron);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeater"](ctx_r0.attentionItems);
  }
}
function MainComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-back-button", 36);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("defaultHref", ctx_r0.backHref);
  }
}
const EXPIRY_THRESHOLD_DAYS = 30;
const ICON_BASE = 'assets/icons';
class MainComponent {
  constructor(router, location, authService, themeService, carAccessService, carService, menuCtrl) {
    this.router = router;
    this.location = location;
    this.authService = authService;
    this.themeService = themeService;
    this.carAccessService = carAccessService;
    this.carService = carService;
    this.menuCtrl = menuCtrl;
    this.vehicleCount = 0;
    this.sharedVehicleCount = 0;
    this.currentPath = this.router.url;
    this.selectedMenuItem = this.resolveActiveMenuItem(this.router.url);
    this.pendingInvites = [];
    this.acceptingInviteId = null;
    this.attentionItems = [];
    this.icons = {
      car: `${ICON_BASE}/hau-car.svg`,
      home: `${ICON_BASE}/hau-home.svg`,
      warning: `${ICON_BASE}/hau-warning.svg`,
      settings: `${ICON_BASE}/hau-settings.svg`,
      logout: `${ICON_BASE}/hau-logout.svg`,
      chevron: `${ICON_BASE}/hau-chevron.svg`,
      checkCircle: `${ICON_BASE}/hau-check-circle.svg`,
      add: `${ICON_BASE}/hau-add.svg`
    };
    this.menuItems = [{
      key: 'overview',
      labelKey: 'sidebar.nav.overview',
      icon: `${ICON_BASE}/hau-speedometer.svg`,
      route: '/main/overview'
    }, {
      key: 'garage',
      labelKey: 'sidebar.nav.garage',
      icon: `${ICON_BASE}/hau-car.svg`,
      route: '/main/cars'
    }, {
      key: 'documents',
      labelKey: 'sidebar.nav.documents',
      icon: `${ICON_BASE}/hau-document.svg`,
      route: '/main/documents'
    }, {
      key: 'maintenance',
      labelKey: 'sidebar.nav.maintenance',
      icon: `${ICON_BASE}/hau-wrench.svg`,
      route: '/main/maintenance'
    }, {
      key: 'reports',
      labelKey: 'sidebar.nav.reports',
      icon: `${ICON_BASE}/hau-chart.svg`,
      route: '/main/cars'
    }, {
      key: 'blog',
      labelKey: 'sidebar.nav.blog',
      icon: `${ICON_BASE}/hau-pencil.svg`,
      route: '/main/blog'
    }];
    (0,ionicons__WEBPACK_IMPORTED_MODULE_3__.a)({
      mailOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_4__.mailOutline,
      carOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_4__.carOutline
    });
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd)).subscribe(() => {
      this.currentPath = this.router.url;
      this.selectedMenuItem = this.resolveActiveMenuItem(this.currentPath);
    });
  }
  ngOnInit() {
    this.loadSidebarData();
  }
  loadSidebarData() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)({
      owned: this.carService.carControllerGetAllCars(),
      shared: this.carAccessService.getSharedCars()
    }).subscribe({
      next: ({
        owned,
        shared
      }) => {
        this.vehicleCount = owned.length;
        this.attentionItems = this.buildAttentionItems(owned);
        this.pendingInvites = shared.filter(c => c.accepted_at === null);
        this.sharedVehicleCount = shared.filter(c => c.accepted_at !== null).length;
      },
      error: () => {}
    });
  }
  buildAttentionItems(cars) {
    const today = new Date();
    const items = [];
    const docFields = [{
      key: 'rca_expiry_date',
      label: 'RCA'
    }, {
      key: 'itp_expiry_date',
      label: 'ITP'
    }, {
      key: 'rov_expiry_date',
      label: 'ROV'
    }];
    for (const car of cars) {
      const carName = `${car.make} ${car.model}`;
      for (const {
        key,
        label
      } of docFields) {
        const raw = car[key];
        if (!raw) continue;
        const daysLeft = Math.ceil((new Date(raw).getTime() - today.getTime()) / 86_400_000);
        if (daysLeft <= EXPIRY_THRESHOLD_DAYS) {
          items.push({
            carName,
            docLabel: label,
            daysLeft
          });
        }
      }
    }
    return items.sort((a, b) => a.daysLeft - b.daysLeft);
  }
  acceptInvite(carId) {
    this.acceptingInviteId = carId;
    this.carAccessService.acceptInvitation({
      carId
    }).subscribe({
      next: () => {
        this.pendingInvites = this.pendingInvites.filter(c => c.id !== carId);
        this.acceptingInviteId = null;
      },
      error: () => {
        this.acceptingInviteId = null;
      }
    });
  }
  get currentPageTitle() {
    const url = this.currentPath;
    if (url.startsWith('/main/blog/new')) return 'blog.newEntry';
    if (url.startsWith('/main/blog')) return 'blog.title';
    if (url.startsWith('/main/cars/create')) return 'sidebar.addVehicle';
    if (url.startsWith('/main/cars')) return 'sidebar.nav.garage';
    if (url.startsWith('/main/documents')) return 'sidebar.nav.documents';
    if (url.startsWith('/main/maintenance')) return 'sidebar.nav.maintenance';
    if (url.startsWith('/main/overview')) return 'overview.title';
    return 'homepage';
  }
  get showBackButton() {
    const url = this.currentPath;
    return url !== '/main/overview' && url !== '/main/cars' && url !== '/main/blog' && url !== '/main/documents' && url !== '/main/documents/';
  }
  get backHref() {
    const url = this.currentPath;
    if (url.startsWith('/main/cars')) return '/main/cars';
    if (url.startsWith('/main/blog')) return '/main/blog';
    if (url.startsWith('/main/documents')) return '/main/documents';
    return '/main/overview';
  }
  goBack() {
    this.location.back();
  }
  toggleTheme() {
    this.themeService.toggle();
  }
  closeMenu() {
    return this.menuCtrl.close();
  }
  navigateTo(route, key) {
    this.selectedMenuItem = key;
    void this.closeMenu().then(() => this.router.navigate([route]));
  }
  navigateToHome() {
    void this.router.navigate([_hau_app_routes_const__WEBPACK_IMPORTED_MODULE_9__.HAU_ROUTES.overview.fullPath]);
  }
  navigateToAddVehicle() {
    void this.closeMenu().then(() => this.router.navigate([_hau_features_cars_cars_routes_const__WEBPACK_IMPORTED_MODULE_8__.CARS_ROUTES.create.fullPath]));
  }
  navigateToSettings() {
    void this.closeMenu().then(() => this.router.navigate(['/main/cars']));
  }
  isActive(item) {
    return this.selectedMenuItem === item.key;
  }
  resolveActiveMenuItem(path) {
    if (path.startsWith(_hau_app_routes_const__WEBPACK_IMPORTED_MODULE_9__.HAU_ROUTES.cars.fullPath)) {
      return 'garage';
    }
    if (path.startsWith(_hau_app_routes_const__WEBPACK_IMPORTED_MODULE_9__.HAU_ROUTES.documents.fullPath)) {
      return 'documents';
    }
    if (path.startsWith(_hau_app_routes_const__WEBPACK_IMPORTED_MODULE_9__.HAU_ROUTES.blog.fullPath)) {
      return 'blog';
    }
    if (path.startsWith(_hau_app_routes_const__WEBPACK_IMPORTED_MODULE_9__.HAU_ROUTES.overview.fullPath)) {
      return 'overview';
    }
    return 'overview';
  }
  logout() {
    this.authService.logout('');
    void this.closeMenu().then(() => this.router.navigate([_hau_app_routes_const__WEBPACK_IMPORTED_MODULE_9__.HAU_ROUTES.auth.fullPath]));
  }
  static {
    this.ɵfac = function MainComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_hau_features_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_hau_core_theme_service__WEBPACK_IMPORTED_MODULE_14__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_hau_autogenapi_services_car_access_service__WEBPACK_IMPORTED_MODULE_15__.CarAccessService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_hau_autogenapi_services_car_service__WEBPACK_IMPORTED_MODULE_16__.CarService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_2__.MenuController));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 73,
      vars: 42,
      consts: [["contentId", "main-content", "when", "md"], ["contentId", "main-content", "side", "start", "type", "overlay", 1, "app-sidebar"], [1, "menu-content"], [1, "sidebar-inner"], [1, "sidebar-top"], [1, "sidebar-hero"], [1, "hero-logo"], [3, "src"], [1, "hero-text"], [1, "hero-title"], [1, "hero-tag"], [1, "garage-info"], [1, "garage-icon-wrap"], [1, "garage-summary"], [1, "garage-header-row"], [1, "garage-name"], [1, "garage-badges"], [1, "garage-badge"], [1, "garage-badge", "garage-badge--shared"], [1, "sidebar-body"], ["lines", "none", 1, "sidebar-nav"], [1, "nav-section-title"], ["button", "", "detail", "false", 1, "nav-item", 3, "active"], [1, "invite-panel"], [1, "attention-panel"], ["expand", "block", "fill", "solid", 1, "add-vehicle-btn", 3, "click"], ["slot", "start", 3, "src"], [1, "sidebar-footer"], ["button", "", "detail", "false", 1, "footer-item", 3, "click"], ["slot", "end", 1, "footer-chevron", 3, "src"], ["button", "", "detail", "false", 1, "footer-item", "logout", 3, "click"], [1, "sidebar-version"], [1, "version-sep"], [1, "version-check", 3, "src"], ["id", "main-content", 1, "ion-page"], ["slot", "start"], [3, "defaultHref"], [1, "ion-padding"], ["button", "", "detail", "false", 1, "nav-item", 3, "click"], [1, "invite-heading"], [1, "invite-icon-wrap"], ["name", "mail-outline"], [1, "invite-list"], [1, "invite-row"], [1, "invite-car-info"], ["name", "car-outline", 1, "invite-car-icon"], [1, "invite-car-name"], [1, "invite-role"], [1, "invite-accept-btn", 3, "click", "disabled"], [1, "attention-heading"], [1, "attention-icon-wrap"], [1, "attention-chevron", 3, "src"], [1, "attention-notes"], [1, "attention-note"], [1, "note-bullet"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-split-pane", 0)(1, "ion-menu", 1)(2, "ion-content", 2)(3, "div", 3)(4, "div", 4)(5, "section", 5)(6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "ion-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 8)(9, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](14, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 11)(16, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "ion-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 13)(19, "div", 14)(20, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](22, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 16)(24, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](26, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](27, MainComponent_Conditional_27_Template, 3, 6, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 19)(29, "ion-list", 20)(30, "ion-list-header", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](32, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterCreate"](33, MainComponent_For_34_Template, 5, 6, "ion-item", 22, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](35, MainComponent_Conditional_35_Template, 10, 6, "section", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](36, MainComponent_Conditional_36_Template, 11, 5, "section", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "ion-button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MainComponent_Template_ion_button_click_37_listener() {
            return ctx.navigateToAddVehicle();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](38, "ion-icon", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](40, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 27)(42, "ion-item", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MainComponent_Template_ion_item_click_42_listener() {
            return ctx.navigateToSettings();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](43, "ion-icon", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](46, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](47, "ion-icon", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "ion-item", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MainComponent_Template_ion_item_click_48_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](49, "ion-icon", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](52, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](53, "ion-icon", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "div", 31)(55, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, "v1.4.0");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58, "\u2022");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, "You're up to date");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](61, "ion-icon", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "div", 34)(63, "ion-header")(64, "ion-toolbar")(65, "ion-buttons", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](66, "ion-menu-button");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](67, MainComponent_Conditional_67_Template, 1, 1, "ion-back-button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](70, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "ion-content", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](72, "ion-router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx.icons.car);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 21, "homepage"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](14, 23, "sidebar.slogan"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx.icons.home);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](22, 25, "sidebar.myGarage"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](26, 27, "sidebar.myGarageVehicles", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](40, _c0, ctx.vehicleCount)));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](ctx.sharedVehicleCount > 0 ? 27 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](32, 30, "sidebar.mainSection"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeater"](ctx.menuItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](ctx.pendingInvites.length > 0 ? 35 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](ctx.attentionItems.length > 0 ? 36 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx.icons.add);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](40, 32, "sidebar.addVehicle"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx.icons.settings);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](46, 34, "sidebar.settings"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx.icons.chevron);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx.icons.logout);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](52, 36, "sidebar.logout"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx.icons.chevron);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx.icons.checkCircle);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](ctx.showBackButton ? 67 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](70, 38, ctx.currentPageTitle));
        }
      },
      dependencies: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_2__.IonSplitPane, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_2__.IonTitle, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_2__.IonMenuButton, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_2__.IonBackButton, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_2__.IonMenu, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_2__.IonRouterOutlet, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_2__.IonList, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_2__.IonListHeader, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_2__.IonItem, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_2__.IonLabel, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_2__.IonButton, _ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__.TranslocoPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.LowerCasePipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  --sb-bg: var(--hau-surface);\n  --sb-surface: var(--hau-surface-soft);\n  --sb-border: var(--hau-border);\n  --sb-text: var(--hau-text);\n  --sb-text-muted: var(--hau-text-muted);\n  --sb-text-dim: var(--hau-text-dim);\n  --sb-accent: var(--hau-primary);\n  --sb-accent-dark: var(--hau-primary-strong);\n  --sb-accent-light: var(--hau-primary-soft);\n  --sb-accent-lighter: rgba(37, 99, 235, 0.06);\n  --sb-accent-shadow: var(--hau-primary-shadow);\n  --sb-warn-bg: var(--hau-warning-bg);\n  --sb-warn-border: var(--hau-warning-border);\n  --sb-warn-icon: var(--hau-warning-fg);\n  --sb-warn-icon-bg: var(--hau-warning-soft);\n  --sb-danger: var(--hau-danger-fg);\n  --sb-success: var(--hau-success-fg);\n  --sb-r-sm: var(--hau-radius-sm);\n  --sb-r-md: var(--hau-radius-md);\n  --sb-r-lg: var(--hau-radius-lg);\n  --sb-r-xl: var(--hau-radius-xl);\n  --sb-r-2xl: var(--hau-radius-2xl);\n  --sb-r-pill: var(--hau-radius-pill);\n}\n\nion-split-pane[_ngcontent-%COMP%] {\n  --side-width: 280px;\n  --side-min-width: 260px;\n  --side-max-width: 300px;\n  --border: 1px solid var(--sb-border);\n}\n\n.app-sidebar[_ngcontent-%COMP%] {\n  --width: min(92vw, 340px);\n  --backdrop-opacity: 0.18;\n}\n@media (min-width: 576px) {\n  .app-sidebar[_ngcontent-%COMP%] {\n    --width: 300px;\n  }\n}\n@media (min-width: 768px) {\n  .app-sidebar[_ngcontent-%COMP%] {\n    --width: 280px;\n  }\n}\n\n.menu-content[_ngcontent-%COMP%] {\n  --background: var(--sb-bg);\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\n.sidebar-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  padding: 20px 14px 18px;\n  box-sizing: border-box;\n}\n@media (min-width: 576px) {\n  .sidebar-inner[_ngcontent-%COMP%] {\n    padding: 26px 18px 22px;\n  }\n}\n@media (min-width: 768px) {\n  .sidebar-inner[_ngcontent-%COMP%] {\n    padding: 28px 20px 24px;\n  }\n}\n\n.sidebar-top[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding-bottom: 18px;\n  border-bottom: 1px solid var(--sb-border);\n  margin-bottom: 6px;\n}\n\n.sidebar-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.hero-logo[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 46px;\n  height: 46px;\n  border-radius: var(--sb-r-md);\n  background: var(--sb-accent);\n  box-shadow: 0 4px 14px var(--sb-accent-shadow);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hero-logo[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.45rem;\n  color: #ffffff;\n}\n\n.hero-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: var(--sb-text);\n  line-height: 1.2;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@media (min-width: 576px) {\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 1.06rem;\n  }\n}\n\n.hero-tag[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.2em;\n  color: var(--sb-text-dim);\n}\n@media (min-width: 576px) {\n  .hero-tag[_ngcontent-%COMP%] {\n    font-size: 0.63rem;\n  }\n}\n\n.garage-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 4px 2px;\n}\n\n.garage-icon-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: rgba(37, 99, 235, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.garage-icon-wrap[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--sb-accent);\n}\n\n.garage-summary[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.garage-header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.garage-name[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--sb-text);\n  line-height: 1.2;\n}\n\n.garage-badges[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n\n.garage-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 9px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: var(--sb-accent);\n  background: rgba(37, 99, 235, 0.12);\n  border-radius: var(--sb-r-pill);\n  line-height: 1.6;\n  white-space: nowrap;\n}\n.garage-badge--shared[_ngcontent-%COMP%] {\n  color: var(--ion-color-success, #2dd36f);\n  background: rgba(45, 211, 111, 0.12);\n}\n\n.sidebar-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding-top: 4px;\n}\n\n.sidebar-nav[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  background: transparent !important;\n}\n\n.nav-section-title[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: var(--sb-text-dim);\n  padding-left: 14px;\n  margin-bottom: 2px;\n  min-height: auto;\n}\n@media (min-width: 576px) {\n  .nav-section-title[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n  }\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  --background-activated: var(--sb-accent-light);\n  --background-hover: transparent;\n  --background-focused: transparent;\n  --border-radius: var(--sb-r-md);\n  --padding-start: 14px;\n  --padding-end: 14px;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --min-height: 46px;\n  --inner-padding-end: 0;\n  --color: var(--sb-text);\n  --ripple-color: var(--sb-accent-light);\n  margin: 2px 0;\n  border-radius: var(--sb-r-md);\n  position: relative;\n  overflow: visible;\n  transition: background 0.18s ease, color 0.18s ease, transform 0.15s ease;\n}\n.nav-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--sb-text-dim);\n  transition: color 0.18s ease;\n  margin-right: 4px;\n}\n.nav-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  --background: var(--sb-accent-light);\n  --color: var(--sb-accent);\n}\n.nav-item.active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--sb-accent);\n}\n.nav-item.active[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  height: 60%;\n  width: 3.5px;\n  border-radius: 0 var(--sb-r-pill) var(--sb-r-pill) 0;\n  background: var(--sb-accent);\n}\n.nav-item[_ngcontent-%COMP%]:not(.active):hover {\n  background: var(--hau-hover-bg);\n  transform: translateX(2px);\n}\n\n.invite-panel[_ngcontent-%COMP%] {\n  background: var(--sb-accent-lighter);\n  border: 1px solid var(--sb-accent-light);\n  border-radius: var(--sb-r-xl);\n  padding: 13px 14px 14px;\n}\n\n.invite-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  font-size: 0.87rem;\n  font-weight: 800;\n  color: var(--sb-text);\n  margin-bottom: 10px;\n}\n\n.invite-icon-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: rgba(37, 99, 235, 0.12);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.invite-icon-wrap[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--sb-accent);\n}\n\n.invite-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.invite-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n\n.invite-car-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  min-width: 0;\n}\n\n.invite-car-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 0.95rem;\n  color: var(--sb-text-muted);\n}\n\n.invite-car-name[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--sb-text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.invite-role[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--sb-text-dim);\n  flex-shrink: 0;\n}\n\n.invite-accept-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 4px 10px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #fff;\n  background: var(--sb-accent);\n  border: none;\n  border-radius: var(--sb-r-pill);\n  cursor: pointer;\n  transition: background 0.15s ease, opacity 0.15s ease;\n}\n.invite-accept-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--sb-accent-dark);\n}\n.invite-accept-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: default;\n}\n\n.attention-panel[_ngcontent-%COMP%] {\n  background: var(--sb-warn-bg);\n  border: 1px solid var(--sb-warn-border);\n  border-radius: var(--sb-r-xl);\n  padding: 13px 14px 14px;\n  cursor: pointer;\n  transition: box-shadow 0.22s ease;\n}\n.attention-panel[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 14px rgba(245, 158, 11, 0.13);\n}\n\n.attention-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  font-size: 0.87rem;\n  font-weight: 800;\n  color: var(--sb-text);\n  margin-bottom: 10px;\n}\n\n.attention-icon-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: var(--sb-warn-icon-bg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.attention-icon-wrap[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--sb-warn-icon);\n}\n\n.attention-chevron[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.9rem;\n  color: var(--sb-text-dim);\n}\n\n.attention-notes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding-left: 2px;\n}\n\n.attention-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  font-size: 0.82rem;\n  color: var(--hau-text-muted);\n  line-height: 1.45;\n}\n\n.note-bullet[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: var(--sb-warn-icon);\n  margin-top: 6px;\n}\n\n.add-vehicle-btn[_ngcontent-%COMP%] {\n  --background: var(--sb-accent);\n  --background-activated: var(--sb-accent-dark);\n  --background-hover: var(--sb-accent-dark);\n  --background-focused: var(--sb-accent-dark);\n  --border-radius: var(--sb-r-2xl);\n  --box-shadow: 0 4px 18px var(--sb-accent-shadow);\n  --color: #ffffff;\n  --padding-top: 14px;\n  --padding-bottom: 14px;\n  font-weight: 700;\n  font-size: 0.92rem;\n  letter-spacing: 0.01em;\n  text-transform: none;\n  height: 50px;\n  margin: 0;\n}\n.add-vehicle-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n}\n\n.sidebar-footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: 14px;\n  border-top: 1px solid var(--sb-border);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.footer-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  --background-activated: rgba(15, 23, 42, 0.05);\n  --background-hover: transparent;\n  --border-radius: var(--sb-r-md);\n  --padding-start: 14px;\n  --padding-end: 8px;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --min-height: 44px;\n  --inner-padding-end: 8px;\n  --color: var(--sb-text-muted);\n  --detail-icon-color: var(--sb-text-dim);\n  --detail-icon-font-size: 0.85rem;\n  border-radius: var(--sb-r-md);\n  transition: background 0.18s ease, color 0.18s ease;\n}\n.footer-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--sb-text-dim);\n  transition: color 0.18s ease;\n}\n.footer-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 600;\n}\n.footer-item[_ngcontent-%COMP%]:hover {\n  --color: var(--sb-text);\n  background: var(--hau-hover-bg);\n}\n.footer-item[_ngcontent-%COMP%]:hover   ion-icon[_ngcontent-%COMP%] {\n  color: var(--sb-text-muted);\n}\n.footer-item.logout[_ngcontent-%COMP%]:hover {\n  --color: var(--sb-danger);\n}\n.footer-item.logout[_ngcontent-%COMP%]:hover   ion-icon[_ngcontent-%COMP%] {\n  color: var(--sb-danger);\n}\n\n.sidebar-version[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 10px 14px 2px;\n  font-size: 0.71rem;\n  font-weight: 500;\n  color: var(--sb-text-dim);\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.version-sep[_ngcontent-%COMP%] {\n  opacity: 0.45;\n}\n\n.version-check[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--sb-success);\n  margin-left: 1px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsY0FBQTtFQUdBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSw4QkFBQTtFQUVBLDBCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQ0FBQTtFQUVBLCtCQUFBO0VBQ0EsMkNBQUE7RUFDQSwwQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsNkNBQUE7RUFFQSxtQ0FBQTtFQUNBLDJDQUFBO0VBQ0EscUNBQUE7RUFDQSwwQ0FBQTtFQUVBLGlDQUFBO0VBQ0EsbUNBQUE7RUFFQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7QUFURjs7QUFlQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0FBWkY7O0FBa0JBO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtBQWZGO0FBaUJFO0VBSkY7SUFJOEIsY0FBQTtFQWI1QjtBQUNGO0FBYUU7RUFMRjtJQUs4QixjQUFBO0VBVDVCO0FBQ0Y7O0FBY0E7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBWEY7O0FBaUJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBZEY7QUFnQkU7RUFQRjtJQU84Qix1QkFBQTtFQVo1QjtBQUNGO0FBWUU7RUFSRjtJQVE4Qix1QkFBQTtFQVI1QjtBQUNGOztBQWFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtBQVZGOztBQWNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQVhGOztBQWNBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFYRjtBQWFFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBWEo7O0FBZUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQVpGOztBQWVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQVpGO0FBY0U7RUFURjtJQVM4QixrQkFBQTtFQVY1QjtBQUNGOztBQVlBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQVRGO0FBV0U7RUFQRjtJQU84QixrQkFBQTtFQVA1QjtBQUNGOztBQVVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBUEY7O0FBVUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFQRjtBQVNFO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtBQVBKOztBQVdBO0VBQ0UsT0FBQTtFQUNBLFlBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBUkY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQVJGOztBQVdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUFSRjs7QUFXQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBUkY7QUFVRTtFQUNFLHdDQUFBO0VBQ0Esb0NBQUE7QUFSSjs7QUFnQkE7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBYkY7O0FBaUJBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQ0FBQTtBQWRGOztBQWlCQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFkRjtBQWdCRTtFQVZGO0lBVThCLGtCQUFBO0VBWjVCO0FBQ0Y7O0FBY0E7RUFDRSx5QkFBQTtFQUNBLDhDQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQ0FBQTtFQUVBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5RUFBQTtBQVpGO0FBY0U7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQVpKO0FBZUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFiSjtBQWdCRTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7QUFkSjtBQWdCSTtFQUFXLHVCQUFBO0FBYmY7QUFnQkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvREFBQTtFQUNBLDRCQUFBO0FBZE47QUFrQkU7RUFDRSwrQkFBQTtFQUNBLDBCQUFBO0FBaEJKOztBQXFCQTtFQUNFLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0FBbEJGOztBQXFCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQWxCRjs7QUFxQkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFsQkY7QUFvQkU7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7QUFsQko7O0FBc0JBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQW5CRjs7QUFzQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFFBQUE7QUFuQkY7O0FBc0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFuQkY7O0FBc0JBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFuQkY7O0FBc0JBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBbkJGOztBQXNCQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBbkJGOztBQXNCQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EscURBQUE7QUFuQkY7QUFxQkU7RUFDRSxpQ0FBQTtBQW5CSjtBQXNCRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBcEJKOztBQXlCQTtFQUNFLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBdEJGO0FBd0JFO0VBQ0UsK0NBQUE7QUF0Qko7O0FBMEJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBdkJGOztBQTBCQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXZCRjtBQXlCRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQXZCSjs7QUEyQkE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUF4QkY7O0FBMkJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FBeEJGOztBQTJCQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QUF4QkY7O0FBMkJBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUF4QkY7O0FBNEJBO0VBQ0UsOEJBQUE7RUFDQSw2Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQXpCRjtBQTJCRTtFQUFXLGtCQUFBO0FBeEJiOztBQThCQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUEzQkY7O0FBOEJBO0VBQ0UseUJBQUE7RUFDQSw4Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFFQSw2QkFBQTtFQUNBLG1EQUFBO0FBNUJGO0FBOEJFO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUE1Qko7QUErQkU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBN0JKO0FBZ0NFO0VBQ0UsdUJBQUE7RUFDQSwrQkFBQTtBQTlCSjtBQStCSTtFQUFXLDJCQUFBO0FBNUJmO0FBK0JFO0VBQ0UseUJBQUE7QUE3Qko7QUE4Qkk7RUFBVyx1QkFBQTtBQTNCZjs7QUFnQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBN0JGOztBQWdDQTtFQUNFLGFBQUE7QUE3QkY7O0FBZ0NBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBN0JGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyBEZXNpZ24gdG9rZW5zXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgLy8gTWFwIGxvY2FsIHRva2VucyB0byBnbG9iYWwgSEFVIGRlc2lnbiBzeXN0ZW1cbiAgLS1zYi1iZzogICAgICAgICAgICAgdmFyKC0taGF1LXN1cmZhY2UpO1xuICAtLXNiLXN1cmZhY2U6ICAgICAgICB2YXIoLS1oYXUtc3VyZmFjZS1zb2Z0KTtcbiAgLS1zYi1ib3JkZXI6ICAgICAgICAgdmFyKC0taGF1LWJvcmRlcik7XG5cbiAgLS1zYi10ZXh0OiAgICAgICAgICAgdmFyKC0taGF1LXRleHQpO1xuICAtLXNiLXRleHQtbXV0ZWQ6ICAgICB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7XG4gIC0tc2ItdGV4dC1kaW06ICAgICAgIHZhcigtLWhhdS10ZXh0LWRpbSk7XG5cbiAgLS1zYi1hY2NlbnQ6ICAgICAgICAgdmFyKC0taGF1LXByaW1hcnkpO1xuICAtLXNiLWFjY2VudC1kYXJrOiAgICB2YXIoLS1oYXUtcHJpbWFyeS1zdHJvbmcpO1xuICAtLXNiLWFjY2VudC1saWdodDogICB2YXIoLS1oYXUtcHJpbWFyeS1zb2Z0KTtcbiAgLS1zYi1hY2NlbnQtbGlnaHRlcjogcmdiYSgzNywgOTksIDIzNSwgMC4wNik7XG4gIC0tc2ItYWNjZW50LXNoYWRvdzogIHZhcigtLWhhdS1wcmltYXJ5LXNoYWRvdyk7XG5cbiAgLS1zYi13YXJuLWJnOiAgICAgICAgdmFyKC0taGF1LXdhcm5pbmctYmcpO1xuICAtLXNiLXdhcm4tYm9yZGVyOiAgICB2YXIoLS1oYXUtd2FybmluZy1ib3JkZXIpO1xuICAtLXNiLXdhcm4taWNvbjogICAgICB2YXIoLS1oYXUtd2FybmluZy1mZyk7XG4gIC0tc2Itd2Fybi1pY29uLWJnOiAgIHZhcigtLWhhdS13YXJuaW5nLXNvZnQpO1xuXG4gIC0tc2ItZGFuZ2VyOiAgICAgICAgIHZhcigtLWhhdS1kYW5nZXItZmcpO1xuICAtLXNiLXN1Y2Nlc3M6ICAgICAgICB2YXIoLS1oYXUtc3VjY2Vzcy1mZyk7XG5cbiAgLS1zYi1yLXNtOiAgIHZhcigtLWhhdS1yYWRpdXMtc20pO1xuICAtLXNiLXItbWQ6ICAgdmFyKC0taGF1LXJhZGl1cy1tZCk7XG4gIC0tc2Itci1sZzogICB2YXIoLS1oYXUtcmFkaXVzLWxnKTtcbiAgLS1zYi1yLXhsOiAgIHZhcigtLWhhdS1yYWRpdXMteGwpO1xuICAtLXNiLXItMnhsOiAgdmFyKC0taGF1LXJhZGl1cy0yeGwpO1xuICAtLXNiLXItcGlsbDogdmFyKC0taGF1LXJhZGl1cy1waWxsKTtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyBTcGxpdC1wYW5lIChwZXJzaXN0ZW50IHNpZGViYXIgb24gw6LCicKlNzY4IHB4KVxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG5pb24tc3BsaXQtcGFuZSB7XG4gIC0tc2lkZS13aWR0aDogICAgIDI4MHB4O1xuICAtLXNpZGUtbWluLXdpZHRoOiAyNjBweDtcbiAgLS1zaWRlLW1heC13aWR0aDogMzAwcHg7XG4gIC0tYm9yZGVyOiAgICAgICAgIDFweCBzb2xpZCB2YXIoLS1zYi1ib3JkZXIpO1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIE1lbnUgc2hlbGxcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmFwcC1zaWRlYmFyIHtcbiAgLS13aWR0aDogICAgICAgICAgICBtaW4oOTJ2dywgMzQwcHgpO1xuICAtLWJhY2tkcm9wLW9wYWNpdHk6IDAuMTg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7IC0td2lkdGg6IDMwMHB4OyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyAtLXdpZHRoOiAyODBweDsgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIGlvbi1jb250ZW50OiByZXNldCBwYWRkaW5nLCBzZXQgYmFja2dyb3VuZFxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ubWVudS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAgICB2YXIoLS1zYi1iZyk7XG4gIC0tcGFkZGluZy10b3A6ICAgIDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy1zdGFydDogIDA7XG4gIC0tcGFkZGluZy1lbmQ6ICAgIDA7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gSW5uZXIgZmxleCBjb2x1bW4gIChmaWxscyBpb24tY29udGVudCdzIHNjcm9sbCBjb250YWluZXIpXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5zaWRlYmFyLWlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjBweCAxNHB4IDE4cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7IHBhZGRpbmc6IDI2cHggMThweCAyMnB4OyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyBwYWRkaW5nOiAyOHB4IDIwcHggMjRweDsgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIFRPUCDDosKAwpQgaGVybyArIGdhcmFnZSBjYXJkXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5zaWRlYmFyLXRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDE4cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zYi1ib3JkZXIpO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBIZXJvIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnNpZGViYXItaGVybyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbn1cblxuLmhlcm8tbG9nbyB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogNDZweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zYi1yLW1kKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2ItYWNjZW50KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTRweCB2YXIoLS1zYi1hY2NlbnQtc2hhZG93KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS40NXJlbTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuXG4uaGVyby10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycHg7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmhlcm8tdGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiB2YXIoLS1zYi10ZXh0KTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7IGZvbnQtc2l6ZTogMS4wNnJlbTsgfVxufVxuXG4uaGVyby10YWcge1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xuICBjb2xvcjogdmFyKC0tc2ItdGV4dC1kaW0pO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgeyBmb250LXNpemU6IDAuNjNyZW07IH1cbn1cblxuLy8gw6LClMKAw6LClMKAIEdhcmFnZSBpbmZvIChub24taW50ZXJhY3RpdmUgZGlzcGxheSkgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uZ2FyYWdlLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDRweCAycHg7XG59XG5cbi5nYXJhZ2UtaWNvbi13cmFwIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgzNywgOTksIDIzNSwgMC4xNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjb2xvcjogdmFyKC0tc2ItYWNjZW50KTtcbiAgfVxufVxuXG4uZ2FyYWdlLXN1bW1hcnkge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5nYXJhZ2UtaGVhZGVyLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5nYXJhZ2UtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXNiLXRleHQpO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4uZ2FyYWdlLWJhZGdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5nYXJhZ2UtYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMnB4IDlweDtcbiAgZm9udC1zaXplOiAwLjcycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tc2ItYWNjZW50KTtcbiAgYmFja2dyb3VuZDogcmdiYSgzNywgOTksIDIzNSwgMC4xMik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNiLXItcGlsbCk7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgJi0tc2hhcmVkIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsICMyZGQzNmYpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNDUsIDIxMSwgMTExLCAwLjEyKTtcbiAgfVxufVxuXG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gQk9EWVxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uc2lkZWJhci1ib2R5IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4vLyDDosKUwoDDosKUwoAgTmF2aWdhdGlvbiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5zaWRlYmFyLW5hdiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLm5hdi1zZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjYycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4yMmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogdmFyKC0tc2ItdGV4dC1kaW0pO1xuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgbWluLWhlaWdodDogYXV0bztcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHsgZm9udC1zaXplOiAwLjY1cmVtOyB9XG59XG5cbi5uYXYtaXRlbSB7XG4gIC0tYmFja2dyb3VuZDogICAgICAgICAgIHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1zYi1hY2NlbnQtbGlnaHQpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICAgICB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICAgdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogICAgICAgIHZhcigtLXNiLXItbWQpO1xuICAtLXBhZGRpbmctc3RhcnQ6ICAgICAgICAxNHB4O1xuICAtLXBhZGRpbmctZW5kOiAgICAgICAgICAxNHB4O1xuICAtLXBhZGRpbmctdG9wOiAgICAgICAgICAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAgICAgICAwO1xuICAtLW1pbi1oZWlnaHQ6ICAgICAgICAgICA0NnB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAgICAwO1xuICAtLWNvbG9yOiAgICAgICAgICAgICAgICB2YXIoLS1zYi10ZXh0KTtcbiAgLS1yaXBwbGUtY29sb3I6ICAgICAgICAgdmFyKC0tc2ItYWNjZW50LWxpZ2h0KTtcblxuICBtYXJnaW46IDJweCAwO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zYi1yLW1kKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE4cyBlYXNlLCBjb2xvciAwLjE4cyBlYXNlLCB0cmFuc2Zvcm0gMC4xNXMgZWFzZTtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgY29sb3I6IHZhcigtLXNiLXRleHQtZGltKTtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE4cyBlYXNlO1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xuICB9XG5cbiAgJi5hY3RpdmUge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tc2ItYWNjZW50LWxpZ2h0KTtcbiAgICAtLWNvbG9yOiAgICAgIHZhcigtLXNiLWFjY2VudCk7XG5cbiAgICBpb24taWNvbiB7IGNvbG9yOiB2YXIoLS1zYi1hY2NlbnQpOyB9XG5cbiAgICAvLyBMZWZ0IGFjY2VudCBiYXJcbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICBoZWlnaHQ6IDYwJTtcbiAgICAgIHdpZHRoOiAzLjVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgdmFyKC0tc2Itci1waWxsKSB2YXIoLS1zYi1yLXBpbGwpIDA7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zYi1hY2NlbnQpO1xuICAgIH1cbiAgfVxuXG4gICY6bm90KC5hY3RpdmUpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtaG92ZXItYmcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpO1xuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBJbnZpdGUgcGFuZWwgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uaW52aXRlLXBhbmVsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2ItYWNjZW50LWxpZ2h0ZXIpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zYi1hY2NlbnQtbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zYi1yLXhsKTtcbiAgcGFkZGluZzogMTNweCAxNHB4IDE0cHg7XG59XG5cbi5pbnZpdGUtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOXB4O1xuICBmb250LXNpemU6IDAuODdyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiB2YXIoLS1zYi10ZXh0KTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmludml0ZS1pY29uLXdyYXAge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDM3LCA5OSwgMjM1LCAwLjEyKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogdmFyKC0tc2ItYWNjZW50KTtcbiAgfVxufVxuXG4uaW52aXRlLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbn1cblxuLmludml0ZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogOHB4O1xufVxuXG4uaW52aXRlLWNhci1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmludml0ZS1jYXItaWNvbiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGNvbG9yOiB2YXIoLS1zYi10ZXh0LW11dGVkKTtcbn1cblxuLmludml0ZS1jYXItbmFtZSB7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXNiLXRleHQpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmludml0ZS1yb2xlIHtcbiAgZm9udC1zaXplOiAwLjcycmVtO1xuICBjb2xvcjogdmFyKC0tc2ItdGV4dC1kaW0pO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmludml0ZS1hY2NlcHQtYnRuIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zYi1hY2NlbnQpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNiLXItcGlsbCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlLCBvcGFjaXR5IDAuMTVzIGVhc2U7XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2ItYWNjZW50LWRhcmspO1xuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC41NTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAIEF0dGVudGlvbiBwYW5lbCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5hdHRlbnRpb24tcGFuZWwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zYi13YXJuLWJnKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Itd2Fybi1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zYi1yLXhsKTtcbiAgcGFkZGluZzogMTNweCAxNHB4IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjIycyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSgyNDUsIDE1OCwgMTEsIDAuMTMpO1xuICB9XG59XG5cbi5hdHRlbnRpb24taGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOXB4O1xuICBmb250LXNpemU6IDAuODdyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiB2YXIoLS1zYi10ZXh0KTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmF0dGVudGlvbi1pY29uLXdyYXAge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zYi13YXJuLWljb24tYmcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1zYi13YXJuLWljb24pO1xuICB9XG59XG5cbi5hdHRlbnRpb24tY2hldnJvbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHZhcigtLXNiLXRleHQtZGltKTtcbn1cblxuLmF0dGVudGlvbi1ub3RlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbn1cblxuLmF0dGVudGlvbi1ub3RlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogOHB4O1xuICBmb250LXNpemU6IDAuODJyZW07XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xufVxuXG4ubm90ZS1idWxsZXQge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Itd2Fybi1pY29uKTtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4vLyDDosKUwoDDosKUwoAgQWRkIHZlaGljbGUgYnV0dG9uIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmFkZC12ZWhpY2xlLWJ0biB7XG4gIC0tYmFja2dyb3VuZDogICAgICAgICAgIHZhcigtLXNiLWFjY2VudCk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLXNiLWFjY2VudC1kYXJrKTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAgICAgdmFyKC0tc2ItYWNjZW50LWRhcmspO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogICB2YXIoLS1zYi1hY2NlbnQtZGFyayk7XG4gIC0tYm9yZGVyLXJhZGl1czogICAgICAgIHZhcigtLXNiLXItMnhsKTtcbiAgLS1ib3gtc2hhZG93OiAgICAgICAgICAgMCA0cHggMThweCB2YXIoLS1zYi1hY2NlbnQtc2hhZG93KTtcbiAgLS1jb2xvcjogICAgICAgICAgICAgICAgI2ZmZmZmZjtcbiAgLS1wYWRkaW5nLXRvcDogICAgICAgICAgMTRweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogICAgICAgMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAwLjkycmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDA7XG5cbiAgaW9uLWljb24geyBmb250LXNpemU6IDEuMTVyZW07IH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyBGT09URVJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnNpZGViYXItZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgcGFkZGluZy10b3A6IDE0cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1zYi1ib3JkZXIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJweDtcbn1cblxuLmZvb3Rlci1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAgICAgICAgICAgdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEoMTUsIDIzLCA0MiwgMC4wNSk7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogICAgIHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1yYWRpdXM6ICAgICAgICB2YXIoLS1zYi1yLW1kKTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAgICAgICAgMTRweDtcbiAgLS1wYWRkaW5nLWVuZDogICAgICAgICAgOHB4O1xuICAtLXBhZGRpbmctdG9wOiAgICAgICAgICAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAgICAgICAwO1xuICAtLW1pbi1oZWlnaHQ6ICAgICAgICAgICA0NHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAgICA4cHg7XG4gIC0tY29sb3I6ICAgICAgICAgICAgICAgIHZhcigtLXNiLXRleHQtbXV0ZWQpO1xuICAtLWRldGFpbC1pY29uLWNvbG9yOiAgICB2YXIoLS1zYi10ZXh0LWRpbSk7XG4gIC0tZGV0YWlsLWljb24tZm9udC1zaXplOiAwLjg1cmVtO1xuXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNiLXItbWQpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMThzIGVhc2UsIGNvbG9yIDAuMThzIGVhc2U7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogdmFyKC0tc2ItdGV4dC1kaW0pO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMThzIGVhc2U7XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgLS1jb2xvcjogdmFyKC0tc2ItdGV4dCk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taGF1LWhvdmVyLWJnKTtcbiAgICBpb24taWNvbiB7IGNvbG9yOiB2YXIoLS1zYi10ZXh0LW11dGVkKTsgfVxuICB9XG5cbiAgJi5sb2dvdXQ6aG92ZXIge1xuICAgIC0tY29sb3I6IHZhcigtLXNiLWRhbmdlcik7XG4gICAgaW9uLWljb24geyBjb2xvcjogdmFyKC0tc2ItZGFuZ2VyKTsgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBWZXJzaW9uIGJhZGdlIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnNpZGViYXItdmVyc2lvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBwYWRkaW5nOiAxMHB4IDE0cHggMnB4O1xuICBmb250LXNpemU6IDAuNzFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1zYi10ZXh0LWRpbSk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4udmVyc2lvbi1zZXAge1xuICBvcGFjaXR5OiAwLjQ1O1xufVxuXG4udmVyc2lvbi1jaGVjayB7XG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgY29sb3I6IHZhcigtLXNiLXN1Y2Nlc3MpO1xuICBtYXJnaW4tbGVmdDogMXB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ },

/***/ 56327
/*!**********************************************!*\
  !*** ./src/app/features/main/main.routes.ts ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mainRoutes: () => (/* binding */ mainRoutes)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _hau_app_routes_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hau/app.routes.const */ 85276);
/* harmony import */ var _hau_features_cars_state_car_details_car_details_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/features/cars/state/car-details/car-details.facade */ 48899);
/* harmony import */ var _hau_features_cars_state_car_details_car_details_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hau/features/cars/state/car-details/car-details.state */ 88076);
/* harmony import */ var _hau_features_cars_state_car_list_car_list_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hau/features/cars/state/car-list/car-list.facade */ 6295);
/* harmony import */ var _hau_features_cars_state_car_list_car_list_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hau/features/cars/state/car-list/car-list.state */ 58056);
/* harmony import */ var _hau_features_blog_state_blog_facade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hau/features/blog/state/blog.facade */ 74371);
/* harmony import */ var _hau_features_blog_state_blog_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @hau/features/blog/state/blog.state */ 42764);
/* harmony import */ var _hau_features_documents_state_documents_facade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @hau/features/documents/state/documents.facade */ 40977);
/* harmony import */ var _hau_features_documents_state_documents_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @hau/features/documents/state/documents.state */ 32770);
/* harmony import */ var _hau_features_main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @hau/features/main/main.component */ 20442);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngxs/store */ 68267);












const mainRoutes = [{
  path: '',
  component: _hau_features_main_main_component__WEBPACK_IMPORTED_MODULE_10__.MainComponent,
  children: [{
    path: _hau_app_routes_const__WEBPACK_IMPORTED_MODULE_1__.HAU_ROUTES.overview.path,
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_features_overview_overview_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../overview/overview.component */ 49650)).then(m => m.OverviewComponent),
    providers: [_hau_features_cars_state_car_list_car_list_facade__WEBPACK_IMPORTED_MODULE_4__.CarListFacade, (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.importProvidersFrom)(_ngxs_store__WEBPACK_IMPORTED_MODULE_11__.NgxsModule.forFeature([_hau_features_cars_state_car_list_car_list_state__WEBPACK_IMPORTED_MODULE_5__.CarListState]))]
  }, {
    path: _hau_app_routes_const__WEBPACK_IMPORTED_MODULE_1__.HAU_ROUTES.cars.path,
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_cars_cars_routes_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../cars/cars.routes */ 32511)).then(mod => mod.carRoutes),
    providers: [_hau_features_cars_state_car_list_car_list_facade__WEBPACK_IMPORTED_MODULE_4__.CarListFacade, _hau_features_cars_state_car_details_car_details_facade__WEBPACK_IMPORTED_MODULE_2__.CarDetailsFacade, (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.importProvidersFrom)(_ngxs_store__WEBPACK_IMPORTED_MODULE_11__.NgxsModule.forFeature([_hau_features_cars_state_car_list_car_list_state__WEBPACK_IMPORTED_MODULE_5__.CarListState, _hau_features_cars_state_car_details_car_details_state__WEBPACK_IMPORTED_MODULE_3__.CarDetailsState]))]
  }, {
    path: _hau_app_routes_const__WEBPACK_IMPORTED_MODULE_1__.HAU_ROUTES.documents.path,
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_documents_documents_routes_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../documents/documents.routes */ 36351)).then(mod => mod.documentsRoutes),
    providers: [_hau_features_documents_state_documents_facade__WEBPACK_IMPORTED_MODULE_8__.DocumentsFacade, (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.importProvidersFrom)(_ngxs_store__WEBPACK_IMPORTED_MODULE_11__.NgxsModule.forFeature([_hau_features_documents_state_documents_state__WEBPACK_IMPORTED_MODULE_9__.DocumentsState]))]
  }, {
    path: _hau_app_routes_const__WEBPACK_IMPORTED_MODULE_1__.HAU_ROUTES.blog.path,
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_blog_blog_routes_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../blog/blog.routes */ 42989)).then(mod => mod.blogRoutes),
    providers: [_hau_features_blog_state_blog_facade__WEBPACK_IMPORTED_MODULE_6__.BlogFacade, (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.importProvidersFrom)(_ngxs_store__WEBPACK_IMPORTED_MODULE_11__.NgxsModule.forFeature([_hau_features_blog_state_blog_state__WEBPACK_IMPORTED_MODULE_7__.BlogState]))]
  }, {
    path: _hau_app_routes_const__WEBPACK_IMPORTED_MODULE_1__.HAU_ROUTES.maintenance.path,
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_maintenance_maintenance_routes_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../maintenance/maintenance.routes */ 65303)).then(mod => mod.maintenanceRoutes)
  }, {
    path: '**',
    redirectTo: _hau_app_routes_const__WEBPACK_IMPORTED_MODULE_1__.HAU_ROUTES.overview.path
  }]
}];

/***/ },

/***/ 82024
/*!*****************************************************************!*\
  !*** ./src/auto-gen/api/fn/auth/auth-controller-get-profile.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authControllerGetProfile: () => (/* binding */ authControllerGetProfile)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function authControllerGetProfile(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, authControllerGetProfile.PATH, 'get');
  if (params) {}
  return http.request(rb.build({
    responseType: 'text',
    accept: '*/*',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => {
    return r.clone({
      body: undefined
    });
  }));
}
authControllerGetProfile.PATH = '/api/auth/me';

/***/ },

/***/ 72677
/*!**************************************************************************!*\
  !*** ./src/auto-gen/api/fn/auth/auth-controller-google-auth-redirect.ts ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authControllerGoogleAuthRedirect: () => (/* binding */ authControllerGoogleAuthRedirect)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function authControllerGoogleAuthRedirect(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, authControllerGoogleAuthRedirect.PATH, 'get');
  if (params) {}
  return http.request(rb.build({
    responseType: 'text',
    accept: '*/*',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => {
    return r.clone({
      body: undefined
    });
  }));
}
authControllerGoogleAuthRedirect.PATH = '/api/auth/google/redirect';

/***/ },

/***/ 85213
/*!***********************************************************!*\
  !*** ./src/auto-gen/api/fn/auth/auth-controller-login.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authControllerLogin: () => (/* binding */ authControllerLogin)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function authControllerLogin(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, authControllerLogin.PATH, 'get');
  if (params) {}
  return http.request(rb.build({
    responseType: 'text',
    accept: '*/*',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => {
    return r.clone({
      body: undefined
    });
  }));
}
authControllerLogin.PATH = '/api/auth/google';

/***/ },

/***/ 84912
/*!************************************************************!*\
  !*** ./src/auto-gen/api/fn/auth/auth-controller-logout.ts ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authControllerLogout: () => (/* binding */ authControllerLogout)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function authControllerLogout(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, authControllerLogout.PATH, 'post');
  if (params) {}
  return http.request(rb.build({
    responseType: 'text',
    accept: '*/*',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => {
    return r.clone({
      body: undefined
    });
  }));
}
authControllerLogout.PATH = '/api/auth/logout';

/***/ },

/***/ 70590
/*!**************************************************************************!*\
  !*** ./src/auto-gen/api/fn/auth/auth-controller-refresh-access-token.ts ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authControllerRefreshAccessToken: () => (/* binding */ authControllerRefreshAccessToken)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function authControllerRefreshAccessToken(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, authControllerRefreshAccessToken.PATH, 'post');
  if (params) {}
  return http.request(rb.build({
    responseType: 'text',
    accept: '*/*',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => {
    return r.clone({
      body: undefined
    });
  }));
}
authControllerRefreshAccessToken.PATH = '/api/auth/refresh';

/***/ },

/***/ 25783
/*!******************************************************************!*\
  !*** ./src/auto-gen/api/fn/blog/blog-controller-create-entry.ts ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blogControllerCreateEntry: () => (/* binding */ blogControllerCreateEntry)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function blogControllerCreateEntry(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, blogControllerCreateEntry.PATH, 'post');
  rb.body(params.body, 'application/json');
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => r));
}
blogControllerCreateEntry.PATH = '/api/blog';

/***/ },

/***/ 83372
/*!******************************************************************!*\
  !*** ./src/auto-gen/api/fn/blog/blog-controller-delete-entry.ts ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blogControllerDeleteEntry: () => (/* binding */ blogControllerDeleteEntry)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function blogControllerDeleteEntry(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, blogControllerDeleteEntry.PATH, 'delete');
  rb.path('id', params.id);
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => r));
}
blogControllerDeleteEntry.PATH = '/api/blog/{id}';

/***/ },

/***/ 76685
/*!*****************************************************************!*\
  !*** ./src/auto-gen/api/fn/blog/blog-controller-get-entries.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blogControllerGetEntries: () => (/* binding */ blogControllerGetEntries)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function blogControllerGetEntries(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, blogControllerGetEntries.PATH, 'get');
  if (params) {
    if (params.category != null) rb.query('category', params.category);
    if (params.car_id != null) rb.query('car_id', params.car_id);
    if (params.vehicle_category != null) rb.query('vehicle_category', params.vehicle_category);
    if (params.search != null) rb.query('search', params.search);
    if (params.is_pinned != null) rb.query('is_pinned', params.is_pinned);
  }
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => r));
}
blogControllerGetEntries.PATH = '/api/blog';

/***/ },

/***/ 22073
/*!***************************************************************!*\
  !*** ./src/auto-gen/api/fn/blog/blog-controller-get-entry.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blogControllerGetEntry: () => (/* binding */ blogControllerGetEntry)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function blogControllerGetEntry(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, blogControllerGetEntry.PATH, 'get');
  rb.path('id', params.id);
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => r));
}
blogControllerGetEntry.PATH = '/api/blog/{id}';

/***/ },

/***/ 58902
/*!****************************************************************************!*\
  !*** ./src/auto-gen/api/fn/blog/blog-controller-get-vehicle-categories.ts ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blogControllerGetVehicleCategories: () => (/* binding */ blogControllerGetVehicleCategories)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function blogControllerGetVehicleCategories(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, blogControllerGetVehicleCategories.PATH, 'get');
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => r));
}
blogControllerGetVehicleCategories.PATH = '/api/blog/categories/vehicle';

/***/ },

/***/ 75456
/*!****************************************************************!*\
  !*** ./src/auto-gen/api/fn/blog/blog-controller-toggle-pin.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blogControllerTogglePin: () => (/* binding */ blogControllerTogglePin)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function blogControllerTogglePin(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, blogControllerTogglePin.PATH, 'patch');
  rb.path('id', params.id);
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => r));
}
blogControllerTogglePin.PATH = '/api/blog/{id}/pin';

/***/ },

/***/ 13702
/*!******************************************************************!*\
  !*** ./src/auto-gen/api/fn/blog/blog-controller-update-entry.ts ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blogControllerUpdateEntry: () => (/* binding */ blogControllerUpdateEntry)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function blogControllerUpdateEntry(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, blogControllerUpdateEntry.PATH, 'put');
  rb.path('id', params.id);
  rb.body(params.body, 'application/json');
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => r));
}
blogControllerUpdateEntry.PATH = '/api/blog/{id}';

/***/ },

/***/ 12830
/*!***********************************************************************************!*\
  !*** ./src/auto-gen/api/fn/car-access/car-access-controller-accept-invitation.ts ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carAccessControllerAcceptInvitation: () => (/* binding */ carAccessControllerAcceptInvitation)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);



function carAccessControllerAcceptInvitation(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, carAccessControllerAcceptInvitation.PATH, 'post');
  rb.path('carId', params.carId, {});
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => r));
}
carAccessControllerAcceptInvitation.PATH = '/api/car/{carId}/access/accept';

/***/ },

/***/ 46613
/*!*****************************************************************************!*\
  !*** ./src/auto-gen/api/fn/car-access/car-access-controller-change-role.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carAccessControllerChangeRole: () => (/* binding */ carAccessControllerChangeRole)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);



function carAccessControllerChangeRole(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, carAccessControllerChangeRole.PATH, 'patch');
  rb.path('carId', params.carId, {});
  rb.path('targetUserId', params.targetUserId, {});
  rb.body(params.body, 'application/json');
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => r));
}
carAccessControllerChangeRole.PATH = '/api/car/{carId}/access/{targetUserId}/role';

/***/ },

/***/ 71178
/*!*********************************************************************************!*\
  !*** ./src/auto-gen/api/fn/car-access/car-access-controller-get-access-list.ts ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carAccessControllerGetAccessList: () => (/* binding */ carAccessControllerGetAccessList)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);



function carAccessControllerGetAccessList(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, carAccessControllerGetAccessList.PATH, 'get');
  rb.path('carId', params.carId, {});
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => r));
}
carAccessControllerGetAccessList.PATH = '/api/car/{carId}/access';

/***/ },

/***/ 6224
/*!*********************************************************************************!*\
  !*** ./src/auto-gen/api/fn/car-access/car-access-controller-get-shared-cars.ts ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carAccessControllerGetSharedCars: () => (/* binding */ carAccessControllerGetSharedCars)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);



function carAccessControllerGetSharedCars(http, rootUrl, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, carAccessControllerGetSharedCars.PATH, 'get');
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => r));
}
carAccessControllerGetSharedCars.PATH = '/api/car/shared';

/***/ },

/***/ 21241
/*!*****************************************************************************!*\
  !*** ./src/auto-gen/api/fn/car-access/car-access-controller-invite-user.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carAccessControllerInviteUser: () => (/* binding */ carAccessControllerInviteUser)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);



function carAccessControllerInviteUser(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, carAccessControllerInviteUser.PATH, 'post');
  rb.path('carId', params.carId, {});
  rb.body(params.body, 'application/json');
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => r));
}
carAccessControllerInviteUser.PATH = '/api/car/{carId}/access/invite';

/***/ },

/***/ 89615
/*!*******************************************************************************!*\
  !*** ./src/auto-gen/api/fn/car-access/car-access-controller-remove-access.ts ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carAccessControllerRemoveAccess: () => (/* binding */ carAccessControllerRemoveAccess)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);



function carAccessControllerRemoveAccess(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, carAccessControllerRemoveAccess.PATH, 'delete');
  rb.path('carId', params.carId, {});
  rb.path('targetUserId', params.targetUserId, {});
  return http.request(rb.build({
    responseType: 'text',
    accept: '*/*',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => r));
}
carAccessControllerRemoveAccess.PATH = '/api/car/{carId}/access/{targetUserId}';

/***/ },

/***/ 91287
/*!**************************************************************!*\
  !*** ./src/auto-gen/api/fn/car/car-controller-create-car.ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carControllerCreateCar: () => (/* binding */ carControllerCreateCar)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function carControllerCreateCar(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, carControllerCreateCar.PATH, 'post');
  if (params) {
    const {
      files,
      ...carData
    } = params.body;
    const formData = new FormData();
    Object.entries(carData).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        formData.append(key, String(value));
      }
    });
    if (files && files.length > 0) {
      files.forEach(file => formData.append('files', file));
    }
    rb.body(formData);
  }
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => r));
}
carControllerCreateCar.PATH = '/api/car';

/***/ },

/***/ 74712
/*!**************************************************************!*\
  !*** ./src/auto-gen/api/fn/car/car-controller-delete-car.ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carControllerDeleteCar: () => (/* binding */ carControllerDeleteCar)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function carControllerDeleteCar(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, carControllerDeleteCar.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
  }
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => {
    return r;
  }));
}
carControllerDeleteCar.PATH = '/api/car/{id}';

/***/ },

/***/ 89402
/*!****************************************************************!*\
  !*** ./src/auto-gen/api/fn/car/car-controller-delete-photo.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carControllerDeletePhoto: () => (/* binding */ carControllerDeletePhoto)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function carControllerDeletePhoto(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, carControllerDeletePhoto.PATH, 'delete');
  rb.path('photoId', params.photoId);
  return http.request(rb.build({
    responseType: 'text',
    accept: '*/*',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => r));
}
carControllerDeletePhoto.PATH = '/api/car/photo/{photoId}';

/***/ },

/***/ 98238
/*!****************************************************************!*\
  !*** ./src/auto-gen/api/fn/car/car-controller-get-all-cars.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carControllerGetAllCars: () => (/* binding */ carControllerGetAllCars)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function carControllerGetAllCars(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, carControllerGetAllCars.PATH, 'get');
  if (params) {}
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => {
    return r;
  }));
}
carControllerGetAllCars.PATH = '/api/car';

/***/ },

/***/ 8417
/*!***********************************************************!*\
  !*** ./src/auto-gen/api/fn/car/car-controller-get-car.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carControllerGetCar: () => (/* binding */ carControllerGetCar)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function carControllerGetCar(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, carControllerGetCar.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => {
    return r;
  }));
}
carControllerGetCar.PATH = '/api/car/{id}';

/***/ },

/***/ 55030
/*!********************************************************************!*\
  !*** ./src/auto-gen/api/fn/car/car-controller-get-cars-by-user.ts ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carControllerGetCarsByUser: () => (/* binding */ carControllerGetCarsByUser)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function carControllerGetCarsByUser(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, carControllerGetCarsByUser.PATH, 'get');
  if (params) {
    rb.path('user-id', params['user-id'], {});
  }
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => {
    return r;
  }));
}
carControllerGetCarsByUser.PATH = '/api/car/user/{userId}';

/***/ },

/***/ 76125
/*!****************************************************************!*\
  !*** ./src/auto-gen/api/fn/car/car-controller-mark-as-sold.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carControllerMarkAsSold: () => (/* binding */ carControllerMarkAsSold)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function carControllerMarkAsSold(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, carControllerMarkAsSold.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
  }
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => {
    return r;
  }));
}
carControllerMarkAsSold.PATH = '/api/car/{id}/sold';

/***/ },

/***/ 93032
/*!***********************************************************!*\
  !*** ./src/auto-gen/api/fn/car/car-controller-restore.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carControllerRestore: () => (/* binding */ carControllerRestore)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function carControllerRestore(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, carControllerRestore.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
  }
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => {
    return r;
  }));
}
carControllerRestore.PATH = '/api/car/{id}/restore';

/***/ },

/***/ 85730
/*!**************************************************************!*\
  !*** ./src/auto-gen/api/fn/car/car-controller-update-car.ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carControllerUpdateCar: () => (/* binding */ carControllerUpdateCar)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function carControllerUpdateCar(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, carControllerUpdateCar.PATH, 'put');
  if (params) {
    const {
      files,
      delete_photo_ids,
      default_photo_id,
      default_new_photo_index,
      ...carData
    } = params.body;
    const formData = new FormData();
    Object.entries(carData).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        formData.append(key, String(value));
      }
    });
    if (files && files.length > 0) {
      files.forEach(file => formData.append('files', file));
    }
    if (delete_photo_ids && delete_photo_ids.length > 0) {
      formData.append('delete_photo_ids', JSON.stringify(delete_photo_ids));
    }
    if (default_photo_id != null) {
      formData.append('default_photo_id', String(default_photo_id));
    }
    if (default_new_photo_index != null) {
      formData.append('default_new_photo_index', String(default_new_photo_index));
    }
    rb.body(formData);
  }
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => r));
}
carControllerUpdateCar.PATH = '/api/car';

/***/ },

/***/ 22484
/*!*****************************************************************************!*\
  !*** ./src/auto-gen/api/fn/document/document-controller-create-document.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   documentControllerCreateDocument: () => (/* binding */ documentControllerCreateDocument)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function documentControllerCreateDocument(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, documentControllerCreateDocument.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => {
    return r;
  }));
}
documentControllerCreateDocument.PATH = '/api/document';

/***/ },

/***/ 45153
/*!*****************************************************************************!*\
  !*** ./src/auto-gen/api/fn/document/document-controller-delete-document.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   documentControllerDeleteDocument: () => (/* binding */ documentControllerDeleteDocument)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function documentControllerDeleteDocument(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, documentControllerDeleteDocument.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
  }
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => {
    return r;
  }));
}
documentControllerDeleteDocument.PATH = '/api/document/{id}';

/***/ },

/***/ 21174
/*!**************************************************************************!*\
  !*** ./src/auto-gen/api/fn/document/document-controller-get-document.ts ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   documentControllerGetDocument: () => (/* binding */ documentControllerGetDocument)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function documentControllerGetDocument(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, documentControllerGetDocument.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => {
    return r;
  }));
}
documentControllerGetDocument.PATH = '/api/document/{id}';

/***/ },

/***/ 84540
/*!*************************************************************************************!*\
  !*** ./src/auto-gen/api/fn/document/document-controller-get-documents-by-car-id.ts ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   documentControllerGetDocumentsByCarId: () => (/* binding */ documentControllerGetDocumentsByCarId)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function documentControllerGetDocumentsByCarId(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, documentControllerGetDocumentsByCarId.PATH, 'get');
  if (params) {
    rb.path('carId', params.carId, {});
  }
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => {
    return r;
  }));
}
documentControllerGetDocumentsByCarId.PATH = '/api/document/car/{carId}';

/***/ },

/***/ 90787
/*!*****************************************************************************!*\
  !*** ./src/auto-gen/api/fn/document/document-controller-update-document.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   documentControllerUpdateDocument: () => (/* binding */ documentControllerUpdateDocument)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function documentControllerUpdateDocument(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, documentControllerUpdateDocument.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => {
    return r;
  }));
}
documentControllerUpdateDocument.PATH = '/api/document/{id}';

/***/ },

/***/ 32422
/*!***********************************************************************************************************!*\
  !*** ./src/auto-gen/api/fn/maintenance-record/maintenance-record-controller-create-maintenance-record.ts ***!
  \***********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   maintenanceRecordControllerCreateMaintenanceRecord: () => (/* binding */ maintenanceRecordControllerCreateMaintenanceRecord)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function maintenanceRecordControllerCreateMaintenanceRecord(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, maintenanceRecordControllerCreateMaintenanceRecord.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => {
    return r;
  }));
}
maintenanceRecordControllerCreateMaintenanceRecord.PATH = '/api/maintenance-record';

/***/ },

/***/ 43907
/*!***********************************************************************************************************!*\
  !*** ./src/auto-gen/api/fn/maintenance-record/maintenance-record-controller-delete-maintenance-record.ts ***!
  \***********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   maintenanceRecordControllerDeleteMaintenanceRecord: () => (/* binding */ maintenanceRecordControllerDeleteMaintenanceRecord)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function maintenanceRecordControllerDeleteMaintenanceRecord(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, maintenanceRecordControllerDeleteMaintenanceRecord.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
  }
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => {
    return r;
  }));
}
maintenanceRecordControllerDeleteMaintenanceRecord.PATH = '/api/maintenance-record/{id}';

/***/ },

/***/ 12436
/*!********************************************************************************************************!*\
  !*** ./src/auto-gen/api/fn/maintenance-record/maintenance-record-controller-get-maintenance-record.ts ***!
  \********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   maintenanceRecordControllerGetMaintenanceRecord: () => (/* binding */ maintenanceRecordControllerGetMaintenanceRecord)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function maintenanceRecordControllerGetMaintenanceRecord(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, maintenanceRecordControllerGetMaintenanceRecord.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => {
    return r;
  }));
}
maintenanceRecordControllerGetMaintenanceRecord.PATH = '/api/maintenance-record/{id}';

/***/ },

/***/ 34982
/*!*******************************************************************************************************************!*\
  !*** ./src/auto-gen/api/fn/maintenance-record/maintenance-record-controller-get-maintenance-records-by-car-id.ts ***!
  \*******************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   maintenanceRecordControllerGetMaintenanceRecordsByCarId: () => (/* binding */ maintenanceRecordControllerGetMaintenanceRecordsByCarId)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function maintenanceRecordControllerGetMaintenanceRecordsByCarId(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, maintenanceRecordControllerGetMaintenanceRecordsByCarId.PATH, 'get');
  if (params) {
    rb.path('carId', params.carId, {});
  }
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => {
    return r;
  }));
}
maintenanceRecordControllerGetMaintenanceRecordsByCarId.PATH = '/api/maintenance-record/car/{carId}';

/***/ },

/***/ 89249
/*!***********************************************************************************************************!*\
  !*** ./src/auto-gen/api/fn/maintenance-record/maintenance-record-controller-update-maintenance-record.ts ***!
  \***********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   maintenanceRecordControllerUpdateMaintenanceRecord: () => (/* binding */ maintenanceRecordControllerUpdateMaintenanceRecord)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function maintenanceRecordControllerUpdateMaintenanceRecord(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, maintenanceRecordControllerUpdateMaintenanceRecord.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => {
    return r;
  }));
}
maintenanceRecordControllerUpdateMaintenanceRecord.PATH = '/api/maintenance-record/{id}';

/***/ },

/***/ 97232
/*!*************************************************************************************!*\
  !*** ./src/auto-gen/api/fn/vehicle-catalog/vehicle-catalog-controller-get-makes.ts ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   vehicleCatalogControllerGetMakes: () => (/* binding */ vehicleCatalogControllerGetMakes)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function vehicleCatalogControllerGetMakes(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, vehicleCatalogControllerGetMakes.PATH, 'get');
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => r));
}
vehicleCatalogControllerGetMakes.PATH = '/api/vehicle-catalog/makes';

/***/ },

/***/ 54461
/*!**************************************************************************************!*\
  !*** ./src/auto-gen/api/fn/vehicle-catalog/vehicle-catalog-controller-get-models.ts ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   vehicleCatalogControllerGetModels: () => (/* binding */ vehicleCatalogControllerGetModels)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function vehicleCatalogControllerGetModels(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, vehicleCatalogControllerGetModels.PATH, 'get');
  rb.path('makeId', params.makeId, {});
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => r));
}
vehicleCatalogControllerGetModels.PATH = '/api/vehicle-catalog/makes/{makeId}/models';

/***/ },

/***/ 53965
/*!*************************************************************************************!*\
  !*** ./src/auto-gen/api/fn/vehicle-catalog/vehicle-catalog-controller-get-years.ts ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   vehicleCatalogControllerGetYears: () => (/* binding */ vehicleCatalogControllerGetYears)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 73743);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */



function vehicleCatalogControllerGetYears(http, rootUrl, params, context) {
  const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__.RequestBuilder(rootUrl, vehicleCatalogControllerGetYears.PATH, 'get');
  rb.path('modelId', params.modelId, {});
  return http.request(rb.build({
    responseType: 'json',
    accept: 'application/json',
    context
  })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => r));
}
vehicleCatalogControllerGetYears.PATH = '/api/vehicle-catalog/models/{modelId}/years';

/***/ },

/***/ 79181
/*!***************************************!*\
  !*** ./src/auto-gen/api/functions.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authControllerGetProfile: () => (/* reexport safe */ _fn_auth_auth_controller_get_profile__WEBPACK_IMPORTED_MODULE_22__.authControllerGetProfile),
/* harmony export */   authControllerGoogleAuthRedirect: () => (/* reexport safe */ _fn_auth_auth_controller_google_auth_redirect__WEBPACK_IMPORTED_MODULE_20__.authControllerGoogleAuthRedirect),
/* harmony export */   authControllerLogin: () => (/* reexport safe */ _fn_auth_auth_controller_login__WEBPACK_IMPORTED_MODULE_19__.authControllerLogin),
/* harmony export */   authControllerLogout: () => (/* reexport safe */ _fn_auth_auth_controller_logout__WEBPACK_IMPORTED_MODULE_23__.authControllerLogout),
/* harmony export */   authControllerRefreshAccessToken: () => (/* reexport safe */ _fn_auth_auth_controller_refresh_access_token__WEBPACK_IMPORTED_MODULE_21__.authControllerRefreshAccessToken),
/* harmony export */   blogControllerCreateEntry: () => (/* reexport safe */ _fn_blog_blog_controller_create_entry__WEBPACK_IMPORTED_MODULE_34__.blogControllerCreateEntry),
/* harmony export */   blogControllerDeleteEntry: () => (/* reexport safe */ _fn_blog_blog_controller_delete_entry__WEBPACK_IMPORTED_MODULE_36__.blogControllerDeleteEntry),
/* harmony export */   blogControllerGetEntries: () => (/* reexport safe */ _fn_blog_blog_controller_get_entries__WEBPACK_IMPORTED_MODULE_32__.blogControllerGetEntries),
/* harmony export */   blogControllerGetEntry: () => (/* reexport safe */ _fn_blog_blog_controller_get_entry__WEBPACK_IMPORTED_MODULE_33__.blogControllerGetEntry),
/* harmony export */   blogControllerGetVehicleCategories: () => (/* reexport safe */ _fn_blog_blog_controller_get_vehicle_categories__WEBPACK_IMPORTED_MODULE_31__.blogControllerGetVehicleCategories),
/* harmony export */   blogControllerTogglePin: () => (/* reexport safe */ _fn_blog_blog_controller_toggle_pin__WEBPACK_IMPORTED_MODULE_37__.blogControllerTogglePin),
/* harmony export */   blogControllerUpdateEntry: () => (/* reexport safe */ _fn_blog_blog_controller_update_entry__WEBPACK_IMPORTED_MODULE_35__.blogControllerUpdateEntry),
/* harmony export */   carAccessControllerChangeRole: () => (/* reexport safe */ _fn_car_access_car_access_controller_change_role__WEBPACK_IMPORTED_MODULE_30__.carAccessControllerChangeRole),
/* harmony export */   carAccessControllerGetAccessList: () => (/* reexport safe */ _fn_car_access_car_access_controller_get_access_list__WEBPACK_IMPORTED_MODULE_27__.carAccessControllerGetAccessList),
/* harmony export */   carAccessControllerInviteUser: () => (/* reexport safe */ _fn_car_access_car_access_controller_invite_user__WEBPACK_IMPORTED_MODULE_28__.carAccessControllerInviteUser),
/* harmony export */   carAccessControllerRemoveAccess: () => (/* reexport safe */ _fn_car_access_car_access_controller_remove_access__WEBPACK_IMPORTED_MODULE_29__.carAccessControllerRemoveAccess),
/* harmony export */   carControllerCreateCar: () => (/* reexport safe */ _fn_car_car_controller_create_car__WEBPACK_IMPORTED_MODULE_2__.carControllerCreateCar),
/* harmony export */   carControllerDeleteCar: () => (/* reexport safe */ _fn_car_car_controller_delete_car__WEBPACK_IMPORTED_MODULE_4__.carControllerDeleteCar),
/* harmony export */   carControllerDeletePhoto: () => (/* reexport safe */ _fn_car_car_controller_delete_photo__WEBPACK_IMPORTED_MODULE_5__.carControllerDeletePhoto),
/* harmony export */   carControllerGetAllCars: () => (/* reexport safe */ _fn_car_car_controller_get_all_cars__WEBPACK_IMPORTED_MODULE_0__.carControllerGetAllCars),
/* harmony export */   carControllerGetCar: () => (/* reexport safe */ _fn_car_car_controller_get_car__WEBPACK_IMPORTED_MODULE_3__.carControllerGetCar),
/* harmony export */   carControllerGetCarsByUser: () => (/* reexport safe */ _fn_car_car_controller_get_cars_by_user__WEBPACK_IMPORTED_MODULE_6__.carControllerGetCarsByUser),
/* harmony export */   carControllerMarkAsSold: () => (/* reexport safe */ _fn_car_car_controller_mark_as_sold__WEBPACK_IMPORTED_MODULE_7__.carControllerMarkAsSold),
/* harmony export */   carControllerRestore: () => (/* reexport safe */ _fn_car_car_controller_restore__WEBPACK_IMPORTED_MODULE_8__.carControllerRestore),
/* harmony export */   carControllerUpdateCar: () => (/* reexport safe */ _fn_car_car_controller_update_car__WEBPACK_IMPORTED_MODULE_1__.carControllerUpdateCar),
/* harmony export */   documentControllerCreateDocument: () => (/* reexport safe */ _fn_document_document_controller_create_document__WEBPACK_IMPORTED_MODULE_14__.documentControllerCreateDocument),
/* harmony export */   documentControllerDeleteDocument: () => (/* reexport safe */ _fn_document_document_controller_delete_document__WEBPACK_IMPORTED_MODULE_17__.documentControllerDeleteDocument),
/* harmony export */   documentControllerGetDocument: () => (/* reexport safe */ _fn_document_document_controller_get_document__WEBPACK_IMPORTED_MODULE_15__.documentControllerGetDocument),
/* harmony export */   documentControllerGetDocumentsByCarId: () => (/* reexport safe */ _fn_document_document_controller_get_documents_by_car_id__WEBPACK_IMPORTED_MODULE_18__.documentControllerGetDocumentsByCarId),
/* harmony export */   documentControllerUpdateDocument: () => (/* reexport safe */ _fn_document_document_controller_update_document__WEBPACK_IMPORTED_MODULE_16__.documentControllerUpdateDocument),
/* harmony export */   maintenanceRecordControllerCreateMaintenanceRecord: () => (/* reexport safe */ _fn_maintenance_record_maintenance_record_controller_create_maintenance_record__WEBPACK_IMPORTED_MODULE_9__.maintenanceRecordControllerCreateMaintenanceRecord),
/* harmony export */   maintenanceRecordControllerDeleteMaintenanceRecord: () => (/* reexport safe */ _fn_maintenance_record_maintenance_record_controller_delete_maintenance_record__WEBPACK_IMPORTED_MODULE_12__.maintenanceRecordControllerDeleteMaintenanceRecord),
/* harmony export */   maintenanceRecordControllerGetMaintenanceRecord: () => (/* reexport safe */ _fn_maintenance_record_maintenance_record_controller_get_maintenance_record__WEBPACK_IMPORTED_MODULE_10__.maintenanceRecordControllerGetMaintenanceRecord),
/* harmony export */   maintenanceRecordControllerGetMaintenanceRecordsByCarId: () => (/* reexport safe */ _fn_maintenance_record_maintenance_record_controller_get_maintenance_records_by_car_id__WEBPACK_IMPORTED_MODULE_13__.maintenanceRecordControllerGetMaintenanceRecordsByCarId),
/* harmony export */   maintenanceRecordControllerUpdateMaintenanceRecord: () => (/* reexport safe */ _fn_maintenance_record_maintenance_record_controller_update_maintenance_record__WEBPACK_IMPORTED_MODULE_11__.maintenanceRecordControllerUpdateMaintenanceRecord),
/* harmony export */   vehicleCatalogControllerGetMakes: () => (/* reexport safe */ _fn_vehicle_catalog_vehicle_catalog_controller_get_makes__WEBPACK_IMPORTED_MODULE_24__.vehicleCatalogControllerGetMakes),
/* harmony export */   vehicleCatalogControllerGetModels: () => (/* reexport safe */ _fn_vehicle_catalog_vehicle_catalog_controller_get_models__WEBPACK_IMPORTED_MODULE_25__.vehicleCatalogControllerGetModels),
/* harmony export */   vehicleCatalogControllerGetYears: () => (/* reexport safe */ _fn_vehicle_catalog_vehicle_catalog_controller_get_years__WEBPACK_IMPORTED_MODULE_26__.vehicleCatalogControllerGetYears)
/* harmony export */ });
/* harmony import */ var _fn_car_car_controller_get_all_cars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fn/car/car-controller-get-all-cars */ 98238);
/* harmony import */ var _fn_car_car_controller_update_car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fn/car/car-controller-update-car */ 85730);
/* harmony import */ var _fn_car_car_controller_create_car__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fn/car/car-controller-create-car */ 91287);
/* harmony import */ var _fn_car_car_controller_get_car__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fn/car/car-controller-get-car */ 8417);
/* harmony import */ var _fn_car_car_controller_delete_car__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fn/car/car-controller-delete-car */ 74712);
/* harmony import */ var _fn_car_car_controller_delete_photo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fn/car/car-controller-delete-photo */ 89402);
/* harmony import */ var _fn_car_car_controller_get_cars_by_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fn/car/car-controller-get-cars-by-user */ 55030);
/* harmony import */ var _fn_car_car_controller_mark_as_sold__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fn/car/car-controller-mark-as-sold */ 76125);
/* harmony import */ var _fn_car_car_controller_restore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fn/car/car-controller-restore */ 93032);
/* harmony import */ var _fn_maintenance_record_maintenance_record_controller_create_maintenance_record__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fn/maintenance-record/maintenance-record-controller-create-maintenance-record */ 32422);
/* harmony import */ var _fn_maintenance_record_maintenance_record_controller_get_maintenance_record__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fn/maintenance-record/maintenance-record-controller-get-maintenance-record */ 12436);
/* harmony import */ var _fn_maintenance_record_maintenance_record_controller_update_maintenance_record__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fn/maintenance-record/maintenance-record-controller-update-maintenance-record */ 89249);
/* harmony import */ var _fn_maintenance_record_maintenance_record_controller_delete_maintenance_record__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fn/maintenance-record/maintenance-record-controller-delete-maintenance-record */ 43907);
/* harmony import */ var _fn_maintenance_record_maintenance_record_controller_get_maintenance_records_by_car_id__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fn/maintenance-record/maintenance-record-controller-get-maintenance-records-by-car-id */ 34982);
/* harmony import */ var _fn_document_document_controller_create_document__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fn/document/document-controller-create-document */ 22484);
/* harmony import */ var _fn_document_document_controller_get_document__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fn/document/document-controller-get-document */ 21174);
/* harmony import */ var _fn_document_document_controller_update_document__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fn/document/document-controller-update-document */ 90787);
/* harmony import */ var _fn_document_document_controller_delete_document__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fn/document/document-controller-delete-document */ 45153);
/* harmony import */ var _fn_document_document_controller_get_documents_by_car_id__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fn/document/document-controller-get-documents-by-car-id */ 84540);
/* harmony import */ var _fn_auth_auth_controller_login__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./fn/auth/auth-controller-login */ 85213);
/* harmony import */ var _fn_auth_auth_controller_google_auth_redirect__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./fn/auth/auth-controller-google-auth-redirect */ 72677);
/* harmony import */ var _fn_auth_auth_controller_refresh_access_token__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./fn/auth/auth-controller-refresh-access-token */ 70590);
/* harmony import */ var _fn_auth_auth_controller_get_profile__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./fn/auth/auth-controller-get-profile */ 82024);
/* harmony import */ var _fn_auth_auth_controller_logout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./fn/auth/auth-controller-logout */ 84912);
/* harmony import */ var _fn_vehicle_catalog_vehicle_catalog_controller_get_makes__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./fn/vehicle-catalog/vehicle-catalog-controller-get-makes */ 97232);
/* harmony import */ var _fn_vehicle_catalog_vehicle_catalog_controller_get_models__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./fn/vehicle-catalog/vehicle-catalog-controller-get-models */ 54461);
/* harmony import */ var _fn_vehicle_catalog_vehicle_catalog_controller_get_years__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./fn/vehicle-catalog/vehicle-catalog-controller-get-years */ 53965);
/* harmony import */ var _fn_car_access_car_access_controller_get_access_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./fn/car-access/car-access-controller-get-access-list */ 71178);
/* harmony import */ var _fn_car_access_car_access_controller_invite_user__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./fn/car-access/car-access-controller-invite-user */ 21241);
/* harmony import */ var _fn_car_access_car_access_controller_remove_access__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./fn/car-access/car-access-controller-remove-access */ 89615);
/* harmony import */ var _fn_car_access_car_access_controller_change_role__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./fn/car-access/car-access-controller-change-role */ 46613);
/* harmony import */ var _fn_blog_blog_controller_get_vehicle_categories__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./fn/blog/blog-controller-get-vehicle-categories */ 58902);
/* harmony import */ var _fn_blog_blog_controller_get_entries__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./fn/blog/blog-controller-get-entries */ 76685);
/* harmony import */ var _fn_blog_blog_controller_get_entry__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./fn/blog/blog-controller-get-entry */ 22073);
/* harmony import */ var _fn_blog_blog_controller_create_entry__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./fn/blog/blog-controller-create-entry */ 25783);
/* harmony import */ var _fn_blog_blog_controller_update_entry__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./fn/blog/blog-controller-update-entry */ 13702);
/* harmony import */ var _fn_blog_blog_controller_delete_entry__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./fn/blog/blog-controller-delete-entry */ 83372);
/* harmony import */ var _fn_blog_blog_controller_toggle_pin__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./fn/blog/blog-controller-toggle-pin */ 75456);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */







































/***/ },

/***/ 73743
/*!*********************************************!*\
  !*** ./src/auto-gen/api/request-builder.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestBuilder: () => (/* binding */ RequestBuilder)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

/**
 * Custom parameter codec to correctly handle the plus sign in parameter
 * values. See https://github.com/angular/angular/issues/18261
 */
class ParameterCodec {
  encodeKey(key) {
    return encodeURIComponent(key);
  }
  encodeValue(value) {
    return encodeURIComponent(value);
  }
  decodeKey(key) {
    return decodeURIComponent(key);
  }
  decodeValue(value) {
    return decodeURIComponent(value);
  }
}
const ParameterCodecInstance = new ParameterCodec();
/**
 * Base class for a parameter
 */
class Parameter {
  constructor(name, value, options, defaultStyle, defaultExplode) {
    this.name = name;
    this.value = value;
    this.options = options;
    this.options = options || {};
    if (this.options.style === null || this.options.style === undefined) {
      this.options.style = defaultStyle;
    }
    if (this.options.explode === null || this.options.explode === undefined) {
      this.options.explode = defaultExplode;
    }
  }
  serializeValue(value, separator = ',') {
    if (value === null || value === undefined) {
      return '';
    } else if (value instanceof Array) {
      return value.map(v => this.serializeValue(v).split(separator).join(encodeURIComponent(separator))).join(separator);
    } else if (typeof value === 'object') {
      const array = [];
      for (const key of Object.keys(value)) {
        let propVal = value[key];
        if (propVal !== null && propVal !== undefined) {
          propVal = this.serializeValue(propVal).split(separator).join(encodeURIComponent(separator));
          if (this.options.explode) {
            array.push(`${key}=${propVal}`);
          } else {
            array.push(key);
            array.push(propVal);
          }
        }
      }
      return array.join(separator);
    } else {
      return String(value);
    }
  }
}
/**
 * A parameter in the operation path
 */
class PathParameter extends Parameter {
  constructor(name, value, options) {
    super(name, value, options, 'simple', false);
  }
  append(path) {
    let value = this.value;
    if (value === null || value === undefined) {
      value = '';
    }
    let prefix = this.options.style === 'label' ? '.' : '';
    let separator = this.options.explode ? prefix === '' ? ',' : prefix : ',';
    let alreadySerialized = false;
    if (this.options.style === 'matrix') {
      // The parameter name is just used as prefix, except in some cases...
      prefix = `;${this.name}=`;
      if (this.options.explode && typeof value === 'object') {
        prefix = ';';
        if (value instanceof Array) {
          // For arrays we have to repeat the name for each element
          value = value.map(v => `${this.name}=${this.serializeValue(v, ';')}`);
          value = value.join(';');
          alreadySerialized = true;
        } else {
          // For objects we have to put each the key / value pairs
          value = this.serializeValue(value, ';');
          alreadySerialized = true;
        }
      }
    }
    value = prefix + (alreadySerialized ? value : this.serializeValue(value, separator));
    // Replace both the plain variable and the corresponding variant taking in the prefix and explode into account
    path = path.replace(`{${this.name}}`, value);
    path = path.replace(`{${prefix}${this.name}${this.options.explode ? '*' : ''}}`, value);
    return path;
  }
  // @ts-ignore
  serializeValue(value, separator = ',') {
    var result = typeof value === 'string' ? encodeURIComponent(value) : super.serializeValue(value, separator);
    result = result.replace(/%3D/g, '=');
    result = result.replace(/%3B/g, ';');
    result = result.replace(/%2C/g, ',');
    return result;
  }
}
/**
 * A parameter in the query
 */
class QueryParameter extends Parameter {
  constructor(name, value, options) {
    super(name, value, options, 'form', true);
  }
  append(params) {
    if (this.value instanceof Array) {
      // Array serialization
      if (this.options.explode) {
        for (const v of this.value) {
          params = params.append(this.name, this.serializeValue(v));
        }
      } else {
        const separator = this.options.style === 'spaceDelimited' ? ' ' : this.options.style === 'pipeDelimited' ? '|' : ',';
        return params.append(this.name, this.serializeValue(this.value, separator));
      }
    } else if (this.value !== null && typeof this.value === 'object') {
      // Object serialization
      if (this.options.style === 'deepObject') {
        // Append a parameter for each key, in the form `name[key]`
        for (const key of Object.keys(this.value)) {
          const propVal = this.value[key];
          if (propVal !== null && propVal !== undefined) {
            params = params.append(`${this.name}[${key}]`, this.serializeValue(propVal));
          }
        }
      } else if (this.options.explode) {
        // Append a parameter for each key without using the parameter name
        for (const key of Object.keys(this.value)) {
          const propVal = this.value[key];
          if (propVal !== null && propVal !== undefined) {
            params = params.append(key, this.serializeValue(propVal));
          }
        }
      } else {
        // Append a single parameter whose values are a comma-separated list of key,value,key,value...
        const array = [];
        for (const key of Object.keys(this.value)) {
          const propVal = this.value[key];
          if (propVal !== null && propVal !== undefined) {
            array.push(key);
            array.push(propVal);
          }
        }
        params = params.append(this.name, this.serializeValue(array));
      }
    } else if (this.value !== null && this.value !== undefined) {
      // Plain value
      params = params.append(this.name, this.serializeValue(this.value));
    }
    return params;
  }
}
/**
 * A parameter in the HTTP request header
 */
class HeaderParameter extends Parameter {
  constructor(name, value, options) {
    super(name, value, options, 'simple', false);
  }
  append(headers) {
    if (this.value !== null && this.value !== undefined) {
      if (this.value instanceof Array) {
        for (const v of this.value) {
          headers = headers.append(this.name, this.serializeValue(v));
        }
      } else {
        headers = headers.append(this.name, this.serializeValue(this.value));
      }
    }
    return headers;
  }
}
/**
 * Helper to build http requests from parameters
 */
class RequestBuilder {
  constructor(rootUrl, operationPath, method) {
    this.rootUrl = rootUrl;
    this.operationPath = operationPath;
    this.method = method;
    this._path = new Map();
    this._query = new Map();
    this._header = new Map();
  }
  /**
   * Sets a path parameter
   */
  path(name, value, options) {
    this._path.set(name, new PathParameter(name, value, options || {}));
  }
  /**
   * Sets a query parameter
   */
  query(name, value, options) {
    this._query.set(name, new QueryParameter(name, value, options || {}));
  }
  /**
   * Sets a header parameter
   */
  header(name, value, options) {
    this._header.set(name, new HeaderParameter(name, value, options || {}));
  }
  /**
   * Sets the body content, along with the content type
   */
  body(value, contentType = 'application/json') {
    if (value instanceof Blob) {
      this._bodyContentType = value.type;
    } else {
      this._bodyContentType = contentType;
    }
    if (this._bodyContentType === 'application/x-www-form-urlencoded' && value !== null && typeof value === 'object') {
      // Handle URL-encoded data
      const pairs = [];
      for (const key of Object.keys(value)) {
        let val = value[key];
        if (!(val instanceof Array)) {
          val = [val];
        }
        for (const v of val) {
          const formValue = this.formDataValue(v);
          if (formValue !== null) {
            pairs.push([key, formValue]);
          }
        }
      }
      this._bodyContent = pairs.map(p => `${encodeURIComponent(p[0])}=${encodeURIComponent(p[1])}`).join('&');
    } else if (this._bodyContentType === 'multipart/form-data') {
      // Handle multipart form data
      const formData = new FormData();
      if (value !== null && value !== undefined) {
        for (const key of Object.keys(value)) {
          const val = value[key];
          if (val instanceof Array) {
            for (const v of val) {
              const toAppend = this.formDataValue(v);
              if (toAppend !== null) {
                formData.append(key, toAppend);
              }
            }
          } else {
            const toAppend = this.formDataValue(val);
            if (toAppend !== null) {
              formData.set(key, toAppend);
            }
          }
        }
      }
      this._bodyContent = formData;
    } else {
      // The body is the plain content
      this._bodyContent = value;
    }
  }
  formDataValue(value) {
    if (value === null || value === undefined) {
      return null;
    }
    if (value instanceof Blob) {
      return value;
    }
    if (typeof value === 'object') {
      return new Blob([JSON.stringify(value)], {
        type: 'application/json'
      });
    }
    return String(value);
  }
  /**
   * Builds the request with the current set parameters
   */
  build(options) {
    options = options || {};
    // Path parameters
    let path = this.operationPath;
    for (const pathParam of this._path.values()) {
      path = pathParam.append(path);
    }
    const url = this.rootUrl + path;
    // Query parameters
    let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: ParameterCodecInstance
    });
    for (const queryParam of this._query.values()) {
      httpParams = queryParam.append(httpParams);
    }
    // Header parameters
    let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
    if (options.accept) {
      httpHeaders = httpHeaders.append('Accept', options.accept);
    }
    for (const headerParam of this._header.values()) {
      httpHeaders = headerParam.append(httpHeaders);
    }
    // Request content headers
    if (this._bodyContentType && !(this._bodyContent instanceof FormData)) {
      httpHeaders = httpHeaders.set('Content-Type', this._bodyContentType);
    }
    // Perform the request
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest(this.method.toUpperCase(), url, this._bodyContent, {
      params: httpParams,
      headers: httpHeaders,
      responseType: options.responseType,
      reportProgress: options.reportProgress,
      context: options.context
    });
  }
}

/***/ },

/***/ 24870
/*!***************************************************!*\
  !*** ./src/auto-gen/api/services/auth.service.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ 79181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-configuration */ 16171);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 50698);





class AuthService {
  constructor(config, http) {
    this.config = config;
    this.http = http;
  }
  authControllerLogin(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.authControllerLogin)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  authControllerGoogleAuthRedirect(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.authControllerGoogleAuthRedirect)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  authControllerRefreshAccessToken(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.authControllerRefreshAccessToken)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  authControllerGetProfile(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.authControllerGetProfile)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  authControllerLogout(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.authControllerLogout)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  static {
    this.ɵfac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_3__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 73320
/*!***************************************************!*\
  !*** ./src/auto-gen/api/services/blog.service.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogService: () => (/* binding */ BlogService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ 79181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-configuration */ 16171);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 50698);





class BlogService {
  constructor(config, http) {
    this.config = config;
    this.http = http;
  }
  getVehicleCategories(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.blogControllerGetVehicleCategories)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  getEntries(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.blogControllerGetEntries)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  getEntry(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.blogControllerGetEntry)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  createEntry(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.blogControllerCreateEntry)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  updateEntry(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.blogControllerUpdateEntry)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  deleteEntry(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.blogControllerDeleteEntry)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  togglePin(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.blogControllerTogglePin)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  uploadImage(file) {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post(`${this.config.rootUrl}/api/blog/images`, fd);
  }
  static {
    this.ɵfac = function BlogService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_3__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: BlogService,
      factory: BlogService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 915
/*!*********************************************************!*\
  !*** ./src/auto-gen/api/services/car-access.service.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarAccessService: () => (/* binding */ CarAccessService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ 79181);
/* harmony import */ var _fn_car_access_car_access_controller_get_shared_cars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fn/car-access/car-access-controller-get-shared-cars */ 6224);
/* harmony import */ var _fn_car_access_car_access_controller_accept_invitation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fn/car-access/car-access-controller-accept-invitation */ 12830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api-configuration */ 16171);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 50698);







class CarAccessService {
  constructor(config, http) {
    this.config = config;
    this.http = http;
  }
  getAccessList(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.carAccessControllerGetAccessList)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  inviteUser(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.carAccessControllerInviteUser)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  removeAccess(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.carAccessControllerRemoveAccess)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(() => undefined));
  }
  changeRole(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.carAccessControllerChangeRole)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  getSharedCars(context) {
    return (0,_fn_car_access_car_access_controller_get_shared_cars__WEBPACK_IMPORTED_MODULE_2__.carAccessControllerGetSharedCars)(this.http, this.config.rootUrl, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  acceptInvitation(params, context) {
    return (0,_fn_car_access_car_access_controller_accept_invitation__WEBPACK_IMPORTED_MODULE_3__.carAccessControllerAcceptInvitation)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  static {
    this.ɵfac = function CarAccessService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CarAccessService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_5__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: CarAccessService,
      factory: CarAccessService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 92142
/*!**************************************************!*\
  !*** ./src/auto-gen/api/services/car.service.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarService: () => (/* binding */ CarService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ 79181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-configuration */ 16171);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 50698);





class CarService {
  constructor(config, http) {
    this.config = config;
    this.http = http;
  }
  carControllerGetAllCars(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.carControllerGetAllCars)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  carControllerGetCar(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.carControllerGetCar)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  carControllerCreateCar(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.carControllerCreateCar)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  carControllerUpdateCar(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.carControllerUpdateCar)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  carControllerDeleteCar(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.carControllerDeleteCar)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  carControllerDeletePhoto(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.carControllerDeletePhoto)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(() => void 0));
  }
  carControllerGetCarsByUser(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.carControllerGetCarsByUser)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  carControllerMarkAsSold(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.carControllerMarkAsSold)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  carControllerRestore(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.carControllerRestore)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  static {
    this.ɵfac = function CarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CarService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_3__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: CarService,
      factory: CarService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 54457
/*!*******************************************************!*\
  !*** ./src/auto-gen/api/services/document.service.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentService: () => (/* binding */ DocumentService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ 79181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-configuration */ 16171);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 50698);





class DocumentService {
  constructor(config, http) {
    this.config = config;
    this.http = http;
  }
  documentControllerCreateDocument(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.documentControllerCreateDocument)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  documentControllerGetDocument(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.documentControllerGetDocument)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  documentControllerUpdateDocument(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.documentControllerUpdateDocument)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  documentControllerDeleteDocument(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.documentControllerDeleteDocument)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  documentControllerGetDocumentsByCarId(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.documentControllerGetDocumentsByCarId)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  documentControllerUploadFile(id, file) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.config.rootUrl}/api/document/${id}/upload`, formData);
  }
  documentControllerExtractDocument(file) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.config.rootUrl}/api/document/extract`, formData);
  }
  static {
    this.ɵfac = function DocumentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DocumentService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_3__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: DocumentService,
      factory: DocumentService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 3977
/*!********************************************!*\
  !*** ./src/auto-gen/api/services/index.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* reexport safe */ _auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService),
/* harmony export */   BlogService: () => (/* reexport safe */ _blog_service__WEBPACK_IMPORTED_MODULE_6__.BlogService),
/* harmony export */   CarAccessService: () => (/* reexport safe */ _car_access_service__WEBPACK_IMPORTED_MODULE_5__.CarAccessService),
/* harmony export */   CarService: () => (/* reexport safe */ _car_service__WEBPACK_IMPORTED_MODULE_0__.CarService),
/* harmony export */   DocumentService: () => (/* reexport safe */ _document_service__WEBPACK_IMPORTED_MODULE_1__.DocumentService),
/* harmony export */   MaintenanceRecordService: () => (/* reexport safe */ _maintenance_record_service__WEBPACK_IMPORTED_MODULE_2__.MaintenanceRecordService),
/* harmony export */   VehicleCatalogService: () => (/* reexport safe */ _vehicle_catalog_service__WEBPACK_IMPORTED_MODULE_4__.VehicleCatalogService)
/* harmony export */ });
/* harmony import */ var _car_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car.service */ 92142);
/* harmony import */ var _document_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document.service */ 54457);
/* harmony import */ var _maintenance_record_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maintenance-record.service */ 10479);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ 24870);
/* harmony import */ var _vehicle_catalog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicle-catalog.service */ 6242);
/* harmony import */ var _car_access_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./car-access.service */ 915);
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog.service */ 73320);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */








/***/ },

/***/ 10479
/*!*****************************************************************!*\
  !*** ./src/auto-gen/api/services/maintenance-record.service.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaintenanceRecordService: () => (/* binding */ MaintenanceRecordService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ 79181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-configuration */ 16171);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 50698);





class MaintenanceRecordService {
  constructor(config, http) {
    this.config = config;
    this.http = http;
  }
  maintenanceRecordControllerCreateMaintenanceRecord(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.maintenanceRecordControllerCreateMaintenanceRecord)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  maintenanceRecordControllerGetMaintenanceRecord(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.maintenanceRecordControllerGetMaintenanceRecord)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  maintenanceRecordControllerUpdateMaintenanceRecord(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.maintenanceRecordControllerUpdateMaintenanceRecord)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  maintenanceRecordControllerDeleteMaintenanceRecord(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.maintenanceRecordControllerDeleteMaintenanceRecord)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  maintenanceRecordControllerGetMaintenanceRecordsByCarId(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.maintenanceRecordControllerGetMaintenanceRecordsByCarId)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  static {
    this.ɵfac = function MaintenanceRecordService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MaintenanceRecordService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_3__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: MaintenanceRecordService,
      factory: MaintenanceRecordService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 6242
/*!**************************************************************!*\
  !*** ./src/auto-gen/api/services/vehicle-catalog.service.ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VehicleCatalogService: () => (/* binding */ VehicleCatalogService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ 79181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-configuration */ 16171);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 50698);





class VehicleCatalogService {
  constructor(config, http) {
    this.config = config;
    this.http = http;
  }
  getMakes(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.vehicleCatalogControllerGetMakes)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  getModels(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.vehicleCatalogControllerGetModels)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  getYears(params, context) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.vehicleCatalogControllerGetYears)(this.http, this.config.rootUrl, params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(r => r.body));
  }
  static {
    this.ɵfac = function VehicleCatalogService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VehicleCatalogService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_3__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: VehicleCatalogService,
      factory: VehicleCatalogService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 79663
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/animation-CnGMT4ji.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createAnimation)
/* harmony export */ });
/* harmony import */ var _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-IGIE5vDm.js */ 21667);
/* harmony import */ var _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-ZjP4CjeZ.js */ 10575);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


let animationPrefix;
const getAnimationPrefix = el => {
  if (animationPrefix === undefined) {
    const supportsUnprefixed = el.style.animationName !== undefined;
    const supportsWebkitPrefix = el.style.webkitAnimationName !== undefined;
    animationPrefix = !supportsUnprefixed && supportsWebkitPrefix ? '-webkit-' : '';
  }
  return animationPrefix;
};
const setStyleProperty = (element, propertyName, value) => {
  const prefix = propertyName.startsWith('animation') ? getAnimationPrefix(element) : '';
  element.style.setProperty(prefix + propertyName, value);
};
const addClassToArray = (classes = [], className) => {
  if (className !== undefined) {
    const classNameToAppend = Array.isArray(className) ? className : [className];
    return [...classes, ...classNameToAppend];
  }
  return classes;
};
const createAnimation = animationId => {
  let _delay;
  let _duration;
  let _easing;
  let _iterations;
  let _fill;
  let _direction;
  let _keyframes = [];
  let beforeAddClasses = [];
  let beforeRemoveClasses = [];
  let initialized = false;
  let parentAnimation;
  let beforeStylesValue = {};
  let afterAddClasses = [];
  let afterRemoveClasses = [];
  let afterStylesValue = {};
  let numAnimationsRunning = 0;
  let shouldForceLinearEasing = false;
  let shouldForceSyncPlayback = false;
  let forceDirectionValue;
  let forceDurationValue;
  let forceDelayValue;
  let willComplete = true;
  let finished = false;
  let shouldCalculateNumAnimations = true;
  let ani;
  let paused = false;
  const id = animationId;
  const onFinishCallbacks = [];
  const onFinishOneTimeCallbacks = [];
  const onStopOneTimeCallbacks = [];
  const elements = [];
  const childAnimations = [];
  const stylesheets = [];
  const _beforeAddReadFunctions = [];
  const _beforeAddWriteFunctions = [];
  const _afterAddReadFunctions = [];
  const _afterAddWriteFunctions = [];
  const webAnimations = [];
  const supportsAnimationEffect = typeof AnimationEffect === 'function' || _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w !== undefined && typeof _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w.AnimationEffect === 'function';
  /**
   * This is a feature detection for Web Animations.
   *
   * Certain environments such as emulated browser environments for testing,
   * do not support Web Animations. As a result, we need to check for support
   * and provide a fallback to test certain functionality related to Web Animations.
   */
  const supportsWebAnimations = typeof Element === 'function' && typeof Element.prototype.animate === 'function' && supportsAnimationEffect;
  const getWebAnimations = () => {
    return webAnimations;
  };
  const destroy = clearStyleSheets => {
    childAnimations.forEach(childAnimation => {
      childAnimation.destroy(clearStyleSheets);
    });
    cleanUp(clearStyleSheets);
    elements.length = 0;
    childAnimations.length = 0;
    _keyframes.length = 0;
    clearOnFinish();
    initialized = false;
    shouldCalculateNumAnimations = true;
    return ani;
  };
  /**
   * Cancels any Web Animations, removes
   * any animation properties from the
   * animation's elements, and removes the
   * animation's stylesheets from the DOM.
   */
  const cleanUp = clearStyleSheets => {
    cleanUpElements();
    if (clearStyleSheets) {
      cleanUpStyleSheets();
    }
  };
  const resetFlags = () => {
    shouldForceLinearEasing = false;
    shouldForceSyncPlayback = false;
    shouldCalculateNumAnimations = true;
    forceDirectionValue = undefined;
    forceDurationValue = undefined;
    forceDelayValue = undefined;
    numAnimationsRunning = 0;
    finished = false;
    willComplete = true;
    paused = false;
  };
  const isRunning = () => {
    return numAnimationsRunning !== 0 && !paused;
  };
  /**
   * @internal
   * Remove a callback from a chosen callback array
   * @param callbackToRemove: A reference to the callback that should be removed
   * @param callbackObjects: An array of callbacks that callbackToRemove should be removed from.
   */
  const clearCallback = (callbackToRemove, callbackObjects) => {
    const index = callbackObjects.findIndex(callbackObject => callbackObject.c === callbackToRemove);
    if (index > -1) {
      callbackObjects.splice(index, 1);
    }
  };
  /**
   * @internal
   * Add a callback to be fired when an animation is stopped/cancelled.
   * @param callback: A reference to the callback that should be fired
   * @param opts: Any options associated with this particular callback
   */
  const onStop = (callback, opts) => {
    onStopOneTimeCallbacks.push({
      c: callback,
      o: opts
    });
    return ani;
  };
  const onFinish = (callback, opts) => {
    const callbacks = (opts === null || opts === void 0 ? void 0 : opts.oneTimeCallback) ? onFinishOneTimeCallbacks : onFinishCallbacks;
    callbacks.push({
      c: callback,
      o: opts
    });
    return ani;
  };
  const clearOnFinish = () => {
    onFinishCallbacks.length = 0;
    onFinishOneTimeCallbacks.length = 0;
    return ani;
  };
  /**
   * Cancels any Web Animations and removes
   * any animation properties from the
   * the animation's elements.
   */
  const cleanUpElements = () => {
    if (supportsWebAnimations) {
      webAnimations.forEach(animation => {
        animation.cancel();
      });
      webAnimations.length = 0;
    }
  };
  /**
   * Removes the animation's stylesheets
   * from the DOM.
   */
  const cleanUpStyleSheets = () => {
    stylesheets.forEach(stylesheet => {
      /**
       * When sharing stylesheets, it's possible
       * for another animation to have already
       * cleaned up a particular stylesheet
       */
      if (stylesheet === null || stylesheet === void 0 ? void 0 : stylesheet.parentNode) {
        stylesheet.parentNode.removeChild(stylesheet);
      }
    });
    stylesheets.length = 0;
  };
  const beforeAddRead = readFn => {
    _beforeAddReadFunctions.push(readFn);
    return ani;
  };
  const beforeAddWrite = writeFn => {
    _beforeAddWriteFunctions.push(writeFn);
    return ani;
  };
  const afterAddRead = readFn => {
    _afterAddReadFunctions.push(readFn);
    return ani;
  };
  const afterAddWrite = writeFn => {
    _afterAddWriteFunctions.push(writeFn);
    return ani;
  };
  const beforeAddClass = className => {
    beforeAddClasses = addClassToArray(beforeAddClasses, className);
    return ani;
  };
  const beforeRemoveClass = className => {
    beforeRemoveClasses = addClassToArray(beforeRemoveClasses, className);
    return ani;
  };
  /**
   * Set CSS inline styles to the animation's
   * elements before the animation begins.
   */
  const beforeStyles = (styles = {}) => {
    beforeStylesValue = styles;
    return ani;
  };
  /**
   * Clear CSS inline styles from the animation's
   * elements before the animation begins.
   */
  const beforeClearStyles = (propertyNames = []) => {
    for (const property of propertyNames) {
      beforeStylesValue[property] = '';
    }
    return ani;
  };
  const afterAddClass = className => {
    afterAddClasses = addClassToArray(afterAddClasses, className);
    return ani;
  };
  const afterRemoveClass = className => {
    afterRemoveClasses = addClassToArray(afterRemoveClasses, className);
    return ani;
  };
  const afterStyles = (styles = {}) => {
    afterStylesValue = styles;
    return ani;
  };
  const afterClearStyles = (propertyNames = []) => {
    for (const property of propertyNames) {
      afterStylesValue[property] = '';
    }
    return ani;
  };
  const getFill = () => {
    if (_fill !== undefined) {
      return _fill;
    }
    if (parentAnimation) {
      return parentAnimation.getFill();
    }
    return 'both';
  };
  const getDirection = () => {
    if (forceDirectionValue !== undefined) {
      return forceDirectionValue;
    }
    if (_direction !== undefined) {
      return _direction;
    }
    if (parentAnimation) {
      return parentAnimation.getDirection();
    }
    return 'normal';
  };
  const getEasing = () => {
    if (shouldForceLinearEasing) {
      return 'linear';
    }
    if (_easing !== undefined) {
      return _easing;
    }
    if (parentAnimation) {
      return parentAnimation.getEasing();
    }
    return 'linear';
  };
  const getDuration = () => {
    if (shouldForceSyncPlayback) {
      return 0;
    }
    if (forceDurationValue !== undefined) {
      return forceDurationValue;
    }
    if (_duration !== undefined) {
      return _duration;
    }
    if (parentAnimation) {
      return parentAnimation.getDuration();
    }
    return 0;
  };
  const getIterations = () => {
    if (_iterations !== undefined) {
      return _iterations;
    }
    if (parentAnimation) {
      return parentAnimation.getIterations();
    }
    return 1;
  };
  const getDelay = () => {
    if (forceDelayValue !== undefined) {
      return forceDelayValue;
    }
    if (_delay !== undefined) {
      return _delay;
    }
    if (parentAnimation) {
      return parentAnimation.getDelay();
    }
    return 0;
  };
  const getKeyframes = () => {
    return _keyframes;
  };
  const direction = animationDirection => {
    _direction = animationDirection;
    update(true);
    return ani;
  };
  const fill = animationFill => {
    _fill = animationFill;
    update(true);
    return ani;
  };
  const delay = animationDelay => {
    _delay = animationDelay;
    update(true);
    return ani;
  };
  const easing = animationEasing => {
    _easing = animationEasing;
    update(true);
    return ani;
  };
  const duration = animationDuration => {
    /**
     * CSS Animation Durations of 0ms work fine on Chrome
     * but do not run on Safari, so force it to 1ms to
     * get it to run on both platforms.
     */
    if (!supportsWebAnimations && animationDuration === 0) {
      animationDuration = 1;
    }
    _duration = animationDuration;
    update(true);
    return ani;
  };
  const iterations = animationIterations => {
    _iterations = animationIterations;
    update(true);
    return ani;
  };
  const parent = animation => {
    parentAnimation = animation;
    return ani;
  };
  const addElement = el => {
    if (el != null) {
      if (el.nodeType === 1) {
        elements.push(el);
      } else if (el.length >= 0) {
        for (let i = 0; i < el.length; i++) {
          elements.push(el[i]);
        }
      } else {
        (0,_index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_0__.j)('createAnimation - Invalid addElement value.');
      }
    }
    return ani;
  };
  const addAnimation = animationToAdd => {
    if (animationToAdd != null) {
      if (Array.isArray(animationToAdd)) {
        for (const animation of animationToAdd) {
          animation.parent(ani);
          childAnimations.push(animation);
        }
      } else {
        animationToAdd.parent(ani);
        childAnimations.push(animationToAdd);
      }
    }
    return ani;
  };
  const keyframes = keyframeValues => {
    const different = _keyframes !== keyframeValues;
    _keyframes = keyframeValues;
    if (different) {
      updateKeyframes(_keyframes);
    }
    return ani;
  };
  const updateKeyframes = keyframeValues => {
    if (supportsWebAnimations) {
      getWebAnimations().forEach(animation => {
        /**
         * animation.effect's type is AnimationEffect.
         * However, in this case we have a more specific
         * type of AnimationEffect called KeyframeEffect which
         * inherits from AnimationEffect. As a result,
         * we cast animation.effect to KeyframeEffect.
         */
        const keyframeEffect = animation.effect;
        /**
         * setKeyframes is not supported in all browser
         * versions that Ionic supports, so we need to
         * check for support before using it.
         */
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (keyframeEffect.setKeyframes) {
          keyframeEffect.setKeyframes(keyframeValues);
        } else {
          const newEffect = new KeyframeEffect(keyframeEffect.target, keyframeValues, keyframeEffect.getTiming());
          animation.effect = newEffect;
        }
      });
    }
  };
  /**
   * Run all "before" animation hooks.
   */
  const beforeAnimation = () => {
    // Runs all before read callbacks
    _beforeAddReadFunctions.forEach(callback => callback());
    // Runs all before write callbacks
    _beforeAddWriteFunctions.forEach(callback => callback());
    // Updates styles and classes before animation runs
    const addClasses = beforeAddClasses;
    const removeClasses = beforeRemoveClasses;
    const styles = beforeStylesValue;
    elements.forEach(el => {
      const elementClassList = el.classList;
      addClasses.forEach(c => elementClassList.add(c));
      removeClasses.forEach(c => elementClassList.remove(c));
      for (const property in styles) {
        // eslint-disable-next-line no-prototype-builtins
        if (styles.hasOwnProperty(property)) {
          setStyleProperty(el, property, styles[property]);
        }
      }
    });
  };
  /**
   * Run all "after" animation hooks.
   */
  const afterAnimation = () => {
    // Runs all after read callbacks
    _afterAddReadFunctions.forEach(callback => callback());
    // Runs all after write callbacks
    _afterAddWriteFunctions.forEach(callback => callback());
    // Updates styles and classes before animation ends
    const currentStep = willComplete ? 1 : 0;
    const addClasses = afterAddClasses;
    const removeClasses = afterRemoveClasses;
    const styles = afterStylesValue;
    elements.forEach(el => {
      const elementClassList = el.classList;
      addClasses.forEach(c => elementClassList.add(c));
      removeClasses.forEach(c => elementClassList.remove(c));
      for (const property in styles) {
        // eslint-disable-next-line no-prototype-builtins
        if (styles.hasOwnProperty(property)) {
          setStyleProperty(el, property, styles[property]);
        }
      }
    });
    /**
     * Clean up any value coercion before
     * the user callbacks fire otherwise
     * they may get stale values. For example,
     * if someone calls progressStart(0) the
     * animation may still be reversed.
     */
    forceDurationValue = undefined;
    forceDirectionValue = undefined;
    forceDelayValue = undefined;
    onFinishCallbacks.forEach(onFinishCallback => {
      return onFinishCallback.c(currentStep, ani);
    });
    onFinishOneTimeCallbacks.forEach(onFinishCallback => {
      return onFinishCallback.c(currentStep, ani);
    });
    onFinishOneTimeCallbacks.length = 0;
    shouldCalculateNumAnimations = true;
    if (willComplete) {
      finished = true;
    }
    willComplete = true;
  };
  const animationFinish = () => {
    if (numAnimationsRunning === 0) {
      return;
    }
    numAnimationsRunning--;
    if (numAnimationsRunning === 0) {
      afterAnimation();
      if (parentAnimation) {
        parentAnimation.animationFinish();
      }
    }
  };
  const initializeWebAnimation = () => {
    elements.forEach(element => {
      const animation = element.animate(_keyframes, {
        id,
        delay: getDelay(),
        duration: getDuration(),
        easing: getEasing(),
        iterations: getIterations(),
        fill: getFill(),
        direction: getDirection()
      });
      animation.pause();
      webAnimations.push(animation);
    });
    if (webAnimations.length > 0) {
      webAnimations[0].onfinish = () => {
        animationFinish();
      };
    }
  };
  const initializeAnimation = () => {
    beforeAnimation();
    if (_keyframes.length > 0) {
      if (supportsWebAnimations) {
        initializeWebAnimation();
      }
    }
    initialized = true;
  };
  const setAnimationStep = step => {
    step = Math.min(Math.max(step, 0), 0.9999);
    if (supportsWebAnimations) {
      webAnimations.forEach(animation => {
        // When creating the animation the delay is guaranteed to be set to a number.
        animation.currentTime = animation.effect.getComputedTiming().delay + getDuration() * step;
        animation.pause();
      });
    }
  };
  const updateWebAnimation = step => {
    webAnimations.forEach(animation => {
      animation.effect.updateTiming({
        delay: getDelay(),
        duration: getDuration(),
        easing: getEasing(),
        iterations: getIterations(),
        fill: getFill(),
        direction: getDirection()
      });
    });
    if (step !== undefined) {
      setAnimationStep(step);
    }
  };
  const update = (deep = false, toggleAnimationName = true, step) => {
    if (deep) {
      childAnimations.forEach(animation => {
        animation.update(deep, toggleAnimationName, step);
      });
    }
    if (supportsWebAnimations) {
      updateWebAnimation(step);
    }
    return ani;
  };
  const progressStart = (forceLinearEasing = false, step) => {
    childAnimations.forEach(animation => {
      animation.progressStart(forceLinearEasing, step);
    });
    pauseAnimation();
    shouldForceLinearEasing = forceLinearEasing;
    if (!initialized) {
      initializeAnimation();
    }
    update(false, true, step);
    return ani;
  };
  const progressStep = step => {
    childAnimations.forEach(animation => {
      animation.progressStep(step);
    });
    setAnimationStep(step);
    return ani;
  };
  const progressEnd = (playTo, step, dur) => {
    shouldForceLinearEasing = false;
    childAnimations.forEach(animation => {
      animation.progressEnd(playTo, step, dur);
    });
    if (dur !== undefined) {
      forceDurationValue = dur;
    }
    finished = false;
    willComplete = true;
    if (playTo === 0) {
      forceDirectionValue = getDirection() === 'reverse' ? 'normal' : 'reverse';
      if (forceDirectionValue === 'reverse') {
        willComplete = false;
      }
      if (supportsWebAnimations) {
        update();
        setAnimationStep(1 - step);
      } else {
        forceDelayValue = (1 - step) * getDuration() * -1;
        update(false, false);
      }
    } else if (playTo === 1) {
      if (supportsWebAnimations) {
        update();
        setAnimationStep(step);
      } else {
        forceDelayValue = step * getDuration() * -1;
        update(false, false);
      }
    }
    if (playTo !== undefined && !parentAnimation) {
      play();
    }
    return ani;
  };
  const pauseAnimation = () => {
    if (initialized) {
      if (supportsWebAnimations) {
        webAnimations.forEach(animation => {
          animation.pause();
        });
      } else {
        elements.forEach(element => {
          setStyleProperty(element, 'animation-play-state', 'paused');
        });
      }
      paused = true;
    }
  };
  const pause = () => {
    childAnimations.forEach(animation => {
      animation.pause();
    });
    pauseAnimation();
    return ani;
  };
  const playCSSAnimations = () => {
    animationFinish();
  };
  const playWebAnimations = () => {
    webAnimations.forEach(animation => {
      animation.play();
    });
    if (_keyframes.length === 0 || elements.length === 0) {
      animationFinish();
    }
  };
  const resetAnimation = () => {
    if (supportsWebAnimations) {
      setAnimationStep(0);
      updateWebAnimation();
    }
  };
  const play = opts => {
    return new Promise(resolve => {
      if (opts === null || opts === void 0 ? void 0 : opts.sync) {
        shouldForceSyncPlayback = true;
        onFinish(() => shouldForceSyncPlayback = false, {
          oneTimeCallback: true
        });
      }
      if (!initialized) {
        initializeAnimation();
      }
      if (finished) {
        resetAnimation();
        finished = false;
      }
      if (shouldCalculateNumAnimations) {
        numAnimationsRunning = childAnimations.length + 1;
        shouldCalculateNumAnimations = false;
      }
      /**
       * When one of these callbacks fires we
       * need to clear the other's callback otherwise
       * you can potentially get these callbacks
       * firing multiple times if the play method
       * is subsequently called.
       * Example:
       * animation.play() (onStop and onFinish callbacks are registered)
       * animation.stop() (onStop callback is fired, onFinish is not)
       * animation.play() (onStop and onFinish callbacks are registered)
       * Total onStop callbacks: 1
       * Total onFinish callbacks: 2
       */
      const onStopCallback = () => {
        clearCallback(onFinishCallback, onFinishOneTimeCallbacks);
        resolve();
      };
      const onFinishCallback = () => {
        clearCallback(onStopCallback, onStopOneTimeCallbacks);
        resolve();
      };
      /**
       * The play method resolves when an animation
       * run either finishes or is cancelled.
       */
      onFinish(onFinishCallback, {
        oneTimeCallback: true
      });
      onStop(onStopCallback, {
        oneTimeCallback: true
      });
      childAnimations.forEach(animation => {
        animation.play();
      });
      if (supportsWebAnimations) {
        playWebAnimations();
      } else {
        playCSSAnimations();
      }
      paused = false;
    });
  };
  /**
   * Stops an animation and resets it state to the
   * beginning. This does not fire any onFinish
   * callbacks because the animation did not finish.
   * However, since the animation was not destroyed
   * (i.e. the animation could run again) we do not
   * clear the onFinish callbacks.
   */
  const stop = () => {
    childAnimations.forEach(animation => {
      animation.stop();
    });
    if (initialized) {
      cleanUpElements();
      initialized = false;
    }
    resetFlags();
    onStopOneTimeCallbacks.forEach(onStopCallback => onStopCallback.c(0, ani));
    onStopOneTimeCallbacks.length = 0;
  };
  const from = (property, value) => {
    const firstFrame = _keyframes[0];
    if (firstFrame !== undefined && (firstFrame.offset === undefined || firstFrame.offset === 0)) {
      firstFrame[property] = value;
    } else {
      _keyframes = [{
        offset: 0,
        [property]: value
      }, ..._keyframes];
    }
    return ani;
  };
  const to = (property, value) => {
    const lastFrame = _keyframes[_keyframes.length - 1];
    if (lastFrame !== undefined && (lastFrame.offset === undefined || lastFrame.offset === 1)) {
      lastFrame[property] = value;
    } else {
      _keyframes = [..._keyframes, {
        offset: 1,
        [property]: value
      }];
    }
    return ani;
  };
  const fromTo = (property, fromValue, toValue) => {
    return from(property, fromValue).to(property, toValue);
  };
  return ani = {
    parentAnimation,
    elements,
    childAnimations,
    id,
    animationFinish,
    from,
    to,
    fromTo,
    parent,
    play,
    pause,
    stop,
    destroy,
    keyframes,
    addAnimation,
    addElement,
    update,
    fill,
    direction,
    iterations,
    duration,
    easing,
    delay,
    getWebAnimations,
    getKeyframes,
    getFill,
    getDirection,
    getDelay,
    getIterations,
    getEasing,
    getDuration,
    afterAddRead,
    afterAddWrite,
    afterClearStyles,
    afterStyles,
    afterRemoveClass,
    afterAddClass,
    beforeAddRead,
    beforeAddWrite,
    beforeClearStyles,
    beforeStyles,
    beforeRemoveClass,
    beforeAddClass,
    onFinish,
    isRunning,
    progressStart,
    progressStep,
    progressEnd
  };
};


/***/ },

/***/ 23882
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/app-globals-DhZjtldk.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ globalScripts)
/* harmony export */ });
/* harmony import */ var _ionic_global_DfbeLwcV_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionic-global-DfbeLwcV.js */ 87158);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

const appGlobalScript = _ionic_global_DfbeLwcV_js__WEBPACK_IMPORTED_MODULE_0__.i || (() => {});
const globalScripts = appGlobalScript;


/***/ },

/***/ 12234
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/config-TO1rZH52.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ ENABLE_HTML_CONTENT_DEFAULT),
/* harmony export */   I: () => (/* binding */ IonicSafeString),
/* harmony export */   a: () => (/* binding */ sanitizeDOMString),
/* harmony export */   g: () => (/* binding */ getMode),
/* harmony export */   s: () => (/* binding */ setupConfig)
/* harmony export */ });
/* harmony import */ var _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-IGIE5vDm.js */ 21667);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
const sanitizeDOMString = untrustedString => {
  try {
    if (untrustedString instanceof IonicSafeString) {
      return untrustedString.value;
    }
    if (!isSanitizerEnabled() || typeof untrustedString !== 'string' || untrustedString === '') {
      return untrustedString;
    }
    /**
     * onload is fired when appending to a document
     * fragment in Chrome. If a string
     * contains onload then we should not
     * attempt to add this to the fragment.
     */
    if (untrustedString.includes('onload=')) {
      return '';
    }
    /**
     * Create a document fragment
     * separate from the main DOM,
     * create a div to do our work in
     */
    const documentFragment = document.createDocumentFragment();
    const workingDiv = document.createElement('div');
    documentFragment.appendChild(workingDiv);
    workingDiv.innerHTML = untrustedString;
    /**
     * Remove any elements
     * that are blocked
     */
    blockedTags.forEach(blockedTag => {
      const getElementsToRemove = documentFragment.querySelectorAll(blockedTag);
      for (let elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
        const element = getElementsToRemove[elementIndex];
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        } else {
          documentFragment.removeChild(element);
        }
        /**
         * We still need to sanitize
         * the children of this element
         * as they are left behind
         */
        const childElements = getElementChildren(element);
        /* eslint-disable-next-line */
        for (let childIndex = 0; childIndex < childElements.length; childIndex++) {
          sanitizeElement(childElements[childIndex]);
        }
      }
    });
    /**
     * Go through remaining elements and remove
     * non-allowed attribs
     */
    // IE does not support .children on document fragments, only .childNodes
    const dfChildren = getElementChildren(documentFragment);
    /* eslint-disable-next-line */
    for (let childIndex = 0; childIndex < dfChildren.length; childIndex++) {
      sanitizeElement(dfChildren[childIndex]);
    }
    // Append document fragment to div
    const fragmentDiv = document.createElement('div');
    fragmentDiv.appendChild(documentFragment);
    // First child is always the div we did our work in
    const getInnerDiv = fragmentDiv.querySelector('div');
    return getInnerDiv !== null ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
  } catch (err) {
    (0,_index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_0__.j)('sanitizeDOMString', err);
    return '';
  }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
// TODO(FW-2832): type (using Element triggers other type errors as well)
const sanitizeElement = element => {
  // IE uses childNodes, so ignore nodes that are not elements
  if (element.nodeType && element.nodeType !== 1) {
    return;
  }
  /**
   * If attributes is not a NamedNodeMap
   * then we should remove the element entirely.
   * This helps avoid DOM Clobbering attacks where
   * attributes is overridden.
   */
  if (typeof NamedNodeMap !== 'undefined' && !(element.attributes instanceof NamedNodeMap)) {
    element.remove();
    return;
  }
  for (let i = element.attributes.length - 1; i >= 0; i--) {
    const attribute = element.attributes.item(i);
    const attributeName = attribute.name;
    // remove non-allowed attribs
    if (!allowedAttributes.includes(attributeName.toLowerCase())) {
      element.removeAttribute(attributeName);
      continue;
    }
    // clean up any allowed attribs
    // that attempt to do any JS funny-business
    const attributeValue = attribute.value;
    /**
     * We also need to check the property value
     * as javascript: can allow special characters
     * such as &Tab; and still be valid (i.e. java&Tab;script)
     */
    const propertyValue = element[attributeName];
    /* eslint-disable */
    if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:') || propertyValue != null && propertyValue.toLowerCase().includes('javascript:')) {
      element.removeAttribute(attributeName);
    }
    /* eslint-enable */
  }
  /**
   * Sanitize any nested children
   */
  const childElements = getElementChildren(element);
  /* eslint-disable-next-line */
  for (let i = 0; i < childElements.length; i++) {
    sanitizeElement(childElements[i]);
  }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
// TODO(FW-2832): type
const getElementChildren = el => {
  return el.children != null ? el.children : el.childNodes;
};
const isSanitizerEnabled = () => {
  var _a;
  const win = window;
  const config = (_a = win === null || win === void 0 ? void 0 : win.Ionic) === null || _a === void 0 ? void 0 : _a.config;
  if (config) {
    if (config.get) {
      return config.get('sanitizerEnabled', true);
    } else {
      return config.sanitizerEnabled === true || config.sanitizerEnabled === undefined;
    }
  }
  return true;
};
const allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
const blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];
class IonicSafeString {
  constructor(value) {
    this.value = value;
  }
}
const setupConfig = config => {
  const win = window;
  const Ionic = win.Ionic;
  // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
  if (Ionic && Ionic.config && Ionic.config.constructor.name !== 'Object') {
    return;
  }
  win.Ionic = win.Ionic || {};
  win.Ionic.config = Object.assign(Object.assign({}, win.Ionic.config), config);
  return win.Ionic.config;
};
const getMode = () => {
  var _a;
  const win = window;
  const config = (_a = win === null || win === void 0 ? void 0 : win.Ionic) === null || _a === void 0 ? void 0 : _a.config;
  if (config) {
    if (config.mode) {
      return config.mode;
    } else {
      return config.get('mode');
    }
  }
  return 'md';
};
const ENABLE_HTML_CONTENT_DEFAULT = false;


/***/ },

/***/ 239
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/cubic-bezier-hHmYLOfE.js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getTimeGivenProgression)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 */
/**
 * EXPERIMENTAL
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 *
 * If you give a cubic bezier curve that never reaches the
 * provided progression, this function will return an empty array.
 */
const getTimeGivenProgression = (p0, p1, p2, p3, progression) => {
  return solveCubicBezier(p0[1], p1[1], p2[1], p3[1], progression).map(tValue => {
    return solveCubicParametricEquation(p0[0], p1[0], p2[0], p3[0], tValue);
  });
};
/**
 * Solve a cubic equation in one dimension (time)
 */
const solveCubicParametricEquation = (p0, p1, p2, p3, t) => {
  const partA = 3 * p1 * Math.pow(t - 1, 2);
  const partB = -3 * p2 * t + 3 * p2 + p3 * t;
  const partC = p0 * Math.pow(t - 1, 3);
  return t * (partA + t * partB) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
const solveCubicBezier = (p0, p1, p2, p3, refPoint) => {
  p0 -= refPoint;
  p1 -= refPoint;
  p2 -= refPoint;
  p3 -= refPoint;
  const roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
  return roots.filter(root => root >= 0 && root <= 1);
};
const solveQuadraticEquation = (a, b, c) => {
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    return [];
  } else {
    return [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
  }
};
const solveCubicEquation = (a, b, c, d) => {
  if (a === 0) {
    return solveQuadraticEquation(b, c, d);
  }
  b /= a;
  c /= a;
  d /= a;
  const p = (3 * c - b * b) / 3;
  const q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
  if (p === 0) {
    return [Math.pow(-q, 1 / 3)];
  } else if (q === 0) {
    return [Math.sqrt(-p), -Math.sqrt(-p)];
  }
  const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
  if (discriminant === 0) {
    return [Math.pow(q / 2, 1 / 2) - b / 3];
  } else if (discriminant > 0) {
    return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow(q / 2 + Math.sqrt(discriminant), 1 / 3) - b / 3];
  }
  const r = Math.sqrt(Math.pow(-(p / 3), 3));
  const phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
  const s = 2 * Math.pow(r, 1 / 3);
  return [s * Math.cos(phi / 3) - b / 3, s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3, s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3];
};


/***/ },

/***/ 22723
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-CyxE1S_P.js ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CoreDelegate),
/* harmony export */   a: () => (/* binding */ attachComponent),
/* harmony export */   d: () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _helpers_Tl8jw6S2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-Tl8jw6S2.js */ 42688);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


// TODO(FW-2832): types
const attachComponent = /*#__PURE__*/function () {
  var _ref = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (delegate, container, component, cssClasses, componentProps, inline) {
    var _a;
    if (delegate) {
      return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (!inline && typeof component !== 'string' && !(component instanceof HTMLElement)) {
      throw new Error('framework delegate is missing');
    }
    const el = typeof component === 'string' ? (_a = container.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(component) : component;
    if (cssClasses) {
      cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
      Object.assign(el, componentProps);
    }
    container.appendChild(el);
    yield new Promise(resolve => (0,_helpers_Tl8jw6S2_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
    return el;
  });
  return function attachComponent(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};
const CoreDelegate = () => {
  let BaseComponent;
  let Reference;
  const attachViewToDom = /*#__PURE__*/function () {
    var _ref2 = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parentElement, userComponent, userComponentProps = {}, cssClasses = []) {
      var _a, _b;
      BaseComponent = parentElement;
      let ChildComponent;
      /**
       * If passing in a component via the `component` props
       * we need to append it inside of our overlay component.
       */
      if (userComponent) {
        /**
         * If passing in the tag name, create
         * the element otherwise just get a reference
         * to the component.
         */
        const el = typeof userComponent === 'string' ? (_a = BaseComponent.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(userComponent) : userComponent;
        /**
         * Add any css classes passed in
         * via the cssClasses prop on the overlay.
         */
        cssClasses.forEach(c => el.classList.add(c));
        /**
         * Add any props passed in
         * via the componentProps prop on the overlay.
         */
        Object.assign(el, userComponentProps);
        /**
         * Finally, append the component
         * inside of the overlay component.
         */
        BaseComponent.appendChild(el);
        ChildComponent = el;
        yield new Promise(resolve => (0,_helpers_Tl8jw6S2_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
      } else if (BaseComponent.children.length > 0 && (BaseComponent.tagName === 'ION-MODAL' || BaseComponent.tagName === 'ION-POPOVER')) {
        /**
         * The delegate host wrapper el is only needed for modals and popovers
         * because they allow the dev to provide custom content to the overlay.
         */
        const root = ChildComponent = BaseComponent.children[0];
        if (!root.classList.contains('ion-delegate-host')) {
          /**
           * If the root element is not a delegate host, it means
           * that the overlay has not been presented yet and we need
           * to create the containing element with the specified classes.
           */
          const el = (_b = BaseComponent.ownerDocument) === null || _b === void 0 ? void 0 : _b.createElement('div');
          // Add a class to track if the root element was created by the delegate.
          el.classList.add('ion-delegate-host');
          cssClasses.forEach(c => el.classList.add(c));
          // Move each child from the original template to the new parent element.
          el.append(...BaseComponent.children);
          // Append the new parent element to the original parent element.
          BaseComponent.appendChild(el);
          /**
           * Update the ChildComponent to be the
           * newly created div in the event that one
           * does not already exist.
           */
          ChildComponent = el;
        }
      }
      /**
       * Get the root of the app and
       * add the overlay there.
       */
      const app = document.querySelector('ion-app') || document.body;
      /**
       * Create a placeholder comment so that
       * we can return this component to where
       * it was previously.
       */
      Reference = document.createComment('ionic teleport');
      BaseComponent.parentNode.insertBefore(Reference, BaseComponent);
      app.appendChild(BaseComponent);
      /**
       * We return the child component rather than the overlay
       * reference itself since modal and popover will
       * use this to wait for any Ionic components in the child view
       * to be ready (i.e. componentOnReady) when using the
       * lazy loaded component bundle.
       *
       * However, we fall back to returning BaseComponent
       * in the event that a modal or popover is presented
       * with no child content.
       */
      return ChildComponent !== null && ChildComponent !== void 0 ? ChildComponent : BaseComponent;
    });
    return function attachViewToDom(_x7, _x8) {
      return _ref2.apply(this, arguments);
    };
  }();
  const removeViewFromDom = () => {
    /**
     * Return component to where it was previously in the DOM.
     */
    if (BaseComponent && Reference) {
      Reference.parentNode.insertBefore(BaseComponent, Reference);
      Reference.remove();
    }
    return Promise.resolve();
  };
  return {
    attachViewToDom,
    removeViewFromDom
  };
};


/***/ },

/***/ 70566
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/gesture-controller-BTEOs1at.js ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ BACKDROP_NO_SCROLL),
/* harmony export */   G: () => (/* binding */ GESTURE_CONTROLLER)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
class GestureController {
  constructor() {
    this.gestureId = 0;
    this.requestedStart = new Map();
    this.disabledGestures = new Map();
    this.disabledScroll = new Set();
  }
  /**
   * Creates a gesture delegate based on the GestureConfig passed
   */
  createGesture(config) {
    var _a;
    return new GestureDelegate(this, this.newID(), config.name, (_a = config.priority) !== null && _a !== void 0 ? _a : 0, !!config.disableScroll);
  }
  /**
   * Creates a blocker that will block any other gesture events from firing. Set in the ion-gesture component.
   */
  createBlocker(opts = {}) {
    return new BlockerDelegate(this, this.newID(), opts.disable, !!opts.disableScroll);
  }
  start(gestureName, id, priority) {
    if (!this.canStart(gestureName)) {
      this.requestedStart.delete(id);
      return false;
    }
    this.requestedStart.set(id, priority);
    return true;
  }
  capture(gestureName, id, priority) {
    if (!this.start(gestureName, id, priority)) {
      return false;
    }
    const requestedStart = this.requestedStart;
    let maxPriority = -1e4;
    requestedStart.forEach(value => {
      maxPriority = Math.max(maxPriority, value);
    });
    if (maxPriority === priority) {
      this.capturedId = id;
      requestedStart.clear();
      const event = new CustomEvent('ionGestureCaptured', {
        detail: {
          gestureName
        }
      });
      document.dispatchEvent(event);
      return true;
    }
    requestedStart.delete(id);
    return false;
  }
  release(id) {
    this.requestedStart.delete(id);
    if (this.capturedId === id) {
      this.capturedId = undefined;
    }
  }
  disableGesture(gestureName, id) {
    let set = this.disabledGestures.get(gestureName);
    if (set === undefined) {
      set = new Set();
      this.disabledGestures.set(gestureName, set);
    }
    set.add(id);
  }
  enableGesture(gestureName, id) {
    const set = this.disabledGestures.get(gestureName);
    if (set !== undefined) {
      set.delete(id);
    }
  }
  disableScroll(id) {
    this.disabledScroll.add(id);
    if (this.disabledScroll.size === 1) {
      document.body.classList.add(BACKDROP_NO_SCROLL);
    }
  }
  enableScroll(id) {
    this.disabledScroll.delete(id);
    if (this.disabledScroll.size === 0) {
      document.body.classList.remove(BACKDROP_NO_SCROLL);
    }
  }
  canStart(gestureName) {
    if (this.capturedId !== undefined) {
      // a gesture already captured
      return false;
    }
    if (this.isDisabled(gestureName)) {
      return false;
    }
    return true;
  }
  isCaptured() {
    return this.capturedId !== undefined;
  }
  isScrollDisabled() {
    return this.disabledScroll.size > 0;
  }
  isDisabled(gestureName) {
    const disabled = this.disabledGestures.get(gestureName);
    if (disabled && disabled.size > 0) {
      return true;
    }
    return false;
  }
  newID() {
    this.gestureId++;
    return this.gestureId;
  }
}
class GestureDelegate {
  constructor(ctrl, id, name, priority, disableScroll) {
    this.id = id;
    this.name = name;
    this.disableScroll = disableScroll;
    this.priority = priority * 1000000 + id;
    this.ctrl = ctrl;
  }
  canStart() {
    if (!this.ctrl) {
      return false;
    }
    return this.ctrl.canStart(this.name);
  }
  start() {
    if (!this.ctrl) {
      return false;
    }
    return this.ctrl.start(this.name, this.id, this.priority);
  }
  capture() {
    if (!this.ctrl) {
      return false;
    }
    const captured = this.ctrl.capture(this.name, this.id, this.priority);
    if (captured && this.disableScroll) {
      this.ctrl.disableScroll(this.id);
    }
    return captured;
  }
  release() {
    if (this.ctrl) {
      this.ctrl.release(this.id);
      if (this.disableScroll) {
        this.ctrl.enableScroll(this.id);
      }
    }
  }
  destroy() {
    this.release();
    this.ctrl = undefined;
  }
}
class BlockerDelegate {
  constructor(ctrl, id, disable, disableScroll) {
    this.id = id;
    this.disable = disable;
    this.disableScroll = disableScroll;
    this.ctrl = ctrl;
  }
  block() {
    if (!this.ctrl) {
      return;
    }
    if (this.disable) {
      for (const gesture of this.disable) {
        this.ctrl.disableGesture(gesture, this.id);
      }
    }
    if (this.disableScroll) {
      this.ctrl.disableScroll(this.id);
    }
  }
  unblock() {
    if (!this.ctrl) {
      return;
    }
    if (this.disable) {
      for (const gesture of this.disable) {
        this.ctrl.enableGesture(gesture, this.id);
      }
    }
    if (this.disableScroll) {
      this.ctrl.enableScroll(this.id);
    }
  }
  destroy() {
    this.unblock();
    this.ctrl = undefined;
  }
}
const BACKDROP_NO_SCROLL = 'backdrop-no-scroll';
const GESTURE_CONTROLLER = new GestureController();


/***/ },

/***/ 67098
/*!****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/hardware-back-button-CTe4XmL7.js ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MENU_BACK_BUTTON_PRIORITY: () => (/* binding */ MENU_BACK_BUTTON_PRIORITY),
/* harmony export */   OVERLAY_BACK_BUTTON_PRIORITY: () => (/* binding */ OVERLAY_BACK_BUTTON_PRIORITY),
/* harmony export */   blockHardwareBackButton: () => (/* binding */ blockHardwareBackButton),
/* harmony export */   shouldUseCloseWatcher: () => (/* binding */ shouldUseCloseWatcher),
/* harmony export */   startHardwareBackButton: () => (/* binding */ startHardwareBackButton)
/* harmony export */ });
/* harmony import */ var _var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-ZjP4CjeZ.js */ 10575);
/* harmony import */ var _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-IGIE5vDm.js */ 21667);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



/**
 * CloseWatcher is a newer API that lets
 * use detect the hardware back button event
 * in a web browser: https://caniuse.com/?search=closewatcher
 * However, not every browser supports it yet.
 *
 * This needs to be a function so that we can
 * check the config once it has been set.
 * Otherwise, this code would be evaluated the
 * moment this file is evaluated which could be
 * before the config is set.
 */
const shouldUseCloseWatcher = () => _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_2__.e.get('experimentalCloseWatcher', false) && _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w !== undefined && "CloseWatcher" in _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w;
/**
 * When hardwareBackButton: false in config,
 * we need to make sure we also block the default
 * webview behavior. If we don't then it will be
 * possible for users to navigate backward while
 * an overlay is still open. Additionally, it will
 * give the appearance that the hardwareBackButton
 * config is not working as the page transition
 * will still happen.
 */
const blockHardwareBackButton = () => {
  document.addEventListener('backbutton', () => {}); // eslint-disable-line
};
const startHardwareBackButton = () => {
  const doc = document;
  let busy = false;
  const backButtonCallback = () => {
    if (busy) {
      return;
    }
    let index = 0;
    let handlers = [];
    const ev = new CustomEvent('ionBackButton', {
      bubbles: false,
      detail: {
        register(priority, handler) {
          handlers.push({
            priority,
            handler,
            id: index++
          });
        }
      }
    });
    doc.dispatchEvent(ev);
    const executeAction = /*#__PURE__*/function () {
      var _ref = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (handlerRegister) {
        try {
          if (handlerRegister === null || handlerRegister === void 0 ? void 0 : handlerRegister.handler) {
            const result = handlerRegister.handler(processHandlers);
            if (result != null) {
              yield result;
            }
          }
        } catch (e) {
          (0,_index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_2__.j)('[ion-app] - Exception in startHardwareBackButton:', e);
        }
      });
      return function executeAction(_x) {
        return _ref.apply(this, arguments);
      };
    }();
    const processHandlers = () => {
      if (handlers.length > 0) {
        let selectedHandler = {
          priority: Number.MIN_SAFE_INTEGER,
          handler: () => undefined,
          id: -1
        };
        handlers.forEach(handler => {
          if (handler.priority >= selectedHandler.priority) {
            selectedHandler = handler;
          }
        });
        busy = true;
        handlers = handlers.filter(handler => handler.id !== selectedHandler.id);
        executeAction(selectedHandler).then(() => busy = false);
      }
    };
    processHandlers();
  };
  /**
   * If the CloseWatcher is defined then
   * we don't want to also listen for the native
   * backbutton event otherwise we may get duplicate
   * events firing.
   */
  if (shouldUseCloseWatcher()) {
    let watcher;
    const configureWatcher = () => {
      watcher === null || watcher === void 0 ? void 0 : watcher.destroy();
      watcher = new _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w.CloseWatcher();
      /**
       * Once a close request happens
       * the watcher gets destroyed.
       * As a result, we need to re-configure
       * the watcher so we can respond to other
       * close requests.
       */
      watcher.onclose = () => {
        backButtonCallback();
        configureWatcher();
      };
    };
    configureWatcher();
  } else {
    doc.addEventListener('backbutton', backButtonCallback);
  }
};
const OVERLAY_BACK_BUTTON_PRIORITY = 100;
const MENU_BACK_BUTTON_PRIORITY = 99; // 1 less than overlay priority since menu is displayed behind overlays



/***/ },

/***/ 42688
/*!***************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/helpers-Tl8jw6S2.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ renderHiddenInput),
/* harmony export */   b: () => (/* binding */ inheritAttributes),
/* harmony export */   c: () => (/* binding */ componentOnReady),
/* harmony export */   d: () => (/* binding */ debounceEvent),
/* harmony export */   e: () => (/* binding */ clamp),
/* harmony export */   f: () => (/* binding */ addEventListener),
/* harmony export */   g: () => (/* binding */ getElementRoot),
/* harmony export */   h: () => (/* binding */ hasLazyBuild),
/* harmony export */   i: () => (/* binding */ inheritAriaAttributes),
/* harmony export */   j: () => (/* binding */ isSafeNumber),
/* harmony export */   k: () => (/* binding */ hasShadowDom),
/* harmony export */   l: () => (/* binding */ assert),
/* harmony export */   m: () => (/* binding */ removeEventListener),
/* harmony export */   n: () => (/* binding */ focusVisibleElement),
/* harmony export */   o: () => (/* binding */ isEndSide),
/* harmony export */   p: () => (/* binding */ debounce),
/* harmony export */   q: () => (/* binding */ pointerCoord),
/* harmony export */   r: () => (/* binding */ raf),
/* harmony export */   s: () => (/* binding */ shallowEqualStringMap),
/* harmony export */   t: () => (/* binding */ transitionEndAsync)
/* harmony export */ });
/* harmony import */ var _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-IGIE5vDm.js */ 21667);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

const transitionEndAsync = (el, expectedDuration = 0) => {
  return new Promise(resolve => {
    transitionEnd(el, expectedDuration, resolve);
  });
};
/**
 * Allows developer to wait for a transition
 * to finish and fallback to a timer if the
 * transition is cancelled or otherwise
 * never finishes. Also see transitionEndAsync
 * which is an await-able version of this.
 */
const transitionEnd = (el, expectedDuration = 0, callback) => {
  let unRegTrans;
  let animationTimeout;
  const opts = {
    passive: true
  };
  const ANIMATION_FALLBACK_TIMEOUT = 500;
  const unregister = () => {
    if (unRegTrans) {
      unRegTrans();
    }
  };
  const onTransitionEnd = ev => {
    if (ev === undefined || el === ev.target) {
      unregister();
      callback(ev);
    }
  };
  if (el) {
    el.addEventListener('webkitTransitionEnd', onTransitionEnd, opts);
    el.addEventListener('transitionend', onTransitionEnd, opts);
    animationTimeout = setTimeout(onTransitionEnd, expectedDuration + ANIMATION_FALLBACK_TIMEOUT);
    unRegTrans = () => {
      if (animationTimeout !== undefined) {
        clearTimeout(animationTimeout);
        animationTimeout = undefined;
      }
      el.removeEventListener('webkitTransitionEnd', onTransitionEnd, opts);
      el.removeEventListener('transitionend', onTransitionEnd, opts);
    };
  }
  return unregister;
};
/**
 * Waits for a component to be ready for
 * both custom element and non-custom element builds.
 * If non-custom element build, el.componentOnReady
 * will be used.
 * For custom element builds, we wait a frame
 * so that the inner contents of the component
 * have a chance to render.
 *
 * Use this utility rather than calling
 * el.componentOnReady yourself.
 */
const componentOnReady = (el, callback) => {
  if (el.componentOnReady) {
    // eslint-disable-next-line custom-rules/no-component-on-ready-method
    el.componentOnReady().then(resolvedEl => callback(resolvedEl));
  } else {
    raf(() => callback(el));
  }
};
/**
 * This functions checks if a Stencil component is using
 * the lazy loaded build of Stencil. Returns `true` if
 * the component is lazy loaded. Returns `false` otherwise.
 */
const hasLazyBuild = stencilEl => {
  return stencilEl.componentOnReady !== undefined;
};
/**
 * Elements inside of web components sometimes need to inherit global attributes
 * set on the host. For example, the inner input in `ion-input` should inherit
 * the `title` attribute that developers set directly on `ion-input`. This
 * helper function should be called in componentWillLoad and assigned to a variable
 * that is later used in the render function.
 *
 * This does not need to be reactive as changing attributes on the host element
 * does not trigger a re-render.
 */
const inheritAttributes = (el, attributes = []) => {
  const attributeObject = {};
  attributes.forEach(attr => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });
  return attributeObject;
};
/**
 * List of available ARIA attributes + `role`.
 * Removed deprecated attributes.
 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes
 */
const ariaAttributes = ['role', 'aria-activedescendant', 'aria-atomic', 'aria-autocomplete', 'aria-braillelabel', 'aria-brailleroledescription', 'aria-busy', 'aria-checked', 'aria-colcount', 'aria-colindex', 'aria-colindextext', 'aria-colspan', 'aria-controls', 'aria-current', 'aria-describedby', 'aria-description', 'aria-details', 'aria-disabled', 'aria-errormessage', 'aria-expanded', 'aria-flowto', 'aria-haspopup', 'aria-hidden', 'aria-invalid', 'aria-keyshortcuts', 'aria-label', 'aria-labelledby', 'aria-level', 'aria-live', 'aria-multiline', 'aria-multiselectable', 'aria-orientation', 'aria-owns', 'aria-placeholder', 'aria-posinset', 'aria-pressed', 'aria-readonly', 'aria-relevant', 'aria-required', 'aria-roledescription', 'aria-rowcount', 'aria-rowindex', 'aria-rowindextext', 'aria-rowspan', 'aria-selected', 'aria-setsize', 'aria-sort', 'aria-valuemax', 'aria-valuemin', 'aria-valuenow', 'aria-valuetext'];
/**
 * Returns an array of aria attributes that should be copied from
 * the shadow host element to a target within the light DOM.
 * @param el The element that the attributes should be copied from.
 * @param ignoreList The list of aria-attributes to ignore reflecting and removing from the host.
 * Use this in instances where we manually specify aria attributes on the `<Host>` element.
 */
const inheritAriaAttributes = (el, ignoreList) => {
  let attributesToInherit = ariaAttributes;
  return inheritAttributes(el, attributesToInherit);
};
const addEventListener = (el, eventName, callback, opts) => {
  return el.addEventListener(eventName, callback, opts);
};
const removeEventListener = (el, eventName, callback, opts) => {
  return el.removeEventListener(eventName, callback, opts);
};
/**
 * Gets the root context of a shadow dom element
 * On newer browsers this will be the shadowRoot,
 * but for older browser this may just be the
 * element itself.
 *
 * Useful for whenever you need to explicitly
 * do "myElement.shadowRoot!.querySelector(...)".
 */
const getElementRoot = (el, fallback = el) => {
  return el.shadowRoot || fallback;
};
/**
 * Patched version of requestAnimationFrame that avoids ngzone
 * Use only when you know ngzone should not run
 */
const raf = h => {
  if (typeof __zone_symbol__requestAnimationFrame === 'function') {
    return __zone_symbol__requestAnimationFrame(h);
  }
  if (typeof requestAnimationFrame === 'function') {
    return requestAnimationFrame(h);
  }
  return setTimeout(h);
};
const hasShadowDom = el => {
  return !!el.shadowRoot && !!el.attachShadow;
};
const focusVisibleElement = el => {
  el.focus();
  /**
   * When programmatically focusing an element,
   * the focus-visible utility will not run because
   * it is expecting a keyboard event to have triggered this;
   * however, there are times when we need to manually control
   * this behavior so we call the `setFocus` method on ion-app
   * which will let us explicitly set the elements to focus.
   */
  if (el.classList.contains('ion-focusable')) {
    const app = el.closest('ion-app');
    if (app) {
      app.setFocus([el]);
    }
  }
};
/**
 * This method is used to add a hidden input to a host element that contains
 * a Shadow DOM. It does not add the input inside of the Shadow root which
 * allows it to be picked up inside of forms. It should contain the same
 * values as the host element.
 *
 * @param always Add a hidden input even if the container does not use Shadow
 * @param container The element where the input will be added
 * @param name The name of the input
 * @param value The value of the input
 * @param disabled If true, the input is disabled
 */
const renderHiddenInput = (always, container, name, value, disabled) => {
  {
    let input = container.querySelector('input.aux-input');
    if (!input) {
      input = container.ownerDocument.createElement('input');
      input.type = 'hidden';
      input.classList.add('aux-input');
      container.appendChild(input);
    }
    input.disabled = disabled;
    input.name = name;
    input.value = value || '';
  }
};
const clamp = (min, n, max) => {
  return Math.max(min, Math.min(n, max));
};
const assert = (actual, reason) => {
  if (!actual) {
    const message = 'ASSERT: ' + reason;
    (0,_index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_0__.j)(message);
    debugger; // eslint-disable-line
    throw new Error(message);
  }
};
const pointerCoord = ev => {
  // get X coordinates for either a mouse click
  // or a touch depending on the given event
  if (ev) {
    const changedTouches = ev.changedTouches;
    if (changedTouches && changedTouches.length > 0) {
      const touch = changedTouches[0];
      return {
        x: touch.clientX,
        y: touch.clientY
      };
    }
    if (ev.pageX !== undefined) {
      return {
        x: ev.pageX,
        y: ev.pageY
      };
    }
  }
  return {
    x: 0,
    y: 0
  };
};
/**
 * @hidden
 * Given a side, return if it should be on the end
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 */
const isEndSide = side => {
  const isRTL = document.dir === 'rtl';
  switch (side) {
    case 'start':
      return isRTL;
    case 'end':
      return !isRTL;
    default:
      throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`);
  }
};
const debounceEvent = (event, wait) => {
  const original = event._original || event;
  return {
    _original: event,
    emit: debounce(original.emit.bind(original), wait)
  };
};
const debounce = (func, wait = 0) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(func, wait, ...args);
  };
};
/**
 * Check whether the two string maps are shallow equal.
 *
 * undefined is treated as an empty map.
 *
 * @returns whether the keys are the same and the values are shallow equal.
 */
const shallowEqualStringMap = (map1, map2) => {
  map1 !== null && map1 !== void 0 ? map1 : map1 = {};
  map2 !== null && map2 !== void 0 ? map2 : map2 = {};
  if (map1 === map2) {
    return true;
  }
  const keys1 = Object.keys(map1);
  if (keys1.length !== Object.keys(map2).length) {
    return false;
  }
  for (const k1 of keys1) {
    if (!(k1 in map2)) {
      return false;
    }
    if (map1[k1] !== map2[k1]) {
      return false;
    }
  }
  return true;
};
/**
 * Checks input for usable number. Not NaN and not Infinite.
 */
const isSafeNumber = input => {
  return typeof input === 'number' && !isNaN(input) && isFinite(input);
};


/***/ },

/***/ 79108
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-B-hkiOUh.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ LIFECYCLE_WILL_ENTER),
/* harmony export */   a: () => (/* binding */ LIFECYCLE_DID_ENTER),
/* harmony export */   b: () => (/* binding */ LIFECYCLE_WILL_LEAVE),
/* harmony export */   c: () => (/* binding */ LIFECYCLE_DID_LEAVE),
/* harmony export */   d: () => (/* binding */ LIFECYCLE_WILL_UNLOAD),
/* harmony export */   e: () => (/* binding */ _deepReady),
/* harmony export */   g: () => (/* binding */ getIonPageElement),
/* harmony export */   l: () => (/* binding */ lifecycle),
/* harmony export */   s: () => (/* binding */ setPageHidden),
/* harmony export */   t: () => (/* binding */ transition),
/* harmony export */   w: () => (/* binding */ waitForMount)
/* harmony export */ });
/* harmony import */ var _var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-IGIE5vDm.js */ 21667);
/* harmony import */ var _helpers_Tl8jw6S2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-Tl8jw6S2.js */ 42688);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const LIFECYCLE_WILL_ENTER = 'ionViewWillEnter';
const LIFECYCLE_DID_ENTER = 'ionViewDidEnter';
const LIFECYCLE_WILL_LEAVE = 'ionViewWillLeave';
const LIFECYCLE_DID_LEAVE = 'ionViewDidLeave';
const LIFECYCLE_WILL_UNLOAD = 'ionViewWillUnload';

/**
 * Moves focus to a specified element. Note that we do not remove the tabindex
 * because that can result in an unintentional blur. Non-focusables can't be
 * focused, so the body will get focused again.
 */
const moveFocus = el => {
  el.tabIndex = -1;
  el.focus();
};
/**
 * Elements that are hidden using `display: none` should not be focused even if
 * they are present in the DOM.
 */
const isVisible = el => {
  return el.offsetParent !== null;
};
/**
 * The focus controller allows us to manage focus within a view so assistive
 * technologies can inform users of changes to the navigation state. Traditional
 * native apps have a way of informing assistive technology about a navigation
 * state change. Mobile browsers have this too, but only when doing a full page
 * load. In a single page app we do not do that, so we need to build this
 * integration ourselves.
 */
const createFocusController = () => {
  const saveViewFocus = referenceEl => {
    const focusManagerEnabled = _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_1__.e.get('focusManagerPriority', false);
    /**
     * When going back to a previously visited page focus should typically be moved
     * back to the element that was last focused when the user was on this view.
     */
    if (focusManagerEnabled) {
      const activeEl = document.activeElement;
      if (activeEl !== null && (referenceEl === null || referenceEl === void 0 ? void 0 : referenceEl.contains(activeEl))) {
        activeEl.setAttribute(LAST_FOCUS, 'true');
      }
    }
  };
  const setViewFocus = referenceEl => {
    const focusManagerPriorities = _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_1__.e.get('focusManagerPriority', false);
    /**
     * If the focused element is a descendant of the referenceEl then it's possible
     * that the app developer manually moved focus, so we do not want to override that.
     * This can happen with inputs the are focused when a view transitions in.
     */
    if (Array.isArray(focusManagerPriorities) && !referenceEl.contains(document.activeElement)) {
      /**
       * When going back to a previously visited view focus should always be moved back
       * to the element that the user was last focused on when they were on this view.
       */
      const lastFocus = referenceEl.querySelector(`[${LAST_FOCUS}]`);
      if (lastFocus && isVisible(lastFocus)) {
        moveFocus(lastFocus);
        return;
      }
      for (const priority of focusManagerPriorities) {
        /**
         * For each recognized case (excluding the default case) make sure to return
         * so that the fallback focus behavior does not run.
         *
         * We intentionally query for specific roles/semantic elements so that the
         * transition manager can work with both Ionic and non-Ionic UI components.
         *
         * If new selectors are added, be sure to remove the outline ring by adding
         * new selectors to rule in core.scss.
         */
        switch (priority) {
          case 'content':
            const content = referenceEl.querySelector('main, [role="main"]');
            if (content && isVisible(content)) {
              moveFocus(content);
              return;
            }
            break;
          case 'heading':
            const headingOne = referenceEl.querySelector('h1, [role="heading"][aria-level="1"]');
            if (headingOne && isVisible(headingOne)) {
              moveFocus(headingOne);
              return;
            }
            break;
          case 'banner':
            const header = referenceEl.querySelector('header, [role="banner"]');
            if (header && isVisible(header)) {
              moveFocus(header);
              return;
            }
            break;
          default:
            (0,_index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_1__.f)(`Unrecognized focus manager priority value ${priority}`);
            break;
        }
      }
      /**
       * If there is nothing to focus then focus the page so focus at least moves to
       * the correct view. The browser will then determine where within the page to
       * move focus to.
       */
      moveFocus(referenceEl);
    }
  };
  return {
    saveViewFocus,
    setViewFocus
  };
};
const LAST_FOCUS = 'ion-last-focus';
const iosTransitionAnimation = () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./ios.transition--aMF-pDH.js */ 27057));
const mdTransitionAnimation = () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./md.transition-BEVbfm8j.js */ 8253));
const focusController = createFocusController();
// TODO(FW-2832): types
/**
 * Executes the main page transition.
 * It also manages the lifecycle of header visibility (if any)
 * to prevent visual flickering in iOS. The flickering only
 * occurs for a condensed header that is placed above the content.
 *
 * @param opts Options for the transition.
 * @returns A promise that resolves when the transition is complete.
 */
const transition = opts => {
  return new Promise((resolve, reject) => {
    (0,_index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => {
      const transitioningInactiveHeader = getIosIonHeader(opts);
      beforeTransition(opts, transitioningInactiveHeader);
      runTransition(opts).then(result => {
        if (result.animation) {
          result.animation.destroy();
        }
        afterTransition(opts);
        resolve(result);
      }, error => {
        afterTransition(opts);
        reject(error);
      }).finally(() => {
        // Ensure that the header is restored to its original state.
        setHeaderTransitionClass(transitioningInactiveHeader, false);
      });
    });
  });
};
const beforeTransition = (opts, transitioningInactiveHeader) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  focusController.saveViewFocus(leavingEl);
  setZIndex(enteringEl, leavingEl, opts.direction);
  // Prevent flickering of the header by adding a class.
  setHeaderTransitionClass(transitioningInactiveHeader, true);
  if (opts.showGoBack) {
    enteringEl.classList.add('can-go-back');
  } else {
    enteringEl.classList.remove('can-go-back');
  }
  setPageHidden(enteringEl, false);
  /**
   * When transitioning, the page should not
   * respond to click events. This resolves small
   * issues like users double tapping the ion-back-button.
   * These pointer events are removed in `afterTransition`.
   */
  enteringEl.style.setProperty('pointer-events', 'none');
  if (leavingEl) {
    setPageHidden(leavingEl, false);
    leavingEl.style.setProperty('pointer-events', 'none');
  }
};
const runTransition = /*#__PURE__*/function () {
  var _ref = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (opts) {
    const animationBuilder = yield getAnimationBuilder(opts);
    const ani = animationBuilder && _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_1__.B.isBrowser ? animation(animationBuilder, opts) : noAnimation(opts); // fast path for no animation
    return ani;
  });
  return function runTransition(_x) {
    return _ref.apply(this, arguments);
  };
}();
const afterTransition = opts => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  enteringEl.classList.remove('ion-page-invisible');
  enteringEl.style.removeProperty('pointer-events');
  if (leavingEl !== undefined) {
    leavingEl.classList.remove('ion-page-invisible');
    leavingEl.style.removeProperty('pointer-events');
  }
  focusController.setViewFocus(enteringEl);
};
const getAnimationBuilder = /*#__PURE__*/function () {
  var _ref2 = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (opts) {
    if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
      return undefined;
    }
    if (opts.animationBuilder) {
      return opts.animationBuilder;
    }
    const getAnimation = opts.mode === 'ios' ? (yield iosTransitionAnimation()).iosTransitionAnimation : (yield mdTransitionAnimation()).mdTransitionAnimation;
    return getAnimation;
  });
  return function getAnimationBuilder(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
const animation = /*#__PURE__*/function () {
  var _ref3 = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (animationBuilder, opts) {
    yield waitForReady(opts, true);
    const trans = animationBuilder(opts.baseEl, opts);
    fireWillEvents(opts.enteringEl, opts.leavingEl);
    const didComplete = yield playTransition(trans, opts);
    if (opts.progressCallback) {
      opts.progressCallback(undefined);
    }
    if (didComplete) {
      fireDidEvents(opts.enteringEl, opts.leavingEl);
    }
    return {
      hasCompleted: didComplete,
      animation: trans
    };
  });
  return function animation(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();
const noAnimation = /*#__PURE__*/function () {
  var _ref4 = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (opts) {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    const focusManagerEnabled = _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_1__.e.get('focusManagerPriority', false);
    /**
     * If the focus manager is enabled then we need to wait for Ionic components to be
     * rendered otherwise the component to focus may not be focused because it is hidden.
     */
    yield waitForReady(opts, focusManagerEnabled);
    fireWillEvents(enteringEl, leavingEl);
    fireDidEvents(enteringEl, leavingEl);
    return {
      hasCompleted: true
    };
  });
  return function noAnimation(_x5) {
    return _ref4.apply(this, arguments);
  };
}();
const waitForReady = /*#__PURE__*/function () {
  var _ref5 = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (opts, defaultDeep) {
    const deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
    if (deep) {
      yield Promise.all([_deepReady(opts.enteringEl), _deepReady(opts.leavingEl)]);
    }
    yield notifyViewReady(opts.viewIsReady, opts.enteringEl);
  });
  return function waitForReady(_x6, _x7) {
    return _ref5.apply(this, arguments);
  };
}();
const notifyViewReady = /*#__PURE__*/function () {
  var _ref6 = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (viewIsReady, enteringEl) {
    if (viewIsReady) {
      yield viewIsReady(enteringEl);
    }
  });
  return function notifyViewReady(_x8, _x9) {
    return _ref6.apply(this, arguments);
  };
}();
const playTransition = (trans, opts) => {
  const progressCallback = opts.progressCallback;
  const promise = new Promise(resolve => {
    trans.onFinish(currentStep => resolve(currentStep === 1));
  });
  // cool, let's do this, start the transition
  if (progressCallback) {
    // this is a swipe to go back, just get the transition progress ready
    // kick off the swipe animation start
    trans.progressStart(true);
    progressCallback(trans);
  } else {
    // only the top level transition should actually start "play"
    // kick it off and let it play through
    // ******** DOM WRITE ****************
    trans.play();
  }
  // create a callback for when the animation is done
  return promise;
};
const fireWillEvents = (enteringEl, leavingEl) => {
  lifecycle(leavingEl, LIFECYCLE_WILL_LEAVE);
  lifecycle(enteringEl, LIFECYCLE_WILL_ENTER);
};
const fireDidEvents = (enteringEl, leavingEl) => {
  lifecycle(enteringEl, LIFECYCLE_DID_ENTER);
  lifecycle(leavingEl, LIFECYCLE_DID_LEAVE);
};
const lifecycle = (el, eventName) => {
  if (el) {
    const ev = new CustomEvent(eventName, {
      bubbles: false,
      cancelable: false
    });
    el.dispatchEvent(ev);
  }
};
/**
 * Wait two request animation frame loops.
 * This allows the framework implementations enough time to mount
 * the user-defined contents. This is often needed when using inline
 * modals and popovers that accept user components. For popover,
 * the contents must be mounted for the popover to be sized correctly.
 * For modals, the contents must be mounted for iOS to run the
 * transition correctly.
 *
 * On Angular and React, a single raf is enough time, but for Vue
 * we need to wait two rafs. As a result we are using two rafs for
 * all frameworks to ensure contents are mounted.
 */
const waitForMount = () => {
  return new Promise(resolve => (0,_helpers_Tl8jw6S2_js__WEBPACK_IMPORTED_MODULE_2__.r)(() => (0,_helpers_Tl8jw6S2_js__WEBPACK_IMPORTED_MODULE_2__.r)(() => resolve())));
};
const _deepReady = /*#__PURE__*/function () {
  var _ref7 = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (el) {
    const element = el;
    if (element) {
      if (element.componentOnReady != null) {
        // eslint-disable-next-line custom-rules/no-component-on-ready-method
        const stencilEl = yield element.componentOnReady();
        if (stencilEl != null) {
          return;
        }
        /**
         * Custom elements in Stencil will have __registerHost.
         */
      } else if (element.__registerHost != null) {
        /**
         * Non-lazy loaded custom elements need to wait
         * one frame for component to be loaded.
         */
        const waitForCustomElement = new Promise(resolve => (0,_helpers_Tl8jw6S2_js__WEBPACK_IMPORTED_MODULE_2__.r)(resolve));
        yield waitForCustomElement;
        return;
      }
      yield Promise.all(Array.from(element.children).map(_deepReady));
    }
  });
  return function deepReady(_x0) {
    return _ref7.apply(this, arguments);
  };
}();
const setPageHidden = (el, hidden) => {
  if (hidden) {
    el.setAttribute('aria-hidden', 'true');
    el.classList.add('ion-page-hidden');
  } else {
    el.hidden = false;
    el.removeAttribute('aria-hidden');
    el.classList.remove('ion-page-hidden');
  }
};
const setZIndex = (enteringEl, leavingEl, direction) => {
  if (enteringEl !== undefined) {
    enteringEl.style.zIndex = direction === 'back' ? '99' : '101';
  }
  if (leavingEl !== undefined) {
    leavingEl.style.zIndex = '100';
  }
};
/**
 * Add a class to ensure that the header (if any)
 * does not flicker during the transition. By adding the
 * transitioning class, we ensure that the header has
 * the necessary styles to prevent the following flickers:
 * 1. When entering a page with a condensed header, the
 * header should never be visible. However,
 * it briefly renders the background color while
 * the transition is occurring.
 * 2. When leaving a page with a condensed header, the
 * header has an opacity of 0 and the pages
 * have a z-index which causes the entering page to
 * briefly show it's content underneath the leaving page.
 * 3. When entering a page or leaving a page with a fade
 * header, the header should not have a background color.
 * However, it briefly shows the background color while
 * the transition is occurring.
 *
 * @param header The header element to modify.
 * @param isTransitioning Whether the transition is occurring.
 */
const setHeaderTransitionClass = (header, isTransitioning) => {
  if (!header) {
    return;
  }
  const transitionClass = 'header-transitioning';
  if (isTransitioning) {
    header.classList.add(transitionClass);
  } else {
    header.classList.remove(transitionClass);
  }
};
const getIonPageElement = element => {
  if (element.classList.contains('ion-page')) {
    return element;
  }
  const ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
  if (ionPage) {
    return ionPage;
  }
  // idk, return the original element so at least something animates and we don't have a null pointer
  return element;
};
/**
 * Retrieves the ion-header element from a page based on the
 * direction of the transition.
 *
 * @param opts Options for the transition.
 * @returns The ion-header element or null if not found or not in 'ios' mode.
 */
const getIosIonHeader = opts => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  const direction = opts.direction;
  const mode = opts.mode;
  if (mode !== 'ios') {
    return null;
  }
  const element = direction === 'back' ? leavingEl : enteringEl;
  if (!element) {
    return null;
  }
  return element.querySelector('ion-header');
};


/***/ },

/***/ 10826
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-B2KwgBLx.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ menuController)
/* harmony export */ });
/* harmony import */ var _var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-ZjP4CjeZ.js */ 10575);
/* harmony import */ var _hardware_back_button_CTe4XmL7_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hardware-back-button-CTe4XmL7.js */ 67098);
/* harmony import */ var _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-IGIE5vDm.js */ 21667);
/* harmony import */ var _helpers_Tl8jw6S2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers-Tl8jw6S2.js */ 42688);
/* harmony import */ var _ionic_global_DfbeLwcV_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ionic-global-DfbeLwcV.js */ 87158);
/* harmony import */ var _animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animation-CnGMT4ji.js */ 79663);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */







/**
 * baseAnimation
 * Base class which is extended by the various types. Each
 * type will provide their own animations for open and close
 * and registers itself with Menu.
 */
const baseAnimation = isIos => {
  // https://material.io/guidelines/motion/movement.html#movement-movement-in-out-of-screen-bounds
  // https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves
  /**
   * "Apply the sharp curve to items temporarily leaving the screen that may return
   * from the same exit point. When they return, use the deceleration curve. On mobile,
   * this transition typically occurs over 300ms" -- MD Motion Guide
   */
  return (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_6__.c)().duration(isIos ? 400 : 300);
};

/**
 * Menu Overlay Type
 * The menu slides over the content. The content
 * itself, which is under the menu, does not move.
 */
const menuOverlayAnimation = menu => {
  let closedX;
  let openedX;
  const width = menu.width + 8;
  const menuAnimation = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  const backdropAnimation = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  if (menu.isEndSide) {
    // right side
    closedX = width + 'px';
    openedX = '0px';
  } else {
    // left side
    closedX = -width + 'px';
    openedX = '0px';
  }
  menuAnimation.addElement(menu.menuInnerEl).fromTo('transform', `translateX(${closedX})`, `translateX(${openedX})`);
  const mode = (0,_ionic_global_DfbeLwcV_js__WEBPACK_IMPORTED_MODULE_5__.b)(menu);
  const isIos = mode === 'ios';
  const opacity = isIos ? 0.2 : 0.25;
  backdropAnimation.addElement(menu.backdropEl).fromTo('opacity', 0.01, opacity);
  return baseAnimation(isIos).addAnimation([menuAnimation, backdropAnimation]);
};

/**
 * Menu Push Type
 * The content slides over to reveal the menu underneath.
 * The menu itself also slides over to reveal its bad self.
 */
const menuPushAnimation = menu => {
  let contentOpenedX;
  let menuClosedX;
  const mode = (0,_ionic_global_DfbeLwcV_js__WEBPACK_IMPORTED_MODULE_5__.b)(menu);
  const width = menu.width;
  if (menu.isEndSide) {
    contentOpenedX = -width + 'px';
    menuClosedX = width + 'px';
  } else {
    contentOpenedX = width + 'px';
    menuClosedX = -width + 'px';
  }
  const menuAnimation = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_6__.c)().addElement(menu.menuInnerEl).fromTo('transform', `translateX(${menuClosedX})`, 'translateX(0px)');
  const contentAnimation = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_6__.c)().addElement(menu.contentEl).fromTo('transform', 'translateX(0px)', `translateX(${contentOpenedX})`);
  const backdropAnimation = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_6__.c)().addElement(menu.backdropEl).fromTo('opacity', 0.01, 0.32);
  return baseAnimation(mode === 'ios').addAnimation([menuAnimation, contentAnimation, backdropAnimation]);
};

/**
 * Menu Reveal Type
 * The content slides over to reveal the menu underneath.
 * The menu itself, which is under the content, does not move.
 */
const menuRevealAnimation = menu => {
  const mode = (0,_ionic_global_DfbeLwcV_js__WEBPACK_IMPORTED_MODULE_5__.b)(menu);
  const openedX = menu.width * (menu.isEndSide ? -1 : 1) + 'px';
  const contentOpen = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_6__.c)().addElement(menu.contentEl) // REVIEW
  .fromTo('transform', 'translateX(0px)', `translateX(${openedX})`);
  return baseAnimation(mode === 'ios').addAnimation(contentOpen);
};
const createMenuController = () => {
  const menuAnimations = new Map();
  const menus = [];
  const open = /*#__PURE__*/function () {
    var _ref = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (menu) {
      const menuEl = yield get(menu, true);
      if (menuEl) {
        return menuEl.open();
      }
      return false;
    });
    return function open(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  const close = /*#__PURE__*/function () {
    var _ref2 = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (menu) {
      const menuEl = yield menu !== undefined ? get(menu, true) : getOpen();
      if (menuEl !== undefined) {
        return menuEl.close();
      }
      return false;
    });
    return function close(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  const toggle = /*#__PURE__*/function () {
    var _ref3 = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (menu) {
      const menuEl = yield get(menu, true);
      if (menuEl) {
        return menuEl.toggle();
      }
      return false;
    });
    return function toggle(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  const enable = /*#__PURE__*/function () {
    var _ref4 = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (shouldEnable, menu) {
      const menuEl = yield get(menu);
      if (menuEl) {
        menuEl.disabled = !shouldEnable;
      }
      return menuEl;
    });
    return function enable(_x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }();
  const swipeGesture = /*#__PURE__*/function () {
    var _ref5 = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (shouldEnable, menu) {
      const menuEl = yield get(menu);
      if (menuEl) {
        menuEl.swipeGesture = shouldEnable;
      }
      return menuEl;
    });
    return function swipeGesture(_x6, _x7) {
      return _ref5.apply(this, arguments);
    };
  }();
  const isOpen = /*#__PURE__*/function () {
    var _ref6 = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (menu) {
      if (menu != null) {
        const menuEl = yield get(menu);
        // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
        return menuEl !== undefined && menuEl.isOpen();
      } else {
        const menuEl = yield getOpen();
        return menuEl !== undefined;
      }
    });
    return function isOpen(_x8) {
      return _ref6.apply(this, arguments);
    };
  }();
  const isEnabled = /*#__PURE__*/function () {
    var _ref7 = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (menu) {
      const menuEl = yield get(menu);
      if (menuEl) {
        return !menuEl.disabled;
      }
      return false;
    });
    return function isEnabled(_x9) {
      return _ref7.apply(this, arguments);
    };
  }();
  /**
   * Finds and returns the menu specified by "menu" if registered.
   * @param menu - The side or ID of the desired menu
   * @param logOnMultipleSideMenus - If true, this function will log a warning
   * if "menu" is a side but multiple menus on the same side were found. Since this function
   * is used in multiple places, we default this log to false so that the calling
   * functions can choose whether or not it is appropriate to log this warning.
   */
  const get = /*#__PURE__*/function () {
    var _ref8 = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (menu, logOnMultipleSideMenus = false) {
      yield waitUntilReady();
      if (menu === 'start' || menu === 'end') {
        // there could be more than one menu on the same side
        // so first try to get the enabled one
        const menuRefs = menus.filter(m => m.side === menu && !m.disabled);
        if (menuRefs.length >= 1) {
          if (menuRefs.length > 1 && logOnMultipleSideMenus) {
            (0,_index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_3__.f)(`menuController queried for a menu on the "${menu}" side, but ${menuRefs.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`, menuRefs.map(m => m.el));
          }
          return menuRefs[0].el;
        }
        // didn't find a menu side that is enabled
        // so try to get the first menu side found
        const sideMenuRefs = menus.filter(m => m.side === menu);
        if (sideMenuRefs.length >= 1) {
          if (sideMenuRefs.length > 1 && logOnMultipleSideMenus) {
            (0,_index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_3__.f)(`menuController queried for a menu on the "${menu}" side, but ${sideMenuRefs.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`, sideMenuRefs.map(m => m.el));
          }
          return sideMenuRefs[0].el;
        }
      } else if (menu != null) {
        // the menuId was not left or right
        // so try to get the menu by its "id"
        return find(m => m.menuId === menu);
      }
      // return the first enabled menu
      const menuEl = find(m => !m.disabled);
      if (menuEl) {
        return menuEl;
      }
      // get the first menu in the array, if one exists
      return menus.length > 0 ? menus[0].el : undefined;
    });
    return function get(_x0) {
      return _ref8.apply(this, arguments);
    };
  }();
  /**
   * Get the instance of the opened menu. Returns `null` if a menu is not found.
   */
  const getOpen = /*#__PURE__*/function () {
    var _ref9 = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield waitUntilReady();
      return _getOpenSync();
    });
    return function getOpen() {
      return _ref9.apply(this, arguments);
    };
  }();
  /**
   * Get all menu instances.
   */
  const getMenus = /*#__PURE__*/function () {
    var _ref0 = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield waitUntilReady();
      return getMenusSync();
    });
    return function getMenus() {
      return _ref0.apply(this, arguments);
    };
  }();
  /**
   * Get whether or not a menu is animating. Returns `true` if any
   * menu is currently animating.
   */
  const isAnimating = /*#__PURE__*/function () {
    var _ref1 = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield waitUntilReady();
      return isAnimatingSync();
    });
    return function isAnimating() {
      return _ref1.apply(this, arguments);
    };
  }();
  const registerAnimation = (name, animation) => {
    menuAnimations.set(name, animation);
  };
  const _register = menu => {
    if (menus.indexOf(menu) < 0) {
      menus.push(menu);
    }
  };
  const _unregister = menu => {
    const index = menus.indexOf(menu);
    if (index > -1) {
      menus.splice(index, 1);
    }
  };
  const _setOpen = /*#__PURE__*/function () {
    var _ref10 = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (menu, shouldOpen, animated, role) {
      if (isAnimatingSync()) {
        return false;
      }
      if (shouldOpen) {
        const openedMenu = yield getOpen();
        if (openedMenu && menu.el !== openedMenu) {
          yield openedMenu.setOpen(false, false);
        }
      }
      return menu._setOpen(shouldOpen, animated, role);
    });
    return function _setOpen(_x1, _x10, _x11, _x12) {
      return _ref10.apply(this, arguments);
    };
  }();
  const _createAnimation = (type, menuCmp) => {
    const animationBuilder = menuAnimations.get(type); // TODO(FW-2832): type
    if (!animationBuilder) {
      throw new Error('animation not registered');
    }
    const animation = animationBuilder(menuCmp);
    return animation;
  };
  const _getOpenSync = () => {
    return find(m => m._isOpen);
  };
  const getMenusSync = () => {
    return menus.map(menu => menu.el);
  };
  const isAnimatingSync = () => {
    return menus.some(menu => menu.isAnimating);
  };
  const find = predicate => {
    const instance = menus.find(predicate);
    if (instance !== undefined) {
      return instance.el;
    }
    return undefined;
  };
  const waitUntilReady = () => {
    return Promise.all(Array.from(document.querySelectorAll('ion-menu')).map(menu => new Promise(resolve => (0,_helpers_Tl8jw6S2_js__WEBPACK_IMPORTED_MODULE_4__.c)(menu, resolve))));
  };
  registerAnimation('reveal', menuRevealAnimation);
  registerAnimation('push', menuPushAnimation);
  registerAnimation('overlay', menuOverlayAnimation);
  _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.d === null || _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.d === void 0 ? void 0 : _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.d.addEventListener('ionBackButton', ev => {
    const openMenu = _getOpenSync();
    if (openMenu) {
      ev.detail.register(_hardware_back_button_CTe4XmL7_js__WEBPACK_IMPORTED_MODULE_2__.MENU_BACK_BUTTON_PRIORITY, () => {
        return openMenu.close();
      });
    }
  });
  return {
    registerAnimation,
    get,
    getMenus,
    getOpen,
    isEnabled,
    swipeGesture,
    isAnimating,
    isOpen,
    enable,
    toggle,
    close,
    open,
    _getOpenSync,
    _createAnimation,
    _register,
    _unregister,
    _setOpen
  };
};
const menuController = /*@__PURE__*/createMenuController();


/***/ },

/***/ 75860
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-CfgBF1SE.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GESTURE_CONTROLLER: () => (/* reexport safe */ _gesture_controller_BTEOs1at_js__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   createGesture: () => (/* binding */ createGesture)
/* harmony export */ });
/* harmony import */ var _gesture_controller_BTEOs1at_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gesture-controller-BTEOs1at.js */ 70566);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

const addEventListener = (el,
// TODO(FW-2832): type
eventName, callback, opts) => {
  // use event listener options when supported
  // otherwise it's just a boolean for the "capture" arg
  const listenerOpts = supportsPassive(el) ? {
    capture: false,
    passive: !!opts.passive
  } : false;
  let add;
  let remove;
  if (el['__zone_symbol__addEventListener']) {
    add = '__zone_symbol__addEventListener';
    remove = '__zone_symbol__removeEventListener';
  } else {
    add = 'addEventListener';
    remove = 'removeEventListener';
  }
  el[add](eventName, callback, listenerOpts);
  return () => {
    el[remove](eventName, callback, listenerOpts);
  };
};
const supportsPassive = node => {
  if (_sPassive === undefined) {
    try {
      const opts = Object.defineProperty({}, 'passive', {
        get: () => {
          _sPassive = true;
        }
      });
      node.addEventListener('optsTest', () => {
        return;
      }, opts);
    } catch (e) {
      _sPassive = false;
    }
  }
  return !!_sPassive;
};
let _sPassive;
const MOUSE_WAIT = 2000;
// TODO(FW-2832): types
const createPointerEvents = (el, pointerDown, pointerMove, pointerUp, options) => {
  let rmTouchStart;
  let rmTouchMove;
  let rmTouchEnd;
  let rmTouchCancel;
  let rmMouseStart;
  let rmMouseMove;
  let rmMouseUp;
  let lastTouchEvent = 0;
  const handleTouchStart = ev => {
    lastTouchEvent = Date.now() + MOUSE_WAIT;
    if (!pointerDown(ev)) {
      return;
    }
    if (!rmTouchMove && pointerMove) {
      rmTouchMove = addEventListener(el, 'touchmove', pointerMove, options);
    }
    /**
     * Events are dispatched on the element that is tapped and bubble up to
     * the reference element in the gesture. In the event that the element this
     * event was first dispatched on is removed from the DOM, the event will no
     * longer bubble up to our reference element. This leaves the gesture in an
     * unusable state. To account for this, the touchend and touchcancel listeners
     * should be added to the event target so that they still fire even if the target
     * is removed from the DOM.
     */
    if (!rmTouchEnd) {
      rmTouchEnd = addEventListener(ev.target, 'touchend', handleTouchEnd, options);
    }
    if (!rmTouchCancel) {
      rmTouchCancel = addEventListener(ev.target, 'touchcancel', handleTouchEnd, options);
    }
  };
  const handleMouseDown = ev => {
    if (lastTouchEvent > Date.now()) {
      return;
    }
    if (!pointerDown(ev)) {
      return;
    }
    if (!rmMouseMove && pointerMove) {
      rmMouseMove = addEventListener(getDocument(el), 'mousemove', pointerMove, options);
    }
    if (!rmMouseUp) {
      rmMouseUp = addEventListener(getDocument(el), 'mouseup', handleMouseUp, options);
    }
  };
  const handleTouchEnd = ev => {
    stopTouch();
    if (pointerUp) {
      pointerUp(ev);
    }
  };
  const handleMouseUp = ev => {
    stopMouse();
    if (pointerUp) {
      pointerUp(ev);
    }
  };
  const stopTouch = () => {
    if (rmTouchMove) {
      rmTouchMove();
    }
    if (rmTouchEnd) {
      rmTouchEnd();
    }
    if (rmTouchCancel) {
      rmTouchCancel();
    }
    rmTouchMove = rmTouchEnd = rmTouchCancel = undefined;
  };
  const stopMouse = () => {
    if (rmMouseMove) {
      rmMouseMove();
    }
    if (rmMouseUp) {
      rmMouseUp();
    }
    rmMouseMove = rmMouseUp = undefined;
  };
  const stop = () => {
    stopTouch();
    stopMouse();
  };
  const enable = (isEnabled = true) => {
    if (!isEnabled) {
      if (rmTouchStart) {
        rmTouchStart();
      }
      if (rmMouseStart) {
        rmMouseStart();
      }
      rmTouchStart = rmMouseStart = undefined;
      stop();
    } else {
      if (!rmTouchStart) {
        rmTouchStart = addEventListener(el, 'touchstart', handleTouchStart, options);
      }
      if (!rmMouseStart) {
        rmMouseStart = addEventListener(el, 'mousedown', handleMouseDown, options);
      }
    }
  };
  const destroy = () => {
    enable(false);
    pointerUp = pointerMove = pointerDown = undefined;
  };
  return {
    enable,
    stop,
    destroy
  };
};
const getDocument = node => {
  return node instanceof Document ? node : node.ownerDocument;
};
const createPanRecognizer = (direction, thresh, maxAngle) => {
  const radians = maxAngle * (Math.PI / 180);
  const isDirX = direction === 'x';
  const maxCosine = Math.cos(radians);
  const threshold = thresh * thresh;
  let startX = 0;
  let startY = 0;
  let dirty = false;
  let isPan = 0;
  return {
    start(x, y) {
      startX = x;
      startY = y;
      isPan = 0;
      dirty = true;
    },
    detect(x, y) {
      if (!dirty) {
        return false;
      }
      const deltaX = x - startX;
      const deltaY = y - startY;
      const distance = deltaX * deltaX + deltaY * deltaY;
      if (distance < threshold) {
        return false;
      }
      const hypotenuse = Math.sqrt(distance);
      const cosine = (isDirX ? deltaX : deltaY) / hypotenuse;
      if (cosine > maxCosine) {
        isPan = 1;
      } else if (cosine < -maxCosine) {
        isPan = -1;
      } else {
        isPan = 0;
      }
      dirty = false;
      return true;
    },
    isGesture() {
      return isPan !== 0;
    },
    getDirection() {
      return isPan;
    }
  };
};

// TODO(FW-2832): types
const createGesture = config => {
  let hasCapturedPan = false;
  let hasStartedPan = false;
  let hasFiredStart = true;
  let isMoveQueued = false;
  const finalConfig = Object.assign({
    disableScroll: false,
    direction: 'x',
    gesturePriority: 0,
    passive: true,
    maxAngle: 40,
    threshold: 10
  }, config);
  const canStart = finalConfig.canStart;
  const onWillStart = finalConfig.onWillStart;
  const onStart = finalConfig.onStart;
  const onEnd = finalConfig.onEnd;
  const notCaptured = finalConfig.notCaptured;
  const onMove = finalConfig.onMove;
  const threshold = finalConfig.threshold;
  const passive = finalConfig.passive;
  const blurOnStart = finalConfig.blurOnStart;
  const detail = {
    type: 'pan',
    startX: 0,
    startY: 0,
    startTime: 0,
    currentX: 0,
    currentY: 0,
    velocityX: 0,
    velocityY: 0,
    deltaX: 0,
    deltaY: 0,
    currentTime: 0,
    event: undefined,
    data: undefined
  };
  const pan = createPanRecognizer(finalConfig.direction, finalConfig.threshold, finalConfig.maxAngle);
  const gesture = _gesture_controller_BTEOs1at_js__WEBPACK_IMPORTED_MODULE_0__.G.createGesture({
    name: config.gestureName,
    priority: config.gesturePriority,
    disableScroll: config.disableScroll
  });
  const pointerDown = ev => {
    const timeStamp = now(ev);
    if (hasStartedPan || !hasFiredStart) {
      return false;
    }
    updateDetail(ev, detail);
    detail.startX = detail.currentX;
    detail.startY = detail.currentY;
    detail.startTime = detail.currentTime = timeStamp;
    detail.velocityX = detail.velocityY = detail.deltaX = detail.deltaY = 0;
    detail.event = ev;
    // Check if gesture can start
    if (canStart && canStart(detail) === false) {
      return false;
    }
    // Release fallback
    gesture.release();
    // Start gesture
    if (!gesture.start()) {
      return false;
    }
    hasStartedPan = true;
    if (threshold === 0) {
      return tryToCapturePan();
    }
    pan.start(detail.startX, detail.startY);
    return true;
  };
  const pointerMove = ev => {
    // fast path, if gesture is currently captured
    // do minimum job to get user-land even dispatched
    if (hasCapturedPan) {
      if (!isMoveQueued && hasFiredStart) {
        isMoveQueued = true;
        calcGestureData(detail, ev);
        requestAnimationFrame(fireOnMove);
      }
      return;
    }
    // gesture is currently being detected
    calcGestureData(detail, ev);
    if (pan.detect(detail.currentX, detail.currentY)) {
      if (!pan.isGesture() || !tryToCapturePan()) {
        abortGesture();
      }
    }
  };
  const fireOnMove = () => {
    // Since fireOnMove is called inside a RAF, onEnd() might be called,
    // we must double check hasCapturedPan
    if (!hasCapturedPan) {
      return;
    }
    isMoveQueued = false;
    if (onMove) {
      onMove(detail);
    }
  };
  const tryToCapturePan = () => {
    if (!gesture.capture()) {
      return false;
    }
    hasCapturedPan = true;
    hasFiredStart = false;
    // reset start position since the real user-land event starts here
    // If the pan detector threshold is big, not resetting the start position
    // will cause a jump in the animation equal to the detector threshold.
    // the array of positions used to calculate the gesture velocity does not
    // need to be cleaned, more points in the positions array always results in a
    // more accurate value of the velocity.
    detail.startX = detail.currentX;
    detail.startY = detail.currentY;
    detail.startTime = detail.currentTime;
    if (onWillStart) {
      onWillStart(detail).then(fireOnStart);
    } else {
      fireOnStart();
    }
    return true;
  };
  const blurActiveElement = () => {
    if (typeof document !== 'undefined') {
      const activeElement = document.activeElement;
      if (activeElement === null || activeElement === void 0 ? void 0 : activeElement.blur) {
        activeElement.blur();
      }
    }
  };
  const fireOnStart = () => {
    if (blurOnStart) {
      blurActiveElement();
    }
    if (onStart) {
      onStart(detail);
    }
    hasFiredStart = true;
  };
  const reset = () => {
    hasCapturedPan = false;
    hasStartedPan = false;
    isMoveQueued = false;
    hasFiredStart = true;
    gesture.release();
  };
  // END *************************
  const pointerUp = ev => {
    const tmpHasCaptured = hasCapturedPan;
    const tmpHasFiredStart = hasFiredStart;
    reset();
    if (!tmpHasFiredStart) {
      return;
    }
    calcGestureData(detail, ev);
    // Try to capture press
    if (tmpHasCaptured) {
      if (onEnd) {
        onEnd(detail);
      }
      return;
    }
    // Not captured any event
    if (notCaptured) {
      notCaptured(detail);
    }
  };
  const pointerEvents = createPointerEvents(finalConfig.el, pointerDown, pointerMove, pointerUp, {
    passive
  });
  const abortGesture = () => {
    reset();
    pointerEvents.stop();
    if (notCaptured) {
      notCaptured(detail);
    }
  };
  return {
    enable(enable = true) {
      if (!enable) {
        if (hasCapturedPan) {
          pointerUp(undefined);
        }
        reset();
      }
      pointerEvents.enable(enable);
    },
    destroy() {
      gesture.destroy();
      pointerEvents.destroy();
    }
  };
};
const calcGestureData = (detail, ev) => {
  if (!ev) {
    return;
  }
  const prevX = detail.currentX;
  const prevY = detail.currentY;
  const prevT = detail.currentTime;
  updateDetail(ev, detail);
  const currentX = detail.currentX;
  const currentY = detail.currentY;
  const timestamp = detail.currentTime = now(ev);
  const timeDelta = timestamp - prevT;
  if (timeDelta > 0 && timeDelta < 100) {
    const velocityX = (currentX - prevX) / timeDelta;
    const velocityY = (currentY - prevY) / timeDelta;
    detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
    detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
  }
  detail.deltaX = currentX - detail.startX;
  detail.deltaY = currentY - detail.startY;
  detail.event = ev;
};
const updateDetail = (ev, detail) => {
  // get X coordinates for either a mouse click
  // or a touch depending on the given event
  let x = 0;
  let y = 0;
  if (ev) {
    const changedTouches = ev.changedTouches;
    if (changedTouches && changedTouches.length > 0) {
      const touch = changedTouches[0];
      x = touch.clientX;
      y = touch.clientY;
    } else if (ev.pageX !== undefined) {
      x = ev.pageX;
      y = ev.pageY;
    }
  }
  detail.currentX = x;
  detail.currentY = y;
};
const now = ev => {
  return ev.timeStamp || Date.now();
};


/***/ },

/***/ 21667
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-IGIE5vDm.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ Build),
/* harmony export */   F: () => (/* binding */ Fragment),
/* harmony export */   H: () => (/* binding */ H),
/* harmony export */   L: () => (/* binding */ LogLevel),
/* harmony export */   a: () => (/* binding */ readTask),
/* harmony export */   b: () => (/* binding */ bootstrapLazy),
/* harmony export */   c: () => (/* binding */ createEvent),
/* harmony export */   d: () => (/* binding */ Host),
/* harmony export */   e: () => (/* binding */ config),
/* harmony export */   f: () => (/* binding */ printIonWarning),
/* harmony export */   g: () => (/* binding */ getElement),
/* harmony export */   h: () => (/* binding */ h),
/* harmony export */   i: () => (/* binding */ forceUpdate),
/* harmony export */   j: () => (/* binding */ printIonError),
/* harmony export */   k: () => (/* binding */ getAssetPath),
/* harmony export */   l: () => (/* binding */ configFromSession),
/* harmony export */   m: () => (/* binding */ configFromURL),
/* harmony export */   n: () => (/* binding */ saveConfig),
/* harmony export */   o: () => (/* binding */ getMode),
/* harmony export */   p: () => (/* binding */ promiseResolve),
/* harmony export */   q: () => (/* binding */ setMode),
/* harmony export */   r: () => (/* binding */ registerInstance),
/* harmony export */   s: () => (/* binding */ setNonce),
/* harmony export */   t: () => (/* binding */ printRequiredElementError),
/* harmony export */   w: () => (/* binding */ writeTask)
/* harmony export */ });
/* harmony import */ var _var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const NAMESPACE = 'ionic';
const BUILD = /* ionic */{
  hotModuleReplacement: false,
  hydratedSelectorName: "hydrated",
  lazyLoad: true,
  propChangeCallback: true,
  shadowDom: true,
  slotRelocation: true,
  state: true,
  updatable: true
};

// TODO(FW-2832): types
class Config {
  constructor() {
    this.m = new Map();
  }
  reset(configObj) {
    this.m = new Map(Object.entries(configObj));
  }
  get(key, fallback) {
    const value = this.m.get(key);
    return value !== undefined ? value : fallback;
  }
  getBoolean(key, fallback = false) {
    const val = this.m.get(key);
    if (val === undefined) {
      return fallback;
    }
    if (typeof val === 'string') {
      return val === 'true';
    }
    return !!val;
  }
  getNumber(key, fallback) {
    const val = parseFloat(this.m.get(key));
    return isNaN(val) ? fallback !== undefined ? fallback : NaN : val;
  }
  set(key, value) {
    this.m.set(key, value);
  }
}
const config = /*@__PURE__*/new Config();
const configFromSession = win => {
  try {
    const configStr = win.sessionStorage.getItem(IONIC_SESSION_KEY);
    return configStr !== null ? JSON.parse(configStr) : {};
  } catch (e) {
    return {};
  }
};
const saveConfig = (win, c) => {
  try {
    win.sessionStorage.setItem(IONIC_SESSION_KEY, JSON.stringify(c));
  } catch (e) {
    return;
  }
};
const configFromURL = win => {
  const configObj = {};
  win.location.search.slice(1).split('&').map(entry => entry.split('=')).map(([key, value]) => {
    try {
      return [decodeURIComponent(key), decodeURIComponent(value)];
    } catch (e) {
      return ['', ''];
    }
  }).filter(([key]) => startsWith(key, IONIC_PREFIX)).map(([key, value]) => [key.slice(IONIC_PREFIX.length), value]).forEach(([key, value]) => {
    configObj[key] = value;
  });
  return configObj;
};
const startsWith = (input, search) => {
  return input.substr(0, search.length) === search;
};
const IONIC_PREFIX = 'ionic:';
const IONIC_SESSION_KEY = 'ionic-persist-config';
var LogLevel;
(function (LogLevel) {
  LogLevel["OFF"] = "OFF";
  LogLevel["ERROR"] = "ERROR";
  LogLevel["WARN"] = "WARN";
})(LogLevel || (LogLevel = {}));
/**
 * Logs a warning to the console with an Ionic prefix
 * to indicate the library that is warning the developer.
 *
 * @param message - The string message to be logged to the console.
 */
const printIonWarning = (message, ...params) => {
  const logLevel = config.get('logLevel', LogLevel.WARN);
  if ([LogLevel.WARN].includes(logLevel)) {
    return console.warn(`[Ionic Warning]: ${message}`, ...params);
  }
};
/**
 * Logs an error to the console with an Ionic prefix
 * to indicate the library that is warning the developer.
 *
 * @param message - The string message to be logged to the console.
 * @param params - Additional arguments to supply to the console.error.
 */
const printIonError = (message, ...params) => {
  const logLevel = config.get('logLevel', LogLevel.ERROR);
  if ([LogLevel.ERROR, LogLevel.WARN].includes(logLevel)) {
    return console.error(`[Ionic Error]: ${message}`, ...params);
  }
};
/**
 * Prints an error informing developers that an implementation requires an element to be used
 * within a specific selector.
 *
 * @param el The web component element this is requiring the element.
 * @param targetSelectors The selector or selectors that were not found.
 */
const printRequiredElementError = (el, ...targetSelectors) => {
  return console.error(`<${el.tagName.toLowerCase()}> must be used inside ${targetSelectors.join(' or ')}.`);
};

/*
 Stencil Client Platform v4.43.0 | MIT Licensed | https://stenciljs.com
 */

var Build = {
  isBrowser: true
};

// src/utils/constants.ts
var SVG_NS = "http://www.w3.org/2000/svg";
var HTML_NS = "http://www.w3.org/1999/xhtml";
var PrimitiveType = /* @__PURE__ */(PrimitiveType2 => {
  PrimitiveType2["Undefined"] = "undefined";
  PrimitiveType2["Null"] = "null";
  PrimitiveType2["String"] = "string";
  PrimitiveType2["Number"] = "number";
  PrimitiveType2["SpecialNumber"] = "number";
  PrimitiveType2["Boolean"] = "boolean";
  PrimitiveType2["BigInt"] = "bigint";
  return PrimitiveType2;
})(PrimitiveType || {});
var NonPrimitiveType = /* @__PURE__ */(NonPrimitiveType2 => {
  NonPrimitiveType2["Array"] = "array";
  NonPrimitiveType2["Date"] = "date";
  NonPrimitiveType2["Map"] = "map";
  NonPrimitiveType2["Object"] = "object";
  NonPrimitiveType2["RegularExpression"] = "regexp";
  NonPrimitiveType2["Set"] = "set";
  NonPrimitiveType2["Channel"] = "channel";
  NonPrimitiveType2["Symbol"] = "symbol";
  return NonPrimitiveType2;
})(NonPrimitiveType || {});
var TYPE_CONSTANT = "type";
var VALUE_CONSTANT = "value";
var SERIALIZED_PREFIX = "serialized:";
var reWireGetterSetter = (instance, hostRef) => {
  var _a;
  const cmpMeta = hostRef.$cmpMeta$;
  const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
  members.map(([memberName, [memberFlags]]) => {
    if (memberFlags & 31 /* Prop */ || memberFlags & 32 /* State */) {
      const ogValue = instance[memberName];
      const ogDescriptor = getPropertyDescriptor(Object.getPrototypeOf(instance), memberName) || Object.getOwnPropertyDescriptor(instance, memberName);
      if (ogDescriptor) {
        Object.defineProperty(instance, memberName, {
          get() {
            return ogDescriptor.get.call(this);
          },
          set(newValue) {
            ogDescriptor.set.call(this, newValue);
          },
          configurable: true,
          enumerable: true
        });
      }
      instance[memberName] = hostRef.$instanceValues$.has(memberName) ? hostRef.$instanceValues$.get(memberName) : ogValue;
    }
  });
};
function getPropertyDescriptor(obj, memberName) {
  while (obj) {
    const desc = Object.getOwnPropertyDescriptor(obj, memberName);
    if (desc == null ? void 0 : desc.get) return desc;
    obj = Object.getPrototypeOf(obj);
  }
  return void 0;
}

// src/client/client-host-ref.ts
var getHostRef = ref => {
  if (ref.__stencil__getHostRef) {
    return ref.__stencil__getHostRef();
  }
  return void 0;
};
var registerInstance = (lazyInstance, hostRef) => {
  if (!hostRef) return;
  lazyInstance.__stencil__getHostRef = () => hostRef;
  hostRef.$lazyInstance$ = lazyInstance;
  if (hostRef.$cmpMeta$.$flags$ & 512 /* hasModernPropertyDecls */ && BUILD.state) {
    reWireGetterSetter(lazyInstance, hostRef);
  }
};
var registerHost = (hostElement, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: hostElement,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */new Map(),
    $serializerValues$: /* @__PURE__ */new Map()
  };
  {
    hostRef.$onInstancePromise$ = new Promise(r => hostRef.$onInstanceResolve$ = r);
  }
  {
    hostRef.$onReadyPromise$ = new Promise(r => hostRef.$onReadyResolve$ = r);
    hostElement["s-p"] = [];
    hostElement["s-rc"] = [];
  }
  {
    hostRef.$fetchedCbList$ = [];
  }
  const ref = hostRef;
  hostElement.__stencil__getHostRef = () => ref;
  return ref;
};
var isMemberInElement = (elm, memberName) => memberName in elm;
var consoleError = (e, el) => (0, console.error)(e, el);

// src/client/client-load-module.ts
var cmpModules = /* @__PURE__ */new Map();
var loadModule = (cmpMeta, hostRef, hmrVersionId) => {
  const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
  const bundleId = cmpMeta.$lazyBundleId$;
  if (!bundleId) {
    return void 0;
  }
  const module = cmpModules.get(bundleId);
  if (module) {
    return module[exportName];
  }
  /*!__STENCIL_STATIC_IMPORT_SWITCH__*/
  return __webpack_require__(86120)(`./${bundleId}.entry.js`).then(importedModule => {
    {
      cmpModules.set(bundleId, importedModule);
    }
    return importedModule[exportName];
  }, e => {
    consoleError(e, hostRef.$hostElement$);
  });
};

// src/client/client-style.ts
var styles = /* @__PURE__ */new Map();
var modeResolutionChain = [];

// src/runtime/runtime-constants.ts
var CONTENT_REF_ID = "r";
var ORG_LOCATION_ID = "o";
var SLOT_NODE_ID = "s";
var TEXT_NODE_ID = "t";
var COMMENT_NODE_ID = "c";
var HYDRATE_ID = "s-id";
var HYDRATED_STYLE_ID = "sty-id";
var HYDRATE_CHILD_ID = "c-id";
var HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
var SLOT_FB_CSS = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
var XLINK_NS = "http://www.w3.org/1999/xlink";
var win = typeof window !== "undefined" ? window : {};
var H = win.HTMLElement || class {};
var plt = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: h2 => h2(),
  raf: h2 => requestAnimationFrame(h2),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};
var supportsShadow = BUILD.shadowDom;
var supportsListenerOptions = /* @__PURE__ */(() => {
  var _a;
  let supportsListenerOptions2 = false;
  try {
    (_a = win.document) == null ? void 0 : _a.addEventListener("e", null, Object.defineProperty({}, "passive", {
      get() {
        supportsListenerOptions2 = true;
      }
    }));
  } catch (e) {}
  return supportsListenerOptions2;
})();
var promiseResolve = v => Promise.resolve(v);
var supportsConstructableStylesheets = /* @__PURE__ */(() => {
  try {
    if (!win.document.adoptedStyleSheets) {
      return false;
    }
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {}
  return false;
})();
var supportsMutableAdoptedStyleSheets = supportsConstructableStylesheets ? /* @__PURE__ */(() => !!win.document && Object.getOwnPropertyDescriptor(win.document.adoptedStyleSheets, "length").writable)() : false;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueTask = (queue, write) => cb => {
  queue.push(cb);
  if (!queuePending) {
    queuePending = true;
    if (write && plt.$flags$ & 4 /* queueSync */) {
      nextTick(flush);
    } else {
      plt.raf(flush);
    }
  }
};
var consume = queue => {
  for (let i2 = 0; i2 < queue.length; i2++) {
    try {
      queue[i2](performance.now());
    } catch (e) {
      consoleError(e);
    }
  }
  queue.length = 0;
};
var flush = () => {
  consume(queueDomReads);
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
var nextTick = cb => promiseResolve().then(cb);
var readTask = /* @__PURE__ */queueTask(queueDomReads, false);
var writeTask = /* @__PURE__ */queueTask(queueDomWrites, true);

// src/runtime/asset-path.ts
var getAssetPath = path => {
  const assetUrl = new URL(path, plt.$resourcesUrl$);
  return assetUrl.origin !== win.location.origin ? assetUrl.href : assetUrl.pathname;
};

// src/utils/style.ts
function createStyleSheetIfNeededAndSupported(styles2) {
  return void 0;
}

// src/utils/shadow-root.ts
var globalStyleSheet;
function createShadowRoot(cmpMeta) {
  var _a;
  const opts = {
    mode: "open"
  };
  {
    opts.delegatesFocus = !!(cmpMeta.$flags$ & 16 /* shadowDelegatesFocus */);
  }
  const shadowRoot = this.attachShadow(opts);
  if (globalStyleSheet === void 0) globalStyleSheet = (_a = createStyleSheetIfNeededAndSupported()) != null ? _a : null;
  if (globalStyleSheet) {
    if (supportsMutableAdoptedStyleSheets) {
      shadowRoot.adoptedStyleSheets.push(globalStyleSheet);
    } else {
      shadowRoot.adoptedStyleSheets = [...shadowRoot.adoptedStyleSheets, globalStyleSheet];
    }
  }
}
var updateFallbackSlotVisibility = elm => {
  const childNodes = internalCall(elm, "childNodes");
  if (elm.tagName && elm.tagName.includes("-") && elm["s-cr"] && elm.tagName !== "SLOT-FB") {
    getHostSlotNodes(childNodes, elm.tagName).forEach(slotNode => {
      if (slotNode.nodeType === 1 /* ElementNode */ && slotNode.tagName === "SLOT-FB") {
        if (getSlotChildSiblings(slotNode, getSlotName(slotNode), false).length) {
          slotNode.hidden = true;
        } else {
          slotNode.hidden = false;
        }
      }
    });
  }
  let i2 = 0;
  for (i2 = 0; i2 < childNodes.length; i2++) {
    const childNode = childNodes[i2];
    if (childNode.nodeType === 1 /* ElementNode */ && internalCall(childNode, "childNodes").length) {
      updateFallbackSlotVisibility(childNode);
    }
  }
};
var getSlottedChildNodes = childNodes => {
  const result = [];
  for (let i2 = 0; i2 < childNodes.length; i2++) {
    const slottedNode = childNodes[i2]["s-nr"] || void 0;
    if (slottedNode && slottedNode.isConnected) {
      result.push(slottedNode);
    }
  }
  return result;
};
function getHostSlotNodes(childNodes, hostName, slotName) {
  let i2 = 0;
  let slottedNodes = [];
  let childNode;
  for (; i2 < childNodes.length; i2++) {
    childNode = childNodes[i2];
    if (childNode["s-sr"] && (!hostName || childNode["s-hn"] === hostName) && (slotName === void 0 || getSlotName(childNode) === slotName)) {
      slottedNodes.push(childNode);
      if (typeof slotName !== "undefined") return slottedNodes;
    }
    slottedNodes = [...slottedNodes, ...getHostSlotNodes(childNode.childNodes, hostName, slotName)];
  }
  return slottedNodes;
}
var getSlotChildSiblings = (slot, slotName, includeSlot = true) => {
  const childNodes = [];
  if (includeSlot && slot["s-sr"] || !slot["s-sr"]) childNodes.push(slot);
  let node = slot;
  while (node = node.nextSibling) {
    if (getSlotName(node) === slotName && (includeSlot || !node["s-sr"])) childNodes.push(node);
  }
  return childNodes;
};
var isNodeLocatedInSlot = (nodeToRelocate, slotName) => {
  if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
    if (nodeToRelocate.getAttribute("slot") === null && slotName === "") {
      return true;
    }
    if (nodeToRelocate.getAttribute("slot") === slotName) {
      return true;
    }
    return false;
  }
  if (nodeToRelocate["s-sn"] === slotName) {
    return true;
  }
  return slotName === "";
};
var addSlotRelocateNode = (newChild, slotNode, prepend, position) => {
  if (newChild["s-ol"] && newChild["s-ol"].isConnected) {
    return;
  }
  const slottedNodeLocation = document.createTextNode("");
  slottedNodeLocation["s-nr"] = newChild;
  if (!slotNode["s-cr"] || !slotNode["s-cr"].parentNode) return;
  const parent = slotNode["s-cr"].parentNode;
  const appendMethod = prepend ? internalCall(parent, "prepend") : internalCall(parent, "appendChild");
  if (typeof position !== "undefined") {
    slottedNodeLocation["s-oo"] = position;
    const childNodes = internalCall(parent, "childNodes");
    const slotRelocateNodes = [slottedNodeLocation];
    childNodes.forEach(n => {
      if (n["s-nr"]) slotRelocateNodes.push(n);
    });
    slotRelocateNodes.sort((a, b) => {
      if (!a["s-oo"] || a["s-oo"] < (b["s-oo"] || 0)) return -1;else if (!b["s-oo"] || b["s-oo"] < a["s-oo"]) return 1;
      return 0;
    });
    slotRelocateNodes.forEach(n => appendMethod.call(parent, n));
  } else {
    appendMethod.call(parent, slottedNodeLocation);
  }
  newChild["s-ol"] = slottedNodeLocation;
  newChild["s-sh"] = slotNode["s-hn"];
};
var getSlotName = node => typeof node["s-sn"] === "string" ? node["s-sn"] : node.nodeType === 1 && node.getAttribute("slot") || void 0;
function patchSlotNode(node) {
  if (node.assignedElements || node.assignedNodes || !node["s-sr"]) return;
  const assignedFactory = elementsOnly => function (opts) {
    const toReturn = [];
    const slotName = this["s-sn"];
    if (opts == null ? void 0 : opts.flatten) {
      console.error(`
          Flattening is not supported for Stencil non-shadow slots.
          You can use \`.childNodes\` to nested slot fallback content.
          If you have a particular use case, please open an issue on the Stencil repo.
        `);
    }
    const parent = this["s-cr"].parentElement;
    const slottedNodes = parent.__childNodes ? parent.childNodes : getSlottedChildNodes(parent.childNodes);
    slottedNodes.forEach(n => {
      if (slotName === getSlotName(n)) {
        toReturn.push(n);
      }
    });
    if (elementsOnly) {
      return toReturn.filter(n => n.nodeType === 1 /* ElementNode */);
    }
    return toReturn;
  }.bind(node);
  node.assignedElements = assignedFactory(true);
  node.assignedNodes = assignedFactory(false);
}
function dispatchSlotChangeEvent(elm) {
  elm.dispatchEvent(new CustomEvent("slotchange", {
    bubbles: false,
    cancelable: false,
    composed: false
  }));
}
function findSlotFromSlottedNode(slottedNode, parentHost) {
  var _a;
  parentHost = parentHost || ((_a = slottedNode["s-ol"]) == null ? void 0 : _a.parentElement);
  if (!parentHost) return {
    slotNode: null,
    slotName: ""
  };
  const slotName = slottedNode["s-sn"] = getSlotName(slottedNode) || "";
  const childNodes = internalCall(parentHost, "childNodes");
  const slotNode = getHostSlotNodes(childNodes, parentHost.tagName, slotName)[0];
  return {
    slotNode,
    slotName
  };
}

// src/runtime/dom-extras.ts
var patchPseudoShadowDom = hostElementPrototype => {
  patchCloneNode(hostElementPrototype);
  patchSlotAppendChild(hostElementPrototype);
  patchSlotAppend(hostElementPrototype);
  patchSlotPrepend(hostElementPrototype);
  patchSlotInsertAdjacentElement(hostElementPrototype);
  patchSlotInsertAdjacentHTML(hostElementPrototype);
  patchSlotInsertAdjacentText(hostElementPrototype);
  patchInsertBefore(hostElementPrototype);
  patchTextContent(hostElementPrototype);
  patchChildSlotNodes(hostElementPrototype);
  patchSlotRemoveChild(hostElementPrototype);
};
var patchCloneNode = HostElementPrototype => {
  if (HostElementPrototype.__cloneNode) return;
  const orgCloneNode = HostElementPrototype.__cloneNode = HostElementPrototype.cloneNode;
  HostElementPrototype.cloneNode = function (deep) {
    const srcNode = this;
    const isShadowDom = srcNode.shadowRoot && supportsShadow;
    const clonedNode = orgCloneNode.call(srcNode, isShadowDom ? deep : false);
    if (!isShadowDom && deep) {
      let i2 = 0;
      let slotted, nonStencilNode;
      const stencilPrivates = ["s-id", "s-cr", "s-lr", "s-rc", "s-sc", "s-p", "s-cn", "s-sr", "s-sn", "s-hn", "s-ol", "s-nr", "s-si", "s-rf", "s-scs"];
      const childNodes = this.__childNodes || this.childNodes;
      for (; i2 < childNodes.length; i2++) {
        slotted = childNodes[i2]["s-nr"];
        nonStencilNode = stencilPrivates.every(privateField => !childNodes[i2][privateField]);
        if (slotted) {
          if (clonedNode.__appendChild) {
            clonedNode.__appendChild(slotted.cloneNode(true));
          } else {
            clonedNode.appendChild(slotted.cloneNode(true));
          }
        }
        if (nonStencilNode) {
          clonedNode.appendChild(childNodes[i2].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};
var patchSlotAppendChild = HostElementPrototype => {
  if (HostElementPrototype.__appendChild) return;
  HostElementPrototype.__appendChild = HostElementPrototype.appendChild;
  HostElementPrototype.appendChild = function (newChild) {
    const {
      slotName,
      slotNode
    } = findSlotFromSlottedNode(newChild, this);
    if (slotNode) {
      addSlotRelocateNode(newChild, slotNode);
      const slotChildNodes = getSlotChildSiblings(slotNode, slotName);
      const appendAfter = slotChildNodes[slotChildNodes.length - 1];
      const parent = internalCall(appendAfter, "parentNode");
      const insertedNode = internalCall(parent, "insertBefore")(newChild, appendAfter.nextSibling);
      dispatchSlotChangeEvent(slotNode);
      updateFallbackSlotVisibility(this);
      return insertedNode;
    }
    return this.__appendChild(newChild);
  };
};
var patchSlotRemoveChild = ElementPrototype => {
  if (ElementPrototype.__removeChild) return;
  ElementPrototype.__removeChild = ElementPrototype.removeChild;
  ElementPrototype.removeChild = function (toRemove) {
    if (toRemove && typeof toRemove["s-sn"] !== "undefined") {
      const childNodes = this.__childNodes || this.childNodes;
      const slotNode = getHostSlotNodes(childNodes, this.tagName, toRemove["s-sn"]);
      if (slotNode && toRemove.isConnected) {
        toRemove.remove();
        updateFallbackSlotVisibility(this);
        return;
      }
    }
    return this.__removeChild(toRemove);
  };
};
var patchSlotPrepend = HostElementPrototype => {
  if (HostElementPrototype.__prepend) return;
  HostElementPrototype.__prepend = HostElementPrototype.prepend;
  HostElementPrototype.prepend = function (...newChildren) {
    newChildren.forEach(newChild => {
      if (typeof newChild === "string") {
        newChild = this.ownerDocument.createTextNode(newChild);
      }
      const slotName = (newChild["s-sn"] = getSlotName(newChild)) || "";
      const childNodes = internalCall(this, "childNodes");
      const slotNode = getHostSlotNodes(childNodes, this.tagName, slotName)[0];
      if (slotNode) {
        addSlotRelocateNode(newChild, slotNode, true);
        const slotChildNodes = getSlotChildSiblings(slotNode, slotName);
        const appendAfter = slotChildNodes[0];
        const parent = internalCall(appendAfter, "parentNode");
        const toReturn = internalCall(parent, "insertBefore")(newChild, internalCall(appendAfter, "nextSibling"));
        dispatchSlotChangeEvent(slotNode);
        return toReturn;
      }
      if (newChild.nodeType === 1 && !!newChild.getAttribute("slot")) {
        newChild.hidden = true;
      }
      return HostElementPrototype.__prepend(newChild);
    });
  };
};
var patchSlotAppend = HostElementPrototype => {
  if (HostElementPrototype.__append) return;
  HostElementPrototype.__append = HostElementPrototype.append;
  HostElementPrototype.append = function (...newChildren) {
    newChildren.forEach(newChild => {
      if (typeof newChild === "string") {
        newChild = this.ownerDocument.createTextNode(newChild);
      }
      this.appendChild(newChild);
    });
  };
};
var patchSlotInsertAdjacentHTML = HostElementPrototype => {
  if (HostElementPrototype.__insertAdjacentHTML) return;
  const originalInsertAdjacentHtml = HostElementPrototype.insertAdjacentHTML;
  HostElementPrototype.insertAdjacentHTML = function (position, text) {
    if (position !== "afterbegin" && position !== "beforeend") {
      return originalInsertAdjacentHtml.call(this, position, text);
    }
    const container = this.ownerDocument.createElement("_");
    let node;
    container.innerHTML = text;
    if (position === "afterbegin") {
      while (node = container.firstChild) {
        this.prepend(node);
      }
    } else if (position === "beforeend") {
      while (node = container.firstChild) {
        this.append(node);
      }
    }
  };
};
var patchSlotInsertAdjacentText = HostElementPrototype => {
  HostElementPrototype.insertAdjacentText = function (position, text) {
    this.insertAdjacentHTML(position, text);
  };
};
var patchInsertBefore = HostElementPrototype => {
  if (HostElementPrototype.__insertBefore) return;
  const eleProto = HostElementPrototype;
  if (eleProto.__insertBefore) return;
  eleProto.__insertBefore = HostElementPrototype.insertBefore;
  HostElementPrototype.insertBefore = function (newChild, currentChild) {
    const {
      slotName,
      slotNode
    } = findSlotFromSlottedNode(newChild, this);
    const slottedNodes = this.__childNodes ? this.childNodes : getSlottedChildNodes(this.childNodes);
    if (slotNode) {
      let found = false;
      slottedNodes.forEach(childNode => {
        if (childNode === currentChild || currentChild === null) {
          found = true;
          if (currentChild === null || slotName !== currentChild["s-sn"]) {
            this.appendChild(newChild);
            return;
          }
          if (slotName === currentChild["s-sn"]) {
            addSlotRelocateNode(newChild, slotNode);
            const parent = internalCall(currentChild, "parentNode");
            internalCall(parent, "insertBefore")(newChild, currentChild);
            dispatchSlotChangeEvent(slotNode);
          }
          return;
        }
      });
      if (found) return newChild;
    }
    const parentNode = currentChild == null ? void 0 : currentChild.__parentNode;
    if (parentNode && !this.isSameNode(parentNode)) {
      return this.appendChild(newChild);
    }
    return this.__insertBefore(newChild, currentChild);
  };
};
var patchSlotInsertAdjacentElement = HostElementPrototype => {
  if (HostElementPrototype.__insertAdjacentElement) return;
  const originalInsertAdjacentElement = HostElementPrototype.insertAdjacentElement;
  HostElementPrototype.insertAdjacentElement = function (position, element) {
    if (position !== "afterbegin" && position !== "beforeend") {
      return originalInsertAdjacentElement.call(this, position, element);
    }
    if (position === "afterbegin") {
      this.prepend(element);
      return element;
    } else if (position === "beforeend") {
      this.append(element);
      return element;
    }
    return element;
  };
};
var patchTextContent = hostElementPrototype => {
  patchHostOriginalAccessor("textContent", hostElementPrototype);
  Object.defineProperty(hostElementPrototype, "textContent", {
    get: function () {
      let text = "";
      const childNodes = this.__childNodes ? this.childNodes : getSlottedChildNodes(this.childNodes);
      childNodes.forEach(node => text += node.textContent || "");
      return text;
    },
    set: function (value) {
      const childNodes = this.__childNodes ? this.childNodes : getSlottedChildNodes(this.childNodes);
      childNodes.forEach(node => {
        if (node["s-ol"]) node["s-ol"].remove();
        node.remove();
      });
      this.insertAdjacentHTML("beforeend", value);
    }
  });
};
var patchChildSlotNodes = elm => {
  class FakeNodeList extends Array {
    item(n) {
      return this[n];
    }
  }
  patchHostOriginalAccessor("children", elm);
  Object.defineProperty(elm, "children", {
    get() {
      return this.childNodes.filter(n => n.nodeType === 1);
    }
  });
  Object.defineProperty(elm, "childElementCount", {
    get() {
      return this.children.length;
    }
  });
  patchHostOriginalAccessor("firstChild", elm);
  Object.defineProperty(elm, "firstChild", {
    get() {
      return this.childNodes[0];
    }
  });
  patchHostOriginalAccessor("lastChild", elm);
  Object.defineProperty(elm, "lastChild", {
    get() {
      return this.childNodes[this.childNodes.length - 1];
    }
  });
  patchHostOriginalAccessor("childNodes", elm);
  Object.defineProperty(elm, "childNodes", {
    get() {
      const result = new FakeNodeList();
      result.push(...getSlottedChildNodes(this.__childNodes));
      return result;
    }
  });
};
var patchSlottedNode = node => {
  if (!node || node.__nextSibling !== void 0 || !globalThis.Node) return;
  patchNextSibling(node);
  patchPreviousSibling(node);
  patchParentNode(node);
  if (node.nodeType === Node.ELEMENT_NODE) {
    patchNextElementSibling(node);
    patchPreviousElementSibling(node);
  }
};
var patchNextSibling = node => {
  if (!node || node.__nextSibling) return;
  patchHostOriginalAccessor("nextSibling", node);
  Object.defineProperty(node, "nextSibling", {
    get: function () {
      var _a;
      const parentNodes = (_a = this["s-ol"]) == null ? void 0 : _a.parentNode.childNodes;
      const index = parentNodes == null ? void 0 : parentNodes.indexOf(this);
      if (parentNodes && index > -1) {
        return parentNodes[index + 1];
      }
      return this.__nextSibling;
    }
  });
};
var patchNextElementSibling = element => {
  if (!element || element.__nextElementSibling) return;
  patchHostOriginalAccessor("nextElementSibling", element);
  Object.defineProperty(element, "nextElementSibling", {
    get: function () {
      var _a;
      const parentEles = (_a = this["s-ol"]) == null ? void 0 : _a.parentNode.children;
      const index = parentEles == null ? void 0 : parentEles.indexOf(this);
      if (parentEles && index > -1) {
        return parentEles[index + 1];
      }
      return this.__nextElementSibling;
    }
  });
};
var patchPreviousSibling = node => {
  if (!node || node.__previousSibling) return;
  patchHostOriginalAccessor("previousSibling", node);
  Object.defineProperty(node, "previousSibling", {
    get: function () {
      var _a;
      const parentNodes = (_a = this["s-ol"]) == null ? void 0 : _a.parentNode.childNodes;
      const index = parentNodes == null ? void 0 : parentNodes.indexOf(this);
      if (parentNodes && index > -1) {
        return parentNodes[index - 1];
      }
      return this.__previousSibling;
    }
  });
};
var patchPreviousElementSibling = element => {
  if (!element || element.__previousElementSibling) return;
  patchHostOriginalAccessor("previousElementSibling", element);
  Object.defineProperty(element, "previousElementSibling", {
    get: function () {
      var _a;
      const parentNodes = (_a = this["s-ol"]) == null ? void 0 : _a.parentNode.children;
      const index = parentNodes == null ? void 0 : parentNodes.indexOf(this);
      if (parentNodes && index > -1) {
        return parentNodes[index - 1];
      }
      return this.__previousElementSibling;
    }
  });
};
var patchParentNode = node => {
  if (!node || node.__parentNode) return;
  patchHostOriginalAccessor("parentNode", node);
  Object.defineProperty(node, "parentNode", {
    get: function () {
      var _a;
      return ((_a = this["s-ol"]) == null ? void 0 : _a.parentNode) || this.__parentNode;
    },
    set: function (value) {
      this.__parentNode = value;
    }
  });
};
var validElementPatches = ["children", "nextElementSibling", "previousElementSibling"];
var validNodesPatches = ["childNodes", "firstChild", "lastChild", "nextSibling", "previousSibling", "textContent", "parentNode"];
function patchHostOriginalAccessor(accessorName, node) {
  if (!globalThis.Node || !globalThis.Element) {
    return;
  }
  let accessor;
  if (validElementPatches.includes(accessorName)) {
    accessor = Object.getOwnPropertyDescriptor(Element.prototype, accessorName);
  } else if (validNodesPatches.includes(accessorName)) {
    accessor = Object.getOwnPropertyDescriptor(Node.prototype, accessorName);
  }
  if (!accessor) {
    accessor = Object.getOwnPropertyDescriptor(node, accessorName);
  }
  if (accessor) Object.defineProperty(node, "__" + accessorName, accessor);
}
function internalCall(node, method) {
  if ("__" + method in node) {
    const toReturn = node["__" + method];
    if (typeof toReturn !== "function") return toReturn;
    return toReturn.bind(node);
  } else {
    if (typeof node[method] !== "function") return node[method];
    return node[method].bind(node);
  }
}
var createTime = (fnName, tagName = "") => {
  {
    return () => {
      return;
    };
  }
};
var uniqueTime = (key, measureText) => {
  {
    return () => {
      return;
    };
  }
};

// src/utils/query-nonce-meta-tag-content.ts
function queryNonceMetaTagContent(doc) {
  var _a, _b, _c;
  return (_c = (_b = (_a = doc.head) == null ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : _b.getAttribute("content")) != null ? _c : void 0;
}

// src/runtime/styles.ts
var rootAppliedStyles = /* @__PURE__ */new WeakMap();
var registerStyle = (scopeId2, cssText, allowCS) => {
  let style = styles.get(scopeId2);
  if (supportsConstructableStylesheets && allowCS) {
    style = style || new CSSStyleSheet();
    if (typeof style === "string") {
      style = cssText;
    } else {
      style.replaceSync(cssText);
    }
  } else {
    style = cssText;
  }
  styles.set(scopeId2, style);
};
var addStyle = (styleContainerNode, cmpMeta, mode) => {
  var _a, _b, _c;
  const scopeId2 = getScopeId(cmpMeta, mode);
  const style = styles.get(scopeId2);
  if (!win.document) {
    return scopeId2;
  }
  styleContainerNode = styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : win.document;
  if (style) {
    if (typeof style === "string") {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      let styleElm;
      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = /* @__PURE__ */new Set());
      }
      const existingStyleElm = styleContainerNode.querySelector(`[${HYDRATED_STYLE_ID}="${scopeId2}"]`);
      if (existingStyleElm) {
        existingStyleElm.textContent = style;
      } else if (!appliedStyles.has(scopeId2)) {
        styleElm = win.document.createElement("style");
        styleElm.textContent = style;
        const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(win.document);
        if (nonce != null) {
          styleElm.setAttribute("nonce", nonce);
        }
        if (!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */)) {
          if (styleContainerNode.nodeName === "HEAD") {
            const preconnectLinks = styleContainerNode.querySelectorAll("link[rel=preconnect]");
            const referenceNode2 = preconnectLinks.length > 0 ? preconnectLinks[preconnectLinks.length - 1].nextSibling : styleContainerNode.querySelector("style");
            styleContainerNode.insertBefore(styleElm, (referenceNode2 == null ? void 0 : referenceNode2.parentNode) === styleContainerNode ? referenceNode2 : null);
          } else if ("host" in styleContainerNode) {
            if (supportsConstructableStylesheets) {
              const currentWindow = (_b = styleContainerNode.defaultView) != null ? _b : styleContainerNode.ownerDocument.defaultView;
              const stylesheet = new currentWindow.CSSStyleSheet();
              stylesheet.replaceSync(style);
              if (supportsMutableAdoptedStyleSheets) {
                styleContainerNode.adoptedStyleSheets.unshift(stylesheet);
              } else {
                styleContainerNode.adoptedStyleSheets = [stylesheet, ...styleContainerNode.adoptedStyleSheets];
              }
            } else {
              const existingStyleContainer = styleContainerNode.querySelector("style");
              if (existingStyleContainer) {
                existingStyleContainer.textContent = style + existingStyleContainer.textContent;
              } else {
                styleContainerNode.prepend(styleElm);
              }
            }
          } else {
            styleContainerNode.append(styleElm);
          }
        }
        if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
          styleContainerNode.insertBefore(styleElm, null);
        }
        if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
          styleElm.textContent += SLOT_FB_CSS;
        }
        if (appliedStyles) {
          appliedStyles.add(scopeId2);
        }
      }
    } else {
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = /* @__PURE__ */new Set());
      }
      if (!appliedStyles.has(scopeId2)) {
        const currentWindow = (_c = styleContainerNode.defaultView) != null ? _c : styleContainerNode.ownerDocument.defaultView;
        let stylesheet;
        if (style.constructor === currentWindow.CSSStyleSheet) {
          stylesheet = style;
        } else {
          stylesheet = new currentWindow.CSSStyleSheet();
          for (let i2 = 0; i2 < style.cssRules.length; i2++) {
            stylesheet.insertRule(style.cssRules[i2].cssText, i2);
          }
        }
        if (supportsMutableAdoptedStyleSheets) {
          styleContainerNode.adoptedStyleSheets.push(stylesheet);
        } else {
          styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, stylesheet];
        }
        appliedStyles.add(scopeId2);
        if ("host" in styleContainerNode) {
          const ssrStyleElm = styleContainerNode.querySelector(`[${HYDRATED_STYLE_ID}="${scopeId2}"]`);
          if (ssrStyleElm) {
            writeTask(() => ssrStyleElm.remove());
          }
        }
      }
    }
  }
  return scopeId2;
};
var attachStyles = hostRef => {
  const cmpMeta = hostRef.$cmpMeta$;
  const elm = hostRef.$hostElement$;
  const flags = cmpMeta.$flags$;
  const endAttachStyles = createTime("attachStyles", cmpMeta.$tagName$);
  const scopeId2 = addStyle(elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta, hostRef.$modeName$);
  if (flags & 10 /* needsScopedEncapsulation */) {
    elm["s-sc"] = scopeId2;
    elm.classList.add(scopeId2 + "-h");
  }
  endAttachStyles();
};
var getScopeId = (cmp, mode) => "sc-" + (mode && cmp.$flags$ & 32 /* hasMode */ ? cmp.$tagName$ + "-" + mode : cmp.$tagName$);
var convertScopedToShadow = css => css.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, "$1{");
var hydrateScopedToShadow = () => {
  if (!win.document) {
    return;
  }
  const styles2 = win.document.querySelectorAll(`[${HYDRATED_STYLE_ID}]`);
  let i2 = 0;
  for (; i2 < styles2.length; i2++) {
    registerStyle(styles2[i2].getAttribute(HYDRATED_STYLE_ID), convertScopedToShadow(styles2[i2].innerHTML), true);
  }
};

// src/utils/helpers.ts
var isDef = v => v != null && v !== void 0;
var isComplexType = o => {
  o = typeof o;
  return o === "object" || o === "function";
};

// src/runtime/vdom/h.ts
var h = (nodeName, vnodeData, ...children) => {
  if (typeof nodeName === "string") {
    nodeName = transformTag(nodeName);
  }
  let child = null;
  let key = null;
  let slotName = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = c => {
    for (let i2 = 0; i2 < c.length; i2++) {
      child = c[i2];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
          child = String(child);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    if (vnodeData.key) {
      key = vnodeData.key;
    }
    if (vnodeData.name) {
      slotName = vnodeData.name;
    }
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter(k => classData[k]).join(" ");
      }
    }
  }
  if (typeof nodeName === "function") {
    return nodeName(vnodeData === null ? {} : vnodeData, vNodeChildren, vdomFnUtils);
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  {
    vnode.$key$ = key;
  }
  {
    vnode.$name$ = slotName;
  }
  return vnode;
};
var newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    // Normalize undefined to null to prevent rendering "undefined" as text
    $text$: text != null ? text : null,
    $elm$: null,
    $children$: null
  };
  {
    vnode.$attrs$ = null;
  }
  {
    vnode.$key$ = null;
  }
  {
    vnode.$name$ = null;
  }
  return vnode;
};
var Host = {};
var isHost = node => node && node.$tag$ === Host;
var vdomFnUtils = {
  forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
  map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate)
};
var convertToPublic = node => ({
  vattrs: node.$attrs$,
  vchildren: node.$children$,
  vkey: node.$key$,
  vname: node.$name$,
  vtag: node.$tag$,
  vtext: node.$text$
});
var convertToPrivate = node => {
  if (typeof node.vtag === "function") {
    const vnodeData = {
      ...node.vattrs
    };
    if (node.vkey) {
      vnodeData.key = node.vkey;
    }
    if (node.vname) {
      vnodeData.name = node.vname;
    }
    return h(node.vtag, vnodeData, ...(node.vchildren || []));
  }
  const vnode = newVNode(node.vtag, node.vtext);
  vnode.$attrs$ = node.vattrs;
  vnode.$children$ = node.vchildren;
  vnode.$key$ = node.vkey;
  vnode.$name$ = node.vname;
  return vnode;
};

// src/runtime/client-hydrate.ts
var initializeClientHydrate = (hostElm, tagName, hostId, hostRef) => {
  var _a, _b, _c, _d;
  const endHydrate = createTime("hydrateClient", tagName);
  const shadowRoot = hostElm.shadowRoot;
  const childRenderNodes = [];
  const slotNodes = [];
  const slottedNodes = [];
  const shadowRootNodes = shadowRoot ? [] : null;
  const vnode = newVNode(tagName, null);
  vnode.$elm$ = hostElm;
  let scopeId2;
  {
    const cmpMeta = hostRef.$cmpMeta$;
    if (cmpMeta && cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */ && hostElm["s-sc"]) {
      scopeId2 = hostElm["s-sc"];
      hostElm.classList.add(scopeId2 + "-h");
    } else if (hostElm["s-sc"]) {
      delete hostElm["s-sc"];
    }
  }
  if (win.document && (!plt.$orgLocNodes$ || !plt.$orgLocNodes$.size)) {
    initializeDocumentHydrate(win.document.body, plt.$orgLocNodes$ = /* @__PURE__ */new Map());
  }
  hostElm[HYDRATE_ID] = hostId;
  hostElm.removeAttribute(HYDRATE_ID);
  hostRef.$vnode$ = clientHydrate(vnode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, hostElm, hostId, slottedNodes);
  let crIndex = 0;
  const crLength = childRenderNodes.length;
  let childRenderNode;
  for (crIndex; crIndex < crLength; crIndex++) {
    childRenderNode = childRenderNodes[crIndex];
    const orgLocationId = childRenderNode.$hostId$ + "." + childRenderNode.$nodeId$;
    const orgLocationNode = plt.$orgLocNodes$.get(orgLocationId);
    const node = childRenderNode.$elm$;
    if (!shadowRoot) {
      node["s-hn"] = transformTag(tagName).toUpperCase();
      if (childRenderNode.$tag$ === "slot") {
        node["s-cr"] = hostElm["s-cr"];
      }
    } else if (((_a = childRenderNode.$tag$) == null ? void 0 : _a.toString().includes("-")) && childRenderNode.$tag$ !== "slot-fb" && !childRenderNode.$elm$.shadowRoot) {
      const cmpMeta = getHostRef(childRenderNode.$elm$);
      if (cmpMeta) {
        const scopeId3 = getScopeId(cmpMeta.$cmpMeta$, childRenderNode.$elm$.getAttribute("s-mode"));
        const styleSheet = win.document.querySelector(`style[sty-id="${scopeId3}"]`);
        if (styleSheet) {
          shadowRootNodes.unshift(styleSheet.cloneNode(true));
        }
      }
    }
    if (childRenderNode.$tag$ === "slot") {
      childRenderNode.$name$ = childRenderNode.$elm$["s-sn"] || childRenderNode.$elm$["name"] || null;
      if (childRenderNode.$children$) {
        childRenderNode.$flags$ |= 2 /* isSlotFallback */;
        if (!childRenderNode.$elm$.childNodes.length) {
          childRenderNode.$children$.forEach(c => {
            childRenderNode.$elm$.appendChild(c.$elm$);
          });
        }
      } else {
        childRenderNode.$flags$ |= 1 /* isSlotReference */;
      }
    }
    if (orgLocationNode && orgLocationNode.isConnected) {
      if (orgLocationNode.parentElement.shadowRoot && orgLocationNode["s-en"] === "") {
        orgLocationNode.parentNode.insertBefore(node, orgLocationNode.nextSibling);
      }
      orgLocationNode.parentNode.removeChild(orgLocationNode);
      if (!shadowRoot) {
        node["s-oo"] = parseInt(childRenderNode.$nodeId$);
      }
    }
    if (orgLocationNode && !orgLocationNode["s-id"]) {
      plt.$orgLocNodes$.delete(orgLocationId);
    }
  }
  const hosts = [];
  const snLen = slottedNodes.length;
  let snIndex = 0;
  let slotGroup;
  let snGroupIdx;
  let snGroupLen;
  let slottedItem;
  let currentPos = 0;
  for (snIndex; snIndex < snLen; snIndex++) {
    slotGroup = slottedNodes[snIndex];
    if (!slotGroup || !slotGroup.length) continue;
    snGroupLen = slotGroup.length;
    snGroupIdx = 0;
    for (snGroupIdx; snGroupIdx < snGroupLen; snGroupIdx++) {
      slottedItem = slotGroup[snGroupIdx];
      if (!hosts[slottedItem.hostId]) {
        hosts[slottedItem.hostId] = plt.$orgLocNodes$.get(slottedItem.hostId);
      }
      if (!hosts[slottedItem.hostId]) continue;
      const hostEle = hosts[slottedItem.hostId];
      if (hostEle.shadowRoot && slottedItem.node.parentElement !== hostEle) {
        hostEle.insertBefore(slottedItem.node, (_c = (_b = slotGroup[snGroupIdx - 1]) == null ? void 0 : _b.node) == null ? void 0 : _c.nextSibling);
      }
      if (!hostEle.shadowRoot || !shadowRoot) {
        if (!slottedItem.slot["s-cr"]) {
          slottedItem.slot["s-cr"] = hostEle["s-cr"];
          if (!slottedItem.slot["s-cr"] && hostEle.shadowRoot) {
            slottedItem.slot["s-cr"] = hostEle;
          } else {
            slottedItem.slot["s-cr"] = (hostEle.__childNodes || hostEle.childNodes)[0];
          }
        }
        addSlotRelocateNode(slottedItem.node, slottedItem.slot, false, slottedItem.node["s-oo"] || currentPos);
        if (((_d = slottedItem.node.parentElement) == null ? void 0 : _d.shadowRoot) && slottedItem.node["getAttribute"] && slottedItem.node.getAttribute("slot")) {
          slottedItem.node.removeAttribute("slot");
        }
        {
          patchSlottedNode(slottedItem.node);
        }
      }
      currentPos = (slottedItem.node["s-oo"] || currentPos) + 1;
    }
  }
  if (scopeId2 && slotNodes.length) {
    slotNodes.forEach(slot => {
      slot.$elm$.parentElement.classList.add(scopeId2 + "-s");
    });
  }
  if (shadowRoot && !shadowRoot.childNodes.length) {
    let rnIdex = 0;
    const rnLen = shadowRootNodes.length;
    if (rnLen) {
      for (rnIdex; rnIdex < rnLen; rnIdex++) {
        const node = shadowRootNodes[rnIdex];
        if (node) {
          shadowRoot.appendChild(node);
        }
      }
      Array.from(hostElm.childNodes).forEach(node => {
        if (typeof node["s-en"] !== "string" && typeof node["s-sn"] !== "string") {
          if (node.nodeType === 1 /* ElementNode */ && node.slot && node.hidden) {
            node.removeAttribute("hidden");
          } else if (node.nodeType === 8 /* CommentNode */ && !node.nodeValue) {
            node.parentNode.removeChild(node);
          }
        }
      });
    }
  }
  hostRef.$hostElement$ = hostElm;
  endHydrate();
};
var clientHydrate = (parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node, hostId, slottedNodes = []) => {
  let childNodeType;
  let childIdSplt;
  let childVNode;
  let i2;
  const scopeId2 = hostElm["s-sc"];
  if (node.nodeType === 1 /* ElementNode */) {
    childNodeType = node.getAttribute(HYDRATE_CHILD_ID);
    if (childNodeType) {
      childIdSplt = childNodeType.split(".");
      if (childIdSplt[0] === hostId || childIdSplt[0] === "0") {
        childVNode = createSimpleVNode({
          $flags$: 0,
          $hostId$: childIdSplt[0],
          $nodeId$: childIdSplt[1],
          $depth$: childIdSplt[2],
          $index$: childIdSplt[3],
          $tag$: node.tagName.toLowerCase(),
          $elm$: node,
          // If we don't add the initial classes to the VNode, the first `vdom-render.ts` patch
          // won't try to reconcile them. Classes set on the node will be blown away.
          $attrs$: {
            class: node.className || ""
          }
        });
        childRenderNodes.push(childVNode);
        node.removeAttribute(HYDRATE_CHILD_ID);
        if (!parentVNode.$children$) {
          parentVNode.$children$ = [];
        }
        if (scopeId2 && childIdSplt[0] === hostId) {
          node["s-si"] = scopeId2;
          childVNode.$attrs$.class += " " + scopeId2;
        }
        const slotName = childVNode.$elm$.getAttribute("s-sn");
        if (typeof slotName === "string") {
          if (childVNode.$tag$ === "slot-fb") {
            addSlot(slotName, childIdSplt[2], childVNode, node, parentVNode, childRenderNodes, slotNodes, shadowRootNodes, slottedNodes);
            if (scopeId2) {
              node.classList.add(scopeId2);
            }
          }
          childVNode.$elm$["s-sn"] = slotName;
          childVNode.$elm$.removeAttribute("s-sn");
        }
        if (childVNode.$index$ !== void 0) {
          parentVNode.$children$[childVNode.$index$] = childVNode;
        }
        parentVNode = childVNode;
        if (shadowRootNodes && childVNode.$depth$ === "0") {
          shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
        }
      }
    }
    if (node.shadowRoot) {
      for (i2 = node.shadowRoot.childNodes.length - 1; i2 >= 0; i2--) {
        clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.shadowRoot.childNodes[i2], hostId, slottedNodes);
      }
    }
    const nonShadowNodes = node.__childNodes || node.childNodes;
    for (i2 = nonShadowNodes.length - 1; i2 >= 0; i2--) {
      clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, nonShadowNodes[i2], hostId, slottedNodes);
    }
  } else if (node.nodeType === 8 /* CommentNode */) {
    childIdSplt = node.nodeValue.split(".");
    if (childIdSplt[1] === hostId || childIdSplt[1] === "0") {
      childNodeType = childIdSplt[0];
      childVNode = createSimpleVNode({
        $hostId$: childIdSplt[1],
        $nodeId$: childIdSplt[2],
        $depth$: childIdSplt[3],
        $index$: childIdSplt[4] || "0",
        $elm$: node,
        $attrs$: null,
        $children$: null,
        $key$: null,
        $name$: null,
        $tag$: null,
        $text$: null
      });
      if (childNodeType === TEXT_NODE_ID) {
        childVNode.$elm$ = findCorrespondingNode(node, 3 /* TextNode */);
        if (childVNode.$elm$ && childVNode.$elm$.nodeType === 3 /* TextNode */) {
          childVNode.$text$ = childVNode.$elm$.textContent;
          childRenderNodes.push(childVNode);
          node.remove();
          if (hostId === childVNode.$hostId$) {
            if (!parentVNode.$children$) {
              parentVNode.$children$ = [];
            }
            parentVNode.$children$[childVNode.$index$] = childVNode;
          }
          if (shadowRootNodes && childVNode.$depth$ === "0") {
            shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
          }
        }
      } else if (childNodeType === COMMENT_NODE_ID) {
        childVNode.$elm$ = findCorrespondingNode(node, 8 /* CommentNode */);
        if (childVNode.$elm$ && childVNode.$elm$.nodeType === 8 /* CommentNode */) {
          childRenderNodes.push(childVNode);
          node.remove();
        }
      } else if (childVNode.$hostId$ === hostId) {
        if (childNodeType === SLOT_NODE_ID) {
          const slotName = node["s-sn"] = childIdSplt[5] || "";
          addSlot(slotName, childIdSplt[2], childVNode, node, parentVNode, childRenderNodes, slotNodes, shadowRootNodes, slottedNodes);
        } else if (childNodeType === CONTENT_REF_ID) {
          if (shadowRootNodes) {
            node.remove();
          } else {
            hostElm["s-cr"] = node;
            node["s-cn"] = true;
          }
        }
      }
    }
  } else if (parentVNode && parentVNode.$tag$ === "style") {
    const vnode = newVNode(null, node.textContent);
    vnode.$elm$ = node;
    vnode.$index$ = "0";
    parentVNode.$children$ = [vnode];
  }
  return parentVNode;
};
var initializeDocumentHydrate = (node, orgLocNodes) => {
  if (node.nodeType === 1 /* ElementNode */) {
    const componentId = node[HYDRATE_ID] || node.getAttribute(HYDRATE_ID);
    if (componentId) {
      orgLocNodes.set(componentId, node);
    }
    let i2 = 0;
    if (node.shadowRoot) {
      for (; i2 < node.shadowRoot.childNodes.length; i2++) {
        initializeDocumentHydrate(node.shadowRoot.childNodes[i2], orgLocNodes);
      }
    }
    const nonShadowNodes = node.__childNodes || node.childNodes;
    for (i2 = 0; i2 < nonShadowNodes.length; i2++) {
      initializeDocumentHydrate(nonShadowNodes[i2], orgLocNodes);
    }
  } else if (node.nodeType === 8 /* CommentNode */) {
    const childIdSplt = node.nodeValue.split(".");
    if (childIdSplt[0] === ORG_LOCATION_ID) {
      orgLocNodes.set(childIdSplt[1] + "." + childIdSplt[2], node);
      node.nodeValue = "";
      node["s-en"] = childIdSplt[3];
    }
  }
};
var createSimpleVNode = vnode => {
  const defaultVNode = {
    $flags$: 0,
    $hostId$: null,
    $nodeId$: null,
    $depth$: null,
    $index$: "0",
    $elm$: null,
    $attrs$: null,
    $children$: null,
    $key$: null,
    $name$: null,
    $tag$: null,
    $text$: null
  };
  return {
    ...defaultVNode,
    ...vnode
  };
};
function addSlot(slotName, slotId, childVNode, node, parentVNode, childRenderNodes, slotNodes, shadowRootNodes, slottedNodes) {
  node["s-sr"] = true;
  childVNode.$name$ = slotName || null;
  childVNode.$tag$ = "slot";
  const parentNodeId = (parentVNode == null ? void 0 : parentVNode.$elm$) ? parentVNode.$elm$["s-id"] || parentVNode.$elm$.getAttribute("s-id") : "";
  if (shadowRootNodes && win.document) {
    const slot = childVNode.$elm$ = win.document.createElement(childVNode.$tag$);
    if (childVNode.$name$) {
      childVNode.$elm$.setAttribute("name", slotName);
    }
    if (parentVNode.$elm$.shadowRoot && parentNodeId && parentNodeId !== childVNode.$hostId$) {
      internalCall(parentVNode.$elm$, "insertBefore")(slot, internalCall(parentVNode.$elm$, "children")[0]);
    } else {
      internalCall(internalCall(node, "parentNode"), "insertBefore")(slot, node);
    }
    addSlottedNodes(slottedNodes, slotId, slotName, node, childVNode.$hostId$);
    node.remove();
    if (childVNode.$depth$ === "0") {
      shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
    }
  } else {
    const slot = childVNode.$elm$;
    const shouldMove = parentNodeId && parentNodeId !== childVNode.$hostId$ && parentVNode.$elm$.shadowRoot;
    addSlottedNodes(slottedNodes, slotId, slotName, node, shouldMove ? parentNodeId : childVNode.$hostId$);
    patchSlotNode(node);
    if (shouldMove) {
      parentVNode.$elm$.insertBefore(slot, parentVNode.$elm$.children[0]);
    }
  }
  childRenderNodes.push(childVNode);
  slotNodes.push(childVNode);
  if (!parentVNode.$children$) {
    parentVNode.$children$ = [];
  }
  parentVNode.$children$[childVNode.$index$] = childVNode;
}
var addSlottedNodes = (slottedNodes, slotNodeId, slotName, slotNode, hostId) => {
  var _a, _b;
  let slottedNode = slotNode.nextSibling;
  slottedNodes[slotNodeId] = slottedNodes[slotNodeId] || [];
  if (!slottedNode || ((_a = slottedNode.nodeValue) == null ? void 0 : _a.startsWith(SLOT_NODE_ID + "."))) return;
  do {
    if (slottedNode && ((slottedNode["getAttribute"] && slottedNode.getAttribute("slot") || slottedNode["s-sn"]) === slotName || slotName === "" && !slottedNode["s-sn"] && (!slottedNode["getAttribute"] || !slottedNode.getAttribute("slot")) && (slottedNode.nodeType === 8 /* CommentNode */ || slottedNode.nodeType === 3 /* TextNode */))) {
      slottedNode["s-sn"] = slotName;
      slottedNodes[slotNodeId].push({
        slot: slotNode,
        node: slottedNode,
        hostId
      });
    }
    slottedNode = slottedNode == null ? void 0 : slottedNode.nextSibling;
  } while (slottedNode && !((_b = slottedNode.nodeValue) == null ? void 0 : _b.startsWith(SLOT_NODE_ID + ".")));
};
var findCorrespondingNode = (node, type) => {
  let sibling = node;
  do {
    sibling = sibling.nextSibling;
  } while (sibling && (sibling.nodeType !== type || !sibling.nodeValue));
  return sibling;
};

// src/runtime/mode.ts
var computeMode = elm => modeResolutionChain.map(h2 => h2(elm)).find(m => !!m);
var setMode = handler => modeResolutionChain.push(handler);
var getMode = ref => {
  var _a;
  return (_a = getHostRef(ref)) == null ? void 0 : _a.$modeName$;
};

// src/utils/remote-value.ts
var RemoteValue = class _RemoteValue {
  /**
   * Deserializes a LocalValue serialized object back to its original JavaScript representation
   *
   * @param serialized The serialized LocalValue object
   * @returns The original JavaScript value/object
   */
  static fromLocalValue(serialized) {
    const type = serialized[TYPE_CONSTANT];
    const value = VALUE_CONSTANT in serialized ? serialized[VALUE_CONSTANT] : void 0;
    switch (type) {
      case "string" /* String */:
        return value;
      case "boolean" /* Boolean */:
        return value;
      case "bigint" /* BigInt */:
        return BigInt(value);
      case "undefined" /* Undefined */:
        return void 0;
      case "null" /* Null */:
        return null;
      case "number" /* Number */:
        if (value === "NaN") return NaN;
        if (value === "-0") return -0;
        if (value === "Infinity") return Infinity;
        if (value === "-Infinity") return -Infinity;
        return value;
      case "array" /* Array */:
        return value.map(item => _RemoteValue.fromLocalValue(item));
      case "date" /* Date */:
        return new Date(value);
      case "map" /* Map */:
        const map = /* @__PURE__ */new Map();
        for (const [key, val] of value) {
          const deserializedKey = typeof key === "object" && key !== null ? _RemoteValue.fromLocalValue(key) : key;
          const deserializedValue = _RemoteValue.fromLocalValue(val);
          map.set(deserializedKey, deserializedValue);
        }
        return map;
      case "object" /* Object */:
        const obj = {};
        for (const [key, val] of value) {
          obj[key] = _RemoteValue.fromLocalValue(val);
        }
        return obj;
      case "regexp" /* RegularExpression */:
        const {
          pattern,
          flags
        } = value;
        return new RegExp(pattern, flags);
      case "set" /* Set */:
        const set = /* @__PURE__ */new Set();
        for (const item of value) {
          set.add(_RemoteValue.fromLocalValue(item));
        }
        return set;
      case "symbol" /* Symbol */:
        return Symbol(value);
      default:
        throw new Error(`Unsupported type: ${type}`);
    }
  }
  /**
   * Utility method to deserialize multiple LocalValues at once
   *
   * @param serializedValues Array of serialized LocalValue objects
   * @returns Array of deserialized JavaScript values
   */
  static fromLocalValueArray(serializedValues) {
    return serializedValues.map(value => _RemoteValue.fromLocalValue(value));
  }
  /**
   * Verifies if the given object matches the structure of a serialized LocalValue
   *
   * @param obj Object to verify
   * @returns boolean indicating if the object has LocalValue structure
   */
  static isLocalValueObject(obj) {
    if (typeof obj !== "object" || obj === null) {
      return false;
    }
    if (!obj.hasOwnProperty(TYPE_CONSTANT)) {
      return false;
    }
    const type = obj[TYPE_CONSTANT];
    const hasTypeProperty = Object.values({
      ...PrimitiveType,
      ...NonPrimitiveType
    }).includes(type);
    if (!hasTypeProperty) {
      return false;
    }
    if (type !== "null" /* Null */ && type !== "undefined" /* Undefined */) {
      return obj.hasOwnProperty(VALUE_CONSTANT);
    }
    return true;
  }
};

// src/utils/serialize.ts
function deserializeProperty(value) {
  if (typeof value !== "string" || !value.startsWith(SERIALIZED_PREFIX)) {
    return value;
  }
  return RemoteValue.fromLocalValue(JSON.parse(atob(value.slice(SERIALIZED_PREFIX.length))));
}

// src/runtime/parse-property-value.ts
var parsePropertyValue = (propValue, propType, isFormAssociated) => {
  if (typeof propValue === "string" && propValue.startsWith(SERIALIZED_PREFIX)) {
    propValue = deserializeProperty(propValue);
    return propValue;
  }
  if (propValue != null && !isComplexType(propValue)) {
    if (propType & 4 /* Boolean */) {
      {
        return propValue === "false" ? false : propValue === "" || !!propValue;
      }
    }
    if (propType & 2 /* Number */) {
      return typeof propValue === "string" ? parseFloat(propValue) : typeof propValue === "number" ? propValue : NaN;
    }
    if (propType & 1 /* String */) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
};
var getElement = ref => {
  var _a;
  return (_a = getHostRef(ref)) == null ? void 0 : _a.$hostElement$;
};

// src/runtime/event-emitter.ts
var createEvent = (ref, name, flags) => {
  const elm = getElement(ref);
  return {
    emit: detail => {
      return emitEvent(elm, name, {
        bubbles: !!(flags & 4 /* Bubbles */),
        composed: !!(flags & 2 /* Composed */),
        cancelable: !!(flags & 1 /* Cancellable */),
        detail
      });
    }
  };
};
var emitEvent = (elm, name, opts) => {
  const ev = plt.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};
var setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags, initialRender) => {
  if (oldValue === newValue) {
    return;
  }
  let isProp = isMemberInElement(elm, memberName);
  let ln = memberName.toLowerCase();
  if (memberName === "class") {
    const classList = elm.classList;
    const oldClasses = parseClassList(oldValue);
    let newClasses = parseClassList(newValue);
    if ((elm["s-si"] || elm["s-sc"]) && initialRender) {
      const scopeId2 = elm["s-sc"] || elm["s-si"];
      newClasses.push(scopeId2);
      oldClasses.forEach(c => {
        if (c.startsWith(scopeId2)) newClasses.push(c);
      });
      newClasses = [...new Set(newClasses)].filter(c => c);
      classList.add(...newClasses);
    } else {
      classList.remove(...oldClasses.filter(c => c && !newClasses.includes(c)));
      classList.add(...newClasses.filter(c => c && !oldClasses.includes(c)));
    }
  } else if (memberName === "style") {
    {
      for (const prop in oldValue) {
        if (!newValue || newValue[prop] == null) {
          if (prop.includes("-")) {
            elm.style.removeProperty(prop);
          } else {
            elm.style[prop] = "";
          }
        }
      }
    }
    for (const prop in newValue) {
      if (!oldValue || newValue[prop] !== oldValue[prop]) {
        if (prop.includes("-")) {
          elm.style.setProperty(prop, newValue[prop]);
        } else {
          elm.style[prop] = newValue[prop];
        }
      }
    }
  } else if (memberName === "key") ;else if (memberName === "ref") {
    if (newValue) {
      queueRefAttachment(newValue, elm);
    }
  } else if (!isProp && memberName[0] === "o" && memberName[1] === "n") {
    if (memberName[2] === "-") {
      memberName = memberName.slice(3);
    } else if (isMemberInElement(win, ln)) {
      memberName = ln.slice(2);
    } else {
      memberName = ln[2] + memberName.slice(3);
    }
    if (oldValue || newValue) {
      const capture = memberName.endsWith(CAPTURE_EVENT_SUFFIX);
      memberName = memberName.replace(CAPTURE_EVENT_REGEX, "");
      if (oldValue) {
        plt.rel(elm, memberName, oldValue, capture);
      }
      if (newValue) {
        plt.ael(elm, memberName, newValue, capture);
      }
    }
  } else if (memberName[0] === "a" && memberName.startsWith("attr:")) {
    const propName = memberName.slice(5);
    let attrName;
    {
      const hostRef = getHostRef(elm);
      if (hostRef && hostRef.$cmpMeta$ && hostRef.$cmpMeta$.$members$) {
        const memberMeta = hostRef.$cmpMeta$.$members$[propName];
        if (memberMeta && memberMeta[1]) {
          attrName = memberMeta[1];
        }
      }
    }
    if (!attrName) {
      attrName = propName.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    }
    if (newValue == null || newValue === false) {
      if (newValue !== false || elm.getAttribute(attrName) === "") {
        elm.removeAttribute(attrName);
      }
    } else {
      elm.setAttribute(attrName, newValue === true ? "" : newValue);
    }
    return;
  } else if (memberName[0] === "p" && memberName.startsWith("prop:")) {
    const propName = memberName.slice(5);
    try {
      elm[propName] = newValue;
    } catch (e) {}
    return;
  } else {
    const isComplex = isComplexType(newValue);
    if ((isProp || isComplex && newValue !== null) && !isSvg) {
      try {
        if (!elm.tagName.includes("-")) {
          const n = newValue == null ? "" : newValue;
          if (memberName === "list") {
            isProp = false;
          } else if (oldValue == null || elm[memberName] !== n) {
            if (typeof elm.__lookupSetter__(memberName) === "function") {
              elm[memberName] = n;
            } else {
              elm.setAttribute(memberName, n);
            }
          }
        } else if (elm[memberName] !== newValue) {
          elm[memberName] = newValue;
        }
      } catch (e) {}
    }
    let xlink = false;
    {
      if (ln !== (ln = ln.replace(/^xlink\:?/, ""))) {
        memberName = ln;
        xlink = true;
      }
    }
    if (newValue == null || newValue === false) {
      if (newValue !== false || elm.getAttribute(memberName) === "") {
        if (xlink) {
          elm.removeAttributeNS(XLINK_NS, memberName);
        } else {
          elm.removeAttribute(memberName);
        }
      }
    } else if ((!isProp || flags & 4 /* isHost */ || isSvg) && !isComplex && elm.nodeType === 1 /* ElementNode */) {
      newValue = newValue === true ? "" : newValue;
      if (xlink) {
        elm.setAttributeNS(XLINK_NS, memberName, newValue);
      } else {
        elm.setAttribute(memberName, newValue);
      }
    }
  }
};
var parseClassListRegex = /\s/;
var parseClassList = value => {
  if (typeof value === "object" && value && "baseVal" in value) {
    value = value.baseVal;
  }
  if (!value || typeof value !== "string") {
    return [];
  }
  return value.split(parseClassListRegex);
};
var CAPTURE_EVENT_SUFFIX = "Capture";
var CAPTURE_EVENT_REGEX = new RegExp(CAPTURE_EVENT_SUFFIX + "$");

// src/runtime/vdom/update-element.ts
var updateElement = (oldVnode, newVnode, isSvgMode2, isInitialRender) => {
  const elm = newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || {};
  const newVnodeAttrs = newVnode.$attrs$ || {};
  {
    for (const memberName of sortedAttrNames(Object.keys(oldVnodeAttrs))) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], void 0, isSvgMode2, newVnode.$flags$, isInitialRender);
      }
    }
  }
  for (const memberName of sortedAttrNames(Object.keys(newVnodeAttrs))) {
    setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode2, newVnode.$flags$, isInitialRender);
  }
};
function sortedAttrNames(attrNames) {
  return attrNames.includes("ref") ?
  // we need to sort these to ensure that `'ref'` is the last attr
  [...attrNames.filter(attr => attr !== "ref"), "ref"] :
  // no need to sort, return the original array
  attrNames;
}

// src/runtime/vdom/vdom-render.ts
var scopeId;
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var refCallbacksToRemove = [];
var refCallbacksToAttach = [];
var createElm = (oldParentVNode, newParentVNode, childIndex) => {
  var _a;
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i2 = 0;
  let elm;
  let childNode;
  let oldVNode;
  if (!useNativeShadowDom) {
    checkSlotRelocate = true;
    if (newVNode2.$tag$ === "slot") {
      newVNode2.$flags$ |= newVNode2.$children$ ?
      // slot element has fallback content
      // still create an element that "mocks" the slot element
      2 /* isSlotFallback */ :
      // slot element does not have fallback content
      // create an html comment we'll use to always reference
      // where actual slot content should sit next to
      1 /* isSlotReference */;
    }
  }
  if (newVNode2.$text$ != null) {
    elm = newVNode2.$elm$ = win.document.createTextNode(newVNode2.$text$);
  } else if (newVNode2.$flags$ & 1 /* isSlotReference */) {
    elm = newVNode2.$elm$ = win.document.createTextNode("");
    {
      updateElement(null, newVNode2, isSvgMode);
    }
  } else {
    if (!isSvgMode) {
      isSvgMode = newVNode2.$tag$ === "svg";
    }
    if (!win.document) {
      throw new Error("You are trying to render a Stencil component in an environment that doesn't support the DOM.");
    }
    elm = newVNode2.$elm$ = win.document.createElementNS(isSvgMode ? SVG_NS : HTML_NS, !useNativeShadowDom && BUILD.slotRelocation && newVNode2.$flags$ & 2 /* isSlotFallback */ ? "slot-fb" : newVNode2.$tag$);
    if (isSvgMode && newVNode2.$tag$ === "foreignObject") {
      isSvgMode = false;
    }
    {
      updateElement(null, newVNode2, isSvgMode);
    }
    if (isDef(scopeId) && elm["s-si"] !== scopeId) {
      elm.classList.add(elm["s-si"] = scopeId);
    }
    if (newVNode2.$children$) {
      const appendTarget = newVNode2.$tag$ === "template" ? elm.content : elm;
      for (i2 = 0; i2 < newVNode2.$children$.length; ++i2) {
        childNode = createElm(oldParentVNode, newVNode2, i2);
        if (childNode) {
          appendTarget.appendChild(childNode);
        }
      }
    }
    {
      if (newVNode2.$tag$ === "svg") {
        isSvgMode = false;
      } else if (elm.tagName === "foreignObject") {
        isSvgMode = true;
      }
    }
  }
  elm["s-hn"] = hostTagName;
  {
    if (newVNode2.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
      elm["s-sr"] = true;
      elm["s-cr"] = contentRef;
      elm["s-sn"] = newVNode2.$name$ || "";
      elm["s-rf"] = (_a = newVNode2.$attrs$) == null ? void 0 : _a.ref;
      patchSlotNode(elm);
      oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
      if (oldVNode && oldVNode.$tag$ === newVNode2.$tag$ && oldParentVNode.$elm$) {
        relocateToHostRoot(oldParentVNode.$elm$);
      }
      {
        addRemoveSlotScopedClass(contentRef, elm, newParentVNode.$elm$, oldParentVNode == null ? void 0 : oldParentVNode.$elm$);
      }
    }
  }
  return elm;
};
var relocateToHostRoot = parentElm => {
  plt.$flags$ |= 1 /* isTmpDisconnected */;
  const host = parentElm.closest(hostTagName.toLowerCase());
  if (host != null) {
    const contentRefNode = Array.from(host.__childNodes || host.childNodes).find(ref => ref["s-cr"]);
    const childNodeArray = Array.from(parentElm.__childNodes || parentElm.childNodes);
    for (const childNode of contentRefNode ? childNodeArray.reverse() : childNodeArray) {
      if (childNode["s-sh"] != null) {
        insertBefore(host, childNode, contentRefNode != null ? contentRefNode : null);
        childNode["s-sh"] = void 0;
        checkSlotRelocate = true;
      }
    }
  }
  plt.$flags$ &= -2 /* isTmpDisconnected */;
};
var putBackInOriginalLocation = (parentElm, recursive) => {
  plt.$flags$ |= 1 /* isTmpDisconnected */;
  const oldSlotChildNodes = Array.from(parentElm.__childNodes || parentElm.childNodes);
  if (parentElm["s-sr"]) {
    let node = parentElm;
    while (node = node.nextSibling) {
      if (node && node["s-sn"] === parentElm["s-sn"] && node["s-sh"] === hostTagName) {
        oldSlotChildNodes.push(node);
      }
    }
  }
  for (let i2 = oldSlotChildNodes.length - 1; i2 >= 0; i2--) {
    const childNode = oldSlotChildNodes[i2];
    if (childNode["s-hn"] !== hostTagName && childNode["s-ol"]) {
      insertBefore(referenceNode(childNode).parentNode, childNode, referenceNode(childNode));
      childNode["s-ol"].remove();
      childNode["s-ol"] = void 0;
      childNode["s-sh"] = void 0;
      checkSlotRelocate = true;
    }
    if (recursive) {
      putBackInOriginalLocation(childNode, recursive);
    }
  }
  plt.$flags$ &= -2 /* isTmpDisconnected */;
};
var addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = parentElm["s-cr"] && parentElm["s-cr"].parentNode || parentElm;
  let childNode;
  if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }
  if (parentVNode.$tag$ === "template") {
    containerElm = containerElm.content;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        insertBefore(containerElm, childNode, referenceNode(before));
      }
    }
  }
};
var removeVnodes = (vnodes, startIdx, endIdx) => {
  for (let index = startIdx; index <= endIdx; ++index) {
    const vnode = vnodes[index];
    if (vnode) {
      const elm = vnode.$elm$;
      nullifyVNodeRefs(vnode);
      if (elm) {
        {
          checkSlotFallbackVisibility = true;
          if (elm["s-ol"]) {
            elm["s-ol"].remove();
          } else {
            putBackInOriginalLocation(elm, true);
          }
        }
        elm.remove();
      }
    }
  }
};
var updateChildren = (parentElm, oldCh, newVNode2, newCh, isInitialRender = false) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let idxInOld = 0;
  let i2 = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  let elmToMove;
  const containerElm = newVNode2.$tag$ === "template" ? parentElm.content : parentElm;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode, isInitialRender)) {
      patch(oldStartVnode, newStartVnode, isInitialRender);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode, isInitialRender)) {
      patch(oldEndVnode, newEndVnode, isInitialRender);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode, isInitialRender)) {
      if (oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot") {
        putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
      }
      patch(oldStartVnode, newEndVnode, isInitialRender);
      insertBefore(containerElm, oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode, isInitialRender)) {
      if (oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot") {
        putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
      }
      patch(oldEndVnode, newStartVnode, isInitialRender);
      insertBefore(containerElm, oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      idxInOld = -1;
      {
        for (i2 = oldStartIdx; i2 <= oldEndIdx; ++i2) {
          if (oldCh[i2] && oldCh[i2].$key$ !== null && oldCh[i2].$key$ === newStartVnode.$key$) {
            idxInOld = i2;
            break;
          }
        }
      }
      if (idxInOld >= 0) {
        elmToMove = oldCh[idxInOld];
        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
          node = createElm(oldCh && oldCh[newStartIdx], newVNode2, idxInOld);
        } else {
          patch(elmToMove, newStartVnode, isInitialRender);
          oldCh[idxInOld] = void 0;
          node = elmToMove.$elm$;
        }
        newStartVnode = newCh[++newStartIdx];
      } else {
        node = createElm(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        {
          insertBefore(referenceNode(oldStartVnode.$elm$).parentNode, node, referenceNode(oldStartVnode.$elm$));
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode2, newCh, newStartIdx, newEndIdx);
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
var isSameVnode = (leftVNode, rightVNode, isInitialRender = false) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    if (leftVNode.$tag$ === "slot") {
      return leftVNode.$name$ === rightVNode.$name$;
    }
    if (!isInitialRender) {
      return leftVNode.$key$ === rightVNode.$key$;
    }
    if (isInitialRender && !leftVNode.$key$ && rightVNode.$key$) {
      leftVNode.$key$ = rightVNode.$key$;
    }
    return true;
  }
  return false;
};
var referenceNode = node => node && node["s-ol"] || node;
var patch = (oldVNode, newVNode2, isInitialRender = false) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const tag = newVNode2.$tag$;
  const text = newVNode2.$text$;
  let defaultHolder;
  if (text == null) {
    {
      isSvgMode = tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode;
    }
    {
      if (tag === "slot" && !useNativeShadowDom) {
        if (oldVNode.$name$ !== newVNode2.$name$) {
          newVNode2.$elm$["s-sn"] = newVNode2.$name$ || "";
          relocateToHostRoot(newVNode2.$elm$.parentElement);
        }
      }
      updateElement(oldVNode, newVNode2, isSvgMode, isInitialRender);
    }
    if (oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren, isInitialRender);
    } else if (newChildren !== null) {
      if (oldVNode.$text$ !== null) {
        elm.textContent = "";
      }
      addVnodes(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (
    // don't do this on initial render as it can cause non-hydrated content to be removed
    !isInitialRender && BUILD.updatable && oldChildren !== null) {
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    } else if (isInitialRender && BUILD.updatable && oldChildren !== null && newChildren === null) {
      newVNode2.$children$ = oldChildren;
    }
    if (isSvgMode && tag === "svg") {
      isSvgMode = false;
    }
  } else if (defaultHolder = elm["s-cr"]) {
    defaultHolder.parentNode.textContent = text;
  } else if (oldVNode.$text$ !== text) {
    elm.data = text;
  }
};
var relocateNodes = [];
var markSlotContentForRelocation = elm => {
  let node;
  let hostContentNodes;
  let j;
  const children = elm.__childNodes || elm.childNodes;
  for (const childNode of children) {
    if (childNode["s-sr"] && (node = childNode["s-cr"]) && node.parentNode) {
      hostContentNodes = node.parentNode.__childNodes || node.parentNode.childNodes;
      const slotName = childNode["s-sn"];
      for (j = hostContentNodes.length - 1; j >= 0; j--) {
        node = hostContentNodes[j];
        if (!node["s-cn"] && !node["s-nr"] && node["s-hn"] !== childNode["s-hn"] && (!node["s-sh"] || node["s-sh"] !== childNode["s-hn"])) {
          if (isNodeLocatedInSlot(node, slotName)) {
            let relocateNodeData = relocateNodes.find(r => r.$nodeToRelocate$ === node);
            checkSlotFallbackVisibility = true;
            node["s-sn"] = node["s-sn"] || slotName;
            if (relocateNodeData) {
              relocateNodeData.$nodeToRelocate$["s-sh"] = childNode["s-hn"];
              relocateNodeData.$slotRefNode$ = childNode;
            } else {
              node["s-sh"] = childNode["s-hn"];
              relocateNodes.push({
                $slotRefNode$: childNode,
                $nodeToRelocate$: node
              });
            }
            if (node["s-sr"]) {
              relocateNodes.map(relocateNode => {
                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node["s-sn"])) {
                  relocateNodeData = relocateNodes.find(r => r.$nodeToRelocate$ === node);
                  if (relocateNodeData && !relocateNode.$slotRefNode$) {
                    relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                  }
                }
              });
            }
          } else if (!relocateNodes.some(r => r.$nodeToRelocate$ === node)) {
            relocateNodes.push({
              $nodeToRelocate$: node
            });
          }
        }
      }
    }
    if (childNode.nodeType === 1 /* ElementNode */) {
      markSlotContentForRelocation(childNode);
    }
  }
};
var nullifyVNodeRefs = vNode => {
  {
    if (vNode.$attrs$ && vNode.$attrs$.ref) {
      refCallbacksToRemove.push(() => vNode.$attrs$.ref(null));
    }
    vNode.$children$ && vNode.$children$.map(nullifyVNodeRefs);
  }
};
var queueRefAttachment = (refCallback, elm) => {
  {
    refCallbacksToAttach.push(() => refCallback(elm));
  }
};
var flushQueuedRefCallbacks = () => {
  {
    refCallbacksToRemove.forEach(cb => cb());
    refCallbacksToRemove.length = 0;
    refCallbacksToAttach.forEach(cb => cb());
    refCallbacksToAttach.length = 0;
  }
};
var insertBefore = (parent, newNode, reference, isInitialLoad) => {
  {
    if (typeof newNode["s-sn"] === "string" && !!newNode["s-sr"] && !!newNode["s-cr"]) {
      addRemoveSlotScopedClass(newNode["s-cr"], newNode, parent, newNode.parentElement);
    } else if (typeof newNode["s-sn"] === "string") {
      if (parent.getRootNode().nodeType !== 11 /* DOCUMENT_FRAGMENT_NODE */) {
        patchParentNode(newNode);
      }
      parent.insertBefore(newNode, reference);
      const {
        slotNode
      } = findSlotFromSlottedNode(newNode);
      if (slotNode && !isInitialLoad) dispatchSlotChangeEvent(slotNode);
      return newNode;
    }
  }
  if (parent.__insertBefore) {
    return parent.__insertBefore(newNode, reference);
  } else {
    return parent == null ? void 0 : parent.insertBefore(newNode, reference);
  }
};
function addRemoveSlotScopedClass(reference, slotNode, newParent, oldParent) {
  var _a, _b;
  let scopeId2;
  if (reference && typeof slotNode["s-sn"] === "string" && !!slotNode["s-sr"] && reference.parentNode && reference.parentNode["s-sc"] && (scopeId2 = slotNode["s-si"] || reference.parentNode["s-sc"])) {
    const scopeName = slotNode["s-sn"];
    const hostName = slotNode["s-hn"];
    (_a = newParent.classList) == null ? void 0 : _a.add(scopeId2 + "-s");
    if (oldParent && ((_b = oldParent.classList) == null ? void 0 : _b.contains(scopeId2 + "-s"))) {
      let child = (oldParent.__childNodes || oldParent.childNodes)[0];
      let found = false;
      while (child) {
        if (child["s-sn"] !== scopeName && child["s-hn"] === hostName && !!child["s-sr"]) {
          found = true;
          break;
        }
        child = child.nextSibling;
      }
      if (!found) oldParent.classList.remove(scopeId2 + "-s");
    }
  }
}
var renderVdom = (hostRef, renderFnResults, isInitialLoad = false) => {
  var _a, _b, _c, _d, _e;
  const hostElm = hostRef.$hostElement$;
  const cmpMeta = hostRef.$cmpMeta$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const isHostElement = isHost(renderFnResults);
  const rootVnode = isHostElement ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  if (cmpMeta.$attrsToReflect$) {
    rootVnode.$attrs$ = rootVnode.$attrs$ || {};
    cmpMeta.$attrsToReflect$.forEach(([propName, attribute]) => {
      {
        rootVnode.$attrs$[attribute] = hostElm[propName];
      }
    });
  }
  if (isInitialLoad && rootVnode.$attrs$) {
    for (const key of Object.keys(rootVnode.$attrs$)) {
      if (hostElm.hasAttribute(key) && !["key", "ref", "style", "class"].includes(key)) {
        rootVnode.$attrs$[key] = hostElm[key];
      }
    }
  }
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4 /* isHost */;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm;
  {
    scopeId = hostElm["s-sc"];
  }
  useNativeShadowDom = !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) && !(cmpMeta.$flags$ & 128 /* shadowNeedsScopedCss */);
  {
    contentRef = hostElm["s-cr"];
    checkSlotFallbackVisibility = false;
  }
  patch(oldVNode, rootVnode, isInitialLoad);
  {
    plt.$flags$ |= 1 /* isTmpDisconnected */;
    if (checkSlotRelocate) {
      markSlotContentForRelocation(rootVnode.$elm$);
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        if (!nodeToRelocate["s-ol"] && win.document) {
          const orgLocationNode = win.document.createTextNode("");
          orgLocationNode["s-nr"] = nodeToRelocate;
          insertBefore(nodeToRelocate.parentNode, nodeToRelocate["s-ol"] = orgLocationNode, nodeToRelocate, isInitialLoad);
        }
      }
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        const slotRefNode = relocateData.$slotRefNode$;
        if (nodeToRelocate.nodeType === 1 /* ElementNode */ && isInitialLoad) {
          nodeToRelocate["s-ih"] = (_a = nodeToRelocate.hidden) != null ? _a : false;
        }
        if (slotRefNode) {
          const parentNodeRef = slotRefNode.parentNode;
          let insertBeforeNode = slotRefNode.nextSibling;
          if (insertBeforeNode && insertBeforeNode.nodeType === 1 /* ElementNode */) {
            let orgLocationNode = (_b = nodeToRelocate["s-ol"]) == null ? void 0 : _b.previousSibling;
            while (orgLocationNode) {
              let refNode = (_c = orgLocationNode["s-nr"]) != null ? _c : null;
              if (refNode && refNode["s-sn"] === nodeToRelocate["s-sn"] && parentNodeRef === (refNode.__parentNode || refNode.parentNode)) {
                refNode = refNode.nextSibling;
                while (refNode === nodeToRelocate || (refNode == null ? void 0 : refNode["s-sr"])) {
                  refNode = refNode == null ? void 0 : refNode.nextSibling;
                }
                if (!refNode || !refNode["s-nr"]) {
                  insertBeforeNode = refNode;
                  break;
                }
              }
              orgLocationNode = orgLocationNode.previousSibling;
            }
          }
          const parent = nodeToRelocate.__parentNode || nodeToRelocate.parentNode;
          const nextSibling = nodeToRelocate.__nextSibling || nodeToRelocate.nextSibling;
          if (!insertBeforeNode && parentNodeRef !== parent || nextSibling !== insertBeforeNode) {
            if (nodeToRelocate !== insertBeforeNode) {
              insertBefore(parentNodeRef, nodeToRelocate, insertBeforeNode, isInitialLoad);
              if (nodeToRelocate.nodeType === 8 /* CommentNode */ && nodeToRelocate.nodeValue.startsWith("s-nt-")) {
                const textNode = win.document.createTextNode(nodeToRelocate.nodeValue.replace(/^s-nt-/, ""));
                textNode["s-hn"] = nodeToRelocate["s-hn"];
                textNode["s-sn"] = nodeToRelocate["s-sn"];
                textNode["s-sh"] = nodeToRelocate["s-sh"];
                textNode["s-sr"] = nodeToRelocate["s-sr"];
                textNode["s-ol"] = nodeToRelocate["s-ol"];
                textNode["s-ol"]["s-nr"] = textNode;
                insertBefore(nodeToRelocate.parentNode, textNode, nodeToRelocate, isInitialLoad);
                nodeToRelocate.parentNode.removeChild(nodeToRelocate);
              }
              if (nodeToRelocate.nodeType === 1 /* ElementNode */ && nodeToRelocate.tagName !== "SLOT-FB") {
                nodeToRelocate.hidden = (_d = nodeToRelocate["s-ih"]) != null ? _d : false;
              }
            }
          }
          nodeToRelocate && typeof slotRefNode["s-rf"] === "function" && slotRefNode["s-rf"](slotRefNode);
        } else if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
          nodeToRelocate.hidden = true;
        }
      }
    }
    if (checkSlotFallbackVisibility) {
      updateFallbackSlotVisibility(rootVnode.$elm$);
    }
    plt.$flags$ &= -2 /* isTmpDisconnected */;
    relocateNodes.length = 0;
  }
  if (!useNativeShadowDom && !(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) && hostElm["s-cr"]) {
    const children = rootVnode.$elm$.__childNodes || rootVnode.$elm$.childNodes;
    for (const childNode of children) {
      if (childNode["s-hn"] !== hostTagName && !childNode["s-sh"]) {
        if (isInitialLoad && childNode["s-ih"] == null) {
          childNode["s-ih"] = (_e = childNode.hidden) != null ? _e : false;
        }
        if (childNode.nodeType === 1 /* ElementNode */) {
          childNode.hidden = true;
        } else if (childNode.nodeType === 3 /* TextNode */ && !!childNode.nodeValue.trim()) {
          const textCommentNode = win.document.createComment("s-nt-" + childNode.nodeValue);
          textCommentNode["s-sn"] = childNode["s-sn"];
          insertBefore(childNode.parentNode, textCommentNode, childNode, isInitialLoad);
          childNode.parentNode.removeChild(childNode);
        }
      }
    }
  }
  contentRef = void 0;
  flushQueuedRefCallbacks();
};

// src/runtime/update-component.ts
var attachToAncestor = (hostRef, ancestorComponent) => {
  if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) {
    const index = ancestorComponent["s-p"].push(new Promise(r => hostRef.$onRenderResolve$ = () => {
      ancestorComponent["s-p"].splice(index - 1, 1);
      r();
    }));
  }
};
var scheduleUpdate = (hostRef, isInitialLoad) => {
  {
    hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
  }
  if (hostRef.$flags$ & 4 /* isWaitingForChildren */) {
    hostRef.$flags$ |= 512 /* needsRerender */;
    return;
  }
  attachToAncestor(hostRef, hostRef.$ancestorComponent$);
  const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
  if (isInitialLoad) {
    queueMicrotask(() => {
      dispatch();
    });
    return;
  }
  return writeTask(dispatch);
};
var dispatchHooks = (hostRef, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = hostRef.$lazyInstance$;
  if (!instance) {
    throw new Error(`Can't render component <${elm.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);
  }
  let maybePromise;
  if (isInitialLoad) {
    {
      if (hostRef.$deferredConnectedCallback$) {
        hostRef.$deferredConnectedCallback$ = false;
        safeCall(instance, "connectedCallback", void 0, elm);
      }
      {
        hostRef.$flags$ |= 256 /* isListenReady */;
        if (hostRef.$queuedListeners$) {
          hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event, elm));
          hostRef.$queuedListeners$ = void 0;
        }
      }
      if (hostRef.$fetchedCbList$.length) {
        hostRef.$fetchedCbList$.forEach(cb => cb(elm));
      }
    }
    maybePromise = safeCall(instance, "componentWillLoad", void 0, elm);
  } else {
    maybePromise = safeCall(instance, "componentWillUpdate", void 0, elm);
  }
  maybePromise = enqueue(maybePromise, () => safeCall(instance, "componentWillRender", void 0, elm));
  endSchedule();
  return enqueue(maybePromise, () => updateComponent(hostRef, instance, isInitialLoad));
};
var enqueue = (maybePromise, fn) => isPromisey(maybePromise) ? maybePromise.then(fn).catch(err => {
  console.error(err);
  fn();
}) : fn();
var isPromisey = maybePromise => maybePromise instanceof Promise || maybePromise && maybePromise.then && typeof maybePromise.then === "function";
var updateComponent = /*#__PURE__*/function () {
  var _ref = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (hostRef, instance, isInitialLoad) {
    var _a;
    const elm = hostRef.$hostElement$;
    const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
    const rc = elm["s-rc"];
    if (isInitialLoad) {
      attachStyles(hostRef);
    }
    const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
    {
      callRender(hostRef, instance, elm, isInitialLoad);
    }
    if (rc) {
      rc.map(cb => cb());
      elm["s-rc"] = void 0;
    }
    endRender();
    endUpdate();
    {
      const childrenPromises = (_a = elm["s-p"]) != null ? _a : [];
      const postUpdate = () => postUpdateComponent(hostRef);
      if (childrenPromises.length === 0) {
        postUpdate();
      } else {
        Promise.all(childrenPromises).then(postUpdate).catch(postUpdate);
        hostRef.$flags$ |= 4 /* isWaitingForChildren */;
        childrenPromises.length = 0;
      }
    }
  });
  return function updateComponent(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var callRender = (hostRef, instance, elm, isInitialLoad) => {
  try {
    instance = instance.render && instance.render();
    {
      hostRef.$flags$ &= -17 /* isQueuedForUpdate */;
    }
    {
      hostRef.$flags$ |= 2 /* hasRendered */;
    }
    {
      {
        {
          renderVdom(hostRef, instance, isInitialLoad);
        }
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
  return null;
};
var postUpdateComponent = hostRef => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime("postUpdate", tagName);
  const instance = hostRef.$lazyInstance$;
  const ancestorComponent = hostRef.$ancestorComponent$;
  safeCall(instance, "componentDidRender", void 0, elm);
  if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
    hostRef.$flags$ |= 64 /* hasLoadedComponent */;
    {
      addHydratedFlag(elm);
    }
    safeCall(instance, "componentDidLoad", void 0, elm);
    endPostUpdate();
    {
      hostRef.$onReadyResolve$(elm);
      if (!ancestorComponent) {
        appDidLoad();
      }
    }
  } else {
    safeCall(instance, "componentDidUpdate", void 0, elm);
    endPostUpdate();
  }
  {
    hostRef.$onInstanceResolve$(elm);
  }
  {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$flags$ & 512 /* needsRerender */) {
      nextTick(() => scheduleUpdate(hostRef, false));
    }
    hostRef.$flags$ &= -517;
  }
};
var forceUpdate = ref => {
  var _a;
  {
    const hostRef = getHostRef(ref);
    const isConnected = (_a = hostRef == null ? void 0 : hostRef.$hostElement$) == null ? void 0 : _a.isConnected;
    if (isConnected && (hostRef.$flags$ & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
      scheduleUpdate(hostRef, false);
    }
    return isConnected;
  }
};
var appDidLoad = who => {
  var _a;
  nextTick(() => emitEvent(win, "appload", {
    detail: {
      namespace: NAMESPACE
    }
  }));
  {
    if ((_a = plt.$orgLocNodes$) == null ? void 0 : _a.size) {
      plt.$orgLocNodes$.clear();
    }
  }
};
var safeCall = (instance, method, arg, elm) => {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e) {
      consoleError(e, elm);
    }
  }
  return void 0;
};
var addHydratedFlag = elm => {
  var _a;
  return elm.classList.add((_a = BUILD.hydratedSelectorName) != null ? _a : "hydrated");
};

// src/runtime/set-value.ts
var getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
var setValue = (ref, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef(ref);
  if (!hostRef) {
    return;
  }
  if (!hostRef) {
    throw new Error(`Couldn't find host element for "${cmpMeta.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).`);
  }
  const elm = hostRef.$hostElement$;
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = hostRef.$lazyInstance$;
  newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if ((!(flags & 8 /* isConstructingInstance */) || oldVal === void 0) && didValueChange) {
    hostRef.$instanceValues$.set(propName, newVal);
    if (cmpMeta.$watchers$) {
      const watchMethods = cmpMeta.$watchers$[propName];
      if (watchMethods) {
        watchMethods.map(watcher => {
          try {
            const [[watchMethodName, watcherFlags]] = Object.entries(watcher);
            if (flags & 128 /* isWatchReady */ || watcherFlags & 1 /* Immediate */) {
              if (!instance) {
                hostRef.$fetchedCbList$.push(() => {
                  hostRef.$lazyInstance$[watchMethodName](newVal, oldVal, propName);
                });
              } else {
                instance[watchMethodName](newVal, oldVal, propName);
              }
            }
          } catch (e) {
            consoleError(e, elm);
          }
        });
      }
    }
    if (flags & 2 /* hasRendered */) {
      if (instance.componentShouldUpdate) {
        const shouldUpdate = instance.componentShouldUpdate(newVal, oldVal, propName);
        if (shouldUpdate === false && !(flags & 16 /* isQueuedForUpdate */)) {
          return;
        }
      }
      if (!(flags & 16 /* isQueuedForUpdate */)) {
        scheduleUpdate(hostRef, false);
      }
    }
  }
};

// src/runtime/proxy-component.ts
var proxyComponent = (Cstr, cmpMeta, flags) => {
  var _a, _b;
  const prototype = Cstr.prototype;
  if (cmpMeta.$members$ || BUILD.propChangeCallback) {
    {
      if (Cstr.watchers && !cmpMeta.$watchers$) {
        cmpMeta.$watchers$ = Cstr.watchers;
      }
      if (Cstr.deserializers && !cmpMeta.$deserializers$) {
        cmpMeta.$deserializers$ = Cstr.deserializers;
      }
      if (Cstr.serializers && !cmpMeta.$serializers$) {
        cmpMeta.$serializers$ = Cstr.serializers;
      }
    }
    const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
    members.map(([memberName, [memberFlags]]) => {
      if (memberFlags & 31 /* Prop */ || flags & 2 /* proxyState */ && memberFlags & 32 /* State */) {
        const {
          get: origGetter,
          set: origSetter
        } = Object.getOwnPropertyDescriptor(prototype, memberName) || {};
        if (origGetter) cmpMeta.$members$[memberName][0] |= 2048 /* Getter */;
        if (origSetter) cmpMeta.$members$[memberName][0] |= 4096 /* Setter */;
        if (flags & 1 /* isElementConstructor */ || !origGetter) {
          Object.defineProperty(prototype, memberName, {
            get() {
              {
                if ((cmpMeta.$members$[memberName][0] & 2048 /* Getter */) === 0) {
                  return getValue(this, memberName);
                }
                const ref = getHostRef(this);
                const instance = ref ? ref.$lazyInstance$ : prototype;
                if (!instance) return;
                return instance[memberName];
              }
            },
            configurable: true,
            enumerable: true
          });
        }
        Object.defineProperty(prototype, memberName, {
          set(newValue) {
            const ref = getHostRef(this);
            if (!ref) {
              return;
            }
            if (origSetter) {
              const currentValue = memberFlags & 32 /* State */ ? this[memberName] : ref.$hostElement$[memberName];
              if (typeof currentValue === "undefined" && ref.$instanceValues$.get(memberName)) {
                newValue = ref.$instanceValues$.get(memberName);
              }
              origSetter.apply(this, [parsePropertyValue(newValue, memberFlags)]);
              newValue = memberFlags & 32 /* State */ ? this[memberName] : ref.$hostElement$[memberName];
              setValue(this, memberName, newValue, cmpMeta);
              return;
            }
            {
              if ((flags & 1 /* isElementConstructor */) === 0 || (cmpMeta.$members$[memberName][0] & 4096 /* Setter */) === 0) {
                setValue(this, memberName, newValue, cmpMeta);
                if (flags & 1 /* isElementConstructor */ && !ref.$lazyInstance$) {
                  ref.$fetchedCbList$.push(() => {
                    if (cmpMeta.$members$[memberName][0] & 4096 /* Setter */ && ref.$lazyInstance$[memberName] !== ref.$instanceValues$.get(memberName)) {
                      ref.$lazyInstance$[memberName] = newValue;
                    }
                  });
                }
                return;
              }
              const setterSetVal = () => {
                const currentValue = ref.$lazyInstance$[memberName];
                if (!ref.$instanceValues$.get(memberName) && currentValue) {
                  ref.$instanceValues$.set(memberName, currentValue);
                }
                ref.$lazyInstance$[memberName] = parsePropertyValue(newValue, memberFlags);
                setValue(this, memberName, ref.$lazyInstance$[memberName], cmpMeta);
              };
              if (ref.$lazyInstance$) {
                setterSetVal();
              } else {
                ref.$fetchedCbList$.push(() => {
                  setterSetVal();
                });
              }
            }
          }
        });
      } else if (flags & 1 /* isElementConstructor */ && memberFlags & 64 /* Method */) {
        Object.defineProperty(prototype, memberName, {
          value(...args) {
            var _a2;
            const ref = getHostRef(this);
            return (_a2 = ref == null ? void 0 : ref.$onInstancePromise$) == null ? void 0 : _a2.then(() => {
              var _a3;
              return (_a3 = ref.$lazyInstance$) == null ? void 0 : _a3[memberName](...args);
            });
          }
        });
      }
    });
    if (flags & 1 /* isElementConstructor */) {
      const attrNameToPropName = /* @__PURE__ */new Map();
      prototype.attributeChangedCallback = function (attrName, oldValue, newValue) {
        plt.jmp(() => {
          var _a2;
          const propName = attrNameToPropName.get(attrName);
          const hostRef = getHostRef(this);
          if (this.hasOwnProperty(propName) && BUILD.lazyLoad) {
            newValue = this[propName];
            delete this[propName];
          }
          if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" &&
          // cast type to number to avoid TS compiler issues
          this[propName] == newValue) {
            return;
          } else if (propName == null) {
            const flags2 = hostRef == null ? void 0 : hostRef.$flags$;
            if (hostRef && flags2 && !(flags2 & 8 /* isConstructingInstance */) && newValue !== oldValue) {
              const instance = hostRef.$lazyInstance$;
              const entry = (_a2 = cmpMeta.$watchers$) == null ? void 0 : _a2[attrName];
              entry == null ? void 0 : entry.forEach(watcher => {
                const [[watchMethodName, watcherFlags]] = Object.entries(watcher);
                if (instance[watchMethodName] != null && (flags2 & 128 /* isWatchReady */ || watcherFlags & 1 /* Immediate */)) {
                  instance[watchMethodName].call(instance, newValue, oldValue, attrName);
                }
              });
            }
            return;
          }
          const propFlags = members.find(([m]) => m === propName);
          if (propFlags && propFlags[1][0] & 4 /* Boolean */) {
            newValue = newValue === null || newValue === "false" ? false : true;
          }
          const propDesc = Object.getOwnPropertyDescriptor(prototype, propName);
          if (newValue != this[propName] && (!propDesc.get || !!propDesc.set)) {
            this[propName] = newValue;
          }
        });
      };
      Cstr.observedAttributes = Array.from(/* @__PURE__ */new Set([...Object.keys((_b = cmpMeta.$watchers$) != null ? _b : {}), ...members.filter(([_, m]) => m[0] & 31 /* HasAttribute */).map(([propName, m]) => {
        var _a2;
        const attrName = m[1] || propName;
        attrNameToPropName.set(attrName, propName);
        if (m[0] & 512 /* ReflectAttr */) {
          (_a2 = cmpMeta.$attrsToReflect$) == null ? void 0 : _a2.push([propName, attrName]);
        }
        return attrName;
      })]));
    }
  }
  return Cstr;
};

// src/runtime/initialize-component.ts
var initializeComponent = /*#__PURE__*/function () {
  var _ref2 = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (elm, hostRef, cmpMeta, hmrVersionId) {
    let Cstr;
    try {
      if ((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0) {
        hostRef.$flags$ |= 32 /* hasInitializedComponent */;
        const bundleId = cmpMeta.$lazyBundleId$;
        if (bundleId) {
          const CstrImport = loadModule(cmpMeta, hostRef);
          if (CstrImport && "then" in CstrImport) {
            const endLoad = uniqueTime();
            Cstr = yield CstrImport;
            endLoad();
          } else {
            Cstr = CstrImport;
          }
          if (!Cstr) {
            throw new Error(`Constructor for "${cmpMeta.$tagName$}#${hostRef.$modeName$}" was not found`);
          }
          if (!Cstr.isProxied) {
            {
              cmpMeta.$watchers$ = Cstr.watchers;
              cmpMeta.$serializers$ = Cstr.serializers;
              cmpMeta.$deserializers$ = Cstr.deserializers;
            }
            proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
            Cstr.isProxied = true;
          }
          const endNewInstance = createTime("createInstance", cmpMeta.$tagName$);
          {
            hostRef.$flags$ |= 8 /* isConstructingInstance */;
          }
          try {
            new Cstr(hostRef);
          } catch (e) {
            consoleError(e, elm);
          }
          {
            hostRef.$flags$ &= -9 /* isConstructingInstance */;
          }
          {
            hostRef.$flags$ |= 128 /* isWatchReady */;
          }
          endNewInstance();
          const needsDeferredCallback = cmpMeta.$flags$ & 4 /* hasSlotRelocation */;
          if (!needsDeferredCallback) {
            fireConnectedCallback(hostRef.$lazyInstance$, elm);
          } else {
            hostRef.$deferredConnectedCallback$ = true;
          }
        } else {
          Cstr = elm.constructor;
          const cmpTag = elm.localName;
          customElements.whenDefined(cmpTag).then(() => hostRef.$flags$ |= 128 /* isWatchReady */);
        }
        if (Cstr && Cstr.style) {
          let style;
          if (typeof Cstr.style === "string") {
            style = Cstr.style;
          } else if (typeof Cstr.style !== "string") {
            hostRef.$modeName$ = computeMode(elm);
            if (hostRef.$modeName$) {
              style = Cstr.style[hostRef.$modeName$];
            }
          }
          const scopeId2 = getScopeId(cmpMeta, hostRef.$modeName$);
          if (!styles.has(scopeId2) || BUILD.hotModuleReplacement) {
            const endRegisterStyles = createTime("registerStyles", cmpMeta.$tagName$);
            registerStyle(scopeId2, style, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
            endRegisterStyles();
          }
        }
      }
      const ancestorComponent = hostRef.$ancestorComponent$;
      const schedule = () => scheduleUpdate(hostRef, true);
      if (ancestorComponent && ancestorComponent["s-rc"]) {
        ancestorComponent["s-rc"].push(schedule);
      } else {
        schedule();
      }
    } catch (e) {
      consoleError(e, elm);
      if (hostRef.$onRenderResolve$) {
        hostRef.$onRenderResolve$();
        hostRef.$onRenderResolve$ = void 0;
      }
      if (hostRef.$onReadyResolve$) {
        hostRef.$onReadyResolve$(elm);
      }
    }
  });
  return function initializeComponent(_x4, _x5, _x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}();
var fireConnectedCallback = (instance, elm) => {
  {
    safeCall(instance, "connectedCallback", void 0, elm);
  }
};

// src/runtime/connected-callback.ts
var connectedCallback = elm => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    if (!hostRef) {
      return;
    }
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime("connectedCallback", cmpMeta.$tagName$);
    if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
      hostRef.$flags$ |= 1 /* hasConnected */;
      let hostId;
      {
        hostId = elm.getAttribute(HYDRATE_ID);
        if (hostId) {
          if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            const scopeId2 = addStyle(elm.shadowRoot, cmpMeta, elm.getAttribute("s-mode"));
            elm.classList.remove(scopeId2 + "-h", scopeId2 + "-s");
          } else if (cmpMeta.$flags$ & 2 /* scopedCssEncapsulation */) {
            const scopeId2 = getScopeId(cmpMeta, elm.getAttribute("s-mode"));
            elm["s-sc"] = scopeId2;
          }
          initializeClientHydrate(elm, cmpMeta.$tagName$, hostId, hostRef);
        }
      }
      if (!hostId) {
        if (
        // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
        cmpMeta.$flags$ & (4 /* hasSlotRelocation */ | 8 /* needsShadowDomShim */)) {
          setContentReference(elm);
        }
      }
      {
        let ancestorComponent = elm;
        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          if (ancestorComponent.nodeType === 1 /* ElementNode */ && ancestorComponent.hasAttribute("s-id") && ancestorComponent["s-p"] || ancestorComponent["s-p"]) {
            attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      }
      if (cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31 /* Prop */ && memberName in elm && elm[memberName] !== Object.prototype[memberName]) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }
      {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    } else {
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
      if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
        fireConnectedCallback(hostRef.$lazyInstance$, elm);
      } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
        hostRef.$onReadyPromise$.then(() => fireConnectedCallback(hostRef.$lazyInstance$, elm));
      }
    }
    endConnected();
  }
};
var setContentReference = elm => {
  if (!win.document) {
    return;
  }
  const contentRefElm = elm["s-cr"] = win.document.createComment("");
  contentRefElm["s-cn"] = true;
  insertBefore(elm, contentRefElm, elm.firstChild);
};
var disconnectInstance = (instance, elm) => {
  {
    safeCall(instance, "disconnectedCallback", void 0, elm || instance);
  }
};
var disconnectedCallback = /*#__PURE__*/function () {
  var _ref3 = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (elm) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
      const hostRef = getHostRef(elm);
      {
        if (hostRef == null ? void 0 : hostRef.$rmListeners$) {
          hostRef.$rmListeners$.map(rmListener => rmListener());
          hostRef.$rmListeners$ = void 0;
        }
      }
      if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
        disconnectInstance(hostRef.$lazyInstance$, elm);
      } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
        hostRef.$onReadyPromise$.then(() => disconnectInstance(hostRef.$lazyInstance$, elm));
      }
    }
    if (rootAppliedStyles.has(elm)) {
      rootAppliedStyles.delete(elm);
    }
    if (elm.shadowRoot && rootAppliedStyles.has(elm.shadowRoot)) {
      rootAppliedStyles.delete(elm.shadowRoot);
    }
  });
  return function disconnectedCallback(_x8) {
    return _ref3.apply(this, arguments);
  };
}();

// src/runtime/bootstrap-lazy.ts
var bootstrapLazy = (lazyBundles, options = {}) => {
  var _a;
  if (!win.document) {
    console.warn("Stencil: No document found. Skipping bootstrapping lazy components.");
    return;
  }
  const endBootstrap = createTime();
  const cmpTags = [];
  const exclude = options.exclude || [];
  const customElements2 = win.customElements;
  const head = win.document.head;
  const metaCharset = /* @__PURE__ */head.querySelector("meta[charset]");
  const dataStyles = /* @__PURE__ */win.document.createElement("style");
  const deferredConnectedCallbacks = [];
  let appLoadFallback;
  let isBootstrapping = true;
  Object.assign(plt, options);
  plt.$resourcesUrl$ = new URL(options.resourcesUrl || "./", win.document.baseURI).href;
  {
    plt.$flags$ |= 2 /* appLoaded */;
  }
  {
    hydrateScopedToShadow();
  }
  let hasSlotRelocation = false;
  lazyBundles.map(lazyBundle => {
    lazyBundle[1].map(compactMeta => {
      var _a2, _b, _c;
      const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
        $members$: compactMeta[2],
        $listeners$: compactMeta[3]
      };
      if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
        hasSlotRelocation = true;
      }
      {
        cmpMeta.$members$ = compactMeta[2];
      }
      {
        cmpMeta.$listeners$ = compactMeta[3];
      }
      {
        cmpMeta.$attrsToReflect$ = [];
      }
      {
        cmpMeta.$watchers$ = (_a2 = compactMeta[4]) != null ? _a2 : {};
        cmpMeta.$serializers$ = (_b = compactMeta[5]) != null ? _b : {};
        cmpMeta.$deserializers$ = (_c = compactMeta[6]) != null ? _c : {};
      }
      const tagName = transformTag(cmpMeta.$tagName$);
      const HostElement = class extends HTMLElement {
        ["s-p"];
        ["s-rc"];
        hasRegisteredEventListeners = false;
        // StencilLazyHost
        constructor(self) {
          super(self);
          self = this;
          registerHost(self, cmpMeta);
          if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            {
              if (!self.shadowRoot) {
                createShadowRoot.call(self, cmpMeta);
              } else {
                if (self.shadowRoot.mode !== "open") {
                  throw new Error(`Unable to re-use existing shadow root for ${cmpMeta.$tagName$}! Mode is set to ${self.shadowRoot.mode} but Stencil only supports open shadow roots.`);
                }
              }
            }
          }
        }
        connectedCallback() {
          const hostRef = getHostRef(this);
          if (!hostRef) {
            return;
          }
          if (!this.hasRegisteredEventListeners) {
            this.hasRegisteredEventListeners = true;
            addHostEventListeners(this, hostRef, cmpMeta.$listeners$);
          }
          if (appLoadFallback) {
            clearTimeout(appLoadFallback);
            appLoadFallback = null;
          }
          if (isBootstrapping) {
            deferredConnectedCallbacks.push(this);
          } else {
            plt.jmp(() => connectedCallback(this));
          }
        }
        disconnectedCallback() {
          plt.jmp(() => disconnectedCallback(this));
          plt.raf(() => {
            var _a3;
            const hostRef = getHostRef(this);
            if (!hostRef) {
              return;
            }
            const i2 = deferredConnectedCallbacks.findIndex(host => host === this);
            if (i2 > -1) {
              deferredConnectedCallbacks.splice(i2, 1);
            }
            if (((_a3 = hostRef == null ? void 0 : hostRef.$vnode$) == null ? void 0 : _a3.$elm$) instanceof Node && !hostRef.$vnode$.$elm$.isConnected) {
              delete hostRef.$vnode$.$elm$;
            }
          });
        }
        componentOnReady() {
          var _a3;
          return (_a3 = getHostRef(this)) == null ? void 0 : _a3.$onReadyPromise$;
        }
      };
      if (!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) && cmpMeta.$flags$ & 256 /* hasSlot */) {
        {
          patchPseudoShadowDom(HostElement.prototype);
        }
      } else {
        patchCloneNode(HostElement.prototype);
      }
      cmpMeta.$lazyBundleId$ = lazyBundle[0];
      if (!exclude.includes(tagName) && !customElements2.get(tagName)) {
        cmpTags.push(tagName);
        customElements2.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */));
      }
    });
  });
  if (cmpTags.length > 0) {
    if (hasSlotRelocation) {
      dataStyles.textContent += SLOT_FB_CSS;
    }
    {
      dataStyles.textContent += cmpTags.sort() + HYDRATED_CSS;
    }
    if (dataStyles.innerHTML.length) {
      dataStyles.setAttribute("data-styles", "");
      const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(win.document);
      if (nonce != null) {
        dataStyles.setAttribute("nonce", nonce);
      }
      head.insertBefore(dataStyles, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
  }
  isBootstrapping = false;
  if (deferredConnectedCallbacks.length) {
    deferredConnectedCallbacks.map(host => host.connectedCallback());
  } else {
    {
      plt.jmp(() => appLoadFallback = setTimeout(appDidLoad, 30));
    }
  }
  endBootstrap();
};

// src/runtime/fragment.ts
var Fragment = (_, children) => children;
var addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
  if (listeners && win.document) {
    listeners.map(([flags, name, method]) => {
      const target = getHostListenerTarget(win.document, elm, flags);
      const handler = hostListenerProxy(hostRef, method);
      const opts = hostListenerOpts(flags);
      plt.ael(target, name, handler, opts);
      (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
    });
  }
};
var hostListenerProxy = (hostRef, methodName) => ev => {
  var _a;
  try {
    {
      if (hostRef.$flags$ & 256 /* isListenReady */) {
        (_a = hostRef.$lazyInstance$) == null ? void 0 : _a[methodName](ev);
      } else {
        (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
};
var getHostListenerTarget = (doc, elm, flags) => {
  if (flags & 4 /* TargetDocument */) {
    return doc;
  }
  if (flags & 8 /* TargetWindow */) {
    return win;
  }
  if (flags & 16 /* TargetBody */) {
    return doc.body;
  }
  return elm;
};
var hostListenerOpts = flags => supportsListenerOptions ? {
  passive: (flags & 1 /* Passive */) !== 0,
  capture: (flags & 2 /* Capture */) !== 0
} : (flags & 2 /* Capture */) !== 0;

// src/runtime/nonce.ts
var setNonce = nonce => plt.$nonce$ = nonce;
function transformTag(tag) {
  return tag;
}


/***/ },

/***/ 10575
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-ZjP4CjeZ.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ doc),
/* harmony export */   w: () => (/* binding */ win)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const win = typeof window !== 'undefined' ? window : undefined;
const doc = typeof document !== 'undefined' ? document : undefined;


/***/ },

/***/ 3920
/*!****************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IonicSafeString: () => (/* reexport safe */ _config_TO1rZH52_js__WEBPACK_IMPORTED_MODULE_9__.I),
/* harmony export */   IonicSlides: () => (/* binding */ IonicSlides),
/* harmony export */   LIFECYCLE_DID_ENTER: () => (/* reexport safe */ _index_B_hkiOUh_js__WEBPACK_IMPORTED_MODULE_1__.a),
/* harmony export */   LIFECYCLE_DID_LEAVE: () => (/* reexport safe */ _index_B_hkiOUh_js__WEBPACK_IMPORTED_MODULE_1__.c),
/* harmony export */   LIFECYCLE_WILL_ENTER: () => (/* reexport safe */ _index_B_hkiOUh_js__WEBPACK_IMPORTED_MODULE_1__.L),
/* harmony export */   LIFECYCLE_WILL_LEAVE: () => (/* reexport safe */ _index_B_hkiOUh_js__WEBPACK_IMPORTED_MODULE_1__.b),
/* harmony export */   LIFECYCLE_WILL_UNLOAD: () => (/* reexport safe */ _index_B_hkiOUh_js__WEBPACK_IMPORTED_MODULE_1__.d),
/* harmony export */   LogLevel: () => (/* reexport safe */ _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_8__.L),
/* harmony export */   actionSheetController: () => (/* reexport safe */ _overlays_F8GHPo_e_js__WEBPACK_IMPORTED_MODULE_12__.b),
/* harmony export */   alertController: () => (/* reexport safe */ _overlays_F8GHPo_e_js__WEBPACK_IMPORTED_MODULE_12__.a),
/* harmony export */   componentOnReady: () => (/* reexport safe */ _helpers_Tl8jw6S2_js__WEBPACK_IMPORTED_MODULE_7__.c),
/* harmony export */   createAnimation: () => (/* reexport safe */ _animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   createGesture: () => (/* reexport safe */ _index_CfgBF1SE_js__WEBPACK_IMPORTED_MODULE_5__.createGesture),
/* harmony export */   getIonPageElement: () => (/* reexport safe */ _index_B_hkiOUh_js__WEBPACK_IMPORTED_MODULE_1__.g),
/* harmony export */   getMode: () => (/* reexport safe */ _config_TO1rZH52_js__WEBPACK_IMPORTED_MODULE_9__.g),
/* harmony export */   getPlatforms: () => (/* reexport safe */ _ionic_global_DfbeLwcV_js__WEBPACK_IMPORTED_MODULE_6__.g),
/* harmony export */   getTimeGivenProgression: () => (/* reexport safe */ _cubic_bezier_hHmYLOfE_js__WEBPACK_IMPORTED_MODULE_4__.g),
/* harmony export */   initialize: () => (/* reexport safe */ _ionic_global_DfbeLwcV_js__WEBPACK_IMPORTED_MODULE_6__.i),
/* harmony export */   iosTransitionAnimation: () => (/* reexport safe */ _ios_transition_aMF_pDH_js__WEBPACK_IMPORTED_MODULE_2__.iosTransitionAnimation),
/* harmony export */   isPlatform: () => (/* reexport safe */ _ionic_global_DfbeLwcV_js__WEBPACK_IMPORTED_MODULE_6__.a),
/* harmony export */   loadingController: () => (/* reexport safe */ _overlays_F8GHPo_e_js__WEBPACK_IMPORTED_MODULE_12__.l),
/* harmony export */   mdTransitionAnimation: () => (/* reexport safe */ _md_transition_BEVbfm8j_js__WEBPACK_IMPORTED_MODULE_3__.mdTransitionAnimation),
/* harmony export */   menuController: () => (/* reexport safe */ _index_B2KwgBLx_js__WEBPACK_IMPORTED_MODULE_11__.m),
/* harmony export */   modalController: () => (/* reexport safe */ _overlays_F8GHPo_e_js__WEBPACK_IMPORTED_MODULE_12__.m),
/* harmony export */   openURL: () => (/* reexport safe */ _theme_DiVJyqlX_js__WEBPACK_IMPORTED_MODULE_10__.o),
/* harmony export */   pickerController: () => (/* reexport safe */ _overlays_F8GHPo_e_js__WEBPACK_IMPORTED_MODULE_12__.p),
/* harmony export */   popoverController: () => (/* reexport safe */ _overlays_F8GHPo_e_js__WEBPACK_IMPORTED_MODULE_12__.c),
/* harmony export */   setupConfig: () => (/* reexport safe */ _config_TO1rZH52_js__WEBPACK_IMPORTED_MODULE_9__.s),
/* harmony export */   toastController: () => (/* reexport safe */ _overlays_F8GHPo_e_js__WEBPACK_IMPORTED_MODULE_12__.t)
/* harmony export */ });
/* harmony import */ var _animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-CnGMT4ji.js */ 79663);
/* harmony import */ var _index_B_hkiOUh_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-B-hkiOUh.js */ 79108);
/* harmony import */ var _ios_transition_aMF_pDH_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ios.transition--aMF-pDH.js */ 27057);
/* harmony import */ var _md_transition_BEVbfm8j_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./md.transition-BEVbfm8j.js */ 8253);
/* harmony import */ var _cubic_bezier_hHmYLOfE_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cubic-bezier-hHmYLOfE.js */ 239);
/* harmony import */ var _index_CfgBF1SE_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-CfgBF1SE.js */ 75860);
/* harmony import */ var _ionic_global_DfbeLwcV_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ionic-global-DfbeLwcV.js */ 87158);
/* harmony import */ var _helpers_Tl8jw6S2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers-Tl8jw6S2.js */ 42688);
/* harmony import */ var _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index-IGIE5vDm.js */ 21667);
/* harmony import */ var _config_TO1rZH52_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config-TO1rZH52.js */ 12234);
/* harmony import */ var _theme_DiVJyqlX_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./theme-DiVJyqlX.js */ 70247);
/* harmony import */ var _index_B2KwgBLx_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index-B2KwgBLx.js */ 10826);
/* harmony import */ var _overlays_F8GHPo_e_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./overlays-F8GHPo-e.js */ 98746);
/* harmony import */ var _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index-ZjP4CjeZ.js */ 10575);
/* harmony import */ var _gesture_controller_BTEOs1at_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gesture-controller-BTEOs1at.js */ 70566);
/* harmony import */ var _hardware_back_button_CTe4XmL7_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hardware-back-button-CTe4XmL7.js */ 67098);
/* harmony import */ var _framework_delegate_CyxE1S_P_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./framework-delegate-CyxE1S_P.js */ 22723);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

















const IonicSlides = opts => {
  const {
    swiper,
    extendParams
  } = opts;
  const slidesParams = {
    effect: undefined,
    direction: 'horizontal',
    initialSlide: 0,
    loop: false,
    parallax: false,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 300,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'column',
    slidesPerGroup: 1,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    touchEventsTarget: 'container',
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,
    autoHeight: false,
    setWrapperSize: false,
    zoom: {
      maxRatio: 3,
      minRatio: 1,
      toggle: false
    },
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    touchStartPreventDefault: false,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    threshold: 0,
    touchMoveStopPropagation: true,
    touchReleaseOnEdges: false,
    iOSEdgeSwipeDetection: false,
    iOSEdgeSwipeThreshold: 20,
    resistance: true,
    resistanceRatio: 0.85,
    watchSlidesProgress: false,
    watchSlidesVisibility: false,
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    loopAdditionalSlides: 0,
    noSwiping: true,
    runCallbacksOnInit: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    },
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    },
    fadeEffect: {
      crossFade: false
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide'
    }
  };
  if (swiper.pagination) {
    slidesParams.pagination = {
      type: 'bullets',
      clickable: false,
      hideOnClick: false
    };
  }
  if (swiper.scrollbar) {
    slidesParams.scrollbar = {
      hide: true
    };
  }
  extendParams(slidesParams);
};


/***/ },

/***/ 87158
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ionic-global-DfbeLwcV.js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ isPlatform),
/* harmony export */   b: () => (/* binding */ getIonMode),
/* harmony export */   g: () => (/* binding */ getPlatforms),
/* harmony export */   i: () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-IGIE5vDm.js */ 21667);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

const getPlatforms = win => setupPlatforms(win);
const isPlatform = (winOrPlatform, platform) => {
  if (typeof winOrPlatform === 'string') {
    platform = winOrPlatform;
    winOrPlatform = undefined;
  }
  return getPlatforms(winOrPlatform).includes(platform);
};
const setupPlatforms = (win = window) => {
  if (typeof win === 'undefined') {
    return [];
  }
  win.Ionic = win.Ionic || {};
  let platforms = win.Ionic.platforms;
  if (platforms == null) {
    platforms = win.Ionic.platforms = detectPlatforms(win);
    platforms.forEach(p => win.document.documentElement.classList.add(`plt-${p}`));
  }
  return platforms;
};
const detectPlatforms = win => {
  const customPlatformMethods = _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_0__.e.get('platform');
  return Object.keys(PLATFORMS_MAP).filter(p => {
    const customMethod = customPlatformMethods === null || customPlatformMethods === void 0 ? void 0 : customPlatformMethods[p];
    return typeof customMethod === 'function' ? customMethod(win) : PLATFORMS_MAP[p](win);
  });
};
const isMobileWeb = win => isMobile(win) && !isHybrid(win);
const isIpad = win => {
  // iOS 12 and below
  if (testUserAgent(win, /iPad/i)) {
    return true;
  }
  // iOS 13+
  if (testUserAgent(win, /Macintosh/i) && isMobile(win)) {
    return true;
  }
  return false;
};
const isIphone = win => testUserAgent(win, /iPhone/i);
const isIOS = win => testUserAgent(win, /iPhone|iPod/i) || isIpad(win);
const isAndroid = win => testUserAgent(win, /android|sink/i);
const isAndroidTablet = win => {
  return isAndroid(win) && !testUserAgent(win, /mobile/i);
};
const isPhablet = win => {
  const width = win.innerWidth;
  const height = win.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);
  return smallest > 390 && smallest < 520 && largest > 620 && largest < 800;
};
const isTablet = win => {
  const width = win.innerWidth;
  const height = win.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);
  return isIpad(win) || isAndroidTablet(win) || smallest > 460 && smallest < 820 && largest > 780 && largest < 1400;
};
const isMobile = win => matchMedia(win, '(any-pointer:coarse)');
const isDesktop = win => !isMobile(win);
const isHybrid = win => isCordova(win) || isCapacitorNative(win);
const isCordova = win => !!(win['cordova'] || win['phonegap'] || win['PhoneGap']);
const isCapacitorNative = win => {
  const capacitor = win['Capacitor'];
  // TODO(ROU-11693): Remove when we no longer support Capacitor 2, which does not have isNativePlatform
  return !!((capacitor === null || capacitor === void 0 ? void 0 : capacitor.isNative) || (capacitor === null || capacitor === void 0 ? void 0 : capacitor.isNativePlatform) && !!capacitor.isNativePlatform());
};
const isElectron = win => testUserAgent(win, /electron/i);
const isPWA = win => {
  var _a;
  return !!(((_a = win.matchMedia) === null || _a === void 0 ? void 0 : _a.call(win, '(display-mode: standalone)').matches) || win.navigator.standalone);
};
const testUserAgent = (win, expr) => expr.test(win.navigator.userAgent);
const matchMedia = (win, query) => {
  var _a;
  return (_a = win.matchMedia) === null || _a === void 0 ? void 0 : _a.call(win, query).matches;
};
const PLATFORMS_MAP = {
  ipad: isIpad,
  iphone: isIphone,
  ios: isIOS,
  android: isAndroid,
  phablet: isPhablet,
  tablet: isTablet,
  cordova: isCordova,
  capacitor: isCapacitorNative,
  electron: isElectron,
  pwa: isPWA,
  mobile: isMobile,
  mobileweb: isMobileWeb,
  desktop: isDesktop,
  hybrid: isHybrid
};

// TODO(FW-2832): types
let defaultMode;
const getIonMode = ref => {
  return ref && (0,_index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_0__.o)(ref) || defaultMode;
};
const initialize = (userConfig = {}) => {
  if (typeof window === 'undefined') {
    return;
  }
  const doc = window.document;
  const win = window;
  const Ionic = win.Ionic = win.Ionic || {};
  // create the Ionic.config from raw config object (if it exists)
  // and convert Ionic.config into a ConfigApi that has a get() fn
  const configObj = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (0,_index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_0__.l)(win)), {
    persistConfig: false
  }), Ionic.config), (0,_index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_0__.m)(win)), userConfig);
  _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_0__.e.reset(configObj);
  if (_index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_0__.e.getBoolean('persistConfig')) {
    (0,_index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_0__.n)(win, configObj);
  }
  // Setup platforms
  setupPlatforms(win);
  // first see if the mode was set as an attribute on <html>
  // which could have been set by the user, or by pre-rendering
  // otherwise get the mode via config settings, and fallback to md
  Ionic.config = _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_0__.e;
  Ionic.mode = defaultMode = _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_0__.e.get('mode', doc.documentElement.getAttribute('mode') || (isPlatform(win, 'ios') ? 'ios' : 'md'));
  _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_0__.e.set('mode', defaultMode);
  doc.documentElement.setAttribute('mode', defaultMode);
  doc.documentElement.classList.add(defaultMode);
  if (_index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_0__.e.getBoolean('_testing')) {
    _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_0__.e.set('animated', false);
  }
  const isIonicElement = elm => {
    var _a;
    return (_a = elm.tagName) === null || _a === void 0 ? void 0 : _a.startsWith('ION-');
  };
  const isAllowedIonicModeValue = elmMode => ['ios', 'md'].includes(elmMode);
  (0,_index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_0__.q)(elm => {
    while (elm) {
      const elmMode = elm.mode || elm.getAttribute('mode');
      if (elmMode) {
        if (isAllowedIonicModeValue(elmMode)) {
          return elmMode;
        } else if (isIonicElement(elm)) {
          (0,_index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_0__.f)('Invalid ionic mode: "' + elmMode + '", expected: "ios" or "md"');
        }
      }
      elm = elm.parentElement;
    }
    return defaultMode;
  });
};


/***/ },

/***/ 27057
/*!**********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ios.transition--aMF-pDH.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iosTransitionAnimation: () => (/* binding */ iosTransitionAnimation),
/* harmony export */   shadow: () => (/* binding */ shadow)
/* harmony export */ });
/* harmony import */ var _animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-CnGMT4ji.js */ 79663);
/* harmony import */ var _index_B_hkiOUh_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-B-hkiOUh.js */ 79108);
/* harmony import */ var _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-IGIE5vDm.js */ 21667);
/* harmony import */ var _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-ZjP4CjeZ.js */ 10575);
/* harmony import */ var _helpers_Tl8jw6S2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers-Tl8jw6S2.js */ 42688);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */





const DURATION = 540;
// TODO(FW-2832): types
const getClonedElement = tagName => {
  return document.querySelector(`${tagName}.ion-cloned-element`);
};
const shadow = el => {
  return el.shadowRoot || el;
};
const getLargeTitle = refEl => {
  const tabs = refEl.tagName === 'ION-TABS' ? refEl : refEl.querySelector('ion-tabs');
  const query = 'ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large';
  if (tabs != null) {
    const activeTab = tabs.querySelector('ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)');
    return activeTab != null ? activeTab.querySelector(query) : null;
  }
  return refEl.querySelector(query);
};
const getBackButton = (refEl, backDirection) => {
  const tabs = refEl.tagName === 'ION-TABS' ? refEl : refEl.querySelector('ion-tabs');
  let buttonsList = [];
  if (tabs != null) {
    const activeTab = tabs.querySelector('ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)');
    if (activeTab != null) {
      buttonsList = activeTab.querySelectorAll('ion-buttons');
    }
  } else {
    buttonsList = refEl.querySelectorAll('ion-buttons');
  }
  for (const buttons of buttonsList) {
    const parentHeader = buttons.closest('ion-header');
    const activeHeader = parentHeader && !parentHeader.classList.contains('header-collapse-condense-inactive');
    const backButton = buttons.querySelector('ion-back-button');
    const buttonsCollapse = buttons.classList.contains('buttons-collapse');
    const startSlot = buttons.slot === 'start' || buttons.slot === '';
    if (backButton !== null && startSlot && (buttonsCollapse && activeHeader && backDirection || !buttonsCollapse)) {
      return backButton;
    }
  }
  return null;
};
const createLargeTitleTransition = (rootAnimation, rtl, backDirection, enteringEl, leavingEl) => {
  const enteringBackButton = getBackButton(enteringEl, backDirection);
  const leavingLargeTitle = getLargeTitle(leavingEl);
  const enteringLargeTitle = getLargeTitle(enteringEl);
  const leavingBackButton = getBackButton(leavingEl, backDirection);
  const shouldAnimationForward = enteringBackButton !== null && leavingLargeTitle !== null && !backDirection;
  const shouldAnimationBackward = enteringLargeTitle !== null && leavingBackButton !== null && backDirection;
  if (shouldAnimationForward) {
    const leavingLargeTitleBox = leavingLargeTitle.getBoundingClientRect();
    const enteringBackButtonBox = enteringBackButton.getBoundingClientRect();
    const enteringBackButtonTextEl = shadow(enteringBackButton).querySelector('.button-text');
    // Text element not rendered if developers pass text="" to the back button
    const enteringBackButtonTextBox = enteringBackButtonTextEl === null || enteringBackButtonTextEl === void 0 ? void 0 : enteringBackButtonTextEl.getBoundingClientRect();
    const leavingLargeTitleTextEl = shadow(leavingLargeTitle).querySelector('.toolbar-title');
    const leavingLargeTitleTextBox = leavingLargeTitleTextEl.getBoundingClientRect();
    animateLargeTitle(rootAnimation, rtl, backDirection, leavingLargeTitle, leavingLargeTitleBox, leavingLargeTitleTextBox, enteringBackButtonBox, enteringBackButtonTextEl, enteringBackButtonTextBox);
    animateBackButton(rootAnimation, rtl, backDirection, enteringBackButton, enteringBackButtonBox, enteringBackButtonTextEl, enteringBackButtonTextBox, leavingLargeTitle, leavingLargeTitleTextBox);
  } else if (shouldAnimationBackward) {
    const enteringLargeTitleBox = enteringLargeTitle.getBoundingClientRect();
    const leavingBackButtonBox = leavingBackButton.getBoundingClientRect();
    const leavingBackButtonTextEl = shadow(leavingBackButton).querySelector('.button-text');
    // Text element not rendered if developers pass text="" to the back button
    const leavingBackButtonTextBox = leavingBackButtonTextEl === null || leavingBackButtonTextEl === void 0 ? void 0 : leavingBackButtonTextEl.getBoundingClientRect();
    const enteringLargeTitleTextEl = shadow(enteringLargeTitle).querySelector('.toolbar-title');
    const enteringLargeTitleTextBox = enteringLargeTitleTextEl.getBoundingClientRect();
    animateLargeTitle(rootAnimation, rtl, backDirection, enteringLargeTitle, enteringLargeTitleBox, enteringLargeTitleTextBox, leavingBackButtonBox, leavingBackButtonTextEl, leavingBackButtonTextBox);
    animateBackButton(rootAnimation, rtl, backDirection, leavingBackButton, leavingBackButtonBox, leavingBackButtonTextEl, leavingBackButtonTextBox, enteringLargeTitle, enteringLargeTitleTextBox);
  }
  return {
    forward: shouldAnimationForward,
    backward: shouldAnimationBackward
  };
};
const animateBackButton = (rootAnimation, rtl, backDirection, backButtonEl, backButtonBox, backButtonTextEl, backButtonTextBox, largeTitleEl, largeTitleTextBox) => {
  var _a, _b;
  const BACK_BUTTON_START_OFFSET = rtl ? `calc(100% - ${backButtonBox.right + 4}px)` : `${backButtonBox.left - 4}px`;
  const TEXT_ORIGIN_X = rtl ? 'right' : 'left';
  const ICON_ORIGIN_X = rtl ? 'left' : 'right';
  const CONTAINER_ORIGIN_X = rtl ? 'right' : 'left';
  let WIDTH_SCALE = 1;
  let HEIGHT_SCALE = 1;
  let TEXT_START_SCALE = `scale(${HEIGHT_SCALE})`;
  const TEXT_END_SCALE = 'scale(1)';
  if (backButtonTextEl && backButtonTextBox) {
    /**
     * When the title and back button texts match then they should overlap during the
     * page transition. If the texts do not match up then the back button text scale
     * adjusts to not perfectly match the large title text otherwise the proportions
     * will be incorrect. When the texts match we scale both the width and height to
     * account for font weight differences between the title and back button.
     */
    const doTitleAndButtonTextsMatch = ((_a = backButtonTextEl.textContent) === null || _a === void 0 ? void 0 : _a.trim()) === ((_b = largeTitleEl.textContent) === null || _b === void 0 ? void 0 : _b.trim());
    WIDTH_SCALE = largeTitleTextBox.width / backButtonTextBox.width;
    /**
     * Subtract an offset to account for slight sizing/padding differences between the
     * title and the back button.
     */
    HEIGHT_SCALE = (largeTitleTextBox.height - LARGE_TITLE_SIZE_OFFSET) / backButtonTextBox.height;
    /**
     * Even though we set TEXT_START_SCALE to HEIGHT_SCALE above, we potentially need
     * to re-compute this here since the HEIGHT_SCALE may have changed.
     */
    TEXT_START_SCALE = doTitleAndButtonTextsMatch ? `scale(${WIDTH_SCALE}, ${HEIGHT_SCALE})` : `scale(${HEIGHT_SCALE})`;
  }
  const backButtonIconEl = shadow(backButtonEl).querySelector('ion-icon');
  const backButtonIconBox = backButtonIconEl.getBoundingClientRect();
  /**
   * We need to offset the container by the icon dimensions
   * so that the back button text aligns with the large title
   * text. Otherwise, the back button icon will align with the
   * large title text but the back button text will not.
   */
  const CONTAINER_START_TRANSLATE_X = rtl ? `${backButtonIconBox.width / 2 - (backButtonIconBox.right - backButtonBox.right)}px` : `${backButtonBox.left - backButtonIconBox.width / 2}px`;
  const CONTAINER_END_TRANSLATE_X = rtl ? `-${window.innerWidth - backButtonBox.right}px` : `${backButtonBox.left}px`;
  /**
   * Back button container should be
   * aligned to the top of the title container
   * so the texts overlap as the back button
   * text begins to fade in.
   */
  const CONTAINER_START_TRANSLATE_Y = `${largeTitleTextBox.top}px`;
  /**
   * The cloned back button should align exactly with the
   * real back button on the entering page otherwise there will
   * be a layout shift.
   */
  const CONTAINER_END_TRANSLATE_Y = `${backButtonBox.top}px`;
  /**
   * In the forward direction, the cloned back button
   * container should translate from over the large title
   * to over the back button. In the backward direction,
   * it should translate from over the back button to over
   * the large title.
   */
  const FORWARD_CONTAINER_KEYFRAMES = [{
    offset: 0,
    transform: `translate3d(${CONTAINER_START_TRANSLATE_X}, ${CONTAINER_START_TRANSLATE_Y}, 0)`
  }, {
    offset: 1,
    transform: `translate3d(${CONTAINER_END_TRANSLATE_X}, ${CONTAINER_END_TRANSLATE_Y}, 0)`
  }];
  const BACKWARD_CONTAINER_KEYFRAMES = [{
    offset: 0,
    transform: `translate3d(${CONTAINER_END_TRANSLATE_X}, ${CONTAINER_END_TRANSLATE_Y}, 0)`
  }, {
    offset: 1,
    transform: `translate3d(${CONTAINER_START_TRANSLATE_X}, ${CONTAINER_START_TRANSLATE_Y}, 0)`
  }];
  const CONTAINER_KEYFRAMES = backDirection ? BACKWARD_CONTAINER_KEYFRAMES : FORWARD_CONTAINER_KEYFRAMES;
  /**
   * In the forward direction, the text in the cloned back button
   * should start to be (roughly) the size of the large title
   * and then scale down to be the size of the actual back button.
   * The text should also translate, but that translate is handled
   * by the container keyframes.
   */
  const FORWARD_TEXT_KEYFRAMES = [{
    offset: 0,
    opacity: 0,
    transform: TEXT_START_SCALE
  }, {
    offset: 1,
    opacity: 1,
    transform: TEXT_END_SCALE
  }];
  const BACKWARD_TEXT_KEYFRAMES = [{
    offset: 0,
    opacity: 1,
    transform: TEXT_END_SCALE
  }, {
    offset: 1,
    opacity: 0,
    transform: TEXT_START_SCALE
  }];
  const TEXT_KEYFRAMES = backDirection ? BACKWARD_TEXT_KEYFRAMES : FORWARD_TEXT_KEYFRAMES;
  /**
   * The icon should scale in/out in the second
   * half of the animation. The icon should also
   * translate, but that translate is handled by the
   * container keyframes.
   */
  const FORWARD_ICON_KEYFRAMES = [{
    offset: 0,
    opacity: 0,
    transform: 'scale(0.6)'
  }, {
    offset: 0.6,
    opacity: 0,
    transform: 'scale(0.6)'
  }, {
    offset: 1,
    opacity: 1,
    transform: 'scale(1)'
  }];
  const BACKWARD_ICON_KEYFRAMES = [{
    offset: 0,
    opacity: 1,
    transform: 'scale(1)'
  }, {
    offset: 0.2,
    opacity: 0,
    transform: 'scale(0.6)'
  }, {
    offset: 1,
    opacity: 0,
    transform: 'scale(0.6)'
  }];
  const ICON_KEYFRAMES = backDirection ? BACKWARD_ICON_KEYFRAMES : FORWARD_ICON_KEYFRAMES;
  const enteringBackButtonTextAnimation = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
  const enteringBackButtonIconAnimation = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
  const enteringBackButtonAnimation = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
  const clonedBackButtonEl = getClonedElement('ion-back-button');
  const clonedBackButtonTextEl = shadow(clonedBackButtonEl).querySelector('.button-text');
  const clonedBackButtonIconEl = shadow(clonedBackButtonEl).querySelector('ion-icon');
  clonedBackButtonEl.text = backButtonEl.text;
  clonedBackButtonEl.mode = backButtonEl.mode;
  clonedBackButtonEl.icon = backButtonEl.icon;
  clonedBackButtonEl.color = backButtonEl.color;
  clonedBackButtonEl.disabled = backButtonEl.disabled;
  clonedBackButtonEl.style.setProperty('display', 'block');
  clonedBackButtonEl.style.setProperty('position', 'fixed');
  enteringBackButtonIconAnimation.addElement(clonedBackButtonIconEl);
  enteringBackButtonTextAnimation.addElement(clonedBackButtonTextEl);
  enteringBackButtonAnimation.addElement(clonedBackButtonEl);
  enteringBackButtonAnimation.beforeStyles({
    position: 'absolute',
    top: '0px',
    [CONTAINER_ORIGIN_X]: '0px'
  })
  /**
   * The write hooks must be set on this animation as it is guaranteed to run. Other
   * animations such as the back button text animation will not run if the back button
   * has no visible text.
   */.beforeAddWrite(() => {
    backButtonEl.style.setProperty('display', 'none');
    clonedBackButtonEl.style.setProperty(TEXT_ORIGIN_X, BACK_BUTTON_START_OFFSET);
  }).afterAddWrite(() => {
    backButtonEl.style.setProperty('display', '');
    clonedBackButtonEl.style.setProperty('display', 'none');
    clonedBackButtonEl.style.removeProperty(TEXT_ORIGIN_X);
  }).keyframes(CONTAINER_KEYFRAMES);
  enteringBackButtonTextAnimation.beforeStyles({
    'transform-origin': `${TEXT_ORIGIN_X} top`
  }).keyframes(TEXT_KEYFRAMES);
  enteringBackButtonIconAnimation.beforeStyles({
    'transform-origin': `${ICON_ORIGIN_X} center`
  }).keyframes(ICON_KEYFRAMES);
  rootAnimation.addAnimation([enteringBackButtonTextAnimation, enteringBackButtonIconAnimation, enteringBackButtonAnimation]);
};
const animateLargeTitle = (rootAnimation, rtl, backDirection, largeTitleEl, largeTitleBox, largeTitleTextBox, backButtonBox, backButtonTextEl, backButtonTextBox) => {
  var _a, _b;
  /**
   * The horizontal transform origin for the large title
   */
  const ORIGIN_X = rtl ? 'right' : 'left';
  const TITLE_START_OFFSET = rtl ? `calc(100% - ${largeTitleBox.right}px)` : `${largeTitleBox.left}px`;
  /**
   * The cloned large should align exactly with the
   * real large title on the leaving page otherwise there will
   * be a layout shift.
   */
  const START_TRANSLATE_X = '0px';
  const START_TRANSLATE_Y = `${largeTitleBox.top}px`;
  /**
   * How much to offset the large title translation by.
   * This accounts for differences in sizing between the large
   * title and the back button due to padding and font weight.
   */
  const LARGE_TITLE_TRANSLATION_OFFSET = 8;
  let END_TRANSLATE_X = rtl ? `-${window.innerWidth - backButtonBox.right - LARGE_TITLE_TRANSLATION_OFFSET}px` : `${backButtonBox.x + LARGE_TITLE_TRANSLATION_OFFSET}px`;
  /**
   * How much to scale the large title up/down by.
   */
  let HEIGHT_SCALE = 0.5;
  /**
   * The large title always starts full size.
   */
  const START_SCALE = 'scale(1)';
  /**
   * By default, we don't worry about having the large title scaled to perfectly
   * match the back button because we don't know if the back button's text matches
   * the large title's text.
   */
  let END_SCALE = `scale(${HEIGHT_SCALE})`;
  // Text element not rendered if developers pass text="" to the back button
  if (backButtonTextEl && backButtonTextBox) {
    /**
     * The scaled title should (roughly) overlap the back button. This ensures that
     * the back button and title overlap during the animation. Note that since both
     * elements either fade in or fade out over the course of the animation, neither
     * element will be fully visible on top of the other. As a result, the overlap
     * does not need to be perfect, so approximate values are acceptable here.
     */
    END_TRANSLATE_X = rtl ? `-${window.innerWidth - backButtonTextBox.right - LARGE_TITLE_TRANSLATION_OFFSET}px` : `${backButtonTextBox.x - LARGE_TITLE_TRANSLATION_OFFSET}px`;
    /**
     * In the forward direction, the large title should start at its normal size and
     * then scale down to be (roughly) the size of the back button on the other view.
     * In the backward direction, the large title should start at (roughly) the size
     * of the back button and then scale up to its original size.
     * Note that since both elements either fade in or fade out over the course of the
     * animation, neither element will be fully visible on top of the other. As a result,
     * the overlap  does not need to be perfect, so approximate values are acceptable here.
     */
    /**
     * When the title and back button texts match then they should overlap during the
     * page transition. If the texts do not match up then the large title text scale
     * adjusts to not perfectly match the back button text otherwise the proportions
     * will be incorrect. When the texts match we scale both the width and height to
     * account for font weight differences between the title and back button.
     */
    const doTitleAndButtonTextsMatch = ((_a = backButtonTextEl.textContent) === null || _a === void 0 ? void 0 : _a.trim()) === ((_b = largeTitleEl.textContent) === null || _b === void 0 ? void 0 : _b.trim());
    const WIDTH_SCALE = backButtonTextBox.width / largeTitleTextBox.width;
    HEIGHT_SCALE = backButtonTextBox.height / (largeTitleTextBox.height - LARGE_TITLE_SIZE_OFFSET);
    /**
     * Even though we set TEXT_START_SCALE to HEIGHT_SCALE above, we potentially need
     * to re-compute this here since the HEIGHT_SCALE may have changed.
     */
    END_SCALE = doTitleAndButtonTextsMatch ? `scale(${WIDTH_SCALE}, ${HEIGHT_SCALE})` : `scale(${HEIGHT_SCALE})`;
  }
  /**
   * The midpoints of the back button and the title should align such that the back
   * button and title appear to be centered with each other.
   */
  const backButtonMidPoint = backButtonBox.top + backButtonBox.height / 2;
  const titleMidPoint = largeTitleBox.height * HEIGHT_SCALE / 2;
  const END_TRANSLATE_Y = `${backButtonMidPoint - titleMidPoint}px`;
  const BACKWARDS_KEYFRAMES = [{
    offset: 0,
    opacity: 0,
    transform: `translate3d(${END_TRANSLATE_X}, ${END_TRANSLATE_Y}, 0) ${END_SCALE}`
  }, {
    offset: 0.1,
    opacity: 0
  }, {
    offset: 1,
    opacity: 1,
    transform: `translate3d(${START_TRANSLATE_X}, ${START_TRANSLATE_Y}, 0) ${START_SCALE}`
  }];
  const FORWARDS_KEYFRAMES = [{
    offset: 0,
    opacity: 0.99,
    transform: `translate3d(${START_TRANSLATE_X}, ${START_TRANSLATE_Y}, 0) ${START_SCALE}`
  }, {
    offset: 0.6,
    opacity: 0
  }, {
    offset: 1,
    opacity: 0,
    transform: `translate3d(${END_TRANSLATE_X}, ${END_TRANSLATE_Y}, 0) ${END_SCALE}`
  }];
  const KEYFRAMES = backDirection ? BACKWARDS_KEYFRAMES : FORWARDS_KEYFRAMES;
  const clonedTitleEl = getClonedElement('ion-title');
  const clonedLargeTitleAnimation = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
  clonedTitleEl.innerText = largeTitleEl.innerText;
  clonedTitleEl.size = largeTitleEl.size;
  clonedTitleEl.color = largeTitleEl.color;
  clonedLargeTitleAnimation.addElement(clonedTitleEl);
  clonedLargeTitleAnimation.beforeStyles({
    'transform-origin': `${ORIGIN_X} top`,
    /**
     * Since font size changes will cause
     * the dimension of the large title to change
     * we need to set the cloned title height
     * equal to that of the original large title height.
     */
    height: `${largeTitleBox.height}px`,
    display: '',
    position: 'relative',
    [ORIGIN_X]: TITLE_START_OFFSET
  }).beforeAddWrite(() => {
    largeTitleEl.style.setProperty('opacity', '0');
  }).afterAddWrite(() => {
    largeTitleEl.style.setProperty('opacity', '');
    clonedTitleEl.style.setProperty('display', 'none');
  }).keyframes(KEYFRAMES);
  rootAnimation.addAnimation(clonedLargeTitleAnimation);
};
const iosTransitionAnimation = (navEl, opts) => {
  var _a;
  try {
    const EASING = 'cubic-bezier(0.32,0.72,0,1)';
    const OPACITY = 'opacity';
    const TRANSFORM = 'transform';
    const CENTER = '0%';
    const OFF_OPACITY = 0.8;
    const isRTL = navEl.ownerDocument.dir === 'rtl';
    const OFF_RIGHT = isRTL ? '-99.5%' : '99.5%';
    const OFF_LEFT = isRTL ? '33%' : '-33%';
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    const backDirection = opts.direction === 'back';
    const contentEl = enteringEl.querySelector(':scope > ion-content');
    const headerEls = enteringEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *');
    const enteringToolBarEls = enteringEl.querySelectorAll(':scope > ion-header > ion-toolbar');
    const rootAnimation = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
    const enteringContentAnimation = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
    rootAnimation.addElement(enteringEl).duration(((_a = opts.duration) !== null && _a !== void 0 ? _a : 0) || DURATION).easing(opts.easing || EASING).fill('both').beforeRemoveClass('ion-page-invisible');
    // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
    if (leavingEl && navEl !== null && navEl !== undefined) {
      const navDecorAnimation = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
      navDecorAnimation.addElement(navEl);
      rootAnimation.addAnimation(navDecorAnimation);
    }
    if (!contentEl && enteringToolBarEls.length === 0 && headerEls.length === 0) {
      enteringContentAnimation.addElement(enteringEl.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs')); // REVIEW
    } else {
      enteringContentAnimation.addElement(contentEl); // REVIEW
      enteringContentAnimation.addElement(headerEls);
    }
    rootAnimation.addAnimation(enteringContentAnimation);
    if (backDirection) {
      enteringContentAnimation.beforeClearStyles([OPACITY]).fromTo('transform', `translateX(${OFF_LEFT})`, `translateX(${CENTER})`).fromTo(OPACITY, OFF_OPACITY, 1);
    } else {
      // entering content, forward direction
      enteringContentAnimation.beforeClearStyles([OPACITY]).fromTo('transform', `translateX(${OFF_RIGHT})`, `translateX(${CENTER})`);
    }
    if (contentEl) {
      const enteringTransitionEffectEl = shadow(contentEl).querySelector('.transition-effect');
      if (enteringTransitionEffectEl) {
        const enteringTransitionCoverEl = enteringTransitionEffectEl.querySelector('.transition-cover');
        const enteringTransitionShadowEl = enteringTransitionEffectEl.querySelector('.transition-shadow');
        const enteringTransitionEffect = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
        const enteringTransitionCover = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
        const enteringTransitionShadow = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
        enteringTransitionEffect.addElement(enteringTransitionEffectEl).beforeStyles({
          opacity: '1',
          display: 'block'
        }).afterStyles({
          opacity: '',
          display: ''
        });
        enteringTransitionCover.addElement(enteringTransitionCoverEl) // REVIEW
        .beforeClearStyles([OPACITY]).fromTo(OPACITY, 0, 0.1);
        enteringTransitionShadow.addElement(enteringTransitionShadowEl) // REVIEW
        .beforeClearStyles([OPACITY]).fromTo(OPACITY, 0.03, 0.7);
        enteringTransitionEffect.addAnimation([enteringTransitionCover, enteringTransitionShadow]);
        enteringContentAnimation.addAnimation([enteringTransitionEffect]);
      }
    }
    const enteringContentHasLargeTitle = enteringEl.querySelector('ion-header.header-collapse-condense');
    const {
      forward,
      backward
    } = createLargeTitleTransition(rootAnimation, isRTL, backDirection, enteringEl, leavingEl);
    enteringToolBarEls.forEach(enteringToolBarEl => {
      const enteringToolBar = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
      enteringToolBar.addElement(enteringToolBarEl);
      rootAnimation.addAnimation(enteringToolBar);
      const enteringTitle = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
      enteringTitle.addElement(enteringToolBarEl.querySelector('ion-title')); // REVIEW
      const enteringToolBarButtons = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
      const buttons = Array.from(enteringToolBarEl.querySelectorAll('ion-buttons,[menuToggle]'));
      const parentHeader = enteringToolBarEl.closest('ion-header');
      const inactiveHeader = parentHeader === null || parentHeader === void 0 ? void 0 : parentHeader.classList.contains('header-collapse-condense-inactive');
      let buttonsToAnimate;
      if (backDirection) {
        buttonsToAnimate = buttons.filter(button => {
          const isCollapseButton = button.classList.contains('buttons-collapse');
          return isCollapseButton && !inactiveHeader || !isCollapseButton;
        });
      } else {
        buttonsToAnimate = buttons.filter(button => !button.classList.contains('buttons-collapse'));
      }
      enteringToolBarButtons.addElement(buttonsToAnimate);
      const enteringToolBarItems = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
      enteringToolBarItems.addElement(enteringToolBarEl.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])'));
      const enteringToolBarBg = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
      enteringToolBarBg.addElement(shadow(enteringToolBarEl).querySelector('.toolbar-background')); // REVIEW
      const enteringBackButton = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
      const backButtonEl = enteringToolBarEl.querySelector('ion-back-button');
      if (backButtonEl) {
        enteringBackButton.addElement(backButtonEl);
      }
      enteringToolBar.addAnimation([enteringTitle, enteringToolBarButtons, enteringToolBarItems, enteringToolBarBg, enteringBackButton]);
      enteringToolBarButtons.fromTo(OPACITY, 0.01, 1);
      enteringToolBarItems.fromTo(OPACITY, 0.01, 1);
      if (backDirection) {
        if (!inactiveHeader) {
          enteringTitle.fromTo('transform', `translateX(${OFF_LEFT})`, `translateX(${CENTER})`).fromTo(OPACITY, 0.01, 1);
        }
        enteringToolBarItems.fromTo('transform', `translateX(${OFF_LEFT})`, `translateX(${CENTER})`);
        // back direction, entering page has a back button
        enteringBackButton.fromTo(OPACITY, 0.01, 1);
      } else {
        // entering toolbar, forward direction
        if (!enteringContentHasLargeTitle) {
          enteringTitle.fromTo('transform', `translateX(${OFF_RIGHT})`, `translateX(${CENTER})`).fromTo(OPACITY, 0.01, 1);
        }
        enteringToolBarItems.fromTo('transform', `translateX(${OFF_RIGHT})`, `translateX(${CENTER})`);
        enteringToolBarBg.beforeClearStyles([OPACITY, 'transform']);
        const translucentHeader = parentHeader === null || parentHeader === void 0 ? void 0 : parentHeader.translucent;
        if (!translucentHeader) {
          enteringToolBarBg.fromTo(OPACITY, 0.01, 'var(--opacity)');
        } else {
          enteringToolBarBg.fromTo('transform', isRTL ? 'translateX(-100%)' : 'translateX(100%)', 'translateX(0px)');
        }
        // forward direction, entering page has a back button
        if (!forward) {
          enteringBackButton.fromTo(OPACITY, 0.01, 1);
        }
        if (backButtonEl && !forward) {
          const enteringBackBtnText = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
          enteringBackBtnText.addElement(shadow(backButtonEl).querySelector('.button-text')) // REVIEW
          .fromTo(`transform`, isRTL ? 'translateX(-100px)' : 'translateX(100px)', 'translateX(0px)');
          enteringToolBar.addAnimation(enteringBackBtnText);
        }
      }
    });
    // setup leaving view
    if (leavingEl) {
      const leavingContent = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
      const leavingContentEl = leavingEl.querySelector(':scope > ion-content');
      const leavingToolBarEls = leavingEl.querySelectorAll(':scope > ion-header > ion-toolbar');
      const leavingHeaderEls = leavingEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *');
      if (!leavingContentEl && leavingToolBarEls.length === 0 && leavingHeaderEls.length === 0) {
        leavingContent.addElement(leavingEl.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs')); // REVIEW
      } else {
        leavingContent.addElement(leavingContentEl); // REVIEW
        leavingContent.addElement(leavingHeaderEls);
      }
      rootAnimation.addAnimation(leavingContent);
      if (backDirection) {
        // leaving content, back direction
        leavingContent.beforeClearStyles([OPACITY]).fromTo('transform', `translateX(${CENTER})`, isRTL ? 'translateX(-100%)' : 'translateX(100%)');
        const leavingPage = (0,_index_B_hkiOUh_js__WEBPACK_IMPORTED_MODULE_1__.g)(leavingEl);
        rootAnimation.afterAddWrite(() => {
          if (rootAnimation.getDirection() === 'normal') {
            leavingPage.style.setProperty('display', 'none');
          }
        });
      } else {
        // leaving content, forward direction
        leavingContent.fromTo('transform', `translateX(${CENTER})`, `translateX(${OFF_LEFT})`).fromTo(OPACITY, 1, OFF_OPACITY);
      }
      if (leavingContentEl) {
        const leavingTransitionEffectEl = shadow(leavingContentEl).querySelector('.transition-effect');
        if (leavingTransitionEffectEl) {
          const leavingTransitionCoverEl = leavingTransitionEffectEl.querySelector('.transition-cover');
          const leavingTransitionShadowEl = leavingTransitionEffectEl.querySelector('.transition-shadow');
          const leavingTransitionEffect = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
          const leavingTransitionCover = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
          const leavingTransitionShadow = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
          leavingTransitionEffect.addElement(leavingTransitionEffectEl).beforeStyles({
            opacity: '1',
            display: 'block'
          }).afterStyles({
            opacity: '',
            display: ''
          });
          leavingTransitionCover.addElement(leavingTransitionCoverEl) // REVIEW
          .beforeClearStyles([OPACITY]).fromTo(OPACITY, 0.1, 0);
          leavingTransitionShadow.addElement(leavingTransitionShadowEl) // REVIEW
          .beforeClearStyles([OPACITY]).fromTo(OPACITY, 0.7, 0.03);
          leavingTransitionEffect.addAnimation([leavingTransitionCover, leavingTransitionShadow]);
          leavingContent.addAnimation([leavingTransitionEffect]);
        }
      }
      leavingToolBarEls.forEach(leavingToolBarEl => {
        const leavingToolBar = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
        leavingToolBar.addElement(leavingToolBarEl);
        const leavingTitle = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
        leavingTitle.addElement(leavingToolBarEl.querySelector('ion-title')); // REVIEW
        const leavingToolBarButtons = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
        const buttons = leavingToolBarEl.querySelectorAll('ion-buttons,[menuToggle]');
        const parentHeader = leavingToolBarEl.closest('ion-header');
        const inactiveHeader = parentHeader === null || parentHeader === void 0 ? void 0 : parentHeader.classList.contains('header-collapse-condense-inactive');
        const buttonsToAnimate = Array.from(buttons).filter(button => {
          const isCollapseButton = button.classList.contains('buttons-collapse');
          return isCollapseButton && !inactiveHeader || !isCollapseButton;
        });
        leavingToolBarButtons.addElement(buttonsToAnimate);
        const leavingToolBarItems = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
        const leavingToolBarItemEls = leavingToolBarEl.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])');
        if (leavingToolBarItemEls.length > 0) {
          leavingToolBarItems.addElement(leavingToolBarItemEls);
        }
        const leavingToolBarBg = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
        leavingToolBarBg.addElement(shadow(leavingToolBarEl).querySelector('.toolbar-background')); // REVIEW
        const leavingBackButton = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
        const backButtonEl = leavingToolBarEl.querySelector('ion-back-button');
        if (backButtonEl) {
          leavingBackButton.addElement(backButtonEl);
        }
        leavingToolBar.addAnimation([leavingTitle, leavingToolBarButtons, leavingToolBarItems, leavingBackButton, leavingToolBarBg]);
        rootAnimation.addAnimation(leavingToolBar);
        // fade out leaving toolbar items
        leavingBackButton.fromTo(OPACITY, 0.99, 0);
        leavingToolBarButtons.fromTo(OPACITY, 0.99, 0);
        leavingToolBarItems.fromTo(OPACITY, 0.99, 0);
        if (backDirection) {
          if (!inactiveHeader) {
            // leaving toolbar, back direction
            leavingTitle.fromTo('transform', `translateX(${CENTER})`, isRTL ? 'translateX(-100%)' : 'translateX(100%)').fromTo(OPACITY, 0.99, 0);
          }
          leavingToolBarItems.fromTo('transform', `translateX(${CENTER})`, isRTL ? 'translateX(-100%)' : 'translateX(100%)');
          leavingToolBarBg.beforeClearStyles([OPACITY, 'transform']);
          // leaving toolbar, back direction, and there's no entering toolbar
          // should just slide out, no fading out
          const translucentHeader = parentHeader === null || parentHeader === void 0 ? void 0 : parentHeader.translucent;
          if (!translucentHeader) {
            leavingToolBarBg.fromTo(OPACITY, 'var(--opacity)', 0);
          } else {
            leavingToolBarBg.fromTo('transform', 'translateX(0px)', isRTL ? 'translateX(-100%)' : 'translateX(100%)');
          }
          if (backButtonEl && !backward) {
            const leavingBackBtnText = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
            leavingBackBtnText.addElement(shadow(backButtonEl).querySelector('.button-text')) // REVIEW
            .fromTo('transform', `translateX(${CENTER})`, `translateX(${(isRTL ? -124 : 124) + 'px'})`);
            leavingToolBar.addAnimation(leavingBackBtnText);
          }
        } else {
          // leaving toolbar, forward direction
          if (!inactiveHeader) {
            leavingTitle.fromTo('transform', `translateX(${CENTER})`, `translateX(${OFF_LEFT})`).fromTo(OPACITY, 0.99, 0).afterClearStyles([TRANSFORM, OPACITY]);
          }
          leavingToolBarItems.fromTo('transform', `translateX(${CENTER})`, `translateX(${OFF_LEFT})`).afterClearStyles([TRANSFORM, OPACITY]);
          leavingBackButton.afterClearStyles([OPACITY]);
          leavingTitle.afterClearStyles([OPACITY]);
          leavingToolBarButtons.afterClearStyles([OPACITY]);
        }
      });
    }
    return rootAnimation;
  } catch (err) {
    throw err;
  }
};
/**
 * The scale of the back button during the animation
 * is computed based on the scale of the large title
 * and vice versa. However, we need to account for slight
 * variations in the size of the large title due to
 * padding and font weight. This value should be used to subtract
 * a small amount from the large title height when computing scales
 * to get more accurate scale results.
 */
const LARGE_TITLE_SIZE_OFFSET = 10;


/***/ },

/***/ 56629
/*!*****************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/loader.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defineCustomElements: () => (/* binding */ defineCustomElements),
/* harmony export */   setNonce: () => (/* reexport safe */ _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_1__.s)
/* harmony export */ });
/* harmony import */ var _var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-IGIE5vDm.js */ 21667);
/* harmony import */ var _app_globals_DhZjtldk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-globals-DhZjtldk.js */ 23882);
/* harmony import */ var _ionic_global_DfbeLwcV_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ionic-global-DfbeLwcV.js */ 87158);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const defineCustomElements = /*#__PURE__*/function () {
  var _ref = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (win, options) {
    if (typeof window === 'undefined') return undefined;
    yield (0,_app_globals_DhZjtldk_js__WEBPACK_IMPORTED_MODULE_2__.g)();
    return (0,_index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_1__.b)(JSON.parse("[[\"ion-menu_3\",[[289,\"ion-menu-button\",{\"color\":[513],\"disabled\":[4],\"menu\":[1],\"autoHide\":[4,\"auto-hide\"],\"type\":[1],\"visible\":[32]},[[16,\"ionMenuChange\",\"visibilityChanged\"],[16,\"ionSplitPaneVisible\",\"visibilityChanged\"]]],[289,\"ion-menu\",{\"contentId\":[513,\"content-id\"],\"menuId\":[513,\"menu-id\"],\"type\":[1025],\"disabled\":[1028],\"side\":[513],\"swipeGesture\":[4,\"swipe-gesture\"],\"maxEdgeStart\":[2,\"max-edge-start\"],\"isPaneVisible\":[32],\"isEndSide\":[32],\"isOpen\":[64],\"isActive\":[64],\"open\":[64],\"close\":[64],\"toggle\":[64],\"setOpen\":[64]},[[16,\"ionSplitPaneVisible\",\"onSplitPaneChanged\"],[2,\"click\",\"onBackdropClick\"]],{\"type\":[{\"typeChanged\":0}],\"disabled\":[{\"disabledChanged\":0}],\"side\":[{\"sideChanged\":0}],\"swipeGesture\":[{\"swipeGestureChanged\":0}]}],[257,\"ion-menu-toggle\",{\"menu\":[1],\"autoHide\":[4,\"auto-hide\"],\"visible\":[32]},[[16,\"ionMenuChange\",\"visibilityChanged\"],[16,\"ionSplitPaneVisible\",\"visibilityChanged\"]]]]],[\"ion-input-password-toggle\",[[33,\"ion-input-password-toggle\",{\"color\":[513],\"showIcon\":[1,\"show-icon\"],\"hideIcon\":[1,\"hide-icon\"],\"type\":[1025]},null,{\"type\":[{\"onTypeChange\":0}]}]]],[\"ion-fab_3\",[[289,\"ion-fab-button\",{\"color\":[513],\"activated\":[4],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"target\":[1],\"show\":[4],\"translucent\":[4],\"type\":[1],\"size\":[1],\"closeIcon\":[1,\"close-icon\"]}],[257,\"ion-fab\",{\"horizontal\":[1],\"vertical\":[1],\"edge\":[4],\"activated\":[1028],\"close\":[64],\"toggle\":[64]},null,{\"activated\":[{\"activatedChanged\":0}]}],[257,\"ion-fab-list\",{\"activated\":[4],\"side\":[1]},null,{\"activated\":[{\"activatedChanged\":0}]}]]],[\"ion-refresher_2\",[[0,\"ion-refresher-content\",{\"pullingIcon\":[1025,\"pulling-icon\"],\"pullingText\":[1,\"pulling-text\"],\"refreshingSpinner\":[1025,\"refreshing-spinner\"],\"refreshingText\":[1,\"refreshing-text\"]}],[32,\"ion-refresher\",{\"pullMin\":[2,\"pull-min\"],\"pullMax\":[2,\"pull-max\"],\"closeDuration\":[1,\"close-duration\"],\"snapbackDuration\":[1,\"snapback-duration\"],\"pullFactor\":[2,\"pull-factor\"],\"disabled\":[4],\"nativeRefresher\":[32],\"state\":[32],\"complete\":[64],\"cancel\":[64],\"getProgress\":[64]},null,{\"disabled\":[{\"disabledChanged\":0}]}]]],[\"ion-back-button\",[[33,\"ion-back-button\",{\"color\":[513],\"defaultHref\":[1025,\"default-href\"],\"disabled\":[516],\"icon\":[1],\"text\":[1],\"type\":[1],\"routerAnimation\":[16]}]]],[\"ion-toast\",[[33,\"ion-toast\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"hasController\":[4,\"has-controller\"],\"color\":[513],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"header\":[1],\"layout\":[1],\"message\":[1],\"keyboardClose\":[4,\"keyboard-close\"],\"position\":[1],\"positionAnchor\":[1,\"position-anchor\"],\"buttons\":[16],\"translucent\":[4],\"animated\":[4],\"icon\":[1],\"htmlAttributes\":[16],\"swipeGesture\":[1,\"swipe-gesture\"],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"revealContentToScreenReader\":[32],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},null,{\"swipeGesture\":[{\"swipeGestureChanged\":0}],\"isOpen\":[{\"onIsOpenChange\":0}],\"trigger\":[{\"triggerChanged\":0}]}]]],[\"ion-card_5\",[[289,\"ion-card\",{\"color\":[513],\"button\":[4],\"type\":[1],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"target\":[1]}],[32,\"ion-card-content\"],[289,\"ion-card-header\",{\"color\":[513],\"translucent\":[4]}],[289,\"ion-card-subtitle\",{\"color\":[513]}],[289,\"ion-card-title\",{\"color\":[513]}]]],[\"ion-item-option_3\",[[289,\"ion-item-option\",{\"color\":[513],\"disabled\":[4],\"download\":[1],\"expandable\":[4],\"href\":[1],\"rel\":[1],\"target\":[1],\"type\":[1]}],[32,\"ion-item-options\",{\"side\":[1],\"fireSwipeEvent\":[64]}],[0,\"ion-item-sliding\",{\"disabled\":[4],\"state\":[32],\"getOpenAmount\":[64],\"getSlidingRatio\":[64],\"open\":[64],\"close\":[64],\"closeOpened\":[64]},null,{\"disabled\":[{\"disabledChanged\":0}]}]]],[\"ion-accordion_2\",[[305,\"ion-accordion\",{\"value\":[1],\"disabled\":[4],\"readonly\":[4],\"toggleIcon\":[1,\"toggle-icon\"],\"toggleIconSlot\":[1,\"toggle-icon-slot\"],\"state\":[32],\"isNext\":[32],\"isPrevious\":[32],\"hasInteracted\":[32]},null,{\"value\":[{\"valueChanged\":0}]}],[289,\"ion-accordion-group\",{\"animated\":[4],\"multiple\":[4],\"value\":[1025],\"disabled\":[4],\"readonly\":[4],\"expand\":[1],\"requestAccordionToggle\":[64],\"getAccordions\":[64]},[[0,\"keydown\",\"onKeydown\"]],{\"value\":[{\"valueChanged\":0}],\"disabled\":[{\"disabledChanged\":0}],\"readonly\":[{\"readonlyChanged\":0}]}]]],[\"ion-infinite-scroll_2\",[[32,\"ion-infinite-scroll-content\",{\"loadingSpinner\":[1025,\"loading-spinner\"],\"loadingText\":[1,\"loading-text\"]}],[0,\"ion-infinite-scroll\",{\"threshold\":[1],\"disabled\":[4],\"position\":[1],\"isLoading\":[32],\"complete\":[64]},null,{\"threshold\":[{\"thresholdChanged\":0}],\"disabled\":[{\"disabledChanged\":0}]}]]],[\"ion-reorder_2\",[[289,\"ion-reorder\",null,[[2,\"click\",\"onClick\"]]],[0,\"ion-reorder-group\",{\"disabled\":[4],\"state\":[32],\"complete\":[64]},null,{\"disabled\":[{\"disabledChanged\":0}]}]]],[\"ion-segment_2\",[[289,\"ion-segment-button\",{\"contentId\":[513,\"content-id\"],\"disabled\":[1028],\"layout\":[1],\"type\":[1],\"value\":[8],\"checked\":[32],\"setFocus\":[64]},null,{\"value\":[{\"valueChanged\":0}]}],[289,\"ion-segment\",{\"color\":[513],\"disabled\":[4],\"scrollable\":[4],\"swipeGesture\":[4,\"swipe-gesture\"],\"value\":[1032],\"selectOnFocus\":[4,\"select-on-focus\"],\"activated\":[32]},[[16,\"ionSegmentViewScroll\",\"handleSegmentViewScroll\"],[0,\"keydown\",\"onKeyDown\"]],{\"color\":[{\"colorChanged\":0}],\"swipeGesture\":[{\"swipeGestureChanged\":0}],\"value\":[{\"valueChanged\":0}],\"disabled\":[{\"disabledChanged\":0}]}]]],[\"ion-chip\",[[289,\"ion-chip\",{\"color\":[513],\"outline\":[4],\"disabled\":[4]}]]],[\"ion-input\",[[294,\"ion-input\",{\"color\":[513],\"autocapitalize\":[1],\"autocomplete\":[1],\"autocorrect\":[1],\"autofocus\":[4],\"clearInput\":[4,\"clear-input\"],\"clearInputIcon\":[1,\"clear-input-icon\"],\"clearOnEdit\":[4,\"clear-on-edit\"],\"counter\":[4],\"counterFormatter\":[16],\"debounce\":[2],\"disabled\":[516],\"enterkeyhint\":[1],\"errorText\":[1,\"error-text\"],\"fill\":[1],\"inputmode\":[1],\"helperText\":[1,\"helper-text\"],\"label\":[1],\"labelPlacement\":[1,\"label-placement\"],\"max\":[8],\"maxlength\":[2],\"min\":[8],\"minlength\":[2],\"multiple\":[4],\"name\":[1],\"pattern\":[1],\"placeholder\":[1],\"readonly\":[516],\"required\":[4],\"shape\":[1],\"spellcheck\":[4],\"step\":[1],\"type\":[1],\"value\":[1032],\"hasFocus\":[32],\"isInvalid\":[32],\"setFocus\":[64],\"getInputElement\":[64]},[[2,\"click\",\"onClickCapture\"]],{\"debounce\":[{\"debounceChanged\":0}],\"type\":[{\"onTypeChange\":0}],\"value\":[{\"valueChanged\":0}],\"dir\":[{\"onDirChanged\":0}]}]]],[\"ion-searchbar\",[[34,\"ion-searchbar\",{\"color\":[513],\"animated\":[4],\"autocapitalize\":[1],\"autocomplete\":[1],\"autocorrect\":[1],\"cancelButtonIcon\":[1,\"cancel-button-icon\"],\"cancelButtonText\":[1,\"cancel-button-text\"],\"clearIcon\":[1,\"clear-icon\"],\"debounce\":[2],\"disabled\":[4],\"inputmode\":[1],\"enterkeyhint\":[1],\"maxlength\":[2],\"minlength\":[2],\"name\":[1],\"placeholder\":[1],\"searchIcon\":[1,\"search-icon\"],\"showCancelButton\":[1,\"show-cancel-button\"],\"showClearButton\":[1,\"show-clear-button\"],\"spellcheck\":[4],\"type\":[1],\"value\":[1025],\"focused\":[32],\"noAnimate\":[32],\"setFocus\":[64],\"getInputElement\":[64]},null,{\"lang\":[{\"onLangChanged\":0}],\"dir\":[{\"onDirChanged\":0}],\"debounce\":[{\"debounceChanged\":0}],\"value\":[{\"valueChanged\":0}],\"showCancelButton\":[{\"showCancelButtonChanged\":0}]}]]],[\"ion-toggle\",[[289,\"ion-toggle\",{\"color\":[513],\"name\":[1],\"checked\":[1028],\"disabled\":[4],\"errorText\":[1,\"error-text\"],\"helperText\":[1,\"helper-text\"],\"value\":[1],\"enableOnOffLabels\":[4,\"enable-on-off-labels\"],\"labelPlacement\":[1,\"label-placement\"],\"justify\":[1],\"alignment\":[1],\"required\":[4],\"activated\":[32],\"isInvalid\":[32],\"hintTextId\":[32]},null,{\"disabled\":[{\"disabledChanged\":0}]}]]],[\"ion-nav_2\",[[257,\"ion-nav\",{\"delegate\":[16],\"swipeGesture\":[1028,\"swipe-gesture\"],\"animated\":[4],\"animation\":[16],\"rootParams\":[16],\"root\":[1],\"push\":[64],\"insert\":[64],\"insertPages\":[64],\"pop\":[64],\"popTo\":[64],\"popToRoot\":[64],\"removeIndex\":[64],\"setRoot\":[64],\"setPages\":[64],\"setRouteId\":[64],\"getRouteId\":[64],\"getActive\":[64],\"getByIndex\":[64],\"canGoBack\":[64],\"getPrevious\":[64],\"getLength\":[64]},null,{\"swipeGesture\":[{\"swipeGestureChanged\":0}],\"root\":[{\"rootChanged\":0}]}],[0,\"ion-nav-link\",{\"component\":[1],\"componentProps\":[16],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16]}]]],[\"ion-tab_2\",[[257,\"ion-tab\",{\"active\":[1028],\"delegate\":[16],\"tab\":[1],\"component\":[1],\"setActive\":[64]},null,{\"active\":[{\"changeActive\":0}]}],[257,\"ion-tabs\",{\"useRouter\":[1028,\"use-router\"],\"selectedTab\":[32],\"select\":[64],\"getTab\":[64],\"getSelected\":[64],\"setRouteId\":[64],\"getRouteId\":[64]}]]],[\"ion-textarea\",[[294,\"ion-textarea\",{\"color\":[513],\"autocapitalize\":[1],\"autofocus\":[4],\"clearOnEdit\":[4,\"clear-on-edit\"],\"debounce\":[2],\"disabled\":[516],\"fill\":[1],\"inputmode\":[1],\"enterkeyhint\":[1],\"maxlength\":[2],\"minlength\":[2],\"name\":[1],\"placeholder\":[1],\"readonly\":[516],\"required\":[4],\"spellcheck\":[4],\"cols\":[514],\"rows\":[2],\"wrap\":[1],\"autoGrow\":[516,\"auto-grow\"],\"value\":[1025],\"counter\":[4],\"counterFormatter\":[16],\"errorText\":[1,\"error-text\"],\"helperText\":[1,\"helper-text\"],\"label\":[1],\"labelPlacement\":[1,\"label-placement\"],\"shape\":[1],\"hasFocus\":[32],\"isInvalid\":[32],\"setFocus\":[64],\"getInputElement\":[64]},[[2,\"click\",\"onClickCapture\"]],{\"debounce\":[{\"debounceChanged\":0}],\"value\":[{\"valueChanged\":0}],\"dir\":[{\"onDirChanged\":0}]}]]],[\"ion-backdrop\",[[33,\"ion-backdrop\",{\"visible\":[4],\"tappable\":[4],\"stopPropagation\":[4,\"stop-propagation\"]},[[2,\"click\",\"onMouseDown\"]]]]],[\"ion-loading\",[[34,\"ion-loading\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"hasController\":[4,\"has-controller\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"message\":[1],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"showBackdrop\":[4,\"show-backdrop\"],\"spinner\":[1025],\"translucent\":[4],\"animated\":[4],\"htmlAttributes\":[16],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},null,{\"isOpen\":[{\"onIsOpenChange\":0}],\"trigger\":[{\"triggerChanged\":0}]}]]],[\"ion-breadcrumb_2\",[[289,\"ion-breadcrumb\",{\"collapsed\":[4],\"last\":[4],\"showCollapsedIndicator\":[4,\"show-collapsed-indicator\"],\"color\":[1],\"active\":[4],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"separator\":[4],\"target\":[1],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16]}],[289,\"ion-breadcrumbs\",{\"color\":[513],\"maxItems\":[2,\"max-items\"],\"itemsBeforeCollapse\":[2,\"items-before-collapse\"],\"itemsAfterCollapse\":[2,\"items-after-collapse\"],\"collapsed\":[32],\"activeChanged\":[32]},[[0,\"collapsedClick\",\"onCollapsedClick\"]],{\"maxItems\":[{\"maxItemsChanged\":0}],\"itemsBeforeCollapse\":[{\"maxItemsChanged\":0}],\"itemsAfterCollapse\":[{\"maxItemsChanged\":0}]}]]],[\"ion-tab-bar_2\",[[289,\"ion-tab-button\",{\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"layout\":[1025],\"selected\":[1028],\"tab\":[1],\"target\":[1]},[[8,\"ionTabBarChanged\",\"onTabBarChanged\"]]],[289,\"ion-tab-bar\",{\"color\":[513],\"selectedTab\":[1,\"selected-tab\"],\"translucent\":[4],\"keyboardVisible\":[32]},null,{\"selectedTab\":[{\"selectedTabChanged\":0}]}]]],[\"ion-datetime-button\",[[289,\"ion-datetime-button\",{\"color\":[513],\"disabled\":[516],\"datetime\":[1],\"datetimePresentation\":[32],\"dateText\":[32],\"timeText\":[32],\"datetimeActive\":[32],\"selectedButton\":[32]}]]],[\"ion-route_4\",[[0,\"ion-route\",{\"url\":[1],\"component\":[1],\"componentProps\":[16],\"beforeLeave\":[16],\"beforeEnter\":[16]},null,{\"url\":[{\"onUpdate\":0}],\"component\":[{\"onUpdate\":0}],\"componentProps\":[{\"onComponentProps\":0}]}],[0,\"ion-route-redirect\",{\"from\":[1],\"to\":[1]},null,{\"from\":[{\"propDidChange\":0}],\"to\":[{\"propDidChange\":0}]}],[0,\"ion-router\",{\"root\":[1],\"useHash\":[4,\"use-hash\"],\"canTransition\":[64],\"push\":[64],\"back\":[64],\"printDebug\":[64],\"navChanged\":[64]},[[8,\"popstate\",\"onPopState\"],[4,\"ionBackButton\",\"onBackButton\"]]],[257,\"ion-router-link\",{\"color\":[513],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"target\":[1]}]]],[\"ion-avatar_3\",[[289,\"ion-avatar\"],[289,\"ion-badge\",{\"color\":[513]}],[257,\"ion-thumbnail\"]]],[\"ion-col_3\",[[257,\"ion-col\",{\"offset\":[1],\"offsetXs\":[1,\"offset-xs\"],\"offsetSm\":[1,\"offset-sm\"],\"offsetMd\":[1,\"offset-md\"],\"offsetLg\":[1,\"offset-lg\"],\"offsetXl\":[1,\"offset-xl\"],\"pull\":[1],\"pullXs\":[1,\"pull-xs\"],\"pullSm\":[1,\"pull-sm\"],\"pullMd\":[1,\"pull-md\"],\"pullLg\":[1,\"pull-lg\"],\"pullXl\":[1,\"pull-xl\"],\"push\":[1],\"pushXs\":[1,\"push-xs\"],\"pushSm\":[1,\"push-sm\"],\"pushMd\":[1,\"push-md\"],\"pushLg\":[1,\"push-lg\"],\"pushXl\":[1,\"push-xl\"],\"size\":[1],\"sizeXs\":[1,\"size-xs\"],\"sizeSm\":[1,\"size-sm\"],\"sizeMd\":[1,\"size-md\"],\"sizeLg\":[1,\"size-lg\"],\"sizeXl\":[1,\"size-xl\"]},[[9,\"resize\",\"onResize\"]]],[257,\"ion-grid\",{\"fixed\":[4]}],[257,\"ion-row\"]]],[\"ion-img\",[[1,\"ion-img\",{\"alt\":[1],\"src\":[1],\"loadSrc\":[32],\"loadError\":[32]},null,{\"src\":[{\"srcChanged\":0}]}]]],[\"ion-input-otp\",[[294,\"ion-input-otp\",{\"autocapitalize\":[1],\"color\":[513],\"disabled\":[516],\"fill\":[1],\"inputmode\":[1],\"length\":[2],\"pattern\":[1],\"readonly\":[516],\"separators\":[1],\"shape\":[1],\"size\":[1],\"type\":[1],\"value\":[1032],\"inputValues\":[32],\"hasFocus\":[32],\"previousInputValues\":[32],\"setFocus\":[64]},null,{\"value\":[{\"valueChanged\":0}],\"separators\":[{\"processSeparators\":0}],\"length\":[{\"processSeparators\":0}]}]]],[\"ion-progress-bar\",[[33,\"ion-progress-bar\",{\"type\":[1],\"reversed\":[4],\"value\":[2],\"buffer\":[2],\"color\":[513]}]]],[\"ion-range\",[[289,\"ion-range\",{\"color\":[513],\"debounce\":[2],\"name\":[1],\"label\":[1],\"dualKnobs\":[4,\"dual-knobs\"],\"min\":[2],\"max\":[2],\"pin\":[4],\"pinFormatter\":[16],\"snaps\":[4],\"step\":[2],\"ticks\":[4],\"activeBarStart\":[1026,\"active-bar-start\"],\"disabled\":[4],\"value\":[1026],\"labelPlacement\":[1,\"label-placement\"],\"ratioA\":[32],\"ratioB\":[32],\"activatedKnob\":[32],\"focusedKnob\":[32],\"hoveredKnob\":[32],\"pressedKnob\":[32]},null,{\"debounce\":[{\"debounceChanged\":0}],\"min\":[{\"minChanged\":0}],\"max\":[{\"maxChanged\":0}],\"step\":[{\"stepChanged\":0}],\"activeBarStart\":[{\"activeBarStartChanged\":0}],\"disabled\":[{\"disabledChanged\":0}],\"value\":[{\"valueChanged\":0}]}]]],[\"ion-segment-content\",[[257,\"ion-segment-content\"]]],[\"ion-segment-view\",[[289,\"ion-segment-view\",{\"disabled\":[4],\"swipeGesture\":[4,\"swipe-gesture\"],\"isManualScroll\":[32],\"setContent\":[64]},[[1,\"scroll\",\"handleScroll\"],[1,\"touchstart\",\"handleScrollStart\"],[1,\"touchend\",\"handleTouchEnd\"]]]]],[\"ion-split-pane\",[[289,\"ion-split-pane\",{\"contentId\":[513,\"content-id\"],\"disabled\":[4],\"when\":[8],\"visible\":[32],\"isVisible\":[64]},null,{\"visible\":[{\"visibleChanged\":0}],\"disabled\":[{\"updateState\":0}],\"when\":[{\"updateState\":0}]}]]],[\"ion-text\",[[257,\"ion-text\",{\"color\":[513]}]]],[\"ion-select-modal\",[[34,\"ion-select-modal\",{\"header\":[1],\"cancelText\":[1,\"cancel-text\"],\"multiple\":[4],\"options\":[16]}]]],[\"ion-datetime_3\",[[289,\"ion-datetime\",{\"color\":[1],\"name\":[1],\"disabled\":[4],\"formatOptions\":[16],\"readonly\":[4],\"isDateEnabled\":[16],\"showAdjacentDays\":[4,\"show-adjacent-days\"],\"min\":[1025],\"max\":[1025],\"presentation\":[1],\"cancelText\":[1,\"cancel-text\"],\"doneText\":[1,\"done-text\"],\"clearText\":[1,\"clear-text\"],\"yearValues\":[8,\"year-values\"],\"monthValues\":[8,\"month-values\"],\"dayValues\":[8,\"day-values\"],\"hourValues\":[8,\"hour-values\"],\"minuteValues\":[8,\"minute-values\"],\"locale\":[1],\"firstDayOfWeek\":[2,\"first-day-of-week\"],\"titleSelectedDatesFormatter\":[16],\"multiple\":[4],\"highlightedDates\":[16],\"value\":[1025],\"showDefaultTitle\":[4,\"show-default-title\"],\"showDefaultButtons\":[4,\"show-default-buttons\"],\"showClearButton\":[4,\"show-clear-button\"],\"showDefaultTimeLabel\":[4,\"show-default-time-label\"],\"hourCycle\":[1,\"hour-cycle\"],\"size\":[1],\"preferWheel\":[4,\"prefer-wheel\"],\"showMonthAndYear\":[32],\"activeParts\":[32],\"workingParts\":[32],\"isTimePopoverOpen\":[32],\"forceRenderDate\":[32],\"confirm\":[64],\"reset\":[64],\"cancel\":[64]},null,{\"formatOptions\":[{\"formatOptionsChanged\":0}],\"disabled\":[{\"disabledChanged\":0}],\"min\":[{\"minChanged\":0}],\"max\":[{\"maxChanged\":0}],\"presentation\":[{\"presentationChanged\":0}],\"yearValues\":[{\"yearValuesChanged\":0}],\"monthValues\":[{\"monthValuesChanged\":0}],\"dayValues\":[{\"dayValuesChanged\":0}],\"hourValues\":[{\"hourValuesChanged\":0}],\"minuteValues\":[{\"minuteValuesChanged\":0}],\"value\":[{\"valueChanged\":0}]}],[34,\"ion-picker-legacy\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"hasController\":[4,\"has-controller\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"buttons\":[16],\"columns\":[16],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"showBackdrop\":[4,\"show-backdrop\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"animated\":[4],\"htmlAttributes\":[16],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"presented\":[32],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64],\"getColumn\":[64]},null,{\"isOpen\":[{\"onIsOpenChange\":0}],\"trigger\":[{\"triggerChanged\":0}]}],[32,\"ion-picker-legacy-column\",{\"col\":[16]},null,{\"col\":[{\"colChanged\":0}]}]]],[\"ion-action-sheet\",[[34,\"ion-action-sheet\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"hasController\":[4,\"has-controller\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"buttons\":[16],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"translucent\":[4],\"animated\":[4],\"htmlAttributes\":[16],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"activeRadioId\":[32],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},[[0,\"keydown\",\"onKeydown\"]],{\"buttons\":[{\"buttonsChanged\":0}],\"isOpen\":[{\"onIsOpenChange\":0}],\"trigger\":[{\"triggerChanged\":0}]}]]],[\"ion-alert\",[[34,\"ion-alert\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"hasController\":[4,\"has-controller\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"cssClass\":[1,\"css-class\"],\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"message\":[1],\"buttons\":[16],\"inputs\":[1040],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"translucent\":[4],\"animated\":[4],\"htmlAttributes\":[16],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},[[4,\"keydown\",\"onKeydown\"]],{\"isOpen\":[{\"onIsOpenChange\":0}],\"trigger\":[{\"triggerChanged\":0}],\"buttons\":[{\"buttonsChanged\":0}],\"inputs\":[{\"inputsChanged\":0}]}]]],[\"ion-modal\",[[289,\"ion-modal\",{\"hasController\":[4,\"has-controller\"],\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"breakpoints\":[16],\"expandToScroll\":[4,\"expand-to-scroll\"],\"initialBreakpoint\":[2,\"initial-breakpoint\"],\"backdropBreakpoint\":[2,\"backdrop-breakpoint\"],\"handle\":[4],\"handleBehavior\":[1,\"handle-behavior\"],\"component\":[1],\"componentProps\":[16],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"showBackdrop\":[4,\"show-backdrop\"],\"animated\":[4],\"presentingElement\":[16],\"htmlAttributes\":[16],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"keepContentsMounted\":[4,\"keep-contents-mounted\"],\"focusTrap\":[4,\"focus-trap\"],\"canDismiss\":[4,\"can-dismiss\"],\"isSheetModal\":[32],\"presented\":[32],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64],\"setCurrentBreakpoint\":[64],\"getCurrentBreakpoint\":[64]},[[9,\"resize\",\"onWindowResize\"]],{\"isOpen\":[{\"onIsOpenChange\":0}],\"trigger\":[{\"triggerChanged\":0}]}]]],[\"ion-picker\",[[289,\"ion-picker\",{\"exitInputMode\":[64]},[[1,\"touchstart\",\"preventTouchStartPropagation\"]]]]],[\"ion-picker-column\",[[257,\"ion-picker-column\",{\"disabled\":[4],\"value\":[1032],\"color\":[513],\"numericInput\":[4,\"numeric-input\"],\"ariaLabel\":[32],\"isActive\":[32],\"scrollActiveItemIntoView\":[64],\"setValue\":[64],\"setFocus\":[64]},null,{\"aria-label\":[{\"ariaLabelChanged\":0}],\"value\":[{\"valueChange\":0}]}]]],[\"ion-picker-column-option\",[[289,\"ion-picker-column-option\",{\"disabled\":[4],\"value\":[8],\"color\":[513],\"ariaLabel\":[32]},null,{\"aria-label\":[{\"onAriaLabelChange\":0}]}]]],[\"ion-popover\",[[289,\"ion-popover\",{\"hasController\":[4,\"has-controller\"],\"delegate\":[16],\"overlayIndex\":[2,\"overlay-index\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"component\":[1],\"componentProps\":[16],\"keyboardClose\":[4,\"keyboard-close\"],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"event\":[8],\"showBackdrop\":[4,\"show-backdrop\"],\"translucent\":[4],\"animated\":[4],\"htmlAttributes\":[16],\"triggerAction\":[1,\"trigger-action\"],\"trigger\":[1],\"size\":[1],\"dismissOnSelect\":[4,\"dismiss-on-select\"],\"reference\":[1],\"side\":[1],\"alignment\":[1025],\"arrow\":[4],\"isOpen\":[4,\"is-open\"],\"keyboardEvents\":[4,\"keyboard-events\"],\"focusTrap\":[4,\"focus-trap\"],\"keepContentsMounted\":[4,\"keep-contents-mounted\"],\"presented\":[32],\"presentFromTrigger\":[64],\"present\":[64],\"dismiss\":[64],\"getParentPopover\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},null,{\"trigger\":[{\"onTriggerChange\":0}],\"triggerAction\":[{\"onTriggerChange\":0}],\"isOpen\":[{\"onIsOpenChange\":0}]}]]],[\"ion-checkbox\",[[289,\"ion-checkbox\",{\"color\":[513],\"name\":[1],\"checked\":[1028],\"indeterminate\":[1028],\"disabled\":[4],\"errorText\":[1,\"error-text\"],\"helperText\":[1,\"helper-text\"],\"value\":[8],\"labelPlacement\":[1,\"label-placement\"],\"justify\":[1],\"alignment\":[1],\"required\":[4],\"isInvalid\":[32],\"hasLabelContent\":[32],\"hintTextId\":[32],\"setFocus\":[64]}]]],[\"ion-item_8\",[[289,\"ion-item-divider\",{\"color\":[513],\"sticky\":[4]}],[32,\"ion-item-group\"],[289,\"ion-note\",{\"color\":[513]}],[1,\"ion-skeleton-text\",{\"animated\":[4]}],[294,\"ion-label\",{\"color\":[513],\"position\":[1],\"noAnimate\":[32]},null,{\"color\":[{\"colorChanged\":0}],\"position\":[{\"positionChanged\":0}]}],[289,\"ion-list-header\",{\"color\":[513],\"lines\":[1]}],[289,\"ion-item\",{\"color\":[513],\"button\":[4],\"detail\":[4],\"detailIcon\":[1,\"detail-icon\"],\"disabled\":[516],\"download\":[1],\"href\":[1],\"rel\":[1],\"lines\":[1],\"routerAnimation\":[16],\"routerDirection\":[1,\"router-direction\"],\"target\":[1],\"type\":[1],\"multipleInputs\":[32],\"focusable\":[32],\"isInteractive\":[32]},[[0,\"ionColor\",\"labelColorChanged\"],[0,\"ionStyle\",\"itemStyle\"]],{\"button\":[{\"buttonChanged\":0}]}],[32,\"ion-list\",{\"lines\":[1],\"inset\":[4],\"closeSlidingItems\":[64]}]]],[\"ion-app_8\",[[0,\"ion-app\",{\"setFocus\":[64]}],[292,\"ion-footer\",{\"collapse\":[1],\"translucent\":[4],\"keyboardVisible\":[32]}],[257,\"ion-router-outlet\",{\"mode\":[1025],\"delegate\":[16],\"animated\":[4],\"animation\":[16],\"swipeHandler\":[16],\"commit\":[64],\"setRouteId\":[64],\"getRouteId\":[64]},null,{\"swipeHandler\":[{\"swipeHandlerChanged\":0}]}],[257,\"ion-content\",{\"color\":[513],\"fullscreen\":[4],\"fixedSlotPlacement\":[1,\"fixed-slot-placement\"],\"forceOverscroll\":[1028,\"force-overscroll\"],\"scrollX\":[4,\"scroll-x\"],\"scrollY\":[4,\"scroll-y\"],\"scrollEvents\":[4,\"scroll-events\"],\"recalculateDimensions\":[64],\"getScrollElement\":[64],\"getBackgroundElement\":[64],\"scrollToTop\":[64],\"scrollToBottom\":[64],\"scrollByPoint\":[64],\"scrollToPoint\":[64]},[[9,\"resize\",\"onResize\"]]],[292,\"ion-header\",{\"collapse\":[1],\"translucent\":[4]}],[289,\"ion-title\",{\"color\":[513],\"size\":[1]},null,{\"size\":[{\"sizeChanged\":0}]}],[289,\"ion-toolbar\",{\"color\":[513]},[[0,\"ionStyle\",\"childrenStyle\"]]],[294,\"ion-buttons\",{\"collapse\":[4]}]]],[\"ion-select_3\",[[289,\"ion-select\",{\"cancelText\":[1,\"cancel-text\"],\"color\":[513],\"compareWith\":[1,\"compare-with\"],\"disabled\":[4],\"fill\":[1],\"errorText\":[1,\"error-text\"],\"helperText\":[1,\"helper-text\"],\"interface\":[1],\"interfaceOptions\":[8,\"interface-options\"],\"justify\":[1],\"label\":[1],\"labelPlacement\":[1,\"label-placement\"],\"multiple\":[4],\"name\":[1],\"okText\":[1,\"ok-text\"],\"placeholder\":[1],\"selectedText\":[1,\"selected-text\"],\"toggleIcon\":[1,\"toggle-icon\"],\"expandedIcon\":[1,\"expanded-icon\"],\"shape\":[1],\"value\":[1032],\"required\":[4],\"isExpanded\":[32],\"hasFocus\":[32],\"isInvalid\":[32],\"hintTextId\":[32],\"open\":[64]},null,{\"disabled\":[{\"styleChanged\":0}],\"isExpanded\":[{\"styleChanged\":0}],\"placeholder\":[{\"styleChanged\":0}],\"value\":[{\"styleChanged\":0}]}],[1,\"ion-select-option\",{\"disabled\":[4],\"value\":[8]}],[34,\"ion-select-popover\",{\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"message\":[1],\"multiple\":[4],\"options\":[16]}]]],[\"ion-spinner\",[[1,\"ion-spinner\",{\"color\":[513],\"duration\":[2],\"name\":[1],\"paused\":[4]}]]],[\"ion-radio_2\",[[289,\"ion-radio\",{\"color\":[513],\"name\":[1],\"disabled\":[4],\"value\":[8],\"labelPlacement\":[1,\"label-placement\"],\"justify\":[1],\"alignment\":[1],\"checked\":[32],\"buttonTabindex\":[32],\"setFocus\":[64],\"setButtonTabindex\":[64]},null,{\"value\":[{\"valueChanged\":0}]}],[292,\"ion-radio-group\",{\"allowEmptySelection\":[4,\"allow-empty-selection\"],\"compareWith\":[1,\"compare-with\"],\"name\":[1],\"value\":[1032],\"helperText\":[1,\"helper-text\"],\"errorText\":[1,\"error-text\"],\"isInvalid\":[32],\"hintTextId\":[32],\"setFocus\":[64]},[[4,\"keydown\",\"onKeydown\"]],{\"value\":[{\"valueChanged\":0}]}]]],[\"ion-ripple-effect\",[[1,\"ion-ripple-effect\",{\"type\":[1],\"addRipple\":[64]}]]],[\"ion-button_2\",[[289,\"ion-button\",{\"color\":[513],\"buttonType\":[1025,\"button-type\"],\"disabled\":[516],\"expand\":[513],\"fill\":[1537],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"download\":[1],\"href\":[1],\"rel\":[1],\"shape\":[513],\"size\":[513],\"strong\":[4],\"target\":[1],\"type\":[1],\"form\":[1],\"isCircle\":[32]},null,{\"disabled\":[{\"disabledChanged\":0}],\"aria-checked\":[{\"onAriaChanged\":0}],\"aria-label\":[{\"onAriaChanged\":0}],\"aria-pressed\":[{\"onAriaChanged\":0}]}],[1,\"ion-icon\",{\"mode\":[1025],\"color\":[1],\"ios\":[1],\"md\":[1],\"flipRtl\":[4,\"flip-rtl\"],\"name\":[513],\"src\":[1],\"icon\":[8],\"size\":[1],\"lazy\":[4],\"sanitize\":[4],\"svgContent\":[32],\"isVisible\":[32]},null,{\"name\":[{\"loadIcon\":0}],\"src\":[{\"loadIcon\":0}],\"icon\":[{\"loadIcon\":0}],\"ios\":[{\"loadIcon\":0}],\"md\":[{\"loadIcon\":0}]}]]]]"), options);
  });
  return function defineCustomElements(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();


/***/ },

/***/ 8253
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/md.transition-BEVbfm8j.js ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mdTransitionAnimation: () => (/* binding */ mdTransitionAnimation)
/* harmony export */ });
/* harmony import */ var _animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-CnGMT4ji.js */ 79663);
/* harmony import */ var _index_B_hkiOUh_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-B-hkiOUh.js */ 79108);
/* harmony import */ var _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-IGIE5vDm.js */ 21667);
/* harmony import */ var _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-ZjP4CjeZ.js */ 10575);
/* harmony import */ var _helpers_Tl8jw6S2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers-Tl8jw6S2.js */ 42688);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */





const mdTransitionAnimation = (_, opts) => {
  var _a, _b, _c;
  const OFF_BOTTOM = '40px';
  const CENTER = '0px';
  const backDirection = opts.direction === 'back';
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  const ionPageElement = (0,_index_B_hkiOUh_js__WEBPACK_IMPORTED_MODULE_1__.g)(enteringEl);
  const enteringToolbarEle = ionPageElement.querySelector('ion-toolbar');
  const rootTransition = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
  rootTransition.addElement(ionPageElement).fill('both').beforeRemoveClass('ion-page-invisible');
  // animate the component itself
  if (backDirection) {
    rootTransition.duration(((_a = opts.duration) !== null && _a !== void 0 ? _a : 0) || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
  } else {
    rootTransition.duration(((_b = opts.duration) !== null && _b !== void 0 ? _b : 0) || 280).easing('cubic-bezier(0.36,0.66,0.04,1)').fromTo('transform', `translateY(${OFF_BOTTOM})`, `translateY(${CENTER})`).fromTo('opacity', 0.01, 1);
  }
  // Animate toolbar if it's there
  if (enteringToolbarEle) {
    const enteringToolBar = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
    enteringToolBar.addElement(enteringToolbarEle);
    rootTransition.addAnimation(enteringToolBar);
  }
  // setup leaving view
  if (leavingEl && backDirection) {
    // leaving content
    rootTransition.duration(((_c = opts.duration) !== null && _c !== void 0 ? _c : 0) || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
    const leavingPage = (0,_animation_CnGMT4ji_js__WEBPACK_IMPORTED_MODULE_0__.c)();
    leavingPage.addElement((0,_index_B_hkiOUh_js__WEBPACK_IMPORTED_MODULE_1__.g)(leavingEl)).onFinish(currentStep => {
      if (currentStep === 1 && leavingPage.elements.length > 0) {
        leavingPage.elements[0].style.setProperty('display', 'none');
      }
    }).fromTo('transform', `translateY(${CENTER})`, `translateY(${OFF_BOTTOM})`).fromTo('opacity', 1, 0);
    rootTransition.addAnimation(leavingPage);
  }
  return rootTransition;
};


/***/ },

/***/ 98746
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/overlays-F8GHPo-e.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ BACKDROP),
/* harmony export */   F: () => (/* binding */ FOCUS_TRAP_DISABLE_CLASS),
/* harmony export */   G: () => (/* binding */ GESTURE),
/* harmony export */   O: () => (/* binding */ OVERLAY_GESTURE_PRIORITY),
/* harmony export */   a: () => (/* binding */ alertController),
/* harmony export */   b: () => (/* binding */ actionSheetController),
/* harmony export */   c: () => (/* binding */ popoverController),
/* harmony export */   d: () => (/* binding */ createDelegateController),
/* harmony export */   e: () => (/* binding */ createTriggerController),
/* harmony export */   f: () => (/* binding */ present),
/* harmony export */   g: () => (/* binding */ dismiss),
/* harmony export */   h: () => (/* binding */ eventMethod),
/* harmony export */   i: () => (/* binding */ isCancel),
/* harmony export */   j: () => (/* binding */ prepareOverlay),
/* harmony export */   k: () => (/* binding */ setOverlayId),
/* harmony export */   l: () => (/* binding */ loadingController),
/* harmony export */   m: () => (/* binding */ modalController),
/* harmony export */   n: () => (/* binding */ focusFirstDescendant),
/* harmony export */   o: () => (/* binding */ getPresentedOverlay),
/* harmony export */   p: () => (/* binding */ pickerController),
/* harmony export */   q: () => (/* binding */ focusLastDescendant),
/* harmony export */   s: () => (/* binding */ safeCall),
/* harmony export */   t: () => (/* binding */ toastController)
/* harmony export */ });
/* harmony import */ var _var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-ZjP4CjeZ.js */ 10575);
/* harmony import */ var _helpers_Tl8jw6S2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-Tl8jw6S2.js */ 42688);
/* harmony import */ var _hardware_back_button_CTe4XmL7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hardware-back-button-CTe4XmL7.js */ 67098);
/* harmony import */ var _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-IGIE5vDm.js */ 21667);
/* harmony import */ var _ionic_global_DfbeLwcV_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ionic-global-DfbeLwcV.js */ 87158);
/* harmony import */ var _framework_delegate_CyxE1S_P_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./framework-delegate-CyxE1S_P.js */ 22723);
/* harmony import */ var _gesture_controller_BTEOs1at_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gesture-controller-BTEOs1at.js */ 70566);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */








/**
 * This query string selects elements that
 * are eligible to receive focus. We select
 * interactive elements that meet the following
 * criteria:
 * 1. Element does not have a negative tabindex
 * 2. Element does not have `hidden`
 * 3. Element does not have `disabled` for non-Ionic components.
 * 4. Element does not have `disabled` or `disabled="true"` for Ionic components.
 * Note: We need this distinction because `disabled="false"` is
 * valid usage for the disabled property on ion-button.
 */
const focusableQueryString = '[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), ion-checkbox:not([tabindex^="-"]):not([hidden]):not([disabled]), ion-radio:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])';
/**
 * Focuses the first descendant in a context
 * that can receive focus. If none exists,
 * a fallback element will be focused.
 * This fallback is typically an ancestor
 * container such as a menu or overlay so focus does not
 * leave the container we are trying to trap focus in.
 *
 * If no fallback is specified then we focus the container itself.
 */
const focusFirstDescendant = (ref, fallbackElement) => {
  const firstInput = ref.querySelector(focusableQueryString);
  focusElementInContext(firstInput, fallbackElement !== null && fallbackElement !== void 0 ? fallbackElement : ref);
};
/**
 * Focuses the last descendant in a context
 * that can receive focus. If none exists,
 * a fallback element will be focused.
 * This fallback is typically an ancestor
 * container such as a menu or overlay so focus does not
 * leave the container we are trying to trap focus in.
 *
 * If no fallback is specified then we focus the container itself.
 */
const focusLastDescendant = (ref, fallbackElement) => {
  const inputs = Array.from(ref.querySelectorAll(focusableQueryString));
  const lastInput = inputs.length > 0 ? inputs[inputs.length - 1] : null;
  focusElementInContext(lastInput, fallbackElement !== null && fallbackElement !== void 0 ? fallbackElement : ref);
};
/**
 * Focuses a particular element in a context. If the element
 * doesn't have anything focusable associated with it then
 * a fallback element will be focused.
 *
 * This fallback is typically an ancestor
 * container such as a menu or overlay so focus does not
 * leave the container we are trying to trap focus in.
 * This should be used instead of the focus() method
 * on most elements because the focusable element
 * may not be the host element.
 *
 * For example, if an ion-button should be focused
 * then we should actually focus the native <button>
 * element inside of ion-button's shadow root, not
 * the host element itself.
 */
const focusElementInContext = (hostToFocus, fallbackElement) => {
  let elementToFocus = hostToFocus;
  const shadowRoot = hostToFocus === null || hostToFocus === void 0 ? void 0 : hostToFocus.shadowRoot;
  if (shadowRoot) {
    // If there are no inner focusable elements, just focus the host element.
    elementToFocus = shadowRoot.querySelector(focusableQueryString) || hostToFocus;
  }
  if (elementToFocus) {
    const radioGroup = elementToFocus.closest('ion-radio-group');
    if (radioGroup) {
      radioGroup.setFocus();
    } else {
      (0,_helpers_Tl8jw6S2_js__WEBPACK_IMPORTED_MODULE_2__.n)(elementToFocus);
    }
  } else {
    // Focus fallback element instead of letting focus escape
    fallbackElement.focus();
  }
};
let lastOverlayIndex = 0;
let lastId = 0;
const activeAnimations = new WeakMap();
/**
 * Determines if the overlay's backdrop is always blocking (no background interaction).
 * Returns false if showBackdrop=false or backdropBreakpoint > 0.
 */
const isBackdropAlwaysBlocking = el => {
  var _a;
  return el.showBackdrop !== false && !(((_a = el.backdropBreakpoint) !== null && _a !== void 0 ? _a : 0) > 0);
};
const createController = tagName => {
  return {
    create(options) {
      return createOverlay(tagName, options);
    },
    dismiss(data, role, id) {
      return dismissOverlay(document, data, role, tagName, id);
    },
    getTop() {
      return (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return getPresentedOverlay(document, tagName);
      })();
    }
  };
};
const alertController = /*@__PURE__*/createController('ion-alert');
const actionSheetController = /*@__PURE__*/createController('ion-action-sheet');
const loadingController = /*@__PURE__*/createController('ion-loading');
const modalController = /*@__PURE__*/createController('ion-modal');
/**
 * @deprecated Use the inline ion-picker component instead.
 */
const pickerController = /*@__PURE__*/createController('ion-picker-legacy');
const popoverController = /*@__PURE__*/createController('ion-popover');
const toastController = /*@__PURE__*/createController('ion-toast');
/**
 * Prepares the overlay element to be presented.
 */
const prepareOverlay = el => {
  if (typeof document !== 'undefined') {
    /**
     * Adds a single instance of event listeners for application behaviors:
     *
     * - Escape Key behavior to dismiss an overlay
     * - Trapping focus within an overlay
     * - Back button behavior to dismiss an overlay
     *
     * This only occurs when the first overlay is created.
     */
    connectListeners(document);
  }
  const overlayIndex = lastOverlayIndex++;
  /**
   * overlayIndex is used in the overlay components to set a zIndex.
   * This ensures that the most recently presented overlay will be
   * on top.
   */
  el.overlayIndex = overlayIndex;
};
/**
 * Assigns an incrementing id to an overlay element, that does not
 * already have an id assigned to it.
 *
 * Used to track unique instances of an overlay element.
 */
const setOverlayId = el => {
  if (!el.hasAttribute('id')) {
    el.id = `ion-overlay-${++lastId}`;
  }
  return el.id;
};
const createOverlay = (tagName, opts) => {
  // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
  if (typeof window !== 'undefined' && typeof window.customElements !== 'undefined') {
    return window.customElements.whenDefined(tagName).then(() => {
      const element = document.createElement(tagName);
      element.classList.add('overlay-hidden');
      /**
       * Convert the passed in overlay options into props
       * that get passed down into the new overlay.
       */
      Object.assign(element, Object.assign(Object.assign({}, opts), {
        hasController: true
      }));
      // append the overlay element to the document body
      getAppRoot(document).appendChild(element);
      return new Promise(resolve => (0,_helpers_Tl8jw6S2_js__WEBPACK_IMPORTED_MODULE_2__.c)(element, resolve));
    });
  }
  return Promise.resolve();
};
const isOverlayHidden = overlay => overlay.classList.contains('overlay-hidden');
/**
 * Focuses a particular element in an overlay. If the element
 * doesn't have anything focusable associated with it then
 * the overlay itself will be focused.
 * This should be used instead of the focus() method
 * on most elements because the focusable element
 * may not be the host element.
 *
 * For example, if an ion-button should be focused
 * then we should actually focus the native <button>
 * element inside of ion-button's shadow root, not
 * the host element itself.
 */
const focusElementInOverlay = (hostToFocus, overlay) => {
  let elementToFocus = hostToFocus;
  const shadowRoot = hostToFocus === null || hostToFocus === void 0 ? void 0 : hostToFocus.shadowRoot;
  if (shadowRoot) {
    // If there are no inner focusable elements, just focus the host element.
    elementToFocus = shadowRoot.querySelector(focusableQueryString) || hostToFocus;
  }
  if (elementToFocus) {
    (0,_helpers_Tl8jw6S2_js__WEBPACK_IMPORTED_MODULE_2__.n)(elementToFocus);
  } else {
    // Focus overlay instead of letting focus escape
    overlay.focus();
  }
};
/**
 * Traps keyboard focus inside of overlay components.
 * Based on https://w3c.github.io/aria-practices/examples/dialog-modal/alertdialog.html
 * This includes the following components: Action Sheet, Alert, Loading, Modal,
 * Picker, and Popover.
 * Should NOT include: Toast
 */
const trapKeyboardFocus = (ev, doc) => {
  const lastOverlay = getPresentedOverlay(doc, 'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover');
  const target = ev.target;
  /**
   * If no active overlay, ignore this event.
   *
   * If this component uses the shadow dom,
   * this global listener is pointless
   * since it will not catch the focus
   * traps as they are inside the shadow root.
   * We need to add a listener to the shadow root
   * itself to ensure the focus trap works.
   */
  if (!lastOverlay || !target) {
    return;
  }
  /**
   * If the ion-disable-focus-trap class
   * is present on an overlay, then this component
   * instance has opted out of focus trapping.
   * An example of this is when the sheet modal
   * has a backdrop that is disabled. The content
   * behind the sheet should be focusable until
   * the backdrop is enabled.
   */
  if (lastOverlay.classList.contains(FOCUS_TRAP_DISABLE_CLASS)) {
    return;
  }
  const trapScopedFocus = () => {
    /**
     * If we are focusing the overlay, clear
     * the last focused element so that hitting
     * tab activates the first focusable element
     * in the overlay wrapper.
     */
    if (lastOverlay === target) {
      lastOverlay.lastFocus = undefined;
      /**
       * Toasts can be presented from an overlay.
       * However, focus should still be returned to
       * the overlay when clicking a toast. Normally,
       * focus would be returned to the last focusable
       * descendant in the overlay which may not always be
       * the button that the toast was presented from. In this case,
       * the focus may be returned to an unexpected element.
       * To account for this, we make sure to return focus to the
       * last focused element in the overlay if focus is
       * moved to the toast.
       */
    } else if (target.tagName === 'ION-TOAST') {
      focusElementInOverlay(lastOverlay.lastFocus, lastOverlay);
      /**
       * Otherwise, we must be focusing an element
       * inside of the overlay. The two possible options
       * here are an input/button/etc or the ion-focus-trap
       * element. The focus trap element is used to prevent
       * the keyboard focus from leaving the overlay when
       * using Tab or screen assistants.
       */
    } else {
      /**
       * We do not want to focus the traps, so get the overlay
       * wrapper element as the traps live outside of the wrapper.
       */
      const overlayRoot = (0,_helpers_Tl8jw6S2_js__WEBPACK_IMPORTED_MODULE_2__.g)(lastOverlay);
      if (!overlayRoot.contains(target)) {
        return;
      }
      const overlayWrapper = overlayRoot.querySelector('.ion-overlay-wrapper');
      if (!overlayWrapper) {
        return;
      }
      /**
       * If the target is inside the wrapper, let the browser
       * focus as normal and keep a log of the last focused element.
       * Additionally, if the backdrop was tapped we should not
       * move focus back inside the wrapper as that could cause
       * an interactive elements focus state to activate.
       */
      if (overlayWrapper.contains(target) || target === overlayRoot.querySelector('ion-backdrop')) {
        lastOverlay.lastFocus = target;
      } else {
        /**
         * Otherwise, we must have focused one of the focus traps.
         * We need to wrap the focus to either the first element
         * or the last element.
         */
        /**
         * Once we call `focusFirstDescendant` and focus the first
         * descendant, another focus event will fire which will
         * cause `lastOverlay.lastFocus` to be updated before
         * we can run the code after that. We will cache the value
         * here to avoid that.
         */
        const lastFocus = lastOverlay.lastFocus;
        // Focus the first element in the overlay wrapper
        focusFirstDescendant(overlayWrapper, lastOverlay);
        /**
         * If the cached last focused element is the
         * same as the active element, then we need
         * to wrap focus to the last descendant. This happens
         * when the first descendant is focused, and the user
         * presses Shift + Tab. The previous line will focus
         * the same descendant again (the first one), causing
         * last focus to equal the active element.
         */
        if (lastFocus === doc.activeElement) {
          focusLastDescendant(overlayWrapper, lastOverlay);
        }
        lastOverlay.lastFocus = doc.activeElement;
      }
    }
  };
  const trapShadowFocus = () => {
    /**
     * If the target is inside the wrapper, let the browser
     * focus as normal and keep a log of the last focused element.
     */
    if (lastOverlay.contains(target)) {
      lastOverlay.lastFocus = target;
      /**
       * Toasts can be presented from an overlay.
       * However, focus should still be returned to
       * the overlay when clicking a toast. Normally,
       * focus would be returned to the last focusable
       * descendant in the overlay which may not always be
       * the button that the toast was presented from. In this case,
       * the focus may be returned to an unexpected element.
       * To account for this, we make sure to return focus to the
       * last focused element in the overlay if focus is
       * moved to the toast.
       */
    } else if (target.tagName === 'ION-TOAST') {
      focusElementInOverlay(lastOverlay.lastFocus, lastOverlay);
    } else {
      /**
       * Otherwise, we are about to have focus
       * go out of the overlay. We need to wrap
       * the focus to either the first element
       * or the last element.
       */
      /**
       * Once we call `focusFirstDescendant` and focus the first
       * descendant, another focus event will fire which will
       * cause `lastOverlay.lastFocus` to be updated before
       * we can run the code after that. We will cache the value
       * here to avoid that.
       */
      const lastFocus = lastOverlay.lastFocus;
      // Focus the first element in the overlay wrapper
      focusFirstDescendant(lastOverlay);
      /**
       * If the cached last focused element is the
       * same as the active element, then we need
       * to wrap focus to the last descendant. This happens
       * when the first descendant is focused, and the user
       * presses Shift + Tab. The previous line will focus
       * the same descendant again (the first one), causing
       * last focus to equal the active element.
       */
      if (lastFocus === doc.activeElement) {
        focusLastDescendant(lastOverlay);
      }
      lastOverlay.lastFocus = doc.activeElement;
    }
  };
  if (lastOverlay.shadowRoot) {
    trapShadowFocus();
  } else {
    trapScopedFocus();
  }
};
const connectListeners = doc => {
  if (lastOverlayIndex === 0) {
    lastOverlayIndex = 1;
    doc.addEventListener('focus', ev => {
      trapKeyboardFocus(ev, doc);
    }, true);
    // handle back-button click
    doc.addEventListener('ionBackButton', ev => {
      const lastOverlay = getPresentedOverlay(doc);
      if (lastOverlay === null || lastOverlay === void 0 ? void 0 : lastOverlay.backdropDismiss) {
        ev.detail.register(_hardware_back_button_CTe4XmL7_js__WEBPACK_IMPORTED_MODULE_3__.OVERLAY_BACK_BUTTON_PRIORITY, () => {
          /**
           * Do not return this promise otherwise
           * the hardware back button utility will
           * be blocked until the overlay dismisses.
           * This is important for a modal with canDismiss.
           * If the application presents a confirmation alert
           * in the "canDismiss" callback, then it will be impossible
           * to use the hardware back button to dismiss the alert
           * dialog because the hardware back button utility
           * is blocked on waiting for the modal to dismiss.
           */
          lastOverlay.dismiss(undefined, BACKDROP);
        });
      }
    });
    /**
     * Handle ESC to close overlay.
     * CloseWatcher also handles pressing the Esc
     * key, so if a browser supports CloseWatcher then
     * this behavior will be handled via the ionBackButton
     * event.
     */
    if (!(0,_hardware_back_button_CTe4XmL7_js__WEBPACK_IMPORTED_MODULE_3__.shouldUseCloseWatcher)()) {
      doc.addEventListener('keydown', ev => {
        if (ev.key === 'Escape') {
          const lastOverlay = getPresentedOverlay(doc);
          if (lastOverlay === null || lastOverlay === void 0 ? void 0 : lastOverlay.backdropDismiss) {
            lastOverlay.dismiss(undefined, BACKDROP);
          }
        }
      });
    }
  }
};
const dismissOverlay = (doc, data, role, overlayTag, id) => {
  const overlay = getPresentedOverlay(doc, overlayTag, id);
  if (!overlay) {
    return Promise.reject('overlay does not exist');
  }
  return overlay.dismiss(data, role);
};
/**
 * Returns a list of all overlays in the DOM even if they are not presented.
 */
const getOverlays = (doc, selector) => {
  if (selector === undefined) {
    selector = 'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover,ion-toast';
  }
  return Array.from(doc.querySelectorAll(selector)).filter(c => c.overlayIndex > 0);
};
/**
 * Returns a list of all presented overlays.
 * Inline overlays can exist in the DOM but not be presented,
 * so there are times when we want to exclude those.
 * @param doc The document to find the element within.
 * @param overlayTag The selector for the overlay, defaults to Ionic overlay components.
 */
const getPresentedOverlays = (doc, overlayTag) => {
  return getOverlays(doc, overlayTag).filter(o => !isOverlayHidden(o));
};
/**
 * Returns a presented overlay element.
 * @param doc The document to find the element within.
 * @param overlayTag The selector for the overlay, defaults to Ionic overlay components.
 * @param id The unique identifier for the overlay instance.
 * @returns The overlay element or `undefined` if no overlay element is found.
 */
const getPresentedOverlay = (doc, overlayTag, id) => {
  const overlays = getPresentedOverlays(doc, overlayTag);
  // If no id is provided, return the last presented overlay
  // Otherwise, return the last overlay with the given id
  return (id === undefined ? overlays : overlays.filter(o => o.id === id)).slice(-1)[0];
};
/**
 * When an overlay is presented, the main
 * focus is the overlay not the page content.
 * We need to remove the page content from the
 * accessibility tree otherwise when
 * users use "read screen from top" gestures with
 * TalkBack and VoiceOver, the screen reader will begin
 * to read the content underneath the overlay.
 *
 * We need a container where all page components
 * exist that is separate from where the overlays
 * are added in the DOM. For most apps, this element
 * is the top most ion-router-outlet. In the event
 * that devs are not using a router,
 * they will need to add the "ion-view-container-root"
 * id to the element that contains all of their views.
 *
 * TODO: If Framework supports having multiple top
 * level router outlets we would need to update this.
 * Example: One outlet for side menu and one outlet
 * for main content.
 */
const setRootAriaHidden = (hidden = false) => {
  const root = getAppRoot(document);
  const viewContainer = root.querySelector('ion-router-outlet, #ion-view-container-root');
  if (!viewContainer) {
    return;
  }
  if (hidden) {
    viewContainer.setAttribute('aria-hidden', 'true');
  } else {
    viewContainer.removeAttribute('aria-hidden');
  }
};
const present = /*#__PURE__*/function () {
  var _ref = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (overlay, name, iosEnterAnimation, mdEnterAnimation, opts) {
    var _a, _b;
    if (overlay.presented) {
      return;
    }
    /**
     * When an overlay that steals focus
     * is dismissed, focus should be returned
     * to the element that was focused
     * prior to the overlay opening. Toast
     * does not steal focus and is excluded
     * from returning focus as a result.
     */
    if (overlay.el.tagName !== 'ION-TOAST') {
      restoreElementFocus(overlay.el);
    }
    /**
     * Due to accessibility guidelines, toasts do not have
     * focus traps.
     *
     * All other overlays should have focus traps to prevent
     * the keyboard focus from leaving the overlay unless
     * developers explicitly opt out (for example, sheet
     * modals that should permit background interaction).
     *
     * Note: Some apps move inline overlays to a specific container
     * during the willPresent lifecycle (e.g., React portals via
     * onWillPresent). Defer applying aria-hidden/inert to the app
     * root until after willPresent so we can detect where the
     * overlay is finally inserted. If the overlay is inside the
     * view container subtree, skip adding aria-hidden/inert there
     * to avoid disabling the overlay.
     */
    const overlayEl = overlay.el;
    const shouldTrapFocus = overlayEl.tagName !== 'ION-TOAST' && overlayEl.focusTrap !== false;
    const shouldLockRoot = shouldTrapFocus && isBackdropAlwaysBlocking(overlayEl);
    overlay.presented = true;
    overlay.willPresent.emit();
    if (shouldLockRoot) {
      const root = getAppRoot(document);
      const viewContainer = root.querySelector('ion-router-outlet, #ion-view-container-root');
      const overlayInsideViewContainer = viewContainer ? viewContainer.contains(overlayEl) : false;
      if (!overlayInsideViewContainer) {
        setRootAriaHidden(true);
      }
      document.body.classList.add(_gesture_controller_BTEOs1at_js__WEBPACK_IMPORTED_MODULE_7__.B);
    }
    (_a = overlay.willPresentShorthand) === null || _a === void 0 ? void 0 : _a.emit();
    const mode = (0,_ionic_global_DfbeLwcV_js__WEBPACK_IMPORTED_MODULE_5__.b)(overlay);
    // get the user's animation fn if one was provided
    const animationBuilder = overlay.enterAnimation ? overlay.enterAnimation : _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_4__.e.get(name, mode === 'ios' ? iosEnterAnimation : mdEnterAnimation);
    const completed = yield overlayAnimation(overlay, animationBuilder, overlay.el, opts);
    if (completed) {
      overlay.didPresent.emit();
      (_b = overlay.didPresentShorthand) === null || _b === void 0 ? void 0 : _b.emit();
    }
    /**
     * If the focused element is already
     * inside the overlay component then
     * focus should not be moved from that
     * to the overlay container.
     */
    if (overlay.keyboardClose && (document.activeElement === null || !overlay.el.contains(document.activeElement))) {
      overlay.el.focus();
    }
    /**
     * If this overlay was previously dismissed without being
     * the topmost one (such as by manually calling dismiss()),
     * it would still have aria-hidden on being presented again.
     * Removing it here ensures the overlay is visible to screen
     * readers.
     *
     * If this overlay was being presented, then it was hidden
     * from screen readers during the animation. Now that the
     * animation is complete, we can reveal the overlay to
     * screen readers.
     */
    overlay.el.removeAttribute('aria-hidden');
    overlay.el.removeAttribute('inert');
  });
  return function present(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * When an overlay component is dismissed,
 * focus should be returned to the element
 * that presented the overlay. Otherwise
 * focus will be set on the body which
 * means that people using screen readers
 * or tabbing will need to re-navigate
 * to where they were before they
 * opened the overlay.
 */
const restoreElementFocus = /*#__PURE__*/function () {
  var _ref2 = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (overlayEl) {
    let previousElement = document.activeElement;
    if (!previousElement) {
      return;
    }
    // Ensure active element is blurred to prevent a11y warning issues
    previousElement.blur();
    const shadowRoot = previousElement === null || previousElement === void 0 ? void 0 : previousElement.shadowRoot;
    if (shadowRoot) {
      // If there are no inner focusable elements, just focus the host element.
      previousElement = shadowRoot.querySelector(focusableQueryString) || previousElement;
    }
    yield overlayEl.onDidDismiss();
    /**
     * After onDidDismiss, the overlay loses focus
     * because it is removed from the document
     *
     * > An element will also lose focus [...]
     * > if the element is removed from the document)
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
     *
     * Additionally, `document.activeElement` returns:
     *
     * > The Element which currently has focus,
     * > `<body>` or null if there is
     * > no focused element.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement#value
     *
     * However, if the user has already focused
     * an element sometime between onWillDismiss
     * and onDidDismiss (for example, focusing a
     * text box after tapping a button in an
     * action sheet) then don't restore focus to
     * previous element
     */
    if (document.activeElement === null || document.activeElement === document.body) {
      previousElement.focus();
    }
  });
  return function restoreElementFocus(_x6) {
    return _ref2.apply(this, arguments);
  };
}();
const dismiss = /*#__PURE__*/function () {
  var _ref3 = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (overlay, data, role, name, iosLeaveAnimation, mdLeaveAnimation, opts) {
    var _a, _b;
    if (!overlay.presented) {
      return false;
    }
    const presentedOverlays = _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.d !== undefined ? getPresentedOverlays(_index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.d) : [];
    /**
     * For accessibility, toasts lack focus traps and don't receive
     * `aria-hidden` on the root element when presented.
     *
     * Overlays that opt into focus trapping set `aria-hidden`
     * on the root element to keep keyboard focus and pointer
     * events inside the overlay. We must remove `aria-hidden`
     * from the root element when the last focus-trapping overlay
     * is dismissed.
     */
    const overlaysLockingRoot = presentedOverlays.filter(o => {
      const el = o;
      return el.tagName !== 'ION-TOAST' && el.focusTrap !== false && isBackdropAlwaysBlocking(el);
    });
    const overlayEl = overlay.el;
    const locksRoot = overlayEl.tagName !== 'ION-TOAST' && overlayEl.focusTrap !== false && isBackdropAlwaysBlocking(overlayEl);
    /**
     * If this is the last visible overlay that is trapping focus
     * then we want to re-add the root to the accessibility tree.
     */
    const lastOverlayTrappingFocus = locksRoot && overlaysLockingRoot.length === 1 && overlaysLockingRoot[0].id === overlayEl.id;
    if (lastOverlayTrappingFocus) {
      setRootAriaHidden(false);
      document.body.classList.remove(_gesture_controller_BTEOs1at_js__WEBPACK_IMPORTED_MODULE_7__.B);
    }
    overlay.presented = false;
    try {
      // Overlay contents should not be clickable during dismiss
      overlay.el.style.setProperty('pointer-events', 'none');
      overlay.willDismiss.emit({
        data,
        role
      });
      (_a = overlay.willDismissShorthand) === null || _a === void 0 ? void 0 : _a.emit({
        data,
        role
      });
      const mode = (0,_ionic_global_DfbeLwcV_js__WEBPACK_IMPORTED_MODULE_5__.b)(overlay);
      const animationBuilder = overlay.leaveAnimation ? overlay.leaveAnimation : _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_4__.e.get(name, mode === 'ios' ? iosLeaveAnimation : mdLeaveAnimation);
      // If dismissed via gesture, no need to play leaving animation again
      if (role !== GESTURE) {
        yield overlayAnimation(overlay, animationBuilder, overlay.el, opts);
      }
      overlay.didDismiss.emit({
        data,
        role
      });
      (_b = overlay.didDismissShorthand) === null || _b === void 0 ? void 0 : _b.emit({
        data,
        role
      });
      // Get a reference to all animations currently assigned to this overlay
      // Then tear them down to return the overlay to its initial visual state
      const animations = activeAnimations.get(overlay) || [];
      animations.forEach(ani => ani.destroy());
      activeAnimations.delete(overlay);
      /**
       * Make overlay hidden again in case it is being reused.
       * We can safely remove pointer-events: none as
       * overlay-hidden will set display: none.
       */
      overlay.el.classList.add('overlay-hidden');
      overlay.el.style.removeProperty('pointer-events');
      /**
       * Clear any focus trapping references
       * when the overlay is dismissed.
       */
      if (overlay.el.lastFocus !== undefined) {
        overlay.el.lastFocus = undefined;
      }
    } catch (err) {
      (0,_index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_4__.j)(`[${overlay.el.tagName.toLowerCase()}] - `, err);
    }
    overlay.el.remove();
    return true;
  });
  return function dismiss(_x7, _x8, _x9, _x0, _x1, _x10, _x11) {
    return _ref3.apply(this, arguments);
  };
}();
const getAppRoot = doc => {
  return doc.querySelector('ion-app') || doc.body;
};
const overlayAnimation = /*#__PURE__*/function () {
  var _ref4 = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (overlay, animationBuilder, baseEl, opts) {
    // Make overlay visible in case it's hidden
    baseEl.classList.remove('overlay-hidden');
    const aniRoot = overlay.el;
    const animation = animationBuilder(aniRoot, opts);
    if (!overlay.animated || !_index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_4__.e.getBoolean('animated', true)) {
      animation.duration(0);
    }
    if (overlay.keyboardClose) {
      animation.beforeAddWrite(() => {
        const activeElement = baseEl.ownerDocument.activeElement;
        if (activeElement === null || activeElement === void 0 ? void 0 : activeElement.matches('input,ion-input, ion-textarea')) {
          activeElement.blur();
        }
      });
    }
    const activeAni = activeAnimations.get(overlay) || [];
    activeAnimations.set(overlay, [...activeAni, animation]);
    yield animation.play();
    return true;
  });
  return function overlayAnimation(_x12, _x13, _x14, _x15) {
    return _ref4.apply(this, arguments);
  };
}();
const eventMethod = (element, eventName) => {
  let resolve;
  const promise = new Promise(r => resolve = r);
  onceEvent(element, eventName, event => {
    resolve(event.detail);
  });
  return promise;
};
const onceEvent = (element, eventName, callback) => {
  const handler = ev => {
    (0,_helpers_Tl8jw6S2_js__WEBPACK_IMPORTED_MODULE_2__.m)(element, eventName, handler);
    callback(ev);
  };
  (0,_helpers_Tl8jw6S2_js__WEBPACK_IMPORTED_MODULE_2__.f)(element, eventName, handler);
};
const isCancel = role => {
  return role === 'cancel' || role === BACKDROP;
};
const defaultGate = h => h();
/**
 * Calls a developer provided method while avoiding
 * Angular Zones. Since the handler is provided by
 * the developer, we should throw any errors
 * received so that developer-provided bug
 * tracking software can log it.
 */
const safeCall = (handler, arg) => {
  if (typeof handler === 'function') {
    const jmp = _index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_4__.e.get('_zoneGate', defaultGate);
    return jmp(() => {
      try {
        return handler(arg);
      } catch (e) {
        throw e;
      }
    });
  }
  return undefined;
};
const BACKDROP = 'backdrop';
const GESTURE = 'gesture';
const OVERLAY_GESTURE_PRIORITY = 39;
/**
 * Creates a delegate controller.
 *
 * Requires that the component has the following properties:
 * - `el: HTMLElement`
 * - `hasController: boolean`
 * - `delegate?: FrameworkDelegate`
 *
 * @param ref The component class instance.
 */
const createDelegateController = ref => {
  let inline = false;
  let workingDelegate;
  const coreDelegate = (0,_framework_delegate_CyxE1S_P_js__WEBPACK_IMPORTED_MODULE_6__.C)();
  /**
   * Determines whether or not an overlay is being used
   * inline or via a controller/JS and returns the correct delegate.
   * By default, subsequent calls to getDelegate will use
   * a cached version of the delegate.
   * This is useful for calling dismiss after present,
   * so that the correct delegate is given.
   * @param force `true` to force the non-cached version of the delegate.
   * @returns The delegate to use and whether or not the overlay is inline.
   */
  const getDelegate = (force = false) => {
    if (workingDelegate && !force) {
      return {
        delegate: workingDelegate,
        inline
      };
    }
    const {
      el,
      hasController,
      delegate
    } = ref;
    /**
     * If using overlay inline
     * we potentially need to use the coreDelegate
     * so that this works in vanilla JS apps.
     * If a developer has presented this component
     * via a controller, then we can assume
     * the component is already in the
     * correct place.
     */
    const parentEl = el.parentNode;
    inline = parentEl !== null && !hasController;
    workingDelegate = inline ? delegate || coreDelegate : delegate;
    return {
      inline,
      delegate: workingDelegate
    };
  };
  /**
   * Attaches a component in the DOM. Teleports the component
   * to the root of the app.
   * @param component The component to optionally construct and append to the element.
   */
  const attachViewToDom = /*#__PURE__*/function () {
    var _ref5 = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (component) {
      const {
        delegate
      } = getDelegate(true);
      if (delegate) {
        return yield delegate.attachViewToDom(ref.el, component);
      }
      const {
        hasController
      } = ref;
      if (hasController && component !== undefined) {
        throw new Error('framework delegate is missing');
      }
      return null;
    });
    return function attachViewToDom(_x16) {
      return _ref5.apply(this, arguments);
    };
  }();
  /**
   * Moves a component back to its original location in the DOM.
   */
  const removeViewFromDom = () => {
    const {
      delegate
    } = getDelegate();
    if (delegate && ref.el !== undefined) {
      delegate.removeViewFromDom(ref.el.parentElement, ref.el);
    }
  };
  return {
    attachViewToDom,
    removeViewFromDom
  };
};
/**
 * Constructs a trigger interaction for an overlay.
 * Presents an overlay when the trigger is clicked.
 *
 * Usage:
 * ```ts
 * triggerController = createTriggerController();
 * triggerController.addClickListener(el, trigger);
 * ```
 */
const createTriggerController = () => {
  let destroyTriggerInteraction;
  /**
   * Removes the click listener from the trigger element.
   */
  const removeClickListener = () => {
    if (destroyTriggerInteraction) {
      destroyTriggerInteraction();
      destroyTriggerInteraction = undefined;
    }
  };
  /**
   * Adds a click listener to the trigger element.
   * Presents the overlay when the trigger is clicked.
   * @param el The overlay element.
   * @param trigger The ID of the element to add a click listener to.
   */
  const addClickListener = (el, trigger) => {
    removeClickListener();
    const triggerEl = trigger !== undefined ? document.getElementById(trigger) : null;
    if (!triggerEl) {
      (0,_index_IGIE5vDm_js__WEBPACK_IMPORTED_MODULE_4__.f)(`[${el.tagName.toLowerCase()}] - A trigger element with the ID "${trigger}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`, el);
      return;
    }
    const configureTriggerInteraction = (targetEl, overlayEl) => {
      const openOverlay = () => {
        overlayEl.present();
      };
      targetEl.addEventListener('click', openOverlay);
      return () => {
        targetEl.removeEventListener('click', openOverlay);
      };
    };
    destroyTriggerInteraction = configureTriggerInteraction(triggerEl, el);
  };
  return {
    addClickListener,
    removeClickListener
  };
};
const FOCUS_TRAP_DISABLE_CLASS = 'ion-disable-focus-trap';


/***/ },

/***/ 70247
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-DiVJyqlX.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createColorClasses),
/* harmony export */   g: () => (/* binding */ getClassMap),
/* harmony export */   h: () => (/* binding */ hostContext),
/* harmony export */   o: () => (/* binding */ openURL)
/* harmony export */ });
/* harmony import */ var _var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return typeof color === 'string' && color.length > 0 ? Object.assign({
    'ion-color': true,
    [`ion-color-${color}`]: true
  }, cssClassMap) : cssClassMap;
};
const getClassList = classes => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array.filter(c => c != null).map(c => c.trim()).filter(c => c !== '');
  }
  return [];
};
const getClassMap = classes => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = /*#__PURE__*/function () {
  var _ref = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (url, ev, direction, animation) {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
      const router = document.querySelector('ion-router');
      if (router) {
        if (ev != null) {
          ev.preventDefault();
        }
        return router.push(url, direction, animation);
      }
    }
    return false;
  });
  return function openURL(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();


/***/ },

/***/ 40211
/*!**************************************************!*\
  !*** ./node_modules/@ionic/core/loader/index.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defineCustomElements: () => (/* reexport safe */ _dist_esm_loader_js__WEBPACK_IMPORTED_MODULE_0__.defineCustomElements),
/* harmony export */   setNonce: () => (/* reexport safe */ _dist_esm_loader_js__WEBPACK_IMPORTED_MODULE_0__.setNonce)
/* harmony export */ });
/* harmony import */ var _dist_esm_loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/esm/loader.js */ 56629);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
(function () {
  if ("undefined" !== typeof window && void 0 !== window.Reflect && void 0 !== window.customElements) {
    var a = HTMLElement;
    window.HTMLElement = function () {
      return Reflect.construct(a, [], this.constructor);
    };
    HTMLElement.prototype = a.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, a);
  }
})();


/***/ },

/***/ 86120
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ referencedExports: ,  namespace object ***!
  \****************************************************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-accordion_2.entry.js": [
		37518,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
		]
	],
	"./ion-action-sheet.entry.js": [
		41981,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
		]
	],
	"./ion-alert.entry.js": [
		71603,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
		]
	],
	"./ion-app_8.entry.js": [
		82273,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
		]
	],
	"./ion-avatar_3.entry.js": [
		19642,
		[
			"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
		]
	],
	"./ion-back-button.entry.js": [
		32095,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
		]
	],
	"./ion-backdrop.entry.js": [
		72335,
		[
			"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
		]
	],
	"./ion-breadcrumb_2.entry.js": [
		78221,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
		]
	],
	"./ion-button_2.entry.js": [
		47184,
		[
			"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
		]
	],
	"./ion-card_5.entry.js": [
		38759,
		[
			"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
		]
	],
	"./ion-checkbox.entry.js": [
		24248,
		[
			"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
		]
	],
	"./ion-chip.entry.js": [
		69863,
		[
			"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
		]
	],
	"./ion-col_3.entry.js": [
		51769,
		[
			"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
		]
	],
	"./ion-datetime-button.entry.js": [
		2569,
		[
			"default-node_modules_ionic_core_dist_esm_data-B9iGR5YO_js",
			"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
		]
	],
	"./ion-datetime_3.entry.js": [
		76534,
		[
			"default-node_modules_ionic_core_dist_esm_data-B9iGR5YO_js",
			"common",
			"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
		]
	],
	"./ion-fab_3.entry.js": [
		25458,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
		]
	],
	"./ion-img.entry.js": [
		70654,
		[
			"node_modules_ionic_core_dist_esm_ion-img_entry_js"
		]
	],
	"./ion-infinite-scroll_2.entry.js": [
		36034,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
		]
	],
	"./ion-input-otp.entry.js": [
		20381,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-input-otp_entry_js"
		]
	],
	"./ion-input-password-toggle.entry.js": [
		5196,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-input-password-toggle_entry_js"
		]
	],
	"./ion-input.entry.js": [
		20761,
		[
			"default-node_modules_ionic_core_dist_esm_input_utils-Bxa_DQ7-_js-node_modules_ionic_core_dist-66891c",
			"common",
			"node_modules_ionic_core_dist_esm_ion-input_entry_js"
		]
	],
	"./ion-item-option_3.entry.js": [
		6492,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
		]
	],
	"./ion-item_8.entry.js": [
		29557,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
		]
	],
	"./ion-loading.entry.js": [
		68353,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
		]
	],
	"./ion-menu_3.entry.js": [
		51024,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
		]
	],
	"./ion-modal.entry.js": [
		29160,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
		]
	],
	"./ion-nav_2.entry.js": [
		60393,
		[
			"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
		]
	],
	"./ion-picker-column-option.entry.js": [
		68442,
		[
			"node_modules_ionic_core_dist_esm_ion-picker-column-option_entry_js"
		]
	],
	"./ion-picker-column.entry.js": [
		43110,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-picker-column_entry_js"
		]
	],
	"./ion-picker.entry.js": [
		15575,
		[
			"node_modules_ionic_core_dist_esm_ion-picker_entry_js"
		]
	],
	"./ion-popover.entry.js": [
		16772,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
		]
	],
	"./ion-progress-bar.entry.js": [
		34810,
		[
			"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
		]
	],
	"./ion-radio_2.entry.js": [
		14639,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
		]
	],
	"./ion-range.entry.js": [
		90628,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-range_entry_js"
		]
	],
	"./ion-refresher_2.entry.js": [
		10852,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
		]
	],
	"./ion-reorder_2.entry.js": [
		61479,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
		]
	],
	"./ion-ripple-effect.entry.js": [
		24065,
		[
			"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
		]
	],
	"./ion-route_4.entry.js": [
		57971,
		[
			"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
		]
	],
	"./ion-searchbar.entry.js": [
		93184,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
		]
	],
	"./ion-segment-content.entry.js": [
		94312,
		[
			"node_modules_ionic_core_dist_esm_ion-segment-content_entry_js"
		]
	],
	"./ion-segment-view.entry.js": [
		54540,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-segment-view_entry_js"
		]
	],
	"./ion-segment_2.entry.js": [
		469,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
		]
	],
	"./ion-select-modal.entry.js": [
		57101,
		[
			"node_modules_ionic_core_dist_esm_ion-select-modal_entry_js"
		]
	],
	"./ion-select_3.entry.js": [
		78471,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
		]
	],
	"./ion-spinner.entry.js": [
		40388,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
		]
	],
	"./ion-split-pane.entry.js": [
		42392,
		[
			"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
		]
	],
	"./ion-tab-bar_2.entry.js": [
		36059,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
		]
	],
	"./ion-tab_2.entry.js": [
		5427,
		[
			"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
		]
	],
	"./ion-text.entry.js": [
		50198,
		[
			"node_modules_ionic_core_dist_esm_ion-text_entry_js"
		]
	],
	"./ion-textarea.entry.js": [
		1735,
		[
			"default-node_modules_ionic_core_dist_esm_input_utils-Bxa_DQ7-_js-node_modules_ionic_core_dist-66891c",
			"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
		]
	],
	"./ion-toast.entry.js": [
		7510,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
		]
	],
	"./ion-toggle.entry.js": [
		45297,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
		]
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids[1].map(__webpack_require__.e)).then(() => (__webpack_require__(id)));
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 86120;
module.exports = webpackAsyncContext;

/***/ },

/***/ 21507
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/angular/fesm2022/ionic-angular.mjs ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionSheetController: () => (/* binding */ ActionSheetController),
/* harmony export */   AlertController: () => (/* binding */ AlertController),
/* harmony export */   AngularDelegate: () => (/* reexport safe */ _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.AngularDelegate),
/* harmony export */   AnimationController: () => (/* binding */ AnimationController),
/* harmony export */   BooleanValueAccessor: () => (/* binding */ BooleanValueAccessorDirective),
/* harmony export */   Config: () => (/* reexport safe */ _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.Config),
/* harmony export */   DomController: () => (/* reexport safe */ _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.DomController),
/* harmony export */   GestureController: () => (/* binding */ GestureController),
/* harmony export */   ION_MAX_VALIDATOR: () => (/* binding */ ION_MAX_VALIDATOR),
/* harmony export */   ION_MIN_VALIDATOR: () => (/* binding */ ION_MIN_VALIDATOR),
/* harmony export */   IonAccordion: () => (/* binding */ IonAccordion),
/* harmony export */   IonAccordionGroup: () => (/* binding */ IonAccordionGroup),
/* harmony export */   IonActionSheet: () => (/* binding */ IonActionSheet),
/* harmony export */   IonAlert: () => (/* binding */ IonAlert),
/* harmony export */   IonApp: () => (/* binding */ IonApp),
/* harmony export */   IonAvatar: () => (/* binding */ IonAvatar),
/* harmony export */   IonBackButton: () => (/* binding */ IonBackButton),
/* harmony export */   IonBackdrop: () => (/* binding */ IonBackdrop),
/* harmony export */   IonBadge: () => (/* binding */ IonBadge),
/* harmony export */   IonBreadcrumb: () => (/* binding */ IonBreadcrumb),
/* harmony export */   IonBreadcrumbs: () => (/* binding */ IonBreadcrumbs),
/* harmony export */   IonButton: () => (/* binding */ IonButton),
/* harmony export */   IonButtons: () => (/* binding */ IonButtons),
/* harmony export */   IonCard: () => (/* binding */ IonCard),
/* harmony export */   IonCardContent: () => (/* binding */ IonCardContent),
/* harmony export */   IonCardHeader: () => (/* binding */ IonCardHeader),
/* harmony export */   IonCardSubtitle: () => (/* binding */ IonCardSubtitle),
/* harmony export */   IonCardTitle: () => (/* binding */ IonCardTitle),
/* harmony export */   IonCheckbox: () => (/* binding */ IonCheckbox),
/* harmony export */   IonChip: () => (/* binding */ IonChip),
/* harmony export */   IonCol: () => (/* binding */ IonCol),
/* harmony export */   IonContent: () => (/* binding */ IonContent),
/* harmony export */   IonDatetime: () => (/* binding */ IonDatetime),
/* harmony export */   IonDatetimeButton: () => (/* binding */ IonDatetimeButton),
/* harmony export */   IonFab: () => (/* binding */ IonFab),
/* harmony export */   IonFabButton: () => (/* binding */ IonFabButton),
/* harmony export */   IonFabList: () => (/* binding */ IonFabList),
/* harmony export */   IonFooter: () => (/* binding */ IonFooter),
/* harmony export */   IonGrid: () => (/* binding */ IonGrid),
/* harmony export */   IonHeader: () => (/* binding */ IonHeader),
/* harmony export */   IonIcon: () => (/* binding */ IonIcon),
/* harmony export */   IonImg: () => (/* binding */ IonImg),
/* harmony export */   IonInfiniteScroll: () => (/* binding */ IonInfiniteScroll),
/* harmony export */   IonInfiniteScrollContent: () => (/* binding */ IonInfiniteScrollContent),
/* harmony export */   IonInput: () => (/* binding */ IonInput),
/* harmony export */   IonInputOtp: () => (/* binding */ IonInputOtp),
/* harmony export */   IonInputPasswordToggle: () => (/* binding */ IonInputPasswordToggle),
/* harmony export */   IonItem: () => (/* binding */ IonItem),
/* harmony export */   IonItemDivider: () => (/* binding */ IonItemDivider),
/* harmony export */   IonItemGroup: () => (/* binding */ IonItemGroup),
/* harmony export */   IonItemOption: () => (/* binding */ IonItemOption),
/* harmony export */   IonItemOptions: () => (/* binding */ IonItemOptions),
/* harmony export */   IonItemSliding: () => (/* binding */ IonItemSliding),
/* harmony export */   IonLabel: () => (/* binding */ IonLabel),
/* harmony export */   IonList: () => (/* binding */ IonList),
/* harmony export */   IonListHeader: () => (/* binding */ IonListHeader),
/* harmony export */   IonLoading: () => (/* binding */ IonLoading),
/* harmony export */   IonMaxValidator: () => (/* binding */ IonMaxValidator),
/* harmony export */   IonMenu: () => (/* binding */ IonMenu),
/* harmony export */   IonMenuButton: () => (/* binding */ IonMenuButton),
/* harmony export */   IonMenuToggle: () => (/* binding */ IonMenuToggle),
/* harmony export */   IonMinValidator: () => (/* binding */ IonMinValidator),
/* harmony export */   IonModal: () => (/* binding */ IonModal),
/* harmony export */   IonModalToken: () => (/* reexport safe */ _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.IonModalToken),
/* harmony export */   IonNav: () => (/* binding */ IonNav),
/* harmony export */   IonNavLink: () => (/* binding */ IonNavLink),
/* harmony export */   IonNote: () => (/* binding */ IonNote),
/* harmony export */   IonPicker: () => (/* binding */ IonPicker),
/* harmony export */   IonPickerColumn: () => (/* binding */ IonPickerColumn),
/* harmony export */   IonPickerColumnOption: () => (/* binding */ IonPickerColumnOption),
/* harmony export */   IonPickerLegacy: () => (/* binding */ IonPickerLegacy),
/* harmony export */   IonPopover: () => (/* binding */ IonPopover),
/* harmony export */   IonProgressBar: () => (/* binding */ IonProgressBar),
/* harmony export */   IonRadio: () => (/* binding */ IonRadio),
/* harmony export */   IonRadioGroup: () => (/* binding */ IonRadioGroup),
/* harmony export */   IonRange: () => (/* binding */ IonRange),
/* harmony export */   IonRefresher: () => (/* binding */ IonRefresher),
/* harmony export */   IonRefresherContent: () => (/* binding */ IonRefresherContent),
/* harmony export */   IonReorder: () => (/* binding */ IonReorder),
/* harmony export */   IonReorderGroup: () => (/* binding */ IonReorderGroup),
/* harmony export */   IonRippleEffect: () => (/* binding */ IonRippleEffect),
/* harmony export */   IonRouterOutlet: () => (/* binding */ IonRouterOutlet),
/* harmony export */   IonRow: () => (/* binding */ IonRow),
/* harmony export */   IonSearchbar: () => (/* binding */ IonSearchbar),
/* harmony export */   IonSegment: () => (/* binding */ IonSegment),
/* harmony export */   IonSegmentButton: () => (/* binding */ IonSegmentButton),
/* harmony export */   IonSegmentContent: () => (/* binding */ IonSegmentContent),
/* harmony export */   IonSegmentView: () => (/* binding */ IonSegmentView),
/* harmony export */   IonSelect: () => (/* binding */ IonSelect),
/* harmony export */   IonSelectModal: () => (/* binding */ IonSelectModal),
/* harmony export */   IonSelectOption: () => (/* binding */ IonSelectOption),
/* harmony export */   IonSkeletonText: () => (/* binding */ IonSkeletonText),
/* harmony export */   IonSpinner: () => (/* binding */ IonSpinner),
/* harmony export */   IonSplitPane: () => (/* binding */ IonSplitPane),
/* harmony export */   IonTab: () => (/* binding */ IonTab),
/* harmony export */   IonTabBar: () => (/* binding */ IonTabBar),
/* harmony export */   IonTabButton: () => (/* binding */ IonTabButton),
/* harmony export */   IonTabs: () => (/* binding */ IonTabs),
/* harmony export */   IonText: () => (/* binding */ IonText),
/* harmony export */   IonTextarea: () => (/* binding */ IonTextarea),
/* harmony export */   IonThumbnail: () => (/* binding */ IonThumbnail),
/* harmony export */   IonTitle: () => (/* binding */ IonTitle),
/* harmony export */   IonToast: () => (/* binding */ IonToast),
/* harmony export */   IonToggle: () => (/* binding */ IonToggle),
/* harmony export */   IonToolbar: () => (/* binding */ IonToolbar),
/* harmony export */   IonicModule: () => (/* binding */ IonicModule),
/* harmony export */   IonicRouteStrategy: () => (/* reexport safe */ _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.IonicRouteStrategy),
/* harmony export */   IonicSafeString: () => (/* reexport safe */ _ionic_core__WEBPACK_IMPORTED_MODULE_10__.IonicSafeString),
/* harmony export */   IonicSlides: () => (/* reexport safe */ _ionic_core__WEBPACK_IMPORTED_MODULE_10__.IonicSlides),
/* harmony export */   LoadingController: () => (/* binding */ LoadingController),
/* harmony export */   MenuController: () => (/* binding */ MenuController),
/* harmony export */   ModalController: () => (/* binding */ ModalController),
/* harmony export */   NavController: () => (/* reexport safe */ _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.NavController),
/* harmony export */   NavParams: () => (/* reexport safe */ _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.NavParams),
/* harmony export */   NumericValueAccessor: () => (/* binding */ NumericValueAccessorDirective),
/* harmony export */   PickerController: () => (/* binding */ PickerController),
/* harmony export */   Platform: () => (/* reexport safe */ _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.Platform),
/* harmony export */   PopoverController: () => (/* binding */ PopoverController),
/* harmony export */   RouterLinkDelegate: () => (/* binding */ RouterLinkDelegateDirective),
/* harmony export */   RouterLinkWithHrefDelegate: () => (/* binding */ RouterLinkWithHrefDelegateDirective),
/* harmony export */   SelectValueAccessor: () => (/* binding */ SelectValueAccessorDirective),
/* harmony export */   TextValueAccessor: () => (/* binding */ TextValueAccessorDirective),
/* harmony export */   ToastController: () => (/* binding */ ToastController),
/* harmony export */   createAnimation: () => (/* reexport safe */ _ionic_core__WEBPACK_IMPORTED_MODULE_10__.createAnimation),
/* harmony export */   createGesture: () => (/* reexport safe */ _ionic_core__WEBPACK_IMPORTED_MODULE_10__.createGesture),
/* harmony export */   getIonPageElement: () => (/* reexport safe */ _ionic_core__WEBPACK_IMPORTED_MODULE_10__.getIonPageElement),
/* harmony export */   getPlatforms: () => (/* reexport safe */ _ionic_core__WEBPACK_IMPORTED_MODULE_10__.getPlatforms),
/* harmony export */   getTimeGivenProgression: () => (/* reexport safe */ _ionic_core__WEBPACK_IMPORTED_MODULE_10__.getTimeGivenProgression),
/* harmony export */   iosTransitionAnimation: () => (/* reexport safe */ _ionic_core__WEBPACK_IMPORTED_MODULE_10__.iosTransitionAnimation),
/* harmony export */   isPlatform: () => (/* reexport safe */ _ionic_core__WEBPACK_IMPORTED_MODULE_10__.isPlatform),
/* harmony export */   mdTransitionAnimation: () => (/* reexport safe */ _ionic_core__WEBPACK_IMPORTED_MODULE_10__.mdTransitionAnimation),
/* harmony export */   openURL: () => (/* reexport safe */ _ionic_core__WEBPACK_IMPORTED_MODULE_10__.openURL)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94363);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular/common */ 4059);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 18537);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 66223);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _ionic_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/core */ 3920);
/* harmony import */ var _ionic_core_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/core/loader */ 40211);





const _c0 = ["*"];
const _c1 = ["outletContent"];
const _c2 = ["outlet"];
const _c3 = [[["", "slot", "top"]], "*", [["ion-tab"]]];
const _c4 = ["[slot=top]", "*", "ion-tab"];
function IonTabs_ion_router_outlet_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-router-outlet", 5, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("stackWillChange", function IonTabs_ion_router_outlet_3_Template_ion_router_outlet_stackWillChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onStackWillChange($event));
    })("stackDidChange", function IonTabs_ion_router_outlet_3_Template_ion_router_outlet_stackDidChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onStackDidChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function IonTabs_ng_content_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 2, ["*ngIf", "tabs.length > 0"]);
  }
}
function IonModal_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.template);
  }
}
function IonPopover_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.template);
  }
}









class BooleanValueAccessorDirective extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.ValueAccessor {
  constructor(injector, el) {
    super(injector, el);
  }
  writeValue(value) {
    this.elementRef.nativeElement.checked = this.lastValue = value;
    (0,_ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.setIonicClasses)(this.elementRef);
  }
  _handleIonChange(el) {
    this.handleValueChange(el, el.checked);
  }
  /** @nocollapse */
  static ɵfac = function BooleanValueAccessorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BooleanValueAccessorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };
  /** @nocollapse */
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: BooleanValueAccessorDirective,
    selectors: [["ion-checkbox"], ["ion-toggle"]],
    hostBindings: function BooleanValueAccessorDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function BooleanValueAccessorDirective_ionChange_HostBindingHandler($event) {
          return ctx._handleIonChange($event.target);
        });
      }
    },
    standalone: false,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
      useExisting: BooleanValueAccessorDirective,
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(BooleanValueAccessorDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: 'ion-checkbox,ion-toggle',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
        useExisting: BooleanValueAccessorDirective,
        multi: true
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }];
  }, {
    _handleIonChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['ionChange', ['$event.target']]
    }]
  });
})();
class NumericValueAccessorDirective extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.ValueAccessor {
  el;
  constructor(injector, el) {
    super(injector, el);
    this.el = el;
  }
  handleInputEvent(el) {
    this.handleValueChange(el, el.value);
  }
  registerOnChange(fn) {
    if (this.el.nativeElement.tagName === 'ION-INPUT' || this.el.nativeElement.tagName === 'ION-INPUT-OTP') {
      super.registerOnChange(value => {
        fn(value === '' ? null : parseFloat(value));
      });
    } else {
      super.registerOnChange(fn);
    }
  }
  /** @nocollapse */
  static ɵfac = function NumericValueAccessorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NumericValueAccessorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };
  /** @nocollapse */
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: NumericValueAccessorDirective,
    selectors: [["ion-input", "type", "number"], ["ion-input-otp", 3, "type", "text"], ["ion-range"]],
    hostBindings: function NumericValueAccessorDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionInput", function NumericValueAccessorDirective_ionInput_HostBindingHandler($event) {
          return ctx.handleInputEvent($event.target);
        });
      }
    },
    standalone: false,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
      useExisting: NumericValueAccessorDirective,
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(NumericValueAccessorDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: 'ion-input[type=number],ion-input-otp:not([type=text]),ion-range',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
        useExisting: NumericValueAccessorDirective,
        multi: true
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }];
  }, {
    handleInputEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['ionInput', ['$event.target']]
    }]
  });
})();
class SelectValueAccessorDirective extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.ValueAccessor {
  constructor(injector, el) {
    super(injector, el);
  }
  _handleChangeEvent(el) {
    this.handleValueChange(el, el.value);
  }
  /** @nocollapse */
  static ɵfac = function SelectValueAccessorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SelectValueAccessorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };
  /** @nocollapse */
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: SelectValueAccessorDirective,
    selectors: [["ion-select"], ["ion-radio-group"], ["ion-segment"], ["ion-datetime"]],
    hostBindings: function SelectValueAccessorDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function SelectValueAccessorDirective_ionChange_HostBindingHandler($event) {
          return ctx._handleChangeEvent($event.target);
        });
      }
    },
    standalone: false,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
      useExisting: SelectValueAccessorDirective,
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(SelectValueAccessorDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      /* tslint:disable-next-line:directive-selector */
      selector: 'ion-select, ion-radio-group, ion-segment, ion-datetime',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
        useExisting: SelectValueAccessorDirective,
        multi: true
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }];
  }, {
    _handleChangeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['ionChange', ['$event.target']]
    }]
  });
})();
class TextValueAccessorDirective extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.ValueAccessor {
  constructor(injector, el) {
    super(injector, el);
  }
  _handleInputEvent(el) {
    this.handleValueChange(el, el.value);
  }
  /** @nocollapse */
  static ɵfac = function TextValueAccessorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TextValueAccessorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };
  /** @nocollapse */
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: TextValueAccessorDirective,
    selectors: [["ion-input", 3, "type", "number"], ["ion-input-otp", "type", "text"], ["ion-textarea"], ["ion-searchbar"]],
    hostBindings: function TextValueAccessorDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionInput", function TextValueAccessorDirective_ionInput_HostBindingHandler($event) {
          return ctx._handleInputEvent($event.target);
        });
      }
    },
    standalone: false,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
      useExisting: TextValueAccessorDirective,
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(TextValueAccessorDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: 'ion-input:not([type=number]),ion-input-otp[type=text],ion-textarea,ion-searchbar',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
        useExisting: TextValueAccessorDirective,
        multi: true
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }];
  }, {
    _handleInputEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['ionInput', ['$event.target']]
    }]
  });
})();

/* eslint-disable */
/* tslint:disable */
const proxyInputs = (Cmp, inputs) => {
  const Prototype = Cmp.prototype;
  inputs.forEach(item => {
    Object.defineProperty(Prototype, item, {
      get() {
        return this.el[item];
      },
      set(val) {
        this.z.runOutsideAngular(() => this.el[item] = val);
      },
      /**
       * In the event that proxyInputs is called
       * multiple times re-defining these inputs
       * will cause an error to be thrown. As a result
       * we set configurable: true to indicate these
       * properties can be changed.
       */
      configurable: true
    });
  });
};
const proxyMethods = (Cmp, methods) => {
  const Prototype = Cmp.prototype;
  methods.forEach(methodName => {
    Prototype[methodName] = function () {
      const args = arguments;
      return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
    };
  });
};
const proxyOutputs = (instance, el, events) => {
  events.forEach(eventName => instance[eventName] = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(el, eventName));
};
const defineCustomElement = (tagName, customElement) => {
  if (customElement !== undefined && typeof customElements !== 'undefined' && !customElements.get(tagName)) {
    customElements.define(tagName, customElement);
  }
};
// tslint:disable-next-line: only-arrow-functions
function ProxyCmp(opts) {
  const decorator = function (cls) {
    const {
      defineCustomElementFn,
      inputs,
      methods
    } = opts;
    if (defineCustomElementFn !== undefined) {
      defineCustomElementFn();
    }
    if (inputs) {
      proxyInputs(cls, inputs);
    }
    if (methods) {
      proxyMethods(cls, methods);
    }
    return cls;
  };
  return decorator;
}
let IonAccordion = class IonAccordion {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonAccordion_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonAccordion)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonAccordion,
    selectors: [["ion-accordion"]],
    inputs: {
      disabled: "disabled",
      mode: "mode",
      readonly: "readonly",
      toggleIcon: "toggleIcon",
      toggleIconSlot: "toggleIconSlot",
      value: "value"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonAccordion_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonAccordion = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['disabled', 'mode', 'readonly', 'toggleIcon', 'toggleIconSlot', 'value']
})], IonAccordion);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonAccordion, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-accordion',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['disabled', 'mode', 'readonly', 'toggleIcon', 'toggleIconSlot', 'value']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonAccordionGroup = class IonAccordionGroup {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange']);
  }
  /** @nocollapse */
  static ɵfac = function IonAccordionGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonAccordionGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonAccordionGroup,
    selectors: [["ion-accordion-group"]],
    inputs: {
      animated: "animated",
      disabled: "disabled",
      expand: "expand",
      mode: "mode",
      multiple: "multiple",
      readonly: "readonly",
      value: "value"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonAccordionGroup_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonAccordionGroup = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['animated', 'disabled', 'expand', 'mode', 'multiple', 'readonly', 'value']
})], IonAccordionGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonAccordionGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-accordion-group',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['animated', 'disabled', 'expand', 'mode', 'multiple', 'readonly', 'value']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonActionSheet = class IonActionSheet {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionActionSheetDidPresent', 'ionActionSheetWillPresent', 'ionActionSheetWillDismiss', 'ionActionSheetDidDismiss', 'didPresent', 'willPresent', 'willDismiss', 'didDismiss']);
  }
  /** @nocollapse */
  static ɵfac = function IonActionSheet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonActionSheet)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonActionSheet,
    selectors: [["ion-action-sheet"]],
    inputs: {
      animated: "animated",
      backdropDismiss: "backdropDismiss",
      buttons: "buttons",
      cssClass: "cssClass",
      enterAnimation: "enterAnimation",
      header: "header",
      htmlAttributes: "htmlAttributes",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      leaveAnimation: "leaveAnimation",
      mode: "mode",
      subHeader: "subHeader",
      translucent: "translucent",
      trigger: "trigger"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonActionSheet_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonActionSheet = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['animated', 'backdropDismiss', 'buttons', 'cssClass', 'enterAnimation', 'header', 'htmlAttributes', 'isOpen', 'keyboardClose', 'leaveAnimation', 'mode', 'subHeader', 'translucent', 'trigger'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
})], IonActionSheet);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonActionSheet, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-action-sheet',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['animated', 'backdropDismiss', 'buttons', 'cssClass', 'enterAnimation', 'header', 'htmlAttributes', 'isOpen', 'keyboardClose', 'leaveAnimation', 'mode', 'subHeader', 'translucent', 'trigger']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonAlert = class IonAlert {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionAlertDidPresent', 'ionAlertWillPresent', 'ionAlertWillDismiss', 'ionAlertDidDismiss', 'didPresent', 'willPresent', 'willDismiss', 'didDismiss']);
  }
  /** @nocollapse */
  static ɵfac = function IonAlert_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonAlert)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonAlert,
    selectors: [["ion-alert"]],
    inputs: {
      animated: "animated",
      backdropDismiss: "backdropDismiss",
      buttons: "buttons",
      cssClass: "cssClass",
      enterAnimation: "enterAnimation",
      header: "header",
      htmlAttributes: "htmlAttributes",
      inputs: "inputs",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      leaveAnimation: "leaveAnimation",
      message: "message",
      mode: "mode",
      subHeader: "subHeader",
      translucent: "translucent",
      trigger: "trigger"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonAlert_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonAlert = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['animated', 'backdropDismiss', 'buttons', 'cssClass', 'enterAnimation', 'header', 'htmlAttributes', 'inputs', 'isOpen', 'keyboardClose', 'leaveAnimation', 'message', 'mode', 'subHeader', 'translucent', 'trigger'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
})], IonAlert);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonAlert, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-alert',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['animated', 'backdropDismiss', 'buttons', 'cssClass', 'enterAnimation', 'header', 'htmlAttributes', 'inputs', 'isOpen', 'keyboardClose', 'leaveAnimation', 'message', 'mode', 'subHeader', 'translucent', 'trigger']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonApp = class IonApp {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonApp_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonApp)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonApp,
    selectors: [["ion-app"]],
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonApp_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonApp = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  methods: ['setFocus']
})], IonApp);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonApp, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-app',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonAvatar = class IonAvatar {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonAvatar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonAvatar)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonAvatar,
    selectors: [["ion-avatar"]],
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonAvatar_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonAvatar = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({})], IonAvatar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonAvatar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-avatar',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonBackdrop = class IonBackdrop {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionBackdropTap']);
  }
  /** @nocollapse */
  static ɵfac = function IonBackdrop_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonBackdrop)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonBackdrop,
    selectors: [["ion-backdrop"]],
    inputs: {
      stopPropagation: "stopPropagation",
      tappable: "tappable",
      visible: "visible"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonBackdrop_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonBackdrop = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['stopPropagation', 'tappable', 'visible']
})], IonBackdrop);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonBackdrop, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-backdrop',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['stopPropagation', 'tappable', 'visible']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonBadge = class IonBadge {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonBadge_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonBadge)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonBadge,
    selectors: [["ion-badge"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonBadge_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonBadge = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['color', 'mode']
})], IonBadge);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonBadge, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-badge',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color', 'mode']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonBreadcrumb = class IonBreadcrumb {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
  }
  /** @nocollapse */
  static ɵfac = function IonBreadcrumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonBreadcrumb)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonBreadcrumb,
    selectors: [["ion-breadcrumb"]],
    inputs: {
      active: "active",
      color: "color",
      disabled: "disabled",
      download: "download",
      href: "href",
      mode: "mode",
      rel: "rel",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection",
      separator: "separator",
      target: "target"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonBreadcrumb_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonBreadcrumb = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['active', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'separator', 'target']
})], IonBreadcrumb);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonBreadcrumb, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-breadcrumb',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['active', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'separator', 'target']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonBreadcrumbs = class IonBreadcrumbs {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionCollapsedClick']);
  }
  /** @nocollapse */
  static ɵfac = function IonBreadcrumbs_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonBreadcrumbs)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonBreadcrumbs,
    selectors: [["ion-breadcrumbs"]],
    inputs: {
      color: "color",
      itemsAfterCollapse: "itemsAfterCollapse",
      itemsBeforeCollapse: "itemsBeforeCollapse",
      maxItems: "maxItems",
      mode: "mode"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonBreadcrumbs_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonBreadcrumbs = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['color', 'itemsAfterCollapse', 'itemsBeforeCollapse', 'maxItems', 'mode']
})], IonBreadcrumbs);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonBreadcrumbs, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-breadcrumbs',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color', 'itemsAfterCollapse', 'itemsBeforeCollapse', 'maxItems', 'mode']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonButton = class IonButton {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
  }
  /** @nocollapse */
  static ɵfac = function IonButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonButton)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonButton,
    selectors: [["ion-button"]],
    inputs: {
      buttonType: "buttonType",
      color: "color",
      disabled: "disabled",
      download: "download",
      expand: "expand",
      fill: "fill",
      form: "form",
      href: "href",
      mode: "mode",
      rel: "rel",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection",
      shape: "shape",
      size: "size",
      strong: "strong",
      target: "target",
      type: "type"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonButton_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonButton = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['buttonType', 'color', 'disabled', 'download', 'expand', 'fill', 'form', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'shape', 'size', 'strong', 'target', 'type']
})], IonButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-button',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['buttonType', 'color', 'disabled', 'download', 'expand', 'fill', 'form', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'shape', 'size', 'strong', 'target', 'type']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonButtons = class IonButtons {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonButtons_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonButtons)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonButtons,
    selectors: [["ion-buttons"]],
    inputs: {
      collapse: "collapse"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonButtons_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonButtons = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['collapse']
})], IonButtons);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonButtons, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-buttons',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['collapse']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonCard = class IonCard {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonCard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonCard,
    selectors: [["ion-card"]],
    inputs: {
      button: "button",
      color: "color",
      disabled: "disabled",
      download: "download",
      href: "href",
      mode: "mode",
      rel: "rel",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection",
      target: "target",
      type: "type"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonCard_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCard = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['button', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'target', 'type']
})], IonCard);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonCard, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-card',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['button', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'target', 'type']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonCardContent = class IonCardContent {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonCardContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCardContent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonCardContent,
    selectors: [["ion-card-content"]],
    inputs: {
      mode: "mode"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonCardContent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCardContent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['mode']
})], IonCardContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonCardContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-card-content',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['mode']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonCardHeader = class IonCardHeader {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonCardHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCardHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonCardHeader,
    selectors: [["ion-card-header"]],
    inputs: {
      color: "color",
      mode: "mode",
      translucent: "translucent"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonCardHeader_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCardHeader = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['color', 'mode', 'translucent']
})], IonCardHeader);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonCardHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-card-header',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color', 'mode', 'translucent']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonCardSubtitle = class IonCardSubtitle {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonCardSubtitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCardSubtitle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonCardSubtitle,
    selectors: [["ion-card-subtitle"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonCardSubtitle_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCardSubtitle = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['color', 'mode']
})], IonCardSubtitle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonCardSubtitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-card-subtitle',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color', 'mode']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonCardTitle = class IonCardTitle {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonCardTitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCardTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonCardTitle,
    selectors: [["ion-card-title"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonCardTitle_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCardTitle = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['color', 'mode']
})], IonCardTitle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonCardTitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-card-title',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color', 'mode']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonCheckbox = class IonCheckbox {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
  }
  /** @nocollapse */
  static ɵfac = function IonCheckbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonCheckbox,
    selectors: [["ion-checkbox"]],
    inputs: {
      alignment: "alignment",
      checked: "checked",
      color: "color",
      disabled: "disabled",
      errorText: "errorText",
      helperText: "helperText",
      indeterminate: "indeterminate",
      justify: "justify",
      labelPlacement: "labelPlacement",
      mode: "mode",
      name: "name",
      required: "required",
      value: "value"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCheckbox = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['alignment', 'checked', 'color', 'disabled', 'errorText', 'helperText', 'indeterminate', 'justify', 'labelPlacement', 'mode', 'name', 'required', 'value']
})], IonCheckbox);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonCheckbox, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-checkbox',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['alignment', 'checked', 'color', 'disabled', 'errorText', 'helperText', 'indeterminate', 'justify', 'labelPlacement', 'mode', 'name', 'required', 'value']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonChip = class IonChip {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonChip_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonChip)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonChip,
    selectors: [["ion-chip"]],
    inputs: {
      color: "color",
      disabled: "disabled",
      mode: "mode",
      outline: "outline"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonChip_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonChip = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['color', 'disabled', 'mode', 'outline']
})], IonChip);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonChip, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-chip',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color', 'disabled', 'mode', 'outline']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonCol = class IonCol {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonCol_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCol)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonCol,
    selectors: [["ion-col"]],
    inputs: {
      offset: "offset",
      offsetLg: "offsetLg",
      offsetMd: "offsetMd",
      offsetSm: "offsetSm",
      offsetXl: "offsetXl",
      offsetXs: "offsetXs",
      pull: "pull",
      pullLg: "pullLg",
      pullMd: "pullMd",
      pullSm: "pullSm",
      pullXl: "pullXl",
      pullXs: "pullXs",
      push: "push",
      pushLg: "pushLg",
      pushMd: "pushMd",
      pushSm: "pushSm",
      pushXl: "pushXl",
      pushXs: "pushXs",
      size: "size",
      sizeLg: "sizeLg",
      sizeMd: "sizeMd",
      sizeSm: "sizeSm",
      sizeXl: "sizeXl",
      sizeXs: "sizeXs"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonCol_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCol = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['offset', 'offsetLg', 'offsetMd', 'offsetSm', 'offsetXl', 'offsetXs', 'pull', 'pullLg', 'pullMd', 'pullSm', 'pullXl', 'pullXs', 'push', 'pushLg', 'pushMd', 'pushSm', 'pushXl', 'pushXs', 'size', 'sizeLg', 'sizeMd', 'sizeSm', 'sizeXl', 'sizeXs']
})], IonCol);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonCol, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-col',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['offset', 'offsetLg', 'offsetMd', 'offsetSm', 'offsetXl', 'offsetXs', 'pull', 'pullLg', 'pullMd', 'pullSm', 'pullXl', 'pullXs', 'push', 'pushLg', 'pushMd', 'pushSm', 'pushXl', 'pushXs', 'size', 'sizeLg', 'sizeMd', 'sizeSm', 'sizeXl', 'sizeXs']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonContent = class IonContent {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionScrollStart', 'ionScroll', 'ionScrollEnd']);
  }
  /** @nocollapse */
  static ɵfac = function IonContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonContent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonContent,
    selectors: [["ion-content"]],
    inputs: {
      color: "color",
      fixedSlotPlacement: "fixedSlotPlacement",
      forceOverscroll: "forceOverscroll",
      fullscreen: "fullscreen",
      scrollEvents: "scrollEvents",
      scrollX: "scrollX",
      scrollY: "scrollY"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonContent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonContent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['color', 'fixedSlotPlacement', 'forceOverscroll', 'fullscreen', 'scrollEvents', 'scrollX', 'scrollY'],
  methods: ['getScrollElement', 'scrollToTop', 'scrollToBottom', 'scrollByPoint', 'scrollToPoint']
})], IonContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-content',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color', 'fixedSlotPlacement', 'forceOverscroll', 'fullscreen', 'scrollEvents', 'scrollX', 'scrollY']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonDatetime = class IonDatetime {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionCancel', 'ionChange', 'ionFocus', 'ionBlur']);
  }
  /** @nocollapse */
  static ɵfac = function IonDatetime_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonDatetime)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonDatetime,
    selectors: [["ion-datetime"]],
    inputs: {
      cancelText: "cancelText",
      clearText: "clearText",
      color: "color",
      dayValues: "dayValues",
      disabled: "disabled",
      doneText: "doneText",
      firstDayOfWeek: "firstDayOfWeek",
      formatOptions: "formatOptions",
      highlightedDates: "highlightedDates",
      hourCycle: "hourCycle",
      hourValues: "hourValues",
      isDateEnabled: "isDateEnabled",
      locale: "locale",
      max: "max",
      min: "min",
      minuteValues: "minuteValues",
      mode: "mode",
      monthValues: "monthValues",
      multiple: "multiple",
      name: "name",
      preferWheel: "preferWheel",
      presentation: "presentation",
      readonly: "readonly",
      showAdjacentDays: "showAdjacentDays",
      showClearButton: "showClearButton",
      showDefaultButtons: "showDefaultButtons",
      showDefaultTimeLabel: "showDefaultTimeLabel",
      showDefaultTitle: "showDefaultTitle",
      size: "size",
      titleSelectedDatesFormatter: "titleSelectedDatesFormatter",
      value: "value",
      yearValues: "yearValues"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonDatetime_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonDatetime = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['cancelText', 'clearText', 'color', 'dayValues', 'disabled', 'doneText', 'firstDayOfWeek', 'formatOptions', 'highlightedDates', 'hourCycle', 'hourValues', 'isDateEnabled', 'locale', 'max', 'min', 'minuteValues', 'mode', 'monthValues', 'multiple', 'name', 'preferWheel', 'presentation', 'readonly', 'showAdjacentDays', 'showClearButton', 'showDefaultButtons', 'showDefaultTimeLabel', 'showDefaultTitle', 'size', 'titleSelectedDatesFormatter', 'value', 'yearValues'],
  methods: ['confirm', 'reset', 'cancel']
})], IonDatetime);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonDatetime, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-datetime',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['cancelText', 'clearText', 'color', 'dayValues', 'disabled', 'doneText', 'firstDayOfWeek', 'formatOptions', 'highlightedDates', 'hourCycle', 'hourValues', 'isDateEnabled', 'locale', 'max', 'min', 'minuteValues', 'mode', 'monthValues', 'multiple', 'name', 'preferWheel', 'presentation', 'readonly', 'showAdjacentDays', 'showClearButton', 'showDefaultButtons', 'showDefaultTimeLabel', 'showDefaultTitle', 'size', 'titleSelectedDatesFormatter', 'value', 'yearValues']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonDatetimeButton = class IonDatetimeButton {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonDatetimeButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonDatetimeButton)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonDatetimeButton,
    selectors: [["ion-datetime-button"]],
    inputs: {
      color: "color",
      datetime: "datetime",
      disabled: "disabled",
      mode: "mode"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonDatetimeButton_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonDatetimeButton = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['color', 'datetime', 'disabled', 'mode']
})], IonDatetimeButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonDatetimeButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-datetime-button',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color', 'datetime', 'disabled', 'mode']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonFab = class IonFab {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonFab_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonFab)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonFab,
    selectors: [["ion-fab"]],
    inputs: {
      activated: "activated",
      edge: "edge",
      horizontal: "horizontal",
      vertical: "vertical"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonFab_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonFab = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['activated', 'edge', 'horizontal', 'vertical'],
  methods: ['close']
})], IonFab);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonFab, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-fab',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['activated', 'edge', 'horizontal', 'vertical']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonFabButton = class IonFabButton {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
  }
  /** @nocollapse */
  static ɵfac = function IonFabButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonFabButton)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonFabButton,
    selectors: [["ion-fab-button"]],
    inputs: {
      activated: "activated",
      closeIcon: "closeIcon",
      color: "color",
      disabled: "disabled",
      download: "download",
      href: "href",
      mode: "mode",
      rel: "rel",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection",
      show: "show",
      size: "size",
      target: "target",
      translucent: "translucent",
      type: "type"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonFabButton_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonFabButton = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['activated', 'closeIcon', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'show', 'size', 'target', 'translucent', 'type']
})], IonFabButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonFabButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-fab-button',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['activated', 'closeIcon', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'show', 'size', 'target', 'translucent', 'type']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonFabList = class IonFabList {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonFabList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonFabList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonFabList,
    selectors: [["ion-fab-list"]],
    inputs: {
      activated: "activated",
      side: "side"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonFabList_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonFabList = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['activated', 'side']
})], IonFabList);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonFabList, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-fab-list',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['activated', 'side']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonFooter = class IonFooter {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonFooter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonFooter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonFooter,
    selectors: [["ion-footer"]],
    inputs: {
      collapse: "collapse",
      mode: "mode",
      translucent: "translucent"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonFooter_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonFooter = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['collapse', 'mode', 'translucent']
})], IonFooter);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonFooter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-footer',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['collapse', 'mode', 'translucent']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonGrid = class IonGrid {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonGrid_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonGrid)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonGrid,
    selectors: [["ion-grid"]],
    inputs: {
      fixed: "fixed"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonGrid_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonGrid = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['fixed']
})], IonGrid);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonGrid, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-grid',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['fixed']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonHeader = class IonHeader {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonHeader,
    selectors: [["ion-header"]],
    inputs: {
      collapse: "collapse",
      mode: "mode",
      translucent: "translucent"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonHeader_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonHeader = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['collapse', 'mode', 'translucent']
})], IonHeader);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-header',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['collapse', 'mode', 'translucent']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonIcon = class IonIcon {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonIcon_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonIcon,
    selectors: [["ion-icon"]],
    inputs: {
      color: "color",
      flipRtl: "flipRtl",
      icon: "icon",
      ios: "ios",
      lazy: "lazy",
      md: "md",
      mode: "mode",
      name: "name",
      sanitize: "sanitize",
      size: "size",
      src: "src"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonIcon = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['color', 'flipRtl', 'icon', 'ios', 'lazy', 'md', 'mode', 'name', 'sanitize', 'size', 'src']
})], IonIcon);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-icon',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color', 'flipRtl', 'icon', 'ios', 'lazy', 'md', 'mode', 'name', 'sanitize', 'size', 'src']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonImg = class IonImg {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionImgWillLoad', 'ionImgDidLoad', 'ionError']);
  }
  /** @nocollapse */
  static ɵfac = function IonImg_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonImg)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonImg,
    selectors: [["ion-img"]],
    inputs: {
      alt: "alt",
      src: "src"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonImg_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonImg = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['alt', 'src']
})], IonImg);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonImg, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-img',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['alt', 'src']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonInfiniteScroll = class IonInfiniteScroll {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionInfinite']);
  }
  /** @nocollapse */
  static ɵfac = function IonInfiniteScroll_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonInfiniteScroll)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonInfiniteScroll,
    selectors: [["ion-infinite-scroll"]],
    inputs: {
      disabled: "disabled",
      position: "position",
      threshold: "threshold"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonInfiniteScroll_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonInfiniteScroll = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['disabled', 'position', 'threshold'],
  methods: ['complete']
})], IonInfiniteScroll);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonInfiniteScroll, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-infinite-scroll',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['disabled', 'position', 'threshold']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonInfiniteScrollContent = class IonInfiniteScrollContent {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonInfiniteScrollContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonInfiniteScrollContent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonInfiniteScrollContent,
    selectors: [["ion-infinite-scroll-content"]],
    inputs: {
      loadingSpinner: "loadingSpinner",
      loadingText: "loadingText"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonInfiniteScrollContent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonInfiniteScrollContent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['loadingSpinner', 'loadingText']
})], IonInfiniteScrollContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonInfiniteScrollContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-infinite-scroll-content',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['loadingSpinner', 'loadingText']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonInput = class IonInput {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionInput', 'ionChange', 'ionBlur', 'ionFocus']);
  }
  /** @nocollapse */
  static ɵfac = function IonInput_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonInput)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonInput,
    selectors: [["ion-input"]],
    inputs: {
      autocapitalize: "autocapitalize",
      autocomplete: "autocomplete",
      autocorrect: "autocorrect",
      autofocus: "autofocus",
      clearInput: "clearInput",
      clearInputIcon: "clearInputIcon",
      clearOnEdit: "clearOnEdit",
      color: "color",
      counter: "counter",
      counterFormatter: "counterFormatter",
      debounce: "debounce",
      disabled: "disabled",
      enterkeyhint: "enterkeyhint",
      errorText: "errorText",
      fill: "fill",
      helperText: "helperText",
      inputmode: "inputmode",
      label: "label",
      labelPlacement: "labelPlacement",
      max: "max",
      maxlength: "maxlength",
      min: "min",
      minlength: "minlength",
      mode: "mode",
      multiple: "multiple",
      name: "name",
      pattern: "pattern",
      placeholder: "placeholder",
      readonly: "readonly",
      required: "required",
      shape: "shape",
      spellcheck: "spellcheck",
      step: "step",
      type: "type",
      value: "value"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonInput_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonInput = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearInput', 'clearInputIcon', 'clearOnEdit', 'color', 'counter', 'counterFormatter', 'debounce', 'disabled', 'enterkeyhint', 'errorText', 'fill', 'helperText', 'inputmode', 'label', 'labelPlacement', 'max', 'maxlength', 'min', 'minlength', 'mode', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'shape', 'spellcheck', 'step', 'type', 'value'],
  methods: ['setFocus', 'getInputElement']
})], IonInput);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonInput, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-input',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearInput', 'clearInputIcon', 'clearOnEdit', 'color', 'counter', 'counterFormatter', 'debounce', 'disabled', 'enterkeyhint', 'errorText', 'fill', 'helperText', 'inputmode', 'label', 'labelPlacement', 'max', 'maxlength', 'min', 'minlength', 'mode', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'shape', 'spellcheck', 'step', 'type', 'value']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonInputOtp = class IonInputOtp {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionInput', 'ionChange', 'ionComplete', 'ionBlur', 'ionFocus']);
  }
  /** @nocollapse */
  static ɵfac = function IonInputOtp_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonInputOtp)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonInputOtp,
    selectors: [["ion-input-otp"]],
    inputs: {
      autocapitalize: "autocapitalize",
      color: "color",
      disabled: "disabled",
      fill: "fill",
      inputmode: "inputmode",
      length: "length",
      pattern: "pattern",
      readonly: "readonly",
      separators: "separators",
      shape: "shape",
      size: "size",
      type: "type",
      value: "value"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonInputOtp_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonInputOtp = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['autocapitalize', 'color', 'disabled', 'fill', 'inputmode', 'length', 'pattern', 'readonly', 'separators', 'shape', 'size', 'type', 'value'],
  methods: ['setFocus']
})], IonInputOtp);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonInputOtp, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-input-otp',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['autocapitalize', 'color', 'disabled', 'fill', 'inputmode', 'length', 'pattern', 'readonly', 'separators', 'shape', 'size', 'type', 'value']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonInputPasswordToggle = class IonInputPasswordToggle {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonInputPasswordToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonInputPasswordToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonInputPasswordToggle,
    selectors: [["ion-input-password-toggle"]],
    inputs: {
      color: "color",
      hideIcon: "hideIcon",
      mode: "mode",
      showIcon: "showIcon"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonInputPasswordToggle_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonInputPasswordToggle = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['color', 'hideIcon', 'mode', 'showIcon']
})], IonInputPasswordToggle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonInputPasswordToggle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-input-password-toggle',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color', 'hideIcon', 'mode', 'showIcon']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonItem = class IonItem {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonItem)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonItem,
    selectors: [["ion-item"]],
    inputs: {
      button: "button",
      color: "color",
      detail: "detail",
      detailIcon: "detailIcon",
      disabled: "disabled",
      download: "download",
      href: "href",
      lines: "lines",
      mode: "mode",
      rel: "rel",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection",
      target: "target",
      type: "type"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonItem_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonItem = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['button', 'color', 'detail', 'detailIcon', 'disabled', 'download', 'href', 'lines', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'target', 'type']
})], IonItem);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-item',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['button', 'color', 'detail', 'detailIcon', 'disabled', 'download', 'href', 'lines', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'target', 'type']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonItemDivider = class IonItemDivider {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonItemDivider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonItemDivider)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonItemDivider,
    selectors: [["ion-item-divider"]],
    inputs: {
      color: "color",
      mode: "mode",
      sticky: "sticky"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonItemDivider_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonItemDivider = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['color', 'mode', 'sticky']
})], IonItemDivider);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonItemDivider, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-item-divider',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color', 'mode', 'sticky']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonItemGroup = class IonItemGroup {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonItemGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonItemGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonItemGroup,
    selectors: [["ion-item-group"]],
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonItemGroup_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonItemGroup = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({})], IonItemGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonItemGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-item-group',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonItemOption = class IonItemOption {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonItemOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonItemOption)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonItemOption,
    selectors: [["ion-item-option"]],
    inputs: {
      color: "color",
      disabled: "disabled",
      download: "download",
      expandable: "expandable",
      href: "href",
      mode: "mode",
      rel: "rel",
      target: "target",
      type: "type"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonItemOption_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonItemOption = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['color', 'disabled', 'download', 'expandable', 'href', 'mode', 'rel', 'target', 'type']
})], IonItemOption);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonItemOption, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-item-option',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color', 'disabled', 'download', 'expandable', 'href', 'mode', 'rel', 'target', 'type']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonItemOptions = class IonItemOptions {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionSwipe']);
  }
  /** @nocollapse */
  static ɵfac = function IonItemOptions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonItemOptions)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonItemOptions,
    selectors: [["ion-item-options"]],
    inputs: {
      side: "side"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonItemOptions_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonItemOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['side']
})], IonItemOptions);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonItemOptions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-item-options',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['side']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonItemSliding = class IonItemSliding {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionDrag']);
  }
  /** @nocollapse */
  static ɵfac = function IonItemSliding_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonItemSliding)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonItemSliding,
    selectors: [["ion-item-sliding"]],
    inputs: {
      disabled: "disabled"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonItemSliding_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonItemSliding = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['disabled'],
  methods: ['getOpenAmount', 'getSlidingRatio', 'open', 'close', 'closeOpened']
})], IonItemSliding);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonItemSliding, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-item-sliding',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['disabled']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonLabel = class IonLabel {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonLabel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonLabel)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonLabel,
    selectors: [["ion-label"]],
    inputs: {
      color: "color",
      mode: "mode",
      position: "position"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonLabel_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonLabel = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['color', 'mode', 'position']
})], IonLabel);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonLabel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-label',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color', 'mode', 'position']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonList = class IonList {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonList,
    selectors: [["ion-list"]],
    inputs: {
      inset: "inset",
      lines: "lines",
      mode: "mode"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonList_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonList = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['inset', 'lines', 'mode'],
  methods: ['closeSlidingItems']
})], IonList);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonList, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-list',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['inset', 'lines', 'mode']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonListHeader = class IonListHeader {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonListHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonListHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonListHeader,
    selectors: [["ion-list-header"]],
    inputs: {
      color: "color",
      lines: "lines",
      mode: "mode"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonListHeader_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonListHeader = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['color', 'lines', 'mode']
})], IonListHeader);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonListHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-list-header',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color', 'lines', 'mode']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonLoading = class IonLoading {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionLoadingDidPresent', 'ionLoadingWillPresent', 'ionLoadingWillDismiss', 'ionLoadingDidDismiss', 'didPresent', 'willPresent', 'willDismiss', 'didDismiss']);
  }
  /** @nocollapse */
  static ɵfac = function IonLoading_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonLoading)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonLoading,
    selectors: [["ion-loading"]],
    inputs: {
      animated: "animated",
      backdropDismiss: "backdropDismiss",
      cssClass: "cssClass",
      duration: "duration",
      enterAnimation: "enterAnimation",
      htmlAttributes: "htmlAttributes",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      leaveAnimation: "leaveAnimation",
      message: "message",
      mode: "mode",
      showBackdrop: "showBackdrop",
      spinner: "spinner",
      translucent: "translucent",
      trigger: "trigger"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonLoading_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonLoading = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['animated', 'backdropDismiss', 'cssClass', 'duration', 'enterAnimation', 'htmlAttributes', 'isOpen', 'keyboardClose', 'leaveAnimation', 'message', 'mode', 'showBackdrop', 'spinner', 'translucent', 'trigger'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
})], IonLoading);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonLoading, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-loading',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['animated', 'backdropDismiss', 'cssClass', 'duration', 'enterAnimation', 'htmlAttributes', 'isOpen', 'keyboardClose', 'leaveAnimation', 'message', 'mode', 'showBackdrop', 'spinner', 'translucent', 'trigger']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonMenu = class IonMenu {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionWillOpen', 'ionWillClose', 'ionDidOpen', 'ionDidClose']);
  }
  /** @nocollapse */
  static ɵfac = function IonMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonMenu,
    selectors: [["ion-menu"]],
    inputs: {
      contentId: "contentId",
      disabled: "disabled",
      maxEdgeStart: "maxEdgeStart",
      menuId: "menuId",
      side: "side",
      swipeGesture: "swipeGesture",
      type: "type"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonMenu_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonMenu = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['contentId', 'disabled', 'maxEdgeStart', 'menuId', 'side', 'swipeGesture', 'type'],
  methods: ['isOpen', 'isActive', 'open', 'close', 'toggle', 'setOpen']
})], IonMenu);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonMenu, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-menu',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['contentId', 'disabled', 'maxEdgeStart', 'menuId', 'side', 'swipeGesture', 'type']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonMenuButton = class IonMenuButton {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonMenuButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonMenuButton)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonMenuButton,
    selectors: [["ion-menu-button"]],
    inputs: {
      autoHide: "autoHide",
      color: "color",
      disabled: "disabled",
      menu: "menu",
      mode: "mode",
      type: "type"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonMenuButton_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonMenuButton = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['autoHide', 'color', 'disabled', 'menu', 'mode', 'type']
})], IonMenuButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonMenuButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-menu-button',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['autoHide', 'color', 'disabled', 'menu', 'mode', 'type']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonMenuToggle = class IonMenuToggle {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonMenuToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonMenuToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonMenuToggle,
    selectors: [["ion-menu-toggle"]],
    inputs: {
      autoHide: "autoHide",
      menu: "menu"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonMenuToggle_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonMenuToggle = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['autoHide', 'menu']
})], IonMenuToggle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonMenuToggle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-menu-toggle',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['autoHide', 'menu']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonNavLink = class IonNavLink {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonNavLink_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonNavLink)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonNavLink,
    selectors: [["ion-nav-link"]],
    inputs: {
      component: "component",
      componentProps: "componentProps",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonNavLink_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonNavLink = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['component', 'componentProps', 'routerAnimation', 'routerDirection']
})], IonNavLink);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonNavLink, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-nav-link',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['component', 'componentProps', 'routerAnimation', 'routerDirection']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonNote = class IonNote {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonNote_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonNote)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonNote,
    selectors: [["ion-note"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonNote_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonNote = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['color', 'mode']
})], IonNote);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonNote, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-note',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color', 'mode']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonPicker = class IonPicker {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonPicker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonPicker)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonPicker,
    selectors: [["ion-picker"]],
    inputs: {
      mode: "mode"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonPicker_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonPicker = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['mode']
})], IonPicker);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonPicker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-picker',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['mode']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonPickerColumn = class IonPickerColumn {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange']);
  }
  /** @nocollapse */
  static ɵfac = function IonPickerColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonPickerColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonPickerColumn,
    selectors: [["ion-picker-column"]],
    inputs: {
      color: "color",
      disabled: "disabled",
      mode: "mode",
      value: "value"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonPickerColumn_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonPickerColumn = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['color', 'disabled', 'mode', 'value'],
  methods: ['setFocus']
})], IonPickerColumn);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonPickerColumn, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-picker-column',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color', 'disabled', 'mode', 'value']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonPickerColumnOption = class IonPickerColumnOption {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonPickerColumnOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonPickerColumnOption)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonPickerColumnOption,
    selectors: [["ion-picker-column-option"]],
    inputs: {
      color: "color",
      disabled: "disabled",
      value: "value"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonPickerColumnOption_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonPickerColumnOption = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['color', 'disabled', 'value']
})], IonPickerColumnOption);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonPickerColumnOption, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-picker-column-option',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color', 'disabled', 'value']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonPickerLegacy = class IonPickerLegacy {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionPickerDidPresent', 'ionPickerWillPresent', 'ionPickerWillDismiss', 'ionPickerDidDismiss', 'didPresent', 'willPresent', 'willDismiss', 'didDismiss']);
  }
  /** @nocollapse */
  static ɵfac = function IonPickerLegacy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonPickerLegacy)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonPickerLegacy,
    selectors: [["ion-picker-legacy"]],
    inputs: {
      animated: "animated",
      backdropDismiss: "backdropDismiss",
      buttons: "buttons",
      columns: "columns",
      cssClass: "cssClass",
      duration: "duration",
      enterAnimation: "enterAnimation",
      htmlAttributes: "htmlAttributes",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      leaveAnimation: "leaveAnimation",
      mode: "mode",
      showBackdrop: "showBackdrop",
      trigger: "trigger"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonPickerLegacy_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonPickerLegacy = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['animated', 'backdropDismiss', 'buttons', 'columns', 'cssClass', 'duration', 'enterAnimation', 'htmlAttributes', 'isOpen', 'keyboardClose', 'leaveAnimation', 'mode', 'showBackdrop', 'trigger'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss', 'getColumn']
})], IonPickerLegacy);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonPickerLegacy, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-picker-legacy',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['animated', 'backdropDismiss', 'buttons', 'columns', 'cssClass', 'duration', 'enterAnimation', 'htmlAttributes', 'isOpen', 'keyboardClose', 'leaveAnimation', 'mode', 'showBackdrop', 'trigger']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonProgressBar = class IonProgressBar {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonProgressBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonProgressBar)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonProgressBar,
    selectors: [["ion-progress-bar"]],
    inputs: {
      buffer: "buffer",
      color: "color",
      mode: "mode",
      reversed: "reversed",
      type: "type",
      value: "value"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonProgressBar_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonProgressBar = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['buffer', 'color', 'mode', 'reversed', 'type', 'value']
})], IonProgressBar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonProgressBar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-progress-bar',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['buffer', 'color', 'mode', 'reversed', 'type', 'value']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonRadio = class IonRadio {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
  }
  /** @nocollapse */
  static ɵfac = function IonRadio_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRadio)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonRadio,
    selectors: [["ion-radio"]],
    inputs: {
      alignment: "alignment",
      color: "color",
      disabled: "disabled",
      justify: "justify",
      labelPlacement: "labelPlacement",
      mode: "mode",
      name: "name",
      value: "value"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonRadio_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRadio = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['alignment', 'color', 'disabled', 'justify', 'labelPlacement', 'mode', 'name', 'value']
})], IonRadio);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonRadio, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-radio',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['alignment', 'color', 'disabled', 'justify', 'labelPlacement', 'mode', 'name', 'value']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonRadioGroup = class IonRadioGroup {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange']);
  }
  /** @nocollapse */
  static ɵfac = function IonRadioGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRadioGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonRadioGroup,
    selectors: [["ion-radio-group"]],
    inputs: {
      allowEmptySelection: "allowEmptySelection",
      compareWith: "compareWith",
      errorText: "errorText",
      helperText: "helperText",
      name: "name",
      value: "value"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonRadioGroup_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRadioGroup = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['allowEmptySelection', 'compareWith', 'errorText', 'helperText', 'name', 'value']
})], IonRadioGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonRadioGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-radio-group',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['allowEmptySelection', 'compareWith', 'errorText', 'helperText', 'name', 'value']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonRange = class IonRange {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionInput', 'ionFocus', 'ionBlur', 'ionKnobMoveStart', 'ionKnobMoveEnd']);
  }
  /** @nocollapse */
  static ɵfac = function IonRange_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRange)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonRange,
    selectors: [["ion-range"]],
    inputs: {
      activeBarStart: "activeBarStart",
      color: "color",
      debounce: "debounce",
      disabled: "disabled",
      dualKnobs: "dualKnobs",
      label: "label",
      labelPlacement: "labelPlacement",
      max: "max",
      min: "min",
      mode: "mode",
      name: "name",
      pin: "pin",
      pinFormatter: "pinFormatter",
      snaps: "snaps",
      step: "step",
      ticks: "ticks",
      value: "value"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonRange_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRange = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['activeBarStart', 'color', 'debounce', 'disabled', 'dualKnobs', 'label', 'labelPlacement', 'max', 'min', 'mode', 'name', 'pin', 'pinFormatter', 'snaps', 'step', 'ticks', 'value']
})], IonRange);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonRange, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-range',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['activeBarStart', 'color', 'debounce', 'disabled', 'dualKnobs', 'label', 'labelPlacement', 'max', 'min', 'mode', 'name', 'pin', 'pinFormatter', 'snaps', 'step', 'ticks', 'value']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonRefresher = class IonRefresher {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionRefresh', 'ionPull', 'ionStart', 'ionPullStart', 'ionPullEnd']);
  }
  /** @nocollapse */
  static ɵfac = function IonRefresher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRefresher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonRefresher,
    selectors: [["ion-refresher"]],
    inputs: {
      closeDuration: "closeDuration",
      disabled: "disabled",
      mode: "mode",
      pullFactor: "pullFactor",
      pullMax: "pullMax",
      pullMin: "pullMin",
      snapbackDuration: "snapbackDuration"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonRefresher_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRefresher = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['closeDuration', 'disabled', 'mode', 'pullFactor', 'pullMax', 'pullMin', 'snapbackDuration'],
  methods: ['complete', 'cancel', 'getProgress']
})], IonRefresher);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonRefresher, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-refresher',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['closeDuration', 'disabled', 'mode', 'pullFactor', 'pullMax', 'pullMin', 'snapbackDuration']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonRefresherContent = class IonRefresherContent {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonRefresherContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRefresherContent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonRefresherContent,
    selectors: [["ion-refresher-content"]],
    inputs: {
      pullingIcon: "pullingIcon",
      pullingText: "pullingText",
      refreshingSpinner: "refreshingSpinner",
      refreshingText: "refreshingText"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonRefresherContent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRefresherContent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['pullingIcon', 'pullingText', 'refreshingSpinner', 'refreshingText']
})], IonRefresherContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonRefresherContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-refresher-content',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['pullingIcon', 'pullingText', 'refreshingSpinner', 'refreshingText']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonReorder = class IonReorder {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonReorder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonReorder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonReorder,
    selectors: [["ion-reorder"]],
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonReorder_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonReorder = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({})], IonReorder);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonReorder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-reorder',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonReorderGroup = class IonReorderGroup {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionItemReorder', 'ionReorderStart', 'ionReorderMove', 'ionReorderEnd']);
  }
  /** @nocollapse */
  static ɵfac = function IonReorderGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonReorderGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonReorderGroup,
    selectors: [["ion-reorder-group"]],
    inputs: {
      disabled: "disabled"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonReorderGroup_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonReorderGroup = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['disabled'],
  methods: ['complete']
})], IonReorderGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonReorderGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-reorder-group',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['disabled']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonRippleEffect = class IonRippleEffect {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonRippleEffect_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRippleEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonRippleEffect,
    selectors: [["ion-ripple-effect"]],
    inputs: {
      type: "type"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonRippleEffect_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRippleEffect = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['type'],
  methods: ['addRipple']
})], IonRippleEffect);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonRippleEffect, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-ripple-effect',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['type']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonRow = class IonRow {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRow)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonRow,
    selectors: [["ion-row"]],
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonRow_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRow = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({})], IonRow);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-row',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonSearchbar = class IonSearchbar {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionInput', 'ionChange', 'ionCancel', 'ionClear', 'ionBlur', 'ionFocus']);
  }
  /** @nocollapse */
  static ɵfac = function IonSearchbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSearchbar)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonSearchbar,
    selectors: [["ion-searchbar"]],
    inputs: {
      animated: "animated",
      autocapitalize: "autocapitalize",
      autocomplete: "autocomplete",
      autocorrect: "autocorrect",
      cancelButtonIcon: "cancelButtonIcon",
      cancelButtonText: "cancelButtonText",
      clearIcon: "clearIcon",
      color: "color",
      debounce: "debounce",
      disabled: "disabled",
      enterkeyhint: "enterkeyhint",
      inputmode: "inputmode",
      maxlength: "maxlength",
      minlength: "minlength",
      mode: "mode",
      name: "name",
      placeholder: "placeholder",
      searchIcon: "searchIcon",
      showCancelButton: "showCancelButton",
      showClearButton: "showClearButton",
      spellcheck: "spellcheck",
      type: "type",
      value: "value"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSearchbar_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSearchbar = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['animated', 'autocapitalize', 'autocomplete', 'autocorrect', 'cancelButtonIcon', 'cancelButtonText', 'clearIcon', 'color', 'debounce', 'disabled', 'enterkeyhint', 'inputmode', 'maxlength', 'minlength', 'mode', 'name', 'placeholder', 'searchIcon', 'showCancelButton', 'showClearButton', 'spellcheck', 'type', 'value'],
  methods: ['setFocus', 'getInputElement']
})], IonSearchbar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonSearchbar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-searchbar',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['animated', 'autocapitalize', 'autocomplete', 'autocorrect', 'cancelButtonIcon', 'cancelButtonText', 'clearIcon', 'color', 'debounce', 'disabled', 'enterkeyhint', 'inputmode', 'maxlength', 'minlength', 'mode', 'name', 'placeholder', 'searchIcon', 'showCancelButton', 'showClearButton', 'spellcheck', 'type', 'value']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonSegment = class IonSegment {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange']);
  }
  /** @nocollapse */
  static ɵfac = function IonSegment_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSegment)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonSegment,
    selectors: [["ion-segment"]],
    inputs: {
      color: "color",
      disabled: "disabled",
      mode: "mode",
      scrollable: "scrollable",
      selectOnFocus: "selectOnFocus",
      swipeGesture: "swipeGesture",
      value: "value"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSegment_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSegment = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['color', 'disabled', 'mode', 'scrollable', 'selectOnFocus', 'swipeGesture', 'value']
})], IonSegment);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonSegment, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-segment',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color', 'disabled', 'mode', 'scrollable', 'selectOnFocus', 'swipeGesture', 'value']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonSegmentButton = class IonSegmentButton {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonSegmentButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSegmentButton)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonSegmentButton,
    selectors: [["ion-segment-button"]],
    inputs: {
      contentId: "contentId",
      disabled: "disabled",
      layout: "layout",
      mode: "mode",
      type: "type",
      value: "value"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSegmentButton_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSegmentButton = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['contentId', 'disabled', 'layout', 'mode', 'type', 'value']
})], IonSegmentButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonSegmentButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-segment-button',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['contentId', 'disabled', 'layout', 'mode', 'type', 'value']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonSegmentContent = class IonSegmentContent {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonSegmentContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSegmentContent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonSegmentContent,
    selectors: [["ion-segment-content"]],
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSegmentContent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSegmentContent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({})], IonSegmentContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonSegmentContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-segment-content',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonSegmentView = class IonSegmentView {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionSegmentViewScroll']);
  }
  /** @nocollapse */
  static ɵfac = function IonSegmentView_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSegmentView)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonSegmentView,
    selectors: [["ion-segment-view"]],
    inputs: {
      disabled: "disabled",
      swipeGesture: "swipeGesture"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSegmentView_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSegmentView = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['disabled', 'swipeGesture']
})], IonSegmentView);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonSegmentView, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-segment-view',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['disabled', 'swipeGesture']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonSelect = class IonSelect {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionCancel', 'ionDismiss', 'ionFocus', 'ionBlur']);
  }
  /** @nocollapse */
  static ɵfac = function IonSelect_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonSelect,
    selectors: [["ion-select"]],
    inputs: {
      cancelText: "cancelText",
      color: "color",
      compareWith: "compareWith",
      disabled: "disabled",
      errorText: "errorText",
      expandedIcon: "expandedIcon",
      fill: "fill",
      helperText: "helperText",
      interface: "interface",
      interfaceOptions: "interfaceOptions",
      justify: "justify",
      label: "label",
      labelPlacement: "labelPlacement",
      mode: "mode",
      multiple: "multiple",
      name: "name",
      okText: "okText",
      placeholder: "placeholder",
      required: "required",
      selectedText: "selectedText",
      shape: "shape",
      toggleIcon: "toggleIcon",
      value: "value"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSelect_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSelect = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['cancelText', 'color', 'compareWith', 'disabled', 'errorText', 'expandedIcon', 'fill', 'helperText', 'interface', 'interfaceOptions', 'justify', 'label', 'labelPlacement', 'mode', 'multiple', 'name', 'okText', 'placeholder', 'required', 'selectedText', 'shape', 'toggleIcon', 'value'],
  methods: ['open']
})], IonSelect);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonSelect, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-select',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['cancelText', 'color', 'compareWith', 'disabled', 'errorText', 'expandedIcon', 'fill', 'helperText', 'interface', 'interfaceOptions', 'justify', 'label', 'labelPlacement', 'mode', 'multiple', 'name', 'okText', 'placeholder', 'required', 'selectedText', 'shape', 'toggleIcon', 'value']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonSelectModal = class IonSelectModal {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonSelectModal_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSelectModal)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonSelectModal,
    selectors: [["ion-select-modal"]],
    inputs: {
      cancelText: "cancelText",
      header: "header",
      multiple: "multiple",
      options: "options"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSelectModal_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSelectModal = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['cancelText', 'header', 'multiple', 'options']
})], IonSelectModal);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonSelectModal, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-select-modal',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['cancelText', 'header', 'multiple', 'options']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonSelectOption = class IonSelectOption {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonSelectOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSelectOption)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonSelectOption,
    selectors: [["ion-select-option"]],
    inputs: {
      disabled: "disabled",
      value: "value"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSelectOption_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSelectOption = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['disabled', 'value']
})], IonSelectOption);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonSelectOption, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-select-option',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['disabled', 'value']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonSkeletonText = class IonSkeletonText {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonSkeletonText_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSkeletonText)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonSkeletonText,
    selectors: [["ion-skeleton-text"]],
    inputs: {
      animated: "animated"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSkeletonText_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSkeletonText = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['animated']
})], IonSkeletonText);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonSkeletonText, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-skeleton-text',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['animated']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonSpinner = class IonSpinner {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonSpinner_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSpinner)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonSpinner,
    selectors: [["ion-spinner"]],
    inputs: {
      color: "color",
      duration: "duration",
      name: "name",
      paused: "paused"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSpinner_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSpinner = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['color', 'duration', 'name', 'paused']
})], IonSpinner);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonSpinner, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-spinner',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color', 'duration', 'name', 'paused']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonSplitPane = class IonSplitPane {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionSplitPaneVisible']);
  }
  /** @nocollapse */
  static ɵfac = function IonSplitPane_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSplitPane)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonSplitPane,
    selectors: [["ion-split-pane"]],
    inputs: {
      contentId: "contentId",
      disabled: "disabled",
      when: "when"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSplitPane_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSplitPane = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['contentId', 'disabled', 'when']
})], IonSplitPane);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonSplitPane, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-split-pane',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['contentId', 'disabled', 'when']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonTab = class IonTab {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonTab_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonTab)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonTab,
    selectors: [["ion-tab"]],
    inputs: {
      component: "component",
      tab: "tab"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonTab_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonTab = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['component', 'tab'],
  methods: ['setActive']
})], IonTab);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonTab, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-tab',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['component', 'tab']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonTabBar = class IonTabBar {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonTabBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonTabBar)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonTabBar,
    selectors: [["ion-tab-bar"]],
    inputs: {
      color: "color",
      mode: "mode",
      selectedTab: "selectedTab",
      translucent: "translucent"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonTabBar_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonTabBar = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['color', 'mode', 'selectedTab', 'translucent']
})], IonTabBar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonTabBar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-tab-bar',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color', 'mode', 'selectedTab', 'translucent']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonTabButton = class IonTabButton {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonTabButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonTabButton)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonTabButton,
    selectors: [["ion-tab-button"]],
    inputs: {
      disabled: "disabled",
      download: "download",
      href: "href",
      layout: "layout",
      mode: "mode",
      rel: "rel",
      selected: "selected",
      tab: "tab",
      target: "target"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonTabButton_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonTabButton = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['disabled', 'download', 'href', 'layout', 'mode', 'rel', 'selected', 'tab', 'target']
})], IonTabButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonTabButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-tab-button',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['disabled', 'download', 'href', 'layout', 'mode', 'rel', 'selected', 'tab', 'target']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonText = class IonText {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonText_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonText)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonText,
    selectors: [["ion-text"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonText_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonText = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['color', 'mode']
})], IonText);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonText, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-text',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color', 'mode']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonTextarea = class IonTextarea {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionInput', 'ionBlur', 'ionFocus']);
  }
  /** @nocollapse */
  static ɵfac = function IonTextarea_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonTextarea)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonTextarea,
    selectors: [["ion-textarea"]],
    inputs: {
      autoGrow: "autoGrow",
      autocapitalize: "autocapitalize",
      autofocus: "autofocus",
      clearOnEdit: "clearOnEdit",
      color: "color",
      cols: "cols",
      counter: "counter",
      counterFormatter: "counterFormatter",
      debounce: "debounce",
      disabled: "disabled",
      enterkeyhint: "enterkeyhint",
      errorText: "errorText",
      fill: "fill",
      helperText: "helperText",
      inputmode: "inputmode",
      label: "label",
      labelPlacement: "labelPlacement",
      maxlength: "maxlength",
      minlength: "minlength",
      mode: "mode",
      name: "name",
      placeholder: "placeholder",
      readonly: "readonly",
      required: "required",
      rows: "rows",
      shape: "shape",
      spellcheck: "spellcheck",
      value: "value",
      wrap: "wrap"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonTextarea_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonTextarea = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['autoGrow', 'autocapitalize', 'autofocus', 'clearOnEdit', 'color', 'cols', 'counter', 'counterFormatter', 'debounce', 'disabled', 'enterkeyhint', 'errorText', 'fill', 'helperText', 'inputmode', 'label', 'labelPlacement', 'maxlength', 'minlength', 'mode', 'name', 'placeholder', 'readonly', 'required', 'rows', 'shape', 'spellcheck', 'value', 'wrap'],
  methods: ['setFocus', 'getInputElement']
})], IonTextarea);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonTextarea, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-textarea',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['autoGrow', 'autocapitalize', 'autofocus', 'clearOnEdit', 'color', 'cols', 'counter', 'counterFormatter', 'debounce', 'disabled', 'enterkeyhint', 'errorText', 'fill', 'helperText', 'inputmode', 'label', 'labelPlacement', 'maxlength', 'minlength', 'mode', 'name', 'placeholder', 'readonly', 'required', 'rows', 'shape', 'spellcheck', 'value', 'wrap']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonThumbnail = class IonThumbnail {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonThumbnail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonThumbnail)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonThumbnail,
    selectors: [["ion-thumbnail"]],
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonThumbnail_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonThumbnail = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({})], IonThumbnail);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonThumbnail, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-thumbnail',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonTitle = class IonTitle {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonTitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonTitle,
    selectors: [["ion-title"]],
    inputs: {
      color: "color",
      size: "size"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonTitle_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonTitle = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['color', 'size']
})], IonTitle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonTitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-title',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color', 'size']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonToast = class IonToast {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionToastDidPresent', 'ionToastWillPresent', 'ionToastWillDismiss', 'ionToastDidDismiss', 'didPresent', 'willPresent', 'willDismiss', 'didDismiss']);
  }
  /** @nocollapse */
  static ɵfac = function IonToast_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonToast)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonToast,
    selectors: [["ion-toast"]],
    inputs: {
      animated: "animated",
      buttons: "buttons",
      color: "color",
      cssClass: "cssClass",
      duration: "duration",
      enterAnimation: "enterAnimation",
      header: "header",
      htmlAttributes: "htmlAttributes",
      icon: "icon",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      layout: "layout",
      leaveAnimation: "leaveAnimation",
      message: "message",
      mode: "mode",
      position: "position",
      positionAnchor: "positionAnchor",
      swipeGesture: "swipeGesture",
      translucent: "translucent",
      trigger: "trigger"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonToast_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonToast = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['animated', 'buttons', 'color', 'cssClass', 'duration', 'enterAnimation', 'header', 'htmlAttributes', 'icon', 'isOpen', 'keyboardClose', 'layout', 'leaveAnimation', 'message', 'mode', 'position', 'positionAnchor', 'swipeGesture', 'translucent', 'trigger'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
})], IonToast);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonToast, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-toast',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['animated', 'buttons', 'color', 'cssClass', 'duration', 'enterAnimation', 'header', 'htmlAttributes', 'icon', 'isOpen', 'keyboardClose', 'layout', 'leaveAnimation', 'message', 'mode', 'position', 'positionAnchor', 'swipeGesture', 'translucent', 'trigger']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonToggle = class IonToggle {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
  }
  /** @nocollapse */
  static ɵfac = function IonToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonToggle,
    selectors: [["ion-toggle"]],
    inputs: {
      alignment: "alignment",
      checked: "checked",
      color: "color",
      disabled: "disabled",
      enableOnOffLabels: "enableOnOffLabels",
      errorText: "errorText",
      helperText: "helperText",
      justify: "justify",
      labelPlacement: "labelPlacement",
      mode: "mode",
      name: "name",
      required: "required",
      value: "value"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonToggle_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonToggle = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['alignment', 'checked', 'color', 'disabled', 'enableOnOffLabels', 'errorText', 'helperText', 'justify', 'labelPlacement', 'mode', 'name', 'required', 'value']
})], IonToggle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonToggle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-toggle',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['alignment', 'checked', 'color', 'disabled', 'enableOnOffLabels', 'errorText', 'helperText', 'justify', 'labelPlacement', 'mode', 'name', 'required', 'value']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
let IonToolbar = class IonToolbar {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static ɵfac = function IonToolbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonToolbar)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonToolbar,
    selectors: [["ion-toolbar"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonToolbar_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonToolbar = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ProxyCmp({
  inputs: ['color', 'mode']
})], IonToolbar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonToolbar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-toolbar',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color', 'mode']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
class IonRouterOutlet extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.IonRouterOutlet {
  parentOutlet;
  /**
   * `static: true` must be set so the query results are resolved
   * before change detection runs. Otherwise, the view container
   * ref will be ion-router-outlet instead of ng-container, and
   * the first view will be added as a sibling of ion-router-outlet
   * instead of a child.
   */
  outletContent;
  /**
   * We need to pass in the correct instance of IonRouterOutlet
   * otherwise parentOutlet will be null in a nested outlet context.
   * This results in APIs such as NavController.pop not working
   * in nested outlets because the parent outlet cannot be found.
   */
  constructor(name, tabs, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet) {
    super(name, tabs, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet);
    this.parentOutlet = parentOutlet;
  }
  /** @nocollapse */
  static ɵfac = function IonRouterOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRouterOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('name'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabs'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](IonRouterOutlet, 12));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonRouterOutlet,
    selectors: [["ion-router-outlet"]],
    viewQuery: function IonRouterOutlet_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.outletContent = _t.first);
      }
    },
    standalone: false,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 0,
    consts: [["outletContent", ""]],
    template: function IonRouterOutlet_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonRouterOutlet, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-router-outlet',
      template: '<ng-container #outletContent><ng-content></ng-content></ng-container>'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Attribute,
        args: ['name']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Attribute,
        args: ['tabs']
      }]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
    }, {
      type: IonRouterOutlet,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }];
  }, {
    outletContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['outletContent', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef,
        static: true
      }]
    }]
  });
})();
class IonTabs extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.IonTabs {
  outlet;
  tabBar;
  tabBars;
  tabs;
  /** @nocollapse */
  static ɵfac = /* @__PURE__ */(() => {
    let ɵIonTabs_BaseFactory;
    return function IonTabs_Factory(__ngFactoryType__) {
      return (ɵIonTabs_BaseFactory || (ɵIonTabs_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](IonTabs)))(__ngFactoryType__ || IonTabs);
    };
  })();
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonTabs,
    selectors: [["ion-tabs"]],
    contentQueries: function IonTabs_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, IonTabBar, 5)(dirIndex, IonTabBar, 4)(dirIndex, IonTab, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tabBar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tabBars = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tabs = _t);
      }
    },
    viewQuery: function IonTabs_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5, IonRouterOutlet);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.outlet = _t.first);
      }
    },
    standalone: false,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c4,
    decls: 6,
    vars: 2,
    consts: [["tabsInner", ""], ["outlet", ""], [1, "tabs-inner"], ["tabs", "true", 3, "stackWillChange", "stackDidChange", 4, "ngIf"], [4, "ngIf"], ["tabs", "true", 3, "stackWillChange", "stackDidChange"]],
    template: function IonTabs_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, IonTabs_ion_router_outlet_3_Template, 2, 0, "ion-router-outlet", 3)(4, IonTabs_ng_content_4_Template, 1, 0, "ng-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5, 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tabs.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tabs.length > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, IonRouterOutlet],
    styles: ["[_nghost-%COMP%]{display:flex;position:absolute;inset:0;flex-direction:column;width:100%;height:100%;contain:layout size style}.tabs-inner[_ngcontent-%COMP%]{position:relative;flex:1;contain:layout size style}"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonTabs, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-tabs',
      template: `
    <ng-content select="[slot=top]"></ng-content>
    <div class="tabs-inner" #tabsInner>
      <ion-router-outlet
        *ngIf="tabs.length === 0"
        #outlet
        tabs="true"
        (stackWillChange)="onStackWillChange($event)"
        (stackDidChange)="onStackDidChange($event)"
      ></ion-router-outlet>
      <ng-content *ngIf="tabs.length > 0" select="ion-tab"></ng-content>
    </div>
    <ng-content></ng-content>
  `,
      styles: [":host{display:flex;position:absolute;inset:0;flex-direction:column;width:100%;height:100%;contain:layout size style}.tabs-inner{position:relative;flex:1;contain:layout size style}\n"]
    }]
  }], null, {
    outlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['outlet', {
        read: IonRouterOutlet,
        static: false
      }]
    }],
    tabBar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [IonTabBar, {
        static: false
      }]
    }],
    tabBars: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [IonTabBar]
    }],
    tabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [IonTab]
    }]
  });
})();
class IonBackButton extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.IonBackButton {
  constructor(routerOutlet, navCtrl, config, r, z, c) {
    super(routerOutlet, navCtrl, config, r, z, c);
  }
  /** @nocollapse */
  static ɵfac = function IonBackButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonBackButton)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](IonRouterOutlet, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.Config), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonBackButton,
    selectors: [["ion-back-button"]],
    standalone: false,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonBackButton_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonBackButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-back-button',
      template: '<ng-content></ng-content>',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: IonRouterOutlet,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }, {
      type: _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.NavController
    }, {
      type: _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.Config
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, null);
})();
class IonNav extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.IonNav {
  constructor(ref, environmentInjector, injector, angularDelegate, z, c) {
    super(ref, environmentInjector, injector, angularDelegate, z, c);
  }
  /** @nocollapse */
  static ɵfac = function IonNav_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonNav)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.EnvironmentInjector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.AngularDelegate), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonNav,
    selectors: [["ion-nav"]],
    standalone: false,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonNav_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonNav, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-nav',
      template: '<ng-content></ng-content>',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.EnvironmentInjector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
    }, {
      type: _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.AngularDelegate
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, null);
})();

/**
 * Adds support for Ionic routing directions and animations to the base Angular router link directive.
 *
 * When the router link is clicked, the directive will assign the direction and
 * animation so that the routing integration will transition correctly.
 */
class RouterLinkDelegateDirective extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.RouterLinkDelegateDirective {
  /** @nocollapse */static ɵfac = /* @__PURE__ */(() => {
    let ɵRouterLinkDelegateDirective_BaseFactory;
    return function RouterLinkDelegateDirective_Factory(__ngFactoryType__) {
      return (ɵRouterLinkDelegateDirective_BaseFactory || (ɵRouterLinkDelegateDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](RouterLinkDelegateDirective)))(__ngFactoryType__ || RouterLinkDelegateDirective);
    };
  })();
  /** @nocollapse */
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: RouterLinkDelegateDirective,
    selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
    standalone: false,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(RouterLinkDelegateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: ':not(a):not(area)[routerLink]'
    }]
  }], null, null);
})();
class RouterLinkWithHrefDelegateDirective extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHrefDelegateDirective {
  /** @nocollapse */static ɵfac = /* @__PURE__ */(() => {
    let ɵRouterLinkWithHrefDelegateDirective_BaseFactory;
    return function RouterLinkWithHrefDelegateDirective_Factory(__ngFactoryType__) {
      return (ɵRouterLinkWithHrefDelegateDirective_BaseFactory || (ɵRouterLinkWithHrefDelegateDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](RouterLinkWithHrefDelegateDirective)))(__ngFactoryType__ || RouterLinkWithHrefDelegateDirective);
    };
  })();
  /** @nocollapse */
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: RouterLinkWithHrefDelegateDirective,
    selectors: [["a", "routerLink", ""], ["area", "routerLink", ""]],
    standalone: false,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(RouterLinkWithHrefDelegateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: 'a[routerLink],area[routerLink]'
    }]
  }], null, null);
})();
class IonModal extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.IonModal {
  /** @nocollapse */static ɵfac = /* @__PURE__ */(() => {
    let ɵIonModal_BaseFactory;
    return function IonModal_Factory(__ngFactoryType__) {
      return (ɵIonModal_BaseFactory || (ɵIonModal_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](IonModal)))(__ngFactoryType__ || IonModal);
    };
  })();
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonModal,
    selectors: [["ion-modal"]],
    standalone: false,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "ion-delegate-host ion-page", 4, "ngIf"], [1, "ion-delegate-host", "ion-page"], [3, "ngTemplateOutlet"]],
    template: function IonModal_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, IonModal_div_0_Template, 2, 1, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCmpOpen || ctx.keepContentsMounted);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonModal, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-modal',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: `<div class="ion-delegate-host ion-page" *ngIf="isCmpOpen || keepContentsMounted">
    <ng-container [ngTemplateOutlet]="template"></ng-container>
  </div>`
    }]
  }], null, null);
})();
class IonPopover extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.IonPopover {
  /** @nocollapse */static ɵfac = /* @__PURE__ */(() => {
    let ɵIonPopover_BaseFactory;
    return function IonPopover_Factory(__ngFactoryType__) {
      return (ɵIonPopover_BaseFactory || (ɵIonPopover_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](IonPopover)))(__ngFactoryType__ || IonPopover);
    };
  })();
  /** @nocollapse */
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IonPopover,
    selectors: [["ion-popover"]],
    standalone: false,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 1,
    consts: [[3, "ngTemplateOutlet", 4, "ngIf"], [3, "ngTemplateOutlet"]],
    template: function IonPopover_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, IonPopover_ng_container_0_Template, 1, 1, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCmpOpen || ctx.keepContentsMounted);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonPopover, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ion-popover',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: `<ng-container [ngTemplateOutlet]="template" *ngIf="isCmpOpen || keepContentsMounted"></ng-container>`
    }]
  }], null, null);
})();

/**
 * @description
 * Provider which adds `MaxValidator` to the `NG_VALIDATORS` multi-provider list.
 */
const ION_MAX_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALIDATORS,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => IonMaxValidator),
  multi: true
};
class IonMaxValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxValidator {
  /** @nocollapse */static ɵfac = /* @__PURE__ */(() => {
    let ɵIonMaxValidator_BaseFactory;
    return function IonMaxValidator_Factory(__ngFactoryType__) {
      return (ɵIonMaxValidator_BaseFactory || (ɵIonMaxValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](IonMaxValidator)))(__ngFactoryType__ || IonMaxValidator);
    };
  })();
  /** @nocollapse */
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: IonMaxValidator,
    selectors: [["ion-input", "type", "number", "max", "", "formControlName", ""], ["ion-input", "type", "number", "max", "", "formControl", ""], ["ion-input", "type", "number", "max", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function IonMaxValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("max", ctx._enabled ? ctx.max : null);
      }
    },
    standalone: false,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([ION_MAX_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonMaxValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: 'ion-input[type=number][max][formControlName],ion-input[type=number][max][formControl],ion-input[type=number][max][ngModel]',
      providers: [ION_MAX_VALIDATOR],
      // eslint-disable-next-line @angular-eslint/no-host-metadata-property
      host: {
        '[attr.max]': '_enabled ? max : null'
      }
    }]
  }], null, null);
})();

/**
 * @description
 * Provider which adds `MinValidator` to the `NG_VALIDATORS` multi-provider list.
 */
const ION_MIN_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALIDATORS,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => IonMinValidator),
  multi: true
};
class IonMinValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator {
  /** @nocollapse */static ɵfac = /* @__PURE__ */(() => {
    let ɵIonMinValidator_BaseFactory;
    return function IonMinValidator_Factory(__ngFactoryType__) {
      return (ɵIonMinValidator_BaseFactory || (ɵIonMinValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](IonMinValidator)))(__ngFactoryType__ || IonMinValidator);
    };
  })();
  /** @nocollapse */
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: IonMinValidator,
    selectors: [["ion-input", "type", "number", "min", "", "formControlName", ""], ["ion-input", "type", "number", "min", "", "formControl", ""], ["ion-input", "type", "number", "min", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function IonMinValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("min", ctx._enabled ? ctx.min : null);
      }
    },
    standalone: false,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([ION_MIN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonMinValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: 'ion-input[type=number][min][formControlName],ion-input[type=number][min][formControl],ion-input[type=number][min][ngModel]',
      providers: [ION_MIN_VALIDATOR],
      // eslint-disable-next-line @angular-eslint/no-host-metadata-property
      host: {
        '[attr.min]': '_enabled ? min : null'
      }
    }]
  }], null, null);
})();
class AlertController extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.OverlayBaseController {
  constructor() {
    super(_ionic_core__WEBPACK_IMPORTED_MODULE_10__.alertController);
  }
  /** @nocollapse */
  static ɵfac = function AlertController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AlertController)();
  };
  /** @nocollapse */
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AlertController,
    factory: AlertController.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(AlertController, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
class AnimationController {
  /**
   * Create a new animation
   */
  create(animationId) {
    return (0,_ionic_core__WEBPACK_IMPORTED_MODULE_10__.createAnimation)(animationId);
  }
  /**
   * EXPERIMENTAL
   *
   * Given a progression and a cubic bezier function,
   * this utility returns the time value(s) at which the
   * cubic bezier reaches the given time progression.
   *
   * If the cubic bezier never reaches the progression
   * the result will be an empty array.
   *
   * This is most useful for switching between easing curves
   * when doing a gesture animation (i.e. going from linear easing
   * during a drag, to another easing when `progressEnd` is called)
   */
  easingTime(p0, p1, p2, p3, progression) {
    return (0,_ionic_core__WEBPACK_IMPORTED_MODULE_10__.getTimeGivenProgression)(p0, p1, p2, p3, progression);
  }
  /** @nocollapse */
  static ɵfac = function AnimationController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AnimationController)();
  };
  /** @nocollapse */
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AnimationController,
    factory: AnimationController.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(AnimationController, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class ActionSheetController extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.OverlayBaseController {
  constructor() {
    super(_ionic_core__WEBPACK_IMPORTED_MODULE_10__.actionSheetController);
  }
  /** @nocollapse */
  static ɵfac = function ActionSheetController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ActionSheetController)();
  };
  /** @nocollapse */
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ActionSheetController,
    factory: ActionSheetController.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(ActionSheetController, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
class GestureController {
  zone;
  constructor(zone) {
    this.zone = zone;
  }
  /**
   * Create a new gesture
   */
  create(opts, runInsideAngularZone = false) {
    if (runInsideAngularZone) {
      Object.getOwnPropertyNames(opts).forEach(key => {
        if (typeof opts[key] === 'function') {
          const fn = opts[key];
          opts[key] = (...props) => this.zone.run(() => fn(...props));
        }
      });
    }
    return (0,_ionic_core__WEBPACK_IMPORTED_MODULE_10__.createGesture)(opts);
  }
  /** @nocollapse */
  static ɵfac = function GestureController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || GestureController)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  /** @nocollapse */
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: GestureController,
    factory: GestureController.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(GestureController, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();
class LoadingController extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.OverlayBaseController {
  constructor() {
    super(_ionic_core__WEBPACK_IMPORTED_MODULE_10__.loadingController);
  }
  /** @nocollapse */
  static ɵfac = function LoadingController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LoadingController)();
  };
  /** @nocollapse */
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: LoadingController,
    factory: LoadingController.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(LoadingController, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
class MenuController extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.MenuController {
  constructor() {
    super(_ionic_core__WEBPACK_IMPORTED_MODULE_10__.menuController);
  }
  /** @nocollapse */
  static ɵfac = function MenuController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MenuController)();
  };
  /** @nocollapse */
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: MenuController,
    factory: MenuController.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(MenuController, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
class ModalController extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.OverlayBaseController {
  angularDelegate = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.AngularDelegate);
  injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector);
  environmentInjector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.EnvironmentInjector);
  constructor() {
    super(_ionic_core__WEBPACK_IMPORTED_MODULE_10__.modalController);
  }
  create(opts) {
    const {
      injector: customInjector,
      ...restOpts
    } = opts;
    return super.create({
      ...restOpts,
      delegate: this.angularDelegate.create(this.environmentInjector, this.injector, 'modal', customInjector)
    });
  }
  /** @nocollapse */
  static ɵfac = function ModalController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ModalController)();
  };
  /** @nocollapse */
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ModalController,
    factory: ModalController.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(ModalController, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [];
  }, null);
})();

/**
 * @deprecated Use the inline ion-picker component instead.
 */
class PickerController extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.OverlayBaseController {
  constructor() {
    super(_ionic_core__WEBPACK_IMPORTED_MODULE_10__.pickerController);
  }
  /** @nocollapse */
  static ɵfac = function PickerController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PickerController)();
  };
  /** @nocollapse */
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: PickerController,
    factory: PickerController.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(PickerController, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
class PopoverController extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.OverlayBaseController {
  angularDelegate = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.AngularDelegate);
  injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector);
  environmentInjector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.EnvironmentInjector);
  constructor() {
    super(_ionic_core__WEBPACK_IMPORTED_MODULE_10__.popoverController);
  }
  create(opts) {
    const {
      injector: customInjector,
      ...restOpts
    } = opts;
    return super.create({
      ...restOpts,
      delegate: this.angularDelegate.create(this.environmentInjector, this.injector, 'popover', customInjector)
    });
  }
}
class ToastController extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.OverlayBaseController {
  constructor() {
    super(_ionic_core__WEBPACK_IMPORTED_MODULE_10__.toastController);
  }
  /** @nocollapse */
  static ɵfac = function ToastController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ToastController)();
  };
  /** @nocollapse */
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ToastController,
    factory: ToastController.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(ToastController, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();

// TODO(FW-2827): types
const appInitialize = (config, doc, zone) => {
  return () => {
    const win = doc.defaultView;
    if (win && typeof window !== 'undefined') {
      (0,_ionic_core__WEBPACK_IMPORTED_MODULE_10__.setupConfig)({
        ...config,
        _zoneGate: h => zone.run(h)
      });
      const aelFn = '__zone_symbol__addEventListener' in doc.body ? '__zone_symbol__addEventListener' : 'addEventListener';
      return (0,_ionic_core_loader__WEBPACK_IMPORTED_MODULE_11__.defineCustomElements)(win, {
        exclude: ['ion-tabs'],
        syncQueue: true,
        raf: _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.raf,
        jmp: h => zone.runOutsideAngular(h),
        ael(elm, eventName, cb, opts) {
          elm[aelFn](eventName, cb, opts);
        },
        rel(elm, eventName, cb, opts) {
          elm.removeEventListener(eventName, cb, opts);
        }
      });
    }
  };
};
const DIRECTIVES = [IonAccordion, IonAccordionGroup, IonActionSheet, IonAlert, IonApp, IonAvatar, IonBackdrop, IonBadge, IonBreadcrumb, IonBreadcrumbs, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonChip, IonCol, IonContent, IonDatetime, IonDatetimeButton, IonFab, IonFabButton, IonFabList, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonInputOtp, IonInputPasswordToggle, IonItem, IonItemDivider, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonLoading, IonMenu, IonMenuButton, IonMenuToggle, IonNavLink, IonNote, IonPicker, IonPickerColumn, IonPickerColumnOption, IonPickerLegacy, IonProgressBar, IonRadio, IonRadioGroup, IonRange, IonRefresher, IonRefresherContent, IonReorder, IonReorderGroup, IonRippleEffect, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonSelect, IonSelectModal, IonSelectOption, IonSkeletonText, IonSpinner, IonSplitPane, IonTab, IonTabBar, IonTabButton, IonText, IonTextarea, IonThumbnail, IonTitle, IonToast, IonToggle, IonToolbar];
const DECLARATIONS = [
// generated proxies
...DIRECTIVES,
// manual proxies
IonModal, IonPopover,
// ngModel accessors
BooleanValueAccessorDirective, NumericValueAccessorDirective, SelectValueAccessorDirective, TextValueAccessorDirective,
// navigation
IonTabs, IonRouterOutlet, IonBackButton, IonNav, RouterLinkDelegateDirective, RouterLinkWithHrefDelegateDirective,
// validators
IonMinValidator, IonMaxValidator];
class IonicModule {
  static forRoot(config = {}) {
    return {
      ngModule: IonicModule,
      providers: [{
        provide: _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.ConfigToken,
        useValue: config
      }, {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_INITIALIZER,
        useFactory: appInitialize,
        multi: true,
        deps: [_ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.ConfigToken, _angular_core__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone]
      }, _ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.AngularDelegate, (0,_ionic_angular_common__WEBPACK_IMPORTED_MODULE_4__.provideComponentInputBinding)()]
    };
  }
  /** @nocollapse */
  static ɵfac = function IonicModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonicModule)();
  };
  /** @nocollapse */
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: IonicModule
  });
  /** @nocollapse */
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    providers: [ModalController, PopoverController],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(IonicModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      declarations: DECLARATIONS,
      exports: DECLARATIONS,
      providers: [ModalController, PopoverController],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule]
    }]
  }], null, null);
})();

// DIRECTIVES

/**
 * Generated bundle index. Do not edit.
 */



/***/ }

}]);
//# sourceMappingURL=src_app_features_main_main_routes_ts.js.map