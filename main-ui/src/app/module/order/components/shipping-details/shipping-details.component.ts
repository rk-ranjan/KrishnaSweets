import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/module/cart/services/cart.service';
import { Cart } from 'src/app/module/cart/components/models/cart';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Order } from 'src/app/core/model/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.scss']
})
export class ShippingDetailsComponent implements OnInit {
  public cartList: Cart[];
  public totalCost: number = 0;
  public order: Order = new Order();
  public orderForm: FormGroup;
  public date7: Date;
  constructor(
    private cartService: CartService,
    public formBuilder: FormBuilder,
    private orderService: OrdersService
  ) { }

  ngOnInit() {
    this.cartService.getCartItems().subscribe(
      (res: Cart[]) => {
        this.cartList = res;
        res.forEach((cart: Cart) => {
          this.totalCost = this.totalCost + cart.price;
        })      
    });  
    this.orderForm = this.formBuilder.group({
       fname: new FormControl('', Validators.required),
       lname: new FormControl('', Validators.required),
       date: new FormControl('', Validators.required),
       mobile: new FormControl('', Validators.required),
       addressMain: new FormControl('', Validators.required),
       addressOptional: new FormControl('', Validators.required),
       country: new FormControl('INDIA', Validators.required),
       city: new FormControl('SITAMARHI', Validators.required),
       zip: new FormControl('', Validators.required)
    });
  }

  public submitOrder = () => {
    this.order.customerId = "kjnwekd",
    this.order.shipName =  this.orderForm.controls.fname.value + this.orderForm.controls.lname.value;
    this.order.shipCountry = this.orderForm.controls.country.value;
    this.order.shipCity = this.orderForm.controls.city.value;
    this.order.mobile = this.orderForm.controls.mobile.value;
    this.order.shipAddressMain = this.orderForm.controls.addressMain.value;
    this.order.shipCountry = this.orderForm.controls.country.value;
    this.order.shipCity = this.orderForm.controls.city.value;
    this.order.shipPostalCode = this.orderForm.controls.zip.value;
    this.order.shipAddressOptional = this.orderForm.controls.addressOptional.value;
    this.order.deleverOn = this.orderForm.controls.date.value;
    const orderDate = new Date();
    this.order.orderDate = orderDate.getDate().toString();

    this.orderService.saveOrder(this.order).subscribe(
      (response: any) => {
        console.log(response);       
      }
    )
  }

}
