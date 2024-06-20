import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchfilterPipe } from '../../pipes/searchfilter.pipe';
import { MyerrorDirective } from '../../directives/myerror.directive';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, SearchfilterPipe,MyerrorDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

    toFilter:string = ""
    productData:Product[] = []

    async getData(){
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json();
    this.productData = data.products;

    console.log(this.productData)
  }
  ngOnInit() {
    this.getData();
  }
}

