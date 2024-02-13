import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HorarioMateriaAula } from './../models/horario-materia-aula.model';

@Injectable({
  providedIn: 'root'
})
export class HorarioMateriaAulaService {
  private apiUrl = 'http://localhost:8000/api/horario-materia-aulas';

  constructor(private http: HttpClient) { }

  // Obtener todas las relaciones HorarioMateriaAula
  getAll(): Observable<HorarioMateriaAula[]> {
    return this.http.get<HorarioMateriaAula[]>(this.apiUrl);
  }

  // Obtener una relación HorarioMateriaAula por ID
  getById(id: number): Observable<HorarioMateriaAula> {
    return this.http.get<HorarioMateriaAula>(`${this.apiUrl}/${id}`);
  }

  // Crear una nueva relación HorarioMateriaAula
  create(horarioMateriaAula: HorarioMateriaAula): Observable<HorarioMateriaAula> {
    return this.http.post<HorarioMateriaAula>(this.apiUrl, horarioMateriaAula);
  }

  // Actualizar una relación HorarioMateriaAula existente
  update(id: number, horarioMateriaAula: HorarioMateriaAula): Observable<HorarioMateriaAula> {
    return this.http.put<HorarioMateriaAula>(`${this.apiUrl}/${id}`, horarioMateriaAula);
  }

  // Eliminar una relación HorarioMateriaAula
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
