import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  // isUserLoggedIn=false;

  constructor(public hardcodedAuthentication: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  //  this.isUserLoggedIn = this.hardcodedAuthentication.isUserAuthenticated();
  }

}
