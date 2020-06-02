import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean{
  constructor(
    public id:BigInteger,
    public message:string){

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeService(){
    alert('service executed');
    return this.http.get<HelloWorldBean>('http://127.0.0.1:8080/get/message');
    
  }

  executeServiceWithParam(name){
     let basicAuthHeaderString=this.createHttpHeaders();

    let header= new HttpHeaders(
       {
         Authorization :basicAuthHeaderString
       }
     )

    alert('service executed');
    return this.http.get<HelloWorldBean[]>(`http://127.0.0.1:8080/hello-world/path-variable/${name}`,{headers:header});
  }

createHttpHeaders(){
let username='user';
let password='password';
let basicAuthHeaderString= 'Basic '+ window.btoa(username +':'+ password) ;    
return basicAuthHeaderString;
  }
}
