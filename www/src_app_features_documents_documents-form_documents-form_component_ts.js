"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_features_documents_documents-form_documents-form_component_ts"],{

/***/ 14627
/*!*******************************************************************************!*\
  !*** ./src/app/features/documents/documents-form/documents-form.component.ts ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentsFormComponent: () => (/* binding */ DocumentsFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _hau_features_documents_documents_list_documents_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hau/features/documents/documents-list/documents-list.component */ 84611);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionicons */ 45846);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionicons/icons */ 77958);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/until-destroy */ 56127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 94363);
/* harmony import */ var _hau_features_documents_state_documents_facade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @hau/features/documents/state/documents.facade */ 40977);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular/standalone */ 4059);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @hau/autogenapi/services */ 3977);














const _forTrack0 = ($index, $item) => $item.value;
const _forTrack1 = ($index, $item) => $item.id;
function DocumentsFormComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", t_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](t_r1.label);
  }
}
function DocumentsFormComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Document type is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DocumentsFormComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const car_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", car_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate3"]("", car_r2.make, " ", car_r2.model, " \u00B7 ", car_r2.license_plate);
  }
}
function DocumentsFormComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Vehicle is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DocumentsFormComponent_For_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", s_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](s_r3);
  }
}
function DocumentsFormComponent_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\u2014 no expiry");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DocumentsFormComponent_Conditional_83_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Current file: ", ctx_r5.existingFileName, " ");
  }
}
function DocumentsFormComponent_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DocumentsFormComponent_Conditional_83_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const fileInput_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](86);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](fileInput_r5.click());
    })("dragover", function DocumentsFormComponent_Conditional_83_Template_div_dragover_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r5.onDragOver($event));
    })("dragleave", function DocumentsFormComponent_Conditional_83_Template_div_dragleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r5.onDragLeave());
    })("drop", function DocumentsFormComponent_Conditional_83_Template_div_drop_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r5.onDrop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "p", 56)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Drag & drop");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, " your document here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "or click to browse \u00B7 PDF, JPG, PNG up to 20 MB");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](8, DocumentsFormComponent_Conditional_83_Conditional_8_Template, 3, 1, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("upload-zone--dragover", ctx_r5.dragOver);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx_r5.existingFileName ? 8 : -1);
  }
}
function DocumentsFormComponent_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 61)(3, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DocumentsFormComponent_Conditional_84_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r5.removeFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "ion-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r5.selectedFile.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r5.fileSizeLabel);
  }
}
function DocumentsFormComponent_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-spinner", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Analysing your document\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function DocumentsFormComponent_Conditional_88_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const w_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](w_r8);
  }
}
function DocumentsFormComponent_Conditional_88_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ul", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](1, DocumentsFormComponent_Conditional_88_Conditional_8_For_2_Template, 2, 1, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](ctx_r5.extractionResult.warnings);
  }
}
function DocumentsFormComponent_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 45)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ion-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 68)(4, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](8, DocumentsFormComponent_Conditional_88_Conditional_8_Template, 3, 0, "ul", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinterpolate1"]("extraction-banner extraction-banner--", ctx_r5.extractionBannerMod));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("name", ctx_r5.extractionBannerIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r5.extractionBannerTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r5.extractionBannerDesc);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"]((ctx_r5.extractionResult == null ? null : ctx_r5.extractionResult.warnings == null ? null : ctx_r5.extractionResult.warnings.length) ? 8 : -1);
  }
}
function DocumentsFormComponent_Conditional_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-spinner", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r5.uploading ? "Uploading\u2026" : "Saving\u2026", " ");
  }
}
function DocumentsFormComponent_Conditional_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r5.isEditMode ? "Save changes" : "Add document", " ");
  }
}
let DocumentsFormComponent = class DocumentsFormComponent {
  get isEditMode() {
    return !!this.editDoc;
  }
  get pageTitle() {
    return this.isEditMode ? 'Edit Document' : 'Add Document';
  }
  constructor(_fb, _facade, _nav, _route, _docService) {
    this._fb = _fb;
    this._facade = _facade;
    this._nav = _nav;
    this._route = _route;
    this._docService = _docService;
    this.submitting = false;
    this.uploading = false;
    this.cars = [];
    this.editDoc = null;
    this.selectedFile = null;
    this.existingFileName = null;
    this.dragOver = false;
    this.extracting = false;
    this.extractionResult = null;
    this.extractionFailed = false;
    this.docTypes = Object.entries(_hau_features_documents_documents_list_documents_list_component__WEBPACK_IMPORTED_MODULE_2__.DOC_TYPE_CONFIG).map(([value, cfg]) => ({
      value,
      label: cfg.label,
      color: cfg.color
    }));
    this.statusOptions = ['Active', 'Inactive', 'Expired'];
    (0,ionicons__WEBPACK_IMPORTED_MODULE_4__.a)({
      addOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.addOutline,
      calendarOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.calendarOutline,
      carOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.carOutline,
      checkmarkCircleOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.checkmarkCircleOutline,
      chevronDownOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.chevronDownOutline,
      closeOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.closeOutline,
      saveOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.saveOutline,
      documentTextOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.documentTextOutline,
      cloudUploadOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.cloudUploadOutline,
      trashOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.trashOutline,
      attachOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.attachOutline,
      informationCircleOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.informationCircleOutline,
      warningOutline: ionicons_icons__WEBPACK_IMPORTED_MODULE_5__.warningOutline
    });
    this.form = this._fb.group({
      document_type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      car_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      provider: [null],
      policy_number: [null],
      status: ['Active'],
      issue_date: [null],
      expiry_date: [null],
      no_expiry: [false],
      policyholder: [null],
      cnp_id: [null]
    });
    this.form.get('no_expiry').valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.untilDestroyed)(this)).subscribe(noExpiry => {
      const ctrl = this.form.get('expiry_date');
      if (noExpiry) {
        ctrl.setValue(null);
        ctrl.disable();
      } else {
        ctrl.enable();
      }
    });
  }
  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('id');
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this._facade.cars$, this._facade.documents$]).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.untilDestroyed)(this)).subscribe(([cars, docs]) => {
      this.cars = cars;
      if (id && !this.editDoc) {
        const found = docs.find(d => d.id === Number(id));
        if (found) {
          this.editDoc = found;
          this.patchForm(found);
        }
      }
    });
    this._facade.submitting$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.untilDestroyed)(this)).subscribe(s => this.submitting = s);
    this._facade.loadAll();
  }
  patchForm(doc) {
    this.existingFileName = doc.file_name ?? null;
    this.form.patchValue({
      document_type: doc.document_type,
      car_id: doc.car_id,
      provider: doc.provider ?? null,
      policy_number: doc.policy_number ?? null,
      status: doc.status ?? 'Active',
      issue_date: doc.issue_date ? doc.issue_date.slice(0, 10) : null,
      expiry_date: doc.expiry_date ? doc.expiry_date.slice(0, 10) : null,
      no_expiry: !doc.expiry_date,
      policyholder: doc.policyholder ?? null,
      cnp_id: doc.cnp_id ?? null
    });
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const dto = {
      document_type: v.document_type,
      car_id: Number(v.car_id),
      provider: v.provider || undefined,
      policy_number: v.policy_number || undefined,
      status: v.status || undefined,
      issue_date: v.issue_date || undefined,
      expiry_date: v.no_expiry ? undefined : v.expiry_date || undefined,
      policyholder: v.policyholder || undefined,
      cnp_id: v.cnp_id || undefined
    };
    const op$ = this.isEditMode ? this._facade.updateDocument(this.editDoc.id, dto) : this._facade.createDocument(dto);
    op$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe({
      next: () => {
        const savedId = this.isEditMode ? this.editDoc.id : this._facade.getLastSavedId();
        if (this.selectedFile && savedId) {
          this.uploading = true;
          this._docService.documentControllerUploadFile(savedId, this.selectedFile).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe({
            next: () => {
              this.uploading = false;
              this._nav.back();
            },
            error: () => {
              this.uploading = false;
              this._nav.back();
            }
          });
        } else {
          this._nav.back();
        }
      },
      error: () => {}
    });
  }
  cancel() {
    this._nav.back();
  }
  // ── File handling ─────────────────────────────────────────────────
  onFileSelected(event) {
    const input = event.target;
    if (input.files?.length) this.setFile(input.files[0]);
  }
  onDrop(event) {
    event.preventDefault();
    this.dragOver = false;
    const file = event.dataTransfer?.files[0];
    if (file) this.setFile(file);
  }
  onDragOver(event) {
    event.preventDefault();
    this.dragOver = true;
  }
  onDragLeave() {
    this.dragOver = false;
  }
  removeFile() {
    this.selectedFile = null;
    this.extractionResult = null;
    this.extractionFailed = false;
  }
  setFile(file) {
    this.selectedFile = file;
    this.extractionResult = null;
    this.extractionFailed = false;
    // Only run extraction in add mode on PDF files.
    if (!this.isEditMode && file.type === 'application/pdf') {
      this.extracting = true;
      this._docService.documentControllerExtractDocument(file).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe({
        next: result => {
          this.extracting = false;
          this.extractionResult = result;
          if (result.detected) this.applyExtraction(result);
        },
        error: () => {
          this.extracting = false;
          this.extractionFailed = true;
        }
      });
    }
  }
  applyExtraction(result) {
    const f = result.fields;
    const patch = {};
    if (result.document_type) {
      const knownType = this.docTypes.find(t => t.value === result.document_type);
      if (knownType) patch['document_type'] = knownType.value;
    }
    if (f.insurer_name) patch['provider'] = f.insurer_name;
    if (f.policy_number) patch['policy_number'] = f.policy_number;
    if (f.policyholder_name) patch['policyholder'] = f.policyholder_name;
    if (f.owner_cnp) patch['cnp_id'] = f.owner_cnp;
    if (f.issue_date) patch['issue_date'] = f.issue_date.slice(0, 10);
    if (f.valid_until) {
      patch['expiry_date'] = f.valid_until.slice(0, 10);
      patch['no_expiry'] = false;
    }
    this.form.patchValue(patch);
  }
  get fileSizeLabel() {
    if (!this.selectedFile) return '';
    const b = this.selectedFile.size;
    if (b < 1024) return `${b} B`;
    if (b < 1024 * 1024) return `${(b / 1024).toFixed(0)} KB`;
    return `${(b / (1024 * 1024)).toFixed(1)} MB`;
  }
  isInvalid(field) {
    const c = this.form.get(field);
    return !!(c && c.invalid && (c.dirty || c.touched));
  }
  get extractionBannerMod() {
    if (!this.extractionResult) return 'neutral';
    if (!this.extractionResult.detected) return 'neutral';
    return this.extractionResult.confidence === 'high' ? 'info' : 'caution';
  }
  get extractionBannerIcon() {
    if (this.extractionFailed || !this.extractionResult?.detected) return 'warning-outline';
    return this.extractionResult.confidence === 'high' ? 'checkmark-circle-outline' : 'information-circle-outline';
  }
  get extractionBannerTitle() {
    if (this.extractionFailed) return 'Could not read the document';
    if (!this.extractionResult) return '';
    if (!this.extractionResult.detected) return 'Document type not recognised';
    return this.extractionResult.confidence === 'high' ? 'Fields pre-filled from your document' : 'Fields extracted with lower confidence';
  }
  get extractionBannerDesc() {
    if (this.extractionFailed) return 'The document could not be analysed. Please fill in the fields manually.';
    if (!this.extractionResult) return '';
    if (!this.extractionResult.detected) return 'We could not identify this document type. Please fill in the fields manually.';
    return this.extractionResult.confidence === 'high' ? 'Please review the pre-filled values and correct any errors before saving.' : 'Some values may be inaccurate — please verify all fields carefully before saving.';
  }
  static {
    this.ɵfac = function DocumentsFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DocumentsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_hau_features_documents_state_documents_facade__WEBPACK_IMPORTED_MODULE_11__.DocumentsFacade), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_12__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_hau_autogenapi_services__WEBPACK_IMPORTED_MODULE_14__.DocumentService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: DocumentsFormComponent,
      selectors: [["app-documents-form"]],
      decls: 110,
      vars: 20,
      consts: [["fileInput", ""], [1, "form-page"], [1, "form-inner"], [1, "form-header"], [1, "form-header-icon"], ["name", "document-text-outline"], [1, "form-title"], [1, "form-subtitle"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-section-title"], [1, "two-col-row"], [1, "field-group"], ["for", "doc-type", 1, "field-label"], [1, "field-required"], [1, "select-wrap"], ["id", "doc-type", "formControlName", "document_type", 1, "field-select"], ["value", "", "disabled", "", 3, "selected"], [3, "value"], ["name", "chevron-down-outline", 1, "select-chevron"], [1, "field-hint", "field-hint--error"], ["for", "car-id", 1, "field-label"], ["id", "car-id", "formControlName", "car_id", 1, "field-select"], ["for", "provider", 1, "field-label"], [1, "input-wrap"], ["id", "provider", "type", "text", "formControlName", "provider", "placeholder", "e.g. Allianz-Tiriac", 1, "field-input"], ["for", "policy-number", 1, "field-label"], ["id", "policy-number", "type", "text", "formControlName", "policy_number", "placeholder", "e.g. POL-123456789", 1, "field-input"], [1, "field-group", "field-group--half"], ["for", "status", 1, "field-label"], ["id", "status", "formControlName", "status", 1, "field-select"], [1, "dates-row"], ["for", "issue-date", 1, "field-label"], ["id", "issue-date", "type", "date", "formControlName", "issue_date", 1, "field-input"], ["for", "expiry-date", 1, "field-label"], [1, "no-expiry-label"], ["id", "expiry-date", "type", "date", "formControlName", "expiry_date", 1, "field-input"], [1, "checkbox-row"], ["type", "checkbox", "formControlName", "no_expiry", 1, "checkbox-input"], [1, "checkbox-label"], [1, "upload-zone", 3, "upload-zone--dragover"], [1, "file-selected"], ["type", "file", "accept", ".pdf,.jpg,.jpeg,.png,.gif,.webp", 1, "file-input-hidden", 3, "change"], [1, "extraction-status"], [1, "form-section", "extraction-section"], ["for", "policyholder", 1, "field-label"], ["id", "policyholder", "type", "text", "formControlName", "policyholder", "placeholder", "e.g. John Doe", 1, "field-input"], ["for", "cnp-id", 1, "field-label"], ["id", "cnp-id", "type", "text", "formControlName", "cnp_id", "placeholder", "e.g. 1900101012345", 1, "field-input"], [1, "form-actions"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["name", "close-outline"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"], [1, "upload-zone", 3, "click", "dragover", "dragleave", "drop"], ["name", "cloud-upload-outline", 1, "upload-zone-icon"], [1, "upload-zone-text"], [1, "upload-zone-hint"], [1, "upload-zone-existing"], ["name", "attach-outline"], ["name", "document-text-outline", 1, "file-selected-icon"], [1, "file-selected-info"], [1, "file-selected-name"], [1, "file-selected-size"], ["type", "button", 1, "file-remove-btn", 3, "click"], ["name", "trash-outline"], ["name", "crescent", 1, "extraction-spinner"], [1, "extraction-banner-icon", 3, "name"], [1, "extraction-banner-body"], [1, "extraction-banner-title"], [1, "extraction-banner-desc"], [1, "extraction-warnings"], ["name", "crescent", 1, "btn-spinner"], ["name", "save-outline"]],
      template: function DocumentsFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-content", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ion-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div")(6, "h1", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 8)(11, "form", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function DocumentsFormComponent_Template_form_ngSubmit_11_listener() {
            return ctx.save();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 10)(13, "h3", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Basic information");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 12)(16, "div", 13)(17, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, " Document type ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 16)(22, "select", 17)(23, "option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Select type");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](25, DocumentsFormComponent_For_26_Template, 2, 2, "option", 19, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "ion-icon", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](28, DocumentsFormComponent_Conditional_28_Template, 2, 0, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 13)(30, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, " Vehicle ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 16)(35, "select", 23)(36, "option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "Select vehicle");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](38, DocumentsFormComponent_For_39_Template, 2, 4, "option", 19, _forTrack1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](40, "ion-icon", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](41, DocumentsFormComponent_Conditional_41_Template, 2, 0, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "div", 12)(43, "div", 13)(44, "label", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, "Provider");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](47, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "div", 13)(49, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "Policy number");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](52, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "div", 29)(54, "label", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 16)(57, "select", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](58, DocumentsFormComponent_For_59_Template, 2, 2, "option", 19, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](60, "ion-icon", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "div", 10)(62, "h3", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63, "Validity");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "div", 32)(65, "div", 13)(66, "label", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67, "Issue date");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](69, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "div", 13)(71, "label", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](72, " Expiry date ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](73, DocumentsFormComponent_Conditional_73_Template, 2, 0, "span", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](75, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "label", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](77, "input", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](79, "This document has no expiry date");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "div", 10)(81, "h3", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](82, "Document file");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](83, DocumentsFormComponent_Conditional_83_Template, 9, 3, "div", 41)(84, DocumentsFormComponent_Conditional_84_Template, 9, 2, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "input", 43, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function DocumentsFormComponent_Template_input_change_85_listener($event) {
            return ctx.onFileSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](87, DocumentsFormComponent_Conditional_87_Template, 4, 0, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](88, DocumentsFormComponent_Conditional_88_Template, 9, 7, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](89, "div", 10)(90, "h3", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](91, "Additional details");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](92, "div", 12)(93, "div", 13)(94, "label", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](95, "Policyholder");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](96, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](97, "input", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](98, "div", 13)(99, "label", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](100, "CNP / ID");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](101, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](102, "input", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](103, "div", 50)(104, "button", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DocumentsFormComponent_Template_button_click_104_listener() {
            return ctx.cancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](105, "ion-icon", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](106, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](107, "button", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditionalCreate"](108, DocumentsFormComponent_Conditional_108_Template, 2, 1)(109, DocumentsFormComponent_Conditional_109_Template, 2, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          let tmp_5_0;
          let tmp_9_0;
          let tmp_13_0;
          let tmp_14_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.pageTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.isEditMode ? "Update the document details below." : "Fill in the document details below.", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("field-error", ctx.isInvalid("document_type"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("selected", !((tmp_5_0 = ctx.form.get("document_type")) == null ? null : tmp_5_0.value));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](ctx.docTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx.isInvalid("document_type") ? 28 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("field-error", ctx.isInvalid("car_id"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("selected", !((tmp_9_0 = ctx.form.get("car_id")) == null ? null : tmp_9_0.value));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](ctx.cars);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx.isInvalid("car_id") ? 41 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](ctx.statusOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](((tmp_13_0 = ctx.form.get("no_expiry")) == null ? null : tmp_13_0.value) ? 73 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("field-disabled", (tmp_14_0 = ctx.form.get("no_expiry")) == null ? null : tmp_14_0.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](!ctx.selectedFile ? 83 : 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx.extracting ? 87 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](!ctx.extracting && (ctx.extractionResult || ctx.extractionFailed) ? 88 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.submitting || ctx.uploading);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.submitting || ctx.uploading);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx.submitting || ctx.uploading ? 108 : 109);
        }
      },
      dependencies: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonSpinner, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.form-page[_ngcontent-%COMP%] {\n  --background: var(--hau-bg);\n}\n\n.form-inner[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 20px 16px 80px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n@media (min-width: 768px) {\n  .form-inner[_ngcontent-%COMP%] {\n    padding: 32px 24px 64px;\n  }\n}\n\n.form-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n\n.form-header-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border-radius: var(--hau-radius-md);\n  background: rgba(var(--hau-primary-rgb, 59, 130, 246), 0.12);\n  color: var(--hau-primary);\n  font-size: 1.4rem;\n}\n\n.form-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--hau-text);\n  margin: 0;\n  line-height: 1.2;\n}\n@media (min-width: 768px) {\n  .form-title[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}\n\n.form-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.87rem;\n  color: var(--hau-text-muted);\n  margin: 4px 0 0;\n}\n\n.form-card[_ngcontent-%COMP%] {\n  background: var(--hau-surface);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-xl);\n  box-shadow: var(--hau-shadow-soft);\n  padding: 0;\n  overflow: hidden;\n}\n\n.form-section[_ngcontent-%COMP%] {\n  padding: 20px 20px 4px;\n  border-bottom: 1px solid var(--hau-border);\n}\n@media (min-width: 768px) {\n  .form-section[_ngcontent-%COMP%] {\n    padding: 24px 28px 8px;\n  }\n}\n.form-section[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n\n.form-section-title[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--hau-text-dim);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin: 0 0 16px;\n}\n\n.two-col-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0;\n}\n@media (min-width: 540px) {\n  .two-col-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 16px;\n  }\n}\n\n.field-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 16px;\n}\n.field-group--half[_ngcontent-%COMP%] {\n  max-width: 260px;\n}\n\n.field-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--hau-text);\n  letter-spacing: 0.02em;\n}\n\n.field-required[_ngcontent-%COMP%] {\n  color: var(--hau-danger-fg);\n  margin-left: 2px;\n}\n\n.select-wrap[_ngcontent-%COMP%], \n.input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.field-select[_ngcontent-%COMP%], \n.field-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  background: var(--hau-bg);\n  border: 1px solid var(--hau-border);\n  border-radius: var(--hau-radius-md);\n  font-size: 0.87rem;\n  color: var(--hau-text);\n  transition: border-color var(--hau-transition-fast), box-shadow var(--hau-transition-fast);\n}\n.field-select[_ngcontent-%COMP%]:focus, \n.field-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--hau-primary);\n  box-shadow: 0 0 0 3px rgba(var(--hau-primary-rgb, 59, 130, 246), 0.12);\n}\n.field-select[_ngcontent-%COMP%]:hover, \n.field-input[_ngcontent-%COMP%]:hover {\n  border-color: var(--hau-border-hover);\n}\n.field-select.field-error[_ngcontent-%COMP%], \n.field-input.field-error[_ngcontent-%COMP%] {\n  border-color: var(--hau-danger-fg);\n}\n.field-select.field-disabled[_ngcontent-%COMP%], \n.field-input.field-disabled[_ngcontent-%COMP%] {\n  opacity: 0.45;\n  pointer-events: none;\n}\n\n.field-select[_ngcontent-%COMP%] {\n  appearance: none;\n  -webkit-appearance: none;\n  padding-right: 36px;\n  cursor: pointer;\n}\n\n.select-chevron[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  font-size: 0.8rem;\n  color: var(--hau-text-dim);\n  pointer-events: none;\n}\n\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--hau-text-muted);\n}\n.field-hint--error[_ngcontent-%COMP%] {\n  color: var(--hau-danger-fg);\n}\n\n.dates-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0;\n}\n@media (min-width: 480px) {\n  .dates-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 16px;\n  }\n}\n\n.no-expiry-label[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: var(--hau-text-muted);\n  font-weight: 500;\n  margin-left: 4px;\n}\n\n.checkbox-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 16px;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.checkbox-input[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  accent-color: var(--hau-primary);\n  cursor: pointer;\n  flex-shrink: 0;\n}\n\n.checkbox-label[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: var(--hau-text);\n  font-weight: 500;\n}\n\n.upload-zone[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 32px 20px;\n  border: 2px dashed var(--hau-border);\n  border-radius: var(--hau-radius-lg);\n  cursor: pointer;\n  transition: border-color var(--hau-transition-fast), background var(--hau-transition-fast);\n  text-align: center;\n  margin-bottom: 16px;\n}\n.upload-zone[_ngcontent-%COMP%]:hover, .upload-zone--dragover[_ngcontent-%COMP%] {\n  border-color: var(--hau-primary);\n  background: rgba(var(--hau-primary-rgb, 59, 130, 246), 0.04);\n}\n\n.upload-zone-icon[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  color: var(--hau-primary);\n  opacity: 0.7;\n}\n\n.upload-zone-text[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--hau-text);\n  margin: 0;\n}\n\n.upload-zone-hint[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--hau-text-muted);\n  margin: 0;\n}\n\n.upload-zone-existing[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.78rem;\n  color: var(--hau-text-muted);\n  margin: 4px 0 0;\n  font-style: italic;\n}\n.upload-zone-existing[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n\n.file-selected[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  background: rgba(var(--hau-primary-rgb, 59, 130, 246), 0.07);\n  border: 1px solid rgba(var(--hau-primary-rgb, 59, 130, 246), 0.2);\n  border-radius: var(--hau-radius-md);\n  margin-bottom: 16px;\n}\n\n.file-selected-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: var(--hau-primary);\n  flex-shrink: 0;\n}\n\n.file-selected-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1;\n  min-width: 0;\n}\n\n.file-selected-name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--hau-text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.file-selected-size[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: var(--hau-text-muted);\n}\n\n.file-remove-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: none;\n  background: transparent;\n  border-radius: var(--hau-radius-sm);\n  color: var(--hau-text-muted);\n  cursor: pointer;\n}\n.file-remove-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n}\n.file-remove-btn[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.1);\n}\n\n.file-input-hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.extraction-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 12px;\n  font-size: 0.84rem;\n  color: var(--hau-text-muted);\n}\n\n.extraction-spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  --color: var(--hau-primary);\n}\n\n.extraction-section[_ngcontent-%COMP%] {\n  padding-top: 16px;\n  padding-bottom: 12px;\n}\n\n.extraction-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 16px;\n  border-radius: var(--hau-radius-md);\n  border: 1px solid;\n}\n.extraction-banner--info[_ngcontent-%COMP%] {\n  background: var(--hau-success-soft);\n  border-color: var(--hau-success-fg);\n  color: var(--hau-success-fg);\n}\n.extraction-banner--caution[_ngcontent-%COMP%] {\n  background: var(--hau-warning-soft);\n  border-color: #b45309;\n  color: #92400e;\n}\n.extraction-banner--neutral[_ngcontent-%COMP%] {\n  background: var(--hau-hover-bg);\n  border-color: var(--hau-border);\n  color: var(--hau-text-muted);\n}\n\n.extraction-banner-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n\n.extraction-banner-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n\n.extraction-banner-title[_ngcontent-%COMP%] {\n  font-size: 0.86rem;\n  font-weight: 700;\n}\n\n.extraction-banner-desc[_ngcontent-%COMP%] {\n  font-size: 0.81rem;\n  opacity: 0.85;\n}\n\n.extraction-warnings[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  padding: 0 0 0 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.extraction-warnings[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.79rem;\n  color: var(--hau-text-muted);\n  line-height: 1.4;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 20px;\n  border-top: 1px solid var(--hau-border);\n}\n@media (min-width: 768px) {\n  .form-actions[_ngcontent-%COMP%] {\n    padding: 16px 28px;\n  }\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border-radius: var(--hau-radius-pill);\n  font-size: 0.87rem;\n  font-weight: 700;\n  border: none;\n  cursor: pointer;\n  transition: background var(--hau-transition-fast), opacity var(--hau-transition-fast);\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: var(--hau-primary);\n  color: #fff;\n  box-shadow: 0 4px 14px var(--hau-primary-shadow);\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--hau-primary-strong);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: var(--hau-hover-bg);\n  color: var(--hau-text-muted);\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--hau-border);\n  color: var(--hau-text);\n}\n\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  --color: #fff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZG9jdW1lbnRzL2RvY3VtZW50cy1mb3JtL2RvY3VtZW50cy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVEsY0FBQTtBQUVSOztBQUFBO0VBQWEsMkJBQUE7QUFJYjs7QUFGQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUtGO0FBSEU7RUFSRjtJQVE4Qix1QkFBQTtFQU81QjtBQUNGOztBQUpBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQU9GOztBQUpBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLDREQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQU9GOztBQUpBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBT0Y7QUFMRTtFQVBGO0lBTzhCLGlCQUFBO0VBUzVCO0FBQ0Y7O0FBUEE7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQVVGOztBQU5BO0VBQ0UsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFTRjs7QUFMQTtFQUNFLHNCQUFBO0VBQ0EsMENBQUE7QUFRRjtBQU5FO0VBSkY7SUFJOEIsc0JBQUE7RUFVNUI7QUFDRjtBQVRFO0VBQWlCLG1CQUFBO0FBWW5COztBQVRBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBWUY7O0FBUkE7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxNQUFBO0FBV0Y7QUFURTtFQUxGO0lBTUksOEJBQUE7SUFDQSxTQUFBO0VB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Q0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxRkFBQTtFQUNBLG1CQUFBO0FBcUJGO0FBbkJFO0VBQVcsZUFBQTtBQXNCYjtBQXJCRTtFQUFhLGFBQUE7RUFBZSxtQkFBQTtBQXlCOUI7QUF2QkU7RUFDRSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxnREFBQTtBQXlCSjtBQXhCSTtFQUF5QixxQ0FBQTtBQTJCN0I7QUF4QkU7RUFDRSwrQkFBQTtFQUNBLDRCQUFBO0FBMEJKO0FBekJJO0VBQXlCLDZCQUFBO0VBQStCLHNCQUFBO0FBNkI1RDs7QUF6QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUE0QkYiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5mb3JtLXBhZ2UgeyAtLWJhY2tncm91bmQ6IHZhcigtLWhhdS1iZyk7IH1cblxuLmZvcm0taW5uZXIge1xuICBtYXgtd2lkdGg6IDcyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweCAxNnB4IDgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgcGFkZGluZzogMzJweCAyNHB4IDY0cHg7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAIEhlYWRlciDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5mb3JtLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTRweDtcbn1cblxuLmZvcm0taGVhZGVyLWljb24ge1xuICBmbGV4LXNocmluazogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtbWQpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWhhdS1wcmltYXJ5LXJnYiwgNTksIDEzMCwgMjQ2KSwgMC4xMik7XG4gIGNvbG9yOiB2YXIoLS1oYXUtcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4uZm9ybS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IGZvbnQtc2l6ZTogMS44cmVtOyB9XG59XG5cbi5mb3JtLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjg3cmVtO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICBtYXJnaW46IDRweCAwIDA7XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBDYXJkIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmZvcm0tY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhhdS1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGF1LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMteGwpO1xuICBib3gtc2hhZG93OiB2YXIoLS1oYXUtc2hhZG93LXNvZnQpO1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vLyDDosKUwoDDosKUwoAgU2VjdGlvbnMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uZm9ybS1zZWN0aW9uIHtcbiAgcGFkZGluZzogMjBweCAyMHB4IDRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWhhdS1ib3JkZXIpO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyBwYWRkaW5nOiAyNHB4IDI4cHggOHB4OyB9XG5cbiAgJjpsYXN0LW9mLXR5cGUgeyBib3JkZXItYm90dG9tOiBub25lOyB9XG59XG5cbi5mb3JtLXNlY3Rpb24tdGl0bGUge1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1kaW0pO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICBtYXJnaW46IDAgMCAxNnB4O1xufVxuXG4vLyDDosKUwoDDosKUwoAgVHdvLWNvbHVtbiBsYXlvdXQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4udHdvLWNvbC1yb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ2FwOiAwO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NDBweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBnYXA6IDE2cHg7XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAIEZpZWxkcyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5maWVsZC1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICYtLWhhbGYge1xuICAgIG1heC13aWR0aDogMjYwcHg7XG4gIH1cbn1cblxuLmZpZWxkLWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjgycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xufVxuXG4uZmllbGQtcmVxdWlyZWQge1xuICBjb2xvcjogdmFyKC0taGF1LWRhbmdlci1mZyk7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG5cbi5zZWxlY3Qtd3JhcCxcbi5pbnB1dC13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmllbGQtc2VsZWN0LFxuLmZpZWxkLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taGF1LWJnKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGF1LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtbWQpO1xuICBmb250LXNpemU6IDAuODdyZW07XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dCk7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KSwgYm94LXNoYWRvdyB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KTtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taGF1LXByaW1hcnkpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKHZhcigtLWhhdS1wcmltYXJ5LXJnYiwgNTksIDEzMCwgMjQ2KSwgMC4xMik7XG4gIH1cbiAgJjpob3ZlciB7IGJvcmRlci1jb2xvcjogdmFyKC0taGF1LWJvcmRlci1ob3Zlcik7IH1cblxuICAmLmZpZWxkLWVycm9yIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1oYXUtZGFuZ2VyLWZnKTsgfVxuICAmLmZpZWxkLWRpc2FibGVkIHsgb3BhY2l0eTogMC40NTsgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cbn1cblxuLmZpZWxkLXNlbGVjdCB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VsZWN0LWNoZXZyb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMnB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LWRpbSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZmllbGQtaGludCB7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcblxuICAmLS1lcnJvciB7IGNvbG9yOiB2YXIoLS1oYXUtZGFuZ2VyLWZnKTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgRGF0ZXMgcm93IMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmRhdGVzLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBnYXA6IDA7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdhcDogMTZweDtcbiAgfVxufVxuXG4ubm8tZXhwaXJ5LWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjc2cmVtO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4vLyDDosKUwoDDosKUwoAgQ2hlY2tib3ggw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uY2hlY2tib3gtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5jaGVja2JveC1pbnB1dCB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGFjY2VudC1jb2xvcjogdmFyKC0taGF1LXByaW1hcnkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uY2hlY2tib3gtbGFiZWwge1xuICBmb250LXNpemU6IDAuODRyZW07XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBVcGxvYWQgem9uZSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi51cGxvYWQtem9uZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgcGFkZGluZzogMzJweCAyMHB4O1xuICBib3JkZXI6IDJweCBkYXNoZWQgdmFyKC0taGF1LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtbGcpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KSwgYmFja2dyb3VuZCB2YXIoLS1oYXUtdHJhbnNpdGlvbi1mYXN0KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICY6aG92ZXIsICYtLWRyYWdvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWhhdS1wcmltYXJ5KTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWhhdS1wcmltYXJ5LXJnYiwgNTksIDEzMCwgMjQ2KSwgMC4wNCk7XG4gIH1cbn1cblxuLnVwbG9hZC16b25lLWljb24ge1xuICBmb250LXNpemU6IDIuMnJlbTtcbiAgY29sb3I6IHZhcigtLWhhdS1wcmltYXJ5KTtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4udXBsb2FkLXpvbmUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQpO1xuICBtYXJnaW46IDA7XG59XG5cbi51cGxvYWQtem9uZS1oaW50IHtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICBtYXJnaW46IDA7XG59XG5cbi51cGxvYWQtem9uZS1leGlzdGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7XG4gIG1hcmdpbjogNHB4IDAgMDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMC44NXJlbTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgRmlsZSBzZWxlY3RlZCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5maWxlLXNlbGVjdGVkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taGF1LXByaW1hcnktcmdiLCA1OSwgMTMwLCAyNDYpLCAwLjA3KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1oYXUtcHJpbWFyeS1yZ2IsIDU5LCAxMzAsIDI0NiksIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtbWQpO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uZmlsZS1zZWxlY3RlZC1pY29uIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiB2YXIoLS1oYXUtcHJpbWFyeSk7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uZmlsZS1zZWxlY3RlZC1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycHg7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmZpbGUtc2VsZWN0ZWQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWhhdS10ZXh0KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5maWxlLXNlbGVjdGVkLXNpemUge1xuICBmb250LXNpemU6IDAuNzZyZW07XG4gIGNvbG9yOiB2YXIoLS1oYXUtdGV4dC1tdXRlZCk7XG59XG5cbi5maWxlLXJlbW92ZS1idG4ge1xuICBmbGV4LXNocmluazogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtc20pO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGlvbi1pY29uIHsgZm9udC1zaXplOiAxLjA1cmVtOyB9XG4gICY6aG92ZXIgeyBjb2xvcjogI2VmNDQ0NDsgYmFja2dyb3VuZDogcmdiYSgyMzksNjgsNjgsLjEpOyB9XG59XG5cbi5maWxlLWlucHV0LWhpZGRlbiB7IGRpc3BsYXk6IG5vbmU7IH1cblxuLy8gw6LClMKAw6LClMKAIEV4dHJhY3Rpb24gc3RhdHVzIChpbmxpbmUgc3Bpbm5lciB3aGlsZSBleHRyYWN0aW5nKSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5leHRyYWN0aW9uLXN0YXR1cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgZm9udC1zaXplOiAwLjg0cmVtO1xuICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xufVxuXG4uZXh0cmFjdGlvbi1zcGlubmVyIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgLS1jb2xvcjogdmFyKC0taGF1LXByaW1hcnkpO1xufVxuXG4vLyDDosKUwoDDosKUwoAgRXh0cmFjdGlvbiByZXN1bHQgc2VjdGlvbiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5leHRyYWN0aW9uLXNlY3Rpb24ge1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG5cbi5leHRyYWN0aW9uLWJhbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGF1LXJhZGl1cy1tZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuXG4gICYtLWluZm8ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWhhdS1zdWNjZXNzLXNvZnQpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taGF1LXN1Y2Nlc3MtZmcpO1xuICAgIGNvbG9yOiB2YXIoLS1oYXUtc3VjY2Vzcy1mZyk7XG4gIH1cblxuICAmLS1jYXV0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtd2FybmluZy1zb2Z0KTtcbiAgICBib3JkZXItY29sb3I6ICNiNDUzMDk7XG4gICAgY29sb3I6ICM5MjQwMGU7XG4gIH1cblxuICAmLS1uZXV0cmFsIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtaG92ZXItYmcpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taGF1LWJvcmRlcik7XG4gICAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbiAgfVxufVxuXG4uZXh0cmFjdGlvbi1iYW5uZXItaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmbGV4LXNocmluazogMDtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuXG4uZXh0cmFjdGlvbi1iYW5uZXItYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogM3B4O1xufVxuXG4uZXh0cmFjdGlvbi1iYW5uZXItdGl0bGUge1xuICBmb250LXNpemU6IDAuODZyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5leHRyYWN0aW9uLWJhbm5lci1kZXNjIHtcbiAgZm9udC1zaXplOiAwLjgxcmVtO1xuICBvcGFjaXR5OiAwLjg1O1xufVxuXG4uZXh0cmFjdGlvbi13YXJuaW5ncyB7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIHBhZGRpbmc6IDAgMCAwIDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNHB4O1xuXG4gIGxpIHtcbiAgICBmb250LXNpemU6IDAuNzlyZW07XG4gICAgY29sb3I6IHZhcigtLWhhdS10ZXh0LW11dGVkKTtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBBY3Rpb25zIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmZvcm0tYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMTZweCAyMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taGF1LWJvcmRlcik7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IHBhZGRpbmc6IDE2cHggMjhweDsgfVxufVxuXG4uYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhdS1yYWRpdXMtcGlsbCk7XG4gIGZvbnQtc2l6ZTogMC44N3JlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCksIG9wYWNpdHkgdmFyKC0taGF1LXRyYW5zaXRpb24tZmFzdCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgaW9uLWljb24geyBmb250LXNpemU6IDFyZW07IH1cbiAgJjpkaXNhYmxlZCB7IG9wYWNpdHk6IDAuNTU7IGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cblxuICAmLS1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtcHJpbWFyeSk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTRweCB2YXIoLS1oYXUtcHJpbWFyeS1zaGFkb3cpO1xuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkgeyBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtcHJpbWFyeS1zdHJvbmcpOyB9XG4gIH1cblxuICAmLS1naG9zdCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taGF1LWhvdmVyLWJnKTtcbiAgICBjb2xvcjogdmFyKC0taGF1LXRleHQtbXV0ZWQpO1xuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkgeyBiYWNrZ3JvdW5kOiB2YXIoLS1oYXUtYm9yZGVyKTsgY29sb3I6IHZhcigtLWhhdS10ZXh0KTsgfVxuICB9XG59XG5cbi5idG4tc3Bpbm5lciB7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIC0tY29sb3I6ICNmZmY7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
};
DocumentsFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.UntilDestroy)()], DocumentsFormComponent);


/***/ }

}]);
//# sourceMappingURL=src_app_features_documents_documents-form_documents-form_component_ts.js.map