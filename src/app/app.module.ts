import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterationComponent } from './Components/Auth/registeration/registeration.component';
import { AllDonationsComponent } from './Components/Donation/all-donations/all-donations.component';
import { HomeComponent } from './Components/home/home.component';
import { AllusersComponent } from './Components/User/allusers/allusers.component';
import { EdituserComponent } from './Components/User/edituser/edituser.component';
import { AlleventsComponent } from './Components/Event/allevents/allevents.component';
import { AddeventComponent } from './Components/Event/addevent/addevent.component';
import { CartComponent } from './Components/Cart/cart/cart.component';
import { AddcartitemsComponent } from './Components/Cart/addcartitems/addcartitems.component';
import { AddshipmentinfoComponent } from './Components/Cart/addshipmentinfo/addshipmentinfo.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './Services/Auth/auth-guard.guard';
import { AuthService } from './Services/Auth/auth-service.service';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { TopbarComponent } from './Components/topbar/topbar.component';
import { ObjectToArrayPipe } from './Pipes/objecttoarray.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterationComponent,
    AllDonationsComponent,
    HomeComponent,
    AllusersComponent,
    EdituserComponent,
    AlleventsComponent,
    AddeventComponent,
    CartComponent,
    AddcartitemsComponent,
    AddshipmentinfoComponent,
    NotfoundComponent,
    TopbarComponent,
    ObjectToArrayPipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClientModule,AuthGuard, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
