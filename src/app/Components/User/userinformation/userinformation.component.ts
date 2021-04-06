import { Component, OnInit ,Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/Services/Users/user.service';

@Component({
  selector: 'app-userinformation',
  templateUrl: './userinformation.component.html',
  styleUrls: ['./userinformation.component.css','../../css/form.css']
})
export class UserinformationComponent implements OnInit {
  @Input() childMessage:any;

  userinfo : any;
  userEditInfoForm : FormGroup;
  currentInfo$:Observable<any>;
  retrievedObject = localStorage.getItem('localStorageUserData') || '{}';
  user_id = JSON.parse(this.retrievedObject)._id;

  constructor(
    private userService:UserService, 
    private _router :Router,
    private fb: FormBuilder,) { }

  ngOnInit(): void {
    console.log(this.childMessage)
   
    this.getUserInformation();
    this.currentInfo$.subscribe(user => {
        this.userEditInfoForm = this.fb.group({
        firstname:[user.user_id.firstname,[Validators.required,Validators.minLength(3)]],
        lastname:[user.user_id.lastname,[Validators.required,Validators.minLength(2)]],
        email:[user.user_id.email,[Validators.required,Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]],
        cma:[user.cma,[Validators.required,Validators.minLength(3)]],
        phone_number:[user.phone_number,[Validators.required,Validators.minLength(3)]],
        address:[user.address,[Validators.required,Validators.minLength(3)]],
        state:[user.state,[Validators.required,Validators.minLength(3)]],
        city:[user.city,[Validators.required,Validators.minLength(3)]],
        zip_code:[user.zip_code,[Validators.required,Validators.minLength(3)]],
        country:[user.country,[Validators.required,Validators.minLength(3)]],

  
      }); 
   
    });

  }

  onUpdate(){
    var formData = this.userEditInfoForm.value;
    console.log(formData);
    console.log(this.user_id)
    this.userService.updateUserShippingInfo(this.user_id,formData).subscribe(data=>{
      this._router.navigate(['/Events'])
    }); 
  }

  
  getUserInformation(){
       this.currentInfo$ = this.userService.getUserProfileByID(this.user_id);
  }


}
