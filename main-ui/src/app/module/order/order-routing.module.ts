import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { OrderAddressComponent } from './components/order-address/order-address.component';
import { ShippingDetailsComponent } from './components/shipping-details/shipping-details.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: OrderListComponent
  // },
  {
    path: '',
    redirectTo: 'shipingDetails'
  },
  {
    path: 'new',
    component: ProductListComponent
  },
  {
    path: 'shipingDetails',
    component: ShippingDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
