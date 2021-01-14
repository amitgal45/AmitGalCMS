import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ForumPost } from 'src/app/_models/forum-post.model';
import { PostComment } from 'src/app/_models/post-comment.model';
import { AuthService } from 'src/app/_services/auth.service';
import { ForumService } from 'src/app/_services/forum.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private forumService:ForumService,
    private authService:AuthService
  ) {}

    public forumId:number;
    ImageBaseData:string | ArrayBuffer=null;


  onAddPost(form:NgForm){
    let post:ForumPost={icon:this.ImageBaseData,id:Math.round(Math.random()*100),user:{id:this.authService.getUser().id,username:this.authService.getUser().username},title:form.value.title,description:form.value.description,body:form.value.body,forumId:this.forumId,comments:new Array<PostComment>(),commentsnumber:0,views:0,lastComment:{},rating:0,stuck:false}
    console.log(form.value)
    this.forumService.addPost(post)
    this.router.navigate(['forum', this.forumId])
  }

  ngOnInit(): void {
    this.forumId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.forumId)

  }

  handleFileInput(files: FileList) {
    let me = this;
    let file = files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
      me.ImageBaseData=reader.result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }
  btnUpload(){
      return this.ImageBaseData
    // if(this.ImageBaseData==null){
    //   alert("Please select file");
    // }else{     
    //   var fileUplodVM: FileUplodVM={
    //     ImageBaseData:this.ImageBaseData.toString()
    //   }
    //   this.CreateItem(fileUplodVM).subscribe((res: any) =>{ 
    //     if(res){
    //       alert("Successfully uploded file");
    //     }else{
    //       alert("File upload failed");
    //     }
        
    //   },
    //   error => {
    //     alert(error.message);
    //   });
    // }
  }
  // public CreateItem(data) {
  //  return this.http.post(`http://localhost:4200/public`, data)
  //   .pipe(
  //     map((res: any) => {
  //       console.log(res);
  //       return res;
  //     }));
  // }
}

export class FileUplodVM{
  ImageBaseData: string;
}