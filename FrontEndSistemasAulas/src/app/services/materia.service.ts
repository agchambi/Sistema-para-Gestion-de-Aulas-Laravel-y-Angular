import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Materia } from '../models/materia.model';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  private apiUrl = 'http://localhost:8000/api/materias';

  constructor(private http: HttpClient) { }

  // Obtener todas las materias
  getAll(): Observable<Materia[]> {
    return this.http.get<Materia[]>(this.apiUrl);
  }

  // Obtener una materia por ID
  getById(id: number): Observable<Materia> {
    return this.http.get<Materia>(`${this.apiUrl}/${id}`);
  }

  // Crear una nueva materia
  create(materia: Materia): Observable<Materia> {
    return this.http.post<Materia>(this.apiUrl, materia);
  }

  // Actualizar una materia existente
  update(id: number, materia: Materia): Observable<Materia> {
    return this.http.put<Materia>(`${this.apiUrl}/${id}`, materia);
  }

  // Eliminar una materia
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
