export interface PostComment{
    id:number,
    content:string,
    postId:number,
    userId:number,
    
    username?:string,
    imageUrl?:string,
}