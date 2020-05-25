import { Component, OnInit } from '@angular/core';
//import {AppComponent} from '../app.component';

@Component({
  selector: 'app-welcome2',
  templateUrl: './welcome2.component.html',
  styleUrls: ['./welcome2.component.css']
})
export class Welcome2Component implements OnInit {
message : string='Welcome';
  constructor() { }

  ngOnInit(): void {
console.log(this.message);
  }

}
