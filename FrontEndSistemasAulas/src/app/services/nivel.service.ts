import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nivel } from '../models/nivel.model';

@Injectable({
  providedIn: 'root'
})
export class NivelService {
  private apiUrl = 'http://localhost:8000/api/niveles';

  constructor(private http: HttpClient) { }

  // Obtener todos los niveles
  getAll(): Observable<Nivel[]> {
    return this.http.get<Nivel[]>(this.apiUrl);
  }

  // Obtener un nivel por ID
  getById(id: number): Observable<Nivel> {
    return this.http.get<Nivel>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo nivel
  create(nivel: Nivel): Observable<Nivel> {
    return this.http.post<Nivel>(this.apiUrl, nivel);
  }

  // Actualizar un nivel existente
  update(id: number, nivel: Nivel): Observable<Nivel> {
    return this.http.put<Nivel>(`${this.apiUrl}/${id}`, nivel);
  }

  // Eliminar un nivel
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
