import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from 'src/app/core/model/user';
import { LoginService } from 'src/app/core/services/login.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {
  public isAdmin: boolean;
  public user: User;
  public role: boolean;
  constructor(
    private loginService: LoginService,
    private localStorageService: LocalStorageService
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
      const role = this.localStorageService.getItem('userRole');
      if (role === 'ROLE_ADMIN') {
        return true;
      }
      if (role === 'ROLE_USER') {
        return false;
      }
  }
}
