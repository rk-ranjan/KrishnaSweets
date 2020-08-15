import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShippingDetailsComponent } from './components/shipping-details/shipping-details.component';
import { OrderListComponent } from './components/order-list/order-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shipingDetails'
  },
  {
    path: 'list',
    component: OrderListComponent
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
