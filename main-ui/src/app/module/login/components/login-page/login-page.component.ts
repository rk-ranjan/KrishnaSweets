
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginUser } from 'src/app/core/model/login-user';
import { LoginService } from 'src/app/core/services/login.service';
import { User } from 'src/app/core/model/user';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { MessageService } from 'primeng/api';
import { CartService } from 'src/app/module/cart/services/cart.service';
import { Cart } from 'src/app/module/cart/components/models/cart';
import { CartBehavourService } from 'src/app/core/services/cart-behavour.service';


@Component({
  selector: 'app-login-page',
  styleUrls: ['./login-page.component.scss'],
  templateUrl: './login-page.component.html',
  providers: [MessageService]
})
export class LoginPageComponent implements OnInit, OnDestroy {
  public authenticating = false;
  public logo: string;
  public loginForm: FormGroup;
  public loading = true;
  public invalidLoginMessage: boolean = false;
  public redirectTo: string;
  constructor(
    public router: Router,
    formBuilder: FormBuilder,
    private loginService: LoginService,
    private localStorageService: LocalStorageService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private cartItemService: CartService,
    private cartService: CartBehavourService
  ) {
    this.loginForm = formBuilder.group({
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
    this.redirectTo = this.route.snapshot.paramMap.get('redirectUrl');
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
    cred.email = this.loginForm.controls.email.value;
    cred.password = this.loginForm.controls.password.value;
    this.loginService.checkLogin(cred).subscribe(
      (res:User) => {
        this.messageService.add({severity:'success', summary:'Login', detail:'Login Successfull'});
        setTimeout (() => {
          this.localStorageService.setItem("userAccessToken", res.accessToken);
          this.localStorageService.setItem('userName', res.name);
          this.localStorageService.setItem('email', res.email);
          this.localStorageService.setItem('userRole', res.roles[0]);
          this.updateCart(res.email);
          if (this.redirectTo !== undefined) {
            this.router.navigate([this.redirectTo]);
          } else {
            this.router.navigate(['/cart']);
          }
        }, 1000); 
      },
      (error: any) => {
        console.log(error);
        this.messageService.add({severity:'error', summary:'Login Failed', detail:error});
        this.stayOnLoginPage();
        this.invalidLoginMessage = true;
      }
    )
  } 
  public updateCart = (userName: string) => {
    this.cartItemService.getCartItems(userName).subscribe(
      (res: Cart[]) => {
        if(res) {
          res.forEach((cart) => {
            this.cartService.addToCart(cart);
          })          
        }
    });
  }
  stayOnLoginPage() {
    this.localStorageService.removeItem("User");
    this.loginForm.controls.email.setValue('');
    this.loginForm.controls.password.setValue('');
    document.getElementById("email").focus();
  }
}
