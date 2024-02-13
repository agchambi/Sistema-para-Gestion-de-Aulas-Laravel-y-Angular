import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaestroService } from './../../../services/maestro.service'; // Asegúrate de que la ruta sea correcta
import { Maestro } from './../../../models/maestro.model'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-maestro-detail',
  templateUrl: './maestro-detail.component.html',
  styleUrls: ['./maestro-detail.component.css']
})
export class MaestroDetailComponent implements OnInit {
  maestroForm: FormGroup;
  isEdit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private maestroService: MaestroService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.maestroForm = this.fb.group({
      id: [{value: '', disabled: true}],
      ci: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const maestroId = params.get('id');
      if (maestroId && maestroId !== 'new') {
        this.isEdit = true;
        this.maestroService.getById(+maestroId).subscribe(maestro => {
          this.maestroForm.patchValue(maestro);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.maestroForm.valid) {
      const formValue = this.maestroForm.getRawValue();
      if (this.isEdit && formValue.id) {
        this.maestroService.update(formValue.id, formValue).subscribe({
          next: () => this.router.navigate(['/maestros']),
          error: (err) => console.error('Error al actualizar maestro', err)
        });
      } else {
        delete formValue.id; // Elimina 'id' para la creación ya que debería ser generado por el backend
        this.maestroService.create(formValue).subscribe({
          next: () => this.router.navigate(['/maestros']),
          error: (err) => console.error('Error al crear maestro', err)
        });
      }
    }
  }
}
