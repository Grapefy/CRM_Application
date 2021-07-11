import { Employee } from './../models/employee.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    
  baseUrl = 'http://localhost:8765/funcionarios/'

  constructor(private http: HttpClient) { }

  list(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl)
  }

  readById(id: string | null): Observable<JSON> {
    const url =`${this.baseUrl}view/${id}`
    return this.http.get<JSON>(url)
  }

  create(funcionarios: any): Observable<JSON>{
    return this.http.post<JSON>(this.baseUrl + 'add', funcionarios)
  }

  update(funcionarios: any, id_funcionario:any): Observable<JSON> {
    const url =`${this.baseUrl}edit/${id_funcionario}`
    return this.http.post<JSON>(url,funcionarios)
  }

  delete(id: number): Observable<JSON> {
    const url =`${this.baseUrl}delete/${id}`
    return this.http.delete<JSON>(url)
  }

  generateArrayEmployee(fg: any) {
    var retorno = {
      'nome': fg.controls.nome.value, 
      'email': fg.controls.email.value, 
      'fone': fg.controls.fone.value, 
      'dt_nascimento': fg.controls.dt_nascimento.value
    };
    return retorno;
  }

}
