import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chevronDownOutline } from 'ionicons/icons';
import { CountryFlagComponent } from '@hau/shared/component/country-flag/country-flag.component';
import { countryFlagEmoji } from '@hau/shared/config/vignette-country.config';
import { OverlayBackDirective } from '@hau/core/navigation/overlay-back.directive';

export interface DropdownOption {
  value: string | number;
  label: string;
  /** ISO country code: shows that country's flag before the label (emoji in the native mobile picker). */
  flag?: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  imports: [IonIcon, CountryFlagComponent, OverlayBackDirective],
  changeDetection: ChangeDetectionStrategy.Eager,
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

  get selectedOption(): DropdownOption | undefined {
    return this.options.find(o => o.value === this.value);
  }

  get selectedLabel(): string {
    return this.selectedOption?.label ?? this.placeholder;
  }

  /** A native `<option>` can only hold text, so a flag goes in as its emoji there. */
  nativeLabel(opt: DropdownOption): string {
    return opt.flag ? `${countryFlagEmoji(opt.flag)} ${opt.label}` : opt.label;
  }

  toggle(): void {
    if (this.disabled) return;
    const next = !this.open;
    this._setOpen(next);
    if (!next) this._onTouched();
  }

  select(option: DropdownOption): void {
    if (this.disabled) return;
    this.value = option.value;
    this.valueChange.emit(option.value);
    this._onChange(option.value);
    this._onTouched();
    this._setOpen(false);
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
      this._setOpen(false);
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this._setOpen(false);
  }

  /**
   * The one place `open` changes. The themed panel (`.dd-panel` in the template) carries
   * `appOverlayBack`, so mounting/unmounting it via `@if (open)` already registers/
   * unregisters with `OverlayBackService` for free — Back closes just the open panel, same
   * as every other way it can close (toggle, outside click, Escape, picking an option,
   * disabling). See `core/navigation/FEATURE.md`'s "Overlay back" section. Deliberately
   * doesn't touch `_onTouched`, which keeps its own pre-existing, per-callsite behavior above.
   */
  private _setOpen(open: boolean): void {
    this.open = open;
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
    if (isDisabled) this._setOpen(false);
  }
}
