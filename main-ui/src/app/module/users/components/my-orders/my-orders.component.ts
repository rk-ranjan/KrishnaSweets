import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/model/order';
import { SelectItem, MessageService } from 'primeng/api';
import { OrdersService } from 'src/app/module/order/services/orders.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss'],
  providers: [MessageService]
})
export class MyOrdersComponent implements OnInit {
  products: Order[];

  statuses: SelectItem[];
  public email: string;

  clonedProducts: { [s: string]: Order; } = {};
  constructor(
    private messageService: MessageService,
    private orderService: OrdersService,
    private localStorageService: LocalStorageService,
    private _sanitizer: DomSanitizer
  ) {
    this.email = localStorage.getItem("email");
  }

  ngOnInit() {
    this.orderService.getCustomerOrder(this.email).subscribe(
      (response: any[]) => {
        this.products = response;
        console.log(this.products);
    })
  }

}
