import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Auth/login/login.component';
import { AllDonationsComponent } from './Components/Donation/all-donations/all-donations.component';
import { HomeComponent } from './Components/home/home.component';
import { AllusersComponent } from './Components/User/allusers/allusers.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},

  // User related paths
  {path: 'login', component:LoginComponent},
  {path: 'Users', component:AllusersComponent},
  

  //Donation related paths
  {path: 'Donations', component:AllDonationsComponent}
  
  //payment/cart related paths

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
