import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/_services/products.service';
import {Observable, Subscription} from 'rxjs'
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/_models/product.model';
import { async } from 'rxjs/internal/scheduler/async';
@Component({
  selector: 'app-get-all-products',
  templateUrl: './get-all-products.component.html',
  styleUrls: ['./get-all-products.component.css']
})
export class GetAllProductsComponent implements OnInit {

  constructor(private ProductService:ProductsService) { }

  _products:Array<Product> = new Array<Product>();
  productsSubscription:Subscription;
  onAddProduct(form:NgForm) {
    if (form.valid) {
      // let Product:Product={name:'bzaat',imageUrl:'asdasdasd',price:43,category:'bzaat',id:3,isAvaliable:true}
      // this.ProductService.addProduct(form.value.productName);
      // this.ProductService.addProduct(Product)
    }
  }

  onDeleteProduct(product:number){
    this.ProductService.removeProduct(product)
  }

  ngOnInit(): void {
    this.ProductService.getProducts().subscribe(async products=>this._products=products)
    this.productsSubscription = this.ProductService.productsUpdate.subscribe(async()=>{
      console.log('runs')
     this.ProductService.getProducts().subscribe(products=>this._products=products)
    })
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe()
  }

}
