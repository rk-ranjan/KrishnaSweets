import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminComponent } from './components/admin/admin.component';
import { ManageCakesComponent } from './components/manage-cakes/manage-cakes.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material';
import {FileUploadModule} from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {ToastModule} from 'primeng/toast';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AdminOrdersViewComponent } from './components/admin-orders-view/admin-orders-view.component';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import { AddProductComponent } from './components/add-product/add-product.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [DashboardComponent, ManageComponent, AdminHeaderComponent, AdminComponent, ManageCakesComponent, AdminOrdersViewComponent, AddProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
    FileUploadModule,
    ButtonModule,
    CommonModule,
    ToastModule,
    ButtonModule,
    TabViewModule,
    HttpClientModule,
    TableModule,
    DropdownModule,
    ProgressSpinnerModule
  ]
})
export class AdminModule { }
