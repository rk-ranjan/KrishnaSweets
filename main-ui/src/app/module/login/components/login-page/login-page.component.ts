
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginUser } from 'src/app/core/model/login-user';
import { LoginService } from 'src/app/core/services/login.service';
import { User } from 'src/app/core/model/user';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';


@Component({
  selector: 'app-login-page',
  styleUrls: ['./login-page.component.scss'],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit, OnDestroy {
  public authenticating = false;
  public logo: string;
  public loginForm: FormGroup;
  public loading = true;
  public invalidLoginMessage: boolean = false;
  constructor(
    public router: Router,
    formBuilder: FormBuilder,
    private loginService: LoginService,
    private localStorageService: LocalStorageService
  ) {
    this.loginForm = formBuilder.group({
      password: new FormControl('', Validators.required),
      userName: new FormControl('', Validators.required)
  });

  }
  public ngOnInit() {
    this.isLogin();
    this.stayOnLoginPage();
  }
  public ngOnDestroy() {
    // unsubscribe to avoid memory leakage.
  }

  public gotoRegister = () => {
    this.router.navigate(['/signup']);
  }
  public isLogin() {
    let flag = false;
    if (this.localStorageService.getItem('_temp_9898jdjk_y783h') && this.localStorageService.getItem('_temp_9898jdjk_y783h') === '787_uwdj_646'){
      flag = true;
    }
  }

  public login() {
    this.authenticating = true;
    let cred: LoginUser = new LoginUser();
    cred.username = this.loginForm.controls.userName.value;
    cred.password = this.loginForm.controls.password.value;
    this.loginService.checkLogin(cred).subscribe(
      (res:User) => {
        this.localStorageService.setItem("User", res);
          this.router.navigate(["/orders"]);
          this.loginService.setLoggedInStatus();
      },
      (error: any) => {
        this.stayOnLoginPage();
        this.invalidLoginMessage = true;
      }
    )
  }

  stayOnLoginPage() {
    this.localStorageService.removeItem("User");
    this.loginForm.controls.userName.setValue('');
    this.loginForm.controls.password.setValue('');
  }
}
