import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Cart } from '../models/cart';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-sub-total',
  templateUrl: './sub-total.component.html',
  styleUrls: ['./sub-total.component.scss']
})
export class SubTotalComponent implements OnInit {
  @Output() public checkout: EventEmitter<any> =  new EventEmitter<any>();
  @Input() public cartList: Cart[];
  @Input() public totalCost: number;
  constructor(
  ) { }

  ngOnInit() {

  }

  public checkOutOrder = () => {
     this.checkout.emit("event");
  }

}
