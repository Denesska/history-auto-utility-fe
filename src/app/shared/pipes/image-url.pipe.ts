import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';

@Pipe({
  name: 'imageUrl',
  standalone: true
})
export class ImageUrlPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) {
      return 'assets/icon/placeholder.png';
    }
    
    if (value.startsWith('http')) {
      return value;
    }
    
    return `${environment.imageBaseUrl}${value}`;
  }
} 