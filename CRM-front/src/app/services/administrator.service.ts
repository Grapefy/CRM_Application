import { Administrador } from './../models/administrador.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {
    
  baseUrl = 'http://localhost:8765/administradors/'

  constructor(private http: HttpClient) { }

  list(): Observable<Administrador[]> {
    return this.http.get<Administrador[]>(this.baseUrl)
  }

  readById(id: string | null): Observable<JSON> {
    const url =`${this.baseUrl}view/${id}`
    return this.http.get<JSON>(url)
  }

  create(administradores: any): Observable<JSON>{
    return this.http.post<JSON>(this.baseUrl + 'add', administradores)
  }

  update(administrador: any, id_administrador: any): Observable<JSON> {
    const url =`${this.baseUrl}edit/${id_administrador}`
    return this.http.post<JSON>(url,administrador)
  }

  delete(id: number): Observable<JSON> {
    const url =`${this.baseUrl}delete/${id}`
    return this.http.delete<JSON>(url)
  }

  generateArrayCliente(fg: any) {
    var retorno = {
      'nome': fg.controls.nome.value, 
      'email': fg.controls.email.value, 
      'fone': fg.controls.fone.value
    };
    return retorno;
  }

}
