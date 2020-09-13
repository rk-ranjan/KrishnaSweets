import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../models/cart';
import { Router } from '@angular/router';
import { ConfirmationService, Message } from 'primeng/api';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.scss'],
  providers: [ConfirmationService]
})
export class CartItemListComponent implements OnInit {
  public cartItems: Cart[];
  public totalCost: number = 0;
  public msgs: Message[] = [];
  public userName: string;
  public position: string;
  constructor(
    private cartService: CartService,
    private router: Router,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.userName = localStorage.getItem('email');
    this.cartService.getCartItems(this.userName).subscribe(
      (res: Cart[]) => {
        this.cartItems = res;
        res.forEach((cart: Cart) => {
          this.totalCost = this.totalCost + cart.price;
        })
      })
  }

  public checkOutOrder = () => {
     this.router.navigate(["/order"]);
  }

  public checkOutOrderDesktop = (event: any) => {
     this.router.navigate(["/order"]);
  }

  public deleteItem = (event: any) => {  
    console.log(event);
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.cartService.removeItemFromCart(event).subscribe(
            (res: any) => {
              window.location.reload();             
          });
      },
      reject: () => {
          this.router.navigate(["/cart"]);
      }
    });    
  }

  public confirm1 = () => {

  }

}
