import { Component, OnInit } from '@angular/core';
import { ToDoDataService } from '../service/data/to-do-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserAccountServiceService } from '../service/data/user-account-service.service';
import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';
import { FormBuilder, FormGroup } from '@angular/forms';



export class UserAccount {
  constructor(
    public id: number,
    public username: String,
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

  user: UserAccount;
  isButtonVisible: boolean =false;
  edittableButton: boolean =true;
  edittableButtonName :String="Edit It!"
  profileUpdated: string='';

  constructor(private todoService: ToDoDataService,
    private route: ActivatedRoute,
    private router: Router,
    private userAccountServiceService: UserAccountServiceService
   ) { }

   private username :String 
  ngOnInit(): void {
     this.username= sessionStorage.getItem('authenticatedUser')
    this.user = new UserAccount(2001,this.username, 'dinesh', 'kumar', '', null, 'a@email.com', '', '', '', null, null, '');
    this.fetchUserDetails(this.username);

  }


  //url="\assets\images\dk.JPG";
  url = "./assets/images/dk.JPG";

  clickEditButton(){
    this.edittableButton= !this.edittableButton
    this.edittableButtonName= (!this.edittableButton)?'Open For Editing...':'Edit Ptofile' ;
    this.isButtonVisible=!this.isButtonVisible;
    this.profileUpdated='';
  }
 
  fetchUserDetails(username){
    this.todoService.retrieveUserDetails(username).subscribe(
      data=>{
        this.user=data;
        console.log(this.user);
      }
    )
  }


  onUpload(e) {
    if (e.target.files) {

      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }
  }

  onSave(): void {
    this.clickEditButton();
    this.todoService.saveUser(this.user).subscribe(
        data => { //this.router.navigate(['todos'] );
        this.profileUpdated = 'Profile Updated Successfully';
        console.log('added');
      }
    )
  }
}
