import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler){

    let username='user1';
    let password='password1';
    let basicAuthHeaderString = 'Basic '+ window.btoa(username +':'+ password) ;   
    console.log(basicAuthHeaderString);
    req.clone({
   //   setHeaders :{
   //     Authorization : basicAuthHeaderString
   //   }

   headers: req.headers.set("Authorization", basicAuthHeaderString)
  
   
    })

    
    return next.handle(req);
  } 
}
