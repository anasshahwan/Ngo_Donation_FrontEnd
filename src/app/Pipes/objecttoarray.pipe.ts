import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objecttoarray'
})
export class ObjectToArrayPipe implements PipeTransform {

  transform(objects : any = []) {
    return objects.type;
  }

}
