import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcartitems',
  templateUrl: './addcartitems.component.html',
  styleUrls: ['../../css/basics.css','../../css/table.css','../../css/form.css']
})
export class AddcartitemsComponent implements OnInit {
  title="Gifts";
  cartLink = "/Cart/cart";
  events = ["Event1","Event2","Event3","Event4"]
  addShipmentInfoLink = "/Cart/addshipmentinfo";
  constructor() { }

  ngOnInit(): void {
  }

}
