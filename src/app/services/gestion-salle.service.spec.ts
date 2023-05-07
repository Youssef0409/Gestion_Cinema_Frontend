import { TestBed } from '@angular/core/testing';

import { GestionSalleService } from './gestion-salle.service';

describe('GestionSalleService', () => {
  let service: GestionSalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionSalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
