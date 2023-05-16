import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { AuthentificationRequest } from '../model/authentification-request';
import { User } from '../model/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterRequest } from '../model/register-request';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  request: AuthentificationRequest = new AuthentificationRequest();
  registerRequest: RegisterRequest = new RegisterRequest();
  user: User;
  constructor(private loginService: LoginService, private router: Router,private snackBar: MatSnackBar) { }


  ngOnInit(): void {
  }

  login(){
   
    
    this.loginService.loginUser(this.request).subscribe(
      data => {
        this.user = data;
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        if (this.user.role === 'Admin') {
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/user/home-user']);
        }
      },
      (error) => {
      
        this.snackBar.open('Incorrect email or password', 'Close', { duration: 3000 });
     
        console.log(error);
      }
    
  );
  }
  register() {
    this.registerRequest.role ="Client"
    this.loginService.registerUser(this.registerRequest).subscribe(() => {

  this.snackBar.open('Registration successful!', 'Close', {
        duration: 3000,
        verticalPosition: 'top'
      });
      this.router.navigate(['/login']);
    }, error => {
      this.snackBar.open('Registration failed. Please try again.', 'Close', {
        duration: 3000,
        verticalPosition: 'top'
      });
    });
  }

}
