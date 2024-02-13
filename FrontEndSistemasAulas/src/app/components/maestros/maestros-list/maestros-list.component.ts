import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MaestroService } from './../../../services/maestro.service'; // Ajusta la ruta según tu estructura
import { Maestro } from './../../../models/maestro.model'; // Ajusta la ruta según tu estructura
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-maestros-list',
  templateUrl: './maestros-list.component.html',
  styleUrls: ['./maestros-list.component.css']
})
export class MaestrosListComponent implements OnInit {
  dataSource: MatTableDataSource<Maestro>;
  displayedColumns: string[] = ['id', 'ci', 'nombre', 'apellido', 'telefono', 'acciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private maestroService: MaestroService,
    private router: Router
  ) {
    this.dataSource = new MatTableDataSource<Maestro>();
  }

  ngOnInit(): void {
    this.getMaestros();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getMaestros(): void {
    this.maestroService.getAll().subscribe(
      (maestros) => {
        this.dataSource.data = maestros;
      },
      (error) => {
        console.error('Error al obtener los maestros', error);
      }
    );
  }

  agregarMaestro(): void {
    this.router.navigate(['/maestros/new']);
  }

  modificarMaestro(maestro: Maestro): void {
    this.router.navigate(['/maestros', maestro.id]);
  }

  eliminarMaestro(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este maestro?')) {
      this.maestroService.delete(id).subscribe(
        () => {
          this.dataSource.data = this.dataSource.data.filter((m) => m.id !== id);
        },
        (error) => {
          console.error('Error al eliminar el maestro', error);
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
