import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username , password){
    if(username==='dinesh' && password==='kumar'){
      sessionStorage.setItem('authenticatedUser',username);
      return true;
  }else{
    return false;
  }
}

isUserAuthenticated(){
 let user=sessionStorage.getItem('authenticatedUser');

 return !(user===null)
}

logout(){
  sessionStorage.removeItem('authenticatedUser');
  console.log('removed user');
}
}