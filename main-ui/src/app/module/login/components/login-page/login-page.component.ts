
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
import { UserBehaviorService } from 'src/app/core/services/user-behavior.service';


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
  public loading: boolean = true;
  public invalidLoginMessage: boolean = false;
  public loginDetails: LoginUser =  new LoginUser();
  public redirectTo: string;
  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    private loginService: LoginService,
    private localStorageService: LocalStorageService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private cartItemService: CartService,
    private cartService: CartBehavourService,
    private userBehaviorService: UserBehaviorService
  ) {
    this.loginForm = formBuilder.group({
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
    this.redirectTo = this.route.snapshot.paramMap.get('redirectUrl');
  }
  public ngOnInit() {
    this.stayOnLoginPage();
  }
  public ngOnDestroy() {
    // unsubscribe to avoid memory leakage.
  }

  public gotoRegister = () => {
    if (this.redirectTo !== undefined) {
      this.router.navigate(['/signup', {redirectUrl: this.redirectTo}]);
    } else {
      this.router.navigate(['/signup']);
    }
  }

  public login() {
    this.authenticating = true;
    this.loginDetails.email = this.loginForm.controls.email.value;
    this.loginDetails.password = this.loginForm.controls.password.value;
    this.loginService.checkLogin(this.loginDetails).subscribe(
      (res:User) => {
        this.messageService.add({severity:'success', summary:'Login', detail:'Login Successfull'});
        setTimeout (() => {
          const currUser: User = new User();
          this.localStorageService.setItem('userName', res.name);
          this.localStorageService.setItem('email', res.email);
          this.localStorageService.setItem('userRole', res.roles[0]);
          this.localStorageService.setItem('userAccessToken', res.accessToken);
          currUser.accessToken = res.accessToken;
          currUser.email = res.email;
          currUser.id = res.id;
          currUser.name = res.name;
          currUser.roles = res.roles;
          currUser.tokenType = res.tokenType;
          this.userBehaviorService.updatedDataSelection(currUser);
          this.updateCart(res.email);
          if (this.redirectTo) {
            this.router.navigateByUrl(this.redirectTo);
          } else {
            this.router.navigate(['']);
          }
        }, 1000); 
      },
      (error: any) => {
        this.messageService.add({severity:'error', summary:'Login Failed', detail: 'Invalid Login Credentinals'});
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
    document.getElementById("email").focus();
  }
}
