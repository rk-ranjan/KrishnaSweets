import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/model/order';
import { User } from 'src/app/core/model/user';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { OrdersService } from 'src/app/module/order/services/orders.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  providers: [ConfirmationService]
})
export class OrderListComponent implements OnInit {
  public currentPage = 1;
  public page: number;
  public orderList: Order[];
  public user: User;
  public orderForm: FormGroup;
  public totalOrder: number;
  public returnedArray: Order[];
  public finalList: Order[];
  constructor(
    private orderService: OrdersService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 

  }
  public ngOnInit() {
     this.orderService.getAllOrders().subscribe((res: Order[]) => {     
       this.orderList = res;
       this.totalOrder = res.length;
       this.returnedArray = this.orderList.slice(0, 10);
       this.finalList = this.returnedArray;
     });
     this.user = JSON.parse(localStorage.getItem("User"));
  }

  public pageChanged (event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.orderList.slice(startItem, endItem);
    this.finalList = this.returnedArray;
  }

  public filterOderData = (filterText: string) => {
    // const filterData: any = this.returnedArray;
    this.finalList = [...filterText ? this.filterSingleItem(filterText) : this.returnedArray];
  }
 
  public filterSingleItem = (text: string) => {
    let filterAgentsOrPolicy = this.returnedArray.filter((singleItem) => singleItem['CustomerID'].toLowerCase().indexOf(text.toLowerCase())  > -1);
    filterAgentsOrPolicy = this.returnedArray.filter((singleItem) => singleItem['ShipName'].toLowerCase().indexOf(text.toLowerCase())  > -1);
    // filterAgentsOrPolicy = this.returnedArray.filter((singleItem) => singleItem['OrderID'].toString().indexOf(text) > -1);
    // filterAgentsOrPolicy = this.returnedArray.filter((singleItem) => singleItem.ShipPostalCode.toString().indexOf(text) > -1);
     return filterAgentsOrPolicy;
  }

}
