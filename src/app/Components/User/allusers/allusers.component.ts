import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModelForAllData } from 'src/app/Models/UserModel';
import { UserService } from 'src/app/Services/Users/user.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  users: UserModelForAllData[];
  currentUser:any;
  errorMsg: any;
  addUserLink = '/addUser';
  constructor(private userService:UserService,private _router:Router) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.getAllPaginatedUsers()
    
  }


  getAllUsers(): void {
     
    this.userService.getAllUsers().subscribe(
        users => { 
          this.users = users;
          
        },
      (error: any) => this.errorMsg = error,
        
    );
  }
  totalLength:any;
  page:number = 1;
  pagUsers : any;
  
  getAllPaginatedUsers (){
   const retrievedObject = localStorage.getItem('localStorageUserData') || '{}';
    this.currentUser = JSON.parse(retrievedObject);
     this.userService.getAllUsers().subscribe(
      users => { 
        console.log(users);
        this.pagUsers = users;
        this.totalLength = users.length;
        
      },
    (error: any) => this.errorMsg = error,
      
  );
  }

 delete(id:any, i:any){
   console.log(id);
   if(window.confirm('Are you sure you want to delete user?')){
     this.userService.deleteUser(id).subscribe((res) =>{
      let currentUrl = this._router.url;
      this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this._router.navigate([currentUrl]);
      });
     })
   }
 }
  


}
