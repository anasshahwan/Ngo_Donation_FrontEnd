import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { DonationService } from 'src/app/Services/Donations/donation.service';

@Component({
  selector: 'app-addshipmentinfo',
  templateUrl: './addshipmentinfo.component.html',
  styleUrls: ['../../css/basics.css','../../css/table.css','../../css/form.css','./addshipmentinfo.component.css']
})
export class AddshipmentinfoComponent implements OnInit {
  childMessage = "testMessage"
  disableTag = false;
  allEventLink = "/Events"
  submitLink = "/Events/addcartitems"
  constructor(private donationService:DonationService,private _router:Router) { }
  
  currentUser:any;
  cartItems:any;
  userCart = [{}];
  totalPrice:number = 0;
  loading = true;
  donationTypes : any = [];

  ngOnInit(): void {

  var retrievedObject = localStorage.getItem('localStorageUserData') || '{}';
  this.currentUser = JSON.parse(retrievedObject);

  this.getUserCart();
  }

  payNow(){

    var donationObject = {
      "userId": this.currentUser._id,
      "amount":this.totalPrice,
      "donType":this.donationTypes
    }
    console.log(donationObject)

    this.donationService.addDonation(donationObject).subscribe(data=>{
      localStorage.removeItem('cartItems');

      this._router.navigate(['/paysuccessfully']);
    })

    // var user_id = this.currentUser._id;
    // console.log(this.currentUser._id)
    // console.log(this.totalPrice)
    // console.log(this.donationTypes);
    // // "userId":"606bad548eb2 f46f33b37cb3",
    // "amount":100,
    // "donType":["606a2ef29d42b80ca775281f","606a2ed19d42b80ca775281d"]
  }

  getUserCart(){
    var oldData = JSON.parse(localStorage.getItem('cartItems') || 'null');
    this.cartItems = oldData;

    var retrievedObject = localStorage.getItem('localStorageUserData') || '{}';
    var userID = JSON.parse(retrievedObject)._id;
    for (let i = 0; i < oldData.length; i++) {
      if(userID == oldData[i].user_id){
        
        this.userCart.push(oldData[i]);
        this.cartItems = this.userCart.slice(1)
        this.donationTypes.push(this.cartItems[i].item_id);
        this.totalPrice += parseInt(this.cartItems[i].item_price);
        }
    }
  }

  

}
