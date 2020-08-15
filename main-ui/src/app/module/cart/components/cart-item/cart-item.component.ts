import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() public cart;
  @Output() public deleteItem: EventEmitter<any> = new EventEmitter<any>(); 
  checked: boolean = true;
  constructor() { }

  ngOnInit() {   
  }

  public deleteCartItem = (data: any) => {
     this.deleteItem.emit(data);
  }

}
