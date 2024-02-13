import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AulasListComponent } from './components/aulas/aulas-list/aulas-list.component';
import { AulaDetailComponent } from './components/aulas/aula-detail/aula-detail.component';
import { EstudiantesListComponent } from './components/estudiantes/estudiantes-list/estudiantes-list.component';
import { EstudianteDetailComponent } from './components/estudiantes/estudiante-detail/estudiante-detail.component';
import { HorariosListComponent } from './components/horarios/horarios-list/horarios-list.component';
import { HorarioDetailComponent } from './components/horarios/horario-detail/horario-detail.component';
import { MateriasListComponent } from './components/materias/materias-list/materias-list.component';
import { MateriaDetailComponent } from './components/materias/materia-detail/materia-detail.component';
import { MaestrosListComponent } from './components/maestros/maestros-list/maestros-list.component';
import { MaestroDetailComponent } from './components/maestros/maestro-detail/maestro-detail.component';
import { NivelesListComponent } from './components/niveles/niveles-list/niveles-list.component';
import { NivelDetailComponent } from './components/niveles/nivel-detail/nivel-detail.component';
import { ParalelosListComponent } from './components/paralelos/paralelos-list/paralelos-list.component';
import { ParaleloDetailComponent } from './components/paralelos/paralelo-detail/paralelo-detail.component';
import { HorarioMateriaAulaListComponent } from './components/horario-materia-aula/horario-materia-aula-list/horario-materia-aula-list.component';
import { HorarioMateriaAulaDetailComponent } from './components/horario-materia-aula/horario-materia-aula-detail/horario-materia-aula-detail.component';
import { NivelEstudianteParaleloAulaListComponent } from './components/nivel-estudiante-paralelo-aula/nivel-estudiante-paralelo-aula-list/nivel-estudiante-paralelo-aula-list.component';
import { NivelEstudianteParaleloAulaDetailComponent } from './components/nivel-estudiante-paralelo-aula/nivel-estudiante-paralelo-aula-detail/nivel-estudiante-paralelo-aula-detail.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AulasListComponent,
    AulaDetailComponent,
    EstudiantesListComponent,
    EstudianteDetailComponent,
    HorariosListComponent,
    HorarioDetailComponent,
    MateriasListComponent,
    MateriaDetailComponent,
    MaestrosListComponent,
    MaestroDetailComponent,
    NivelesListComponent,
    NivelDetailComponent,
    ParalelosListComponent,
    ParaleloDetailComponent,
    HorarioMateriaAulaListComponent,
    HorarioMateriaAulaDetailComponent,
    NivelEstudianteParaleloAulaListComponent,
    NivelEstudianteParaleloAulaDetailComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginator,
    MatSort,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
