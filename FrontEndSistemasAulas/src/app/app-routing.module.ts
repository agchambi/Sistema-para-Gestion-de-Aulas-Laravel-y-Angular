import { MenuComponent } from './components/menu/menu.component';
import { NivelEstudianteParaleloAulaDetailComponent } from './components/nivel-estudiante-paralelo-aula/nivel-estudiante-paralelo-aula-detail/nivel-estudiante-paralelo-aula-detail.component';
import { NivelEstudianteParaleloAulaListComponent } from './components/nivel-estudiante-paralelo-aula/nivel-estudiante-paralelo-aula-list/nivel-estudiante-paralelo-aula-list.component';
import { HorarioMateriaAulaDetailComponent } from './components/horario-materia-aula/horario-materia-aula-detail/horario-materia-aula-detail.component';
import { HorarioMateriaAulaListComponent } from './components/horario-materia-aula/horario-materia-aula-list/horario-materia-aula-list.component';
import { ParaleloDetailComponent } from './components/paralelos/paralelo-detail/paralelo-detail.component';
import { ParalelosListComponent } from './components/paralelos/paralelos-list/paralelos-list.component';
import { NivelDetailComponent } from './components/niveles/nivel-detail/nivel-detail.component';
import { NivelesListComponent } from './components/niveles/niveles-list/niveles-list.component';
import { MaestroDetailComponent } from './components/maestros/maestro-detail/maestro-detail.component';
import { MaestrosListComponent } from './components/maestros/maestros-list/maestros-list.component';
import { MateriaDetailComponent } from './components/materias/materia-detail/materia-detail.component';
import { MateriasListComponent } from './components/materias/materias-list/materias-list.component';
import { HorarioDetailComponent } from './components/horarios/horario-detail/horario-detail.component';
import { HorariosListComponent } from './components/horarios/horarios-list/horarios-list.component';
import { EstudianteDetailComponent } from './components/estudiantes/estudiante-detail/estudiante-detail.component';
import { EstudiantesListComponent } from './components/estudiantes/estudiantes-list/estudiantes-list.component';
import { AulaDetailComponent } from './components/aulas/aula-detail/aula-detail.component';
import { AulasListComponent } from './components/aulas/aulas-list/aulas-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'aulas', component: AulasListComponent },
  { path: 'aulas/:id', component: AulaDetailComponent },
  { path: 'estudiantes', component: EstudiantesListComponent },
  { path: 'estudiantes/:id', component: EstudianteDetailComponent },
  { path: 'horarios', component: HorariosListComponent },
  { path: 'horarios/:id', component: HorarioDetailComponent },
  { path: 'materias', component: MateriasListComponent },
  { path: 'materias/:id', component: MateriaDetailComponent },
  { path: 'maestros', component: MaestrosListComponent },
  { path: 'maestros/:id', component: MaestroDetailComponent },
  { path: 'niveles', component: NivelesListComponent },
  { path: 'niveles/:id', component: NivelDetailComponent },
  { path: 'paralelos', component: ParalelosListComponent },
  { path: 'paralelos/:id', component: ParaleloDetailComponent },
  { path: 'horario-materia-aula', component: HorarioMateriaAulaListComponent },
  { path: 'horario-materia-aula/:id', component: HorarioMateriaAulaDetailComponent },
  { path: 'nivel-estudiante-paralelo-aula', component: NivelEstudianteParaleloAulaListComponent },
  { path: 'nivel-estudiante-paralelo-aula/:id', component: NivelEstudianteParaleloAulaDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
