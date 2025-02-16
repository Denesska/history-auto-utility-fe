import { ChangeDetectorRef, Directive, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  NgControl,
  NgModel,
} from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Subject, distinctUntilChanged, takeUntil } from 'rxjs';

@UntilDestroy()
@Directive()
export abstract class AbstractInputControlDirective<T extends FormControl | AbstractControl>
  implements ControlValueAccessor, OnInit
{
  protected constructor(
    public ngControl: NgControl,
    public changeDetectorRef: ChangeDetectorRef,
  ) {
    if (this.ngControl !== null) {
      // Setting the value accessor directly (instead of using the providers) to avoid running into a circular import.
      this.ngControl.valueAccessor = this;
    }
  }

  control!: T;
  controlInstanceChanged$ = new Subject<T>();

  // eslint-disable-next-line accessor-pairs
  @Input()
  set formControl(formControl: T) {
    this.control = formControl;
  }

  // These are just to make Angular happy. Not needed since the control is passed to the child input
  writeValue(obj: unknown): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  registerOnChange(fn: (_: unknown) => void): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  registerOnTouched(fn: unknown): void {}

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  ngOnInit() {
    if (this.ngControl instanceof FormControlName) {
      const formGroupDirective = this.ngControl.formDirective as FormGroupDirective;
      const controlName = this.ngControl.name;
      if (!!formGroupDirective && !!controlName) {
        this.control = formGroupDirective.form.controls[controlName] as T;
      }
    } else if (this.ngControl instanceof FormControlDirective) {
      this.control = this.ngControl.control as T;
    } else if (this.ngControl instanceof NgModel) {
      this.control = this.ngControl.control as T;
      this.control.valueChanges
        .pipe(untilDestroyed(this))
        .subscribe(() => this.ngControl.viewToModelUpdate(this.control?.value));
    } else if (!this.ngControl) {
      this.control = new FormControl() as T;
    }

    this.controlInstanceChanged$.pipe(untilDestroyed(this)).subscribe(control => {
      this.control = control;
      this.patchControlUpdateFunctions(control);
    });

    this.controlInstanceChanged$.next(this.control);
  }

  private patchControlUpdateFunctions(control: T): void {
    control.statusChanges
      .pipe(untilDestroyed(this), takeUntil(this.controlInstanceChanged$), distinctUntilChanged())
      .subscribe(() => {
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
}
