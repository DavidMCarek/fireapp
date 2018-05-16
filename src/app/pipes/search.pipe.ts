import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: string[], query: string): string[] {
    if (!this.isValid(items) || !this.isValid(query)) {
      return items;
    }

    return items.filter(i => i.toUpperCase().includes(query.toUpperCase()));
  }

  isValid(value: any): boolean {
    return typeof value !== 'undefined' && value !== null && value.length > 0;
  }
}
