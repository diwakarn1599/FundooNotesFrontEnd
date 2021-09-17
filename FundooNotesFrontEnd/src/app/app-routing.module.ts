import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
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
    path:'resetPassword',component:ResetPasswordComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
