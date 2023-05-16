import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/model/film';
import { Salle } from 'src/app/model/salle';
import { GestionFilmService } from 'src/app/services/gestion-film.service';
import { GestionSalleService } from 'src/app/services/gestion-salle.service';

@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
  styleUrls: ['./update-film.component.scss']
})
export class UpdateFilmComponent implements OnInit {
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  id: number;
  film : Film= new Film();
  salles: Salle[];
  constructor(private route: ActivatedRoute,
    private salleService: GestionSalleService,
    private filmService: GestionFilmService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  this.filmService.getFilmById(this.id).subscribe(
    (data) => {
      this.film = data;
    },
    (error) => console.log(error)
  );
  this.salleService.getAllSalles().subscribe(data => {
    this.salles = data;
  });
  }

  onSubmit(){
    this.filmService.updateFilm(this.id, this.film).subscribe( data =>{
   this.goToSalleList();
   }
    , error => console.log(error));
   }
 
   goToSalleList() {
     this.router.navigate(['/gestion-film']);
   }

}
