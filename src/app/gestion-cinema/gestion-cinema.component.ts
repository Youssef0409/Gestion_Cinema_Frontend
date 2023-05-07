import { Component, OnInit } from '@angular/core';
import { GestionCinemaService } from '../services/gestion-cinema.service';
import { Cinema } from '../model/cinema';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gestion-cinema',
  templateUrl: './gestion-cinema.component.html',
  styleUrls: ['./gestion-cinema.component.scss'],
})
export class GestionCinemaComponent implements OnInit {
  cinemas: Cinema[];
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor(
    private cinemaService: GestionCinemaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCinema();
  }
  private getCinema() {
    this.cinemaService.getCinemaList().subscribe((data) => {
      this.cinemas = data;
    });
  }

  updateCinema(id: number) {
    this.router.navigate(['/update-cinema', id]);
  }

  deleteCinema(id: number) {
    this.cinemaService.deleteCinema(id).subscribe((data) => {
      console.log(data);
      this.getCinema();
    });
  }
}
