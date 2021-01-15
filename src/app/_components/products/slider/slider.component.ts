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

@Input() slide:Array<any>=new Array<any>({name:'sdsd',model:'sdsd',url:"/assets/slider/slide-img1.jpg"},
{name:'xxxxxa',model:'sdsd',url:'/assets/slider/slide-img2.jpg'},
{name:'vvvvvf',model:'sdsd',url:''},
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
