import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterationComponent } from './Components/Auth/registeration/registeration.component';
import { AllDonationsComponent } from './Components/Donation/all-donations/all-donations.component';
import { HomeComponent } from './Components/home/home.component';
import { AllusersComponent } from './Components/User/allusers/allusers.component';
import { EdituserComponent } from './Components/User/edituser/edituser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterationComponent,
    AllDonationsComponent,
    HomeComponent,
    AllusersComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
