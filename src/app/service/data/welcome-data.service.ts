import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    alert('service executed');
    return this.http.get<HelloWorldBean[]>(`http://127.0.0.1:8080/get/${name}`);
  }
}
