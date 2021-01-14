import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/_models/user.model';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css']
})
export class AdminGetAllUsersComponent implements OnInit {

  public usersSubscription:Subscription
  public _users:Array<User> = new Array<User>();
  constructor(private UserService:UsersService) { }

  ngOnInit(): void {
    this.UserService.getUsers().subscribe(users=>this._users=users)
    this.usersSubscription = this.UserService.usersUpdate.subscribe(async()=>{
      this.UserService.getUsers().subscribe(users=>this._users=users)
    })
  }

  onDeleteProduct(userId:number){
    this.UserService.removeUser(userId)
  }

}
