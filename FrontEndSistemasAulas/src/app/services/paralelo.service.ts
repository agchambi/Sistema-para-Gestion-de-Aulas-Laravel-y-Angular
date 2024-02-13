import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paralelo } from '../models/paralelo.model';

@Injectable({
  providedIn: 'root'
})
export class ParaleloService {
  private apiUrl = 'http://localhost:8000/api/paralelos';

  constructor(private http: HttpClient) { }

  // Obtener todos los paralelos
  getAll(): Observable<Paralelo[]> {
    return this.http.get<Paralelo[]>(this.apiUrl);
  }

  // Obtener un paralelo por ID
  getById(id: number): Observable<Paralelo> {
    return this.http.get<Paralelo>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo paralelo
  create(paralelo: Paralelo): Observable<Paralelo> {
    return this.http.post<Paralelo>(this.apiUrl, paralelo);
  }

  // Actualizar un paralelo existente
  update(id: number, paralelo: Paralelo): Observable<Paralelo> {
    return this.http.put<Paralelo>(`${this.apiUrl}/${id}`, paralelo);
  }

  // Eliminar un paralelo
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
