import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-sub-total',
  templateUrl: './sub-total.component.html',
  styleUrls: ['./sub-total.component.scss']
})
export class SubTotalComponent implements OnInit {
  // @Output() public checkout =  new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  public checkOutOrder = () => {
    //  this.checkout.emit("event");
    console.log("########");    
  }

}
