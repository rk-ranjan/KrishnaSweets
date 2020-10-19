import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http.service';
import * as global from '../../../../app/global';

@Injectable({
  providedIn: 'root'
})
export class SweetsService {
  public baseUrl: string = global.url;
  public addCakeDetailsUrl: string = 'rest-api/cakes';
  public headers: HttpHeaders;
  constructor(
    private http: HttpService
  ) { 
    this.headers = new HttpHeaders();
    this.headers.set('Content-Type', 'application/json');
  }
  
  public getAllSweets = (): Observable<any> => {
     return this.http.get<any>(this.baseUrl+this.addCakeDetailsUrl+'/sweets').pipe(
       map((response: any) => {
         return response;
       })
     )
  }
}
