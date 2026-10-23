import {
  ChangeDetectionStrategy,
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  Self,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  NgControl,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { AbstractInputControlDirective } from '@hau/shared/directive/abstract-input-control.directive';
import { LicensePlateDirective } from '@hau/shared/directive/license-plate.directive';
import {
  DropdownComponent,
  DropdownOption,
} from '@hau/shared/component/dropdown/dropdown.component';
import { LoaderComponent } from '@hau/shared/component/loader/loader.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Subscription } from 'rxjs';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

export interface InputErrorTranslation {
  key: string;
  params: Record<string, string>;
}

const COMMON_ERRORS = ['required', 'min', 'max', 'minlength', 'maxlength', 'email', 'pattern'];

export interface OptionModel {
  value: string | boolean | number | undefined;
  label: string;
  translate?: boolean;
}

@UntilDestroy()
@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  imports: [
    LoaderComponent,
    ReactiveFormsModule,
    TranslocoPipe,
    DropdownComponent,
    LicensePlateDirective,
  ],
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent<T>
  extends AbstractInputControlDirective<FormControl<T>>
  implements OnInit, AfterContentInit, OnDestroy
{
  private static _idCounter = 0;
  protected readonly InputType = InputType;
  readonly FormControlType = FormControlType;
  readonly fieldId = `hau_field_${++FormFieldComponent._idCounter}`;

  @Input() controlType = FormControlType.Input;
  /** Applies a live-formatting directive to the `Input` control type. Only `'licensePlate'` exists so far. */
  @Input() format: 'licensePlate' | null = null;
  @Input() minlength!: number;
  @Input() maxlength!: number;
  @Input() max!: number | Date;
  @Input() min!: number | Date;
  @Input() label!: string;
  @Input() inputType: InputType = InputType.Text;
  /** Passed straight through to the native `inputmode` attribute (e.g. `'numeric'`
   *  for a mobile numeric keypad on a Number field) — optional, no effect when unset. */
  @Input() inputmode?: string;
  /** Native `placeholder` of the built-in input. */
  @Input() placeholder?: string;
  /** Native `step` of the built-in Number input (e.g. `'0.01'`). */
  @Input() step?: string;
  @Input() uploadProgress: number | undefined;
  @Input() acceptedFilesFormat: string | undefined;
  @Input() options: readonly { value: string; label: string }[] = [];
  @Input() multiple = false;
  @Input() disabled = false;
  /** `'mono'` = monospace + uppercase value (VIN, plate-like codes). Adds `.hau-field--mono`. */
  @Input() variant: 'default' | 'mono' = 'default';

  /** Static suffix text shown right of the control (e.g. `km`). Use the `[fieldSuffix]` slot for richer content. */
  @Input() suffix?: string;
  /** Helper text under the box (already translated). Hidden while an error is shown. */
  @Input() hint?: string;
  /** Overrides the auto-detected asterisk. Auto = the control has a required validator. */
  @Input() required: boolean | null = null;
  /** Manual invalid flag for forms WITHOUT a control (shows the error state + message). */
  @Input() invalid: boolean | null = null;
  /** Translation key forced as the error message (cross-field errors); also forces the error state. */
  @Input() error: string | null = null;
  /** `{ [validatorErrorKey]: translationKey }` — per-field message overrides. */
  @Input() errorMessages: Record<string, string> | null = null;
  /** `id` to put on the projected control so the label `for` points at it (projection mode only). */
  @Input() inputId?: string;

  /**
   * Projection mode: pass the control for state only (required / invalid) when the
   * real widget is projected via `<ng-content>` (dropdown, autocomplete, textarea, ...).
   * Not needed when the projected element has its own formControl/formControlName/ngModel.
   */
  @Input('control') set externalControl(c: AbstractControl | null | undefined) {
    this._external = c ?? null;
    if (this._initialized && c) this.controlInstanceChanged$.next(c as FormControl<T>);
    this._watchStateControl();
  }
  private _external: AbstractControl | null = null;
  private _initialized = false;
  private _watched: AbstractControl | null = null;
  private _watchSub?: Subscription;

  /** Picks up formControlName / ngModel of a projected child so no `[control]` is needed. */
  @ContentChild(NgControl) private readonly _projectedNg?: NgControl;

  @Output() inputFocus = new EventEmitter<void>();
  @Output() inputBlur = new EventEmitter<void>();
  @Output() hasError: EventEmitter<ValidationErrors | null> =
    new EventEmitter<ValidationErrors | null>();
  @Output() selectedFile: EventEmitter<File> = new EventEmitter<File>();
  @Output() selectedFiles: EventEmitter<File[]> = new EventEmitter<File[]>();

  constructor(
    @Optional() @Self() ngControl: NgControl,
    changeDetectorRef: ChangeDetectorRef,
    private readonly _transloco: TranslocoService,
  ) {
    super(ngControl, changeDetectorRef);
  }

  /** True when the real widget is projected (host has no formControlName/ngModel of its own). */
  get projected(): boolean {
    return !this.ngControl && this.controlType === FormControlType.Input;
  }

  /** Control used for required/invalid state in either mode (null for manual-state forms). */
  get stateControl(): AbstractControl | null {
    return this._external ?? this._projectedNg?.control ?? (this.ngControl ? this.control : null);
  }

  get isRequired(): boolean {
    if (this.required !== null) return this.required;
    const c = this.stateControl;
    if (!c) return false;
    if (c.hasValidator(Validators.required)) return true;
    // Covers template-driven `required` attributes and composed validators.
    return !!c.validator?.(new FormControl(''))?.['required'];
  }

  get isDisabled(): boolean {
    return this.disabled || !!this.stateControl?.disabled;
  }

  get showFieldError(): boolean {
    if (this.error) return true;
    const c = this.stateControl;
    if (this.invalid !== null && !c) return this.invalid;
    return !!(c?.invalid && (c.touched || c.dirty));
  }

  /** Resolved error message (translation key + interpolation params). */
  get errorMessage(): InputErrorTranslation | null {
    if (!this.showFieldError) return null;
    if (this.error) return { key: this.error, params: {} };
    const errors = this.stateControl?.errors;
    if (!errors) return { key: 'shared.formField.errors.invalid', params: {} };
    const keys = Object.keys(errors);
    const k = keys.includes('required') ? 'required' : keys[0];
    const custom = this.errorMessages?.[k];
    const params = (typeof errors[k] === 'object' && errors[k] ? errors[k] : {}) as Record<string, string>;
    if (custom) return { key: custom, params };
    if (COMMON_ERRORS.includes(k)) return { key: `shared.formField.errors.${k}`, params };
    return { key: 'shared.formField.errors.invalid', params: {} };
  }

  get labelFor(): string {
    return this.inputId ?? this.fieldId;
  }

  get allowEmptyOption(): boolean {
    return !this.control?.hasValidator(Validators.required);
  }

  get dropdownOptions(): DropdownOption[] {
    if (!this.allowEmptyOption) return [...this.options];
    return [
      { value: '', label: this._transloco.translate('common.noData') },
      ...this.options,
    ];
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this._initialized = true;
    // Base creates a dummy control when the host has no ngControl; use the real one instead.
    if (this._external) this.controlInstanceChanged$.next(this._external as FormControl<T>);
    this._watchStateControl();
    if (!this.control) return;
    this.control.statusChanges.pipe(untilDestroyed(this)).subscribe(status => {
      if (status === 'VALID') this.hasError.emit(null);
      else if (!this.control?.hasError('required'))
        this.hasError.emit(this.control?.errors);
    });
  }

  ngAfterContentInit(): void {
    const c = this._projectedNg?.control;
    if (!this._external && c) this.controlInstanceChanged$.next(c as FormControl<T>);
    this._watchStateControl();
  }

  ngOnDestroy(): void {
    this._watchSub?.unsubscribe();
  }

  /**
   * Re-renders (OnPush) on ANY change of the state control: value, status (validators added/removed via
   * `setValidators` + `updateValueAndValidity`, enable/disable), touched, dirty, reset. Covers host-bound,
   * `[control]` and projected controls alike; `isRequired` / `isDisabled` are getters re-read on each render.
   */
  private _watchStateControl(): void {
    const c = this.stateControl;
    if (c === this._watched) return;
    this._watchSub?.unsubscribe();
    this._watched = c;
    this._watchSub = c?.events.subscribe(() => this.changeDetectorRef.markForCheck());
    this.changeDetectorRef.markForCheck();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (this.multiple) {
      this.selectedFiles.emit(Array.from(input.files ?? []));
    } else {
      this.selectedFile.emit(input.files?.[0] as File);
    }
    input.value = '';
  }
}

export enum InputType {
  Date = 'date',
  Email = 'email',
  Month = 'month',
  Number = 'number',
  Password = 'password',
  Text = 'text',
  File = 'file',
}

export enum FormControlType {
  File = 'file',
  Input = 'input',
  Dropdown = 'dropdown',
}
