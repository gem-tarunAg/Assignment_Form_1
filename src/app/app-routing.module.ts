import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo:'/user-registration', pathMatch:'full'},
  {path:'user-registration', component:UserRegistrationFormComponent},
  {path:'sign-in', component:LoginFormComponent},
  {path:'sign-up', component:SignupFormComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[UserRegistrationFormComponent, LoginFormComponent, SignupFormComponent, PageNotFoundComponent]
