import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { HomeComponent } from './Components/home/home.component';
var token:any;
token = localStorage.getItem('token')!;
const routes: Routes = [
  {
    path:'register',component:RegisterComponent,
  },
  {
    path:'login',component:LoginComponent,
  },
  {
    path:'forgetPassword',component:ForgetPasswordComponent,
  },
  {
    path:`resetPassword/${token}`,component:ResetPasswordComponent,
  },
  {
    path:`home`,component:HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
