import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanTypeService {
    
  baseUrl = 'http://localhost:8765/tipoplanos/'

  constructor(private http: HttpClient) { }

  list(): Observable<JSON[]> {
    return this.http.get<JSON[]>(this.baseUrl)
  }

}
