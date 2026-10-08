import { Directive, ElementRef, HostListener, Renderer2, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { formatLicensePlate } from '@hau/shared/utils/license-plate.util';

const ALNUM = /[\p{L}0-9]/u;

/** How many letter/digit characters appear in `value` before index `caret`. */
function alnumCountBefore(value: string, caret: number): number {
  let count = 0;
  for (let i = 0; i < caret && i < value.length; i++) {
    if (ALNUM.test(value[i])) count++;
  }
  return count;
}

/** The index right after the n-th letter/digit character in `value` (n = `count`). */
function caretAfterAlnumCount(value: string, count: number): number {
  if (count <= 0) return 0;
  let seen = 0;
  for (let i = 0; i < value.length; i++) {
    if (ALNUM.test(value[i])) {
      seen++;
      if (seen === count) return i + 1;
    }
  }
  return value.length;
}

/**
 * Formats a license plate live as it's typed: uppercase, letters/digits only,
 * single space at every letter<->digit boundary (`formatLicensePlate()`).
 * Registers itself as the element's `ControlValueAccessor` (works with both
 * `formControlName`/`formControl` and `ngModel`) instead of listening
 * alongside the default one, so there's exactly one source of truth for the
 * element's value and no risk of the two fighting over it.
 *
 * Re-derives the caret position after reformatting by counting letter/digit
 * characters up to the caret in the raw (pre-format) value, then placing the
 * caret after the same count of letter/digit characters in the formatted
 * value — editing in the middle of a plate doesn't jump the cursor to the end.
 *
 * Also sets the mobile-keyboard attributes a plate field needs
 * (`autocapitalize="characters"`, autocorrect/spellcheck off) so this never
 * has to be repeated per usage.
 */
@Directive({
  selector: '[appLicensePlate]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LicensePlateDirective),
      multi: true,
    },
  ],
  host: {
    autocapitalize: 'characters',
    autocorrect: 'off',
    spellcheck: 'false',
  },
})
export class LicensePlateDirective implements ControlValueAccessor {
  private _onChange: (value: string | null) => void = () => {};
  private _onTouched: () => void = () => {};

  constructor(
    private readonly _el: ElementRef<HTMLInputElement>,
    private readonly _renderer: Renderer2,
  ) {}

  writeValue(value: string | null): void {
    this._renderer.setProperty(this._el.nativeElement, 'value', value ? formatLicensePlate(value) : '');
  }

  registerOnChange(fn: (value: string | null) => void): void {
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
    const alnumBeforeCaret = alnumCountBefore(raw, caret);

    const formatted = formatLicensePlate(raw);
    const newCaret = caretAfterAlnumCount(formatted, alnumBeforeCaret);

    input.value = formatted;
    input.setSelectionRange(newCaret, newCaret);
    this._onChange(formatted || null);
  }

  @HostListener('blur')
  onBlur(): void {
    this._onTouched();
  }
}
