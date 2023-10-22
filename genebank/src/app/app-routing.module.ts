import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './homepage/login/login.component';
import { SignupComponent } from './homepage/login/signup/signup.component';
const routes: Routes = [
  {path : 'login', component: LoginComponent},
  {path : 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }