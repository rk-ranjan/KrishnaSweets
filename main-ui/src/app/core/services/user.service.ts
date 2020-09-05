import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;

  /**
   * @param  {HttpService} httpService
   */
  constructor(private httpService: HttpService) { }

  /**
   * @description Initialize the current user
   */
  public initCurrentUser() {
    return this.httpService.get<User>("url");
  }

  /**
   * @description Get the currently logged in user
   * @returns User
   */
  public getCurrentUser(): User {
    return this.user;
  }

  /**
   * @description Store the logged in user details in a variable, called once after successful login
   * @param  {User} user
   */
  public setCurrentUser(user: User) {
    this.user = user;
  }

  /**
   * @description Get all the permissions of the logged in user
   * @returns Perms
   */
  public getPermissions(): any {
    return this.user;
  }

  /**
   * @description Check whether the logged in user has a given permission
   * @param  {string} permName
   * @returns boolean
   */
  public hasPermission(permName: string): boolean {
    const userPerms = this.getPermissions();
    return userPerms['perm-set'].indexOf(permName) !== -1;
  }

  /**
   * @description Get the id of the currently logged in user
   * @returns number
   */
  public getCurrentUserID(): any {
      // return +this.user.meta['@href'].substring(this.user.meta['@href'].lastIndexOf('/') + 1);
  }

}
