import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService, private alertifyService: AlertifyService, private router: Router) { }

  ngOnInit() {
    this.authService.loggedIn();
  }

  register() {

  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertifyService.openSnackBar('Logged in successfully', 'success-snackbar');
    }, error => {
      this.alertifyService.openSnackBar(error, 'danger-snackbar');
    }, () => {
      this.router.navigate(['/member']);
    })
  }
}
