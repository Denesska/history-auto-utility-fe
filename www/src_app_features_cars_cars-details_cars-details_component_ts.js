"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_features_cars_cars-details_cars-details_component_ts"],{

/***/ 6341
/*!**********************************************************************!*\
  !*** ./src/app/features/cars/cars-details/cars-details.component.ts ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarsDetailsComponent: () => (/* binding */ CarsDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _hau_features_cars_cars_routes_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/features/cars/cars.routes.const */ 5618);
/* harmony import */ var _hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hau/features/cars/cars.utils */ 5680);
/* harmony import */ var _hau_shared_pipes_image_url_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hau/shared/pipes/image-url.pipe */ 9275);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular/standalone */ 7241);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionicons */ 5846);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionicons/icons */ 7958);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/until-destroy */ 6127);
/* harmony import */ var _hau_app_routes_const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @hau/app.routes.const */ 5276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _hau_features_cars_state_car_details_car_details_facade__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @hau/features/cars/state/car-details/car-details.facade */ 8899);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular/standalone */ 4059);














const _forTrack0 = ($index, $item) => $item.id;
function CarsDetailsComponent_Conditional_1_Conditional_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const exp_r4 = ctx;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("qs-value--warning", exp_r4.warning);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", exp_r4.label, " ", exp_r4.days, "d ");
  }
}
function CarsDetailsComponent_Conditional_1_Conditional_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CarsDetailsComponent_Conditional_1_Conditional_127_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const car_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" RCA ", ctx_r1.daysUntil(car_r3.rca_expiry_date), "d ");
  }
}
function CarsDetailsComponent_Conditional_1_Conditional_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const car_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ITP ", ctx_r1.daysUntil(car_r3.itp_expiry_date), "d ");
  }
}
function CarsDetailsComponent_Conditional_1_Conditional_129_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const car_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ROV ", ctx_r1.daysUntil(car_r3.rov_expiry_date), "d ");
  }
}
function CarsDetailsComponent_Conditional_1_Conditional_131_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const car_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" \u00B7 ", ctx_r1.formatMileage(car_r3.last_oil_service_mileage), " ");
  }
}
function CarsDetailsComponent_Conditional_1_Conditional_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Oil service");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](6, CarsDetailsComponent_Conditional_1_Conditional_131_Conditional_6_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const car_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.formatDate(car_r3.last_oil_service_date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](car_r3.last_oil_service_mileage ? 6 : -1);
  }
}
function CarsDetailsComponent_Conditional_1_Conditional_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-icon", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Ownership since");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const car_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.formatDate(car_r3.ownership_start_date));
  }
}
function CarsDetailsComponent_Conditional_1_Conditional_183_Conditional_33_For_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td")(6, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "td", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rec_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.formatDate(rec_r5.service_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.formatMileage(rec_r5.mileage));
    const chip_r6 = ctx_r1.getCategoryChip(rec_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", chip_r6.css);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](chip_r6.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](rec_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](12, 6, rec_r5.cost), " RON");
  }
}
function CarsDetailsComponent_Conditional_1_Conditional_183_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 84)(1, "table", 86)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Mileage");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Work performed");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterCreate"](17, CarsDetailsComponent_Conditional_1_Conditional_183_Conditional_33_For_18_Template, 15, 8, "tr", null, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const records_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeater"](records_r7);
  }
}
function CarsDetailsComponent_Conditional_1_Conditional_183_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-icon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "No maintenance records yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function CarsDetailsComponent_Conditional_1_Conditional_183_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 57)(1, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Repairs & maintenance history");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 75)(4, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "ion-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 78)(7, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Total records");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "strong", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "ion-icon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 78)(14, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Total spent");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "strong", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "ion-icon", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 78)(22, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Last service");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "strong", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "ion-icon", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 78)(29, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "Next oil service");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "strong", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](33, CarsDetailsComponent_Conditional_1_Conditional_183_Conditional_33_Template, 19, 0, "div", 84)(34, CarsDetailsComponent_Conditional_1_Conditional_183_Conditional_34_Template, 4, 0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const records_r7 = ctx;
    const car_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](records_r7.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 5, ctx_r1.getTotalSpent(records_r7)), " RON");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.getLastService(records_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.formatMileage(ctx_r1.getNextOilService(car_r3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](records_r7.length > 0 ? 33 : 34);
  }
}
function CarsDetailsComponent_Conditional_1_Conditional_185_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Main photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CarsDetailsComponent_Conditional_1_Conditional_185_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "imageUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](3, CarsDetailsComponent_Conditional_1_Conditional_185_For_5_Conditional_3_Template, 2, 0, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const photo_r8 = ctx.$implicit;
    const car_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("photo-thumb--main", photo_r8.is_default);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 5, photo_r8.url), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"])("alt", car_r3.make + " photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](photo_r8.is_default ? 3 : -1);
  }
}
function CarsDetailsComponent_Conditional_1_Conditional_185_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 57)(1, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Photos & attachments");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterCreate"](4, CarsDetailsComponent_Conditional_1_Conditional_185_For_5_Template, 4, 7, "div", 92, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const car_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeater"](car_r3.photos);
  }
}
function CarsDetailsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 1)(1, "nav", 2)(2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CarsDetailsComponent_Conditional_1_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.navigateToGarage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Garage");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CarsDetailsComponent_Conditional_1_Template_span_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.navigateToGarage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "View details");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 6)(13, "div", 7)(14, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Complete vehicle profile, documents, deadlines, and maintenance history.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 10)(19, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CarsDetailsComponent_Conditional_1_Template_button_click_19_listener() {
      const car_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.navigateToEdit(car_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, " Edit vehicle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, " Add maintenance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, " Upload document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 16)(29, "div", 17)(30, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Vehicle overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 19)(33, "div", 20)(34, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "Make");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](37, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 20)(40, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](43, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 20)(46, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "Variant / Trim");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](49, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "div", 20)(52, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "License plate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](55, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "div", 20)(58, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "VIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](61, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "div", 20)(64, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65, "Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](67, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "div", 20)(70, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](71, "Fuel type");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](73, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "div", 20)(76, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](77, "Transmission");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](79, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "div", 20)(82, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](83, "Current mileage");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](85, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "div", 31)(88, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](89, "Ownership start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](90, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](91, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "div", 32)(94, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](95, "ion-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "div", 35)(97, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](98, "Last oil service");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](101, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](102, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](103, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "div", 35)(105, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](106, "Current mileage");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](107, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](109, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](110, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](111, "ion-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](112, "div", 35)(113, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](114, "Next key expiry");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](115, CarsDetailsComponent_Conditional_1_Conditional_115_Template, 2, 4, "strong", 41)(116, CarsDetailsComponent_Conditional_1_Conditional_116_Template, 2, 0, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](117, "div", 42)(118, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](119, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](120, "imageUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](121, "div", 45)(122, "h3", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](123);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](124, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](125);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](126, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](127, CarsDetailsComponent_Conditional_1_Conditional_127_Template, 3, 1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](128, CarsDetailsComponent_Conditional_1_Conditional_128_Template, 3, 1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](129, CarsDetailsComponent_Conditional_1_Conditional_129_Template, 3, 1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](130, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](131, CarsDetailsComponent_Conditional_1_Conditional_131_Template, 7, 2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](132, CarsDetailsComponent_Conditional_1_Conditional_132_Template, 6, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](133, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](134, "ion-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](135, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](136, "Current mileage");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](137, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](138);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](139, "div", 57)(140, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](141, "Documents & deadlines");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](142, "div", 58)(143, "div", 59)(144, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](145, "ion-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](146, "div", 62)(147, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](148, "RCA expiry date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](149, "strong", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](150);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](151, "div", 59)(152, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](153, "ion-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](154, "div", 62)(155, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](156, "ITP expiry date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](157, "strong", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](158);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](159, "div", 59)(160, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](161, "ion-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](162, "div", 62)(163, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](164, "ROV expiry date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](165, "strong", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](166);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](167, "div", 59)(168, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](169, "ion-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](170, "div", 62)(171, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](172, "Last oil service date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](173, "strong", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](174);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](175, "div", 59)(176, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](177, "ion-icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](178, "div", 62)(179, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](180, "Last oil service mileage");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](181, "strong", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](182);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](183, CarsDetailsComponent_Conditional_1_Conditional_183_Template, 35, 7, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](184, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](185, CarsDetailsComponent_Conditional_1_Conditional_185_Template, 6, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_16_0;
    let tmp_32_0;
    const car_r3 = ctx;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", car_r3.make, " ", car_r3.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", car_r3.make, " ", car_r3.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", car_r3.make || "\u2014", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", car_r3.model || "\u2014", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", car_r3.variant || "\u2014", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", car_r3.license_plate || "\u2014", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", car_r3.vin || "\u2014", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", car_r3.year || "\u2014", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.getFuelLabel(car_r3.fuel_type), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.getTransmissionLabel(car_r3.transmission), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.formatMileage(car_r3.current_mileage), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.formatDate(car_r3.ownership_start_date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.formatDate(car_r3.last_oil_service_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.formatMileage(car_r3.current_mileage));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"]((tmp_16_0 = ctx_r1.getNextExpiry(car_r3)) ? 115 : 116, tmp_16_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](120, 35, ctx_r1.getDefaultPhoto(car_r3)), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"])("alt", car_r3.make + " " + car_r3.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", car_r3.make, " ", car_r3.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](car_r3.license_plate);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](car_r3.rca_expiry_date ? 127 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](car_r3.itp_expiry_date ? 128 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](car_r3.rov_expiry_date ? 129 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](car_r3.last_oil_service_date || car_r3.last_oil_service_mileage ? 131 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](car_r3.ownership_start_date ? 132 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.formatMileage(car_r3.current_mileage));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.formatDate(car_r3.rca_expiry_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.formatDate(car_r3.itp_expiry_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.formatDate(car_r3.rov_expiry_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.formatDate(car_r3.last_oil_service_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.formatMileage(car_r3.last_oil_service_mileage));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"]((tmp_32_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](184, 37, ctx_r1.maintenanceRecords$)) ? 183 : -1, tmp_32_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"]((car_r3.photos == null ? null : car_r3.photos.length) ? 185 : -1);
  }
}
let CarsDetailsComponent = class CarsDetailsComponent {
  constructor(_carDetailFacade, _activatedRoute, _navCtrl) {
    this._carDetailFacade = _carDetailFacade;
    this._activatedRoute = _activatedRoute;
    this._navCtrl = _navCtrl;
    this.currentCar$ = this._carDetailFacade.currentCar$;
    this.maintenanceRecords$ = this._carDetailFacade.maintenanceRecords$;
    this.formatDate = _hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_3__.formatDate;
    this.formatMileage = _hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_3__.formatMileage;
    this.daysUntil = _hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_3__.daysUntil;
    (0,ionicons__WEBPACK_IMPORTED_MODULE_6__.a)({
      pencilOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_7__.pencilOutline,
      addCircleOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_7__.addCircleOutline,
      cloudUploadOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_7__.cloudUploadOutline,
      shieldCheckmarkOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_7__.shieldCheckmarkOutline,
      buildOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_7__.buildOutline,
      carOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_7__.carOutline,
      waterOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_7__.waterOutline,
      calendarOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_7__.calendarOutline,
      speedometerOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_7__.speedometerOutline,
      chevronForward: ionicons_icons__WEBPACK_IMPORTED_MODULE_7__.chevronForward,
      settingsOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_7__.settingsOutline,
      constructOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_7__.constructOutline,
      colorFilterOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_7__.colorFilterOutline,
      flameOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_7__.flameOutline,
      keyOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_7__.keyOutline,
      documentsOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_7__.documentsOutline
    });
  }
  ngOnInit() {
    this._activatedRoute.params.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.untilDestroyed)(this)).subscribe(params => {
      this._carDetailFacade.loadCurrentCar(params['id']);
      this._carDetailFacade.loadMaintenanceRecords(params['id']);
    });
  }
  navigateToGarage() {
    this._navCtrl.navigateBack(_hau_app_routes_const__WEBPACK_IMPORTED_MODULE_9__.HAU_ROUTES.cars.fullPath, {
      animated: false
    });
  }
  navigateToEdit(car) {
    this._navCtrl.navigateForward(`${_hau_features_cars_cars_routes_const__WEBPACK_IMPORTED_MODULE_2__.CARS_ROUTES.details.fullPath}/${car.id}/${_hau_features_cars_cars_routes_const__WEBPACK_IMPORTED_MODULE_2__.CARS_ROUTES.edit.path}`, {
      animated: false
    });
  }
  getDefaultPhoto(car) {
    const def = car.photos?.find(p => p.is_default) ?? car.photos?.[0];
    return def?.url ?? '';
  }
  getNextExpiry(car) {
    const candidates = [{
      label: 'RCA',
      date: car.rca_expiry_date
    }, {
      label: 'ITP',
      date: car.itp_expiry_date
    }, {
      label: 'ROV',
      date: car.rov_expiry_date
    }].filter(c => c.date != null).map(c => ({
      label: c.label,
      days: (0,_hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_3__.daysUntil)(c.date) ?? 9999
    })).filter(c => c.days > 0).sort((a, b) => a.days - b.days);
    if (!candidates.length) return null;
    const soonest = candidates[0];
    return {
      label: soonest.label,
      days: soonest.days,
      warning: soonest.days < 60
    };
  }
  getNextOilService(car) {
    if (car.last_oil_service_mileage == null) return null;
    return car.last_oil_service_mileage + 10000;
  }
  getFuelLabel(fuel) {
    const map = {
      PETROL: 'Petrol',
      DIESEL: 'Diesel',
      HYBRID: 'Hybrid',
      PLUGIN_HYBRID: 'Plug-in Hybrid',
      ELECTRIC: 'Electric',
      LPG: 'LPG'
    };
    return fuel ? map[fuel] ?? fuel : '—';
  }
  getTransmissionLabel(t) {
    const map = {
      MANUAL: 'Manual',
      AUTOMATIC: 'Automatic',
      SEMI_AUTOMATIC: 'Semi-automatic'
    };
    return t ? map[t] ?? t : '—';
  }
  getCategoryChip(rec) {
    if (rec.service_category === 'OIL_CHANGE') return {
      label: 'Oil service',
      css: 'chip--oil'
    };
    if (rec.service_type === 'REPAIR') return {
      label: 'Repair',
      css: 'chip--repair'
    };
    if (rec.service_type === 'MAINTENANCE') return {
      label: 'Maintenance',
      css: 'chip--maint'
    };
    return {
      label: 'Service',
      css: 'chip--service'
    };
  }
  getTotalSpent(records) {
    return records.reduce((sum, r) => sum + (r.cost ?? 0), 0);
  }
  getLastService(records) {
    if (!records.length) return '—';
    const sorted = [...records].sort((a, b) => new Date(b.service_date).getTime() - new Date(a.service_date).getTime());
    return (0,_hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_3__.formatDate)(sorted[0].service_date);
  }
  static {
    this.ɵfac = function CarsDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CarsDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_hau_features_cars_state_car_details_car_details_facade__WEBPACK_IMPORTED_MODULE_12__.CarDetailsFacade), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_14__.NavController));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: CarsDetailsComponent,
      selectors: [["app-cars-details"]],
      decls: 3,
      vars: 3,
      consts: [[1, "vd-page"], [1, "vd-inner"], [1, "vd-breadcrumb"], [1, "bc-link", 3, "click"], [1, "bc-sep"], [1, "bc-active"], [1, "vd-page-header"], [1, "vd-title-block"], [1, "vd-title"], [1, "vd-subtitle"], [1, "vd-header-actions"], [1, "btn-primary", 3, "click"], ["name", "pencil-outline"], [1, "btn-secondary"], ["name", "add-circle-outline"], ["name", "cloud-upload-outline"], [1, "vd-top-grid"], [1, "vd-card", "vd-overview-card"], [1, "vd-section-title"], [1, "vd-fields-grid"], [1, "vd-field"], [1, "vd-field-label"], [1, "vd-field-value"], ["name", "car-outline", 1, "field-icon"], ["name", "documents-outline", 1, "field-icon"], [1, "vd-field-value", "vd-field-value--mono"], ["name", "key-outline", 1, "field-icon"], ["name", "calendar-outline", 1, "field-icon"], ["name", "flame-outline", 1, "field-icon"], ["name", "settings-outline", 1, "field-icon"], ["name", "speedometer-outline", 1, "field-icon"], [1, "vd-field", "vd-field--wide"], [1, "vd-quick-stats"], [1, "qs-item"], ["name", "water-outline", 1, "qs-icon"], [1, "qs-body"], [1, "qs-label"], [1, "qs-value"], [1, "qs-divider"], ["name", "speedometer-outline", 1, "qs-icon"], ["name", "key-outline", 1, "qs-icon"], [1, "qs-value", 3, "qs-value--warning"], [1, "vd-photo-card"], [1, "vd-photo-wrap"], [1, "vd-photo", 3, "src", "alt"], [1, "vd-photo-info"], [1, "vd-photo-name"], [1, "vd-plate-badge"], [1, "vd-doc-chips"], [1, "doc-chip", "doc-chip--rca"], [1, "doc-chip", "doc-chip--itp"], [1, "doc-chip", "doc-chip--rov"], [1, "vd-photo-meta"], [1, "pm-row"], ["name", "speedometer-outline", 1, "pm-icon"], [1, "pm-label"], [1, "pm-value"], [1, "vd-card"], [1, "vd-docs-grid"], [1, "doc-item"], [1, "doc-item-icon", "doc-item-icon--rca"], ["name", "shield-checkmark-outline"], [1, "doc-item-body"], [1, "doc-item-label"], [1, "doc-item-value"], [1, "doc-item-icon", "doc-item-icon--itp"], ["name", "build-outline"], [1, "doc-item-icon", "doc-item-icon--rov"], ["name", "car-outline"], [1, "doc-item-icon", "doc-item-icon--oil"], ["name", "water-outline"], [1, "doc-item-icon", "doc-item-icon--mileage"], ["name", "speedometer-outline"], ["name", "water-outline", 1, "pm-icon"], ["name", "calendar-outline", 1, "pm-icon"], [1, "maint-stats"], [1, "ms-item"], ["name", "documents-outline", 1, "ms-icon", "ms-icon--blue"], [1, "ms-body"], [1, "ms-label"], [1, "ms-value"], ["name", "color-filter-outline", 1, "ms-icon", "ms-icon--green"], ["name", "calendar-outline", 1, "ms-icon", "ms-icon--blue"], ["name", "speedometer-outline", 1, "ms-icon", "ms-icon--teal"], [1, "maint-table-wrap"], [1, "maint-empty"], [1, "maint-table"], [1, "maint-chip", 3, "ngClass"], [1, "td-cost"], [1, "td-notes"], ["name", "construct-outline"], [1, "vd-photos-grid"], [1, "photo-thumb", 3, "photo-thumb--main"], [1, "photo-thumb"], [3, "src", "alt"], [1, "photo-main-label"]],
      template: function CarsDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-content", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditionalCreate"](1, CarsDetailsComponent_Conditional_1_Template, 186, 39, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_0_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"]((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx.currentCar$)) ? 1 : -1, tmp_0_0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe, _hau_shared_pipes_image_url_pipe__WEBPACK_IMPORTED_MODULE_4__.ImageUrlPipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  --vd-bg: var(--hau-bg);\n  --vd-surface: var(--hau-surface);\n  --vd-border: var(--hau-border);\n  --vd-text: var(--hau-text);\n  --vd-muted: var(--hau-text-muted);\n  --vd-dim: var(--hau-text-dim);\n  --vd-primary: var(--hau-primary);\n  --vd-shadow-sm: var(--hau-shadow-soft);\n  --vd-r-sm: var(--hau-radius-sm);\n  --vd-r-md: var(--hau-radius-md);\n  --vd-r-lg: var(--hau-radius-lg);\n  --vd-r-xl: var(--hau-radius-xl);\n}\n\n.vd-page[_ngcontent-%COMP%] {\n  --background: var(--vd-bg);\n}\n\n.vd-inner[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 20px 16px 48px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n@media (min-width: 768px) {\n  .vd-inner[_ngcontent-%COMP%] {\n    padding: 28px 24px 56px;\n    gap: 24px;\n  }\n}\n@media (min-width: 1024px) {\n  .vd-inner[_ngcontent-%COMP%] {\n    padding: 32px 32px 64px;\n    gap: 28px;\n  }\n}\n\n.vd-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.82rem;\n  color: var(--vd-muted);\n}\n\n.bc-link[_ngcontent-%COMP%] {\n  color: var(--vd-primary);\n  cursor: pointer;\n  font-weight: 500;\n  transition: opacity 0.15s;\n}\n.bc-link[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n\n.bc-sep[_ngcontent-%COMP%] {\n  color: var(--vd-dim);\n}\n\n.bc-active[_ngcontent-%COMP%] {\n  color: var(--vd-text);\n  font-weight: 600;\n}\n\n.vd-page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n\n.vd-title-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.vd-title[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: var(--vd-text);\n  margin: 0;\n  line-height: 1.2;\n}\n@media (min-width: 768px) {\n  .vd-title[_ngcontent-%COMP%] {\n    font-size: 2.1rem;\n  }\n}\n@media (min-width: 1024px) {\n  .vd-title[_ngcontent-%COMP%] {\n    font-size: 2.4rem;\n  }\n}\n\n.vd-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--vd-muted);\n  margin: 0;\n}\n\n.vd-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 20px;\n  background: var(--vd-primary);\n  color: #fff;\n  border: none;\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.88rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 4px 14px var(--hau-primary-shadow);\n  transition: background 0.16s;\n}\n.btn-primary[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--hau-primary-strong);\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 18px;\n  background: var(--vd-surface);\n  color: var(--vd-text);\n  border: 1.5px solid var(--vd-border);\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: border-color 0.16s, background 0.16s;\n}\n.btn-secondary[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--vd-muted);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--hau-bg-soft);\n  border-color: rgba(15, 23, 42, 0.16);\n}\n\n.vd-card[_ngcontent-%COMP%] {\n  background: var(--vd-surface);\n  border-radius: var(--vd-r-xl);\n  box-shadow: var(--vd-shadow-sm);\n  border: 1px solid var(--vd-border);\n  padding: 24px;\n}\n@media (min-width: 768px) {\n  .vd-card[_ngcontent-%COMP%] {\n    padding: 28px 28px;\n  }\n}\n\n.vd-section-title[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--vd-text);\n  margin: 0 0 20px;\n}\n@media (min-width: 768px) {\n  .vd-section-title[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n\n.vd-top-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n}\n@media (min-width: 1024px) {\n  .vd-top-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 340px;\n    align-items: start;\n    gap: 24px;\n  }\n}\n\n.vd-overview-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.vd-fields-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0;\n  border: 1px solid var(--vd-border);\n  border-radius: var(--vd-r-md);\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n@media (max-width: 599px) {\n  .vd-fields-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n.vd-field[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-right: 1px solid var(--vd-border);\n  border-bottom: 1px solid var(--vd-border);\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.vd-field[_ngcontent-%COMP%]:nth-child(3n) {\n  border-right: none;\n}\n.vd-field[_ngcontent-%COMP%]:nth-last-child(-n+3):not(.vd-field--wide) {\n  border-bottom: none;\n}\n@media (max-width: 599px) {\n  .vd-field[_ngcontent-%COMP%]:nth-child(3n) {\n    border-right: 1px solid var(--vd-border);\n  }\n  .vd-field[_ngcontent-%COMP%]:nth-child(2n) {\n    border-right: none;\n  }\n  .vd-field[_ngcontent-%COMP%]:nth-last-child(-n+2) {\n    border-bottom: none;\n  }\n}\n\n.vd-field--wide[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  border-right: none;\n  border-bottom: none;\n}\n\n.vd-field-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--vd-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n\n.vd-field-value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.92rem;\n  font-weight: 600;\n  color: var(--vd-text);\n}\n.vd-field-value[_ngcontent-%COMP%]   .field-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--vd-primary);\n  flex-shrink: 0;\n}\n\n.vd-field-value--mono[_ngcontent-%COMP%] {\n  font-family: \"Courier New\", Courier, monospace;\n  font-size: 0.8rem;\n  letter-spacing: 0.03em;\n}\n\n.vd-quick-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  background: var(--hau-bg-soft);\n  border: 1px solid var(--vd-border);\n  border-radius: var(--vd-r-md);\n  overflow: hidden;\n}\n@media (max-width: 599px) {\n  .vd-quick-stats[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n\n.qs-item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n}\n\n.qs-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--vd-primary);\n  flex-shrink: 0;\n}\n\n.qs-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.qs-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--vd-muted);\n  font-weight: 500;\n  white-space: nowrap;\n}\n\n.qs-value[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--vd-text);\n  white-space: nowrap;\n}\n.qs-value.qs-value--warning[_ngcontent-%COMP%] {\n  color: var(--hau-warning-fg);\n}\n\n.qs-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 36px;\n  background: var(--vd-border);\n  flex-shrink: 0;\n}\n@media (max-width: 599px) {\n  .qs-divider[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 1px;\n  }\n}\n\n.vd-photo-card[_ngcontent-%COMP%] {\n  background: var(--vd-surface);\n  border-radius: var(--vd-r-xl);\n  box-shadow: var(--vd-shadow-sm);\n  border: 1px solid var(--vd-border);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.vd-photo-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 16/10;\n  overflow: hidden;\n  background: var(--hau-bg-soft);\n}\n\n.vd-photo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.vd-photo-info[_ngcontent-%COMP%] {\n  padding: 18px 20px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.vd-photo-name[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--vd-text);\n  margin: 0;\n}\n\n.vd-plate-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  background: var(--hau-bg-soft);\n  border: 1px solid var(--vd-border);\n  border-radius: var(--vd-r-sm);\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--vd-text);\n  align-self: flex-start;\n  letter-spacing: 0.05em;\n}\n\n.vd-doc-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.doc-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: var(--vd-r-sm);\n  font-size: 0.74rem;\n  font-weight: 700;\n}\n.doc-chip[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n}\n.doc-chip--rca[_ngcontent-%COMP%] {\n  background: rgba(100, 116, 139, 0.12);\n  color: #475569;\n}\n.doc-chip--itp[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.14);\n  color: #d97706;\n}\n.doc-chip--rov[_ngcontent-%COMP%] {\n  background: var(--hau-success-soft);\n  color: var(--hau-success-fg);\n}\n\n.vd-photo-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 8px;\n  border-top: 1px solid var(--vd-border);\n}\n\n.pm-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.pm-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--vd-muted);\n  flex-shrink: 0;\n}\n\n.pm-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--vd-muted);\n  flex: 1;\n}\n\n.pm-value[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: var(--vd-text);\n}\n\n.vd-docs-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1px;\n  background: var(--vd-border);\n  border: 1px solid var(--vd-border);\n  border-radius: var(--vd-r-md);\n  overflow: hidden;\n}\n@media (min-width: 640px) {\n  .vd-docs-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (min-width: 1024px) {\n  .vd-docs-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(5, 1fr);\n  }\n}\n\n.doc-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 18px;\n  background: var(--vd-surface);\n}\n\n.doc-item-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 38px;\n  height: 38px;\n  border-radius: var(--vd-r-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.doc-item-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n}\n.doc-item-icon--rca[_ngcontent-%COMP%] {\n  background: rgba(100, 116, 139, 0.1);\n}\n.doc-item-icon--rca[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #475569;\n}\n.doc-item-icon--itp[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n}\n.doc-item-icon--itp[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.doc-item-icon--rov[_ngcontent-%COMP%] {\n  background: var(--hau-success-soft);\n}\n.doc-item-icon--rov[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--hau-success-fg);\n}\n.doc-item-icon--oil[_ngcontent-%COMP%] {\n  background: var(--hau-primary-soft);\n}\n.doc-item-icon--oil[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--hau-primary);\n}\n.doc-item-icon--mileage[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n}\n.doc-item-icon--mileage[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #6366f1;\n}\n\n.doc-item-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 0;\n}\n\n.doc-item-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--vd-muted);\n  font-weight: 500;\n  white-space: nowrap;\n}\n\n.doc-item-value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--vd-text);\n  white-space: nowrap;\n}\n\n.maint-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  margin-bottom: 20px;\n}\n@media (min-width: 768px) {\n  .maint-stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n\n.ms-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 16px;\n  background: var(--hau-bg-soft);\n  border: 1px solid var(--vd-border);\n  border-radius: var(--vd-r-md);\n}\n\n.ms-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 1.3rem;\n}\n.ms-icon--blue[_ngcontent-%COMP%] {\n  color: var(--hau-primary);\n}\n.ms-icon--green[_ngcontent-%COMP%] {\n  color: var(--hau-success-fg);\n}\n.ms-icon--teal[_ngcontent-%COMP%] {\n  color: #0891b2;\n}\n\n.ms-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n\n.ms-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--vd-muted);\n  font-weight: 500;\n}\n\n.ms-value[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: var(--vd-text);\n  white-space: nowrap;\n}\n\n.maint-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid var(--vd-border);\n  border-radius: var(--vd-r-md);\n}\n\n.maint-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.86rem;\n}\n.maint-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 11px 16px;\n  font-size: 0.74rem;\n  font-weight: 700;\n  color: var(--vd-muted);\n  background: var(--hau-bg-soft);\n  border-bottom: 1px solid var(--vd-border);\n  white-space: nowrap;\n}\n.maint-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 16px;\n  color: var(--vd-text);\n  border-bottom: 1px solid var(--vd-border);\n  vertical-align: middle;\n}\n.maint-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.maint-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.02);\n}\n\n.td-cost[_ngcontent-%COMP%] {\n  font-weight: 700;\n  white-space: nowrap;\n}\n\n.td-notes[_ngcontent-%COMP%] {\n  color: var(--vd-muted);\n  font-size: 0.82rem;\n  max-width: 220px;\n}\n\n.maint-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: var(--vd-r-sm);\n  font-size: 0.76rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.maint-chip--oil[_ngcontent-%COMP%] {\n  background: var(--hau-primary-soft);\n  color: var(--hau-primary);\n}\n.maint-chip--repair[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.13);\n  color: #d97706;\n}\n.maint-chip--maint[_ngcontent-%COMP%] {\n  background: var(--hau-success-soft);\n  color: var(--hau-success-fg);\n}\n.maint-chip--service[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n}\n\n.maint-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 40px 20px;\n  color: var(--vd-muted);\n}\n.maint-empty[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: var(--vd-dim);\n}\n.maint-empty[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n\n.vd-photos-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.photo-thumb[_ngcontent-%COMP%] {\n  position: relative;\n  width: 130px;\n  height: 100px;\n  border-radius: var(--vd-r-md);\n  overflow: hidden;\n  border: 2px solid var(--vd-border);\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: border-color 0.15s;\n}\n.photo-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.photo-thumb--main[_ngcontent-%COMP%] {\n  border-color: var(--hau-primary);\n}\n.photo-thumb[_ngcontent-%COMP%]:hover {\n  border-color: var(--hau-primary);\n}\n\n.photo-main-label[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(37, 99, 235, 0.82);\n  color: #fff;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-align: center;\n  padding: 3px 0;\n  letter-spacing: 0.03em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2Fycy9jYXJzLWRldGFpbHMvY2Fycy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUtBO0VBQ0UsMEJBQUE7QUFGRjs7QUFLQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUZGO0FBSUU7RUFSRjtJQVErQix1QkFBQTtJQUF5QixTQUFBO0VBQ3REO0FBQ0Y7QUFERTtFQVRGO0lBUytCLHVCQUFBO0lBQXlCLFNBQUE7RUFNdEQ7QUFDRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBSUY7O0FBREE7RUFDRSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBSUY7QUFIRTtFQUFVLGFBQUE7QUFNWjs7QUFIQTtFQUNFLG9CQUFBO0FBTUY7O0FBSEE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBTUY7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBR0Y7O0FBQUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFHRjtBQURFO0VBUEY7SUFPK0IsaUJBQUE7RUFLN0I7QUFDRjtBQUxFO0VBUkY7SUFRK0IsaUJBQUE7RUFTN0I7QUFDRjs7QUFQQTtFQUNF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YSxtQ0FBQTtFQUF3Qyx5QkFBQTtBQXdEdkQ7QUF2REU7RUFBYSxvQ0FBQTtFQUF3QyxjQUFBO0FBMkR2RDtBQTFERTtFQUFhLG1DQUFBO0VBQXdDLDRCQUFBO0FBOER2RDtBQTdERTtFQUFhLG1DQUFBO0VBQXdDLGNBQUE7QUFpRXZEOztBQTNEQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUE4REY7QUE1REU7RUFBVyxpQkFBQTtFQUFtQixvQkFBQTtBQWdFaEM7QUEvREU7RUFBTyxpQkFBQTtFQUFtQixnQkFBQTtBQW1FNUI7O0FBN0RBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBZ0VGOztBQTdEQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0FBZ0VGO0FBOURFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWdFSjtBQTdERTtFQUNFLGdDQUFBO0FBK0RKO0FBNURFO0VBQ0UsZ0NBQUE7QUE4REo7O0FBMURBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxtQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUE2REYiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtLXZkLWJnOiAgICAgICAgIHZhcigtLWhhdS1iZyk7XG4gIC0tdmQtc3VyZmFjZTogICAgdmFyKC0taGF1LXN1cmZhY2UpO1xuICAtLXZkLWJvcmRlcjogICAgIHZhcigtLWhhdS1ib3JkZXIpO1xuICAtLXZkLXRleHQ6ICAgICAgIHZhcigtLWhhdS10ZXh0KTtcbiAgLS12ZC1tdXRlZDogICAgICB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7XG4gIC0tdmQtZGltOiAgICAgICAgdmFyKC0taGF1LXRleHQtZGltKTtcbiAgLS12ZC1wcmltYXJ5OiAgICB2YXIoLS1oYXUtcHJpbWFyeSk7XG4gIC0tdmQtc2hhZG93LXNtOiAgdmFyKC0taGF1LXNoYWRvdy1zb2Z0KTtcbiAgLS12ZC1yLXNtOiAgICAgICB2YXIoLS1oYXUtcmFkaXVzLXNtKTtcbiAgLS12ZC1yLW1kOiAgICAgICB2YXIoLS1oYXUtcmFkaXVzLW1kKTtcbiAgLS12ZC1yLWxnOiAgICAgICB2YXIoLS1oYXUtcmFkaXVzLWxnKTtcbiAgLS12ZC1yLXhsOiAgICAgICB2YXIoLS1oYXUtcmFkaXVzLXhsKTtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyBQYWdlIHNoZWxsXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi52ZC1wYWdlIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS12ZC1iZyk7XG59XG5cbi52ZC1pbm5lciB7XG4gIG1heC13aWR0aDogMTI4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweCAxNnB4IDQ4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpICB7IHBhZGRpbmc6IDI4cHggMjRweCA1NnB4OyBnYXA6IDI0cHg7IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgeyBwYWRkaW5nOiAzMnB4IDMycHggNjRweDsgZ2FwOiAyOHB4OyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gQnJlYWRjcnVtYlxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4udmQtYnJlYWRjcnVtYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBmb250LXNpemU6IDAuODJyZW07XG4gIGNvbG9yOiB2YXIoLS12ZC1tdXRlZCk7XG59XG5cbi5iYy1saW5rIHtcbiAgY29sb3I6IHZhcigtLXZkLXByaW1hcnkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXM7XG4gICY6aG92ZXIgeyBvcGFjaXR5OiAwLjc1OyB9XG59XG5cbi5iYy1zZXAge1xuICBjb2xvcjogdmFyKC0tdmQtZGltKTtcbn1cblxuLmJjLWFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS12ZC10ZXh0KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyBQYWdlIGhlYWRlclxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4udmQtcGFnZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE2cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnZkLXRpdGxlLWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0cHg7XG59XG5cbi52ZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogdmFyKC0tdmQtdGV4dCk7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpICB7IGZvbnQtc2l6ZTogMi4xcmVtOyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHsgZm9udC1zaXplOiAyLjRyZW07IH1cbn1cblxuLnZkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjg4cmVtO1xuICBjb2xvcjogdmFyKC0tdmQtbXV0ZWQpO1xuICBtYXJnaW46IDA7XG59XG5cbi52ZC1oZWFkZXItYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyBCdXR0b25zXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5idG4tcHJpbWFyeSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDdweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12ZC1wcmltYXJ5KTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1waWxsKTtcbiAgZm9udC1zaXplOiAwLjg4cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggdmFyKC0taGF1LXByaW1hcnktc2hhZG93KTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE2cztcblxuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMXJlbTsgfVxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0taGF1LXByaW1hcnktc3Ryb25nKTsgfVxufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDdweDtcbiAgcGFkZGluZzogOXB4IDE4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZkLXN1cmZhY2UpO1xuICBjb2xvcjogdmFyKC0tdmQtdGV4dCk7XG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tdmQtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1waWxsKTtcbiAgZm9udC1zaXplOiAwLjg4cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE2cywgYmFja2dyb3VuZCAwLjE2cztcblxuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMXJlbTsgY29sb3I6IHZhcigtLXZkLW11dGVkKTsgfVxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0taGF1LWJnLXNvZnQpOyBib3JkZXItY29sb3I6IHJnYmEoMTUsMjMsNDIsMC4xNik7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyBTaGFyZWQgY2FyZFxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4udmQtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZkLXN1cmZhY2UpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS12ZC1yLXhsKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdmQtc2hhZG93LXNtKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdmQtYm9yZGVyKTtcbiAgcGFkZGluZzogMjRweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgcGFkZGluZzogMjhweCAyOHB4OyB9XG59XG5cbi52ZC1zZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdmQtdGV4dCk7XG4gIG1hcmdpbjogMCAwIDIwcHg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IGZvbnQtc2l6ZTogMS4xcmVtOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gVG9wIGdyaWQ6IE92ZXJ2aWV3IGNhcmQgKyBQaG90byBjYXJkXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi52ZC10b3AtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBnYXA6IDIwcHg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDM0MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBnYXA6IDI0cHg7XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyBWZWhpY2xlIG92ZXJ2aWV3IGNhcmRcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnZkLW92ZXJ2aWV3LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udmQtZmllbGRzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBnYXA6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZkLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXZkLXItbWQpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgfVxufVxuXG4udmQtZmllbGQge1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXZkLWJvcmRlcik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS12ZC1ib3JkZXIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDVweDtcblxuICAmOm50aC1jaGlsZCgzbikgeyBib3JkZXItcmlnaHQ6IG5vbmU7IH1cbiAgJjpudGgtbGFzdC1jaGlsZCgtbiszKTpub3QoLnZkLWZpZWxkLS13aWRlKSB7IGJvcmRlci1ib3R0b206IG5vbmU7IH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICAmOm50aC1jaGlsZCgzbikgeyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS12ZC1ib3JkZXIpOyB9XG4gICAgJjpudGgtY2hpbGQoMm4pIHsgYm9yZGVyLXJpZ2h0OiBub25lOyB9XG4gICAgJjpudGgtbGFzdC1jaGlsZCgtbisyKSB7IGJvcmRlci1ib3R0b206IG5vbmU7IH1cbiAgfVxufVxuXG4udmQtZmllbGQtLXdpZGUge1xuICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi52ZC1maWVsZC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXZkLW11dGVkKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbn1cblxuLnZkLWZpZWxkLXZhbHVlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGZvbnQtc2l6ZTogMC45MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXZkLXRleHQpO1xuXG4gIC5maWVsZC1pY29uIHtcbiAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgY29sb3I6IHZhcigtLXZkLXByaW1hcnkpO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICB9XG59XG5cbi52ZC1maWVsZC12YWx1ZS0tbW9ubyB7XG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIFF1aWNrIHN0YXRzIGJhclxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4udmQtcXVpY2stc3RhdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1iZy1zb2Z0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdmQtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdmQtci1tZCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgfVxufVxuXG4ucXMtaXRlbSB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMTRweCAxOHB4O1xufVxuXG4ucXMtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogdmFyKC0tdmQtcHJpbWFyeSk7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4ucXMtYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnB4O1xufVxuXG4ucXMtbGFiZWwge1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGNvbG9yOiB2YXIoLS12ZC1tdXRlZCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5xcy12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXZkLXRleHQpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICYucXMtdmFsdWUtLXdhcm5pbmcge1xuICAgIGNvbG9yOiB2YXIoLS1oYXUtd2FybmluZy1mZyk7XG4gIH1cbn1cblxuLnFzLWRpdmlkZXIge1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZkLWJvcmRlcik7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMXB4O1xuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gVmVoaWNsZSBwaG90byBjYXJkXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi52ZC1waG90by1jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdmQtc3VyZmFjZSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXZkLXIteGwpO1xuICBib3gtc2hhZG93OiB2YXIoLS12ZC1zaGFkb3ctc20pO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS12ZC1ib3JkZXIpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udmQtcGhvdG8td3JhcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBhc3BlY3QtcmF0aW86IDE2IC8gMTA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1iZy1zb2Z0KTtcbn1cblxuLnZkLXBob3RvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi52ZC1waG90by1pbmZvIHtcbiAgcGFkZGluZzogMThweCAyMHB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cblxuLnZkLXBob3RvLW5hbWUge1xuICBmb250LXNpemU6IDEuMDVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS12ZC10ZXh0KTtcbiAgbWFyZ2luOiAwO1xufVxuXG4udmQtcGxhdGUtYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDRweCAxMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtYmctc29mdCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZkLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXZkLXItc20pO1xuICBmb250LXNpemU6IDAuODJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS12ZC10ZXh0KTtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbn1cblxuLnZkLWRvYy1jaGlwcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA2cHg7XG59XG5cbi5kb2MtY2hpcCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXZkLXItc20pO1xuICBmb250LXNpemU6IDAuNzRyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG5cbiAgaW9uLWljb24geyBmb250LXNpemU6IDAuNzhyZW07IH1cblxuICAmLS1yY2EgeyBiYWNrZ3JvdW5kOiByZ2JhKDEwMCwxMTYsMTM5LDAuMTIpOyBjb2xvcjogIzQ3NTU2OTsgfVxuICAmLS1pdHAgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwxNTgsMTEsMC4xNCk7ICBjb2xvcjogI2Q5NzcwNjsgfVxuICAmLS1yb3YgeyBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtc3VjY2Vzcy1zb2Z0KTsgY29sb3I6IHZhcigtLWhhdS1zdWNjZXNzLWZnKTsgfVxufVxuXG4udmQtcGhvdG8tbWV0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tdmQtYm9yZGVyKTtcbn1cblxuLnBtLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4ucG0taWNvbiB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogdmFyKC0tdmQtbXV0ZWQpO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLnBtLWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiB2YXIoLS12ZC1tdXRlZCk7XG4gIGZsZXg6IDE7XG59XG5cbi5wbS12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMC44NHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXZkLXRleHQpO1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIERvY3VtZW50cyAmIGRlYWRsaW5lc1xuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4udmQtZG9jcy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ2FwOiAxcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZkLWJvcmRlcik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZkLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXZkLXItbWQpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkgIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTsgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7IH1cbn1cblxuLmRvYy1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxNnB4IDE4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZkLXN1cmZhY2UpO1xufVxuXG4uZG9jLWl0ZW0taWNvbiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogMzhweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS12ZC1yLXNtKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgaW9uLWljb24geyBmb250LXNpemU6IDEuMDVyZW07IH1cblxuICAmLS1yY2EgIHsgYmFja2dyb3VuZDogcmdiYSgxMDAsMTE2LDEzOSwwLjEwKTsgaW9uLWljb24geyBjb2xvcjogIzQ3NTU2OTsgfSB9XG4gICYtLWl0cCAgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwxNTgsMTEsMC4xMik7ICBpb24taWNvbiB7IGNvbG9yOiAjZDk3NzA2OyB9IH1cbiAgJi0tcm92ICB7IGJhY2tncm91bmQ6IHZhcigtLWhhdS1zdWNjZXNzLXNvZnQpOyBpb24taWNvbiB7IGNvbG9yOiB2YXIoLS1oYXUtc3VjY2Vzcy1mZyk7IH0gfVxuICAmLS1vaWwgIHsgYmFja2dyb3VuZDogdmFyKC0taGF1LXByaW1hcnktc29mdCk7IGlvbi1pY29uIHsgY29sb3I6IHZhcigtLWhhdS1wcmltYXJ5KTsgfSB9XG4gICYtLW1pbGVhZ2UgeyBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4xMCk7IGlvbi1pY29uIHsgY29sb3I6ICM2MzY2ZjE7IH0gfVxufVxuXG4uZG9jLWl0ZW0tYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogM3B4O1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5kb2MtaXRlbS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgY29sb3I6IHZhcigtLXZkLW11dGVkKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmRvYy1pdGVtLXZhbHVlIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS12ZC10ZXh0KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyBNYWludGVuYW5jZSBzdW1tYXJ5IHN0YXRzXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5tYWludC1zdGF0cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdhcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTsgfVxufVxuXG4ubXMtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtYmctc29mdCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZkLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXZkLXItbWQpO1xufVxuXG4ubXMtaWNvbiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmb250LXNpemU6IDEuM3JlbTtcblxuICAmLS1ibHVlICB7IGNvbG9yOiB2YXIoLS1oYXUtcHJpbWFyeSk7IH1cbiAgJi0tZ3JlZW4geyBjb2xvcjogdmFyKC0taGF1LXN1Y2Nlc3MtZmcpOyB9XG4gICYtLXRlYWwgIHsgY29sb3I6ICMwODkxYjI7IH1cbn1cblxuLm1zLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJweDtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4ubXMtbGFiZWwge1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGNvbG9yOiB2YXIoLS12ZC1tdXRlZCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tcy12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMC45MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXZkLXRleHQpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIE1haW50ZW5hbmNlIHRhYmxlXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5tYWludC10YWJsZS13cmFwIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdmQtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdmQtci1tZCk7XG59XG5cbi5tYWludC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBmb250LXNpemU6IDAuODZyZW07XG5cbiAgdGgge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMTFweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMC43NHJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiB2YXIoLS12ZC1tdXRlZCk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taGF1LWJnLXNvZnQpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS12ZC1ib3JkZXIpO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cblxuICB0ZCB7XG4gICAgcGFkZGluZzogMTNweCAxNnB4O1xuICAgIGNvbG9yOiB2YXIoLS12ZC10ZXh0KTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdmQtYm9yZGVyKTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgdHI6bGFzdC1jaGlsZCB0ZCB7IGJvcmRlci1ib3R0b206IG5vbmU7IH1cbiAgdHI6aG92ZXIgdGQgeyBiYWNrZ3JvdW5kOiByZ2JhKDE1LDIzLDQyLDAuMDIpOyB9XG59XG5cbi50ZC1jb3N0IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnRkLW5vdGVzIHtcbiAgY29sb3I6IHZhcigtLXZkLW11dGVkKTtcbiAgZm9udC1zaXplOiAwLjgycmVtO1xuICBtYXgtd2lkdGg6IDIyMHB4O1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIENhdGVnb3J5IGNoaXAgKHRhYmxlKVxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ubWFpbnQtY2hpcCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdmQtci1zbSk7XG4gIGZvbnQtc2l6ZTogMC43NnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAmLS1vaWwgICAgIHsgYmFja2dyb3VuZDogdmFyKC0taGF1LXByaW1hcnktc29mdCk7ICAgIGNvbG9yOiB2YXIoLS1oYXUtcHJpbWFyeSk7IH1cbiAgJi0tcmVwYWlyICB7IGJhY2tncm91bmQ6IHJnYmEoMjQ1LDE1OCwxMSwwLjEzKTsgICAgICBjb2xvcjogI2Q5NzcwNjsgfVxuICAmLS1tYWludCAgIHsgYmFja2dyb3VuZDogdmFyKC0taGF1LXN1Y2Nlc3Mtc29mdCk7ICAgIGNvbG9yOiB2YXIoLS1oYXUtc3VjY2Vzcy1mZyk7IH1cbiAgJi0tc2VydmljZSB7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjEwKTsgICAgICBjb2xvcjogIzYzNjZmMTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIE1haW50ZW5hbmNlIGVtcHR5IHN0YXRlXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5tYWludC1lbXB0eSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogNDBweCAyMHB4O1xuICBjb2xvcjogdmFyKC0tdmQtbXV0ZWQpO1xuXG4gIGlvbi1pY29uIHsgZm9udC1zaXplOiAyLjVyZW07IGNvbG9yOiB2YXIoLS12ZC1kaW0pOyB9XG4gIHNwYW4geyBmb250LXNpemU6IDAuOXJlbTsgZm9udC13ZWlnaHQ6IDUwMDsgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIFBob3RvcyAmIGF0dGFjaG1lbnRzXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi52ZC1waG90b3MtZ3JpZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMnB4O1xufVxuXG4ucGhvdG8tdGh1bWIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdmQtci1tZCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXZkLWJvcmRlcik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cztcblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuXG4gICYtLW1haW4ge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taGF1LXByaW1hcnkpO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1oYXUtcHJpbWFyeSk7XG4gIH1cbn1cblxuLnBob3RvLW1haW4tbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzcsOTksMjM1LDAuODIpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAwLjY4cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNweCAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
};
CarsDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.UntilDestroy)()], CarsDetailsComponent);


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
//# sourceMappingURL=src_app_features_cars_cars-details_cars-details_component_ts.js.map