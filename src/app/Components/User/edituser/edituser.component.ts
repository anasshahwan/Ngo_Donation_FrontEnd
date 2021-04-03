import { Component, NgZone, OnInit } from '@angular/core';
import {UserService} from 'src/app/Services/Users/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, FormBuilder} from "@angular/forms";
import { UserModelForAllData } from 'src/app/Models/UserModel';



@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['../../css/basics.css','../../css/form.css']
})
export class EdituserComponent implements OnInit {
  currentUser: UserModelForAllData = {
    _id: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role:'',
    token: ''
  };
  title="Update User Info";
  getID: any;
  updateForm : FormGroup;
  
  constructor(
    public formbuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private userService: UserService

  ) { 
    this.getID = this.activatedRoute.snapshot.paramMap.get('id');

    this.userService.get(this.getID).subscribe(res => {
      this.updateForm.setValue({
        firstname: res['firstname'],
        lastname: res['lastname'],
        email: res['email'],
        password: res['password'],
        role: res['role'],
      });
    });

    this.updateForm = this.formbuilder.group({
      firstname:[''],
      lastname:[''],
      email: [''],
      password: [''],
      role: [''],
    })

}

  ngOnInit(): void {}

  onUpdate(): any{
    this.userService.updateUser(this.getID, this.updateForm.value)
     .subscribe(()=> { 
       console.log('User updated succcessfully!')
       this.ngZone.run(() => this.router.navigateByUrl('/Users'))
     }, (err) => {
       console.log(err);
     });
  }

}
