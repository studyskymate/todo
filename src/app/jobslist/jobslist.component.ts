import { Component, OnInit } from '@angular/core';
import { JobPost } from '../models/job-post-model';
import { JobsServiceService } from '../service/data/jobs-service.service';


export class Job{
  public id:BigInteger;
  public title:String;
  public logoUrl:String;
  public type:String;
  public companyName:String;
  public companyAddress:String;
  public salary:String;
}


@Component({
  selector: 'app-jobslist',
  templateUrl: './jobslist.component.html',
  styleUrls: ['./jobslist.component.css']
})
export class JobslistComponent implements OnInit {

  job: Job = {
     id:null,
     title:'Software Engineer',
     logoUrl:'logourl',
     type:'Full Time.aa',
     companyName:'Googless',
     companyAddress:'Street',
     salary:'$50000'
};
  

jobPostList: JobPost[];


  constructor(private jobsServiceService :JobsServiceService) { }

  ngOnInit(): void {
   this.fetchAllJobs();
  }
  

  fetchAllJobs(){
    this.jobsServiceService.fetchAllJobs().subscribe(
      data=>{
        this.jobPostList = data;
        console.log(data.toString);
      }
    )
  }

}
