import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  Output,
  ChangeDetectionStrategy,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedPosition } from '@angular/cdk/overlay';
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
  imports: [IonIcon, CountryFlagComponent, OverlayBackDirective, CdkConnectedOverlay, CdkOverlayOrigin],
  changeDetection: ChangeDetectionStrategy.Eager,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    },
  ],
})
export class DropdownComponent implements ControlValueAccessor, OnDestroy {
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

  @ViewChild('trigger') private readonly _trigger?: ElementRef<HTMLElement>;

  open = false;
  disabled = false;

  /**
   * The themed panel is rendered through the CDK overlay (a `position: fixed` pane in
   * `<body>`), not inside the component, so no `overflow` / `transform` ancestor (a sheet,
   * a scrolling card) can clip it. Opens below the trigger, flips above when there is no room.
   */
  get positions(): ConnectedPosition[] {
    const end = this.align === 'right';
    const originX = end ? 'end' : 'start';
    return [
      { originX, originY: 'bottom', overlayX: originX, overlayY: 'top', offsetY: 6 },
      { originX, originY: 'top', overlayX: originX, overlayY: 'bottom', offsetY: -6 },
    ];
  }

  get triggerWidth(): number {
    return this._trigger?.nativeElement.offsetWidth ?? 0;
  }

  // Scrolling anything but the panel itself would leave the fixed panel floating away from
  // its trigger, so close on it (capture phase: scroll events don't bubble).
  private readonly _onAnyScroll = (event: Event): void => {
    const target = event.target as Node | null;
    if (target instanceof Element && target.closest('.dd-panel')) return;
    this._setOpen(false);
  };

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
    const target = event.target as Element | null;
    if (this.open && !this._el.nativeElement.contains(target) && !target?.closest?.('.dd-panel')) {
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
    if (open === this.open) return;
    this.open = open;
    if (open) {
      document.addEventListener('scroll', this._onAnyScroll, true);
      window.addEventListener('resize', this._onResize);
    } else {
      this._removeListeners();
    }
  }

  private readonly _onResize = (): void => this._setOpen(false);

  private _removeListeners(): void {
    document.removeEventListener('scroll', this._onAnyScroll, true);
    window.removeEventListener('resize', this._onResize);
  }

  ngOnDestroy(): void {
    this._removeListeners();
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
