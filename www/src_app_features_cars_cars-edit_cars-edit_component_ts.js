"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_features_cars_cars-edit_cars-edit_component_ts"],{

/***/ 61132
/*!****************************************************************!*\
  !*** ./src/app/features/cars/cars-edit/cars-edit.component.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarsEditComponent: () => (/* binding */ CarsEditComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _hau_features_cars_cars_routes_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/features/cars/cars.routes.const */ 5618);
/* harmony import */ var _hau_features_cars_component_cars_form_cars_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hau/features/cars/component/cars-form/cars-form.component */ 97080);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ 56127);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _hau_features_cars_state_car_details_car_details_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @hau/features/cars/state/car-details/car-details.facade */ 48899);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular/standalone */ 4059);










let CarsEditComponent = class CarsEditComponent {
  constructor(_carDetailFacade, _activatedRoute, _navCtrl) {
    this._carDetailFacade = _carDetailFacade;
    this._activatedRoute = _activatedRoute;
    this._navCtrl = _navCtrl;
    this.currentCar$ = this._carDetailFacade.currentCar$;
  }
  ngOnInit() {
    this._activatedRoute.params.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this)).subscribe(params => {
      this._carDetailFacade.loadCurrentCar(params['id']);
    });
    this.currentCar$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(car => car?.status === 'SOLD'), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this)).subscribe(car => {
      this._navCtrl.navigateRoot(`${_hau_features_cars_cars_routes_const__WEBPACK_IMPORTED_MODULE_2__.CARS_ROUTES.details.fullPath}/${car.id}`, {
        animated: false
      });
    });
  }
  static {
    this.ɵfac = function CarsEditComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CarsEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_hau_features_cars_state_car_details_car_details_facade__WEBPACK_IMPORTED_MODULE_7__.CarDetailsFacade), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_9__.NavController));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: CarsEditComponent,
      selectors: [["app-cars-edit"]],
      decls: 2,
      vars: 3,
      consts: [[3, "currentCar"]],
      template: function CarsEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-cars-form", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("currentCar", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx.currentCar$));
        }
      },
      dependencies: [_hau_features_cars_component_cars_form_cars_form_component__WEBPACK_IMPORTED_MODULE_3__.CarsFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe],
      encapsulation: 2
    });
  }
};
CarsEditComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.UntilDestroy)()], CarsEditComponent);


/***/ }

}]);
//# sourceMappingURL=src_app_features_cars_cars-edit_cars-edit_component_ts.js.map