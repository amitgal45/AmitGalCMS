import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'admin-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private UsersService:UsersService) { }

  onAddUser(form:NgForm){
    this.UsersService.addUser(form.value)
    // console.log(form.value)

  }
  ngOnInit(): void {
  }

}
