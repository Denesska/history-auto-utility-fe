import { Component, ElementRef, EventEmitter, forwardRef, HostListener, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronDownOutline } from 'ionicons/icons';

export interface DropdownOption {
  value: string | number;
  label: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  imports: [IonIcon],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    },
  ],
})
export class DropdownComponent implements ControlValueAccessor {
  @Input({ required: true }) options: DropdownOption[] = [];
  @Input() value: string | number | null = null;
  @Input() placeholder = '';
  @Input() leadingIcon?: string;
  @Input() align: 'left' | 'right' = 'left';
  @Input() fullWidth = false;
  @Input() ariaLabel = '';
  @Input() id?: string;
  @Input() error = false;
  @Output() readonly valueChange = new EventEmitter<string | number>();

  open = false;
  disabled = false;

  private _onChange: (value: string | number | null) => void = () => {};
  private _onTouched: () => void = () => {};

  constructor(private readonly _el: ElementRef) {
    addIcons({ chevronDownOutline });
  }

  get selectedLabel(): string {
    return this.options.find(o => o.value === this.value)?.label ?? this.placeholder;
  }

  toggle(): void {
    if (this.disabled) return;
    this.open = !this.open;
    if (!this.open) this._onTouched();
  }

  select(option: DropdownOption): void {
    if (this.disabled) return;
    this.value = option.value;
    this.valueChange.emit(option.value);
    this._onChange(option.value);
    this._onTouched();
    this.open = false;
  }

  onNativeChange(event: Event): void {
    if (this.disabled) return;
    const raw = (event.target as HTMLSelectElement).value;
    const opt = this.options.find(o => String(o.value) === raw);
    if (opt) this.select(opt);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (this.open && !this._el.nativeElement.contains(event.target)) {
      this.open = false;
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.open = false;
  }

  // ── ControlValueAccessor ────────────────────────────────────────────
  writeValue(value: string | number | null): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string | number | null) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    if (isDisabled) this.open = false;
  }
}
