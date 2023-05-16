import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userId: number;
  user :User =new User();;
  nom:string;
  
  
  constructor(private route: ActivatedRoute, private userService: UserService,private router: Router,private snackBar: MatSnackBar) { }

  ngOnInit(): void {this.nom = JSON.parse(localStorage.getItem('currentUser')).nom;


    this.userId = JSON.parse(localStorage.getItem('currentUser')).id;
      this.userService.getUserById(this.userId).subscribe(users => {
        this.user = users;
      });
    };
    logout() {
      localStorage.removeItem('currentUser'); // remove the currentUser from localStorage
      this.router.navigate(['/login']); // navigate to the login page
    }

    onSubmit(){
      this.userService.updateUser(this.userId, this.user).subscribe( data =>{
    
     //const currentUser = JSON.parse(localStorage.getItem('currentUser'));
     localStorage.setItem('currentUser', JSON.stringify(this.user));
     this.snackBar.open('Profile mise à jour avec succès!', 'Fermer', {
      duration: 3000,
      verticalPosition: 'top'
    }); 
     }
      , error => console.log(error));
      this.snackBar.open('Erreur est survenue', 'Fermer', {
        duration: 3000,
        verticalPosition: 'top'
      }); 
     }

}
