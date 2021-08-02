import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private Router: Router) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    const token = window.localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      this.Router.navigate(['']);
      return false;
    }
  }
  
}
