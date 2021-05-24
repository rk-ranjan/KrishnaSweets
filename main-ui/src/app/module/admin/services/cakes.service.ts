import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AddCake } from '../models/add-cake';
import { map } from 'rxjs/operators';
import { AddImages } from '../models/add-images';
import { HttpService } from 'src/app/core/services/http.service';
import * as global from 'src/app/global';
import { ProductType } from '../models/product-type';
import { Category } from '../models/category';

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
     return this.http.post<AddCake>(this.baseUrl + 'rest-api/products', data, this.headers , 'text' as 'json').pipe(
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

  public uploadImageOnServer = (data:any): Observable<any> => {
    this.headers.set('Content-Type', 'application/multipart/form-data');
    return this.http.post<any>(this.baseUrl+"rest-api/files", data, this.headers, 'text' as 'json').pipe(
      map((response: any) => {
        return response;
    }));
  }

  public downloadImageFromServer = (fileName: string): Observable<any> => {
     return this.http.get(this.baseUrl+"downloadFile/"+fileName).pipe(
       map((res: any) =>{
         return res;
       })
     );
  }

  public addProductType = (data: ProductType): Observable<any> => {
    return this.http.post(this.baseUrl + 'rest-api/admin/type', data, this.headers, 'text' as 'json').pipe(
      map((data: ProductType) => {
        return data;
      })
    );
  }

  public getProductTypes = (): Observable<ProductType[]> => {
    return this.http.get(this.baseUrl + 'rest-api/admin/type').pipe(
      map((data: ProductType[]) => {
        return data;
      })
    );
  }
  public addCategory = (data: Category): Observable<Category> => {
    return this.http.post(this.baseUrl + 'rest-api/admin/category', data, this.headers, 'text' as 'json').pipe(
      map((data: Category) => {
        return data;
      })
    );
  }

  public getAllCategory = (): Observable<Category[]> => {
    return this.http.get(this.baseUrl + 'rest-api/admin/category').pipe(
      map((data: Category[]) => {
        return data;
      })
    );
  }

  public getAllProduct = (): Observable<AddCake[]> => {
    return this.http.get(this.baseUrl + 'rest-api/products').pipe(
      map((data: AddCake[]) => {
        return data;
      })
    );
  }

  public deleteProduct = (id: string): Observable<AddCake> => {
    return this.http.delete(this.baseUrl + 'rest-api/products?id=' + id).pipe(
      map((data: AddCake) => {
        return data;
      })
    );
  }

  public updateProduct = (product: AddCake): Observable<AddCake> => {
    return this.http.put(this.baseUrl + 'rest-api/product', product, this.headers).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  public getProductDetails = (id: string): Observable<AddCake> => {
       return this.http.get(this.baseUrl + 'rest-api/products/details?id=' + id).pipe(
         map((data: AddCake) => {
           return data;
         })
       )
  }

}
