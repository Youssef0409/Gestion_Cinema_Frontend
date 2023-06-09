import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'E-Cinema';
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd && event.url === '/login') {
        localStorage.clear();
      }
    });
  }
}
