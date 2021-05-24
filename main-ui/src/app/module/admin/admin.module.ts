import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { AdminComponent } from './components/admin/admin.component';
import { ManageCakesComponent } from './components/manage-cakes/manage-cakes.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatSelectModule } from '@angular/material';
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
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { AddNewProductTypeComponent } from './components/add-new-product-type/add-new-product-type.component';
import { AddNewCategoryComponent } from './components/add-new-category/add-new-category.component';

@NgModule({
  declarations: [
    DashboardComponent, 
    ManageComponent, 
    AdminComponent, 
    ManageCakesComponent, 
    AdminOrdersViewComponent, 
    AddProductComponent, AddNewProductTypeComponent, AddNewCategoryComponent
  ],
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
    ProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    DialogModule,
    RadioButtonModule,
    RatingModule,
    ToolbarModule,
    ConfirmDialogModule,
    InputNumberModule,
    MatSelectModule
  ]
})
export class AdminModule { }
