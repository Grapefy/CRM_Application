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

//   readById(id: string | null): Observable<Customer> {
//     const url =`${this.baseUrl}view/${id}`
//     return this.http.get<Customer>(url)
//   }

//   create(clientes: Customer): Observable<Customer>{
//     return this.http.post<Customer>(this.baseUrl + 'add', JSON.stringify(clientes))
//   }

//   update(clientes: Customer): Observable<Customer> {
//     const url =`${this.baseUrl}edit/${clientes.id_cliente}`
//     return this.http.put<Customer>(url,clientes)
//   }

//   delete(id: number): Observable<Customer> {
//     const url =`${this.baseUrl}delete/${id}`
//     return this.http.delete<Customer>(url)
//   }

}
