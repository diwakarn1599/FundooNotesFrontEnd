import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  hide:boolean =  true;
  ResetPasswordForm !: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.ResetPasswordForm = new FormGroup({
      password:new FormControl('',[Validators.required, Validators.pattern('^.*(?=.{8,})(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=]).*$')]),
      confirmPassword:new FormControl('',[Validators.required])
    });
  }
  showPassword()
  {
    this.hide = !this.hide;
  }
  getErrorMessage() {
    if (this.ResetPasswordForm.controls['password'].hasError('required')) {
      return 'You must enter a value';
    }
    return this.ResetPasswordForm.controls['password'].hasError('pattern') ? `password should contain mix of numbers,speacial characters,captial and small letters and minimum 8 characters` : '';
}
}
