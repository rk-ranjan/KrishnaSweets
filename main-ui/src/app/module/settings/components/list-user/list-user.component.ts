import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { SettingsService } from 'src/app/core/services/settings.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit, OnChanges {

  @Input() public userList;
  public user: User = new User();
  public listUser: User[] = [];
  public userForm: FormGroup;
  constructor(
    private settingsService: SettingsService,
    private router: Router,
    public formBuilder: FormBuilder
  ) {
    this.userForm = this.formBuilder.group({
      id: new FormControl('', Validators.required),
      UserId: new FormControl('', Validators.required),
      UserName: new FormControl('', Validators.required),
      Email: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required),
      IsAdmin: new FormControl('', Validators.required)
    });
   }
   
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userList']) {
      const variableChange = changes['userList'];
      this.listUser = variableChange.currentValue;
    }
  }
   
  ngOnInit() {

  }

  public addUser() {
  }

  public editUser(singleUser: User) {

  }

  public updateUser = (id: any) => {
    this.settingsService.updateUser(this.user).subscribe((res: any) => {
        window.location.reload();
    });
  }

}
