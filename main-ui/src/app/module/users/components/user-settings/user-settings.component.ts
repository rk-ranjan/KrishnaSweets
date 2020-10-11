import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ChangePassword } from '../../models/change-password';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  public changePasswordForm: FormGroup;
  public changePasswordModal: ChangePassword =  new ChangePassword();
  public msg: any[] = [];
  constructor(
    public formBuilder: FormBuilder,
    public localStorageService: LocalStorageService
  ) { }
  ngOnInit() {
      this.changePasswordForm = this.formBuilder.group({
          oldPassword: ['', Validators.required],
          newPassword: ['', Validators.required],
          confirmPassword: ['', Validators.required]
      })
  }

  public changePassword = (event: any) => {
      if (event.newPassword !== event.confirmPassword) {
        this.msg = [
          {severity:'error', summary:'Error ', detail:'New passwords are not same'}
        ]
        return;
      }
      this.changePasswordModal.email = this.localStorageService.getItem("email");
      this.changePasswordModal.password = event.oldPassword;
      this.changePasswordModal.newPassword = event.newPassword;
      this.changePasswordModal.confirmPassword = event.confirmPassword;
      console.log(this.changePasswordModal);
  }

}
