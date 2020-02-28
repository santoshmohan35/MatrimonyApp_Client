import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router, private alertify: AlertifyService) { }

    canActivate(): boolean {
        if (!this.authService.loggedIn()) {
            return true;
        }
        this.alertify.openSnackBar('You shall not pass !!', 'danger-snackbar')
        this.router.navigate(['']);
        return false;
    }

}