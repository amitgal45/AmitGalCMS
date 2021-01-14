import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortForumsByCategory'
})
export class SortForumsByCategoryPipe implements PipeTransform {

  transform(value: any[],categoryId:number): unknown {
    return value.filter(val=>val.categoryId==categoryId)
  }

}
