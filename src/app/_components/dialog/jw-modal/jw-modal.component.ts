import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { ForumPost } from 'src/app/_models/forum-post.model';
import { ForumService } from 'src/app/_services/forum.service';

@Component({
  selector: 'app-modal',
  templateUrl: './jw-modal.component.html',
  styleUrls: ['./jw-modal.component.css']
})
export class ModalComponent {

  public post:ForumPost;

  @ViewChild('myModal', {static: false}) modal: ElementRef;
  

  open(post:ForumPost) {
    this.modal.nativeElement.style.display = 'block';
    this.post=post
  }

  edit(form:NgForm){
    console.log(form.value)
    this.post.title=form.value.title,
    this.post.description=form.value.description,
    this.post.body=form.value.body,
    this.forumService.onPostEdit(this.post.id,this.post.body,this.post.title,this.post.description,this.post.forumId,this.post.comments)
    this.close()
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }



  // constructor() { } 

  constructor(private forumService:ForumService){
    
  }
}