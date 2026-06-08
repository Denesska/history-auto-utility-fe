import {
  AfterViewInit, Component, ElementRef, forwardRef,
  Input, NgZone, OnDestroy, ViewChild, ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonIcon, IonSpinner } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { listOutline, listCircleOutline, linkOutline, imageOutline } from 'ionicons/icons';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import { BlogService } from '@hau/autogenapi/services';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-tiptap-editor',
  templateUrl: './tiptap-editor.component.html',
  styleUrls: ['./tiptap-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [IonIcon, IonSpinner, TranslocoPipe],
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
  @ViewChild('imageInput') imageInput!: ElementRef<HTMLInputElement>;

  @Input() placeholder = 'Write your story here…';

  private editor?: Editor;
  private pendingValue: unknown = null;
  private _settingValue = false;

  isUploadingImage = false;

  private onChange: (val: unknown) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(
    private blogService: BlogService,
    private zone: NgZone,
    private readonly _transloco: TranslocoService,
  ) {
    addIcons({ listOutline, listCircleOutline, linkOutline, imageOutline });
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

  triggerImageUpload(): void {
    this.imageInput?.nativeElement.click();
  }

  onImageFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    (event.target as HTMLInputElement).value = '';

    this.isUploadingImage = true;
    this.blogService.uploadImage(file).subscribe({
      next: ({ url }) => {
        this.zone.run(() => {
          this.isUploadingImage = false;
          const fullUrl = url.startsWith('http') ? url : `${environment.imageBaseUrl}${url}`;
          this.editor?.chain().focus().setImage({ src: fullUrl, alt: '' }).run();
        });
      },
      error: () => {
        this.zone.run(() => { this.isUploadingImage = false; });
      },
    });
  }

  isActive(type: string, attrs?: Record<string, unknown>): boolean {
    return this.editor?.isActive(type, attrs) ?? false;
  }
}
