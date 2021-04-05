import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DonationTypeService } from 'src/app/Services/Donations/donationtype.service';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['../../css/basics.css','../../css/table.css','../../css/form.css']
})
export class AddeventComponent implements OnInit {
  title="Add Event"
  allDonationsLink = "/Donations";
  eventForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private eventService: DonationTypeService){
      this.eventForm =this.fb.group({
        donName:['',[Validators.required, Validators.minLength(3)]]
      })
    }

  ngOnInit(): void {
  }

  addEvent(){
    this.eventService.addDonationsType(this.eventForm.value)
    .subscribe(()=>{
      console.log(this.eventForm.value + "was Added Succesfully!")
    },
    (err)=>{
      console.log(err)
    })
    this.router.navigate([this.allDonationsLink]);
    this.eventForm.reset();
  }

}
