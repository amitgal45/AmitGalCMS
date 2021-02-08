import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { timeInterval } from 'rxjs/operators';
import { ScrollSlideshowItemComponent } from '../../scroll-slideshow-item/scroll-slideshow-item.component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '400px',
        opacity: 1,
        backgroundColor: 'black',
        // transform: 'translateX(0%)'
      })),
      state('mid', style({
        height: '400px',
        opacity: 0,
        backgroundColor: 'black',
        // transform: 'translateX(-100%)'
      })),
      state('closed', style({
        height: '400px',
        opacity: 1,
        backgroundColor: 'black',
        // transform: 'translateX(0%)'
        
      })),

      
      transition('open => mid,mid=>closed', [
        animate('0.5s')
      ]),
      transition('closed => mid,mid=>open', [
        animate('0.5s')
      ]),

    ]),
  ],
})
export class SliderComponent implements OnInit  {

@Input() slide:Array<any>=new Array<any>(
//   {name:'החליפות המושלמות לגבר',description:'מבצעים עד סוף מרץ על כל החליפות לגבר',model:'מבצעים',url:"/assets/slider/slide-img1.jpg"},
// {name:'עוד שניה כבר קיץ',description:'אבל למי זה משנה עדיין יש קורונה',model:'sdsd',url:'/assets/slider/slide-img2.jpg'},
// {name:'כוכבה הכוכבית מדברת לראשונה',description:'אחרי שפרשה מחיי הדוגמנות כוכבה מפתיעה במקצוע חדש',model:'ראיונות',url:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a737788e-2be1-4a35-abb7-7d06d4080a62/dbwl6kl-74aa142f-cf69-4606-8766-e07c6f178283.jpg/v1/fill/w_1024,h_683,q_75,strp/elsa_by_kayleighjune_dbwl6kl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02ODMiLCJwYXRoIjoiXC9mXC9hNzM3Nzg4ZS0yYmUxLTRhMzUtYWJiNy03ZDA2ZDQwODBhNjJcL2Rid2w2a2wtNzRhYTE0MmYtY2Y2OS00NjA2LTg3NjYtZTA3YzZmMTc4MjgzLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Ym7zgi9zqZzKD8mVRpdqbdiO1EkayF9fejEHIr0TgJI'},
); // decorate the property with @Input()
public count:number;
public sliderObj:any;
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
    if(this.count+1==this.slide.length)
    this.count=0;
  else
    this.count++;
  this.sliderObj=this.slide[this.count]
    this.string="closed";
    console.log(this.string)
  }, 800)
  // myGreeting
  

}

moveBack(){
  this.string="mid";
  let myGreeting = setTimeout(()=>{
    if(this.count==0)
    this.count=this.slide.length-1;
  else
    this.count--;
    
  this.sliderObj=this.slide[this.count]
    this.string="closed";
  },700)

}
ngOnInit(){
  this.count=0;
  this.sliderObj=this.slide[this.count]

}

}
