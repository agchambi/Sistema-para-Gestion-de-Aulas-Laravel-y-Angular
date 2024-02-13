import { Router } from '@angular/router';
import { Aula } from './../../../models/aula.model';
import { AulaService } from './../../../services/aula.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-aulas-list',
  templateUrl: './aulas-list.component.html',
  styleUrls: ['./aulas-list.component.css']
})
export class AulasListComponent implements OnInit {
  aulas: Aula[] = [];
  dataSource: MatTableDataSource<Aula>;
  displayedColumns: string[] = ['id', 'nombre', 'capacidad','ubicacion','acciones'];

  constructor(private aulaService: AulaService,private router: Router) {
    this.dataSource = new MatTableDataSource<Aula>();
  }

  ngOnInit(): void {
    this.getAulas();
  }

  getAulas(): void {
    this.aulaService.getAll().subscribe(
      (aulas) => {
        this.dataSource.data = aulas;
      },
      (error) => {
        // Manejar el error adecuadamente
        console.error('Error al obtener las aulas', error);
      }
    );
  }

  editarAula(aula: Aula): void {
    this.router.navigate(['/aulas', aula.id]);
  }

  eliminarAula(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta aula?')) {
      this.aulaService.delete(id).subscribe(
        () => {
          // Actualiza la lista de aulas
          this.aulas = this.aulas.filter((aula) => aula.id !== id);
        },
        (error) => {
          // Manejar el error adecuadamente
          console.error('Error al eliminar la aula', error);
        }
      );
    }
  }
}
