import { Component, OnInit } from '@angular/core';
import { DonationTypeService } from 'src/app/Services/Donations/donationtype.service';


@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.css']
})
export class EventManagementComponent implements OnInit {
  donationTypes:any;
  loading = true;
  constructor(private donationTypeService:DonationTypeService) { }

  ngOnInit(): void {
    this.getDonationTypes();
  }

  getDonationTypes(){
    console.log("mm")
    this.donationTypeService.getDonationsType().subscribe(data=>{
      console.log(data);
      this.donationTypes = data;
      this.loading = false;
    }) 
  
    
  }

}
