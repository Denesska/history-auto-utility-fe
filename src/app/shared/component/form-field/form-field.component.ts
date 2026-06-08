import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Optional, Output, Self } from "@angular/core";
import { FormControl, NgControl, ReactiveFormsModule, ValidationErrors } from "@angular/forms";
import { AbstractInputControlDirective } from "@hau/shared/directive/abstract-input-control.directive";
import {IonDatetime, IonInput, IonItem, IonLabel, IonModal, IonProgressBar, IonNote, IonSelect, IonSelectOption} from '@ionic/angular/standalone';
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
        IonInput,
        IonModal,
        IonDatetime,
        ReactiveFormsModule,
        IonItem,
        IonLabel,
        IonProgressBar,
        IonNote,
        IonSelect,
        IonSelectOption,
        TranslocoPipe,
    ],
    styleUrls: ['./form-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldComponent<T> extends AbstractInputControlDirective<FormControl<T>> implements OnInit {
  private static _idCounter = 0;
  protected readonly InputType = InputType;
  readonly FormControlType = FormControlType;
  readonly datePickerId = `hau_cal_${++FormFieldComponent._idCounter}`;
  showPassword = false;
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

  override ngOnInit(): void {
    super.ngOnInit();
    if (!this.control) return;
    this.control.statusChanges.pipe(untilDestroyed(this)).subscribe(status => {
      if (status === 'VALID') this.hasError.emit(null);
      else if (!this.control?.hasError('required')) this.hasError.emit(this.control?.errors);
    });
    this.control.valueChanges.pipe(untilDestroyed(this)).subscribe(value => this.control.setValue(value, { emitEvent: false }));
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  formatControlDate(value: unknown): string {
    if (value == null) return '';
    const date = new Date(value as string | number | Date);
    return isNaN(date.getTime()) ? '' : date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }

  onFileSelected(event: any): void {
    if (this.multiple) {
      this.selectedFiles.emit(Array.from(event.target?.files ?? []));
    } else {
      this.selectedFile.emit(event.target?.files[0]);
    }
    event.target.value = '';
  }
}

export enum InputType {
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
  DatePicker = 'datePicker',
}