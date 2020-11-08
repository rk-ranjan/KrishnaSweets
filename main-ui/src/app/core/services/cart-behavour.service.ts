import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { CartService } from 'src/app/module/cart/services/cart.service';
import { Cart } from 'src/app/module/cart/components/models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartBehavourService {
  
  private itemsInCartSubject: BehaviorSubject<any[]> = new BehaviorSubject([]);
  private itemsInCart: Cart[] = [];

  constructor(
    private cartService: CartService
  ) {
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }

  public addToCart(item: Cart) {
    this.itemsInCartSubject.next([...this.itemsInCart, item]);
  }

  public getItems(): Observable<any[]> {
    return this.itemsInCartSubject;
  }

  public emptyCart() {
    this.itemsInCartSubject.next([]);
  }
  
}
