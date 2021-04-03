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
import { AuthGuard } from './Services/Auth/auth-guard.guard'
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { AddUserComponent } from './Components/User/add-user/add-user.component';
import { EdituserComponent} from './Components/User/edituser/edituser.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'home', component:HomeComponent , canActivate: [AuthGuard]},

  // User related paths
  {path: 'login', component:LoginComponent},
  {path: 'Users', component:AllusersComponent , canActivate: [AuthGuard]},
  {path: 'addUser', component:AddUserComponent, canActivate: [AuthGuard]},
  {path: 'edituser/:id', component:EdituserComponent, canActivate:[AuthGuard]},

  //Donation related paths
  {path: 'Donations', component:AllDonationsComponent, canActivate: [AuthGuard]},
  

  //Event related paths
  {path: 'Events', component:AlleventsComponent, canActivate: [AuthGuard]},
  {path: 'Events/add', component:AddeventComponent, canActivate: [AuthGuard]},



  //payment/cart related paths
  {path: 'Cart/addshipmentinfo', component:AddshipmentinfoComponent, canActivate: [AuthGuard]},
  {path: 'Cart/addcartitems', component:AddcartitemsComponent, canActivate: [AuthGuard]},
  {path: 'Cart/cart', component:CartComponent , canActivate: [AuthGuard]},
  
// not found page component
{ path: '**', pathMatch   : 'full', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
