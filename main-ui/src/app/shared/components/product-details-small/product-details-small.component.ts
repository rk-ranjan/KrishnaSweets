import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { CakeDetails } from 'src/app/module/cakes/services/cake-details';
import { CartBehavourService } from 'src/app/core/services/cart-behavour.service';
import { Router } from '@angular/router';
import { Cart } from 'src/app/module/cart/components/models/cart';
import { CartService } from 'src/app/module/cart/services/cart.service';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-product-details-small',
  templateUrl: './product-details-small.component.html',
  styleUrls: ['./product-details-small.component.scss'],
  providers: [MessageService]
})
export class ProductDetailsSmallComponent implements OnInit, OnChanges {
  @Input() public detail: CakeDetails;
  public detailData: CakeDetails;
  public currentSlide = 0;
  constructor(
    private cartBehaviorService: CartBehavourService,
    private cartService: CartService,
    private router: Router,
    private messageService: MessageService
  ) { }
  public ngOnChanges(changes: SimpleChanges): void {
    if(changes['detail']) {
       const variableChange = changes['detail'];
       this.detailData = variableChange.currentValue;
    }
  }

  public ngOnInit() {    
  }

  public buyProduct = () => {
    console.log(event);    
    var cart: Cart = new Cart();
    cart.itemName = "Black forest cake";
    cart.weight = 2;
    cart.price = 299;
    cart.eggless = true;
    cart.itemId = "fjerkf"
    this.cartService.addItemToCart(cart).subscribe(
      (res) => {
        this.cartBehaviorService.addToCart(cart);
        this.router.navigate(["/order"]);          
      }
    );   
  }

  public addToCart = () => {
      var cart: Cart = new Cart();
      cart.itemName = "Black forest cake";
      cart.weight = 2;
      cart.price = 299;
      cart.eggless = true;
      cart.itemId = "fjerkf"
      this.cartService.addItemToCart(cart).subscribe(
        (res) => {
          this.messageService.add({severity:'success', summary:'Cart', detail:'Added Successfully'});
          setTimeout (() => {
            this.cartBehaviorService.addToCart(cart);
            this.router.navigate(["/cart"]);  
          }, 1000);          
        }
      );
  }
}
