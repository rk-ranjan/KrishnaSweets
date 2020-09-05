import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { LoginService } from 'src/app/core/services/login.service';
import { RegUser } from '../../models/reg-user';
import { trim } from 'jquery';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public regForm: FormGroup;
  public uploadedFiles: any[] = [];
  public firstStep: boolean = true;
  public register: RegUser = new RegUser();
  public data: any
  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
  ) {
    this.regForm = formBuilder.group({
      fullname: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
    })
  }

  public ngOnInit() {
  }

  public gotoLogin = () => {
    this.router.navigate(['/login']);
  }

  public onSubmitRegistration = (event) => {
    if (event.password === event.confirmPassword) {
        this.register.roles = [];
        this.register.fullname = this.regForm.controls.fullname.value;
        this.register.email = this.regForm.controls.email.value;
        this.register.mobile = this.regForm.controls.mobile.value;
        this.register.dob = this.regForm.controls.dob.value;
        this.register.roles .push('ROLE_USER');
        this.register.password = trim(this.regForm.controls.password.value);
        console.log(this.register);
    } else {
       console.log("two password's are not same");
    }
  }
}
