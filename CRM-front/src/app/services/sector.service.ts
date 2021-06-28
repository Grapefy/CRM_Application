import { Sector } from 'src/app/models/sector.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
    
  baseUrl = 'http://localhost:8765/setors/'

  constructor(private http: HttpClient) { }

  list(): Observable<Sector[]> {
    return this.http.get<Sector[]>(this.baseUrl)
  }

  readById(id: string | null): Observable<JSON> {
    const url =`${this.baseUrl}view/${id}`
    return this.http.get<JSON>(url)
  }

  create(setor: any): Observable<JSON>{
    return this.http.post<JSON>(this.baseUrl + 'add', setor)
  }

  update(setors: any, is_setor:any): Observable<JSON> {
    const url =`${this.baseUrl}edit/${is_setor}`
    return this.http.post<JSON>(url,setors)
  }

  delete(id: number): Observable<JSON> {
    const url =`${this.baseUrl}delete/${id}`
    return this.http.delete<JSON>(url)
  }

}
