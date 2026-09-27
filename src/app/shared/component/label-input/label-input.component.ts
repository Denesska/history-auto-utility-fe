import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  ViewChild,
} from '@angular/core';
import { IonIcon } from '@ionic/angular';
import { TranslocoPipe } from '@jsverse/transloco';
import { addIcons } from 'ionicons';
import { addOutline, closeOutline, pricetagOutline } from 'ionicons/icons';

/** One row of the suggestion panel. `create` only exists in multiple mode. */
interface LabelInputOption {
  kind: 'suggestion' | 'create';
  label: string;
}

/** Rough max panel height (6 rows + padding), used to decide whether to flip the panel above the input. */
const PANEL_MAX_HEIGHT = 236;

@Component({
  selector: 'app-label-input',
  templateUrl: './label-input.component.html',
  styleUrls: ['./label-input.component.scss'],
  imports: [IonIcon, TranslocoPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelInputComponent implements OnChanges {
  private static _idCounter = 0;
  private readonly _uid = ++LabelInputComponent._idCounter;
  readonly inputId = `hau_label_input_${this._uid}`;
  readonly listboxId = `hau_label_list_${this._uid}`;

  /** Current labels (multiple mode). */
  @Input() labels: string[] = [];
  /** Every label that already exists, most-used first. */
  @Input() suggestions: string[] = [];
  /** Optional usage count per label, shown right-aligned in the panel. */
  @Input() counts?: Record<string, number>;
  /** Already-translated placeholder. */
  @Input() placeholder = '';
  /** true: edit a list of labels (chips + input). false: pick one existing label (emits `picked`). */
  @Input() multiple = true;
  /** Chips only — no input, no remove buttons. */
  @Input() readonly = false;
  @Input() maxLabels = 20;
  @Input() maxLength = 40;
  @Input() ariaLabel = '';

  @Output() readonly labelsChange = new EventEmitter<string[]>();
  @Output() readonly picked = new EventEmitter<string>();

  @ViewChild('inputEl') private _inputEl?: ElementRef<HTMLInputElement>;

  text = '';
  open = false;
  dropUp = false;
  activeIndex = -1;
  options: LabelInputOption[] = [];

  constructor(
    private readonly _el: ElementRef<HTMLElement>,
    private readonly _cdr: ChangeDetectorRef,
  ) {
    addIcons({ addOutline, closeOutline, pricetagOutline });
  }

  get isFull(): boolean {
    return this.multiple && this.labels.length >= this.maxLabels;
  }

  get showInput(): boolean {
    return !this.readonly && !this.isFull;
  }

  /** Single mode only: the user typed something that matches no label. */
  get showNoMatches(): boolean {
    return (
      !this.multiple && this.open && !!this._query && this.options.length === 0
    );
  }

  get panelVisible(): boolean {
    return this.open && (this.options.length > 0 || this.showNoMatches);
  }

  get activeDescendant(): string | null {
    return this.panelVisible && this.activeIndex >= 0
      ? this.optionId(this.activeIndex)
      : null;
  }

  optionId(i: number): string {
    return `hau_label_opt_${this._uid}_${i}`;
  }

  countFor(label: string): number | null {
    const c = this.counts?.[label];
    return c == null ? null : c;
  }

  ngOnChanges(): void {
    this._recompute();
  }

  // ── Template events ──────────────────────────────────────────────

  onWrapClick(event: MouseEvent): void {
    if (!this.showInput) return;
    const target = event.target as HTMLElement;
    if (target.closest('button') || target.closest('.li-panel')) return;
    this._inputEl?.nativeElement.focus();
  }

  onFocus(): void {
    this._openPanel();
  }

  onInput(event: Event): void {
    const el = event.target as HTMLInputElement;
    let value = el.value;

    if (this.multiple && value.includes(',')) {
      const parts = value.split(',');
      const rest = parts.pop() ?? '';
      this._addMany(parts);
      value = rest.trimStart();
    }
    if (value.length > this.maxLength) value = value.slice(0, this.maxLength);
    this._setText(value);
    this.activeIndex = -1;
    this._openPanel();
  }

  onPaste(event: ClipboardEvent): void {
    if (!this.multiple) return;
    const pasted = event.clipboardData?.getData('text') ?? '';
    if (!pasted.includes(',')) return;
    event.preventDefault();
    this._addMany((this.text + pasted).split(','));
    this._setText('');
    this.activeIndex = -1;
    this._recompute();
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.isComposing) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (!this.open) {
          this._openPanel();
          return;
        }
        this._moveActive(1);
        return;

      case 'ArrowUp':
        event.preventDefault();
        if (!this.open) {
          this._openPanel();
          return;
        }
        this._moveActive(-1);
        return;

      case 'Enter': {
        if (event.ctrlKey || event.metaKey) {
          // Host save shortcut — flush pending text first, don't swallow the key.
          if (this.multiple) this._commitText();
          return;
        }
        const opt =
          this.panelVisible && this.activeIndex >= 0
            ? this.options[this.activeIndex]
            : undefined;
        if (opt) {
          event.preventDefault();
          this.choose(opt);
        } else if (this.multiple) {
          if (this._query) {
            event.preventDefault();
            this._commitText();
          }
        } else if (this._query && this.options.length) {
          event.preventDefault();
          const exact = this.options.find(
            o => o.label.toLowerCase() === this._query,
          );
          this.choose(exact ?? this.options[0]);
        }
        return;
      }

      case 'Tab': {
        const opt =
          this.panelVisible && this.activeIndex >= 0
            ? this.options[this.activeIndex]
            : undefined;
        if (opt) {
          event.preventDefault();
          this.choose(opt);
        }
        return;
      }

      case 'Escape':
        if (this.panelVisible) {
          event.preventDefault();
          event.stopPropagation();
          this._closePanel();
        }
        return;

      case 'Backspace':
        if (this.multiple && this.text === '' && this.labels.length) {
          event.preventDefault();
          this.removeAt(this.labels.length - 1, false);
        }
        return;
    }
  }

  onBlur(): void {
    if (this.multiple) this._commitText();
    this._closePanel();
  }

  /** Keeps focus in the input while clicking a panel row. */
  onPanelMousedown(event: MouseEvent): void {
    event.preventDefault();
  }

  choose(opt: LabelInputOption): void {
    if (this.multiple) {
      this._addMany([opt.label]);
      this._setText('');
    } else {
      this.picked.emit(opt.label);
      this._setText('');
    }
    this.activeIndex = -1;
    this._recompute();
    if (!this.multiple) this._closePanel();
  }

  removeAt(index: number, refocus = true): void {
    if (this.readonly) return;
    this.labels = this.labels.filter((_, i) => i !== index);
    this.labelsChange.emit(this.labels);
    this._recompute();
    if (refocus) this._inputEl?.nativeElement.focus();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (this.open && !this._el.nativeElement.contains(event.target as Node)) {
      this._closePanel();
      this._cdr.markForCheck();
    }
  }

  // ── Internals ────────────────────────────────────────────────────

  private get _query(): string {
    return this.text.trim().toLowerCase();
  }

  private _clean(raw: string): string {
    return raw
      .replace(/,/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, this.maxLength);
  }

  private _commitText(): void {
    if (!this._clean(this.text)) return;
    this._addMany([this.text]);
    this._setText('');
    this.activeIndex = -1;
    this._recompute();
  }

  /** Adds labels (deduped case-insensitively, canonical spelling from suggestions), emits once. */
  private _addMany(raws: string[]): void {
    const next = [...this.labels];
    for (const raw of raws) {
      const clean = this._clean(raw);
      if (!clean || next.length >= this.maxLabels) continue;
      const lc = clean.toLowerCase();
      if (next.some(l => l.toLowerCase() === lc)) continue;
      next.push(this.suggestions.find(s => s.toLowerCase() === lc) ?? clean);
    }
    if (next.length !== this.labels.length) {
      this.labels = next;
      this.labelsChange.emit(next);
    }
  }

  private _setText(value: string): void {
    this.text = value;
    const el = this._inputEl?.nativeElement;
    if (el && el.value !== value) el.value = value;
  }

  private _recompute(): void {
    const q = this._query;
    const chosen = new Set(
      this.multiple ? this.labels.map(l => l.toLowerCase()) : [],
    );
    const available = this.suggestions.filter(
      s => !chosen.has(s.toLowerCase()),
    );

    let matches: string[];
    if (!q) {
      matches = available;
    } else {
      const prefix: string[] = [];
      const contains: string[] = [];
      for (const s of available) {
        const lc = s.toLowerCase();
        if (lc.startsWith(q)) prefix.push(s);
        else if (lc.includes(q)) contains.push(s);
      }
      matches = [...prefix, ...contains];
    }

    const options: LabelInputOption[] = matches.map(label => ({
      kind: 'suggestion',
      label,
    }));
    const clean = this._clean(this.text);
    if (
      this.multiple &&
      clean &&
      !chosen.has(clean.toLowerCase()) &&
      !this.suggestions.some(s => s.toLowerCase() === clean.toLowerCase())
    ) {
      options.push({ kind: 'create', label: clean });
    }

    this.options = options;
    if (this.activeIndex >= options.length)
      this.activeIndex = options.length - 1;
  }

  private _openPanel(): void {
    if (!this.showInput) return;
    this._recompute();
    if (!this.open) {
      this.open = true;
      this._updateDirection();
    }
  }

  private _closePanel(): void {
    this.open = false;
    this.activeIndex = -1;
  }

  private _moveActive(delta: number): void {
    const n = this.options.length;
    if (!n) return;
    this.activeIndex =
      this.activeIndex < 0
        ? delta > 0
          ? 0
          : n - 1
        : (this.activeIndex + delta + n) % n;
    const id = this.optionId(this.activeIndex);
    // The row already exists (only its class changes), so it can be scrolled right away.
    this._el.nativeElement
      .querySelector<HTMLElement>(`#${id}`)
      ?.scrollIntoView({ block: 'nearest' });
  }

  /** Flip the panel above the input when there isn't room below (e.g. the field sits at the bottom of a sheet). */
  private _updateDirection(): void {
    const rect = this._el.nativeElement.getBoundingClientRect();
    const viewportH = window.visualViewport?.height ?? window.innerHeight;
    const below = viewportH - rect.bottom;
    const above = rect.top;
    this.dropUp = below < PANEL_MAX_HEIGHT && above > below;
  }
}
