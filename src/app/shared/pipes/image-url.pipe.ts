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

    if (value.startsWith('data:')) {
      return value;
    }

    if (value.startsWith('http')) {
      try {
        const url = new URL(value);
        return `${environment.imageBaseUrl}${url.pathname}`;
      } catch {
        return value;
      }
    }

    return `${environment.imageBaseUrl}${value}`;
  }
} 