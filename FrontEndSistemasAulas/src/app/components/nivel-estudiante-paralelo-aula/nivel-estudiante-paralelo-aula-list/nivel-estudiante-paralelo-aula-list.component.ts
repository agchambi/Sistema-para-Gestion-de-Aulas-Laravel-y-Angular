import { NivelEstudianteParaleloAulaService } from './../../../services/nivel-estudiante-paralelo-aula.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nivel-estudiante-paralelo-aula-list',
  templateUrl: './nivel-estudiante-paralelo-aula-list.component.html',
  styleUrls: ['./nivel-estudiante-paralelo-aula-list.component.css']
})
export class NivelEstudianteParaleloAulaListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nivel', 'estudiante', 'paralelo', 'aula', 'acciones'];
  dataSource!: MatTableDataSource<any>;


  constructor(private nivelEstudianteParaleloAulaService: NivelEstudianteParaleloAulaService,private router: Router) { }

  ngOnInit() {
    this.nivelEstudianteParaleloAulaService.getAll().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Métodos para agregar, modificar y eliminar
  agregarElemento() {
    // Navega a la ruta para agregar un nuevo elemento
    this.router.navigate(['/nivel-estudiante-paralelo-aula/new']);
  }

  modificarElemento(elemento: any) {
    // Llama al servicio para actualizar el elemento
    // Asegúrate de tener el ID y los datos actualizados del elemento
    this.nivelEstudianteParaleloAulaService.update(elemento.id, elemento).subscribe({
      next: (response) => {
        // Maneja la respuesta, por ejemplo, mostrando un mensaje de éxito
        console.log('Elemento actualizado con éxito', response);
        // Aquí puedes recargar los datos de la tabla o realizar otra acción necesaria
      },
      error: (error) => {
        // Maneja cualquier error que pueda ocurrir
        console.error('Ocurrió un error al actualizar el elemento', error);
      }
    });
  }

  eliminarElemento(id: number) {
    // Llama al servicio para eliminar el elemento
    this.nivelEstudianteParaleloAulaService.delete(id).subscribe({
      next: (response) => {
        // Maneja la respuesta, por ejemplo, mostrando un mensaje de éxito
        console.log('Elemento eliminado con éxito', response);
        // Aquí puedes recargar los datos de la tabla o realizar otra acción necesaria
      },
      error: (error) => {
        // Maneja cualquier error que pueda ocurrir
        console.error('Ocurrió un error al eliminar el elemento', error);
      }
    });
  }
}
