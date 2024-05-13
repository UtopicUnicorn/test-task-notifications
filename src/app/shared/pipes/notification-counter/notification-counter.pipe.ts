import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notificationCounter',
})
export class NotificationCounterPipe implements PipeTransform {
  transform(value: number): string {
    if (value >= 100) return '99+';
    return String(value);
  }
}
