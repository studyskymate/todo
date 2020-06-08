import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient) { 
  }
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
  return this.http.get<AuthenticationBean>(`http://127.0.0.1:8080/basicauth`,{headers:this.createHttpHeaders()}).pipe(
    map(
      data=>{
        sessionStorage.setItem('authenticatedUser',username);
        sessionStorage.setItem('token',this.basicAuthHeaderString());
        return data;
      }
    )
  )
  ;
}

basicAuthHeaderString(){
  let username='user1';
  let password='password1';
  let basicAuthHeaderString= 'Basic '+ window.btoa(username +':'+ password) ;  
  return basicAuthHeaderString;
}

createHttpHeaders(){

  
let header= new HttpHeaders(
{
  Authorization :this.basicAuthHeaderString()
}
)
return header;
}


getAuthenticatedUser(){
return sessionStorage.getItem('authenticatedUser');
}

getAuthenticatedToken(){
  if(this.getAuthenticatedToken){
  return sessionStorage.getItem('token');
 }
}

isUserAuthenticated(){
 let user= sessionStorage.getItem('authenticatedUser');
 return !(user===null)
}

logout(){
  sessionStorage.removeItem('authenticatedUser')
  sessionStorage.removeItem('token')
}
}


export class AuthenticationBean{
  constructor(
    public message:string){
  }
}