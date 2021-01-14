import { find, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs'
import {Product} from '../_models/product.model'
@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private _cart:Array<any>=new Array<any>(
    {
      id:1,
      imageUrl:'https://image.s5a.com/is/image/saks/0400013336186_TAUPE?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',name:"אלכסיס",
      category:'שמלות',
      size:'M',
      price:30,
      colors : ['black'],
      quantity:2,
  },
  {
    id:2,
    imageUrl:'https://image.s5a.com/is/image/saks/0400013339578?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'
    ,name:"בזעת",
    category:'גקטים',
    price:1920,
    size:'L',
    colors : ['white'],
    quantity:1
  }
  );

  private _checkout:Array<any>=new Array<any>(
  {
    id:1,
    products:[
      {
        id:1,
        imageUrl:'https://image.s5a.com/is/image/saks/0400013336186_TAUPE?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',name:"אלכסיס",
        category:'שמלות',
        price:30,
        isAvaliable:true,
        images: new Array<string>(
          'https://image.s5a.com/is/image/saks/0400013336186_TAUPE?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
          'https://image.s5a.com/is/image/saks/0400013336186_TAUPE_ASTL?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
          'https://image.s5a.com/is/image/saks/0400013336186_TAUPE_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
          'https://image.s5a.com/is/image/saks/0400013336186_TAUPE_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'
        ),
        colors : ['black','white','yellow','green']
    },
    {
      id:2,
      imageUrl:'https://image.s5a.com/is/image/saks/0400013339578?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'
      ,name:"בזעת",
      category:'גקטים',
      price:1920,
      isAvaliable:true,
      images: new Array<string>(
        'https://image.s5a.com/is/image/saks/0400013339578?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
        'https://image.s5a.com/is/image/saks/0400013339578_ASTL?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
        'https://image.s5a.com/is/image/saks/0400013339578_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
        'https://image.s5a.com/is/image/saks/0400013339578_A2?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'
      ),
      colors : ['black']
    },
    ],
    price:1980,
  }
  );
  private _products:Array<Product>=new Array<Product>(

    {
      id:1,
      imageUrl:'https://image.s5a.com/is/image/saks/0400013336186_TAUPE?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',name:"אלכסיס",
      category:'שמלות',
      price:30,
      isAvaliable:true,
      images: new Array<string>(
        'https://image.s5a.com/is/image/saks/0400013336186_TAUPE?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
        'https://image.s5a.com/is/image/saks/0400013336186_TAUPE_ASTL?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
        'https://image.s5a.com/is/image/saks/0400013336186_TAUPE_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
        'https://image.s5a.com/is/image/saks/0400013336186_TAUPE_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'
      ),
      colors : ['black','white','yellow','green']
  },
  {
    id:2,
    imageUrl:'https://image.s5a.com/is/image/saks/0400013339578?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'
    ,name:"בזעת",
    category:'גקטים',
    price:1920,
    isAvaliable:true,
    images: new Array<string>(
      'https://image.s5a.com/is/image/saks/0400013339578?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
      'https://image.s5a.com/is/image/saks/0400013339578_ASTL?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
      'https://image.s5a.com/is/image/saks/0400013339578_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
      'https://image.s5a.com/is/image/saks/0400013339578_A2?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'
    ),
    colors : ['black']
  },
  {
    id:3,
    imageUrl:'https://image.s5a.com/is/image/saks/0400013143400_ECRU?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'
    ,name:"בזעת2",
    category:'גקטים',
    price:1920,
    isAvaliable:true,
    images: new Array<string>(
      'https://image.s5a.com/is/image/saks/0400013143400_ECRU?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
      'https://image.s5a.com/is/image/saks/0400013143400_ASTL?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
      'https://image.s5a.com/is/image/saks/0400013143400_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
      'https://image.s5a.com/is/image/saks/0400013143400_A2?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'
    ),
    colors : ['black']
},
{
  id:4,
  imageUrl:'https://image.s5a.com/is/image/saks/0400013143400_ECRU?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'
  ,name:"בזעת2",
  category:'גקטים',
  price:1920,
  isAvaliable:true,
  images: new Array<string>(
    'https://image.s5a.com/is/image/saks/0400013143400_ECRU?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
    'https://image.s5a.com/is/image/saks/0400013143400_ASTL?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
    'https://image.s5a.com/is/image/saks/0400013143400_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
    'https://image.s5a.com/is/image/saks/0400013143400_A2?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'
  ),
  colors : ['black']
},
{
  id:5,
  imageUrl:'https://image.s5a.com/is/image/saks/0400013143400_ECRU?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'
  ,name:"בזעת2",
  category:'גקטים',
  price:1920,
  isAvaliable:true,
  images: new Array<string>(
    'https://image.s5a.com/is/image/saks/0400013143400_ECRU?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
    'https://image.s5a.com/is/image/saks/0400013143400_ASTL?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
    'https://image.s5a.com/is/image/saks/0400013143400_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
    'https://image.s5a.com/is/image/saks/0400013143400_A2?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'
  ),
  colors : ['black']
},
{
  id:6,
  imageUrl:'https://image.s5a.com/is/image/saks/0400013143400_ECRU?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'
  ,name:"בזעת2",
  category:'גקטים',
  price:1920,
  isAvaliable:true,
  images: new Array<string>(
    'https://image.s5a.com/is/image/saks/0400013143400_ECRU?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
    'https://image.s5a.com/is/image/saks/0400013143400_ASTL?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
    'https://image.s5a.com/is/image/saks/0400013143400_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
    'https://image.s5a.com/is/image/saks/0400013143400_A2?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'
  ),
  colors : ['black']
},
{
  id:7,
  imageUrl:'https://image.s5a.com/is/image/saks/0400013143400_ECRU?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'
  ,name:"בזעת2",
  category:'גקטים',
  price:1920,
  isAvaliable:true,
  images: new Array<string>(
    'https://image.s5a.com/is/image/saks/0400013143400_ECRU?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
    'https://image.s5a.com/is/image/saks/0400013143400_ASTL?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
    'https://image.s5a.com/is/image/saks/0400013143400_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
    'https://image.s5a.com/is/image/saks/0400013143400_A2?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'
  ),
  colors : ['black']
},
{
  id:8,
  imageUrl:'https://image.s5a.com/is/image/saks/0400013143400_ECRU?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'
  ,name:"בזעת2",
  category:'גקטים',
  price:1920,
  isAvaliable:true,
  images: new Array<string>(
    'https://image.s5a.com/is/image/saks/0400013143400_ECRU?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
    'https://image.s5a.com/is/image/saks/0400013143400_ASTL?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
    'https://image.s5a.com/is/image/saks/0400013143400_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
    'https://image.s5a.com/is/image/saks/0400013143400_A2?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'
  ),
  colors : ['black']
}
    );
  public filteredArray:Array<Product>=new Array<Product>();
  public productsUpdate=new Subject()
  public productsCatalog=new Subject()
  public cartUpdate:Subject<Array<any>>=new Subject();

  
  //functions
  //-----------------------------------
  public addProduct(product:Product){
    this._products.push(product)
    this.productsUpdate.next()
  }

  public addCheckout(checkout:any){
    this._checkout.push(checkout)
    this.cartUpdate.next(new Array<any>())
    this._cart=[]
    console.log(this._checkout)
  }

  public addItemToCart(product:any){
    this._cart.push(product)
    this.cartUpdate.next(this._cart)
  }

  public getProductsByCat():Observable<Array<Product>>{
    return this.productsCatalog.asObservable() as Observable<Array<Product>>;
  }

  setProducts(name:string){
    let products=this._products.filter(val=>val.category==name)
    this.productsCatalog.next(products)
  }

  public getProducts():Observable<Product[]>{
    return of(this._products)
  }

  public getCartItems():Observable<Product[]>{
    return of(this._cart)
  }

  public getSingleProduct(id:number):Observable<Product>{
    let product = this._products.find(value=>value.id==id)
    return of(product);

  }



  public getProductsByCategory(name:string):Observable<Product[]>{
    this.productsCatalog.next(this._products.filter(val=>val.category==name))
    return of(this._products.filter(val=>val.category==name))
  }


  public removeProduct(productid:number){
    this._products=this._products.filter(value=>value.id!=productid)
    this.productsUpdate.next()
  }

  constructor() { }
}
