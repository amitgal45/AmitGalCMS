import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AdminGuardService implements CanActivate {
  constructor(public AuthService: AuthService, public router: Router) {}
  canActivate(): boolean {
    console.log('Authentication')
    if (!this.AuthService.isAdmin()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}