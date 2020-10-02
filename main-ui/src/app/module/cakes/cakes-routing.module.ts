import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CakesTypeComponent } from './components/cakes-type/cakes-type.component';
import { CakesOverviewComponent } from './components/cakes-overview/cakes-overview.component';
import { CakeDetailsComponent } from './components/cake-details/cake-details.component';
import { CakeListComponent } from './components/cake-list/cake-list.component';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: CakeListComponent
    // component: CakesOverviewComponent
  },
  // {
  //   path: 'list',
  //   component: CakeListComponent
  // },
  {
    path: 'details',
    component: CakeDetailsComponent
  },
  {
    path: 'details/:id',
    component: CakeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CakesRoutingModule { }
