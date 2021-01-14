import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/_models/product.model';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  constructor(
    private productService:ProductsService
  ) { }
  subscription:Subscription;
  cart:Array<any>;
  sum:number;



  calculateSum(){
    this.sum=0
    for(let i:number=0;i<this.cart.length;i++){
      this.sum = this.sum + (this.cart[i].price*this.cart[i].quantity)
      console.log(this.cart[i])
    }
  }

  checkOut(){
    let checkout = {
      id:2,
      products:this.cart,
      price:this.sum,
    }
    this.productService.addCheckout(checkout);
    this.cart =[]
    this.sum=0
  }

  ngOnInit(): void {
    this.productService.getCartItems().subscribe(val=>{this.cart=val
      this.calculateSum();
    })

    this.subscription = this.productService.cartUpdate.subscribe(val=>{this.cart=val
    this.calculateSum();
    })
  }



}
