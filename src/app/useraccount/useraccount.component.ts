import { Component, OnInit } from '@angular/core';
import { ToDoDataService } from '../service/data/to-do-data.service';
import { Router, ActivatedRoute } from '@angular/router';



export class UserAccount {
  constructor(

    public id: number,
    public firstname: String,
    public lasttname: String,
    public contactNumber: String,
    public dateOfBirth: Date,
    public email: String,
    public emailNotificationActive: String,
    public gender: String,
    public isActive: String,
    public password: String,
    public registrationDate: Date,
    public smsNotificationActive: String

    
  ) { }
}



@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.css']
})
export class UseraccountComponent implements OnInit {

  user:UserAccount;
  constructor(private todoService: ToDoDataService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
  }

 

  onSave():void{

     this.todoService.saveUser(this.user).subscribe(
       data=>{ //this.router.navigate(['todos'] );
       console.log('added');}
     )
     }
}
