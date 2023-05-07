import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cinema } from 'src/app/model/cinema';
import { Salle } from 'src/app/model/salle';
import { GestionCinemaService } from 'src/app/services/gestion-cinema.service';
import { GestionSalleService } from 'src/app/services/gestion-salle.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-update-salle',
  templateUrl: './update-salle.component.html',
  styleUrls: ['./update-salle.component.scss']
})
export class UpdateSalleComponent implements OnInit {
  
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  id: number;
  salle: Salle = new Salle();
  cinemas: Cinema[];
  constructor( private route: ActivatedRoute,
    private salleService: GestionSalleService,
    private cinemaService: GestionCinemaService,
    private router: Router) { }

  ngOnInit(): void {
   

    this.id = this.route.snapshot.params['id'];
    this.salleService.getSalleById(this.id).subscribe(
      (data) => {
        this.salle = data;
      },
      (error) => console.log(error)
    );
    this.cinemaService.getCinemaList().subscribe(cinemas => {
      this.cinemas = cinemas;
    });
  }
  onSubmit(){
    this.salleService.updateSalle(this.id, this.salle).subscribe( data =>{
   this.goToSalleList();
   }
    , error => console.log(error));
   }
 
   goToSalleList() {
     this.router.navigate(['/gestion-salle']);
   }

}
