export interface Articles{
    id:number,
    name:string,
    category:string,
    createdAt:Date,
    content:string,
    description:string,
    picUrl:string,
    user:{
        username:string,
        profilePic:string
    }
}