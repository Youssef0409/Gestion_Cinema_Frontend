import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/model/film';
import { GestionFilmService } from 'src/app/services/gestion-film.service';
// @Directive
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  films:Film[];
  nbr_ticket: number;


  constructor(private gestionFilmService:GestionFilmService ) {
   
   }

 
   ngOnInit(): void {
    this.getfilm(); 
  }
  private getfilm() {    
    this.gestionFilmService.getFilmList().subscribe((data) => {
      this.films = data;
    });



  } 
  

 




}

