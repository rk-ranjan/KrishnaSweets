import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Order } from 'src/app/core/model/order';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { AddCake } from 'src/app/module/admin/models/add-cake';
import { CakesService } from 'src/app/module/admin/services/cakes.service';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.scss'],
  providers: [MessageService]
})
export class BuyNowComponent implements OnInit {
  public order: Order = new Order();
  public orderForm: FormGroup;
  public cakesId: string;
  public cakeDetail: AddCake;
  public userName: string; 
  public products: any;
  public userId: string;
  public isOrderSubmitted: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private cakeService: CakesService,
    public formBuilder: FormBuilder,
    private localStorageService: LocalStorageService,
    private orderService: OrdersService,
    private messageService: MessageService,
  ) {
      this.cakesId = this.route.snapshot.paramMap.get('productId');
   }

 
   ngOnInit() {
     this.userName = localStorage.getItem('email');
     this.orderForm = this.formBuilder.group({
        fname: new FormControl('', Validators.required),
        date: new FormControl('', Validators.required),
        mobile: new FormControl('', Validators.required),
        addressMain: new FormControl('', Validators.required),
        addressOptional: new FormControl('Mehshaul Chowk', Validators.required),
        country: new FormControl('BIHAR', Validators.required),
        city: new FormControl('SITAMARHI', Validators.required),
        zip: new FormControl('843301', Validators.required)
     });
     this.cakeService.getProductDetails(this.cakesId).subscribe(
       (res:AddCake) => {
          this.cakeDetail = res;            
     });
   }

  public submitOrder = () => {
    this.getShipDetails();
    this.order.itemId = this.cakeDetail._id;
    this.order.price = this.cakeDetail.unitPrice;
    this.order.weight = 1;
    this.order.itemName = this.cakeDetail.itemName;
    this.createNewOrder();
  }

  public getShipDetails = () => {
    const username = this.localStorageService.getItem('email');
    this.order.customerId = username;
    this.order.shipName =  this.orderForm.controls.fname.value;
    this.order.shipCountry = this.orderForm.controls.country.value;
    this.order.shipCity = this.orderForm.controls.city.value;
    this.order.mobile = this.orderForm.controls.mobile.value;
    this.order.shipAddressMain = this.orderForm.controls.addressMain.value;
    this.order.shipCountry = this.orderForm.controls.country.value;
    this.order.shipCity = this.orderForm.controls.city.value;
    this.order.shipPostalCode = this.orderForm.controls.zip.value;
    this.order.shipAddressOptional = this.orderForm.controls.addressOptional.value;
    this.order.deleverOn = this.orderForm.controls.date.value;
    this.order.status = 'Pending';
    const orderDate = new Date().toLocaleDateString();
    this.order.orderDate = orderDate;
  }

  public createNewOrder = () => {
    this.orderService.saveOrder(this.order).subscribe(
      (response: any) => {
        this.loadCurrentOrders();    
    });
  }

  public loadCurrentOrders = () => {
    this.userId = this.localStorageService.getItem("email");
    const orderDate = new Date().toLocaleDateString();
    this.orderService.getAllOrders().subscribe(
      (response: Order[]) => {
        this.isOrderSubmitted = true;
        this.products = response;
        this.products = this.products.filter((prod) => prod.order.orderDate === orderDate && prod.order.customerId === this.userId);
    });
  }

}
