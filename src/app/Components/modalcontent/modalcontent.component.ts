import { Component, OnInit, Input  } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modalcontent',
  templateUrl: './modalcontent.component.html',
  styleUrls: ['./modalcontent.component.css']
})
export class ModalcontentComponent implements OnInit {
  @Input() id:any;
  @Input() name:String;

  price = new FormControl('',[Validators.required,Validators.pattern("^[0-9]*")]);
  constructor(public activeModal: NgbActiveModal,

    private _router:Router,
    ) {}

  ngOnInit(): void {
  }

  addToCart(){
 
    
  var retrievedObject = localStorage.getItem('localStorageUserData') || '{}';
  var user_id = JSON.parse(retrievedObject)._id;

// Put the object into storage

var isCartEmpty = localStorage.getItem('cartItems') || 'null';
// var isCartEmpty = JSON.parse(retrievedCartObject).cart== null
var cartItems = [];
if(isCartEmpty == 'null'){
  console.log("was Empty.")
  var obj = [{
    "user_id":user_id,
    "item_id":this.id,
    "item_name":this.name,
    "item_price":this.price.value,
  }];
  localStorage.setItem('cartItems',JSON.stringify(obj));
  this.activeModal.close();

  this._router.navigate(['Cart/cart']); 

  // var cartObject = {  
  //     'cart': [{
  //       "item_id":this.id,
  //       "item_name":this.name,
  //       "item_price":this.price,
  //     }] ,
  //   };
  //   localStorage.setItem('cartObject', JSON.stringify(cartObject));
   
}else{
  var oldData = JSON.parse(localStorage.getItem('cartItems') || 'null');
  
  var newObj = {
    "user_id":user_id,
          "item_id":this.id,
          "item_name":this.name,
          "item_price":this.price.value,
        };
  oldData.push(newObj)

  localStorage.setItem('cartItems',JSON.stringify(oldData));
  console.log(isCartEmpty) 
  this.activeModal.close();
  this._router.navigate(['Cart/cart']); 
  // localStorage.setItem('cartObject', JSON.stringify(newObject));
}



  }// Add To Cart Using Local Storage .. 

}
