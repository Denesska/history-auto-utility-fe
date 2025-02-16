import { Component, Input } from '@angular/core';
import { DocumentDto } from '@hau/autogenapi/models';
import { IonCard, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-document-list-item',
  templateUrl: 'document-list-item.component.html',
  styleUrls: ['./document-list-item.component.scss'],
  imports: [IonCardContent, IonCard],
  standalone: true,
})
export class DocumentListItemComponent {
  @Input({ required: true }) document!: DocumentDto;
}
