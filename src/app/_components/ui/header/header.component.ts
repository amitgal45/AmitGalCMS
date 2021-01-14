import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'
import { User } from 'src/app/_models/user.model';
import { AuthService } from 'src/app/_services/auth.service';
import { GeneralService } from 'src/app/_services/general.service';
import { ProductsService } from 'src/app/_services/products.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  _user: User;
  _settings: any;
  _cart:any[];
  userSubscription = new Subscription;
  settingsSubscription = new Subscription;
  overCart:boolean=false;
  cartSubscription=new Subscription;

  constructor(private authService: AuthService,private productService:ProductsService, private generalService: GeneralService) {
    
  }

  
  ngOnInit(): void {
    this._user = null;
    this._settings = this.generalService.getHeaderObj();
    // this._user = this.authService.getUser()
    this.userSubscription = this.authService.authSubject.subscribe((user: User) => {
      this._user = user;
      console.log(this._user)
    })
    this.productService.getCartItems().subscribe(cart=>this._cart=cart)

    this.cartSubscription = this.productService.cartUpdate.subscribe(val=>
      this._cart=val as any[])

    this.settingsSubscription = this.generalService.settingsSubject.subscribe((user: User) => {
      this._settings = this.generalService.getHeaderObj()
    })
  }

}
