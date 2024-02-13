import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudianteService } from './../../../services/estudiante.service'; // Asegúrate de que la ruta sea correcta
import { Estudiante } from './../../../models/estudiante.model'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-estudiante-detail',
  templateUrl: './estudiante-detail.component.html',
  styleUrls: ['./estudiante-detail.component.css']
})
export class EstudianteDetailComponent implements OnInit {
  estudianteForm: FormGroup;
  isEdit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private estudianteService: EstudianteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.estudianteForm = this.fb.group({
      id: [{value: '', disabled: true}],
      ci: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const estudianteId = params.get('id');
      if (estudianteId && estudianteId !== 'new') {
        this.isEdit = true;
        this.estudianteService.getById(+estudianteId).subscribe(estudiante => {
          this.estudianteForm.patchValue(estudiante);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.estudianteForm.valid) {
      const formValue = this.estudianteForm.getRawValue();
      if (this.isEdit && formValue.id) {
        this.estudianteService.update(formValue.id, formValue).subscribe({
          next: () => this.router.navigate(['/estudiantes']),
          error: (err) => console.error('Error al actualizar estudiante', err)
        });
      } else {
        delete formValue.id; // Elimina 'id' para la creación ya que debería ser generado por el backend
        this.estudianteService.create(formValue).subscribe({
          next: () => this.router.navigate(['/estudiantes']),
          error: (err) => console.error('Error al crear estudiante', err)
        });
      }
    }
  }

  cancel(): void {
    this.router.navigate(['/estudiantes']);
  }
}
