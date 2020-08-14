import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../models/cart';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.scss']
})
export class CartItemListComponent implements OnInit {
  public cartItems: Cart[];
  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cartService.getCartItems().subscribe(
      (res: Cart[]) => {
        this.cartItems = res;
      })
  }

  public checkOutOrder = () => {
     this.router.navigate(["/order"]);
  }

  public checkOutOrderDesktop = (event: any) => {
     this.router.navigate(["/order"]);
  }

}
