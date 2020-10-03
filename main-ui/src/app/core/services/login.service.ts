import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LoginUser } from '../model/login-user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from './http.service';
import { RegUser } from 'src/app/module/login/models/reg-user';
import { User } from '../model/user';
import * as global from 'src/app/global';

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
    private http: HttpClient
  ) { 
    this.checkUserUrl = global.url + 'rest-api/auth/signin',
    this.signupUrl = global.url + 'rest-api/auth/signup',
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', 'http://predecode.com:4200');
    this.headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    this.headers.append('Access-Control-Allow-Headers',  'Origin, Content-Type, X-Auth-Token');
  }

  public checkLogin = (body: LoginUser) : Observable<User> => {
    return this.http.post<any>(this.checkUserUrl, body, { headers: this.headers }).pipe(
      map((response:any) =>{
        return response;
      })
    )
  }

  public registerUser = (body: RegUser) => {
     return this.http.post<any>(this.signupUrl, body).pipe(
       map((res: any) => {
          return res;
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
