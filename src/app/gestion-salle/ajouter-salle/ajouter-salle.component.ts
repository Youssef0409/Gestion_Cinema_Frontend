import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cinema } from 'src/app/model/cinema';
import { Salle } from 'src/app/model/salle';
import { GestionCinemaService } from 'src/app/services/gestion-cinema.service';
import { GestionSalleService } from 'src/app/services/gestion-salle.service';

@Component({
  selector: 'app-ajouter-salle',
  templateUrl: './ajouter-salle.component.html',
  styleUrls: ['./ajouter-salle.component.scss']
})
export class AjouterSalleComponent implements OnInit {
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  salle: Salle = new Salle();
  cinemas: Cinema[];
  constructor(   private salleService: GestionSalleService,
    private cinemaService: GestionCinemaService,
    private router: Router) { }

  ngOnInit(): void {
    this.cinemaService.getCinemaList().subscribe(
      data => {
        this.cinemas = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(): void {
    this.salleService.createSalle(this.salle).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/gestion-salle']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
