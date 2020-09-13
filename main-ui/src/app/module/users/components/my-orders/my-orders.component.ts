import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/model/order';
import { SelectItem, MessageService } from 'primeng/api';
import { OrdersService } from 'src/app/module/order/services/orders.service';

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

  clonedProducts: { [s: string]: Order; } = {};
  constructor(
    private messageService: MessageService,
    private orderService: OrdersService
  ) { }

  ngOnInit() {
    this.orderService.getAllOrders().subscribe(
      (response: Order[]) => {
        this.products1 = response;
        this.products2 = response;
    })
    this.statuses = [{label: 'In Stock', value: 'INSTOCK'},{label: 'Low Stock', value: 'LOWSTOCK'},{label: 'Out of Stock', value: 'OUTOFSTOCK'}]
  }

}
