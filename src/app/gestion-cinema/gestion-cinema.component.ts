import { Component, OnInit } from '@angular/core';
import { GestionCinemaService } from '../services/gestion-cinema.service';
import { Cinema } from '../model/cinema';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-gestion-cinema',
  templateUrl: './gestion-cinema.component.html',
  styleUrls: ['./gestion-cinema.component.scss'],
})
export class GestionCinemaComponent implements OnInit {
  cinemas: Cinema[];
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor(
    private cinemaService: GestionCinemaService,
    private router: Router, private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getCinema();
  }
  updateSallesCount() {
    for (let cinema of this.cinemas) {
      this.cinemaService.getSallesForCinema(cinema.id).subscribe(count => {
        cinema.sallesCount = count;
        
      });
    }
  }
  private getCinema() {
    this.cinemaService.getCinemaList().subscribe((data) => {
      this.cinemas = data;
      this.updateSallesCount();
    });
  }

  updateCinema(id: number) {
    this.router.navigate(['/update-cinema', id]);
  }

  deleteCinema(id: number) {
    this.cinemaService.deleteCinema(id).subscribe(
      () => {
        console.log('Cinéma supprimé avec succès');
        this.snackBar.open('Cinéma supprimé avec succès', 'Fermer', {
          duration: 3000,
          verticalPosition: 'top'
        });
        this.getCinema();
      },
      (error) => {
        console.error('Erreur lors de la suppression du cinéma', error);
        this.snackBar.open('Une erreur est survenue lors de la suppression du cinéma.', 'Fermer', {
          duration: 3000,
          verticalPosition: 'top'
        });
      }
    );
  }
}
