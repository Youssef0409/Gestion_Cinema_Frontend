import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/model/film';
import { GestionFilmService } from 'src/app/services/gestion-film.service';

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.scss']
})
export class FilmsDetailsComponent implements OnInit {
  films:Film[];

  constructor(private gestionFilmService:GestionFilmService) { }

  ngOnInit(): void {
    this.getfilm();

    
  }
  private getfilm() {
    this.gestionFilmService.getFilmList().subscribe((data) => {
      this.films = data;
    });

      
} 
}     