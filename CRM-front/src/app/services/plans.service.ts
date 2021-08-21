import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
    
  baseUrl = 'http://localhost:8765/planos/'

  constructor(private http: HttpClient) { }

  list(): Observable<JSON[]> {
    return this.http.get<JSON[]>(this.baseUrl)
  }

  readById(id: string | null): Observable<JSON> {
    const url =`${this.baseUrl}view/${id}`
    return this.http.get<JSON>(url)
  }

  create(plano: any): Observable<JSON>{
    return this.http.post<JSON>(this.baseUrl + 'add', plano)
  }

  update(offices: any, id_office:any): Observable<JSON> {
    const url =`${this.baseUrl}edit/${id_office}`
    return this.http.post<JSON>(url,offices)
  }

  delete(id: number): Observable<JSON> {
    const url =`${this.baseUrl}delete/${id}`
    return this.http.delete<JSON>(url)
  }

    generateArrayPlan(fg: any) {
        var retorno = {
            'nome': fg.controls.nome.value, 
            'recorrencia': fg.controls.recorrencia.value, 
            'valor': fg.controls.valor.value,
            'tipoplano': fg.controls.tipoplano.value,
            'detalhes': fg.controls.detalhes.value
        };
        return retorno;
    }


}
