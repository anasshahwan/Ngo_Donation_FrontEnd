import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toarray'
})
export class ToarrayPipe implements PipeTransform {
  result :any = {};
  transform(objects : any = []) {
    
    return Object.values(objects);
  }
 

}
