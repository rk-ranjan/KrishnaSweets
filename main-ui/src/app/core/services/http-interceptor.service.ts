

import { Observable, empty, throwError, observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {};
    // headersConfig['Content-Type'] = 'application/json';
    const request = req.clone({ setHeaders: headersConfig });
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
