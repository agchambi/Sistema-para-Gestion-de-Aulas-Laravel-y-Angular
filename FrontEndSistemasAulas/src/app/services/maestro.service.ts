import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Maestro } from '../models/maestro.model';

@Injectable({
  providedIn: 'root'
})
export class MaestroService {
  private apiUrl = 'http://localhost:8000/api/maestros';

  constructor(private http: HttpClient) { }

    getAll(): Observable<Maestro[]> {
    return this.http.get<Maestro[]>(this.apiUrl);
  }

  getById(id: number): Observable<Maestro> {
    return this.http.get<Maestro>(`${this.apiUrl}/${id}`);
  }

  create(maestro: Maestro): Observable<Maestro> {
    return this.http.post<Maestro>(this.apiUrl, maestro);
  }

  update(id: number, maestro: Maestro): Observable<Maestro> {
    return this.http.put<Maestro>(`${this.apiUrl}/${id}`, maestro);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
