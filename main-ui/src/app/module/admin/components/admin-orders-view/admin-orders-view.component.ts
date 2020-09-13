import { Component, OnInit } from '@angular/core';
import { SelectItem, MessageService } from 'primeng/api';
import { OrdersService } from 'src/app/module/order/services/orders.service';
import { Order } from 'src/app/core/model/order';

@Component({
  selector: 'app-admin-orders-view',
  templateUrl: './admin-orders-view.component.html',
  styleUrls: ['./admin-orders-view.component.scss'],
  providers: [MessageService]
})
export class AdminOrdersViewComponent implements OnInit {
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
