import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  hide: boolean = true;
  ResetPasswordForm !: FormGroup;
  userEmail=localStorage.getItem('email');
  constructor(private userService: UserServiceService, private snackBar: MatSnackBar, private router: Router) { }
 
  ngOnInit(): void {
    this.ResetPasswordForm = new FormGroup({
      email: new FormControl(`${this.userEmail}`, [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern('^.*(?=.{8,})(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=]).*$')]),
      confirmPassword: new FormControl('', [Validators.required])
    });
  }
  showPassword() {
    this.hide = !this.hide;
  }
  getErrorMessage() {
    if (this.ResetPasswordForm.controls['password'].hasError('required')) {
      return 'You must enter a value';
    }
    return this.ResetPasswordForm.controls['password'].hasError('pattern') ? `password should contain mix of numbers,speacial characters,captial and small letters and minimum 8 characters` : '';
  }

  ResetPassword() {
    console.log("resetpassword");
    
    this.userService.ResetPassword(this.ResetPasswordForm.value)
      .subscribe((result: any) => {

        this.snackBar.open(`${result.message}`, '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'
        });
        if (result.status == true) {
          localStorage.clear();
          this.router.navigate(['/login']);
        }
      }, error => {
        this.snackBar.open(`${error.error.message}`, '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'
        });
      })

  }
}

