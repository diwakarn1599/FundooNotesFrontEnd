import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GetNotesComponent } from '../get-notes/get-notes.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm !: FormGroup;
  hide = true;
  constructor(private userService:UserServiceService, private snackBar:MatSnackBar, private router:Router,private note:GetNotesComponent) { }

  ngOnInit(): void {
     this.LoginForm = new FormGroup({
      email: new FormControl('',[Validators.required,]),
      password:new FormControl('',[Validators.required])
    });
  }
  Login()
  {
    this.userService.Login(this.LoginForm.value)
    .subscribe((result:any)=>{
      console.log(result);
        localStorage.setItem('token',result.jwtToken);
        localStorage.setItem('userDetails',JSON.stringify(result.userData));
        this.snackBar.open(`${result.message}`, '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'
        });
        if(result.status == true)
        {
          this.router.navigate(['/home']);
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
