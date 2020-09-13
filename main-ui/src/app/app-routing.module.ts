import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { RegistrationComponent } from './module/login/components/registration/registration.component';
import { RoleGuardService } from './shared/services/role-guard.service';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
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
        path: 'gifts',
        loadChildren : () => import('./module/gifts/gifts.module').then((m) => m.GiftsModule)
      },
      {
        path: 'bakery',
        component: HomeComponent
      },
      {
        path: 'search',
        loadChildren : () => import('./module/search/search.module').then((m) => m.SearchModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./module/cart/cart.module').then((m) => m.CartModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./module/admin/admin.module').then((m) => m.AdminModule),
        canActivate: [RoleGuardService]
      },
      {
        path: 'profiles',
        loadChildren: () => import('./module/users/users.module').then((m) => m.UsersModule)
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
