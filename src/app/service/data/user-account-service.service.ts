import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'app.const';
import { UserAccount } from 'src/app/useraccount/useraccount.component';

@Injectable({
  providedIn: 'root'
})
export class UserAccountServiceService {

  constructor(private http:HttpClient) { }

  retrieveUserDetails(username){
    return this.http.get<UserAccount>(`${API_URL}/jpa/jobs/users/fetch/${username}`);
  }



}
