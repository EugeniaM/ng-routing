import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'super'
})
export class SuperPipe implements PipeTransform {
  transform(value: string): string {
    return `SUPER ${value}`;
  }
}
