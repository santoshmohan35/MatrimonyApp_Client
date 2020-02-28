import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegisterData = new EventEmitter();
  model: any = {};
  constructor(private authService: AuthService, private alertifyService: AlertifyService) { }

  ngOnInit() {
  }
  cancel(){
    this.cancelRegisterData.emit(false);
  }

  register() {
    this.authService.register(this.model).subscribe(() =>{
      this.alertifyService.openSnackBar('Registration successfull','success-snackbar');
    }, error => {
      alert(error);
      this.alertifyService.openSnackBar(error, 'danger-snackbar');
    }
    );
  }
}
