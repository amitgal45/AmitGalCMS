import { Component, Input, OnInit } from '@angular/core';
import { ForumPost } from 'src/app/_models/forum-post.model';

@Component({
  selector: 'app-top-posts',
  templateUrl: './top-posts.component.html',
  styleUrls: ['./top-posts.component.css']
})
export class TopPostsComponent implements OnInit {

  @Input() posts:ForumPost[];

  constructor() { }

  ngOnInit(): void {
    
  }

}
