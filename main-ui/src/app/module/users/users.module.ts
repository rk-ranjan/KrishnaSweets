import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

@NgModule({
  declarations: [
    UserProfileComponent, 
    SettingsComponent, 
    MyOrdersComponent, 
    UserHomeComponent, 
    UserHeaderComponent, 
    UserSettingsComponent, OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
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
    MatCheckboxModule,
    MatButtonModule,
    MessagesModule,
    MessageModule,
    ProgressSpinnerModule
  ]
})
export class UsersModule { }
