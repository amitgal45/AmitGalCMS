import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgImageSliderComponent } from 'ng-image-slider';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/_models/product.model';
import { ProductsService } from 'src/app/_services/products.service';
import { ArticlesService } from 'src/app/_services/articles.service';
import { Articles } from 'src/app/_models/article.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  category:string="גקטים";
  articles:Array<Articles>=[];
  setCategory(category){
    this.category=category
  }
  constructor(private ProductService:ProductsService,private ArticlesService:ArticlesService) { }
  imageObject: Array<object> = [{
    image: 'https://i.picsum.photos/id/580/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/580/400/350.jpg',
    alt: 'alt of image',
    title: 'title of image'
  }, {
    image: 'https://i.picsum.photos/id/838/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/838/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://i.picsum.photos/id/93/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/93/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://i.picsum.photos/id/543/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/543/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://i.picsum.photos/id/613/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/613/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://i.picsum.photos/id/609/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/609/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://i.picsum.photos/id/717/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/717/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }
  ];
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
    this.ArticlesService.getAllArticles().subscribe(val=>this.articles=val)
    this.productsSubscription = this.ProductService.productsUpdate.subscribe(async()=>{
      console.log('runs')
     this.ProductService.getProducts().subscribe(products=>this._products=products)
    })
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe()
  }

  @ViewChild('nav') slider: NgImageSliderComponent;


  prevImageClick() {
      this.slider.prev();
  }
  
  nextImageClick() {
      this.slider.next();
  }

}
