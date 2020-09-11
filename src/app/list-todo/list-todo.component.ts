import { Component, OnInit } from '@angular/core';
import { ToDoDataService } from '../service/data/to-do-data.service';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/http/basic-authentication.service';



export class Todo {
  constructor(
    public id: number,
    public username: string,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

export class TodoResponse1 {
  public currentPage: number;
  public sortDirection: String;
  public sortField: String;
  public todosList: Array<Todo>;
  public totalItems: number;
  public totalPages: number;
}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

/*
todos = [
  {id: 1, description: 'Learn to Code'},
  {id: 2, description: 'Visit to India'},
  {id: 3, description: 'Create new project'}
]
*/
/*
todos=[
  new Todo(1,'Learn Angular 9',false,new Date()),
  new Todo(1,'Learn Java',false,new Date()),
  new Todo(1,'Learn Spring Boot',false,new Date()),
  new Todo(1,'Learn JPA',false,new Date()),

]
*/

  // todo = {
  //   id: 1,
  //   description: 'Learn to Dance'
  // }
  todos :Todo[];
  todoResponse: TodoResponse1;
  msgDelete='';
  page :number = 1;


  username=sessionStorage.getItem('authenticatedUser');
  //sessionStorage.getItem(BasicAuthenticationService.AUTHENTICATED_USER,BasicAuthenticationService.username);
  constructor(private toDoDataService:ToDoDataService,
    private router:Router
  
    ) {   }

  ngOnInit(): void {
    
   
    this.username=sessionStorage.getItem('authenticatedUser');

/*
    this.todoResponse.sortField='id';
    this.todoResponse.sortDirection='desc';
    this.todoResponse.currentPage=1;
    this.todoResponse.totalItems=2;
   
*/
this.refreshTodos2(1);
  }


  refreshTodos1() {
   
    this.toDoDataService.retrieveAllTodos(sessionStorage.getItem('authenticatedUser')).subscribe(
      response => {this.todos = response;}
    );
  }

  refreshTodos() {
    this.toDoDataService.retrieveUserTodos(sessionStorage.getItem('authenticatedUser'), this.todoResponse.currentPage, this.todoResponse.totalItems, this.todoResponse.sortField, this.todoResponse.sortDirection).subscribe(
      response => {this.todoResponse = response;
        this.todos=response.todosList;
      }
    )
  }
  refreshTodos2(page2:number) {

    //this.page = this.page + 1;

    this.toDoDataService.retrieveUserTodos(sessionStorage.getItem('authenticatedUser'), page2, 3, 'id','desc').subscribe(
      response => {this.todoResponse = response;
        this.page = response.currentPage;
        console.log('res***'+response.sortDirection);
        this.todos=response.todosList;
      }
    )
  }

  getUserTodos(page,pagesize,sortField,sortDirection) {
    this.toDoDataService.retrieveUserTodos(sessionStorage.getItem('authenticatedUser'), page, pagesize, sortField, sortDirection).subscribe(
      response => {this.todoResponse = response;
        this.todos=response.todosList;
      }
    )
  }
  
deleteTodo(username,id): void{
this.toDoDataService.deleteTodo(username,id).subscribe(
  response => { this.msgDelete = 'Record Successfully Deleted with id'+id ;
  console.log("Delete success");
  this.refreshTodos(); }
)
} 


  updateTodo(id) {
    console.log(`update ${id}`)
    this.router.navigate(['todo',id])
  }
 
  addTodo() {
    this.router.navigate(['todo',-1,this.username])
  }
}
