"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_features_cars_cars-list_cars-list_component_ts"],{

/***/ 9632
/*!****************************************************************!*\
  !*** ./src/app/features/cars/cars-list/cars-list.component.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarsListComponent: () => (/* binding */ CarsListComponent)
/* harmony export */ });
/* harmony import */ var _var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _hau_features_cars_cars_routes_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/features/cars/cars.routes.const */ 5618);
/* harmony import */ var _hau_features_cars_component_card_list_item_car_list_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hau/features/cars/component/card-list-item/car-list-item.component */ 1262);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular/standalone */ 7241);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionicons */ 5846);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionicons/icons */ 7958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _hau_features_cars_state_car_list_car_list_facade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @hau/features/cars/state/car-list/car-list.facade */ 6295);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular/standalone */ 4059);










const _forTrack0 = ($index, $item) => $item.id;
function CarsListComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 4)(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Loading cars\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function CarsListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5)(1, "div", 8)(2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "rect", 11)(5, "ellipse", 12)(6, "ellipse", 13)(7, "ellipse", 14)(8, "ellipse", 15)(9, "polygon", 16)(10, "rect", 17)(11, "rect", 18)(12, "rect", 19)(13, "rect", 20)(14, "rect", 21)(15, "rect", 22)(16, "circle", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "g", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "polyline", 25)(19, "rect", 26)(20, "rect", 27)(21, "line", 28)(22, "line", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "g", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "path", 31)(25, "path", 32)(26, "circle", 33)(27, "circle", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "h2", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Your garage is empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Add your first vehicle to start tracking documents, maintenance, and important deadlines.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CarsListComponent_Conditional_8_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.navigateToAddCar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "ion-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, " Add your first vehicle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "ion-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, " How it works ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "You can always add more vehicles later.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 42)(41, "div", 43)(42, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Getting started");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 45)(45, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](46, "ion-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 48)(48, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Add your vehicle details");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Basic info like make, model, and year");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 45)(53, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "ion-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 48)(56, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "Upload registration and insurance documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, "We'll keep them safe and organized");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 45)(61, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](62, "ion-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 48)(64, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, "Set service and inspection dates");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, "Get reminders before it's due");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 43)(69, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "What you unlock");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 49)(72, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](73, "ion-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "div", 52)(75, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "Document reminders");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, "Never miss an expiry again");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 49)(80, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](81, "ion-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 52)(83, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84, "Service history");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, "Track all maintenance in one place");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "div", 49)(88, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](89, "ion-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "div", 52)(91, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "Upcoming deadlines");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](94, "Stay ahead of important tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "div", 57)(96, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](97, "ion-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "div", 60)(99, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](100, "Tip:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](101, " Start with your most-used car and add the rest later. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](102, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](104, "You're in control.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
}
function CarsListComponent_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-car-list-item", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CarsListComponent_Conditional_9_For_2_Template_app_car_list_item_click_0_listener() {
      const car_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.navigateToCarDetails(car_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const car_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("car", car_r4);
  }
}
function CarsListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](1, CarsListComponent_Conditional_9_For_2_Template, 1, 1, "app-car-list-item", 61, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 0, ctx_r1.carList$));
  }
}
function CarsListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-fab", 7)(1, "ion-fab-button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CarsListComponent_Conditional_10_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.navigateToAddCar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "ion-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
class CarsListComponent {
  constructor(_carListFacade, _navCtrl) {
    this._carListFacade = _carListFacade;
    this._navCtrl = _navCtrl;
    this.carList$ = this._carListFacade.carList$;
    this.loading$ = this._carListFacade.loading$;
    (0,ionicons__WEBPACK_IMPORTED_MODULE_5__.a)({
      add: ionicons_icons__WEBPACK_IMPORTED_MODULE_6__.add,
      addCircleOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_6__.addCircleOutline,
      helpCircleOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_6__.helpCircleOutline,
      checkmarkCircle: ionicons_icons__WEBPACK_IMPORTED_MODULE_6__.checkmarkCircle,
      informationCircle: ionicons_icons__WEBPACK_IMPORTED_MODULE_6__.informationCircle,
      documentTextOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_6__.documentTextOutline,
      constructOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_6__.constructOutline,
      calendarOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_6__.calendarOutline
    });
  }
  ngOnInit() {
    this._carListFacade.loadCarList();
  }
  navigateToAddCar() {
    this._navCtrl.navigateForward(_hau_features_cars_cars_routes_const__WEBPACK_IMPORTED_MODULE_2__.CARS_ROUTES.create.fullPath, {
      animated: false
    });
  }
  navigateToCarDetails(car) {
    this._navCtrl.navigateForward(`${_hau_features_cars_cars_routes_const__WEBPACK_IMPORTED_MODULE_2__.CARS_ROUTES.details.fullPath}/${car.id}`, {
      animated: false
    });
  }
  handleRefresh(event) {
    var _this = this;
    return (0,_var_www_hau_app_history_auto_utility_fe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this._carListFacade.loadCarList();
      } catch (error) {
        console.error('Error refreshing car list:', error);
      } finally {
        event.target.complete();
      }
    })();
  }
  static {
    this.ɵfac = function CarsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CarsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_hau_features_cars_state_car_list_car_list_facade__WEBPACK_IMPORTED_MODULE_9__.CarListFacade), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_10__.NavController));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: CarsListComponent,
      selectors: [["app-cars-list"]],
      decls: 12,
      vars: 8,
      consts: [[1, "cars-page"], ["slot", "fixed", 3, "ionRefresh"], [1, "cars-shell"], [1, "cars-header"], [1, "loading-state"], [1, "empty-state"], [1, "cars-grid"], ["slot", "fixed", "vertical", "bottom", "horizontal", "end"], [1, "empty-main"], [1, "empty-illustration"], ["viewBox", "0 0 480 290", "xmlns", "http://www.w3.org/2000/svg", "aria-hidden", "true"], ["width", "480", "height", "290", "rx", "18", "fill", "#eef2fb"], ["cx", "68", "cy", "64", "rx", "42", "ry", "22", "fill", "#cfd9ed", "opacity", "0.55"], ["cx", "100", "cy", "52", "rx", "30", "ry", "18", "fill", "#cfd9ed", "opacity", "0.55"], ["cx", "405", "cy", "70", "rx", "35", "ry", "18", "fill", "#cfd9ed", "opacity", "0.45"], ["cx", "432", "cy", "58", "rx", "26", "ry", "15", "fill", "#cfd9ed", "opacity", "0.45"], ["points", "240,48 372,122 108,122", "fill", "#c0cfe8"], ["x", "128", "y", "122", "width", "224", "height", "142", "rx", "4", "fill", "#d4e0f0"], ["x", "155", "y", "138", "width", "170", "height", "126", "rx", "6", "fill", "#b2c5db"], ["x", "160", "y", "143", "width", "160", "height", "17", "rx", "3", "fill", "#c4d4e5"], ["x", "160", "y", "165", "width", "160", "height", "17", "rx", "3", "fill", "#c4d4e5"], ["x", "160", "y", "187", "width", "160", "height", "17", "rx", "3", "fill", "#c4d4e5"], ["x", "160", "y", "209", "width", "160", "height", "17", "rx", "3", "fill", "#c4d4e5"], ["cx", "240", "cy", "140", "r", "48", "fill", "white", "opacity", "0.88"], ["transform", "translate(218,118)", "fill", "none", "stroke", "#2563eb", "stroke-width", "2.4", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "2,20 22,5 42,20"], ["x", "8", "y", "20", "width", "28", "height", "22", "rx", "1.5"], ["x", "12", "y", "24", "width", "20", "height", "14", "rx", "1"], ["x1", "12", "y1", "29", "x2", "32", "y2", "29"], ["x1", "12", "y1", "34", "x2", "32", "y2", "34"], ["fill", "none", "stroke", "#90a8c4", "stroke-width", "1.8", "stroke-dasharray", "6 5", "opacity", "0.75"], ["d", "M172,222 Q172,216 178,216 L302,216 Q308,216 308,222 L308,250 Q308,255 302,255 L178,255 Q172,255 172,250 Z"], ["d", "M194,216 L208,199 L272,199 L286,216"], ["cx", "203", "cy", "255", "r", "13"], ["cx", "277", "cy", "255", "r", "13"], [1, "empty-title"], [1, "empty-desc"], [1, "empty-btn-primary", 3, "click"], ["name", "add-circle-outline"], [1, "empty-btn-secondary"], ["name", "help-circle-outline"], [1, "empty-hint"], [1, "empty-sidebar"], [1, "empty-card"], [1, "empty-card-title"], [1, "step-item"], [1, "step-check"], ["name", "checkmark-circle"], [1, "step-text"], [1, "unlock-item"], [1, "unlock-icon", "unlock-doc"], ["name", "document-text-outline"], [1, "unlock-text"], [1, "unlock-icon", "unlock-wrench"], ["name", "construct-outline"], [1, "unlock-icon", "unlock-cal"], ["name", "calendar-outline"], [1, "tip-box"], [1, "tip-icon"], ["name", "information-circle"], [1, "tip-text"], [3, "car"], [3, "click", "car"], [3, "click"], ["name", "add"]],
      template: function CarsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-content", 0)(1, "ion-refresher", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ionRefresh", function CarsListComponent_Template_ion_refresher_ionRefresh_1_listener($event) {
            return ctx.handleRefresh($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "ion-refresher-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "section", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "header", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](5, CarsListComponent_Conditional_5_Template, 3, 0, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalBranchCreate"](8, CarsListComponent_Conditional_8_Template, 105, 0, "div", 5)(9, CarsListComponent_Conditional_9_Template, 4, 2, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](10, CarsListComponent_Conditional_10_Template, 3, 0, "ion-fab", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_0_0;
          let tmp_1_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 2, ctx.loading$) ? 5 : (((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 4, ctx.carList$)) == null ? null : tmp_0_0.length) ?? 0) === 0 ? 8 : 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"]((((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 6, ctx.carList$)) == null ? null : tmp_1_0.length) ?? 0) > 0 ? 10 : -1);
        }
      },
      dependencies: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonFabButton, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonFab, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _hau_features_cars_component_card_list_item_car_list_item_component__WEBPACK_IMPORTED_MODULE_3__.CarsListItemComponent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonRefresher, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonRefresherContent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.cars-page[_ngcontent-%COMP%] {\n  padding: 0.85rem 0.85rem 1.5rem;\n}\n\n.cars-shell[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n}\n\n.cars-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1rem;\n}\n\n.cars-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.4rem;\n  font-weight: 700;\n  letter-spacing: 0.01em;\n}\n\n.cars-subtitle[_ngcontent-%COMP%] {\n  margin: 0.4rem 0 0;\n  color: var(--ion-color-medium);\n  font-size: 0.95rem;\n  max-width: 36rem;\n}\n\n.add-car-button[_ngcontent-%COMP%] {\n  min-width: 120px;\n  border-radius: 999px;\n}\n\n.cars-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));\n}\n\n.loading-state[_ngcontent-%COMP%] {\n  min-height: 180px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--ion-color-medium);\n  background: rgba(255, 255, 255, 0.03);\n  border-radius: 16px;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1.25rem;\n  margin-top: 0.5rem;\n}\n@media (min-width: 900px) {\n  .empty-state[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 380px;\n    align-items: start;\n  }\n}\n\n.empty-main[_ngcontent-%COMP%] {\n  background: var(--hau-surface);\n  border-radius: var(--hau-radius-xl);\n  box-shadow: var(--hau-shadow-soft);\n  padding: 2rem 2rem 2.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 0;\n}\n\n.empty-illustration[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  border-radius: var(--hau-radius-lg);\n  overflow: hidden;\n  margin-bottom: 1.75rem;\n}\n.empty-illustration[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.empty-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.6rem;\n  font-size: 1.45rem;\n  font-weight: 700;\n  color: var(--hau-text);\n  letter-spacing: -0.01em;\n}\n\n.empty-desc[_ngcontent-%COMP%] {\n  margin: 0 0 1.6rem;\n  color: var(--hau-text-muted);\n  font-size: 0.95rem;\n  max-width: 26rem;\n  line-height: 1.55;\n}\n\n.empty-btn-primary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  width: 100%;\n  max-width: 22rem;\n  padding: 0.8rem 1.25rem;\n  background: var(--hau-primary);\n  color: #fff;\n  border: none;\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.98rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background var(--hau-transition-fast);\n  margin-bottom: 0.75rem;\n}\n.empty-btn-primary[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n}\n.empty-btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--hau-primary-strong);\n}\n\n.empty-btn-secondary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  width: 100%;\n  max-width: 22rem;\n  padding: 0.75rem 1.25rem;\n  background: transparent;\n  color: var(--hau-text-muted);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.95rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: border-color var(--hau-transition-fast), color var(--hau-transition-fast);\n}\n.empty-btn-secondary[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n}\n.empty-btn-secondary[_ngcontent-%COMP%]:hover {\n  border-color: var(--hau-primary);\n  color: var(--hau-primary);\n}\n\n.empty-hint[_ngcontent-%COMP%] {\n  margin: 1rem 0 0;\n  font-size: 0.85rem;\n  color: var(--hau-primary);\n  font-weight: 500;\n}\n\n.empty-sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.empty-card[_ngcontent-%COMP%] {\n  background: var(--hau-surface);\n  border-radius: var(--hau-radius-xl);\n  box-shadow: var(--hau-shadow-soft);\n  padding: 1.25rem 1.4rem;\n}\n\n.empty-card-title[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--hau-text);\n}\n\n.step-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 0.55rem 0;\n}\n.step-item[_ngcontent-%COMP%]    + .step-item[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--hau-border);\n}\n\n.step-check[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: var(--hau-success-soft);\n}\n.step-check[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--hau-success-fg);\n}\n\n.step-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n  padding-top: 0.15rem;\n}\n.step-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: var(--hau-text);\n}\n.step-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--hau-text-muted);\n}\n\n.unlock-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.55rem 0;\n}\n.unlock-item[_ngcontent-%COMP%]    + .unlock-item[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--hau-border);\n}\n\n.unlock-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--hau-radius-sm);\n}\n.unlock-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n}\n.unlock-icon.unlock-doc[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.1);\n}\n.unlock-icon.unlock-doc[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.unlock-icon.unlock-wrench[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n}\n.unlock-icon.unlock-wrench[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.unlock-icon.unlock-cal[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n}\n.unlock-icon.unlock-cal[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n\n.unlock-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n}\n.unlock-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: var(--hau-text);\n}\n.unlock-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--hau-text-muted);\n}\n\n.tip-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  background: var(--hau-primary-soft);\n  border-radius: var(--hau-radius-lg);\n  padding: 1rem 1.1rem;\n}\n\n.tip-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: var(--hau-primary);\n}\n.tip-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #fff;\n}\n\n.tip-text[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--hau-text);\n  line-height: 1.5;\n}\n.tip-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.tip-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--hau-text-muted);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2Fycy9jYXJzLWxpc3QvY2Fycy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSw0REFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBREY7QUFHRTtFQU5GO0lBT0ksZ0NBQUE7SUFDQSxrQkFBQTtFQUFGO0FBQ0Y7O0FBSUE7RUFDRSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFERjtBQUdFO0VBQU0sY0FBQTtFQUFnQixXQUFBO0VBQWEsWUFBQTtBQUVyQzs7QUFDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpREFBQTtFQUNBLHNCQUFBO0FBRUY7QUFBRTtFQUFXLGtCQUFBO0FBR2I7QUFERTtFQUFVLHFDQUFBO0FBSVo7O0FBREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxRkFBQTtBQUlGO0FBRkU7RUFBVyxrQkFBQTtBQUtiO0FBSEU7RUFDRSxnQ0FBQTtFQUNBLHlCQUFBO0FBS0o7O0FBREE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUlGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUdGOztBQUFBO0VBQ0UsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsdUJBQUE7QUFHRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFHRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUVGO0FBQUU7RUFDRSx1Q0FBQTtBQUVKOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0FBQ0Y7QUFDRTtFQUNFLGlCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUFGO0FBRUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFBSjtBQUdFO0VBQ0UsaUJBQUE7RUFDQSw0QkFBQTtBQURKOztBQU1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBSEY7QUFLRTtFQUNFLHVDQUFBO0FBSEo7O0FBT0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0FBSkY7QUFNRTtFQUFXLGtCQUFBO0FBSGI7QUFLRTtFQUFrQixrQ0FBQTtBQUZwQjtBQUVzRDtFQUFXLGNBQUE7QUFDakU7QUFBRTtFQUFrQixvQ0FBQTtBQUdwQjtBQUh1RDtFQUFXLGNBQUE7QUFNbEU7QUFMRTtFQUFrQixtQ0FBQTtBQVFwQjtBQVJ1RDtFQUFXLGNBQUE7QUFXbEU7O0FBUkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBV0Y7QUFURTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQVdKO0FBUkU7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0FBVUo7O0FBTEE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9CQUFBO0FBUUY7O0FBTEE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFRRjtBQU5FO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBUUo7O0FBSkE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFPRjtBQUxFO0VBQVMsZ0JBQUE7QUFRWDtBQU5FO0VBQ0UsaUJBQUE7RUFDQSw0QkFBQTtBQVFKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNhcnMtcGFnZSB7XG4gIHBhZGRpbmc6IDAuODVyZW0gMC44NXJlbSAxLjVyZW07XG59XG5cbi5jYXJzLXNoZWxsIHtcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY2Fycy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uY2Fycy1oZWFkZXIgaDEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xufVxuXG4uY2Fycy1zdWJ0aXRsZSB7XG4gIG1hcmdpbjogMC40cmVtIDAgMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIG1heC13aWR0aDogMzZyZW07XG59XG5cbi5hZGQtY2FyLWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xufVxuXG4uY2Fycy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxcmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMXJlbSwgMWZyKSk7XG59XG5cbi5sb2FkaW5nLXN0YXRlIHtcbiAgbWluLWhlaWdodDogMTgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMyk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBFbXB0eSBzdGF0ZSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcblxuLmVtcHR5LXN0YXRlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdhcDogMS4yNXJlbTtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDM4MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgfVxufVxuXG4vLyBMZWZ0IGNvbHVtblxuLmVtcHR5LW1haW4ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtc3VyZmFjZSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMteGwpO1xuICBib3gtc2hhZG93OiB2YXIoLS1oYXUtc2hhZG93LXNvZnQpO1xuICBwYWRkaW5nOiAycmVtIDJyZW0gMi41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGdhcDogMDtcbn1cblxuLmVtcHR5LWlsbHVzdHJhdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLWxnKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMS43NXJlbTtcblxuICBzdmcgeyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IGhlaWdodDogYXV0bzsgfVxufVxuXG4uZW1wdHktdGl0bGUge1xuICBtYXJnaW46IDAgMCAwLjZyZW07XG4gIGZvbnQtc2l6ZTogMS40NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0KTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XG59XG5cbi5lbXB0eS1kZXNjIHtcbiAgbWFyZ2luOiAwIDAgMS42cmVtO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIG1heC13aWR0aDogMjZyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU1O1xufVxuXG4uZW1wdHktYnRuLXByaW1hcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDIycmVtO1xuICBwYWRkaW5nOiAwLjhyZW0gMS4yNXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LXByaW1hcnkpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLXBpbGwpO1xuICBmb250LXNpemU6IDAuOThyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KTtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcblxuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMS4xNXJlbTsgfVxuXG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtcHJpbWFyeS1zdHJvbmcpOyB9XG59XG5cbi5lbXB0eS1idG4tc2Vjb25kYXJ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAyMnJlbTtcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGF1LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtcGlsbCk7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCksIGNvbG9yIHZhcigtLWhhdS10cmFuc2l0aW9uLWZhc3QpO1xuXG4gIGlvbi1pY29uIHsgZm9udC1zaXplOiAxLjE1cmVtOyB9XG5cbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1oYXUtcHJpbWFyeSk7XG4gICAgY29sb3I6IHZhcigtLWhhdS1wcmltYXJ5KTtcbiAgfVxufVxuXG4uZW1wdHktaGludCB7XG4gIG1hcmdpbjogMXJlbSAwIDA7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgY29sb3I6IHZhcigtLWhhdS1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLy8gUmlnaHQgY29sdW1uXG4uZW1wdHktc2lkZWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cblxuLmVtcHR5LWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtc3VyZmFjZSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMteGwpO1xuICBib3gtc2hhZG93OiB2YXIoLS1oYXUtc2hhZG93LXNvZnQpO1xuICBwYWRkaW5nOiAxLjI1cmVtIDEuNHJlbTtcbn1cblxuLmVtcHR5LWNhcmQtdGl0bGUge1xuICBtYXJnaW46IDAgMCAxcmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dCk7XG59XG5cbi8vIFN0ZXAgaXRlbXMgKEdldHRpbmcgc3RhcnRlZClcbi5zdGVwLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAwLjU1cmVtIDA7XG5cbiAgJiArIC5zdGVwLWl0ZW0ge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgfVxufVxuXG4uc3RlcC1jaGVjayB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtc3VjY2Vzcy1zb2Z0KTtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgY29sb3I6IHZhcigtLWhhdS1zdWNjZXNzLWZnKTtcbiAgfVxufVxuXG4uc3RlcC10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjE1cmVtO1xuICBwYWRkaW5nLXRvcDogMC4xNXJlbTtcblxuICBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS1oYXUtdGV4dCk7XG4gIH1cblxuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICB9XG59XG5cbi8vIFVubG9jayBpdGVtcyAoV2hhdCB5b3UgdW5sb2NrKVxuLnVubG9jay1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAwLjU1cmVtIDA7XG5cbiAgJiArIC51bmxvY2staXRlbSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpO1xuICB9XG59XG5cbi51bmxvY2staWNvbiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1zbSk7XG5cbiAgaW9uLWljb24geyBmb250LXNpemU6IDEuMTVyZW07IH1cblxuICAmLnVubG9jay1kb2MgICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDM3LDk5LDIzNSwwLjEwKTsgaW9uLWljb24geyBjb2xvcjogIzI1NjNlYjsgfSB9XG4gICYudW5sb2NrLXdyZW5jaCB7IGJhY2tncm91bmQ6IHJnYmEoMjQ1LDE1OCwxMSwwLjEyKTsgaW9uLWljb24geyBjb2xvcjogI2Q5NzcwNjsgfSB9XG4gICYudW5sb2NrLWNhbCAgICB7IGJhY2tncm91bmQ6IHJnYmEoMzQsMTk3LDk0LDAuMTIpOyAgaW9uLWljb24geyBjb2xvcjogIzE2YTM0YTsgfSB9XG59XG5cbi51bmxvY2stdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC4xcmVtO1xuXG4gIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAwLjg4cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhcigtLWhhdS10ZXh0KTtcbiAgfVxuXG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICB9XG59XG5cbi8vIFRpcCBib3hcbi50aXAtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMC43NXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LXByaW1hcnktc29mdCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtbGcpO1xuICBwYWRkaW5nOiAxcmVtIDEuMXJlbTtcbn1cblxuLnRpcC1pY29uIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1wcmltYXJ5KTtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLnRpcC10ZXh0IHtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICBsaW5lLWhlaWdodDogMS41O1xuXG4gIHN0cm9uZyB7IGZvbnQtd2VpZ2h0OiA3MDA7IH1cblxuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

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

/***/ 1262
/*!***********************************************************************************!*\
  !*** ./src/app/features/cars/component/card-list-item/car-list-item.component.ts ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarsListItemComponent: () => (/* binding */ CarsListItemComponent)
/* harmony export */ });
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular/standalone */ 7241);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionicons */ 5846);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionicons/icons */ 7958);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ 6075);
/* harmony import */ var _hau_shared_pipes_image_url_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hau/shared/pipes/image-url.pipe */ 9275);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @hau/features/cars/cars.utils */ 5680);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6124);












function CarsListItemComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "imageUrl");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 2, ctx_r0.defaultPhoto), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", ctx_r0.car.make + " " + ctx_r0.car.model);
  }
}
function CarsListItemComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function CarsListItemComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.car.license_plate);
  }
}
function CarsListItemComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "RCA");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r0.daysUntil(ctx_r0.car.rca_expiry_date), "d");
  }
}
function CarsListItemComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "ITP");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r0.daysUntil(ctx_r0.car.itp_expiry_date), "d");
  }
}
function CarsListItemComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "ROV");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r0.daysUntil(ctx_r0.car.rov_expiry_date), "d");
  }
}
function CarsListItemComponent_Conditional_13_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" \u00B7 ", ctx_r0.formatMileage(ctx_r0.car.last_oil_service_mileage), " ");
  }
}
function CarsListItemComponent_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Oil service");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](6, CarsListItemComponent_Conditional_13_Conditional_1_Conditional_6_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.formatDate(ctx_r0.car.last_oil_service_date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r0.car.last_oil_service_mileage ? 6 : -1);
  }
}
function CarsListItemComponent_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Ownership since");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.formatDate(ctx_r0.car.ownership_start_date));
  }
}
function CarsListItemComponent_Conditional_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Current mileage");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.formatMileage(ctx_r0.car.current_mileage));
  }
}
function CarsListItemComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](1, CarsListItemComponent_Conditional_13_Conditional_1_Template, 7, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](2, CarsListItemComponent_Conditional_13_Conditional_2_Template, 6, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](3, CarsListItemComponent_Conditional_13_Conditional_3_Template, 6, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r0.car.last_oil_service_date || ctx_r0.car.last_oil_service_mileage ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r0.car.ownership_start_date ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r0.car.current_mileage ? 3 : -1);
  }
}
class CarsListItemComponent {
  constructor() {
    this.daysUntil = _hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_7__.daysUntil;
    this.formatDate = _hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_7__.formatDate;
    this.formatMileage = _hau_features_cars_cars_utils__WEBPACK_IMPORTED_MODULE_7__.formatMileage;
    (0,ionicons__WEBPACK_IMPORTED_MODULE_1__.a)({
      shieldCheckmarkOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_2__.shieldCheckmarkOutline,
      buildOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_2__.buildOutline,
      carOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_2__.carOutline,
      waterOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_2__.waterOutline,
      calendarOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_2__.calendarOutline,
      speedometerOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_2__.speedometerOutline
    });
  }
  get defaultPhoto() {
    const def = this.car.photos?.find(p => p.is_default) ?? this.car.photos?.[0];
    return def?.url ?? '';
  }
  static {
    this.ɵfac = function CarsListItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CarsListItemComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: CarsListItemComponent,
      selectors: [["app-car-list-item"]],
      inputs: {
        car: "car"
      },
      decls: 21,
      vars: 14,
      consts: [[1, "car-card"], [1, "image-shell"], [1, "car-image", 3, "src", "alt"], [1, "image-placeholder"], [1, "preview-info"], [1, "preview-title-row"], [1, "preview-title"], [1, "preview-plate"], [1, "preview-pills"], [1, "doc-pill", "doc-pill--rca"], [1, "doc-pill", "doc-pill--itp"], [1, "doc-pill", "doc-pill--rov"], [1, "preview-meta"], [1, "card-footer"], ["mat-flat-button", "", "color", "primary", 1, "details-button"], ["mat-button", "", 1, "edit-button"], ["name", "car-outline"], ["name", "shield-checkmark-outline"], ["name", "build-outline"], [1, "preview-meta-row"], ["name", "water-outline", 1, "meta-icon"], [1, "meta-label"], [1, "meta-value"], ["name", "calendar-outline", 1, "meta-icon"], ["name", "speedometer-outline", 1, "meta-icon"]],
      template: function CarsListItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](2, CarsListItemComponent_Conditional_2_Template, 2, 4, "img", 2)(3, CarsListItemComponent_Conditional_3_Template, 2, 0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](8, CarsListItemComponent_Conditional_8_Template, 2, 1, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](10, CarsListItemComponent_Conditional_10_Template, 6, 1, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](11, CarsListItemComponent_Conditional_11_Template, 6, 1, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](12, CarsListItemComponent_Conditional_12_Template, 6, 1, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](13, CarsListItemComponent_Conditional_13_Template, 4, 3, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-card-actions", 13)(15, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "transloco");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.defaultPhoto ? 2 : 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx.car.make, " ", ctx.car.model);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.car.license_plate ? 8 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.daysUntil(ctx.car.rca_expiry_date) !== null ? 10 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.daysUntil(ctx.car.itp_expiry_date) !== null ? 11 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.daysUntil(ctx.car.rov_expiry_date) !== null ? 12 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.car.last_oil_service_date || ctx.car.last_oil_service_mileage || ctx.car.ownership_start_date || ctx.car.current_mileage ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](17, 10, "car.viewDetails"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](20, 12, "car.edit"), " ");
        }
      },
      dependencies: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_0__.IonIcon, _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__.TranslocoModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__.TranslocoPipe, _hau_shared_pipes_image_url_pipe__WEBPACK_IMPORTED_MODULE_4__.ImageUrlPipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.car-card[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-2xl);\n  box-shadow: var(--hau-shadow-soft);\n  overflow: hidden;\n  padding: 0;\n  transition: transform var(--hau-transition-fast), border-color var(--hau-transition-fast), box-shadow var(--hau-transition-fast);\n  cursor: pointer;\n}\n.car-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: rgba(15, 23, 42, 0.14);\n  box-shadow: var(--hau-shadow-md);\n}\n\n.image-shell[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 16/9;\n  overflow: hidden;\n  background: var(--hau-bg-soft);\n}\n\n.car-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.image-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--hau-text-dim);\n  font-size: 3rem;\n}\n\n.preview-info[_ngcontent-%COMP%] {\n  padding: 12px 14px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 0;\n}\n\n.preview-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.preview-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--hau-text);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.preview-plate[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  background: var(--hau-bg-soft);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-sm);\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--hau-text);\n  letter-spacing: 0.06em;\n  align-self: flex-start;\n}\n\n.preview-pills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.doc-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 8px;\n  border-radius: var(--hau-radius-sm);\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.doc-pill[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.doc-pill--rca[_ngcontent-%COMP%] {\n  background: var(--hau-primary-soft);\n  color: var(--hau-primary);\n}\n.doc-pill--itp[_ngcontent-%COMP%] {\n  background: var(--hau-warning-soft);\n  color: var(--hau-warning-fg);\n}\n.doc-pill--rov[_ngcontent-%COMP%] {\n  background: var(--hau-success-soft);\n  color: var(--hau-success-fg);\n}\n\n.preview-meta[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--hau-border);\n  padding: 10px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.preview-meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.82rem;\n}\n\n.meta-icon[_ngcontent-%COMP%] {\n  color: var(--hau-text-dim);\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n\n.meta-label[_ngcontent-%COMP%] {\n  color: var(--hau-text-muted);\n  flex-shrink: 0;\n}\n\n.meta-value[_ngcontent-%COMP%] {\n  color: var(--hau-text);\n  font-weight: 500;\n  margin-left: auto;\n  text-align: right;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  padding: 0 0.85rem 0.85rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  min-width: 0;\n  min-height: 36px;\n  padding: 0 1rem;\n  font-size: 0.88rem;\n  font-weight: 600;\n  text-transform: none;\n  border-radius: var(--hau-radius-pill);\n}\n\n.details-button[_ngcontent-%COMP%] {\n  flex: 1 1 120px;\n}\n\n.edit-button[_ngcontent-%COMP%] {\n  flex: 1 1 100px;\n  color: var(--hau-text-muted);\n}\n\n@media (max-width: 639px) {\n  .card-footer[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2Fycy9jb21wb25lbnQvY2FyZC1saXN0LWl0ZW0vY2FyLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnSUFBQTtFQUdBLGVBQUE7QUFGRjtBQUlFO0VBQ0UsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0FBRko7O0FBT0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBSkY7O0FBT0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUpGOztBQU9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQUpGOztBQVFBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQUxGOztBQVFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQUxGOztBQVFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFMRjs7QUFRQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBTEY7O0FBU0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7QUFORjs7QUFTQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFORjtBQVFFO0VBQVcsaUJBQUE7QUFMYjtBQU9FO0VBQ0UsbUNBQUE7RUFDQSx5QkFBQTtBQUxKO0FBUUU7RUFDRSxtQ0FBQTtFQUNBLDRCQUFBO0FBTko7QUFTRTtFQUNFLG1DQUFBO0VBQ0EsNEJBQUE7QUFQSjs7QUFZQTtFQUNFLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUFURjs7QUFZQTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFURjs7QUFZQTtFQUNFLDRCQUFBO0VBQ0EsY0FBQTtBQVRGOztBQVlBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFURjs7QUFhQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQVZGOztBQWFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0FBVkY7O0FBYUE7RUFBa0IsZUFBQTtBQVRsQjs7QUFXQTtFQUNFLGVBQUE7RUFDQSw0QkFBQTtBQVJGOztBQVdBO0VBQ0U7SUFBZSx3QkFBQTtFQVBmO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgQ2FyZCB3cmFwcGVyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmNhci1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LXN1cmZhY2UpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy0yeGwpO1xuICBib3gtc2hhZG93OiB2YXIoLS1oYXUtc2hhZG93LXNvZnQpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCksXG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvciB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KSxcbiAgICAgICAgICAgICAgYm94LXNoYWRvdyB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTUsIDIzLCA0MiwgMC4xNCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0taGF1LXNoYWRvdy1tZCk7XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFBob3RvIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmltYWdlLXNoZWxsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGFzcGVjdC1yYXRpbzogMTYgLyA5O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtYmctc29mdCk7XG59XG5cbi5jYXItaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbWFnZS1wbGFjZWhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtZGltKTtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgSW5mbyBzZWN0aW9uIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnByZXZpZXctaW5mbyB7XG4gIHBhZGRpbmc6IDEycHggMTRweCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4ucHJldmlldy10aXRsZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbn1cblxuLnByZXZpZXctdGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ucHJldmlldy1wbGF0ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMnB4IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1iZy1zb2Z0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGF1LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtc20pO1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dCk7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBEb2MgcGlsbHMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ucHJldmlldy1waWxscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA2cHg7XG59XG5cbi5kb2MtcGlsbCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1zbSk7XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMC44cmVtOyB9XG5cbiAgJi0tcmNhIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtcHJpbWFyeS1zb2Z0KTtcbiAgICBjb2xvcjogdmFyKC0taGF1LXByaW1hcnkpO1xuICB9XG5cbiAgJi0taXRwIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtd2FybmluZy1zb2Z0KTtcbiAgICBjb2xvcjogdmFyKC0taGF1LXdhcm5pbmctZmcpO1xuICB9XG5cbiAgJi0tcm92IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtc3VjY2Vzcy1zb2Z0KTtcbiAgICBjb2xvcjogdmFyKC0taGF1LXN1Y2Nlc3MtZmcpO1xuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBNZXRhIHJvd3Mgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ucHJldmlldy1tZXRhIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpO1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xufVxuXG4ucHJldmlldy1tZXRhLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmb250LXNpemU6IDAuODJyZW07XG59XG5cbi5tZXRhLWljb24ge1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtZGltKTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLm1ldGEtbGFiZWwge1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLm1ldGEtdmFsdWUge1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBGb290ZXIgYWN0aW9ucyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5jYXJkLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMCAwLjg1cmVtIDAuODVyZW07XG59XG5cbmJ1dHRvbiB7XG4gIG1pbi13aWR0aDogMDtcbiAgbWluLWhlaWdodDogMzZweDtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBmb250LXNpemU6IDAuODhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLXBpbGwpO1xufVxuXG4uZGV0YWlscy1idXR0b24geyBmbGV4OiAxIDEgMTIwcHg7IH1cblxuLmVkaXQtYnV0dG9uIHtcbiAgZmxleDogMSAxIDEwMHB4O1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgLmNhcmQtZm9vdGVyIHsganVzdGlmeS1jb250ZW50OiBzdHJldGNoOyB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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

/***/ },

/***/ 9059
/*!*************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_array-chunk.mjs ***!
  \*************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   coerceArray: () => (/* binding */ coerceArray)
/* harmony export */ });
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}


/***/ },

/***/ 8438
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_breakpoints-observer-chunk.mjs ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreakpointObserver: () => (/* binding */ BreakpointObserver),
/* harmony export */   MediaMatcher: () => (/* binding */ MediaMatcher)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4665);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 7470);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_platform-chunk.mjs */ 8508);
/* harmony import */ var _array_chunk_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_array-chunk.mjs */ 9059);






const mediaQueriesForWebkitCompatibility = new Set();
let mediaQueryStyleNode;
class MediaMatcher {
  _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_12__.Platform);
  _nonce = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.CSP_NONCE, {
    optional: true
  });
  _matchMedia;
  constructor() {
    this._matchMedia = this._platform.isBrowser && window.matchMedia ? window.matchMedia.bind(window) : noopMatchMedia;
  }
  matchMedia(query) {
    if (this._platform.WEBKIT || this._platform.BLINK) {
      createEmptyStyleRule(query, this._nonce);
    }
    return this._matchMedia(query);
  }
  static ɵfac = function MediaMatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MediaMatcher)();
  };
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: MediaMatcher,
    factory: MediaMatcher.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(MediaMatcher, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [], null);
})();
function createEmptyStyleRule(query, nonce) {
  if (mediaQueriesForWebkitCompatibility.has(query)) {
    return;
  }
  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement('style');
      if (nonce) {
        mediaQueryStyleNode.setAttribute('nonce', nonce);
      }
      mediaQueryStyleNode.setAttribute('type', 'text/css');
      document.head.appendChild(mediaQueryStyleNode);
    }
    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query} {body{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query);
    }
  } catch (e) {
    console.error(e);
  }
}
function noopMatchMedia(query) {
  return {
    matches: query === 'all' || query === '',
    media: query,
    addListener: () => {},
    removeListener: () => {}
  };
}
class BreakpointObserver {
  _mediaMatcher = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(MediaMatcher);
  _zone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone);
  _queries = new Map();
  _destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  constructor() {}
  ngOnDestroy() {
    this._destroySubject.next();
    this._destroySubject.complete();
  }
  isMatched(value) {
    const queries = splitQueries((0,_array_chunk_mjs__WEBPACK_IMPORTED_MODULE_13__.coerceArray)(value));
    return queries.some(mediaQuery => this._registerQuery(mediaQuery).mql.matches);
  }
  observe(value) {
    const queries = splitQueries((0,_array_chunk_mjs__WEBPACK_IMPORTED_MODULE_13__.coerceArray)(value));
    const observables = queries.map(query => this._registerQuery(query).observable);
    let stateObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)(observables);
    stateObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.concat)(stateObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)), stateObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(0)));
    return stateObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(breakpointStates => {
      const response = {
        matches: false,
        breakpoints: {}
      };
      breakpointStates.forEach(({
        matches,
        query
      }) => {
        response.matches = response.matches || matches;
        response.breakpoints[query] = matches;
      });
      return response;
    }));
  }
  _registerQuery(query) {
    if (this._queries.has(query)) {
      return this._queries.get(query);
    }
    const mql = this._mediaMatcher.matchMedia(query);
    const queryObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
      const handler = e => this._zone.run(() => observer.next(e));
      mql.addListener(handler);
      return () => {
        mql.removeListener(handler);
      };
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(mql), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(({
      matches
    }) => ({
      query,
      matches
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._destroySubject));
    const output = {
      observable: queryObservable,
      mql
    };
    this._queries.set(query, output);
    return output;
  }
  static ɵfac = function BreakpointObserver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BreakpointObserver)();
  };
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: BreakpointObserver,
    factory: BreakpointObserver.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(BreakpointObserver, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [], null);
})();
function splitQueries(queries) {
  return queries.map(query => query.split(',')).reduce((a1, a2) => a1.concat(a2)).map(query => query.trim());
}


/***/ },

/***/ 3433
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_directionality-chunk.mjs ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DIR_DOCUMENT: () => (/* binding */ DIR_DOCUMENT),
/* harmony export */   Directionality: () => (/* binding */ Directionality),
/* harmony export */   _resolveDirectionality: () => (/* binding */ _resolveDirectionality)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4363);


const DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('cdk-dir-doc', {
  providedIn: 'root',
  factory: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)
});
const RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || '';
  if (value === 'auto' && typeof navigator !== 'undefined' && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? 'rtl' : 'ltr';
  }
  return value === 'rtl' ? 'rtl' : 'ltr';
}
class Directionality {
  get value() {
    return this.valueSignal();
  }
  valueSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('ltr', ...(ngDevMode ? [{
    debugName: "valueSignal"
  }] : []));
  change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  constructor() {
    const _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(DIR_DOCUMENT, {
      optional: true
    });
    if (_document) {
      const bodyDir = _document.body ? _document.body.dir : null;
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      this.valueSignal.set(_resolveDirectionality(bodyDir || htmlDir || 'ltr'));
    }
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static ɵfac = function Directionality_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Directionality)();
  };
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: Directionality,
    factory: Directionality.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(Directionality, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [], null);
})();


/***/ },

/***/ 8456
/*!***************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_element-chunk.mjs ***!
  \***************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _isNumberValue: () => (/* binding */ _isNumberValue),
/* harmony export */   coerceElement: () => (/* binding */ coerceElement),
/* harmony export */   coerceNumberProperty: () => (/* binding */ coerceNumberProperty)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);

function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef ? elementOrRef.nativeElement : elementOrRef;
}


/***/ },

/***/ 603
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_fake-event-detection-chunk.mjs ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFakeMousedownFromScreenReader: () => (/* binding */ isFakeMousedownFromScreenReader),
/* harmony export */   isFakeTouchstartFromScreenReader: () => (/* binding */ isFakeTouchstartFromScreenReader)
/* harmony export */ });
function isFakeMousedownFromScreenReader(event) {
  return event.buttons === 0 || event.detail === 0;
}
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}


/***/ },

/***/ 6522
/*!*********************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_focus-monitor-chunk.mjs ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdkMonitorFocus: () => (/* binding */ CdkMonitorFocus),
/* harmony export */   FOCUS_MONITOR_DEFAULT_OPTIONS: () => (/* binding */ FOCUS_MONITOR_DEFAULT_OPTIONS),
/* harmony export */   FocusMonitor: () => (/* binding */ FocusMonitor),
/* harmony export */   FocusMonitorDetectionMode: () => (/* binding */ FocusMonitorDetectionMode),
/* harmony export */   INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS: () => (/* binding */ INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS),
/* harmony export */   INPUT_MODALITY_DETECTOR_OPTIONS: () => (/* binding */ INPUT_MODALITY_DETECTOR_OPTIONS),
/* harmony export */   InputModalityDetector: () => (/* binding */ InputModalityDetector)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4198);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7470);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _fake_event_detection_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_fake-event-detection-chunk.mjs */ 603);
/* harmony import */ var _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_keycodes-chunk.mjs */ 7552);
/* harmony import */ var _shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_shadow-dom-chunk.mjs */ 8310);
/* harmony import */ var _platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_platform-chunk.mjs */ 8508);
/* harmony import */ var _passive_listeners_chunk_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_passive-listeners-chunk.mjs */ 2548);
/* harmony import */ var _element_chunk_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_element-chunk.mjs */ 8456);










const INPUT_MODALITY_DETECTOR_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('cdk-input-modality-detector-options');
const INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
  ignoreKeys: [_keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__.ALT, _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__.CONTROL, _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__.MAC_META, _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__.META, _keycodes_chunk_mjs__WEBPACK_IMPORTED_MODULE_9__.SHIFT]
};
const TOUCH_BUFFER_MS = 650;
const modalityEventListenerOptions = {
  passive: true,
  capture: true
};
class InputModalityDetector {
  _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_11__.Platform);
  _listenerCleanups;
  modalityDetected;
  modalityChanged;
  get mostRecentModality() {
    return this._modality.value;
  }
  _mostRecentTarget = null;
  _modality = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
  _options;
  _lastTouchMs = 0;
  _onKeydown = event => {
    if (this._options?.ignoreKeys?.some(keyCode => keyCode === event.keyCode)) {
      return;
    }
    this._modality.next('keyboard');
    this._mostRecentTarget = (0,_shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_10__._getEventTarget)(event);
  };
  _onMousedown = event => {
    if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
      return;
    }
    this._modality.next((0,_fake_event_detection_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__.isFakeMousedownFromScreenReader)(event) ? 'keyboard' : 'mouse');
    this._mostRecentTarget = (0,_shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_10__._getEventTarget)(event);
  };
  _onTouchstart = event => {
    if ((0,_fake_event_detection_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__.isFakeTouchstartFromScreenReader)(event)) {
      this._modality.next('keyboard');
      return;
    }
    this._lastTouchMs = Date.now();
    this._modality.next('touch');
    this._mostRecentTarget = (0,_shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_10__._getEventTarget)(event);
  };
  constructor() {
    const ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone);
    const document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT);
    const options = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(INPUT_MODALITY_DETECTOR_OPTIONS, {
      optional: true
    });
    this._options = {
      ...INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS,
      ...options
    };
    this.modalityDetected = this._modality.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.skip)(1));
    this.modalityChanged = this.modalityDetected.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)());
    if (this._platform.isBrowser) {
      const renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2).createRenderer(null, null);
      this._listenerCleanups = ngZone.runOutsideAngular(() => {
        return [renderer.listen(document, 'keydown', this._onKeydown, modalityEventListenerOptions), renderer.listen(document, 'mousedown', this._onMousedown, modalityEventListenerOptions), renderer.listen(document, 'touchstart', this._onTouchstart, modalityEventListenerOptions)];
      });
    }
  }
  ngOnDestroy() {
    this._modality.complete();
    this._listenerCleanups?.forEach(cleanup => cleanup());
  }
  static ɵfac = function InputModalityDetector_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || InputModalityDetector)();
  };
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: InputModalityDetector,
    factory: InputModalityDetector.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(InputModalityDetector, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [], null);
})();
var FocusMonitorDetectionMode;
(function (FocusMonitorDetectionMode) {
  FocusMonitorDetectionMode[FocusMonitorDetectionMode["IMMEDIATE"] = 0] = "IMMEDIATE";
  FocusMonitorDetectionMode[FocusMonitorDetectionMode["EVENTUAL"] = 1] = "EVENTUAL";
})(FocusMonitorDetectionMode || (FocusMonitorDetectionMode = {}));
const FOCUS_MONITOR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('cdk-focus-monitor-default-options');
const captureEventListenerOptions = (0,_passive_listeners_chunk_mjs__WEBPACK_IMPORTED_MODULE_12__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
class FocusMonitor {
  _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone);
  _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_platform_chunk_mjs__WEBPACK_IMPORTED_MODULE_11__.Platform);
  _inputModalityDetector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(InputModalityDetector);
  _origin = null;
  _lastFocusOrigin = null;
  _windowFocused = false;
  _windowFocusTimeoutId;
  _originTimeoutId;
  _originFromTouchInteraction = false;
  _elementInfo = new Map();
  _monitoredElementCount = 0;
  _rootNodeFocusListenerCount = new Map();
  _detectionMode;
  _windowFocusListener = () => {
    this._windowFocused = true;
    this._windowFocusTimeoutId = setTimeout(() => this._windowFocused = false);
  };
  _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT);
  _stopInputModalityDetector = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  constructor() {
    const options = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(FOCUS_MONITOR_DEFAULT_OPTIONS, {
      optional: true
    });
    this._detectionMode = options?.detectionMode || FocusMonitorDetectionMode.IMMEDIATE;
  }
  _rootNodeFocusAndBlurListener = event => {
    const target = (0,_shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_10__._getEventTarget)(event);
    for (let element = target; element; element = element.parentElement) {
      if (event.type === 'focus') {
        this._onFocus(event, element);
      } else {
        this._onBlur(event, element);
      }
    }
  };
  monitor(element, checkChildren = false) {
    const nativeElement = (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_13__.coerceElement)(element);
    if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)();
    }
    const rootNode = (0,_shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_10__._getShadowRoot)(nativeElement) || this._document;
    const cachedInfo = this._elementInfo.get(nativeElement);
    if (cachedInfo) {
      if (checkChildren) {
        cachedInfo.checkChildren = true;
      }
      return cachedInfo.subject;
    }
    const info = {
      checkChildren: checkChildren,
      subject: new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject(),
      rootNode
    };
    this._elementInfo.set(nativeElement, info);
    this._registerGlobalListeners(info);
    return info.subject;
  }
  stopMonitoring(element) {
    const nativeElement = (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_13__.coerceElement)(element);
    const elementInfo = this._elementInfo.get(nativeElement);
    if (elementInfo) {
      elementInfo.subject.complete();
      this._setClasses(nativeElement);
      this._elementInfo.delete(nativeElement);
      this._removeGlobalListeners(elementInfo);
    }
  }
  focusVia(element, origin, options) {
    const nativeElement = (0,_element_chunk_mjs__WEBPACK_IMPORTED_MODULE_13__.coerceElement)(element);
    const focusedElement = this._document.activeElement;
    if (nativeElement === focusedElement) {
      this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
    } else {
      this._setOrigin(origin);
      if (typeof nativeElement.focus === 'function') {
        nativeElement.focus(options);
      }
    }
  }
  ngOnDestroy() {
    this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
  }
  _getWindow() {
    return this._document.defaultView || window;
  }
  _getFocusOrigin(focusEventTarget) {
    if (this._origin) {
      if (this._originFromTouchInteraction) {
        return this._shouldBeAttributedToTouch(focusEventTarget) ? 'touch' : 'program';
      } else {
        return this._origin;
      }
    }
    if (this._windowFocused && this._lastFocusOrigin) {
      return this._lastFocusOrigin;
    }
    if (focusEventTarget && this._isLastInteractionFromInputLabel(focusEventTarget)) {
      return 'mouse';
    }
    return 'program';
  }
  _shouldBeAttributedToTouch(focusEventTarget) {
    return this._detectionMode === FocusMonitorDetectionMode.EVENTUAL || !!focusEventTarget?.contains(this._inputModalityDetector._mostRecentTarget);
  }
  _setClasses(element, origin) {
    element.classList.toggle('cdk-focused', !!origin);
    element.classList.toggle('cdk-touch-focused', origin === 'touch');
    element.classList.toggle('cdk-keyboard-focused', origin === 'keyboard');
    element.classList.toggle('cdk-mouse-focused', origin === 'mouse');
    element.classList.toggle('cdk-program-focused', origin === 'program');
  }
  _setOrigin(origin, isFromInteraction = false) {
    this._ngZone.runOutsideAngular(() => {
      this._origin = origin;
      this._originFromTouchInteraction = origin === 'touch' && isFromInteraction;
      if (this._detectionMode === FocusMonitorDetectionMode.IMMEDIATE) {
        clearTimeout(this._originTimeoutId);
        const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
        this._originTimeoutId = setTimeout(() => this._origin = null, ms);
      }
    });
  }
  _onFocus(event, element) {
    const elementInfo = this._elementInfo.get(element);
    const focusEventTarget = (0,_shadow_dom_chunk_mjs__WEBPACK_IMPORTED_MODULE_10__._getEventTarget)(event);
    if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
      return;
    }
    this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
  }
  _onBlur(event, element) {
    const elementInfo = this._elementInfo.get(element);
    if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
      return;
    }
    this._setClasses(element);
    this._emitOrigin(elementInfo, null);
  }
  _emitOrigin(info, origin) {
    if (info.subject.observers.length) {
      this._ngZone.run(() => info.subject.next(origin));
    }
  }
  _registerGlobalListeners(elementInfo) {
    if (!this._platform.isBrowser) {
      return;
    }
    const rootNode = elementInfo.rootNode;
    const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;
    if (!rootNodeFocusListeners) {
      this._ngZone.runOutsideAngular(() => {
        rootNode.addEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.addEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
      });
    }
    this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1);
    if (++this._monitoredElementCount === 1) {
      this._ngZone.runOutsideAngular(() => {
        const window = this._getWindow();
        window.addEventListener('focus', this._windowFocusListener);
      });
      this._inputModalityDetector.modalityDetected.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._stopInputModalityDetector)).subscribe(modality => {
        this._setOrigin(modality, true);
      });
    }
  }
  _removeGlobalListeners(elementInfo) {
    const rootNode = elementInfo.rootNode;
    if (this._rootNodeFocusListenerCount.has(rootNode)) {
      const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);
      if (rootNodeFocusListeners > 1) {
        this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
      } else {
        rootNode.removeEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.removeEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        this._rootNodeFocusListenerCount.delete(rootNode);
      }
    }
    if (! --this._monitoredElementCount) {
      const window = this._getWindow();
      window.removeEventListener('focus', this._windowFocusListener);
      this._stopInputModalityDetector.next();
      clearTimeout(this._windowFocusTimeoutId);
      clearTimeout(this._originTimeoutId);
    }
  }
  _originChanged(element, origin, elementInfo) {
    this._setClasses(element, origin);
    this._emitOrigin(elementInfo, origin);
    this._lastFocusOrigin = origin;
  }
  _getClosestElementsInfo(element) {
    const results = [];
    this._elementInfo.forEach((info, currentElement) => {
      if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
        results.push([currentElement, info]);
      }
    });
    return results;
  }
  _isLastInteractionFromInputLabel(focusEventTarget) {
    const {
      _mostRecentTarget: mostRecentTarget,
      mostRecentModality
    } = this._inputModalityDetector;
    if (mostRecentModality !== 'mouse' || !mostRecentTarget || mostRecentTarget === focusEventTarget || focusEventTarget.nodeName !== 'INPUT' && focusEventTarget.nodeName !== 'TEXTAREA' || focusEventTarget.disabled) {
      return false;
    }
    const labels = focusEventTarget.labels;
    if (labels) {
      for (let i = 0; i < labels.length; i++) {
        if (labels[i].contains(mostRecentTarget)) {
          return true;
        }
      }
    }
    return false;
  }
  static ɵfac = function FocusMonitor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FocusMonitor)();
  };
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: FocusMonitor,
    factory: FocusMonitor.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(FocusMonitor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [], null);
})();
class CdkMonitorFocus {
  _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
  _focusMonitor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(FocusMonitor);
  _monitorSubscription;
  _focusOrigin = null;
  cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  constructor() {}
  get focusOrigin() {
    return this._focusOrigin;
  }
  ngAfterViewInit() {
    const element = this._elementRef.nativeElement;
    this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute('cdkMonitorSubtreeFocus')).subscribe(origin => {
      this._focusOrigin = origin;
      this.cdkFocusChange.emit(origin);
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._monitorSubscription?.unsubscribe();
  }
  static ɵfac = function CdkMonitorFocus_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CdkMonitorFocus)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: CdkMonitorFocus,
    selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
    outputs: {
      cdkFocusChange: "cdkFocusChange"
    },
    exportAs: ["cdkMonitorFocus"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(CdkMonitorFocus, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]',
      exportAs: 'cdkMonitorFocus'
    }]
  }], () => [], {
    cdkFocusChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();


/***/ },

/***/ 7552
/*!****************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_keycodes-chunk.mjs ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ A),
/* harmony export */   ALT: () => (/* binding */ ALT),
/* harmony export */   APOSTROPHE: () => (/* binding */ APOSTROPHE),
/* harmony export */   AT_SIGN: () => (/* binding */ AT_SIGN),
/* harmony export */   B: () => (/* binding */ B),
/* harmony export */   BACKSLASH: () => (/* binding */ BACKSLASH),
/* harmony export */   BACKSPACE: () => (/* binding */ BACKSPACE),
/* harmony export */   C: () => (/* binding */ C),
/* harmony export */   CAPS_LOCK: () => (/* binding */ CAPS_LOCK),
/* harmony export */   CLOSE_SQUARE_BRACKET: () => (/* binding */ CLOSE_SQUARE_BRACKET),
/* harmony export */   COMMA: () => (/* binding */ COMMA),
/* harmony export */   CONTEXT_MENU: () => (/* binding */ CONTEXT_MENU),
/* harmony export */   CONTROL: () => (/* binding */ CONTROL),
/* harmony export */   D: () => (/* binding */ D),
/* harmony export */   DASH: () => (/* binding */ DASH),
/* harmony export */   DELETE: () => (/* binding */ DELETE),
/* harmony export */   DOWN_ARROW: () => (/* binding */ DOWN_ARROW),
/* harmony export */   E: () => (/* binding */ E),
/* harmony export */   EIGHT: () => (/* binding */ EIGHT),
/* harmony export */   END: () => (/* binding */ END),
/* harmony export */   ENTER: () => (/* binding */ ENTER),
/* harmony export */   EQUALS: () => (/* binding */ EQUALS),
/* harmony export */   ESCAPE: () => (/* binding */ ESCAPE),
/* harmony export */   F: () => (/* binding */ F),
/* harmony export */   F1: () => (/* binding */ F1),
/* harmony export */   F10: () => (/* binding */ F10),
/* harmony export */   F11: () => (/* binding */ F11),
/* harmony export */   F12: () => (/* binding */ F12),
/* harmony export */   F2: () => (/* binding */ F2),
/* harmony export */   F3: () => (/* binding */ F3),
/* harmony export */   F4: () => (/* binding */ F4),
/* harmony export */   F5: () => (/* binding */ F5),
/* harmony export */   F6: () => (/* binding */ F6),
/* harmony export */   F7: () => (/* binding */ F7),
/* harmony export */   F8: () => (/* binding */ F8),
/* harmony export */   F9: () => (/* binding */ F9),
/* harmony export */   FF_EQUALS: () => (/* binding */ FF_EQUALS),
/* harmony export */   FF_MINUS: () => (/* binding */ FF_MINUS),
/* harmony export */   FF_MUTE: () => (/* binding */ FF_MUTE),
/* harmony export */   FF_SEMICOLON: () => (/* binding */ FF_SEMICOLON),
/* harmony export */   FF_VOLUME_DOWN: () => (/* binding */ FF_VOLUME_DOWN),
/* harmony export */   FF_VOLUME_UP: () => (/* binding */ FF_VOLUME_UP),
/* harmony export */   FIRST_MEDIA: () => (/* binding */ FIRST_MEDIA),
/* harmony export */   FIVE: () => (/* binding */ FIVE),
/* harmony export */   FOUR: () => (/* binding */ FOUR),
/* harmony export */   G: () => (/* binding */ G),
/* harmony export */   H: () => (/* binding */ H),
/* harmony export */   HOME: () => (/* binding */ HOME),
/* harmony export */   I: () => (/* binding */ I),
/* harmony export */   INSERT: () => (/* binding */ INSERT),
/* harmony export */   J: () => (/* binding */ J),
/* harmony export */   K: () => (/* binding */ K),
/* harmony export */   L: () => (/* binding */ L),
/* harmony export */   LAST_MEDIA: () => (/* binding */ LAST_MEDIA),
/* harmony export */   LEFT_ARROW: () => (/* binding */ LEFT_ARROW),
/* harmony export */   M: () => (/* binding */ M),
/* harmony export */   MAC_ENTER: () => (/* binding */ MAC_ENTER),
/* harmony export */   MAC_META: () => (/* binding */ MAC_META),
/* harmony export */   MAC_WK_CMD_LEFT: () => (/* binding */ MAC_WK_CMD_LEFT),
/* harmony export */   MAC_WK_CMD_RIGHT: () => (/* binding */ MAC_WK_CMD_RIGHT),
/* harmony export */   META: () => (/* binding */ META),
/* harmony export */   MUTE: () => (/* binding */ MUTE),
/* harmony export */   N: () => (/* binding */ N),
/* harmony export */   NINE: () => (/* binding */ NINE),
/* harmony export */   NUMPAD_DIVIDE: () => (/* binding */ NUMPAD_DIVIDE),
/* harmony export */   NUMPAD_EIGHT: () => (/* binding */ NUMPAD_EIGHT),
/* harmony export */   NUMPAD_FIVE: () => (/* binding */ NUMPAD_FIVE),
/* harmony export */   NUMPAD_FOUR: () => (/* binding */ NUMPAD_FOUR),
/* harmony export */   NUMPAD_MINUS: () => (/* binding */ NUMPAD_MINUS),
/* harmony export */   NUMPAD_MULTIPLY: () => (/* binding */ NUMPAD_MULTIPLY),
/* harmony export */   NUMPAD_NINE: () => (/* binding */ NUMPAD_NINE),
/* harmony export */   NUMPAD_ONE: () => (/* binding */ NUMPAD_ONE),
/* harmony export */   NUMPAD_PERIOD: () => (/* binding */ NUMPAD_PERIOD),
/* harmony export */   NUMPAD_PLUS: () => (/* binding */ NUMPAD_PLUS),
/* harmony export */   NUMPAD_SEVEN: () => (/* binding */ NUMPAD_SEVEN),
/* harmony export */   NUMPAD_SIX: () => (/* binding */ NUMPAD_SIX),
/* harmony export */   NUMPAD_THREE: () => (/* binding */ NUMPAD_THREE),
/* harmony export */   NUMPAD_TWO: () => (/* binding */ NUMPAD_TWO),
/* harmony export */   NUMPAD_ZERO: () => (/* binding */ NUMPAD_ZERO),
/* harmony export */   NUM_CENTER: () => (/* binding */ NUM_CENTER),
/* harmony export */   NUM_LOCK: () => (/* binding */ NUM_LOCK),
/* harmony export */   O: () => (/* binding */ O),
/* harmony export */   ONE: () => (/* binding */ ONE),
/* harmony export */   OPEN_SQUARE_BRACKET: () => (/* binding */ OPEN_SQUARE_BRACKET),
/* harmony export */   P: () => (/* binding */ P),
/* harmony export */   PAGE_DOWN: () => (/* binding */ PAGE_DOWN),
/* harmony export */   PAGE_UP: () => (/* binding */ PAGE_UP),
/* harmony export */   PAUSE: () => (/* binding */ PAUSE),
/* harmony export */   PERIOD: () => (/* binding */ PERIOD),
/* harmony export */   PLUS_SIGN: () => (/* binding */ PLUS_SIGN),
/* harmony export */   PRINT_SCREEN: () => (/* binding */ PRINT_SCREEN),
/* harmony export */   Q: () => (/* binding */ Q),
/* harmony export */   QUESTION_MARK: () => (/* binding */ QUESTION_MARK),
/* harmony export */   R: () => (/* binding */ R),
/* harmony export */   RIGHT_ARROW: () => (/* binding */ RIGHT_ARROW),
/* harmony export */   S: () => (/* binding */ S),
/* harmony export */   SCROLL_LOCK: () => (/* binding */ SCROLL_LOCK),
/* harmony export */   SEMICOLON: () => (/* binding */ SEMICOLON),
/* harmony export */   SEVEN: () => (/* binding */ SEVEN),
/* harmony export */   SHIFT: () => (/* binding */ SHIFT),
/* harmony export */   SINGLE_QUOTE: () => (/* binding */ SINGLE_QUOTE),
/* harmony export */   SIX: () => (/* binding */ SIX),
/* harmony export */   SLASH: () => (/* binding */ SLASH),
/* harmony export */   SPACE: () => (/* binding */ SPACE),
/* harmony export */   T: () => (/* binding */ T),
/* harmony export */   TAB: () => (/* binding */ TAB),
/* harmony export */   THREE: () => (/* binding */ THREE),
/* harmony export */   TILDE: () => (/* binding */ TILDE),
/* harmony export */   TWO: () => (/* binding */ TWO),
/* harmony export */   U: () => (/* binding */ U),
/* harmony export */   UP_ARROW: () => (/* binding */ UP_ARROW),
/* harmony export */   V: () => (/* binding */ V),
/* harmony export */   VOLUME_DOWN: () => (/* binding */ VOLUME_DOWN),
/* harmony export */   VOLUME_UP: () => (/* binding */ VOLUME_UP),
/* harmony export */   W: () => (/* binding */ W),
/* harmony export */   X: () => (/* binding */ X),
/* harmony export */   Y: () => (/* binding */ Y),
/* harmony export */   Z: () => (/* binding */ Z),
/* harmony export */   ZERO: () => (/* binding */ ZERO)
/* harmony export */ });
const MAC_ENTER = 3;
const BACKSPACE = 8;
const TAB = 9;
const NUM_CENTER = 12;
const ENTER = 13;
const SHIFT = 16;
const CONTROL = 17;
const ALT = 18;
const PAUSE = 19;
const CAPS_LOCK = 20;
const ESCAPE = 27;
const SPACE = 32;
const PAGE_UP = 33;
const PAGE_DOWN = 34;
const END = 35;
const HOME = 36;
const LEFT_ARROW = 37;
const UP_ARROW = 38;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;
const PLUS_SIGN = 43;
const PRINT_SCREEN = 44;
const INSERT = 45;
const DELETE = 46;
const ZERO = 48;
const ONE = 49;
const TWO = 50;
const THREE = 51;
const FOUR = 52;
const FIVE = 53;
const SIX = 54;
const SEVEN = 55;
const EIGHT = 56;
const NINE = 57;
const FF_SEMICOLON = 59;
const FF_EQUALS = 61;
const QUESTION_MARK = 63;
const AT_SIGN = 64;
const A = 65;
const B = 66;
const C = 67;
const D = 68;
const E = 69;
const F = 70;
const G = 71;
const H = 72;
const I = 73;
const J = 74;
const K = 75;
const L = 76;
const M = 77;
const N = 78;
const O = 79;
const P = 80;
const Q = 81;
const R = 82;
const S = 83;
const T = 84;
const U = 85;
const V = 86;
const W = 87;
const X = 88;
const Y = 89;
const Z = 90;
const META = 91;
const MAC_WK_CMD_LEFT = 91;
const MAC_WK_CMD_RIGHT = 93;
const CONTEXT_MENU = 93;
const NUMPAD_ZERO = 96;
const NUMPAD_ONE = 97;
const NUMPAD_TWO = 98;
const NUMPAD_THREE = 99;
const NUMPAD_FOUR = 100;
const NUMPAD_FIVE = 101;
const NUMPAD_SIX = 102;
const NUMPAD_SEVEN = 103;
const NUMPAD_EIGHT = 104;
const NUMPAD_NINE = 105;
const NUMPAD_MULTIPLY = 106;
const NUMPAD_PLUS = 107;
const NUMPAD_MINUS = 109;
const NUMPAD_PERIOD = 110;
const NUMPAD_DIVIDE = 111;
const F1 = 112;
const F2 = 113;
const F3 = 114;
const F4 = 115;
const F5 = 116;
const F6 = 117;
const F7 = 118;
const F8 = 119;
const F9 = 120;
const F10 = 121;
const F11 = 122;
const F12 = 123;
const NUM_LOCK = 144;
const SCROLL_LOCK = 145;
const FIRST_MEDIA = 166;
const FF_MINUS = 173;
const MUTE = 173;
const VOLUME_DOWN = 174;
const VOLUME_UP = 175;
const FF_MUTE = 181;
const FF_VOLUME_DOWN = 182;
const LAST_MEDIA = 183;
const FF_VOLUME_UP = 183;
const SEMICOLON = 186;
const EQUALS = 187;
const COMMA = 188;
const DASH = 189;
const PERIOD = 190;
const SLASH = 191;
const APOSTROPHE = 192;
const TILDE = 192;
const OPEN_SQUARE_BRACKET = 219;
const BACKSLASH = 220;
const CLOSE_SQUARE_BRACKET = 221;
const SINGLE_QUOTE = 222;
const MAC_META = 224;


/***/ },

/***/ 2548
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_passive-listeners-chunk.mjs ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizePassiveListenerOptions: () => (/* binding */ normalizePassiveListenerOptions),
/* harmony export */   supportsPassiveEventListeners: () => (/* binding */ supportsPassiveEventListeners)
/* harmony export */ });
let supportsPassiveEvents;
function supportsPassiveEventListeners() {
  if (supportsPassiveEvents == null && typeof window !== 'undefined') {
    try {
      window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
        get: () => supportsPassiveEvents = true
      }));
    } finally {
      supportsPassiveEvents = supportsPassiveEvents || false;
    }
  }
  return supportsPassiveEvents;
}
function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
}


/***/ },

/***/ 8508
/*!****************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_platform-chunk.mjs ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Platform: () => (/* binding */ Platform)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



let hasV8BreakIterator;
try {
  hasV8BreakIterator = typeof Intl !== 'undefined' && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
class Platform {
  _platformId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID);
  isBrowser = this._platformId ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this._platformId) : typeof document === 'object' && !!document;
  EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
  TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
  BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT;
  WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
  IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);
  FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
  ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
  SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  constructor() {}
  static ɵfac = function Platform_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Platform)();
  };
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: Platform,
    factory: Platform.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(Platform, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [], null);
})();


/***/ },

/***/ 8310
/*!******************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_shadow-dom-chunk.mjs ***!
  \******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _getEventTarget: () => (/* binding */ _getEventTarget),
/* harmony export */   _getFocusedElementPierceShadowDom: () => (/* binding */ _getFocusedElementPierceShadowDom),
/* harmony export */   _getShadowRoot: () => (/* binding */ _getShadowRoot),
/* harmony export */   _supportsShadowDom: () => (/* binding */ _supportsShadowDom)
/* harmony export */ });
let shadowDomIsSupported;
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== 'undefined' ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}
function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    if (typeof ShadowRoot !== 'undefined' && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}
function _getFocusedElementPierceShadowDom() {
  let activeElement = typeof document !== 'undefined' && document ? document.activeElement : null;
  while (activeElement && activeElement.shadowRoot) {
    const newActiveElement = activeElement.shadowRoot.activeElement;
    if (newActiveElement === activeElement) {
      break;
    } else {
      activeElement = newActiveElement;
    }
  }
  return activeElement;
}
function _getEventTarget(event) {
  return event.composedPath ? event.composedPath()[0] : event.target;
}


/***/ },

/***/ 9504
/*!********************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/_style-loader-chunk.mjs ***!
  \********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _CdkPrivateStyleLoader: () => (/* binding */ _CdkPrivateStyleLoader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);


const appsWithLoaders = new WeakMap();
class _CdkPrivateStyleLoader {
  _appRef;
  _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector);
  _environmentInjector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.EnvironmentInjector);
  load(loader) {
    const appRef = this._appRef = this._appRef || this._injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef);
    let data = appsWithLoaders.get(appRef);
    if (!data) {
      data = {
        loaders: new Set(),
        refs: []
      };
      appsWithLoaders.set(appRef, data);
      appRef.onDestroy(() => {
        appsWithLoaders.get(appRef)?.refs.forEach(ref => ref.destroy());
        appsWithLoaders.delete(appRef);
      });
    }
    if (!data.loaders.has(loader)) {
      data.loaders.add(loader);
      data.refs.push((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.createComponent)(loader, {
        environmentInjector: this._environmentInjector
      }));
    }
  }
  static ɵfac = function _CdkPrivateStyleLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkPrivateStyleLoader)();
  };
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: _CdkPrivateStyleLoader,
    factory: _CdkPrivateStyleLoader.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(_CdkPrivateStyleLoader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();


/***/ },

/***/ 3680
/*!*****************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/bidi.mjs ***!
  \*****************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiModule: () => (/* binding */ BidiModule),
/* harmony export */   DIR_DOCUMENT: () => (/* reexport safe */ _directionality_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__.DIR_DOCUMENT),
/* harmony export */   Dir: () => (/* binding */ Dir),
/* harmony export */   Directionality: () => (/* reexport safe */ _directionality_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__.Directionality)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _directionality_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_directionality-chunk.mjs */ 3433);




class Dir {
  _isInitialized = false;
  _rawDir = '';
  change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  get dir() {
    return this.valueSignal();
  }
  set dir(value) {
    const previousValue = this.valueSignal();
    this.valueSignal.set((0,_directionality_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__._resolveDirectionality)(value));
    this._rawDir = value;
    if (previousValue !== this.valueSignal() && this._isInitialized) {
      this.change.emit(this.valueSignal());
    }
  }
  get value() {
    return this.dir;
  }
  valueSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('ltr', ...(ngDevMode ? [{
    debugName: "valueSignal"
  }] : []));
  ngAfterContentInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static ɵfac = function Dir_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Dir)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: Dir,
    selectors: [["", "dir", ""]],
    hostVars: 1,
    hostBindings: function Dir_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dir", ctx._rawDir);
      }
    },
    inputs: {
      dir: "dir"
    },
    outputs: {
      change: "dirChange"
    },
    exportAs: ["dir"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _directionality_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__.Directionality,
      useExisting: Dir
    }])]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(Dir, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[dir]',
      providers: [{
        provide: _directionality_chunk_mjs__WEBPACK_IMPORTED_MODULE_2__.Directionality,
        useExisting: Dir
      }],
      host: {
        '[attr.dir]': '_rawDir'
      },
      exportAs: 'dir'
    }]
  }], null, {
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['dirChange']
    }],
    dir: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class BidiModule {
  static ɵfac = function BidiModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BidiModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: BidiModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(BidiModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [Dir],
      exports: [Dir]
    }]
  }], null, null);
})();


/***/ },

/***/ 7432
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_animation-chunk.mjs ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MATERIAL_ANIMATIONS: () => (/* binding */ MATERIAL_ANIMATIONS),
/* harmony export */   _animationsDisabled: () => (/* binding */ _animationsDisabled),
/* harmony export */   _getAnimationsState: () => (/* binding */ _getAnimationsState)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ 8438);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4363);


const MATERIAL_ANIMATIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('MATERIAL_ANIMATIONS');
let reducedMotion = null;
function _getAnimationsState() {
  if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(MATERIAL_ANIMATIONS, {
    optional: true
  })?.animationsDisabled || (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, {
    optional: true
  }) === 'NoopAnimations') {
    return 'di-disabled';
  }
  reducedMotion ??= (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__.MediaMatcher).matchMedia('(prefers-reduced-motion)').matches;
  return reducedMotion ? 'reduced-motion' : 'enabled';
}
function _animationsDisabled() {
  return _getAnimationsState() !== 'enabled';
}


/***/ },

/***/ 5326
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_icon-button-chunk.mjs ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_BUTTON_CONFIG: () => (/* binding */ MAT_BUTTON_CONFIG),
/* harmony export */   MatButtonBase: () => (/* binding */ MatButtonBase),
/* harmony export */   MatIconAnchor: () => (/* binding */ MatIconAnchor),
/* harmony export */   MatIconButton: () => (/* binding */ MatIconButton)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ 6522);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/private */ 9504);
/* harmony import */ var _ripple_loader_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_ripple-loader-chunk.mjs */ 7100);
/* harmony import */ var _structural_styles_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_structural-styles-chunk.mjs */ 2158);
/* harmony import */ var _animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_animation-chunk.mjs */ 7432);







const _c0 = ["mat-icon-button", ""];
const _c1 = ["*"];
const MAT_BUTTON_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('MAT_BUTTON_CONFIG');
function transformTabIndex(value) {
  return value == null ? undefined : (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.numberAttribute)(value);
}
class MatButtonBase {
  _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
  _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone);
  _animationsDisabled = (0,_animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_7__._animationsDisabled)();
  _config = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(MAT_BUTTON_CONFIG, {
    optional: true
  });
  _focusMonitor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor);
  _cleanupClick;
  _renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2);
  _rippleLoader = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_ripple_loader_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__.MatRippleLoader);
  _isAnchor;
  _isFab = false;
  color;
  get disableRipple() {
    return this._disableRipple;
  }
  set disableRipple(value) {
    this._disableRipple = value;
    this._updateRippleDisabled();
  }
  _disableRipple = false;
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._updateRippleDisabled();
  }
  _disabled = false;
  ariaDisabled;
  disabledInteractive;
  tabIndex;
  set _tabindex(value) {
    this.tabIndex = value;
  }
  constructor() {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_4__._CdkPrivateStyleLoader).load(_structural_styles_chunk_mjs__WEBPACK_IMPORTED_MODULE_6__._StructuralStylesLoader);
    const element = this._elementRef.nativeElement;
    this._isAnchor = element.tagName === 'A';
    this.disabledInteractive = this._config?.disabledInteractive ?? false;
    this.color = this._config?.color ?? null;
    this._rippleLoader?.configureRipple(element, {
      className: 'mat-mdc-button-ripple'
    });
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true);
    if (this._isAnchor) {
      this._setupAsAnchor();
    }
  }
  ngOnDestroy() {
    this._cleanupClick?.();
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);
  }
  focus(origin = 'program', options) {
    if (origin) {
      this._focusMonitor.focusVia(this._elementRef.nativeElement, origin, options);
    } else {
      this._elementRef.nativeElement.focus(options);
    }
  }
  _getAriaDisabled() {
    if (this.ariaDisabled != null) {
      return this.ariaDisabled;
    }
    if (this._isAnchor) {
      return this.disabled || null;
    }
    return this.disabled && this.disabledInteractive ? true : null;
  }
  _getDisabledAttribute() {
    return this.disabledInteractive || !this.disabled ? null : true;
  }
  _updateRippleDisabled() {
    this._rippleLoader?.setDisabled(this._elementRef.nativeElement, this.disableRipple || this.disabled);
  }
  _getTabIndex() {
    if (this._isAnchor) {
      return this.disabled && !this.disabledInteractive ? -1 : this.tabIndex;
    }
    return this.tabIndex;
  }
  _setupAsAnchor() {
    this._cleanupClick = this._ngZone.runOutsideAngular(() => this._renderer.listen(this._elementRef.nativeElement, 'click', event => {
      if (this.disabled) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    }));
  }
  static ɵfac = function MatButtonBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatButtonBase)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatButtonBase,
    hostAttrs: [1, "mat-mdc-button-base"],
    hostVars: 13,
    hostBindings: function MatButtonBase_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx._getDisabledAttribute())("aria-disabled", ctx._getAriaDisabled())("tabindex", ctx._getTabIndex());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.color ? "mat-" + ctx.color : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-button-disabled", ctx.disabled)("mat-mdc-button-disabled-interactive", ctx.disabledInteractive)("mat-unthemed", !ctx.color)("_mat-animation-noopable", ctx._animationsDisabled);
      }
    },
    inputs: {
      color: "color",
      disableRipple: [2, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute],
      disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute],
      ariaDisabled: [2, "aria-disabled", "ariaDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", transformTabIndex],
      _tabindex: [2, "tabindex", "_tabindex", transformTabIndex]
    }
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(MatButtonBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      host: {
        'class': 'mat-mdc-button-base',
        '[class]': 'color ? "mat-" + color : ""',
        '[attr.disabled]': '_getDisabledAttribute()',
        '[attr.aria-disabled]': '_getAriaDisabled()',
        '[attr.tabindex]': '_getTabIndex()',
        '[class.mat-mdc-button-disabled]': 'disabled',
        '[class.mat-mdc-button-disabled-interactive]': 'disabledInteractive',
        '[class.mat-unthemed]': '!color',
        '[class._mat-animation-noopable]': '_animationsDisabled'
      }
    }]
  }], () => [], {
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disableRipple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute
      }]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute
      }]
    }],
    ariaDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute,
        alias: 'aria-disabled'
      }]
    }],
    disabledInteractive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute
      }]
    }],
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: transformTabIndex
      }]
    }],
    _tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        alias: 'tabindex',
        transform: transformTabIndex
      }]
    }]
  });
})();
class MatIconButton extends MatButtonBase {
  constructor() {
    super();
    this._rippleLoader.configureRipple(this._elementRef.nativeElement, {
      centered: true
    });
  }
  static ɵfac = function MatIconButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatIconButton)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatIconButton,
    selectors: [["button", "mat-icon-button", ""], ["a", "mat-icon-button", ""], ["button", "matIconButton", ""], ["a", "matIconButton", ""]],
    hostAttrs: [1, "mdc-icon-button", "mat-mdc-icon-button"],
    exportAs: ["matButton", "matAnchor"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    attrs: _c0,
    ngContentSelectors: _c1,
    decls: 4,
    vars: 0,
    consts: [[1, "mat-mdc-button-persistent-ripple", "mdc-icon-button__ripple"], [1, "mat-focus-indicator"], [1, "mat-mdc-button-touch-target"]],
    template: function MatIconButton_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElement"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElement"](2, "span", 1)(3, "span", 2);
      }
    },
    styles: [".mat-mdc-icon-button {\n  -webkit-user-select: none;\n  user-select: none;\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  fill: currentColor;\n  text-decoration: none;\n  cursor: pointer;\n  z-index: 0;\n  overflow: visible;\n  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));\n  flex-shrink: 0;\n  text-align: center;\n  width: var(--mat-icon-button-state-layer-size, 40px);\n  height: var(--mat-icon-button-state-layer-size, 40px);\n  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);\n  font-size: var(--mat-icon-button-icon-size, 24px);\n  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-icon-button .mat-mdc-button-ripple,\n.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,\n.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  border-radius: inherit;\n}\n.mat-mdc-icon-button .mat-mdc-button-ripple {\n  overflow: hidden;\n}\n.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {\n  content: \"\";\n  opacity: 0;\n}\n.mat-mdc-icon-button .mdc-button__label,\n.mat-mdc-icon-button .mat-icon {\n  z-index: 1;\n  position: relative;\n}\n.mat-mdc-icon-button .mat-focus-indicator {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  border-radius: inherit;\n}\n.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {\n  content: \"\";\n  border-radius: inherit;\n}\n.mat-mdc-icon-button .mat-ripple-element {\n  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n}\n.mat-mdc-icon-button .mat-mdc-button-touch-target {\n  position: absolute;\n  top: 50%;\n  height: var(--mat-icon-button-touch-target-size, 48px);\n  display: var(--mat-icon-button-touch-target-display, block);\n  left: 50%;\n  width: var(--mat-icon-button-touch-target-size, 48px);\n  transform: translate(-50%, -50%);\n}\n.mat-mdc-icon-button._mat-animation-noopable {\n  transition: none !important;\n  animation: none !important;\n}\n.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n.mat-mdc-icon-button img,\n.mat-mdc-icon-button svg {\n  width: var(--mat-icon-button-icon-size, 24px);\n  height: var(--mat-icon-button-icon-size, 24px);\n  vertical-align: baseline;\n}\n.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {\n  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));\n}\n.mat-mdc-icon-button[hidden] {\n  display: none;\n}\n.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {\n  background: transparent;\n  opacity: 1;\n}\n", "@media (forced-colors: active) {\n  .mat-mdc-button:not(.mdc-button--outlined),\n  .mat-mdc-unelevated-button:not(.mdc-button--outlined),\n  .mat-mdc-raised-button:not(.mdc-button--outlined),\n  .mat-mdc-outlined-button:not(.mdc-button--outlined),\n  .mat-mdc-button-base.mat-tonal-button,\n  .mat-mdc-icon-button.mat-mdc-icon-button,\n  .mat-mdc-outlined-button .mdc-button__ripple {\n    outline: solid 1px;\n  }\n}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(MatIconButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: `button[mat-icon-button], a[mat-icon-button], button[matIconButton], a[matIconButton]`,
      host: {
        'class': 'mdc-icon-button mat-mdc-icon-button'
      },
      exportAs: 'matButton, matAnchor',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<span class=\"mat-mdc-button-persistent-ripple mdc-icon-button__ripple\"></span>\n\n<ng-content></ng-content>\n\n<!--\n  The indicator can't be directly on the button, because MDC uses ::before for high contrast\n  indication and it can't be on the ripple, because it has a border radius and overflow: hidden.\n-->\n<span class=\"mat-focus-indicator\"></span>\n\n<span class=\"mat-mdc-button-touch-target\"></span>\n",
      styles: [".mat-mdc-icon-button {\n  -webkit-user-select: none;\n  user-select: none;\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  fill: currentColor;\n  text-decoration: none;\n  cursor: pointer;\n  z-index: 0;\n  overflow: visible;\n  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));\n  flex-shrink: 0;\n  text-align: center;\n  width: var(--mat-icon-button-state-layer-size, 40px);\n  height: var(--mat-icon-button-state-layer-size, 40px);\n  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);\n  font-size: var(--mat-icon-button-icon-size, 24px);\n  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-icon-button .mat-mdc-button-ripple,\n.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,\n.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  border-radius: inherit;\n}\n.mat-mdc-icon-button .mat-mdc-button-ripple {\n  overflow: hidden;\n}\n.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {\n  content: \"\";\n  opacity: 0;\n}\n.mat-mdc-icon-button .mdc-button__label,\n.mat-mdc-icon-button .mat-icon {\n  z-index: 1;\n  position: relative;\n}\n.mat-mdc-icon-button .mat-focus-indicator {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  border-radius: inherit;\n}\n.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {\n  content: \"\";\n  border-radius: inherit;\n}\n.mat-mdc-icon-button .mat-ripple-element {\n  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n}\n.mat-mdc-icon-button .mat-mdc-button-touch-target {\n  position: absolute;\n  top: 50%;\n  height: var(--mat-icon-button-touch-target-size, 48px);\n  display: var(--mat-icon-button-touch-target-display, block);\n  left: 50%;\n  width: var(--mat-icon-button-touch-target-size, 48px);\n  transform: translate(-50%, -50%);\n}\n.mat-mdc-icon-button._mat-animation-noopable {\n  transition: none !important;\n  animation: none !important;\n}\n.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n.mat-mdc-icon-button img,\n.mat-mdc-icon-button svg {\n  width: var(--mat-icon-button-icon-size, 24px);\n  height: var(--mat-icon-button-icon-size, 24px);\n  vertical-align: baseline;\n}\n.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {\n  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));\n}\n.mat-mdc-icon-button[hidden] {\n  display: none;\n}\n.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {\n  background: transparent;\n  opacity: 1;\n}\n", "@media (forced-colors: active) {\n  .mat-mdc-button:not(.mdc-button--outlined),\n  .mat-mdc-unelevated-button:not(.mdc-button--outlined),\n  .mat-mdc-raised-button:not(.mdc-button--outlined),\n  .mat-mdc-outlined-button:not(.mdc-button--outlined),\n  .mat-mdc-button-base.mat-tonal-button,\n  .mat-mdc-icon-button.mat-mdc-icon-button,\n  .mat-mdc-outlined-button .mdc-button__ripple {\n    outline: solid 1px;\n  }\n}\n"]
    }]
  }], () => [], null);
})();
const MatIconAnchor = MatIconButton;


/***/ },

/***/ 7828
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_ripple-chunk.mjs ***!
  \*******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_RIPPLE_GLOBAL_OPTIONS: () => (/* binding */ MAT_RIPPLE_GLOBAL_OPTIONS),
/* harmony export */   MatRipple: () => (/* binding */ MatRipple),
/* harmony export */   RippleRef: () => (/* binding */ RippleRef),
/* harmony export */   RippleRenderer: () => (/* binding */ RippleRenderer),
/* harmony export */   RippleState: () => (/* binding */ RippleState),
/* harmony export */   defaultRippleAnimationConfig: () => (/* binding */ defaultRippleAnimationConfig)
/* harmony export */ });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ 8508);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 8310);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 2548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ 603);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ 8456);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/private */ 9504);
/* harmony import */ var _animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_animation-chunk.mjs */ 7432);







var RippleState;
(function (RippleState) {
  RippleState[RippleState["FADING_IN"] = 0] = "FADING_IN";
  RippleState[RippleState["VISIBLE"] = 1] = "VISIBLE";
  RippleState[RippleState["FADING_OUT"] = 2] = "FADING_OUT";
  RippleState[RippleState["HIDDEN"] = 3] = "HIDDEN";
})(RippleState || (RippleState = {}));
class RippleRef {
  _renderer;
  element;
  config;
  _animationForciblyDisabledThroughCss;
  state = RippleState.HIDDEN;
  constructor(_renderer, element, config, _animationForciblyDisabledThroughCss = false) {
    this._renderer = _renderer;
    this.element = element;
    this.config = config;
    this._animationForciblyDisabledThroughCss = _animationForciblyDisabledThroughCss;
  }
  fadeOut() {
    this._renderer.fadeOutRipple(this);
  }
}
const passiveCapturingEventOptions$1 = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
class RippleEventManager {
  _events = new Map();
  addHandler(ngZone, name, element, handler) {
    const handlersForEvent = this._events.get(name);
    if (handlersForEvent) {
      const handlersForElement = handlersForEvent.get(element);
      if (handlersForElement) {
        handlersForElement.add(handler);
      } else {
        handlersForEvent.set(element, new Set([handler]));
      }
    } else {
      this._events.set(name, new Map([[element, new Set([handler])]]));
      ngZone.runOutsideAngular(() => {
        document.addEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
      });
    }
  }
  removeHandler(name, element, handler) {
    const handlersForEvent = this._events.get(name);
    if (!handlersForEvent) {
      return;
    }
    const handlersForElement = handlersForEvent.get(element);
    if (!handlersForElement) {
      return;
    }
    handlersForElement.delete(handler);
    if (handlersForElement.size === 0) {
      handlersForEvent.delete(element);
    }
    if (handlersForEvent.size === 0) {
      this._events.delete(name);
      document.removeEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
    }
  }
  _delegateEventHandler = event => {
    const target = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__._getEventTarget)(event);
    if (target) {
      this._events.get(event.type)?.forEach((handlers, element) => {
        if (element === target || element.contains(target)) {
          handlers.forEach(handler => handler.handleEvent(event));
        }
      });
    }
  };
}
const defaultRippleAnimationConfig = {
  enterDuration: 225,
  exitDuration: 150
};
const ignoreMouseEventsTimeout = 800;
const passiveCapturingEventOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
const pointerDownEvents = ['mousedown', 'touchstart'];
const pointerUpEvents = ['mouseup', 'mouseleave', 'touchend', 'touchcancel'];
class _MatRippleStylesLoader {
  static ɵfac = function _MatRippleStylesLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRippleStylesLoader)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: _MatRippleStylesLoader,
    selectors: [["ng-component"]],
    hostAttrs: ["mat-ripple-style-loader", ""],
    decls: 0,
    vars: 0,
    template: function _MatRippleStylesLoader_Template(rf, ctx) {},
    styles: [".mat-ripple {\n  overflow: hidden;\n  position: relative;\n}\n.mat-ripple:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible;\n}\n\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale3d(0, 0, 0);\n  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));\n}\n@media (forced-colors: active) {\n  .mat-ripple-element {\n    display: none;\n  }\n}\n.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {\n  display: none;\n}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__.setClassMetadata(_MatRippleStylesLoader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      template: '',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.None,
      host: {
        'mat-ripple-style-loader': ''
      },
      styles: [".mat-ripple {\n  overflow: hidden;\n  position: relative;\n}\n.mat-ripple:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible;\n}\n\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale3d(0, 0, 0);\n  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));\n}\n@media (forced-colors: active) {\n  .mat-ripple-element {\n    display: none;\n  }\n}\n.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {\n  display: none;\n}\n"]
    }]
  }], null, null);
})();
class RippleRenderer {
  _target;
  _ngZone;
  _platform;
  _containerElement;
  _triggerElement = null;
  _isPointerDown = false;
  _activeRipples = new Map();
  _mostRecentTransientRipple = null;
  _lastTouchStartEvent;
  _pointerUpEventsRegistered = false;
  _containerRect = null;
  static _eventManager = new RippleEventManager();
  constructor(_target, _ngZone, elementOrElementRef, _platform, injector) {
    this._target = _target;
    this._ngZone = _ngZone;
    this._platform = _platform;
    if (_platform.isBrowser) {
      this._containerElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceElement)(elementOrElementRef);
    }
    if (injector) {
      injector.get(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_7__._CdkPrivateStyleLoader).load(_MatRippleStylesLoader);
    }
  }
  fadeInRipple(x, y, config = {}) {
    const containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();
    const animationConfig = {
      ...defaultRippleAnimationConfig,
      ...config.animation
    };
    if (config.centered) {
      x = containerRect.left + containerRect.width / 2;
      y = containerRect.top + containerRect.height / 2;
    }
    const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
    const offsetX = x - containerRect.left;
    const offsetY = y - containerRect.top;
    const enterDuration = animationConfig.enterDuration;
    const ripple = document.createElement('div');
    ripple.classList.add('mat-ripple-element');
    ripple.style.left = `${offsetX - radius}px`;
    ripple.style.top = `${offsetY - radius}px`;
    ripple.style.height = `${radius * 2}px`;
    ripple.style.width = `${radius * 2}px`;
    if (config.color != null) {
      ripple.style.backgroundColor = config.color;
    }
    ripple.style.transitionDuration = `${enterDuration}ms`;
    this._containerElement.appendChild(ripple);
    const computedStyles = window.getComputedStyle(ripple);
    const userTransitionProperty = computedStyles.transitionProperty;
    const userTransitionDuration = computedStyles.transitionDuration;
    const animationForciblyDisabledThroughCss = userTransitionProperty === 'none' || userTransitionDuration === '0s' || userTransitionDuration === '0s, 0s' || containerRect.width === 0 && containerRect.height === 0;
    const rippleRef = new RippleRef(this, ripple, config, animationForciblyDisabledThroughCss);
    ripple.style.transform = 'scale3d(1, 1, 1)';
    rippleRef.state = RippleState.FADING_IN;
    if (!config.persistent) {
      this._mostRecentTransientRipple = rippleRef;
    }
    let eventListeners = null;
    if (!animationForciblyDisabledThroughCss && (enterDuration || animationConfig.exitDuration)) {
      this._ngZone.runOutsideAngular(() => {
        const onTransitionEnd = () => {
          if (eventListeners) {
            eventListeners.fallbackTimer = null;
          }
          clearTimeout(fallbackTimer);
          this._finishRippleTransition(rippleRef);
        };
        const onTransitionCancel = () => this._destroyRipple(rippleRef);
        const fallbackTimer = setTimeout(onTransitionCancel, enterDuration + 100);
        ripple.addEventListener('transitionend', onTransitionEnd);
        ripple.addEventListener('transitioncancel', onTransitionCancel);
        eventListeners = {
          onTransitionEnd,
          onTransitionCancel,
          fallbackTimer
        };
      });
    }
    this._activeRipples.set(rippleRef, eventListeners);
    if (animationForciblyDisabledThroughCss || !enterDuration) {
      this._finishRippleTransition(rippleRef);
    }
    return rippleRef;
  }
  fadeOutRipple(rippleRef) {
    if (rippleRef.state === RippleState.FADING_OUT || rippleRef.state === RippleState.HIDDEN) {
      return;
    }
    const rippleEl = rippleRef.element;
    const animationConfig = {
      ...defaultRippleAnimationConfig,
      ...rippleRef.config.animation
    };
    rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
    rippleEl.style.opacity = '0';
    rippleRef.state = RippleState.FADING_OUT;
    if (rippleRef._animationForciblyDisabledThroughCss || !animationConfig.exitDuration) {
      this._finishRippleTransition(rippleRef);
    }
  }
  fadeOutAll() {
    this._getActiveRipples().forEach(ripple => ripple.fadeOut());
  }
  fadeOutAllNonPersistent() {
    this._getActiveRipples().forEach(ripple => {
      if (!ripple.config.persistent) {
        ripple.fadeOut();
      }
    });
  }
  setupTriggerEvents(elementOrElementRef) {
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceElement)(elementOrElementRef);
    if (!this._platform.isBrowser || !element || element === this._triggerElement) {
      return;
    }
    this._removeTriggerEvents();
    this._triggerElement = element;
    pointerDownEvents.forEach(type => {
      RippleRenderer._eventManager.addHandler(this._ngZone, type, element, this);
    });
  }
  handleEvent(event) {
    if (event.type === 'mousedown') {
      this._onMousedown(event);
    } else if (event.type === 'touchstart') {
      this._onTouchStart(event);
    } else {
      this._onPointerUp();
    }
    if (!this._pointerUpEventsRegistered) {
      this._ngZone.runOutsideAngular(() => {
        pointerUpEvents.forEach(type => {
          this._triggerElement.addEventListener(type, this, passiveCapturingEventOptions);
        });
      });
      this._pointerUpEventsRegistered = true;
    }
  }
  _finishRippleTransition(rippleRef) {
    if (rippleRef.state === RippleState.FADING_IN) {
      this._startFadeOutTransition(rippleRef);
    } else if (rippleRef.state === RippleState.FADING_OUT) {
      this._destroyRipple(rippleRef);
    }
  }
  _startFadeOutTransition(rippleRef) {
    const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
    const {
      persistent
    } = rippleRef.config;
    rippleRef.state = RippleState.VISIBLE;
    if (!persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
      rippleRef.fadeOut();
    }
  }
  _destroyRipple(rippleRef) {
    const eventListeners = this._activeRipples.get(rippleRef) ?? null;
    this._activeRipples.delete(rippleRef);
    if (!this._activeRipples.size) {
      this._containerRect = null;
    }
    if (rippleRef === this._mostRecentTransientRipple) {
      this._mostRecentTransientRipple = null;
    }
    rippleRef.state = RippleState.HIDDEN;
    if (eventListeners !== null) {
      rippleRef.element.removeEventListener('transitionend', eventListeners.onTransitionEnd);
      rippleRef.element.removeEventListener('transitioncancel', eventListeners.onTransitionCancel);
      if (eventListeners.fallbackTimer !== null) {
        clearTimeout(eventListeners.fallbackTimer);
      }
    }
    rippleRef.element.remove();
  }
  _onMousedown(event) {
    const isFakeMousedown = (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.isFakeMousedownFromScreenReader)(event);
    const isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;
    if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
      this._isPointerDown = true;
      this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
    }
  }
  _onTouchStart(event) {
    if (!this._target.rippleDisabled && !(0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.isFakeTouchstartFromScreenReader)(event)) {
      this._lastTouchStartEvent = Date.now();
      this._isPointerDown = true;
      const touches = event.changedTouches;
      if (touches) {
        for (let i = 0; i < touches.length; i++) {
          this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
        }
      }
    }
  }
  _onPointerUp() {
    if (!this._isPointerDown) {
      return;
    }
    this._isPointerDown = false;
    this._getActiveRipples().forEach(ripple => {
      const isVisible = ripple.state === RippleState.VISIBLE || ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;
      if (!ripple.config.persistent && isVisible) {
        ripple.fadeOut();
      }
    });
  }
  _getActiveRipples() {
    return Array.from(this._activeRipples.keys());
  }
  _removeTriggerEvents() {
    const trigger = this._triggerElement;
    if (trigger) {
      pointerDownEvents.forEach(type => RippleRenderer._eventManager.removeHandler(type, trigger, this));
      if (this._pointerUpEventsRegistered) {
        pointerUpEvents.forEach(type => trigger.removeEventListener(type, this, passiveCapturingEventOptions));
        this._pointerUpEventsRegistered = false;
      }
    }
  }
}
function distanceToFurthestCorner(x, y, rect) {
  const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}
const MAT_RIPPLE_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('mat-ripple-global-options');
class MatRipple {
  _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef);
  _animationsDisabled = (0,_animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_8__._animationsDisabled)();
  color;
  unbounded = false;
  centered = false;
  radius = 0;
  animation;
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value) {
      this.fadeOutAllNonPersistent();
    }
    this._disabled = value;
    this._setupTriggerEventsIfEnabled();
  }
  _disabled = false;
  get trigger() {
    return this._trigger || this._elementRef.nativeElement;
  }
  set trigger(trigger) {
    this._trigger = trigger;
    this._setupTriggerEventsIfEnabled();
  }
  _trigger;
  _rippleRenderer;
  _globalOptions;
  _isInitialized = false;
  constructor() {
    const ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone);
    const platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.Platform);
    const globalOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(MAT_RIPPLE_GLOBAL_OPTIONS, {
      optional: true
    });
    const injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector);
    this._globalOptions = globalOptions || {};
    this._rippleRenderer = new RippleRenderer(this, ngZone, this._elementRef, platform, injector);
  }
  ngOnInit() {
    this._isInitialized = true;
    this._setupTriggerEventsIfEnabled();
  }
  ngOnDestroy() {
    this._rippleRenderer._removeTriggerEvents();
  }
  fadeOutAll() {
    this._rippleRenderer.fadeOutAll();
  }
  fadeOutAllNonPersistent() {
    this._rippleRenderer.fadeOutAllNonPersistent();
  }
  get rippleConfig() {
    return {
      centered: this.centered,
      radius: this.radius,
      color: this.color,
      animation: {
        ...this._globalOptions.animation,
        ...(this._animationsDisabled ? {
          enterDuration: 0,
          exitDuration: 0
        } : {}),
        ...this.animation
      },
      terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
    };
  }
  get rippleDisabled() {
    return this.disabled || !!this._globalOptions.disabled;
  }
  _setupTriggerEventsIfEnabled() {
    if (!this.disabled && this._isInitialized) {
      this._rippleRenderer.setupTriggerEvents(this.trigger);
    }
  }
  launch(configOrX, y = 0, config) {
    if (typeof configOrX === 'number') {
      return this._rippleRenderer.fadeInRipple(configOrX, y, {
        ...this.rippleConfig,
        ...config
      });
    } else {
      return this._rippleRenderer.fadeInRipple(0, 0, {
        ...this.rippleConfig,
        ...configOrX
      });
    }
  }
  static ɵfac = function MatRipple_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatRipple)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: MatRipple,
    selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
    hostAttrs: [1, "mat-ripple"],
    hostVars: 2,
    hostBindings: function MatRipple_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-ripple-unbounded", ctx.unbounded);
      }
    },
    inputs: {
      color: [0, "matRippleColor", "color"],
      unbounded: [0, "matRippleUnbounded", "unbounded"],
      centered: [0, "matRippleCentered", "centered"],
      radius: [0, "matRippleRadius", "radius"],
      animation: [0, "matRippleAnimation", "animation"],
      disabled: [0, "matRippleDisabled", "disabled"],
      trigger: [0, "matRippleTrigger", "trigger"]
    },
    exportAs: ["matRipple"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__.setClassMetadata(MatRipple, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: '[mat-ripple], [matRipple]',
      exportAs: 'matRipple',
      host: {
        'class': 'mat-ripple',
        '[class.mat-ripple-unbounded]': 'unbounded'
      }
    }]
  }], () => [], {
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['matRippleColor']
    }],
    unbounded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['matRippleUnbounded']
    }],
    centered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['matRippleCentered']
    }],
    radius: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['matRippleRadius']
    }],
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['matRippleAnimation']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['matRippleDisabled']
    }],
    trigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['matRippleTrigger']
    }]
  });
})();


/***/ },

/***/ 7100
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_ripple-loader-chunk.mjs ***!
  \**************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatRippleLoader: () => (/* binding */ MatRippleLoader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 8508);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ 8310);
/* harmony import */ var _animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_animation-chunk.mjs */ 7432);
/* harmony import */ var _ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_ripple-chunk.mjs */ 7828);





const eventListenerOptions = {
  capture: true
};
const rippleInteractionEvents = ['focus', 'mousedown', 'mouseenter', 'touchstart'];
const matRippleUninitialized = 'mat-ripple-loader-uninitialized';
const matRippleClassName = 'mat-ripple-loader-class-name';
const matRippleCentered = 'mat-ripple-loader-centered';
const matRippleDisabled = 'mat-ripple-loader-disabled';
class MatRippleLoader {
  _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT);
  _animationsDisabled = (0,_animation_chunk_mjs__WEBPACK_IMPORTED_MODULE_4__._animationsDisabled)();
  _globalRippleOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__.MAT_RIPPLE_GLOBAL_OPTIONS, {
    optional: true
  });
  _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform);
  _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone);
  _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector);
  _eventCleanups;
  _hosts = new Map();
  constructor() {
    const renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2).createRenderer(null, null);
    this._eventCleanups = this._ngZone.runOutsideAngular(() => rippleInteractionEvents.map(name => renderer.listen(this._document, name, this._onInteraction, eventListenerOptions)));
  }
  ngOnDestroy() {
    const hosts = this._hosts.keys();
    for (const host of hosts) {
      this.destroyRipple(host);
    }
    this._eventCleanups.forEach(cleanup => cleanup());
  }
  configureRipple(host, config) {
    host.setAttribute(matRippleUninitialized, this._globalRippleOptions?.namespace ?? '');
    if (config.className || !host.hasAttribute(matRippleClassName)) {
      host.setAttribute(matRippleClassName, config.className || '');
    }
    if (config.centered) {
      host.setAttribute(matRippleCentered, '');
    }
    if (config.disabled) {
      host.setAttribute(matRippleDisabled, '');
    }
  }
  setDisabled(host, disabled) {
    const ripple = this._hosts.get(host);
    if (ripple) {
      ripple.target.rippleDisabled = disabled;
      if (!disabled && !ripple.hasSetUpEvents) {
        ripple.hasSetUpEvents = true;
        ripple.renderer.setupTriggerEvents(host);
      }
    } else if (disabled) {
      host.setAttribute(matRippleDisabled, '');
    } else {
      host.removeAttribute(matRippleDisabled);
    }
  }
  _onInteraction = event => {
    const eventTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__._getEventTarget)(event);
    if (eventTarget instanceof HTMLElement) {
      const element = eventTarget.closest(`[${matRippleUninitialized}="${this._globalRippleOptions?.namespace ?? ''}"]`);
      if (element) {
        this._createRipple(element);
      }
    }
  };
  _createRipple(host) {
    if (!this._document || this._hosts.has(host)) {
      return;
    }
    host.querySelector('.mat-ripple')?.remove();
    const rippleEl = this._document.createElement('span');
    rippleEl.classList.add('mat-ripple', host.getAttribute(matRippleClassName));
    host.append(rippleEl);
    const globalOptions = this._globalRippleOptions;
    const enterDuration = this._animationsDisabled ? 0 : globalOptions?.animation?.enterDuration ?? _ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__.defaultRippleAnimationConfig.enterDuration;
    const exitDuration = this._animationsDisabled ? 0 : globalOptions?.animation?.exitDuration ?? _ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__.defaultRippleAnimationConfig.exitDuration;
    const target = {
      rippleDisabled: this._animationsDisabled || globalOptions?.disabled || host.hasAttribute(matRippleDisabled),
      rippleConfig: {
        centered: host.hasAttribute(matRippleCentered),
        terminateOnPointerUp: globalOptions?.terminateOnPointerUp,
        animation: {
          enterDuration,
          exitDuration
        }
      }
    };
    const renderer = new _ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__.RippleRenderer(target, this._ngZone, rippleEl, this._platform, this._injector);
    const hasSetUpEvents = !target.rippleDisabled;
    if (hasSetUpEvents) {
      renderer.setupTriggerEvents(host);
    }
    this._hosts.set(host, {
      target,
      renderer,
      hasSetUpEvents
    });
    host.removeAttribute(matRippleUninitialized);
  }
  destroyRipple(host) {
    const ripple = this._hosts.get(host);
    if (ripple) {
      ripple.renderer._removeTriggerEvents();
      this._hosts.delete(host);
    }
  }
  static ɵfac = function MatRippleLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatRippleLoader)();
  };
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: MatRippleLoader,
    factory: MatRippleLoader.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(MatRippleLoader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [], null);
})();


/***/ },

/***/ 5309
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_ripple-module-chunk.mjs ***!
  \**************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatRippleModule: () => (/* binding */ MatRippleModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_ripple-chunk.mjs */ 7828);




class MatRippleModule {
  static ɵfac = function MatRippleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatRippleModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: MatRippleModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__.BidiModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(MatRippleModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.MatRipple],
      exports: [_ripple_chunk_mjs__WEBPACK_IMPORTED_MODULE_3__.MatRipple, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__.BidiModule]
    }]
  }], null, null);
})();


/***/ },

/***/ 2158
/*!******************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/_structural-styles-chunk.mjs ***!
  \******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _StructuralStylesLoader: () => (/* binding */ _StructuralStylesLoader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);


class _StructuralStylesLoader {
  static ɵfac = function _StructuralStylesLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StructuralStylesLoader)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: _StructuralStylesLoader,
    selectors: [["structural-styles"]],
    decls: 0,
    vars: 0,
    template: function _StructuralStylesLoader_Template(rf, ctx) {},
    styles: [".mat-focus-indicator {\n  position: relative;\n}\n.mat-focus-indicator::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-focus-indicator-display, none);\n  border-width: var(--mat-focus-indicator-border-width, 3px);\n  border-style: var(--mat-focus-indicator-border-style, solid);\n  border-color: var(--mat-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-focus-indicator-border-radius, 4px);\n}\n.mat-focus-indicator:focus-visible::before {\n  content: \"\";\n}\n\n@media (forced-colors: active) {\n  html {\n    --mat-focus-indicator-display: block;\n  }\n}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(_StructuralStylesLoader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'structural-styles',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: '',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      styles: [".mat-focus-indicator {\n  position: relative;\n}\n.mat-focus-indicator::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-focus-indicator-display, none);\n  border-width: var(--mat-focus-indicator-border-width, 3px);\n  border-style: var(--mat-focus-indicator-border-style, solid);\n  border-color: var(--mat-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-focus-indicator-border-radius, 4px);\n}\n.mat-focus-indicator:focus-visible::before {\n  content: \"\";\n}\n\n@media (forced-colors: active) {\n  html {\n    --mat-focus-indicator-display: block;\n  }\n}\n"]
    }]
  }], null, null);
})();


/***/ },

/***/ 4175
/*!************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/button.mjs ***!
  \************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_BUTTON_CONFIG: () => (/* reexport safe */ _icon_button_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MAT_BUTTON_CONFIG),
/* harmony export */   MAT_FAB_DEFAULT_OPTIONS: () => (/* binding */ MAT_FAB_DEFAULT_OPTIONS),
/* harmony export */   MatAnchor: () => (/* binding */ MatAnchor),
/* harmony export */   MatButton: () => (/* binding */ MatButton),
/* harmony export */   MatButtonModule: () => (/* binding */ MatButtonModule),
/* harmony export */   MatFabAnchor: () => (/* binding */ MatFabAnchor),
/* harmony export */   MatFabButton: () => (/* binding */ MatFabButton),
/* harmony export */   MatIconAnchor: () => (/* reexport safe */ _icon_button_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatIconAnchor),
/* harmony export */   MatIconButton: () => (/* reexport safe */ _icon_button_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatIconButton),
/* harmony export */   MatMiniFabAnchor: () => (/* binding */ MatMiniFabAnchor),
/* harmony export */   MatMiniFabButton: () => (/* binding */ MatMiniFabButton)
/* harmony export */ });
/* harmony import */ var _icon_button_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_icon-button-chunk.mjs */ 5326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var _ripple_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_ripple-module-chunk.mjs */ 5309);

const _c0 = ["matButton", ""];
const _c1 = [[["", 8, "material-icons", 3, "iconPositionEnd", ""], ["mat-icon", 3, "iconPositionEnd", ""], ["", "matButtonIcon", "", 3, "iconPositionEnd", ""]], "*", [["", "iconPositionEnd", "", 8, "material-icons"], ["mat-icon", "iconPositionEnd", ""], ["", "matButtonIcon", "", "iconPositionEnd", ""]]];
const _c2 = [".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])", "*", ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];
const _c3 = ["mat-fab", ""];
const _c4 = ["mat-mini-fab", ""];
const _c5 = ".mat-mdc-fab-base {\n  -webkit-user-select: none;\n  user-select: none;\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 56px;\n  height: 56px;\n  padding: 0;\n  border: none;\n  fill: currentColor;\n  text-decoration: none;\n  cursor: pointer;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  overflow: visible;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  flex-shrink: 0;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-fab-base .mat-mdc-button-ripple,\n.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,\n.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  border-radius: inherit;\n}\n.mat-mdc-fab-base .mat-mdc-button-ripple {\n  overflow: hidden;\n}\n.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {\n  content: \"\";\n  opacity: 0;\n}\n.mat-mdc-fab-base .mdc-button__label,\n.mat-mdc-fab-base .mat-icon {\n  z-index: 1;\n  position: relative;\n}\n.mat-mdc-fab-base .mat-focus-indicator {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n}\n.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {\n  content: \"\";\n}\n.mat-mdc-fab-base._mat-animation-noopable {\n  transition: none !important;\n  animation: none !important;\n}\n.mat-mdc-fab-base::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  content: \"\";\n  pointer-events: none;\n}\n.mat-mdc-fab-base[hidden] {\n  display: none;\n}\n.mat-mdc-fab-base::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {\n  outline: none;\n}\n.mat-mdc-fab-base:hover {\n  cursor: pointer;\n}\n.mat-mdc-fab-base > svg {\n  width: 100%;\n}\n.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {\n  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);\n  fill: currentColor;\n  will-change: transform;\n}\n.mat-mdc-fab-base .mat-focus-indicator::before {\n  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);\n}\n.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {\n  box-shadow: none;\n}\n.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mat-mdc-fab {\n  background-color: var(--mat-fab-container-color, var(--mat-sys-primary-container));\n  border-radius: var(--mat-fab-container-shape, var(--mat-sys-corner-large));\n  color: var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));\n  box-shadow: var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3));\n}\n@media (hover: hover) {\n  .mat-mdc-fab:hover {\n    box-shadow: var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4));\n  }\n}\n.mat-mdc-fab:focus {\n  box-shadow: var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3));\n}\n.mat-mdc-fab:active, .mat-mdc-fab:focus:active {\n  box-shadow: var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3));\n}\n.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n  color: var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  background-color: var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mat-mdc-fab.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n.mat-mdc-fab .mat-mdc-button-touch-target {\n  position: absolute;\n  top: 50%;\n  height: var(--mat-fab-touch-target-size, 48px);\n  display: var(--mat-fab-touch-target-display, block);\n  left: 50%;\n  width: var(--mat-fab-touch-target-size, 48px);\n  transform: translate(-50%, -50%);\n}\n.mat-mdc-fab .mat-ripple-element {\n  background-color: var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container));\n}\n.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-fab-disabled-state-layer-color);\n}\n.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n}\n\n.mat-mdc-mini-fab {\n  width: 40px;\n  height: 40px;\n  background-color: var(--mat-fab-small-container-color, var(--mat-sys-primary-container));\n  border-radius: var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));\n  color: var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));\n  box-shadow: var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3));\n}\n@media (hover: hover) {\n  .mat-mdc-mini-fab:hover {\n    box-shadow: var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4));\n  }\n}\n.mat-mdc-mini-fab:focus {\n  box-shadow: var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3));\n}\n.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {\n  box-shadow: var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3));\n}\n.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n  color: var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  background-color: var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n.mat-mdc-mini-fab .mat-mdc-button-touch-target {\n  position: absolute;\n  top: 50%;\n  height: var(--mat-fab-small-touch-target-size, 48px);\n  display: var(--mat-fab-small-touch-target-display);\n  left: 50%;\n  width: var(--mat-fab-small-touch-target-size, 48px);\n  transform: translate(-50%, -50%);\n}\n.mat-mdc-mini-fab .mat-ripple-element {\n  background-color: var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container));\n}\n.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-fab-small-disabled-state-layer-color);\n}\n.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n}\n\n.mat-mdc-extended-fab {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  padding-left: 20px;\n  padding-right: 20px;\n  width: auto;\n  max-width: 100%;\n  line-height: normal;\n  box-shadow: var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));\n  height: var(--mat-fab-extended-container-height, 56px);\n  border-radius: var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));\n  font-family: var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));\n  font-size: var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));\n  font-weight: var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));\n  letter-spacing: var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking));\n}\n@media (hover: hover) {\n  .mat-mdc-extended-fab:hover {\n    box-shadow: var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4));\n  }\n}\n.mat-mdc-extended-fab:focus {\n  box-shadow: var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3));\n}\n.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {\n  box-shadow: var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3));\n}\n.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {\n  box-shadow: none;\n}\n.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,\n.mat-mdc-extended-fab > .mat-icon,\n.mat-mdc-extended-fab > .material-icons {\n  margin-left: -8px;\n  margin-right: 12px;\n}\n.mat-mdc-extended-fab .mdc-button__label + .mat-icon,\n.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {\n  margin-left: 12px;\n  margin-right: -8px;\n}\n.mat-mdc-extended-fab .mat-mdc-button-touch-target {\n  width: 100%;\n}\n";














const APPEARANCE_CLASSES = new Map([['text', ['mat-mdc-button']], ['filled', ['mdc-button--unelevated', 'mat-mdc-unelevated-button']], ['elevated', ['mdc-button--raised', 'mat-mdc-raised-button']], ['outlined', ['mdc-button--outlined', 'mat-mdc-outlined-button']], ['tonal', ['mat-tonal-button']]]);
class MatButton extends _icon_button_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatButtonBase {
  get appearance() {
    return this._appearance;
  }
  set appearance(value) {
    this.setAppearance(value || this._config?.defaultAppearance || 'text');
  }
  _appearance = null;
  constructor() {
    super();
    const inferredAppearance = _inferAppearance(this._elementRef.nativeElement);
    if (inferredAppearance) {
      this.setAppearance(inferredAppearance);
    }
  }
  setAppearance(appearance) {
    if (appearance === this._appearance) {
      return;
    }
    const classList = this._elementRef.nativeElement.classList;
    const previousClasses = this._appearance ? APPEARANCE_CLASSES.get(this._appearance) : null;
    const newClasses = APPEARANCE_CLASSES.get(appearance);
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && !newClasses) {
      throw new Error(`Unsupported MatButton appearance "${appearance}"`);
    }
    if (previousClasses) {
      classList.remove(...previousClasses);
    }
    classList.add(...newClasses);
    this._appearance = appearance;
  }
  static ɵfac = function MatButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatButton)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MatButton,
    selectors: [["button", "matButton", ""], ["a", "matButton", ""], ["button", "mat-button", ""], ["button", "mat-raised-button", ""], ["button", "mat-flat-button", ""], ["button", "mat-stroked-button", ""], ["a", "mat-button", ""], ["a", "mat-raised-button", ""], ["a", "mat-flat-button", ""], ["a", "mat-stroked-button", ""]],
    hostAttrs: [1, "mdc-button"],
    inputs: {
      appearance: [0, "matButton", "appearance"]
    },
    exportAs: ["matButton", "matAnchor"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    attrs: _c0,
    ngContentSelectors: _c2,
    decls: 7,
    vars: 4,
    consts: [[1, "mat-mdc-button-persistent-ripple"], [1, "mdc-button__label"], [1, "mat-focus-indicator"], [1, "mat-mdc-button-touch-target"]],
    template: function MatButton_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](5, "span", 2)(6, "span", 3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mdc-button__ripple", !ctx._isFab)("mdc-fab__ripple", ctx._isFab);
      }
    },
    styles: [".mat-mdc-button-base {\n  text-decoration: none;\n}\n.mat-mdc-button-base .mat-icon {\n  min-height: fit-content;\n  flex-shrink: 0;\n}\n@media (hover: none) {\n  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {\n    opacity: 0;\n  }\n}\n\n.mdc-button {\n  -webkit-user-select: none;\n  user-select: none;\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  min-width: 64px;\n  border: none;\n  outline: none;\n  line-height: inherit;\n  -webkit-appearance: none;\n  overflow: visible;\n  vertical-align: middle;\n  background: transparent;\n  padding: 0 8px;\n}\n.mdc-button::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n.mdc-button:active {\n  outline: none;\n}\n.mdc-button:hover {\n  cursor: pointer;\n}\n.mdc-button:disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mdc-button[hidden] {\n  display: none;\n}\n.mdc-button .mdc-button__label {\n  position: relative;\n}\n\n.mat-mdc-button {\n  padding: 0 var(--mat-button-text-horizontal-padding, 12px);\n  height: var(--mat-button-text-container-height, 40px);\n  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));\n  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));\n  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));\n  text-transform: var(--mat-button-text-label-text-transform);\n  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));\n}\n.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {\n  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));\n}\n.mat-mdc-button:not(:disabled) {\n  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));\n}\n.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-mdc-button.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {\n  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);\n}\n.mat-mdc-button > .mat-icon {\n  margin-right: var(--mat-button-text-icon-spacing, 8px);\n  margin-left: var(--mat-button-text-icon-offset, -4px);\n}\n[dir=rtl] .mat-mdc-button > .mat-icon {\n  margin-right: var(--mat-button-text-icon-offset, -4px);\n  margin-left: var(--mat-button-text-icon-spacing, 8px);\n}\n.mat-mdc-button .mdc-button__label + .mat-icon {\n  margin-right: var(--mat-button-text-icon-offset, -4px);\n  margin-left: var(--mat-button-text-icon-spacing, 8px);\n}\n[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {\n  margin-right: var(--mat-button-text-icon-spacing, 8px);\n  margin-left: var(--mat-button-text-icon-offset, -4px);\n}\n.mat-mdc-button .mat-ripple-element {\n  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-button .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));\n}\n.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n}\n.mat-mdc-button .mat-mdc-button-touch-target {\n  position: absolute;\n  top: 50%;\n  height: var(--mat-button-text-touch-target-size, 48px);\n  display: var(--mat-button-text-touch-target-display, block);\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n}\n\n.mat-mdc-unelevated-button {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  height: var(--mat-button-filled-container-height, 40px);\n  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));\n  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));\n  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));\n  text-transform: var(--mat-button-filled-label-text-transform);\n  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));\n  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);\n}\n.mat-mdc-unelevated-button > .mat-icon {\n  margin-right: var(--mat-button-filled-icon-spacing, 8px);\n  margin-left: var(--mat-button-filled-icon-offset, -8px);\n}\n[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {\n  margin-right: var(--mat-button-filled-icon-offset, -8px);\n  margin-left: var(--mat-button-filled-icon-spacing, 8px);\n}\n.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {\n  margin-right: var(--mat-button-filled-icon-offset, -8px);\n  margin-left: var(--mat-button-filled-icon-spacing, 8px);\n}\n[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {\n  margin-right: var(--mat-button-filled-icon-spacing, 8px);\n  margin-left: var(--mat-button-filled-icon-offset, -8px);\n}\n.mat-mdc-unelevated-button .mat-ripple-element {\n  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));\n}\n.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n}\n.mat-mdc-unelevated-button .mat-mdc-button-touch-target {\n  position: absolute;\n  top: 50%;\n  height: var(--mat-button-filled-touch-target-size, 48px);\n  display: var(--mat-button-filled-touch-target-display, block);\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n}\n.mat-mdc-unelevated-button:not(:disabled) {\n  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));\n  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));\n}\n.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {\n  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));\n}\n.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mat-mdc-raised-button {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));\n  height: var(--mat-button-protected-container-height, 40px);\n  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));\n  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));\n  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));\n  text-transform: var(--mat-button-protected-label-text-transform);\n  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));\n  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);\n}\n.mat-mdc-raised-button > .mat-icon {\n  margin-right: var(--mat-button-protected-icon-spacing, 8px);\n  margin-left: var(--mat-button-protected-icon-offset, -8px);\n}\n[dir=rtl] .mat-mdc-raised-button > .mat-icon {\n  margin-right: var(--mat-button-protected-icon-offset, -8px);\n  margin-left: var(--mat-button-protected-icon-spacing, 8px);\n}\n.mat-mdc-raised-button .mdc-button__label + .mat-icon {\n  margin-right: var(--mat-button-protected-icon-offset, -8px);\n  margin-left: var(--mat-button-protected-icon-spacing, 8px);\n}\n[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {\n  margin-right: var(--mat-button-protected-icon-spacing, 8px);\n  margin-left: var(--mat-button-protected-icon-offset, -8px);\n}\n.mat-mdc-raised-button .mat-ripple-element {\n  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));\n}\n.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n}\n.mat-mdc-raised-button .mat-mdc-button-touch-target {\n  position: absolute;\n  top: 50%;\n  height: var(--mat-button-protected-touch-target-size, 48px);\n  display: var(--mat-button-protected-touch-target-display, block);\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n}\n.mat-mdc-raised-button:not(:disabled) {\n  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));\n  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));\n}\n.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {\n  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));\n}\n@media (hover: hover) {\n  .mat-mdc-raised-button:hover {\n    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));\n  }\n}\n.mat-mdc-raised-button:focus {\n  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));\n}\n.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {\n  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));\n}\n.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {\n  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));\n}\n.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mat-mdc-outlined-button {\n  border-style: solid;\n  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  height: var(--mat-button-outlined-container-height, 40px);\n  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));\n  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));\n  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));\n  text-transform: var(--mat-button-outlined-label-text-transform);\n  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));\n  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));\n  border-width: var(--mat-button-outlined-outline-width, 1px);\n  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);\n}\n.mat-mdc-outlined-button > .mat-icon {\n  margin-right: var(--mat-button-outlined-icon-spacing, 8px);\n  margin-left: var(--mat-button-outlined-icon-offset, -8px);\n}\n[dir=rtl] .mat-mdc-outlined-button > .mat-icon {\n  margin-right: var(--mat-button-outlined-icon-offset, -8px);\n  margin-left: var(--mat-button-outlined-icon-spacing, 8px);\n}\n.mat-mdc-outlined-button .mdc-button__label + .mat-icon {\n  margin-right: var(--mat-button-outlined-icon-offset, -8px);\n  margin-left: var(--mat-button-outlined-icon-spacing, 8px);\n}\n[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {\n  margin-right: var(--mat-button-outlined-icon-spacing, 8px);\n  margin-left: var(--mat-button-outlined-icon-offset, -8px);\n}\n.mat-mdc-outlined-button .mat-ripple-element {\n  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));\n}\n.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n}\n.mat-mdc-outlined-button .mat-mdc-button-touch-target {\n  position: absolute;\n  top: 50%;\n  height: var(--mat-button-outlined-touch-target-size, 48px);\n  display: var(--mat-button-outlined-touch-target-display, block);\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n}\n.mat-mdc-outlined-button:not(:disabled) {\n  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));\n  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));\n}\n.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mat-tonal-button {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  height: var(--mat-button-tonal-container-height, 40px);\n  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));\n  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));\n  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));\n  text-transform: var(--mat-button-tonal-label-text-transform);\n  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));\n  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);\n}\n.mat-tonal-button:not(:disabled) {\n  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));\n  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));\n}\n.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {\n  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));\n}\n.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mat-tonal-button.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n.mat-tonal-button > .mat-icon {\n  margin-right: var(--mat-button-tonal-icon-spacing, 8px);\n  margin-left: var(--mat-button-tonal-icon-offset, -8px);\n}\n[dir=rtl] .mat-tonal-button > .mat-icon {\n  margin-right: var(--mat-button-tonal-icon-offset, -8px);\n  margin-left: var(--mat-button-tonal-icon-spacing, 8px);\n}\n.mat-tonal-button .mdc-button__label + .mat-icon {\n  margin-right: var(--mat-button-tonal-icon-offset, -8px);\n  margin-left: var(--mat-button-tonal-icon-spacing, 8px);\n}\n[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {\n  margin-right: var(--mat-button-tonal-icon-spacing, 8px);\n  margin-left: var(--mat-button-tonal-icon-offset, -8px);\n}\n.mat-tonal-button .mat-ripple-element {\n  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));\n}\n.mat-tonal-button .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));\n}\n.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n}\n.mat-tonal-button .mat-mdc-button-touch-target {\n  position: absolute;\n  top: 50%;\n  height: var(--mat-button-tonal-touch-target-size, 48px);\n  display: var(--mat-button-tonal-touch-target-display, block);\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n}\n\n.mat-mdc-button,\n.mat-mdc-unelevated-button,\n.mat-mdc-raised-button,\n.mat-mdc-outlined-button,\n.mat-tonal-button {\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-button .mat-mdc-button-ripple,\n.mat-mdc-button .mat-mdc-button-persistent-ripple,\n.mat-mdc-button .mat-mdc-button-persistent-ripple::before,\n.mat-mdc-unelevated-button .mat-mdc-button-ripple,\n.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,\n.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,\n.mat-mdc-raised-button .mat-mdc-button-ripple,\n.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,\n.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,\n.mat-mdc-outlined-button .mat-mdc-button-ripple,\n.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,\n.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,\n.mat-tonal-button .mat-mdc-button-ripple,\n.mat-tonal-button .mat-mdc-button-persistent-ripple,\n.mat-tonal-button .mat-mdc-button-persistent-ripple::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  border-radius: inherit;\n}\n.mat-mdc-button .mat-mdc-button-ripple,\n.mat-mdc-unelevated-button .mat-mdc-button-ripple,\n.mat-mdc-raised-button .mat-mdc-button-ripple,\n.mat-mdc-outlined-button .mat-mdc-button-ripple,\n.mat-tonal-button .mat-mdc-button-ripple {\n  overflow: hidden;\n}\n.mat-mdc-button .mat-mdc-button-persistent-ripple::before,\n.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,\n.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,\n.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,\n.mat-tonal-button .mat-mdc-button-persistent-ripple::before {\n  content: \"\";\n  opacity: 0;\n}\n.mat-mdc-button .mdc-button__label,\n.mat-mdc-button .mat-icon,\n.mat-mdc-unelevated-button .mdc-button__label,\n.mat-mdc-unelevated-button .mat-icon,\n.mat-mdc-raised-button .mdc-button__label,\n.mat-mdc-raised-button .mat-icon,\n.mat-mdc-outlined-button .mdc-button__label,\n.mat-mdc-outlined-button .mat-icon,\n.mat-tonal-button .mdc-button__label,\n.mat-tonal-button .mat-icon {\n  z-index: 1;\n  position: relative;\n}\n.mat-mdc-button .mat-focus-indicator,\n.mat-mdc-unelevated-button .mat-focus-indicator,\n.mat-mdc-raised-button .mat-focus-indicator,\n.mat-mdc-outlined-button .mat-focus-indicator,\n.mat-tonal-button .mat-focus-indicator {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  border-radius: inherit;\n}\n.mat-mdc-button:focus-visible > .mat-focus-indicator::before,\n.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,\n.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,\n.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,\n.mat-tonal-button:focus-visible > .mat-focus-indicator::before {\n  content: \"\";\n  border-radius: inherit;\n}\n.mat-mdc-button._mat-animation-noopable,\n.mat-mdc-unelevated-button._mat-animation-noopable,\n.mat-mdc-raised-button._mat-animation-noopable,\n.mat-mdc-outlined-button._mat-animation-noopable,\n.mat-tonal-button._mat-animation-noopable {\n  transition: none !important;\n  animation: none !important;\n}\n.mat-mdc-button > .mat-icon,\n.mat-mdc-unelevated-button > .mat-icon,\n.mat-mdc-raised-button > .mat-icon,\n.mat-mdc-outlined-button > .mat-icon,\n.mat-tonal-button > .mat-icon {\n  display: inline-block;\n  position: relative;\n  vertical-align: top;\n  font-size: 1.125rem;\n  height: 1.125rem;\n  width: 1.125rem;\n}\n\n.mat-mdc-outlined-button .mat-mdc-button-ripple,\n.mat-mdc-outlined-button .mdc-button__ripple {\n  top: -1px;\n  left: -1px;\n  bottom: -1px;\n  right: -1px;\n}\n\n.mat-mdc-unelevated-button .mat-focus-indicator::before,\n.mat-tonal-button .mat-focus-indicator::before,\n.mat-mdc-raised-button .mat-focus-indicator::before {\n  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);\n}\n\n.mat-mdc-outlined-button .mat-focus-indicator::before {\n  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);\n}\n", "@media (forced-colors: active) {\n  .mat-mdc-button:not(.mdc-button--outlined),\n  .mat-mdc-unelevated-button:not(.mdc-button--outlined),\n  .mat-mdc-raised-button:not(.mdc-button--outlined),\n  .mat-mdc-outlined-button:not(.mdc-button--outlined),\n  .mat-mdc-button-base.mat-tonal-button,\n  .mat-mdc-icon-button.mat-mdc-icon-button,\n  .mat-mdc-outlined-button .mdc-button__ripple {\n    outline: solid 1px;\n  }\n}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(MatButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: `
    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],
    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],
    a[mat-flat-button], a[mat-stroked-button]
  `,
      host: {
        'class': 'mdc-button'
      },
      exportAs: 'matButton, matAnchor',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: "<span\n    class=\"mat-mdc-button-persistent-ripple\"\n    [class.mdc-button__ripple]=\"!_isFab\"\n    [class.mdc-fab__ripple]=\"_isFab\"></span>\n\n<ng-content select=\".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])\">\n</ng-content>\n\n<span class=\"mdc-button__label\"><ng-content></ng-content></span>\n\n<ng-content select=\".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]\">\n</ng-content>\n\n<!--\n  The indicator can't be directly on the button, because MDC uses ::before for high contrast\n  indication and it can't be on the ripple, because it has a border radius and overflow: hidden.\n-->\n<span class=\"mat-focus-indicator\"></span>\n\n<span class=\"mat-mdc-button-touch-target\"></span>\n",
      styles: [".mat-mdc-button-base {\n  text-decoration: none;\n}\n.mat-mdc-button-base .mat-icon {\n  min-height: fit-content;\n  flex-shrink: 0;\n}\n@media (hover: none) {\n  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {\n    opacity: 0;\n  }\n}\n\n.mdc-button {\n  -webkit-user-select: none;\n  user-select: none;\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  min-width: 64px;\n  border: none;\n  outline: none;\n  line-height: inherit;\n  -webkit-appearance: none;\n  overflow: visible;\n  vertical-align: middle;\n  background: transparent;\n  padding: 0 8px;\n}\n.mdc-button::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n.mdc-button:active {\n  outline: none;\n}\n.mdc-button:hover {\n  cursor: pointer;\n}\n.mdc-button:disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mdc-button[hidden] {\n  display: none;\n}\n.mdc-button .mdc-button__label {\n  position: relative;\n}\n\n.mat-mdc-button {\n  padding: 0 var(--mat-button-text-horizontal-padding, 12px);\n  height: var(--mat-button-text-container-height, 40px);\n  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));\n  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));\n  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));\n  text-transform: var(--mat-button-text-label-text-transform);\n  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));\n}\n.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {\n  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));\n}\n.mat-mdc-button:not(:disabled) {\n  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));\n}\n.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-mdc-button.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {\n  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);\n}\n.mat-mdc-button > .mat-icon {\n  margin-right: var(--mat-button-text-icon-spacing, 8px);\n  margin-left: var(--mat-button-text-icon-offset, -4px);\n}\n[dir=rtl] .mat-mdc-button > .mat-icon {\n  margin-right: var(--mat-button-text-icon-offset, -4px);\n  margin-left: var(--mat-button-text-icon-spacing, 8px);\n}\n.mat-mdc-button .mdc-button__label + .mat-icon {\n  margin-right: var(--mat-button-text-icon-offset, -4px);\n  margin-left: var(--mat-button-text-icon-spacing, 8px);\n}\n[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {\n  margin-right: var(--mat-button-text-icon-spacing, 8px);\n  margin-left: var(--mat-button-text-icon-offset, -4px);\n}\n.mat-mdc-button .mat-ripple-element {\n  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-button .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));\n}\n.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n}\n.mat-mdc-button .mat-mdc-button-touch-target {\n  position: absolute;\n  top: 50%;\n  height: var(--mat-button-text-touch-target-size, 48px);\n  display: var(--mat-button-text-touch-target-display, block);\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n}\n\n.mat-mdc-unelevated-button {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  height: var(--mat-button-filled-container-height, 40px);\n  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));\n  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));\n  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));\n  text-transform: var(--mat-button-filled-label-text-transform);\n  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));\n  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);\n}\n.mat-mdc-unelevated-button > .mat-icon {\n  margin-right: var(--mat-button-filled-icon-spacing, 8px);\n  margin-left: var(--mat-button-filled-icon-offset, -8px);\n}\n[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {\n  margin-right: var(--mat-button-filled-icon-offset, -8px);\n  margin-left: var(--mat-button-filled-icon-spacing, 8px);\n}\n.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {\n  margin-right: var(--mat-button-filled-icon-offset, -8px);\n  margin-left: var(--mat-button-filled-icon-spacing, 8px);\n}\n[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {\n  margin-right: var(--mat-button-filled-icon-spacing, 8px);\n  margin-left: var(--mat-button-filled-icon-offset, -8px);\n}\n.mat-mdc-unelevated-button .mat-ripple-element {\n  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));\n}\n.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n}\n.mat-mdc-unelevated-button .mat-mdc-button-touch-target {\n  position: absolute;\n  top: 50%;\n  height: var(--mat-button-filled-touch-target-size, 48px);\n  display: var(--mat-button-filled-touch-target-display, block);\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n}\n.mat-mdc-unelevated-button:not(:disabled) {\n  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));\n  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));\n}\n.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {\n  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));\n}\n.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mat-mdc-raised-button {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));\n  height: var(--mat-button-protected-container-height, 40px);\n  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));\n  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));\n  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));\n  text-transform: var(--mat-button-protected-label-text-transform);\n  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));\n  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);\n}\n.mat-mdc-raised-button > .mat-icon {\n  margin-right: var(--mat-button-protected-icon-spacing, 8px);\n  margin-left: var(--mat-button-protected-icon-offset, -8px);\n}\n[dir=rtl] .mat-mdc-raised-button > .mat-icon {\n  margin-right: var(--mat-button-protected-icon-offset, -8px);\n  margin-left: var(--mat-button-protected-icon-spacing, 8px);\n}\n.mat-mdc-raised-button .mdc-button__label + .mat-icon {\n  margin-right: var(--mat-button-protected-icon-offset, -8px);\n  margin-left: var(--mat-button-protected-icon-spacing, 8px);\n}\n[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {\n  margin-right: var(--mat-button-protected-icon-spacing, 8px);\n  margin-left: var(--mat-button-protected-icon-offset, -8px);\n}\n.mat-mdc-raised-button .mat-ripple-element {\n  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));\n}\n.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n}\n.mat-mdc-raised-button .mat-mdc-button-touch-target {\n  position: absolute;\n  top: 50%;\n  height: var(--mat-button-protected-touch-target-size, 48px);\n  display: var(--mat-button-protected-touch-target-display, block);\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n}\n.mat-mdc-raised-button:not(:disabled) {\n  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));\n  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));\n}\n.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {\n  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));\n}\n@media (hover: hover) {\n  .mat-mdc-raised-button:hover {\n    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));\n  }\n}\n.mat-mdc-raised-button:focus {\n  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));\n}\n.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {\n  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));\n}\n.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {\n  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));\n}\n.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mat-mdc-outlined-button {\n  border-style: solid;\n  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  height: var(--mat-button-outlined-container-height, 40px);\n  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));\n  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));\n  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));\n  text-transform: var(--mat-button-outlined-label-text-transform);\n  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));\n  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));\n  border-width: var(--mat-button-outlined-outline-width, 1px);\n  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);\n}\n.mat-mdc-outlined-button > .mat-icon {\n  margin-right: var(--mat-button-outlined-icon-spacing, 8px);\n  margin-left: var(--mat-button-outlined-icon-offset, -8px);\n}\n[dir=rtl] .mat-mdc-outlined-button > .mat-icon {\n  margin-right: var(--mat-button-outlined-icon-offset, -8px);\n  margin-left: var(--mat-button-outlined-icon-spacing, 8px);\n}\n.mat-mdc-outlined-button .mdc-button__label + .mat-icon {\n  margin-right: var(--mat-button-outlined-icon-offset, -8px);\n  margin-left: var(--mat-button-outlined-icon-spacing, 8px);\n}\n[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {\n  margin-right: var(--mat-button-outlined-icon-spacing, 8px);\n  margin-left: var(--mat-button-outlined-icon-offset, -8px);\n}\n.mat-mdc-outlined-button .mat-ripple-element {\n  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));\n}\n.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n}\n.mat-mdc-outlined-button .mat-mdc-button-touch-target {\n  position: absolute;\n  top: 50%;\n  height: var(--mat-button-outlined-touch-target-size, 48px);\n  display: var(--mat-button-outlined-touch-target-display, block);\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n}\n.mat-mdc-outlined-button:not(:disabled) {\n  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));\n  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));\n}\n.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mat-tonal-button {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  height: var(--mat-button-tonal-container-height, 40px);\n  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));\n  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));\n  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));\n  text-transform: var(--mat-button-tonal-label-text-transform);\n  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));\n  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);\n}\n.mat-tonal-button:not(:disabled) {\n  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));\n  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));\n}\n.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {\n  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));\n}\n.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mat-tonal-button.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n.mat-tonal-button > .mat-icon {\n  margin-right: var(--mat-button-tonal-icon-spacing, 8px);\n  margin-left: var(--mat-button-tonal-icon-offset, -8px);\n}\n[dir=rtl] .mat-tonal-button > .mat-icon {\n  margin-right: var(--mat-button-tonal-icon-offset, -8px);\n  margin-left: var(--mat-button-tonal-icon-spacing, 8px);\n}\n.mat-tonal-button .mdc-button__label + .mat-icon {\n  margin-right: var(--mat-button-tonal-icon-offset, -8px);\n  margin-left: var(--mat-button-tonal-icon-spacing, 8px);\n}\n[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {\n  margin-right: var(--mat-button-tonal-icon-spacing, 8px);\n  margin-left: var(--mat-button-tonal-icon-offset, -8px);\n}\n.mat-tonal-button .mat-ripple-element {\n  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));\n}\n.mat-tonal-button .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));\n}\n.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));\n}\n.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n}\n.mat-tonal-button .mat-mdc-button-touch-target {\n  position: absolute;\n  top: 50%;\n  height: var(--mat-button-tonal-touch-target-size, 48px);\n  display: var(--mat-button-tonal-touch-target-display, block);\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n}\n\n.mat-mdc-button,\n.mat-mdc-unelevated-button,\n.mat-mdc-raised-button,\n.mat-mdc-outlined-button,\n.mat-tonal-button {\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-button .mat-mdc-button-ripple,\n.mat-mdc-button .mat-mdc-button-persistent-ripple,\n.mat-mdc-button .mat-mdc-button-persistent-ripple::before,\n.mat-mdc-unelevated-button .mat-mdc-button-ripple,\n.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,\n.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,\n.mat-mdc-raised-button .mat-mdc-button-ripple,\n.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,\n.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,\n.mat-mdc-outlined-button .mat-mdc-button-ripple,\n.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,\n.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,\n.mat-tonal-button .mat-mdc-button-ripple,\n.mat-tonal-button .mat-mdc-button-persistent-ripple,\n.mat-tonal-button .mat-mdc-button-persistent-ripple::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  border-radius: inherit;\n}\n.mat-mdc-button .mat-mdc-button-ripple,\n.mat-mdc-unelevated-button .mat-mdc-button-ripple,\n.mat-mdc-raised-button .mat-mdc-button-ripple,\n.mat-mdc-outlined-button .mat-mdc-button-ripple,\n.mat-tonal-button .mat-mdc-button-ripple {\n  overflow: hidden;\n}\n.mat-mdc-button .mat-mdc-button-persistent-ripple::before,\n.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,\n.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,\n.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,\n.mat-tonal-button .mat-mdc-button-persistent-ripple::before {\n  content: \"\";\n  opacity: 0;\n}\n.mat-mdc-button .mdc-button__label,\n.mat-mdc-button .mat-icon,\n.mat-mdc-unelevated-button .mdc-button__label,\n.mat-mdc-unelevated-button .mat-icon,\n.mat-mdc-raised-button .mdc-button__label,\n.mat-mdc-raised-button .mat-icon,\n.mat-mdc-outlined-button .mdc-button__label,\n.mat-mdc-outlined-button .mat-icon,\n.mat-tonal-button .mdc-button__label,\n.mat-tonal-button .mat-icon {\n  z-index: 1;\n  position: relative;\n}\n.mat-mdc-button .mat-focus-indicator,\n.mat-mdc-unelevated-button .mat-focus-indicator,\n.mat-mdc-raised-button .mat-focus-indicator,\n.mat-mdc-outlined-button .mat-focus-indicator,\n.mat-tonal-button .mat-focus-indicator {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  border-radius: inherit;\n}\n.mat-mdc-button:focus-visible > .mat-focus-indicator::before,\n.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,\n.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,\n.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,\n.mat-tonal-button:focus-visible > .mat-focus-indicator::before {\n  content: \"\";\n  border-radius: inherit;\n}\n.mat-mdc-button._mat-animation-noopable,\n.mat-mdc-unelevated-button._mat-animation-noopable,\n.mat-mdc-raised-button._mat-animation-noopable,\n.mat-mdc-outlined-button._mat-animation-noopable,\n.mat-tonal-button._mat-animation-noopable {\n  transition: none !important;\n  animation: none !important;\n}\n.mat-mdc-button > .mat-icon,\n.mat-mdc-unelevated-button > .mat-icon,\n.mat-mdc-raised-button > .mat-icon,\n.mat-mdc-outlined-button > .mat-icon,\n.mat-tonal-button > .mat-icon {\n  display: inline-block;\n  position: relative;\n  vertical-align: top;\n  font-size: 1.125rem;\n  height: 1.125rem;\n  width: 1.125rem;\n}\n\n.mat-mdc-outlined-button .mat-mdc-button-ripple,\n.mat-mdc-outlined-button .mdc-button__ripple {\n  top: -1px;\n  left: -1px;\n  bottom: -1px;\n  right: -1px;\n}\n\n.mat-mdc-unelevated-button .mat-focus-indicator::before,\n.mat-tonal-button .mat-focus-indicator::before,\n.mat-mdc-raised-button .mat-focus-indicator::before {\n  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);\n}\n\n.mat-mdc-outlined-button .mat-focus-indicator::before {\n  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);\n}\n", "@media (forced-colors: active) {\n  .mat-mdc-button:not(.mdc-button--outlined),\n  .mat-mdc-unelevated-button:not(.mdc-button--outlined),\n  .mat-mdc-raised-button:not(.mdc-button--outlined),\n  .mat-mdc-outlined-button:not(.mdc-button--outlined),\n  .mat-mdc-button-base.mat-tonal-button,\n  .mat-mdc-icon-button.mat-mdc-icon-button,\n  .mat-mdc-outlined-button .mdc-button__ripple {\n    outline: solid 1px;\n  }\n}\n"]
    }]
  }], () => [], {
    appearance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['matButton']
    }]
  });
})();
function _inferAppearance(button) {
  if (button.hasAttribute('mat-raised-button')) {
    return 'elevated';
  }
  if (button.hasAttribute('mat-stroked-button')) {
    return 'outlined';
  }
  if (button.hasAttribute('mat-flat-button')) {
    return 'filled';
  }
  if (button.hasAttribute('mat-button')) {
    return 'text';
  }
  return null;
}
const MatAnchor = MatButton;
const MAT_FAB_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('mat-mdc-fab-default-options', {
  providedIn: 'root',
  factory: () => defaults
});
const defaults = {
  color: 'accent'
};
class MatFabButton extends _icon_button_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatButtonBase {
  _options = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(MAT_FAB_DEFAULT_OPTIONS, {
    optional: true
  });
  _isFab = true;
  extended = false;
  constructor() {
    super();
    this._options = this._options || defaults;
    this.color = this._options.color || defaults.color;
  }
  static ɵfac = function MatFabButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatFabButton)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MatFabButton,
    selectors: [["button", "mat-fab", ""], ["a", "mat-fab", ""], ["button", "matFab", ""], ["a", "matFab", ""]],
    hostAttrs: [1, "mdc-fab", "mat-mdc-fab-base", "mat-mdc-fab"],
    hostVars: 4,
    hostBindings: function MatFabButton_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mdc-fab--extended", ctx.extended)("mat-mdc-extended-fab", ctx.extended);
      }
    },
    inputs: {
      extended: [2, "extended", "extended", _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute]
    },
    exportAs: ["matButton", "matAnchor"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    attrs: _c3,
    ngContentSelectors: _c2,
    decls: 7,
    vars: 4,
    consts: [[1, "mat-mdc-button-persistent-ripple"], [1, "mdc-button__label"], [1, "mat-focus-indicator"], [1, "mat-mdc-button-touch-target"]],
    template: function MatFabButton_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](5, "span", 2)(6, "span", 3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mdc-button__ripple", !ctx._isFab)("mdc-fab__ripple", ctx._isFab);
      }
    },
    styles: [".mat-mdc-fab-base {\n  -webkit-user-select: none;\n  user-select: none;\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 56px;\n  height: 56px;\n  padding: 0;\n  border: none;\n  fill: currentColor;\n  text-decoration: none;\n  cursor: pointer;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  overflow: visible;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  flex-shrink: 0;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-fab-base .mat-mdc-button-ripple,\n.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,\n.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  border-radius: inherit;\n}\n.mat-mdc-fab-base .mat-mdc-button-ripple {\n  overflow: hidden;\n}\n.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {\n  content: \"\";\n  opacity: 0;\n}\n.mat-mdc-fab-base .mdc-button__label,\n.mat-mdc-fab-base .mat-icon {\n  z-index: 1;\n  position: relative;\n}\n.mat-mdc-fab-base .mat-focus-indicator {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n}\n.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {\n  content: \"\";\n}\n.mat-mdc-fab-base._mat-animation-noopable {\n  transition: none !important;\n  animation: none !important;\n}\n.mat-mdc-fab-base::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  content: \"\";\n  pointer-events: none;\n}\n.mat-mdc-fab-base[hidden] {\n  display: none;\n}\n.mat-mdc-fab-base::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {\n  outline: none;\n}\n.mat-mdc-fab-base:hover {\n  cursor: pointer;\n}\n.mat-mdc-fab-base > svg {\n  width: 100%;\n}\n.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {\n  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);\n  fill: currentColor;\n  will-change: transform;\n}\n.mat-mdc-fab-base .mat-focus-indicator::before {\n  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);\n}\n.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {\n  box-shadow: none;\n}\n.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mat-mdc-fab {\n  background-color: var(--mat-fab-container-color, var(--mat-sys-primary-container));\n  border-radius: var(--mat-fab-container-shape, var(--mat-sys-corner-large));\n  color: var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));\n  box-shadow: var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3));\n}\n@media (hover: hover) {\n  .mat-mdc-fab:hover {\n    box-shadow: var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4));\n  }\n}\n.mat-mdc-fab:focus {\n  box-shadow: var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3));\n}\n.mat-mdc-fab:active, .mat-mdc-fab:focus:active {\n  box-shadow: var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3));\n}\n.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n  color: var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  background-color: var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mat-mdc-fab.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n.mat-mdc-fab .mat-mdc-button-touch-target {\n  position: absolute;\n  top: 50%;\n  height: var(--mat-fab-touch-target-size, 48px);\n  display: var(--mat-fab-touch-target-display, block);\n  left: 50%;\n  width: var(--mat-fab-touch-target-size, 48px);\n  transform: translate(-50%, -50%);\n}\n.mat-mdc-fab .mat-ripple-element {\n  background-color: var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container));\n}\n.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-fab-disabled-state-layer-color);\n}\n.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n}\n\n.mat-mdc-mini-fab {\n  width: 40px;\n  height: 40px;\n  background-color: var(--mat-fab-small-container-color, var(--mat-sys-primary-container));\n  border-radius: var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));\n  color: var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));\n  box-shadow: var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3));\n}\n@media (hover: hover) {\n  .mat-mdc-mini-fab:hover {\n    box-shadow: var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4));\n  }\n}\n.mat-mdc-mini-fab:focus {\n  box-shadow: var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3));\n}\n.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {\n  box-shadow: var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3));\n}\n.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n  color: var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  background-color: var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n.mat-mdc-mini-fab .mat-mdc-button-touch-target {\n  position: absolute;\n  top: 50%;\n  height: var(--mat-fab-small-touch-target-size, 48px);\n  display: var(--mat-fab-small-touch-target-display);\n  left: 50%;\n  width: var(--mat-fab-small-touch-target-size, 48px);\n  transform: translate(-50%, -50%);\n}\n.mat-mdc-mini-fab .mat-ripple-element {\n  background-color: var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container));\n}\n.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-fab-small-disabled-state-layer-color);\n}\n.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n}\n\n.mat-mdc-extended-fab {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  padding-left: 20px;\n  padding-right: 20px;\n  width: auto;\n  max-width: 100%;\n  line-height: normal;\n  box-shadow: var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));\n  height: var(--mat-fab-extended-container-height, 56px);\n  border-radius: var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));\n  font-family: var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));\n  font-size: var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));\n  font-weight: var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));\n  letter-spacing: var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking));\n}\n@media (hover: hover) {\n  .mat-mdc-extended-fab:hover {\n    box-shadow: var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4));\n  }\n}\n.mat-mdc-extended-fab:focus {\n  box-shadow: var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3));\n}\n.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {\n  box-shadow: var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3));\n}\n.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {\n  box-shadow: none;\n}\n.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,\n.mat-mdc-extended-fab > .mat-icon,\n.mat-mdc-extended-fab > .material-icons {\n  margin-left: -8px;\n  margin-right: 12px;\n}\n.mat-mdc-extended-fab .mdc-button__label + .mat-icon,\n.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {\n  margin-left: 12px;\n  margin-right: -8px;\n}\n.mat-mdc-extended-fab .mat-mdc-button-touch-target {\n  width: 100%;\n}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(MatFabButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: `button[mat-fab], a[mat-fab], button[matFab], a[matFab]`,
      host: {
        'class': 'mdc-fab mat-mdc-fab-base mat-mdc-fab',
        '[class.mdc-fab--extended]': 'extended',
        '[class.mat-mdc-extended-fab]': 'extended'
      },
      exportAs: 'matButton, matAnchor',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: "<span\n    class=\"mat-mdc-button-persistent-ripple\"\n    [class.mdc-button__ripple]=\"!_isFab\"\n    [class.mdc-fab__ripple]=\"_isFab\"></span>\n\n<ng-content select=\".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])\">\n</ng-content>\n\n<span class=\"mdc-button__label\"><ng-content></ng-content></span>\n\n<ng-content select=\".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]\">\n</ng-content>\n\n<!--\n  The indicator can't be directly on the button, because MDC uses ::before for high contrast\n  indication and it can't be on the ripple, because it has a border radius and overflow: hidden.\n-->\n<span class=\"mat-focus-indicator\"></span>\n\n<span class=\"mat-mdc-button-touch-target\"></span>\n",
      styles: [".mat-mdc-fab-base {\n  -webkit-user-select: none;\n  user-select: none;\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 56px;\n  height: 56px;\n  padding: 0;\n  border: none;\n  fill: currentColor;\n  text-decoration: none;\n  cursor: pointer;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  overflow: visible;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  flex-shrink: 0;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-fab-base .mat-mdc-button-ripple,\n.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,\n.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  border-radius: inherit;\n}\n.mat-mdc-fab-base .mat-mdc-button-ripple {\n  overflow: hidden;\n}\n.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {\n  content: \"\";\n  opacity: 0;\n}\n.mat-mdc-fab-base .mdc-button__label,\n.mat-mdc-fab-base .mat-icon {\n  z-index: 1;\n  position: relative;\n}\n.mat-mdc-fab-base .mat-focus-indicator {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n}\n.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {\n  content: \"\";\n}\n.mat-mdc-fab-base._mat-animation-noopable {\n  transition: none !important;\n  animation: none !important;\n}\n.mat-mdc-fab-base::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  content: \"\";\n  pointer-events: none;\n}\n.mat-mdc-fab-base[hidden] {\n  display: none;\n}\n.mat-mdc-fab-base::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {\n  outline: none;\n}\n.mat-mdc-fab-base:hover {\n  cursor: pointer;\n}\n.mat-mdc-fab-base > svg {\n  width: 100%;\n}\n.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {\n  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);\n  fill: currentColor;\n  will-change: transform;\n}\n.mat-mdc-fab-base .mat-focus-indicator::before {\n  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);\n}\n.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {\n  box-shadow: none;\n}\n.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mat-mdc-fab {\n  background-color: var(--mat-fab-container-color, var(--mat-sys-primary-container));\n  border-radius: var(--mat-fab-container-shape, var(--mat-sys-corner-large));\n  color: var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));\n  box-shadow: var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3));\n}\n@media (hover: hover) {\n  .mat-mdc-fab:hover {\n    box-shadow: var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4));\n  }\n}\n.mat-mdc-fab:focus {\n  box-shadow: var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3));\n}\n.mat-mdc-fab:active, .mat-mdc-fab:focus:active {\n  box-shadow: var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3));\n}\n.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n  color: var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  background-color: var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mat-mdc-fab.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n.mat-mdc-fab .mat-mdc-button-touch-target {\n  position: absolute;\n  top: 50%;\n  height: var(--mat-fab-touch-target-size, 48px);\n  display: var(--mat-fab-touch-target-display, block);\n  left: 50%;\n  width: var(--mat-fab-touch-target-size, 48px);\n  transform: translate(-50%, -50%);\n}\n.mat-mdc-fab .mat-ripple-element {\n  background-color: var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container));\n}\n.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-fab-disabled-state-layer-color);\n}\n.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n}\n\n.mat-mdc-mini-fab {\n  width: 40px;\n  height: 40px;\n  background-color: var(--mat-fab-small-container-color, var(--mat-sys-primary-container));\n  border-radius: var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));\n  color: var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));\n  box-shadow: var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3));\n}\n@media (hover: hover) {\n  .mat-mdc-mini-fab:hover {\n    box-shadow: var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4));\n  }\n}\n.mat-mdc-mini-fab:focus {\n  box-shadow: var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3));\n}\n.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {\n  box-shadow: var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3));\n}\n.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n  color: var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  background-color: var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n.mat-mdc-mini-fab .mat-mdc-button-touch-target {\n  position: absolute;\n  top: 50%;\n  height: var(--mat-fab-small-touch-target-size, 48px);\n  display: var(--mat-fab-small-touch-target-display);\n  left: 50%;\n  width: var(--mat-fab-small-touch-target-size, 48px);\n  transform: translate(-50%, -50%);\n}\n.mat-mdc-mini-fab .mat-ripple-element {\n  background-color: var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container));\n}\n.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-fab-small-disabled-state-layer-color);\n}\n.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n}\n\n.mat-mdc-extended-fab {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  padding-left: 20px;\n  padding-right: 20px;\n  width: auto;\n  max-width: 100%;\n  line-height: normal;\n  box-shadow: var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));\n  height: var(--mat-fab-extended-container-height, 56px);\n  border-radius: var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));\n  font-family: var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));\n  font-size: var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));\n  font-weight: var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));\n  letter-spacing: var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking));\n}\n@media (hover: hover) {\n  .mat-mdc-extended-fab:hover {\n    box-shadow: var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4));\n  }\n}\n.mat-mdc-extended-fab:focus {\n  box-shadow: var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3));\n}\n.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {\n  box-shadow: var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3));\n}\n.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {\n  box-shadow: none;\n}\n.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,\n.mat-mdc-extended-fab > .mat-icon,\n.mat-mdc-extended-fab > .material-icons {\n  margin-left: -8px;\n  margin-right: 12px;\n}\n.mat-mdc-extended-fab .mdc-button__label + .mat-icon,\n.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {\n  margin-left: 12px;\n  margin-right: -8px;\n}\n.mat-mdc-extended-fab .mat-mdc-button-touch-target {\n  width: 100%;\n}\n"]
    }]
  }], () => [], {
    extended: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute
      }]
    }]
  });
})();
class MatMiniFabButton extends _icon_button_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatButtonBase {
  _options = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(MAT_FAB_DEFAULT_OPTIONS, {
    optional: true
  });
  _isFab = true;
  constructor() {
    super();
    this._options = this._options || defaults;
    this.color = this._options.color || defaults.color;
  }
  static ɵfac = function MatMiniFabButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatMiniFabButton)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MatMiniFabButton,
    selectors: [["button", "mat-mini-fab", ""], ["a", "mat-mini-fab", ""], ["button", "matMiniFab", ""], ["a", "matMiniFab", ""]],
    hostAttrs: [1, "mdc-fab", "mat-mdc-fab-base", "mdc-fab--mini", "mat-mdc-mini-fab"],
    exportAs: ["matButton", "matAnchor"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    attrs: _c4,
    ngContentSelectors: _c2,
    decls: 7,
    vars: 4,
    consts: [[1, "mat-mdc-button-persistent-ripple"], [1, "mdc-button__label"], [1, "mat-focus-indicator"], [1, "mat-mdc-button-touch-target"]],
    template: function MatMiniFabButton_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](5, "span", 2)(6, "span", 3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mdc-button__ripple", !ctx._isFab)("mdc-fab__ripple", ctx._isFab);
      }
    },
    styles: [_c5],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(MatMiniFabButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: `button[mat-mini-fab], a[mat-mini-fab], button[matMiniFab], a[matMiniFab]`,
      host: {
        'class': 'mdc-fab mat-mdc-fab-base mdc-fab--mini mat-mdc-mini-fab'
      },
      exportAs: 'matButton, matAnchor',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: "<span\n    class=\"mat-mdc-button-persistent-ripple\"\n    [class.mdc-button__ripple]=\"!_isFab\"\n    [class.mdc-fab__ripple]=\"_isFab\"></span>\n\n<ng-content select=\".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])\">\n</ng-content>\n\n<span class=\"mdc-button__label\"><ng-content></ng-content></span>\n\n<ng-content select=\".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]\">\n</ng-content>\n\n<!--\n  The indicator can't be directly on the button, because MDC uses ::before for high contrast\n  indication and it can't be on the ripple, because it has a border radius and overflow: hidden.\n-->\n<span class=\"mat-focus-indicator\"></span>\n\n<span class=\"mat-mdc-button-touch-target\"></span>\n",
      styles: [".mat-mdc-fab-base {\n  -webkit-user-select: none;\n  user-select: none;\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 56px;\n  height: 56px;\n  padding: 0;\n  border: none;\n  fill: currentColor;\n  text-decoration: none;\n  cursor: pointer;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  overflow: visible;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  flex-shrink: 0;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-fab-base .mat-mdc-button-ripple,\n.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,\n.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n  border-radius: inherit;\n}\n.mat-mdc-fab-base .mat-mdc-button-ripple {\n  overflow: hidden;\n}\n.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {\n  content: \"\";\n  opacity: 0;\n}\n.mat-mdc-fab-base .mdc-button__label,\n.mat-mdc-fab-base .mat-icon {\n  z-index: 1;\n  position: relative;\n}\n.mat-mdc-fab-base .mat-focus-indicator {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n}\n.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {\n  content: \"\";\n}\n.mat-mdc-fab-base._mat-animation-noopable {\n  transition: none !important;\n  animation: none !important;\n}\n.mat-mdc-fab-base::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  content: \"\";\n  pointer-events: none;\n}\n.mat-mdc-fab-base[hidden] {\n  display: none;\n}\n.mat-mdc-fab-base::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {\n  outline: none;\n}\n.mat-mdc-fab-base:hover {\n  cursor: pointer;\n}\n.mat-mdc-fab-base > svg {\n  width: 100%;\n}\n.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {\n  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);\n  fill: currentColor;\n  will-change: transform;\n}\n.mat-mdc-fab-base .mat-focus-indicator::before {\n  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);\n}\n.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {\n  box-shadow: none;\n}\n.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mat-mdc-fab {\n  background-color: var(--mat-fab-container-color, var(--mat-sys-primary-container));\n  border-radius: var(--mat-fab-container-shape, var(--mat-sys-corner-large));\n  color: var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));\n  box-shadow: var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3));\n}\n@media (hover: hover) {\n  .mat-mdc-fab:hover {\n    box-shadow: var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4));\n  }\n}\n.mat-mdc-fab:focus {\n  box-shadow: var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3));\n}\n.mat-mdc-fab:active, .mat-mdc-fab:focus:active {\n  box-shadow: var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3));\n}\n.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n  color: var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  background-color: var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mat-mdc-fab.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n.mat-mdc-fab .mat-mdc-button-touch-target {\n  position: absolute;\n  top: 50%;\n  height: var(--mat-fab-touch-target-size, 48px);\n  display: var(--mat-fab-touch-target-display, block);\n  left: 50%;\n  width: var(--mat-fab-touch-target-size, 48px);\n  transform: translate(-50%, -50%);\n}\n.mat-mdc-fab .mat-ripple-element {\n  background-color: var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container));\n}\n.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-fab-disabled-state-layer-color);\n}\n.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n}\n\n.mat-mdc-mini-fab {\n  width: 40px;\n  height: 40px;\n  background-color: var(--mat-fab-small-container-color, var(--mat-sys-primary-container));\n  border-radius: var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));\n  color: var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));\n  box-shadow: var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3));\n}\n@media (hover: hover) {\n  .mat-mdc-mini-fab:hover {\n    box-shadow: var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4));\n  }\n}\n.mat-mdc-mini-fab:focus {\n  box-shadow: var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3));\n}\n.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {\n  box-shadow: var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3));\n}\n.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n  color: var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n  background-color: var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n.mat-mdc-mini-fab .mat-mdc-button-touch-target {\n  position: absolute;\n  top: 50%;\n  height: var(--mat-fab-small-touch-target-size, 48px);\n  display: var(--mat-fab-small-touch-target-display);\n  left: 50%;\n  width: var(--mat-fab-small-touch-target-size, 48px);\n  transform: translate(-50%, -50%);\n}\n.mat-mdc-mini-fab .mat-ripple-element {\n  background-color: var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container));\n}\n.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {\n  background-color: var(--mat-fab-small-disabled-state-layer-color);\n}\n.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {\n  opacity: var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n}\n\n.mat-mdc-extended-fab {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  padding-left: 20px;\n  padding-right: 20px;\n  width: auto;\n  max-width: 100%;\n  line-height: normal;\n  box-shadow: var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));\n  height: var(--mat-fab-extended-container-height, 56px);\n  border-radius: var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));\n  font-family: var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));\n  font-size: var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));\n  font-weight: var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));\n  letter-spacing: var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking));\n}\n@media (hover: hover) {\n  .mat-mdc-extended-fab:hover {\n    box-shadow: var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4));\n  }\n}\n.mat-mdc-extended-fab:focus {\n  box-shadow: var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3));\n}\n.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {\n  box-shadow: var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3));\n}\n.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {\n  box-shadow: none;\n}\n.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {\n  pointer-events: auto;\n}\n[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,\n.mat-mdc-extended-fab > .mat-icon,\n.mat-mdc-extended-fab > .material-icons {\n  margin-left: -8px;\n  margin-right: 12px;\n}\n.mat-mdc-extended-fab .mdc-button__label + .mat-icon,\n.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {\n  margin-left: 12px;\n  margin-right: -8px;\n}\n.mat-mdc-extended-fab .mat-mdc-button-touch-target {\n  width: 100%;\n}\n"]
    }]
  }], () => [], null);
})();
const MatFabAnchor = MatFabButton;
const MatMiniFabAnchor = MatMiniFabButton;
class MatButtonModule {
  static ɵfac = function MatButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatButtonModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: MatButtonModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_ripple_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(MatButtonModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_ripple_module_chunk_mjs__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule, MatButton, MatMiniFabButton, _icon_button_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatIconButton, MatFabButton],
      exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule, MatButton, MatMiniFabButton, _icon_button_chunk_mjs__WEBPACK_IMPORTED_MODULE_0__.MatIconButton, MatFabButton]
    }]
  }], null, null);
})();


/***/ },

/***/ 3777
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/card.mjs ***!
  \**********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_CARD_CONFIG: () => (/* binding */ MAT_CARD_CONFIG),
/* harmony export */   MatCard: () => (/* binding */ MatCard),
/* harmony export */   MatCardActions: () => (/* binding */ MatCardActions),
/* harmony export */   MatCardAvatar: () => (/* binding */ MatCardAvatar),
/* harmony export */   MatCardContent: () => (/* binding */ MatCardContent),
/* harmony export */   MatCardFooter: () => (/* binding */ MatCardFooter),
/* harmony export */   MatCardHeader: () => (/* binding */ MatCardHeader),
/* harmony export */   MatCardImage: () => (/* binding */ MatCardImage),
/* harmony export */   MatCardLgImage: () => (/* binding */ MatCardLgImage),
/* harmony export */   MatCardMdImage: () => (/* binding */ MatCardMdImage),
/* harmony export */   MatCardModule: () => (/* binding */ MatCardModule),
/* harmony export */   MatCardSmImage: () => (/* binding */ MatCardSmImage),
/* harmony export */   MatCardSubtitle: () => (/* binding */ MatCardSubtitle),
/* harmony export */   MatCardTitle: () => (/* binding */ MatCardTitle),
/* harmony export */   MatCardTitleGroup: () => (/* binding */ MatCardTitleGroup),
/* harmony export */   MatCardXlImage: () => (/* binding */ MatCardXlImage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);



const _c0 = ["*"];
const _c1 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["", "mat-card-image", ""], ["", "matCardImage", ""], ["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""], ["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""], ["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""], ["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]], "*"];
const _c2 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]", "*"];
const _c3 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
const _c4 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
const MAT_CARD_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('MAT_CARD_CONFIG');
class MatCard {
  appearance;
  constructor() {
    const config = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(MAT_CARD_CONFIG, {
      optional: true
    });
    this.appearance = config?.appearance || 'raised';
  }
  static ɵfac = function MatCard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCard)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatCard,
    selectors: [["mat-card"]],
    hostAttrs: [1, "mat-mdc-card", "mdc-card"],
    hostVars: 8,
    hostBindings: function MatCard_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-card-outlined", ctx.appearance === "outlined")("mdc-card--outlined", ctx.appearance === "outlined")("mat-mdc-card-filled", ctx.appearance === "filled")("mdc-card--filled", ctx.appearance === "filled");
      }
    },
    inputs: {
      appearance: "appearance"
    },
    exportAs: ["matCard"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatCard_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    },
    styles: [".mat-mdc-card {\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  position: relative;\n  border-style: solid;\n  border-width: 0;\n  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));\n  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));\n  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));\n  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));\n}\n.mat-mdc-card::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: solid 1px transparent;\n  content: \"\";\n  display: block;\n  pointer-events: none;\n  box-sizing: border-box;\n  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));\n}\n\n.mat-mdc-card-outlined {\n  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));\n  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));\n  border-width: var(--mat-card-outlined-outline-width, 1px);\n  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));\n  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));\n}\n.mat-mdc-card-outlined::after {\n  border: none;\n}\n\n.mat-mdc-card-filled {\n  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));\n  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));\n  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));\n}\n\n.mdc-card__media {\n  position: relative;\n  box-sizing: border-box;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.mdc-card__media::before {\n  display: block;\n  content: \"\";\n}\n.mdc-card__media:first-child {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n.mdc-card__media:last-child {\n  border-bottom-left-radius: inherit;\n  border-bottom-right-radius: inherit;\n}\n\n.mat-mdc-card-actions {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-sizing: border-box;\n  min-height: 52px;\n  padding: 8px;\n}\n\n.mat-mdc-card-title {\n  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));\n  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));\n  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));\n  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));\n  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));\n}\n\n.mat-mdc-card-subtitle {\n  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));\n  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));\n  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));\n  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));\n  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));\n}\n\n.mat-mdc-card-title,\n.mat-mdc-card-subtitle {\n  display: block;\n  margin: 0;\n}\n.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,\n.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {\n  padding: 16px 16px 0;\n}\n\n.mat-mdc-card-header {\n  display: flex;\n  padding: 16px 16px 0;\n}\n\n.mat-mdc-card-content {\n  display: block;\n  padding: 0 16px;\n}\n.mat-mdc-card-content:first-child {\n  padding-top: 16px;\n}\n.mat-mdc-card-content:last-child {\n  padding-bottom: 16px;\n}\n\n.mat-mdc-card-title-group {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.mat-mdc-card-avatar {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-bottom: 16px;\n  object-fit: cover;\n}\n.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,\n.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {\n  line-height: normal;\n}\n\n.mat-mdc-card-sm-image {\n  width: 80px;\n  height: 80px;\n}\n\n.mat-mdc-card-md-image {\n  width: 112px;\n  height: 112px;\n}\n\n.mat-mdc-card-lg-image {\n  width: 152px;\n  height: 152px;\n}\n\n.mat-mdc-card-xl-image {\n  width: 240px;\n  height: 240px;\n}\n\n.mat-mdc-card-subtitle ~ .mat-mdc-card-title,\n.mat-mdc-card-title ~ .mat-mdc-card-subtitle,\n.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,\n.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,\n.mat-mdc-card-title-group .mat-mdc-card-title,\n.mat-mdc-card-title-group .mat-mdc-card-subtitle {\n  padding-top: 0;\n}\n\n.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {\n  margin-bottom: 0;\n}\n\n.mat-mdc-card-actions-align-end {\n  justify-content: flex-end;\n}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(MatCard, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card',
      host: {
        'class': 'mat-mdc-card mdc-card',
        '[class.mat-mdc-card-outlined]': 'appearance === "outlined"',
        '[class.mdc-card--outlined]': 'appearance === "outlined"',
        '[class.mat-mdc-card-filled]': 'appearance === "filled"',
        '[class.mdc-card--filled]': 'appearance === "filled"'
      },
      exportAs: 'matCard',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>\n",
      styles: [".mat-mdc-card {\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  position: relative;\n  border-style: solid;\n  border-width: 0;\n  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));\n  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));\n  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));\n  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));\n}\n.mat-mdc-card::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: solid 1px transparent;\n  content: \"\";\n  display: block;\n  pointer-events: none;\n  box-sizing: border-box;\n  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));\n}\n\n.mat-mdc-card-outlined {\n  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));\n  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));\n  border-width: var(--mat-card-outlined-outline-width, 1px);\n  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));\n  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));\n}\n.mat-mdc-card-outlined::after {\n  border: none;\n}\n\n.mat-mdc-card-filled {\n  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));\n  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));\n  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));\n}\n\n.mdc-card__media {\n  position: relative;\n  box-sizing: border-box;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.mdc-card__media::before {\n  display: block;\n  content: \"\";\n}\n.mdc-card__media:first-child {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n.mdc-card__media:last-child {\n  border-bottom-left-radius: inherit;\n  border-bottom-right-radius: inherit;\n}\n\n.mat-mdc-card-actions {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-sizing: border-box;\n  min-height: 52px;\n  padding: 8px;\n}\n\n.mat-mdc-card-title {\n  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));\n  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));\n  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));\n  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));\n  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));\n}\n\n.mat-mdc-card-subtitle {\n  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));\n  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));\n  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));\n  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));\n  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));\n}\n\n.mat-mdc-card-title,\n.mat-mdc-card-subtitle {\n  display: block;\n  margin: 0;\n}\n.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,\n.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {\n  padding: 16px 16px 0;\n}\n\n.mat-mdc-card-header {\n  display: flex;\n  padding: 16px 16px 0;\n}\n\n.mat-mdc-card-content {\n  display: block;\n  padding: 0 16px;\n}\n.mat-mdc-card-content:first-child {\n  padding-top: 16px;\n}\n.mat-mdc-card-content:last-child {\n  padding-bottom: 16px;\n}\n\n.mat-mdc-card-title-group {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.mat-mdc-card-avatar {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-bottom: 16px;\n  object-fit: cover;\n}\n.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,\n.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {\n  line-height: normal;\n}\n\n.mat-mdc-card-sm-image {\n  width: 80px;\n  height: 80px;\n}\n\n.mat-mdc-card-md-image {\n  width: 112px;\n  height: 112px;\n}\n\n.mat-mdc-card-lg-image {\n  width: 152px;\n  height: 152px;\n}\n\n.mat-mdc-card-xl-image {\n  width: 240px;\n  height: 240px;\n}\n\n.mat-mdc-card-subtitle ~ .mat-mdc-card-title,\n.mat-mdc-card-title ~ .mat-mdc-card-subtitle,\n.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,\n.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,\n.mat-mdc-card-title-group .mat-mdc-card-title,\n.mat-mdc-card-title-group .mat-mdc-card-subtitle {\n  padding-top: 0;\n}\n\n.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {\n  margin-bottom: 0;\n}\n\n.mat-mdc-card-actions-align-end {\n  justify-content: flex-end;\n}\n"]
    }]
  }], () => [], {
    appearance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class MatCardTitle {
  static ɵfac = function MatCardTitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardTitle)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardTitle,
    selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]],
    hostAttrs: [1, "mat-mdc-card-title"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(MatCardTitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `mat-card-title, [mat-card-title], [matCardTitle]`,
      host: {
        'class': 'mat-mdc-card-title'
      }
    }]
  }], null, null);
})();
class MatCardTitleGroup {
  static ɵfac = function MatCardTitleGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardTitleGroup)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatCardTitleGroup,
    selectors: [["mat-card-title-group"]],
    hostAttrs: [1, "mat-mdc-card-title-group"],
    ngContentSelectors: _c2,
    decls: 4,
    vars: 0,
    template: function MatCardTitleGroup_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(MatCardTitleGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card-title-group',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        'class': 'mat-mdc-card-title-group'
      },
      template: "<div>\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content select=\"[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]\"></ng-content>\n<ng-content></ng-content>\n"
    }]
  }], null, null);
})();
class MatCardContent {
  static ɵfac = function MatCardContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardContent)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardContent,
    selectors: [["mat-card-content"]],
    hostAttrs: [1, "mat-mdc-card-content"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(MatCardContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-content',
      host: {
        'class': 'mat-mdc-card-content'
      }
    }]
  }], null, null);
})();
class MatCardSubtitle {
  static ɵfac = function MatCardSubtitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardSubtitle)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardSubtitle,
    selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]],
    hostAttrs: [1, "mat-mdc-card-subtitle"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(MatCardSubtitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]`,
      host: {
        'class': 'mat-mdc-card-subtitle'
      }
    }]
  }], null, null);
})();
class MatCardActions {
  align = 'start';
  static ɵfac = function MatCardActions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardActions)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardActions,
    selectors: [["mat-card-actions"]],
    hostAttrs: [1, "mat-mdc-card-actions", "mdc-card__actions"],
    hostVars: 2,
    hostBindings: function MatCardActions_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-card-actions-align-end", ctx.align === "end");
      }
    },
    inputs: {
      align: "align"
    },
    exportAs: ["matCardActions"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(MatCardActions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-actions',
      exportAs: 'matCardActions',
      host: {
        'class': 'mat-mdc-card-actions mdc-card__actions',
        '[class.mat-mdc-card-actions-align-end]': 'align === "end"'
      }
    }]
  }], null, {
    align: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class MatCardHeader {
  static ɵfac = function MatCardHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardHeader)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatCardHeader,
    selectors: [["mat-card-header"]],
    hostAttrs: [1, "mat-mdc-card-header"],
    ngContentSelectors: _c4,
    decls: 4,
    vars: 0,
    consts: [[1, "mat-mdc-card-header-text"]],
    template: function MatCardHeader_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(MatCardHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card-header',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        'class': 'mat-mdc-card-header'
      },
      template: "<ng-content select=\"[mat-card-avatar], [matCardAvatar]\"></ng-content>\n<div class=\"mat-mdc-card-header-text\">\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content></ng-content>\n"
    }]
  }], null, null);
})();
class MatCardFooter {
  static ɵfac = function MatCardFooter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardFooter)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardFooter,
    selectors: [["mat-card-footer"]],
    hostAttrs: [1, "mat-mdc-card-footer"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(MatCardFooter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-footer',
      host: {
        'class': 'mat-mdc-card-footer'
      }
    }]
  }], null, null);
})();
class MatCardImage {
  static ɵfac = function MatCardImage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardImage)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardImage,
    selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]],
    hostAttrs: [1, "mat-mdc-card-image", "mdc-card__media"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(MatCardImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-image], [matCardImage]',
      host: {
        'class': 'mat-mdc-card-image mdc-card__media'
      }
    }]
  }], null, null);
})();
class MatCardSmImage {
  static ɵfac = function MatCardSmImage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardSmImage)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardSmImage,
    selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]],
    hostAttrs: [1, "mat-mdc-card-sm-image", "mdc-card__media"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(MatCardSmImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-sm-image], [matCardImageSmall]',
      host: {
        'class': 'mat-mdc-card-sm-image mdc-card__media'
      }
    }]
  }], null, null);
})();
class MatCardMdImage {
  static ɵfac = function MatCardMdImage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardMdImage)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardMdImage,
    selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]],
    hostAttrs: [1, "mat-mdc-card-md-image", "mdc-card__media"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(MatCardMdImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-md-image], [matCardImageMedium]',
      host: {
        'class': 'mat-mdc-card-md-image mdc-card__media'
      }
    }]
  }], null, null);
})();
class MatCardLgImage {
  static ɵfac = function MatCardLgImage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardLgImage)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardLgImage,
    selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]],
    hostAttrs: [1, "mat-mdc-card-lg-image", "mdc-card__media"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(MatCardLgImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-lg-image], [matCardImageLarge]',
      host: {
        'class': 'mat-mdc-card-lg-image mdc-card__media'
      }
    }]
  }], null, null);
})();
class MatCardXlImage {
  static ɵfac = function MatCardXlImage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardXlImage)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardXlImage,
    selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]],
    hostAttrs: [1, "mat-mdc-card-xl-image", "mdc-card__media"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(MatCardXlImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-xl-image], [matCardImageXLarge]',
      host: {
        'class': 'mat-mdc-card-xl-image mdc-card__media'
      }
    }]
  }], null, null);
})();
class MatCardAvatar {
  static ɵfac = function MatCardAvatar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardAvatar)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardAvatar,
    selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]],
    hostAttrs: [1, "mat-mdc-card-avatar"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(MatCardAvatar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-avatar], [matCardAvatar]',
      host: {
        'class': 'mat-mdc-card-avatar'
      }
    }]
  }], null, null);
})();
const CARD_DIRECTIVES = [MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage];
class MatCardModule {
  static ɵfac = function MatCardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatCardModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatCardModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__.BidiModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__.setClassMetadata(MatCardModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: CARD_DIRECTIVES,
      exports: [CARD_DIRECTIVES, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__.BidiModule]
    }]
  }], null, null);
})();


/***/ }

}]);
//# sourceMappingURL=src_app_features_cars_cars-list_cars-list_component_ts.js.map