import { User } from './../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    
  baseUrl = 'http://localhost:8765/usuarios/'

  constructor(private http: HttpClient) { }

  list(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl)
  }

  readById(id: string | null | number): Observable<JSON> {
    const url =`${this.baseUrl}view/${id}`
    return this.http.get<JSON>(url)
  }

  update(user: any, id_user:any): Observable<JSON> {
    const url =`${this.baseUrl}edit/${id_user}`
    return this.http.post<JSON>(url,user)
  }

  delete(id: number): Observable<JSON> {
    const url =`${this.baseUrl}delete/${id}`
    return this.http.delete<JSON>(url)
  }

  generateArrayUser(fg: any) {
    var retorno = {
      'email': fg.controls.email.value, 
      'permissao': fg.controls.permissao.value, 
      'senha': fg.controls.senha.value
    };
    return retorno;
  }

}
