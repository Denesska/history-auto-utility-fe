"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_features_maintenance_add-maintenance-panel_add-maintenance-panel_component_ts-src_app-1c9710"],{

/***/ 47618
/*!***********************************************************************************************!*\
  !*** ./src/app/features/maintenance/add-maintenance-panel/add-maintenance-panel.component.ts ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddMaintenancePanelComponent: () => (/* binding */ AddMaintenancePanelComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _hau_features_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hau/features/maintenance/maintenance.component */ 38858);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionicons */ 45846);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionicons/icons */ 77958);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/until-destroy */ 56127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _hau_features_maintenance_state_maintenance_facade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @hau/features/maintenance/state/maintenance.facade */ 41385);











const _forTrack0 = ($index, $item) => $item.value;
const _forTrack1 = ($index, $item) => $item.id;
function AddMaintenancePanelComponent_Conditional_11_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const car_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" \u00B7 ", car_r1.year, " ");
  }
}
function AddMaintenancePanelComponent_Conditional_11_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](2, AddMaintenancePanelComponent_Conditional_11_For_5_Conditional_2_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const car_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", car_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", car_r1.make, " ", car_r1.model, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](car_r1.year ? 2 : -1);
  }
}
function AddMaintenancePanelComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 9)(1, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Ma\u0219in\u0103");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](4, AddMaintenancePanelComponent_Conditional_11_For_5_Template, 3, 4, "option", 16, _forTrack1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx_r1.cars);
  }
}
function AddMaintenancePanelComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", cat_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](cat_r3.label);
  }
}
function AddMaintenancePanelComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", t_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](t_r4.label);
  }
}
function AddMaintenancePanelComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-spinner", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Se salveaz\u0103\u2026 ");
  }
}
function AddMaintenancePanelComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Salveaz\u0103 ");
  }
}
let AddMaintenancePanelComponent = class AddMaintenancePanelComponent {
  constructor(_fb, _facade) {
    this._fb = _fb;
    this._facade = _facade;
    this.selectedCarId = null;
    this.cars = [];
    this.submitting = false;
    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.categories = _hau_features_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_3__.CATEGORY_CONFIG;
    this.serviceTypes = [{
      value: 'MAINTENANCE',
      label: 'Întreținere'
    }, {
      value: 'REPAIR',
      label: 'Reparație'
    }, {
      value: 'IMPROVEMENT',
      label: 'Îmbunătățire'
    }];
    (0,ionicons__WEBPACK_IMPORTED_MODULE_5__.a)({
      closeOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_6__.closeOutline,
      saveOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_6__.saveOutline,
      addOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_6__.addOutline
    });
  }
  ngOnInit() {
    this.form = this._fb.group({
      car_id: [this.selectedCarId ?? this.cars[0]?.id ?? null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      service_date: [new Date().toISOString().split('T')[0], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      mileage: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
      service_category: ['OIL_CHANGE', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      service_type: ['MAINTENANCE', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      cost: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
      expiry_date: [null]
    });
    this._facade.submitting$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this)).subscribe(s => {
      if (!s && this.submitting) {
        this.submitted.emit();
      }
      this.submitting = s;
    });
  }
  close() {
    this.closed.emit();
  }
  save() {
    if (this.form.invalid || this.submitting) return;
    const raw = this.form.value;
    const dto = {
      car_id: Number(raw.car_id),
      service_date: raw.service_date,
      mileage: Number(raw.mileage),
      service_category: raw.service_category,
      service_type: raw.service_type,
      description: raw.description,
      cost: Number(raw.cost),
      expiry_date: raw.expiry_date || undefined
    };
    this._facade.createRecord(dto);
  }
  static {
    this.ɵfac = function AddMaintenancePanelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AddMaintenancePanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_hau_features_maintenance_state_maintenance_facade__WEBPACK_IMPORTED_MODULE_9__.MaintenanceFacade));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: AddMaintenancePanelComponent,
      selectors: [["app-add-maintenance-panel"]],
      inputs: {
        selectedCarId: "selectedCarId",
        cars: "cars",
        submitting: "submitting"
      },
      outputs: {
        closed: "closed",
        submitted: "submitted"
      },
      decls: 65,
      vars: 4,
      consts: [[1, "amp-backdrop", 3, "click"], [1, "amp-panel"], [1, "amp-header"], [1, "amp-header-text"], [1, "amp-title"], [1, "amp-subtitle"], [1, "amp-close", 3, "click"], ["name", "close-outline"], [1, "amp-form", 3, "ngSubmit", "formGroup"], [1, "amp-field"], [1, "amp-row"], [1, "amp-label"], [1, "req"], ["type", "date", "formControlName", "service_date", 1, "amp-input"], ["type", "number", "placeholder", "ex: 51000", "formControlName", "mileage", "min", "0", 1, "amp-input"], ["formControlName", "service_category", 1, "amp-select"], [3, "value"], ["formControlName", "service_type", 1, "amp-select"], ["formControlName", "description", "placeholder", "ex: Ulei 10W40, filtru aer MANN, filtru ulei", "rows", "3", 1, "amp-textarea"], ["type", "number", "placeholder", "ex: 250", "formControlName", "cost", "min", "0", 1, "amp-input"], ["type", "date", "formControlName", "expiry_date", 1, "amp-input"], [1, "amp-footer"], ["type", "button", 1, "amp-btn-cancel", 3, "click"], ["type", "submit", 1, "amp-btn-save", 3, "disabled"], ["formControlName", "car_id", 1, "amp-select"], ["name", "crescent", 1, "amp-spinner"], ["name", "save-outline"]],
      template: function AddMaintenancePanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddMaintenancePanelComponent_Template_div_click_0_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Adaug\u0103 \u00EEntre\u021Binere");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "\u00CEnregistreaz\u0103 un service sau o repara\u021Bie");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddMaintenancePanelComponent_Template_button_click_8_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "ion-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "form", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function AddMaintenancePanelComponent_Template_form_ngSubmit_10_listener() {
            return ctx.save();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](11, AddMaintenancePanelComponent_Conditional_11_Template, 6, 0, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 10)(13, "div", 9)(14, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Dat\u0103 service ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 9)(20, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Kilometraj ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 10)(26, "div", 9)(27, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Categorie ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "select", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](32, AddMaintenancePanelComponent_For_33_Template, 2, 2, "option", 16, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 9)(35, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "Tip ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "select", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](40, AddMaintenancePanelComponent_For_41_Template, 2, 2, "option", 16, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 9)(43, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "Descriere / Piese ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](47, "textarea", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 10)(49, "div", 9)(50, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "Cost (RON) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](54, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div", 9)(56, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "Data expirare / reminder");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](58, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 21)(60, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddMaintenancePanelComponent_Template_button_click_60_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "Anuleaz\u0103");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](63, AddMaintenancePanelComponent_Conditional_63_Template, 2, 0)(64, AddMaintenancePanelComponent_Conditional_64_Template, 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.cars.length > 1 ? 11 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx.categories);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx.serviceTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.submitting);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.submitting ? 63 : 64);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonSpinner],
      styles: ["[_nghost-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 500;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n@media (min-width: 768px) {\n  [_nghost-%COMP%] {\n    align-items: center;\n  }\n}\n\n.amp-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n}\n\n.amp-panel[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-xl) var(--hau-radius-xl) 0 0;\n  width: 100%;\n  max-height: 92vh;\n  overflow-y: auto;\n  box-shadow: 0 -8px 40px rgba(0, 0, 0, 0.25);\n}\n@media (min-width: 768px) {\n  .amp-panel[_ngcontent-%COMP%] {\n    border-radius: var(--hau-radius-xl);\n    max-width: 560px;\n    max-height: 90vh;\n  }\n}\n\n.amp-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 20px 20px 0;\n  gap: 12px;\n  position: sticky;\n  top: 0;\n  background: var(--hau-surface);\n  z-index: 2;\n  border-bottom: 1px solid var(--hau-border);\n  padding-bottom: 16px;\n}\n\n.amp-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: var(--hau-text);\n  margin: 0 0 2px;\n}\n\n.amp-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--hau-text-muted);\n  margin: 0;\n}\n\n.amp-close[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--hau-text-muted);\n  font-size: 1.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px;\n  border-radius: var(--hau-radius-sm);\n  transition: color 0.15s, background 0.15s;\n}\n.amp-close[_ngcontent-%COMP%]:hover {\n  color: var(--hau-text);\n  background: var(--hau-border);\n}\n\n.amp-form[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.amp-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n\n.amp-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.amp-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--hau-text);\n}\n.amp-label[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: var(--hau-danger-fg, #ef4444);\n}\n\n.amp-textarea[_ngcontent-%COMP%], .amp-select[_ngcontent-%COMP%], .amp-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  background: var(--hau-bg);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-md);\n  color: var(--hau-text);\n  font-size: 0.875rem;\n  outline: none;\n  transition: border-color 0.15s;\n  box-sizing: border-box;\n}\n.amp-textarea[_ngcontent-%COMP%]:focus, .amp-select[_ngcontent-%COMP%]:focus, .amp-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--hau-primary);\n}\n.amp-textarea[_ngcontent-%COMP%]::placeholder, .amp-select[_ngcontent-%COMP%]::placeholder, .amp-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--hau-text-dim, var(--hau-text-muted));\n}\n\n.amp-select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.amp-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n\n.amp-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  padding-top: 4px;\n  border-top: 1px solid var(--hau-border);\n}\n\n.amp-btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: none;\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-md);\n  color: var(--hau-text-muted);\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.amp-btn-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--hau-border);\n  color: var(--hau-text);\n}\n\n.amp-btn-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 22px;\n  background: var(--hau-primary);\n  color: #fff;\n  border: none;\n  border-radius: var(--hau-radius-md);\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.amp-btn-save[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.amp-btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.85;\n}\n.amp-btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.amp-spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbWFpbnRlbmFuY2UvYWRkLW1haW50ZW5hbmNlLXBhbmVsL2FkZC1tYWludGVuYW5jZS1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFDRTtFQVJGO0lBU0ksbUJBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EsNERBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0FBRUY7QUFBRTtFQVhGO0lBWUksbUNBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VBR0Y7QUFDRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7RUFDQSxvQkFBQTtBQUdGOztBQURBO0VBQWdCLG1CQUFBO0VBQXFCLGdCQUFBO0VBQWtCLHNCQUFBO0VBQXdCLGVBQUE7QUFRL0U7O0FBUEE7RUFBZ0Isb0JBQUE7RUFBc0IsNEJBQUE7RUFBOEIsU0FBQTtBQWFwRTs7QUFaQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EseUNBQUE7QUFlRjtBQWJFO0VBQVUsc0JBQUE7RUFBd0IsNkJBQUE7QUFpQnBDOztBQWRBO0VBQVksYUFBQTtFQUFlLGFBQUE7RUFBZSxzQkFBQTtFQUF3QixTQUFBO0FBcUJsRTs7QUFuQkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBc0JGOztBQW5CQTtFQUFhLGFBQUE7RUFBZSxzQkFBQTtFQUF3QixRQUFBO0FBeUJwRDs7QUF4QkE7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUEyQkY7QUExQkU7RUFBTyxvQ0FBQTtBQTZCVDs7QUExQkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QUE2QkY7QUEzQkU7RUFBVSxnQ0FBQTtBQThCWjtBQTdCRTtFQUFpQixpREFBQTtBQWdDbkI7O0FBNUJBO0VBQXFDLGVBQUE7QUFnQ3JDOztBQS9CQTtFQUFxQyxnQkFBQTtFQUFrQixnQkFBQTtBQW9DdkQ7O0FBbENBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7QUFxQ0Y7O0FBbENBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFxQ0Y7QUFuQ0U7RUFBVSw2QkFBQTtFQUErQixzQkFBQTtBQXVDM0M7O0FBcENBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUF1Q0Y7QUFyQ0U7RUFBVyxlQUFBO0FBd0NiO0FBdkNFO0VBQXlCLGFBQUE7QUEwQzNCO0FBekNFO0VBQWEsWUFBQTtFQUFjLG1CQUFBO0FBNkM3Qjs7QUExQ0E7RUFBZSxXQUFBO0VBQWEsWUFBQTtBQStDNUIiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIHotaW5kZXg6IDUwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5cbi5hbXAtYmFja2Ryb3Age1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xufVxuXG4uYW1wLXBhbmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtc3VyZmFjZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLXhsKSB2YXIoLS1oYXUtcmFkaXVzLXhsKSAwIDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA5MnZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3gtc2hhZG93OiAwIC04cHggNDBweCByZ2JhKDAsMCwwLC4yNSk7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy14bCk7XG4gICAgbWF4LXdpZHRoOiA1NjBweDtcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xuICB9XG59XG5cbi5hbXAtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMjBweCAyMHB4IDA7XG4gIGdhcDogMTJweDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtc3VyZmFjZSk7XG4gIHotaW5kZXg6IDI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG4uYW1wLXRpdGxlICAgIHsgZm9udC1zaXplOiAxLjEyNXJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6IHZhcigtLWhhdS10ZXh0KTsgbWFyZ2luOiAwIDAgMnB4OyB9XG4uYW1wLXN1YnRpdGxlIHsgZm9udC1zaXplOiAwLjgxMjVyZW07IGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7IG1hcmdpbjogMDsgfVxuLmFtcC1jbG9zZSB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLXNtKTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMsIGJhY2tncm91bmQgMC4xNXM7XG5cbiAgJjpob3ZlciB7IGNvbG9yOiB2YXIoLS1oYXUtdGV4dCk7IGJhY2tncm91bmQ6IHZhcigtLWhhdS1ib3JkZXIpOyB9XG59XG5cbi5hbXAtZm9ybSB7IHBhZGRpbmc6IDIwcHg7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMTZweDsgfVxuXG4uYW1wLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uYW1wLWZpZWxkIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiA2cHg7IH1cbi5hbXAtbGFiZWwge1xuICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0KTtcbiAgLnJlcSB7IGNvbG9yOiB2YXIoLS1oYXUtZGFuZ2VyLWZnLCAjZWY0NDQ0KTsgfVxufVxuXG4laW5wdXQtYmFzZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1iZyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYXUtcmFkaXVzLW1kKTtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0KTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICY6Zm9jdXMgeyBib3JkZXItY29sb3I6IHZhcigtLWhhdS1wcmltYXJ5KTsgfVxuICAmOjpwbGFjZWhvbGRlciB7IGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1kaW0sIHZhcigtLWhhdS10ZXh0LW11dGVkKSk7IH1cbn1cblxuLmFtcC1pbnB1dCAgICB7IEBleHRlbmQgJWlucHV0LWJhc2U7IH1cbi5hbXAtc2VsZWN0ICAgeyBAZXh0ZW5kICVpbnB1dC1iYXNlOyBjdXJzb3I6IHBvaW50ZXI7IH1cbi5hbXAtdGV4dGFyZWEgeyBAZXh0ZW5kICVpbnB1dC1iYXNlOyByZXNpemU6IHZlcnRpY2FsOyBtaW4taGVpZ2h0OiA4MHB4OyB9XG5cbi5hbXAtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taGF1LWJvcmRlcik7XG59XG5cbi5hbXAtYnRuLWNhbmNlbCB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGF1LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtbWQpO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cztcblxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0taGF1LWJvcmRlcik7IGNvbG9yOiB2YXIoLS1oYXUtdGV4dCk7IH1cbn1cblxuLmFtcC1idG4tc2F2ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgcGFkZGluZzogMTBweCAyMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtcHJpbWFyeSk7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtbWQpO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXM7XG5cbiAgaW9uLWljb24geyBmb250LXNpemU6IDFyZW07IH1cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7IG9wYWNpdHk6IDAuODU7IH1cbiAgJjpkaXNhYmxlZCB7IG9wYWNpdHk6IDAuNTsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxufVxuXG4uYW1wLXNwaW5uZXIgeyB3aWR0aDogMTZweDsgaGVpZ2h0OiAxNnB4OyB9XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
};
AddMaintenancePanelComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.UntilDestroy)()], AddMaintenancePanelComponent);


/***/ },

/***/ 38858
/*!***************************************************************!*\
  !*** ./src/app/features/maintenance/maintenance.component.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CATEGORY_CONFIG: () => (/* binding */ CATEGORY_CONFIG),
/* harmony export */   MaintenanceComponent: () => (/* binding */ MaintenanceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _hau_features_maintenance_add_maintenance_panel_add_maintenance_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/features/maintenance/add-maintenance-panel/add-maintenance-panel.component */ 47618);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionicons */ 45846);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionicons/icons */ 77958);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/until-destroy */ 56127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _hau_features_maintenance_state_maintenance_facade__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @hau/features/maintenance/state/maintenance.facade */ 41385);










const _c0 = () => [1, 2, 3, 4];
const _c1 = () => [];
const _forTrack0 = ($index, $item) => $item.id;
const _forTrack1 = ($index, $item) => $item.value;
function MaintenanceComponent_Conditional_1_For_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-skeleton-text", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MaintenanceComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "div", 3)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-skeleton-text", 4)(4, "ion-skeleton-text", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](6, MaintenanceComponent_Conditional_1_For_7_Template, 2, 0, "div", 7, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](0, _c0));
  }
}
function MaintenanceComponent_Conditional_3_Conditional_8_Conditional_0_Conditional_8_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const car_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" \u00B7 ", car_r6.year, " ");
  }
}
function MaintenanceComponent_Conditional_3_Conditional_8_Conditional_0_Conditional_8_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MaintenanceComponent_Conditional_3_Conditional_8_Conditional_0_Conditional_8_For_3_Template_li_click_0_listener() {
      const car_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.selectCar(car_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](3, MaintenanceComponent_Conditional_3_Conditional_8_Conditional_0_Conditional_8_For_3_Conditional_3_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_15_0;
    const car_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ((tmp_15_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 5, ctx_r2.selectedCar$)) == null ? null : tmp_15_0.id) === car_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", car_r6.make, " ", car_r6.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](car_r6.year ? 3 : -1);
  }
}
function MaintenanceComponent_Conditional_3_Conditional_8_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MaintenanceComponent_Conditional_3_Conditional_8_Conditional_0_Conditional_8_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.carSelectorOpen = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](2, MaintenanceComponent_Conditional_3_Conditional_8_Conditional_0_Conditional_8_For_3_Template, 4, 7, "li", 23, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cars_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](cars_r7);
  }
}
function MaintenanceComponent_Conditional_3_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17)(1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MaintenanceComponent_Conditional_3_Conditional_8_Conditional_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.carSelectorOpen = !ctx_r2.carSelectorOpen);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](8, MaintenanceComponent_Conditional_3_Conditional_8_Conditional_0_Conditional_8_Template, 4, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("open", ctx_r2.carSelectorOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 5, ctx_r2.selectedCar$)) == null ? null : tmp_5_0.make, " ", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 7, ctx_r2.selectedCar$)) == null ? null : tmp_5_0.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r2.carSelectorOpen ? 8 : -1);
  }
}
function MaintenanceComponent_Conditional_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](0, MaintenanceComponent_Conditional_3_Conditional_8_Conditional_0_Template, 9, 9, "div", 16);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.length > 0 ? 0 : -1);
  }
}
function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_0_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stats_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("la ", ctx_r2.formatMileage(stats_r9.lastOilMileage));
  }
}
function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](2, MaintenanceComponent_Conditional_3_Conditional_13_Conditional_0_Conditional_7_Conditional_2_Template, 2, 1, "span", 39);
  }
  if (rf & 2) {
    const stats_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.formatDate(stats_r9.lastOilDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](stats_r9.lastOilMileage ? 2 : -1);
  }
}
function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stats_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00CEn ", stats_r9.nextServiceDays, " zile");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Est. ", ctx_r2.formatDate(stats_r9.nextServiceDate));
  }
}
function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_0_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 32)(5, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Ultimul schimb ulei");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](7, MaintenanceComponent_Conditional_3_Conditional_13_Conditional_0_Conditional_7_Template, 3, 2)(8, MaintenanceComponent_Conditional_3_Conditional_13_Conditional_0_Conditional_8_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 7)(10, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 32)(13, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Kilometraj curent");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 7)(18, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 32)(21, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Total \u00EEnregistr\u0103ri");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "intr\u0103ri de \u00EEntre\u021Binere");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 7)(28, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 32)(31, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "Urm\u0103tor service");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](33, MaintenanceComponent_Conditional_3_Conditional_13_Conditional_0_Conditional_33_Template, 4, 2)(34, MaintenanceComponent_Conditional_3_Conditional_13_Conditional_0_Conditional_34_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const stats_r9 = ctx;
    const car_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](stats_r9.lastOilDate ? 7 : 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.formatMileage(car_r10.current_mileage));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](stats_r9.totalRecords);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](stats_r9.nextServiceDate ? 33 : 34);
  }
}
function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Nicio \u00EEnregistrare");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_0_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.addPanelOpen = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " Adaug\u0103 \u00EEntre\u021Binere ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const car_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("Adaug\u0103 primul record de \u00EEntre\u021Binere pentru ", car_r10.make, " ", car_r10.model, ".");
  }
}
function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_Conditional_2_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_Conditional_2_Conditional_1_Conditional_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.setTab("upcoming"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Vezi toate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_Conditional_2_Conditional_1_For_7_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const badge_r13 = ctx;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", badge_r13.css);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](badge_r13.label);
  }
}
function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_Conditional_2_Conditional_1_For_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 61)(1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ion-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 65)(4, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Scadent \u00EEn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](10, MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_Conditional_2_Conditional_1_For_7_Conditional_10_Template, 2, 2, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_24_0;
    const rec_r14 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", "ri-cat--" + rec_r14.service_category.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("name", ctx_r2.getCategoryConfig(rec_r14.service_category).icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.getCategoryConfig(rec_r14.service_category).label);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.getDaysLeft(rec_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"]((tmp_24_0 = ctx_r2.getPriorityLabel(rec_r14)) ? 10 : -1, tmp_24_0);
  }
}
function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "h2", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Remindere viitoare");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](4, MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_Conditional_2_Conditional_1_Conditional_4_Template, 2, 0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ul", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](6, MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_Conditional_2_Conditional_1_For_7_Template, 11, 5, "li", 61, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const upcomingRecs_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreadContextLet"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](upcomingRecs_r15.length > 3 ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](upcomingRecs_r15.slice(0, 3));
  }
}
function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdeclareLet"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](1, MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_Conditional_2_Conditional_1_Template, 8, 1, "div", 46);
  }
  if (rf & 2) {
    const allRecords_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    const upcomingRecs_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstoreLet"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).getUpcoming(allRecords_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](upcomingRecs_r17.length > 0 ? 1 : -1);
  }
}
function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, " Viitoare ");
  }
}
function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, " Istoric \u00EEntre\u021Binere ");
  }
}
function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, " \u00CEntre\u021Binere recent\u0103 ");
  }
}
function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_For_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "td")(15, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_For_26_Template_button_click_15_listener() {
      const rec_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.deleteRecord(rec_r19.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "ion-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rec_r19 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", "cat-dot--" + rec_r19.service_category.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r2.getCategoryConfig(rec_r19.service_category).label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.formatDate(rec_r19.service_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.formatMileage(rec_r19.mileage));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](11, 6, rec_r19.cost, "1.0-0"), " RON");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](rec_r19.description);
  }
}
function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_ForEmpty_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Nicio \u00EEnregistrare pentru aceast\u0103 filtrare");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_For_30_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rec_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](rec_r21.description);
  }
}
function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_For_30_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const badge_r22 = ctx;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", badge_r22.css);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](badge_r22.label);
  }
}
function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_For_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 52)(1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ion-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 76)(4, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](11, MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_For_30_Conditional_11_Template, 2, 1, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 80)(13, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](16, MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_For_30_Conditional_16_Template, 2, 2, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_For_30_Template_button_click_17_listener() {
      const rec_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.deleteRecord(rec_r21.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "ion-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_24_0;
    const rec_r21 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", "ri-cat--" + rec_r21.service_category.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("name", ctx_r2.getCategoryConfig(rec_r21.service_category).icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.getCategoryConfig(rec_r21.service_category).label);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r2.formatDate(rec_r21.service_date), " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r2.formatMileage(rec_r21.mileage), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](rec_r21.description ? 11 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](15, 8, rec_r21.cost, "1.0-0"), " RON");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"]((tmp_24_0 = ctx_r2.getPriorityLabel(rec_r21)) ? 16 : -1, tmp_24_0);
  }
}
function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_ForEmpty_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Nicio \u00EEnregistrare");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_For_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_For_38_Template_button_click_0_listener() {
      const cat_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r23).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.toggleCategory(cat_r24.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ion-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cat_r24 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r2.filterCategory === cat_r24.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", "ri-cat--" + cat_r24.value.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("name", cat_r24.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](cat_r24.label);
  }
}
function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 41)(1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](2, MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_Conditional_2_Template, 2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 46)(4, "div", 47)(5, "h2", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](6, MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_Conditional_6_Template, 1, 0)(7, MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_Conditional_7_Template, 1, 0)(8, MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_Conditional_8_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 49)(10, "table", 50)(11, "thead")(12, "tr")(13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Serviciu / Pies\u0103");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Dat\u0103");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Km");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](25, MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_For_26_Template, 17, 9, "tr", null, _forTrack0, false, MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_ForEmpty_27_Template, 3, 0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "ul", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](29, MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_For_30_Template, 19, 11, "li", 52, _forTrack0, false, MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_ForEmpty_31_Template, 2, 0, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 54)(33, "div", 46)(34, "h2", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "Categorii service");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](37, MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_For_38_Template, 5, 5, "button", 57, _forTrack1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "Sfat: \u021Aine \u00EEntre\u021Binerea la zi pentru performan\u021B\u0103 optim\u0103 \u0219i valoare de rev\u00E2nzare mai bun\u0103.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const allRecords_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r2.activeTab === "all" ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r2.activeTab === "upcoming" ? 6 : ctx_r2.activeTab === "history" ? 7 : 8);
    const displayRecords_r25 = ctx_r2.getFiltered(allRecords_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](displayRecords_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](displayRecords_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx_r2.categories);
  }
}
function MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](0, MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_0_Template, 9, 2, "div", 15)(1, MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Conditional_1_Template, 41, 4, "div", 41);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.length === 0 ? 0 : 1);
  }
}
function MaintenanceComponent_Conditional_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](0, MaintenanceComponent_Conditional_3_Conditional_13_Conditional_0_Template, 35, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 25)(3, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MaintenanceComponent_Conditional_3_Conditional_13_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.setTab("all"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Toate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MaintenanceComponent_Conditional_3_Conditional_13_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.setTab("upcoming"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " Viitoare ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MaintenanceComponent_Conditional_3_Conditional_13_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.setTab("history"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, " Istoric ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](12, MaintenanceComponent_Conditional_3_Conditional_13_Conditional_12_Template, 2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "async");
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_7_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"]((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 8, ctx_r2.stats$)) ? 0 : -1, tmp_3_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r2.activeTab === "all");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r2.activeTab === "upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r2.activeTab === "history");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"]((tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 10, ctx_r2.records$)) ? 12 : -1, tmp_7_0);
  }
}
function MaintenanceComponent_Conditional_3_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Nicio ma\u0219in\u0103 ad\u0103ugat\u0103");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Adaug\u0103 mai \u00EEnt\u00E2i o ma\u0219in\u0103 din sec\u021Biunea Garaj.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function MaintenanceComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "div", 3)(2, "div", 9)(3, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "\u00CEntre\u021Binere");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Urm\u0103re\u0219te istoricul service-ului, sarcinile viitoare \u0219i \u00EEngrijirea vehiculului.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](8, MaintenanceComponent_Conditional_3_Conditional_8_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MaintenanceComponent_Conditional_3_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.addPanelOpen = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " Adaug\u0103 \u00EEntre\u021Binere ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](13, MaintenanceComponent_Conditional_3_Conditional_13_Template, 14, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalBranchCreate"](15, MaintenanceComponent_Conditional_3_Conditional_15_Template, 6, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"]((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 2, ctx_r2.cars$)) ? 8 : -1, tmp_1_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"]((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 4, ctx_r2.selectedCar$)) ? 13 : 15, tmp_2_0);
  }
}
function MaintenanceComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-add-maintenance-panel", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("closed", function MaintenanceComponent_Conditional_4_Template_app_add_maintenance_panel_closed_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.addPanelOpen = false);
    })("submitted", function MaintenanceComponent_Conditional_4_Template_app_add_maintenance_panel_submitted_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.onRecordCreated());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selectedCarId", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 3, ctx_r2.selectedCar$)) == null ? null : tmp_1_0.id) ?? null)("cars", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 5, ctx_r2.cars$) ?? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](9, _c1))("submitting", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 7, ctx_r2.submitting$) ?? false);
  }
}
const CATEGORY_CONFIG = [{
  value: 'OIL_CHANGE',
  label: 'Ulei',
  icon: 'water-outline'
}, {
  value: 'BRAKE_SERVICE',
  label: 'Frâne',
  icon: 'build-outline'
}, {
  value: 'TIRE_SERVICE',
  label: 'Anvelope',
  icon: 'settings-outline'
}, {
  value: 'FLUID_SERVICE',
  label: 'Lichide',
  icon: 'color-filter-outline'
}, {
  value: 'ENGINE_SERVICE',
  label: 'Motor',
  icon: 'construct-outline'
}, {
  value: 'INSPECTION',
  label: 'Inspecție',
  icon: 'shield-checkmark-outline'
}, {
  value: 'BATTERY_SERVICE',
  label: 'Baterie',
  icon: 'battery-charging-outline'
}, {
  value: 'FILTER_SERVICE',
  label: 'Filtre',
  icon: 'list-outline'
}, {
  value: 'LIGHT_SERVICE',
  label: 'Lumini',
  icon: 'flash-outline'
}, {
  value: 'TRANSMISSION_SERVICE',
  label: 'Transmisie',
  icon: 'car-outline'
}, {
  value: 'OTHER',
  label: 'Altele',
  icon: 'checkmark-circle-outline'
}];
let MaintenanceComponent = class MaintenanceComponent {
  constructor(_facade) {
    this._facade = _facade;
    this.cars$ = this._facade.cars$;
    this.loading$ = this._facade.loading$;
    this.submitting$ = this._facade.submitting$;
    this.selectedCar$ = this._facade.selectedCar$;
    this.records$ = this._facade.recordsForSelectedCar$;
    this.stats$ = this.records$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(recs => this._computeStats(recs)));
    this.activeTab = 'all';
    this.addPanelOpen = false;
    this.carSelectorOpen = false;
    this.filterCategory = null;
    this.categories = CATEGORY_CONFIG;
    (0,ionicons__WEBPACK_IMPORTED_MODULE_4__.a)({
      addOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.addOutline,
      waterOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.waterOutline,
      shieldCheckmarkOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.shieldCheckmarkOutline,
      settingsOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.settingsOutline,
      batteryChargingOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.batteryChargingOutline,
      constructOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.constructOutline,
      colorFilterOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.colorFilterOutline,
      flashOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.flashOutline,
      checkmarkCircleOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.checkmarkCircleOutline,
      trashOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.trashOutline,
      calendarOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.calendarOutline,
      speedometerOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.speedometerOutline,
      timeOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.timeOutline,
      listOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.listOutline,
      buildOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.buildOutline,
      carOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.carOutline,
      chevronDownOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.chevronDownOutline
    });
  }
  ngOnInit() {
    this._facade.loadAll();
  }
  setTab(tab) {
    this.activeTab = tab;
    this.filterCategory = null;
  }
  selectCar(car) {
    this._facade.selectCar(car.id);
    this.carSelectorOpen = false;
  }
  onRecordCreated() {
    this.addPanelOpen = false;
  }
  deleteRecord(id) {
    this._facade.deleteRecord(id);
  }
  toggleCategory(cat) {
    this.filterCategory = this.filterCategory === cat ? null : cat;
  }
  getUpcoming(records) {
    const now = Date.now();
    return records.filter(r => r.expiry_date && new Date(r.expiry_date).getTime() > now).sort((a, b) => new Date(a.expiry_date).getTime() - new Date(b.expiry_date).getTime());
  }
  getFiltered(records) {
    const now = Date.now();
    let list = this.filterCategory ? records.filter(r => r.service_category === this.filterCategory) : records;
    switch (this.activeTab) {
      case 'upcoming':
        return list.filter(r => r.expiry_date && new Date(r.expiry_date).getTime() > now).sort((a, b) => new Date(a.expiry_date).getTime() - new Date(b.expiry_date).getTime());
      default:
        return list.sort((a, b) => new Date(b.service_date).getTime() - new Date(a.service_date).getTime());
    }
  }
  getPriorityLabel(record) {
    if (!record.expiry_date) return null;
    const days = Math.ceil((new Date(record.expiry_date).getTime() - Date.now()) / 86400000);
    if (days <= 0) return {
      label: 'Expirat',
      css: 'badge--expired'
    };
    if (days <= 14) return {
      label: 'Urgent',
      css: 'badge--high'
    };
    if (days <= 45) return {
      label: 'Mediu',
      css: 'badge--medium'
    };
    return null;
  }
  getDaysLeft(record) {
    if (!record.expiry_date) return '';
    const days = Math.ceil((new Date(record.expiry_date).getTime() - Date.now()) / 86400000);
    if (days <= 0) return 'Expirat';
    return days === 1 ? '1 zi' : `${days} zile`;
  }
  getCategoryConfig(cat) {
    return CATEGORY_CONFIG.find(c => c.value === cat) ?? CATEGORY_CONFIG[CATEGORY_CONFIG.length - 1];
  }
  formatMileage(val) {
    if (val == null) return '—';
    return Number(val).toLocaleString() + ' km';
  }
  formatDate(dateStr) {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('ro-RO', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }
  _computeStats(records) {
    const oilRecords = records.filter(r => r.service_category === 'OIL_CHANGE').sort((a, b) => new Date(b.service_date).getTime() - new Date(a.service_date).getTime());
    const now = Date.now();
    const upcoming = records.filter(r => r.expiry_date && new Date(r.expiry_date).getTime() > now).sort((a, b) => new Date(a.expiry_date).getTime() - new Date(b.expiry_date).getTime());
    return {
      lastOilDate: oilRecords[0]?.service_date ?? null,
      lastOilMileage: oilRecords[0]?.mileage ?? null,
      totalRecords: records.length,
      nextServiceDate: upcoming[0]?.expiry_date ?? null,
      nextServiceDays: upcoming[0]?.expiry_date ? Math.ceil((new Date(upcoming[0].expiry_date).getTime() - now) / 86400000) : null
    };
  }
  static {
    this.ɵfac = function MaintenanceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MaintenanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_hau_features_maintenance_state_maintenance_facade__WEBPACK_IMPORTED_MODULE_10__.MaintenanceFacade));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: MaintenanceComponent,
      selectors: [["app-maintenance"]],
      decls: 5,
      vars: 4,
      consts: [[1, "mn-page"], [1, "mn-inner"], [3, "selectedCarId", "cars", "submitting"], [1, "mn-header"], ["animated", "", 1, "skel-title"], ["animated", "", 1, "skel-sub"], [1, "mn-stats-grid"], [1, "stat-card"], ["animated", "", 1, "skel-stat"], [1, "mn-header-text"], [1, "mn-title"], [1, "mn-subtitle"], [1, "mn-header-actions"], [1, "btn-primary", 3, "click"], ["name", "add-outline"], [1, "mn-empty"], [1, "car-selector", 3, "open"], [1, "car-selector"], [1, "car-selector__btn", 3, "click"], ["name", "car-outline"], ["name", "chevron-down-outline", 1, "car-selector__chevron"], [1, "car-selector__backdrop", 3, "click"], [1, "car-selector__dropdown"], [1, "car-selector__option", 3, "active"], [1, "car-selector__option", 3, "click"], [1, "mn-tabs"], [1, "mn-tab", 3, "click"], ["name", "list-outline"], ["name", "time-outline"], ["name", "calendar-outline"], [1, "stat-card__icon", "stat-card__icon--blue"], ["name", "water-outline"], [1, "stat-card__body"], [1, "stat-card__label"], [1, "stat-card__value", "stat-card__value--empty"], [1, "stat-card__icon", "stat-card__icon--green"], ["name", "speedometer-outline"], [1, "stat-card__value"], [1, "stat-card__icon", "stat-card__icon--purple"], [1, "stat-card__sub"], [1, "stat-card__icon", "stat-card__icon--orange"], [1, "mn-content-grid"], ["name", "construct-outline", 1, "mn-empty__icon"], [1, "mn-empty__title"], [1, "mn-empty__sub"], [1, "mn-main-col"], [1, "mn-card"], [1, "mn-card__header"], [1, "mn-card__title"], [1, "mn-table-wrap"], [1, "mn-table"], [1, "mn-record-list"], [1, "mn-record-item"], [1, "mn-record-empty"], [1, "mn-side-col"], [1, "mn-card__title", "mn-card__title--mb"], [1, "cat-grid"], [1, "cat-item", 3, "active"], [1, "mn-tip"], [1, "mn-card__link"], [1, "reminder-list"], [1, "reminder-item"], [1, "mn-card__link", 3, "click"], [1, "reminder-item__icon", 3, "ngClass"], [3, "name"], [1, "reminder-item__body"], [1, "reminder-item__name"], [1, "reminder-item__due"], [1, "badge", 3, "ngClass"], [1, "mn-table-cat"], [1, "cat-dot", 3, "ngClass"], [1, "mn-table-notes"], ["title", "\u0218terge", 1, "mn-del-btn", 3, "click"], ["name", "trash-outline"], ["colspan", "6", 1, "mn-table-empty"], [1, "mn-record-item__icon", 3, "ngClass"], [1, "mn-record-item__body"], [1, "mn-record-item__name"], [1, "mn-record-item__meta"], [1, "mn-record-item__desc"], [1, "mn-record-item__right"], [1, "mn-record-item__cost"], [1, "mn-del-btn", 3, "click"], [1, "cat-item", 3, "click"], [1, "cat-item__icon", 3, "ngClass"], [1, "cat-item__label"], ["name", "car-outline", 1, "mn-empty__icon"], [3, "closed", "submitted", "selectedCarId", "cars", "submitting"]],
      template: function MaintenanceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-content", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](1, MaintenanceComponent_Conditional_1_Template, 8, 1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalBranchCreate"](3, MaintenanceComponent_Conditional_3_Template, 16, 6, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](4, MaintenanceComponent_Conditional_4_Template, 4, 10, "app-add-maintenance-panel", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, ctx.loading$) ? 1 : 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.addPanelOpen ? 4 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonSkeletonText, _hau_features_maintenance_add_maintenance_panel_add_maintenance_panel_component__WEBPACK_IMPORTED_MODULE_2__.AddMaintenancePanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  --mn-bg: var(--hau-bg);\n  --mn-card: var(--hau-surface);\n  --mn-border: var(--hau-border);\n  --mn-text: var(--hau-text);\n  --mn-muted: var(--hau-text-muted);\n  --mn-dim: var(--hau-text-dim);\n  --mn-accent: var(--hau-primary);\n  --mn-accent-s: var(--hau-primary-soft);\n  --mn-r-sm: var(--hau-radius-sm);\n  --mn-r-md: var(--hau-radius-md);\n  --mn-r-lg: var(--hau-radius-lg);\n  --mn-shadow: var(--hau-shadow-soft);\n}\n\n.mn-page[_ngcontent-%COMP%] {\n  --background: var(--mn-bg);\n}\n\n.mn-inner[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 20px 16px 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n@media (min-width: 768px) {\n  .mn-inner[_ngcontent-%COMP%] {\n    padding: 28px 24px 48px;\n  }\n}\n@media (min-width: 1100px) {\n  .mn-inner[_ngcontent-%COMP%] {\n    padding: 32px 32px 56px;\n  }\n}\n\n.mn-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n\n.mn-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--mn-text);\n  margin: 0 0 4px;\n}\n\n.mn-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--mn-muted);\n  margin: 0;\n}\n\n.mn-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.car-selector[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.car-selector__btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  background: var(--mn-card);\n  border: 1px solid var(--mn-border);\n  border-radius: var(--mn-r-md);\n  color: var(--mn-text);\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: border-color 0.15s;\n}\n.car-selector__btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--mn-accent);\n}\n.car-selector__btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--mn-muted);\n}\n.car-selector__btn[_ngcontent-%COMP%]   .car-selector__chevron[_ngcontent-%COMP%] {\n  transition: transform 0.2s;\n}\n\n.car-selector.open[_ngcontent-%COMP%]   .car-selector__chevron[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.car-selector__backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 99;\n}\n\n.car-selector__dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 6px);\n  right: 0;\n  min-width: 200px;\n  background: var(--mn-card);\n  border: 1px solid var(--mn-border);\n  border-radius: var(--mn-r-md);\n  box-shadow: var(--mn-shadow);\n  list-style: none;\n  margin: 0;\n  padding: 4px;\n  z-index: 100;\n}\n\n.car-selector__option[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: var(--mn-r-sm);\n  font-size: 0.875rem;\n  color: var(--mn-text);\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.car-selector__option[_ngcontent-%COMP%]:hover {\n  background: var(--mn-accent-s);\n}\n.car-selector__option.active[_ngcontent-%COMP%] {\n  background: var(--mn-accent-s);\n  color: var(--mn-accent);\n  font-weight: 600;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  background: var(--mn-accent);\n  color: #fff;\n  border: none;\n  border-radius: var(--mn-r-md);\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.15s;\n  white-space: nowrap;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n.btn-primary[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n\n.mn-stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n@media (min-width: 768px) {\n  .mn-stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n    gap: 16px;\n  }\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--mn-card);\n  border: 1px solid var(--mn-border);\n  border-radius: var(--mn-r-lg);\n  padding: 16px;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  box-shadow: var(--mn-shadow);\n}\n\n.stat-card__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: var(--mn-r-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n}\n.stat-card__icon--blue[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: #3b82f6;\n}\n.stat-card__icon--green[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #16a34a;\n}\n.stat-card__icon--purple[_ngcontent-%COMP%] {\n  background: rgba(168, 85, 247, 0.12);\n  color: #9333ea;\n}\n.stat-card__icon--orange[_ngcontent-%COMP%] {\n  background: rgba(249, 115, 22, 0.12);\n  color: #ea580c;\n}\n\n.stat-card__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n\n.stat-card__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--mn-muted);\n}\n\n.stat-card__value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--mn-text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.stat-card__value--empty[_ngcontent-%COMP%] {\n  color: var(--mn-dim);\n}\n\n.stat-card__sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--mn-muted);\n}\n\n.mn-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  background: var(--mn-card);\n  border: 1px solid var(--mn-border);\n  border-radius: var(--mn-r-lg);\n  padding: 4px;\n  width: fit-content;\n}\n\n.mn-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: var(--mn-r-md);\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--mn-muted);\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.mn-tab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.mn-tab.active[_ngcontent-%COMP%] {\n  background: var(--mn-accent);\n  color: #fff;\n}\n.mn-tab[_ngcontent-%COMP%]:not(.active):hover {\n  background: var(--mn-accent-s);\n  color: var(--mn-accent);\n}\n\n.mn-content-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n@media (min-width: 1100px) {\n  .mn-content-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 280px;\n    align-items: start;\n  }\n}\n\n.mn-main-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.mn-side-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.mn-card[_ngcontent-%COMP%] {\n  background: var(--mn-card);\n  border: 1px solid var(--mn-border);\n  border-radius: var(--mn-r-lg);\n  box-shadow: var(--mn-shadow);\n  overflow: hidden;\n}\n\n.mn-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px 12px;\n}\n\n.mn-card__title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--mn-text);\n  margin: 0;\n}\n.mn-card__title--mb[_ngcontent-%COMP%] {\n  padding: 16px 20px 0;\n}\n\n.mn-card__link[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--mn-accent);\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-weight: 500;\n}\n.mn-card__link[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n\n.reminder-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0 0 8px;\n}\n\n.reminder-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 20px;\n  border-top: 1px solid var(--mn-border);\n}\n\n.reminder-item__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n}\n\n.reminder-item__body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.reminder-item__name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--mn-text);\n}\n\n.reminder-item__due[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--mn-muted);\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.badge--high[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n}\n.badge--medium[_ngcontent-%COMP%] {\n  background: rgba(249, 115, 22, 0.15);\n  color: #ea580c;\n}\n.badge--low[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.15);\n  color: #16a34a;\n}\n.badge--expired[_ngcontent-%COMP%] {\n  background: rgba(107, 114, 128, 0.15);\n  color: #6b7280;\n}\n\n.mn-table-wrap[_ngcontent-%COMP%] {\n  display: none;\n  overflow-x: auto;\n}\n@media (min-width: 768px) {\n  .mn-table-wrap[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.mn-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.mn-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 16px;\n  color: var(--mn-muted);\n  font-weight: 500;\n  font-size: 0.8rem;\n  border-bottom: 1px solid var(--mn-border);\n  white-space: nowrap;\n}\n.mn-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  color: var(--mn-text);\n  border-bottom: 1px solid var(--mn-border);\n  vertical-align: middle;\n}\n.mn-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.mn-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--mn-accent-s);\n}\n\n.mn-table-cat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  white-space: nowrap;\n}\n\n.cat-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n\n.mn-table-notes[_ngcontent-%COMP%] {\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--mn-muted);\n}\n\n.mn-table-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--mn-dim);\n  padding: 32px 16px !important;\n}\n\n.mn-del-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--mn-muted);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px;\n  border-radius: var(--mn-r-sm);\n  transition: color 0.15s, background 0.15s;\n}\n.mn-del-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.mn-del-btn[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.1);\n}\n\n.mn-record-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0 0 8px;\n}\n@media (min-width: 768px) {\n  .mn-record-list[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.mn-record-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px 16px;\n  border-top: 1px solid var(--mn-border);\n}\n\n.mn-record-item__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n}\n\n.mn-record-item__body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n\n.mn-record-item__name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--mn-text);\n}\n\n.mn-record-item__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.8rem;\n  color: var(--mn-muted);\n}\n.mn-record-item__meta[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n\n.mn-record-item__desc[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--mn-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.mn-record-item__right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 6px;\n  flex-shrink: 0;\n}\n\n.mn-record-item__cost[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--mn-text);\n}\n\n.mn-record-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px;\n  color: var(--mn-dim);\n  font-size: 0.875rem;\n}\n\n.cat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n  padding: 12px 16px 16px;\n}\n@media (min-width: 1100px) {\n  .cat-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n.cat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 4px;\n  background: none;\n  border: 1px solid transparent;\n  border-radius: var(--mn-r-md);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.cat-item[_ngcontent-%COMP%]:hover {\n  background: var(--mn-accent-s);\n  border-color: var(--mn-border);\n}\n.cat-item.active[_ngcontent-%COMP%] {\n  background: var(--mn-accent-s);\n  border-color: var(--mn-accent);\n}\n\n.cat-item__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n}\n\n.cat-item__label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--mn-muted);\n  text-align: center;\n  line-height: 1.2;\n}\n\n.ri-cat--oil_change[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: #3b82f6;\n}\n\n.ri-cat--brake_service[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #ef4444;\n}\n\n.ri-cat--tire_service[_ngcontent-%COMP%] {\n  background: rgba(168, 85, 247, 0.12);\n  color: #9333ea;\n}\n\n.ri-cat--fluid_service[_ngcontent-%COMP%] {\n  background: rgba(14, 165, 233, 0.12);\n  color: #0ea5e9;\n}\n\n.ri-cat--engine_service[_ngcontent-%COMP%] {\n  background: rgba(249, 115, 22, 0.12);\n  color: #ea580c;\n}\n\n.ri-cat--inspection[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #16a34a;\n}\n\n.ri-cat--battery_service[_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, 0.12);\n  color: #ca8a04;\n}\n\n.ri-cat--filter_service[_ngcontent-%COMP%] {\n  background: rgba(100, 116, 139, 0.12);\n  color: #64748b;\n}\n\n.ri-cat--light_service[_ngcontent-%COMP%] {\n  background: rgba(251, 191, 36, 0.12);\n  color: #d97706;\n}\n\n.ri-cat--transmission_service[_ngcontent-%COMP%] {\n  background: rgba(236, 72, 153, 0.12);\n  color: #db2777;\n}\n\n.ri-cat--other[_ngcontent-%COMP%] {\n  background: rgba(107, 114, 128, 0.12);\n  color: #6b7280;\n}\n\n.cat-dot--oil_change[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n\n.cat-dot--brake_service[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n\n.cat-dot--tire_service[_ngcontent-%COMP%] {\n  background: #9333ea;\n}\n\n.cat-dot--fluid_service[_ngcontent-%COMP%] {\n  background: #0ea5e9;\n}\n\n.cat-dot--engine_service[_ngcontent-%COMP%] {\n  background: #ea580c;\n}\n\n.cat-dot--inspection[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n\n.cat-dot--battery_service[_ngcontent-%COMP%] {\n  background: #ca8a04;\n}\n\n.cat-dot--filter_service[_ngcontent-%COMP%] {\n  background: #64748b;\n}\n\n.cat-dot--light_service[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n\n.cat-dot--transmission_service[_ngcontent-%COMP%] {\n  background: #db2777;\n}\n\n.cat-dot--other[_ngcontent-%COMP%] {\n  background: #6b7280;\n}\n\n.mn-tip[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--mn-dim);\n  text-align: center;\n  padding: 12px 16px;\n  background: var(--mn-card);\n  border: 1px solid var(--mn-border);\n  border-radius: var(--mn-r-lg);\n  margin: 0;\n}\n\n.mn-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 60px 24px;\n  text-align: center;\n}\n\n.mn-empty__icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: var(--mn-dim);\n}\n\n.mn-empty__title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: var(--mn-text);\n  margin: 0;\n}\n\n.mn-empty__sub[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--mn-muted);\n  margin: 0;\n  max-width: 360px;\n}\n\n.skel-title[_ngcontent-%COMP%] {\n  height: 28px;\n  width: 200px;\n  border-radius: 6px;\n}\n\n.skel-sub[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 300px;\n  border-radius: 4px;\n  margin-top: 6px;\n}\n\n.skel-stat[_ngcontent-%COMP%] {\n  height: 60px;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbWFpbnRlbmFuY2UvbWFpbnRlbmFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBRUEsc0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO0FBQUY7O0FBR0E7RUFBVywwQkFBQTtBQUNYOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQ0Y7QUFDRTtFQVJGO0lBUThCLHVCQUFBO0VBRzVCO0FBQ0Y7QUFIRTtFQVRGO0lBUytCLHVCQUFBO0VBTzdCO0FBQ0Y7O0FBSkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBT0Y7O0FBTEE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBUUY7O0FBTkE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQVNGOztBQVBBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFVRjs7QUFOQTtFQUNFLGtCQUFBO0FBU0Y7O0FBUEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFVRjtBQVJFO0VBQVUsOEJBQUE7QUFXWjtBQVRFO0VBQVcsZUFBQTtFQUFpQixzQkFBQTtBQWE5QjtBQVpFO0VBQXlCLDBCQUFBO0FBZTNCOztBQWJBO0VBQTRDLHlCQUFB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QUFxQixzQkFBQTtFQUF3QixTQUFBO0VBQVcsZ0JBQUE7QUFvUHpFOztBQWpQQTtFQUFjLFlBQUE7RUFBYyxZQUFBO0VBQWMsa0JBQUE7QUF1UDFDOztBQXRQQTtFQUFjLFlBQUE7RUFBYyxZQUFBO0VBQWMsa0JBQUE7RUFBb0IsZUFBQTtBQTZQOUQ7O0FBNVBBO0VBQWMsWUFBQTtFQUFjLGtCQUFBO0FBaVE1QiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgLS1tbi1iZzogICAgICAgIHZhcigtLWhhdS1iZyk7XG4gIC0tbW4tY2FyZDogICAgICB2YXIoLS1oYXUtc3VyZmFjZSk7XG4gIC0tbW4tYm9yZGVyOiAgICB2YXIoLS1oYXUtYm9yZGVyKTtcbiAgLS1tbi10ZXh0OiAgICAgIHZhcigtLWhhdS10ZXh0KTtcbiAgLS1tbi1tdXRlZDogICAgIHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbiAgLS1tbi1kaW06ICAgICAgIHZhcigtLWhhdS10ZXh0LWRpbSk7XG4gIC0tbW4tYWNjZW50OiAgICB2YXIoLS1oYXUtcHJpbWFyeSk7XG4gIC0tbW4tYWNjZW50LXM6ICB2YXIoLS1oYXUtcHJpbWFyeS1zb2Z0KTtcbiAgLS1tbi1yLXNtOiAgICAgIHZhcigtLWhhdS1yYWRpdXMtc20pO1xuICAtLW1uLXItbWQ6ICAgICAgdmFyKC0taGF1LXJhZGl1cy1tZCk7XG4gIC0tbW4tci1sZzogICAgICB2YXIoLS1oYXUtcmFkaXVzLWxnKTtcbiAgLS1tbi1zaGFkb3c6ICAgIHZhcigtLWhhdS1zaGFkb3ctc29mdCk7XG59XG5cbi5tbi1wYWdlIHsgLS1iYWNrZ3JvdW5kOiB2YXIoLS1tbi1iZyk7IH1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFNoZWxsIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLm1uLWlubmVyIHtcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4IDE2cHggNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyBwYWRkaW5nOiAyOHB4IDI0cHggNDhweDsgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTEwMHB4KSB7IHBhZGRpbmc6IDMycHggMzJweCA1NnB4OyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBIZWFkZXIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ubW4taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDE2cHg7XG59XG4ubW4tdGl0bGUge1xuICBmb250LXNpemU6IDEuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1tbi10ZXh0KTtcbiAgbWFyZ2luOiAwIDAgNHB4O1xufVxuLm1uLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgY29sb3I6IHZhcigtLW1uLW11dGVkKTtcbiAgbWFyZ2luOiAwO1xufVxuLm1uLWhlYWRlci1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBDYXIgc2VsZWN0b3Igw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uY2FyLXNlbGVjdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNhci1zZWxlY3Rvcl9fYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDhweCAxNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tbi1jYXJkKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbW4tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW4tci1tZCk7XG4gIGNvbG9yOiB2YXIoLS1tbi10ZXh0KTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXM7XG5cbiAgJjpob3ZlciB7IGJvcmRlci1jb2xvcjogdmFyKC0tbW4tYWNjZW50KTsgfVxuXG4gIGlvbi1pY29uIHsgZm9udC1zaXplOiAxcmVtOyBjb2xvcjogdmFyKC0tbW4tbXV0ZWQpOyB9XG4gIC5jYXItc2VsZWN0b3JfX2NoZXZyb24geyB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yczsgfVxufVxuLmNhci1zZWxlY3Rvci5vcGVuIC5jYXItc2VsZWN0b3JfX2NoZXZyb24geyB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XG5cbi5jYXItc2VsZWN0b3JfX2JhY2tkcm9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgei1pbmRleDogOTk7XG59XG4uY2FyLXNlbGVjdG9yX19kcm9wZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDEwMCUgKyA2cHgpO1xuICByaWdodDogMDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tbW4tY2FyZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1uLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1uLXItbWQpO1xuICBib3gtc2hhZG93OiB2YXIoLS1tbi1zaGFkb3cpO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDRweDtcbiAgei1pbmRleDogMTAwO1xufVxuLmNhci1zZWxlY3Rvcl9fb3B0aW9uIHtcbiAgcGFkZGluZzogMTBweCAxNHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tbi1yLXNtKTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgY29sb3I6IHZhcigtLW1uLXRleHQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xcztcblxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tbW4tYWNjZW50LXMpOyB9XG4gICYuYWN0aXZlIHsgYmFja2dyb3VuZDogdmFyKC0tbW4tYWNjZW50LXMpOyBjb2xvcjogdmFyKC0tbW4tYWNjZW50KTsgZm9udC13ZWlnaHQ6IDYwMDsgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgQnV0dG9ucyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5idG4tcHJpbWFyeSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgcGFkZGluZzogMTBweCAxOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tbi1hY2NlbnQpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tbi1yLW1kKTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICY6aG92ZXIgeyBvcGFjaXR5OiAwLjg1OyB9XG4gIGlvbi1pY29uIHsgZm9udC1zaXplOiAxLjFyZW07IH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFN0YXRzIGdyaWQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ubW4tc3RhdHMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdhcDogMTJweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTsgZ2FwOiAxNnB4OyB9XG59XG5cbi5zdGF0LWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tbi1jYXJkKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbW4tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW4tci1sZyk7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDEycHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLW1uLXNoYWRvdyk7XG59XG4uc3RhdC1jYXJkX19pY29uIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1uLXItbWQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuXG4gICYtLWJsdWUgICB7IGJhY2tncm91bmQ6IHJnYmEoNTksMTMwLDI0NiwuMTIpOyBjb2xvcjogIzNiODJmNjsgfVxuICAmLS1ncmVlbiAgeyBiYWNrZ3JvdW5kOiByZ2JhKDM0LDE5Nyw5NCwuMTIpOyAgY29sb3I6ICMxNmEzNGE7IH1cbiAgJi0tcHVycGxlIHsgYmFja2dyb3VuZDogcmdiYSgxNjgsODUsMjQ3LC4xMik7IGNvbG9yOiAjOTMzM2VhOyB9XG4gICYtLW9yYW5nZSB7IGJhY2tncm91bmQ6IHJnYmEoMjQ5LDExNSwyMiwuMTIpOyBjb2xvcjogI2VhNTgwYzsgfVxufVxuLnN0YXQtY2FyZF9fYm9keSB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMnB4OyBtaW4td2lkdGg6IDA7IH1cbi5zdGF0LWNhcmRfX2xhYmVsIHsgZm9udC1zaXplOiAwLjc1cmVtOyBjb2xvcjogdmFyKC0tbW4tbXV0ZWQpOyB9XG4uc3RhdC1jYXJkX192YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLW1uLXRleHQpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblxuICAmLS1lbXB0eSB7IGNvbG9yOiB2YXIoLS1tbi1kaW0pOyB9XG59XG4uc3RhdC1jYXJkX19zdWIgeyBmb250LXNpemU6IDAuNzVyZW07IGNvbG9yOiB2YXIoLS1tbi1tdXRlZCk7IH1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFRhYnMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ubW4tdGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tbi1jYXJkKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbW4tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW4tci1sZyk7XG4gIHBhZGRpbmc6IDRweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLm1uLXRhYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tbi1yLW1kKTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLW1uLW11dGVkKTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuXG4gIGlvbi1pY29uIHsgZm9udC1zaXplOiAxcmVtOyB9XG5cbiAgJi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1uLWFjY2VudCk7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgJjpub3QoLmFjdGl2ZSk6aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1tbi1hY2NlbnQtcyk7IGNvbG9yOiB2YXIoLS1tbi1hY2NlbnQpOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBDb250ZW50IGdyaWQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ubW4tY29udGVudC1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMTAwcHgpIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDI4MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgfVxufVxuLm1uLW1haW4tY29sIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxNnB4OyB9XG4ubW4tc2lkZS1jb2wgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDE2cHg7IH1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIENhcmQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ubW4tY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1uLWNhcmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tbi1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tbi1yLWxnKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tbW4tc2hhZG93KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tbi1jYXJkX19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDE2cHggMjBweCAxMnB4O1xufVxuLm1uLWNhcmRfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tbW4tdGV4dCk7XG4gIG1hcmdpbjogMDtcblxuICAmLS1tYiB7IHBhZGRpbmc6IDE2cHggMjBweCAwOyB9XG59XG4ubW4tY2FyZF9fbGluayB7XG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICBjb2xvcjogdmFyKC0tbW4tYWNjZW50KTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICY6aG92ZXIgeyBvcGFjaXR5OiAwLjc1OyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBSZW1pbmRlciBsaXN0IMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnJlbWluZGVyLWxpc3QgeyBsaXN0LXN0eWxlOiBub25lOyBtYXJnaW46IDA7IHBhZGRpbmc6IDAgMCA4cHg7IH1cbi5yZW1pbmRlci1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1tbi1ib3JkZXIpO1xufVxuLnJlbWluZGVyLWl0ZW1fX2ljb24ge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG4ucmVtaW5kZXItaXRlbV9fYm9keSB7IGZsZXg6IDE7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMnB4OyB9XG4ucmVtaW5kZXItaXRlbV9fbmFtZSB7IGZvbnQtc2l6ZTogMC44NzVyZW07IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiB2YXIoLS1tbi10ZXh0KTsgfVxuLnJlbWluZGVyLWl0ZW1fX2R1ZSAgeyBmb250LXNpemU6IDAuOHJlbTsgY29sb3I6IHZhcigtLW1uLW11dGVkKTsgfVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgQmFkZ2VzIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAycHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgJi0taGlnaCAgICB7IGJhY2tncm91bmQ6IHJnYmEoMjM5LDY4LDY4LC4xNSk7ICAgY29sb3I6ICNlZjQ0NDQ7IH1cbiAgJi0tbWVkaXVtICB7IGJhY2tncm91bmQ6IHJnYmEoMjQ5LDExNSwyMiwuMTUpOyAgY29sb3I6ICNlYTU4MGM7IH1cbiAgJi0tbG93ICAgICB7IGJhY2tncm91bmQ6IHJnYmEoMzQsMTk3LDk0LC4xNSk7ICAgY29sb3I6ICMxNmEzNGE7IH1cbiAgJi0tZXhwaXJlZCB7IGJhY2tncm91bmQ6IHJnYmEoMTA3LDExNCwxMjgsLjE1KTsgY29sb3I6ICM2YjcyODA7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFRhYmxlIChkZXNrdG9wKSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5tbi10YWJsZS13cmFwIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3ZlcmZsb3cteDogYXV0bztcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgZGlzcGxheTogYmxvY2s7IH1cbn1cbi5tbi10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuXG4gIHRoIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICBjb2xvcjogdmFyKC0tbW4tbXV0ZWQpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW1uLWJvcmRlcik7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuICB0ZCB7XG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIGNvbG9yOiB2YXIoLS1tbi10ZXh0KTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbW4tYm9yZGVyKTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIHRyOmxhc3QtY2hpbGQgdGQgeyBib3JkZXItYm90dG9tOiBub25lOyB9XG4gIHRyOmhvdmVyIHRkIHsgYmFja2dyb3VuZDogdmFyKC0tbW4tYWNjZW50LXMpOyB9XG59XG4ubW4tdGFibGUtY2F0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uY2F0LWRvdCB7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLm1uLXRhYmxlLW5vdGVzIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiB2YXIoLS1tbi1tdXRlZCk7XG59XG4ubW4tdGFibGUtZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1tbi1kaW0pO1xuICBwYWRkaW5nOiAzMnB4IDE2cHggIWltcG9ydGFudDtcbn1cbi5tbi1kZWwtYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1tbi1tdXRlZCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1uLXItc20pO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cywgYmFja2dyb3VuZCAwLjE1cztcblxuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMXJlbTsgfVxuICAmOmhvdmVyIHsgY29sb3I6ICNlZjQ0NDQ7IGJhY2tncm91bmQ6IHJnYmEoMjM5LDY4LDY4LC4xKTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgTW9iaWxlIHJlY29yZCBsaXN0IMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLm1uLXJlY29yZC1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgOHB4O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyBkaXNwbGF5OiBub25lOyB9XG59XG4ubW4tcmVjb3JkLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1tbi1ib3JkZXIpO1xufVxuLm1uLXJlY29yZC1pdGVtX19pY29uIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuLm1uLXJlY29yZC1pdGVtX19ib2R5IHsgZmxleDogMTsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAzcHg7IH1cbi5tbi1yZWNvcmQtaXRlbV9fbmFtZSB7IGZvbnQtc2l6ZTogMC44NzVyZW07IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiB2YXIoLS1tbi10ZXh0KTsgfVxuLm1uLXJlY29yZC1pdGVtX19tZXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogdmFyKC0tbW4tbXV0ZWQpO1xuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMC44NXJlbTsgfVxufVxuLm1uLXJlY29yZC1pdGVtX19kZXNjIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiB2YXIoLS1tbi1tdXRlZCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLm1uLXJlY29yZC1pdGVtX19yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZ2FwOiA2cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLm1uLXJlY29yZC1pdGVtX19jb3N0IHsgZm9udC1zaXplOiAwLjg3NXJlbTsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6IHZhcigtLW1uLXRleHQpOyB9XG4ubW4tcmVjb3JkLWVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyNHB4O1xuICBjb2xvcjogdmFyKC0tbW4tZGltKTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIENhdGVnb3J5IGdyaWQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uY2F0LWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTJweCAxNnB4IDE2cHg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDExMDBweCkgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpOyB9XG59XG4uY2F0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgcGFkZGluZzogMTBweCA0cHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tbi1yLW1kKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG5cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLW1uLWFjY2VudC1zKTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1tbi1ib3JkZXIpOyB9XG4gICYuYWN0aXZlIHsgYmFja2dyb3VuZDogdmFyKC0tbW4tYWNjZW50LXMpOyBib3JkZXItY29sb3I6IHZhcigtLW1uLWFjY2VudCk7IH1cbn1cbi5jYXQtaXRlbV9faWNvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuLmNhdC1pdGVtX19sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBjb2xvcjogdmFyKC0tbW4tbXV0ZWQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBDYXRlZ29yeSBjb2xvciB0aGVtZXMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ucmktY2F0LS1vaWxfY2hhbmdlICAgICAgICAgICB7IGJhY2tncm91bmQ6IHJnYmEoNTksMTMwLDI0NiwuMTIpOyBjb2xvcjogIzNiODJmNjsgfVxuLnJpLWNhdC0tYnJha2Vfc2VydmljZSAgICAgICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDIzOSw2OCw2OCwuMTIpOyAgY29sb3I6ICNlZjQ0NDQ7IH1cbi5yaS1jYXQtLXRpcmVfc2VydmljZSAgICAgICAgIHsgYmFja2dyb3VuZDogcmdiYSgxNjgsODUsMjQ3LC4xMik7IGNvbG9yOiAjOTMzM2VhOyB9XG4ucmktY2F0LS1mbHVpZF9zZXJ2aWNlICAgICAgICB7IGJhY2tncm91bmQ6IHJnYmEoMTQsMTY1LDIzMywuMTIpOyBjb2xvcjogIzBlYTVlOTsgfVxuLnJpLWNhdC0tZW5naW5lX3NlcnZpY2UgICAgICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwxMTUsMjIsLjEyKTsgY29sb3I6ICNlYTU4MGM7IH1cbi5yaS1jYXQtLWluc3BlY3Rpb24gICAgICAgICAgIHsgYmFja2dyb3VuZDogcmdiYSgzNCwxOTcsOTQsLjEyKTsgIGNvbG9yOiAjMTZhMzRhOyB9XG4ucmktY2F0LS1iYXR0ZXJ5X3NlcnZpY2UgICAgICB7IGJhY2tncm91bmQ6IHJnYmEoMjM0LDE3OSw4LC4xMik7ICBjb2xvcjogI2NhOGEwNDsgfVxuLnJpLWNhdC0tZmlsdGVyX3NlcnZpY2UgICAgICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDEwMCwxMTYsMTM5LC4xMik7Y29sb3I6ICM2NDc0OGI7IH1cbi5yaS1jYXQtLWxpZ2h0X3NlcnZpY2UgICAgICAgIHsgYmFja2dyb3VuZDogcmdiYSgyNTEsMTkxLDM2LC4xMik7IGNvbG9yOiAjZDk3NzA2OyB9XG4ucmktY2F0LS10cmFuc21pc3Npb25fc2VydmljZSB7IGJhY2tncm91bmQ6IHJnYmEoMjM2LDcyLDE1MywuMTIpOyBjb2xvcjogI2RiMjc3NzsgfVxuLnJpLWNhdC0tb3RoZXIgICAgICAgICAgICAgICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDEwNywxMTQsMTI4LC4xMik7Y29sb3I6ICM2YjcyODA7IH1cblxuLmNhdC1kb3QtLW9pbF9jaGFuZ2UgICAgICAgICAgIHsgYmFja2dyb3VuZDogIzNiODJmNjsgfVxuLmNhdC1kb3QtLWJyYWtlX3NlcnZpY2UgICAgICAgIHsgYmFja2dyb3VuZDogI2VmNDQ0NDsgfVxuLmNhdC1kb3QtLXRpcmVfc2VydmljZSAgICAgICAgIHsgYmFja2dyb3VuZDogIzkzMzNlYTsgfVxuLmNhdC1kb3QtLWZsdWlkX3NlcnZpY2UgICAgICAgIHsgYmFja2dyb3VuZDogIzBlYTVlOTsgfVxuLmNhdC1kb3QtLWVuZ2luZV9zZXJ2aWNlICAgICAgIHsgYmFja2dyb3VuZDogI2VhNTgwYzsgfVxuLmNhdC1kb3QtLWluc3BlY3Rpb24gICAgICAgICAgIHsgYmFja2dyb3VuZDogIzE2YTM0YTsgfVxuLmNhdC1kb3QtLWJhdHRlcnlfc2VydmljZSAgICAgIHsgYmFja2dyb3VuZDogI2NhOGEwNDsgfVxuLmNhdC1kb3QtLWZpbHRlcl9zZXJ2aWNlICAgICAgIHsgYmFja2dyb3VuZDogIzY0NzQ4YjsgfVxuLmNhdC1kb3QtLWxpZ2h0X3NlcnZpY2UgICAgICAgIHsgYmFja2dyb3VuZDogI2Q5NzcwNjsgfVxuLmNhdC1kb3QtLXRyYW5zbWlzc2lvbl9zZXJ2aWNlIHsgYmFja2dyb3VuZDogI2RiMjc3NzsgfVxuLmNhdC1kb3QtLW90aGVyICAgICAgICAgICAgICAgIHsgYmFja2dyb3VuZDogIzZiNzI4MDsgfVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgVGlwIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLm1uLXRpcCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogdmFyKC0tbW4tZGltKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1uLWNhcmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tbi1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tbi1yLWxnKTtcbiAgbWFyZ2luOiAwO1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgRW1wdHkgc3RhdGUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ubW4tZW1wdHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiA2MHB4IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tbi1lbXB0eV9faWNvbiB7IGZvbnQtc2l6ZTogM3JlbTsgY29sb3I6IHZhcigtLW1uLWRpbSk7IH1cbi5tbi1lbXB0eV9fdGl0bGUgeyBmb250LXNpemU6IDEuMTI1cmVtOyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogdmFyKC0tbW4tdGV4dCk7IG1hcmdpbjogMDsgfVxuLm1uLWVtcHR5X19zdWIgeyBmb250LXNpemU6IDAuODc1cmVtOyBjb2xvcjogdmFyKC0tbW4tbXV0ZWQpOyBtYXJnaW46IDA7IG1heC13aWR0aDogMzYwcHg7IH1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFNrZWxldG9uIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnNrZWwtdGl0bGUgeyBoZWlnaHQ6IDI4cHg7IHdpZHRoOiAyMDBweDsgYm9yZGVyLXJhZGl1czogNnB4OyB9XG4uc2tlbC1zdWIgICB7IGhlaWdodDogMTZweDsgd2lkdGg6IDMwMHB4OyBib3JkZXItcmFkaXVzOiA0cHg7IG1hcmdpbi10b3A6IDZweDsgfVxuLnNrZWwtc3RhdCAgeyBoZWlnaHQ6IDYwcHg7IGJvcmRlci1yYWRpdXM6IDhweDsgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
};
MaintenanceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.UntilDestroy)()], MaintenanceComponent);


/***/ }

}]);
//# sourceMappingURL=src_app_features_maintenance_add-maintenance-panel_add-maintenance-panel_component_ts-src_app-1c9710.js.map