import { Service } from './../models/service.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
    
  baseUrl = 'http://localhost:8765/servicos/'

  constructor(private http: HttpClient) { }

  list(): Observable<Service[]> {
    return this.http.get<Service[]>(this.baseUrl)
  }

  readById(id: string | null): Observable<JSON> {
    const url =`${this.baseUrl}view/${id}`
    return this.http.get<JSON>(url)
  }

  create(service: any): Observable<JSON>{
    return this.http.post<JSON>(this.baseUrl + 'add', service)
  }

  update(services: any, id_service:any): Observable<JSON> {
    const url =`${this.baseUrl}edit/${id_service}`
    return this.http.post<JSON>(url,services)
  }

  delete(id: number): Observable<JSON> {
    const url =`${this.baseUrl}delete/${id}`
    return this.http.delete<JSON>(url)
  }

  generateArrayService(fg: any) {
    var retorno = {
      'nome': fg.controls.nome.value, 
      'descricao': fg.controls.descricao.value, 
      'valor': fg.controls.valor.value,
      'setor_id': fg.controls.setor.value
    };
    return retorno;
  }

}
