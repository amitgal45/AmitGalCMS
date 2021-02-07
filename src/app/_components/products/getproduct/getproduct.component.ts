import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/_models/product.model';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-getproduct',
  templateUrl: './getproduct.component.html',
  styleUrls: ['./getproduct.component.css']
})
export class GetproductComponent implements OnInit {

  _sizeOption:number=0;
  _size:string;
  isDetailsClicked:boolean=false;
  isShippingClicked:boolean=false;
  _product:Product

//   randProduct:any = {
//     id:1,imageUrl:'https://s7d5.scene7.com/is/image/UrbanOutfitters/57886368_016_d?$medium$&qlt=80&fit=hfit',name:"אלכסיס",
//     category:'שמלות',price:30,isAvaliable:true,
//     imageArr: new Array<string>(
//       'https://image.s5a.com/is/image/saks/0400013336186_TAUPE?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
//       'https://image.s5a.com/is/image/saks/0400013336186_TAUPE_ASTL?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
//       'https://image.s5a.com/is/image/saks/0400013336186_TAUPE_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
//       'https://image.s5a.com/is/image/saks/0400013336186_TAUPE_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'
//     ),
//     colors : ['black','white','yellow','green']
// }
detailsClicked(){
  this.isDetailsClicked = this.isDetailsClicked==true?false:true
}

shippingClicked(){
  console.log(this.isShippingClicked)
  this.isShippingClicked = this.isShippingClicked==true?false:true
}

addToCart(quantity,size){
  if(quantity>0){
  let cartItem = {...this._product,quantity,size}
  this.productService.addItemToCart(cartItem)
}
else{
  alert("הכמות חייבת להיות יותר מ1")
}
}

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService:ProductsService
  ) { }

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getSingleProduct(productId).subscribe(val=>{this._product=val});
  }


}
