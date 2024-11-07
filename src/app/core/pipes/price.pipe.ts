import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  standalone: true
})
export class PricePipe implements PipeTransform {
  
  transform(items: any[], lowestPrice: number, maxPrice: number): any[] {
    // Return all items if the price range is invalid
    if (!items || !Array.isArray(items) || lowestPrice == null || maxPrice == null) {
      return items;
    }
    
    // Filter items within the specified price range
    return items.filter(item => 
      item.price >= lowestPrice && item.price <= maxPrice
    );
  }
}

