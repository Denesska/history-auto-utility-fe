"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_features_cars_component_cars-form_cars-form_component_ts"],{

/***/ 90536
/*!*************************************************!*\
  !*** ./src/app/features/cars/cars.constants.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COLOR_OPTIONS: () => (/* binding */ COLOR_OPTIONS),
/* harmony export */   FUEL_TYPE_OPTIONS: () => (/* binding */ FUEL_TYPE_OPTIONS),
/* harmony export */   MAX_PHOTOS_PER_CAR: () => (/* binding */ MAX_PHOTOS_PER_CAR),
/* harmony export */   MAX_YEAR_CAR_CREATE: () => (/* binding */ MAX_YEAR_CAR_CREATE),
/* harmony export */   MIN_YEAR_CAR_CREATE: () => (/* binding */ MIN_YEAR_CAR_CREATE),
/* harmony export */   TRANSMISSION_OPTIONS: () => (/* binding */ TRANSMISSION_OPTIONS)
/* harmony export */ });
const MAX_YEAR_CAR_CREATE = new Date().getFullYear();
const MIN_YEAR_CAR_CREATE = 1885;
const MAX_PHOTOS_PER_CAR = 13;
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

/***/ 97080
/*!**************************************************************************!*\
  !*** ./src/app/features/cars/component/cars-form/cars-form.component.ts ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarsFormComponent: () => (/* binding */ CarsFormComponent)
/* harmony export */ });
/* harmony import */ var _var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 49074);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _hau_shared_component_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hau/shared/component/form-field/form-field.component */ 20472);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/until-destroy */ 56127);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var _hau_shared_component_vehicle_catalog_select_vehicle_catalog_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @hau/shared/component/vehicle-catalog-select/vehicle-catalog-select.component */ 36588);
/* harmony import */ var _hau_features_cars_remove_car_panel_remove_car_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @hau/features/cars/remove-car-panel/remove-car-panel.component */ 3090);
/* harmony import */ var _hau_features_cars_cars_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @hau/features/cars/cars.constants */ 90536);
/* harmony import */ var _hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @hau/features/cars/cars.utils */ 5680);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ionicons */ 45846);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ionicons/icons */ 77958);
/* harmony import */ var _hau_shared_pipes_image_url_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @hau/shared/pipes/image-url.pipe */ 19275);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _hau_features_cars_state_car_details_car_details_facade__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @hau/features/cars/state/car-details/car-details.facade */ 48899);
/* harmony import */ var _hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @hau/autogenapi/services */ 3977);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular/standalone */ 4059);




















function CarsFormComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](1, "imageUrl");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](1, 1, ctx_r0.previewPhoto), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
  }
}
function CarsFormComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-icon", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function CarsFormComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r0.previewPlate);
  }
}
function CarsFormComponent_Conditional_28_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" \u00B7 ", ctx_r0.formatMileage(ctx_r0.form.value.last_oil_service_mileage), " ");
  }
}
function CarsFormComponent_Conditional_28_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-icon", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Oil service");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditionalCreate"](6, CarsFormComponent_Conditional_28_Conditional_1_Conditional_6_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r0.formatDate(ctx_r0.form.value.last_oil_service_date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditional"](ctx_r0.form.value.last_oil_service_mileage ? 6 : -1);
  }
}
function CarsFormComponent_Conditional_28_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-icon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Ownership since");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r0.formatDate(ctx_r0.form.value.ownership_start_date));
  }
}
function CarsFormComponent_Conditional_28_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-icon", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Current mileage");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r0.formatMileage(ctx_r0.form.value.current_mileage));
  }
}
function CarsFormComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditionalCreate"](1, CarsFormComponent_Conditional_28_Conditional_1_Template, 7, 2, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditionalCreate"](2, CarsFormComponent_Conditional_28_Conditional_2_Template, 6, 1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditionalCreate"](3, CarsFormComponent_Conditional_28_Conditional_3_Template, 6, 1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditional"](ctx_r0.form.value.last_oil_service_date || ctx_r0.form.value.last_oil_service_mileage ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditional"](ctx_r0.form.value.ownership_start_date ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditional"](ctx_r0.form.value.current_mileage ? 3 : -1);
  }
}
function CarsFormComponent_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Initial mileage is recommended.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, " It improves maintenance tracking, service reminders, and report accuracy. You can still continue without it. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function CarsFormComponent_Conditional_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-form-field", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("selectedFiles", function CarsFormComponent_Conditional_113_Template_app_form_field_selectedFiles_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r0.onAddPhotos($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("controlType", ctx_r0.FormControlType.File)("multiple", true);
  }
}
function CarsFormComponent_For_115_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function CarsFormComponent_For_115_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CarsFormComponent_For_115_Template_div_click_0_listener() {
      const $index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r3).$index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r0.setDefault($index_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "imageUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditionalCreate"](3, CarsFormComponent_For_115_Conditional_3_Template, 2, 0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CarsFormComponent_For_115_Template_button_click_4_listener($event) {
      const $index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r3).$index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r0.removePhoto($index_r4, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const photo_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("photo-preview--default", photo_r5.isDefault);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵattribute"]("title", photo_r5.isDefault ? "Default photo" : "Click to set as default");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 5, photo_r5.url), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditional"](photo_r5.isDefault ? 3 : -1);
  }
}
function CarsFormComponent_Conditional_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r0.photoError, " ");
  }
}
function CarsFormComponent_Conditional_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" Maximum of ", ctx_r0.MAX_PHOTOS, " photos reached. Remove a photo to add more. ");
  }
}
function CarsFormComponent_Conditional_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 69)(1, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CarsFormComponent_Conditional_118_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r0.removePanelOpen = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "ion-icon", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, " Remove from garage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function CarsFormComponent_Conditional_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-remove-car-panel", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("closed", function CarsFormComponent_Conditional_119_Template_app_remove_car_panel_closed_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r0.removePanelOpen = false);
    })("markSold", function CarsFormComponent_Conditional_119_Template_app_remove_car_panel_markSold_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r0.onMarkAsSold());
    })("deletePermanently", function CarsFormComponent_Conditional_119_Template_app_remove_car_panel_deletePermanently_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r0.onDeletePermanently());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("carName", ctx_r0.previewTitle);
  }
}
function CarsFormComponent_Conditional_123_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-spinner", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r0.isEditMode ? "Saving..." : "Adding...", " ");
  }
}
function CarsFormComponent_Conditional_124_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r0.isEditMode ? "Update vehicle" : "Save vehicle", " ");
  }
}
function CarsFormComponent_Conditional_125_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CarsFormComponent_Conditional_125_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r0.saveAndAddAnother());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-icon", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " Save & add another ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r0.isSubmitting());
  }
}
let CarsFormComponent = class CarsFormComponent {
  get additionalBadge() {
    const v = this.form.value;
    const filled = [v.variant, v.vin, v.fuel_type, v.transmission, v.engine, v.color, v.current_mileage, v.ownership_start_date].filter(Boolean).length;
    return filled > 0 ? `${filled} of 8 filled` : '8 optional fields';
  }
  get documentsBadge() {
    const v = this.form.value;
    return v.last_oil_service_date || v.last_oil_service_mileage ? 'Oil set' : 'Oil service optional';
  }
  set currentCar(currentCar) {
    if (currentCar) {
      this.patchForm(currentCar);
    }
  }
  constructor(_fb, _carFacade, _carService, _nav, _alertCtrl) {
    this._fb = _fb;
    this._carFacade = _carFacade;
    this._carService = _carService;
    this._nav = _nav;
    this._alertCtrl = _alertCtrl;
    this.InputType = _hau_shared_component_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_4__.InputType;
    this.FormControlType = _hau_shared_component_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_4__.FormControlType;
    this.MAX_YEAR = _hau_features_cars_cars_constants__WEBPACK_IMPORTED_MODULE_10__.MAX_YEAR_CAR_CREATE;
    this.MIN_YEAR = _hau_features_cars_cars_constants__WEBPACK_IMPORTED_MODULE_10__.MIN_YEAR_CAR_CREATE;
    this.MAX_PHOTOS = _hau_features_cars_cars_constants__WEBPACK_IMPORTED_MODULE_10__.MAX_PHOTOS_PER_CAR;
    this.fuelTypeOptions = _hau_features_cars_cars_constants__WEBPACK_IMPORTED_MODULE_10__.FUEL_TYPE_OPTIONS;
    this.transmissionOptions = _hau_features_cars_cars_constants__WEBPACK_IMPORTED_MODULE_10__.TRANSMISSION_OPTIONS;
    this.colorOptions = _hau_features_cars_cars_constants__WEBPACK_IMPORTED_MODULE_10__.COLOR_OPTIONS;
    this.photos = [];
    this.photoError = '';
    this.additionalExpanded = false;
    this.documentsExpanded = false;
    this.removePanelOpen = false;
    this.daysUntil = _hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_11__.daysUntil;
    this.formatDate = _hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_11__.formatDate;
    this.formatMileage = _hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_11__.formatMileage;
    (0,ionicons__WEBPACK_IMPORTED_MODULE_12__.a)({
      shieldCheckmarkOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_13__.shieldCheckmarkOutline,
      buildOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_13__.buildOutline,
      carOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_13__.carOutline,
      waterOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_13__.waterOutline,
      calendarOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_13__.calendarOutline,
      speedometerOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_13__.speedometerOutline,
      pencilOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_13__.pencilOutline,
      saveOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_13__.saveOutline,
      addCircleOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_13__.addCircleOutline,
      bulbOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_13__.bulbOutline,
      checkmarkCircleOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_13__.checkmarkCircleOutline,
      chevronDownOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_13__.chevronDownOutline,
      informationCircleOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_13__.informationCircleOutline,
      logOutOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_13__.logOutOutline
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.isSubmitting = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.toSignal)(this._carFacade.submitting$, {
      initialValue: false
    });
    this.form = this._fb.group({
      id: null,
      make: null,
      model: null,
      variant: null,
      license_plate: null,
      nickname: null,
      vin: null,
      year: null,
      fuel_type: null,
      transmission: null,
      engine: null,
      color: null,
      current_mileage: null,
      ownership_start_date: null,
      last_oil_service_date: null,
      last_oil_service_mileage: null
    });
  }
  ngOnInit() {
    this._carFacade.currentCar$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.filter)(it => !!it), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.untilDestroyed)(this)).subscribe(it => this.patchForm(it));
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
    const makeModel = [v.make, v.model].filter(Boolean).join(' ');
    if (v.nickname) return v.nickname;
    return makeModel || 'Your vehicle';
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
  onCatalogSelection(sel) {
    this.form.patchValue({
      make: sel.make,
      model: sel.model,
      year: sel.year
    });
  }
  saveCar() {
    var _this = this;
    return (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.form.invalid) {
        _this.form.markAllAsTouched();
        _this.form.markAsDirty();
        return;
      }
      const formValue = _this.form.getRawValue();
      if (!formValue.id && !formValue.current_mileage) {
        const confirmed = yield _this._confirmSaveWithoutMileage();
        if (!confirmed) return;
      }
      _this._dispatchSave(formValue);
    })();
  }
  _confirmSaveWithoutMileage() {
    var _this2 = this;
    return (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise(/*#__PURE__*/function () {
        var _ref = (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          const alert = yield _this2._alertCtrl.create({
            header: 'No mileage entered',
            message: 'Initial mileage improves maintenance tracking, service reminders, and report accuracy. Do you want to continue without it?',
            buttons: [{
              text: 'Add mileage',
              role: 'cancel',
              handler: () => resolve(false)
            }, {
              text: 'Continue without it',
              role: 'confirm',
              handler: () => resolve(true)
            }]
          });
          yield alert.present();
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  _dispatchSave(formValue) {
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
      const carObj = (0,_hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_11__.removeNullProperties)({
        ...formValue,
        files: files.length > 0 ? files : undefined,
        default_photo_id: defaultPhotoId,
        default_new_photo_index: defaultNewPhotoIndex
      });
      this._carFacade.udpateCar(carObj);
    } else {
      const carObj = (0,_hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_11__.removeNullProperties)({
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
  onMarkAsSold() {
    this.removePanelOpen = false;
    this._carFacade.markAsSold(String(this.form.value.id));
  }
  onDeletePermanently() {
    var _this3 = this;
    return (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.removePanelOpen = false;
      const v = _this3.form.value;
      const name = [v.make, v.model].filter(Boolean).join(' ') || 'această mașină';
      const alert = yield _this3._alertCtrl.create({
        header: 'Delete permanently?',
        message: `All data for <strong>${name}</strong> will be permanently deleted and cannot be recovered.`,
        buttons: [{
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Delete',
          role: 'destructive',
          handler: () => _this3._carFacade.deleteCar(String(v.id))
        }]
      });
      yield alert.present();
    })();
  }
  onAddPhotos(files) {
    this.photoError = '';
    const remaining = this.MAX_PHOTOS - this.photos.length;
    if (remaining <= 0) {
      this.photoError = `Maximum of ${this.MAX_PHOTOS} photos reached.`;
      return;
    }
    const toProcess = files.slice(0, remaining);
    if (files.length > remaining) {
      this.photoError = `Only ${toProcess.length} photo${toProcess.length !== 1 ? 's' : ''} added — maximum is ${this.MAX_PHOTOS}.`;
    }
    toProcess.forEach(file => {
      if (!file.type.match(/\/(jpg|jpeg|png|gif|webp)$/)) return;
      if (file.size > 10 * 1024 * 1024) return;
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
      return new (__ngFactoryType__ || CarsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_hau_features_cars_state_car_details_car_details_facade__WEBPACK_IMPORTED_MODULE_17__.CarDetailsFacade), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_18__.CarService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_19__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.AlertController));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
      type: CarsFormComponent,
      selectors: [["app-cars-form"]],
      inputs: {
        currentCar: "currentCar"
      },
      decls: 128,
      vars: 41,
      consts: [[1, "page-content"], [1, "page-shell"], [1, "breadcrumb"], ["type", "button", 1, "breadcrumb__link", 3, "click"], [1, "breadcrumb__sep"], [1, "breadcrumb__current"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "page-grid"], [1, "sidebar"], [1, "preview-card", "hau-card"], [1, "preview-card__top"], [1, "preview-photo-wrap"], ["alt", "Vehicle photo", 1, "preview-photo", 3, "src"], [1, "preview-photo-placeholder"], [1, "preview-info"], [1, "preview-title-row"], [1, "preview-title"], ["name", "pencil-outline", 1, "preview-edit-icon"], [1, "preview-plate"], [1, "preview-pills"], [1, "preview-meta"], [1, "quick-tips", "hau-card"], [1, "tips-header"], ["name", "bulb-outline", 1, "tips-icon"], [1, "tips-list"], ["name", "checkmark-circle-outline", 1, "tip-check"], [1, "form-area"], [3, "formGroup"], [1, "form-section"], [1, "section-title"], [3, "selectionChange", "initialMake", "initialModel", "initialYear"], [1, "form-row"], ["label", "License plate", "formControlName", "license_plate"], ["label", "Nickname (optional)", "formControlName", "nickname"], [1, "section-note"], ["name", "information-circle-outline"], [1, "form-section", "form-section--collapsible"], ["type", "button", 1, "collapsible-trigger", 3, "click"], [1, "collapsible-trigger__info"], [1, "collapsible-trigger__title"], [1, "collapsible-trigger__desc"], [1, "collapsible-trigger__aside"], [1, "collapsible-badge"], ["name", "chevron-down-outline", 1, "collapsible-chevron"], [1, "collapsible-body"], [1, "collapsible-body__inner"], [1, "collapsible-content"], ["label", "Variant / Trim", "formControlName", "variant"], ["label", "VIN", "formControlName", "vin"], ["label", "Fuel type", "formControlName", "fuel_type", 3, "controlType", "options"], ["label", "Transmission", "formControlName", "transmission", 3, "controlType", "options"], ["label", "Engine", "formControlName", "engine"], ["label", "Color", "formControlName", "color", 3, "controlType", "options"], [1, "mileage-field-wrap"], ["label", "Initial mileage (km)", "formControlName", "current_mileage", 3, "inputType"], [1, "mileage-hint"], ["label", "Ownership start date", "formControlName", "ownership_start_date", 3, "controlType"], ["label", "Last oil service date", "formControlName", "last_oil_service_date", 3, "controlType"], ["label", "Last oil service mileage", "formControlName", "last_oil_service_mileage", 3, "inputType"], [1, "photos-header"], [1, "photos-counter"], [1, "section-subtitle"], [1, "photos-grid"], ["label", "Upload photos", 3, "controlType", "multiple"], [1, "photo-preview", 3, "photo-preview--default"], [1, "photos-error"], [1, "photos-error", "photos-error--limit"], [1, "remove-row"], [3, "carName"], [1, "action-bar"], [1, "action-bar__inner"], [1, "btn-save", 3, "click", "disabled"], ["type", "button", 1, "btn-add-another", 3, "disabled"], ["type", "button", 1, "btn-cancel", 3, "click", "disabled"], ["name", "car-outline"], [1, "preview-meta-row"], ["name", "water-outline", 1, "meta-icon"], [1, "meta-label"], [1, "meta-value"], ["name", "calendar-outline", 1, "meta-icon"], ["name", "speedometer-outline", 1, "meta-icon"], ["label", "Upload photos", 3, "selectedFiles", "controlType", "multiple"], [1, "photo-preview", 3, "click"], ["alt", "Vehicle photo", 3, "src"], [1, "default-badge"], ["type", "button", 1, "remove-photo", 3, "click"], ["type", "button", 1, "btn-remove-garage", 3, "click"], ["name", "log-out-outline"], [3, "closed", "markSold", "deletePermanently", "carName"], ["name", "crescent", "slot", "start"], ["slot", "start", "name", "save-outline"], ["type", "button", 1, "btn-add-another", 3, "click", "disabled"], ["name", "add-circle-outline"]],
      template: function CarsFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-content", 0)(1, "div", 1)(2, "nav", 2)(3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CarsFormComponent_Template_button_click_3_listener() {
            return ctx.cancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Garage");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "/");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div", 6)(10, "h1", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 9)(15, "aside", 10)(16, "div", 11)(17, "div", 12)(18, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditionalCreate"](19, CarsFormComponent_Conditional_19_Template, 2, 3, "img", 14)(20, CarsFormComponent_Conditional_20_Template, 2, 0, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "div", 16)(22, "div", 17)(23, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](25, "ion-icon", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditionalCreate"](26, CarsFormComponent_Conditional_26_Template, 2, 1, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](27, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditionalCreate"](28, CarsFormComponent_Conditional_28_Template, 4, 3, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "div", 23)(30, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](31, "ion-icon", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33, "Quick tips");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "ul", 26)(35, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](36, "ion-icon", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](37, " Only the core details are needed to save \u2014 expand the sections for more options. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](39, "ion-icon", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](40, " VIN helps us provide accurate maintenance reminders. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](41, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](42, "ion-icon", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](43, " Keep your documents up to date to avoid penalties. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](44, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](45, "ion-icon", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](46, " You can update any information later from the vehicle details. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "div", 28)(48, "form", 29)(49, "div", 30)(50, "h3", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](51, "Vehicle details");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](52, "app-vehicle-catalog-select", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("selectionChange", function CarsFormComponent_Template_app_vehicle_catalog_select_selectionChange_52_listener($event) {
            return ctx.onCatalogSelection($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](54, "app-form-field", 34)(55, "app-form-field", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](56, "p", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](57, "ion-icon", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](58, " These are the core details. Everything else can be added later. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](59, "div", 38)(60, "button", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CarsFormComponent_Template_button_click_60_listener() {
            return ctx.additionalExpanded = !ctx.additionalExpanded;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](61, "div", 40)(62, "span", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](63, "Additional vehicle info");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](64, "span", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](65, "Optional details for maintenance, history and reports");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](66, "div", 43)(67, "span", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](68);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](69, "ion-icon", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](70, "div", 46)(71, "div", 47)(72, "div", 48)(73, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](74, "app-form-field", 49)(75, "app-form-field", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](76, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](77, "app-form-field", 51)(78, "app-form-field", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](79, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](80, "app-form-field", 53)(81, "app-form-field", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](82, "div", 33)(83, "div", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](84, "app-form-field", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditionalCreate"](85, CarsFormComponent_Conditional_85_Template, 6, 0, "p", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](86, "app-form-field", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](87, "div", 38)(88, "button", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CarsFormComponent_Template_button_click_88_listener() {
            return ctx.documentsExpanded = !ctx.documentsExpanded;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](89, "div", 40)(90, "span", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](91, "Documents & deadlines");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](92, "span", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](93, "Oil service tracking \u2014 documents are managed in the Documents section");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](94, "div", 43)(95, "span", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](96);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](97, "ion-icon", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](98, "div", 46)(99, "div", 47)(100, "div", 48)(101, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](102, "app-form-field", 59)(103, "app-form-field", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](104, "div", 30)(105, "div", 61)(106, "h3", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](107, "Photos");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](108, "span", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](109);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](110, "p", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](111, "Add photos of your vehicle. Click a photo to set it as default. You can upload more later.");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](112, "div", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditionalCreate"](113, CarsFormComponent_Conditional_113_Template, 1, 2, "app-form-field", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrepeaterCreate"](114, CarsFormComponent_For_115_Template, 6, 7, "div", 66, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrepeaterTrackByIndex"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditionalCreate"](116, CarsFormComponent_Conditional_116_Template, 3, 1, "p", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditionalCreate"](117, CarsFormComponent_Conditional_117_Template, 3, 1, "p", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditionalCreate"](118, CarsFormComponent_Conditional_118_Template, 4, 0, "div", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditionalCreate"](119, CarsFormComponent_Conditional_119_Template, 1, 1, "app-remove-car-panel", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](120, "div", 71)(121, "div", 72)(122, "ion-button", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CarsFormComponent_Template_ion_button_click_122_listener() {
            return ctx.saveCar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditionalCreate"](123, CarsFormComponent_Conditional_123_Template, 2, 1)(124, CarsFormComponent_Conditional_124_Template, 2, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditionalCreate"](125, CarsFormComponent_Conditional_125_Template, 3, 1, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](126, "button", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CarsFormComponent_Template_button_click_126_listener() {
            return ctx.cancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](127, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.isEditMode ? "Edit vehicle" : "Add vehicle");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.isEditMode ? "Edit vehicle" : "Add vehicle");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.isEditMode ? "Update your vehicle details" : "Add a new car to your garage");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditional"](ctx.previewPhoto ? 19 : 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.previewTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditional"](ctx.previewPlate ? 26 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditional"](ctx.form.value.last_oil_service_date || ctx.form.value.last_oil_service_mileage || ctx.form.value.ownership_start_date || ctx.form.value.current_mileage ? 28 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("initialMake", ctx.form.value.make)("initialModel", ctx.form.value.model)("initialYear", ctx.form.value.year);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("is-open", ctx.additionalExpanded);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.additionalBadge);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("controlType", ctx.FormControlType.Dropdown)("options", ctx.fuelTypeOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("controlType", ctx.FormControlType.Dropdown)("options", ctx.transmissionOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("controlType", ctx.FormControlType.Dropdown)("options", ctx.colorOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputType", ctx.InputType.Number);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditional"](!ctx.form.value.current_mileage ? 85 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("controlType", ctx.FormControlType.DatePicker);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("is-open", ctx.documentsExpanded);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.documentsBadge);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("controlType", ctx.FormControlType.DatePicker);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("inputType", ctx.InputType.Number);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("photos-counter--full", ctx.photos.length >= ctx.MAX_PHOTOS);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", ctx.photos.length, " / ", ctx.MAX_PHOTOS, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditional"](ctx.photos.length < ctx.MAX_PHOTOS ? 113 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrepeater"](ctx.photos);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditional"](ctx.photoError ? 116 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditional"](ctx.photos.length >= ctx.MAX_PHOTOS ? 117 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditional"](ctx.isEditMode ? 118 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditional"](ctx.removePanelOpen ? 119 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx.isSubmitting());
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditional"](ctx.isSubmitting() ? 123 : 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditional"](!ctx.isEditMode ? 125 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx.isSubmitting());
        }
      },
      dependencies: [_hau_shared_component_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_4__.FormFieldComponent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonButton, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonSpinner, _hau_shared_component_vehicle_catalog_select_vehicle_catalog_select_component__WEBPACK_IMPORTED_MODULE_8__.VehicleCatalogSelectComponent, _hau_features_cars_remove_car_panel_remove_car_panel_component__WEBPACK_IMPORTED_MODULE_9__.RemoveCarPanelComponent, _hau_shared_pipes_image_url_pipe__WEBPACK_IMPORTED_MODULE_14__.ImageUrlPipe],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.page-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n}\n\n.page-shell[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px 16px 40px;\n}\n@media (min-width: 768px) {\n  .page-shell[_ngcontent-%COMP%] {\n    padding: 28px 24px 48px;\n  }\n}\n@media (min-width: 1024px) {\n  .page-shell[_ngcontent-%COMP%] {\n    padding: 32px 40px 56px;\n  }\n}\n\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 12px;\n  font-size: 0.84rem;\n}\n\n.breadcrumb__link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  color: var(--hau-primary);\n  cursor: pointer;\n  font-size: inherit;\n  font-weight: 500;\n}\n.breadcrumb__link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.breadcrumb__sep[_ngcontent-%COMP%] {\n  color: var(--hau-text-dim);\n}\n\n.breadcrumb__current[_ngcontent-%COMP%] {\n  color: var(--hau-text-muted);\n}\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--hau-text);\n  margin: 0 0 4px;\n}\n@media (min-width: 768px) {\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.9rem;\n  }\n}\n\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--hau-text-muted);\n  margin: 0;\n}\n\n.page-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n@media (min-width: 1024px) {\n  .page-grid[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: flex-start;\n    gap: 32px;\n  }\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  order: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n@media (min-width: 1024px) {\n  .sidebar[_ngcontent-%COMP%] {\n    order: 2;\n    width: 340px;\n    flex-shrink: 0;\n    position: sticky;\n    top: 20px;\n  }\n}\n\n.form-area[_ngcontent-%COMP%] {\n  order: 2;\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width: 1024px) {\n  .form-area[_ngcontent-%COMP%] {\n    order: 1;\n  }\n}\n.form-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.form-section[_ngcontent-%COMP%] {\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-lg);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  box-shadow: var(--hau-shadow-soft);\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0 0 2px;\n  color: var(--hau-text);\n}\n\n.section-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--hau-text-muted);\n  margin: -8px 0 0;\n}\n\n.photos-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 2px;\n}\n\n.photos-counter[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: var(--hau-surface-alt, rgba(0, 0, 0, 0.06));\n  color: var(--hau-text-muted);\n}\n.photos-counter--full[_ngcontent-%COMP%] {\n  background: var(--ion-color-warning-tint, #fff3cd);\n  color: var(--ion-color-warning-shade, #856404);\n}\n\n.photos-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  font-size: 0.8rem;\n  color: var(--ion-color-warning-shade, #856404);\n  background: var(--ion-color-warning-tint, #fff3cd);\n  border-radius: 8px;\n  padding: 8px 12px;\n  margin: 4px 0 0;\n}\n.photos-error[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.photos-error--limit[_ngcontent-%COMP%] {\n  color: var(--hau-text-muted);\n  background: var(--hau-surface-alt, rgba(0, 0, 0, 0.04));\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-row--3[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 600px) {\n  .form-row--3[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.mileage-field-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.mileage-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  font-size: 0.8rem;\n  color: var(--hau-text-muted);\n  margin: 0;\n  line-height: 1.45;\n}\n.mileage-hint[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--hau-primary);\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.mileage-hint[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--hau-text-secondary, var(--hau-text-muted));\n}\n\n.section-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.82rem;\n  color: var(--hau-text-muted);\n  margin: -4px 0 0;\n}\n.section-note[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--hau-primary);\n  flex-shrink: 0;\n}\n\n.form-section--collapsible[_ngcontent-%COMP%] {\n  padding: 0;\n  gap: 0;\n  overflow: hidden;\n}\n\n.collapsible-trigger[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 18px 20px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  transition: background var(--hau-transition-fast);\n}\n.collapsible-trigger[_ngcontent-%COMP%]:hover {\n  background: var(--hau-hover-bg);\n}\n\n.collapsible-trigger__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n\n.collapsible-trigger__title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--hau-text);\n}\n\n.collapsible-trigger__desc[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--hau-text-muted);\n}\n\n.collapsible-trigger__aside[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n\n.collapsible-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: var(--hau-text-dim);\n  white-space: nowrap;\n}\n\n.collapsible-chevron[_ngcontent-%COMP%] {\n  color: var(--hau-text-dim);\n  font-size: 1.1rem;\n  flex-shrink: 0;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.form-section--collapsible.is-open[_ngcontent-%COMP%]   .collapsible-chevron[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.collapsible-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: 0fr;\n  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.form-section--collapsible.is-open[_ngcontent-%COMP%]   .collapsible-body[_ngcontent-%COMP%] {\n  grid-template-rows: 1fr;\n}\n\n.collapsible-body__inner[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.collapsible-content[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--hau-border);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.photos-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: flex-start;\n}\n\n.photo-preview[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90px;\n  height: 90px;\n  border-radius: var(--hau-radius-sm);\n  overflow: hidden;\n  border: 2px solid var(--hau-border);\n  cursor: pointer;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.photo-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.photo-preview[_ngcontent-%COMP%]:hover {\n  border-color: color-mix(in srgb, var(--hau-primary) 50%, var(--hau-border));\n}\n.photo-preview--default[_ngcontent-%COMP%] {\n  border-color: var(--hau-primary);\n  box-shadow: 0 0 0 2px color-mix(in srgb, var(--hau-primary) 30%, transparent);\n  animation: _ngcontent-%COMP%_default-border-pulse 2s ease-in-out infinite;\n}\n.photo-preview[_ngcontent-%COMP%]   .remove-photo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.55);\n  color: white;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  z-index: 2;\n}\n.photo-preview[_ngcontent-%COMP%]   .remove-photo[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.8);\n}\n.photo-preview[_ngcontent-%COMP%]   .default-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: color-mix(in srgb, var(--hau-primary) 85%, transparent);\n  color: #fff;\n  font-size: 0.6rem;\n  font-weight: 600;\n  text-align: center;\n  padding: 2px 0;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  pointer-events: none;\n}\n\n@keyframes _ngcontent-%COMP%_default-border-pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 2px color-mix(in srgb, var(--hau-primary) 30%, transparent);\n  }\n  50% {\n    box-shadow: 0 0 0 4px color-mix(in srgb, var(--hau-primary) 15%, transparent);\n  }\n}\n.preview-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n}\n\n.preview-card__top[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n}\n@media (min-width: 1024px) {\n  .preview-card__top[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.preview-photo-wrap[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 110px;\n  flex-shrink: 0;\n  overflow: hidden;\n  background: var(--hau-bg-soft);\n}\n@media (min-width: 1024px) {\n  .preview-photo-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    aspect-ratio: 16/9;\n  }\n}\n\n.preview-photo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.preview-photo-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--hau-text-dim);\n  font-size: 2.5rem;\n}\n@media (min-width: 1024px) {\n  .preview-photo-placeholder[_ngcontent-%COMP%] {\n    font-size: 4rem;\n  }\n}\n\n.preview-info[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 0;\n}\n@media (min-width: 1024px) {\n  .preview-info[_ngcontent-%COMP%] {\n    padding: 14px 16px 12px;\n  }\n}\n\n.preview-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.preview-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--hau-text);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.preview-edit-icon[_ngcontent-%COMP%] {\n  color: var(--hau-text-dim);\n  font-size: 0.9rem;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n\n.preview-plate[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  background: var(--hau-bg-soft);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-sm);\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--hau-text);\n  letter-spacing: 0.06em;\n  align-self: flex-start;\n}\n\n.preview-pills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.doc-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 8px;\n  border-radius: var(--hau-radius-sm);\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.doc-pill[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.doc-pill--rca[_ngcontent-%COMP%] {\n  background: var(--hau-primary-soft);\n  color: var(--hau-primary);\n}\n.doc-pill--itp[_ngcontent-%COMP%] {\n  background: var(--hau-warning-soft);\n  color: var(--hau-warning-fg);\n}\n.doc-pill--rov[_ngcontent-%COMP%] {\n  background: var(--hau-success-soft);\n  color: var(--hau-success-fg);\n}\n\n.preview-meta[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--hau-border);\n  padding: 12px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.preview-meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.82rem;\n}\n\n.meta-icon[_ngcontent-%COMP%] {\n  color: var(--hau-text-dim);\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n\n.meta-label[_ngcontent-%COMP%] {\n  color: var(--hau-text-muted);\n  flex-shrink: 0;\n}\n\n.meta-value[_ngcontent-%COMP%] {\n  color: var(--hau-text);\n  font-weight: 500;\n  margin-left: auto;\n  text-align: right;\n}\n\n.quick-tips[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.tips-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--hau-text);\n  margin-bottom: 12px;\n}\n\n.tips-icon[_ngcontent-%COMP%] {\n  color: var(--hau-warning-fg);\n  font-size: 1.1rem;\n}\n\n.tips-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.tips-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  font-size: 0.82rem;\n  color: var(--hau-text-muted);\n  line-height: 1.4;\n}\n\n.tip-check[_ngcontent-%COMP%] {\n  color: var(--hau-success-fg);\n  font-size: 1rem;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n\n.action-bar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  background: var(--hau-surface);\n  border-top: 1px solid var(--hau-border);\n  padding: 12px 16px;\n  box-shadow: 0 -4px 12px rgba(15, 23, 42, 0.07);\n}\n\n.action-bar__inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n@media (max-width: 639px) {\n  .action-bar__inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 8px;\n  }\n}\n\n.btn-save[_ngcontent-%COMP%] {\n  --border-radius: 9999px;\n  --box-shadow: 0 4px 18px rgba(37, 99, 235, 0.26);\n  font-weight: 700;\n  height: 46px;\n  min-width: 160px;\n}\n@media (max-width: 639px) {\n  .btn-save[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.btn-add-another[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  background: transparent;\n  color: var(--hau-primary);\n  border: 1.5px solid var(--hau-primary);\n  border-radius: 9999px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background var(--hau-transition-fast);\n}\n.btn-add-another[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.btn-add-another[_ngcontent-%COMP%]:hover {\n  background: var(--hau-primary-soft);\n}\n@media (max-width: 639px) {\n  .btn-add-another[_ngcontent-%COMP%] {\n    justify-content: center;\n    width: 100%;\n  }\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: var(--hau-text-muted);\n  font-size: 0.88rem;\n  font-weight: 500;\n  cursor: pointer;\n  padding: 10px 14px;\n  border-radius: 9999px;\n  transition: color var(--hau-transition-fast), background var(--hau-transition-fast);\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  color: var(--hau-text);\n  background: var(--hau-hover-bg);\n}\n@media (max-width: 639px) {\n  .btn-cancel[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 100%;\n  }\n}\n\n.remove-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  padding-top: 8px;\n}\n\n.btn-remove-garage[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  background: none;\n  border: none;\n  border-radius: var(--hau-radius-sm);\n  font-size: 0.82rem;\n  font-weight: 500;\n  color: var(--hau-text-dim);\n  cursor: pointer;\n  transition: color 0.15s, background 0.15s;\n}\n.btn-remove-garage[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.btn-remove-garage[_ngcontent-%COMP%]:hover {\n  color: var(--hau-danger, #ef4444);\n  background: rgba(239, 68, 68, 0.06);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2Fycy9jb21wb25lbnQvY2Fycy1mb3JtL2NhcnMtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQURGO0FBR0U7RUFMRjtJQUsrQix1QkFBQTtFQUM3QjtBQUNGO0FBREU7RUFORjtJQU0rQix1QkFBQTtFQUs3QjtBQUNGOztBQURBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFEQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSUY7QUFGRTtFQUFVLDBCQUFBO0FBS1o7O0FBRkE7RUFBbUIsMEJBQUE7QUFNbkI7O0FBTEE7RUFBdUIsNEJBQUE7QUFTdkI7O0FBTEE7RUFBZSxtQkFBQTtBQVNmOztBQVBBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQVVGO0FBUkU7RUFORjtJQU04QixpQkFBQTtFQVk1QjtBQUNGOztBQVZBO0VBQ0UsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLFNBQUE7QUFhRjs7QUFSQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFXRjtBQVRFO0VBTEY7SUFNSSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsU0FBQTtFQVlGO0FBQ0Y7O0FBUEE7RUFDRSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQVVGO0FBUkU7RUFORjtJQU9JLFFBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsU0FBQTtFQVdGO0FBQ0Y7O0FBTkE7RUFDRSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFTRjtBQVBFO0VBUEY7SUFPK0IsUUFBQTtFQVc3QjtBQUNGO0FBVkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBWUo7O0FBTkE7RUFDRSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0FBU0Y7O0FBTkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFTRjs7QUFOQTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQVNGOztBQU5BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBU0Y7O0FBTkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVEQUFBO0VBQ0EsNEJBQUE7QUFTRjtBQVBFO0VBQ0Usa0RBQUE7RUFDQSw4Q0FBQTtBQVNKOztBQUxBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsOENBQUE7RUFDQSxrREFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBUUY7QUFORTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVFKO0FBTEU7RUFDRSw0QkFBQTtFQUNBLHVEQUFBO0FBT0o7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBTUY7QUFKRTtFQUNFLHFDQUFBO0FBTUo7QUFKSTtFQUhGO0lBRzhCLDBCQUFBO0VBUTlCO0FBQ0Y7QUFORTtFQVhGO0lBVzhCLDBCQUFBO0VBVTVCO0FBQ0Y7O0FBTkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBU0Y7O0FBTkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQVNGO0FBUEU7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVNKO0FBTkU7RUFDRSx1REFBQTtBQVFKOztBQUZBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQUtGO0FBSEU7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBS0o7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpREFBQTtBQUVGO0FBQUU7RUFBVSwrQkFBQTtBQUdaOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFHRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBR0Y7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0FBR0Y7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtBQUdGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFBQTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsdURBQUE7QUFHRjs7QUFBQTtFQUNFLHlCQUFBO0FBR0Y7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnRUFBQTtBQUdGOztBQUFBO0VBQ0UsdUJBQUE7QUFHRjs7QUFBQTtFQUNFLGdCQUFBO0FBR0Y7O0FBQUE7RUFDRSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBR0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSx3REFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNKO0FBRUU7RUFDRSwyRUFBQTtBQUFKO0FBR0U7RUFDRSxnQ0FBQTtFQUNBLDZFQUFBO0VBQ0EsdURBQUE7QUFESjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBRko7QUFJSTtFQUFVLDhCQUFBO0FBRGQ7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsbUVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQUZKOztBQU1BO0VBQ0U7SUFBVyw2RUFBQTtFQUZYO0VBR0E7SUFBWSw2RUFBQTtFQUFaO0FBQ0Y7QUFJQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLE1BQUE7QUFGRjtBQUlFO0VBSkY7SUFJK0Isc0JBQUE7RUFBN0I7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFDRjtBQUNFO0VBUEY7SUFRSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VBRUY7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FBRUY7QUFBRTtFQVRGO0lBUytCLGVBQUE7RUFJN0I7QUFDRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBS0Y7QUFIRTtFQVJGO0lBUStCLHVCQUFBO0VBTzdCO0FBQ0Y7O0FBTEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBUUY7O0FBTEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVFGOztBQUxBO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBUUY7O0FBTEE7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQVFGOztBQUxBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0FBUUY7O0FBTEE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBUUY7QUFORTtFQUFXLGlCQUFBO0FBU2I7QUFQRTtFQUNFLG1DQUFBO0VBQ0EseUJBQUE7QUFTSjtBQU5FO0VBQ0UsbUNBQUE7RUFDQSw0QkFBQTtBQVFKO0FBTEU7RUFDRSxtQ0FBQTtFQUNBLDRCQUFBO0FBT0o7O0FBSEE7RUFDRSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQU1GOztBQUhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FBTUY7O0FBSEE7RUFDRSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBTUY7O0FBSEE7RUFDRSw0QkFBQTtFQUNBLGNBQUE7QUFNRjs7QUFIQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBTUY7O0FBREE7RUFDRSxhQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFEQTtFQUNFLDRCQUFBO0VBQ0EsaUJBQUE7QUFJRjs7QUFEQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBSUY7QUFGRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFBQTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFDRjtBQUNFO0VBUEY7SUFRSSxzQkFBQTtJQUNBLG9CQUFBO0lBQ0EsUUFBQTtFQUVGO0FBQ0Y7O0FBQ0E7RUFDRSx1QkFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFFRjtBQUFFO0VBUEY7SUFPOEIsV0FBQTtFQUk1QjtBQUNGOztBQUZBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpREFBQTtBQUtGO0FBSEU7RUFBVyxlQUFBO0FBTWI7QUFKRTtFQUFVLG1DQUFBO0FBT1o7QUFMRTtFQWxCRjtJQW1CSSx1QkFBQTtJQUNBLFdBQUE7RUFRRjtBQUNGOztBQUxBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtRkFBQTtBQVFGO0FBTkU7RUFDRSxzQkFBQTtFQUNBLCtCQUFBO0FBUUo7QUFMRTtFQWhCRjtJQWlCSSxrQkFBQTtJQUNBLFdBQUE7RUFRRjtBQUNGOztBQUZBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUFLRjs7QUFGQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtBQUtGO0FBSEU7RUFBVyxrQkFBQTtBQU1iO0FBSkU7RUFDRSxpQ0FBQTtFQUNBLG1DQUFBO0FBTUoiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnBhZ2UtY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIG1pbi1oZWlnaHQ6IDA7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBQYWdlIHNoZWxsIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuXG4ucGFnZS1zaGVsbCB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweCAxNnB4IDQwcHg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSAgeyBwYWRkaW5nOiAyOHB4IDI0cHggNDhweDsgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7IHBhZGRpbmc6IDMycHggNDBweCA1NnB4OyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBCcmVhZGNydW1iIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuXG4uYnJlYWRjcnVtYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBmb250LXNpemU6IDAuODRyZW07XG59XG5cbi5icmVhZGNydW1iX19saW5rIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogdmFyKC0taGF1LXByaW1hcnkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAmOmhvdmVyIHsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cbn1cblxuLmJyZWFkY3J1bWJfX3NlcCB7IGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1kaW0pOyB9XG4uYnJlYWRjcnVtYl9fY3VycmVudCB7IGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7IH1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFBhZ2UgaGVhZGVyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuXG4ucGFnZS1oZWFkZXIgeyBtYXJnaW4tYm90dG9tOiAyNHB4OyB9XG5cbi5wYWdlLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dCk7XG4gIG1hcmdpbjogMCAwIDRweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgZm9udC1zaXplOiAxLjlyZW07IH1cbn1cblxuLnBhZ2Utc3VidGl0bGUge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbiAgbWFyZ2luOiAwO1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgTWFpbiBncmlkIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuXG4ucGFnZS1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMzJweDtcbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgU2lkZWJhciAocHJldmlldyArIHRpcHMpIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuXG4uc2lkZWJhciB7XG4gIG9yZGVyOiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIG9yZGVyOiAyO1xuICAgIHdpZHRoOiAzNDBweDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMjBweDtcbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgRm9ybSBhcmVhIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuXG4uZm9ybS1hcmVhIHtcbiAgb3JkZXI6IDI7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7IG9yZGVyOiAxOyB9XG5cbiAgZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTZweDtcbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgRm9ybSBzZWN0aW9ucyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcblxuLmZvcm0tc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGF1LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtbGcpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLWhhdS1zaGFkb3ctc29mdCk7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDAgMCAycHg7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dCk7XG59XG5cbi5zZWN0aW9uLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjgycmVtO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICBtYXJnaW46IC04cHggMCAwO1xufVxuXG4ucGhvdG9zLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4ucGhvdG9zLWNvdW50ZXIge1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDJweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1zdXJmYWNlLWFsdCwgcmdiYSgwLDAsMCwwLjA2KSk7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7XG5cbiAgJi0tZnVsbCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctdGludCwgI2ZmZjNjZCk7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlLCAjODU2NDA0KTtcbiAgfVxufVxuXG4ucGhvdG9zLWVycm9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogNnB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlLCAjODU2NDA0KTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctdGludCwgI2ZmZjNjZCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIG1hcmdpbjogNHB4IDAgMDtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG1hcmdpbi10b3A6IDFweDtcbiAgfVxuXG4gICYtLWxpbWl0IHtcbiAgICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWhhdS1zdXJmYWNlLWFsdCwgcmdiYSgwLDAsMCwwLjA0KSk7XG4gIH1cbn1cblxuLmZvcm0tcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDEycHg7XG5cbiAgJi0tMyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBNaWxlYWdlIGhpbnQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG5cbi5taWxlYWdlLWZpZWxkLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDZweDtcbn1cblxuLm1pbGVhZ2UtaGludCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDZweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogdmFyKC0taGF1LXByaW1hcnkpO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG1hcmdpbi10b3A6IDFweDtcbiAgfVxuXG4gIHN0cm9uZyB7XG4gICAgY29sb3I6IHZhcigtLWhhdS10ZXh0LXNlY29uZGFyeSwgdmFyKC0taGF1LXRleHQtbXV0ZWQpKTtcbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgU2VjdGlvbiBub3RlIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuXG4uc2VjdGlvbi1ub3RlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbiAgbWFyZ2luOiAtNHB4IDAgMDtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1oYXUtcHJpbWFyeSk7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIENvbGxhcHNpYmxlIHNlY3Rpb25zIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuXG4uZm9ybS1zZWN0aW9uLS1jb2xsYXBzaWJsZSB7XG4gIHBhZGRpbmc6IDA7XG4gIGdhcDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbGxhcHNpYmxlLXRyaWdnZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDE4cHggMjBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIHZhcigtLWhhdS10cmFuc2l0aW9uLWZhc3QpO1xuXG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtaG92ZXItYmcpOyB9XG59XG5cbi5jb2xsYXBzaWJsZS10cmlnZ2VyX19pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycHg7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmNvbGxhcHNpYmxlLXRyaWdnZXJfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xufVxuXG4uY29sbGFwc2libGUtdHJpZ2dlcl9fZGVzYyB7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbn1cblxuLmNvbGxhcHNpYmxlLXRyaWdnZXJfX2FzaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uY29sbGFwc2libGUtYmFkZ2Uge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1kaW0pO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY29sbGFwc2libGUtY2hldnJvbiB7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1kaW0pO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG59XG5cbi5mb3JtLXNlY3Rpb24tLWNvbGxhcHNpYmxlLmlzLW9wZW4gLmNvbGxhcHNpYmxlLWNoZXZyb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4uY29sbGFwc2libGUtYm9keSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMGZyO1xuICB0cmFuc2l0aW9uOiBncmlkLXRlbXBsYXRlLXJvd3MgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xufVxuXG4uZm9ybS1zZWN0aW9uLS1jb2xsYXBzaWJsZS5pcy1vcGVuIC5jb2xsYXBzaWJsZS1ib2R5IHtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG59XG5cbi5jb2xsYXBzaWJsZS1ib2R5X19pbm5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb2xsYXBzaWJsZS1jb250ZW50IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBQaG90b3Mgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG5cbi5waG90b3MtZ3JpZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMnB4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnBob3RvLXByZXZpZXcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtc20pO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZTtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWhhdS1wcmltYXJ5KSA1MCUsIHZhcigtLWhhdS1ib3JkZXIpKTtcbiAgfVxuXG4gICYtLWRlZmF1bHQge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taGF1LXByaW1hcnkpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0taGF1LXByaW1hcnkpIDMwJSwgdHJhbnNwYXJlbnQpO1xuICAgIGFuaW1hdGlvbjogZGVmYXVsdC1ib3JkZXItcHVsc2UgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIH1cblxuICAucmVtb3ZlLXBob3RvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0cHg7XG4gICAgcmlnaHQ6IDRweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41NSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHotaW5kZXg6IDI7XG5cbiAgICAmOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpOyB9XG4gIH1cblxuICAuZGVmYXVsdC1iYWRnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1oYXUtcHJpbWFyeSkgODUlLCB0cmFuc3BhcmVudCk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMnB4IDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZGVmYXVsdC1ib3JkZXItcHVsc2Uge1xuICAwJSwgMTAwJSB7IGJveC1zaGFkb3c6IDAgMCAwIDJweCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0taGF1LXByaW1hcnkpIDMwJSwgdHJhbnNwYXJlbnQpOyB9XG4gIDUwJSAgICAgICB7IGJveC1zaGFkb3c6IDAgMCAwIDRweCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0taGF1LXByaW1hcnkpIDE1JSwgdHJhbnNwYXJlbnQpOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBQcmV2aWV3IGNhcmQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG5cbi5wcmV2aWV3LWNhcmQge1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJldmlldy1jYXJkX190b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDA7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG59XG5cbi5wcmV2aWV3LXBob3RvLXdyYXAge1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMTEwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtYmctc29mdCk7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBhc3BlY3QtcmF0aW86IDE2IC8gOTtcbiAgfVxufVxuXG4ucHJldmlldy1waG90byB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ucHJldmlldy1waG90by1wbGFjZWhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtZGltKTtcbiAgZm9udC1zaXplOiAyLjVyZW07XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgeyBmb250LXNpemU6IDRyZW07IH1cbn1cblxuLnByZXZpZXctaW5mbyB7XG4gIHBhZGRpbmc6IDEycHggMTRweDtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG4gIG1pbi13aWR0aDogMDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7IHBhZGRpbmc6IDE0cHggMTZweCAxMnB4OyB9XG59XG5cbi5wcmV2aWV3LXRpdGxlLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xufVxuXG4ucHJldmlldy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5wcmV2aWV3LWVkaXQtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1kaW0pO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByZXZpZXctcGxhdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtYmctc29mdCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLXNtKTtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG4ucHJldmlldy1waWxscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA2cHg7XG59XG5cbi5kb2MtcGlsbCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1zbSk7XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMC44cmVtOyB9XG5cbiAgJi0tcmNhIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtcHJpbWFyeS1zb2Z0KTtcbiAgICBjb2xvcjogdmFyKC0taGF1LXByaW1hcnkpO1xuICB9XG5cbiAgJi0taXRwIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtd2FybmluZy1zb2Z0KTtcbiAgICBjb2xvcjogdmFyKC0taGF1LXdhcm5pbmctZmcpO1xuICB9XG5cbiAgJi0tcm92IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtc3VjY2Vzcy1zb2Z0KTtcbiAgICBjb2xvcjogdmFyKC0taGF1LXN1Y2Nlc3MtZmcpO1xuICB9XG59XG5cbi5wcmV2aWV3LW1ldGEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taGF1LWJvcmRlcik7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4ucHJldmlldy1tZXRhLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmb250LXNpemU6IDAuODJyZW07XG59XG5cbi5tZXRhLWljb24ge1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtZGltKTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLm1ldGEtbGFiZWwge1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLm1ldGEtdmFsdWUge1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBRdWljayB0aXBzIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuXG4ucXVpY2stdGlwcyB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi50aXBzLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0KTtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLnRpcHMtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1oYXUtd2FybmluZy1mZyk7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4udGlwcy1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcblxuICBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDhweDtcbiAgICBmb250LXNpemU6IDAuODJyZW07XG4gICAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICB9XG59XG5cbi50aXAtY2hlY2sge1xuICBjb2xvcjogdmFyKC0taGF1LXN1Y2Nlc3MtZmcpO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBBY3Rpb24gYmFyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuXG4uYWN0aW9uLWJhciB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtc3VyZmFjZSk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBib3gtc2hhZG93OiAwIC00cHggMTJweCByZ2JhKDE1LCAyMywgNDIsIDAuMDcpO1xufVxuXG4uYWN0aW9uLWJhcl9faW5uZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGdhcDogOHB4O1xuICB9XG59XG5cbi5idG4tc2F2ZSB7XG4gIC0tYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAtLWJveC1zaGFkb3c6IDAgNHB4IDE4cHggcmdiYSgzNywgOTksIDIzNSwgMC4yNik7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGhlaWdodDogNDZweDtcbiAgbWluLXdpZHRoOiAxNjBweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHsgd2lkdGg6IDEwMCU7IH1cbn1cblxuLmJ0bi1hZGQtYW5vdGhlciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgcGFkZGluZzogMTBweCAxOHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWhhdS1wcmltYXJ5KTtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1oYXUtcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgZm9udC1zaXplOiAwLjg4cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCk7XG5cbiAgaW9uLWljb24geyBmb250LXNpemU6IDFyZW07IH1cblxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0taGF1LXByaW1hcnktc29mdCk7IH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uYnRuLWNhbmNlbCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgdHJhbnNpdGlvbjogY29sb3IgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCksIGJhY2tncm91bmQgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCk7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWhhdS10ZXh0KTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtaG92ZXItYmcpO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gUmVtb3ZlIGZyb20gZ2FyYWdlIHJvd1xuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ucmVtb3ZlLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuLmJ0bi1yZW1vdmUtZ2FyYWdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLXNtKTtcbiAgZm9udC1zaXplOiAwLjgycmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtZGltKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cywgYmFja2dyb3VuZCAwLjE1cztcblxuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMC45NXJlbTsgfVxuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1oYXUtZGFuZ2VyLCAjZWY0NDQ0KTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjA2KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
};
CarsFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.UntilDestroy)()], CarsFormComponent);


/***/ },

/***/ 20472
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _hau_shared_directive_abstract_input_control_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hau/shared/directive/abstract-input-control.directive */ 1670);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/until-destroy */ 56127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 36124);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("accept", ctx_r0.acceptedFilesFormat || "image/*")("disabled", ctx_r0.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("multiple", ctx_r0.multiple || null);
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
    this.multiple = false;
    this.disabled = false;
    this.inputFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.inputBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.hasError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.selectedFile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.selectedFiles = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
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
    if (this.multiple) {
      this.selectedFiles.emit(Array.from(event.target?.files ?? []));
    } else {
      this.selectedFile.emit(event.target?.files[0]);
    }
    event.target.value = '';
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
        options: "options",
        multiple: "multiple",
        disabled: "disabled"
      },
      outputs: {
        inputFocus: "inputFocus",
        inputBlur: "inputBlur",
        hasError: "hasError",
        selectedFile: "selectedFile",
        selectedFiles: "selectedFiles"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
      decls: 4,
      vars: 1,
      consts: [["label-placement", "floating", "fill", "outline", "ngDefaultControl", "", 3, "label", "type", "max", "min", "maxlength", "formControl"], [1, "file-upload-container"], ["label-placement", "floating", "fill", "outline", "ngDefaultControl", "", 3, "label", "formControl"], ["type", "file", 2, "margin-top", "10px", 3, "change", "accept", "disabled"], ["color", "danger"], [3, "value"], ["label-placement", "floating", "fill", "outline", "type", "text", "readonly", "", "ngDefaultControl", "", 3, "id", "label", "value", "placeholder"], ["cssClass", "hau-datepicker-modal", 3, "trigger", "keepContentsMounted"], ["presentation", "date", "mode", "md", 3, "formControl", "showDefaultButtons"]],
      template: function FormFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](0, FormFieldComponent_Case_0_Template, 1, 6, "ion-input", 0)(1, FormFieldComponent_Case_1_Template, 5, 6, "div", 1)(2, FormFieldComponent_Case_2_Template, 3, 2, "ion-select", 2)(3, FormFieldComponent_Case_3_Template, 3, 6);
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

/***/ 36588
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/component/vehicle-catalog-select/vehicle-catalog-select.component.ts ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VehicleCatalogSelectComponent: () => (/* binding */ VehicleCatalogSelectComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ 56127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @hau/autogenapi/services */ 3977);








const _forTrack0 = ($index, $item) => $item.id;
function VehicleCatalogSelectComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-spinner", 6);
  }
}
function VehicleCatalogSelectComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VehicleCatalogSelectComponent_Conditional_8_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.clearMake($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function VehicleCatalogSelectComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-icon", 15);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("cs-chevron--open", ctx_r1.makeOpen);
  }
}
function VehicleCatalogSelectComponent_Conditional_10_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VehicleCatalogSelectComponent_Conditional_10_Conditional_1_For_1_Template_button_click_0_listener() {
      const make_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.selectMake(make_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const make_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("cs-option--selected", make_r4.id === ctx_r1.selectedMakeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", make_r4.name, " ");
  }
}
function VehicleCatalogSelectComponent_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](0, VehicleCatalogSelectComponent_Conditional_10_Conditional_1_For_1_Template, 2, 3, "button", 17, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx_r1.filteredMakes);
  }
}
function VehicleCatalogSelectComponent_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No makes found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function VehicleCatalogSelectComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](1, VehicleCatalogSelectComponent_Conditional_10_Conditional_1_Template, 2, 0)(2, VehicleCatalogSelectComponent_Conditional_10_Conditional_2_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r1.filteredMakes.length ? 1 : 2);
  }
}
function VehicleCatalogSelectComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-spinner", 6);
  }
}
function VehicleCatalogSelectComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VehicleCatalogSelectComponent_Conditional_17_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.clearModel($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function VehicleCatalogSelectComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-icon", 15);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("cs-chevron--open", ctx_r1.modelOpen);
  }
}
function VehicleCatalogSelectComponent_Conditional_19_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VehicleCatalogSelectComponent_Conditional_19_Conditional_1_For_1_Template_button_click_0_listener() {
      const model_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.selectModel(model_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const model_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("cs-option--selected", model_r7.id === ctx_r1.selectedModelId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", model_r7.name, " ");
  }
}
function VehicleCatalogSelectComponent_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](0, VehicleCatalogSelectComponent_Conditional_19_Conditional_1_For_1_Template, 2, 3, "button", 17, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx_r1.filteredModels);
  }
}
function VehicleCatalogSelectComponent_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No models found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function VehicleCatalogSelectComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](1, VehicleCatalogSelectComponent_Conditional_19_Conditional_1_Template, 2, 0)(2, VehicleCatalogSelectComponent_Conditional_19_Conditional_2_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r1.filteredModels.length ? 1 : 2);
  }
}
function VehicleCatalogSelectComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VehicleCatalogSelectComponent_Conditional_26_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.clearYear($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function VehicleCatalogSelectComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-icon", 15);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("cs-chevron--open", ctx_r1.yearOpen);
  }
}
function VehicleCatalogSelectComponent_Conditional_28_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VehicleCatalogSelectComponent_Conditional_28_Conditional_1_For_1_Template_button_click_0_listener() {
      const year_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.selectYear(year_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const year_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("cs-option--selected", year_r10 === ctx_r1.selectedYearValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", year_r10, " ");
  }
}
function VehicleCatalogSelectComponent_Conditional_28_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](0, VehicleCatalogSelectComponent_Conditional_28_Conditional_1_For_1_Template, 2, 3, "button", 17, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx_r1.filteredYears);
  }
}
function VehicleCatalogSelectComponent_Conditional_28_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No years found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function VehicleCatalogSelectComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](1, VehicleCatalogSelectComponent_Conditional_28_Conditional_1_Template, 2, 0)(2, VehicleCatalogSelectComponent_Conditional_28_Conditional_2_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r1.filteredYears.length ? 1 : 2);
  }
}
let VehicleCatalogSelectComponent = class VehicleCatalogSelectComponent {
  constructor(_catalog, _cdr, _el) {
    this._catalog = _catalog;
    this._cdr = _cdr;
    this._el = _el;
    this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.makes = [];
    this.models = [];
    this.years = Array.from({
      length: new Date().getFullYear() - 1885 + 1
    }, (_, i) => new Date().getFullYear() - i);
    this.selectedMakeId = null;
    this.selectedModelId = null;
    this.selectedYearValue = null;
    this.makesLoading = false;
    this.modelsLoading = false;
    this.makeSearch = '';
    this.modelSearch = '';
    this.yearSearch = '';
    this.makeOpen = false;
    this.modelOpen = false;
    this.yearOpen = false;
    this._makesLoaded = false;
  }
  get filteredMakes() {
    const q = this.makeSearch.toLowerCase();
    return q ? this.makes.filter(m => m.name.toLowerCase().includes(q)) : this.makes;
  }
  get filteredModels() {
    const q = this.modelSearch.toLowerCase();
    return q ? this.models.filter(m => m.name.toLowerCase().includes(q)) : this.models;
  }
  get filteredYears() {
    const q = this.yearSearch;
    return q ? this.years.filter(y => String(y).includes(q)) : this.years;
  }
  onDocumentClick(event) {
    if (!this._el.nativeElement.contains(event.target)) {
      if (this.makeOpen || this.modelOpen || this.yearOpen) {
        this.makeOpen = false;
        this.modelOpen = false;
        this.yearOpen = false;
        this._syncSearchTexts();
        this._cdr.markForCheck();
      }
    }
  }
  onEscape() {
    if (this.makeOpen || this.modelOpen || this.yearOpen) {
      this.makeOpen = false;
      this.modelOpen = false;
      this.yearOpen = false;
      this._syncSearchTexts();
      this._cdr.markForCheck();
    }
  }
  ngOnInit() {
    this.makesLoading = true;
    this._catalog.getMakes().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this)).subscribe(makes => {
      this.makes = makes;
      this.makesLoading = false;
      this._makesLoaded = true;
      if (this.initialMake) this._preSelectMake();
      this._cdr.markForCheck();
    });
  }
  ngOnChanges(changes) {
    if (changes['initialMake'] && this.initialMake && this._makesLoaded) {
      this._resetCascade();
      this._preSelectMake();
    }
  }
  openMakeDropdown() {
    this.makeOpen = true;
    this.modelOpen = false;
    this.yearOpen = false;
    this._cdr.markForCheck();
  }
  openModelDropdown() {
    if (!this.selectedMakeId || this.modelsLoading) return;
    this.makeOpen = false;
    this.modelOpen = true;
    this.yearOpen = false;
    this._cdr.markForCheck();
  }
  openYearDropdown() {
    this.makeOpen = false;
    this.modelOpen = false;
    this.yearOpen = true;
    this._cdr.markForCheck();
  }
  selectMake(make) {
    this.selectedMakeId = make.id;
    this.makeSearch = make.name;
    this.makeOpen = false;
    this.selectedModelId = null;
    this.selectedYearValue = null;
    this.modelSearch = '';
    this.yearSearch = '';
    this.models = [];
    this._emit();
    this.modelsLoading = true;
    this._cdr.markForCheck();
    this._catalog.getModels({
      makeId: make.id
    }).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this)).subscribe(models => {
      this.models = models;
      this.modelsLoading = false;
      this._cdr.markForCheck();
    });
  }
  selectModel(model) {
    this.selectedModelId = model.id;
    this.modelSearch = model.name;
    this.modelOpen = false;
    this._emit();
    this._cdr.markForCheck();
  }
  selectYear(year) {
    this.selectedYearValue = year;
    this.yearSearch = String(year);
    this.yearOpen = false;
    this._emit();
    this._cdr.markForCheck();
  }
  clearMake(event) {
    event.stopPropagation();
    this._resetCascade();
    this.makeSearch = '';
    this._emit();
    this._cdr.markForCheck();
  }
  clearModel(event) {
    event.stopPropagation();
    this.selectedModelId = null;
    this.modelSearch = '';
    this._emit();
    this._cdr.markForCheck();
  }
  clearYear(event) {
    event.stopPropagation();
    this.selectedYearValue = null;
    this.yearSearch = '';
    this._emit();
    this._cdr.markForCheck();
  }
  onMakeInput() {
    this.makeOpen = true;
    if (!this.makeSearch) {
      this.selectedMakeId = null;
      this._resetCascade();
      this._emit();
    }
    this._cdr.markForCheck();
  }
  onModelInput() {
    this.modelOpen = true;
    if (!this.modelSearch) {
      this.selectedModelId = null;
      this._emit();
    }
    this._cdr.markForCheck();
  }
  onYearInput() {
    this.yearOpen = true;
    if (!this.yearSearch) {
      this.selectedYearValue = null;
      this._emit();
    }
    this._cdr.markForCheck();
  }
  _syncSearchTexts() {
    const make = this.makes.find(m => m.id === this.selectedMakeId);
    const model = this.models.find(m => m.id === this.selectedModelId);
    this.makeSearch = make?.name ?? '';
    this.modelSearch = model?.name ?? '';
    this.yearSearch = this.selectedYearValue != null ? String(this.selectedYearValue) : '';
  }
  _preSelectMake() {
    const make = this.makes.find(m => m.name.toLowerCase() === this.initialMake?.toLowerCase());
    if (!make) return;
    this.selectedMakeId = make.id;
    this.makeSearch = make.name;
    if (this.initialYear != null) {
      this.selectedYearValue = this.initialYear;
      this.yearSearch = String(this.initialYear);
    }
    this.modelsLoading = true;
    this._cdr.markForCheck();
    this._catalog.getModels({
      makeId: make.id
    }).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this)).subscribe(models => {
      this.models = models;
      this.modelsLoading = false;
      const model = models.find(m => m.name.toLowerCase() === this.initialModel?.toLowerCase());
      if (model) {
        this.selectedModelId = model.id;
        this.modelSearch = model.name;
      }
      this._cdr.markForCheck();
    });
  }
  _resetCascade() {
    this.selectedMakeId = null;
    this.selectedModelId = null;
    this.models = [];
    this.modelSearch = '';
  }
  _emit() {
    const make = this.makes.find(m => m.id === this.selectedMakeId);
    const model = this.models.find(m => m.id === this.selectedModelId);
    this.selectionChange.emit({
      make: make?.name ?? null,
      model: model?.name ?? null,
      year: this.selectedYearValue
    });
  }
  static {
    this.ɵfac = function VehicleCatalogSelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VehicleCatalogSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_7__.VehicleCatalogService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: VehicleCatalogSelectComponent,
      selectors: [["app-vehicle-catalog-select"]],
      hostBindings: function VehicleCatalogSelectComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VehicleCatalogSelectComponent_click_HostBindingHandler($event) {
            return ctx.onDocumentClick($event);
          }, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveDocument"])("keydown.escape", function VehicleCatalogSelectComponent_keydown_escape_HostBindingHandler() {
            return ctx.onEscape();
          }, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveDocument"]);
        }
      },
      inputs: {
        initialMake: "initialMake",
        initialModel: "initialModel",
        initialYear: "initialYear"
      },
      outputs: {
        selectionChange: "selectionChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
      decls: 29,
      vars: 28,
      consts: [[1, "catalog-fields"], [1, "catalog-row"], [1, "cs-wrap"], [1, "cs-label"], [1, "cs-field"], ["type", "text", "autocomplete", "off", "spellcheck", "false", 1, "cs-input", 3, "ngModelChange", "input", "focus", "ngModel", "disabled"], ["name", "crescent", 1, "cs-spinner"], ["type", "button", 1, "cs-clear"], ["name", "chevron-down-outline", 1, "cs-chevron", 3, "cs-chevron--open"], [1, "cs-dropdown"], ["type", "text", "autocomplete", "off", "spellcheck", "false", 1, "cs-input", 3, "ngModelChange", "input", "focus", "ngModel", "disabled", "placeholder"], [1, "catalog-year-row"], ["type", "text", "autocomplete", "off", "spellcheck", "false", 1, "cs-input", 3, "ngModelChange", "input", "focus", "ngModel"], ["type", "button", 1, "cs-clear", 3, "click"], ["name", "close-outline"], ["name", "chevron-down-outline", 1, "cs-chevron"], [1, "cs-no-results"], ["type", "button", 1, "cs-option", 3, "cs-option--selected"], ["type", "button", 1, "cs-option", 3, "click"]],
      template: function VehicleCatalogSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Make *");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function VehicleCatalogSelectComponent_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.makeSearch, $event) || (ctx.makeSearch = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function VehicleCatalogSelectComponent_Template_input_input_6_listener() {
            return ctx.onMakeInput();
          })("focus", function VehicleCatalogSelectComponent_Template_input_focus_6_listener() {
            return ctx.openMakeDropdown();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](7, VehicleCatalogSelectComponent_Conditional_7_Template, 1, 0, "ion-spinner", 6)(8, VehicleCatalogSelectComponent_Conditional_8_Template, 2, 0, "button", 7)(9, VehicleCatalogSelectComponent_Conditional_9_Template, 1, 2, "ion-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](10, VehicleCatalogSelectComponent_Conditional_10_Template, 3, 1, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 2)(12, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Model *");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 4)(15, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function VehicleCatalogSelectComponent_Template_input_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.modelSearch, $event) || (ctx.modelSearch = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function VehicleCatalogSelectComponent_Template_input_input_15_listener() {
            return ctx.onModelInput();
          })("focus", function VehicleCatalogSelectComponent_Template_input_focus_15_listener() {
            return ctx.openModelDropdown();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](16, VehicleCatalogSelectComponent_Conditional_16_Template, 1, 0, "ion-spinner", 6)(17, VehicleCatalogSelectComponent_Conditional_17_Template, 2, 0, "button", 7)(18, VehicleCatalogSelectComponent_Conditional_18_Template, 1, 2, "ion-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](19, VehicleCatalogSelectComponent_Conditional_19_Template, 3, 1, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 11)(21, "div", 2)(22, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Year *");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 4)(25, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function VehicleCatalogSelectComponent_Template_input_ngModelChange_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.yearSearch, $event) || (ctx.yearSearch = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function VehicleCatalogSelectComponent_Template_input_input_25_listener() {
            return ctx.onYearInput();
          })("focus", function VehicleCatalogSelectComponent_Template_input_focus_25_listener() {
            return ctx.openYearDropdown();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](26, VehicleCatalogSelectComponent_Conditional_26_Template, 2, 0, "button", 7)(27, VehicleCatalogSelectComponent_Conditional_27_Template, 1, 2, "ion-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](28, VehicleCatalogSelectComponent_Conditional_28_Template, 3, 1, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("cs-wrap--open", ctx.makeOpen)("cs-wrap--disabled", ctx.makesLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("cs-label--up", ctx.makeSearch || ctx.makeOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.makeSearch);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.makesLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.makesLoading ? 7 : ctx.selectedMakeId ? 8 : 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.makeOpen ? 10 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("cs-wrap--open", ctx.modelOpen)("cs-wrap--disabled", !ctx.selectedMakeId || ctx.modelsLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("cs-label--up", ctx.modelSearch || ctx.modelOpen || !ctx.selectedMakeId);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.modelSearch);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.selectedMakeId || ctx.modelsLoading)("placeholder", !ctx.selectedMakeId ? "Select make first" : ctx.modelsLoading ? "Loading\u2026" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.modelsLoading ? 16 : ctx.selectedModelId ? 17 : 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.modelOpen ? 19 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("cs-wrap--open", ctx.yearOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("cs-label--up", ctx.yearSearch || ctx.yearOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.yearSearch);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.selectedYearValue ? 26 : 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.yearOpen ? 28 : -1);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonSpinner],
      styles: [".catalog-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.catalog-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n@media (max-width: 480px) {\n  .catalog-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.catalog-year-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.catalog-year-row[_ngcontent-%COMP%]   .cs-wrap[_ngcontent-%COMP%] {\n  grid-column: 1;\n}\n@media (max-width: 480px) {\n  .catalog-year-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .catalog-year-row[_ngcontent-%COMP%]   .cs-wrap[_ngcontent-%COMP%] {\n    grid-column: unset;\n  }\n}\n\n.cs-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.cs-wrap--disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n.cs-label[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 11px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 1rem;\n  color: var(--hau-text-dim);\n  pointer-events: none;\n  transition: top 0.15s ease, font-size 0.15s ease, color 0.15s ease;\n  background: var(--hau-surface);\n  padding: 0 3px;\n  z-index: 1;\n  white-space: nowrap;\n  line-height: 1;\n}\n.cs-label--up[_ngcontent-%COMP%] {\n  top: 0;\n  font-size: 0.75rem;\n  color: var(--hau-text-muted);\n}\n\n.cs-wrap--open[_ngcontent-%COMP%]:not(.cs-wrap--disabled)   .cs-label[_ngcontent-%COMP%] {\n  top: 0;\n  font-size: 0.75rem;\n  color: var(--hau-primary);\n}\n\n.cs-field[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 56px;\n  border: 1.5px solid var(--hau-border-field);\n  border-radius: 4px;\n  background: var(--hau-surface);\n  transition: border-color 0.15s ease;\n}\n.cs-wrap--open[_ngcontent-%COMP%]   .cs-field[_ngcontent-%COMP%] {\n  border-color: var(--hau-primary);\n  border-width: 2px;\n}\n\n.cs-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 1rem;\n  color: var(--hau-text);\n  font-family: inherit;\n  padding: 20px 36px 6px 12px;\n  height: 100%;\n  width: 100%;\n}\n.cs-input[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n.cs-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--hau-text-muted);\n  font-size: 0.88rem;\n  opacity: 1;\n}\n\n.cs-chevron[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  color: var(--hau-text-dim);\n  font-size: 1.1rem;\n  pointer-events: none;\n  transition: transform 0.18s ease, color 0.18s ease;\n}\n.cs-chevron--open[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  color: var(--hau-primary);\n}\n\n.cs-clear[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 7px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px;\n  border-radius: 50%;\n  color: var(--hau-text-muted);\n  font-size: 1.1rem;\n  line-height: 1;\n  transition: background 0.15s ease, color 0.15s ease;\n}\n.cs-clear[_ngcontent-%COMP%]:hover {\n  background: var(--hau-border);\n  color: var(--hau-text);\n}\n\n.cs-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  width: 18px;\n  height: 18px;\n  color: var(--hau-primary);\n}\n\n.cs-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  right: 0;\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-md);\n  box-shadow: var(--hau-shadow-md);\n  z-index: 1000;\n  max-height: 240px;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n}\n.cs-dropdown[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.cs-dropdown[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.cs-dropdown[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--hau-border-field);\n  border-radius: var(--hau-radius-pill);\n}\n\n.cs-option[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 10px 14px;\n  background: none;\n  border: none;\n  text-align: left;\n  font-size: 0.9rem;\n  color: var(--hau-text);\n  cursor: pointer;\n  transition: background 0.12s ease;\n  font-family: inherit;\n}\n.cs-option[_ngcontent-%COMP%]:hover {\n  background: var(--hau-bg-soft);\n}\n.cs-option--selected[_ngcontent-%COMP%] {\n  color: var(--hau-primary);\n  font-weight: 600;\n  background: var(--hau-primary-soft);\n}\n.cs-option[_ngcontent-%COMP%]:first-child {\n  border-radius: var(--hau-radius-md) var(--hau-radius-md) 0 0;\n}\n.cs-option[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0 var(--hau-radius-md) var(--hau-radius-md);\n}\n.cs-option[_ngcontent-%COMP%]:only-child {\n  border-radius: var(--hau-radius-md);\n}\n\n.cs-no-results[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 0.86rem;\n  color: var(--hau-text-muted);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC92ZWhpY2xlLWNhdGFsb2ctc2VsZWN0L3ZlaGljbGUtY2F0YWxvZy1zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBREY7QUFHRTtFQUxGO0lBSzhCLDBCQUFBO0VBQzVCO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBRUY7QUFBRTtFQUFXLGNBQUE7QUFHYjtBQURFO0VBUEY7SUFRSSwwQkFBQTtFQUlGO0VBSEU7SUFBVyxrQkFBQTtFQU1iO0FBQ0Y7O0FBREE7RUFDRSxrQkFBQTtBQUlGO0FBRkU7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7QUFJSjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0VBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBRUY7QUFBRTtFQUNFLE1BQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FBRUo7O0FBR0E7RUFDRSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7QUFGRjtBQUlFO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtBQUZKOztBQVFBO0VBQ0UsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFMRjtBQU9FO0VBQWEsZUFBQTtBQUpmO0FBTUU7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUpKOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0RBQUE7QUFQRjtBQVNFO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQVBKOztBQVdBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtREFBQTtBQVJGO0FBVUU7RUFDRSw2QkFBQTtFQUNBLHNCQUFBO0FBUko7O0FBWUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBVEY7O0FBY0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFYRjtBQWFFO0VBQXVCLFVBQUE7QUFWekI7QUFXRTtFQUE2Qix1QkFBQTtBQVIvQjtBQVNFO0VBQ0UsbUNBQUE7RUFDQSxxQ0FBQTtBQVBKOztBQVdBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLG9CQUFBO0FBUkY7QUFVRTtFQUFVLDhCQUFBO0FBUFo7QUFTRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBQVBKO0FBVUU7RUFBZ0IsNERBQUE7QUFQbEI7QUFRRTtFQUFnQiw0REFBQTtBQUxsQjtBQU1FO0VBQWdCLG1DQUFBO0FBSGxCOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFIRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBSb3cgbGF5b3V0IMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuXG4uY2F0YWxvZy1maWVsZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG5cbi5jYXRhbG9nLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxMnB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxufVxuXG4uY2F0YWxvZy15ZWFyLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxMnB4O1xuXG4gIC5jcy13cmFwIHsgZ3JpZC1jb2x1bW46IDE7IH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAuY3Mtd3JhcCB7IGdyaWQtY29sdW1uOiB1bnNldDsgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBTZWFyY2hhYmxlIGNvbWJvYm94IMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuXG4uY3Mtd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmLS1kaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC41MDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxufVxuXG4vLyBGbG9hdGluZyBsYWJlbCDDosKAwpQgc2l0cyBjZW50cmVkIGJ5IGRlZmF1bHQsIGZsb2F0cyB0byB0b3AgYm9yZGVyIHdoZW4gYWN0aXZlXG4uY3MtbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDExcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LWRpbSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiB0b3AgMC4xNXMgZWFzZSwgZm9udC1zaXplIDAuMTVzIGVhc2UsIGNvbG9yIDAuMTVzIGVhc2U7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1zdXJmYWNlKTtcbiAgcGFkZGluZzogMCAzcHg7XG4gIHotaW5kZXg6IDE7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuXG4gICYtLXVwIHtcbiAgICB0b3A6IDA7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7XG4gIH1cbn1cblxuLy8gV2hlbiB0aGUgZHJvcGRvd24gaXMgb3BlbiB0aGUgbGFiZWwgdHVybnMgcHJpbWFyeS1ibHVlIChvbmx5IGZvciBlbmFibGVkIGZpZWxkcylcbi5jcy13cmFwLS1vcGVuOm5vdCguY3Mtd3JhcC0tZGlzYWJsZWQpIC5jcy1sYWJlbCB7XG4gIHRvcDogMDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBjb2xvcjogdmFyKC0taGF1LXByaW1hcnkpO1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgRmllbGQgc2hlbGwgKHRoZSBvdXRsaW5lZCBib3gpIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuXG4uY3MtZmllbGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTZweDtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyLWZpZWxkKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtc3VyZmFjZSk7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xuXG4gIC5jcy13cmFwLS1vcGVuICYge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taGF1LXByaW1hcnkpO1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBOYXRpdmUgaW5wdXQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG5cbi5jcy1pbnB1dCB7XG4gIGZsZXg6IDE7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0KTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDIwcHggMzZweCA2cHggMTJweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcblxuICAmOmRpc2FibGVkIHsgY3Vyc29yOiBkZWZhdWx0OyB9XG5cbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7XG4gICAgZm9udC1zaXplOiAwLjg4cmVtO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFRyYWlsaW5nIGljb25zIC8gYWN0aW9ucyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcblxuLmNzLWNoZXZyb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtZGltKTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xOHMgZWFzZSwgY29sb3IgMC4xOHMgZWFzZTtcblxuICAmLS1vcGVuIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIGNvbG9yOiB2YXIoLS1oYXUtcHJpbWFyeSk7XG4gIH1cbn1cblxuLmNzLWNsZWFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogN3B4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXMgZWFzZSwgY29sb3IgMC4xNXMgZWFzZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICB9XG59XG5cbi5jcy1zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgY29sb3I6IHZhcigtLWhhdS1wcmltYXJ5KTtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIERyb3Bkb3duIHBhbmVsIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuXG4uY3MtZHJvcGRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYygxMDAlICsgNHB4KTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGF1LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtbWQpO1xuICBib3gtc2hhZG93OiB2YXIoLS1oYXUtc2hhZG93LW1kKTtcbiAgei1pbmRleDogMTAwMDtcbiAgbWF4LWhlaWdodDogMjQwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJzY3JvbGwtYmVoYXZpb3I6IGNvbnRhaW47XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIgeyB3aWR0aDogNHB4OyB9XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWhhdS1ib3JkZXItZmllbGQpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtcGlsbCk7XG4gIH1cbn1cblxuLmNzLW9wdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAxNHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xMnMgZWFzZTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG5cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWhhdS1iZy1zb2Z0KTsgfVxuXG4gICYtLXNlbGVjdGVkIHtcbiAgICBjb2xvcjogdmFyKC0taGF1LXByaW1hcnkpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taGF1LXByaW1hcnktc29mdCk7XG4gIH1cblxuICAmOmZpcnN0LWNoaWxkIHsgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1tZCkgdmFyKC0taGF1LXJhZGl1cy1tZCkgMCAwOyB9XG4gICY6bGFzdC1jaGlsZCAgeyBib3JkZXItcmFkaXVzOiAwIDAgdmFyKC0taGF1LXJhZGl1cy1tZCkgdmFyKC0taGF1LXJhZGl1cy1tZCk7IH1cbiAgJjpvbmx5LWNoaWxkICB7IGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtbWQpOyB9XG59XG5cbi5jcy1uby1yZXN1bHRzIHtcbiAgcGFkZGluZzogMTJweCAxNHB4O1xuICBmb250LXNpemU6IDAuODZyZW07XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
};
VehicleCatalogSelectComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.UntilDestroy)()], VehicleCatalogSelectComponent);


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/until-destroy */ 56127);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 36124);






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


/***/ }

}]);
//# sourceMappingURL=default-src_app_features_cars_component_cars-form_cars-form_component_ts.js.map