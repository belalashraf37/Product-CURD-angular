import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor(public service:ProductService) { }

  ngOnInit() {
    this.service.product = {
      id:0,
      name:'',
      productCategory:'',
      price:Number(),
      quantity:Number(),

    }
  }

submit(){
  this.service.PostProduct().subscribe(res=>{
    this.service.getAllProducts()
  },
  err=>{
    console.log(err);
  })
}

}
