import { TestBed } from '@angular/core/testing';

import { HorarioMateriaAulaService } from './horario-materia-aula.service';

describe('HorarioMateriaAulaService', () => {
  let service: HorarioMateriaAulaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorarioMateriaAulaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
