import { Component, forwardRef, inject, Input, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslocoService } from '@jsverse/transloco';
// The "min" metadata build (~85KB vs ~155KB) — smaller lazy-chunk payload,
// same formatting/parsing/country-detection behavior for this component's needs.
import { AsYouType, CountryCode, getCountryCallingCode, parsePhoneNumberFromString } from 'libphonenumber-js/min';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';
import { DEFAULT_PHONE_COUNTRY, PHONE_COUNTRIES, phoneCountryName } from '@hau/shared/config/phone-country.config';

/**
 * Groups a national significant number (digits only, no trunk "0", no
 * country code) into chunks of 3 counted from the end — "757999898" →
 * "757 999 898", "69113909" → "69 113 909". Deliberately the SAME rule for
 * every country: libphonenumber-js's own per-country grouping was tried
 * first and rejected (it renders MD as "0691 13 909" and RO as
 * "0757 999 898" — a stray trunk zero and an uneven split), so display
 * formatting is done manually here instead.
 */
function groupDigitsFromEnd(digits: string): string {
    const groups: string[] = [];
    let end = digits.length;
    while (end > 0) {
        const start = Math.max(0, end - 3);
        groups.unshift(digits.slice(start, end));
        end = start;
    }
    return groups.join(' ');
}

/**
 * A phone number input with a country picker (flag + dial code). The
 * national number is displayed grouped in 3s from the end (see
 * `groupDigitsFromEnd`), regardless of country. Pasting/typing a full
 * international number ("+373 69113909") re-detects the country
 * automatically, switching the picker to match. The value read/written
 * through `ControlValueAccessor` is always E.164 (`+40757999876`) or null —
 * only the display is grouped.
 */
@Component({
    selector: 'app-phone-input',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [DropdownComponent],
    templateUrl: './phone-input.component.html',
    styleUrls: ['./phone-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PhoneInputComponent),
            multi: true,
        },
    ],
})
export class PhoneInputComponent implements ControlValueAccessor {
    @Input() placeholder = '';
    @Input() id?: string;

    private readonly _transloco = inject(TranslocoService);

    country: CountryCode = DEFAULT_PHONE_COUNTRY;
    nationalInput = '';
    disabled = false;

    private _onChange: (value: string | null) => void = () => {};
    private _onTouched: () => void = () => {};

    get countryOptions(): DropdownOption[] {
        return PHONE_COUNTRIES.map(code => ({
            value: code,
            label: `+${getCountryCallingCode(code)}`,
            flag: code,
        }));
    }

    get countryAriaLabel(): string {
        return phoneCountryName(this.country, this._transloco.getActiveLang());
    }

    writeValue(value: string | null): void {
        if (!value) {
            this.nationalInput = '';
            return;
        }
        const parsed = parsePhoneNumberFromString(value);
        if (parsed) {
            if (parsed.country) this.country = parsed.country;
            this.nationalInput = groupDigitsFromEnd(parsed.nationalNumber);
        } else {
            this.nationalInput = value;
        }
    }

    registerOnChange(fn: (value: string | null) => void): void { this._onChange = fn; }
    registerOnTouched(fn: () => void): void { this._onTouched = fn; }
    setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }

    onCountryChange(value: string | number): void {
        this.country = value as CountryCode;
        this._reformat(this.nationalInput);
    }

    onInput(event: Event): void {
        this._reformat((event.target as HTMLInputElement).value);
    }

    onBlur(): void {
        this._onTouched();
    }

    /** Re-derives the display text and the emitted E.164 value from raw typed/pasted input. */
    private _reformat(raw: string): void {
        if (!raw.trim()) {
            this.nationalInput = '';
            this._onChange(null);
            return;
        }

        // A pasted/typed international number ("+373 691 23456") switches the
        // country picker to match, rather than trying to format it under
        // whatever country was previously selected.
        if (raw.trim().startsWith('+')) {
            const parsed = parsePhoneNumberFromString(raw);
            if (parsed?.country) {
                this.country = parsed.country;
                this.nationalInput = groupDigitsFromEnd(parsed.nationalNumber);
                this._onChange(parsed.number);
                return;
            }
        }

        // AsYouType is still used to parse/validate (and to get a precise E.164 once
        // the number is complete) — its own formatted text is discarded in favor of
        // the fixed grouping above.
        const formatter = new AsYouType(this.country);
        formatter.input(raw);
        const number = formatter.getNumber();
        const digits = raw.replace(/\D/g, '').replace(/^0+/, '');
        this.nationalInput = groupDigitsFromEnd(digits);
        if (number) {
            this._onChange(number.number);
        } else {
            // Not yet a complete/valid number — still store a best-effort E.164 so an
            // incomplete-but-plausible value isn't silently dropped on save.
            this._onChange(digits ? `+${getCountryCallingCode(this.country)}${digits}` : null);
        }
    }
}
