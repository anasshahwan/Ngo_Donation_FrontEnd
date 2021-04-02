import { Component, OnInit } from '@angular/core';
import { UserModelForAllData } from 'src/app/Models/UserModel';
import { UserService } from 'src/app/Services/Users/user.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  users: UserModelForAllData[];
  errorMsg: any;
  constructor(private userService:UserService,) { }

  ngOnInit(): void {
    this.getAllUsers();
    
  }


  getAllUsers(): void {
     
    this.userService.getAllUsers().subscribe(
        users => { 
          this.users = users;
          
        },
      (error: any) => this.errorMsg = error,
        
    );
  }

 



}
