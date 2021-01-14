import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { User } from '../_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _users:Array<User>=new Array<User>({id:1,username:'Amit',password:'Adidas',role:'admin'},
  {id:2,username:'Amit2',password:'Adidas',role:'member'},
  {id:3,username:'Yonatan',password:'Puma',role:'member'},
  {id:4,username:'Yuvi',password:'Nike',role:'member'},

  // {id:3,name:'Puma',category:'bzaat',imageUrl:'https://www.pngfind.com/pngs/m/146-1460480_color-brilliancy-mens-puma-benny-black-white-textile.png',isAvaliable:true,price:30},
  // {id:4,name:'Diadora',category:'bzaat',imageUrl:'imageurl',isAvaliable:true,price:70},
    );
  public usersUpdate=new Subject()

  public addUser(user:User){
    user.id=this._users.length+1;
    this._users.push(user)
    this.usersUpdate.next()
    console.log(this._users)
    this.route.navigate(['/login'])
  }

  public getUsers():Observable<User[]>{
    return of(this._users)
  }

  public getSingleUser(id:number):Observable<User>{
    let user = this._users.find(value=>value.id==id)
    return of(user);

  }

  public removeUser(productid:number){
    this._users=this._users.filter(value=>value.id!=productid)
    this.usersUpdate.next()
  }

  constructor(private route:Router) { }
}
