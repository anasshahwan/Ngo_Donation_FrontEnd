import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private _router: Router){}
  currentUser = {'token':'',
   '_id':''
};
  canActivate(): boolean {
    var retrievedObject = localStorage.getItem('localStorageUserData') || '{}';
    this.currentUser = JSON.parse(retrievedObject);

    if(this.currentUser._id == null || this.currentUser.token == null){

      console.log("User Not Logged In ..")
      this._router.navigate(['/login']) 
      return false;
    }else {
      console.log("User Logged In ..")
      
      return true;

    }

  }
  
}
