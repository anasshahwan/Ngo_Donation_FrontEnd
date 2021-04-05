import { Component, OnInit } from '@angular/core';
import { DonationTypeModel } from 'src/app/Models/DonationTypeModel';
import { DonationTypeService } from 'src/app/Services/Donations/donationtype.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalcontentComponent } from '../../modalcontent/modalcontent.component';

@Component({
  selector: 'app-allevents',
  templateUrl: './allevents.component.html',
  styleUrls: ['../../css/basics.css','../../css/table.css']
})
export class AlleventsComponent implements OnInit {
  
  title = "All Events";
   addshipmentinfoLink = "/Cart/addshipmentinfo";
   events = ["Event1","Event2","Event3","Event4"];
   donationTypes:any;
  loading = true;
  constructor(private donationTypeService:DonationTypeService, private modalService: NgbModal) { }

 
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
  // sgetDonationsType

  open(id:any,name:String) { 
    const modalRef = this.modalService.open(ModalcontentComponent, { centered: true });
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.id = id;

  }

}
