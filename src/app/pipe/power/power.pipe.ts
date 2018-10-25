import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: number, exp: number, multi?: number ): number {
    if ( multi != null) {
      return Math.pow(value, exp) * multi;
    }

    return Math.pow(value, exp );
  }

}
