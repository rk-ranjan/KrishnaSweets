import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SweetsRoutingModule } from './sweets-routing.module';
import { SweetsOverviewComponent } from './components/sweets-overview/sweets-overview.component';
import { ListSweetsComponent } from './components/list-sweets/list-sweets.component';
import { SweetDetailsComponent } from './components/sweet-details/sweet-details.component';
import { MatButtonModule, MatCommonModule } from '@angular/material';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SharedModule } from '../../shared/shared.module';
import { CakesModule } from '../cakes/cakes.module';

@NgModule({
  declarations: [
    SweetsOverviewComponent, 
    ListSweetsComponent, 
    SweetDetailsComponent
  ],
  imports: [
    CommonModule,
    SweetsRoutingModule,
    SharedModule,
    MatCommonModule,
    MatButtonModule,
    ProgressSpinnerModule,
    CakesModule
  ]
})
export class SweetsModule { }
