import { find, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs'
import { Forum } from '../_models/forum.model'
import { Category } from '../_models/category.model'
import { ForumPost } from '../_models/forum-post.model'
import { PostComment } from '../_models/post-comment.model';

@Injectable({
  providedIn: 'root'
})

export class ForumService {

  private _forumCategories: Array<Category> = new Array<Category>(
    { id: 1, name: 'כללי', icon: 'http://www.myforum.co.il/img/caat62.png' },
    { id: 2, name: 'ספורט', icon: 'https://i.pinimg.com/600x315/9c/97/3f/9c973fc03f0b6b86647f5a5669724494.jpg' },
    { id: 3, name: 'סרטים ותוכניות', icon: 'http://www.myforum.co.il/img/caat53.png' },
    { id: 4, name: 'חומרה', icon: 'http://www.myforum.co.il/img/caat55.png' },
    { id: 5, name: 'עיצוב', icon: 'http://www.myforum.co.il/img/caat21.png' },

  );

  private _forums: Array<Forum> = new Array<Forum>(
    { id: 1, name: 'כדורגל', categoryId: 2,description:'פורום על כדורגל',img:'https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/soccer_ball.png' },
    { id: 2, name: 'כדורסל', categoryId: 2,description:'פורום על כדורסל',img:'https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/basketball.png' },
    { id: 3, name: 'נינגה', categoryId: 2 ,description:'פורום על נינגה',img:'https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/soccer_ball.png'},
    { id: 4, name: 'חדר כושר', categoryId: 2,description:'פורום על חדר כושר',img:'https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/punching_bag.png' },
    { id: 5, name: 'חדש', categoryId: 1,description:'פורום על חדש',img:'https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/soccer_ball.png' },
    { id: 6, name: 'דיבורים', categoryId: 1,description:'פורום על דיבורים',img:'https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/message.png' },
    { id: 7, name: 'סרטים', categoryId: 3,description:'פורום על סרטים',img:'https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/clapperboard.png' },
    { id: 8, name: 'סדרות', categoryId: 3,description:'פורום על סדרות',img:'https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/plasma_tv.png' },
  )

  private _posts: Array<ForumPost> = new Array<ForumPost>(
    {
      id: 1, title: 'פוסט מס 1', description: 'description1', body: 'Body1', forumId: 1, comments: [
        { id: 1, postId: 1, content: 'Content1', userId: 1,imageUrl:'',username:'dalia' },
        { id: 2, postId: 1, content: 'Content2', userId: 1,imageUrl:'',username:'yafit' },
        { id: 3, postId: 1, content: 'Content3', userId: 1,imageUrl:'',username:'yoni' }
      ],
      rating:3,
      stuck:false,
      commentsnumber: 3,
      views: 10,
      lastComment:{userId:6,username:'yochii',createdAt:Date.now()},
      user:{userId:2,username:'bzaaat'}

    },
    {
      id: 2, title: 'פוסט מס 2', description: 'description2', body: 'Body2', forumId: 2,
      comments: [{ id: 4, postId: 2, content: 'Content4', userId: 1,imageUrl:'',username:'bzaat' }, { id: 5, postId: 2, content: 'Content5', userId: 1,imageUrl:'',username:'yoram' }, { id: 6, postId: 2, content: 'Content6', userId: 1,imageUrl:'',username:'dani' }],
      commentsnumber: 3,
      views: 10,
      stuck:true,
      rating:4,
      lastComment:{userId:4,username:'bzaat',createdAt:Date.now()},
      user:{userId:2,username:'bzaaat'}

    },
    {
      id: 3, title: 'פוסט מס 3', description: 'description3', body: 'Body3', forumId: 1, comments: [], commentsnumber: 3,
      views: 10,
      rating:5,
      stuck:true,
      lastComment:{userId:3,username:'albi',createdAt:Date.now()},
      user:{userId:2,username:'bzaaat'}

    },
    {
      id: 4, title: 'פוסט מס 4', description: 'description4', body: 'Body4', forumId: 2, comments: [], commentsnumber: 3,
      views: 10,
      rating:4,
      stuck:false,
      lastComment:{userId:2,username:'habibi',createdAt:Date.now()},
      user:{userId:2,username:'bzaaat'}


    },
    {
      id: 5, title: 'פוסט מס 5', description: 'description4', body: 'Body4', forumId: 2, comments: [], commentsnumber: 3,
      views: 10,
      rating:4,
      stuck:false,
      lastComment:{userId:2,username:'habibi',createdAt:Date.now()},
      user:{userId:2,username:'bzaaat'}


    },
    
  )
  public postUpdate = new Subject()
  public forumsUpdate = new Subject()

  //functions
  //-----------------------------------
  public addComment(postComment: PostComment,username:string) {
    let post = this._posts.find(val => val.id == postComment.postId)
    postComment.id=post.comments.length + 1;
    postComment.username=username
    console.log(postComment)
    post.comments.push(postComment)
    this.postUpdate.next()
  }

  public getSingleCategory(categoryid:number):Observable<Category>{
    let category = this._forumCategories.find(value=>value.id==categoryid)
    return of(category);
  }

  public getSingleForum(forumid:number):Observable<Forum>{
    return of(this._forums.find(value=>value.id==forumid))
  }

  public addForum(forum: Forum) {
    try {
      this._forums.push(forum)
      this.forumsUpdate.next()
      console.log(forum)
    }
    catch (err) {
      console.log(err)
    }
  }

  public addCategory(cat: Category) {
    try {
      this._forumCategories.push(cat)
      this.forumsUpdate.next()
      console.log(cat)
    }
    catch (err) {
      console.log(err)
    }
  }

  public addPost(post: ForumPost) {
    this._posts.push(post)
    console.log(post)
    // this.postUpdate.next()
  }

  public getCategories(): Observable<Category[]> {
    return of(this._forumCategories)
  }

  public getForums(): Observable<Forum[]> {
    return of(this._forums)
  }

  public getForumPosts(): Observable<ForumPost[]> {
    return of(this._posts)
  }

  public onPostEdit(postid: number, body: string, title: string, description: string, forumId: number, comments: Array<PostComment>) {
    let post = this._posts.findIndex(val => val.id == postid)
    this._posts[post] = {
      id: postid,
      title: title,
      description: description,
      body: body,
      forumId: forumId,
      comments: comments,
      commentsnumber: this._posts[post].commentsnumber,
      views: this._posts[post].views,
      lastComment:{userId:2,username:'habibi',createdAt:Date.now()},
      rating:1,
      stuck:false,
      user:{}

    }
    this.postUpdate.next()
    return this._posts[post]


  }

  public onPostClick(postid: number) {
    let post = this._posts.findIndex(val => val.id == postid)
    this._posts[post].views++;
    this.postUpdate.next()
  }


  public getSinglePost(id: number): Observable<ForumPost> {
    let product = this._posts.find(value => value.id == id)
    return of(product);
  }

  public removeComment(postid: number, commentid: number) {
    return this._posts.find(value => value.id == postid).comments.filter(val => val.id !== commentid)
    // this.postUpdate.next()
    // return filteredcomments
  }

  constructor() { }
}
