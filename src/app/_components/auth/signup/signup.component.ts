import { Component, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { User } from 'src/app/_models/user.model';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private UserService:UsersService) { }

  onRegister(form:FormGroup){
    let user:User = {
      id:0,
      username:form.value.username,
      password:form.value.password,
      role:'משתמש',
    }
    this.UserService.addUser(user)
    
    // console.log(form.value)

  }
  ngOnInit(): void {
  }

}
