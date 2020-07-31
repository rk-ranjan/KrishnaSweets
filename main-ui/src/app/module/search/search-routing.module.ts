import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalMobileSearchComponent } from './components/global-mobile-search/global-mobile-search.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalMobileSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
