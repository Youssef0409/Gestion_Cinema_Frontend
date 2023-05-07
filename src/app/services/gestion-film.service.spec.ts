import { TestBed } from '@angular/core/testing';

import { GestionFilmService } from './gestion-film.service';

describe('GestionFilmService', () => {
  let service: GestionFilmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionFilmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
