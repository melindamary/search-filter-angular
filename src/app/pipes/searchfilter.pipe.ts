import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.interface';

@Pipe({
  name: 'searchfilter',
  standalone: true
})
export class SearchfilterPipe implements PipeTransform {

  transform(productData: Product[], toFilter:string): Product[] {
    if (!productData || !toFilter) {
      return productData;
    }
    toFilter = toFilter.toLowerCase();
    return productData.filter(product => {
          return product.title.toLowerCase().includes(toFilter) ||
          product.category.toLowerCase().includes(toFilter);
         
          
        }
        );

  }

}
