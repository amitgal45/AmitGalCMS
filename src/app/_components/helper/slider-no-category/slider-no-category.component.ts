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
  // =new Array<Product>({id:1,name:'Adidas',category:'bzaat',imageUrl:'https://www.freepnglogos.com/uploads/shoes-png/mens-shoes-png-transparent-images-images-11.png',isAvaliable:true,price:60},
  // {id:2,name:'Nike',category:'bzaat',imageUrl:'https://pngimg.com/uploads/running_shoes/running_shoes_PNG5824.png',isAvaliable:true,price:40},
  // {id:3,name:'Puma',category:'bzaat',imageUrl:'https://www.freepnglogos.com/uploads/shoes-png/download-nike-shoes-transparent-png-for-designing-projects-16.png',isAvaliable:true,price:30},
  // {id:4,name:'Diadora',category:'bzaat',imageUrl:'https://www.freepnglogos.com/uploads/shoes-png/shoes-photos-style-guru-fashion-glitz-glamour-27.png',isAvaliable:true,price:70},
  // {id:5,name:'Diadora',category:'bzaat',imageUrl:'https://www.freepnglogos.com/uploads/shoes-png/download-adidas-shoes-transparent-png-images-icons-18.png',isAvaliable:true,price:70},
  // {id:6,name:'Puma',category:'bzaat',imageUrl:'https://www.freepnglogos.com/uploads/shoes-png/dance-shoes-png-transparent-dance-shoes-images-36.png',isAvaliable:true,price:30},
  // {id:7,name:'Nike',category:'bzaat',imageUrl:'https://www.freepnglogos.com/uploads/shoes-png/shoes-woocommerce-for-developers-woocommerce-22.png',isAvaliable:true,price:40},
  // {id:8,name:'Adidas',category:'bzaat',imageUrl:'https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/459ff194c35e45ea91b1a8ba00fc4876_9366/NMD_R1_Shoes_Black_B42200_01_standard.jpg',isAvaliable:true,price:60}
  // ); // decorate the property with @Input()
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
    // this.sliderObj=this.slide.slice(4,8)
      this.string="closed";
      // console.log(this.string)
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
      
    // this.sliderObj=this.slide.slice(0,4)
      this.string="closed";
    },700)
  
  }
  ngOnInit(){
    this.count=0;
    // this.sliderObj=this.slide.slice(0,4)
  
  }

  setCategory(category:string){
    console.log(category)
    console.log(this.category)
    this.page=0
    this.category=category
    
  }

}
