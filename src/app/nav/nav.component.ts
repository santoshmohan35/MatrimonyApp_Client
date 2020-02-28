import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private alertifyService: AlertifyService, public authService: AuthService, private routes:Router) { }

  ngOnInit() {
   }

  loggedIn() {
   return this.authService.loggedIn();
  }
home(){

}
  logout() {
    localStorage.removeItem('token');
    this.alertifyService.openSnackBar('Logged Out','message-snackbar');
    this.routes.navigate(['']);
  }
}
