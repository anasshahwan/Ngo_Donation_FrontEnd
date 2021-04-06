import { Component, OnInit } from '@angular/core';
import { DonationService } from 'src/app/Services/Donations/donation.service';

@Component({
  selector: 'app-all-donations',
  templateUrl: './all-donations.component.html',
  styleUrls: ['./all-donations.component.css']
})
export class AllDonationsComponent implements OnInit {
  addEventLink = '/Events/add'
  constructor(private donationService:DonationService) { }
  donationsData:any;

  ngOnInit(): void {
    this.getAllDonations()
  }

  getAllDonations(){
    this.donationService.getAllDonations().subscribe(data=>{
      console.log(data);
      this.donationsData = data
    })
  }

}
