import { Injectable } from '@angular/core';
import { ForumService } from './forum.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public obj:any={
    usersCount:0,
    postsCount:0,
    ViewsInPosts:0,
  }

  async getCountsFromDB(){
   await this.userService.getUsers().subscribe(val=>this.obj.usersCount=val.length)
   await this.forumService.getForumPosts().subscribe(val=>this.obj.postsCount=val.length)
  this.getAllPostViewsNumber()
  return await {...this.obj}
  }

  getAllPostViewsNumber(){
    this.forumService.getForumPosts().subscribe(val=>{this.obj.ViewsInPosts = val.reduce((total,x) => total+x.views, 0)})
  }
  constructor(private userService:UsersService,private forumService:ForumService) { }
}
