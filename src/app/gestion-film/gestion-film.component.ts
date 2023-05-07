import { Component, OnInit } from '@angular/core';
import { GestionFilmService } from '../services/gestion-film.service';
import { Router } from '@angular/router';
import { Film } from '../model/film';

@Component({
  selector: 'app-gestion-film',
  templateUrl: './gestion-film.component.html',
  styleUrls: ['./gestion-film.component.scss']
})
export class GestionFilmComponent implements OnInit {
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  films :Film[];
  constructor(private filmService: GestionFilmService,
    private router: Router) { }

  ngOnInit(): void {
    this.getFilm();
  }
  private getFilm() {
    this.filmService.getFilmList().subscribe((data) => {
      this.films = data;
     
    });
  }

  updateFilm(id: number) {
    this.router.navigate(['/update-film', id]);
  }

  deleteFilm(id: number) {
    this.filmService.deleteFilm(id).subscribe((data) => {
      console.log(data);
      this.getFilm();
    });
  }


}
