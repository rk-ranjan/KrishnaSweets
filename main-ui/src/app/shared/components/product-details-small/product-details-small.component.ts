import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
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
  @Input() public detail: any;
  public detailData: any;
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
       this.FinalPrice = this.detailData.unitPrice - (this.detailData.unitPrice * this.detailData.discountPercentage)/100;
       this.fixedPrice = this.detailData.unitPrice;
       Math.round(this.FinalPrice);
       Math.round(this.fixedPrice);
    }
  }

  public ngOnInit() { 
    this.detailForm = this.formBuilder.group({
      message: new FormControl('', Validators.required),
      weight: new FormControl('1',Validators.required)
    });  
    console.log(this.detail); 
  }

  public priceCalculator = (event) => {
    this.FinalPrice = this.detailData.unitPrice * event.value -(this.detailData.unitPrice * event.value * this.detailData.items.discountPercentage)/100; 
    this.fixedPrice = this.detailData.unitPrice * event.value; 
    Math.round(this.FinalPrice);
    Math.round(this.fixedPrice);   
  }
  onSwipe(event) { 
    const x = Math.abs(event.deltaX) > 40 ? (event.deltaX > 0 ? "Right" : "Left") : ""; 
      const tempSlider = x === 'Left' ? this.currentSlide - 1 : this.currentSlide + 1;
      if (tempSlider > -1 && tempSlider < this.detailData.imageUrls.length) {
        this.currentSlide = tempSlider;
      }
  }
  public buyProduct = (id: any) => {   
    if (this.detailForm.controls.message.value === '' && this.detailData.items.productId === 1) {
      this.confirmationService.confirm({
          message: 'Are you sure that you want to proceed?',
          header: 'Confirmation',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            setTimeout(() => {
              this.router.navigate(['order/buy-now', { productId: id } ]);
            }, 200)
          },
          reject: () => {
            setTimeout(() => {
            }, 200)
          }
      });
    } else {
      this.router.navigate(['order/buy-now', { productId: id }]);
    }
  }

  public addToCart = () => {
      var cart: Cart = new Cart();
      cart.username = this.localStorageService.getItem('email');
      cart.itemId = this.detailData._id;
      cart.itemName = this.detailData.itemName;
      cart.price = this.FinalPrice;
      cart.weight = this.detailForm.controls.weight.value;
      cart.quantity = this.detailData.qty;
      cart.discount = this.detailData.discountPercentage;
      cart.desc = this.detailData.descriptions;
      cart.img = this.detailData.imageUrls[0];
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
                setTimeout(() => {
                }, 200);
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
          }, 200);          
      });
    } else {
       this.router.navigate(['/login', {redirectUrl: this.router.url}]);
    }
  }
}
