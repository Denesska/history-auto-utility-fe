import { Pipe, PipeTransform, inject } from '@angular/core';
import { formatDate } from '@angular/common';
import { TranslocoService } from '@jsverse/transloco';
import { angularLocale } from '../utils/locale.util';

/**
 * Drop-in replacement for `| date` that follows the active UI language
 * (`value | localDate:'d MMM y'`). Impure so it re-renders on language change.
 */
@Pipe({
  name: 'localDate',
  standalone: true,
  pure: false,
})
export class LocalDatePipe implements PipeTransform {
  private readonly _transloco = inject(TranslocoService);

  transform(value: Date | string | number | null | undefined, format = 'mediumDate'): string | null {
    if (value == null || value === '') return null;
    try {
      return formatDate(value, format, angularLocale(this._transloco.getActiveLang()));
    } catch {
      return null;
    }
  }
}
