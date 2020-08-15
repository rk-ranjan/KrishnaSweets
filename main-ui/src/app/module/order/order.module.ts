import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './components/order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShippingDetailsComponent } from './components/shipping-details/shipping-details.component';
import {CalendarModule} from 'primeng/calendar';
import { OrderListComponent } from './components/order-list/order-list.component';
import { MatCheckboxModule } from '@angular/material';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    OrderComponent, 
    ShippingDetailsComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    SharedModule,
    CalendarModule,
    MatCheckboxModule,
    ConfirmDialogModule
  ]
})
export class OrderModule { }
