import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CakeDetails } from 'src/app/module/cakes/services/cake-details';
import { CartBehavourService } from 'src/app/core/services/cart-behavour.service';
import { Router } from '@angular/router';
import { Cart } from 'src/app/module/cart/components/models/cart';
import { CartService } from 'src/app/module/cart/services/cart.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [MessageService]
})
export class ProductDetailsComponent implements OnInit, OnChanges {
  @Input() public detail: CakeDetails;
  public detailData: CakeDetails;
  public currentSlide: number = 0;
  cartCount: any;
  
  constructor(
    private cartBehaviorService: CartBehavourService,
    private cartService: CartService,
    private router: Router,
    private messageService: MessageService
  ) { }
  ngOnChanges(changes: SimpleChanges): void {   
    if(changes['detail']) {
       const variableChange = changes['detail'];
       this.detailData = variableChange.currentValue;
    }
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

  public buyProduct = () => {
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

  ngOnInit() { 
    // this.cartService.navIcons = 4;
  }


}
