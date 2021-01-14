import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs'
import { User } from '../_models/user.model'
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private users:Array<User>=[{idusername:'Amit',password:'123456',role:'admin'}]
  private _user: User = null;
  public authSubject = new Subject;




  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  public isAuthenticated2(): boolean {

    // console.log(JSON.parse(localStorage.getItem('token')))
    if (localStorage.getItem('token')) {

      let user = JSON.parse(localStorage.getItem('token'))
      let users;
       this.UserSerivce.getUsers().subscribe(
        val => {
          users = val.find(val => val.username == user.username && val.password == user.password)
          console.log('users')
          console.log(users)
          if (users != undefined) {
            localStorage.setItem('token', JSON.stringify(users))
            console.log(users)
            this.authSubject.next(users)
            this._user = users
            return false
          }
          else {
            this.authSubject.next(null)
            this._user == null;
            return true
          }
          


        }

        
      )
      return true;
    }
    console.log('goes to true')
    return false;
  }


  public isAdmin() {
    if (this.getUser() == null)
      return false;
    return this.getUser().role == 'admin' ? true : false;
  }

  getUser() {
    if (this._user == null)
      return null
    return { ...this._user }
  }

  async onLogin(form: any) {
    let users;
    await this.UserSerivce.getUsers().subscribe(
      val => {
        users = val.find(val => val.username == form.value.username && val.password == form.value.password)
        console.log(users)
        if (users != undefined) {
          this._user = users
          localStorage.setItem('token', JSON.stringify(users))
          this.authSubject.next(users)
          this.route.navigate(['/'])
        }
        else {
          throw new Error('אחד הפרטים שגויים')

        }
      }
    )


  }

  onLogout() {
    this._user = null;
    this.authSubject.next(null)
  }
  constructor(private jwtHelper: JwtHelperService, private route: Router, private UserSerivce: UsersService) { }

}
