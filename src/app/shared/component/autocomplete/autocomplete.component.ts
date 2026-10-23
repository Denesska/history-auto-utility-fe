import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedPosition } from '@angular/cdk/overlay';
import { OverlayBackDirective } from '@hau/core/navigation/overlay-back.directive';
import { FormsModule } from '@angular/forms';
import { IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { addOutline, closeCircleOutline } from 'ionicons/icons';
import { DropdownOption } from '@hau/shared/component/dropdown/dropdown.component';

const fold = (s: string): string =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

/**
 * Type-to-search single-select. Same panel look as `<app-dropdown>` (it is the searchable
 * sibling — use `<app-dropdown>` for short fixed lists). With `allowCreate`, a typed name
 * with no exact match offers a "create" row that emits `create` with the typed text.
 */
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  imports: [FormsModule, IonIcon, CdkConnectedOverlay, CdkOverlayOrigin, OverlayBackDirective],
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class AutocompleteComponent implements OnChanges, OnDestroy {
  @Input() options: DropdownOption[] = [];
  @Input() value: string | number | null = null;
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() allowCreate = false;
  /** Already-translated prefix of the create row, e.g. "Add" -> `Add "Auto Plus"`. */
  @Input() createLabel = '';
  @Input() ariaLabel = '';
  @Output() valueChange = new EventEmitter<string | number | null>();
  @Output() create = new EventEmitter<string>();

  @ViewChild(CdkConnectedOverlay) private readonly _overlay?: CdkConnectedOverlay;
  @ViewChild('field', { read: ElementRef }) private readonly _field?: ElementRef<HTMLElement>;

  open = false;
  text = '';

  /**
   * The panel renders through the CDK overlay (a `position: fixed` pane in `<body>`) so a
   * card / sheet with `overflow` or `transform` can't clip it. Spans the field plus the
   * 12px card padding on each side; flips above when there is no room below.
   */
  readonly positions: ConnectedPosition[] = [
    { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetX: -12, offsetY: 10 },
    { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom', offsetX: -12, offsetY: -10 },
  ];

  get panelWidth(): number {
    return (this._field?.nativeElement.offsetWidth ?? 0) + 24;
  }

  // Keep the fixed panel glued to the field while any ancestor scrolls (the keyboard opening
  // on mobile scrolls too, so this repositions rather than closing).
  private readonly _onAnyScroll = (event: Event): void => {
    const target = event.target as Node | null;
    if (target instanceof Element && target.closest('.ac-panel')) return;
    this._overlay?.overlayRef?.updatePosition();
  };

  constructor() {
    addIcons({ addOutline, closeCircleOutline });
  }

  ngOnChanges(): void {
    if (!this.open) this.text = this._labelOf(this.value);
  }

  get filtered(): DropdownOption[] {
    const q = fold(this.text);
    // Showing the selected label as text isn't a search: list everything then.
    if (!q || this.text === this._labelOf(this.value)) return this.options;
    return this.options.filter(o => fold(o.label).includes(q));
  }

  get canCreate(): boolean {
    const q = this.text.trim();
    return (
      this.allowCreate &&
      !!q &&
      !this.options.some(o => fold(o.label) === fold(q))
    );
  }

  onFocus(): void {
    if (this.disabled) return;
    this._setOpen(true);
  }

  onInput(): void {
    this._setOpen(true);
  }

  onBlur(): void {
    this._setOpen(false);
    this.text = this._labelOf(this.value);
  }

  pick(opt: DropdownOption): void {
    this._setOpen(false);
    this.text = opt.label;
    this.valueChange.emit(opt.value);
  }

  clear(): void {
    this.text = '';
    this.valueChange.emit(null);
  }

  createFromText(): void {
    const name = this.text.trim();
    this._setOpen(false);
    if (name) this.create.emit(name);
  }

  /** Also called from the template (`appOverlayBack` on the panel), hence not `private`. */
  _setOpen(open: boolean): void {
    if (open === this.open) return;
    this.open = open;
    if (open) document.addEventListener('scroll', this._onAnyScroll, true);
    else document.removeEventListener('scroll', this._onAnyScroll, true);
  }

  ngOnDestroy(): void {
    document.removeEventListener('scroll', this._onAnyScroll, true);
  }

  private _labelOf(value: string | number | null): string {
    if (value == null || value === '') return '';
    return this.options.find(o => o.value === value)?.label ?? '';
  }
}
