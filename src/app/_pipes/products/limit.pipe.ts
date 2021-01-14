import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/_models/product.model';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(value: Array<Product>, limitNumber: number,category:string,page:number): unknown {
    // console.log(category)

    let r = value.filter(val=>val.category==category).slice(page,limitNumber)
    let arr:Product[]=new Array<Product>();
    if(value.length>limitNumber){
    for(let i:number=0;i<limitNumber;i++){
      if(value[i].category==category)
        arr.push(value[i])
      
    }
    return r;
    }
    for(let i:number=0;i<value.length;i++){
      arr.push(value[i])
    }
    return r;
  }

}
