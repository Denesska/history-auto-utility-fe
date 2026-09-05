import {
  AfterViewInit, Component, ElementRef, forwardRef,
  Input, NgZone, OnDestroy, ViewChild, ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { listOutline, listCircleOutline, linkOutline } from 'ionicons/icons';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-tiptap-editor',
  templateUrl: './tiptap-editor.component.html',
  styleUrls: ['./tiptap-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [IonIcon, TranslocoPipe],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TiptapEditorComponent),
      multi: true,
    },
  ],
})
export class TiptapEditorComponent implements AfterViewInit, OnDestroy, ControlValueAccessor {
  @ViewChild('editorContainer') editorContainer!: ElementRef<HTMLDivElement>;

  @Input() placeholder = 'Write your story here…';

  private editor?: Editor;
  private pendingValue: unknown = null;
  private _settingValue = false;

  isDraggingPhotoOver = false;

  private onChange: (val: unknown) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(
    private zone: NgZone,
    private readonly _transloco: TranslocoService,
  ) {
    addIcons({ listOutline, listCircleOutline, linkOutline });
  }

  ngAfterViewInit(): void {
    this.editor = new Editor({
      element: this.editorContainer.nativeElement,
      extensions: [
        StarterKit,
        Image.configure({ allowBase64: false }),
        Link.configure({ openOnClick: false }),
        Placeholder.configure({ placeholder: this.placeholder }),
      ],
      onUpdate: ({ editor }) => {
        if (this._settingValue) return;
        this.zone.run(() => this.onChange(editor.getJSON()));
      },
      onBlur: () => {
        this.zone.run(() => this.onTouched());
      },
    });

    if (this.pendingValue) {
      this._settingValue = true;
      this.editor.commands.setContent(this.pendingValue as any);
      this._settingValue = false;
      this.pendingValue = null;
    }
  }

  ngOnDestroy(): void {
    this.editor?.destroy();
  }

  // ── ControlValueAccessor ────────────────────────────────────────────
  writeValue(value: unknown): void {
    if (this.editor) {
      this._settingValue = true;
      try {
        if (value) {
          this.editor.commands.setContent(value as any);
        } else {
          this.editor.commands.clearContent();
        }
      } finally {
        this._settingValue = false;
      }
    } else {
      this.pendingValue = value;
    }
  }

  registerOnChange(fn: (val: unknown) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.editor?.setEditable(!isDisabled); }

  // ── Toolbar actions ─────────────────────────────────────────────────
  toggleBold(): void { this.editor?.chain().focus().toggleBold().run(); }
  toggleItalic(): void { this.editor?.chain().focus().toggleItalic().run(); }
  setHeading(level: 2 | 3): void { this.editor?.chain().focus().toggleHeading({ level }).run(); }
  toggleBulletList(): void { this.editor?.chain().focus().toggleBulletList().run(); }
  toggleOrderedList(): void { this.editor?.chain().focus().toggleOrderedList().run(); }
  toggleBlockquote(): void { this.editor?.chain().focus().toggleBlockquote().run(); }

  setLink(): void {
    const prev = this.editor?.getAttributes('link')['href'] as string | undefined;
    const url = window.prompt(this._transloco.translate('blog.editor.linkPrompt'), prev ?? '');
    if (url === null) return;
    if (url === '') {
      this.editor?.chain().focus().extendMarkRange('link').unsetLink().run();
    } else {
      this.editor?.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    }
  }

  // ── Drop a photo from app-photo-picker into the content ──────────────
  onPhotoDragOver(event: DragEvent): void {
    if (!event.dataTransfer?.types.includes('text/uri-list')) return;
    event.preventDefault();
    this.isDraggingPhotoOver = true;
  }

  onPhotoDragLeave(): void {
    this.isDraggingPhotoOver = false;
  }

  onPhotoDrop(event: DragEvent): void {
    const url = event.dataTransfer?.getData('text/uri-list');
    this.isDraggingPhotoOver = false;
    if (!url || !this.editor) return;
    event.preventDefault();

    const coords = { left: event.clientX, top: event.clientY };
    const pos = this.editor.view.posAtCoords(coords)?.pos ?? this.editor.state.selection.to;
    this.editor.chain().focus().insertContentAt(pos, { type: 'image', attrs: { src: url, alt: '' } }).run();
  }

  isActive(type: string, attrs?: Record<string, unknown>): boolean {
    return this.editor?.isActive(type, attrs) ?? false;
  }
}
