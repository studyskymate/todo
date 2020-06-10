import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthService : BasicAuthenticationService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //let username = 'user1';
    //let password = 'password1';
    //let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let basicAuthHeaderString = this.basicAuthService.getAuthenticatedToken();
    let username=this.basicAuthService.getAuthenticatedUser();

    console.log(basicAuthHeaderString);
    if(basicAuthHeaderString && username){
    req=req.clone({
      setHeaders: {
        'Authorization': basicAuthHeaderString
      }
    })
  }
    return next.handle(req);
  }
}
   //headers: req.headers.set("Authorization", basicAuthHeaderString)