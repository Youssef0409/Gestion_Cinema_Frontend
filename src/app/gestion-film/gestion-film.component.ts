import { Component, OnInit, ViewChild } from '@angular/core';
import { GestionFilmService } from '../services/gestion-film.service';
import { Router } from '@angular/router';
import { Film } from '../model/film';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private router: Router, private snackBar: MatSnackBar) { }

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
    this.filmService.deleteFilm(id)
      .subscribe(
        () => {
          console.log('Film supprimé avec succès');
          this.snackBar.open('Film supprimé avec succès', 'Fermer', {
            duration: 3000,
            verticalPosition: 'top'
          });
          this.getFilm();
        },
        (error) => {
          console.error('Erreur lors de la suppression du film', error);
          this.snackBar.open('Une erreur est survenue lors de la suppression du film.', 'Fermer', {
            duration: 3000,
            verticalPosition: 'top'
          });
        }
      );
  }


}
