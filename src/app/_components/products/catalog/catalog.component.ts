import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/_models/product.model';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  public categoryName: string;
  public productsSubscription: Subscription

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) { }

  public Products: Product[] = new Array<Product>();
  pageOfItems: Array<Product>;
  public filteredProducts: Product[];

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  onChangePick(name: string) {
    this.categoryName = name;
    this.router.navigate(['/products/catalog/' + name])
    this.productsService.setProducts(name)
    

  }


  ngOnInit(): void {
    // this.fillInProducts()
    this.categoryName = this.route.snapshot.paramMap.get('name');
    this.productsService.setProducts(this.categoryName)
    this.productsService.getProductsByCategory(this.categoryName).subscribe(async val => {console.log(val) ;this.filteredProducts = val});
    this.productsSubscription = this.productsService.getProductsByCat().subscribe(
      val => this.filteredProducts = val
    )

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.productsSubscription.unsubscribe()
  }
}
