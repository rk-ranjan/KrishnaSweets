import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
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
      }
    ]
  },
  {
    path: 'login',
    loadChildren : () => import('./module/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
