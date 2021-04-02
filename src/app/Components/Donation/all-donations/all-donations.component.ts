import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-donations',
  templateUrl: './all-donations.component.html',
  styleUrls: ['./all-donations.component.css']
})
export class AllDonationsComponent implements OnInit {
  addEventLink = '/Events/add'
  constructor() { }

  ngOnInit(): void {
  }

}
