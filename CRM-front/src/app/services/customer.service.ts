import { Customer } from './../models/customer.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
    
  baseUrl = 'http://localhost:8765/clientes/'

  constructor(private http: HttpClient) { }

  list(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl)
  }

  readById(id: string | null): Observable<JSON> {
    const url =`${this.baseUrl}view/${id}`
    return this.http.get<JSON>(url)
  }

  create(clientes: any): Observable<JSON>{
    return this.http.post<JSON>(this.baseUrl + 'add', clientes)
  }

  update(clientes: any, id_cliente:any): Observable<JSON> {
    const url =`${this.baseUrl}edit/${id_cliente}`
    return this.http.post<JSON>(url,clientes)
  }

  delete(id: number): Observable<JSON> {
    const url =`${this.baseUrl}delete/${id}`
    return this.http.delete<JSON>(url)
  }

  generateArrayCliente(fg: any) {
    var retorno = {
      'nome': fg.controls.nome.value, 
      'email': fg.controls.email.value, 
      'fone': fg.controls.fone.value, 
      'dt_nascimento': fg.controls.dt_nascimento.value,
      'cpf': fg.controls.cpf.value,
      'cnpj': fg.controls.cnpj.value
    };
    return retorno;
  }

}
