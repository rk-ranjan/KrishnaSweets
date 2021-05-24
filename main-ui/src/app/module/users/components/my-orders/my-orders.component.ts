import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/model/order';
import { SelectItem, MessageService } from 'primeng/api';
import { OrdersService } from 'src/app/module/order/services/orders.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss'],
  providers: [MessageService]
})
export class MyOrdersComponent implements OnInit {
 public products: Order[]; 
 public statuses: SelectItem[];
 public email: string;
 public loading: boolean = true;

  clonedProducts: { [s: string]: Order; } = {};
  constructor(
    private messageService: MessageService,
    private orderService: OrdersService,
    private localStorageService: LocalStorageService,
    private _sanitizer: DomSanitizer,
    private router: Router
  ) {
    this.email = localStorage.getItem("email");
  }

  ngOnInit() {
    this.orderService.getCustomerOrder(this.email).subscribe(
      (response: any[]) => {
        this.loading = false;
        response.sort((a, b) => b.order['id'].localeCompare(a.order['id'])); 
        this.products = response;
    })
  }

  public cancelOrder = (order: any) => {
    this.orderService.deleteOrder(order.id).subscribe(
      (response: any) => {
       this.router.routeReuseStrategy.shouldReuseRoute = ()  => false;
       this.router.onSameUrlNavigation = 'reload';
       this.router.navigate(["/profiles/orders"]);
    });
  }

}
