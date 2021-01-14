import { Pipe, PipeTransform } from '@angular/core';
import { ForumPost } from 'src/app/_models/forum-post.model';

@Pipe({
  name: 'isStuck'
})
export class IsStuckPipe implements PipeTransform {

  transform(value: ForumPost[],isStuck:boolean): ForumPost[] {

    if(isStuck==true)
    return value.filter(val=>val.stuck!=false)

    else
    return value.filter(val=>val.stuck==false)

  }

}
