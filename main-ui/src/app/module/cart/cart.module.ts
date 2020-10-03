import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartItemListComponent } from './components/cart-item-list/cart-item-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SubTotalComponent } from './components/sub-total/sub-total.component';
import { CheckoutFooterComponent } from './components/checkout-footer/checkout-footer.component';
import { MatCheckboxModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [CartItemListComponent, CartItemComponent, SubTotalComponent, CheckoutFooterComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatCheckboxModule,
    MatButtonModule,
    ConfirmDialogModule,
    ProgressSpinnerModule
  ]
})
export class CartModule { }
