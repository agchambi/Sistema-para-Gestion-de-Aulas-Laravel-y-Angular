import { TestBed } from '@angular/core/testing';

import { NivelEstudianteParaleloAulaService } from './nivel-estudiante-paralelo-aula.service';

describe('NivelEstudianteParaleloAulaService', () => {
  let service: NivelEstudianteParaleloAulaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NivelEstudianteParaleloAulaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
