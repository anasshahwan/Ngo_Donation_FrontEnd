import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/Users/user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private _router :Router, private userService : UserService) { }

  ngOnInit(): void {
    this.getCurrentUser();
    this.getCartItemsLenght();
    
  }



  logOut(){
    localStorage.removeItem('localStorageUserData');
    // var retrievedObject = localStorage.getItem('localStorageUserData') || '{}';
    // this.currentUser = JSON.parse(retrievedObject);
  }
  currentUser:any;
  isAdmin = false;

  getCurrentUser(){

    var retrievedObject = localStorage.getItem('localStorageUserData') || '{}';
    this.currentUser = JSON.parse(retrievedObject);
  
    if(this.currentUser._id == null || this.currentUser.token == null){
  
      console.log("User Not Logged In ..")
      this._router.navigate(['/login']) 
      return false;
    }else {
      // this.currentUser._id
      this.getUserByID(this.currentUser._id);
      console.log("User HAs Infoo In Token .. ")
      return true;
  
    }
   }// Check if User Logged IN 


  cartItemsLenght = 0;
  getCartItemsLenght(){
    var oldData = JSON.parse(localStorage.getItem('cartItems') || 'null');

    var retrievedObject = localStorage.getItem('localStorageUserData') || '{}';
    var userID = JSON.parse(retrievedObject)._id;
    for (let i = 0; i < oldData.length; i++) {
      if(userID == oldData[i].user_id){
       
        this.cartItemsLenght += 1
        console.log(this.cartItemsLenght)
        }
    }
    // this.cartItems = this.userCart;
     }

   getUserByID(id: number){

     this.userService.getUserByID(id).subscribe(data=>{
       console.log(data.role.type);
       this.currentUser = data;
       if(data.role.type == "Admin"){
         this.isAdmin = true;
       }else {
         this.isAdmin = false
       }
       
     })

   }

  



}
