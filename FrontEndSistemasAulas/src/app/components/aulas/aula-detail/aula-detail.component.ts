// src/app/components/aula-detail/aula-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Aula } from './../../../models/aula.model';
import { AulaService } from './../../../services/aula.service';
@Component({
  selector: 'app-aula-detail',
  templateUrl: './aula-detail.component.html',
  styleUrls: ['./aula-detail.component.css']
})
export class AulaDetailComponent implements OnInit {
  aulaForm: FormGroup;
  isEdit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private aulaService: AulaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.aulaForm = this.fb.group({
      id: [{value: '', disabled: true}],
      aula: ['', Validators.required],
      capacidad: ['', [Validators.required, Validators.min(1)]],
      ubicacion: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const aulaId = params.get('id');
      if (aulaId && aulaId !== 'new'){
        this.isEdit = true;
        this.aulaService.getById(+aulaId).subscribe(aula => {
          this.aulaForm.patchValue(aula);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.aulaForm.valid) {
      const formValue = this.aulaForm.getRawValue(); // Usa getRawValue() para incluir campos deshabilitados, si es necesario
      if (this.isEdit && formValue.id) { // Asegúrate de que 'id' exista para editar
        // Llamada al servicio para actualizar
        this.aulaService.update(formValue.id, formValue).subscribe({
          next: () => this.router.navigate(['/aulas']),
          error: (err) => console.error('Error al actualizar aula', err)
        });
      } else {
        // Llamada al servicio para crear, no incluyas 'id' en la creación
        delete formValue.id;
        this.aulaService.create(formValue).subscribe({
          next: () => this.router.navigate(['/aulas']),
          error: (err) => console.error('Error al crear aula', err)
        });
      }
    }
  }
}
