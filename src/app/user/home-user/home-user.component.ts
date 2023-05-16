import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss']
})
export class HomeUserComponent implements OnInit {
 nom:string;

  constructor(private router: Router) { }
  
  ngOnInit(): void {this.nom = JSON.parse(localStorage.getItem('currentUser')).nom;
  
  }
  logout() {
    localStorage.removeItem('currentUser'); // remove the currentUser from localStorage
    this.router.navigate(['/login']); // navigate to the login page
  }
}
