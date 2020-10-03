import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

const routes: Routes = [
  {
    path: '',
    component: UserHomeComponent,
    data: { title: 'User'},
    children: [
      {
        path: 'profiles',
        redirectTo: ''
      },
      {
       path: '',
       component: UserProfileComponent
      },
      {
        path: 'orders',
        component: MyOrdersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
