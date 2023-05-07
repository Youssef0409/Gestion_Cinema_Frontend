import { TestBed } from '@angular/core/testing';

import { GestionTicketService } from './gestion-ticket.service';

describe('GestionTicketService', () => {
  let service: GestionTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
