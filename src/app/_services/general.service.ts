import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  public productsUpdate=new Subject()

  private _title: string;
  private _description: string;
  private _imageUrl: string;
  private _header: string;

  public settingsSubject=new Subject;

  getHeaderObj() {
    return {
      description: this._description,
      imageUrl: this._imageUrl,
      title: this._title,
      header: this._header
    }
  }


  setHeaderObject(settings:any){
    this._title=settings.title
    this._imageUrl=settings.imageUrl
    this._header=settings.header,
    this._description=settings.description
    this.titleService.setTitle(this._title);
    this.settingsSubject.next()
  }


  setDocTitle() {
    console.log('current title:::::' + this.titleService.getTitle());
    this.titleService.setTitle(this._title);
  }

  constructor(private titleService: Title) {
    this._description = "זרוק עליו יונה קבלת'ה חזרה";
    this._title = "שלאקות";
    this._imageUrl = "https://haraayonot.com/wp-content/uploads/2016/08/Logo.png";
    this._header = "שלאקות"
  }
}
