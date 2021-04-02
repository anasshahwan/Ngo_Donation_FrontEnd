import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allevents',
  templateUrl: './allevents.component.html',
  styleUrls: ['../../css/basics.css','../../css/table.css']
})
export class AlleventsComponent implements OnInit {
  
  title = "All Events";
  addshipmentinfoLink = "/Cart/addshipmentinfo";
  events = ["Event1","Event2","Event3","Event4"];

  constructor() { }

  ngOnInit(): void {
  }

}
