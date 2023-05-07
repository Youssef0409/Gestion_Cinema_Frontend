import { Component, OnInit } from '@angular/core';
import { GestionCinemaService } from 'src/app/services/gestion-cinema.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cinema } from 'src/app/model/cinema';
@Component({
  selector: 'app-update-cinema',
  templateUrl: './update-cinema.component.html',
  styleUrls: ['./update-cinema.component.scss'],
})
export class UpdateCinemaComponent implements OnInit {
  
  id: number;
  cinema: Cinema = new Cinema();
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor(
    private cinemaService: GestionCinemaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cinemaService.getCinemaById(this.id).subscribe(
      (data) => {
        this.cinema = data;
      },
      (error) => console.log(error)
    );
  }
  onSubmit(){
   this.cinemaService.updateCinema(this.id, this.cinema).subscribe( data =>{
  this.goToCinemaList();
  }
   , error => console.log(error));
  }

  goToCinemaList() {
    this.router.navigate(['/gestion-cinema']);
  }
}
