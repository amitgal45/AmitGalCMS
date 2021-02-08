import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articles } from 'src/app/_models/article.model';
import  { ArticlesService } from 'src/app/_services/articles.service'
@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService:ArticlesService
  ) { }

  _article:Articles;

  ngOnInit(): void {
    const articleId = Number(this.route.snapshot.paramMap.get('id'));
    this.articleService.getSingleArticle(articleId).subscribe(val=>{this._article=val});
  }

}
