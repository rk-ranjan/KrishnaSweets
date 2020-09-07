import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LoginUser } from '../model/login-user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from './http.service';
import { RegUser } from 'src/app/module/login/models/reg-user';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public checkUserUrl: string;
  public signupUrl: string;
  public headers: HttpHeaders;
  public userName: string;
  public userRole: string;
  public isLogin: boolean;

  constructor(
    private http: HttpService
  ) { 
    this.checkUserUrl = '/rest-api/auth/signin',
    this.signupUrl = '/rest-api/auth/signup',
    this.headers = new HttpHeaders();
    this.headers.set('Content-Type', 'application/json');
  }

  public checkLogin = (user: LoginUser) : Observable<User> => {
    return this.http.post<LoginUser>(this.checkUserUrl, user, this.headers).pipe(
      map((response:User) =>{
        return response;
      })
    )
  }

  public registerUser = (body: RegUser) => {
     return this.http.post<any>(this.signupUrl, body, this.headers).pipe(
       map((res: any) => {
          console.log(res);
     }));
  }

  public getUserName() {
    return this.userName;
  }

  public getUserRole = () => {
    return this.userRole;
  }

 public setLoggedInStatus = () => {
  this.isLogin = true;
 }

 public getLoggedInStatus = () => {
   return this.isLogin;
 }
 
}
