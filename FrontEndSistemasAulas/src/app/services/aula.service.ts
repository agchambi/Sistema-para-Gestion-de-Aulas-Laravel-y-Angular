import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aula } from '../models/aula.model';

@Injectable({
  providedIn: 'root'
})
export class AulaService {
  private apiUrl = 'http://localhost:8000/api/aulas';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Aula[]> {
    return this.http.get<Aula[]>(this.apiUrl);
  }

  getById(id: number): Observable<Aula> {
    return this.http.get<Aula>(`${this.apiUrl}/${id}`);
  }

  create(aula: Aula): Observable<Aula> {
    return this.http.post<Aula>(this.apiUrl, aula);
  }

  update(id: number, aula: Aula): Observable<Aula> {
    return this.http.put<Aula>(`${this.apiUrl}/${id}`, aula);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
