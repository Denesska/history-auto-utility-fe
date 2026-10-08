import { Directive, ElementRef, HostListener, Renderer2, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  caretAfterDigitCount,
  digitCountBefore,
  sanitizeYearDigits,
} from '@hau/shared/utils/year-input.util';

/**
 * Restricts a car-year field to digits only, live, capped at 4 characters —
 * and opens the numeric keypad on mobile instead of the full keyboard
 * (`inputmode="numeric"`, plus `pattern="[0-9]*"` for iOS, which otherwise
 * still shows the full keyboard on a text input). Mirrors
 * `LicensePlateDirective`'s approach: registers itself as the element's
 * `ControlValueAccessor` (works with `formControlName`/`formControl`) instead
 * of listening alongside the default one, so there's exactly one source of
 * truth for the element's value, and re-derives the caret position after
 * stripping by counting digits up to the caret in the raw (pre-strip) value.
 *
 * Deliberately kept to a plain text input (not `type="number"`): `maxlength`
 * and caret control are unreliable on `type="number"` across browsers, while
 * `inputmode="numeric"` already gives the same numeric keypad without those
 * side effects.
 */
@Directive({
  selector: '[appYearInput]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => YearInputDirective),
      multi: true,
    },
  ],
  host: {
    inputmode: 'numeric',
    pattern: '[0-9]*',
    autocomplete: 'off',
    enterkeyhint: 'done',
  },
})
export class YearInputDirective implements ControlValueAccessor {
  private _onChange: (value: number | null) => void = () => {};
  private _onTouched: () => void = () => {};

  constructor(
    private readonly _el: ElementRef<HTMLInputElement>,
    private readonly _renderer: Renderer2,
  ) {}

  writeValue(value: number | string | null): void {
    this._renderer.setProperty(
      this._el.nativeElement,
      'value',
      value == null || value === '' ? '' : String(value),
    );
  }

  registerOnChange(fn: (value: number | null) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._renderer.setProperty(this._el.nativeElement, 'disabled', isDisabled);
  }

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const raw = input.value;
    const caret = input.selectionStart ?? raw.length;
    const digitsBeforeCaret = digitCountBefore(raw, caret);

    const sanitized = sanitizeYearDigits(raw);
    const newCaret = caretAfterDigitCount(sanitized, digitsBeforeCaret);

    input.value = sanitized;
    input.setSelectionRange(newCaret, newCaret);
    this._onChange(sanitized ? Number(sanitized) : null);
  }

  @HostListener('blur')
  onBlur(): void {
    this._onTouched();
  }
}
