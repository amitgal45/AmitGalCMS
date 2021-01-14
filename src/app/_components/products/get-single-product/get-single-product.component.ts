import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/_models/product.model';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-get-single-product',
  templateUrl: './get-single-product.component.html',
  styleUrls: ['./get-single-product.component.css']
})
export class GetSingleProductComponent implements OnInit {

  product$:Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService:ProductsService  ) {}

  ngOnInit() {
    const heroId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getSingleProduct(heroId).subscribe(val=>{this.product$=val});
  }

}
