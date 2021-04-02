import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser = {'token':'',
  '_id':''
};  
  constructor(private _router:Router) {}

  ngOnInit(): void {
    this.getData();
    console.log(this.currentUser.token)
    console.log(this.currentUser._id)
   

  }

  getData(){
    var retrievedObject = localStorage.getItem('localStorageUserData') || '{}';
    this.currentUser = JSON.parse(retrievedObject);

  }

  


}
