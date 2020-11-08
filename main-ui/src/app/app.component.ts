import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { User } from './core/model/user';
import { LocalStorageService } from './core/services/local-storage.service';
import { UserBehaviorService } from './core/services/user-behavior.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Krishna Sweets: Order Tracking System';
  public user: User = new User();
  constructor(
    private localStorageService: LocalStorageService,
    private userBehaviorService: UserBehaviorService
  ) {
    setTheme('bs4');
    this.user.accessToken = this.localStorageService.getItem('userAccessToken');
    this.user.name = this.localStorageService.getItem('userName');
    this.user.email = this.localStorageService.getItem('email');
    this.user.roles = this.localStorageService.getItem('userRole');
    this.userBehaviorService.updatedDataSelection(this.user);
  }


}
