import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService, HelloWorldBean } from '../service/data/welcome-data.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1379/150`);
  name=''
  message=''
  //list=HelloWorldBean[];
  constructor(private route:ActivatedRoute,
    private welcomeDataService :WelcomeDataService
    ) {
 
   }

  ngOnInit(): void {
  this.name= this.route.snapshot.params['name'];
 
  }

  getMessage():void{
   // this.message='Welcome to TODO App'
    console.log(this.welcomeDataService.executeService().subscribe(
      response=>this.handleSuccessfulResponse(response),
      error=>this.handleErrorResponse(error)
    ));
  }

  getMessagewithParam(msg):void{
    // this.message='Welcome to TODO App'
     console.log(this.welcomeDataService.executeServiceWithParam(msg).subscribe(
       response=>this.handleSuccessfulResponse(response),
       error=>this.handleErrorResponse(error)
     ));
   }

  handleErrorResponse(error: any): void {
   // throw new Error("Method not implemented.");
   this.message=error.error.message;
  }

  handleSuccessfulResponse(response){
   console.log('Hii '+response.message);
   alert(response.message);
   this.message=response;

  }

}
