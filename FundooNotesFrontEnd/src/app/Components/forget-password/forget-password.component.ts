import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  ForgetPasswordForm!: FormGroup;
  constructor(private userService:UserServiceService, private snackBar:MatSnackBar, private router:Router) { }

  ngOnInit(): void {
    this.ForgetPasswordForm = new FormGroup({
      email: new FormControl('',[Validators.required,])
    });
  }

  forgetPassword()
  {
    console.log("hello");
    
    this.userService.ForgetPassword(this.ForgetPasswordForm.value.email)
    .subscribe((result:any)=>{
    
      this.snackBar.open(`${result.message}`, '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'
        });
    },error => {  
      this.snackBar.open(`${error.error.message}`, '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
    })
  }

}
