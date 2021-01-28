import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/_models/product.model';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(value: Array<Product>, limitNumber: number,category:string,page:number): unknown {
    // console.log(category)

    let r = value.filter(val=>val.category==category).slice(page*limitNumber,limitNumber*(page+1))
    let arr:Product[]=new Array<Product>();
    return r;
  }

}
