import { Component, NgZone, OnInit } from '@angular/core';
import {UserService} from 'src/app/Services/Users/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import { UserModelForAllData, UserModelForUpdate } from 'src/app/Models/UserModel';
import { Observable } from 'rxjs';
import { RolesService } from 'src/app/Services/Roles/roles.service';
import { Roles } from 'src/app/Models/RolesModel';



@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['../../css/basics.css','../../css/form.css','./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  // currentUser: UserModelForAllData = {
  //   _id: '',
  //   firstname: '',
  //   lastname: '',
  //   email: '',
  //   password: '',
  //   role:'',
  //   token: ''
  // };
  title="Update User Info";
  getID: any;
  currentEmp$:Observable<UserModelForUpdate>;

  userUpdateForm: FormGroup;
  user_id: number;
  userRole : Roles[];

  errorMsg: any;
  constructor(private userService:UserService, 
    private roleService: RolesService,
    private _router :Router,
    private activated: ActivatedRoute,
    private fb: FormBuilder,
     ) { }

  ngOnInit(): void {
    
    this.user_id = this.activated.snapshot.params['id'];
    this.getAllRoles();
 


    this.getUserByID(this.user_id);
    //  
    
    this.currentEmp$.subscribe(user => {
      console.log("YEAHH")
      // this.userType = user.role.type;
        this.userUpdateForm = this.fb.group({
        firstname:[user.firstname,[Validators.required,Validators.minLength(3)]],
        lastname:[user.lastname,[Validators.required,Validators.minLength(2)]],
        email:[user.email,[Validators.required,Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]],
        role:[user.role._id,Validators.required],
  
  
      }); 
   
    });

  


  }
  getUserByID(id: number){
    this.currentEmp$ = this.userService.getUserByID(id);
   

   }

   getAllRoles(){

     this.roleService.getAllRoles().subscribe(data=>{
      console.log(data);
      this.userRole = data;
    })

   }

  onUpdate(): any{
   console.log(this.userUpdateForm.value);

   var data = this.userUpdateForm.value;
    var userID = this.user_id;
    
    this.userService.updateUser(userID,data).subscribe(
      user => {   this._router.navigate(['/Users']) },
      error => this.errorMsg = error,

       
  );

   
  }

}
