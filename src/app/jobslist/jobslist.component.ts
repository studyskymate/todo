import { Component, OnInit } from '@angular/core';


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
  



  constructor() { }

  ngOnInit(): void {
   
  }

}
