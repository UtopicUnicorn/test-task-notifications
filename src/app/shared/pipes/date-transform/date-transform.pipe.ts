import { Pipe, PipeTransform } from '@angular/core';

function prettify(item: number): string {
  return item >= 10 ? String(item) : `0${item}`;
}

@Pipe({
  name: 'dateTransform',
})
export class DateTransformPipe implements PipeTransform {
  transform(value: number): string {
    const date = new Date(value);
    const hour = prettify(date.getHours());
    const minutes = prettify(date.getMinutes());
    const month = prettify(date.getMonth() + 1);
    const year = date.getFullYear();
    const days = prettify(date.getDate());
    return `${days}.${month}.${year} ${hour}:${minutes}`;
  }
}
