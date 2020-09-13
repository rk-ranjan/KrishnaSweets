import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from 'src/app/core/services/http.service';
import { Cart } from '../components/models/cart';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItems: Cart[] = [];
  public cartUrl: string;
  public header: HttpHeaders;
  constructor(
    private http: HttpService
  ) {
    this.cartUrl = "http://localhost:8080/rest-api/cart";
    this.header =  new HttpHeaders();
    this.header.append('responseType', 'json');
   }
  
  public getCartItems = (userName: string): Observable<any> => {
    return this.http.get<any>(this.cartUrl+'?id='+userName).pipe(
      map((res: any) => {
        return res;
      })
    )
  }

  public addItemToCart = (cart: Cart): Observable<Cart> => {
     return this.http.post<Cart>(this.cartUrl, cart, this.header).pipe(
       map((response: Cart) => {
         return response;
       })
     )
  }

  public removeItemFromCart = (id: string): Observable<any> => {
    return this.http.delete<Cart>(this.cartUrl+"?_id="+id).pipe(
      map((res: any) => {
        return res;       
      })
    );
  }
}
