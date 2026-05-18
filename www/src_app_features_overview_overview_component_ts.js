"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_features_overview_overview_component_ts"],{

/***/ 9650
/*!*********************************************************!*\
  !*** ./src/app/features/overview/overview.component.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverviewComponent: () => (/* binding */ OverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _hau_app_routes_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hau/app.routes.const */ 5276);
/* harmony import */ var _hau_features_cars_cars_routes_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/features/cars/cars.routes.const */ 5618);
/* harmony import */ var _hau_shared_pipes_image_url_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hau/shared/pipes/image-url.pipe */ 9275);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular/standalone */ 7241);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionicons */ 5846);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionicons/icons */ 7958);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/transloco */ 6075);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _hau_features_cars_state_car_list_car_list_facade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @hau/features/cars/state/car-list/car-list.facade */ 6295);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 3305);












const _c0 = () => [1, 2, 3];
const _forTrack0 = ($index, $item) => $item.car.id;
const _forTrack1 = ($index, $item) => $item.description;
const _forTrack2 = ($index, $item) => $item.title;
function OverviewComponent_Conditional_67_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-skeleton-text", 28)(2, "ion-skeleton-text", 29)(3, "ion-skeleton-text", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("animated", true);
  }
}
function OverviewComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](0, OverviewComponent_Conditional_67_For_1_Template, 4, 3, "div", 27, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](0, _c0));
  }
}
function OverviewComponent_Conditional_69_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function OverviewComponent_Conditional_69_For_1_Template_div_click_0_listener() {
      const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.navigateToCarDetails(row_r2.car));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "imageUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 34)(4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 37)(9, "div", 38)(10, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "ion-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "strong", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](18, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 38)(20, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "ion-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](23, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "strong", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](28, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 38)(30, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](31, "ion-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](33, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "strong", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](38, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "div", 38)(40, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](41, "ion-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](43, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "strong", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](46, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](47, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49, "km");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](50, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 20, row_r2.car.photos == null ? null : row_r2.car.photos[0] == null ? null : row_r2.car.photos[0].url), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"])("alt", row_r2.car.make);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", row_r2.car.make, " ", row_r2.car.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](row_r2.car.license_plate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](13, 22, "overview.deadlines.rca"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", row_r2.rca.days, "d");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](18, 24, "overview.deadlines.expires"), " ", row_r2.rca.dateStr);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](23, 26, "overview.deadlines.itp"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", row_r2.itp.days, "d");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](28, 28, "overview.deadlines.expires"), " ", row_r2.itp.dateStr);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](33, 30, "overview.deadlines.rov"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", row_r2.rov.days, "d");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](38, 32, "overview.deadlines.expires"), " ", row_r2.rov.dateStr);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](43, 34, "overview.deadlines.oil"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](46, 36, "overview.deadlines.oilIn"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](47, 38, row_r2.oilKm));
  }
}
function OverviewComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](0, OverviewComponent_Conditional_69_For_1_Template, 51, 40, "div", 31, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 0, ctx_r2.deadlines$));
  }
}
function OverviewComponent_For_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function OverviewComponent_For_80_Template_div_click_0_listener() {
      const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.navigateToCarDetails(row_r5.car));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "imageUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 52)(4, "div", 53)(5, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 54)(10, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "ion-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "ion-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "ion-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](21, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "ion-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](26, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](29, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, " km");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](31, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 12, row_r5.car.photos == null ? null : row_r5.car.photos[0] == null ? null : row_r5.car.photos[0].url), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"])("alt", row_r5.car.make);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", row_r5.car.make, " ", row_r5.car.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](row_r5.car.license_plate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](13, 14, "overview.deadlines.rca"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](17, 16, "overview.deadlines.itp"), " ", row_r5.itp.days, "d");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](21, 18, "overview.deadlines.rov"), " ", row_r5.rov.days, "d");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](26, 20, "overview.deadlines.oilService"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](29, 22, row_r5.oilKm));
  }
}
function OverviewComponent_For_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 24)(1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 60)(4, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 63)(10, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("act-" + item_r6.iconClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", item_r6.iconSrc);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 7, item_r6.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r6.carInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](12, 9, item_r6.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r6.time);
  }
}
function OverviewComponent_For_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function OverviewComponent_For_95_Template_button_click_0_listener() {
      const qa_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](qa_r8.action());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 68)(4, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const qa_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", qa_r8.iconSrc);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 3, qa_r8.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 5, qa_r8.subtitle));
  }
}
const ICON_BASE = 'assets/icons';
class OverviewComponent {
  constructor(_carListFacade, _router) {
    this._carListFacade = _carListFacade;
    this._router = _router;
    this.carList$ = this._carListFacade.carList$;
    this.loading$ = this._carListFacade.loading$;
    this.deadlines$ = this.carList$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(cars => cars.map((c, i) => this._buildDeadlineRow(c, i))));
    this.icons = {
      car: `${ICON_BASE}/hau-car.svg`,
      document: `${ICON_BASE}/hau-document.svg`,
      wrench: `${ICON_BASE}/hau-wrench.svg`,
      warning: `${ICON_BASE}/hau-warning.svg`,
      chevron: `${ICON_BASE}/hau-chevron.svg`,
      add: `${ICON_BASE}/hau-add.svg`,
      speedometer: `${ICON_BASE}/hau-speedometer.svg`,
      checkCircle: `${ICON_BASE}/hau-check-circle.svg`
    };
    this.activityItems = [{
      iconSrc: `${ICON_BASE}/hau-document.svg`,
      iconClass: 'blue',
      description: 'overview.activity.regUpdated',
      carInfo: 'BMW 520i (IS49WAU)',
      date: 'overview.activity.today',
      time: '10:24 AM'
    }, {
      iconSrc: `${ICON_BASE}/hau-wrench.svg`,
      iconClass: 'green',
      description: 'overview.activity.oilLogged',
      carInfo: 'BMW 318iA (BV31HAU)',
      date: 'overview.activity.yesterday',
      time: '04:18 PM'
    }, {
      iconSrc: `${ICON_BASE}/hau-document.svg`,
      iconClass: 'orange',
      description: 'overview.activity.reminderSet',
      carInfo: 'BMW 525iA (B33HAU)',
      date: 'overview.activity.yesterday',
      time: '11:03 AM'
    }, {
      iconSrc: `${ICON_BASE}/hau-warning.svg`,
      iconClass: 'blue',
      description: 'overview.activity.insuranceUpd',
      carInfo: 'BMW 520i (IS49WAU)',
      date: '12 May 2026',
      time: '09:41 AM'
    }, {
      iconSrc: `${ICON_BASE}/hau-check-circle.svg`,
      iconClass: 'green',
      description: 'overview.activity.itpCompleted',
      carInfo: 'BMW 318iA (BV31HAU)',
      date: '10 May 2026',
      time: '02:37 PM'
    }];
    (0,ionicons__WEBPACK_IMPORTED_MODULE_5__.a)({
      shield: ionicons_icons__WEBPACK_IMPORTED_MODULE_6__.shield,
      construct: ionicons_icons__WEBPACK_IMPORTED_MODULE_6__.construct,
      car: ionicons_icons__WEBPACK_IMPORTED_MODULE_6__.car,
      water: ionicons_icons__WEBPACK_IMPORTED_MODULE_6__.water,
      chevronForward: ionicons_icons__WEBPACK_IMPORTED_MODULE_6__.chevronForward,
      checkmarkCircle: ionicons_icons__WEBPACK_IMPORTED_MODULE_6__.checkmarkCircle,
      calendarOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_6__.calendarOutline
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
  _buildDeadlineRow(c, index) {
    const rcaDays = [30, 20, 35][index % 3];
    const itpDays = [45, 40, 50][index % 3];
    const rovDays = [60, 55, 65][index % 3];
    const oilKm = [1200, 800, 1700][index % 3];
    return {
      car: c,
      rca: this._addDays(rcaDays),
      itp: this._addDays(itpDays),
      rov: this._addDays(rovDays),
      oilKm
    };
  }
  _addDays(days) {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return {
      days,
      dateStr: d.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      })
    };
  }
  static {
    this.ɵfac = function OverviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_hau_features_cars_state_car_list_car_list_facade__WEBPACK_IMPORTED_MODULE_11__.CarListFacade), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: OverviewComponent,
      selectors: [["app-overview"]],
      decls: 96,
      vars: 60,
      consts: [[1, "overview-page"], [1, "ov-inner"], [1, "ov-header"], [1, "ov-title"], [1, "ov-subtitle"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon-wrap", "stat--vehicles"], [3, "src"], [1, "stat-body"], [1, "stat-label"], [1, "stat-value"], [1, "stat-sub"], [1, "stat-icon-wrap", "stat--docs"], [1, "stat-icon-wrap", "stat--service"], [1, "stat-icon-wrap", "stat--alerts"], [1, "ov-card", "deadlines-section"], [1, "ov-card-header"], [1, "ov-section-title"], [1, "view-all-btn", 3, "click"], [1, "bottom-grid"], [1, "ov-card", "garage-snapshot"], [1, "snapshot-row"], [1, "ov-card", "recent-activity"], [1, "activity-row"], [1, "ov-card", "quick-actions"], [1, "qa-row"], [1, "deadline-row", "skeleton-row"], [1, "sk-thumb", 3, "animated"], [1, "sk-name", 3, "animated"], [1, "sk-badges", 3, "animated"], [1, "deadline-row"], [1, "deadline-row", 3, "click"], [1, "deadline-thumb", 3, "src", "alt"], [1, "deadline-car-info"], [1, "car-name"], [1, "car-plate"], [1, "deadline-badges"], [1, "badge-group"], [1, "doc-chip", "rca"], ["name", "shield"], [1, "badge-days"], [1, "badge-date"], [1, "doc-chip", "itp"], ["name", "construct"], [1, "doc-chip", "rov"], ["name", "car"], [1, "doc-chip", "oil"], ["name", "water"], ["name", "chevron-forward", 1, "row-chevron"], [1, "snapshot-row", 3, "click"], [1, "snapshot-thumb", 3, "src", "alt"], [1, "snapshot-info"], [1, "snapshot-top"], [1, "snapshot-chips"], [1, "chip-sm", "rca"], [1, "chip-sm", "itp"], [1, "chip-sm", "rov"], [1, "snapshot-oil"], [1, "activity-icon-wrap"], [1, "activity-info"], [1, "activity-desc"], [1, "activity-car"], [1, "activity-time"], [1, "activity-date"], [1, "activity-clock"], [1, "qa-row", 3, "click"], [1, "qa-icon-wrap"], [1, "qa-info"], [1, "qa-title"], [1, "qa-sub"]],
      template: function OverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-content", 0)(1, "div", 1)(2, "header", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "ion-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 9)(14, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](19, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](22, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 6)(24, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "ion-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 9)(27, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](29, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](34, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 6)(36, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](37, "ion-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 9)(39, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](41, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](46, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "div", 6)(48, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](49, "ion-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "div", 9)(51, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](53, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](58, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "section", 16)(60, "div", 17)(61, "h2", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](63, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function OverviewComponent_Template_button_click_64_listener() {
            return ctx.navigateToGarage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](65);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](66, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](67, OverviewComponent_Conditional_67_Template, 2, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](68, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalBranchCreate"](69, OverviewComponent_Conditional_69_Template, 3, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "div", 20)(71, "section", 21)(72, "div", 17)(73, "h2", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](74);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](75, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function OverviewComponent_Template_button_click_76_listener() {
            return ctx.navigateToGarage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](78, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](79, OverviewComponent_For_80_Template, 32, 24, "div", 22, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](81, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "section", 23)(83, "div", 17)(84, "h2", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](85);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](86, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](87, OverviewComponent_For_88_Template, 15, 11, "div", 24, _forTrack1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](89, "section", 25)(90, "div", 17)(91, "h2", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](92);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](93, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](94, OverviewComponent_For_95_Template, 11, 7, "button", 26, _forTrack2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          let tmp_4_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 22, "overview.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 24, "overview.subtitle"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx.icons.car);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](16, 26, "overview.stats.vehicles"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](19, 28, ctx.carList$)) == null ? null : tmp_4_0.length) ?? 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](22, 30, "overview.stats.vehiclesSub"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx.icons.document);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](29, 32, "overview.stats.docsExpiring"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](34, 34, "overview.stats.docsExpiringSub"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx.icons.wrench);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](41, 36, "overview.stats.upcomingService"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](46, 38, "overview.stats.upcomingServiceSub"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx.icons.warning);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](53, 40, "overview.stats.alerts"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](58, 42, "overview.stats.alertsSub"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](63, 44, "overview.deadlines.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](66, 46, "overview.viewAll"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](68, 48, ctx.loading$) ? 67 : 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](75, 50, "overview.garage.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](78, 52, "overview.viewAll"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](81, 54, ctx.deadlines$));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](86, 56, "overview.activity.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](ctx.activityItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](93, 58, "overview.actions.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](ctx.quickActions);
        }
      },
      dependencies: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonSkeletonText, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__.TranslocoPipe, _hau_shared_pipes_image_url_pipe__WEBPACK_IMPORTED_MODULE_3__.ImageUrlPipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  --ov-bg: var(--hau-bg);\n  --ov-card-bg: var(--hau-surface);\n  --ov-border: var(--hau-border);\n  --ov-text: var(--hau-text);\n  --ov-muted: var(--hau-text-muted);\n  --ov-dim: var(--hau-text-dim);\n  --ov-accent: var(--hau-primary);\n  --ov-accent-light: var(--hau-primary-soft);\n  --ov-shadow-sm: var(--hau-shadow-soft);\n  --ov-shadow-md: var(--hau-shadow-md);\n  --ov-r-sm: var(--hau-radius-sm);\n  --ov-r-md: var(--hau-radius-md);\n  --ov-r-lg: var(--hau-radius-lg);\n  --ov-r-xl: var(--hau-radius-xl);\n  --ov-vehicles-bg: var(--hau-primary-soft);\n  --ov-vehicles-fg: var(--hau-primary);\n  --ov-docs-bg: rgba(249, 115, 22, 0.12);\n  --ov-docs-fg: #ea580c;\n  --ov-service-bg: var(--hau-success-soft);\n  --ov-service-fg: var(--hau-success-fg);\n  --ov-alerts-bg: var(--hau-danger-soft);\n  --ov-alerts-fg: var(--hau-danger-fg);\n  --ov-rca-bg: rgba(100, 116, 139, 0.12);\n  --ov-rca-fg: #475569;\n  --ov-itp-bg: rgba(100, 116, 139, 0.10);\n  --ov-itp-fg: #475569;\n  --ov-rov-bg: var(--hau-success-soft);\n  --ov-rov-fg: var(--hau-success-fg);\n  --ov-oil-bg: var(--hau-primary-soft);\n  --ov-oil-fg: var(--hau-primary);\n}\n\n.overview-page[_ngcontent-%COMP%] {\n  --background: var(--ov-bg);\n}\n\n.ov-inner[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 20px 16px 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n@media (min-width: 768px) {\n  .ov-inner[_ngcontent-%COMP%] {\n    padding: 28px 24px 48px;\n    gap: 24px;\n  }\n}\n@media (min-width: 1024px) {\n  .ov-inner[_ngcontent-%COMP%] {\n    padding: 32px 32px 56px;\n    gap: 28px;\n  }\n}\n\n.ov-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.ov-title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: var(--ov-text);\n  margin: 0;\n  line-height: 1.2;\n}\n@media (min-width: 768px) {\n  .ov-title[_ngcontent-%COMP%] {\n    font-size: 1.9rem;\n  }\n}\n@media (min-width: 1024px) {\n  .ov-title[_ngcontent-%COMP%] {\n    font-size: 2.1rem;\n  }\n}\n\n.ov-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--ov-muted);\n  margin: 0;\n}\n@media (min-width: 768px) {\n  .ov-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n@media (min-width: 1024px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n    gap: 16px;\n  }\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--ov-card-bg);\n  border-radius: var(--ov-r-lg);\n  box-shadow: var(--ov-shadow-sm);\n  padding: 18px 16px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n@media (min-width: 768px) {\n  .stat-card[_ngcontent-%COMP%] {\n    padding: 20px 18px;\n    gap: 16px;\n  }\n}\n@media (min-width: 1024px) {\n  .stat-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 22px 20px;\n    gap: 12px;\n  }\n}\n\n.stat-icon-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 44px;\n  height: 44px;\n  border-radius: var(--ov-r-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-icon-wrap[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n}\n.stat-icon-wrap.stat--vehicles[_ngcontent-%COMP%] {\n  background: var(--ov-vehicles-bg);\n}\n.stat-icon-wrap.stat--vehicles[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ov-vehicles-fg);\n}\n.stat-icon-wrap.stat--docs[_ngcontent-%COMP%] {\n  background: var(--ov-docs-bg);\n}\n.stat-icon-wrap.stat--docs[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ov-docs-fg);\n}\n.stat-icon-wrap.stat--service[_ngcontent-%COMP%] {\n  background: var(--ov-service-bg);\n}\n.stat-icon-wrap.stat--service[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ov-service-fg);\n}\n.stat-icon-wrap.stat--alerts[_ngcontent-%COMP%] {\n  background: var(--ov-alerts-bg);\n}\n.stat-icon-wrap.stat--alerts[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ov-alerts-fg);\n}\n@media (min-width: 768px) {\n  .stat-icon-wrap[_ngcontent-%COMP%] {\n    width: 48px;\n    height: 48px;\n  }\n}\n\n.stat-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--ov-muted);\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@media (min-width: 768px) {\n  .stat-label[_ngcontent-%COMP%] {\n    font-size: 0.82rem;\n  }\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  font-weight: 800;\n  color: var(--ov-text);\n  line-height: 1.1;\n}\n@media (min-width: 768px) {\n  .stat-value[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n@media (min-width: 1024px) {\n  .stat-value[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n}\n\n.stat-sub[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: var(--ov-dim);\n}\n@media (min-width: 768px) {\n  .stat-sub[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}\n\n.ov-card[_ngcontent-%COMP%] {\n  background: var(--ov-card-bg);\n  border-radius: var(--ov-r-xl);\n  box-shadow: var(--ov-shadow-sm);\n  overflow: hidden;\n}\n\n.ov-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px 12px;\n}\n@media (min-width: 768px) {\n  .ov-card-header[_ngcontent-%COMP%] {\n    padding: 20px 22px 14px;\n  }\n}\n\n.ov-section-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--ov-text);\n  margin: 0;\n}\n@media (min-width: 768px) {\n  .ov-section-title[_ngcontent-%COMP%] {\n    font-size: 1.05rem;\n  }\n}\n\n.view-all-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: var(--ov-accent);\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.view-all-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n\n.row-chevron[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 1rem;\n  color: var(--ov-dim);\n}\n\n.deadlines-section[_ngcontent-%COMP%]   .ov-card-header[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n\n.deadline-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 20px;\n  cursor: pointer;\n  transition: background 0.16s;\n  border-top: 1px solid var(--ov-border);\n}\n.deadline-row[_ngcontent-%COMP%]:hover {\n  background: rgba(15, 23, 42, 0.025);\n}\n@media (min-width: 768px) {\n  .deadline-row[_ngcontent-%COMP%] {\n    gap: 16px;\n    padding: 14px 22px;\n  }\n}\n\n.deadline-thumb[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 52px;\n  height: 40px;\n  border-radius: var(--ov-r-sm);\n  object-fit: cover;\n}\n@media (min-width: 768px) {\n  .deadline-thumb[_ngcontent-%COMP%] {\n    width: 64px;\n    height: 48px;\n  }\n}\n\n.deadline-car-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 90px;\n  flex-shrink: 0;\n}\n@media (min-width: 768px) {\n  .deadline-car-info[_ngcontent-%COMP%] {\n    min-width: 110px;\n  }\n}\n\n.car-name[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: var(--ov-text);\n  white-space: nowrap;\n}\n@media (min-width: 768px) {\n  .car-name[_ngcontent-%COMP%] {\n    font-size: 0.92rem;\n  }\n}\n\n.car-plate[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--ov-muted);\n  font-weight: 500;\n}\n\n.deadline-badges[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  overflow-x: auto;\n  padding-bottom: 2px;\n  scrollbar-width: none;\n}\n.deadline-badges[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n@media (min-width: 768px) {\n  .deadline-badges[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n}\n@media (min-width: 1024px) {\n  .deadline-badges[_ngcontent-%COMP%] {\n    gap: 24px;\n    justify-content: flex-start;\n  }\n}\n\n.badge-group[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  align-items: flex-start;\n}\n\n.doc-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 8px;\n  border-radius: var(--ov-r-sm);\n  font-size: 0.72rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.doc-chip[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.doc-chip.rca[_ngcontent-%COMP%] {\n  background: var(--ov-rca-bg);\n  color: var(--ov-rca-fg);\n}\n.doc-chip.itp[_ngcontent-%COMP%] {\n  background: var(--ov-itp-bg);\n  color: var(--ov-itp-fg);\n}\n.doc-chip.rov[_ngcontent-%COMP%] {\n  background: var(--ov-rov-bg);\n  color: var(--ov-rov-fg);\n}\n.doc-chip.oil[_ngcontent-%COMP%] {\n  background: var(--ov-oil-bg);\n  color: var(--ov-oil-fg);\n}\n\n.badge-days[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 800;\n  color: var(--ov-text);\n  line-height: 1.2;\n}\n\n.badge-date[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--ov-muted);\n  white-space: nowrap;\n}\n\n.skeleton-row[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.skeleton-row[_ngcontent-%COMP%]:hover {\n  background: transparent;\n}\n\nion-skeleton-text[_ngcontent-%COMP%] {\n  border-radius: var(--ov-r-sm);\n}\n\n.sk-thumb[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 40px;\n  flex-shrink: 0;\n}\n\n.sk-name[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 36px;\n  flex-shrink: 0;\n}\n\n.sk-badges[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 36px;\n}\n\n.bottom-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n}\n@media (min-width: 768px) {\n  .bottom-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 16px;\n    align-items: start;\n  }\n}\n@media (min-width: 1024px) {\n  .bottom-grid[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n}\n\n.snapshot-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px 20px;\n  border-top: 1px solid var(--ov-border);\n  cursor: pointer;\n  transition: background 0.16s;\n}\n.snapshot-row[_ngcontent-%COMP%]:hover {\n  background: rgba(15, 23, 42, 0.025);\n}\n@media (min-width: 768px) {\n  .snapshot-row[_ngcontent-%COMP%] {\n    padding: 12px 22px;\n  }\n}\n\n.snapshot-thumb[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 52px;\n  height: 40px;\n  border-radius: var(--ov-r-sm);\n  object-fit: cover;\n  margin-top: 2px;\n}\n\n.snapshot-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.snapshot-top[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n\n.snapshot-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n\n.chip-sm[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  padding: 2px 7px;\n  border-radius: var(--ov-r-sm);\n  font-size: 0.7rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.chip-sm[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n}\n.chip-sm.rca[_ngcontent-%COMP%] {\n  background: var(--ov-rca-bg);\n  color: var(--ov-rca-fg);\n}\n.chip-sm.itp[_ngcontent-%COMP%] {\n  background: var(--ov-itp-bg);\n  color: var(--ov-itp-fg);\n}\n.chip-sm.rov[_ngcontent-%COMP%] {\n  background: var(--ov-rov-bg);\n  color: var(--ov-rov-fg);\n}\n\n.snapshot-oil[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.78rem;\n  color: var(--ov-muted);\n}\n.snapshot-oil[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--ov-oil-fg);\n  flex-shrink: 0;\n}\n.snapshot-oil[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--ov-text);\n}\n\n.activity-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px 20px;\n  border-top: 1px solid var(--ov-border);\n}\n@media (min-width: 768px) {\n  .activity-row[_ngcontent-%COMP%] {\n    padding: 12px 22px;\n  }\n}\n\n.activity-icon-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 1px;\n}\n.activity-icon-wrap[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.activity-icon-wrap.act-blue[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.12);\n}\n.activity-icon-wrap.act-blue[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.activity-icon-wrap.act-green[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n}\n.activity-icon-wrap.act-green[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.activity-icon-wrap.act-orange[_ngcontent-%COMP%] {\n  background: rgba(249, 115, 22, 0.12);\n}\n.activity-icon-wrap.act-orange[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #ea580c;\n}\n\n.activity-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.activity-desc[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: var(--ov-text);\n  line-height: 1.35;\n}\n\n.activity-car[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: var(--ov-muted);\n}\n\n.activity-time[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n}\n\n.activity-date[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 600;\n  color: var(--ov-muted);\n  white-space: nowrap;\n}\n\n.activity-clock[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--ov-dim);\n  white-space: nowrap;\n}\n\n.qa-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--ov-border);\n  width: 100%;\n  background: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: none;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.16s;\n}\n.qa-row[_ngcontent-%COMP%]:hover {\n  background: rgba(15, 23, 42, 0.025);\n}\n.qa-row[_ngcontent-%COMP%]:first-of-type {\n  border-top: 1px solid var(--ov-border);\n}\n@media (min-width: 768px) {\n  .qa-row[_ngcontent-%COMP%] {\n    padding: 14px 22px;\n  }\n}\n\n.qa-icon-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--ov-accent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);\n}\n.qa-icon-wrap[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #ffffff;\n}\n\n.qa-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.qa-title[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: var(--ov-text);\n}\n\n.qa-sub[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: var(--ov-muted);\n  line-height: 1.35;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxjQUFBO0VBR0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esb0NBQUE7RUFFQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUdBLHlDQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esb0NBQUE7RUFHQSxzQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esc0NBQUE7RUFDQSxvQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLCtCQUFBO0FBVEY7O0FBZUE7RUFDRSwwQkFBQTtBQVpGOztBQWVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBWkY7QUFjRTtFQVJGO0lBU0ksdUJBQUE7SUFDQSxTQUFBO0VBWEY7QUFDRjtBQWFFO0VBYkY7SUFjSSx1QkFBQTtJQUNBLFNBQUE7RUFWRjtBQUNGOztBQWdCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFiRjs7QUFnQkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFiRjtBQWVFO0VBUEY7SUFPOEIsaUJBQUE7RUFYNUI7QUFDRjtBQVdFO0VBUkY7SUFRK0IsaUJBQUE7RUFQN0I7QUFDRjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBTkY7QUFRRTtFQUxGO0lBSzhCLGtCQUFBO0VBSjVCO0FBQ0Y7O0FBU0E7RUFD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QUFDRjs7QUFoSEE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw4Q0FBQTtBQW1IRjtBQWpIRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQW1ISjs7QUEvR0E7RUFDRSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFrSEY7O0FBL0dBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBa0hGOztBQS9HQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQWtIRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gRGVzaWduIHRva2VucyAobWlycm9yIG1haW4uY29tcG9uZW50LnNjc3Mgc28gdGhlIHBhZ2UgaXMgc2VsZi1jb250YWluZWQpXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgLy8gTWFwIGxvY2FsIHRva2VucyB0byBnbG9iYWwgSEFVIGRlc2lnbiBzeXN0ZW1cbiAgLS1vdi1iZzogICAgICAgICAgIHZhcigtLWhhdS1iZyk7XG4gIC0tb3YtY2FyZC1iZzogICAgICB2YXIoLS1oYXUtc3VyZmFjZSk7XG4gIC0tb3YtYm9yZGVyOiAgICAgICB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgLS1vdi10ZXh0OiAgICAgICAgIHZhcigtLWhhdS10ZXh0KTtcbiAgLS1vdi1tdXRlZDogICAgICAgIHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbiAgLS1vdi1kaW06ICAgICAgICAgIHZhcigtLWhhdS10ZXh0LWRpbSk7XG4gIC0tb3YtYWNjZW50OiAgICAgICB2YXIoLS1oYXUtcHJpbWFyeSk7XG4gIC0tb3YtYWNjZW50LWxpZ2h0OiB2YXIoLS1oYXUtcHJpbWFyeS1zb2Z0KTtcbiAgLS1vdi1zaGFkb3ctc206ICAgIHZhcigtLWhhdS1zaGFkb3ctc29mdCk7XG4gIC0tb3Ytc2hhZG93LW1kOiAgICB2YXIoLS1oYXUtc2hhZG93LW1kKTtcblxuICAtLW92LXItc206IHZhcigtLWhhdS1yYWRpdXMtc20pO1xuICAtLW92LXItbWQ6IHZhcigtLWhhdS1yYWRpdXMtbWQpO1xuICAtLW92LXItbGc6IHZhcigtLWhhdS1yYWRpdXMtbGcpO1xuICAtLW92LXIteGw6IHZhcigtLWhhdS1yYWRpdXMteGwpO1xuXG4gIC8vIFN0YXQgaWNvbiBwYWxldHRlc1xuICAtLW92LXZlaGljbGVzLWJnOiB2YXIoLS1oYXUtcHJpbWFyeS1zb2Z0KTtcbiAgLS1vdi12ZWhpY2xlcy1mZzogdmFyKC0taGF1LXByaW1hcnkpO1xuICAtLW92LWRvY3MtYmc6ICAgICByZ2JhKDI0OSwgMTE1LCAyMiwgMC4xMik7XG4gIC0tb3YtZG9jcy1mZzogICAgICNlYTU4MGM7XG4gIC0tb3Ytc2VydmljZS1iZzogIHZhcigtLWhhdS1zdWNjZXNzLXNvZnQpO1xuICAtLW92LXNlcnZpY2UtZmc6ICB2YXIoLS1oYXUtc3VjY2Vzcy1mZyk7XG4gIC0tb3YtYWxlcnRzLWJnOiAgIHZhcigtLWhhdS1kYW5nZXItc29mdCk7XG4gIC0tb3YtYWxlcnRzLWZnOiAgIHZhcigtLWhhdS1kYW5nZXItZmcpO1xuXG4gIC8vIERvYyBjaGlwIHBhbGV0dGVzXG4gIC0tb3YtcmNhLWJnOiAgcmdiYSgxMDAsIDExNiwgMTM5LCAwLjEyKTtcbiAgLS1vdi1yY2EtZmc6ICAjNDc1NTY5O1xuICAtLW92LWl0cC1iZzogIHJnYmEoMTAwLCAxMTYsIDEzOSwgMC4xMCk7XG4gIC0tb3YtaXRwLWZnOiAgIzQ3NTU2OTtcbiAgLS1vdi1yb3YtYmc6ICB2YXIoLS1oYXUtc3VjY2Vzcy1zb2Z0KTtcbiAgLS1vdi1yb3YtZmc6ICB2YXIoLS1oYXUtc3VjY2Vzcy1mZyk7XG4gIC0tb3Ytb2lsLWJnOiAgdmFyKC0taGF1LXByaW1hcnktc29mdCk7XG4gIC0tb3Ytb2lsLWZnOiAgdmFyKC0taGF1LXByaW1hcnkpO1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIFBhZ2Ugc2hlbGxcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLm92ZXJ2aWV3LXBhZ2Uge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLW92LWJnKTtcbn1cblxuLm92LWlubmVyIHtcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4IDE2cHggNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmc6IDI4cHggMjRweCA0OHB4O1xuICAgIGdhcDogMjRweDtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICBwYWRkaW5nOiAzMnB4IDMycHggNTZweDtcbiAgICBnYXA6IDI4cHg7XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyBQYWdlIGhlYWRlclxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ub3YtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0cHg7XG59XG5cbi5vdi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogdmFyKC0tb3YtdGV4dCk7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgZm9udC1zaXplOiAxLjlyZW07IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgeyBmb250LXNpemU6IDIuMXJlbTsgfVxufVxuXG4ub3Ytc3VidGl0bGUge1xuICBmb250LXNpemU6IDAuODhyZW07XG4gIGNvbG9yOiB2YXIoLS1vdi1tdXRlZCk7XG4gIG1hcmdpbjogMDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgZm9udC1zaXplOiAwLjk1cmVtOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gU3RhdHMgZ3JpZFxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uc3RhdHMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdhcDogMTJweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICBnYXA6IDE2cHg7XG4gIH1cbn1cblxuLnN0YXQtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW92LWNhcmQtYmcpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1vdi1yLWxnKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tb3Ytc2hhZG93LXNtKTtcbiAgcGFkZGluZzogMThweCAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE0cHg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IHBhZGRpbmc6IDIwcHggMThweDsgZ2FwOiAxNnB4OyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IDIycHggMjBweDtcbiAgICBnYXA6IDEycHg7XG4gIH1cbn1cblxuLnN0YXQtaWNvbi13cmFwIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW92LXItbWQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMS4zNXJlbTsgfVxuXG4gICYuc3RhdC0tdmVoaWNsZXMgeyBiYWNrZ3JvdW5kOiB2YXIoLS1vdi12ZWhpY2xlcy1iZyk7IGlvbi1pY29uIHsgY29sb3I6IHZhcigtLW92LXZlaGljbGVzLWZnKTsgfSB9XG4gICYuc3RhdC0tZG9jcyAgICAgeyBiYWNrZ3JvdW5kOiB2YXIoLS1vdi1kb2NzLWJnKTsgICAgIGlvbi1pY29uIHsgY29sb3I6IHZhcigtLW92LWRvY3MtZmcpOyAgICAgfSB9XG4gICYuc3RhdC0tc2VydmljZSAgeyBiYWNrZ3JvdW5kOiB2YXIoLS1vdi1zZXJ2aWNlLWJnKTsgIGlvbi1pY29uIHsgY29sb3I6IHZhcigtLW92LXNlcnZpY2UtZmcpOyAgfSB9XG4gICYuc3RhdC0tYWxlcnRzICAgeyBiYWNrZ3JvdW5kOiB2YXIoLS1vdi1hbGVydHMtYmcpOyAgIGlvbi1pY29uIHsgY29sb3I6IHZhcigtLW92LWFsZXJ0cy1mZyk7ICAgfSB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IHdpZHRoOiA0OHB4OyBoZWlnaHQ6IDQ4cHg7IH1cbn1cblxuLnN0YXQtYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnB4O1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5zdGF0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBjb2xvcjogdmFyKC0tb3YtbXV0ZWQpO1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgZm9udC1zaXplOiAwLjgycmVtOyB9XG59XG5cbi5zdGF0LXZhbHVlIHtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiB2YXIoLS1vdi10ZXh0KTtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgZm9udC1zaXplOiAycmVtOyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHsgZm9udC1zaXplOiAyLjJyZW07IH1cbn1cblxuLnN0YXQtc3ViIHtcbiAgZm9udC1zaXplOiAwLjc2cmVtO1xuICBjb2xvcjogdmFyKC0tb3YtZGltKTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgZm9udC1zaXplOiAwLjhyZW07IH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyBTaGFyZWQgY2FyZCArIGhlYWRlciBoZWxwZXJzXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5vdi1jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tb3YtY2FyZC1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW92LXIteGwpO1xuICBib3gtc2hhZG93OiB2YXIoLS1vdi1zaGFkb3ctc20pO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ub3YtY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDE4cHggMjBweCAxMnB4O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyBwYWRkaW5nOiAyMHB4IDIycHggMTRweDsgfVxufVxuXG4ub3Ytc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLW92LXRleHQpO1xuICBtYXJnaW46IDA7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IGZvbnQtc2l6ZTogMS4wNXJlbTsgfVxufVxuXG4udmlldy1hbGwtYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDAuODRyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1vdi1hY2NlbnQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXM7XG5cbiAgJjpob3ZlciB7IG9wYWNpdHk6IDAuNzU7IH1cbn1cblxuLnJvdy1jaGV2cm9uIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHZhcigtLW92LWRpbSk7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gVXBjb21pbmcgZGVhZGxpbmVzXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5kZWFkbGluZXMtc2VjdGlvbiB7XG4gIC5vdi1jYXJkLWhlYWRlciB7IHBhZGRpbmctYm90dG9tOiAwOyB9XG59XG5cbi5kZWFkbGluZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTZzO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tb3YtYm9yZGVyKTtcblxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgxNSwgMjMsIDQyLCAwLjAyNSk7IH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgZ2FwOiAxNnB4OyBwYWRkaW5nOiAxNHB4IDIycHg7IH1cbn1cblxuLmRlYWRsaW5lLXRodW1iIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiA1MnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW92LXItc20pO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgd2lkdGg6IDY0cHg7IGhlaWdodDogNDhweDsgfVxufVxuXG4uZGVhZGxpbmUtY2FyLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJweDtcbiAgbWluLXdpZHRoOiA5MHB4O1xuICBmbGV4LXNocmluazogMDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgbWluLXdpZHRoOiAxMTBweDsgfVxufVxuXG4uY2FyLW5hbWUge1xuICBmb250LXNpemU6IDAuODhyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1vdi10ZXh0KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgZm9udC1zaXplOiAwLjkycmVtOyB9XG59XG5cbi5jYXItcGxhdGUge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGNvbG9yOiB2YXIoLS1vdi1tdXRlZCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5kZWFkbGluZS1iYWRnZXMge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG5cbiAgLy8gSGlkZSBzY3JvbGxiYXIgYnV0IGtlZXAgZnVuY3Rpb25hbGl0eVxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgZGlzcGxheTogbm9uZTsgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyBnYXA6IDE2cHg7IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgeyBnYXA6IDI0cHg7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxufVxuXG4uYmFkZ2UtZ3JvdXAge1xuICBmbGV4LXNocmluazogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uZG9jLWNoaXAge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW92LXItc20pO1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgaW9uLWljb24geyBmb250LXNpemU6IDAuNzVyZW07IH1cblxuICAmLnJjYSB7IGJhY2tncm91bmQ6IHZhcigtLW92LXJjYS1iZyk7IGNvbG9yOiB2YXIoLS1vdi1yY2EtZmcpOyB9XG4gICYuaXRwIHsgYmFja2dyb3VuZDogdmFyKC0tb3YtaXRwLWJnKTsgY29sb3I6IHZhcigtLW92LWl0cC1mZyk7IH1cbiAgJi5yb3YgeyBiYWNrZ3JvdW5kOiB2YXIoLS1vdi1yb3YtYmcpOyBjb2xvcjogdmFyKC0tb3Ytcm92LWZnKTsgfVxuICAmLm9pbCB7IGJhY2tncm91bmQ6IHZhcigtLW92LW9pbC1iZyk7IGNvbG9yOiB2YXIoLS1vdi1vaWwtZmcpOyB9XG59XG5cbi5iYWRnZS1kYXlzIHtcbiAgZm9udC1zaXplOiAwLjg0cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogdmFyKC0tb3YtdGV4dCk7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbi5iYWRnZS1kYXRlIHtcbiAgZm9udC1zaXplOiAwLjcycmVtO1xuICBjb2xvcjogdmFyKC0tb3YtbXV0ZWQpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyBTa2VsZXRvbiByb3dzXG4uc2tlbGV0b24tcm93IHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbn1cblxuaW9uLXNrZWxldG9uLXRleHQge1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1vdi1yLXNtKTtcbn1cblxuLnNrLXRodW1iICB7IHdpZHRoOiA1MnB4OyBoZWlnaHQ6IDQwcHg7IGZsZXgtc2hyaW5rOiAwOyB9XG4uc2stbmFtZSAgIHsgd2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDM2cHg7IGZsZXgtc2hyaW5rOiAwOyB9XG4uc2stYmFkZ2VzIHsgZmxleDogMTsgaGVpZ2h0OiAzNnB4OyB9XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gQm90dG9tIDMtY29sdW1uIGdyaWRcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmJvdHRvbS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdhcDogMjBweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdhcDogMTZweDtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gR2FyYWdlIHNuYXBzaG90XG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5zbmFwc2hvdC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1vdi1ib3JkZXIpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNnM7XG5cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMTUsIDIzLCA0MiwgMC4wMjUpOyB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IHBhZGRpbmc6IDEycHggMjJweDsgfVxufVxuXG4uc25hcHNob3QtdGh1bWIge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDUycHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tb3Ytci1zbSk7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5zbmFwc2hvdC1pbmZvIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDZweDtcbn1cblxuLnNuYXBzaG90LXRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXB4O1xufVxuXG4uc25hcHNob3QtY2hpcHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogNXB4O1xufVxuXG4uY2hpcC1zbSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDNweDtcbiAgcGFkZGluZzogMnB4IDdweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tb3Ytci1zbSk7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gIGlvbi1pY29uIHsgZm9udC1zaXplOiAwLjY4cmVtOyB9XG5cbiAgJi5yY2EgeyBiYWNrZ3JvdW5kOiB2YXIoLS1vdi1yY2EtYmcpOyBjb2xvcjogdmFyKC0tb3YtcmNhLWZnKTsgfVxuICAmLml0cCB7IGJhY2tncm91bmQ6IHZhcigtLW92LWl0cC1iZyk7IGNvbG9yOiB2YXIoLS1vdi1pdHAtZmcpOyB9XG4gICYucm92IHsgYmFja2dyb3VuZDogdmFyKC0tb3Ytcm92LWJnKTsgY29sb3I6IHZhcigtLW92LXJvdi1mZyk7IH1cbn1cblxuLnNuYXBzaG90LW9pbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIGNvbG9yOiB2YXIoLS1vdi1tdXRlZCk7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgICBjb2xvcjogdmFyKC0tb3Ytb2lsLWZnKTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgfVxuXG4gIHN0cm9uZyB7IGNvbG9yOiB2YXIoLS1vdi10ZXh0KTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIFJlY2VudCBhY3Rpdml0eVxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uYWN0aXZpdHktcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tb3YtYm9yZGVyKTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgcGFkZGluZzogMTJweCAyMnB4OyB9XG59XG5cbi5hY3Rpdml0eS1pY29uLXdyYXAge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMXB4O1xuXG4gIGlvbi1pY29uIHsgZm9udC1zaXplOiAxcmVtOyB9XG5cbiAgJi5hY3QtYmx1ZSAgIHsgYmFja2dyb3VuZDogcmdiYSgzNywgOTksIDIzNSwgMC4xMik7ICBpb24taWNvbiB7IGNvbG9yOiAjMjU2M2ViOyB9IH1cbiAgJi5hY3QtZ3JlZW4gIHsgYmFja2dyb3VuZDogcmdiYSgzNCwgMTk3LCA5NCwgMC4xMik7ICBpb24taWNvbiB7IGNvbG9yOiAjMTZhMzRhOyB9IH1cbiAgJi5hY3Qtb3JhbmdlIHsgYmFja2dyb3VuZDogcmdiYSgyNDksIDExNSwgMjIsIDAuMTIpOyBpb24taWNvbiB7IGNvbG9yOiAjZWE1ODBjOyB9IH1cbn1cblxuLmFjdGl2aXR5LWluZm8ge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnB4O1xufVxuXG4uYWN0aXZpdHktZGVzYyB7XG4gIGZvbnQtc2l6ZTogMC44NHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLW92LXRleHQpO1xuICBsaW5lLWhlaWdodDogMS4zNTtcbn1cblxuLmFjdGl2aXR5LWNhciB7XG4gIGZvbnQtc2l6ZTogMC43NnJlbTtcbiAgY29sb3I6IHZhcigtLW92LW11dGVkKTtcbn1cblxuLmFjdGl2aXR5LXRpbWUge1xuICBmbGV4LXNocmluazogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBnYXA6IDJweDtcbn1cblxuLmFjdGl2aXR5LWRhdGUge1xuICBmb250LXNpemU6IDAuNzZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1vdi1tdXRlZCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5hY3Rpdml0eS1jbG9jayB7XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgY29sb3I6IHZhcigtLW92LWRpbSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gUXVpY2sgYWN0aW9uc1xuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ucWEtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNHB4O1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1vdi1ib3JkZXIpO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTZzO1xuXG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyMywgNDIsIDAuMDI1KTsgfVxuICAmOmZpcnN0LW9mLXR5cGUgeyBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tb3YtYm9yZGVyKTsgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyBwYWRkaW5nOiAxNHB4IDIycHg7IH1cbn1cblxuLnFhLWljb24td3JhcCB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLW92LWFjY2VudCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMzcsIDk5LCAyMzUsIDAuMjUpO1xuXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuXG4ucWEtaW5mbyB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycHg7XG59XG5cbi5xYS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLW92LXRleHQpO1xufVxuXG4ucWEtc3ViIHtcbiAgZm9udC1zaXplOiAwLjc2cmVtO1xuICBjb2xvcjogdmFyKC0tb3YtbXV0ZWQpO1xuICBsaW5lLWhlaWdodDogMS4zNTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
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
//# sourceMappingURL=src_app_features_overview_overview_component_ts.js.map