import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-admin-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class AdminLogInComponent implements OnInit {

  constructor(private authService:AuthService) { }

  onLogin(form:FormGroup){
    this.authService.onLogin(form)
    
  }

  ngOnInit(): void {
  }

}
