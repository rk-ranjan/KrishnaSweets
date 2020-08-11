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

@NgModule({
  declarations: [DashboardComponent, ManageComponent, AdminHeaderComponent, AdminComponent, ManageCakesComponent],
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
  ]
})
export class AdminModule { }
