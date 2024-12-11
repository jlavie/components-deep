import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: false // use with precaution => performance impact
})
export class SortPipe implements PipeTransform {

  transform(value: string[] | number[], direction: 'asc' | 'desc' = 'asc') {
    const sorted = [...value];
    sorted.sort((a, b) => {
      if(direction === 'asc') {
        return a > b ? 1 : -1;
      } else {
        return a > b ? -1 : 1;
      }
    });
    return sorted;
  }

}
