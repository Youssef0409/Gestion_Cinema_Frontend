import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { GestionCinemaComponent } from './gestion-cinema/gestion-cinema.component';
import { AjouterCinemaComponent } from './gestion-cinema/ajouter-cinema/ajouter-cinema.component';
import { UpdateCinemaComponent } from './gestion-cinema/update-cinema/update-cinema.component';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { GestionSalleComponent } from './gestion-salle/gestion-salle.component';
import { GestionFilmComponent } from './gestion-film/gestion-film.component';
import { AjouterSalleComponent } from './gestion-salle/ajouter-salle/ajouter-salle.component';
import { UpdateSalleComponent } from './gestion-salle/update-salle/update-salle.component';
import { AjouterFilmComponent } from './gestion-film/ajouter-film/ajouter-film.component';
import { UpdateFilmComponent } from './gestion-film/update-film/update-film.component';
import { FilmsComponent } from './user/films/films.component';
import { SalleComponent } from './user/salle/salle.component';
import { CinemaComponent } from './user/cinema/cinema.component';
import { FilmsDetailsComponent } from './user/films-details/films-details.component';
import { LoginComponent } from './login/login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeUserComponent } from './user/home-user/home-user.component';
import { MyTicketsComponent } from './user/my-tickets/my-tickets.component';
import { ProfileComponent } from './user/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    GestionCinemaComponent,
    AjouterCinemaComponent,
    UpdateCinemaComponent,
    GestionSalleComponent,
    GestionFilmComponent,
    AjouterSalleComponent,
    UpdateSalleComponent,
    AjouterFilmComponent,
    UpdateFilmComponent,
    FilmsComponent,
    SalleComponent,
    CinemaComponent,
    FilmsDetailsComponent,
    LoginComponent,
    HomeUserComponent,
    MyTicketsComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    
  
   
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
