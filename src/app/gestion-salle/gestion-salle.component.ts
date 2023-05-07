import { Component, OnInit } from '@angular/core';
import { Salle } from '../model/salle';
import { GestionSalleService } from '../services/gestion-salle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-salle',
  templateUrl: './gestion-salle.component.html',
  styleUrls: ['./gestion-salle.component.scss']
})
export class GestionSalleComponent implements OnInit {
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  salles : Salle[];
  constructor(private salleService: GestionSalleService,
    private router: Router) { }

    ngOnInit(): void {
      this.getSalle();
    }
    private getSalle() {
      this.salleService.getAllSalles().subscribe((data) => {
        this.salles = data;
      });
    }


    updateSalle(id: number) {
      this.router.navigate(['/update-salle', id]);
    }
  
    deleteSalle(id: number) {
      this.salleService.deleteSalle(id).subscribe((data) => {
        console.log(data);
        this.getSalle();
      });
    }
}
