import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Optional, Output, Self } from "@angular/core";
import { FormControl, NgControl, ReactiveFormsModule, ValidationErrors } from "@angular/forms";
import { AbstractInputControlDirective } from "@hau/shared/directive/abstract-input-control.directive";
import { IonDatetime, IonInput, IonModal } from "@ionic/angular/standalone";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

export interface InputErrorTranslation {
  key: string;
  params: Record<string, string>;
}

export interface OptionModel {
  value: string | boolean | number | undefined;
  label: string;
  translate?: boolean;
}

@UntilDestroy()
@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  standalone: true,
  imports: [
    IonInput,
    IonModal,
    IonDatetime,
    ReactiveFormsModule
  ],
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldComponent<T> extends AbstractInputControlDirective<FormControl<T>> implements OnInit {
  protected readonly InputType = InputType;
  readonly FormControlType = FormControlType;
  showPassword = false;
  @Input() controlType = FormControlType.Input;
  @Input() minlength!: number;
  @Input() maxlength!: number;
  @Input() max!: number | Date;
  @Input() min!: number | Date;
  @Input() label!: string;
  @Input() inputType: InputType = InputType.Text;

  @Output() inputFocus = new EventEmitter<void>();
  @Output() inputBlur = new EventEmitter<void>();
  @Output() hasError: EventEmitter<ValidationErrors | null> = new EventEmitter<ValidationErrors | null>();

  constructor(@Optional() @Self() ngControl: NgControl, changeDetectorRef: ChangeDetectorRef) {
    super(ngControl, changeDetectorRef);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    if (!this.control) return;
    this.control.statusChanges.pipe(untilDestroyed(this)).subscribe(status => {
      if (status === 'VALID') this.hasError.emit(null);
      else if (!this.control?.hasError('required')) this.hasError.emit(this.control?.errors);
    });
    this.control.valueChanges.pipe(untilDestroyed(this)).subscribe(value => this.control.setValue(value, { emitEvent: false }));
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}

export enum InputType {
  Email = 'email',
  Month = 'month',
  Number = 'number',
  Password = 'password',
  Text = 'text'
}

export enum FormControlType {
  Input = 'input',
  Dropdown = 'dropdown',
  DatePicker = 'datePicker',
}