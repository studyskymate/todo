import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'app.const';
import { JobPost } from 'src/app/models/job-post-model';

@Injectable({
  providedIn: 'root'
})
export class JobsServiceService {

  constructor(private http:HttpClient) { }

  fetchAllJobs(){
 return this.http.get <JobPost[]> (`${API_URL}/jobs/findall`);
  }
}
