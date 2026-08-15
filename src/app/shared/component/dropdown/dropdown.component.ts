import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronDownOutline } from 'ionicons/icons';

export interface DropdownOption {
  value: string | number;
  label: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  imports: [IonIcon],
})
export class DropdownComponent {
  @Input({ required: true }) options: DropdownOption[] = [];
  @Input() value: string | number | null = null;
  @Input() placeholder = '';
  @Input() leadingIcon?: string;
  @Input() align: 'left' | 'right' = 'left';
  @Input() fullWidth = false;
  @Input() ariaLabel = '';
  @Output() readonly valueChange = new EventEmitter<string | number>();

  open = false;

  constructor(private readonly _el: ElementRef) {
    addIcons({ chevronDownOutline });
  }

  get selectedLabel(): string {
    return this.options.find(o => o.value === this.value)?.label ?? this.placeholder;
  }

  toggle(): void {
    this.open = !this.open;
  }

  select(option: DropdownOption): void {
    this.value = option.value;
    this.valueChange.emit(option.value);
    this.open = false;
  }

  onNativeChange(event: Event): void {
    const raw = (event.target as HTMLSelectElement).value;
    const opt = this.options.find(o => String(o.value) === raw);
    if (opt) this.select(opt);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (this.open && !this._el.nativeElement.contains(event.target)) {
      this.open = false;
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.open = false;
  }
}
