import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { RegistrationComponent } from './module/login/components/registration/registration.component';
import { RoleGuardService } from './shared/services/role-guard.service';
import { CakeDetailsComponent } from './module/cakes/components/cake-details/cake-details.component';
import { CommingSoonComponent } from './components/comming-soon/comming-soon.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'product',
        children: [
          {
            path: 'details',
            component: CakeDetailsComponent
          },
          {
            path: 'details/:id',
            component: CakeDetailsComponent
          }
        ]
      },
      {
        path: 'cakes',
        loadChildren : () => import('./module/cakes/cakes.module').then(m => m.CakesModule)
      },
      {
         path: 'order',
         loadChildren: () => import('./module/order/order.module').then((m) => m.OrderModule),
         canActivate: [AuthGuardService]
      },
      {
        path: 'sweets',
        loadChildren : () => import('./module/sweets/sweets.module').then(m => m.SweetsModule),
        // canActivate: [RoleGuardService]
      },
      {
        path: 'search',
        loadChildren : () => import('./module/search/search.module').then((m) => m.SearchModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./module/cart/cart.module').then((m) => m.CartModule),
        canActivate: [AuthGuardService]
      },
      {
        path: 'admin',
        loadChildren: () => import('./module/admin/admin.module').then((m) => m.AdminModule),
        canActivate: [RoleGuardService]
      },
      {
        path: 'profiles',
        loadChildren: () => import('./module/users/users.module').then((m) => m.UsersModule),
        canActivate: [AuthGuardService]
      }
    ]
  },
  {
    path: 'login',
    loadChildren : () => import('./module/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    component: RegistrationComponent
  },
  {
    path: '**',
    component: CommingSoonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
