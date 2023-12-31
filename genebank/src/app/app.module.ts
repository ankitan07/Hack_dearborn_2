import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsComponent } from './forms/forms.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './homepage/navbar/login/login.component';
import { FactorsComponent } from './factors/factors.component';
import { PolymorphismComponent } from './polymorphism/polymorphism.component';
import { MedicationComponent } from './medication/medication.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    FormsComponent,
    NavbarComponent,
    AboutComponent,
    FactorsComponent,
    PolymorphismComponent,
    MedicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
