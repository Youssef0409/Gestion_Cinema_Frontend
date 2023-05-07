import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/model/film';
import { Salle } from 'src/app/model/salle';
import { GestionFilmService } from 'src/app/services/gestion-film.service';
import { GestionSalleService } from 'src/app/services/gestion-salle.service';

@Component({
  selector: 'app-ajouter-film',
  templateUrl: './ajouter-film.component.html',
  styleUrls: ['./ajouter-film.component.scss']
})
export class AjouterFilmComponent implements OnInit {
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  film : Film = new Film();
  salles: Salle[];
  constructor(private filmService: GestionFilmService,
    private salleService: GestionSalleService,
    private router: Router) { }

  ngOnInit(): void {
    this.salleService.getAllSalles().subscribe(
      data => {
        this.salles = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  onSubmit(): void {
    this.filmService.createFilm(this.film).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/gestion-film']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
