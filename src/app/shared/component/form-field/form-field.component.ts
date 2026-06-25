import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Optional, Output, Self } from "@angular/core";
import { FormControl, NgControl, ReactiveFormsModule, ValidationErrors, Validators } from "@angular/forms";
import { AbstractInputControlDirective } from "@hau/shared/directive/abstract-input-control.directive";
import { IonIcon, IonProgressBar } from '@ionic/angular/standalone';
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { TranslocoPipe } from '@ngneat/transloco';

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
    imports: [
        IonIcon,
        IonProgressBar,
        ReactiveFormsModule,
        TranslocoPipe,
    ],
    styleUrls: ['./form-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldComponent<T> extends AbstractInputControlDirective<FormControl<T>> implements OnInit {
  private static _idCounter = 0;
  protected readonly InputType = InputType;
  readonly FormControlType = FormControlType;
  readonly fieldId = `hau_field_${++FormFieldComponent._idCounter}`;

  @Input() controlType = FormControlType.Input;
  @Input() minlength!: number;
  @Input() maxlength!: number;
  @Input() max!: number | Date;
  @Input() min!: number | Date;
  @Input() label!: string;
  @Input() inputType: InputType = InputType.Text;
  @Input() uploadProgress: number | undefined;
  @Input() acceptedFilesFormat: string | undefined;
  @Input() options: readonly { value: string; label: string }[] = [];
  @Input() multiple = false;
  @Input() disabled = false;

  @Output() inputFocus = new EventEmitter<void>();
  @Output() inputBlur = new EventEmitter<void>();
  @Output() hasError: EventEmitter<ValidationErrors | null> = new EventEmitter<ValidationErrors | null>();
  @Output() selectedFile: EventEmitter<File> = new EventEmitter<File>();
  @Output() selectedFiles: EventEmitter<File[]> = new EventEmitter<File[]>();

  constructor(@Optional() @Self() ngControl: NgControl, changeDetectorRef: ChangeDetectorRef) {
    super(ngControl, changeDetectorRef);
  }

  get showFieldError(): boolean {
    return !!(this.control?.invalid && (this.control.touched || this.control.dirty));
  }

  get allowEmptyOption(): boolean {
    return !this.control?.hasValidator(Validators.required);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    if (!this.control) return;
    this.control.statusChanges.pipe(untilDestroyed(this)).subscribe(status => {
      if (status === 'VALID') this.hasError.emit(null);
      else if (!this.control?.hasError('required')) this.hasError.emit(this.control?.errors);
    });
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
  File = 'file'
}

export enum FormControlType {
  File = 'file',
  Input = 'input',
  Dropdown = 'dropdown',
}
