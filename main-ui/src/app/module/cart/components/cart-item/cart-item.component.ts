import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() public cart: Cart;
  @Output() public deleteItem: EventEmitter<any> = new EventEmitter<any>(); 
  checked: boolean = true;
  constructor() { }

  ngOnInit() {  
     console.log(this.cart);
  }

  public deleteCartItem = (data: any) => {
     this.deleteItem.emit(data);
  }

}
