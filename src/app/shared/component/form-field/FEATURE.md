# Form field (`<app-form-field>`) and Save validation

## Functionality

Every editable field in the app looks and behaves the same way:

- The field is a filled box with a small uppercase label inside it. The box gets a coloured border while the user is typing in it.
- A red asterisk next to the label tells the user the field is required.
- When Save is pressed with required or invalid fields, those fields turn red (red border, soft red background) and a short message appears under each one (for example "This field is required" or "Value must be at least 0").
- The screen then scrolls so the first invalid field is in the middle of the view and puts the cursor in it. Nothing is saved until all fields are valid.
- Fields that are locked (disabled) look flat with a dashed border and a dimmed value.
- Optional extras: a unit on the right of the value (km, currency), and a grey hint line under the field.
- The same look applies to text, number, date, month, multi-line text, drop-down lists, search-as-you-type lists, and the vehicle make/model/year picker.

## Implementation

Code: `shared/component/form-field/` (component), `src/theme/hau-form-fields.scss` (global `.hau-field*` classes, the single source of truth for the look, copied from the Istoric `.amp-box`), `shared/utils/form-validation.ts` (`revealInvalidFields`), translations `shared.formField.errors.*` (en/ro/ru).

**Rule: never hand-roll field CSS or error markup in a feature. Use `<app-form-field>`.** If it lacks an option, extend it.

### Modes
1. **Built-in input** (host has `formControlName` / `[formControl]` / `ngModel`): `inputType` text|number|date|month|email|password, `format="licensePlate"`, `controlType = FormControlType.Dropdown` (+ `[options]`), `FormControlType.File`.
2. **Projection** (host has no control directive): put any widget inside; the field only provides box, label, asterisk, error. Pass `[control]="form.controls.x"` for state, or let it auto-detect a projected child's `formControlName` / `ngModel`.
3. **Manual state** (no control at all): `[required]`, `[invalid]` inputs.

### Inputs
`label` (translated string), `inputType`, `format`, `inputmode`, `min`/`max`/`maxlength`, `controlType`, `options`, `suffix` (text), `hint` (translated text), `required` (override asterisk; auto = control has `Validators.required`, also detects template-driven `required`), `invalid` (manual state, only used when no control), `error` (translation KEY; forces error state + message, for cross-field errors), `errorMessages` (`{ errorKey: translationKey }` overrides), `control` (projection-mode control), `inputId` (id of the projected control so the label `for` works), `disabled`.
Also `placeholder` and `step` (built-in input; for projected widgets put `placeholder` on the element itself, not on the field), and `variant` (`'default' | 'mono'`: `mono` = monospace + uppercase value, e.g. VIN; global class `.hau-field--mono`). Slots: default `<ng-content>` (projection mode), `<ng-content select="[fieldSuffix]">` (right of the control), `<ng-content select="[fieldLabelExtra]">` (right end of the label row: tag, "Remove" link; works in every mode). Outputs unchanged: `inputFocus`, `inputBlur`, `hasError`, `selectedFile(s)`.

### Reactivity (OnPush)
The field subscribes to `events` of its state control (host-bound, `[control]` or projected `ngModel`/`formControlName`) and calls `markForCheck()` on every value/status/touched/dirty/reset change. `isRequired`, `isDisabled` and the error state are getters re-read on each render, so toggling `Validators.required` (`setValidators` + `updateValueAndValidity`) or `enable()`/`disable()` at runtime updates the asterisk, error state and `.hau-field--disabled` automatically, also for projected controls.

### Error message resolution
`error` input -> `errorMessages[errorKey]` -> `shared.formField.errors.{required,min,max,minlength,maxlength,email,pattern}` (params from the validator error, e.g. `{{min}}`) -> `shared.formField.errors.invalid`. Shown when the control is invalid AND (touched or dirty). `revealInvalidFields` touches everything, so Save shows all errors.

### Wiring Save
```ts
private readonly _elRef = inject(ElementRef);
save(): void {
  if (!revealInvalidFields(this.form, this._elRef)) return; // marks touched, scrolls+focuses first .hau-field--error
  ...
}
```
Template-driven: `revealInvalidFields(this.ngForm, this._elRef)` (NgForm / FormGroupDirective accepted). Manual-state fields: pass `{ extraInvalid: () => !this.x }` (the `form` argument may be `null` when there are no controls at all: `revealInvalidFields(null, this._elRef, { extraInvalid })`) and bind `[invalid]="submitAttempted && !x"`.

### Copy-paste examples (all inside a `[formGroup]`)
```html
<!-- plain text -->
<app-form-field [label]="'x.name' | transloco" formControlName="name"></app-form-field>

<!-- number with suffix -->
<app-form-field [label]="'x.mileage' | transloco" [inputType]="InputType.Number" inputmode="numeric"
                [min]="0" suffix="km" formControlName="mileage"></app-form-field>

<!-- date -->
<app-form-field [label]="'x.date' | transloco" [inputType]="InputType.Date" formControlName="date"></app-form-field>

<!-- textarea (projection) -->
<app-form-field [label]="'x.notes' | transloco" [control]="form.controls.notes">
  <textarea formControlName="notes" rows="3"></textarea>
</app-form-field>

<!-- dropdown: built-in ... -->
<app-form-field [label]="..." [controlType]="FormControlType.Dropdown" [options]="opts" formControlName="type"></app-form-field>
<!-- ... or projected -->
<app-form-field [label]="..." [control]="form.controls.type">
  <app-dropdown [fullWidth]="true" [options]="opts" formControlName="type"></app-dropdown>
</app-form-field>

<!-- autocomplete / vehicle-catalog-select (no CVA): pass the control, wire value/events yourself -->
<app-form-field [label]="..." [control]="form.controls.supplier">
  <app-autocomplete [value]="..." (valueChange)="form.controls.supplier.setValue($event)" ...></app-autocomplete>
</app-form-field>

<!-- amount + currency pair: one box, suffix slot holds the currency dropdown -->
<app-form-field [label]="..." [control]="form.controls.cost">
  <input type="number" formControlName="cost" />
  <app-dropdown fieldSuffix formControlName="currency" [options]="currencies"></app-dropdown>
</app-form-field>

<!-- template-driven -->
<app-form-field [label]="..."><input name="n" [(ngModel)]="n" required /></app-form-field>

<!-- custom / cross-field error -->
<app-form-field [label]="..." formControlName="end" [error]="form.hasError('range') ? 'x.rangeError' : null"></app-form-field>
<app-form-field ... [errorMessages]="{ pattern: 'cars.form.validation.vin' }" formControlName="vin"></app-form-field>
```
Native `input`/`select` placed inside are styled automatically (borderless, bold); `textarea` is borderless at weight 400. On touch devices (`any-pointer: coarse`) controls inside a field are 16px to avoid iOS focus-zoom; desktop keeps 0.98rem. `<app-dropdown>` is flattened inside a field via global rules (no double border); its own `[error]` input is not needed there. `<app-autocomplete>` is already borderless.

### Classes (global, `hau-form-fields.scss`)
`.hau-field` (box), `--error`, `--disabled`, `--mono`, `.hau-field__label`, `.hau-field__req`, `.hau-field__control`, `.hau-field__suffix`, `.hau-field__error`, `.hau-field__hint`, `.hau-field-wrap` (box + message).

### Notes / limitations
- Field has no outer margin: space fields with a grid/flex `gap` in the feature.
- File type keeps the older `.field-group` look.
- `<app-phone-input>` is a CVA and can be projected (`formControlName`); `hau-form-fields.scss` flattens its text input inside a field like `<app-dropdown>`.
- `app-autocomplete` and `vehicle-catalog-select` are not CVAs; they need `[control]` and manual value wiring.
