import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/model/film';
import { Ticket } from 'src/app/model/ticket';
import { User } from 'src/app/model/user';
import { GestionFilmService } from 'src/app/services/gestion-film.service';
import { GestionTicketService } from 'src/app/services/gestion-ticket.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.scss']
})
export class FilmsDetailsComponent implements OnInit {
  userId:number;
  films:Film;
  idfilm:any;
  ticket: Ticket = new Ticket();
  currentUser: User;
   nom:string;
   
  
   
  constructor(private gestionFilmService:GestionFilmService, private route:ActivatedRoute,private router: Router,private gestionTicketService:GestionTicketService,private snackBar: MatSnackBar ) {
    this.route.params.subscribe((data)=>{
     
      this.idfilm= data['id'] ;
      
    })
   }

  ngOnInit(): void {this.nom = JSON.parse(localStorage.getItem('currentUser')).nom;
    this.getfilm(); 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  

    
  } 
  private getfilm() { 
    this.gestionFilmService.getFilmById(this.idfilm).subscribe((data) => {
      this.films = data;  
    });

      
} 
 logout() {
  localStorage.removeItem('currentUser'); // remove the currentUser from localStorage
  this.router.navigate(['/login']); // navigate to the login page
}

onSubmit() :void{
  this.ticket.user = { id: this.currentUser.id } as User;
  this.ticket.film = { id: this.idfilm } as Film;

 
  console.log(this.ticket);
  this.gestionTicketService.createTicket(this.ticket).subscribe(
    data => {
      console.log(data);
      this.snackBar.open('Ticket Reservé', 'Close', {
        duration: 3000,
        verticalPosition: 'top'
      });
      this.router.navigate(['/user/films']);

    },
    error => {
      this.snackBar.open('Tickets are sold out.', 'Close', { duration: 6000 });
    }
  );
}


}     