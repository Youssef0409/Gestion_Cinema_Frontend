import { Component, OnInit } from '@angular/core';
import { Salle } from '../model/salle';
import { GestionSalleService } from '../services/gestion-salle.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private router: Router, private snackBar: MatSnackBar) { }

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
      this.salleService.deleteSalle(id).subscribe(
        () => {
          console.log('Salle supprimée avec succès');
          this.snackBar.open('Salle supprimé avec succès', 'Fermer', {
            duration: 3000,
            verticalPosition: 'top'
          });
          this.getSalle();
        },
        (error) => {
          console.error('Erreur lors de la suppression de la salle', error);
          this.snackBar.open('Une erreur est survenue lors de la suppression de la salle.', 'Fermer', {
            duration: 3000,
            verticalPosition: 'top'
          });
        }
      );
    }
}
