import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ForumService } from 'src/app/_services/forum.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {

  constructor(private ForumService:ForumService,private route:ActivatedRoute) { }
  forumId:number=0;
  onAddComment(form:NgForm){
    let username="Avi";
    form.value.postId=this.forumId;
    this.ForumService.addComment(form.value,username)
  }

  ngOnInit(): void {
    this.forumId = Number(this.route.snapshot.paramMap.get('id'));
  }

}
