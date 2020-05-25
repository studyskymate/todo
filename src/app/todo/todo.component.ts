import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoDataService } from '../service/data/to-do-data.service';
import { Todo } from '../list-todo/list-todo.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
 id: number;
 todo:Todo;
  constructor(private todoService: ToDoDataService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.todoService.retrieveTodo('dinesh',this.id).subscribe(
     data=> this.todo=data
    );
  }


  onSave():void{
    
  }
}
