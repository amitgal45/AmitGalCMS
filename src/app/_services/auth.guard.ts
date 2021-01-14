import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) { }
  canActivate(): boolean {
    if (this.auth.getUser() == null) {
      let isAuthenticated = this.auth.isAuthenticated2()
      if (!isAuthenticated) {
        this.router.navigate(['/login'])
        return false
      }
      return true;
    }
    return true
  }
}