import { Component, OnInit, NgZone } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from 'src/app/Services/Users/user.service';
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['../../css/basics.css','../../css/form.css']
})
export class AddUserComponent implements OnInit {
  title="Add User";
  userForm : FormGroup;
  
  constructor(  
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private userService: UserService) {
      this.userForm = this.formBuilder.group({
        firstname: [''],
        lastname: [''],
        email: [''],
        password: [''],
        role:['']

      })
     }

  ngOnInit(): void {}

  onSubmit():any {
    this.userService.addUser(this.userForm.value)
    .subscribe(() => {
      console.log('User was added successfully!')
      this.ngZone.run(() => this.router.navigateByUrl('/Users'))
    }, (err) => {
      console.log(err);
    });
  }

}
