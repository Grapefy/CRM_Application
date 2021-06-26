import { Office } from 'src/app/models/office.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {
    
  baseUrl = 'http://localhost:8765/cargos/'

  constructor(private http: HttpClient) { }

  list(): Observable<Office[]> {
    return this.http.get<Office[]>(this.baseUrl)
  }

  readById(id: string | null): Observable<JSON> {
    const url =`${this.baseUrl}view/${id}`
    return this.http.get<JSON>(url)
  }

  create(setor: any): Observable<JSON>{
    return this.http.post<JSON>(this.baseUrl + 'add', setor)
  }

  update(offices: any, id_office:any): Observable<JSON> {
    const url =`${this.baseUrl}edit/${id_office}`
    return this.http.post<JSON>(url,offices)
  }

  delete(id: number): Observable<JSON> {
    const url =`${this.baseUrl}delete/${id}`
    return this.http.delete<JSON>(url)
  }

}
