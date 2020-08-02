import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/http/basic-authentication.service';
import * as $ from 'jquery';

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
  //constructor(private router: Router,private hardcodedAS:HardcodedAuthenticationService) {
    constructor(private router: Router,private authenticateService:BasicAuthenticationService) {
   }

  ngOnInit(): void {
    $('button').click(function() { 
      alert('Jqury executed'); 
  }); 
  }

  logonAction(){
    // console.log(this.username)

   // if(this.username==='dinesh' && this.password==='kumar'){
  //  if(this.authenticateService.authenticate(this.username,this.password)){

    if(this.authenticateService.jwtAuthenticate(this.username,this.password)){

    this.router.navigate(['welcome',this.router])
    this.invalidLogin=false
  }
    else{
      alert('invalid');
      this.invalidLogin=true
    }
  }

  handleBasicAuthLogin(){
    // console.log(this.username)

   // if(this.username==='dinesh' && this.password==='kumar'){
   this.authenticateService.authenticate(this.username,this.password).subscribe(
     data=>{
     console.log('data ' +data);
     this.router.navigate(['welcome',this.router]);
     this.invalidLogin=false;
     },
    error=>{
       console.log(error);
       this.invalidLogin=true;
    }
     
   )
    
  }

  
  handleJWTAuthLogin(){
    // console.log(this.username)

   // if(this.username==='dinesh' && this.password==='kumar'){
   this.authenticateService.jwtAuthenticate(this.username,this.password).subscribe(
     data=>{
     console.log('data ' +data);
     this.router.navigate(['welcome',this.router]);
     this.invalidLogin=false;
     },
    error=>{
       console.log(error);
       this.invalidLogin=true;
    }
     
   )
    
  }
}
