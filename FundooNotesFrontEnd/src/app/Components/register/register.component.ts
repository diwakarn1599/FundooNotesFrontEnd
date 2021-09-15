import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

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
  constructor() { }

  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      firstName: new FormControl('',[Validators.required, Validators.pattern('^[A-Z]{1}[a-zA-Z]{2,}'),Validators.minLength(3)]),
      lastName: new FormControl('',[Validators.required, Validators.pattern('^[A-Z]{1}[a-zA-Z]{2,}'),Validators.minLength(3)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.pattern('^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=]).*$'),Validators.minLength(8)]),
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
}

