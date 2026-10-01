import { Component, forwardRef, inject, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';
// The "min" metadata build (~85KB vs ~155KB) — smaller lazy-chunk payload,
// same formatting/parsing/country-detection behavior for this component's needs.
import { AsYouType, CountryCode, getCountryCallingCode, parsePhoneNumberFromString } from 'libphonenumber-js/min';
import { DropdownComponent, DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';
import { DEFAULT_PHONE_COUNTRY, PHONE_COUNTRIES, phoneCountryName } from '@hau/shared/config/phone-country.config';

/**
 * A phone number input with a country picker (flag + dial code), formatted
 * live as the national number is typed (per-country grouping, via
 * libphonenumber-js — not a fixed "group by 3" rule, since that's wrong for
 * many countries). Pasting/typing a full international number ("+373 6912
 * 3456") re-detects the country automatically, switching the picker to match.
 * The value read/written through `ControlValueAccessor` is always E.164
 * (`+40757999876`) or null — only the display is locale-formatted.
 */
@Component({
    selector: 'app-phone-input',
    standalone: true,
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
            this.nationalInput = parsed.formatNational();
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
                this.nationalInput = parsed.formatNational();
                this._onChange(parsed.number);
                return;
            }
        }

        const formatter = new AsYouType(this.country);
        this.nationalInput = formatter.input(raw);
        const number = formatter.getNumber();
        if (number) {
            this._onChange(number.number);
        } else {
            // Not yet a complete/valid number — still store a best-effort E.164 so an
            // incomplete-but-plausible value isn't silently dropped on save.
            const digits = raw.replace(/\D/g, '').replace(/^0+/, '');
            this._onChange(digits ? `+${getCountryCallingCode(this.country)}${digits}` : null);
        }
    }
}
