import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/_models/category.model';
import { ForumService } from 'src/app/_services/forum.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  public forums:Category[]=[]
  constructor(private forumService:ForumService) { }

  onAddClick(form:NgForm):void{
    this.forumService.addCategory({id:342,name:form.value.name,icon:form.value.icon})
  }

  ngOnInit(): void {
    this.forumService.getCategories().subscribe(val=>
      this.forums=val
    )
  }

}
