import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addshipmentinfo',
  templateUrl: './addshipmentinfo.component.html',
  styleUrls: ['../../css/basics.css','../../css/table.css','../../css/form.css']
})
export class AddshipmentinfoComponent implements OnInit {
  title = "Personal Information";
  allEventLink = "/Events"
  submitLink = "/Events/addcartitems"
  constructor() { }

  ngOnInit(): void {
  }

}
