import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SweetsOverviewComponent } from './components/sweets-overview/sweets-overview.component';
import { ListSweetsComponent } from './components/list-sweets/list-sweets.component';
import { SweetDetailsComponent } from './components/sweet-details/sweet-details.component';

const routes: Routes = [
  // {
  //   path: '',
  //   // component: SweetsOverviewComponent
  //   redirectTo: 'list'
  // },
  {
    path: '',
    component: ListSweetsComponent
  },
  {
    path: 'details',
    component: SweetDetailsComponent
  },
  {
    path: 'details/:id',
    component: SweetDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SweetsRoutingModule { }
