import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegisterForm !: FormGroup;
  hide:boolean =  true;
  isVisible:boolean =  true;
  matchpwd:boolean = true;

  constructor(private userService:UserServiceService, private snackBar:MatSnackBar, private router:Router) {
   }

  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      firstName: new FormControl('',[Validators.required, Validators.pattern('^[A-Z]{1}[a-zA-Z]{2,}'),Validators.minLength(3)]),
      lastName: new FormControl('',[Validators.required, Validators.pattern('^[A-Z]{1}[a-zA-Z]{2,}'),Validators.minLength(3)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.pattern('^.*(?=.{8,})(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=]).*$')]),
      confirmPassword:new FormControl('',[Validators.required])
    });
  }
  
  showPassword()
  {
    this.hide = !this.hide;
  }
  getErrorMessage(inputName:string) {
      let minLen = inputName=="password"?8:3;
      
      if (this.RegisterForm.controls[`${inputName}`].hasError('required')) {
        return 'You must enter a value';
      }
      else if(this.RegisterForm.controls[`${inputName}`].hasError('minlength')){
        return `minimum ${minLen} characters`;
      }
      else if(this.RegisterForm.controls[`${inputName}`].hasError('email'))
      {
        return `${inputName} is invalid`;
      }
      return this.RegisterForm.controls[`${inputName}`].hasError('pattern') ? `${inputName} is invalid` : '';
  }

  Register()
  {
    this.userService.Register(this.RegisterForm.value)
    .subscribe((result:any)=>{
      console.log(result);
      
        this.snackBar.open(`${result.message}`, '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'
        });
        if(result.status == true)
        {
          this.router.navigate(['/login']);
        }
    },error => {  
      this.snackBar.open(`${error.error.message}`, '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
    })
    
  }
}

