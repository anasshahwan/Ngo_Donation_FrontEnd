import { Component, OnInit } from '@angular/core';
import { DonationTypeService} from 'src/app/Services/Donations/donationtype.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {DonationTypeModel} from 'src/app/Models/DonationTypeModel';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css','../../css/basics.css','../../css/form.css']
})
export class UpdateEventComponent implements OnInit {
  title = "Update Event";
  allDonationsLink = "/Events/management";
  getID: any;
  currentDonType$:Observable<DonationTypeModel>;
  UpdateEventForm: FormGroup;
  don_id: any;
  errorMsg:any;
 
  

  constructor(
    private donationtypeService: DonationTypeService,
    private router:Router,
    private activated: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
     this.don_id = this.activated.snapshot.params['id'];
     this.getEventById(this.don_id);
     this.currentDonType$.subscribe(eventType => {
     this.UpdateEventForm = this.formBuilder.group({
        isActive: [eventType.isActive],
        donName: [eventType.donName, [Validators.required, Validators.minLength(2)]],
        
      });
    });
  }

  getEventById(id:string){
    this.currentDonType$ = this.donationtypeService.get(id);

  }

 

  onUpdate():any{
    console.log(this.UpdateEventForm.value);
    var data = this.UpdateEventForm.value;
    var donId = this.don_id;
    this.donationtypeService.updateEvent(donId, data).subscribe(
      donType => {
        this.router.navigate(['/Events'])
      },
      error => this.errorMsg = error,
    );
  }

}
