import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Horario } from '../models/horario.model';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  private apiUrl = 'http://localhost:8000/api/horarios';

  constructor(private http: HttpClient) { }

  // Obtener todos los horarios
  getAll(): Observable<Horario[]> {
    return this.http.get<Horario[]>(this.apiUrl);
  }

  // Obtener un horario por ID
  getById(id: number): Observable<Horario> {
    return this.http.get<Horario>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo horario
  create(horario: Horario): Observable<Horario> {
    return this.http.post<Horario>(this.apiUrl, horario);
  }

  // Actualizar un horario existente
  update(id: number, horario: Horario): Observable<Horario> {
    return this.http.put<Horario>(`${this.apiUrl}/${id}`, horario);
  }

  // Eliminar un horario
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
