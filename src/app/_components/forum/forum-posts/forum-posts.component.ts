import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/_models/category.model';
import { ForumPost } from 'src/app/_models/forum-post.model';
import { Forum } from 'src/app/_models/forum.model';
import { ForumService } from 'src/app/_services/forum.service';

@Component({
  selector: 'app-forum-posts',
  templateUrl: './forum-posts.component.html',
  styleUrls: ['./forum-posts.component.css']
})
export class ForumPostsComponent implements OnInit {

  posts$:any[]=[
    {id:1,title:'New Post1',description:'description1',body:'Body1',forumId:1},
    {id:2,title:'New Post2',description:'description2',body:'Body2',forumId:2},
    {id:3,title:'New Post3',description:'description3',body:'Body3',forumId:1},
    {id:4,title:'New Post4',description:'description4',body:'Body4',forumId:2},
  ];
  ForumId:number;
  forum:Forum;
  $filteredposts:ForumPost[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private forumService:ForumService
      ) {}

      onClick(postId:number){
        console.log('Post Id')
        this.forumService.onPostClick(postId)
      }

      addPostNavigation(){
        this.router.navigate(['forum', this.ForumId,'addpost'])
      }

       onStart(){
        this.ForumId = Number(this.route.snapshot.paramMap.get('id'));
         this.forumService.getForumPosts().subscribe(val=>{
          this.$filteredposts=val.filter(val=>val.forumId==this.ForumId)
        })
         this.forumService.getSingleForum(this.ForumId).subscribe(
          val1=>{this.forum=val1}
        )
      }
  ngOnInit() {
  this.onStart();
  }


}
