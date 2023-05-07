import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCinemaComponent } from './ajouter-cinema.component';

describe('AjouterCinemaComponent', () => {
  let component: AjouterCinemaComponent;
  let fixture: ComponentFixture<AjouterCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterCinemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
