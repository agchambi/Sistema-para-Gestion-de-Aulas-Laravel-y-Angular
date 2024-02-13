import { NivelEstudianteParaleloAula } from './../../../models/nivel-estudiante-paralelo-aula.model';
import { NivelEstudianteParaleloAulaService } from './../../../services/nivel-estudiante-paralelo-aula.service';
import { AulaService } from './../../../services/aula.service';
import { ParaleloService } from './../../../services/paralelo.service';
import { EstudianteService } from './../../../services/estudiante.service';
import { NivelService } from './../../../services/nivel.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-nivel-estudiante-paralelo-aula-detail',
  templateUrl: './nivel-estudiante-paralelo-aula-detail.component.html',
  styleUrls: ['./nivel-estudiante-paralelo-aula-detail.component.css']
})
export class NivelEstudianteParaleloAulaDetailComponent implements OnInit {
  inscripcionForm: FormGroup;
  niveles: any[] = []; // Ajusta según tu modelo de Nivel
  estudiantes: any[] = []; // Ajusta según tu modelo de Estudiante
  paralelos: any[] = []; // Ajusta según tu modelo de Paralelo
  aulas: any[] = []; // Ajusta según tu modelo de Aula

  constructor(
    private fb: FormBuilder,
    private nivelService: NivelService,
    private estudianteService: EstudianteService,
    private paraleloService: ParaleloService,
    private aulaService: AulaService,
    private nivelEstudianteParaleloAulaService: NivelEstudianteParaleloAulaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.inscripcionForm = this.fb.group({
      idEstudiante: ['', Validators.required],
      idNivel: ['', Validators.required],
      idParalelo: ['', Validators.required],
      idAula: ['', Validators.required],
      anio: [new Date().getFullYear().toString(), Validators.required]
    });
  }

  ngOnInit(): void {
    this.cargarEstudiantes();
    this.cargarNiveles();
    this.cargarParalelos();
    this.cargarAulas();
  }

  cargarEstudiantes(): void {
    this.estudianteService.getAll().subscribe({
      next: (estudiantes) => this.estudiantes = estudiantes,
      error: (err) => console.error('Error al cargar estudiantes', err)
    });
  }

  cargarNiveles(): void {
    this.nivelService.getAll().subscribe({
      next: (niveles) => this.niveles = niveles,
      error: (err) => console.error('Error al cargar niveles', err)
    });
  }

  cargarParalelos(): void {
    this.paraleloService.getAll().subscribe({
      next: (paralelos) => this.paralelos = paralelos,
      error: (err) => console.error('Error al cargar paralelos', err)
    });
  }

  cargarAulas(): void {
    this.aulaService.getAll().subscribe({
      next: (aulas) => this.aulas = aulas,
      error: (err) => console.error('Error al cargar aulas', err)
    });
  }



  onSubmit(): void {
    if (this.inscripcionForm.valid) {
      // Asegúrate de que las claves del objeto coincidan exactamente con lo que espera el backend
      const inscripcionData:any = {
        id_nivel: this.inscripcionForm.value.idNivel,
        id_estudiante: this.inscripcionForm.value.idEstudiante,
        id_paralelo: this.inscripcionForm.value.idParalelo,
        id_aula: this.inscripcionForm.value.idAula,
        anio: this.inscripcionForm.value.anio  // Verifica si el backend espera "año" o "ano"
      };

      this.nivelEstudianteParaleloAulaService.create(inscripcionData).subscribe({
        next: (res) => {
          console.log('Inscripción creada con éxito', res);
          // Maneja la navegación tras una creación exitosa o muestra un mensaje de confirmación
          this.router.navigate(['/nivel-estudiante-paralelo-aula']); // Ajusta a tu ruta real
        },
        error: (err) => {
          console.error('Error al crear la inscripción', err);
          // Maneja los errores mostrando un mensaje al usuario, por ejemplo
        }
      });
    }
  }



  // Considera agregar métodos para manejar cambios en la selección de nivel que afecten los paralelos y aulas disponibles
}
