import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from 'src/app/model/ticket';
import { GestionTicketService } from 'src/app/services/gestion-ticket.service';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.scss']
})
export class MyTicketsComponent implements OnInit {
  userId: number;
  tickets: Ticket[];
  nom:string;
  numberOfTickets: number;
  constructor(private route: ActivatedRoute, private ticketService: GestionTicketService,private router: Router) { }

  ngOnInit(): void {
    
    this.nom = JSON.parse(localStorage.getItem('currentUser')).nom;
 

    this.userId = JSON.parse(localStorage.getItem('currentUser')).id;
      this.ticketService.getTicketByUser(this.userId).subscribe(tickets => {
        this.tickets = tickets;
      });
      this.getNumberOfTickets();
    };
    logout() {
      localStorage.removeItem('currentUser'); // remove the currentUser from localStorage
      this.router.navigate(['/login']); // navigate to the login page
    }

    getNumberOfTickets() {
      this.ticketService.getNumberOfTicketsForUser(this.userId).subscribe(count => {
        this.numberOfTickets = count;
      });
    }

}
