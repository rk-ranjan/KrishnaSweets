import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/module/cart/services/cart.service';
import { Cart } from 'src/app/module/cart/components/models/cart';
import { OrderForm } from '../../models/order-form';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Order } from 'src/app/core/model/order';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.scss']
})
export class ShippingDetailsComponent implements OnInit {
  public cartList: Cart[];
  public order: Order = new Order();
  public orderForm: FormGroup;
  public date7: Date;
  constructor(
    private cartService: CartService,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.cartService.getCartItems().subscribe(
      (res: Cart[]) => {
        this.cartList = res;      
    });  
    this.orderForm = this.formBuilder.group({
       fname: new FormControl('', Validators.required),
       lname: new FormControl('', Validators.required),
       date: new FormControl('', Validators.required),
       mobile: new FormControl('', Validators.required),
       addressMain: new FormControl('', Validators.required),
       addressOptional: new FormControl('', Validators.required),
       country: new FormControl('', Validators.required),
       state: new FormControl('', Validators.required),
       zip: new FormControl('', Validators.required)
    });
  }

  public submitOrder = () => {
    this.order.CustomerID = "kjnwekd",
    this.order.EmployeeId ="jdnwekd",
    this.order.ShipName =  this.orderForm.controls.fname.value + this.orderForm.controls.lname.value;
    this.order.ShipCountry = this.orderForm.controls.country.value;
    this.order.ShipCity = this.orderForm.controls.state.value;
    console.log(this.order);
  }

}
