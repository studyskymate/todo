import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient) { }
/*
  authenticate(username , password){
    if(username==='dinesh' && password==='kumar'){
      sessionStorage.setItem('authenticatedUser',username);
      return true;
  }else{
    return false;
  }
}*/

authenticate(username , password){
  alert('service executed');
  return this.http.get<AuthenticationBean>(`http://127.0.0.1:8080/basicauth`,{headers:this.createHttpHeaders()});
}

createHttpHeaders(){

let username='user1';
let password='password1';
let basicAuthHeaderString= 'Basic '+ window.btoa(username +':'+ password) ;    
let header= new HttpHeaders(
{
  Authorization :basicAuthHeaderString
}
)
return header;
}



isUserAuthenticated(){
 let user= sessionStorage.getItem('authenticatedUser');
 return !(user===null)
}

logout(){
  sessionStorage.removeItem('authenticatedUser')
}
}


export class AuthenticationBean{
  constructor(
    public message:string){
  }
}