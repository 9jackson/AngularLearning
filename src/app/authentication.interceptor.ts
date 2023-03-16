import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor() {}


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const InterceptorSkipHeader = 'X-Skip-Interceptor';

    if(request.headers.has(InterceptorSkipHeader) )
    {
      const headers = request.headers.delete(InterceptorSkipHeader);
      return next.handle(request.clone({ headers }));
      //return next.handle(request);
   
    }
    //return next.handle(request.clone());
    return next.handle(request.clone({ setHeaders: { authorization: `Bearer ${'TestingJWT'}`  }} ))
    
  }
}
