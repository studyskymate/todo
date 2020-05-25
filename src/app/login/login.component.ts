import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='dinesh'
  password=''
  errorMsg='Invalid credentials'
  invalidLogin=false;
 
  //Router
  //Dependency Injection
  constructor(private router: Router,private hardcodedAS:HardcodedAuthenticationService) {
   }

  ngOnInit(): void {
  }

  logonAction(){
    // console.log(this.username)

   // if(this.username==='dinesh' && this.password==='kumar'){
    if(this.hardcodedAS.authenticate(this.username,this.password)){
    this.router.navigate(['welcome',this.router])
    this.invalidLogin=false
  }
    else{
      alert('invalid');
      this.invalidLogin=true
    }
  }
}
