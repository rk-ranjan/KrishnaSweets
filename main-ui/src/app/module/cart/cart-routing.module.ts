import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartItemListComponent } from './components/cart-item-list/cart-item-list.component';

const routes: Routes = [
  {
    path: '',
    component: CartItemListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
