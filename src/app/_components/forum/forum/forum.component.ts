import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/_services/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  json: any[] = [
    { id: 1, name: 'כללי' ,icon:'http://www.elsf.net/images/elsf/category_icons/15.png'},
    { id: 2, name: 'ספורט' ,icon:'http://www.elsf.net/images/elsf/category_icons/6.png'},
    { id: 3, name: 'סרטים ותוכניות' ,icon:'http://www.elsf.net/images/elsf/category_icons/9.png'},
    { id: 4, name: 'חומרה' ,icon:'http://www.elsf.net/images/elsf/category_icons/11.png'},
    { id: 5, name: 'עיצוב' ,icon:'http://www.elsf.net/images/elsf/category_icons/12.png'},
    { id: 6, name: 'Design' ,icon:'http://www.elsf.net/images/elsf/category_icons/12.png'},
    { id: 7, name: 'Design' ,icon:'http://www.elsf.net/images/elsf/category_icons/12.png'},
    { id: 8, name: 'Design' ,icon:'http://www.elsf.net/images/elsf/category_icons/12.png'},
    { id: 9, name: 'Design' ,icon:'http://www.elsf.net/images/elsf/category_icons/12.png'},
  ]

  jsonArr:any[]=[
    {id:1,name:'Soccer',categoryId:2},
    {id:2,name:'Basketball',categoryId:2},
    {id:3,name:'Ninja',categoryId:2},
    {id:4,name:'Gym',categoryId:2},
    {id:5,name:'New',categoryId:1},
    {id:6,name:'Chating',categoryId:1},
    {id:7,name:'Movies',categoryId:3},
    {id:8,name:'Episodes',categoryId:3},


  ]

  constructor(private forumService:ForumService) { }

  ngOnInit(): void {
    this.forumService.getCategories().subscribe(val=>{
      this.forumService.getForums().subscribe(val1=>this.jsonArr=val1)
      this.json=val
    })
  }

}
