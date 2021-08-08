import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'http://localhost:8765/usuarios/'
  
  constructor(private http: HttpClient,  private Router: Router) {
  }

  login (userData: any): Observable<JSON>{
    return this.http.post<JSON>(this.baseUrl + 'login/', userData)
  }

  generateLoginArray (fg: any) {
    var retorno = {
      'email': fg.controls.email.value, 
      'senha': fg.controls.senha.value
    };
    return retorno;
  }

  canAccess (route: string): Observable<JSON>{
    var permission = window.localStorage.getItem('__permission__');
    if (!permission) {
      permission = null
    }
    return this.http.post<JSON>(this.baseUrl + 'checkRoute/', JSON.stringify({route: route, permission: permission}))
  }

}
