import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CartBehavourService } from 'src/app/core/services/cart-behavour.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Cart } from 'src/app/module/cart/components/models/cart';
import { CartService } from 'src/app/module/cart/services/cart.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  providers: [
    MessageService,
    ConfirmationService
  ]
})
export class CardItemComponent implements OnInit {
  @Input() public cake: any;
  constructor(
    private localStorageService: LocalStorageService,
    private cartService: CartService,
    private messageService: MessageService,
    private cartBehaviorService: CartBehavourService,
    private router: Router
  ) { }
  public val3 = 3.5;
  public ngOnInit() {
    console.log(this.cake);
  }
  public addToCart = (data: any) => {
    var cart: Cart = new Cart();
    cart.username = this.localStorageService.getItem('email');
    cart.itemId = data._id;
    cart.itemName = data.itemName;
    cart.price = data.unitPrice;
    cart.weight = 1;
    cart.quantity = 1;
    cart.eggless = true;
    cart.discount = data.discountPercentage;
    cart.desc = 'Nothing';
    cart.img = data.imageUrl;
    cart.wishMsg = 'Happy Birthday';
    this.sendToCart(cart);
}

public sendToCart = (cart: Cart) => {
  if (cart.username !== null) {
    this.cartService.addItemToCart(cart).subscribe(
      (res) => {
        this.messageService.add({severity:'success', summary:'Cart', detail:'Added Successfully'});
        setTimeout (() => {
          this.cartBehaviorService.addToCart(cart);
        }, 1000);          
    });
  } else {
     this.router.navigate(['/login', {redirectUrl: this.router.url}]);
  }
}
}
