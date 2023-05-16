import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
   nom:string;
    
  constructor(private gestionFilmService:GestionFilmService,private router: Router ) {
       
   }
   logout() {
    localStorage.removeItem('currentUser'); // remove the currentUser from localStorage
    this.router.navigate(['/login']); // navigate to the login page
  }
       
   ngOnInit(): void {this.nom = JSON.parse(localStorage.getItem('currentUser')).nom;
    this.getfilm(); 
  }  
  private getfilm() {     
    this.gestionFilmService.getFilmList().subscribe((data) => {
      this.films = data;
    });    
  } 
  

 




}

