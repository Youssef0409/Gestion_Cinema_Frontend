import { Component, OnInit } from '@angular/core';
import { Salle } from 'src/app/model/salle';
import { GestionSalleService } from 'src/app/services/gestion-salle.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.scss']
})
export class SalleComponent implements OnInit {
  salles:Salle[];
  constructor(
    private gestiondsalleservice: GestionSalleService
   ) {}

  ngOnInit(): void {
    this.getsalle();
  }
  private getsalle() {
    this.gestiondsalleservice.getAllSalles().subscribe((data) => {
      this.salles = data;
    });
 
  }}
