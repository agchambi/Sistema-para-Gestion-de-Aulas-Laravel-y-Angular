import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NivelEstudianteParaleloAula } from './../models/nivel-estudiante-paralelo-aula.model';
@Injectable({
  providedIn: 'root'
})
export class NivelEstudianteParaleloAulaService {
  private apiUrl = 'http://localhost:8000/api/nivel-estudiante-paralelo-aulas';

  constructor(private http: HttpClient) { }

  getAll(): Observable<NivelEstudianteParaleloAula[]> {
    return this.http.get<NivelEstudianteParaleloAula[]>(this.apiUrl);
  }

  getById(id: number): Observable<NivelEstudianteParaleloAula> {
    return this.http.get<NivelEstudianteParaleloAula>(`${this.apiUrl}/${id}`);
  }

  create(nivelEstudianteParaleloAula: NivelEstudianteParaleloAula): Observable<NivelEstudianteParaleloAula> {
    return this.http.post<NivelEstudianteParaleloAula>(this.apiUrl, nivelEstudianteParaleloAula);
  }

  update(id: number, nivelEstudianteParaleloAula: NivelEstudianteParaleloAula): Observable<NivelEstudianteParaleloAula> {
    return this.http.put<NivelEstudianteParaleloAula>(`${this.apiUrl}/${id}`, nivelEstudianteParaleloAula);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
