import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CakesRoutingModule } from './cakes-routing.module';
import { CakesTypeComponent } from './components/cakes-type/cakes-type.component';
import { CakeCategoriesComponent } from './components/cake-categories/cake-categories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CakesOverviewComponent } from './components/cakes-overview/cakes-overview.component';
import { CakesFilterComponent } from './components/cakes-filter/cakes-filter.component';
import { MatCommonModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { FilterByPriceComponent } from './components/filter-by-price/filter-by-price.component';
import { CakeFlavorsComponent } from './components/cake-flavors/cake-flavors.component';
import { CakeDetailsComponent } from './components/cake-details/cake-details.component';
import { CakeListComponent } from './components/cake-list/cake-list.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [
    CakesTypeComponent, 
    CakeCategoriesComponent, 
    CakesOverviewComponent, 
    CakesFilterComponent, 
    FilterByPriceComponent, 
    CakeFlavorsComponent, 
    CakeDetailsComponent, 
    CakeListComponent
  ],
  imports: [
    CommonModule,
    CakesRoutingModule,
    SharedModule,
    MatCommonModule,
    MatButtonModule,
    ProgressSpinnerModule
  ]
})
export class CakesModule { }
