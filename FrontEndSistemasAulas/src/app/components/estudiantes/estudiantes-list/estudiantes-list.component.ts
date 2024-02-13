import { Component, OnInit, ViewChild } from '@angular/core';
import { EstudianteService } from './../../../services/estudiante.service';
import { Estudiante } from './../../../models/estudiante.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiantes-list',
  templateUrl: './estudiantes-list.component.html',
  styleUrls: ['./estudiantes-list.component.css']
})
export class EstudiantesListComponent implements OnInit {
  dataSource: MatTableDataSource<Estudiante>;
  displayedColumns: string[] = ['id', 'ci', 'nombre', 'apellido', 'telefono', 'acciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private estudianteService: EstudianteService,
    private router: Router
  ) {
    this.dataSource = new MatTableDataSource<Estudiante>();
  }

  ngOnInit(): void {
    this.getEstudiantes();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getEstudiantes(): void {
    this.estudianteService.getAll().subscribe(
      (estudiantes) => {
        this.dataSource.data = estudiantes;
      },
      (error) => {
        console.error('Error al obtener los estudiantes', error);
      }
    );
  }

  agregarEstudiante(): void {
    this.router.navigate(['/estudiantes/new']);
  }

  modificarEstudiante(estudiante: Estudiante): void {
    this.router.navigate(['/estudiantes', estudiante.id]);
  }

  eliminarEstudiante(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este estudiante?')) {
      this.estudianteService.delete(id).subscribe(
        () => {
          this.dataSource.data = this.dataSource.data.filter((e) => e.id !== id);
        },
        (error) => {
          console.error('Error al eliminar el estudiante', error);
        }
      );
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
