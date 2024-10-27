import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCasePipe',
  standalone: true
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    return value
      .replace(/([A-Z])/g, ' $1')
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

}
