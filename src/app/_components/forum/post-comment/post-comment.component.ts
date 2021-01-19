import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostComment } from 'src/app/_models/post-comment.model';
import { AuthService } from 'src/app/_services/auth.service';
import { ForumService } from 'src/app/_services/forum.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {

  constructor(private ForumService:ForumService,private authService:AuthService,private route:ActivatedRoute) { }
  postId:number=0;
  onAddComment(form:NgForm){
    let obj:PostComment = {
      content:form.value.content,
      id: Math.round(Math.random()*10),
      postId:this.postId,
      userId:this.authService.getUser().id
    }
    let username="Avi";
    form.value.postId=this.postId;
    this.ForumService.addComment(obj,username)
  }

  ngOnInit(): void {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
  }

}
