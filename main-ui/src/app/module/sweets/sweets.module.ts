import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SweetsRoutingModule } from './sweets-routing.module';
import { SweetsOverviewComponent } from './components/sweets-overview/sweets-overview.component';
import { ListSweetsComponent } from './components/list-sweets/list-sweets.component';
import { SweetDetailsComponent } from './components/sweet-details/sweet-details.component';

@NgModule({
  declarations: [SweetsOverviewComponent, ListSweetsComponent, SweetDetailsComponent],
  imports: [
    CommonModule,
    SweetsRoutingModule
  ]
})
export class SweetsModule { }
