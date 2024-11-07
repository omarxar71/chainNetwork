import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/products';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(items:any[] , searchterm:string) {
    
    if (!items) return []; // or any default value
    return items.filter((item) =>
        item.title.toLowerCase().includes(searchterm.toLowerCase()));
  }

}
