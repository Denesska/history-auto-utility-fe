"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_features_maintenance_maintenance_routes_ts"],{

/***/ 65303
/*!************************************************************!*\
  !*** ./src/app/features/maintenance/maintenance.routes.ts ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   maintenanceRoutes: () => (/* binding */ maintenanceRoutes)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 68267);
/* harmony import */ var _state_maintenance_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/maintenance.facade */ 41385);
/* harmony import */ var _state_maintenance_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/maintenance.state */ 31274);




const maintenanceRoutes = [{
  path: '',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngneat_until-destroy_fesm2022_ngneat-until-destroy_mjs"), __webpack_require__.e("src_app_features_maintenance_add-maintenance-panel_add-maintenance-panel_component_ts-src_app-1c9710")]).then(__webpack_require__.bind(__webpack_require__, /*! ./maintenance.component */ 38858)).then(m => m.MaintenanceComponent),
  providers: [_state_maintenance_facade__WEBPACK_IMPORTED_MODULE_2__.MaintenanceFacade, (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.importProvidersFrom)(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.NgxsModule.forFeature([_state_maintenance_state__WEBPACK_IMPORTED_MODULE_3__.MaintenanceState]))]
}, {
  path: '**',
  redirectTo: ''
}];

/***/ },

/***/ 60828
/*!*******************************************************************!*\
  !*** ./src/app/features/maintenance/state/maintenance.actions.ts ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaintenanceActions: () => (/* binding */ MaintenanceActions)
/* harmony export */ });
var MaintenanceActions;
(function (MaintenanceActions) {
  class LoadAll {
    static {
      this.type = '[Maintenance] Load All';
    }
  }
  MaintenanceActions.LoadAll = LoadAll;
  class LoadAllSuccess {
    static {
      this.type = '[Maintenance] Load All Success';
    }
    constructor(cars, records) {
      this.cars = cars;
      this.records = records;
    }
  }
  MaintenanceActions.LoadAllSuccess = LoadAllSuccess;
  class LoadAllError {
    static {
      this.type = '[Maintenance] Load All Error';
    }
  }
  MaintenanceActions.LoadAllError = LoadAllError;
  class SelectCar {
    static {
      this.type = '[Maintenance] Select Car';
    }
    constructor(carId) {
      this.carId = carId;
    }
  }
  MaintenanceActions.SelectCar = SelectCar;
  class CreateRecord {
    static {
      this.type = '[Maintenance] Create Record';
    }
    constructor(dto) {
      this.dto = dto;
    }
  }
  MaintenanceActions.CreateRecord = CreateRecord;
  class CreateRecordSuccess {
    static {
      this.type = '[Maintenance] Create Record Success';
    }
    constructor(record) {
      this.record = record;
    }
  }
  MaintenanceActions.CreateRecordSuccess = CreateRecordSuccess;
  class CreateRecordError {
    static {
      this.type = '[Maintenance] Create Record Error';
    }
  }
  MaintenanceActions.CreateRecordError = CreateRecordError;
  class DeleteRecord {
    static {
      this.type = '[Maintenance] Delete Record';
    }
    constructor(id) {
      this.id = id;
    }
  }
  MaintenanceActions.DeleteRecord = DeleteRecord;
  class DeleteRecordSuccess {
    static {
      this.type = '[Maintenance] Delete Record Success';
    }
    constructor(id) {
      this.id = id;
    }
  }
  MaintenanceActions.DeleteRecordSuccess = DeleteRecordSuccess;
})(MaintenanceActions || (MaintenanceActions = {}));

/***/ },

/***/ 41385
/*!******************************************************************!*\
  !*** ./src/app/features/maintenance/state/maintenance.facade.ts ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaintenanceFacade: () => (/* binding */ MaintenanceFacade)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _hau_features_maintenance_state_maintenance_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hau/features/maintenance/state/maintenance.actions */ 60828);
/* harmony import */ var _hau_features_maintenance_state_maintenance_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/features/maintenance/state/maintenance.state */ 31274);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 68267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94363);






class MaintenanceFacade {
  constructor(_store) {
    this._store = _store;
  }
  loadAll() {
    this._store.dispatch(new _hau_features_maintenance_state_maintenance_actions__WEBPACK_IMPORTED_MODULE_1__.MaintenanceActions.LoadAll());
  }
  selectCar(carId) {
    this._store.dispatch(new _hau_features_maintenance_state_maintenance_actions__WEBPACK_IMPORTED_MODULE_1__.MaintenanceActions.SelectCar(carId));
  }
  createRecord(dto) {
    this._store.dispatch(new _hau_features_maintenance_state_maintenance_actions__WEBPACK_IMPORTED_MODULE_1__.MaintenanceActions.CreateRecord(dto));
  }
  deleteRecord(id) {
    this._store.dispatch(new _hau_features_maintenance_state_maintenance_actions__WEBPACK_IMPORTED_MODULE_1__.MaintenanceActions.DeleteRecord(id));
  }
  static {
    this.ɵfac = function MaintenanceFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MaintenanceFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Store));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: MaintenanceFacade,
      factory: MaintenanceFacade.ɵfac
    });
  }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_maintenance_state_maintenance_state__WEBPACK_IMPORTED_MODULE_2__.MaintenanceState.cars)], MaintenanceFacade.prototype, "cars$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_maintenance_state_maintenance_state__WEBPACK_IMPORTED_MODULE_2__.MaintenanceState.records)], MaintenanceFacade.prototype, "records$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_maintenance_state_maintenance_state__WEBPACK_IMPORTED_MODULE_2__.MaintenanceState.selectedCarId)], MaintenanceFacade.prototype, "selectedCarId$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_maintenance_state_maintenance_state__WEBPACK_IMPORTED_MODULE_2__.MaintenanceState.selectedCar)], MaintenanceFacade.prototype, "selectedCar$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_maintenance_state_maintenance_state__WEBPACK_IMPORTED_MODULE_2__.MaintenanceState.recordsForSelectedCar)], MaintenanceFacade.prototype, "recordsForSelectedCar$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_maintenance_state_maintenance_state__WEBPACK_IMPORTED_MODULE_2__.MaintenanceState.loading)], MaintenanceFacade.prototype, "loading$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Select)(_hau_features_maintenance_state_maintenance_state__WEBPACK_IMPORTED_MODULE_2__.MaintenanceState.submitting)], MaintenanceFacade.prototype, "submitting$", void 0);

/***/ },

/***/ 31274
/*!*****************************************************************!*\
  !*** ./src/app/features/maintenance/state/maintenance.state.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaintenanceState: () => (/* binding */ MaintenanceState)
/* harmony export */ });
/* harmony import */ var _var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hau/autogenapi/services */ 3977);
/* harmony import */ var _hau_features_maintenance_state_maintenance_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hau/features/maintenance/state/maintenance.actions */ 60828);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ 68267);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 98764);









const defaults = {
  cars: [],
  records: [],
  selectedCarId: null,
  loading: false,
  submitting: false
};
let MaintenanceState = class MaintenanceState {
  constructor() {
    this._carService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_3__.CarService);
    this._maintenanceService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_3__.MaintenanceRecordService);
    this._toastCtrl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.ToastController);
  }
  static cars(s) {
    return s.cars;
  }
  static records(s) {
    return s.records;
  }
  static selectedCarId(s) {
    return s.selectedCarId;
  }
  static loading(s) {
    return s.loading;
  }
  static submitting(s) {
    return s.submitting;
  }
  static selectedCar(s) {
    return s.cars.find(c => c.id === s.selectedCarId) ?? null;
  }
  static recordsForSelectedCar(s) {
    if (!s.selectedCarId) return [];
    return s.records.filter(r => r.car_id === s.selectedCarId);
  }
  loadAll({
    patchState,
    dispatch
  }) {
    patchState({
      loading: true
    });
    return this._carService.carControllerGetAllCars().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.switchMap)(cars => {
      if (cars.length === 0) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)({
          cars,
          records: []
        });
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)(cars.map(car => this._maintenanceService.maintenanceRecordControllerGetMaintenanceRecordsByCarId({
        carId: String(car.id)
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]))))).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.switchMap)(recordArrays => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)({
        cars,
        records: recordArrays.flat()
      })));
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.tap)({
      next: ({
        cars,
        records
      }) => dispatch(new _hau_features_maintenance_state_maintenance_actions__WEBPACK_IMPORTED_MODULE_4__.MaintenanceActions.LoadAllSuccess(cars, records)),
      error: () => dispatch(new _hau_features_maintenance_state_maintenance_actions__WEBPACK_IMPORTED_MODULE_4__.MaintenanceActions.LoadAllError())
    }));
  }
  loadAllSuccess({
    patchState,
    getState
  }, {
    cars,
    records
  }) {
    const currentSelectedId = getState().selectedCarId;
    const activeCars = cars.filter(c => c.status === 'ACTIVE');
    const selectedCarId = currentSelectedId ? activeCars.find(c => c.id === currentSelectedId) ? currentSelectedId : activeCars[0]?.id ?? null : activeCars[0]?.id ?? null;
    patchState({
      cars: activeCars,
      records,
      selectedCarId,
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
  selectCar({
    patchState
  }, {
    carId
  }) {
    patchState({
      selectedCarId: carId
    });
  }
  createRecord({
    patchState,
    dispatch
  }, {
    dto
  }) {
    patchState({
      submitting: true
    });
    return this._maintenanceService.maintenanceRecordControllerCreateMaintenanceRecord({
      body: dto
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.tap)({
      next: record => dispatch(new _hau_features_maintenance_state_maintenance_actions__WEBPACK_IMPORTED_MODULE_4__.MaintenanceActions.CreateRecordSuccess(record)),
      error: () => dispatch(new _hau_features_maintenance_state_maintenance_actions__WEBPACK_IMPORTED_MODULE_4__.MaintenanceActions.CreateRecordError())
    }));
  }
  createRecordSuccess(_x, _x2) {
    var _this = this;
    return (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
      patchState,
      getState
    }, {
      record
    }) {
      patchState({
        submitting: false,
        records: [...getState().records, record]
      });
      const toast = yield _this._toastCtrl.create({
        message: 'Înregistrarea a fost adăugată cu succes!',
        duration: 2500,
        color: 'success',
        position: 'top'
      });
      yield toast.present();
    }).apply(this, arguments);
  }
  createRecordError(_x3) {
    var _this2 = this;
    return (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
      patchState
    }) {
      patchState({
        submitting: false
      });
      const toast = yield _this2._toastCtrl.create({
        message: 'Eroare la adăugarea înregistrării. Încearcă din nou.',
        duration: 3000,
        color: 'danger',
        position: 'top'
      });
      yield toast.present();
    }).apply(this, arguments);
  }
  deleteRecord({
    dispatch,
    getState,
    patchState
  }, {
    id
  }) {
    return this._maintenanceService.maintenanceRecordControllerDeleteMaintenanceRecord({
      id: String(id)
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.tap)({
      next: () => dispatch(new _hau_features_maintenance_state_maintenance_actions__WEBPACK_IMPORTED_MODULE_4__.MaintenanceActions.DeleteRecordSuccess(id)),
      error: () => {}
    }));
  }
  deleteRecordSuccess({
    patchState,
    getState
  }, {
    id
  }) {
    patchState({
      records: getState().records.filter(r => r.id !== id)
    });
  }
  static {
    this.ɵfac = function MaintenanceState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MaintenanceState)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: MaintenanceState,
      factory: MaintenanceState.ɵfac
    });
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_6__.Action)(_hau_features_maintenance_state_maintenance_actions__WEBPACK_IMPORTED_MODULE_4__.MaintenanceActions.LoadAll)], MaintenanceState.prototype, "loadAll", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_6__.Action)(_hau_features_maintenance_state_maintenance_actions__WEBPACK_IMPORTED_MODULE_4__.MaintenanceActions.LoadAllSuccess)], MaintenanceState.prototype, "loadAllSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_6__.Action)(_hau_features_maintenance_state_maintenance_actions__WEBPACK_IMPORTED_MODULE_4__.MaintenanceActions.LoadAllError)], MaintenanceState.prototype, "loadAllError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_6__.Action)(_hau_features_maintenance_state_maintenance_actions__WEBPACK_IMPORTED_MODULE_4__.MaintenanceActions.SelectCar)], MaintenanceState.prototype, "selectCar", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_6__.Action)(_hau_features_maintenance_state_maintenance_actions__WEBPACK_IMPORTED_MODULE_4__.MaintenanceActions.CreateRecord)], MaintenanceState.prototype, "createRecord", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_6__.Action)(_hau_features_maintenance_state_maintenance_actions__WEBPACK_IMPORTED_MODULE_4__.MaintenanceActions.CreateRecordSuccess)], MaintenanceState.prototype, "createRecordSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_6__.Action)(_hau_features_maintenance_state_maintenance_actions__WEBPACK_IMPORTED_MODULE_4__.MaintenanceActions.CreateRecordError)], MaintenanceState.prototype, "createRecordError", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_6__.Action)(_hau_features_maintenance_state_maintenance_actions__WEBPACK_IMPORTED_MODULE_4__.MaintenanceActions.DeleteRecord)], MaintenanceState.prototype, "deleteRecord", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_6__.Action)(_hau_features_maintenance_state_maintenance_actions__WEBPACK_IMPORTED_MODULE_4__.MaintenanceActions.DeleteRecordSuccess)], MaintenanceState.prototype, "deleteRecordSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_6__.Selector)()], MaintenanceState, "cars", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_6__.Selector)()], MaintenanceState, "records", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_6__.Selector)()], MaintenanceState, "selectedCarId", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_6__.Selector)()], MaintenanceState, "loading", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_6__.Selector)()], MaintenanceState, "submitting", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_6__.Selector)()], MaintenanceState, "selectedCar", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_6__.Selector)()], MaintenanceState, "recordsForSelectedCar", null);
MaintenanceState = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_6__.State)({
  name: 'maintenance',
  defaults
})], MaintenanceState);


/***/ }

}]);
//# sourceMappingURL=src_app_features_maintenance_maintenance_routes_ts.js.map