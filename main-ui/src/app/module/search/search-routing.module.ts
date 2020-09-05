import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalMobileSearchComponent } from './components/global-mobile-search/global-mobile-search.component';
import { GlobalSearchComponent } from './components/global-search/global-search.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
