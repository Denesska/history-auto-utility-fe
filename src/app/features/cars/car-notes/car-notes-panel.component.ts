import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDragHandle, CdkDragPlaceholder, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarNoteDto } from '@hau/autogenapi/models';
import { NOTE_COLORS, NoteColor } from '@hau/features/cars/state/car-notes/car-notes.constants';
import { CarNotesFacade } from '@hau/features/cars/state/car-notes/car-notes.facade';
import { CarNoteWritePayload } from '@hau/features/cars/state/car-notes/car-notes.actions';
import { HeaderActionsService } from '@hau/core/header-actions.service';
import { LabelInputComponent } from '@hau/shared/component/label-input/label-input.component';
import { IonContent, IonFab, IonFabButton, IonIcon, IonSpinner, ToastController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  addOutline,
  bulbOutline,
  checkboxOutline,
  checkmarkOutline,
  closeCircle,
  closeOutline,
  colorPaletteOutline,
  copyOutline,
  documentTextOutline,
  pricetagOutline,
  searchOutline,
  reorderThreeOutline,
  squareOutline,
  swapVerticalOutline,
  trashOutline,
} from 'ionicons/icons';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { take } from 'rxjs';

// `key` only exists in the editor, so @for can track rows while their text
// is being typed; it never reaches the API.
interface EditorItem {
  key: number;
  text: string;
  checked: boolean;
}

interface NoteForm {
  title: string;
  content: string;
  labels: string[];
  is_checklist: boolean;
  checked_in_place: boolean;
  items: EditorItem[];
  color: NoteColor | null;
}

// Masonry column sizing. Column count is derived from the board's measured
// width, so the grid fills whatever screen it's on (2 columns on a phone,
// 8+ on a wide monitor) instead of sitting in a fixed-width strip.
const MIN_COL_WIDTH_NARROW = 150;
const MIN_COL_WIDTH_WIDE = 240;
const WIDE_BREAKPOINT = 600;
const COL_GAP = 12;
// Must match the line clamp on `.cnp-card-content` in the stylesheet.
const CONTENT_LINE_CLAMP = 12;
// How many checklist rows a card shows before "+ N more".
const CARD_ITEM_LIMIT = 10;
// Label chips shown above the board; the rest are reached through search.
const TOP_LABEL_COUNT = 4;
const UNDO_WINDOW_MS = 5000;

@UntilDestroy()
@Component({
  selector: 'app-car-notes-panel',
  templateUrl: './car-notes-panel.component.html',
  styleUrls: ['./car-notes-panel.component.scss'],
  // Sizes this host as a flex child of the routed page's `.ion-page`, so the
  // <ion-content> inside it gets a height — see `.hau-page-panel` in global.scss.
  host: { class: 'hau-page-panel' },
  imports: [CdkDrag, CdkDragHandle, CdkDragPlaceholder, CdkDropList, FormsModule, NgTemplateOutlet, IonContent, IonFab, IonFabButton, IonIcon, IonSpinner, LabelInputComponent, TranslocoPipe],
})
export class CarNotesPanelComponent implements OnChanges, AfterViewInit, OnDestroy {
  // Action buttons for the shared shell header. This component isn't the routed
  // one (car-notes-page is), so the routed parent re-registers them on every
  // ionViewWillEnter and clears them on ionViewWillLeave — see syncHeaderActions().
  @ViewChild('headerStartActionsTpl') readonly headerStartActionsTpl!: TemplateRef<unknown>;
  @ViewChild('headerActionsTpl') readonly headerActionsTpl!: TemplateRef<unknown>;
  @ViewChild('board') private boardRef?: ElementRef<HTMLElement>;
  @ViewChild('editor') private editorRef?: ElementRef<HTMLElement>;
  @ViewChild('titleInput') private titleInputRef?: ElementRef<HTMLInputElement>;
  @ViewChild('contentInput') private contentInputRef?: ElementRef<HTMLTextAreaElement>;

  @Input() carId!: number;
  @Input() carName!: string;
  @Input() canEdit = false;

  readonly colors = NOTE_COLORS;

  notes: CarNoteDto[] = [];
  loading = false;
  saving = false;
  error: string | null = null;

  search = '';
  activeLabel: string | null = null;

  // What the board actually renders: the filtered notes, dealt into columns.
  columns: CarNoteDto[][] = [];
  private colCount = 2;
  private colWidth = 200;
  private resizeObserver?: ResizeObserver;

  formOpen = false;
  paletteOpen = false;
  editingNote: CarNoteDto | null = null;
  form: NoteForm = this.emptyForm();
  private originalSnapshot = '';
  private nextItemKey = 1;
  copiedNoteId: number | null = null;

  // Deleted notes stay hidden (but not yet deleted) while their undo toast is up.
  private pendingDeleteIds = new Set<number>();

  constructor(
    private readonly _facade: CarNotesFacade,
    private readonly _transloco: TranslocoService,
    private readonly _toastCtrl: ToastController,
    private readonly _headerActions: HeaderActionsService,
    private readonly _zone: NgZone,
  ) {
    addIcons({
      addOutline, bulbOutline, checkboxOutline, checkmarkOutline, closeCircle, closeOutline,
      colorPaletteOutline, copyOutline, documentTextOutline, pricetagOutline, searchOutline,
      reorderThreeOutline, squareOutline, swapVerticalOutline, trashOutline,
    });
  }

  ngOnChanges(): void {
    if (this.carId) this.loadNotes();
  }

  ngAfterViewInit(): void {
    this.syncHeaderActions();
    this.observeBoard();
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }

  // The end slot swaps between "add" (list) and "save" (editor) inside one
  // template, so it only ever needs setting once. The start slot has to be set
  // and cleared as the editor opens/closes: while it holds a template the shell
  // renders it *instead of* the back button, and the list view still wants the
  // back button. Called from the routed parent on entry, and from every place
  // that flips `formOpen`.
  syncHeaderActions(): void {
    this._headerActions.set(this.headerActionsTpl);
    this._headerActions.setStart(this.formOpen ? this.headerStartActionsTpl : null);
  }

  loadNotes(): void {
    this.loading = true;
    this._facade.notesFor(this.carId).pipe(untilDestroyed(this)).subscribe(notes => {
      this.notes = notes;
      this.loading = false;
      if (this.activeLabel && !notes.some(n => n.labels.includes(this.activeLabel!))) this.activeLabel = null;
      this.layout();
    });
    this._facade.loadNotes(this.carId);
  }

  // ── Labels ──────────────────────────────────────────────────────

  get visibleNotes(): CarNoteDto[] {
    return this.notes.filter(n => !this.pendingDeleteIds.has(n.id));
  }

  // Label stats are recomputed in layout() rather than exposed as getters:
  // <app-label-input> is OnPush and gets these as inputs, so they must keep
  // the same array reference between change-detection passes.
  allLabels: string[] = [];
  labelCounts: Record<string, number> = {};
  // The chips row: the few most-used labels, plus the active one if it was
  // picked through the search and isn't among them.
  topLabels: string[] = [];
  otherLabels: string[] = [];

  private computeLabels(): void {
    const counts = new Map<string, number>();
    for (const note of this.visibleNotes) {
      for (const label of note.labels) counts.set(label, (counts.get(label) ?? 0) + 1);
    }
    // Most-used first, ties alphabetical.
    this.allLabels = [...counts.keys()].sort((a, b) => counts.get(b)! - counts.get(a)! || a.localeCompare(b));
    this.labelCounts = Object.fromEntries(counts);
    const top = this.allLabels.slice(0, TOP_LABEL_COUNT);
    if (this.activeLabel && !top.includes(this.activeLabel)) top.push(this.activeLabel);
    this.topLabels = top;
    this.otherLabels = this.allLabels.slice(TOP_LABEL_COUNT).filter(l => l !== this.activeLabel);
  }

  get hasNotes(): boolean {
    return this.visibleNotes.length > 0;
  }

  get isFiltering(): boolean {
    return !!this.search.trim() || this.activeLabel !== null;
  }

  setLabel(label: string | null): void {
    this.activeLabel = this.activeLabel === label ? null : label;
    this.layout();
  }

  onSearchChange(): void {
    this.layout();
  }

  clearSearch(): void {
    this.search = '';
    this.layout();
  }

  // ── Layout ──────────────────────────────────────────────────────

  // Newest-edited first, like Keep. Notes are dealt into the currently
  // shortest column (by estimated height), so the columns come out roughly
  // even and reading order still runs left→right, top→bottom.
  layout(): void {
    this.computeLabels();
    const q = this.search.trim().toLocaleLowerCase();
    const filtered = this.visibleNotes
      .filter(n => this.activeLabel === null || n.labels.includes(this.activeLabel))
      .filter(n => !q || this.searchText(n).includes(q))
      .sort((a, b) => b.updated_at.localeCompare(a.updated_at));

    const cols: CarNoteDto[][] = Array.from({ length: this.colCount }, () => []);
    const heights = new Array(this.colCount).fill(0);
    for (const note of filtered) {
      const target = heights.indexOf(Math.min(...heights));
      cols[target].push(note);
      heights[target] += this.estimateHeight(note);
    }
    this.columns = cols;
  }

  private searchText(note: CarNoteDto): string {
    const items = note.is_checklist ? note.items.map(i => i.text).join('\n') : note.content;
    return `${note.title}\n${items}\n${note.labels.join('\n')}`.toLocaleLowerCase();
  }

  private estimateHeight(note: CarNoteDto): number {
    const charsPerLine = Math.max(10, Math.floor((this.colWidth - 32) / 7.5));
    const linesOf = (text: string) =>
      text.split('\n').reduce((sum, line) => sum + Math.max(1, Math.ceil(line.length / charsPerLine)), 0);
    const titleLines = note.title ? linesOf(note.title) : 0;
    const bodyHeight = note.is_checklist
      ? Math.min(CARD_ITEM_LIMIT, note.items.length) * 28 + (note.items.length > CARD_ITEM_LIMIT ? 22 : 0)
      : (note.content ? Math.min(CONTENT_LINE_CLAMP, linesOf(note.content)) : 0) * 21;
    const labelsHeight = note.labels.length ? 32 : 0;
    return 28 + titleLines * 23 + bodyHeight + labelsHeight + COL_GAP;
  }

  private observeBoard(): void {
    if (typeof ResizeObserver === 'undefined') return;
    this.resizeObserver = new ResizeObserver(entries => {
      const width = entries[0]?.contentRect.width ?? 0;
      if (!width) return;
      const min = width < WIDE_BREAKPOINT ? MIN_COL_WIDTH_NARROW : MIN_COL_WIDTH_WIDE;
      const count = Math.max(2, Math.floor((width + COL_GAP) / (min + COL_GAP)));
      this.colWidth = (width - COL_GAP * (count - 1)) / count;
      if (count !== this.colCount || this.columns.length !== count) {
        this._zone.run(() => {
          this.colCount = count;
          this.layout();
        });
      }
    });
    // `#board` wraps the list in every state (loading/empty/filled), so it
    // exists from the first render and never gets re-created.
    if (this.boardRef) this.resizeObserver.observe(this.boardRef.nativeElement);
  }

  // ── Checklist on the board ──────────────────────────────────────

  // Unchecked first, then the ticked ones (struck through) — or, when the note
  // keeps ticked items in place, simply in order. Capped per card.
  cardItems(note: CarNoteDto): { item: { text: string; checked: boolean }; index: number }[] {
    const rows = note.items.map((item, index) => ({ item, index }));
    const ordered = note.checked_in_place
      ? rows
      : [...rows.filter(r => !r.item.checked), ...rows.filter(r => r.item.checked)];
    return ordered.slice(0, CARD_ITEM_LIMIT);
  }

  hiddenItemCount(note: CarNoteDto): number {
    return Math.max(0, note.items.length - CARD_ITEM_LIMIT);
  }

  // Ticking a box on the board saves straight away (optimistic), without
  // opening the note.
  toggleCardItem(note: CarNoteDto, index: number, event: Event): void {
    event.stopPropagation();
    if (!this.canEdit) return;
    const items = note.items.map((it, i) => (i === index ? { ...it, checked: !it.checked } : it));
    this._facade.patchNote(this.carId, note.id, { items }).pipe(take(1)).subscribe({ error: () => {} });
  }

  // ── Editor ──────────────────────────────────────────────────────

  private emptyForm(): NoteForm {
    return { title: '', content: '', labels: [], is_checklist: false, checked_in_place: false, items: [], color: null };
  }

  openAdd(checklist = false): void {
    this.editingNote = null;
    this.form = {
      ...this.emptyForm(),
      labels: this.activeLabel ? [this.activeLabel] : [],
      is_checklist: checklist,
    };
    this.openEditor('title');
  }

  openEdit(note: CarNoteDto): void {
    this.editingNote = note;
    this.form = {
      title: note.title,
      content: note.content,
      labels: [...note.labels],
      is_checklist: note.is_checklist,
      checked_in_place: note.checked_in_place,
      items: note.items.map(i => ({ key: this.nextItemKey++, text: i.text, checked: i.checked })),
      color: (note.color as NoteColor | null) ?? null,
    };
    this.openEditor(null);
  }

  private openEditor(focus: 'title' | null): void {
    this.error = null;
    this.paletteOpen = false;
    this.formOpen = true;
    this.originalSnapshot = this.snapshot();
    this.syncHeaderActions();
    setTimeout(() => {
      this.autosize();
      // Don't pop the on-screen keyboard just because a note was opened to be read.
      const finePointer = window.matchMedia?.('(pointer: fine)').matches;
      if (!this.canEdit) return;
      if (focus === 'title') this.titleInputRef?.nativeElement.focus();
      else if (finePointer && !this.form.is_checklist) {
        const el = this.contentInputRef?.nativeElement;
        el?.focus();
        el?.setSelectionRange(el.value.length, el.value.length);
      }
    });
  }

  private payload(): CarNoteWritePayload {
    return {
      title: this.form.title.trim(),
      content: this.form.is_checklist ? '' : this.form.content.trim(),
      labels: this.form.labels,
      is_checklist: this.form.is_checklist,
      checked_in_place: this.form.checked_in_place,
      items: this.form.is_checklist
        ? this.form.items.filter(i => i.text.trim()).map(i => ({ text: i.text.trim(), checked: i.checked }))
        : [],
      color: this.form.color,
    };
  }

  private snapshot(): string {
    return JSON.stringify(this.payload());
  }

  get isDirty(): boolean {
    return this.snapshot() !== this.originalSnapshot;
  }

  get isEmpty(): boolean {
    const p = this.payload();
    return !p.title && !p.content && p.items.length === 0;
  }

  // Keep-style: leaving the editor keeps what you wrote. Closing a note you
  // changed saves it, closing an untouched one just closes, and a brand-new
  // note with nothing in it is simply dropped. There's no separate "discard".
  closeEditor(): void {
    if (this.saving) return;
    if (!this.canEdit || !this.isDirty || this.isEmpty) {
      this.dismissEditor();
      return;
    }
    this.save();
  }

  private dismissEditor(): void {
    this.formOpen = false;
    this.paletteOpen = false;
    this.editingNote = null;
    this.error = null;
    this.syncHeaderActions();
  }

  save(): void {
    if (this.isEmpty) return;
    this.saving = true;
    this.error = null;
    const dto = this.payload();

    const save$ = this.editingNote
      ? this._facade.updateNote(this.carId, this.editingNote.id, dto)
      : this._facade.createNote(this.carId, dto);

    save$.pipe(take(1)).subscribe({
      next: () => {
        this.saving = false;
        this.dismissEditor();
      },
      error: (err) => {
        this.error = err?.error?.message ?? this._transloco.translate('cars.notes.form.error');
        this.saving = false;
      },
    });
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (!this.formOpen) return;
    if (event.key === 'Escape' && this.paletteOpen) {
      this.paletteOpen = false;
      return;
    }
    if (event.key === 'Escape' || (event.key === 'Enter' && (event.ctrlKey || event.metaKey))) {
      event.preventDefault();
      this.closeEditor();
    }
  }

  onTitleEnter(event: Event): void {
    event.preventDefault();
    if (this.form.is_checklist) this.focusItem(this.firstEditableItem?.key);
    else this.contentInputRef?.nativeElement.focus();
  }

  // Grow the body field with its text (the editor scrolls as a whole instead
  // of the textarea getting its own inner scrollbar).
  autosize(): void {
    const el = this.contentInputRef?.nativeElement;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  }

  // ── Editor: checklist ───────────────────────────────────────────

  private get firstEditableItem(): EditorItem | undefined {
    return this.form.checked_in_place ? this.form.items[0] : this.uncheckedItems[0];
  }

  get uncheckedItems(): EditorItem[] {
    return this.form.items.filter(i => !i.checked);
  }

  get checkedItems(): EditorItem[] {
    return this.form.items.filter(i => i.checked);
  }

  // Text ⇄ checklist, the way Keep's "Show checkboxes" does it: each line
  // becomes an item, and back again.
  toggleChecklist(): void {
    if (this.form.is_checklist) {
      this.form.content = this.form.items.map(i => i.text).filter(t => t.trim()).join('\n');
      this.form.items = [];
      this.form.is_checklist = false;
      setTimeout(() => this.autosize());
    } else {
      this.form.items = this.form.content
        .split('\n')
        .map(t => t.trim())
        .filter(Boolean)
        .map(text => ({ key: this.nextItemKey++, text, checked: false }));
      this.form.content = '';
      this.form.is_checklist = true;
      setTimeout(() => this.focusNewItem());
    }
  }

  toggleItem(item: EditorItem): void {
    if (!this.canEdit) return;
    item.checked = !item.checked;
  }

  // Keep's trailing "+ List item" row: typing into it turns it into a real
  // item and moves the cursor there. Deliberately not ngModel-bound — clearing
  // a bound model back to '' in the same tick it was set from the view is
  // invisible to NgModel (its last model value was already ''), so the typed
  // first letter used to stay behind in this field.
  onNewItemInput(input: HTMLInputElement): void {
    const text = input.value;
    if (!text) return;
    input.value = '';
    const item: EditorItem = { key: this.nextItemKey++, text, checked: false };
    this.insertNewItem(item);
    this.focusItem(item.key, true);
  }

  toggleCheckedInPlace(): void {
    this.form.checked_in_place = !this.form.checked_in_place;
  }

  // Drag & drop. With ticked items in place there's one list, so the drop
  // index maps straight onto form.items. Otherwise each section is reordered
  // on its own and written back into the slots its items already occupied, so
  // the other section's items keep their positions (an item that gets
  // unticked later returns to where it was, like Keep).
  // (The section is passed by name rather than as cdkDropListData: the
  // section getters build a new array on every check, which as an input
  // binding would trip NG0100 in dev mode.)
  onItemDrop(event: CdkDragDrop<unknown>, sectionName: 'all' | 'unchecked' | 'checked'): void {
    if (event.previousIndex === event.currentIndex) return;
    const section = sectionName === 'all' ? this.form.items
      : sectionName === 'unchecked' ? this.uncheckedItems : this.checkedItems;
    const reordered = [...section];
    moveItemInArray(reordered, event.previousIndex, event.currentIndex);
    if (sectionName === 'all') {
      this.form.items = reordered;
      return;
    }
    const slots = this.form.items.map((it, i) => (section.includes(it) ? i : -1)).filter(i => i >= 0);
    const next = [...this.form.items];
    slots.forEach((slot, k) => (next[slot] = reordered[k]));
    this.form.items = next;
  }

  // Enter splits off a new item right below; on an empty item it just moves on.
  onItemEnter(item: EditorItem, event: Event): void {
    event.preventDefault();
    if (!item.text.trim()) {
      this.focusNewItem();
      return;
    }
    const created: EditorItem = { key: this.nextItemKey++, text: '', checked: false };
    if (item.checked && !this.form.checked_in_place) this.insertNewItem(created);
    else this.form.items.splice(this.form.items.indexOf(item) + 1, 0, created);
    this.focusItem(created.key);
  }

  // Backspace on an empty item deletes it and jumps to the one above.
  onItemBackspace(item: EditorItem, event: Event): void {
    if (item.text) return;
    event.preventDefault();
    const siblings = this.form.checked_in_place
      ? this.form.items
      : item.checked ? this.checkedItems : this.uncheckedItems;
    const previous = siblings[siblings.indexOf(item) - 1];
    this.removeItem(item);
    if (previous) this.focusItem(previous.key, true);
    else this.titleInputRef?.nativeElement.focus();
  }

  removeItem(item: EditorItem): void {
    this.form.items = this.form.items.filter(i => i !== item);
  }

  // A new item goes at the end of the list — or, while ticked items sit in
  // their own section, at the end of the unticked ones.
  private insertNewItem(item: EditorItem): void {
    if (this.form.checked_in_place) {
      this.form.items.push(item);
      return;
    }
    const lastUnchecked = this.uncheckedItems.at(-1);
    const index = lastUnchecked ? this.form.items.indexOf(lastUnchecked) + 1 : 0;
    this.form.items.splice(index, 0, item);
  }

  private focusItem(key: number | null | undefined, atEnd = false): void {
    if (key == null) {
      this.focusNewItem();
      return;
    }
    setTimeout(() => {
      const el = this.editorRef?.nativeElement.querySelector<HTMLInputElement>(`[data-item-key="${key}"]`);
      if (!el) return;
      el.focus();
      if (atEnd) el.setSelectionRange(el.value.length, el.value.length);
    });
  }

  private focusNewItem(): void {
    setTimeout(() => this.editorRef?.nativeElement.querySelector<HTMLInputElement>('.cnp-item-new input')?.focus());
  }

  // ── Editor: color & labels ──────────────────────────────────────

  setColor(color: NoteColor | null): void {
    this.form.color = color;
  }

  colorName(color: NoteColor | null): string {
    return this._transloco.translate(`cars.notes.colors.${color ?? 'default'}`);
  }

  onLabelsChange(labels: string[]): void {
    this.form.labels = labels;
  }

  editedLabel(note: CarNoteDto): string {
    const date = new Date(note.updated_at);
    const lang = this._transloco.getActiveLang();
    const sameDay = date.toDateString() === new Date().toDateString();
    const formatted = sameDay
      ? date.toLocaleTimeString(lang, { hour: '2-digit', minute: '2-digit' })
      : date.toLocaleDateString(lang, {
          day: 'numeric',
          month: 'short',
          year: date.getFullYear() === new Date().getFullYear() ? undefined : 'numeric',
        });
    return this._transloco.translate('cars.notes.edited', { date: formatted });
  }

  // ── Per-note actions ────────────────────────────────────────────

  private copyText(note: CarNoteDto): string {
    return note.is_checklist ? note.items.map(i => i.text).join('\n') : note.content;
  }

  copyNote(note: CarNoteDto): void {
    this.copyToClipboard(note.id, this.copyText(note));
  }

  copyForm(): void {
    if (!this.editingNote) return;
    const p = this.payload();
    this.copyToClipboard(this.editingNote.id, p.is_checklist ? p.items.map(i => i.text).join('\n') : p.content);
  }

  private copyToClipboard(id: number, text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.copiedNoteId = id;
      setTimeout(() => {
        if (this.copiedNoteId === id) this.copiedNoteId = null;
      }, 1500);
    });
  }

  // Keep-style delete: the note disappears straight away and an undo toast
  // gives it back. The real DELETE only goes out once the toast is gone.
  async deleteWithUndo(note: CarNoteDto): Promise<void> {
    this.pendingDeleteIds.add(note.id);
    this.layout();
    let undone = false;

    const toast = await this._toastCtrl.create({
      message: this._transloco.translate('cars.notes.deleted'),
      duration: UNDO_WINDOW_MS,
      position: 'bottom',
      buttons: [{
        text: this._transloco.translate('cars.notes.undo'),
        role: 'cancel',
        handler: () => { undone = true; },
      }],
    });
    toast.onDidDismiss().then(() => {
      this.pendingDeleteIds.delete(note.id);
      if (undone) {
        this.layout();
        return;
      }
      this._facade.deleteNote(this.carId, note.id).pipe(take(1)).subscribe({
        // On failure the note simply reappears — the state still holds it.
        error: () => this.layout(),
      });
    });
    await toast.present();
  }
}
