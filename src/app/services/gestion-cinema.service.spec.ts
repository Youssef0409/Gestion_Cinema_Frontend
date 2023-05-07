import { TestBed } from '@angular/core/testing';

import { GestionCinemaService } from './gestion-cinema.service';

describe('GestionCinemaService', () => {
  let service: GestionCinemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionCinemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
