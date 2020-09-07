import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [UserProfileComponent, SettingsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
