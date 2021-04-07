import { Component, Input, OnInit } from '@angular/core';
import { DonationTypeModel } from 'src/app/Models/DonationTypeModel';
import { DonationTypeService } from 'src/app/Services/Donations/donationtype.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalcontentComponent } from '../../modalcontent/modalcontent.component';
import { UserService } from 'src/app/Services/Users/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allevents',
  templateUrl: './allevents.component.html',
  styleUrls: ['./allevents.component.css']
})
export class AlleventsComponent implements OnInit {
  @Input() childMessage:any;
  title = "All Events";
   addshipmentinfoLink = "/Cart/addshipmentinfo";
   events = ["Event1","Event2","Event3","Event4"];
   donationTypes:any;
  loading = true;
  constructor(
    private donationTypeService:DonationTypeService, 
    private modalService: NgbModal,
    private userService: UserService,
    private router: Router) { }
  
  currentUser:any;
  isAdmin = false;

  ngOnInit(): void {
    this.getDonationTypes();
    this.getCurrentUser();
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

  getCurrentUser(){

    var retrievedObject = localStorage.getItem('localStorageUserData') || '{}';
    this.currentUser = JSON.parse(retrievedObject);
  
    if(this.currentUser._id == null || this.currentUser.token == null){
  
      console.log("User Not Logged In ..")
      this.router.navigate(['/login']) 
      return false;
    }else {
      // this.currentUser._id
      this.getUserByID(this.currentUser._id);
      console.log("User HAs Infoo In Token .. ")
      return true;
  
    }
   }
  getUserByID(id: number){

    this.userService.getUserByID(id).subscribe(data=>{
      console.log(data.role.type);
      this.currentUser = data;
      if(data.role.type == "Admin"){
        this.isAdmin = true;
      }else {
        this.isAdmin = false
      }
      
    })

  }

}
