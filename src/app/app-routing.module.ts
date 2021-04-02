import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Auth/login/login.component';
import { AllDonationsComponent } from './Components/Donation/all-donations/all-donations.component';
import { HomeComponent } from './Components/home/home.component';
import { AllusersComponent } from './Components/User/allusers/allusers.component';
import { AlleventsComponent } from './Components/Event/allevents/allevents.component';
import { AddeventComponent } from './Components/Event/addevent/addevent.component';
import { AddshipmentinfoComponent } from './Components/Cart/addshipmentinfo/addshipmentinfo.component';
import { AddcartitemsComponent } from './Components/Cart/addcartitems/addcartitems.component';
import { CartComponent } from './Components/Cart/cart/cart.component';


const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},

  // User related paths
  {path: 'login', component:LoginComponent},
  {path: 'Users', component:AllusersComponent},
  

  //Donation related paths
  {path: 'Donations', component:AllDonationsComponent},
  

  //Event related paths
  {path: 'Events', component:AlleventsComponent},
  {path: 'Events/add', component:AddeventComponent},


  //payment/cart related paths
  {path: 'Cart/addshipmentinfo', component:AddshipmentinfoComponent},
  {path: 'Cart/addcartitems', component:AddcartitemsComponent},
  {path: 'Cart/cart', component:CartComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
