import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(public service:ProductService) { }

  ngOnInit(): void {
    this.service.getAllProducts();
  }

}
