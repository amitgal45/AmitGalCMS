import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }

  onLogin(form:FormGroup){
    this.authService.onLogin(form)
    .then(val=>{
      if(val!=undefined){
        this.authService.authSubject.next(val)
      }
    })
    .catch(e=>{alert(e)})
  

    
  }

  ngOnInit(): void {
  }

}
