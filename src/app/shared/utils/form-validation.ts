import { ElementRef } from '@angular/core';
import { AbstractControl, NgForm, FormGroupDirective } from '@angular/forms';

/**
 * Call from every Save/Submit handler of a form built with `<app-form-field>`.
 *
 * If the form is invalid it marks every control touched (so each `<app-form-field>`
 * shows its red state + message), then on the next tick scrolls the first invalid
 * field to the centre of the viewport and focuses its first input.
 *
 * ```ts
 * save(): void {
 *   if (!revealInvalidFields(this.form, this._elRef)) return;
 *   ...
 * }
 * ```
 *
 * @param form    FormGroup/FormArray/FormControl, or an NgForm / FormGroupDirective (template-driven).
 *                `null` when the form has no controls at all (only `extraInvalid` manual-state fields).
 * @param host    Element (or ElementRef) containing the fields — the component host or the `<form>`.
 * @param opts.extraInvalid  For fields not backed by a control (manual `[invalid]`): return true when
 *                           some of them are invalid so the form is treated as invalid; the scroll
 *                           still targets the first `.hau-field--error` once those fields render.
 * @returns true when the form is VALID (safe to continue saving).
 */
export function revealInvalidFields(
  form: AbstractControl | NgForm | FormGroupDirective | null,
  host: HTMLElement | ElementRef<HTMLElement>,
  opts: { extraInvalid?: () => boolean } = {},
): boolean {
  const control: AbstractControl | null = !form ? null : 'control' in form ? form.control : form;
  const extra = opts.extraInvalid?.() ?? false;
  if ((!control || control.valid) && !extra) return true;

  control?.markAllAsTouched();
  const root = host instanceof ElementRef ? host.nativeElement : host;
  // Wait for the error styling to render, then bring the first invalid field into view.
  setTimeout(() => {
    const first = root.querySelector<HTMLElement>('.hau-field--error');
    if (!first) return;
    first.scrollIntoView({ behavior: 'smooth', block: 'center' });
    first
      .querySelector<HTMLElement>('input, textarea, select, button')
      ?.focus({ preventScroll: true });
  });
  return false;
}
