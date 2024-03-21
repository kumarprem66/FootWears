import { Component, Input } from '@angular/core';
import {Product} from './../../Models/Product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  selectedProduct:Product;
  
  products = [
    {
      id:1,
      name : "Nike React Infinity Run FlyKnit",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa voluptatum quae sint provident necessitatibus asperiores officiis quisquam vel! Animi optio voluptas ratione perspiciatis deleniti ea aliquam expedita delectus necessitatibus dolor.",
      brand:"NIKE",
      gender:"MEN",
      category:"RUNNING",
      size:[6,7,8,9,10],
      color: ["Green","Blue","Black"],
      price: 160,
      discountPrice:120,
      is_in_inventory:true,
      items_left:3,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2acfa11a-19c8-4174-a0c8-eb760bea8934/air-force-1-07-shoes-7hqhpl.png",
      slug:"nike-react-infinity-run-flyknit"


    },
    {
      id:2,
      name : "Nike React Infinity Run FlyKnit",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa voluptatum quae sint provident necessitatibus asperiores officiis quisquam vel! Animi optio voluptas ratione perspiciatis deleniti ea aliquam expedita delectus necessitatibus dolor.",
      brand:"NIKE",
      gender:"MEN",
      category:"RUNNING",
      size:[6,7,8,9,10],
      color: ["White","Blue","Black"],
      price: 160,
      is_in_inventory:true,
      items_left:3,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2acfa11a-19c8-4174-a0c8-eb760bea8934/air-force-1-07-shoes-7hqhpl.png",
      slug:"nike-react-infinity-run-flyknit"


    }
,
    {
      id:3,
      name : "Nike React Infinity Run FlyKnit",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa voluptatum quae sint provident necessitatibus asperiores officiis quisquam vel! Animi optio voluptas ratione perspiciatis deleniti ea aliquam expedita delectus necessitatibus dolor.",
      brand:"NIKE",
      gender:"MEN",
      category:"RUNNING",
      size:[6,7,8,9,10],
      color: ["White","Blue","Black"],
      price: 160,
      is_in_inventory:true,
      items_left:3,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2acfa11a-19c8-4174-a0c8-eb760bea8934/air-force-1-07-shoes-7hqhpl.png",
      slug:"nike-react-infinity-run-flyknit"


    },

    {
      id:4,
      name : "Nike React Infinity Run FlyKnit",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa voluptatum quae sint provident necessitatibus asperiores officiis quisquam vel! Animi optio voluptas ratione perspiciatis deleniti ea aliquam expedita delectus necessitatibus dolor.",
      brand:"NIKE",
      gender:"MEN",
      category:"RUNNING",
      size:[6,7,8,9,10],
      color: ["White","Blue","Black"],
      price: 160,
      is_in_inventory:true,
      items_left:3,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2acfa11a-19c8-4174-a0c8-eb760bea8934/air-force-1-07-shoes-7hqhpl.png",
      slug:"nike-react-infinity-run-flyknit"


    },

    {
      id:5,
      name : "Nike React Infinity Run FlyKnit",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa voluptatum quae sint provident necessitatibus asperiores officiis quisquam vel! Animi optio voluptas ratione perspiciatis deleniti ea aliquam expedita delectus necessitatibus dolor.",
      brand:"NIKE",
      gender:"MEN",
      category:"RUNNING",
      size:[6,7,8,9,10],
      color: ["White","Blue","Black"],
      price: 460,
      is_in_inventory:false,
      items_left:3,
      discountPrice:400,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2acfa11a-19c8-4174-a0c8-eb760bea8934/air-force-1-07-shoes-7hqhpl.png",
      slug:"nike-react-infinity-run-flyknit"


    }
  ];

  totalProductCount = this.products.length;
  totalProductCountInStock = this.products.filter(p => p.is_in_inventory).length;
  totalProductCountOutOfStock = this.products.filter(p => p.is_in_inventory == false).length;

  @Input()
  searchText:string = '';

  selectedFilterRadioButton:string = "all";

  onFilterChanged(data:string){
    this.selectedFilterRadioButton = data;

    
    
  }
}
