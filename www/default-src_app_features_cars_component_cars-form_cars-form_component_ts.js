"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_features_cars_component_cars-form_cars-form_component_ts"],{

/***/ 536
/*!*************************************************!*\
  !*** ./src/app/features/cars/cars.constants.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COLOR_OPTIONS: () => (/* binding */ COLOR_OPTIONS),
/* harmony export */   FUEL_TYPE_OPTIONS: () => (/* binding */ FUEL_TYPE_OPTIONS),
/* harmony export */   MAX_YEAR_CAR_CREATE: () => (/* binding */ MAX_YEAR_CAR_CREATE),
/* harmony export */   MIN_YEAR_CAR_CREATE: () => (/* binding */ MIN_YEAR_CAR_CREATE),
/* harmony export */   TRANSMISSION_OPTIONS: () => (/* binding */ TRANSMISSION_OPTIONS)
/* harmony export */ });
const MAX_YEAR_CAR_CREATE = new Date().getFullYear();
const MIN_YEAR_CAR_CREATE = 1885;
const FUEL_TYPE_OPTIONS = [{
  value: 'PETROL',
  label: 'Benzină'
}, {
  value: 'DIESEL',
  label: 'Motorină'
}, {
  value: 'HYBRID',
  label: 'Hibrid'
}, {
  value: 'PLUGIN_HYBRID',
  label: 'Hibrid Plug-in'
}, {
  value: 'ELECTRIC',
  label: 'Electric'
}, {
  value: 'LPG',
  label: 'GPL'
}];
const TRANSMISSION_OPTIONS = [{
  value: 'MANUAL',
  label: 'Manuală'
}, {
  value: 'AUTOMATIC',
  label: 'Automată'
}, {
  value: 'SEMI_AUTOMATIC',
  label: 'Semi-automată'
}];
const COLOR_OPTIONS = [{
  value: 'Alb',
  label: 'Alb',
  hex: '#FFFFFF'
}, {
  value: 'Negru',
  label: 'Negru',
  hex: '#000000'
}, {
  value: 'Gri',
  label: 'Gri',
  hex: '#808080'
}, {
  value: 'Argintiu',
  label: 'Argintiu',
  hex: '#C0C0C0'
}, {
  value: 'Roșu',
  label: 'Roșu',
  hex: '#CC0000'
}, {
  value: 'Albastru',
  label: 'Albastru',
  hex: '#0000CC'
}, {
  value: 'Verde',
  label: 'Verde',
  hex: '#006600'
}, {
  value: 'Maro',
  label: 'Maro',
  hex: '#8B4513'
}, {
  value: 'Bej',
  label: 'Bej',
  hex: '#F5F5DC'
}, {
  value: 'Galben',
  label: 'Galben',
  hex: '#FFD700'
}, {
  value: 'Portocaliu',
  label: 'Portocaliu',
  hex: '#FF8C00'
}, {
  value: 'Violet',
  label: 'Violet',
  hex: '#6A0DAD'
}, {
  value: 'Alt',
  label: 'Altă culoare',
  hex: '#CCCCCC'
}];

/***/ },

/***/ 5680
/*!*********************************************!*\
  !*** ./src/app/features/cars/cars.utils.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysUntil: () => (/* binding */ daysUntil),
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   formatMileage: () => (/* binding */ formatMileage),
/* harmony export */   removeNullProperties: () => (/* binding */ removeNullProperties)
/* harmony export */ });
function removeNullProperties(obj) {
  const clone = {
    ...obj
  };
  for (const key in clone) {
    if (clone[key] === null) {
      delete clone[key];
    }
  }
  return clone;
}
function daysUntil(dateStr) {
  if (!dateStr) return null;
  return Math.ceil((new Date(dateStr).getTime() - Date.now()) / 86400000);
}
function formatDate(dateStr) {
  if (!dateStr) return '—';
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
}
function formatMileage(val) {
  if (val == null) return '—';
  return Number(val).toLocaleString() + ' km';
}

/***/ },

/***/ 7080
/*!**************************************************************************!*\
  !*** ./src/app/features/cars/component/cars-form/cars-form.component.ts ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarsFormComponent: () => (/* binding */ CarsFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _hau_shared_component_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/shared/component/form-field/form-field.component */ 472);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular/standalone */ 7241);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ 6127);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1567);
/* harmony import */ var _hau_features_cars_cars_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hau/features/cars/cars.constants */ 536);
/* harmony import */ var _hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @hau/features/cars/cars.utils */ 5680);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionicons */ 5846);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ionicons/icons */ 7958);
/* harmony import */ var _hau_shared_pipes_image_url_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @hau/shared/pipes/image-url.pipe */ 9275);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _hau_features_cars_state_car_details_car_details_facade__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hau/features/cars/state/car-details/car-details.facade */ 8899);
/* harmony import */ var _hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @hau/autogenapi/services */ 3977);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular/standalone */ 4059);
















function CarsFormComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "imageUrl");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 1, ctx_r0.previewPhoto), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}
function CarsFormComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ion-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CarsFormComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r0.previewPlate);
  }
}
function CarsFormComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ion-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "RCA");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", ctx_r0.daysUntil(ctx_r0.form.value.rca_expiry_date), "d");
  }
}
function CarsFormComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ion-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "ITP");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", ctx_r0.daysUntil(ctx_r0.form.value.itp_expiry_date), "d");
  }
}
function CarsFormComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ion-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "ROV");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", ctx_r0.daysUntil(ctx_r0.form.value.rov_expiry_date), "d");
  }
}
function CarsFormComponent_Conditional_31_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" \u00B7 ", ctx_r0.formatMileage(ctx_r0.form.value.last_oil_service_mileage), " ");
  }
}
function CarsFormComponent_Conditional_31_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ion-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Oil service");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](6, CarsFormComponent_Conditional_31_Conditional_1_Conditional_6_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r0.formatDate(ctx_r0.form.value.last_oil_service_date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx_r0.form.value.last_oil_service_mileage ? 6 : -1);
  }
}
function CarsFormComponent_Conditional_31_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ion-icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Ownership since");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r0.formatDate(ctx_r0.form.value.ownership_start_date));
  }
}
function CarsFormComponent_Conditional_31_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ion-icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Current mileage");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r0.formatMileage(ctx_r0.form.value.current_mileage));
  }
}
function CarsFormComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](1, CarsFormComponent_Conditional_31_Conditional_1_Template, 7, 2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](2, CarsFormComponent_Conditional_31_Conditional_2_Template, 6, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](3, CarsFormComponent_Conditional_31_Conditional_3_Template, 6, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx_r0.form.value.last_oil_service_date || ctx_r0.form.value.last_oil_service_mileage ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx_r0.form.value.ownership_start_date ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx_r0.form.value.current_mileage ? 3 : -1);
  }
}
function CarsFormComponent_For_94_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CarsFormComponent_For_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CarsFormComponent_For_94_Template_div_click_0_listener() {
      const $index_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r2).$index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r0.setDefault($index_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "imageUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](3, CarsFormComponent_For_94_Conditional_3_Template, 2, 0, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CarsFormComponent_For_94_Template_button_click_4_listener($event) {
      const $index_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r2).$index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r0.removePhoto($index_r3, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const photo_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("photo-preview--default", photo_r4.isDefault);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("title", photo_r4.isDefault ? "Default photo" : "Click to set as default");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 5, photo_r4.url), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](photo_r4.isDefault ? 3 : -1);
  }
}
function CarsFormComponent_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CarsFormComponent_Conditional_100_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r0.saveAndAddAnother());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ion-icon", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Save & add another ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
let CarsFormComponent = class CarsFormComponent {
  set currentCar(currentCar) {
    if (currentCar) {
      this.patchForm(currentCar);
    }
  }
  constructor(_fb, _carFacade, _carService, _nav) {
    this._fb = _fb;
    this._carFacade = _carFacade;
    this._carService = _carService;
    this._nav = _nav;
    this.InputType = _hau_shared_component_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__.InputType;
    this.FormControlType = _hau_shared_component_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__.FormControlType;
    this.MAX_YEAR = _hau_features_cars_cars_constants__WEBPACK_IMPORTED_MODULE_6__.MAX_YEAR_CAR_CREATE;
    this.MIN_YEAR = _hau_features_cars_cars_constants__WEBPACK_IMPORTED_MODULE_6__.MIN_YEAR_CAR_CREATE;
    this.fuelTypeOptions = _hau_features_cars_cars_constants__WEBPACK_IMPORTED_MODULE_6__.FUEL_TYPE_OPTIONS;
    this.transmissionOptions = _hau_features_cars_cars_constants__WEBPACK_IMPORTED_MODULE_6__.TRANSMISSION_OPTIONS;
    this.colorOptions = _hau_features_cars_cars_constants__WEBPACK_IMPORTED_MODULE_6__.COLOR_OPTIONS;
    this.photos = [];
    this.daysUntil = _hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_7__.daysUntil;
    this.formatDate = _hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_7__.formatDate;
    this.formatMileage = _hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_7__.formatMileage;
    (0,ionicons__WEBPACK_IMPORTED_MODULE_8__.a)({
      shieldCheckmarkOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_9__.shieldCheckmarkOutline,
      buildOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_9__.buildOutline,
      carOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_9__.carOutline,
      waterOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_9__.waterOutline,
      calendarOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_9__.calendarOutline,
      speedometerOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_9__.speedometerOutline,
      pencilOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_9__.pencilOutline,
      saveOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_9__.saveOutline,
      addCircleOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_9__.addCircleOutline,
      bulbOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_9__.bulbOutline,
      checkmarkCircleOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_9__.checkmarkCircleOutline
    });
    this.form = this._fb.group({
      id: null,
      make: null,
      model: null,
      variant: null,
      license_plate: null,
      vin: null,
      year: null,
      fuel_type: null,
      transmission: null,
      engine: null,
      color: null,
      current_mileage: null,
      ownership_start_date: null,
      rca_expiry_date: null,
      itp_expiry_date: null,
      rov_expiry_date: null,
      last_oil_service_date: null,
      last_oil_service_mileage: null
    });
  }
  ngOnInit() {
    this._carFacade.currentCar$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(it => !!it), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this)).subscribe(it => this.patchForm(it));
  }
  patchForm(car) {
    if (!car) return;
    this.form.patchValue(car);
    if (car.photos?.length) {
      this.photos = car.photos.map(p => ({
        kind: 'existing',
        id: p.id,
        url: p.url,
        isDefault: p.is_default
      }));
      if (!this.photos.some(p => p.isDefault)) {
        this.photos[0] = {
          ...this.photos[0],
          isDefault: true
        };
      }
    }
  }
  get isEditMode() {
    return !!this.form.value.id;
  }
  get previewTitle() {
    const v = this.form.value;
    return [v.make, v.model].filter(Boolean).join(' ') || 'Your vehicle';
  }
  get previewPlate() {
    return (this.form.value.license_plate || '').toUpperCase();
  }
  get previewPhoto() {
    const def = this.photos.find(p => p.isDefault);
    return def?.url ?? this.photos[0]?.url ?? '';
  }
  setDefault(index) {
    this.photos = this.photos.map((p, i) => ({
      ...p,
      isDefault: i === index
    }));
  }
  removePhoto(index, event) {
    event.stopPropagation();
    const photo = this.photos[index];
    if (photo.kind === 'existing') {
      this._carService.carControllerDeletePhoto({
        photoId: photo.id
      }).subscribe({
        error: err => console.error('Failed to delete photo', err)
      });
    }
    const wasDefault = photo.isDefault;
    this.photos.splice(index, 1);
    if (wasDefault && this.photos.length > 0) {
      this.photos[0] = {
        ...this.photos[0],
        isDefault: true
      };
    }
  }
  saveCar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.form.markAsDirty();
      return;
    }
    const formValue = this.form.getRawValue();
    const newPhotos = this.photos.filter(p => p.kind === 'new');
    const files = newPhotos.map(p => p.file);
    const defaultPhoto = this.photos.find(p => p.isDefault);
    let defaultPhotoId = null;
    let defaultNewPhotoIndex = null;
    if (defaultPhoto?.kind === 'existing') {
      defaultPhotoId = defaultPhoto.id;
    } else if (defaultPhoto?.kind === 'new') {
      defaultNewPhotoIndex = newPhotos.indexOf(defaultPhoto);
    }
    if (formValue.id) {
      const carObj = (0,_hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_7__.removeNullProperties)({
        ...formValue,
        files: files.length > 0 ? files : undefined,
        default_photo_id: defaultPhotoId,
        default_new_photo_index: defaultNewPhotoIndex
      });
      this._carFacade.udpateCar(carObj);
    } else {
      const carObj = (0,_hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_7__.removeNullProperties)({
        ...formValue,
        files: files.length > 0 ? files : undefined,
        default_new_photo_index: defaultNewPhotoIndex ?? 0
      });
      this._carFacade.createCar(carObj);
    }
  }
  saveAndAddAnother() {
    this.saveCar();
  }
  cancel() {
    this._nav.back();
  }
  onAddPhotos(file) {
    if (!file) return;
    if (!file.type.match(/\/(jpg|jpeg|png|gif|webp)$/)) {
      console.error('Only image files are allowed!');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      console.error('File size must be less than 10MB');
      return;
    }
    this.resizeImage(file, 1920, 0.8).then(resized => {
      const reader = new FileReader();
      reader.onload = () => {
        const isDefault = this.photos.length === 0;
        this.photos.push({
          kind: 'new',
          file: resized,
          url: reader.result,
          isDefault
        });
      };
      reader.readAsDataURL(resized);
    });
  }
  resizeImage(file, maxDimension, quality) {
    return new Promise(resolve => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        URL.revokeObjectURL(url);
        const {
          width,
          height
        } = img;
        const scale = Math.min(1, maxDimension / Math.max(width, height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(width * scale);
        canvas.height = Math.round(height * scale);
        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(blob => {
          resolve(blob ? new File([blob], file.name, {
            type: 'image/jpeg'
          }) : file);
        }, 'image/jpeg', quality);
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        resolve(file);
      };
      img.src = url;
    });
  }
  static {
    this.ɵfac = function CarsFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CarsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_hau_features_cars_state_car_details_car_details_facade__WEBPACK_IMPORTED_MODULE_13__.CarDetailsFacade), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_14__.CarService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_15__.NavController));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: CarsFormComponent,
      selectors: [["app-cars-form"]],
      inputs: {
        currentCar: "currentCar"
      },
      decls: 103,
      vars: 30,
      consts: [[1, "page-content"], [1, "page-shell"], [1, "breadcrumb"], ["type", "button", 1, "breadcrumb__link", 3, "click"], [1, "breadcrumb__sep"], [1, "breadcrumb__current"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "page-grid"], [1, "sidebar"], [1, "preview-card", "hau-card"], [1, "preview-card__top"], [1, "preview-photo-wrap"], ["alt", "Vehicle photo", 1, "preview-photo", 3, "src"], [1, "preview-photo-placeholder"], [1, "preview-info"], [1, "preview-title-row"], [1, "preview-title"], ["name", "pencil-outline", 1, "preview-edit-icon"], [1, "preview-plate"], [1, "preview-pills"], [1, "doc-pill", "doc-pill--rca"], [1, "doc-pill", "doc-pill--itp"], [1, "doc-pill", "doc-pill--rov"], [1, "preview-meta"], [1, "quick-tips", "hau-card"], [1, "tips-header"], ["name", "bulb-outline", 1, "tips-icon"], [1, "tips-list"], ["name", "checkmark-circle-outline", 1, "tip-check"], [1, "form-area"], [3, "formGroup"], [1, "form-section"], [1, "section-title"], [1, "form-row"], ["label", "Make *", "formControlName", "make"], ["label", "Model *", "formControlName", "model"], ["label", "Variant / Trim", "formControlName", "variant"], ["label", "License plate *", "formControlName", "license_plate"], ["label", "VIN", "formControlName", "vin"], ["label", "Year *", "formControlName", "year", 3, "inputType", "max", "min"], ["label", "Fuel type *", "formControlName", "fuel_type", 3, "controlType", "options"], ["label", "Transmission *", "formControlName", "transmission", 3, "controlType", "options"], ["label", "Engine", "formControlName", "engine"], ["label", "Color", "formControlName", "color", 3, "controlType", "options"], ["label", "Current mileage *", "formControlName", "current_mileage", 3, "inputType"], ["label", "Ownership start date *", "formControlName", "ownership_start_date", 3, "controlType"], [1, "form-row", "form-row--3"], ["label", "RCA expiry date", "formControlName", "rca_expiry_date", 3, "controlType"], ["label", "ITP expiry date", "formControlName", "itp_expiry_date", 3, "controlType"], ["label", "ROV expiry date", "formControlName", "rov_expiry_date", 3, "controlType"], ["label", "Last oil service date", "formControlName", "last_oil_service_date", 3, "controlType"], ["label", "Last oil service mileage", "formControlName", "last_oil_service_mileage", 3, "inputType"], [1, "section-subtitle"], [1, "photos-grid"], ["label", "Upload photos", 3, "selectedFile", "controlType"], [1, "photo-preview", 3, "photo-preview--default"], [1, "action-bar"], [1, "action-bar__inner"], [1, "btn-save", 3, "click"], ["slot", "start", "name", "save-outline"], ["type", "button", 1, "btn-add-another"], ["type", "button", 1, "btn-cancel", 3, "click"], ["name", "car-outline"], ["name", "shield-checkmark-outline"], ["name", "build-outline"], [1, "preview-meta-row"], ["name", "water-outline", 1, "meta-icon"], [1, "meta-label"], [1, "meta-value"], ["name", "calendar-outline", 1, "meta-icon"], ["name", "speedometer-outline", 1, "meta-icon"], [1, "photo-preview", 3, "click"], ["alt", "Vehicle photo", 3, "src"], [1, "default-badge"], ["type", "button", 1, "remove-photo", 3, "click"], ["type", "button", 1, "btn-add-another", 3, "click"], ["name", "add-circle-outline"]],
      template: function CarsFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-content", 0)(1, "div", 1)(2, "nav", 2)(3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CarsFormComponent_Template_button_click_3_listener() {
            return ctx.cancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Garage");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "/");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 6)(10, "h1", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 9)(15, "aside", 10)(16, "div", 11)(17, "div", 12)(18, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](19, CarsFormComponent_Conditional_19_Template, 2, 3, "img", 14)(20, CarsFormComponent_Conditional_20_Template, 2, 0, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "div", 16)(22, "div", 17)(23, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](25, "ion-icon", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](26, CarsFormComponent_Conditional_26_Template, 2, 1, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](28, CarsFormComponent_Conditional_28_Template, 6, 1, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](29, CarsFormComponent_Conditional_29_Template, 6, 1, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](30, CarsFormComponent_Conditional_30_Template, 6, 1, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](31, CarsFormComponent_Conditional_31_Template, 4, 3, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 26)(33, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](34, "ion-icon", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36, "Quick tips");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "ul", 29)(38, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](39, "ion-icon", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40, " Fields marked with ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43, " are required. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](45, "ion-icon", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46, " VIN helps us provide accurate maintenance reminders. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](48, "ion-icon", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49, " Keep your documents up to date to avoid penalties. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](51, "ion-icon", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](52, " You can update any information later from the vehicle details. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "div", 31)(54, "form", 32)(55, "div", 33)(56, "h3", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](57, "Vehicle details");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](59, "app-form-field", 36)(60, "app-form-field", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](62, "app-form-field", 38)(63, "app-form-field", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](65, "app-form-field", 40)(66, "app-form-field", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](67, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](68, "app-form-field", 42)(69, "app-form-field", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](70, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](71, "app-form-field", 44)(72, "app-form-field", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](73, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](74, "app-form-field", 46)(75, "app-form-field", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "div", 33)(77, "h3", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](78, "Documents & deadlines");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](80, "app-form-field", 49)(81, "app-form-field", 50)(82, "app-form-field", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](83, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](84, "app-form-field", 52)(85, "app-form-field", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](86, "div", 33)(87, "h3", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](88, "Photos");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](89, "p", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](90, "Add photos of your vehicle. Click a photo to set it as default. You can upload more later.");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](91, "div", 55)(92, "app-form-field", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("selectedFile", function CarsFormComponent_Template_app_form_field_selectedFile_92_listener($event) {
            return ctx.onAddPhotos($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeaterCreate"](93, CarsFormComponent_For_94_Template, 6, 7, "div", 57, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeaterTrackByIndex"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](95, "div", 58)(96, "div", 59)(97, "ion-button", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CarsFormComponent_Template_ion_button_click_97_listener() {
            return ctx.saveCar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](98, "ion-icon", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](99);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](100, CarsFormComponent_Conditional_100_Template, 3, 0, "button", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](101, "button", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CarsFormComponent_Template_button_click_101_listener() {
            return ctx.cancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](102, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.isEditMode ? "Edit vehicle" : "Add vehicle");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.isEditMode ? "Edit vehicle" : "Add vehicle");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.isEditMode ? "Update your vehicle details" : "Add a new car to your garage");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx.previewPhoto ? 19 : 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.previewTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx.previewPlate ? 26 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx.daysUntil(ctx.form.value.rca_expiry_date) !== null ? 28 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx.daysUntil(ctx.form.value.itp_expiry_date) !== null ? 29 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx.daysUntil(ctx.form.value.rov_expiry_date) !== null ? 30 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx.form.value.last_oil_service_date || ctx.form.value.last_oil_service_mileage || ctx.form.value.ownership_start_date || ctx.form.value.current_mileage ? 31 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("inputType", ctx.InputType.Number)("max", ctx.MAX_YEAR)("min", ctx.MIN_YEAR);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("controlType", ctx.FormControlType.Dropdown)("options", ctx.fuelTypeOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("controlType", ctx.FormControlType.Dropdown)("options", ctx.transmissionOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("controlType", ctx.FormControlType.Dropdown)("options", ctx.colorOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("inputType", ctx.InputType.Number);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("controlType", ctx.FormControlType.DatePicker);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("controlType", ctx.FormControlType.DatePicker);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("controlType", ctx.FormControlType.DatePicker);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("controlType", ctx.FormControlType.DatePicker);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("controlType", ctx.FormControlType.DatePicker);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("inputType", ctx.InputType.Number);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("controlType", ctx.FormControlType.File);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeater"](ctx.photos);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.isEditMode ? "Update vehicle" : "Save vehicle", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](!ctx.isEditMode ? 100 : -1);
        }
      },
      dependencies: [_hau_shared_component_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__.FormFieldComponent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonButton, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _hau_shared_pipes_image_url_pipe__WEBPACK_IMPORTED_MODULE_10__.ImageUrlPipe],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.page-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n}\n\n.page-shell[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px 16px 40px;\n}\n@media (min-width: 768px) {\n  .page-shell[_ngcontent-%COMP%] {\n    padding: 28px 24px 48px;\n  }\n}\n@media (min-width: 1024px) {\n  .page-shell[_ngcontent-%COMP%] {\n    padding: 32px 40px 56px;\n  }\n}\n\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 12px;\n  font-size: 0.84rem;\n}\n\n.breadcrumb__link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  color: var(--hau-primary);\n  cursor: pointer;\n  font-size: inherit;\n  font-weight: 500;\n}\n.breadcrumb__link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.breadcrumb__sep[_ngcontent-%COMP%] {\n  color: var(--hau-text-dim);\n}\n\n.breadcrumb__current[_ngcontent-%COMP%] {\n  color: var(--hau-text-muted);\n}\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--hau-text);\n  margin: 0 0 4px;\n}\n@media (min-width: 768px) {\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.9rem;\n  }\n}\n\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--hau-text-muted);\n  margin: 0;\n}\n\n.page-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n@media (min-width: 1024px) {\n  .page-grid[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: flex-start;\n    gap: 32px;\n  }\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  order: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n@media (min-width: 1024px) {\n  .sidebar[_ngcontent-%COMP%] {\n    order: 2;\n    width: 340px;\n    flex-shrink: 0;\n    position: sticky;\n    top: 20px;\n  }\n}\n\n.form-area[_ngcontent-%COMP%] {\n  order: 2;\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width: 1024px) {\n  .form-area[_ngcontent-%COMP%] {\n    order: 1;\n  }\n}\n.form-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.form-section[_ngcontent-%COMP%] {\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-lg);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  box-shadow: var(--hau-shadow-soft);\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0 0 2px;\n  color: var(--hau-text);\n}\n\n.section-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--hau-text-muted);\n  margin: -8px 0 0;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-row--3[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 600px) {\n  .form-row--3[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.photos-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: flex-start;\n}\n\n.photo-preview[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90px;\n  height: 90px;\n  border-radius: var(--hau-radius-sm);\n  overflow: hidden;\n  border: 2px solid var(--hau-border);\n  cursor: pointer;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.photo-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.photo-preview[_ngcontent-%COMP%]:hover {\n  border-color: color-mix(in srgb, var(--hau-primary) 50%, var(--hau-border));\n}\n.photo-preview--default[_ngcontent-%COMP%] {\n  border-color: var(--hau-primary);\n  box-shadow: 0 0 0 2px color-mix(in srgb, var(--hau-primary) 30%, transparent);\n  animation: _ngcontent-%COMP%_default-border-pulse 2s ease-in-out infinite;\n}\n.photo-preview[_ngcontent-%COMP%]   .remove-photo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.55);\n  color: white;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  z-index: 2;\n}\n.photo-preview[_ngcontent-%COMP%]   .remove-photo[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.8);\n}\n.photo-preview[_ngcontent-%COMP%]   .default-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: color-mix(in srgb, var(--hau-primary) 85%, transparent);\n  color: #fff;\n  font-size: 0.6rem;\n  font-weight: 600;\n  text-align: center;\n  padding: 2px 0;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  pointer-events: none;\n}\n\n@keyframes _ngcontent-%COMP%_default-border-pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 2px color-mix(in srgb, var(--hau-primary) 30%, transparent);\n  }\n  50% {\n    box-shadow: 0 0 0 4px color-mix(in srgb, var(--hau-primary) 15%, transparent);\n  }\n}\n.preview-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n}\n\n.preview-card__top[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n}\n@media (min-width: 1024px) {\n  .preview-card__top[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.preview-photo-wrap[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 110px;\n  flex-shrink: 0;\n  overflow: hidden;\n  background: var(--hau-bg-soft);\n}\n@media (min-width: 1024px) {\n  .preview-photo-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    aspect-ratio: 16/9;\n  }\n}\n\n.preview-photo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.preview-photo-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--hau-text-dim);\n  font-size: 2.5rem;\n}\n@media (min-width: 1024px) {\n  .preview-photo-placeholder[_ngcontent-%COMP%] {\n    font-size: 4rem;\n  }\n}\n\n.preview-info[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 0;\n}\n@media (min-width: 1024px) {\n  .preview-info[_ngcontent-%COMP%] {\n    padding: 14px 16px 12px;\n  }\n}\n\n.preview-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.preview-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--hau-text);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.preview-edit-icon[_ngcontent-%COMP%] {\n  color: var(--hau-text-dim);\n  font-size: 0.9rem;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n\n.preview-plate[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  background: var(--hau-bg-soft);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-sm);\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--hau-text);\n  letter-spacing: 0.06em;\n  align-self: flex-start;\n}\n\n.preview-pills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.doc-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 8px;\n  border-radius: var(--hau-radius-sm);\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.doc-pill[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.doc-pill--rca[_ngcontent-%COMP%] {\n  background: var(--hau-primary-soft);\n  color: var(--hau-primary);\n}\n.doc-pill--itp[_ngcontent-%COMP%] {\n  background: var(--hau-warning-soft);\n  color: var(--hau-warning-fg);\n}\n.doc-pill--rov[_ngcontent-%COMP%] {\n  background: var(--hau-success-soft);\n  color: var(--hau-success-fg);\n}\n\n.preview-meta[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--hau-border);\n  padding: 12px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.preview-meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.82rem;\n}\n\n.meta-icon[_ngcontent-%COMP%] {\n  color: var(--hau-text-dim);\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n\n.meta-label[_ngcontent-%COMP%] {\n  color: var(--hau-text-muted);\n  flex-shrink: 0;\n}\n\n.meta-value[_ngcontent-%COMP%] {\n  color: var(--hau-text);\n  font-weight: 500;\n  margin-left: auto;\n  text-align: right;\n}\n\n.quick-tips[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.tips-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--hau-text);\n  margin-bottom: 12px;\n}\n\n.tips-icon[_ngcontent-%COMP%] {\n  color: var(--hau-warning-fg);\n  font-size: 1.1rem;\n}\n\n.tips-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.tips-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  font-size: 0.82rem;\n  color: var(--hau-text-muted);\n  line-height: 1.4;\n}\n\n.tip-check[_ngcontent-%COMP%] {\n  color: var(--hau-success-fg);\n  font-size: 1rem;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n\n.action-bar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  background: var(--hau-surface);\n  border-top: 1px solid var(--hau-border);\n  padding: 12px 16px;\n  box-shadow: 0 -4px 12px rgba(15, 23, 42, 0.07);\n}\n\n.action-bar__inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n@media (max-width: 639px) {\n  .action-bar__inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 8px;\n  }\n}\n\n.btn-save[_ngcontent-%COMP%] {\n  --border-radius: 9999px;\n  --box-shadow: 0 4px 18px rgba(37, 99, 235, 0.26);\n  font-weight: 700;\n  height: 46px;\n  min-width: 160px;\n}\n@media (max-width: 639px) {\n  .btn-save[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.btn-add-another[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  background: transparent;\n  color: var(--hau-primary);\n  border: 1.5px solid var(--hau-primary);\n  border-radius: 9999px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background var(--hau-transition-fast);\n}\n.btn-add-another[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.btn-add-another[_ngcontent-%COMP%]:hover {\n  background: var(--hau-primary-soft);\n}\n@media (max-width: 639px) {\n  .btn-add-another[_ngcontent-%COMP%] {\n    justify-content: center;\n    width: 100%;\n  }\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: var(--hau-text-muted);\n  font-size: 0.88rem;\n  font-weight: 500;\n  cursor: pointer;\n  padding: 10px 14px;\n  border-radius: 9999px;\n  transition: color var(--hau-transition-fast), background var(--hau-transition-fast);\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  color: var(--hau-text);\n  background: rgba(15, 23, 42, 0.04);\n}\n@media (max-width: 639px) {\n  .btn-cancel[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2Fycy9jb21wb25lbnQvY2Fycy1mb3JtL2NhcnMtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQURGO0FBR0U7RUFMRjtJQUsrQix1QkFBQTtFQUM3QjtBQUNGO0FBREU7RUFORjtJQU0rQix1QkFBQTtFQUs3QjtBQUNGOztBQURBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFEQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSUY7QUFGRTtFQUFVLDBCQUFBO0FBS1o7O0FBRkE7RUFBbUIsMEJBQUE7QUFNbkI7O0FBTEE7RUFBdUIsNEJBQUE7QUFTdkI7O0FBTEE7RUFBZSxtQkFBQTtBQVNmOztBQVBBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQVVGO0FBUkU7RUFORjtJQU04QixpQkFBQTtFQVk1QjtBQUNGOztBQVZBO0VBQ0UsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLFNBQUE7QUFhRjs7QUFSQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFXRjtBQVRFO0VBTEY7SUFNSSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsU0FBQTtFQVlGO0FBQ0Y7O0FBUEE7RUFDRSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQVVGO0FBUkU7RUFORjtJQU9JLFFBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsU0FBQTtFQVdGO0FBQ0Y7O0FBTkE7RUFDRSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFTRjtBQVBFO0VBUEY7SUFPK0IsUUFBQTtFQVc3QjtBQUNGO0FBVkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBWUo7O0FBTkE7RUFDRSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0FBU0Y7O0FBTkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFTRjs7QUFOQTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQVNGOztBQU5BO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQVNGO0FBUEU7RUFDRSxxQ0FBQTtBQVNKO0FBUEk7RUFIRjtJQUc4QiwwQkFBQTtFQVc5QjtBQUNGO0FBVEU7RUFYRjtJQVc4QiwwQkFBQTtFQWE1QjtBQUNGOztBQVRBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUFZRjs7QUFUQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0Esd0RBQUE7QUFZRjtBQVZFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFZSjtBQVRFO0VBQ0UsMkVBQUE7QUFXSjtBQVJFO0VBQ0UsZ0NBQUE7RUFDQSw2RUFBQTtFQUNBLHVEQUFBO0FBVUo7QUFQRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQVNKO0FBUEk7RUFBVSw4QkFBQTtBQVVkO0FBUEU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG1FQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFTSjs7QUFMQTtFQUNFO0lBQVcsNkVBQUE7RUFTWDtFQVJBO0lBQVksNkVBQUE7RUFXWjtBQUNGO0FBUEE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFTRjs7QUFOQTtFQUNFLGFBQUE7RUFDQSxNQUFBO0FBU0Y7QUFQRTtFQUpGO0lBSStCLHNCQUFBO0VBVzdCO0FBQ0Y7O0FBVEE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBWUY7QUFWRTtFQVBGO0lBUUksV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQWFGO0FBQ0Y7O0FBVkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBYUY7O0FBVkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQWFGO0FBWEU7RUFURjtJQVMrQixlQUFBO0VBZTdCO0FBQ0Y7O0FBYkE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQWdCRjtBQWRFO0VBUkY7SUFRK0IsdUJBQUE7RUFrQjdCO0FBQ0Y7O0FBaEJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQW1CRjs7QUFoQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQW1CRjs7QUFoQkE7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFtQkY7O0FBaEJBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFtQkY7O0FBaEJBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0FBbUJGOztBQWhCQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFtQkY7QUFqQkU7RUFBVyxpQkFBQTtBQW9CYjtBQWxCRTtFQUNFLG1DQUFBO0VBQ0EseUJBQUE7QUFvQko7QUFqQkU7RUFDRSxtQ0FBQTtFQUNBLDRCQUFBO0FBbUJKO0FBaEJFO0VBQ0UsbUNBQUE7RUFDQSw0QkFBQTtBQWtCSjs7QUFkQTtFQUNFLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBaUJGOztBQWRBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FBaUJGOztBQWRBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWlCRjs7QUFkQTtFQUNFLDRCQUFBO0VBQ0EsY0FBQTtBQWlCRjs7QUFkQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBaUJGOztBQVpBO0VBQ0UsYUFBQTtBQWVGOztBQVpBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBZUY7O0FBWkE7RUFDRSw0QkFBQTtFQUNBLGlCQUFBO0FBZUY7O0FBWkE7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQWVGO0FBYkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBZUo7O0FBWEE7RUFDRSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWNGOztBQVRBO0VBQ0UsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLDhDQUFBO0FBWUY7O0FBVEE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBWUY7QUFWRTtFQVBGO0lBUUksc0JBQUE7SUFDQSxvQkFBQTtJQUNBLFFBQUE7RUFhRjtBQUNGOztBQVZBO0VBQ0UsdUJBQUE7RUFDQSxnREFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBYUY7QUFYRTtFQVBGO0lBTzhCLFdBQUE7RUFlNUI7QUFDRjs7QUFiQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaURBQUE7QUFnQkY7QUFkRTtFQUFXLGVBQUE7QUFpQmI7QUFmRTtFQUFVLG1DQUFBO0FBa0JaO0FBaEJFO0VBbEJGO0lBbUJJLHVCQUFBO0lBQ0EsV0FBQTtFQW1CRjtBQUNGOztBQWhCQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUZBQUE7QUFtQkY7QUFqQkU7RUFDRSxzQkFBQTtFQUNBLGtDQUFBO0FBbUJKO0FBaEJFO0VBaEJGO0lBaUJJLGtCQUFBO0lBQ0EsV0FBQTtFQW1CRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wYWdlLWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBtaW4taGVpZ2h0OiAwO1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgUGFnZSBzaGVsbCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcblxuLnBhZ2Utc2hlbGwge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDIwcHggMTZweCA0MHB4O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgIHsgcGFkZGluZzogMjhweCAyNHB4IDQ4cHg7IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgeyBwYWRkaW5nOiAzMnB4IDQwcHggNTZweDsgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgQnJlYWRjcnVtYiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcblxuLmJyZWFkY3J1bWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZm9udC1zaXplOiAwLjg0cmVtO1xufVxuXG4uYnJlYWRjcnVtYl9fbGluayB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IHZhcigtLWhhdS1wcmltYXJ5KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgJjpob3ZlciB7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG59XG5cbi5icmVhZGNydW1iX19zZXAgeyBjb2xvcjogdmFyKC0taGF1LXRleHQtZGltKTsgfVxuLmJyZWFkY3J1bWJfX2N1cnJlbnQgeyBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpOyB9XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBQYWdlIGhlYWRlciDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcblxuLnBhZ2UtaGVhZGVyIHsgbWFyZ2luLWJvdHRvbTogMjRweDsgfVxuXG4ucGFnZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICBtYXJnaW46IDAgMCA0cHg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IGZvbnQtc2l6ZTogMS45cmVtOyB9XG59XG5cbi5wYWdlLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7XG4gIG1hcmdpbjogMDtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIE1haW4gZ3JpZCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcblxuLnBhZ2UtZ3JpZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDMycHg7XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFNpZGViYXIgKHByZXZpZXcgKyB0aXBzKSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcblxuLnNpZGViYXIge1xuICBvcmRlcjogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICBvcmRlcjogMjtcbiAgICB3aWR0aDogMzQwcHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDIwcHg7XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIEZvcm0gYXJlYSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcblxuLmZvcm0tYXJlYSB7XG4gIG9yZGVyOiAyO1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgeyBvcmRlcjogMTsgfVxuXG4gIGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE2cHg7XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIEZvcm0gc2VjdGlvbnMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG5cbi5mb3JtLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtc3VyZmFjZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLWxnKTtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1oYXUtc2hhZG93LXNvZnQpO1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwIDAgMnB4O1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xufVxuXG4uc2VjdGlvbi1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbiAgbWFyZ2luOiAtOHB4IDAgMDtcbn1cblxuLmZvcm0tcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDEycHg7XG5cbiAgJi0tMyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBQaG90b3Mgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG5cbi5waG90b3MtZ3JpZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMnB4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnBob3RvLXByZXZpZXcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtc20pO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZTtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWhhdS1wcmltYXJ5KSA1MCUsIHZhcigtLWhhdS1ib3JkZXIpKTtcbiAgfVxuXG4gICYtLWRlZmF1bHQge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taGF1LXByaW1hcnkpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0taGF1LXByaW1hcnkpIDMwJSwgdHJhbnNwYXJlbnQpO1xuICAgIGFuaW1hdGlvbjogZGVmYXVsdC1ib3JkZXItcHVsc2UgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIH1cblxuICAucmVtb3ZlLXBob3RvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0cHg7XG4gICAgcmlnaHQ6IDRweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41NSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHotaW5kZXg6IDI7XG5cbiAgICAmOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpOyB9XG4gIH1cblxuICAuZGVmYXVsdC1iYWRnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1oYXUtcHJpbWFyeSkgODUlLCB0cmFuc3BhcmVudCk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMnB4IDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZGVmYXVsdC1ib3JkZXItcHVsc2Uge1xuICAwJSwgMTAwJSB7IGJveC1zaGFkb3c6IDAgMCAwIDJweCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0taGF1LXByaW1hcnkpIDMwJSwgdHJhbnNwYXJlbnQpOyB9XG4gIDUwJSAgICAgICB7IGJveC1zaGFkb3c6IDAgMCAwIDRweCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0taGF1LXByaW1hcnkpIDE1JSwgdHJhbnNwYXJlbnQpOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBQcmV2aWV3IGNhcmQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG5cbi5wcmV2aWV3LWNhcmQge1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJldmlldy1jYXJkX190b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDA7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG59XG5cbi5wcmV2aWV3LXBob3RvLXdyYXAge1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMTEwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtYmctc29mdCk7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBhc3BlY3QtcmF0aW86IDE2IC8gOTtcbiAgfVxufVxuXG4ucHJldmlldy1waG90byB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ucHJldmlldy1waG90by1wbGFjZWhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtZGltKTtcbiAgZm9udC1zaXplOiAyLjVyZW07XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgeyBmb250LXNpemU6IDRyZW07IH1cbn1cblxuLnByZXZpZXctaW5mbyB7XG4gIHBhZGRpbmc6IDEycHggMTRweDtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG4gIG1pbi13aWR0aDogMDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7IHBhZGRpbmc6IDE0cHggMTZweCAxMnB4OyB9XG59XG5cbi5wcmV2aWV3LXRpdGxlLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xufVxuXG4ucHJldmlldy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5wcmV2aWV3LWVkaXQtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1kaW0pO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByZXZpZXctcGxhdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtYmctc29mdCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLXNtKTtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG4ucHJldmlldy1waWxscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA2cHg7XG59XG5cbi5kb2MtcGlsbCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1zbSk7XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMC44cmVtOyB9XG5cbiAgJi0tcmNhIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtcHJpbWFyeS1zb2Z0KTtcbiAgICBjb2xvcjogdmFyKC0taGF1LXByaW1hcnkpO1xuICB9XG5cbiAgJi0taXRwIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtd2FybmluZy1zb2Z0KTtcbiAgICBjb2xvcjogdmFyKC0taGF1LXdhcm5pbmctZmcpO1xuICB9XG5cbiAgJi0tcm92IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtc3VjY2Vzcy1zb2Z0KTtcbiAgICBjb2xvcjogdmFyKC0taGF1LXN1Y2Nlc3MtZmcpO1xuICB9XG59XG5cbi5wcmV2aWV3LW1ldGEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taGF1LWJvcmRlcik7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4ucHJldmlldy1tZXRhLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmb250LXNpemU6IDAuODJyZW07XG59XG5cbi5tZXRhLWljb24ge1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtZGltKTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLm1ldGEtbGFiZWwge1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLm1ldGEtdmFsdWUge1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBRdWljayB0aXBzIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuXG4ucXVpY2stdGlwcyB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi50aXBzLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0KTtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLnRpcHMtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1oYXUtd2FybmluZy1mZyk7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4udGlwcy1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcblxuICBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDhweDtcbiAgICBmb250LXNpemU6IDAuODJyZW07XG4gICAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICB9XG59XG5cbi50aXAtY2hlY2sge1xuICBjb2xvcjogdmFyKC0taGF1LXN1Y2Nlc3MtZmcpO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBBY3Rpb24gYmFyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuXG4uYWN0aW9uLWJhciB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtc3VyZmFjZSk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBib3gtc2hhZG93OiAwIC00cHggMTJweCByZ2JhKDE1LCAyMywgNDIsIDAuMDcpO1xufVxuXG4uYWN0aW9uLWJhcl9faW5uZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGdhcDogOHB4O1xuICB9XG59XG5cbi5idG4tc2F2ZSB7XG4gIC0tYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAtLWJveC1zaGFkb3c6IDAgNHB4IDE4cHggcmdiYSgzNywgOTksIDIzNSwgMC4yNik7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGhlaWdodDogNDZweDtcbiAgbWluLXdpZHRoOiAxNjBweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHsgd2lkdGg6IDEwMCU7IH1cbn1cblxuLmJ0bi1hZGQtYW5vdGhlciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgcGFkZGluZzogMTBweCAxOHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWhhdS1wcmltYXJ5KTtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1oYXUtcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgZm9udC1zaXplOiAwLjg4cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCk7XG5cbiAgaW9uLWljb24geyBmb250LXNpemU6IDFyZW07IH1cblxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0taGF1LXByaW1hcnktc29mdCk7IH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uYnRuLWNhbmNlbCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgdHJhbnNpdGlvbjogY29sb3IgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCksIGJhY2tncm91bmQgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCk7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWhhdS10ZXh0KTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyMywgNDIsIDAuMDQpO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
};
CarsFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.UntilDestroy)()], CarsFormComponent);


/***/ },

/***/ 472
/*!*********************************************************************!*\
  !*** ./src/app/shared/component/form-field/form-field.component.ts ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormControlType: () => (/* binding */ FormControlType),
/* harmony export */   FormFieldComponent: () => (/* binding */ FormFieldComponent),
/* harmony export */   InputType: () => (/* binding */ InputType)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _hau_shared_directive_abstract_input_control_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hau/shared/directive/abstract-input-control.directive */ 1670);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular/standalone */ 7241);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/until-destroy */ 6127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6124);
var FormFieldComponent_1;








const _forTrack0 = ($index, $item) => $item.value;
function FormFieldComponent_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ion-input", 0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("label", ctx_r0.label)("type", ctx_r0.inputType)("max", ctx_r0.max)("min", ctx_r0.min)("maxlength", ctx_r0.maxlength)("formControl", ctx_r0.control);
  }
}
function FormFieldComponent_Case_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-item")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Uploading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "ion-progress-bar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.uploadProgress / 100);
  }
}
function FormFieldComponent_Case_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-note", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Only image files are allowed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function FormFieldComponent_Case_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-note", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "File size must be less than 1MB");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function FormFieldComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function FormFieldComponent_Case_1_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](2, FormFieldComponent_Case_1_Conditional_2_Template, 4, 1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](3, FormFieldComponent_Case_1_Conditional_3_Template, 2, 0, "ion-note", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](4, FormFieldComponent_Case_1_Conditional_4_Template, 2, 0, "ion-note", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("accept", ctx_r0.acceptedFilesFormat || "image/*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx_r0.uploadProgress ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"]((ctx_r0.control.errors == null ? null : ctx_r0.control.errors["fileType"]) ? 3 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"]((ctx_r0.control.errors == null ? null : ctx_r0.control.errors["fileSize"]) ? 4 : -1);
  }
}
function FormFieldComponent_Case_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-select-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", option_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](option_r3.label);
  }
}
function FormFieldComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-select", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](1, FormFieldComponent_Case_2_For_2_Template, 2, 2, "ion-select-option", 5, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("label", ctx_r0.label)("formControl", ctx_r0.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](ctx_r0.options);
  }
}
function FormFieldComponent_Case_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ion-datetime", 8);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx_r0.control)("showDefaultButtons", true);
  }
}
function FormFieldComponent_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ion-input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-modal", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, FormFieldComponent_Case_3_ng_template_2_Template, 1, 2, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", ctx_r0.datePickerId)("label", ctx_r0.label)("value", ctx_r0.formatControlDate(ctx_r0.control.value))("placeholder", "Select date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("trigger", ctx_r0.datePickerId)("keepContentsMounted", true);
  }
}
let FormFieldComponent = class FormFieldComponent extends _hau_shared_directive_abstract_input_control_directive__WEBPACK_IMPORTED_MODULE_3__.AbstractInputControlDirective {
  static {
    FormFieldComponent_1 = this;
  }
  static {
    this._idCounter = 0;
  }
  constructor(ngControl, changeDetectorRef) {
    super(ngControl, changeDetectorRef);
    this.InputType = InputType;
    this.FormControlType = FormControlType;
    this.datePickerId = `hau_cal_${++FormFieldComponent_1._idCounter}`;
    this.showPassword = false;
    this.controlType = FormControlType.Input;
    this.inputType = InputType.Text;
    this.options = [];
    this.inputFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.inputBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.hasError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.selectedFile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {
    super.ngOnInit();
    if (!this.control) return;
    this.control.statusChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe(status => {
      if (status === 'VALID') this.hasError.emit(null);else if (!this.control?.hasError('required')) this.hasError.emit(this.control?.errors);
    });
    this.control.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe(value => this.control.setValue(value, {
      emitEvent: false
    }));
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  formatControlDate(value) {
    if (value == null) return '';
    const date = new Date(value);
    return isNaN(date.getTime()) ? '' : date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }
  onFileSelected(event) {
    this.selectedFile.emit(event.target?.files[0]);
  }
  static {
    this.ɵfac = function FormFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FormFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: FormFieldComponent,
      selectors: [["app-form-field"]],
      inputs: {
        controlType: "controlType",
        minlength: "minlength",
        maxlength: "maxlength",
        max: "max",
        min: "min",
        label: "label",
        inputType: "inputType",
        uploadProgress: "uploadProgress",
        acceptedFilesFormat: "acceptedFilesFormat",
        options: "options"
      },
      outputs: {
        inputFocus: "inputFocus",
        inputBlur: "inputBlur",
        hasError: "hasError",
        selectedFile: "selectedFile"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
      decls: 4,
      vars: 1,
      consts: [["label-placement", "floating", "fill", "outline", "ngDefaultControl", "", 3, "label", "type", "max", "min", "maxlength", "formControl"], [1, "file-upload-container"], ["label-placement", "floating", "fill", "outline", "ngDefaultControl", "", 3, "label", "formControl"], ["type", "file", 2, "margin-top", "10px", 3, "change", "accept"], ["color", "danger"], [3, "value"], ["label-placement", "floating", "fill", "outline", "type", "text", "readonly", "", "ngDefaultControl", "", 3, "id", "label", "value", "placeholder"], ["cssClass", "hau-datepicker-modal", 3, "trigger", "keepContentsMounted"], ["presentation", "date", "mode", "md", 3, "formControl", "showDefaultButtons"]],
      template: function FormFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](0, FormFieldComponent_Case_0_Template, 1, 6, "ion-input", 0)(1, FormFieldComponent_Case_1_Template, 5, 4, "div", 1)(2, FormFieldComponent_Case_2_Template, 3, 2, "ion-select", 2)(3, FormFieldComponent_Case_3_Template, 3, 6);
        }
        if (rf & 2) {
          let tmp_0_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"]((tmp_0_0 = ctx.controlType) === ctx.FormControlType.Input ? 0 : tmp_0_0 === ctx.FormControlType.File ? 1 : tmp_0_0 === ctx.FormControlType.Dropdown ? 2 : tmp_0_0 === ctx.FormControlType.DatePicker ? 3 : -1);
        }
      },
      dependencies: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonModal, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonDatetime, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonProgressBar, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonNote, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonSelect, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonSelectOption],
      styles: [".file-upload-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.file-upload-container[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 4px;\n  background-color: var(--ion-color-light);\n}\n.file-upload-container[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]::-webkit-file-upload-button {\n  background-color: var(--ion-color-primary);\n  color: white;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  margin-right: 16px;\n}\n.file-upload-container[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]::-webkit-file-upload-button:hover {\n  background-color: var(--ion-color-primary-shade);\n}\n.file-upload-container[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FBQ0o7QUFDSTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ047QUFDTTtFQUNFLGdEQUFBO0FBQ1I7QUFJRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBRkoiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZS11cGxvYWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG4gIFxuICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIFxuICAgICY6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgaW9uLW5vdGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
};
FormFieldComponent = FormFieldComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.UntilDestroy)()], FormFieldComponent);

var InputType;
(function (InputType) {
  InputType["Email"] = "email";
  InputType["Month"] = "month";
  InputType["Number"] = "number";
  InputType["Password"] = "password";
  InputType["Text"] = "text";
  InputType["File"] = "file";
})(InputType || (InputType = {}));
var FormControlType;
(function (FormControlType) {
  FormControlType["File"] = "file";
  FormControlType["Input"] = "input";
  FormControlType["Dropdown"] = "dropdown";
  FormControlType["DatePicker"] = "datePicker";
})(FormControlType || (FormControlType = {}));

/***/ },

/***/ 1670
/*!**********************************************************************!*\
  !*** ./src/app/shared/directive/abstract-input-control.directive.ts ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractInputControlDirective: () => (/* binding */ AbstractInputControlDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/until-destroy */ 6127);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4198);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6124);






let AbstractInputControlDirective = class AbstractInputControlDirective {
  constructor(ngControl, changeDetectorRef) {
    this.ngControl = ngControl;
    this.changeDetectorRef = changeDetectorRef;
    this.controlInstanceChanged$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    if (this.ngControl != null) {
      // Setting the value accessor directly (instead of using the providers) to avoid running into a circular import.
      this.ngControl.valueAccessor = this;
    }
  }
  // eslint-disable-next-line accessor-pairs
  set formControl(formControl) {
    this.control = formControl;
  }
  // These are just to make Angular happy. Not needed since the control is passed to the child input
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  writeValue(obj) {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  registerOnChange(fn) {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  registerOnTouched(fn) {}
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  ngOnInit() {
    if (this.ngControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName) {
      const formGroupDirective = this.ngControl.formDirective;
      const controlName = this.ngControl.name;
      if (!!formGroupDirective && !!controlName) {
        this.control = formGroupDirective.form.controls[controlName];
      }
    } else if (this.ngControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective) {
      this.control = this.ngControl.control;
    } else if (this.ngControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel) {
      this.control = this.ngControl.control;
      this.control.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__.untilDestroyed)(this)).subscribe(() => this.ngControl.viewToModelUpdate(this.control?.value));
    } else if (!this.ngControl) {
      this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl();
    }
    this.controlInstanceChanged$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__.untilDestroyed)(this)).subscribe(control => {
      this.control = control;
      this.patchControlUpdateFunctions(control);
    });
    this.controlInstanceChanged$.next(this.control);
  }
  patchControlUpdateFunctions(control) {
    control.statusChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__.untilDestroyed)(this), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.controlInstanceChanged$), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)()).subscribe(() => {
      this.changeDetectorRef.markForCheck();
    });
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const originalMarkAsTouched = control.markAsTouched;
    control.markAsTouched = (...args) => {
      originalMarkAsTouched.call(control, ...args);
      this.changeDetectorRef.markForCheck();
    };
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const originalMarkAsDirty = control.markAsDirty;
    control.markAsDirty = (...args) => {
      originalMarkAsDirty.call(control, ...args);
      this.changeDetectorRef.markForCheck();
    };
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const originalMarkAsUntouched = control.markAsUntouched;
    control.markAsUntouched = (...args) => {
      originalMarkAsUntouched.call(control, ...args);
      this.changeDetectorRef.markForCheck();
    };
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const originalMarkAsPending = control.markAsPending;
    control.markAsPending = (...args) => {
      originalMarkAsPending.call(control, ...args);
      this.changeDetectorRef.markForCheck();
    };
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const originalMarkAsPristine = control.markAsPristine;
    control.markAsPristine = (...args) => {
      originalMarkAsPristine.call(control, ...args);
      this.changeDetectorRef.markForCheck();
    };
  }
  static {
    this.ɵfac = function AbstractInputControlDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AbstractInputControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
      type: AbstractInputControlDirective,
      inputs: {
        formControl: "formControl"
      }
    });
  }
};
AbstractInputControlDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__.UntilDestroy)()], AbstractInputControlDirective);


/***/ },

/***/ 9275
/*!************************************************!*\
  !*** ./src/app/shared/pipes/image-url.pipe.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageUrlPipe: () => (/* binding */ ImageUrlPipe)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6124);


class ImageUrlPipe {
  transform(value) {
    if (!value) {
      return 'assets/icon/placeholder.png';
    }
    if (value.startsWith('http')) {
      try {
        const url = new URL(value);
        return `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imageBaseUrl}${url.pathname}`;
      } catch {
        return value;
      }
    }
    return `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imageBaseUrl}${value}`;
  }
  static {
    this.ɵfac = function ImageUrlPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ImageUrlPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "imageUrl",
      type: ImageUrlPipe,
      pure: true
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=default-src_app_features_cars_component_cars-form_cars-form_component_ts.js.map