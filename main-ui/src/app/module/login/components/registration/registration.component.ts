import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { LoginService } from 'src/app/core/services/login.service';
import { RegUser } from '../../models/reg-user';
import { trim } from 'jquery';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [MessageService]
})
export class RegistrationComponent implements OnInit {

  public regForm: FormGroup;
  public uploadedFiles: any[] = [];
  public firstStep: boolean = true;
  public register: RegUser = new RegUser();
  public data: any;
  public loader: boolean = false;
  public redirectTo: string;
  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    private loginService: LoginService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {
    this.redirectTo = this.route.snapshot.paramMap.get('redirectUrl');
    this.regForm = formBuilder.group({
      fullname: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required,),
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
        this.loader = true;
        this.register.roles = [];
        this.register.fullname = this.regForm.controls.fullname.value;
        this.register.email = this.regForm.controls.email.value;
        this.register.mobile = this.regForm.controls.mobile.value;
        this.register.dob = this.regForm.controls.dob.value;
        // this.register.roles.push('ROLE_USER');
        this.register.roles.push('ROLE_ADMIN');
        this.register.password = trim(this.regForm.controls.password.value);
        this.loginService.registerUser(this.register).subscribe(
          (response: any) => {
            this.messageService.add({severity:'success', summary:'Registrations', detail:'Registered Successfully'});
            setTimeout (() => {
              this.loader = false;
              if (this.redirectTo !== undefined) {
                this.router.navigateByUrl(this.redirectTo);
              } else {
                this.router.navigate(["/"]);
              }
            }, 1000); 
        }, (error:any) => {
           this.messageService.add({severity:'error', summary:'Registrations Failed', detail:error});
        });
    } else {
        this.messageService.add({severity:'error', summary:'Registrations Failed', detail:'Two password are not same'});
        this.stayOnLoginPage();
    }
  }

  public stayOnLoginPage = () => {
     this.regForm.controls.fullname.setValue('');
     this.regForm.controls.email.setValue('');
     this.regForm.controls.mobile.setValue('');
     this.regForm.controls.password.setValue('');
     this.regForm.controls.dob.setValue('');
     this.regForm.controls.confirmPassword.setValue('');
  }
}
