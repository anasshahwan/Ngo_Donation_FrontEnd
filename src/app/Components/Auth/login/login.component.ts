import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthModelForAllData } from 'src/app/Models/AuthModel';
import { AuthService } from 'src/app/Services/Auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  userForm: FormGroup;
  userInformation:AuthModelForAllData;
  serverMsg = "";
  constructor(private fb: FormBuilder, 
    private _router:Router,
    private authService:AuthService,) {
     }

  ngOnInit(): void {

    this.isUserLoggedIn();

    this.userForm = this.fb.group({
     email:['',[Validators.required,Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]],
     password:['',[Validators.required,Validators.minLength(5)]],
   
    });

  }
  currentUser:any;
  public href: string = "";

  isUserLoggedIn(){
    var retrievedObject = localStorage.getItem('localStorageUserData') || '{}';
    this.currentUser = JSON.parse(retrievedObject);

    if(this.currentUser._id == null || this.currentUser.token == null){

      console.log("User Not Logged In ..")
      this._router.navigate(['/login']) 
      console.log("FAlse");
      return false;
    }else {
        this._router.navigate(['/home']) 
      
      return true;

    }
  }
  //userForm

  login(){
    console.log(this.userForm.value)
    var userFormData = this.userForm.value;
    this.authService.login(userFormData).subscribe(
      user => {   
        this.userInformation = user;
        // console.log(user._id);
          var localStorageUserData = { '_id': user._id, 'token': user.token};
          localStorage.setItem('localStorageUserData', JSON.stringify(localStorageUserData));

        // this.userInformation = user;
          this._router.navigate(['/home']) 
    
    
    },
      error => { 
        this.serverMsg = error.error.message;
        console.log(error.error.message)}
       
  );
  }

}
