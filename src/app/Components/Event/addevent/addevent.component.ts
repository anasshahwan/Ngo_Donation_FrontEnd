import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['../../css/basics.css','../../css/table.css','../../css/form.css']
})
export class AddeventComponent implements OnInit {
  title="Add Event"
  allDonationsLink = "/Donations";
  constructor() { }

  ngOnInit(): void {
  }

}
