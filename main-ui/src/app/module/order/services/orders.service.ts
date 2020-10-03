import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'; 
import { Order } from 'src/app/core/model/order';
import { PlaceOrder } from 'src/app/core/model/place-order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public listOrderUrl: string;
  public deleteOderUrl: string;
  public headers: HttpHeaders;
  constructor(
    private http: HttpService
  ) { 
    this.listOrderUrl = 'http://localhost:8080/rest-api/orders',
    this.deleteOderUrl = 'http://predecode.com:8080/rest-api/orders',
    this.headers = new HttpHeaders();
    this.headers.set('Content-Type', 'application/json');
  }
 /**
   * To get the List of all Orders.
   * @memberof OrdersService
  */
  public getAllOrders = (): Observable<Order[]> => {
    return this.http.get<Order[]>(this.listOrderUrl).pipe(
      map((response: Order[]) => {
        return response;
      }));
  }

  /**
   * To get the List of all Orders.
   * @memberof OrdersService
  */
  public getCustomerOrder = (body: string): Observable<Order[]> => {
    return this.http.get<Order[]>(this.listOrderUrl+'/users?email='+body).pipe(
      map((response: Order[]) => {
        return response;
      }));
  }

  public saveOrder = (order: Order): Observable<any> => {
    return this.http.post<Order>(this.listOrderUrl,order, this.headers, 'text' as 'json').pipe(
      map((res: any) => {
        return res;
      })
    )
  }

  public deleteOrder = (order: Order): Observable<any> => {
    return this.http.delete<any>(this.deleteOderUrl+"?id="+order._id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public updateOrder = (order: Order): Observable<any> => {
    return this.http.put<Order>(this.listOrderUrl, order, this.headers).pipe(
      map((res: any) => {
         return res;
      })
    )
  }
}
