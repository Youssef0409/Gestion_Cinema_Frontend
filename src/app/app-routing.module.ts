import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { GestionCinemaComponent } from './gestion-cinema/gestion-cinema.component';
import { AjouterCinemaComponent } from './gestion-cinema/ajouter-cinema/ajouter-cinema.component';
import { UpdateCinemaComponent } from './gestion-cinema/update-cinema/update-cinema.component';
import { GestionSalleComponent } from './gestion-salle/gestion-salle.component';
import { AjouterSalleComponent } from './gestion-salle/ajouter-salle/ajouter-salle.component';
import { UpdateSalleComponent } from './gestion-salle/update-salle/update-salle.component';
import { GestionFilmComponent } from './gestion-film/gestion-film.component';
import { AjouterFilmComponent } from './gestion-film/ajouter-film/ajouter-film.component';
import { UpdateFilmComponent } from './gestion-film/update-film/update-film.component';
import { FilmsComponent } from './user/films/films.component';
import { FilmsDetailsComponent } from './user/films-details/films-details.component';
import { CinemaComponent } from './user/cinema/cinema.component';
import { SalleComponent } from './user/salle/salle.component';
import { LoginComponent } from './login/login.component';
import { HomeUserComponent } from './user/home-user/home-user.component';
import { MyTicketsComponent } from './user/my-tickets/my-tickets.component';
import { ProfileComponent } from './user/profile/profile.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'gestion-cinema', component: GestionCinemaComponent },
  { path: 'update-cinema/:id', component: UpdateCinemaComponent },
  { path: 'ajouter-cinema', component: AjouterCinemaComponent },
  { path: 'gestion-salle', component: GestionSalleComponent },
  { path: 'ajouter-salle', component: AjouterSalleComponent },
  { path: 'update-salle/:id', component: UpdateSalleComponent },
  { path: 'gestion-film', component: GestionFilmComponent },
  { path: 'ajouter-film', component: AjouterFilmComponent },
  { path: 'update-film/:id', component: UpdateFilmComponent },
  { path: 'login', component: LoginComponent }, 
  { path: 'user/home-user', component: HomeUserComponent  },
  { path: 'user/myticket', component: MyTicketsComponent  },
  { path: 'user/profile', component: ProfileComponent  },
 

  
  { path: 'user/films', component: FilmsComponent },
  { path: 'user/film_details/:id', component: FilmsDetailsComponent },
  { path: 'user/cinema', component: CinemaComponent },
  { path: 'user/salle', component: SalleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
