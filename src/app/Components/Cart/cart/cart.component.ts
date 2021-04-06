import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() childMessage:any;
  cartItems : any;
  userCart =[{}] ;
  totalPrice :number = 0;
  isCartEmpty = true;


  constructor(private _router:Router) { }

  ngOnInit(): void {
    this.getCartItems();
    
    console.log(this.childMessage+ " okkk");
  }

  cartItemsLenght = 0;

  getCartItems(){
    var oldData = JSON.parse(localStorage.getItem('cartItems') || 'null');
    this.cartItems = oldData;

    var retrievedObject = localStorage.getItem('localStorageUserData') || '{}';
    var userID = JSON.parse(retrievedObject)._id;
    if(oldData == null){  
    }else{
    for (let i = 0; i < oldData.length; i++) {
      if(userID == oldData[i].user_id){
        
        console.log('True')
        this.userCart.push(oldData[i]);
        this.cartItems = this.userCart.slice(1)
        this.totalPrice += parseInt(this.cartItems[i].item_price);
        this.cartItemsLenght += 1
        console.log(this.cartItemsLenght)
        this.isCartEmpty= false;

        }
    }

  }//else 
    console.log(this.userCart)
    // this.cartItems = this.userCart;
   
console.log(this.userCart)
  }
  ClearShoppingCart(){
    localStorage.removeItem('cartItems');
    // window.location.href = "http://localhost:4200/Cart/cart"
      this._router.navigate(['/Events']);
  }

}
