import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {
    path: 'home',
    component: AdminComponent,
    data: { title: 'Admin'},
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
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