import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

url:string = "http://localhost:14502/api/Products";
products:Product[];
product:Product;
  constructor(private Http:HttpClient) { }

  getAllProducts(){
    this.Http.get(this.url).toPromise().then(
      res=>{
        this.products = res as Product[];
      }
    )
  }

  PostProduct(){
    return this.Http.post(this.url,this.product);
  }
}
