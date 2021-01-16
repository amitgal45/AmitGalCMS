import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-no-category',
  templateUrl: './slider-no-category.component.html',
  styleUrls: ['./slider-no-category.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1,
        // backgroundColor: 'black',
        // transform: 'translateX(0%)'
      })),
      state('mid', style({
        opacity: 0,
        // backgroundColor: 'black',
        // transform: 'translateX(-100%)'
      })),
      state('closed', style({
        opacity: 1,
        // backgroundColor: 'black',
        // transform: 'translateX(0%)'
        
      })),

      
      transition('open => mid,mid=>closed', [
        animate('0.4s')
      ]),
      transition('closed => mid,mid=>open', [
        animate('0.4s')
      ]),

    ]),
  ]
})
export class SliderNoCategoryComponent implements OnInit {
  @Input() slide:Array<any>
  category:string="גקטים";
  page:number=0;
  getCategory():string{
    return this.category
  }

  public count:number;
  public sliderObj:Array<any>;
  public string:string="open";
  isOpen = true;
  
  toggle() {
    this.isOpen = !this.isOpen;
  }
  
  constructor(){
  
  }
  
  moveFoward(){
    this.string="mid";
    let myGreeting = setTimeout(()=>{
      if(this.page+1==Math.round(((this.slide.filter(val=>val.category==this.category).length)/4)) )
      this.page=0;
    else
      this.page++;
      this.string="closed";
    }, 800)
    // myGreeting
    
  
  }
  
  moveBack(){
    this.string="mid";
    let myGreeting = setTimeout(()=>{
      if(this.page==0){
      console.log('check')
      this.page=Math.round((this.slide.filter(val=>val.category==this.category).length)/4)-1;
      console.log(this.page)
    }
    else
      this.page--;      
      this.string="closed";
    },700)
  
  }
  ngOnInit(){
    this.count=0;
  
  }

  setCategory(category:string){
    console.log(category)
    console.log(this.category)
    this.page=0
    this.category=category
    
  }

}
