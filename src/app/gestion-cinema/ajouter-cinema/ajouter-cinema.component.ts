import { Component, OnInit } from '@angular/core';
import { Cinema } from 'src/app/model/cinema';
import { GestionCinemaService } from 'src/app/services/gestion-cinema.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-ajouter-cinema',
  templateUrl: './ajouter-cinema.component.html',
  styleUrls: ['./ajouter-cinema.component.scss'],
})
export class AjouterCinemaComponent implements OnInit {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  cinema: Cinema = new Cinema();
  constructor(
    private cinemaService: GestionCinemaService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  saveCinema() {
    this.cinemaService.createCinema(this.cinema).subscribe(
      (data) => {
        console.log(data);
        this.goToCinemaList();
      },
      (error) => console.log(error)
    );
  }

  goToCinemaList() {
    this.router.navigate(['/gestion-cinema']);
  }

  onSubmit() {
    console.log(this.cinema);
    this.saveCinema();
  }
}
