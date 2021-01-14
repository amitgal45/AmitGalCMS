import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagepicker',
  templateUrl: './imagepicker.component.html',
  styleUrls: ['./imagepicker.component.css']
})
export class ImagepickerComponent implements OnInit {

  @Input() imageArr:Array<string> ;

  status:number=0
  onStatusChange(number:number){
    if(this.imageArr[number]!=null){
      this.mainImage=this.imageArr[number]
      this.status=number;
    }
  
  }
  mainImage:string;
  constructor() { }

  ngOnInit(): void {
    this.mainImage=this.imageArr[0]
  }

}
