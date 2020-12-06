

import { Observable, empty, throwError, observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpCacheService } from './http-cache.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cacheService: HttpCacheService
    ) { }
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {};
    // headersConfig['Content-Type'] = 'application/json';
    const request = req.clone({ setHeaders: headersConfig });
    if(req.method !== 'GET') {  
      console.log(`Invalidating cache: ${req.method} ${req.url}`);  
      this.cacheService.invalidateCache();  
      return next.handle(req);  
    }  
  
    // attempt to retrieve a cached response  
    const cachedResponse: HttpResponse<any> = this.cacheService.get(req.url);  
    console.log("Checking Cache");
    console.log(cachedResponse);
    // return cached response  
    if (cachedResponse) {  
      console.log(`Returning a cached response: ${cachedResponse.url}`);  
      console.log(cachedResponse);  
      return of(cachedResponse);  
    }  
    return next.handle(request)
    .pipe(
      tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
          }
      }),
      catchError((response) => {
        return throwError(response);
      })
    );
  }
}
