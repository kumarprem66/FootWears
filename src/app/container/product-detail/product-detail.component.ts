import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

 

  @Input() productListCom:ProductListComponent = undefined;

  product:Product;

  ngOnInit(){
    this.product= this.productListCom.selectedProduct;
  }

}
