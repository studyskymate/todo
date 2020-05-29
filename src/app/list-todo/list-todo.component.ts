import { Component, OnInit } from '@angular/core';
import { ToDoDataService } from '../service/data/to-do-data.service';
import { Router } from '@angular/router';


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
  msgDelete='';
  constructor(private toDoDataService:ToDoDataService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.refreshTodos();
    
    
  }
  refreshTodos() {
    this.toDoDataService.retrieveAllTodos('dinesh').subscribe(
      response => {this.todos = response;}
    );
  }

deleteTodo(id): void{
this.toDoDataService.deleteTodo('in28minutes',id).subscribe(
  response => { this.msgDelete = 'Record Successfully Deleted with id'+id ,
  this.refreshTodos(); }
)
} 


  updateTodo(id) {
    console.log(`update ${id}`)
    this.router.navigate(['todo',id])
  }
 
  addTodo() {
    this.router.navigate(['todo',-1])
  }
}
