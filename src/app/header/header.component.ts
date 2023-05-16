import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {}
 nom:string;
  ngOnInit(): void {this.nom = JSON.parse(localStorage.getItem('currentUser')).nom;}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  logout() {
    localStorage.removeItem('currentUser'); // remove the currentUser from localStorage
    this.router.navigate(['/login']); // navigate to the login page
  }
}
