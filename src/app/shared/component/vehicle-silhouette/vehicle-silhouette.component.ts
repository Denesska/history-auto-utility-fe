import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { combineLatest, of, switchMap } from 'rxjs';
import { VehicleSilhouetteService } from './vehicle-silhouette.service';

/**
 * The server already sanitizes the SVG, but it is still checked here before
 * being trusted: it must be a bare `<svg …>` document with no script, event
 * handler attribute, foreign content, external reference or `javascript:` URL.
 * Anything else is dropped and the generic silhouette is shown instead.
 */
const UNSAFE_SVG = /<script|<foreignObject|<iframe|<object|<embed|<image|<use|<a[\s>]|\son[a-z]+\s*=|javascript:|data:text\/html|\b(?:xlink:)?href\s*=/i;

function isSafeSvg(svg: string): boolean {
  const s = svg.trim();
  return /^<svg[\s>]/i.test(s) && /<\/svg>\s*$/i.test(s) && !UNSAFE_SVG.test(s);
}

/**
 * Minimal schematic side-view of a vehicle, specific to the given make+model
 * when the backend has one, otherwise a bundled generic car. Drawn with
 * `currentColor`, so it takes its color from the parent (`color: …`) and
 * fills the width of its host.
 */
@Component({
  selector: 'app-vehicle-silhouette',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (html(); as markup) {
      <span class="vs-svg" aria-hidden="true" [innerHTML]="markup"></span>
    } @else {
      <svg class="vs-generic" viewBox="0 0 240 100" fill="currentColor" aria-hidden="true" focusable="false">
        <path fill-rule="evenodd" d="M12 70V60Q12 54 20 52L56 46L80 24Q84 20 90 20H150Q156 20 160 24L182 46L216 52Q228 54 228 62V70Q228 74 224 74H200A20 20 0 0 0 160 74H80A20 20 0 0 0 40 74H16Q12 74 12 70ZM62 46L84 27Q86 25 90 25H116V46ZM124 25H150Q153 25 155 27L172 46H124Z"/>
        <path fill-rule="evenodd" d="M45 74a15 15 0 1 0 30 0a15 15 0 1 0 -30 0ZM54 74a6 6 0 1 0 12 0a6 6 0 1 0 -12 0Z"/>
        <path fill-rule="evenodd" d="M165 74a15 15 0 1 0 30 0a15 15 0 1 0 -30 0ZM174 74a6 6 0 1 0 12 0a6 6 0 1 0 -12 0Z"/>
      </svg>
    }
  `,
  styles: `
    :host { display: block; line-height: 0; }
    .vs-svg { display: block; }
    .vs-svg ::ng-deep svg, .vs-generic { display: block; width: 100%; height: auto; }
  `,
})
export class VehicleSilhouetteComponent {
  readonly make = input<string | null | undefined>(null);
  readonly model = input<string | null | undefined>(null);

  private readonly _service = inject(VehicleSilhouetteService);
  private readonly _sanitizer = inject(DomSanitizer);

  private readonly _svg = toSignal(
    combineLatest([toObservable(this.make), toObservable(this.model)]).pipe(
      switchMap(([make, model]) => (make && model ? this._service.get(make, model) : of(null))),
    ),
    { initialValue: null },
  );

  protected readonly html = computed<SafeHtml | null>(() => {
    const svg = this._svg();
    return svg && isSafeSvg(svg) ? this._sanitizer.bypassSecurityTrustHtml(svg) : null;
  });
}
