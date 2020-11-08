import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShippingDetailsComponent } from './components/shipping-details/shipping-details.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { BuyNowComponent } from './components/buy-now/buy-now.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shipingDetails'
  },
  {
    path: 'history',
    component: OrderListComponent
  },
  {
    path: 'shipingDetails',
    component: ShippingDetailsComponent
  },
  {
    path: 'buy-now',
    component: BuyNowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
