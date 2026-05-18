"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_features_main_main_routes_ts"],{

/***/ 5618
/*!****************************************************!*\
  !*** ./src/app/features/cars/cars.routes.const.ts ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ 8722
/*!************************************************************************!*\
  !*** ./src/app/features/cars/state/car-details/car-details.actions.ts ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
})(CarDetailsActions || (CarDetailsActions = {}));

/***/ },

/***/ 8899
/*!***********************************************************************!*\
  !*** ./src/app/features/cars/state/car-details/car-details.facade.ts ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarDetailsFacade: () => (/* binding */ CarDetailsFacade)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hau/features/cars/state/car-details/car-details.actions */ 8722);
/* harmony import */ var _hau_features_cars_state_car_details_car_details_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/features/cars/state/car-details/car-details.state */ 8076);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4363);






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
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_cars_state_car_details_car_details_state__WEBPACK_IMPORTED_MODULE_2__.CarDetailsState.carDocuments)], CarDetailsFacade.prototype, "carDocuments$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_cars_state_car_details_car_details_state__WEBPACK_IMPORTED_MODULE_2__.CarDetailsState.maintenanceRecords)], CarDetailsFacade.prototype, "maintenanceRecords$", void 0);

/***/ },

/***/ 8076
/*!**********************************************************************!*\
  !*** ./src/app/features/cars/state/car-details/car-details.state.ts ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarDetailsState: () => (/* binding */ CarDetailsState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _hau_app_routes_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hau/app.routes.const */ 5276);
/* harmony import */ var _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/features/cars/state/car-details/car-details.actions */ 8722);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hau/autogenapi/services */ 3977);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4059);








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
  }
};
let CarDetailsState = class CarDetailsState {
  constructor(_carService, _documentService, _maintenanceService, _navCtrl) {
    this._carService = _carService;
    this._documentService = _documentService;
    this._maintenanceService = _maintenanceService;
    this._navCtrl = _navCtrl;
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
  loadCurrentCar({
    dispatch
  }, {
    id
  }) {
    this._carService.carControllerGetCar({
      id
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe({
      next: response => dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_2__.CarDetailsActions.LoadCurrentCarSuccess(response)),
      error: err => dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_2__.CarDetailsActions.LoadCurrentCarError(err))
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
    dispatch
  }, {
    car
  }) {
    // Debug log: should show a flat object, not { car: { ... } }
    console.log('Payload to API:', car);
    this._carService.carControllerCreateCar({
      body: car
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe({
      next: () => dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_2__.CarDetailsActions.CreateCarSuccess()),
      error: err => dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_2__.CarDetailsActions.CreateCarError(err))
    });
  }
  createCarSuccess({
    patchState
  }) {
    this._navCtrl.navigateRoot([_hau_app_routes_const__WEBPACK_IMPORTED_MODULE_1__.HAU_ROUTES.cars.fullPath]);
  }
  createCarError(_, {
    err
  }) {
    console.error('Error creating car:', err);
  }
  updateCar({
    dispatch
  }, {
    car
  }) {
    this._carService.carControllerUpdateCar({
      body: car
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe({
      next: () => dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_2__.CarDetailsActions.UpdateCarSuccess()),
      error: err => dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_2__.CarDetailsActions.UpdateCarError(err))
    });
  }
  updateCarSuccess({
    patchState
  }) {
    this._navCtrl.navigateRoot([_hau_app_routes_const__WEBPACK_IMPORTED_MODULE_1__.HAU_ROUTES.cars.fullPath]);
  }
  updateCarError(_, {
    err
  }) {
    console.error('Error updating car:', err);
  }
  loadCarDocuments({
    dispatch
  }, {
    carId
  }) {
    this._documentService.documentControllerGetDocumentsByCarId({
      carId
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe({
      next: response => dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_2__.CarDetailsActions.LoadCarDocumentsSuccess(response)),
      error: err => dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_2__.CarDetailsActions.LoadCarDocumentsError(err))
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
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe({
      next: response => dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_2__.CarDetailsActions.LoadMaintenanceRecordsSuccess(response)),
      error: err => dispatch(new _hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_2__.CarDetailsActions.LoadMaintenanceRecordsError(err))
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
  static {
    this.ɵfac = function CarDetailsState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CarDetailsState)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_6__.CarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_6__.DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_6__.MaintenanceRecordService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: CarDetailsState,
      factory: CarDetailsState.ɵfac
    });
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_2__.CarDetailsActions.LoadCurrentCar)], CarDetailsState.prototype, "loadCurrentCar", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_2__.CarDetailsActions.LoadCurrentCarSuccess)], CarDetailsState.prototype, "loadCurrentCarSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_2__.CarDetailsActions.LoadCurrentCarError)], CarDetailsState.prototype, "loadCurrentCarError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_2__.CarDetailsActions.CreateCar)], CarDetailsState.prototype, "createCar", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_2__.CarDetailsActions.CreateCarSuccess)], CarDetailsState.prototype, "createCarSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_2__.CarDetailsActions.CreateCarError)], CarDetailsState.prototype, "createCarError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_2__.CarDetailsActions.UpdateCar)], CarDetailsState.prototype, "updateCar", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_2__.CarDetailsActions.UpdateCarSuccess)], CarDetailsState.prototype, "updateCarSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_2__.CarDetailsActions.UpdateCarError)], CarDetailsState.prototype, "updateCarError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_2__.CarDetailsActions.LoadCarDocuments)], CarDetailsState.prototype, "loadCarDocuments", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_2__.CarDetailsActions.LoadCarDocumentsSuccess)], CarDetailsState.prototype, "loadCarDocumentsSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_2__.CarDetailsActions.LoadCarDocumentsError)], CarDetailsState.prototype, "loadCarDocumentsError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_2__.CarDetailsActions.LoadMaintenanceRecords)], CarDetailsState.prototype, "loadMaintenanceRecords", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_2__.CarDetailsActions.LoadMaintenanceRecordsSuccess)], CarDetailsState.prototype, "loadMaintenanceRecordsSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_details_car_details_actions__WEBPACK_IMPORTED_MODULE_2__.CarDetailsActions.LoadMaintenanceRecordsError)], CarDetailsState.prototype, "loadMaintenanceRecordsError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Selector)()], CarDetailsState, "currentCar", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Selector)()], CarDetailsState, "loading", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Selector)()], CarDetailsState, "carDocuments", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Selector)()], CarDetailsState, "maintenanceRecords", null);
CarDetailsState = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.State)({
  name: 'carDetails',
  defaults: initialCarDetailsState
})], CarDetailsState);


/***/ },

/***/ 4510
/*!******************************************************************!*\
  !*** ./src/app/features/cars/state/car-list/car-list.actions.ts ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
})(CarListActions || (CarListActions = {}));

/***/ },

/***/ 6295
/*!*****************************************************************!*\
  !*** ./src/app/features/cars/state/car-list/car-list.facade.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarListFacade: () => (/* binding */ CarListFacade)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hau/features/cars/state/car-list/car-list.actions */ 4510);
/* harmony import */ var _hau_features_cars_state_car_list_car_list_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/features/cars/state/car-list/car-list.state */ 8056);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4363);






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
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_cars_state_car_list_car_list_state__WEBPACK_IMPORTED_MODULE_2__.CarListState.loading)], CarListFacade.prototype, "loading$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_cars_state_car_list_car_list_state__WEBPACK_IMPORTED_MODULE_2__.CarListState.carDocumentsMap)], CarListFacade.prototype, "carDocumentsMap$", void 0);

/***/ },

/***/ 8056
/*!****************************************************************!*\
  !*** ./src/app/features/cars/state/car-list/car-list.state.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarListState: () => (/* binding */ CarListState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _hau_features_cars_state_car_details_car_details_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hau/features/cars/state/car-details/car-details.state */ 8076);
/* harmony import */ var _hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/features/cars/state/car-list/car-list.actions */ 4510);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 8267);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4334);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @hau/autogenapi/services */ 3977);







const initialCarListState = {
  list: {
    loading: true,
    items: []
  },
  carDocumentsMap: {}
};
let CarListState = class CarListState {
  constructor(_carService, _documentService) {
    this._carService = _carService;
    this._documentService = _documentService;
  }
  static carList(state) {
    return state.list.items;
  }
  static loading(state) {
    return state.list.loading;
  }
  static carDocumentsMap(state) {
    return state.carDocumentsMap;
  }
  loadCarList({
    patchState,
    dispatch
  }) {
    // Set loading state to true
    patchState({
      list: {
        loading: true,
        items: []
      }
    });
    return this._carService.carControllerGetAllCars().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)({
      next: response => dispatch(new _hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadCarListSuccess(response)),
      error: err => dispatch(new _hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadCarListError(err))
    }));
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
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)({
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
  static {
    this.ɵfac = function CarListState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CarListState)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_7__.CarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_7__.DocumentService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: CarListState,
      factory: CarListState.ɵfac
    });
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadCarList)], CarListState.prototype, "loadCarList", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadCarListSuccess)], CarListState.prototype, "loadCarListSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadCarListError)], CarListState.prototype, "loadCarListError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadCarDocuments)], CarListState.prototype, "loadCarDocuments", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadCarDocumentsSuccess)], CarListState.prototype, "loadCarDocumentsSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Action)(_hau_features_cars_state_car_list_car_list_actions__WEBPACK_IMPORTED_MODULE_2__.CarListActions.LoadCarDocumentsError)], CarListState.prototype, "loadCarDocumentsError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Selector)()], CarListState, "carList", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Selector)()], CarListState, "loading", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Selector)()], CarListState, "carDocumentsMap", null);
CarListState = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.State)({
  name: 'cars',
  defaults: initialCarListState,
  children: [_hau_features_cars_state_car_details_car_details_state__WEBPACK_IMPORTED_MODULE_1__.CarDetailsState]
})], CarListState);


/***/ },

/***/ 442
/*!*************************************************!*\
  !*** ./src/app/features/main/main.component.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainComponent: () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular/standalone */ 7241);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1567);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ 6075);
/* harmony import */ var _hau_features_cars_cars_routes_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hau/features/cars/cars.routes.const */ 5618);
/* harmony import */ var _hau_app_routes_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hau/app.routes.const */ 5276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _hau_features_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @hau/features/auth/auth.service */ 6256);









const _c0 = a0 => ({
  count: a0
});
const _forTrack0 = ($index, $item) => $item.key;
function MainComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MainComponent_For_32_Template_ion_item_click_0_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.navigateTo(item_r2.route, item_r2.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.isActive(item_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 4, item_r2.labelKey));
  }
}
const ICON_BASE = 'assets/icons';
class MainComponent {
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
    this.vehicleCount = 3;
    this.currentPath = this.router.url;
    this.selectedMenuItem = this.resolveActiveMenuItem(this.router.url);
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
      route: '/main/cars'
    }, {
      key: 'maintenance',
      labelKey: 'sidebar.nav.maintenance',
      icon: `${ICON_BASE}/hau-wrench.svg`,
      route: '/main/cars'
    }, {
      key: 'reports',
      labelKey: 'sidebar.nav.reports',
      icon: `${ICON_BASE}/hau-chart.svg`,
      route: '/main/cars'
    }, {
      key: 'blog',
      labelKey: 'sidebar.nav.blog',
      icon: `${ICON_BASE}/hau-pencil.svg`,
      route: '/main/cars'
    }];
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd)).subscribe(() => {
      this.currentPath = this.router.url;
      this.selectedMenuItem = this.resolveActiveMenuItem(this.currentPath);
    });
  }
  navigateTo(route, key) {
    this.selectedMenuItem = key;
    void this.router.navigate([route]);
  }
  navigateToHome() {
    void this.router.navigate([_hau_app_routes_const__WEBPACK_IMPORTED_MODULE_5__.HAU_ROUTES.overview.fullPath]);
  }
  navigateToAddVehicle() {
    void this.router.navigate([_hau_features_cars_cars_routes_const__WEBPACK_IMPORTED_MODULE_4__.CARS_ROUTES.create.fullPath]);
  }
  navigateToSettings() {
    void this.router.navigate(['/main/cars']);
  }
  isActive(item) {
    return this.selectedMenuItem === item.key;
  }
  resolveActiveMenuItem(path) {
    if (path.startsWith(_hau_app_routes_const__WEBPACK_IMPORTED_MODULE_5__.HAU_ROUTES.cars.fullPath)) {
      return 'garage';
    }
    if (path.startsWith(_hau_app_routes_const__WEBPACK_IMPORTED_MODULE_5__.HAU_ROUTES.overview.fullPath)) {
      return 'overview';
    }
    return 'overview';
  }
  logout() {
    this.authService.logout('');
    void this.router.navigate([_hau_app_routes_const__WEBPACK_IMPORTED_MODULE_5__.HAU_ROUTES.auth.fullPath]);
  }
  static {
    this.ɵfac = function MainComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_hau_features_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 87,
      vars: 50,
      consts: [["contentId", "main-content", "when", "md"], ["contentId", "main-content", "side", "start", "type", "overlay", 1, "app-sidebar"], [1, "menu-content"], [1, "sidebar-inner"], [1, "sidebar-top"], [1, "sidebar-hero"], [1, "hero-logo"], [3, "src"], [1, "hero-text"], [1, "hero-title"], [1, "hero-tag"], [1, "garage-card"], [1, "garage-icon-wrap"], [1, "garage-summary"], [1, "garage-name"], [1, "garage-count"], [1, "garage-chevron", 3, "src"], [1, "sidebar-body"], ["lines", "none", 1, "sidebar-nav"], [1, "nav-section-title"], ["button", "", "detail", "false", 1, "nav-item", 3, "active"], [1, "attention-panel"], [1, "attention-heading"], [1, "attention-icon-wrap"], [1, "attention-chevron", 3, "src"], [1, "attention-notes"], [1, "attention-note"], [1, "note-bullet"], ["expand", "block", "fill", "solid", 1, "add-vehicle-btn", 3, "click"], ["slot", "start", 3, "src"], [1, "sidebar-footer"], ["button", "", "detail", "false", 1, "footer-item", 3, "click"], ["slot", "end", 1, "footer-chevron", 3, "src"], ["button", "", "detail", "false", 1, "footer-item", "logout", 3, "click"], [1, "sidebar-version"], [1, "version-sep"], [1, "version-check", 3, "src"], ["id", "main-content", 1, "ion-page"], ["slot", "start"], [2, "cursor", "pointer", 3, "click"], [1, "ion-padding"], ["button", "", "detail", "false", 1, "nav-item", 3, "click"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-split-pane", 0)(1, "ion-menu", 1)(2, "ion-content", 2)(3, "div", 3)(4, "div", 4)(5, "section", 5)(6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "ion-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 8)(9, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 11)(16, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "ion-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 13)(19, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "ion-icon", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 17)(27, "ion-list", 18)(28, "ion-list-header", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](30, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](31, MainComponent_For_32_Template, 5, 6, "ion-item", 20, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "section", 21)(34, "div", 22)(35, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "ion-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](39, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "ion-icon", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 25)(42, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](46, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](48, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](51, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "ion-button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MainComponent_Template_ion_button_click_52_listener() {
            return ctx.navigateToAddVehicle();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](53, "ion-icon", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](55, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 30)(57, "ion-item", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MainComponent_Template_ion_item_click_57_listener() {
            return ctx.navigateToSettings();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](58, "ion-icon", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](61, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](62, "ion-icon", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "ion-item", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MainComponent_Template_ion_item_click_63_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](64, "ion-icon", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](67, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](68, "ion-icon", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 34)(70, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "v1.4.0");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "span", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "\u2022");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, "You're up to date");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](76, "ion-icon", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 37)(78, "ion-header")(79, "ion-toolbar")(80, "ion-buttons", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](81, "ion-menu-button");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "ion-title", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MainComponent_Template_ion_title_click_82_listener() {
            return ctx.navigateToHome();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](84, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "ion-content", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](86, "ion-router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.icons.car);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 23, "homepage"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 25, "sidebar.slogan"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.icons.home);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 27, "sidebar.myGarage"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](24, 29, "sidebar.myGarageVehicles", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](48, _c0, ctx.vehicleCount)));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.icons.chevron);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](30, 32, "sidebar.mainSection"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx.menuItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.icons.warning);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](39, 34, "sidebar.attention.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.icons.chevron);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](46, 36, "sidebar.attention.documents"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](51, 38, "sidebar.attention.service"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.icons.add);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](55, 40, "sidebar.addVehicle"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.icons.settings);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](61, 42, "sidebar.settings"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.icons.chevron);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.icons.logout);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](67, 44, "sidebar.logout"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.icons.chevron);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.icons.checkCircle);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](84, 46, "homepage"), " ");
        }
      },
      dependencies: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__.IonSplitPane, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__.IonButtons, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__.IonTitle, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__.IonMenuButton, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__.IonToolbar, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__.IonHeader, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__.IonMenu, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__.IonRouterOutlet, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__.IonList, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__.IonListHeader, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__.IonItem, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__.IonLabel, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__.IonIcon, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_1__.IonButton, _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__.TranslocoPipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  --sb-bg: var(--hau-surface);\n  --sb-surface: var(--hau-surface-soft);\n  --sb-border: var(--hau-border);\n  --sb-text: var(--hau-text);\n  --sb-text-muted: var(--hau-text-muted);\n  --sb-text-dim: var(--hau-text-dim);\n  --sb-accent: var(--hau-primary);\n  --sb-accent-dark: var(--hau-primary-strong);\n  --sb-accent-light: var(--hau-primary-soft);\n  --sb-accent-lighter: rgba(37, 99, 235, 0.06);\n  --sb-accent-shadow: var(--hau-primary-shadow);\n  --sb-warn-bg: var(--hau-warning-bg);\n  --sb-warn-border: var(--hau-warning-border);\n  --sb-warn-icon: var(--hau-warning-fg);\n  --sb-warn-icon-bg: var(--hau-warning-soft);\n  --sb-danger: var(--hau-danger-fg);\n  --sb-success: var(--hau-success-fg);\n  --sb-r-sm: var(--hau-radius-sm);\n  --sb-r-md: var(--hau-radius-md);\n  --sb-r-lg: var(--hau-radius-lg);\n  --sb-r-xl: var(--hau-radius-xl);\n  --sb-r-2xl: var(--hau-radius-2xl);\n  --sb-r-pill: var(--hau-radius-pill);\n}\n\nion-split-pane[_ngcontent-%COMP%] {\n  --side-width: 280px;\n  --side-min-width: 260px;\n  --side-max-width: 300px;\n  --border: 1px solid var(--sb-border);\n}\n\n.app-sidebar[_ngcontent-%COMP%] {\n  --width: min(92vw, 340px);\n  --backdrop-opacity: 0.18;\n}\n@media (min-width: 576px) {\n  .app-sidebar[_ngcontent-%COMP%] {\n    --width: 300px;\n  }\n}\n@media (min-width: 768px) {\n  .app-sidebar[_ngcontent-%COMP%] {\n    --width: 280px;\n  }\n}\n\n.menu-content[_ngcontent-%COMP%] {\n  --background: var(--sb-bg);\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\n.sidebar-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  padding: 20px 14px 18px;\n  box-sizing: border-box;\n}\n@media (min-width: 576px) {\n  .sidebar-inner[_ngcontent-%COMP%] {\n    padding: 26px 18px 22px;\n  }\n}\n@media (min-width: 768px) {\n  .sidebar-inner[_ngcontent-%COMP%] {\n    padding: 28px 20px 24px;\n  }\n}\n\n.sidebar-top[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding-bottom: 18px;\n  border-bottom: 1px solid var(--sb-border);\n  margin-bottom: 6px;\n}\n\n.sidebar-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.hero-logo[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 46px;\n  height: 46px;\n  border-radius: var(--sb-r-md);\n  background: var(--sb-accent);\n  box-shadow: 0 4px 14px var(--sb-accent-shadow);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hero-logo[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.45rem;\n  color: #ffffff;\n}\n\n.hero-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: var(--sb-text);\n  line-height: 1.2;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@media (min-width: 576px) {\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 1.06rem;\n  }\n}\n\n.hero-tag[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.2em;\n  color: var(--sb-text-dim);\n}\n@media (min-width: 576px) {\n  .hero-tag[_ngcontent-%COMP%] {\n    font-size: 0.63rem;\n  }\n}\n\n.garage-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 13px 15px;\n  background: var(--sb-bg);\n  border: 1px solid rgba(37, 99, 235, 0.13);\n  border-radius: var(--sb-r-xl);\n  box-shadow: 0 2px 14px rgba(37, 99, 235, 0.07);\n  cursor: pointer;\n  transition: box-shadow 0.22s ease, border-color 0.22s ease;\n}\n.garage-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 22px rgba(37, 99, 235, 0.13);\n  border-color: rgba(37, 99, 235, 0.26);\n}\n@media (min-width: 576px) {\n  .garage-card[_ngcontent-%COMP%] {\n    padding: 15px 17px;\n  }\n}\n\n.garage-icon-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: var(--sb-r-sm);\n  background: var(--sb-accent-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.garage-icon-wrap[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  color: var(--sb-accent);\n}\n\n.garage-summary[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.garage-name[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--sb-text);\n}\n\n.garage-count[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--sb-text-muted);\n  margin-top: 1px;\n}\n\n.garage-chevron[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 1rem;\n  color: var(--sb-text-dim);\n}\n\n.sidebar-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding-top: 4px;\n}\n\n.sidebar-nav[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  background: transparent !important;\n}\n\n.nav-section-title[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: var(--sb-text-dim);\n  padding-left: 14px;\n  margin-bottom: 2px;\n  min-height: auto;\n}\n@media (min-width: 576px) {\n  .nav-section-title[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n  }\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  --background-activated: var(--sb-accent-light);\n  --background-hover: transparent;\n  --background-focused: transparent;\n  --border-radius: var(--sb-r-md);\n  --padding-start: 14px;\n  --padding-end: 14px;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --min-height: 46px;\n  --inner-padding-end: 0;\n  --color: var(--sb-text);\n  --ripple-color: var(--sb-accent-light);\n  margin: 2px 0;\n  border-radius: var(--sb-r-md);\n  position: relative;\n  overflow: visible;\n  transition: background 0.18s ease, color 0.18s ease, transform 0.15s ease;\n}\n.nav-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--sb-text-dim);\n  transition: color 0.18s ease;\n  margin-right: 4px;\n}\n.nav-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  --background: var(--sb-accent-light);\n  --color: var(--sb-accent);\n}\n.nav-item.active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--sb-accent);\n}\n.nav-item.active[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  height: 60%;\n  width: 3.5px;\n  border-radius: 0 var(--sb-r-pill) var(--sb-r-pill) 0;\n  background: var(--sb-accent);\n}\n.nav-item[_ngcontent-%COMP%]:not(.active):hover {\n  background: rgba(15, 23, 42, 0.035);\n  transform: translateX(2px);\n}\n\n.attention-panel[_ngcontent-%COMP%] {\n  background: var(--sb-warn-bg);\n  border: 1px solid var(--sb-warn-border);\n  border-radius: var(--sb-r-xl);\n  padding: 13px 14px 14px;\n  cursor: pointer;\n  transition: box-shadow 0.22s ease;\n}\n.attention-panel[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 14px rgba(245, 158, 11, 0.13);\n}\n\n.attention-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  font-size: 0.87rem;\n  font-weight: 800;\n  color: var(--sb-text);\n  margin-bottom: 10px;\n}\n\n.attention-icon-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: var(--sb-warn-icon-bg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.attention-icon-wrap[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--sb-warn-icon);\n}\n\n.attention-chevron[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.9rem;\n  color: var(--sb-text-dim);\n}\n\n.attention-notes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding-left: 2px;\n}\n\n.attention-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  font-size: 0.82rem;\n  color: #374151;\n  line-height: 1.45;\n}\n\n.note-bullet[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: var(--sb-warn-icon);\n  margin-top: 6px;\n}\n\n.add-vehicle-btn[_ngcontent-%COMP%] {\n  --background: var(--sb-accent);\n  --background-activated: var(--sb-accent-dark);\n  --background-hover: var(--sb-accent-dark);\n  --background-focused: var(--sb-accent-dark);\n  --border-radius: var(--sb-r-2xl);\n  --box-shadow: 0 4px 18px var(--sb-accent-shadow);\n  --color: #ffffff;\n  --padding-top: 14px;\n  --padding-bottom: 14px;\n  font-weight: 700;\n  font-size: 0.92rem;\n  letter-spacing: 0.01em;\n  text-transform: none;\n  height: 50px;\n  margin: 0;\n}\n.add-vehicle-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n}\n\n.sidebar-footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: 14px;\n  border-top: 1px solid var(--sb-border);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.footer-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  --background-activated: rgba(15, 23, 42, 0.05);\n  --background-hover: transparent;\n  --border-radius: var(--sb-r-md);\n  --padding-start: 14px;\n  --padding-end: 8px;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --min-height: 44px;\n  --inner-padding-end: 8px;\n  --color: var(--sb-text-muted);\n  --detail-icon-color: var(--sb-text-dim);\n  --detail-icon-font-size: 0.85rem;\n  border-radius: var(--sb-r-md);\n  transition: background 0.18s ease, color 0.18s ease;\n}\n.footer-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--sb-text-dim);\n  transition: color 0.18s ease;\n}\n.footer-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 600;\n}\n.footer-item[_ngcontent-%COMP%]:hover {\n  --color: var(--sb-text);\n  background: rgba(15, 23, 42, 0.04);\n}\n.footer-item[_ngcontent-%COMP%]:hover   ion-icon[_ngcontent-%COMP%] {\n  color: var(--sb-text-muted);\n}\n.footer-item.logout[_ngcontent-%COMP%]:hover {\n  --color: var(--sb-danger);\n}\n.footer-item.logout[_ngcontent-%COMP%]:hover   ion-icon[_ngcontent-%COMP%] {\n  color: var(--sb-danger);\n}\n\n.sidebar-version[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 10px 14px 2px;\n  font-size: 0.71rem;\n  font-weight: 500;\n  color: var(--sb-text-dim);\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.version-sep[_ngcontent-%COMP%] {\n  opacity: 0.45;\n}\n\n.version-check[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--sb-success);\n  margin-left: 1px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsY0FBQTtFQUdBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSw4QkFBQTtFQUVBLDBCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQ0FBQTtFQUVBLCtCQUFBO0VBQ0EsMkNBQUE7RUFDQSwwQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsNkNBQUE7RUFFQSxtQ0FBQTtFQUNBLDJDQUFBO0VBQ0EscUNBQUE7RUFDQSwwQ0FBQTtFQUVBLGlDQUFBO0VBQ0EsbUNBQUE7RUFFQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7QUFURjs7QUFlQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0FBWkY7O0FBa0JBO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtBQWZGO0FBaUJFO0VBSkY7SUFJOEIsY0FBQTtFQWI1QjtBQUNGO0FBYUU7RUFMRjtJQUs4QixjQUFBO0VBVDVCO0FBQ0Y7O0FBY0E7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBWEY7O0FBaUJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBZEY7QUFnQkU7RUFQRjtJQU84Qix1QkFBQTtFQVo1QjtBQUNGO0FBWUU7RUFSRjtJQVE4Qix1QkFBQTtFQVI1QjtBQUNGOztBQWFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtBQVZGOztBQWNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQVhGOztBQWNBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFYRjtBQWFFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBWEo7O0FBZUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQVpGOztBQWVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQVpGO0FBY0U7RUFURjtJQVM4QixrQkFBQTtFQVY1QjtBQUNGOztBQVlBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQVRGO0FBV0U7RUFQRjtJQU84QixrQkFBQTtFQVA1QjtBQUNGOztBQVVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsOENBQUE7RUFDQSxlQUFBO0VBQ0EsMERBQUE7QUFQRjtBQVNFO0VBQ0UsOENBQUE7RUFDQSxxQ0FBQTtBQVBKO0FBVUU7RUFqQkY7SUFpQjhCLGtCQUFBO0VBTjVCO0FBQ0Y7O0FBUUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFMRjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtBQUxKOztBQVNBO0VBQ0UsT0FBQTtFQUNBLFlBQUE7QUFORjs7QUFTQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQU5GOztBQVNBO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFORjs7QUFTQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFORjs7QUFZQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFhQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7QUFWRjs7QUFhQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFWRjtBQVlFO0VBVkY7SUFVOEIsa0JBQUE7RUFSNUI7QUFDRjs7QUFVQTtFQUNFLHlCQUFBO0VBQ0EsOENBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0VBRUEsYUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlFQUFBO0FBUkY7QUFVRTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FBUko7QUFXRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQVRKO0FBWUU7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0FBVko7QUFZSTtFQUFXLHVCQUFBO0FBVGY7QUFZSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9EQUFBO0VBQ0EsNEJBQUE7QUFWTjtBQWNFO0VBQ0UsbUNBQUE7RUFDQSwwQkFBQTtBQVpKOztBQWlCQTtFQUNFLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBZEY7QUFnQkU7RUFDRSwrQ0FBQTtBQWRKOztBQWtCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQWZGOztBQWtCQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWZGO0FBaUJFO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0FBZko7O0FBbUJBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBaEJGOztBQW1CQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtBQWhCRjs7QUFtQkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUFoQkY7O0FBb0JBO0VBQ0UsOEJBQUE7RUFDQSw2Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQWpCRjtBQW1CRTtFQUFXLGtCQUFBO0FBaEJiOztBQXNCQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFuQkY7O0FBc0JBO0VBQ0UseUJBQUE7RUFDQSw4Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFFQSw2QkFBQTtFQUNBLG1EQUFBO0FBcEJGO0FBc0JFO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFwQko7QUF1QkU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBckJKO0FBd0JFO0VBQ0UsdUJBQUE7RUFDQSxrQ0FBQTtBQXRCSjtBQXVCSTtFQUFXLDJCQUFBO0FBcEJmO0FBdUJFO0VBQ0UseUJBQUE7QUFyQko7QUFzQkk7RUFBVyx1QkFBQTtBQW5CZjs7QUF3QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBckJGOztBQXdCQTtFQUNFLGFBQUE7QUFyQkY7O0FBd0JBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBckJGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyBEZXNpZ24gdG9rZW5zXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgLy8gTWFwIGxvY2FsIHRva2VucyB0byBnbG9iYWwgSEFVIGRlc2lnbiBzeXN0ZW1cbiAgLS1zYi1iZzogICAgICAgICAgICAgdmFyKC0taGF1LXN1cmZhY2UpO1xuICAtLXNiLXN1cmZhY2U6ICAgICAgICB2YXIoLS1oYXUtc3VyZmFjZS1zb2Z0KTtcbiAgLS1zYi1ib3JkZXI6ICAgICAgICAgdmFyKC0taGF1LWJvcmRlcik7XG5cbiAgLS1zYi10ZXh0OiAgICAgICAgICAgdmFyKC0taGF1LXRleHQpO1xuICAtLXNiLXRleHQtbXV0ZWQ6ICAgICB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7XG4gIC0tc2ItdGV4dC1kaW06ICAgICAgIHZhcigtLWhhdS10ZXh0LWRpbSk7XG5cbiAgLS1zYi1hY2NlbnQ6ICAgICAgICAgdmFyKC0taGF1LXByaW1hcnkpO1xuICAtLXNiLWFjY2VudC1kYXJrOiAgICB2YXIoLS1oYXUtcHJpbWFyeS1zdHJvbmcpO1xuICAtLXNiLWFjY2VudC1saWdodDogICB2YXIoLS1oYXUtcHJpbWFyeS1zb2Z0KTtcbiAgLS1zYi1hY2NlbnQtbGlnaHRlcjogcmdiYSgzNywgOTksIDIzNSwgMC4wNik7XG4gIC0tc2ItYWNjZW50LXNoYWRvdzogIHZhcigtLWhhdS1wcmltYXJ5LXNoYWRvdyk7XG5cbiAgLS1zYi13YXJuLWJnOiAgICAgICAgdmFyKC0taGF1LXdhcm5pbmctYmcpO1xuICAtLXNiLXdhcm4tYm9yZGVyOiAgICB2YXIoLS1oYXUtd2FybmluZy1ib3JkZXIpO1xuICAtLXNiLXdhcm4taWNvbjogICAgICB2YXIoLS1oYXUtd2FybmluZy1mZyk7XG4gIC0tc2Itd2Fybi1pY29uLWJnOiAgIHZhcigtLWhhdS13YXJuaW5nLXNvZnQpO1xuXG4gIC0tc2ItZGFuZ2VyOiAgICAgICAgIHZhcigtLWhhdS1kYW5nZXItZmcpO1xuICAtLXNiLXN1Y2Nlc3M6ICAgICAgICB2YXIoLS1oYXUtc3VjY2Vzcy1mZyk7XG5cbiAgLS1zYi1yLXNtOiAgIHZhcigtLWhhdS1yYWRpdXMtc20pO1xuICAtLXNiLXItbWQ6ICAgdmFyKC0taGF1LXJhZGl1cy1tZCk7XG4gIC0tc2Itci1sZzogICB2YXIoLS1oYXUtcmFkaXVzLWxnKTtcbiAgLS1zYi1yLXhsOiAgIHZhcigtLWhhdS1yYWRpdXMteGwpO1xuICAtLXNiLXItMnhsOiAgdmFyKC0taGF1LXJhZGl1cy0yeGwpO1xuICAtLXNiLXItcGlsbDogdmFyKC0taGF1LXJhZGl1cy1waWxsKTtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyBTcGxpdC1wYW5lIChwZXJzaXN0ZW50IHNpZGViYXIgb24gw6LCicKlNzY4IHB4KVxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG5pb24tc3BsaXQtcGFuZSB7XG4gIC0tc2lkZS13aWR0aDogICAgIDI4MHB4O1xuICAtLXNpZGUtbWluLXdpZHRoOiAyNjBweDtcbiAgLS1zaWRlLW1heC13aWR0aDogMzAwcHg7XG4gIC0tYm9yZGVyOiAgICAgICAgIDFweCBzb2xpZCB2YXIoLS1zYi1ib3JkZXIpO1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIE1lbnUgc2hlbGxcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmFwcC1zaWRlYmFyIHtcbiAgLS13aWR0aDogICAgICAgICAgICBtaW4oOTJ2dywgMzQwcHgpO1xuICAtLWJhY2tkcm9wLW9wYWNpdHk6IDAuMTg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7IC0td2lkdGg6IDMwMHB4OyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyAtLXdpZHRoOiAyODBweDsgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIGlvbi1jb250ZW50OiByZXNldCBwYWRkaW5nLCBzZXQgYmFja2dyb3VuZFxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ubWVudS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAgICB2YXIoLS1zYi1iZyk7XG4gIC0tcGFkZGluZy10b3A6ICAgIDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy1zdGFydDogIDA7XG4gIC0tcGFkZGluZy1lbmQ6ICAgIDA7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gSW5uZXIgZmxleCBjb2x1bW4gIChmaWxscyBpb24tY29udGVudCdzIHNjcm9sbCBjb250YWluZXIpXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5zaWRlYmFyLWlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjBweCAxNHB4IDE4cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7IHBhZGRpbmc6IDI2cHggMThweCAyMnB4OyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyBwYWRkaW5nOiAyOHB4IDIwcHggMjRweDsgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIFRPUCDDosKAwpQgaGVybyArIGdhcmFnZSBjYXJkXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5zaWRlYmFyLXRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDE4cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zYi1ib3JkZXIpO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBIZXJvIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnNpZGViYXItaGVybyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbn1cblxuLmhlcm8tbG9nbyB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogNDZweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zYi1yLW1kKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2ItYWNjZW50KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTRweCB2YXIoLS1zYi1hY2NlbnQtc2hhZG93KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS40NXJlbTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuXG4uaGVyby10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycHg7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmhlcm8tdGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiB2YXIoLS1zYi10ZXh0KTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7IGZvbnQtc2l6ZTogMS4wNnJlbTsgfVxufVxuXG4uaGVyby10YWcge1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xuICBjb2xvcjogdmFyKC0tc2ItdGV4dC1kaW0pO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgeyBmb250LXNpemU6IDAuNjNyZW07IH1cbn1cblxuLy8gw6LClMKAw6LClMKAIEdhcmFnZSBjYXJkIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmdhcmFnZS1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxM3B4IDE1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNiLWJnKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzNywgOTksIDIzNSwgMC4xMyk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNiLXIteGwpO1xuICBib3gtc2hhZG93OiAwIDJweCAxNHB4IHJnYmEoMzcsIDk5LCAyMzUsIDAuMDcpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4yMnMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMjJzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMjJweCByZ2JhKDM3LCA5OSwgMjM1LCAwLjEzKTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMzcsIDk5LCAyMzUsIDAuMjYpO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7IHBhZGRpbmc6IDE1cHggMTdweDsgfVxufVxuXG4uZ2FyYWdlLWljb24td3JhcCB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zYi1yLXNtKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2ItYWNjZW50LWxpZ2h0KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tc2ItYWNjZW50KTtcbiAgfVxufVxuXG4uZ2FyYWdlLXN1bW1hcnkge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5nYXJhZ2UtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tc2ItdGV4dCk7XG59XG5cbi5nYXJhZ2UtY291bnQge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IHZhcigtLXNiLXRleHQtbXV0ZWQpO1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi5nYXJhZ2UtY2hldnJvbiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS1zYi10ZXh0LWRpbSk7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gQk9EWVxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uc2lkZWJhci1ib2R5IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4vLyDDosKUwoDDosKUwoAgTmF2aWdhdGlvbiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5zaWRlYmFyLW5hdiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLm5hdi1zZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjYycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4yMmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogdmFyKC0tc2ItdGV4dC1kaW0pO1xuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgbWluLWhlaWdodDogYXV0bztcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHsgZm9udC1zaXplOiAwLjY1cmVtOyB9XG59XG5cbi5uYXYtaXRlbSB7XG4gIC0tYmFja2dyb3VuZDogICAgICAgICAgIHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1zYi1hY2NlbnQtbGlnaHQpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICAgICB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICAgdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogICAgICAgIHZhcigtLXNiLXItbWQpO1xuICAtLXBhZGRpbmctc3RhcnQ6ICAgICAgICAxNHB4O1xuICAtLXBhZGRpbmctZW5kOiAgICAgICAgICAxNHB4O1xuICAtLXBhZGRpbmctdG9wOiAgICAgICAgICAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAgICAgICAwO1xuICAtLW1pbi1oZWlnaHQ6ICAgICAgICAgICA0NnB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAgICAwO1xuICAtLWNvbG9yOiAgICAgICAgICAgICAgICB2YXIoLS1zYi10ZXh0KTtcbiAgLS1yaXBwbGUtY29sb3I6ICAgICAgICAgdmFyKC0tc2ItYWNjZW50LWxpZ2h0KTtcblxuICBtYXJnaW46IDJweCAwO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zYi1yLW1kKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE4cyBlYXNlLCBjb2xvciAwLjE4cyBlYXNlLCB0cmFuc2Zvcm0gMC4xNXMgZWFzZTtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgY29sb3I6IHZhcigtLXNiLXRleHQtZGltKTtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE4cyBlYXNlO1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xuICB9XG5cbiAgJi5hY3RpdmUge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tc2ItYWNjZW50LWxpZ2h0KTtcbiAgICAtLWNvbG9yOiAgICAgIHZhcigtLXNiLWFjY2VudCk7XG5cbiAgICBpb24taWNvbiB7IGNvbG9yOiB2YXIoLS1zYi1hY2NlbnQpOyB9XG5cbiAgICAvLyBMZWZ0IGFjY2VudCBiYXJcbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICBoZWlnaHQ6IDYwJTtcbiAgICAgIHdpZHRoOiAzLjVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgdmFyKC0tc2Itci1waWxsKSB2YXIoLS1zYi1yLXBpbGwpIDA7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zYi1hY2NlbnQpO1xuICAgIH1cbiAgfVxuXG4gICY6bm90KC5hY3RpdmUpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyMywgNDIsIDAuMDM1KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KTtcbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgQXR0ZW50aW9uIHBhbmVsIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmF0dGVudGlvbi1wYW5lbCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNiLXdhcm4tYmcpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zYi13YXJuLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNiLXIteGwpO1xuICBwYWRkaW5nOiAxM3B4IDE0cHggMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjJzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDI0NSwgMTU4LCAxMSwgMC4xMyk7XG4gIH1cbn1cblxuLmF0dGVudGlvbi1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA5cHg7XG4gIGZvbnQtc2l6ZTogMC44N3JlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHZhcigtLXNiLXRleHQpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYXR0ZW50aW9uLWljb24td3JhcCB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNiLXdhcm4taWNvbi1iZyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IHZhcigtLXNiLXdhcm4taWNvbik7XG4gIH1cbn1cblxuLmF0dGVudGlvbi1jaGV2cm9uIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogdmFyKC0tc2ItdGV4dC1kaW0pO1xufVxuXG4uYXR0ZW50aW9uLW5vdGVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA2cHg7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xufVxuXG4uYXR0ZW50aW9uLW5vdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiA4cHg7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgY29sb3I6ICMzNzQxNTE7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xufVxuXG4ubm90ZS1idWxsZXQge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Itd2Fybi1pY29uKTtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4vLyDDosKUwoDDosKUwoAgQWRkIHZlaGljbGUgYnV0dG9uIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmFkZC12ZWhpY2xlLWJ0biB7XG4gIC0tYmFja2dyb3VuZDogICAgICAgICAgIHZhcigtLXNiLWFjY2VudCk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLXNiLWFjY2VudC1kYXJrKTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAgICAgdmFyKC0tc2ItYWNjZW50LWRhcmspO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogICB2YXIoLS1zYi1hY2NlbnQtZGFyayk7XG4gIC0tYm9yZGVyLXJhZGl1czogICAgICAgIHZhcigtLXNiLXItMnhsKTtcbiAgLS1ib3gtc2hhZG93OiAgICAgICAgICAgMCA0cHggMThweCB2YXIoLS1zYi1hY2NlbnQtc2hhZG93KTtcbiAgLS1jb2xvcjogICAgICAgICAgICAgICAgI2ZmZmZmZjtcbiAgLS1wYWRkaW5nLXRvcDogICAgICAgICAgMTRweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogICAgICAgMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAwLjkycmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDA7XG5cbiAgaW9uLWljb24geyBmb250LXNpemU6IDEuMTVyZW07IH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyBGT09URVJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnNpZGViYXItZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgcGFkZGluZy10b3A6IDE0cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1zYi1ib3JkZXIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJweDtcbn1cblxuLmZvb3Rlci1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAgICAgICAgICAgdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEoMTUsIDIzLCA0MiwgMC4wNSk7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogICAgIHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1yYWRpdXM6ICAgICAgICB2YXIoLS1zYi1yLW1kKTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAgICAgICAgMTRweDtcbiAgLS1wYWRkaW5nLWVuZDogICAgICAgICAgOHB4O1xuICAtLXBhZGRpbmctdG9wOiAgICAgICAgICAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAgICAgICAwO1xuICAtLW1pbi1oZWlnaHQ6ICAgICAgICAgICA0NHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAgICA4cHg7XG4gIC0tY29sb3I6ICAgICAgICAgICAgICAgIHZhcigtLXNiLXRleHQtbXV0ZWQpO1xuICAtLWRldGFpbC1pY29uLWNvbG9yOiAgICB2YXIoLS1zYi10ZXh0LWRpbSk7XG4gIC0tZGV0YWlsLWljb24tZm9udC1zaXplOiAwLjg1cmVtO1xuXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNiLXItbWQpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMThzIGVhc2UsIGNvbG9yIDAuMThzIGVhc2U7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogdmFyKC0tc2ItdGV4dC1kaW0pO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMThzIGVhc2U7XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgLS1jb2xvcjogdmFyKC0tc2ItdGV4dCk7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxNSwgMjMsIDQyLCAwLjA0KTtcbiAgICBpb24taWNvbiB7IGNvbG9yOiB2YXIoLS1zYi10ZXh0LW11dGVkKTsgfVxuICB9XG5cbiAgJi5sb2dvdXQ6aG92ZXIge1xuICAgIC0tY29sb3I6IHZhcigtLXNiLWRhbmdlcik7XG4gICAgaW9uLWljb24geyBjb2xvcjogdmFyKC0tc2ItZGFuZ2VyKTsgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBWZXJzaW9uIGJhZGdlIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnNpZGViYXItdmVyc2lvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBwYWRkaW5nOiAxMHB4IDE0cHggMnB4O1xuICBmb250LXNpemU6IDAuNzFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1zYi10ZXh0LWRpbSk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4udmVyc2lvbi1zZXAge1xuICBvcGFjaXR5OiAwLjQ1O1xufVxuXG4udmVyc2lvbi1jaGVjayB7XG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgY29sb3I6IHZhcigtLXNiLXN1Y2Nlc3MpO1xuICBtYXJnaW4tbGVmdDogMXB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ },

/***/ 6327
/*!**********************************************!*\
  !*** ./src/app/features/main/main.routes.ts ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mainRoutes: () => (/* binding */ mainRoutes)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _hau_app_routes_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hau/app.routes.const */ 5276);
/* harmony import */ var _hau_features_cars_state_car_details_car_details_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/features/cars/state/car-details/car-details.facade */ 8899);
/* harmony import */ var _hau_features_cars_state_car_details_car_details_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hau/features/cars/state/car-details/car-details.state */ 8076);
/* harmony import */ var _hau_features_cars_state_car_list_car_list_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hau/features/cars/state/car-list/car-list.facade */ 6295);
/* harmony import */ var _hau_features_cars_state_car_list_car_list_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hau/features/cars/state/car-list/car-list.state */ 8056);
/* harmony import */ var _hau_features_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hau/features/main/main.component */ 442);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ 8267);








const mainRoutes = [{
  path: '',
  component: _hau_features_main_main_component__WEBPACK_IMPORTED_MODULE_6__.MainComponent,
  children: [{
    path: _hau_app_routes_const__WEBPACK_IMPORTED_MODULE_1__.HAU_ROUTES.overview.path,
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ionicons_dist_esm-es5_index-b72adede_js-node_modules_ionicons_icons_index_mjs"), __webpack_require__.e("src_app_features_overview_overview_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../overview/overview.component */ 9650)).then(m => m.OverviewComponent),
    providers: [_hau_features_cars_state_car_list_car_list_facade__WEBPACK_IMPORTED_MODULE_4__.CarListFacade, (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.importProvidersFrom)(_ngxs_store__WEBPACK_IMPORTED_MODULE_7__.NgxsModule.forFeature([_hau_features_cars_state_car_list_car_list_state__WEBPACK_IMPORTED_MODULE_5__.CarListState]))]
  }, {
    path: _hau_app_routes_const__WEBPACK_IMPORTED_MODULE_1__.HAU_ROUTES.cars.path,
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_cars_cars_routes_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../cars/cars.routes */ 2511)).then(mod => mod.carRoutes),
    providers: [_hau_features_cars_state_car_list_car_list_facade__WEBPACK_IMPORTED_MODULE_4__.CarListFacade, _hau_features_cars_state_car_details_car_details_facade__WEBPACK_IMPORTED_MODULE_2__.CarDetailsFacade, (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.importProvidersFrom)(_ngxs_store__WEBPACK_IMPORTED_MODULE_7__.NgxsModule.forFeature([_hau_features_cars_state_car_list_car_list_state__WEBPACK_IMPORTED_MODULE_5__.CarListState, _hau_features_cars_state_car_details_car_details_state__WEBPACK_IMPORTED_MODULE_3__.CarDetailsState]))]
  }, {
    path: '**',
    redirectTo: _hau_app_routes_const__WEBPACK_IMPORTED_MODULE_1__.HAU_ROUTES.overview.path
  }]
}];

/***/ },

/***/ 2024
/*!*****************************************************************!*\
  !*** ./src/auto-gen/api/fn/auth/auth-controller-get-profile.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authControllerGetProfile: () => (/* binding */ authControllerGetProfile)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 3743);
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

/***/ 2677
/*!**************************************************************************!*\
  !*** ./src/auto-gen/api/fn/auth/auth-controller-google-auth-redirect.ts ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authControllerGoogleAuthRedirect: () => (/* binding */ authControllerGoogleAuthRedirect)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 3743);
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

/***/ 5213
/*!***********************************************************!*\
  !*** ./src/auto-gen/api/fn/auth/auth-controller-login.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authControllerLogin: () => (/* binding */ authControllerLogin)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 3743);
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

/***/ 4912
/*!************************************************************!*\
  !*** ./src/auto-gen/api/fn/auth/auth-controller-logout.ts ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authControllerLogout: () => (/* binding */ authControllerLogout)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 3743);
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

/***/ 590
/*!**************************************************************************!*\
  !*** ./src/auto-gen/api/fn/auth/auth-controller-refresh-access-token.ts ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authControllerRefreshAccessToken: () => (/* binding */ authControllerRefreshAccessToken)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 3743);
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

/***/ 1287
/*!**************************************************************!*\
  !*** ./src/auto-gen/api/fn/car/car-controller-create-car.ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carControllerCreateCar: () => (/* binding */ carControllerCreateCar)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 3743);
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

/***/ 4712
/*!**************************************************************!*\
  !*** ./src/auto-gen/api/fn/car/car-controller-delete-car.ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carControllerDeleteCar: () => (/* binding */ carControllerDeleteCar)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 3743);
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

/***/ 9402
/*!****************************************************************!*\
  !*** ./src/auto-gen/api/fn/car/car-controller-delete-photo.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carControllerDeletePhoto: () => (/* binding */ carControllerDeletePhoto)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 3743);
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

/***/ 8238
/*!****************************************************************!*\
  !*** ./src/auto-gen/api/fn/car/car-controller-get-all-cars.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carControllerGetAllCars: () => (/* binding */ carControllerGetAllCars)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 3743);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carControllerGetCar: () => (/* binding */ carControllerGetCar)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 3743);
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

/***/ 5030
/*!********************************************************************!*\
  !*** ./src/auto-gen/api/fn/car/car-controller-get-cars-by-user.ts ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carControllerGetCarsByUser: () => (/* binding */ carControllerGetCarsByUser)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 3743);
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

/***/ 5730
/*!**************************************************************!*\
  !*** ./src/auto-gen/api/fn/car/car-controller-update-car.ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carControllerUpdateCar: () => (/* binding */ carControllerUpdateCar)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 3743);
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

/***/ 2484
/*!*****************************************************************************!*\
  !*** ./src/auto-gen/api/fn/document/document-controller-create-document.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   documentControllerCreateDocument: () => (/* binding */ documentControllerCreateDocument)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 3743);
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

/***/ 5153
/*!*****************************************************************************!*\
  !*** ./src/auto-gen/api/fn/document/document-controller-delete-document.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   documentControllerDeleteDocument: () => (/* binding */ documentControllerDeleteDocument)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 3743);
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

/***/ 1174
/*!**************************************************************************!*\
  !*** ./src/auto-gen/api/fn/document/document-controller-get-document.ts ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   documentControllerGetDocument: () => (/* binding */ documentControllerGetDocument)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 3743);
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

/***/ 4540
/*!*************************************************************************************!*\
  !*** ./src/auto-gen/api/fn/document/document-controller-get-documents-by-car-id.ts ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   documentControllerGetDocumentsByCarId: () => (/* binding */ documentControllerGetDocumentsByCarId)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 3743);
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

/***/ 787
/*!*****************************************************************************!*\
  !*** ./src/auto-gen/api/fn/document/document-controller-update-document.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   documentControllerUpdateDocument: () => (/* binding */ documentControllerUpdateDocument)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 3743);
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

/***/ 2422
/*!***********************************************************************************************************!*\
  !*** ./src/auto-gen/api/fn/maintenance-record/maintenance-record-controller-create-maintenance-record.ts ***!
  \***********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   maintenanceRecordControllerCreateMaintenanceRecord: () => (/* binding */ maintenanceRecordControllerCreateMaintenanceRecord)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 3743);
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

/***/ 3907
/*!***********************************************************************************************************!*\
  !*** ./src/auto-gen/api/fn/maintenance-record/maintenance-record-controller-delete-maintenance-record.ts ***!
  \***********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   maintenanceRecordControllerDeleteMaintenanceRecord: () => (/* binding */ maintenanceRecordControllerDeleteMaintenanceRecord)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 3743);
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

/***/ 2436
/*!********************************************************************************************************!*\
  !*** ./src/auto-gen/api/fn/maintenance-record/maintenance-record-controller-get-maintenance-record.ts ***!
  \********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   maintenanceRecordControllerGetMaintenanceRecord: () => (/* binding */ maintenanceRecordControllerGetMaintenanceRecord)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 3743);
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

/***/ 4982
/*!*******************************************************************************************************************!*\
  !*** ./src/auto-gen/api/fn/maintenance-record/maintenance-record-controller-get-maintenance-records-by-car-id.ts ***!
  \*******************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   maintenanceRecordControllerGetMaintenanceRecordsByCarId: () => (/* binding */ maintenanceRecordControllerGetMaintenanceRecordsByCarId)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 3743);
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

/***/ 9249
/*!***********************************************************************************************************!*\
  !*** ./src/auto-gen/api/fn/maintenance-record/maintenance-record-controller-update-maintenance-record.ts ***!
  \***********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   maintenanceRecordControllerUpdateMaintenanceRecord: () => (/* binding */ maintenanceRecordControllerUpdateMaintenanceRecord)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request-builder */ 3743);
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

/***/ 9181
/*!***************************************!*\
  !*** ./src/auto-gen/api/functions.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authControllerGetProfile: () => (/* reexport safe */ _fn_auth_auth_controller_get_profile__WEBPACK_IMPORTED_MODULE_20__.authControllerGetProfile),
/* harmony export */   authControllerGoogleAuthRedirect: () => (/* reexport safe */ _fn_auth_auth_controller_google_auth_redirect__WEBPACK_IMPORTED_MODULE_18__.authControllerGoogleAuthRedirect),
/* harmony export */   authControllerLogin: () => (/* reexport safe */ _fn_auth_auth_controller_login__WEBPACK_IMPORTED_MODULE_17__.authControllerLogin),
/* harmony export */   authControllerLogout: () => (/* reexport safe */ _fn_auth_auth_controller_logout__WEBPACK_IMPORTED_MODULE_21__.authControllerLogout),
/* harmony export */   authControllerRefreshAccessToken: () => (/* reexport safe */ _fn_auth_auth_controller_refresh_access_token__WEBPACK_IMPORTED_MODULE_19__.authControllerRefreshAccessToken),
/* harmony export */   carControllerCreateCar: () => (/* reexport safe */ _fn_car_car_controller_create_car__WEBPACK_IMPORTED_MODULE_2__.carControllerCreateCar),
/* harmony export */   carControllerDeleteCar: () => (/* reexport safe */ _fn_car_car_controller_delete_car__WEBPACK_IMPORTED_MODULE_4__.carControllerDeleteCar),
/* harmony export */   carControllerDeletePhoto: () => (/* reexport safe */ _fn_car_car_controller_delete_photo__WEBPACK_IMPORTED_MODULE_5__.carControllerDeletePhoto),
/* harmony export */   carControllerGetAllCars: () => (/* reexport safe */ _fn_car_car_controller_get_all_cars__WEBPACK_IMPORTED_MODULE_0__.carControllerGetAllCars),
/* harmony export */   carControllerGetCar: () => (/* reexport safe */ _fn_car_car_controller_get_car__WEBPACK_IMPORTED_MODULE_3__.carControllerGetCar),
/* harmony export */   carControllerGetCarsByUser: () => (/* reexport safe */ _fn_car_car_controller_get_cars_by_user__WEBPACK_IMPORTED_MODULE_6__.carControllerGetCarsByUser),
/* harmony export */   carControllerUpdateCar: () => (/* reexport safe */ _fn_car_car_controller_update_car__WEBPACK_IMPORTED_MODULE_1__.carControllerUpdateCar),
/* harmony export */   documentControllerCreateDocument: () => (/* reexport safe */ _fn_document_document_controller_create_document__WEBPACK_IMPORTED_MODULE_12__.documentControllerCreateDocument),
/* harmony export */   documentControllerDeleteDocument: () => (/* reexport safe */ _fn_document_document_controller_delete_document__WEBPACK_IMPORTED_MODULE_15__.documentControllerDeleteDocument),
/* harmony export */   documentControllerGetDocument: () => (/* reexport safe */ _fn_document_document_controller_get_document__WEBPACK_IMPORTED_MODULE_13__.documentControllerGetDocument),
/* harmony export */   documentControllerGetDocumentsByCarId: () => (/* reexport safe */ _fn_document_document_controller_get_documents_by_car_id__WEBPACK_IMPORTED_MODULE_16__.documentControllerGetDocumentsByCarId),
/* harmony export */   documentControllerUpdateDocument: () => (/* reexport safe */ _fn_document_document_controller_update_document__WEBPACK_IMPORTED_MODULE_14__.documentControllerUpdateDocument),
/* harmony export */   maintenanceRecordControllerCreateMaintenanceRecord: () => (/* reexport safe */ _fn_maintenance_record_maintenance_record_controller_create_maintenance_record__WEBPACK_IMPORTED_MODULE_7__.maintenanceRecordControllerCreateMaintenanceRecord),
/* harmony export */   maintenanceRecordControllerDeleteMaintenanceRecord: () => (/* reexport safe */ _fn_maintenance_record_maintenance_record_controller_delete_maintenance_record__WEBPACK_IMPORTED_MODULE_10__.maintenanceRecordControllerDeleteMaintenanceRecord),
/* harmony export */   maintenanceRecordControllerGetMaintenanceRecord: () => (/* reexport safe */ _fn_maintenance_record_maintenance_record_controller_get_maintenance_record__WEBPACK_IMPORTED_MODULE_8__.maintenanceRecordControllerGetMaintenanceRecord),
/* harmony export */   maintenanceRecordControllerGetMaintenanceRecordsByCarId: () => (/* reexport safe */ _fn_maintenance_record_maintenance_record_controller_get_maintenance_records_by_car_id__WEBPACK_IMPORTED_MODULE_11__.maintenanceRecordControllerGetMaintenanceRecordsByCarId),
/* harmony export */   maintenanceRecordControllerUpdateMaintenanceRecord: () => (/* reexport safe */ _fn_maintenance_record_maintenance_record_controller_update_maintenance_record__WEBPACK_IMPORTED_MODULE_9__.maintenanceRecordControllerUpdateMaintenanceRecord)
/* harmony export */ });
/* harmony import */ var _fn_car_car_controller_get_all_cars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fn/car/car-controller-get-all-cars */ 8238);
/* harmony import */ var _fn_car_car_controller_update_car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fn/car/car-controller-update-car */ 5730);
/* harmony import */ var _fn_car_car_controller_create_car__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fn/car/car-controller-create-car */ 1287);
/* harmony import */ var _fn_car_car_controller_get_car__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fn/car/car-controller-get-car */ 8417);
/* harmony import */ var _fn_car_car_controller_delete_car__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fn/car/car-controller-delete-car */ 4712);
/* harmony import */ var _fn_car_car_controller_delete_photo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fn/car/car-controller-delete-photo */ 9402);
/* harmony import */ var _fn_car_car_controller_get_cars_by_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fn/car/car-controller-get-cars-by-user */ 5030);
/* harmony import */ var _fn_maintenance_record_maintenance_record_controller_create_maintenance_record__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fn/maintenance-record/maintenance-record-controller-create-maintenance-record */ 2422);
/* harmony import */ var _fn_maintenance_record_maintenance_record_controller_get_maintenance_record__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fn/maintenance-record/maintenance-record-controller-get-maintenance-record */ 2436);
/* harmony import */ var _fn_maintenance_record_maintenance_record_controller_update_maintenance_record__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fn/maintenance-record/maintenance-record-controller-update-maintenance-record */ 9249);
/* harmony import */ var _fn_maintenance_record_maintenance_record_controller_delete_maintenance_record__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fn/maintenance-record/maintenance-record-controller-delete-maintenance-record */ 3907);
/* harmony import */ var _fn_maintenance_record_maintenance_record_controller_get_maintenance_records_by_car_id__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fn/maintenance-record/maintenance-record-controller-get-maintenance-records-by-car-id */ 4982);
/* harmony import */ var _fn_document_document_controller_create_document__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fn/document/document-controller-create-document */ 2484);
/* harmony import */ var _fn_document_document_controller_get_document__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fn/document/document-controller-get-document */ 1174);
/* harmony import */ var _fn_document_document_controller_update_document__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fn/document/document-controller-update-document */ 787);
/* harmony import */ var _fn_document_document_controller_delete_document__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fn/document/document-controller-delete-document */ 5153);
/* harmony import */ var _fn_document_document_controller_get_documents_by_car_id__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fn/document/document-controller-get-documents-by-car-id */ 4540);
/* harmony import */ var _fn_auth_auth_controller_login__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fn/auth/auth-controller-login */ 5213);
/* harmony import */ var _fn_auth_auth_controller_google_auth_redirect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fn/auth/auth-controller-google-auth-redirect */ 2677);
/* harmony import */ var _fn_auth_auth_controller_refresh_access_token__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./fn/auth/auth-controller-refresh-access-token */ 590);
/* harmony import */ var _fn_auth_auth_controller_get_profile__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./fn/auth/auth-controller-get-profile */ 2024);
/* harmony import */ var _fn_auth_auth_controller_logout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./fn/auth/auth-controller-logout */ 4912);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */























/***/ },

/***/ 3743
/*!*********************************************!*\
  !*** ./src/auto-gen/api/request-builder.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestBuilder: () => (/* binding */ RequestBuilder)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
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

/***/ 4870
/*!***************************************************!*\
  !*** ./src/auto-gen/api/services/auth.service.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ 9181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-configuration */ 6171);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 698);





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

/***/ 2142
/*!**************************************************!*\
  !*** ./src/auto-gen/api/services/car.service.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarService: () => (/* binding */ CarService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ 9181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-configuration */ 6171);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 698);





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

/***/ 4457
/*!*******************************************************!*\
  !*** ./src/auto-gen/api/services/document.service.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentService: () => (/* binding */ DocumentService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ 9181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-configuration */ 6171);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 698);





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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* reexport safe */ _auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService),
/* harmony export */   CarService: () => (/* reexport safe */ _car_service__WEBPACK_IMPORTED_MODULE_0__.CarService),
/* harmony export */   DocumentService: () => (/* reexport safe */ _document_service__WEBPACK_IMPORTED_MODULE_1__.DocumentService),
/* harmony export */   MaintenanceRecordService: () => (/* reexport safe */ _maintenance_record_service__WEBPACK_IMPORTED_MODULE_2__.MaintenanceRecordService)
/* harmony export */ });
/* harmony import */ var _car_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car.service */ 2142);
/* harmony import */ var _document_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document.service */ 4457);
/* harmony import */ var _maintenance_record_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maintenance-record.service */ 479);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ 4870);
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */





/***/ },

/***/ 479
/*!*****************************************************************!*\
  !*** ./src/auto-gen/api/services/maintenance-record.service.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaintenanceRecordService: () => (/* binding */ MaintenanceRecordService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ 9181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-configuration */ 6171);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 698);





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

/***/ }

}]);
//# sourceMappingURL=src_app_features_main_main_routes_ts.js.map