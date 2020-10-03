import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/model/order';
import { SelectItem, MessageService } from 'primeng/api';
import { OrdersService } from 'src/app/module/order/services/orders.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss'],
  providers: [MessageService]
})
export class MyOrdersComponent implements OnInit {
  products1: Order[];

  products2: Order[];

  statuses: SelectItem[];
  public email: string;

  clonedProducts: { [s: string]: Order; } = {};
  constructor(
    private messageService: MessageService,
    private orderService: OrdersService,
    private localStorageService: LocalStorageService
  ) {
    this.email = localStorage.getItem("email");
  }

  ngOnInit() {
    this.orderService.getCustomerOrder(this.email).subscribe(
      (response: Order[]) => {
        console.log(response);
        this.products1 = response;
        this.products2 = response;
    })
    this.statuses = [{label: 'In Stock', value: 'INSTOCK'},{label: 'Low Stock', value: 'LOWSTOCK'},{label: 'Out of Stock', value: 'OUTOFSTOCK'}]
  }

}
