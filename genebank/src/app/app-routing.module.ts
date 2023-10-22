import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './homepage/navbar/login/login.component';
import { FactorsComponent } from './factors/factors.component';
import { PolymorphismComponent } from './polymorphism/polymorphism.component';
const routes: Routes = [
  {path :'login', component: LoginComponent },
  {path: 'factors', component:FactorsComponent},
  {path: 'polymorphism', component: PolymorphismComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
