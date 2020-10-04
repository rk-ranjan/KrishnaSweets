import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListCake } from '../models/list-cake';
import { CakeDetails } from './cake-details';
import * as global from 'src/app/global';

@Injectable({
  providedIn: 'root'
})
export class ShowCakesService {
 
  public headers: HttpHeaders;
  public getAllCakesUrl: string = global.url + "rest-api/cakes"
  constructor(
    private https: HttpService
  ) { 
    this.headers = new HttpHeaders();
  }

  public getAllCakes = () : Observable<ListCake[]> => {
     return this.https.get<ListCake[]>(this.getAllCakesUrl).pipe(
       map((response: ListCake[]) => {
         return response;
       })
     )
  }

  public getCakesById = (id: string): Observable<CakeDetails> => {
    return this.https.get<CakeDetails>(this.getAllCakesUrl+"/details?cakeId="+id).pipe(
      map((res: CakeDetails) => {
        return res;
    }))
  }

  public deleteImageById = (id: string): Observable<ListCake> => {
    return this.https.delete<ListCake>(this.getAllCakesUrl+"/deleteImageById?id="+id).pipe(
      map((res: ListCake) => {
        return res;
    }))
  }

  public updateProduct = (product: ListCake): Observable<ListCake> => {
    return this.https.put<ListCake>(this.getAllCakesUrl+"/updateProduct",product).pipe(
      map((res: ListCake) => {
        return res;
    }))
  }

  public deleteProductById = (id: string): Observable<ListCake> => {
    return this.https.delete<ListCake>(this.getAllCakesUrl+"/deleteProductById?id="+id).pipe(
      map((res: ListCake) => {
        return res;
    }))
  }

}
