import { Component, OnInit } from '@angular/core';
import { Cinema } from 'src/app/model/cinema';
import { GestionCinemaService } from 'src/app/services/gestion-cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {
  cinemas:Cinema[];
  constructor(private cinemaService: GestionCinemaService) {}

  ngOnInit(): void {
    this.getCinema();
  }
  private getCinema() {
    this.cinemaService.getCinemaList().subscribe((data) => {
      this.cinemas = data;
    });

}
}
