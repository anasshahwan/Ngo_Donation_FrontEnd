import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DonationTypeModel } from 'src/app/Models/DonationTypeModel';
import { DonationTypeService} from 'src/app/Services/Donations/donationtype.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css','../../css/basics.css','../../css/form.css']
})
export class EditEventComponent implements OnInit {
  title = "Update Event";
  allDonationsLink = "/Events";
  getId: any;
  currentEvent$: Observable<DonationTypeModel>;

  eventUpdateForm: FormGroup;
  event_id: any;
  errorMsg: any;


  constructor(
    private eventService: DonationTypeService,
    private router: Router,
    private activated: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.event_id = this.activated.snapshot.params['id'];
    this.getEventById(this.event_id);
    this.currentEvent$.subscribe(eventType => {
      this.eventUpdateForm = this.formBuilder.group({
        isActive: [eventType.isActive],
        donName: [eventType.donName,[Validators.required, Validators.minLength(1)]],
      });
    });
    

  }

  getEventById(id: number){
    this.currentEvent$ = this.eventService.get(id);
  }

  onUpdate(): any{
    console.log(this.eventUpdateForm.value);
    var data = this.eventUpdateForm.value;
    var eventID = this.event_id;

    this.eventService.updateEvent(eventID, data)
      .subscribe(
        event => {
          this.router.navigate(['/Events'])
        },
        error => this.errorMsg = error,
      );
  }

}
