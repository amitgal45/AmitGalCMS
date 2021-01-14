import {PostComment} from './post-comment.model'

export interface ForumPost{
    id:number,
    title:string,
    description:string,
    body:string,
    forumId:number,
    comments:Array<PostComment>,
    commentsnumber:number,
    views:number,
    lastComment:any,
    user:any,
    rating:number,
    stuck:boolean,
    icon?:string|ArrayBuffer
}