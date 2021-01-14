import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/_models/product.model';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() items:Array<Product>;
  @Input() categoryName;
  @Output() changePage = new EventEmitter<any>(true);
  pageItems:Array<Product>;
  arrOfPages:Array<number>=new Array<number>()
  PagesLength:number;
  currentPage:number=1;


  constructor(
    private productsService:ProductsService
  ) { }
  subscription: Subscription;

  ngOnInit(): void {

      this.PagesLength=this.items.length/10;
      this.arrayOfPages();
      if (this.items && this.items.length) {
        this.setPage(this.currentPage)
    }
  ;
    this.subscription= this.productsService.getProductsByCat().subscribe(
      val=>{
        this.items=val
        this.PagesLength=this.items.length/10;
        this.arrayOfPages();
        if (this.items && this.items.length) {
          this.setPage(this.currentPage);
      }
      }
   )


      
    
    
  }

  addToCart(product:any){
    this.productsService.addItemToCart(product)
  }
  setPage(number:number){
    this.pageItems =this.items.slice(10*(number-1), 10*number); 
    this.currentPage=number;
    this.changePage.emit(this.pageItems);
  }

  pageBack(){
    this.currentPage--;
    this.pageItems =this.items.slice(10*(this.currentPage-1), 10*this.currentPage);     
    this.changePage.emit(this.pageItems);
  }

  pageFoward(){
    this.currentPage++;
    this.pageItems =this.items.slice(10*(this.currentPage-1), 10*this.currentPage);     
    this.changePage.emit(this.pageItems);
  }

  

  arrayOfPages(){
    for(let i=1;i<=this.PagesLength;i++){
      this.arrOfPages.push(i)
    }
    console.log(this.arrOfPages)
  }

}
