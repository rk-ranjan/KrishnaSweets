import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { CakeDetails } from 'src/app/module/cakes/services/cake-details';
import { CartBehavourService } from 'src/app/core/services/cart-behavour.service';
import { Router } from '@angular/router';
import { Cart } from 'src/app/module/cart/components/models/cart';
import { CartService } from 'src/app/module/cart/services/cart.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-product-details-small',
  templateUrl: './product-details-small.component.html',
  styleUrls: ['./product-details-small.component.scss'],
  providers: [
    MessageService,
    ConfirmationService
  ]
})
export class ProductDetailsSmallComponent implements OnInit, OnChanges {
  @Input() public detail: CakeDetails;
  public detailData: CakeDetails;
  public FinalPrice: number = 0;
  public fixedPrice: number = 0;
  public detailForm: FormGroup;
  public currentSlide = 0;
  constructor(
    private cartBehaviorService: CartBehavourService,
    private cartService: CartService,
    private router: Router,
    private messageService: MessageService,
    public formBuilder: FormBuilder,
    private confirmationService: ConfirmationService,
    private localStorageService: LocalStorageService
  ) { }
  public ngOnChanges(changes: SimpleChanges): void {
    if(changes['detail']) {
       const variableChange = changes['detail'];
       this.detailData = variableChange.currentValue;
       this.FinalPrice = this.detailData.items.unitPrice - (this.detailData.items.unitPrice * this.detailData.items.discountPercentage)/100;
       this.fixedPrice = this.detailData.items.unitPrice;
       Math.round(this.FinalPrice);
       Math.round(this.fixedPrice);
    }
  }

  public ngOnInit() { 
    this.detailForm = this.formBuilder.group({
      message: new FormControl('', Validators.required),
      weight: new FormControl('1',Validators.required)
    });   
  }

  public priceCalculator = (event) => {
    this.FinalPrice = this.detailData.items.unitPrice * event.value -(this.detailData.items.unitPrice * event.value * this.detailData.items.discountPercentage)/100; 
    this.fixedPrice = this.detailData.items.unitPrice * event.value; 
    Math.round(this.FinalPrice);
    Math.round(this.fixedPrice);   
  }
  public buyProduct = () => {   
      this.addToCart();  
  }

  public addToCart = () => {
      var cart: Cart = new Cart();
      cart.username = this.localStorageService.getItem('email');
      cart.itemId = this.detailData.items._id;
      cart.itemName = this.detailData.items.itemName;
      cart.price = this.FinalPrice;
      cart.weight = this.detailForm.controls.weight.value;
      cart.quantity = 1;
      cart.eggless = this.detailData.items.eggless;
      cart.discount = this.detailData.items.discountPercentage;
      cart.desc = this.detailData.items.descriptions;
      cart.img = this.detailData.image[0].image.data;
      cart.wishMsg = this.detailForm.controls.message.value;
      if (this.detailForm.controls.message.value === '' && this.detailData.items.productId === 1) {
          this.confirmationService.confirm({
              message: 'Are you sure that you want to proceed?',
              header: 'Confirmation',
              icon: 'pi pi-exclamation-triangle',
              accept: () => {
                this.sendToCart(cart);
              },
              reject: () => {
   
              }
          });
      } else {
        this.sendToCart(cart);
      }
  }

  public sendToCart = (cart: Cart) => {
    if (cart.username !== null) {
      this.cartService.addItemToCart(cart).subscribe(
        (res) => {
          this.messageService.add({severity:'success', summary:'Cart', detail:'Added Successfully'});
          setTimeout (() => {
            this.cartBehaviorService.addToCart(cart);
            this.router.navigate(["/cart"]);  
          }, 1000);          
      });
    } else {
       this.router.navigate(['/login', {redirectUrl: this.router.url}]);
    }
  }
}
