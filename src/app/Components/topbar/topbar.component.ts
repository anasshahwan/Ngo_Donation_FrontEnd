import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear()
    // var retrievedObject = localStorage.getItem('localStorageUserData') || '{}';
    // this.currentUser = JSON.parse(retrievedObject);
  }

}
