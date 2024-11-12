import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {

  constructor() { }


  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    let token = localStorage.getItem('token')
    console.log(token)

    let jwt_token = req.clone({
      setHeaders:{
        Authorization:'Bearer '+token
      }
    })
    return next.handle(jwt_token);
  }
}
