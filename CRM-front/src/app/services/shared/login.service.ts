import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'http://localhost:8765/usuarios/login/'
  
  constructor(private http: HttpClient) {
  }

  login (userData: any): Observable<JSON>{
    return this.http.post<JSON>(this.baseUrl, userData)
  }

  generateLoginArray (fg: any) {
    var retorno = {
      'email': fg.controls.email.value, 
      'senha': fg.controls.senha.value
    };
    return retorno;
  }
}
