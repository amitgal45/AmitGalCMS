import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ForumPost } from 'src/app/_models/forum-post.model';
import { ForumService } from 'src/app/_services/forum.service';
import { ModalComponent } from '../../dialog/jw-modal/jw-modal.component';

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.css']
})
export class ForumPostComponent implements OnInit ,OnDestroy {

  post$:ForumPost;
  public productsSubscription:Subscription;

  @ViewChild('modal', {static: false}) modal: ModalComponent

  openModal() {
    this.modal.open(this.post$);
  }
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private forumService:ForumService
  ) {}

  onCommentRemove(postid:number,commentid:number){
    console.log(this.post$)
    this.post$.comments = this.forumService.removeComment(postid,commentid)
  }

  

  onPostEdit(post:ForumPost){
    this.post$ = this.forumService.onPostEdit(post.id,post.body,post.title,post.description,post.forumId,post.comments)
  }

  ngOnInit(): void {
    const ForumId = Number(this.route.snapshot.paramMap.get('id'));
    this.forumService.getSinglePost(ForumId).subscribe(val=>this.post$=val)
    this.productsSubscription = this.forumService.postUpdate.subscribe(
    ()=>this.forumService.getSinglePost(ForumId).subscribe(val=>this.post$=val)

    )
    //  this.post$=this.posts$.filter(val=>val.forumId==ForumId)
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe()
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }
}
