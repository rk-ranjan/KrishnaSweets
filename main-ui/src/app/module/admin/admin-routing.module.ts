import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { AdminComponent } from './components/admin/admin.component';
import { ManageCakesComponent } from './components/manage-cakes/manage-cakes.component';
import { AdminOrdersViewComponent } from './components/admin-orders-view/admin-orders-view.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ManageSweetsComponent } from './components/manage-sweets/manage-sweets.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    data: { title: 'Admin'},
    children: [
      {
       path: '',
       component: DashboardComponent
      },
      {
        path: 'cakes',
        component: ManageCakesComponent
      },
      {
        path: 'sweets',
        component: ManageSweetsComponent
      },
      {
        path: 'manage',
        component: ManageComponent
      },
      {
        path: 'orders',
        component: AdminOrdersViewComponent
      },
      {
        path: 'cakes/add-product',
        component: AddProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
