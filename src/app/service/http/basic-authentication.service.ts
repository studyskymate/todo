import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from 'app.const';

export const TOKEN='authenticatedUser';
export const AUTHENTICATED_USER='token';

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
  return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,{headers:this.createHttpHeaders()}).pipe(
    map(
      data=>{
        sessionStorage.setItem(AUTHENTICATED_USER,username);
        sessionStorage.setItem(TOKEN,this.basicAuthHeaderString());
        return data;
      }
    )
  )
  ;
}


jwtAuthenticate(username , password){
  alert('service executed');
  return this.http.post<any>(`${API_URL}/authenticate`,
  {"username":username,
    "password":password}
  ).pipe(
    map(
      data=>{
        sessionStorage.setItem(AUTHENTICATED_USER,username);
        sessionStorage.setItem(TOKEN,`Bearer ${data.token}`);
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
return sessionStorage.getItem(AUTHENTICATED_USER);
}

getAuthenticatedToken(){
  if(this.getAuthenticatedToken){
  return sessionStorage.getItem(TOKEN);
 }
}

isUserAuthenticated(){
 let user= sessionStorage.getItem(AUTHENTICATED_USER);
 return !(user===null)
}

logout(){
  sessionStorage.removeItem(AUTHENTICATED_USER)
  sessionStorage.removeItem(TOKEN)
}
}


export class AuthenticationBean{
  constructor(
    public message:string){
  }
}