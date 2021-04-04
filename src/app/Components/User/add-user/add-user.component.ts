import { Component, OnInit, NgZone } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from 'src/app/Services/Users/user.service';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import { Roles } from 'src/app/Models/RolesModel';
import { RolesService } from 'src/app/Services/Roles/roles.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['../../css/basics.css','../../css/form.css','./add-user.component.css' ]
})
export class AddUserComponent implements OnInit {
  title="Add User";
  userForm : FormGroup;
  userRole : Roles[];
  
  constructor(  
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private roleService : RolesService,
    private userService: UserService) {       
      this.userForm = this.formBuilder.group({
        firstname:['',[Validators.required,Validators.minLength(3)]],
        lastname:['',[Validators.required,Validators.minLength(2)]],
        email:['',[Validators.required,Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]],
        password:['',[Validators.required ,  Validators.minLength(6)]],
        role:['',Validators.required],

      })
     }

  ngOnInit(): void {

    this.getAllRoles();
  }
  

  onSubmit():any {
    this.userService.addUser(this.userForm.value)
    .subscribe(() => {
      console.log('User was added successfully!')
      this.ngZone.run(() => this.router.navigateByUrl('/Users'))
    }, (err) => {
      console.log(err);
    });
  }

  getAllRoles(){

    this.roleService.getAllRoles().subscribe(data=>{
     console.log(data);
     this.userRole = data;
   })

  }

}


