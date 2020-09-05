import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { AdminComponent } from './components/admin/admin.component';
import { ManageCakesComponent } from './components/manage-cakes/manage-cakes.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    data: { title: 'Admin'},
    children: [
      {
       path: '',
       component: DashboardComponent
      },
      {
        path: 'cakes',
        component: ManageCakesComponent
      },
      {
        path: 'manage',
        component: ManageComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home/dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
