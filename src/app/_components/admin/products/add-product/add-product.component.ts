import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ProductService:ProductsService) { }

  onAddProduct(form:NgForm){
    this.ProductService.addProduct(form.value)
    // console.log(form.value)

  }

  ngOnInit(): void {
  }

}
