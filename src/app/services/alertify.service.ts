import { Injectable, Component, Input } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})

export class AlertifyService {

    constructor(private _snackBar: MatSnackBar) { }
    durationInSeconds = 4;
    openSnackBar(message: string, type: string) {
        this._snackBar.open(message, '', {
            verticalPosition: 'bottom',horizontalPosition:'right',panelClass: type,
            duration: this.durationInSeconds * 1000
        });
    }
}