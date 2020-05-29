import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoDataService } from '../service/data/to-do-data.service';
import { Todo } from '../list-todo/list-todo.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
 id: number;
 todo:Todo;
  constructor(private todoService: ToDoDataService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.todo= new Todo(this.id,'','',false,new Date());

    if(this.id!=-1){
    this.todoService.retrieveTodo('dinesh',this.id).subscribe(
     data=> this.todo=data
    );
     }

  }


  onSave():void{
 if(this.id==-1){
  this.todoService.createTodo('dinesh',this.todo).subscribe(
    data=>{this.router.navigate(['todos'])}
  )
 }else{
    this.todoService.updateTodo('dinesh',this.id,this.todo).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['todos']);
        console.log('routed');
      }
    )
  }
}
}
