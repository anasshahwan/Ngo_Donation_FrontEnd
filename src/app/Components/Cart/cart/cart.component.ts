import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems : any;
  userCart =[{}] ;

  constructor(private _router:Router) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  cartItemsLenght = 0;

  getCartItems(){
    var oldData = JSON.parse(localStorage.getItem('cartItems') || 'null');
    this.cartItems = oldData;

    var retrievedObject = localStorage.getItem('localStorageUserData') || '{}';
    var userID = JSON.parse(retrievedObject)._id;
    for (let i = 0; i < oldData.length; i++) {
      if(userID == oldData[i].user_id){
        console.log('True')
        this.userCart.push(oldData[i]);
        this.cartItems = this.userCart.slice(1)
        this.cartItemsLenght += 1
        console.log(this.cartItemsLenght)
        }
    }
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
