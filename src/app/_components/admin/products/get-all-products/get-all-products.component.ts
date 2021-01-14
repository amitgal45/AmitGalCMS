import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductsService } from 'src/app/_services/products.service';
import {Subscription} from 'rxjs'
@Component({
  selector: 'app-admin-get-all-products',
  templateUrl: './get-all-products.component.html',
  styleUrls: ['./get-all-products.component.css']
})
export class AdminGetAllProductsComponent implements OnInit {

  public productsSubscription:Subscription
  public _products:Array<Product> = new Array<Product>();
  constructor(private ProductService:ProductsService) { }

  ngOnInit(): void {
    this.ProductService.getProducts().subscribe(async products=>this._products=products)
    this.productsSubscription = this.ProductService.productsUpdate.subscribe(async()=>{
      console.log('runs')
      await this.ProductService.getProducts().subscribe(products=>this._products=products)
    })
  }

  onDeleteProduct(productid:number){
    this.ProductService.removeProduct(productid)
  }

}
