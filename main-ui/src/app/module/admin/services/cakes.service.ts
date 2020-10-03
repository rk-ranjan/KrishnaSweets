import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AddCake } from '../models/add-cake';
import { map } from 'rxjs/operators';
import { AddImages } from '../models/add-images';
import { HttpService } from 'src/app/core/services/http.service';
import * as global from 'src/app/global';

@Injectable({
  providedIn: 'root'
})
export class CakesService {
  public baseUrl: string = global.url;
  public addCakeDetailsUrl: string = 'rest-api/cakes';
  public headers: HttpHeaders;
  constructor(
    private http: HttpService
  ) { 
    this.headers = new HttpHeaders();
    this.headers.set('Content-Type', 'application/json');
  }
  
  public addCakeItemDetails = (data: AddCake): Observable<AddCake> => {
     return this.http.post<AddCake>(this.baseUrl+this.addCakeDetailsUrl, data, this.headers , 'text' as 'json').pipe(
       map((response: any) => {
         return response;
       })
     )
  }

  public addProductImage = (data: any): Observable<AddImages> => {
    this.headers.set('Content-Type', 'application/multipart/form-data');
    return this.http.post<AddImages>(this.baseUrl+this.addCakeDetailsUrl+"/image", data, this.headers, 'text' as 'json').pipe(
      map((response: any) => {
        return response;
    }));
  }
}
