import { Component, Input } from '@angular/core';
import { DocumentDto } from '@hau/autogenapi/models';
import { IonCard, IonCardContent } from '@ionic/angular/standalone';
import { TranslocoPipe } from '@ngneat/transloco';

@Component({
    selector: 'app-document-list-item',
    templateUrl: 'document-list-item.component.html',
    styleUrls: ['./document-list-item.component.scss'],
    imports: [IonCardContent, IonCard, TranslocoPipe]
})
export class DocumentListItemComponent {
  @Input({ required: true }) document!: DocumentDto;
}