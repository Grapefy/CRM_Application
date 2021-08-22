import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  mostrarMenuEmitter = new EventEmitter<boolean>()
  mostrarPainelEmitter = new EventEmitter<boolean>()
  
  constructor(private Router: Router) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    const token = window.localStorage.getItem('token');
    if (token) {
      this.mostrarMenuEmitter.emit(true);
      this.mostrarPainelEmitter.emit(true);
      return true;
    } else {
      this.Router.navigate(['']);
      this.mostrarMenuEmitter.emit(false);
      this.mostrarPainelEmitter.emit(false);
      return false;
    }
  }
  
}
