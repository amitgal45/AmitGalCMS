import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/_models/category.model';
import { ForumService } from 'src/app/_services/forum.service';

@Component({
  selector: 'app-add-forum',
  templateUrl: './add-forum.component.html',
  styleUrls: ['./add-forum.component.css']
})
export class AddForumComponent implements OnInit {

  public forums:Category[]=[]
  constructor(private forumService:ForumService) { }

  onAddClick(form:NgForm):void{
    this.forumService.addForum({id:342,name:form.value.name,categoryId:form.value.categoryId,description:form.value.description,img:form.value.image})
  }

  ngOnInit(): void {
    this.forumService.getCategories().subscribe(val=>
      this.forums=val
    )
    
  }

}
