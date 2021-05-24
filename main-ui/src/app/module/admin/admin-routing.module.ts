import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { AdminComponent } from './components/admin/admin.component';
import { ManageCakesComponent } from './components/manage-cakes/manage-cakes.component';
import { AdminOrdersViewComponent } from './components/admin-orders-view/admin-orders-view.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddNewProductTypeComponent } from './components/add-new-product-type/add-new-product-type.component';
import { AddNewCategoryComponent } from './components/add-new-category/add-new-category.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    data: { title: 'Admin'},
    children: [
      {
       path: '',
       redirectTo: 'dashboard'
      //  component: DashboardComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'cakes',
        component: ManageCakesComponent
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
      },
      {
        path: 'cakes/new-product',
        component: AddNewProductTypeComponent
      },
      {
        path: 'cakes/new-catogory/:id',
        component: AddNewCategoryComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
