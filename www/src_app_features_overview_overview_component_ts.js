"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_features_overview_overview_component_ts"],{

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
/* harmony export */   getDocExpiry: () => (/* binding */ getDocExpiry),
/* harmony export */   removeNullProperties: () => (/* binding */ removeNullProperties)
/* harmony export */ });
function getDocExpiry(docs, type) {
  if (!docs) return null;
  return docs.find(d => d.document_type === type && d.expiry_date)?.expiry_date ?? null;
}
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

/***/ 49650
/*!*********************************************************!*\
  !*** ./src/app/features/overview/overview.component.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverviewComponent: () => (/* binding */ OverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _hau_app_routes_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hau/app.routes.const */ 85276);
/* harmony import */ var _hau_features_cars_cars_routes_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/features/cars/cars.routes.const */ 5618);
/* harmony import */ var _hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hau/features/cars/cars.utils */ 5680);
/* harmony import */ var _hau_shared_pipes_image_url_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hau/shared/pipes/image-url.pipe */ 19275);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionicons */ 45846);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionicons/icons */ 77958);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/transloco */ 76075);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _hau_features_cars_state_car_list_car_list_facade__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hau/features/cars/state/car-list/car-list.facade */ 6295);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 83305);













const _c0 = () => [1, 2, 3];
const _forTrack0 = ($index, $item) => $item.car.id;
const _forTrack1 = ($index, $item) => $item.title;
const _forTrack2 = ($index, $item) => $item.car.id + $item.docType;
function OverviewComponent_Conditional_63_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ion-skeleton-text", 24)(2, "ion-skeleton-text", 25)(3, "ion-skeleton-text", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("animated", true);
  }
}
function OverviewComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeaterCreate"](0, OverviewComponent_Conditional_63_For_1_Template, 4, 3, "div", 23, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](0, _c0));
  }
}
function OverviewComponent_Conditional_65_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 34)(1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "ion-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 6, "overview.deadlines.rca"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("badge-days " + ctx_r2.docUrgencyClass(row_r2.rca.days));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", row_r2.rca.days, "d");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 8, "overview.deadlines.expires"), " ", row_r2.rca.dateStr);
  }
}
function OverviewComponent_Conditional_65_For_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 34)(1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "ion-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 6, "overview.deadlines.itp"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("badge-days " + ctx_r2.docUrgencyClass(row_r2.itp.days));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", row_r2.itp.days, "d");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 8, "overview.deadlines.expires"), " ", row_r2.itp.dateStr);
  }
}
function OverviewComponent_Conditional_65_For_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 34)(1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "ion-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 6, "overview.deadlines.rov"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("badge-days " + ctx_r2.docUrgencyClass(row_r2.rov.days));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", row_r2.rov.days, "d");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 8, "overview.deadlines.expires"), " ", row_r2.rov.dateStr);
  }
}
function OverviewComponent_Conditional_65_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "overview.deadlines.noDocs"));
  }
}
function OverviewComponent_Conditional_65_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function OverviewComponent_Conditional_65_For_1_Template_div_click_0_listener() {
      const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.navigateToCarDetails(row_r2.car));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "imageUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 30)(4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](9, OverviewComponent_Conditional_65_For_1_Conditional_9_Template, 10, 10, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](10, OverviewComponent_Conditional_65_For_1_Conditional_10_Template, 10, 10, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](11, OverviewComponent_Conditional_65_For_1_Conditional_11_Template, 10, 10, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](12, OverviewComponent_Conditional_65_For_1_Conditional_12_Template, 3, 3, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 9, row_r2.car.photos[0] == null ? null : row_r2.car.photos[0].url), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", row_r2.car.make);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", row_r2.car.make, " ", row_r2.car.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r2.car.license_plate);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](row_r2.rca ? 9 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](row_r2.itp ? 10 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](row_r2.rov ? 11 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](!row_r2.rca && !row_r2.itp && !row_r2.rov ? 12 : -1);
  }
}
function OverviewComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeaterCreate"](0, OverviewComponent_Conditional_65_For_1_Template, 14, 11, "div", 27, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "async");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 0, ctx_r2.deadlines$));
  }
}
function OverviewComponent_For_76_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ion-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 2, "overview.deadlines.rca"), " ", row_r5.rca.days, "d");
  }
}
function OverviewComponent_For_76_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ion-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 2, "overview.deadlines.itp"), " ", row_r5.itp.days, "d");
  }
}
function OverviewComponent_For_76_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ion-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 2, "overview.deadlines.rov"), " ", row_r5.rov.days, "d");
  }
}
function OverviewComponent_For_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function OverviewComponent_For_76_Template_div_click_0_listener() {
      const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.navigateToCarDetails(row_r5.car));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "imageUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 46)(4, "div", 47)(5, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](10, OverviewComponent_For_76_Conditional_10_Template, 4, 4, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](11, OverviewComponent_For_76_Conditional_11_Template, 4, 4, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](12, OverviewComponent_For_76_Conditional_12_Template, 4, 4, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 8, row_r5.car.photos[0] == null ? null : row_r5.car.photos[0].url), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", row_r5.car.make);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", row_r5.car.make, " ", row_r5.car.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r5.car.license_plate);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](row_r5.rca ? 10 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](row_r5.itp ? 11 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](row_r5.rov ? 12 : -1);
  }
}
function OverviewComponent_Conditional_86_For_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "transloco");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 1, "overview.expiring.expired"), " ");
  }
}
function OverviewComponent_Conditional_86_For_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r7.days, "d ");
  }
}
function OverviewComponent_Conditional_86_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function OverviewComponent_Conditional_86_For_1_Template_div_click_0_listener() {
      const row_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.navigateToCarDetails(row_r7.car));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "ion-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 56)(4, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 59)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](10, OverviewComponent_Conditional_86_For_1_Conditional_10_Template, 2, 3)(11, OverviewComponent_Conditional_86_For_1_Conditional_11_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("exp-" + ctx_r2.docUrgencyClass(row_r7.days));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r2.icons.document);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r7.docType);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate3"]("", row_r7.car.make, " ", row_r7.car.model, " \u00B7 ", row_r7.car.license_plate);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("activity-date " + ctx_r2.docUrgencyClass(row_r7.days));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](row_r7.days < 0 ? 10 : 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r7.dateStr);
  }
}
function OverviewComponent_Conditional_86_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "ion-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r2.icons.checkCircle);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 2, "overview.expiring.empty"));
  }
}
function OverviewComponent_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeaterCreate"](0, OverviewComponent_Conditional_86_For_1_Template, 14, 11, "div", 52, _forTrack2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](2, OverviewComponent_Conditional_86_Conditional_2_Template, 5, 4, "div", 53);
  }
  if (rf & 2) {
    const rows_r8 = ctx;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeater"](rows_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](!rows_r8.length ? 2 : -1);
  }
}
function OverviewComponent_For_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function OverviewComponent_For_94_Template_button_click_0_listener() {
      const qa_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r9).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](qa_r10.action());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "ion-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 63)(4, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const qa_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", qa_r10.iconSrc);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 3, qa_r10.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 5, qa_r10.subtitle));
  }
}
const ICON_BASE = 'assets/icons';
class OverviewComponent {
  constructor(_carListFacade, _router) {
    this._carListFacade = _carListFacade;
    this._router = _router;
    this.carList$ = this._carListFacade.carList$;
    this.loading$ = this._carListFacade.loading$;
    this._docsMap$ = this._carListFacade.carDocumentsMap$;
    this.deadlines$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.carList$, this._docsMap$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(([cars, docsMap]) => cars.map(c => this._buildDeadlineRow(c, docsMap[c.id] ?? []))));
    this.docsExpiringSoon$ = this._docsMap$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(docsMap => {
      const now = Date.now();
      const in30 = now + 30 * 86400000;
      return Object.values(docsMap).flatMap(docs => docs ?? []).filter(d => {
        if (!d.expiry_date) return false;
        const exp = new Date(d.expiry_date).getTime();
        return exp > now && exp <= in30;
      }).length;
    }));
    this.upcomingService$ = this._docsMap$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(docsMap => {
      const now = Date.now();
      const in30 = now + 30 * 86400000;
      return Object.values(docsMap).flatMap(docs => docs ?? []).filter(d => {
        if (!d.expiry_date) return false;
        if (!['ITP', 'ROV'].includes(d.document_type)) return false;
        const exp = new Date(d.expiry_date).getTime();
        return exp > now && exp <= in30;
      }).length;
    }));
    this.alerts$ = this._docsMap$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(docsMap => {
      const in7 = Date.now() + 7 * 86400000;
      return Object.values(docsMap).flatMap(docs => docs ?? []).filter(d => {
        if (!d.expiry_date) return false;
        return new Date(d.expiry_date).getTime() <= in7;
      }).length;
    }));
    this.expiringDocs$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.carList$, this._docsMap$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(([cars, docsMap]) => {
      const rows = [];
      for (const c of cars) {
        for (const doc of docsMap[c.id] ?? []) {
          if (!doc.expiry_date) continue;
          const days = (0,_hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_3__.daysUntil)(doc.expiry_date);
          if (days === null) continue;
          rows.push({
            car: c,
            docType: doc.document_type,
            days,
            dateStr: (0,_hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_3__.formatDate)(doc.expiry_date)
          });
        }
      }
      return rows.sort((a, b) => a.days - b.days).slice(0, 5);
    }));
    this.icons = {
      car: `${ICON_BASE}/hau-car.svg`,
      document: `${ICON_BASE}/hau-document.svg`,
      wrench: `${ICON_BASE}/hau-wrench.svg`,
      warning: `${ICON_BASE}/hau-warning.svg`,
      add: `${ICON_BASE}/hau-add.svg`,
      speedometer: `${ICON_BASE}/hau-speedometer.svg`,
      checkCircle: `${ICON_BASE}/hau-check-circle.svg`
    };
    (0,ionicons__WEBPACK_IMPORTED_MODULE_6__.a)({
      shield: ionicons_icons__WEBPACK_IMPORTED_MODULE_7__.shield,
      construct: ionicons_icons__WEBPACK_IMPORTED_MODULE_7__.construct,
      car: ionicons_icons__WEBPACK_IMPORTED_MODULE_7__.car,
      chevronForward: ionicons_icons__WEBPACK_IMPORTED_MODULE_7__.chevronForward
    });
    this.quickActions = [{
      iconSrc: `${ICON_BASE}/hau-add.svg`,
      title: 'overview.actions.addVehicle',
      subtitle: 'overview.actions.addVehicleSub',
      action: () => this.navigateToAddCar()
    }, {
      iconSrc: `${ICON_BASE}/hau-document.svg`,
      title: 'overview.actions.uploadDoc',
      subtitle: 'overview.actions.uploadDocSub',
      action: () => this.navigateToGarage()
    }, {
      iconSrc: `${ICON_BASE}/hau-wrench.svg`,
      title: 'overview.actions.logMaintenance',
      subtitle: 'overview.actions.logMaintenanceSub',
      action: () => this.navigateToGarage()
    }, {
      iconSrc: `${ICON_BASE}/hau-speedometer.svg`,
      title: 'overview.actions.checkDeadlines',
      subtitle: 'overview.actions.checkDeadlinesSub',
      action: () => this.navigateToGarage()
    }];
  }
  ngOnInit() {
    this._carListFacade.loadCarList();
  }
  navigateToCarDetails(c) {
    void this._router.navigate([`${_hau_features_cars_cars_routes_const__WEBPACK_IMPORTED_MODULE_2__.CARS_ROUTES.details.fullPath}/${c.id}`]);
  }
  navigateToAddCar() {
    void this._router.navigate([_hau_features_cars_cars_routes_const__WEBPACK_IMPORTED_MODULE_2__.CARS_ROUTES.create.fullPath]);
  }
  navigateToGarage() {
    void this._router.navigate([_hau_app_routes_const__WEBPACK_IMPORTED_MODULE_1__.HAU_ROUTES.cars.fullPath]);
  }
  docUrgencyClass(days) {
    if (days < 0) return 'expired';
    if (days <= 7) return 'critical';
    if (days <= 14) return 'warning';
    return 'ok';
  }
  _buildDeadlineRow(c, docs) {
    return {
      car: c,
      rca: this._docInfo(docs, 'RCA'),
      itp: this._docInfo(docs, 'ITP'),
      rov: this._docInfo(docs, 'ROV')
    };
  }
  _docInfo(docs, type) {
    const expiry = (0,_hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_3__.getDocExpiry)(docs, type);
    if (!expiry) return null;
    const days = (0,_hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_3__.daysUntil)(expiry);
    if (days === null) return null;
    return {
      days,
      dateStr: (0,_hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_3__.formatDate)(expiry)
    };
  }
  static {
    this.ɵfac = function OverviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_hau_features_cars_state_car_list_car_list_facade__WEBPACK_IMPORTED_MODULE_13__.CarListFacade), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: OverviewComponent,
      selectors: [["app-overview"]],
      decls: 95,
      vars: 69,
      consts: [[1, "overview-page"], [1, "ov-inner"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon-wrap", "stat--vehicles"], [3, "src"], [1, "stat-body"], [1, "stat-label"], [1, "stat-value"], [1, "stat-sub"], [1, "stat-icon-wrap", "stat--docs"], [1, "stat-icon-wrap", "stat--service"], [1, "stat-icon-wrap", "stat--alerts"], [1, "ov-card", "deadlines-section"], [1, "ov-card-header"], [1, "ov-section-title"], [1, "view-all-btn", 3, "click"], [1, "bottom-grid"], [1, "ov-card", "garage-snapshot"], [1, "snapshot-row"], [1, "ov-card", "expiring-docs"], [1, "ov-card", "quick-actions"], [1, "qa-row"], [1, "deadline-row", "skeleton-row"], [1, "sk-thumb", 3, "animated"], [1, "sk-name", 3, "animated"], [1, "sk-badges", 3, "animated"], [1, "deadline-row"], [1, "deadline-row", 3, "click"], [1, "deadline-thumb", 3, "src", "alt"], [1, "deadline-car-info"], [1, "car-name"], [1, "car-plate"], [1, "deadline-badges"], [1, "badge-group"], [1, "no-docs-hint"], ["name", "chevron-forward", 1, "row-chevron"], [1, "doc-chip", "rca"], ["name", "shield"], [1, "badge-date"], [1, "doc-chip", "itp"], ["name", "construct"], [1, "doc-chip", "rov"], ["name", "car"], [1, "snapshot-row", 3, "click"], [1, "snapshot-thumb", 3, "src", "alt"], [1, "snapshot-info"], [1, "snapshot-top"], [1, "snapshot-chips"], [1, "chip-sm", "rca"], [1, "chip-sm", "itp"], [1, "chip-sm", "rov"], [1, "activity-row", "exp-row"], [1, "exp-empty"], [1, "activity-row", "exp-row", 3, "click"], [1, "activity-icon-wrap"], [1, "activity-info"], [1, "activity-desc"], [1, "activity-car"], [1, "activity-time"], [1, "activity-clock"], [1, "qa-row", 3, "click"], [1, "qa-icon-wrap"], [1, "qa-info"], [1, "qa-title"], [1, "qa-sub"]],
      template: function OverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-content", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "ion-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 6)(7, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](15, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 3)(17, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "ion-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "div", 6)(20, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](22, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](25, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](28, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "div", 3)(30, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](31, "ion-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 6)(33, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](35, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](38, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](41, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "div", 3)(43, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](44, "ion-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "div", 6)(46, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](48, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](51, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](54, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "section", 13)(56, "div", 14)(57, "h2", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](58);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](59, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function OverviewComponent_Template_button_click_60_listener() {
            return ctx.navigateToGarage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](61);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](62, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](63, OverviewComponent_Conditional_63_Template, 2, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](64, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalBranchCreate"](65, OverviewComponent_Conditional_65_Template, 3, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "div", 17)(67, "section", 18)(68, "div", 14)(69, "h2", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](70);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](71, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function OverviewComponent_Template_button_click_72_listener() {
            return ctx.navigateToGarage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](73);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](74, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeaterCreate"](75, OverviewComponent_For_76_Template, 14, 10, "div", 19, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](77, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](78, "section", 20)(79, "div", 14)(80, "h2", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](81);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](82, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](83, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function OverviewComponent_Template_button_click_83_listener() {
            return ctx.navigateToGarage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](84);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](85, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](86, OverviewComponent_Conditional_86_Template, 3, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](87, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](88, "section", 21)(89, "div", 14)(90, "h2", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](91);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](92, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeaterCreate"](93, OverviewComponent_For_94_Template, 11, 7, "button", 22, _forTrack1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          let tmp_2_0;
          let tmp_24_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx.icons.car);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 25, "overview.stats.vehicles"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 27, ctx.carList$)) == null ? null : tmp_2_0.length) ?? 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](15, 29, "overview.stats.vehiclesSub"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx.icons.document);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](22, 31, "overview.stats.docsExpiring"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](25, 33, ctx.docsExpiringSoon$));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](28, 35, "overview.stats.docsExpiringSub"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx.icons.wrench);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](35, 37, "overview.stats.upcomingService"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](38, 39, ctx.upcomingService$));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](41, 41, "overview.stats.upcomingServiceSub"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx.icons.warning);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](48, 43, "overview.stats.alerts"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](51, 45, ctx.alerts$));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](54, 47, "overview.stats.alertsSub"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](59, 49, "overview.deadlines.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](62, 51, "overview.viewAll"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](64, 53, ctx.loading$) ? 63 : 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](71, 55, "overview.garage.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](74, 57, "overview.viewAll"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](77, 59, ctx.deadlines$));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](82, 61, "overview.expiring.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](85, 63, "overview.viewAll"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"]((tmp_24_0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](87, 65, ctx.expiringDocs$)) ? 86 : -1, tmp_24_0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](92, 67, "overview.actions.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeater"](ctx.quickActions);
        }
      },
      dependencies: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonSkeletonText, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe, _ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__.TranslocoPipe, _hau_shared_pipes_image_url_pipe__WEBPACK_IMPORTED_MODULE_4__.ImageUrlPipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  --ov-bg: var(--hau-bg);\n  --ov-card-bg: var(--hau-surface);\n  --ov-border: var(--hau-border);\n  --ov-text: var(--hau-text);\n  --ov-muted: var(--hau-text-muted);\n  --ov-dim: var(--hau-text-dim);\n  --ov-accent: var(--hau-primary);\n  --ov-accent-light: var(--hau-primary-soft);\n  --ov-shadow-sm: var(--hau-shadow-soft);\n  --ov-shadow-md: var(--hau-shadow-md);\n  --ov-r-sm: var(--hau-radius-sm);\n  --ov-r-md: var(--hau-radius-md);\n  --ov-r-lg: var(--hau-radius-lg);\n  --ov-r-xl: var(--hau-radius-xl);\n  --ov-vehicles-bg: var(--hau-primary-soft);\n  --ov-vehicles-fg: var(--hau-primary);\n  --ov-docs-bg: rgba(249, 115, 22, 0.12);\n  --ov-docs-fg: #ea580c;\n  --ov-service-bg: var(--hau-success-soft);\n  --ov-service-fg: var(--hau-success-fg);\n  --ov-alerts-bg: var(--hau-danger-soft);\n  --ov-alerts-fg: var(--hau-danger-fg);\n  --ov-rca-bg: rgba(100, 116, 139, 0.12);\n  --ov-rca-fg: #475569;\n  --ov-itp-bg: rgba(100, 116, 139, 0.10);\n  --ov-itp-fg: #475569;\n  --ov-rov-bg: var(--hau-success-soft);\n  --ov-rov-fg: var(--hau-success-fg);\n  --ov-oil-bg: var(--hau-primary-soft);\n  --ov-oil-fg: var(--hau-primary);\n}\n\n.overview-page[_ngcontent-%COMP%] {\n  --background: var(--ov-bg);\n}\n\n.ov-inner[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 20px 16px 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n@media (min-width: 768px) {\n  .ov-inner[_ngcontent-%COMP%] {\n    padding: 28px 24px 48px;\n    gap: 24px;\n  }\n}\n@media (min-width: 1024px) {\n  .ov-inner[_ngcontent-%COMP%] {\n    padding: 32px 32px 56px;\n    gap: 28px;\n  }\n}\n\n.ov-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.ov-title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: var(--ov-text);\n  margin: 0;\n  line-height: 1.2;\n}\n@media (min-width: 768px) {\n  .ov-title[_ngcontent-%COMP%] {\n    font-size: 1.9rem;\n  }\n}\n@media (min-width: 1024px) {\n  .ov-title[_ngcontent-%COMP%] {\n    font-size: 2.1rem;\n  }\n}\n\n.ov-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--ov-muted);\n  margin: 0;\n}\n@media (min-width: 768px) {\n  .ov-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n@media (min-width: 1024px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n    gap: 16px;\n  }\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--ov-card-bg);\n  border-radius: var(--ov-r-lg);\n  box-shadow: var(--ov-shadow-sm);\n  padding: 18px 16px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n@media (min-width: 768px) {\n  .stat-card[_ngcontent-%COMP%] {\n    padding: 20px 18px;\n    gap: 16px;\n  }\n}\n@media (min-width: 1024px) {\n  .stat-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 22px 20px;\n    gap: 12px;\n  }\n}\n\n.stat-icon-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 44px;\n  height: 44px;\n  border-radius: var(--ov-r-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-icon-wrap[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n}\n.stat-icon-wrap.stat--vehicles[_ngcontent-%COMP%] {\n  background: var(--ov-vehicles-bg);\n}\n.stat-icon-wrap.stat--vehicles[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ov-vehicles-fg);\n}\n.stat-icon-wrap.stat--docs[_ngcontent-%COMP%] {\n  background: var(--ov-docs-bg);\n}\n.stat-icon-wrap.stat--docs[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ov-docs-fg);\n}\n.stat-icon-wrap.stat--service[_ngcontent-%COMP%] {\n  background: var(--ov-service-bg);\n}\n.stat-icon-wrap.stat--service[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ov-service-fg);\n}\n.stat-icon-wrap.stat--alerts[_ngcontent-%COMP%] {\n  background: var(--ov-alerts-bg);\n}\n.stat-icon-wrap.stat--alerts[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ov-alerts-fg);\n}\n@media (min-width: 768px) {\n  .stat-icon-wrap[_ngcontent-%COMP%] {\n    width: 48px;\n    height: 48px;\n  }\n}\n\n.stat-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--ov-muted);\n  font-weight: 500;\n  line-height: 1.3;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n@media (min-width: 768px) {\n  .stat-label[_ngcontent-%COMP%] {\n    font-size: 0.82rem;\n  }\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  font-weight: 800;\n  color: var(--ov-text);\n  line-height: 1.1;\n}\n@media (min-width: 768px) {\n  .stat-value[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n@media (min-width: 1024px) {\n  .stat-value[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n}\n\n.stat-sub[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: var(--ov-dim);\n}\n@media (min-width: 768px) {\n  .stat-sub[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}\n\n.ov-card[_ngcontent-%COMP%] {\n  background: var(--ov-card-bg);\n  border-radius: var(--ov-r-xl);\n  box-shadow: var(--ov-shadow-sm);\n  overflow: hidden;\n}\n\n.ov-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px 12px;\n}\n@media (min-width: 768px) {\n  .ov-card-header[_ngcontent-%COMP%] {\n    padding: 20px 22px 14px;\n  }\n}\n\n.ov-section-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--ov-text);\n  margin: 0;\n}\n@media (min-width: 768px) {\n  .ov-section-title[_ngcontent-%COMP%] {\n    font-size: 1.05rem;\n  }\n}\n\n.view-all-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: var(--ov-accent);\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.view-all-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n\n.row-chevron[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 1rem;\n  color: var(--ov-dim);\n}\n\n.deadlines-section[_ngcontent-%COMP%]   .ov-card-header[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n\n.deadline-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 20px;\n  cursor: pointer;\n  transition: background 0.16s;\n  border-top: 1px solid var(--ov-border);\n}\n.deadline-row[_ngcontent-%COMP%]:hover {\n  background: var(--hau-hover-bg);\n}\n@media (min-width: 768px) {\n  .deadline-row[_ngcontent-%COMP%] {\n    gap: 16px;\n    padding: 14px 22px;\n  }\n}\n\n.deadline-thumb[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 52px;\n  height: 40px;\n  border-radius: var(--ov-r-sm);\n  object-fit: cover;\n}\n@media (min-width: 768px) {\n  .deadline-thumb[_ngcontent-%COMP%] {\n    width: 64px;\n    height: 48px;\n  }\n}\n\n.deadline-car-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 90px;\n  flex-shrink: 0;\n}\n@media (min-width: 768px) {\n  .deadline-car-info[_ngcontent-%COMP%] {\n    min-width: 110px;\n  }\n}\n\n.car-name[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: var(--ov-text);\n  white-space: nowrap;\n}\n@media (min-width: 768px) {\n  .car-name[_ngcontent-%COMP%] {\n    font-size: 0.92rem;\n  }\n}\n\n.car-plate[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--ov-muted);\n  font-weight: 500;\n}\n\n.deadline-badges[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  overflow-x: auto;\n  padding-bottom: 2px;\n  scrollbar-width: none;\n}\n.deadline-badges[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n@media (min-width: 768px) {\n  .deadline-badges[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n}\n@media (min-width: 1024px) {\n  .deadline-badges[_ngcontent-%COMP%] {\n    gap: 24px;\n    justify-content: flex-start;\n  }\n}\n\n.badge-group[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  align-items: flex-start;\n}\n\n.doc-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 8px;\n  border-radius: var(--ov-r-sm);\n  font-size: 0.72rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.doc-chip[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.doc-chip.rca[_ngcontent-%COMP%] {\n  background: var(--ov-rca-bg);\n  color: var(--ov-rca-fg);\n}\n.doc-chip.itp[_ngcontent-%COMP%] {\n  background: var(--ov-itp-bg);\n  color: var(--ov-itp-fg);\n}\n.doc-chip.rov[_ngcontent-%COMP%] {\n  background: var(--ov-rov-bg);\n  color: var(--ov-rov-fg);\n}\n.doc-chip.oil[_ngcontent-%COMP%] {\n  background: var(--ov-oil-bg);\n  color: var(--ov-oil-fg);\n}\n\n.badge-days[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 800;\n  color: var(--ov-text);\n  line-height: 1.2;\n}\n.badge-days.expired[_ngcontent-%COMP%], .badge-days.critical[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.badge-days.warning[_ngcontent-%COMP%] {\n  color: #ea580c;\n}\n.badge-days.ok[_ngcontent-%COMP%] {\n  color: var(--ov-text);\n}\n\n.badge-date[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--ov-muted);\n  white-space: nowrap;\n}\n\n.no-docs-hint[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--ov-dim);\n  font-style: italic;\n}\n\n.skeleton-row[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.skeleton-row[_ngcontent-%COMP%]:hover {\n  background: transparent;\n}\n\nion-skeleton-text[_ngcontent-%COMP%] {\n  border-radius: var(--ov-r-sm);\n}\n\n.sk-thumb[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 40px;\n  flex-shrink: 0;\n}\n\n.sk-name[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 36px;\n  flex-shrink: 0;\n}\n\n.sk-badges[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 36px;\n}\n\n.bottom-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n}\n@media (min-width: 768px) {\n  .bottom-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 16px;\n    align-items: start;\n  }\n}\n@media (min-width: 1024px) {\n  .bottom-grid[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n}\n\n.snapshot-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px 20px;\n  border-top: 1px solid var(--ov-border);\n  cursor: pointer;\n  transition: background 0.16s;\n}\n.snapshot-row[_ngcontent-%COMP%]:hover {\n  background: var(--hau-hover-bg);\n}\n@media (min-width: 768px) {\n  .snapshot-row[_ngcontent-%COMP%] {\n    padding: 12px 22px;\n  }\n}\n\n.snapshot-thumb[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 52px;\n  height: 40px;\n  border-radius: var(--ov-r-sm);\n  object-fit: cover;\n  margin-top: 2px;\n}\n\n.snapshot-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.snapshot-top[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n\n.snapshot-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n\n.chip-sm[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  padding: 2px 7px;\n  border-radius: var(--ov-r-sm);\n  font-size: 0.7rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.chip-sm[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n}\n.chip-sm.rca[_ngcontent-%COMP%] {\n  background: var(--ov-rca-bg);\n  color: var(--ov-rca-fg);\n}\n.chip-sm.itp[_ngcontent-%COMP%] {\n  background: var(--ov-itp-bg);\n  color: var(--ov-itp-fg);\n}\n.chip-sm.rov[_ngcontent-%COMP%] {\n  background: var(--ov-rov-bg);\n  color: var(--ov-rov-fg);\n}\n\n.snapshot-oil[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.78rem;\n  color: var(--ov-muted);\n}\n.snapshot-oil[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--ov-oil-fg);\n  flex-shrink: 0;\n}\n.snapshot-oil[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--ov-text);\n}\n\n.activity-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px 20px;\n  border-top: 1px solid var(--ov-border);\n}\n@media (min-width: 768px) {\n  .activity-row[_ngcontent-%COMP%] {\n    padding: 12px 22px;\n  }\n}\n\n.activity-icon-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 1px;\n}\n.activity-icon-wrap[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.activity-icon-wrap.act-blue[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.12);\n}\n.activity-icon-wrap.act-blue[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.activity-icon-wrap.act-green[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n}\n.activity-icon-wrap.act-green[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.activity-icon-wrap.act-orange[_ngcontent-%COMP%] {\n  background: rgba(249, 115, 22, 0.12);\n}\n.activity-icon-wrap.act-orange[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #ea580c;\n}\n.activity-icon-wrap.exp-expired[_ngcontent-%COMP%], .activity-icon-wrap.exp-critical[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n}\n.activity-icon-wrap.exp-expired[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], .activity-icon-wrap.exp-critical[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.activity-icon-wrap.exp-warning[_ngcontent-%COMP%] {\n  background: rgba(249, 115, 22, 0.12);\n}\n.activity-icon-wrap.exp-warning[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #ea580c;\n}\n.activity-icon-wrap.exp-ok[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n}\n.activity-icon-wrap.exp-ok[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n\n.activity-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.activity-desc[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: var(--ov-text);\n  line-height: 1.35;\n}\n\n.activity-car[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: var(--ov-muted);\n}\n\n.activity-time[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n}\n\n.activity-date[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 600;\n  color: var(--ov-muted);\n  white-space: nowrap;\n}\n\n.activity-clock[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--ov-dim);\n  white-space: nowrap;\n}\n\n.activity-date.expired[_ngcontent-%COMP%], .activity-date.critical[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 700;\n}\n.activity-date.warning[_ngcontent-%COMP%] {\n  color: #ea580c;\n  font-weight: 700;\n}\n.activity-date.ok[_ngcontent-%COMP%] {\n  color: var(--ov-muted);\n}\n\n.exp-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 0.16s;\n}\n.exp-row[_ngcontent-%COMP%]:hover {\n  background: var(--hau-hover-bg);\n}\n\n.exp-empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 20px;\n  border-top: 1px solid var(--ov-border);\n  font-size: 0.84rem;\n  color: var(--ov-muted);\n}\n.exp-empty[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--hau-success-fg);\n  flex-shrink: 0;\n}\n\n.qa-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--ov-border);\n  width: 100%;\n  background: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: none;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.16s;\n}\n.qa-row[_ngcontent-%COMP%]:hover {\n  background: var(--hau-hover-bg);\n}\n.qa-row[_ngcontent-%COMP%]:first-of-type {\n  border-top: 1px solid var(--ov-border);\n}\n@media (min-width: 768px) {\n  .qa-row[_ngcontent-%COMP%] {\n    padding: 14px 22px;\n  }\n}\n\n.qa-icon-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--ov-accent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);\n}\n.qa-icon-wrap[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #ffffff;\n}\n\n.qa-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.qa-title[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: var(--ov-text);\n}\n\n.qa-sub[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: var(--ov-muted);\n  line-height: 1.35;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxjQUFBO0VBR0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esb0NBQUE7RUFFQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUdBLHlDQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esb0NBQUE7RUFHQSxzQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esc0NBQUE7RUFDQSxvQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLCtCQUFBO0FBVEY7O0FBZUE7RUFDRSwwQkFBQTtBQVpGOztBQWVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBWkY7QUFjRTtFQVJGO0lBU0ksdUJBQUE7SUFDQSxTQUFBO0VBWEY7QUFDRjtBQWFFO0VBYkY7SUFjSSx1QkFBQTtJQUNBLFNBQUE7RUFWRjtBQUNGOztBQWdCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFiRjs7QUFnQkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFiRjtBQWVFO0VBUEY7SUFPOEIsaUJBQUE7RUFYNUI7QUFDRjtBQVdFO0VBUkY7SUFRK0IsaUJBQUE7RUFQN0I7QUFDRjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBTkY7QUFRRTtFQUxGO0lBSzhCLGtCQUFBO0VBSjVCO0FBQ0Y7O0FBU0E7RUFD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ZW50IjpbIi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gRGVzaWduIHRva2VucyAobWlycm9yIG1haW4uY29tcG9uZW50LnNjc3Mgc28gdGhlIHBhZ2UgaXMgc2VsZi1jb250YWluZWQpXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgLy8gTWFwIGxvY2FsIHRva2VucyB0byBnbG9iYWwgSEFVIGRlc2lnbiBzeXN0ZW1cbiAgLS1vdi1iZzogICAgICAgICAgIHZhcigtLWhhdS1iZyk7XG4gIC0tb3YtY2FyZC1iZzogICAgICB2YXIoLS1oYXUtc3VyZmFjZSk7XG4gIC0tb3YtYm9yZGVyOiAgICAgICB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgLS1vdi10ZXh0OiAgICAgICAgIHZhcigtLWhhdS10ZXh0KTtcbiAgLS1vdi1tdXRlZDogICAgICAgIHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbiAgLS1vdi1kaW06ICAgICAgICAgIHZhcigtLWhhdS10ZXh0LWRpbSk7XG4gIC0tb3YtYWNjZW50OiAgICAgICB2YXIoLS1oYXUtcHJpbWFyeSk7XG4gIC0tb3YtYWNjZW50LWxpZ2h0OiB2YXIoLS1oYXUtcHJpbWFyeS1zb2Z0KTtcbiAgLS1vdi1zaGFkb3ctc206ICAgIHZhcigtLWhhdS1zaGFkb3ctc29mdCk7XG4gIC0tb3Ytc2hhZG93LW1kOiAgICB2YXIoLS1oYXUtc2hhZG93LW1kKTtcblxuICAtLW92LXItc206IHZhcigtLWhhdS1yYWRpdXMtc20pO1xuICAtLW92LXItbWQ6IHZhcigtLWhhdS1yYWRpdXMtbWQpO1xuICAtLW92LXItbGc6IHZhcigtLWhhdS1yYWRpdXMtbGcpO1xuICAtLW92LXIteGw6IHZhcigtLWhhdS1yYWRpdXMteGwpO1xuXG4gIC8vIFN0YXQgaWNvbiBwYWxldHRlc1xuICAtLW92LXZlaGljbGVzLWJnOiB2YXIoLS1oYXUtcHJpbWFyeS1zb2Z0KTtcbiAgLS1vdi12ZWhpY2xlcy1mZzogdmFyKC0taGF1LXByaW1hcnkpO1xuICAtLW92LWRvY3MtYmc6ICAgICByZ2JhKDI0OSwgMTE1LCAyMiwgMC4xMik7XG4gIC0tb3YtZG9jcy1mZzogICAgICNlYTU4MGM7XG4gIC0tb3Ytc2VydmljZS1iZzogIHZhcigtLWhhdS1zdWNjZXNzLXNvZnQpO1xuICAtLW92LXNlcnZpY2UtZmc6ICB2YXIoLS1oYXUtc3VjY2Vzcy1mZyk7XG4gIC0tb3YtYWxlcnRzLWJnOiAgIHZhcigtLWhhdS1kYW5nZXItc29mdCk7XG4gIC0tb3YtYWxlcnRzLWZnOiAgIHZhcigtLWhhdS1kYW5nZXItZmcpO1xuXG4gIC8vIERvYyBjaGlwIHBhbGV0dGVzXG4gIC0tb3YtcmNhLWJnOiAgcmdiYSgxMDAsIDExNiwgMTM5LCAwLjEyKTtcbiAgLS1vdi1yY2EtZmc6ICAjNDc1NTY5O1xuICAtLW92LWl0cC1iZzogIHJnYmEoMTAwLCAxMTYsIDEzOSwgMC4xMCk7XG4gIC0tb3YtaXRwLWZnOiAgIzQ3NTU2OTtcbiAgLS1vdi1yb3YtYmc6ICB2YXIoLS1oYXUtc3VjY2Vzcy1zb2Z0KTtcbiAgLS1vdi1yb3YtZmc6ICB2YXIoLS1oYXUtc3VjY2Vzcy1mZyk7XG4gIC0tb3Ytb2lsLWJnOiAgdmFyKC0taGF1LXByaW1hcnktc29mdCk7XG4gIC0tb3Ytb2lsLWZnOiAgdmFyKC0taGF1LXByaW1hcnkpO1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIFBhZ2Ugc2hlbGxcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLm92ZXJ2aWV3LXBhZ2Uge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLW92LWJnKTtcbn1cblxuLm92LWlubmVyIHtcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4IDE2cHggNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmc6IDI4cHggMjRweCA0OHB4O1xuICAgIGdhcDogMjRweDtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICBwYWRkaW5nOiAzMnB4IDMycHggNTZweDtcbiAgICBnYXA6IDI4cHg7XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyBQYWdlIGhlYWRlclxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ub3YtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0cHg7XG59XG5cbi5vdi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogdmFyKC0tb3YtdGV4dCk7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgZm9udC1zaXplOiAxLjlyZW07IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgeyBmb250LXNpemU6IDIuMXJlbTsgfVxufVxuXG4ub3Ytc3VidGl0bGUge1xuICBmb250LXNpemU6IDAuODhyZW07XG4gIGNvbG9yOiB2YXIoLS1vdi1tdXRlZCk7XG4gIG1hcmdpbjogMDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgZm9udC1zaXplOiAwLjk1cmVtOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gU3RhdHMgZ3JpZFxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uc3RhdHMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdhcDogMTJweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICBnYXA6IDE2cHg7XG4gIH1cbn1cblxuLnN0YXQtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW92LWNhcmQtYmcpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1vdi1yLWxnKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tb3Ytc2hhZG93LXNtKTtcbiAgcGFkZGluZzogMThweCAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE0cHg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IHBhZGRpbmc6IDIwcHggMThweDsgZ2FwOiAxNnB4OyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IDIycHggMjBweDtcbiAgICBnYXA6IDEycHg7XG4gIH1cbn1cblxuLnN0YXQtaWNvbi13cmFwIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW92LXItbWQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMS4zNXJlbTsgfVxuXG4gICYuc3RhdC0tdmVoaWNsZXMgeyBiYWNrZ3JvdW5kOiB2YXIoLS1vdi12ZWhpY2xlcy1iZyk7IGlvbi1pY29uIHsgY29sb3I6IHZhcigtLW92LXZlaGljbGVzLWZnKTsgfSB9XG4gICYuc3RhdC0tZG9jcyAgICAgeyBiYWNrZ3JvdW5kOiB2YXIoLS1vdi1kb2NzLWJnKTsgICAgIGlvbi1pY29uIHsgY29sb3I6IHZhcigtLW92LWRvY3MtZmcpOyAgICAgfSB9XG4gICYuc3RhdC0tc2VydmljZSAgeyBiYWNrZ3JvdW5kOiB2YXIoLS1vdi1zZXJ2aWNlLWJnKTsgIGlvbi1pY29uIHsgY29sb3I6IHZhcigtLW92LXNlcnZpY2UtZmcpOyAgfSB9XG4gICYuc3RhdC0tYWxlcnRzICAgeyBiYWNrZ3JvdW5kOiB2YXIoLS1vdi1hbGVydHMtYmcpOyAgIGlvbi1pY29uIHsgY29sb3I6IHZhcigtLW92LWFsZXJ0cy1mZyk7ICAgfSB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IHdpZHRoOiA0OHB4OyBoZWlnaHQ6IDQ4cHg7IH1cbn1cblxuLnN0YXQtYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnB4O1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5zdGF0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBjb2xvcjogdmFyKC0tb3YtbXV0ZWQpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyBmb250LXNpemU6IDAuODJyZW07IH1cbn1cblxuLnN0YXQtdmFsdWUge1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHZhcigtLW92LXRleHQpO1xuICBsaW5lLWhlaWdodDogMS4xO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyBmb250LXNpemU6IDJyZW07IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgeyBmb250LXNpemU6IDIuMnJlbTsgfVxufVxuXG4uc3RhdC1zdWIge1xuICBmb250LXNpemU6IDAuNzZyZW07XG4gIGNvbG9yOiB2YXIoLS1vdi1kaW0pO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyBmb250LXNpemU6IDAuOHJlbTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIFNoYXJlZCBjYXJkICsgaGVhZGVyIGhlbHBlcnNcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLm92LWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1vdi1jYXJkLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tb3Ytci14bCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLW92LXNoYWRvdy1zbSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5vdi1jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMThweCAyMHB4IDEycHg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IHBhZGRpbmc6IDIwcHggMjJweCAxNHB4OyB9XG59XG5cbi5vdi1zZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tb3YtdGV4dCk7XG4gIG1hcmdpbjogMDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgZm9udC1zaXplOiAxLjA1cmVtOyB9XG59XG5cbi52aWV3LWFsbC1idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMC44NHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLW92LWFjY2VudCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cztcblxuICAmOmhvdmVyIHsgb3BhY2l0eTogMC43NTsgfVxufVxuXG4ucm93LWNoZXZyb24ge1xuICBmbGV4LXNocmluazogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogdmFyKC0tb3YtZGltKTtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyBVcGNvbWluZyBkZWFkbGluZXNcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmRlYWRsaW5lcy1zZWN0aW9uIHtcbiAgLm92LWNhcmQtaGVhZGVyIHsgcGFkZGluZy1ib3R0b206IDA7IH1cbn1cblxuLmRlYWRsaW5lLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNnM7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1vdi1ib3JkZXIpO1xuXG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtaG92ZXItYmcpOyB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IGdhcDogMTZweDsgcGFkZGluZzogMTRweCAyMnB4OyB9XG59XG5cbi5kZWFkbGluZS10aHVtYiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogNTJweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1vdi1yLXNtKTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IHdpZHRoOiA2NHB4OyBoZWlnaHQ6IDQ4cHg7IH1cbn1cblxuLmRlYWRsaW5lLWNhci1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycHg7XG4gIG1pbi13aWR0aDogOTBweDtcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IG1pbi13aWR0aDogMTEwcHg7IH1cbn1cblxuLmNhci1uYW1lIHtcbiAgZm9udC1zaXplOiAwLjg4cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tb3YtdGV4dCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IGZvbnQtc2l6ZTogMC45MnJlbTsgfVxufVxuXG4uY2FyLXBsYXRlIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBjb2xvcjogdmFyKC0tb3YtbXV0ZWQpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZGVhZGxpbmUtYmFkZ2VzIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuXG4gIC8vIEhpZGUgc2Nyb2xsYmFyIGJ1dCBrZWVwIGZ1bmN0aW9uYWxpdHlcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7IGRpc3BsYXk6IG5vbmU7IH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgZ2FwOiAxNnB4OyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHsgZ2FwOiAyNHB4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbn1cblxuLmJhZGdlLWdyb3VwIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnB4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmRvYy1jaGlwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1vdi1yLXNtKTtcbiAgZm9udC1zaXplOiAwLjcycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gIGlvbi1pY29uIHsgZm9udC1zaXplOiAwLjc1cmVtOyB9XG5cbiAgJi5yY2EgeyBiYWNrZ3JvdW5kOiB2YXIoLS1vdi1yY2EtYmcpOyBjb2xvcjogdmFyKC0tb3YtcmNhLWZnKTsgfVxuICAmLml0cCB7IGJhY2tncm91bmQ6IHZhcigtLW92LWl0cC1iZyk7IGNvbG9yOiB2YXIoLS1vdi1pdHAtZmcpOyB9XG4gICYucm92IHsgYmFja2dyb3VuZDogdmFyKC0tb3Ytcm92LWJnKTsgY29sb3I6IHZhcigtLW92LXJvdi1mZyk7IH1cbiAgJi5vaWwgeyBiYWNrZ3JvdW5kOiB2YXIoLS1vdi1vaWwtYmcpOyBjb2xvcjogdmFyKC0tb3Ytb2lsLWZnKTsgfVxufVxuXG4uYmFkZ2UtZGF5cyB7XG4gIGZvbnQtc2l6ZTogMC44NHJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHZhcigtLW92LXRleHQpO1xuICBsaW5lLWhlaWdodDogMS4yO1xuXG4gICYuZXhwaXJlZCwgJi5jcml0aWNhbCB7IGNvbG9yOiAjZGMyNjI2OyB9XG4gICYud2FybmluZyAgICAgICAgICAgICAgeyBjb2xvcjogI2VhNTgwYzsgfVxuICAmLm9rICAgICAgICAgICAgICAgICAgIHsgY29sb3I6IHZhcigtLW92LXRleHQpOyB9XG59XG5cbi5iYWRnZS1kYXRlIHtcbiAgZm9udC1zaXplOiAwLjcycmVtO1xuICBjb2xvcjogdmFyKC0tb3YtbXV0ZWQpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ubm8tZG9jcy1oaW50IHtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBjb2xvcjogdmFyKC0tb3YtZGltKTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vLyBTa2VsZXRvbiByb3dzXG4uc2tlbGV0b24tcm93IHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbn1cblxuaW9uLXNrZWxldG9uLXRleHQge1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1vdi1yLXNtKTtcbn1cblxuLnNrLXRodW1iICB7IHdpZHRoOiA1MnB4OyBoZWlnaHQ6IDQwcHg7IGZsZXgtc2hyaW5rOiAwOyB9XG4uc2stbmFtZSAgIHsgd2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDM2cHg7IGZsZXgtc2hyaW5rOiAwOyB9XG4uc2stYmFkZ2VzIHsgZmxleDogMTsgaGVpZ2h0OiAzNnB4OyB9XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gQm90dG9tIDMtY29sdW1uIGdyaWRcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmJvdHRvbS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdhcDogMjBweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdhcDogMTZweDtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gR2FyYWdlIHNuYXBzaG90XG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5zbmFwc2hvdC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1vdi1ib3JkZXIpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNnM7XG5cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWhhdS1ob3Zlci1iZyk7IH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgcGFkZGluZzogMTJweCAyMnB4OyB9XG59XG5cbi5zbmFwc2hvdC10aHVtYiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogNTJweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1vdi1yLXNtKTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLnNuYXBzaG90LWluZm8ge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNnB4O1xufVxuXG4uc25hcHNob3QtdG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcHg7XG59XG5cbi5zbmFwc2hvdC1jaGlwcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA1cHg7XG59XG5cbi5jaGlwLXNtIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogM3B4O1xuICBwYWRkaW5nOiAycHggN3B4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1vdi1yLXNtKTtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgaW9uLWljb24geyBmb250LXNpemU6IDAuNjhyZW07IH1cblxuICAmLnJjYSB7IGJhY2tncm91bmQ6IHZhcigtLW92LXJjYS1iZyk7IGNvbG9yOiB2YXIoLS1vdi1yY2EtZmcpOyB9XG4gICYuaXRwIHsgYmFja2dyb3VuZDogdmFyKC0tb3YtaXRwLWJnKTsgY29sb3I6IHZhcigtLW92LWl0cC1mZyk7IH1cbiAgJi5yb3YgeyBiYWNrZ3JvdW5kOiB2YXIoLS1vdi1yb3YtYmcpOyBjb2xvcjogdmFyKC0tb3Ytcm92LWZnKTsgfVxufVxuXG4uc25hcHNob3Qtb2lsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgY29sb3I6IHZhcigtLW92LW11dGVkKTtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAwLjgycmVtO1xuICAgIGNvbG9yOiB2YXIoLS1vdi1vaWwtZmcpO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICB9XG5cbiAgc3Ryb25nIHsgY29sb3I6IHZhcigtLW92LXRleHQpOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gUmVjZW50IGFjdGl2aXR5XG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5hY3Rpdml0eS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1vdi1ib3JkZXIpO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyBwYWRkaW5nOiAxMnB4IDIycHg7IH1cbn1cblxuLmFjdGl2aXR5LWljb24td3JhcCB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxcHg7XG5cbiAgaW9uLWljb24geyBmb250LXNpemU6IDFyZW07IH1cblxuICAmLmFjdC1ibHVlICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDM3LCA5OSwgMjM1LCAwLjEyKTsgIGlvbi1pY29uIHsgY29sb3I6ICMyNTYzZWI7IH0gfVxuICAmLmFjdC1ncmVlbiAgeyBiYWNrZ3JvdW5kOiByZ2JhKDM0LCAxOTcsIDk0LCAwLjEyKTsgIGlvbi1pY29uIHsgY29sb3I6ICMxNmEzNGE7IH0gfVxuICAmLmFjdC1vcmFuZ2UgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMTE1LCAyMiwgMC4xMik7IGlvbi1pY29uIHsgY29sb3I6ICNlYTU4MGM7IH0gfVxuXG4gICYuZXhwLWV4cGlyZWQsXG4gICYuZXhwLWNyaXRpY2FsIHsgYmFja2dyb3VuZDogcmdiYSgyMzksIDY4LCA2OCwgMC4xMik7ICBpb24taWNvbiB7IGNvbG9yOiAjZGMyNjI2OyB9IH1cbiAgJi5leHAtd2FybmluZyAgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMTE1LCAyMiwgMC4xMik7IGlvbi1pY29uIHsgY29sb3I6ICNlYTU4MGM7IH0gfVxuICAmLmV4cC1vayAgICAgICB7IGJhY2tncm91bmQ6IHJnYmEoMzQsIDE5NywgOTQsIDAuMTIpOyAgaW9uLWljb24geyBjb2xvcjogIzE2YTM0YTsgfSB9XG59XG5cbi5hY3Rpdml0eS1pbmZvIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJweDtcbn1cblxuLmFjdGl2aXR5LWRlc2Mge1xuICBmb250LXNpemU6IDAuODRyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1vdi10ZXh0KTtcbiAgbGluZS1oZWlnaHQ6IDEuMzU7XG59XG5cbi5hY3Rpdml0eS1jYXIge1xuICBmb250LXNpemU6IDAuNzZyZW07XG4gIGNvbG9yOiB2YXIoLS1vdi1tdXRlZCk7XG59XG5cbi5hY3Rpdml0eS10aW1lIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZ2FwOiAycHg7XG59XG5cbi5hY3Rpdml0eS1kYXRlIHtcbiAgZm9udC1zaXplOiAwLjc2cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tb3YtbXV0ZWQpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYWN0aXZpdHktY2xvY2sge1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGNvbG9yOiB2YXIoLS1vdi1kaW0pO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYWN0aXZpdHktZGF0ZSB7XG4gICYuZXhwaXJlZCwgJi5jcml0aWNhbCB7IGNvbG9yOiAjZGMyNjI2OyBmb250LXdlaWdodDogNzAwOyB9XG4gICYud2FybmluZyAgICAgICAgICAgICAgeyBjb2xvcjogI2VhNTgwYzsgZm9udC13ZWlnaHQ6IDcwMDsgfVxuICAmLm9rICAgICAgICAgICAgICAgICAgIHsgY29sb3I6IHZhcigtLW92LW11dGVkKTsgfVxufVxuXG4uZXhwLXJvdyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE2cztcbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWhhdS1ob3Zlci1iZyk7IH1cbn1cblxuLmV4cC1lbXB0eSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLW92LWJvcmRlcik7XG4gIGZvbnQtc2l6ZTogMC44NHJlbTtcbiAgY29sb3I6IHZhcigtLW92LW11dGVkKTtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgY29sb3I6IHZhcigtLWhhdS1zdWNjZXNzLWZnKTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIFF1aWNrIGFjdGlvbnNcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnFhLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTRweDtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tb3YtYm9yZGVyKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE2cztcblxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0taGF1LWhvdmVyLWJnKTsgfVxuICAmOmZpcnN0LW9mLXR5cGUgeyBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tb3YtYm9yZGVyKTsgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyBwYWRkaW5nOiAxNHB4IDIycHg7IH1cbn1cblxuLnFhLWljb24td3JhcCB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLW92LWFjY2VudCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMzcsIDk5LCAyMzUsIDAuMjUpO1xuXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuXG4ucWEtaW5mbyB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycHg7XG59XG5cbi5xYS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLW92LXRleHQpO1xufVxuXG4ucWEtc3ViIHtcbiAgZm9udC1zaXplOiAwLjc2cmVtO1xuICBjb2xvcjogdmFyKC0tb3YtbXV0ZWQpO1xuICBsaW5lLWhlaWdodDogMS4zNTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ },

/***/ 19275
/*!************************************************!*\
  !*** ./src/app/shared/pipes/image-url.pipe.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageUrlPipe: () => (/* binding */ ImageUrlPipe)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 36124);


class ImageUrlPipe {
  transform(value) {
    if (!value) {
      return 'assets/icon/placeholder.png';
    }
    if (value.startsWith('data:')) {
      return value;
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
//# sourceMappingURL=src_app_features_overview_overview_component_ts.js.map